#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
scripts/locate.py
실습 파일의 정확한 도서명, 몇 부(Part), 몇 장(Chapter), 몇 절(Section), 카타 번호, 원서 페이지, 핵심 요약을
동적으로 파싱하여 터미널에 구조화된 카드 박스 형태로 출력하는 위치 색인 네비게이터 (stoneCpp 표준 계승).

사용법:
  ./scripts/locate.sh tracks/01_code_complete/01_welcome_to_construction/01_core_example
  ./scripts/locate.sh currency                 # 키워드로 검색하여 위치 찾기
  ./scripts/locate.sh mock                     # 테스트/목 관련 카타 검색
  ./scripts/locate.sh --tree                   # 9대 명저 마스터 목차 트리 보기
  ./scripts/locate.sh --tree content06         # 특정 도서 목차 트리 보기
  ./scripts/locate.sh --list                   # 전체 컨텐츠/트랙 요약 목록 보기
  ./scripts/locate.sh --json <경로>            # JSON 형식 출력
"""

import argparse
import json
import os
import re
import sys
from pathlib import Path
from typing import Any, Dict, List, Optional

REPO_ROOT = Path(__file__).resolve().parent.parent
TRACKS_DIR = REPO_ROOT / "tracks"
DOCS_DIR = REPO_ROOT / "docs"

TREE_META_FILE = DOCS_DIR / "TREE_METADATA.json"
CONTENT_META_FILE = DOCS_DIR / "CONTENT_METADATA_AND_TOC.json"
BOOK_META_FILE = CONTENT_META_FILE

BOOK_NAMES = {
    "01_code_complete": "Book 01: Code Complete 2판 (Steve McConnell | C++17)",
    "02_good_code_bad_code": "Book 02: 굿 코드, 배드 코드 (Tom Long | TypeScript)",
    "03_refactoring_2nd": "Book 03: 리팩터링 2판 (Martin Fowler | TypeScript)",
    "04_refactoring_to_patterns": "Book 04: 패턴을 활용한 리팩터링 (Joshua Kerievsky | Java)",
    "05_legacy_code": "Book 05: 레거시 코드 활용 전략 (Michael Feathers | C++17)",
    "06_tdd": "Book 06: 테스트 주도 개발 (Kent Beck | Java & Python)",
    "07_unit_testing": "Book 07: 단위 테스트 (Vladimir Khorikov | TypeScript)",
    "08_pragmatic_unit_testing": "Book 08: 실용주의 단위 테스트 (Jeff Langr | Java)",
    "09_junit_in_action": "Book 09: JUnit in Action 3판 (Cătălin Tudose | Java)",
}

CONTENT_SHORT_MAP = {
    "content01": "01_code_complete",
    "content02": "02_good_code_bad_code",
    "content03": "03_refactoring_2nd",
    "content04": "04_refactoring_to_patterns",
    "content05": "05_legacy_code",
    "content06": "06_tdd",
    "content07": "07_unit_testing",
    "content08": "08_pragmatic_unit_testing",
    "content09": "09_junit_in_action",
}
BOOK_SHORT_MAP = CONTENT_SHORT_MAP

def load_tree_metadata() -> Dict[str, Any]:
    if TREE_META_FILE.exists():
        try:
            return json.loads(TREE_META_FILE.read_text(encoding="utf-8"))
        except Exception:
            pass
    return {}

def parse_item_info(target_path: Path) -> Dict[str, Any]:
    """주어진 파일 또는 디렉터리 경로의 도서, 장, 절, 문단, 페이지, 실행 명령 정보를 파싱합니다."""
    abs_target = target_path.resolve()
    if abs_target.is_file():
        item_dir = abs_target.parent
    else:
        item_dir = abs_target

    # tracks/ 기준 상대 경로 분해
    try:
        rel = item_dir.relative_to(TRACKS_DIR.resolve())
        parts = rel.parts
    except ValueError:
        # 혹시 전체 레포 루트 기준 tracks/... 인 경우
        try:
            rel = item_dir.relative_to(REPO_ROOT.resolve())
            if rel.parts and rel.parts[0] == "tracks":
                parts = rel.parts[1:]
            else:
                parts = rel.parts
        except ValueError:
            parts = item_dir.parts

    book_code = parts[0] if len(parts) >= 1 else ""
    book_title = BOOK_NAMES.get(book_code, f"트랙 ({book_code})")
    
    part_str = "-"
    chapter_str = "-"
    section_str = "-"
    item_str = "-"
    page_str = ""
    summary_str = ""

    # 계층 분석
    if len(parts) >= 2:
        part_str = parts[1].replace("_", " ").title()
    if len(parts) >= 3:
        chapter_str = parts[2].replace("_", " ").title()
    if len(parts) >= 4:
        item_str = parts[3].replace("_", " ")

    # README.md에서 상세 제목, 요약, 원서 페이지 추출
    readme_path = item_dir / "README.md"
    if readme_path.exists():
        try:
            content = readme_path.read_text(encoding="utf-8")
            # 첫 번째 H1 제목 추출
            m_title = re.search(r"^#\s+(.+)$", content, re.MULTILINE)
            if m_title:
                summary_str = m_title.group(1).strip()
            # 페이지 번호 패턴 (예: p.123, Page 123)
            m_page = re.search(r"(?:p\.|page|페이지)\s*[:=]?\s*(\d+)", content, re.IGNORECASE)
            if m_page:
                page_str = f"p.{m_page.group(1)}"
            # 핵심 요약 블록 추출
            m_summary = re.search(r"(?:핵심\s*개념|요약|개요)\s*[:\-]\s*(.+)", content)
            if m_summary:
                summary_str = m_summary.group(1).strip()
        except Exception:
            pass

    # 상대 경로 정규화 (tracks/...)
    try:
        clean_rel = item_dir.relative_to(REPO_ROOT.resolve()).as_posix()
    except Exception:
        clean_rel = f"tracks/{'/'.join(parts)}"

    # 실행 및 테스트 명령어 생성
    run_cmd = f"./scripts/run.sh {clean_rel}"
    test_cmd = f"./scripts/test.sh {clean_rel}"

    return {
        "book_code": book_code,
        "book_title": book_title,
        "part": part_str,
        "chapter": chapter_str,
        "item": item_str,
        "page": page_str,
        "summary": summary_str,
        "path": clean_rel,
        "run_cmd": run_cmd,
        "test_cmd": test_cmd,
    }

def format_card(info: Dict[str, Any]) -> str:
    """stoneCpp 표준 위치 색인 카드 박스 포맷터."""
    lines = [
        "==============================================================================",
        f" 📖 [도서 / 트랙] : {info['book_title']}",
        f" 📁 [부 / 파트 ] : {info['part']}",
        f" 🔖 [장 / 챕터 ] : {info['chapter']}",
        f" 🎯 [실습 카타 ] : {info['item']}" + (f"  [원서 {info['page']}]" if info['page'] else ""),
    ]
    if info["summary"]:
        lines.append(f" 💡 [핵심 요약 ] : {info['summary']}")
    lines.append("------------------------------------------------------------------------------")
    lines.append(f" 📂 [실습 경로 ] : {info['path']}")
    lines.append(f" ⚡ [실행 명령 ] : {info['run_cmd']}")
    lines.append(f" 🧪 [테스트 명령] : {info['test_cmd']}")
    lines.append("==============================================================================")
    return "\n".join(lines)

def search_items(query: str, limit: int = 15) -> List[Dict[str, Any]]:
    """키워드로 tracks 하위 카타를 검색합니다."""
    query_lower = query.lower()
    matches = []

    for root, dirs, files in os.walk(TRACKS_DIR):
        has_source = any(f.startswith("main.") or f.startswith("test.") for f in files)
        if has_source or "README.md" in files:
            p = Path(root)
            # 폴더명이나 경로에 검색어 포함 여부 확인
            if query_lower in p.as_posix().lower():
                matches.append(parse_item_info(p))
                if len(matches) >= limit:
                    break
                continue

            # README.md 내용 검색
            rf = p / "README.md"
            if rf.exists():
                try:
                    content = rf.read_text(encoding="utf-8", errors="ignore")
                    if query_lower in content.lower():
                        matches.append(parse_item_info(p))
                        if len(matches) >= limit:
                            break
                except Exception:
                    pass

    return matches

def print_tree(book_filter: Optional[str] = None):
    """9대 명저 마스터 목차 트리를 출력합니다."""
    meta = load_tree_metadata()
    print("==============================================================================")
    print(" 📚 9대 명저 전체 도서·장·절 마스터 목차 트리 (Master Table of Contents)")
    print("==============================================================================")

    books = meta.get("books", [])
    if not books or not isinstance(books, list):
        # 폴더 기반 폴백
        for tr in sorted(TRACKS_DIR.iterdir()):
            if tr.is_dir() and not tr.name.startswith("."):
                print(f"\n📁 [{tr.name}] {BOOK_NAMES.get(tr.name, tr.name)}")
                for ch in sorted(tr.iterdir()):
                    if ch.is_dir() and not ch.name.startswith("."):
                        count = sum(1 for _ in ch.rglob("README.md"))
                        print(f"  └── 📖 {ch.name} ({count}개 실습 카타)")
        print("==============================================================================")
        return

    filter_clean = book_filter.lower() if book_filter else None

    for b_info in books:
        b_id = b_info.get("book_id", "")
        b_slug = b_info.get("slug", "")
        b_title = b_info.get("title_ko", "")
        b_lang = b_info.get("primary_language", "")
        b_author = b_info.get("author", "")
        
        if filter_clean:
            match_id = filter_clean in b_id.lower()
            match_slug = filter_clean in b_slug.lower()
            match_title = filter_clean in b_title.lower()
            if not (match_id or match_slug or match_title):
                continue

        print(f"\n📁 [{b_id} | {b_slug}] {b_title} ({b_author}) | 주 언어: {b_lang}")
        for part in b_info.get("parts", []):
            p_no = part.get("part_no", "")
            p_title = part.get("title", "")
            print(f"  ├── 📂 Part {p_no}. {p_title}")
            for ch in part.get("chapters", []):
                ch_no = ch.get("chapter_no", "")
                ch_title = ch.get("title", "")
                sections = ch.get("sections", [])
                katas = ch.get("katas", [])
                print(f"  │    └── 📖 Ch {ch_no}. {ch_title} ({len(katas)}개 카타, {len(sections)}개 절)")
    print("==============================================================================")

def print_list():
    """9대 명저 컨텐츠/트랙 요약 목록을 출력합니다."""
    meta = load_tree_metadata()
    print("==============================================================================")
    print(" 📚 9대 명저 컨텐츠 트랙 및 실습 카타 요약 목록 (Content Tracks Summary)")
    print("==============================================================================")
    books = meta.get("contents", meta.get("books", []))
    if books and isinstance(books, list):
        for b_info in books:
            b_id = b_info.get("content_id", b_info.get("book_id", ""))
            b_slug = b_info.get("slug", "")
            b_title = b_info.get("title_ko", "")
            b_lang = b_info.get("primary_language", "")
            st = b_info.get("stats", {})
            print(f" • [{b_id} | {b_slug:<26}] {b_title} ({b_lang}) — {st.get('chapters', 0)}장 / {st.get('katas', 0)}개 카타")
    else:
        for cid, slug in sorted(CONTENT_SHORT_MAP.items()):
            print(f" • [{cid} | {slug:<26}] {BOOK_NAMES.get(slug, slug)}")
    print("==============================================================================")

def main():
    parser = argparse.ArgumentParser(description="실습 파일의 도서명, 장, 절, 카타 위치 및 명령어를 출력하는 네비게이터 (stoneCpp 표준)")
    parser.add_argument("target", nargs="?", help="조회할 파일/폴더 경로 또는 검색 키워드")
    parser.add_argument("--tree", nargs="?", const="ALL", help="목차 트리 출력 (옵션: 특정 도서명/content01~content09)")
    parser.add_argument("--list", action="store_true", help="전체 컨텐츠 트랙 요약 목록 출력")
    parser.add_argument("--json", action="store_true", help="결과를 JSON 형식으로 출력")
    args = parser.parse_args()

    if args.list:
        print_list()
        return

    if args.tree:
        flt = None if args.tree == "ALL" else args.tree
        print_tree(flt)
        return

    if not args.target:
        parser.print_help()
        sys.exit(1)

    target_path = Path(args.target)
    # 직접 파일/디렉터리 경로로 존재하는 경우
    if target_path.exists() or (REPO_ROOT / target_path).exists():
        real_path = target_path if target_path.exists() else (REPO_ROOT / target_path)
        info = parse_item_info(real_path)
        if args.json:
            print(json.dumps(info, ensure_ascii=False, indent=2))
        else:
            print(format_card(info))
        return

    # 경로가 아니면 키워드 검색 수행
    print(f"🔍 키워드 '{args.target}' 로 실습 카타를 검색합니다...\n")
    results = search_items(args.target)
    if not results:
        print(f"일치하는 실습 카타를 찾을 수 없습니다: {args.target}")
        sys.exit(1)

    if args.json:
        print(json.dumps(results, ensure_ascii=False, indent=2))
    else:
        for i, info in enumerate(results, 1):
            print(f"[{i}/{len(results)}]")
            print(format_card(info))
            print()

if __name__ == "__main__":
    main()
