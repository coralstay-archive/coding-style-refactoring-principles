#!/usr/bin/env bash
# ==============================================================================
# 단위 테스트 전용 실행기 (Dedicated Test Runner)
# C++, TypeScript, Java, Python 예제의 test.* 파일을 자동으로 빌드 및 실행합니다.
#
# 사용법:
#   ./scripts/test.sh <예제_폴더_경로>
#   예: ./scripts/test.sh tracks/01_code_complete/01_welcome_to_construction/1.1_definition_of_construction
# ==============================================================================
set -euo pipefail
SCRIPTS_DIR="$(cd "$(dirname "$0")" && pwd)"

if [ "$#" -lt 1 ]; then
  echo "사용법: $0 <예제_폴더_경로>" >&2
  echo "예시: $0 tracks/01_code_complete/01_welcome_to_construction/1.1_definition_of_construction" >&2
  exit 1
fi

exec "$SCRIPTS_DIR/run.sh" "$1" --test
