# ⚡ Coding-Style, Refactoring & Testing Principles 빠른 치트시트 (Cheat Sheet)

> "무엇을 실행해야 할지, 어떤 테스트 원리를 적용할지, 리팩터링을 해야 할지 말아야 할지 헷갈릴 때 열어보는 1장 요약 치트시트"

---

## 📌 목차 (Index)
1. [🛠️ CLI 도구 및 실습 명령어 치트시트](#1-️-cli-도구-및-실습-명령어-치트시트)
2. [🧪 테스트 상황별 스타일 & 기억법 치트시트](#2--테스트-상황별-스타일--기억법-치트시트)
3. [⚖️ 리팩터링 트레이드오프 의사결정 치트시트](#3-️-리팩터링-트레이드오프-의사결정-치트시트)
4. [📚 9대 명저 501개 카타 트랙 경로 치트시트](#4--9대-명저-501개-카타-트랙-경로-치트시트)
5. [🌐 다국어 네이티브 런타임 표준 치트시트](#5--다국어-네이티브-런타임-표준-치트시트)

---

## 1. 🛠️ CLI 도구 및 실습 명령어 치트시트

| 목적 | 터미널 명령어 | 설명 및 옵션 |
|:---|:---|:---|
| 위치 색인 | `./scripts/locate.sh <키워드>` | 키워드로 501개 카타 중 관련 도서/장/절/원서페이지 실시간 검색 |
| 목차 트리 | `./scripts/locate.sh --tree [도서ID]` | 9대 명저 전체 목차 트리 또는 특정 도서(`content01`~`content09`) 목차 조회 |
| 단독 실행 | `./scripts/run.sh <카타경로>` | `main.*` 단독 0.1초 고속 빌드 및 콘솔 출력 확인 (다국어 자동감지) |
| 단위 검증 | `./scripts/test.sh <카타경로>` | `test.*` Fast-path 단위 테스트 0.1초 자동 검증 (`[ PASS ]` 확인) |
| 스니펫 상태 | `./scripts/snippets.sh --status` | 명품 스니펫 사람 검증 상태 대시보드 (🟢 `VERIFIED`, 🟡 `PENDING`, 🔴 `OUTDATED`) |
| 스니펫 승인 | `./scripts/snippets.sh --verify <ID>` | 사람이 직접 검증 완료 승인 및 SHA-256 해시 고정 (`--reviewer "이름"`) |
| 스니펫 내보내기| `./scripts/snippets.sh --export` | `tips/snippets.md` 마크다운 문서 및 레지스트리 자동 갱신 |
| 원클릭 동기화| `./scripts/sync_all.sh` | 메타데이터(1,301개 노드), 목차, 스니펫, 268개 예제 전수 검증 일괄 실행 |
| 도움말 치트시트| `./scripts/help.sh` | CLI 사용법 대화형 안내 콘솔 출력 |

---

## 2. 🧪 테스트 상황별 스타일 & 기억법 치트시트

### 🎯 상황별 단위 테스트 3대 스타일 선택 기준
```text
출력 기반 (Output-based)  >  상태 기반 (State-based)  >  통신 기반 (Communication-based)
[리팩터링 내성 최고 / 부수효과 0%]    [제약 조건 검증 / 상태 캡슐화]      [외부 I/O 시스템 경계 / Mock CQS]
```

- 출력 기반 테스트 (최우선): 입력을 넣고 반환값만 검증. 부수 효과가 없는 순수 함수에 적용. 리팩터링 내성이 가장 우수함.
- 상태 기반 테스트: 실행 후 객체의 관찰 가능한 최종 상태 단언. private 필드를 노출하지 말고 공개 API로 상태 확인.
- 통신 기반 테스트 (CQS Mock): 비관리 의존성(외부 결제 API, 메시지 큐 등)에만 제한적 적용.
  - Command(명령): 부수 효과가 있으므로 `Mock.verify()`로 호출 여부 검증.
  - Query(질의): 부수 효과가 없으므로 `Stub`으로 데이터만 제공하고, 호출 여부 단언은 절대 금지(과결합 방지).

### 🧠 단위 테스트 핵심 기억법
- FIRST 원칙: Fast (0.01초 고속), Isolated (테스트 격리), Repeatable (반복 가능), Self-validating (자체 단언 검증), Timely (적시성).
- Right-BICEP 경계 테스트:
  - Right: 결과가 올바른가?
  - Boundary: 모든 경계 조건(CORRECT)을 다루었는가?
  - Inverse: 역관계를 적용해 보았는가? (암호화 ⟷ 복호화)
  - Cross-check: 다른 수단이나 알고리즘과 교차 검사했는가?
  - Error: 강제로 오류 조건(Crash Dummy)을 유발해 보았는가?
  - Performance: 성능 특성이 한도 내에 있는가?
- CORRECT 경계값 점검 체크리스트:
  - Conformance (포맷 준수 여부)
  - Ordering (정렬 및 순서 조건)
  - Range (허용 범위 최소/최대)
  - Reference (외부 의존성 및 상태 참조)
  - Existence (존재 여부: null, undefined, 빈 문자열)
  - Cardinality (기수성: 0개, 1개, N개 원소)
  - Time (시간 경과, 동시성, 타임아웃)

---

## 3. ⚖️ 리팩터링 트레이드오프 의사결정 치트시트

| 리팩터링 기법 | 반대 기법 | ✅ 언제 적용할 것인가? (When to Use) | ❌ 언제 멈추거나 인라인할 것인가? (When NOT to Use) |
|:---|:---|:---|:---|
| 함수 추출 *(Extract Function)* | 함수 인라인 *(Inline)* | 코드 블록의 의도 파악에 주석이 필요하거나 6줄 이상 복잡할 때 | 본문이 `return order.price > 1000;`처럼 이름보다 단순하거나 단순 위임만 할 때 |
| 임시 변수를 질의로 바꾸기 *(Replace Temp with Query)* | 질의를 변수로 바꾸기 | 임시 변수 계산 결과가 여러 메서드에서 반복 참조될 때 | 계산 비용이 매우 큰 I/O 작업이거나 루프 내 수만 번 호출되는 성능 임계 구역 |
| 서브클래스를 위임으로 바꾸기 *(Replace Subclass with Delegate)* | 위임을 서브클래스로 | 다중 관점(결제별, 배송별) 조합 폭발 및 런타임 동적 전략 교체가 필요할 때 | 부모-자식이 명확한 'is-a' 관계이고 런타임 상태 전이나 확장이 전혀 없을 때 |
| 조건부 로직을 다형성으로 *(Replace Conditional with Polymorphism)* | 다형성을 조건문으로 | 동일 switch 분기가 여러 함수에 반복되고 신규 타입 추가가 빈번할 때 | 분기 조건이 단 2개(예: VIP 여부)뿐이고 고정되어 있거나 단순 팩터리 내부일 때 |
| 위임 숨기기 *(Hide Delegate)* | 중개자 제거하기 *(Remove Middle Man)* | 클라이언트가 내부 체인(`a.getB().getC()`)을 알지 못하게 결합도를 낮출 때 | 클래스가 단순히 위임 메서드를 수십 개씩 앵무새처럼 중계만 하고 있을 때 |
| 컬렉션 캡슐화 *(Encapsulate Collection)* | 원본 컬렉션 직접 노출 | 외부에서 컬렉션을 직접 수정(`add`/`remove`)하여 제약 조건을 깨는 사고를 막을 때 | 1회성 단순 DTO이거나 대규모 스트리밍 데이터 파이프라인일 때 |
| 접합부 추출 *(Extract Interface/Seam)* | 구체 클래스 결합 | 외부 I/O(DB, 하드웨어) 때문에 단위 테스트 환경 구성이 불가능할 때 | 충분히 안정적이고 부수 효과가 없는 순수 내부 도메인 연산 객체일 때 |
| 생성자를 팩터리로 바꾸기 *(Replace Constructor with Factory)* | 직접 생성자 호출 | 매개변수만으로 생성 의도를 알기 어렵거나 하위 다형 타입을 분기 반환할 때 | 순수 읽기 전용 값 객체(Value Object)이거나 생성 로직에 분기가 전혀 없을 때 |

---

## 4. 📚 9대 명저 501개 카타 트랙 경로 치트시트

| 도서명 / 트랙 | 주 언어 | 대표 실습 카타 경로 |
|:---|:---:|:---|
| Book 01: Code Complete 2판 | `C++17` | `tracks/01_code_complete/01_welcome_to_construction/01_core_example`<br>`tracks/01_code_complete/15_using_conditionals/01_guard_clauses` |
| Book 02: 굿 코드, 배드 코드 | `TypeScript` | `tracks/02_good_code_bad_code/01_code_quality/01_core_example`<br>`tracks/02_good_code_bad_code/07_hard_to_misuse/03_immutable_value_objects` |
| Book 03: 리팩터링 2판 | `TypeScript` | `tracks/03_refactoring_2nd/06_basic_refactorings/01_extract_function`<br>`tracks/03_refactoring_2nd/10_simplifying_conditionals/02_replace_nested_conditional_with_guard_clauses` |
| Book 04: 패턴을 활용한 리팩터링 | `Java 25` | `tracks/04_refactoring_to_patterns/06_creation_patterns/01_creation_method`<br>`tracks/04_refactoring_to_patterns/07_simplification/02_replace_with_strategy` |
| Book 05: 레거시 코드 활용 전략 | `C++17` | `tracks/05_legacy_code/03_seams/01_core_example`<br>`tracks/05_legacy_code/25_dependency_breaking_techniques/01_extract_and_override_method` |
| Book 06: 테스트 주도 개발 (TDD) | `Java & Python` | `tracks/06_tdd/01_multi_currency/01_core_example` (Java)<br>`tracks/06_tdd/18_first_steps_to_xunit/01_core_example` (Python) |
| Book 07: 단위 테스트 | `TypeScript` | `tracks/07_unit_testing/04_pillars_of_good_test/01_core_example`<br>`tracks/07_unit_testing/05_mocks_and_stubs/01_cqs_mock_vs_stub` |
| Book 08: 실용주의 단위 테스트 | `Java 25` | `tracks/08_pragmatic_unit_testing/06_right_bicep/bicep_01_right_results`<br>`tracks/08_pragmatic_unit_testing/07_right_bicep/bicep_02_inverse_relationships` |
| Book 09: JUnit in Action 3판 | `Java 25` | `tracks/09_junit_in_action/02_core_annotations/01_lifecycle_hooks`<br>`tracks/09_junit_in_action/03_parameterized_tests/01_csv_source_parameterized` |

---

## 5. 🌐 다국어 네이티브 런타임 표준 치트시트

| 언어 | 표준 버전 | 타깃 런타임 환경 | 컴파일 및 단독 실행 명령 | 단위 테스트 실행 명령 |
|:---:|:---|:---|:---|:---|
| TypeScript | `TypeScript 7.x` | `Node.js (LTS)` & `ts-node` | `./scripts/run.sh <경로>` | `./scripts/test.sh <경로>` |
| Java | `Java 25 LTS` | `/opt/homebrew/opt/openjdk/bin/javac` | `./scripts/run.sh <경로>` | `./scripts/test.sh <경로>` |
| Python | `Python 3.15.1 / 3.14` | `python3` (공식 최신 안정화) | `./scripts/run.sh <경로>` | `./scripts/test.sh <경로>` |
| C++ | `C++17 / C++20` | `Apple Clang++ / GCC g++` | `./scripts/run.sh <경로>` | `./scripts/test.sh <경로>` |
| GraalVM | 완전 배제 (0%) | 네이티브 JVM 직접 디스패치 | 의존성 0% | 의존성 0% |
