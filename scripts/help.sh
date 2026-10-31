#!/usr/bin/env bash
# ==============================================================================
# Coding-style-refactoring-principles 빠른 명령어 치트시트 (Cheat Sheet)
# ==============================================================================
set -euo pipefail

cat << 'EOF'
======================================================================
 📚 Coding-style-refactoring-principles 빠른 명령어 치트시트
======================================================================

0. 🔍 실습 위치 및 목차 실시간 색인 (stoneCpp 표준 네비게이터)
   ./scripts/locate.sh currency                    # 키워드로 관련 카타 검색
   ./scripts/locate.sh mock                        # 단위 테스트 Mocks/Stubs 검색
   ./scripts/locate.sh --tree                      # 9대 명저 마스터 목차 트리 전체 조회
   ./scripts/locate.sh --tree content06            # 특정 도서 목차 트리 조회 (content01~content09)
   ./scripts/locate.sh tracks/06_tdd/01_multi_currency/01_core_example # 카드 박스 상세 조회

1. ⚡ 단일 예제 초고속 실행 (main.* 네이티브 빌드 & 런 | 0.1초)
   ./scripts/run.sh tracks/01_code_complete/01_welcome_to_construction/01_core_example
   ./scripts/run.sh tracks/02_good_code_bad_code/01_code_quality/01_core_example
   ./scripts/run.sh tracks/06_tdd/01_multi_currency/01_core_example
   ./scripts/run.sh tracks/06_tdd/18_first_steps_to_xunit/01_core_example

2. 🧪 단위 테스트 전용 실행기 (test.* 자동 빌드 & 검증 | 0.1초 Fast-path)
   ./scripts/test.sh tracks/01_code_complete/01_welcome_to_construction/01_core_example
   ./scripts/test.sh tracks/02_good_code_bad_code/01_code_quality/01_core_example
   ./scripts/test.sh tracks/06_tdd/01_multi_currency/01_core_example

3. 📖 핵심 가이드 문서 및 메타데이터 플레이북
   - 빠른 명령어 치트시트: CHEATSHEET.md
   - 실습 사이클: PRACTICE_GUIDE.md
   - 아키텍처 명세: PROJECT_STRUCTURE.md
   - 에이전트 메모리: AGENTS.md
   - 테스트 & 리팩터링 플레이북: docs/TESTING_AND_REFACTORING_METADATA.md
   - 9대 명저 전수 트리 (1,301개 노드): docs/TREE_METADATA.md
   - 명품 스니펫 보관소: tips/snippets.md

4. ⚙️ 메타데이터 생성 및 동기화 도구
   python3 scripts/generate_tree_metadata.py       # 1,301개 전수 트리 메타데이터 동기화
   python3 scripts/generate_testing_and_refactoring_metadata.py # 테스트 & 리팩터링 메타데이터 동기화
   python3 scripts/generate_unabbreviated_tocs.py  # 9대 명저 무축약 목차(1,415줄) 생성
   python3 scripts/generate_all_contents.py --verify  # 실습 트랙 구문/컴파일 전수 검증

5. 🤖 AI 어시스턴트(Claude, Copilot, Cursor) 룰셋
   - Claude: context/UNIVERSAL_CODING_RULES.md
   - Cursor: context/.cursorrules
   - Copilot: context/.github/copilot-instructions.md
======================================================================
자세한 아키텍처는 PROJECT_STRUCTURE.md 및 README.md 를 참고하세요.
EOF
