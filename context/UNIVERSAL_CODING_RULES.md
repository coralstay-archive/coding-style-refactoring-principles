# 📜 Universal Coding, Refactoring & Testing Guidelines
### (소프트웨어 엔지니어링 9대 명저 기반 범용 AI 어시스턴트 지침)

> **용도**: 이 문서는 Claude Projects, GitHub Copilot, Cursor, Windsurf, ChatGPT 등 다양한 AI 코딩 어시스턴트에 시스템 지침(System Prompt) 또는 컨텍스트(Knowledge)로 주입하여, 모든 개발 작업에서 **코드 품질, 단위 테스트, 리팩터링, 레거시 개선의 표준 원칙**을 준수하도록 강제하는 범용 지침서입니다.

---

## 🛠️ 권장 공식 다국어 런타임 표준 버전 (Standard Polyglot Runtimes)

본 저장소 및 모든 코드 작성/검증 시 아래의 공식 표준 버전을 엄격히 준수합니다:
- **TypeScript**: `TypeScript 7.x` (최신 7.0 릴리즈 타깃, ESNext/ECMAScript 2026, 엄격 모드 `strict: true`)
- **Java**: `Java 25 LTS` (공식 안정화 장기 지원 버전, OpenJDK 25 / 26 런타임 및 현대적 언어 기능 활용)
- **Python**: `Python 3.15.1 / 3.14` (Python.org 공식 최신 안정화 릴리즈, Type Hints 적극 활용)
- **C++**: `C++17 / C++20` (ISO/IEC 14882 표준, Clang++ / G++ 직접 빌드 Fast-Path)

---

## 🏛️ 핵심 원칙 요약 (Golden Rules)

1. **테스트 없는 리팩터링은 도박이다 (No Refactoring Without Tests)**: 동작을 변경하지 않고 설계를 개선하려면 반드시 신뢰할 수 있는 단위 테스트가 선행되어야 한다.
2. **리팩터링 내성을 최우선하라 (Resistance to Refactoring First)**: 구현 세부사항(Private 메서드, 내부 상호작용)을 Mocking하지 마라. 공개 인터페이스와 관찰 가능한 결과(상태 및 출력)를 검증하라.
3. **신속하고 요란하게 실패하라 (Fail-Fast & Loudly)**: 버그를 숨기지 마라. 조용히 널(null)이나 매직값을 반환하여 문제를 뒤로 미루지 말고, 발생 지점에서 즉시 실패하게 하라.
4. **오용하기 어렵게 설계하라 (Make Code Hard to Misuse)**: 불변 객체(Immutability)를 우선하고, 기본형 집착(Primitive Obsession)을 피해 도메인 타입을 사용하며, 생성 시점에 무결성을 보장하라.
5. **레거시 코드는 접합부(Seam)로 공략하라**: 손대기 두려운 거대한 코드는 억지로 전체를 뜯어고치지 말고, 접합부를 찾아 의존성을 끊고 테스트 하네스를 부착한 후 점진적으로 변경하라.

---

## Domain 1. 코드 품질 & 마이크로 설계 (Quality & Contracts)
*(기반 도서: 《Good Code, Bad Code》, 《Code Complete 2》)*

### 1. 명명과 의도 드러내기 (Naming & Intent)
- 이름에 구현 방법이 아닌 **'목적과 비즈니스 의도'**를 담아라.
- 축약어나 애매한 이름(`data`, `info`, `temp`, `flag`)을 지양하고 서술적 이름을 사용하라.
- 주석으로 설명해야 할 이름이라면, 주석을 지우고 함수/변수 이름을 명확하게 다시 지어라.
- 매직 넘버/매직 리터럴은 무조건 의미가 부여된 상수로 추출하라.

### 2. 추상화 계층 (Levels of Abstraction)
- 단일 함수는 단 하나의 추상화 계층만 다루어야 한다 (SLAP: Single Level of Abstraction Principle).
- 비즈니스 오케스트레이션 로직과 저수준 I/O 및 데이터 변환 로직을 같은 함수에 뒤섞지 마라.
- 퍼블릭 인터페이스(API)는 간결하고 명확하게 유지하고 세부 구현 사항을 외부로 노출하지 마라.

