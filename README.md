# Coding-Style, Refactoring & Testing Principles
### 소프트웨어 엔지니어링 9대 명저 기반 전수 실습장 & 범용 AI 컨텍스트 뱅크

> 🚀 초심자를 위한 완벽 실습 가이드 (5단계 폐쇄 루프 사이클 & IDE 디버깅): [PRACTICE_GUIDE.md](PRACTICE_GUIDE.md)  
> ⚡ 핵심 명령어 & 원칙 1장 요약 치트시트: [CHEATSHEET.md](CHEATSHEET.md)  
> 🏗️ 프로젝트 아키텍처 및 디렉터리 트리 상세 설계서: [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md)  
> 🌲 9대 명저 전수 구조 트리(1,301개) 및 실습 카타(501개) 명세서: [docs/TREE_METADATA.md](docs/TREE_METADATA.md)  
> 🧪 테스트 상황별 적용 원리 & 리팩터링 트레이드오프 마스터 플레이북: [docs/TESTING_AND_REFACTORING_METADATA.md](docs/TESTING_AND_REFACTORING_METADATA.md)  
> 📑 9대 명저 무축약 마스터 목차 전수(1,415줄): [contents-overview-tocs.md](contents-overview-tocs.md)  
> 🤖 AI 페어 프로그래밍 지침 및 에이전트 메모리: [AGENTS.md](AGENTS.md)  
> 🔍 실습 위치 및 페이지 실시간 색인 네비게이터: `./scripts/locate.sh <키워드>`  
> 💡 명품 스니펫 추출 및 사람 검증 CLI: `./scripts/snippets.sh --status`  
> ⚡ 원클릭 마스터 동기화 및 무결성 검증 파이프라인: `./scripts/sync_all.sh`

본 저장소는 소프트웨어 공학의 불후의 고전 9권을 분석하여, 어떤 언어와 프로젝트에서도 활용할 수 있는 보편적 코드 품질·리팩터링·단위 테스트 지식 체계를 구축하고, 이를 직접 손으로 타이핑하며 0.1초 만에 검증할 수 있는 다국어 501개 실전 카타와 AI 어시스턴트(Claude, Copilot, Cursor, ChatGPT 등) 주입용 룰셋으로 자산화한 엔지니어링 연습장입니다.

---

## 📊 전체 도서 및 트랙 실습 규모 (총 501개 실습 카타)

| 번호 | 트랙 / 도서명 | 저자 | 주 언어 및 환경 | 챕터 / 섹션 | 실습 카타 수 | 특징 및 주요 내용 |
|:---:|:---|:---|:---:|:---:|:---:|:---|
| 01 | Code Complete 2판 | Steve McConnell | `C++17 / C++20` | 35개 챕터 | 87개 | 소프트웨어 구축 총론, 방어적 프로그래밍, 변수 스코프, 가드 구문, 루프 안전가드 |
| 02 | 굿 코드, 배드 코드 | Tom Long (Google TL) | `TypeScript 7.x` | 11개 챕터 | 69개 | 코드 계약, 추상화 계층, 오용 방지, 값 객체, DI, Fail-Fast |
| 03 | 리팩터링 2판 | Martin Fowler | `TypeScript 7.x` | 12개 챕터 | 74개 | 24대 악취 및 70대 마이크로 리팩터링, 레코드 캡슐화, 함수/필드 이전 |
| 04 | 패턴을 활용한 리팩터링 | Joshua Kerievsky | `Java 25 LTS` | 11개 챕터 | 29개 | 진화적 설계, 생성 메서드(Creation Method), 전략 패턴 리팩터링, Composed Method |
| 05 | 레거시 코드 활용 전략 | Michael Feathers | `C++17 / C++20` | 25개 챕터 | 70개 | 접합부(Seam), 의존성 분리 24종 기법(게터/메서드 추출 및 오버라이드, 생성자 매개변수화) |
| 06 | 테스트 주도 개발 (TDD) | Kent Beck | `Java & Python` | 32개 챕터 | 47개 | Red-Green-Refactor, 화폐 다중 통화, xUnit 프레임워크 자체 제작, 크래시 더미, 셀프 션트 |
| 07 | 단위 테스트 | Vladimir Khorikov | `TypeScript 7.x` | 11개 챕터 | 32개 | 4대 요소, 리팩터링 내성, CQS Mock vs Stub, 시간 의존성 격리(ClockProvider) |
| 08 | 실용주의 단위 테스트 | Jeff Langr | `Java 25 LTS` | 14개 챕터 | 47개 | FIRST 원칙, Right-BICEP(역관계, 교차 검사), CORRECT(포맷, 기수성 0-1-N) |
| 09 | JUnit in Action 3판 | Cătălin Tudose | `Java 25 LTS` | 22개 챕터 | 46개 | JUnit 5 아키텍처, 라이프사이클 픽스처, 매개변수화 CsvSource, 동적 TestFactory |
| 합계 | 9대 명저 통합 트랙 | 다국어 네이티브 | 177개 장 | 501개 | 500개 돌파 완전판 전수 수록 (Zero Abbreviation) |

