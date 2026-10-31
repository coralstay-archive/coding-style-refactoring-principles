# AI Pair-Programming Guidelines & Agent Memory

## 🎯 1. 프로젝트 목적 및 핵심 워크플로우

`Coding-style-refactoring-principles`는 소프트웨어 공학 9대 명저의 이론·원칙·악취·패턴을 다국어(TypeScript, Java, Python, C++) 501개 실습 카타로 자산화하여 직접 타이핑하고 즉시 테스트하며 체화하는 실습 레포지토리입니다. (핵심 요약 치트시트: [CHEATSHEET.md](file:///Users/flynn_macpro/Coding-style-refactoring-principles/CHEATSHEET.md))

### 사용자 프롬프트 대응 원칙 (Memory Trigger)
사용자가 "어떻게 사용하지?", "어떻게 해야해?", "실습 순서 알려줘", "어떻게 실습해?", "어떤 쉘을 실행해?" 와 같이 사용법이나 워크플로우를 질문하면, [PRACTICE_GUIDE.md](file:///Users/flynn_macpro/Coding-style-refactoring-principles/PRACTICE_GUIDE.md)를 기반으로 다음 실전 폐쇄 루프 사이클(Closed-Loop Cycle)을 즉시 안내하세요:

1. 📖 1단계: 목차와 위치를 확인한다 (어디를 펼칠까?)
   - `./scripts/locate.sh <키워드>` 로 어느 책 몇 장 몇 절 몇 페이지인지 실시간 색인 확인
   - `docs/CONTENT_METADATA_AND_TOC.json` 및 `contents-overview-tocs.md`의 해당 챕터 열람
2. ⌨️ 2단계: 타이핑을 한다 (어디에 어떻게 칠까?)
   - 항상 프로젝트 최상위 루트(`Coding-style-refactoring-principles/`) 터미널 유지 (하위 폴더 이동 금지)
   - `tracks/` 하위 해당 폴더의 `main.*` 및 `README.md`를 열어 직접 손으로 코딩
3. ⚡ 3단계: 어떠어떠한 쉘들을 실행할까?
   - `./scripts/run.sh <경로>`: 단일 파일 0.1초 고속 단독 컴파일 & 콘솔 출력 눈으로 확인
   - `./scripts/test.sh <경로>`: 0.1초 Fast-path 단위 테스트 자동 검증 (`[ PASS ]` 확인, 실패 시 실제값 vs 기댓값 대조)
4. 🐞 3.5단계: 버그 발생 시 디버깅
   - 실패 시 `README.md`의 원서 설계 의도 확인 및 IDE(IntelliJ, VS Code, CLion) 중단점 디버거 활용
5. 🏷️ 4단계: 테스트 원리 및 리팩터링 트레이드오프 확인
   - 테스트 작성 시 `docs/TESTING_AND_REFACTORING_METADATA.md`에서 상황별 스타일(출력/상태/통신) 확인
   - 리팩터링 적용 시 얻는 것(Benefits)과 잃는 것(Risks)을 점검
6. 📝 5단계: 좋은 원칙과 패턴은 `tips/`에 보관
   - `tips/snippets.md`에 검증된 패턴과 스니펫을 영구 자산화

---

## 🛠️ 2. 주요 스크립트 툴체인 요약
- `./scripts/locate.sh <키워드/경로>`: 어느 책 몇 장 몇 절 몇 페이지인지 실시간 색인 네비게이터
- `./scripts/locate.sh --tree [content_id]`: 9대 명저 마스터 목차 트리 조회
- `./scripts/run.sh <항목경로>`: 단일 파일 0.1초 컴파일 & 실행 (다국어 자동 감지)
- `./scripts/test.sh <항목경로>`: 단일 단위 테스트 0.1초 고속 검증
- `./scripts/snippets.sh`: 명품 스니펫 검색, 추출, 사람 검증 및 tips/ 내보내기
- `./scripts/sync_all.sh`: 메타데이터, 목차, 스니펫 및 실습 카타 전수 동기화 & 검증 파이프라인
- `./scripts/help.sh`: 전체 CLI 사용법 대화형 안내 치트시트

---

## 🌐 3. 공식 다국어 런타임 표준 사양
- TypeScript: `TypeScript 7.x` (ESNext / ECMAScript 2026, Node.js LTS)
- Java: `Java 25 LTS` (`/opt/homebrew/opt/openjdk/bin/javac` & `java`)
- Python: `Python 3.15.1 / 3.14` (`python3`, 공식 최신 안정화 릴리즈)
- C++: `C++17 / C++20` (Apple Clang++ / GCC g++)
- GraalVM: 의존성 0% (완전 배제 원칙 엄수)
