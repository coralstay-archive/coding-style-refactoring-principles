#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
🧪 테스트 적용 원리 & 리팩터링 트레이드오프 마스터 메타데이터 생성기
(Testing Principles & Refactoring Trade-offs Master Metadata Engine)

목적:
1. 공식 표준 언어 버전(TypeScript 7.x, Java 25 LTS, Python 3.15.1/3.14, C++17/20)을 명시.
2. 테스트 도서 4선(TDD, Unit Testing, Pragmatic, JUnit in Action)의 장/절 인덱스, 요약문, 상황별 적용 원리를 메타데이터화.
3. 리팩터링 도서 3선(Refactoring 2nd, Refactoring to Patterns, Legacy Code)의 핵심 기법별 상충 관계(Trade-offs),
   적용 상황(When to Use)과 금기 상황(When NOT to Use)을 체계적으로 분류하여 정형화.
"""

import datetime
import json
import os
import sys

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUTPUT_JSON_PATH = os.path.join(REPO_ROOT, "docs", "TESTING_AND_REFACTORING_METADATA.json")
OUTPUT_MD_PATH = os.path.join(REPO_ROOT, "docs", "TESTING_AND_REFACTORING_METADATA.md")

# ==============================================================================
# 1. 공식 다국어 런타임 표준 버전 정의
# ==============================================================================
STANDARD_LANGUAGE_VERSIONS = {
    "typescript": {
        "version": "TypeScript 7.x",
        "target": "ESNext / ECMAScript 2026",
        "runtime": "Node.js (LTS) & ts-node --transpile-only",
        "description": "최신 7.0 릴리즈 타깃, 엄격 모드(strict: true), 불변 타입 및 최신 ECMAScript 기능 지원"
    },
    "java": {
        "version": "Java 25 LTS",
        "target": "Java 25 / OpenJDK 25 (OpenJDK 26 런타임 호환)",
        "runtime": "/opt/homebrew/opt/openjdk/bin/javac & java",
        "description": "공식 안정화 장기 지원(LTS) 버전, 가상 스레드(Project Loom), 패턴 매칭, 레코드 패턴 표준 활용"
    },
    "python": {
        "version": "Python 3.15.1 / 3.14",
        "target": "Python.org 공식 최신 안정화 릴리즈",
        "runtime": "python3 (3.14 / 3.15)",
        "description": "Python.org 공식 최신 릴리즈, JIT 컴파일 최적화, 정적 타입 힌팅(PEP 484/585/604) 표준 준수"
    },
    "cpp": {
        "version": "C++17 / C++20",
        "target": "ISO/IEC 14882:2017 & 2020",
        "runtime": "Apple Clang++ / GCC g++ (-std=c++17 / -std=c++20)",
        "description": "구조화된 바인딩, string_view, constexpr if, 스마트 포인터 기반 자원 안전성 보장"
    }
}

# ==============================================================================
# 2. 테스트 관련 도서별 인덱스 & 절별 요약문 & 상황별 적용 원리
# ==============================================================================
TESTING_PRINCIPLES_METADATA = [
    {
        "book_id": "content06",
        "title_ko": "테스트 주도 개발 (Test-Driven Development: By Example)",
        "author": "켄트 벡 (Kent Beck)",
        "primary_language": "Java & Python",
        "core_philosophy": "작동하는 깔끔한 코드(Clean Code That Works)를 위한 Red-Green-Refactor 사이클과 두려움을 지배하는 테스트",
        "chapters": [
            {
                "ch_num": "Part 1 (Ch 1~17)",
                "title": "화폐 예제 (The Money Example) - Java 다중 통화",
                "summary": "서로 다른 통화($5 + 10 CHF = $10)를 계산하는 과정에서 Fake It, 삼각측량법, Expression 다형성 객체를 도출하는 고전적 TDD 여정.",
                "applicable_context": "새로운 비즈니스 도메인을 처음 설계하거나, 요구사항이 점진적으로 구체화될 때.",
                "core_principles": [
                    "할 일 목록(Test List)을 종이에 적고 하나씩 체크하며 몰입 유지",
                    "빨강(컴파일 오류/실패) ➔ 초록(가장 빠른 성공) ➔ 리팩터링(중복 제거)의 엄격한 3단계 준수",
                    "초록 막대를 보기 위해서는 상수 반환 등 어떤 임시 죄악도 허용"
                ],
                "decision_criteria": "알고리즘의 형태가 모호할 때는 가짜 구현(Fake It)으로 시작하고, 둘 이상의 예제가 쌓이면 삼각측량(Triangulation)으로 일반화하라."
            },
            {
                "ch_num": "Part 2 (Ch 18~24)",
                "title": "xUnit 예시 (xUnit by Example) - Python 프레임워크 자체 제작",
                "summary": "TestCase, WasRun(테스트 스파이), setUp/tearDown 픽스처, TestResult, TestSuite(컴포지트 패턴)를 100라인의 파이썬 코드로 부트스트랩 구축.",
                "applicable_context": "단위 테스트 프레임워크의 내부 동작 메커니즘을 이해하고, 격리된 실행 환경을 직접 제어해야 할 때.",
                "core_principles": [
                    "테스트 격리: 각 테스트 메서드는 완전히 새로운 픽스처 인스턴스에서 독립 실행",
                    "로그 문자열(Log String): 메서드 호출 순서(setUp ➔ run ➔ tearDown)를 문자열로 기록하여 상태 전이 검증",
                    "TestSuite 컴포지트: 단일 테스트와 복합 테스트 스위트를 동일한 run(result) 인터페이스로 일원화"
                ],
                "decision_criteria": "테스트 러너나 픽스처의 상태 오염이 의심될 때는 프레임워크 수준의 격리 메커니즘을 점검하라."
            },
            {
                "ch_num": "Part 3 (Ch 25~32)",
                "title": "테스트 주도 개발의 패턴 (TDD Patterns)",
                "summary": "테스트 목록, 단언 우선, 명백한 데이터, 셀프 션트, 크래시 더미, 값 객체, 널 객체, 단계의 크기 등 56개 TDD 실전 패턴 카탈로그.",
                "applicable_context": "테스트 작성 중 막히거나, 단계를 얼마나 잘게 쪼개야 할지 판단이 서지 않을 때.",
                "core_principles": [
                    "단언 우선 (Assert First): 테스트를 작성할 때 맨 끝의 assert문부터 역산하여 입력값 작성",
                    "셀프 션트 (Self Shunt): 테스트 클래스 자신이 리스너 인터페이스를 구현하여 별도 목 없이 이벤트 검증",
                    "크래시 더미 (Crash Dummy): I/O 예외 발생 상황을 강제 유발하는 가짜 객체로 예외 처리 경로 검증"
                ],
                "decision_criteria": "테스트 데이터는 매직 넘버(86400) 대신 계산식(24 * 60 * 60)을 코드에 직접 드러내는 '명백한 데이터(Evident Data)'를 사용하라."
            }
        ]
    },
    {
        "book_id": "content07",
        "title_ko": "단위 테스트 (Unit Testing: Principles, Practices, and Patterns)",
        "author": "블라디미르 코리코프 (Vladimir Khorikov)",
        "primary_language": "TypeScript",
        "core_philosophy": "단위 테스트의 진정한 목표는 소프트웨어의 지속 가능한 성장이며, 리팩터링 내성을 갖춘 가치 있는 테스트만이 존재 가치가 있다.",
        "chapters": [
            {
                "ch_num": "Chapter 04",
                "title": "좋은 단위 테스트의 4대 요소 (The 4 Pillars of a Good Unit Test)",
                "summary": "1) 회귀 방지, 2) 리팩터링 내성, 3) 빠른 피드백, 4) 유지 보수성. 특히 리팩터링 내성은 타협할 수 없는 온/오프(Binary) 속성임.",
                "applicable_context": "테스트 스위트가 점점 느려지거나, 코드 수정 때마다 거짓 양성(False Positive)으로 테스트가 깨져 개발자를 방해할 때.",
                "core_principles": [
                    "거짓 양성(False Positive)은 테스트에 대한 신뢰를 갉아먹는 최대의 적이다.",
                    "구현 세부사항(Private 메서드, 내부 호출)과 테스트를 결합하지 말고 관찰 가능한 최종 결과(식별할 수 있는 동작)만 검증하라.",
                    "테스트 점수 = 회귀 방지 × 리팩터링 내성 × 빠른 피드백 × 유지 보수성 (어느 하나가 0이면 가치는 0)"
                ],
                "decision_criteria": "리팩터링 내성을 최대로 확보하려면 구현 세부사항 검증을 일절 배제하고 최종 출력값과 영속화된 상태만을 단언하라."
            },
            {
                "ch_num": "Chapter 05 & 09",
                "title": "모의 객체와 취약성 & 모범 사례 (Mocks, Stubs & CQS)",
                "summary": "Mock(명령 검증)과 Stub(질의 데이터 제공)을 엄격히 구분하고, 프로세스 외부 의존성 중 관리 의존성(DB)과 비관리 의존성(외부 API)의 차이를 규정.",
                "applicable_context": "외부 서비스, 데이터베이스, 이메일 발송 등 프로세스 외부 의존성이 있는 협력 객체를 테스트할 때.",
                "core_principles": [
                    "CQS 원칙: 부수 효과를 유발하는 명령(Command)만 Mock으로 상호작용을 검증하고, 단순 질의(Query)는 Stub으로 값을 주입하라.",
                    "관리 의존성(데이터베이스 등)은 Mocking하지 말고 통합 테스트에서 실제 DB 컨테이너로 검증하라.",
                    "비관리 의존성(외부 결제 API, 메시지 브로커 등)의 최종 시스템 경계에서만 Mock을 사용하라."
                ],
                "decision_criteria": "Stub에 대해 verify()/called() 단언을 수행하는 것은 구현 세부사항과의 과결합을 초래하는 안티패턴이므로 절대 금지한다."
            },
            {
                "ch_num": "Chapter 06 & 07",
                "title": "단위 테스트 3대 스타일과 험블 객체 (Testing Styles & Humble Object)",
                "summary": "출력 기반(Output) > 상태 기반(State) > 통신 기반(Communication) 순으로 리팩터링 내성이 우수함. 험블 객체를 통해 비즈니스 로직과 외부 I/O를 분리.",
                "applicable_context": "도메인 로직이 외부 통신이나 프레임워크와 심하게 얽혀 있어 단위 테스트 작성이 극도로 어려울 때.",
                "core_principles": [
                    "출력 기반 테스트(순수 함수 검증)는 부수 효과가 없고 전역 상태를 오염시키지 않으므로 유지보수성이 최고다.",
                    "험블 객체(Humble Object): I/O를 담당하는 껍데기(컨트롤러)는 매우 얇게 유지하고, 모든 의사결정 로직을 순수한 도메인 모델로 몰아넣어라."
                ],
                "decision_criteria": "가능한 모든 비즈니스 로직을 '입력을 받아 출력을 내는 순수 함수'로 리팩터링하여 100% 출력 기반 테스트로 감싸라."
            },
            {
                "ch_num": "Chapter 11",
                "title": "단위 테스트 안티패턴 (Unit Testing Anti-Patterns)",
                "summary": "비공개 메서드 직접 테스트, 비공개 상태 노출, 시간 의존성 누수, 구체 클래스 목 등 테스트를 망치는 대표적 악취 진단 및 해결책.",
                "applicable_context": "단위 테스트 작성을 위해 클래스의 private 필드를 public으로 열고 싶어질 때.",
                "core_principles": [
                    "비공개 메서드를 테스트하고 싶다면, 그 메서드가 독립된 책임을 가지고 있다는 신호이므로 새 클래스로 추출하라.",
                    "DateTimeProvider 인터페이스를 주입하여 `new Date()`나 시스템 시계 의존성으로 인한 Flaky Test를 원천 차단하라."
                ],
                "decision_criteria": "테스트 편의를 위해 클래스의 캡슐화를 깨뜨리지 말고, 공개 API의 관찰 가능한 동작으로 간접 검증하라."
            }
        ]
    },
    {
        "book_id": "content08",
        "title_ko": "자바와 JUnit을 활용한 실용주의 단위 테스트 (Pragmatic Unit Testing in Java 8 with JUnit)",
        "author": "제프 랭어 (Jeff Langr)",
        "primary_language": "Java",
        "core_philosophy": "기억법(Right-BICEP, CORRECT, FIRST)을 통해 단위 테스트의 사각지대를 체계적으로 메우고 결함을 예방하는 실전 지침",
        "chapters": [
            {
                "ch_num": "Chapter 05",
                "title": "좋은 테스트의 FIRST 원칙 (FIRST Principles)",
                "summary": "Fast(빠르게 0.01초), Isolated(독립/격리), Repeatable(언제나 동일한 결과), Self-validating(자체 검증), Timely(적시성).",
                "applicable_context": "테스트 스위트의 품질 지표를 점검하고 테스트 실행 문화의 가이드라인을 세울 때.",
                "core_principles": [
                    "Isolated: 테스트 A의 실행 여부나 순서가 테스트 B에 영향을 미치지 않아야 한다.",
                    "Repeatable: 환경(네트워크, 날짜, 개발자 로컬 PC, CI 서버)에 구애받지 않고 언제 실행해도 동일하게 PASS해야 한다.",
                    "Self-validating: 테스트 결과를 사람이 로그로 눈으로 확인하지 않고 assert가 100% 자동 판단해야 한다."
                ],
                "decision_criteria": "테스트 실행 순서를 바꿨을 때 실패하는 테스트가 있다면 공유 정적 상태를 즉시 격리하라."
            },
            {
                "ch_num": "Chapter 06",
                "title": "무엇을 테스트할 것인가: Right-BICEP",
                "summary": "[Right] 결과가 올바른가? [B] 경계 조건(Boundary), [I] 역관계(Inverse), [C] 교차 검사(Cross-check), [E] 에러 조건 강제(Error), [P] 성능(Performance).",
                "applicable_context": "Happy Path 테스트만 작성하고 끝내려는 유혹에 빠졌을 때 사각지대를 탐색하는 체크리스트.",
                "core_principles": [
                    "B (Boundary): 인덱스 0, 컬렉션의 첫 번째/마지막 원소, 허용 최대/최소값 경계 집중 검증",
                    "I (Inverse): 역연산을 통해 교차 검증 (예: 암호화한 데이터를 복호화하면 원본과 일치해야 함)",
                    "C (Cross-check): 새로 작성한 알고리즘 결과를 신뢰할 수 있는 다른 표준 라이브러리 결과와 비교",
                    "E (Error conditions): 디스크 풀, 메모리 부족, 비정상 인코딩 등 비정상 상황 강제 유발"
                ],
                "decision_criteria": "핵심 계산 로직을 구현한 후에는 최소 1개 이상의 경계 조건(B)과 역관계(I) 테스트를 필수로 추가하라."
            },
            {
                "ch_num": "Chapter 07",
                "title": "경계 조건의 완전망라: CORRECT 기억법",
                "summary": "[C] Conformance(일치성), [O] Ordering(순서), [R] Range(범위), [R] Reference(참조), [E] Existence(존재), [C] Cardinality(기수: 0-1-N), [T] Time(시간).",
                "applicable_context": "메서드의 입력 파라미터 유효성 검사 및 방어적 프로그래밍 테스트 케이스를 설계할 때.",
                "core_principles": [
                    "Conformance: 이메일, 전화번호 등 정규 포맷 규칙을 준수하는가?",
                    "Ordering: 정렬된 상태, 역순, 뒤섞인 순서에서도 비즈니스 규칙이 안전한가?",
                    "Range: 0세 이하 나이, 음수 각도, 100% 초과 확률 등 비정상 범위 방어",
                    "Cardinality: 원소가 0개일 때, 정확히 1개일 때, N개일 때의 울타리 기둥 오류(Fencepost) 검증",
                    "Time: 상대적 순서, 타임아웃, 동시 다발적 요청"
                ],
                "decision_criteria": "컬렉션을 다루는 모든 메서드는 0개(Empty), 1개(Single), N개(Many) 3가지 기수 테스트를 세트로 작성하라."
            }
        ]
    },
    {
        "book_id": "content09",
        "title_ko": "JUnit in Action 3판 (JUnit in Action, 3rd Edition)",
        "author": "카탈린 투도세 (Cătălin Tudose)",
        "primary_language": "Java",
        "core_philosophy": "JUnit 5 생태계의 현대적 확장 모델, 파라미터화/동적 테스트 및 엔터프라이즈 통합 테스트 피라미드 완결",
        "chapters": [
            {
                "ch_num": "Chapter 06",
                "title": "파라미터화 및 동적 테스트 (Parameterized & Dynamic Tests)",
                "summary": "@ParameterizedTest(@ValueSource, @CsvSource, @MethodSource) 및 @TestFactory DynamicTest를 통한 데이터 주도형 테스트 구축.",
                "applicable_context": "동일한 검증 로직에 대해 수십~수백 개의 데이터 조합을 반복 검증해야 할 때.",
                "core_principles": [
                    "@CsvSource: 입력 인자와 기대 출력값을 콤마로 표기하여 테이블 기반 테스트를 극단적으로 단순화",
                    "@MethodSource: 단순 리터럴을 넘어 다형성 복합 도메인 객체의 스트림을 테스트 인자로 주입",
                    "@TestFactory: 런타임에 계산된 컬렉션이나 외부 파일로부터 DynamicTest 스트림을 생성하여 정적 테스트의 한계 극복"
                ],
                "decision_criteria": "경계값 테스트 케이스가 3개 이상 늘어나면 테스트 메서드를 복사하지 말고 즉시 @ParameterizedTest로 전환하라."
            },
            {
                "ch_num": "Chapter 07",
                "title": "JUnit 5 확장 모델 (The Extension Model)",
                "summary": "JUnit 4의 @Rule, Runner를 대체하는 일관된 Extension API: ParameterResolver, ExecutionCondition, TestWatcher.",
                "applicable_context": "테스트 실행 전후에 공통 인프라(DB 롤백, 보안 토큰 주입, 실행 시간 계측)를 선언적으로 재사용하고자 할 때.",
                "core_principles": [
                    "ParameterResolver: 테스트 메서드 파라미터에 모의 객체나 환경 의존성을 DI 방식으로 주입",
                    "ExecutionCondition: 운영체제, 환경변수, 시간 조건에 따라 특정 테스트를 선언적으로 활성화/비활성화"
                ],
                "decision_criteria": "상속을 통해 테스트 기반 클래스(BaseTest)를 비대하게 만들지 말고, 독립적인 Extension을 합성(@ExtendWith)하여 재사용하라."
            },
            {
                "ch_num": "Chapter 22",
                "title": "테스트 피라미드 전략 구현 (Implementing a Test Pyramid Strategy)",
                "summary": "단위 테스트(Unit) ➔ 컴포넌트(Component) ➔ 통합(Integration) ➔ 계약(Contract) ➔ 시스템/E2E로 이어지는 엔터프라이즈 계층화 전략.",
                "applicable_context": "시스템 규모가 커짐에 따라 통합/E2E 테스트 실행 시간이 수십 분으로 늘어나 배포 파이프라인이 병목을 겪을 때.",
                "core_principles": [
                    "피라미드 하단(단위 테스트): 전체의 70% 이상, 0.001초 실행, 모든 엣지 케이스와 분기 완벽 망라",
                    "피라미드 중단(컴포넌트/통합): 전체의 20%, DB 및 메시지 큐 등 핵심 프로세스 외부 접합점 검증",
                    "피라미드 상단(E2E): 전체의 10% 이하, 가장 중요한 2~3개의 핵심 사용자 여정(Happy Path)만 검증"
                ],
                "decision_criteria": "E2E 테스트가 실패했을 때 원인을 즉시 알 수 없다면, 해당 실패 케이스를 하위 단위 테스트 계층으로 밀어내려 복제하라."
            }
        ]
    }
]

# ==============================================================================
# 3. 리팩터링 주제별 상충 관계 & 트레이드오프 메타데이터
# ==============================================================================
REFACTORING_TRADEOFFS_METADATA = [
    {
        "category": "함수 분해 및 인라인 (Function Decomposition)",
        "source_book": "Book 03: 리팩터링 2판 (Martin Fowler)",
        "refactorings": [
            {
                "name": "함수 추출하기 (Extract Function)",
                "opposite_refactoring": "함수 인라인하기 (Inline Function)",
                "summary": "코드 조각을 찾아 무슨 일을 하는지 파악한 다음, 라인의 의도를 반영하는 이름의 독립된 함수로 분리.",
                "benefits": [
                    "코드의 목적과 의도가 명확해짐 (이름이 주석 역할을 수행)",
                    "중복 코드 제거 및 작은 단위의 재사용성 증대",
                    "독립된 단위 테스트 작성이 극도로 용이해짐"
                ],
                "trade_offs_and_risks": [
                    "인디렉션(간접 호출) 증가로 인해 전체 흐름을 따라가는 탐색 비용 증가",
                    "과도하게 쪼갤 시 호출 스택 오버헤드 및 매개변수 전달 복잡도 증가",
                    "본문이 이름만큼 단순할 때 굳이 추출하면 시각적 잡음 유발"
                ],
                "when_to_use": "코드 블록을 보고 '무슨 일을 하는지' 이해하기 위해 주석이 필요하거나, 6줄 이상 복잡한 로직이 중첩될 때.",
                "when_not_to_use": "함수 본문이 `return order.price > 1000;`처럼 이름보다 더 명확하거나, 단순 위임만 수행하는 1줄 함수일 때는 인라인하라."
            },
            {
                "name": "임시 변수를 질의 함수로 바꾸기 (Replace Temp with Query)",
                "opposite_refactoring": "질의 함수를 매개변수/변수로 바꾸기",
                "summary": "메서드 내부의 복잡한 임시 변수 계산을 전용 getter/query 메서드로 추출.",
                "benefits": [
                    "메서드 내부의 지역 변수 수가 줄어들어 함수 추출이 쉬워짐",
                    "동일한 계산 결과를 클래스 내 다른 메서드에서도 즉시 재사용 가능"
                ],
                "trade_offs_and_risks": [
                    "질의 함수가 호출될 때마다 중복 계산이 일어나는 성능 오버헤드 가능성",
                    "질의 함수 내부에서 부수 효과(State Mutation)가 발생하면 심각한 버그 유발 (반드시 순수 함수여야 함)"
                ],
                "when_to_use": "임시 변수가 함수 내 여러 곳에서 참조되고, 다른 함수에서도 동일한 계산이 필요할 때.",
                "when_not_to_use": "계산 비용이 매우 큰 I/O 작업이거나, 루프 내부에서 수만 번 호출되는 성능 임계 구역에서는 결과를 캐싱하거나 변수로 유지하라."
            }
        ]
    },
    {
        "category": "객체 지향 상속 vs 위임/합성 (Inheritance vs Delegation)",
        "source_book": "Book 03: 리팩터링 2판 & Book 04: 패턴을 활용한 리팩터링",
        "refactorings": [
            {
                "name": "서브클래스를 위임으로 바꾸기 (Replace Subclass with Delegate)",
                "opposite_refactoring": "위임을 서브클래스로 바꾸기 (Replace Delegate with Subclass)",
                "summary": "상속 관계를 구성 객체(Delegate) 합성 관계로 치환하여 런타임에 동적으로 동작을 변경할 수 있도록 전환.",
                "benefits": [
                    "상속의 취약점인 '부모 클래스 수정 시 하위 전체 붕괴(Fragile Base Class)' 위험 제거",
                    "런타임에 위임 객체를 교체하여 동작을 동적으로 변경 가능 (Strategy/State 패턴 실현)",
                    "다중 관점(예: 결제 수단별, 배송 정책별)의 조합 폭발 문제를 합성으로 해결"
                ],
                "trade_offs_and_risks": [
                    "단순한 호출 전달(Forwarding) 메서드가 다수 발생하여 보일러플레이트 코드 증가",
                    "상속이 제공하던 컴파일 타임의 자연스러운 코드 재사용 편리함 상실"
                ],
                "when_to_use": "서브클래스가 오직 한 가지 이유로만 상속을 사용하고 있는데, 다른 축으로의 확장이 필요해져 다중 상속 딜레마에 빠질 때.",
                "when_not_to_use": "부모 클래스와 자식 클래스 간의 관계가 명확한 'is-a' 관계이고, 런타임 상태 전이나 다른 축의 변형이 전혀 필요 없을 때는 단순 상속이 더 우수하다."
            },
            {
                "name": "조건부 로직을 다형성으로 바꾸기 (Replace Conditional with Polymorphism)",
                "opposite_refactoring": "다형성을 조건문으로 합치기 (Collapse to Conditional)",
                "summary": "타입 코드나 switch문으로 분기하는 동일한 로직을 서브클래스나 Strategy 객체의 다형적 메서드로 분리.",
                "benefits": [
                    "새로운 타입이나 정책이 추가될 때 기존 코드를 수정하지 않고 새 클래스만 추가하는 OCP(개방-폐쇄 원칙) 달성",
                    "중복된 switch/case 분기문이 코드베이스 전반에서 완전히 소멸"
                ],
                "trade_offs_and_risks": [
                    "클래스 및 파일 수가 급격히 증가하여 프로젝트 구조가 복잡해짐",
                    "단 2~3개의 고정된 분기에서 억지로 클래스를 만들면 '과도한 엔지니어링(Over-Engineering)' 악취 유발"
                ],
                "when_to_use": "동일한 조건 분기문이 여러 함수에 걸쳐 반복적으로 나타나고, 앞으로 새로운 케이스가 빈번하게 추가될 예정일 때.",
                "when_not_to_use": "분기 조건이 단 2개(예: VIP 여부)뿐이고 앞으로 추가될 가능성이 없거나, 단순 팩터리 메서드 내부 분기일 때는 단순 if-else가 훨씬 직관적이다."
            }
        ]
    },
    {
        "category": "캡슐화 및 결합도 제어 (Encapsulation & Coupling)",
        "source_book": "Book 03: 리팩터링 2판 & Book 02: 굿 코드, 배드 코드",
        "refactorings": [
            {
                "name": "위임 숨기기 (Hide Delegate - 디미터 법칙)",
                "opposite_refactoring": "중개자 제거하기 (Remove Middle Man)",
                "summary": "클라이언트가 `a.getB().getC().action()`처럼 객체 체인을 탐색하지 못하도록, A 클래스에 위임 메서드를 두어 세부 결합 차단.",
                "benefits": [
                    "디미터 법칙 준수: 클라이언트는 오직 인접한 협력 객체 A만 알면 되므로 결합도 대폭 축소",
                    "내부의 B나 C 클래스 구조가 변경되어도 클라이언트 코드가 손상되지 않음"
                ],
                "trade_offs_and_risks": [
                    "A 클래스가 단순히 전달만 하는 중개자(Middle Man) 메서드로 가득 차 비대해질 위험",
                    "A 클래스가 B의 거의 모든 인터페이스를 중계하게 되면 클래스 본연의 책임이 희석됨"
                ],
                "when_to_use": "클라이언트가 B의 존재를 알 필요가 전혀 없고, C의 기능 중 극히 일부만 사용할 때.",
                "when_not_to_use": "A 클래스가 단순히 B의 메서드를 수십 개씩 앵무새처럼 중계하고 있다면 '중개자 제거하기'를 통해 클라이언트가 직접 B를 호출하게 하라."
            },
            {
                "name": "컬렉션 캡슐화하기 (Encapsulate Collection)",
                "opposite_refactoring": "원본 컬렉션 직접 노출",
                "summary": "컬렉션 게터가 원본 배열/리스트의 참조를 반환하지 않고, 읽기 전용 복제본(`[...items]`, `Collections.unmodifiableList`)을 반환.",
                "benefits": [
                    "외부 클라이언트가 컬렉션을 몰래 직접 수정(add/remove)하여 객체 내부 불변식을 깨뜨리는 사고를 원천 방지",
                    "컬렉션의 변경은 반드시 소유 객체의 명시적인 도메인 메서드(`addCourse()`, `removeCourse()`)를 통해서만 통제됨"
                ],
                "trade_offs_and_risks": [
                    "게터 호출 시마다 얕은 복사본을 생성하므로 대규모 컬렉션에서 약간의 메모리/CPU 할당 오버헤드 발생"
                ],
                "when_to_use": "객체가 보유한 리스트나 맵의 무결성이 도메인 규칙(예: 최대 10개, 중복 불가)에 의해 보호받아야 할 때 100% 필수 적용.",
                "when_not_to_use": "오직 1회성 순수 DTO이거나, 수백만 건의 대규모 데이터를 스트리밍으로 전달하는 극단적 고성능 파이프라인에서는 신중히 불변 뷰를 고려."
            }
        ]
    },
    {
        "category": "레거시 코드 접합부 vs 캡슐화 트레이드오프 (Legacy Seams vs Encapsulation)",
        "source_book": "Book 05: 레거시 코드 활용 전략 (Michael Feathers)",
        "refactorings": [
            {
                "name": "서브클래스화와 메서드 재정의 (Subclass and Override Method)",
                "opposite_refactoring": "완전한 엄격 캡슐화 (Strict Private)",
                "summary": "테스트하기 어려운 외부 하드웨어, DB, 시스템 시계 호출부를 private에서 protected virtual 메서드로 열어 테스트 서브클래스에서 가짜 객체로 가로챔.",
                "benefits": [
                    "프로덕션 코드를 크게 재설계하지 않고도 단 2~3줄 변경만으로 테스트 하네스를 부착할 수 있는 가장 빠르고 안전한 기법",
                    "기존 운영 코드의 안정성을 위협하지 않으면서 회귀 방지 테스트망 확보"
                ],
                "trade_offs_and_risks": [
                    "테스트를 위해 private 메서드를 protected로 완화해야 하므로 순수 객체 지향 캡슐화가 일부 약화됨",
                    "프로덕션 코드에 테스트용 진입로가 남아있다는 심리적 거부감 유발"
                ],
                "when_to_use": "의존성이 깊고 테스트가 전혀 없는 레거시 시스템에 최초의 테스트 하네스를 부착해야 하는 위급 상황.",
                "when_not_to_use": "처음부터 TDD로 설계하는 신규 시스템에서는 이 기법 대신 처음부터 생성자 주입(DI)이나 인터페이스를 도입하라."
            },
            {
                "name": "발아 메서드/클래스 (Sprout Method / Sprout Class)",
                "opposite_refactoring": "제자리 수정 (Edit in Place)",
                "summary": "수천 줄의 거대하고 두려운 레거시 함수를 직접 고치지 않고, 새로 추가되는 로직을 새로운 순수 함수/클래스로 작성하여 TDD로 검증 후 호출만 연결.",
                "benefits": [
                    "기존 괴물 메서드를 건드려 예기치 못한 사이드 이펙트나 회귀 버그를 유발할 위험을 0%로 통제",
                    "새로 작성되는 코드는 100% 최신의 클린 코드와 TDD로 완벽하게 보호됨"
                ],
                "trade_offs_and_risks": [
                    "기존의 레거시 괴물 코드가 근본적으로 리팩터링되지 않고 그대로 방치되는 타협",
                    "기존 레거시 코드와 새로운 발아 코드 간의 스타일 불일치 발생"
                ],
                "when_to_use": "배포 일정이 촉박하고, 기존 메서드가 너무 복잡하여 전체를 리팩터링할 엄두가 나지 않을 때.",
                "when_not_to_use": "시스템 전반을 개선할 시간과 테스트 하네스가 이미 충분히 갖춰져 있다면 제자리 리팩터링을 통해 근본 설계를 개선하라."
            }
        ]
    }
]


def generate_json():
    data = {
        "metadata": {
            "title": "소프트웨어 엔지니어링 테스트 적용 원리 & 리팩터링 트레이드오프 마스터 메타데이터",
            "generated_at": datetime.datetime.now().isoformat(),
            "standard_language_versions": STANDARD_LANGUAGE_VERSIONS,
            "total_test_books_analyzed": len(TESTING_PRINCIPLES_METADATA),
            "total_refactoring_categories": len(REFACTORING_TRADEOFFS_METADATA)
        },
        "testing_principles_playbook": TESTING_PRINCIPLES_METADATA,
        "refactoring_tradeoffs_playbook": REFACTORING_TRADEOFFS_METADATA
    }
    with open(OUTPUT_JSON_PATH, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f"✅ [1/2] JSON 메타데이터 생성 완료: {OUTPUT_JSON_PATH}")
    return data


def generate_markdown(data):
    lines = []
    lines.append("# 🧪 테스트 상황별 적용 원리 & 리팩터링 트레이드오프 마스터 플레이북")
    lines.append("")
    lines.append("> **문서 목적**: 소프트웨어 개발에서 테스트는 상황과 계층마다 적용해야 할 원리가 완전히 상이하며, 리팩터링 기법들은 항상 설계상의 트레이드오프(Trade-offs)를 동반합니다.")
    lines.append("> 본 문서는 9대 명저의 정수를 집약하여, **어떤 상황에서 어떤 테스트 원리를 적용해야 하는지**, 그리고 **각 리팩터링을 도입할 때 얻는 것과 잃는 것이 무엇인지**를 명확한 의사결정 기준으로 정형화한 마스터 아키텍처 명세서입니다.")
    lines.append("")
    lines.append("---")
    lines.append("")
    lines.append("## 🛠️ 1. 공식 다국어 런타임 표준 버전 (Standard Polyglot Runtimes)")
    lines.append("")
    lines.append("| 언어 | 공식 표준 버전 | 타깃 및 런타임 환경 | 엔지니어링 설계 가이드라인 |")
    lines.append("| :--- | :--- | :--- | :--- |")
    for lang_k, lang_v in data["metadata"]["standard_language_versions"].items():
        lines.append(f"| **{lang_k.upper()}** | `{lang_v['version']}` | {lang_v['target']}<br>`{lang_v['runtime']}` | {lang_v['description']} |")
    lines.append("")
    lines.append("---")
    lines.append("")
    lines.append("## 🔬 2. 테스트 도서별 인덱스, 절별 요약 및 상황별 적용 원리 (Testing Playbook)")
    lines.append("")
    
    for book in data["testing_principles_playbook"]:
        lines.append(f"### 📖 [{book['book_id']}] {book['title_ko']}")
        lines.append(f"- **저자**: {book['author']} | **주 언어**: `{book['primary_language']}`")
        lines.append(f"- **핵심 철학**: {book['core_philosophy']}")
        lines.append("")
        
        for ch in book["chapters"]:
            lines.append(f"#### 📌 {ch['ch_num']}. {ch['title']}")
            lines.append(f"- **요약**: {ch['summary']}")
            lines.append(f"- **적용 맥락 (Applicable Context)**: `{ch['applicable_context']}`")
            lines.append("- **핵심 원리 (Core Principles)**:")
            for p in ch["core_principles"]:
                lines.append(f"  * {p}")
            lines.append(f"- **🎯 의사결정 및 선택 기준**: **{ch['decision_criteria']}**")
            lines.append("")
        lines.append("---")
        lines.append("")
        
    lines.append("## ⚖️ 3. 리팩터링 주제별 상충 관계 & 트레이드오프 가이드 (Refactoring Trade-offs)")
    lines.append("")
    
    for cat in data["refactoring_tradeoffs_playbook"]:
        lines.append(f"### 🔀 {cat['category']}")
        lines.append(f"> **출처 도서**: {cat['source_book']}")
        lines.append("")
        
        for ref in cat["refactorings"]:
            lines.append(f"#### 🏷️ {ref['name']}")
            lines.append(f"- **반대 성향의 기법**: `{ref['opposite_refactoring']}`")
            lines.append(f"- **개요**: {ref['summary']}")
            lines.append("- **🌟 얻는 것 (Benefits)**:")
            for b in ref["benefits"]:
                lines.append(f"  * {b}")
            lines.append("- **⚠️ 잃는 것 및 위험 (Trade-offs & Risks)**:")
            for r in ref["trade_offs_and_risks"]:
                lines.append(f"  * {r}")
            lines.append(f"- **✅ 적용 권장 상황 (When to Use)**: {ref['when_to_use']}")
            lines.append(f"- **❌ 적용 금기 상황 (When NOT to Use)**: **{ref['when_not_to_use']}**")
            lines.append("")
        lines.append("---")
        lines.append("")
        
    with open(OUTPUT_MD_PATH, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))
    print(f"✅ [2/2] Markdown 명세서 생성 완료: {OUTPUT_MD_PATH}")


def main():
    print("🧪 테스트 적용 원리 & 리팩터링 트레이드오프 마스터 메타데이터 생성 시작...")
    data = generate_json()
    generate_markdown(data)
    print("🌟 모든 메타데이터 산출물이 docs/ 아래 완벽하게 동기화되었습니다!")


if __name__ == "__main__":
    main()
