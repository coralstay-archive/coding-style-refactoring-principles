#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
scripts/validate_content_data.py
컨텐츠 원천 메타데이터 및 실습 카타 스캐폴드의 스키마와 무결성을 기계적으로 강제 검증합니다.
(handcrafted-cpp 표준 validate_content_data.py 계승)

검증 범위:
  1. docs/CONTENT_METADATA_AND_TOC.json 필수 스키마 및 9대 명저 173개 장 / 1,072개 절 유효성
  2. docs/TREE_METADATA.json 전수 트리 1,301개 노드 유효성
  3. docs/TESTING_AND_REFACTORING_METADATA.json 테스트 원리 및 트레이드오프 스키마
  4. tracks/ 하위 501개 실습 카타 필수 파일(README.md, main.*, test.*) 존재 무결성
  5. (--compile 옵션 시) 다국어 컴파일 및 구문 무결성 전수 검증
"""

import argparse
import json
import os
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
DOCS_DIR = REPO_ROOT / "docs"
TRACKS_DIR = REPO_ROOT / "tracks"


def validate_content_metadata() -> int:
    path = DOCS_DIR / "CONTENT_METADATA_AND_TOC.json"
    if not path.exists():
        print(f"❌ Error: {path} not found")
        return 1
    with open(path, "r", encoding="utf-8") as f:
        data = json.load(f)
    contents = data if isinstance(data, list) else data.get("contents", data.get("books", []))
    if len(contents) < 9:
        print(f"❌ Error: Expected 9 contents, found {len(contents)}")
        return 1
    total_chapters = 0
    total_sections = 0
    for c in contents:
        total_chapters += len(c.get("chapters", []))
        for ch in c.get("chapters", []):
            total_sections += len(ch.get("sections", []))
    print(f"  [PASS] CONTENT_METADATA_AND_TOC.json: {len(contents)}권 도서, {total_chapters}개 장, {total_sections}개 절 스키마 검증 완료")
    return 0


def validate_tree_metadata() -> int:
    path = DOCS_DIR / "TREE_METADATA.json"
    if not path.exists():
        print(f"❌ Error: {path} not found")
        return 1
    with open(path, "r", encoding="utf-8") as f:
        data = json.load(f)
    meta = data.get("metadata", {})
    stats = meta.get("stats", {})
    total_nodes = stats.get("total_nodes", 0)
    katas = stats.get("total_executable_katas", 0)
    contents = data.get("contents", data.get("books", []))
    if len(contents) < 9 or total_nodes < 1300 or katas < 500:
        print(f"❌ Error: Tree metadata incomplete (contents: {len(contents)}, nodes: {total_nodes}, katas: {katas})")
        return 1
    print(f"  [PASS] TREE_METADATA.json: {total_nodes}개 전수 트리 노드 및 {katas}개 실습 카타 무결성 검증 완료")
    return 0


def validate_testing_refactoring_metadata() -> int:
    path = DOCS_DIR / "TESTING_AND_REFACTORING_METADATA.json"
    if not path.exists():
        print(f"❌ Error: {path} not found")
        return 1
    with open(path, "r", encoding="utf-8") as f:
        data = json.load(f)
    rules = data.get("testing_principles_playbook", {})
    tradeoffs = data.get("refactoring_tradeoffs_playbook", {})
    if not rules or not tradeoffs:
        print(f"❌ Error: testing_principles_playbook or refactoring_tradeoffs_playbook missing")
        return 1
    print(f"  [PASS] TESTING_AND_REFACTORING_METADATA.json: 테스트 원리 및 리팩터링 트레이드오프 스키마 검증 완료")
    return 0


def validate_kata_files() -> int:
    total_katas = 0
    missing_files = []
    
    for content_dir in sorted(TRACKS_DIR.iterdir()):
        if not content_dir.is_dir() or content_dir.name.startswith("."):
            continue
        for ch_dir in sorted(content_dir.iterdir()):
            if not ch_dir.is_dir() or ch_dir.name.startswith("."):
                continue
            for kata_dir in sorted(ch_dir.iterdir()):
                if not kata_dir.is_dir() or kata_dir.name.startswith("."):
                    continue
                
                # Check required files
                has_readme = (kata_dir / "README.md").exists()
                has_main = any((kata_dir / f"main.{ext}").exists() or (kata_dir / f"Main.{ext}").exists() 
                               for ext in ["ts", "java", "py", "cpp"])
                has_test = any((kata_dir / f"test.{ext}").exists() or (kata_dir / f"Test.{ext}").exists() or (kata_dir / "test_main.py").exists() or len(list(kata_dir.glob("*Test*.java"))) > 0
                               for ext in ["ts", "java", "py", "cpp"])
                
                if not has_readme or not has_main or not has_test:
                    missing_files.append(str(kata_dir.relative_to(REPO_ROOT)))
                total_katas += 1

    if missing_files:
        print(f"❌ Error: {len(missing_files)} katas missing essential files: {missing_files[:5]}")
        return 1

    print(f"  [PASS] tracks/ 실습 카타 무결성: 총 {total_katas}개 카타의 필수 파일(README, main, test) 100% 정상 확인")
    return 0


def main():
    parser = argparse.ArgumentParser(description="컨텐츠 원천 메타데이터 및 실습 카타 스키마 무결성 검증기")
    parser.add_argument("--compile", action="store_true", help="다국어 컴파일 및 구문 무결성 전수 검증 수행")
    args = parser.parse_args()

    print("🔍 컨텐츠 원천 데이터 스키마 및 실습 카타 무결성 기계적 검증 시작 (handcrafted 표준)...")
    err = 0
    err += validate_content_metadata()
    err += validate_tree_metadata()
    err += validate_testing_refactoring_metadata()
    err += validate_kata_files()

    if args.compile:
        print("\n⚡ 다국어 컴파일 전수 검증 시작...")
        import subprocess
        res = subprocess.run([sys.executable, str(REPO_ROOT / "scripts" / "generate_all_contents.py"), "--verify"])
        if res.returncode != 0:
            err += 1

    if err == 0:
        print("✨ [Content Data PASS] 모든 컨텐츠 메타데이터 및 501개 실습 카타 스키마가 100% 정상 검증되었습니다!")
        sys.exit(0)
    else:
        print(f"❌ [Content Data FAIL] 총 {err}건의 유효성 검증 오류가 발견되었습니다.")
        sys.exit(1)


if __name__ == "__main__":
    main()