---

## ⚡ 초고속 다국어 빌드 및 테스트 파이프라인

본 저장소는 468개의 타깃 환경에서도 단 0.1초 만에 실행 및 테스트가 가능하도록 파일 확장자 자동 감지 기반의 Fast-path 파이프라인을 지원합니다.

### 1. 실습 파일 위치 실시간 색인 (`./scripts/locate.sh`)
원서의 몇 부, 몇 장, 몇 절, 몇 번째 카타인지와 원서 페이지, 실행 명령어, 핵심 요약을 터미널 카드 박스로 즉시 확인합니다.
```bash
# 화폐(currency) 관련 TDD 카타 색인
./scripts/locate.sh currency

# 단위 테스트 Mocks/Stubs 관련 카타 색인
./scripts/locate.sh mock

# 9대 명저 마스터 목차 트리 조회
./scripts/locate.sh --tree content06
```

### 2. 단일 항목 초고속 컴파일 및 실행 (`./scripts/run.sh`)
TypeScript, Java, Python, C++ 파일 확장자를 자동 판별하여 네이티브 컴파일러/런타임으로 즉시 실행합니다.
```bash
# TypeScript 카타 실행 (굿 코드, 배드 코드)
./scripts/run.sh tracks/02_good_code_bad_code/01_code_quality/01_core_example

# Java 카타 실행 (Java 25 LTS)
./scripts/run.sh tracks/06_tdd/01_multi_currency/01_core_example

# Python 카타 실행 (Kent Beck xUnit)
./scripts/run.sh tracks/06_tdd/18_first_steps_to_xunit/01_core_example

# C++ 카타 실행 (Code Complete 2판)
./scripts/run.sh tracks/01_code_complete/01_welcome_to_construction/01_core_example
```

### 3. 단일 항목 단위 테스트 0.1초 Fast-path 자동 검증 (`./scripts/test.sh`)
```bash
# TDD 다중 통화 단위 테스트 검증
./scripts/test.sh tracks/06_tdd/01_multi_currency/01_core_example

# 단위 테스트 4대 요소 리팩터링 내성 검증
./scripts/test.sh tracks/07_unit_testing/04_four_pillars/01_core_example
```

---

## 📌 `[[snippet]]` / `@snippet` 코드 스니펫 추출 및 기술 블로그 발행

기억하고 싶은 함수, 클래스, 구조체 정의 위에 `[[snippet]]` 또는 `[[snippet("설명")]]`, `@snippet`을 붙이면 컴파일러 인터셉터(`scripts/cxx_wrapper.sh`)를 통해 에러 없이 투명하게 빌드되며, 원하는 스니펫만 통째로 추출하여 마크다운 노트 및 8대 필수 얼개 블로그 포스트로 내보낼 수 있습니다.

