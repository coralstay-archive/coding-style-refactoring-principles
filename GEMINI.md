# Coding-Style, Refactoring & Testing Principles — Gemini Assistant Instructions

본 저장소에서 Gemini 어시스턴트는 다음 엔지니어링 표준을 엄격히 준수합니다:

1. **언어 표준 버전 명시**:
   - TypeScript: `TypeScript 7.x` (ESNext / ECMAScript 2026)
   - Java: `Java 25 LTS` (가상 스레드, 패턴 매칭 등)
   - Python: `Python 3.15.1 / 3.14` (정적 타입 힌팅 준수)
   - C++: `C++17 / C++20` (스마트 포인터, RAII)
   - GraalVM은 절대 사용하지 않음 (의존성 0%).

2. **테스트 및 리팩터링 설계 지침**:
   - 테스트 작성 및 검토 시 [`docs/TESTING_AND_REFACTORING_METADATA.md`](docs/TESTING_AND_REFACTORING_METADATA.md)의 상황별 테스트 스타일(출력 기반 > 상태 기반 > 통신 기반 CQS)을 최우선 적용합니다.
   - 리팩터링 제안 시 단순 코드 변경에 그치지 않고, 얻는 것(Benefits)과 잃는 것(Trade-offs)을 명확히 대조하여 제시합니다.

3. **실습 워크플로우**:
   - 위치 색인: `./scripts/locate.sh <키워드>`
   - 단일 실행: `./scripts/run.sh <경로>`
   - 단위 테스트: `./scripts/test.sh <경로>` (또는 `./scripts/run.sh --test <경로>`)
   - 전체 실습 루프: [`PRACTICE_GUIDE.md`](PRACTICE_GUIDE.md) 참조.