### 3. 코드 계약과 오류 처리 (Contracts & Error Handling)
- 호출하는 쪽에서 반드시 알아야 하는 실패는 **명시적 결과 타입(`Result<T, E>`, `Option<T>`, 또는 예외)**으로 반환하라.
- 오류를 은폐(Silent Failure)하지 마라. `try-catch`에서 예외를 잡아서 빈 값을 반환하거나 로깅만 하고 묻어두는 행위는 시스템을 오염시킨다.
- 사전 조건(Preconditions), 사후 조건(Postconditions), 불변식(Invariants)을 명확히 하고, 어서션(Assertion)을 통해 개발 단계에서 계약 위반을 즉각 포착하라.

### 4. 불변성과 오용 방지 (Immutability & Safety)
- 기본적으로 모든 변수, 객체, 매개변수를 불변(`const`, `final`, `readonly`)으로 선언하라.
- 생성자 호출이 끝난 객체는 언제나 완전하고 유효한 상태(Valid State)여야 한다. 불완전한 상태에서 setter를 연속 호출해야만 완성되는 객체 설계를 피하라.
- 문자열이나 정수를 그대로 쓰지 말고 도메인 타입(`UserId`, `Money`, `EmailAddress`)으로 감싸서 타입 시스템을 통한 컴파일 타임 검증을 활용하라.

---

## Domain 2. 단위 테스트 & TDD (Unit Testing & TDD)
*(기반 도서: 《Unit Testing》, 《Test-Driven Development》, 《Pragmatic Unit Testing》)*

### 1. 단위 테스트의 4대 요소 (Vladimir Khorikov)
1. **회귀 방지 (Protection against Regressions)**: 의미 있는 비즈니스 로직과 복잡한 엣지 케이스를 테스트하고 있는가?
2. **리팩터링 내성 (Resistance to Refactoring)**: 코드를 리팩터링했을 때 기능이 정상인데도 테스트가 깨지는 거짓 양성(False Positive)이 없는가?
3. **빠른 피드백 (Fast Feedback)**: 밀리초 단위로 수백, 수천 개의 테스트가 즉시 실행되는가?
4. **유지 보수성 (Maintainability)**: 테스트 코드가 읽기 쉽고 복잡한 설정 코드로 뒤덮여 있지 않은가?

### 2. 고전파(Detroit) vs 런던파(Mockist) 원칙
- **원칙**: 고전파 스타일을 기본으로 채택하라.
- 내부 구현 세부사항(Private 메서드 호출 횟수, 내부 헬퍼 클래스 간 상호작용)을 `verify()`나 `mock`으로 검증하지 마라. 이는 리팩터링 내성을 완전히 파괴한다.
- 목(Mock)은 시스템 경계 끝에 있는 **비관리 의존성(외부 이메일 서버, 서드파티 결제 게이트웨이, 메시지 큐 등 제어할 수 없는 외부 시스템)**에만 제한적으로 사용하라.
- 데이터베이스나 인메모리 상태 등 제어 가능한 관리 의존성은 가급적 실제 인스턴스 또는 테스트 전용 인메모리 상태로 검증하라.

### 3. 테스트 케이스 도출 체크리스트
- **Right-BICEP**:
  - **Right**: 정상적인 입력에 올바른 결과를 내는가?
  - **B (Boundary)**: 모든 경계 조건(최소, 최대, 빈 값, 오버플로)을 검증했는가?
  - **I (Inverse)**: 역관계를 통한 교차 검증(예: 암호화 후 복호화)이 가능한가?
  - **C (Cross-check)**: 다른 알고리즘이나 검증 수단과 일치하는가?
  - **E (Error Conditions)**: 네트워크 단절, 메모리 부족, 비정상 포맷 등 예외 상황을 강제하여 검증했는가?
  - **P (Performance)**: 허용 시간 내에 수행되는가?
- **CORRECT 경계값 원칙**:
  - **C**onformance(형식), **O**rdering(순서), **R**ange(범위), **R**eference(외부 참조), **E**xistence(존재/Null/0), **C**ardinality(0-1-N 법칙), **T**ime(동시성/시간 순서).

