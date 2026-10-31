#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
scripts/apply_file_frontmatter.py
모든 tracks/ 및 practices/ 하위 말단 노드 파일(C++, TypeScript, Java, Python, Markdown)의 상단에
고유 식별자(@file), 전체 상대 경로(@path), 참고 도서명(@book)을
명확히 기록하는 표준화 프론트매터를 일괄 생성/갱신합니다 (handcrafted 표준 계승).

기존 프론트매터를 감지하여 깔끔히 제거한 뒤 최신 표준으로 재작성합니다.
"""

import os
import re
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
TRACKS_DIR = (REPO_ROOT / "tracks").resolve()
PRACTICE_DIR = (REPO_ROOT / "practice").resolve()

EXT_CPP = {".cpp", ".c", ".h", ".hpp"}
EXT_JAVA_TS = {".ts", ".java", ".js"}
EXT_PY = {".py"}
EXT_MD = {".md"}

BOOK_TITLES = {
    "01_code_complete": "《Code Complete 2판》(Steve McConnell 저, 정보문화사)",
    "02_good_code_bad_code": "《굿 코드, 배드 코드》(Tom Long 저, 위키북스)",
    "03_refactoring_2nd": "《리팩터링 2판》(Martin Fowler 저, 한빛미디어)",
    "04_refactoring_to_patterns": "《패턴을 활용한 리팩터링》(Joshua Kerievsky 저, 인사이트)",
    "05_legacy_code": "《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)",
    "06_tdd": "《테스트 주도 개발 (TDD)》(Kent Beck 저, 인사이트)",
    "07_unit_testing": "《단위 테스트: 생산성과 품질을 위한 단위 테스트 원칙과 패턴》(Vladimir Khorikov 저, 에이콘)",
    "08_pragmatic_unit_testing": "《자바와 JUnit을 활용한 실용주의 단위 테스트》(Jeff Langr 저, 길벗)",
    "09_junit_in_action": "《JUnit in Action 3판》(Cătălin Tudose 저, 제이펍)",
    "10_refactoring_katas": "《소프트웨어 공학 4대 도메인 실전 카타 뱅크》(4-File Formula)",
}

def get_book_title(rel_path: Path) -> str:
    """전체 레포 기준 상대 경로에서 참고 도서명을 정확히 반환합니다."""
    parts = rel_path.parts
    if not parts:
        return "Software Engineering Classics Curriculum"
    if parts[0] in ("tracks", "practice") and len(parts) > 1:
        return BOOK_TITLES.get(parts[1], "소프트웨어 공학 9대 명저 실습 트랙")
    return "Coding-Style, Refactoring & Testing Curriculum"

def strip_frontmatter(content: str, ext: str) -> str:
    """기존에 주입된 주석 프론트매터 블록을 깔끔히 제거합니다."""
    text = content
    if ext in EXT_MD:
        # <!-- \n =+\n @file: ... \n =+\n -->
        text = re.sub(
            r"^\s*<!--\s*\n=+\s*\n(?:@[a-zA-Z0-9_]+:[^\n]*\n)+\s*=+\s*\n-->\s*\n?",
            "",
            text,
            flags=re.MULTILINE
        )
    elif ext in (EXT_CPP | EXT_JAVA_TS):
        # // =+\n // @file: ... \n // =+\n
        text = re.sub(
            r"^\s*//\s*=+\s*\n(?:\s*//\s*@[a-zA-Z0-9_]+:[^\n]*\n)+\s*//\s*=+\s*\n?",
            "",
            text,
            flags=re.MULTILINE
        )
    elif ext in EXT_PY:
        # # =+\n # @file: ... \n # =+\n
        text = re.sub(
            r"^\s*#\s*=+\s*\n(?:\s*#\s*@[a-zA-Z0-9_]+:[^\n]*\n)+\s*#\s*=+\s*\n?",
            "",
            text,
            flags=re.MULTILINE
        )
    return text.lstrip("\n")

def make_frontmatter(file_name: str, rel_path: str, book_title: str, ext: str) -> str:
    """언어별 주석 문법에 맞는 표준 프론트매터 문자열을 생성합니다."""
    border = "=" * 78
    if ext in EXT_MD:
        return (
            f"<!--\n"
            f"{border}\n"
            f"@file: {file_name}\n"
            f"@path: {rel_path}\n"
            f"@book: {book_title}\n"
            f"{border}\n"
            f"-->\n\n"
        )
    elif ext in (EXT_CPP | EXT_JAVA_TS):
        return (
            f"// {border}\n"
            f"// @file: {file_name}\n"
            f"// @path: {rel_path}\n"
            f"// @book: {book_title}\n"
            f"// {border}\n\n"
        )
    elif ext in EXT_PY:
        return (
            f"# {border}\n"
            f"# @file: {file_name}\n"
            f"# @path: {rel_path}\n"
            f"# @book: {book_title}\n"
            f"# {border}\n\n"
        )
    return ""

def process_file(file_path: Path) -> bool:
    """단일 파일에 프론트매터를 적용합니다."""
    ext = file_path.suffix.lower()
    supported_exts = EXT_CPP | EXT_JAVA_TS | EXT_PY | EXT_MD
    if ext not in supported_exts:
        return False

    # 루트 바로 아래의 README.md 등은 스킵
    try:
        rel = file_path.relative_to(REPO_ROOT)
    except ValueError:
        return False

    if len(rel.parts) < 3:
        return False

    try:
        raw = file_path.read_text(encoding="utf-8")
    except Exception:
        return False

    book_title = get_book_title(rel)
    body = strip_frontmatter(raw, ext)
    fm = make_frontmatter(file_path.name, rel.as_posix(), book_title, ext)
    new_content = fm + body

    if raw != new_content:
        prev_mode = file_path.stat().st_mode & 0o777
        if not (prev_mode & 0o200):
            file_path.chmod(0o644)
        file_path.write_text(new_content, encoding="utf-8")
        file_path.chmod(prev_mode)
        return True
    return False

def main():
    print("🏷️ 말단 노드 파일 주석 프론트매터 동기화 시작 (handcrafted 표준)...")
    updated_count = 0
    total_count = 0

    for scan_dir in (PRACTICE_DIR,):
        if not scan_dir.exists():
            continue
        for root, dirs, files in os.walk(scan_dir):
            dirs[:] = [d for d in dirs if not d.startswith(".") and d != "assets"]
            for fn in files:
                fp = Path(root) / fn
                total_count += 1
                if process_file(fp):
                    updated_count += 1

    print(f"✅ 프론트매터 동기화 완료: 총 {total_count}개 파일 검사 / {updated_count}개 파일 갱신")

if __name__ == "__main__":
    main()
