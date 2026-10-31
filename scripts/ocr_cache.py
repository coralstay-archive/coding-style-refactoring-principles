#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
📚 OCR 캐시 관리자 (OCR Cache Manager)
- stoneCpp의 docs/.ocr-cache 아키텍처를 계승하여 구현
- 9대 명저 PDF 원서의 실제 목차(TOC) 및 주요 페이지를 Apple Vision 프레임워크로 고속 추출하고 캐싱
- 캐시가 존재하면 재실행 없이 즉시 캐시 파일(page_%04d.txt)을 읽어 반환
"""

import argparse
import os
import subprocess
import sys

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OCR_BIN = os.path.join(REPO_ROOT, "docs", ".ocr-cache", "bin", "ocr_pdf")

BOOKS_CONFIG = {
    "01_code_complete": {
        "title": "Code Complete 2판 (Steve McConnell)",
        "pdf": os.path.join(REPO_ROOT, "contents", "Code-Complete-2.pdf"),
        "cache_dir": os.path.join(REPO_ROOT, "docs", ".ocr-cache", "01_code_complete_toc"),
        "toc_pages": (8, 28),
    },
    "02_good_code_bad_code": {
        "title": "Good Code, Bad Code (Tom Long)",
        "pdf": os.path.join(REPO_ROOT, "contents", "굳코드-배드코드.pdf"),
        "cache_dir": os.path.join(REPO_ROOT, "docs", ".ocr-cache", "02_good_code_bad_code_toc"),
        "toc_pages": (6, 20),
    },
    "03_refactoring_2nd": {
        "title": "Refactoring 2nd Edition (Martin Fowler)",
        "pdf": os.path.join(REPO_ROOT, "contents", "리팩터링-2판.pdf"),
        "cache_dir": os.path.join(REPO_ROOT, "docs", ".ocr-cache", "03_refactoring_2nd_toc"),
        "toc_pages": (6, 22),
    },
    "04_refactoring_to_patterns": {
        "title": "Refactoring to Patterns (Joshua Kerievsky)",
        "pdf": os.path.join(REPO_ROOT, "contents", "패턴을-활용한-리팩토링.pdf"),
        "cache_dir": os.path.join(REPO_ROOT, "docs", ".ocr-cache", "04_refactoring_to_patterns_toc"),
        "toc_pages": (8, 24),
    },
    "05_legacy_code": {
        "title": "Working Effectively with Legacy Code (Michael Feathers)",
        "pdf": os.path.join(REPO_ROOT, "contents", "레거시코드활용전략.pdf"),
        "cache_dir": os.path.join(REPO_ROOT, "docs", ".ocr-cache", "05_legacy_code_toc"),
        "toc_pages": (8, 24),
    },
    "06_tdd": {
        "title": "Test-Driven Development: By Example (Kent Beck)",
        "pdf": os.path.join(REPO_ROOT, "contents", "테스트-주도-개발.pdf"),
        "cache_dir": os.path.join(REPO_ROOT, "docs", ".ocr-cache", "06_tdd_toc"),
        "toc_pages": (19, 23),
    },
    "07_unit_testing": {
        "title": "Unit Testing: Principles, Practices, and Patterns (Vladimir Khorikov)",
        "pdf": os.path.join(REPO_ROOT, "contents", "유닛-테스팅-단위-테스트.pdf"),
        "cache_dir": os.path.join(REPO_ROOT, "docs", ".ocr-cache", "07_unit_testing_toc"),
        "toc_pages": (6, 22),
    },
    "08_pragmatic_unit_testing": {
        "title": "Pragmatic Unit Testing in Java 8 with JUnit (Jeff Langr)",
        "pdf": os.path.join(REPO_ROOT, "contents", "자바와-Junit을-활용한-실용주의-단위-테스트.pdf"),
        "cache_dir": os.path.join(REPO_ROOT, "docs", ".ocr-cache", "08_pragmatic_unit_testing_toc"),
        "toc_pages": (8, 22),
    },
    "09_junit_in_action": {
        "title": "JUnit in Action 3rd Edition (Cătălin Tudose)",
        "pdf": os.path.join(REPO_ROOT, "contents", "Junit-In-Action-3th.pdf"),
        "cache_dir": os.path.join(REPO_ROOT, "docs", ".ocr-cache", "09_junit_in_action_toc"),
        "toc_pages": (8, 26),
    },
}


def check_status():
    print("=" * 70)
    print(" 📑 9대 명저 OCR 목차 캐시 상태 보고서 (docs/.ocr-cache)")
    print("=" * 70)
    total_cached = 0
    total_expected = 0
    for key, cfg in BOOKS_CONFIG.items():
        cache_dir = cfg["cache_dir"]
        start_p, end_p = cfg["toc_pages"]
        expected = end_p - start_p + 1
        total_expected += expected
        cached = 0
        if os.path.isdir(cache_dir):
            for p in range(start_p, end_p + 1):
                fpath = os.path.join(cache_dir, f"page_{p:04d}.txt")
                if os.path.isfile(fpath) and os.path.getsize(fpath) > 0:
                    cached += 1
        total_cached += cached
        pct = (cached / expected * 100) if expected else 0
        status_icon = "✅" if cached == expected else ("⚠️" if cached > 0 else "❌")
        print(f"{status_icon} [{key}] {cfg['title']}")
        print(f"    페이지 범위: p.{start_p} ~ p.{end_p} (총 {expected}p) | 캐시 완료: {cached}/{expected} ({pct:.0f}%)")
        print(f"    캐시 경로: {os.path.relpath(cache_dir, REPO_ROOT)}")
    print("-" * 70)
    overall_pct = (total_cached / total_expected * 100) if total_expected else 0
    print(f"전체 캐시 진척도: {total_cached}/{total_expected} 페이지 ({overall_pct:.1f}%)")
    print("=" * 70)


def extract_book(key: str, force: bool = False):
    if key not in BOOKS_CONFIG:
        print(f"Error: 알 수 없는 도서 키 '{key}'. 가능한 목록: {list(BOOKS_CONFIG.keys())}")
        return False
    cfg = BOOKS_CONFIG[key]
    pdf_path = cfg["pdf"]
    cache_dir = cfg["cache_dir"]
    start_p, end_p = cfg["toc_pages"]

    if not os.path.isfile(pdf_path):
        print(f"Error: PDF 파일을 찾을 수 없습니다: {pdf_path}")
        return False

    if not os.path.isfile(OCR_BIN) or not os.access(OCR_BIN, os.X_OK):
        print(f"Error: OCR 실행 바이너리가 없습니다: {OCR_BIN}")
        return False

    os.makedirs(cache_dir, exist_ok=True)

    # force 옵션이 아닐 때 이미 모든 페이지가 캐싱되어 있다면 스킵
    if not force:
        all_exist = True
        for p in range(start_p, end_p + 1):
            fpath = os.path.join(cache_dir, f"page_{p:04d}.txt")
            if not os.path.isfile(fpath) or os.path.getsize(fpath) == 0:
                all_exist = False
                break
        if all_exist:
            print(f"⚡ [{key}] p.{start_p}~p.{end_p} 이미 100% 캐싱 완료되어 스킵합니다.")
            return True

    print(f"🔍 [{key}] OCR 추출 실행 중... ({cfg['title']})")
    cmd = [OCR_BIN, pdf_path, cache_dir, str(start_p), str(end_p)]
    res = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
    if res.returncode == 0:
        print(f"✅ [{key}] OCR 캐시 완료 -> {os.path.relpath(cache_dir, REPO_ROOT)}")
        return True
    else:
        print(f"❌ [{key}] OCR 추출 실패: {res.stderr}")
        return False


def extract_all(force: bool = False):
    for key in BOOKS_CONFIG:
        extract_book(key, force=force)


def read_toc(key: str):
    if key not in BOOKS_CONFIG:
        print(f"Error: 알 수 없는 도서 키 '{key}'")
        return
    cfg = BOOKS_CONFIG[key]
    cache_dir = cfg["cache_dir"]
    start_p, end_p = cfg["toc_pages"]
    print(f"📖 [{cfg['title']}] 목차 캐시 전문:")
    print("=" * 70)
    for p in range(start_p, end_p + 1):
        fpath = os.path.join(cache_dir, f"page_{p:04d}.txt")
        if os.path.isfile(fpath):
            with open(fpath, "r", encoding="utf-8") as f:
                print(f.read())
        else:
            print(f"[p.{p}: 캐시 없음]")
    print("=" * 70)


def main():
    parser = argparse.ArgumentParser(description="9대 명저 OCR 목차 캐시 관리자 (docs/.ocr-cache)")
    parser.add_argument("--status", action="store_true", help="목차 캐시 상태 요약 보고서 출력")
    parser.add_argument("--extract-all", action="store_true", help="모든 도서의 목차 페이지 OCR 일괄 추출 및 캐싱")
    parser.add_argument("--extract", type=str, help="특정 도서 키의 목차 OCR 추출")
    parser.add_argument("--read", type=str, help="특정 도서의 캐시된 목차 텍스트 출력")
    parser.add_argument("--force", action="store_true", help="기존 캐시 무시하고 강제 재생성")

    args = parser.parse_args()

    if args.status or len(sys.argv) == 1:
        check_status()
    elif args.extract_all:
        extract_all(force=args.force)
        check_status()
    elif args.extract:
        extract_book(args.extract, force=args.force)
    elif args.read:
        read_toc(args.read)


if __name__ == "__main__":
    main()
