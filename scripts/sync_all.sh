#!/usr/bin/env bash
# ==============================================================================
# scripts/sync_all.sh
# Coding-style-refactoring-principles Master TOC & Scaffold Sync Pipeline
# (handcrafted-cpp 표준 4단계 폐쇄 루프 파이프라인)
#
# 목차 트리구조나 메타데이터 변경 시 전수 스캐폴드, 프론트매터, 색인을 일괄 갱신하고
# 8대 필수 얼개 블로그 포스트 및 다국어 실습 카타 무결성을 100% 기계적으로 강제 검증합니다.
#
# 실행 순서:
#   [Step 1/4] 말단 노드 파일 주석 프론트매터 동기화 (apply_file_frontmatter.py)
#   [Step 2/4] 동적 목차 트리 무결성 검증 (generate_tree_metadata.py & locate.py --tree)
#   [Step 3/4] 도서 원천 데이터/메타데이터 스키마 및 실습 카타 무결성 검증 (verify)
#   [Step 4/4] tips 스니펫/블로그 갱신 및 8대 필수 얼개 기계적 강제 검증 (export, export-blog, lint)
# ==============================================================================
set -euo pipefail
cd "$(dirname "$0")/.."

echo "=============================================================================="
echo " 🔄 Coding-Style, Refactoring & Testing 마스터 동기화 파이프라인 (Master Sync)"
echo "=============================================================================="

PYTHON_BIN="python3"
if [ -x /usr/bin/python3 ]; then
  PYTHON_BIN="/usr/bin/python3"
fi

# 1. 모든 말단 파일의 @file / @path 주석 프론트매터 동기화
echo -e "\n[Step 1/4] 말단 노드 파일 주석 프론트매터 동기화..."
"$PYTHON_BIN" scripts/apply_file_frontmatter.py

# 2. 동적 목차 트리 출력 및 무결성 검증
echo -e "\n[Step 2/4] 동적 목차 트리 무결성 검증..."
"$PYTHON_BIN" scripts/generate_tree_metadata.py
"$PYTHON_BIN" scripts/locate.py --tree > /dev/null

# 3. 도서 원천 데이터/메타데이터 스키마 및 무결성 기계적 강제 검증
echo -e "\n[Step 3/4] 도서 원천 데이터/메타데이터 스키마 및 실습 카타 무결성 검증..."
"$PYTHON_BIN" scripts/validate_content_data.py

# 4. tips 스니펫/블로그 갱신 및 검증
echo -e "\n[Step 4/4] tips 스니펫/블로그 갱신 및 검증..."
./scripts/snippets.sh --export
./scripts/snippets.sh --export-blog
./scripts/snippets.sh --status

echo -e "\n✨ 목차, 메타데이터 스키마 무결성 및 tips 포스트 8대 얼개 규격 검증이 성공적으로 완료되었습니다!"