### 4. TDD 실천 사이클
- `Red`: 실패하는 테스트를 먼저 작성한다. (이때 인터페이스의 사용 편의성을 평가한다.)
- `Green`: 가장 빠르고 단순한 방법(하드코딩이나 가짜 구현 Fake It 포함)으로 테스트를 통과시킨다.
- `Refactor`: 중복을 제거하고 설계를 다듬는다. 테스트가 초록색인 동안에만 리팩터링한다.

---

## Domain 3. 리팩터링 메커니즘 (Refactoring Mechanics)
*(기반 도서: 《Refactoring 2nd Edition》)*

### 1. 24개 코드 악취(Code Smells) 감지 즉시 조치
- **긴 함수 (Long Function)** ➔ `함수 추출하기 (Extract Function)`
- **중복 코드 (Duplicated Code)** ➔ `함수 추출하기`, `문장 슬라이드하기`, `메서드 올리기`
- **긴 매개변수 목록 (Long Parameter List)** ➔ `매개변수 객체 만들기 (Introduce Parameter Object)`
- **기본형 집착 (Primitive Obsession)** ➔ `기본형을 객체로 바꾸기 (Replace Primitive with Object)`
- **반복되는 switch문** ➔ `조건부 로직을 다형성으로 바꾸기 (Replace Conditional with Polymorphism)`
- **기능 편애 (Feature Envy)** ➔ `함수 옮기기 (Move Function)`
- **데이터 뭉치 (Data Clumps)** ➔ `클래스 추출하기 (Extract Class)`
- **중첩된 조건문** ➔ `중첩 조건문을 보호 구문으로 바꾸기 (Replace Nested Conditional with Guard Clauses)`

### 2. 리팩터링 실행의 황금률
- **기능 추가 모자와 리팩터링 모자를 동시에 쓰지 마라**: 새 기능을 추가하면서 리팩터링을 섞어 하지 마라. 리팩터링 중에는 코드가 동작하는 방식만 바꾸고 기능은 1바이트도 추가하지 마라.
- **아주 작은 단계(Baby Steps)로 진행하라**: 컴파일과 단위 테스트가 항상 통과하는 상태를 유지하며 1~2분 단위로 커밋/검증하라.

---

## Domain 4. 패턴 진화 & 레거시 개선 (Patterns & Legacy)
*(기반 도서: 《Refactoring to Patterns》, 《Working Effectively with Legacy Code》)*

### 1. 패턴을 향한 점진적 리팩터링 (Evolutionary Design)
- 처음부터 디자인 패턴을 전제로 코드를 복잡하게 만들지 마라 (과도한 엔지니어링 경계).
- 단순한 조건문으로 시작하되, 변경 요구사항이 누적되고 악취가 심해질 때 `Refactoring to Patterns`를 적용하라:
  - 다형적 생성이 필요해질 때: `생성자를 팩터리 메서드로 대체`
  - 알고리즘 분기가 늘어날 때: `조건문을 Strategy 패턴으로 대체`
  - 상태 전이가 복잡해질 때: `조건문을 State 패턴으로 대체`
  - 더 이상 필요 없어진 패턴은 과감히 인라인하여 단순화하라 (`Refactoring Away from Patterns`).

### 2. 레거시 코드 개선 전략 (Michael Feathers)
- **접합부(Seam) 식별**: 소스 코드를 직접 수정하지 않고도 동작을 변경하거나 테스트 대역을 끼워 넣을 수 있는 지점을 찾아라 (객체 지향 접합, 링크 접합 등).
- **의존성 분리 기법**:
  - `서브클래스화 및 메서드 재정의 (Subclass and Override)`: 테스트하기 어려운 전역 함수/하드웨어 호출을 가상 메서드로 추출하고, 테스트용 서브클래스에서 재정의하라.
  - `인터페이스 추출 (Extract Interface)`: 구체 클래스에 강하게 결합된 의존성을 가벼운 인터페이스로 분리하라.
- **안전한 변경 기법**:
  - `신규 메서드/클래스 발아 (Sprout Method / Sprout Class)`: 기존 레거시 함수를 건드리지 않고, 새로 추가되는 로직을 새로운 순수 함수/클래스로 작성하여 TDD로 검증한 후 기존 코드에서 호출만 연결하라.
  - `감싸기 메서드/클래스 (Wrap Method / Wrap Class)`: 기존 메서드를 래핑하여 사전/사후 동작을 덧붙여 기존 로직의 손상을 원천 차단하라.