```bash
./scripts/snippets.sh                  # 전체 스니펫 코드 터미널 출력
./scripts/snippets.sh <키워드>         # 키워드로 필터링 검색
./scripts/snippets.sh --list           # 요약 목록 조회
./scripts/snippets.sh --status         # 사람 검증 상태 대시보드 조회
./scripts/snippets.sh --verify "메서드()" --reviewer "이름"  # 사람 검증 승인 및 해시 기록
./scripts/snippets.sh --export         # tips/snippets.md 대시보드 내보내기
./scripts/snippets.sh --export-blog    # tips/posts/ 에 8대 필수 얼개 블로그 포스트 개별 발행
./scripts/snippets.sh --lint           # tips/posts 포스트 메타데이터 및 환경 명세 기계적 강제 검증
```

---

## 🏛️ 저장소 아키텍처 및 디렉터리 구성

```text
Coding-style-refactoring-principles/
├── README.md                      # [본 문서] 프로젝트 개요, 트랙 규모, 퀵스타트
├── CHEATSHEET.md                  # ⚡ 핵심 명령어, 테스트 원칙, 리팩터링 트레이드오프 치트시트
├── PRACTICE_GUIDE.md              # 🚀 완벽 실습 가이드 (5단계 폐쇄 루프 사이클 & 디버깅)
├── PROJECT_STRUCTURE.md           # 🏗️ 아키텍처 및 디렉터리 트리 상세 설계서
├── AGENTS.md                      # 🤖 AI 페어 프로그래밍 지침 및 에이전트 메모리
├── GEMINI.md                      # ♊ Gemini CLI 전용 어시스턴트 지침
├── contents-overview-tocs.md      # 📑 9대 명저 무축약 마스터 목차 전수 (1,415줄)
├── .gitignore                     # Git 형상관리 제외 규칙
├── .vscode/                       # 🛠️ IDE 원클릭 빌드/테스트 환경 (tasks.json)
│   └── tasks.json                 # run.sh, test.sh, sync_all.sh 원클릭 단축키 연결
│
├── docs/                          # 📖 참조 문서, OCR 캐시, 전수 트리 메타데이터 (handcrafted 표준)
│   ├── TREE_METADATA.md           # 🌲 9대 명저 전수 구조 트리(1,301개 노드) 및 실습 카타(501개) 명세서
│   ├── TREE_METADATA.json         # 🌲 전수 트리 노드 기계가독형 메타데이터 JSON
│   ├── CONTENT_METADATA_AND_TOC.json # 9대 명저 173개 장 및 1,072개 세부 절 메타데이터 JSON
│   ├── TESTING_AND_REFACTORING_METADATA.md # 🧪 테스트 상황별 원리 & 리팩터링 트레이드오프 마스터 플레이북
│   ├── TESTING_AND_REFACTORING_METADATA.json # 🧪 테스트 및 리팩터링 마스터 JSON DB
│   └── .ocr-cache/                # Apple Vision 고속 OCR 목차 캐시 (143/143p 100%)
│
├── context/                       # 🤖 AI 어시스턴트(Claude, Copilot, Cursor 등) 주입용 룰셋
│   ├── UNIVERSAL_CODING_RULES.md  # [통합] 시스템 프롬프트 및 Knowledge 공통 지침
│   ├── .cursorrules               # [Cursor] IDE 전용 규칙 파일
│   ├── .github/copilot-instructions.md # [Copilot] GitHub Copilot 전용 규칙 파일
│   └── modules/                   # [선택형 모듈] 작업 주제별 세부 지침
│
├── scripts/                       # 🛠️ 자동화 스크립트, 생성기 엔진, 런타임 툴체인
│   ├── locate.sh / locate.py      # 🔍 도서·장·절·카타 실시간 색인 네비게이터 (--tree 마스터 목차)
│   ├── snippets.sh / snippets.py  # 💡 명품 스니펫 추출, 사람 검증, 8대 얼개 블로그 발행 & 린터
│   ├── sync_all.sh                # ⚡ handcrafted 표준 4단계 폐쇄 루프 마스터 동기화 파이프라인
│   ├── apply_file_frontmatter.py  # 🏷️ 말단 노드 파일 주석 프론트매터 자동 주입기
│   ├── cxx_wrapper.sh             # 🛡️ 컴파일 시 @snippet/@file 어트리뷰트 투명 인터셉터
│   ├── run.sh                     # 다국어(TS, Java, Py, C++) 통합 빌드 및 실행기
│   ├── test.sh                    # 단위 테스트 전용 0.1초 고속 실행기
│   ├── help.sh                    # 전체 CLI 사용법 대화형 안내 치트시트
│   ├── generate_tree_metadata.py  # 🌲 전수 트리 노드(1,301개) JSON/Markdown 자동 생성기
│   ├── generate_testing_and_refactoring_metadata.py # 🧪 테스트 & 리팩터링 메타데이터 생성기
│   ├── generate_missing_content_katas.py # 🚀 501개 고품질 실습 카타 확장 생성기
│   └── contents_data/             # 📚 9대 명저 선언적 메타데이터 & 목차 레지스트리
│
├── tracks/                        # 🎯 9대 명저 173개 전 챕터 501개 실습 카타 (Multi-language)
│   ├── README.md                  # 트랙 전체 색인 (501개 링크)
│   ├── 01_code_complete/          # C++17 (Steve McConnell | 87개 카타)
│   ├── 02_good_code_bad_code/     # TypeScript (Tom Long | 69개 카타)
│   ├── 03_refactoring_2nd/        # TypeScript (Martin Fowler | 74개 카타)
│   ├── 04_refactoring_to_patterns/# Java (Joshua Kerievsky | 29개 카타)
│   ├── 05_legacy_code/            # C++17 (Michael Feathers | 70개 카타)
│   ├── 06_tdd/                    # Java & Python (Kent Beck | 47개 카타)
│   ├── 07_unit_testing/           # TypeScript (Vladimir Khorikov | 32개 카타)
│   ├── 08_pragmatic_unit_testing/ # Java (Jeff Langr | 47개 카타)
│   └── 09_junit_in_action/        # Java (Cătălin Tudose | 46개 카타)
│
├── practice/10_refactoring_katas/                     # 🥋 실전 실습 카타 뱅크 (4-File Formula)
│   ├── README.md                  # 전체 마이크로 카타 색인
│   ├── 01_code_quality/           # 도메인 1: 코드 품질 & 마이크로 설계
│   ├── 02_unit_testing/           # 도메인 2: 단위 테스트 & TDD
│   ├── 03_refactoring_smells/     # 도메인 3: 리팩터링 메커니즘
│   └── 04_legacy_and_patterns/    # 도메인 4: 패턴 진화 & 레거시 개선
│
└── tips/                          # 💡 명품 스니펫 및 핵심 원칙 보관소
    ├── snippets.md                # 검증된 명품 리팩터링/테스트 패턴 마크다운 대시보드
    ├── snippets_registry.json     # 스니펫 메타데이터 레지스트리
    └── posts/                     # 📝 8대 필수 얼개 규격 기술 블로그 포스트들 (YYYY-MM-DD-<id>.md)
```

---

## 🌐 다국어 런타임 표준 사양
- TypeScript: `TypeScript 7.x` (ESNext / ECMAScript 2026, Node.js LTS)
- Java: `Java 25 LTS` (`/opt/homebrew/opt/openjdk/bin/javac` & `java`, OpenJDK 25/26 호환)
- Python: `Python 3.15.1 / 3.14` (`python3`, 공식 최신 안정화 릴리즈)
- C++: `C++17 / C++20` (Apple Clang++ / GCC g++)
- GraalVM: 의존성 0% (완전 배제)

## 라이선스

이 저장소에서 직접 작성한 코드와 문서(실습 카타 포함)는 [GNU AGPL-3.0-only](./LICENSE)를 따릅니다.
실습이 참고하는 도서의 원문·목차와 도서별 장절 데이터(`scripts/contents_data/`, `docs/` 메타데이터)는 저작권자 소유이며 이 저장소에 포함하지 않습니다.
