#!/usr/bin/env bash
# scripts/locate.sh
# 9대 명저 실습 파일의 도서명, 몇 부, 몇 장, 몇 절, 카타 번호를 출력하는 네비게이터 (stoneCpp 표준 계승)
#
# 사용법:
#   ./scripts/locate.sh tracks/01_code_complete/01_welcome_to_construction/01_core_example
#   ./scripts/locate.sh currency                 # 키워드로 검색하여 위치 찾기
#   ./scripts/locate.sh mock                     # 테스트/목 관련 카타 검색
#   ./scripts/locate.sh --tree                   # 전체 9대 명저 목차 트리 보기
#   ./scripts/locate.sh --tree content06         # Content 06 (TDD) 목차 트리 보기
#   ./scripts/locate.sh --list                   # 전체 컨텐츠/트랙 요약 목록 보기
set -euo pipefail
PYTHON_BIN="/usr/bin/python3"
if [ ! -x "$PYTHON_BIN" ]; then
  PYTHON_BIN="python3"
fi
exec "$PYTHON_BIN" "$(dirname "$0")/locate.py" "$@"
