#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Coding-style-refactoring-principles Kata & Scaffold Generator
`stoneCpp`의 파이프라인을 계승하여 4대 도메인 16개 핵심 역량의 실습 카타(README, bad_code, good_code, test)를 자동 생성 및 검증합니다.
"""

import argparse
import importlib
import os
import re
import subprocess
import sys
import tempfile

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PRACTICES_DIR = os.path.join(ROOT_DIR, "practice", "10_refactoring_katas")

DATA_MODULES = [
    "data.cat01_code_quality",
    "data.cat02_unit_testing",
    "data.cat03_refactoring_smells",
    "data.cat04_legacy_and_patterns",
]


def load_all_items():
    scripts_dir = os.path.dirname(os.path.abspath(__file__))
    if scripts_dir not in sys.path:
        sys.path.insert(0, scripts_dir)

    all_items = []
    for mod_name in DATA_MODULES:
        try:
            mod = importlib.import_module(mod_name)
            items = getattr(mod, "ITEMS", [])
            all_items.extend(items)
        except ModuleNotFoundError as e:
            print(f"[Warning] Failed to import {mod_name}: {e}")
    return all_items


def make_readme(item: dict) -> str:
    title = item["title"]
    section_title = item["section_title"]
    book_reference = item.get("book_reference", "소프트웨어 공학 표준 원칙")
    smell_or_issue = item["smell_or_issue"].strip()
    concept = item["concept"].strip()
    good_code = item["good_code"].strip()
    bad_code = item["bad_code"].strip()
    test_code = item["test_code"].strip()
    steps = item.get("steps", [])

    step_lines = "\n".join(f"{i+1}. {s}" for i, s in enumerate(steps)) if steps else ""
    if step_lines:
        step_section = f"\n## 단계별 리팩터링 가이드 (Step-by-Step)\n{step_lines}\n"
    else:
        step_section = ""

    return f"""# {title}

> **도메인(Domain)**: {section_title}  
> **출처 및 레퍼런스**: `{book_reference}`

---

## 1. 코드 악취 및 문제점 (Code Smell / Issue)
{smell_or_issue}

---

## 2. 핵심 설계 개념 및 원리 (Concept & Principles)
{concept}

---

## 3. 시작점: 문제의 코드 (`bad_code.cpp`)
```cpp
{bad_code}
```

---

## 4. 목표점: 리팩터링 완료 코드 (`good_code.cpp`)
```cpp
{good_code}
```
{step_section}
---

## 5. 단위 테스트 검증 코드 (`test.cpp`)
> 리팩터링 전후에 동일하게 통과해야 하는 **리팩터링 내성을 갖춘 단위 테스트**입니다.
```cpp
{test_code}
```
"""


def generate_katas(force: bool = False):
    items = load_all_items()
    os.makedirs(PRACTICES_DIR, exist_ok=True)

    created_count = 0
    skipped_count = 0

    domain_map = {}

    for item in items:
        sec_dir = item["section_dir"]
        folder_name = f"{item['num']}_{item['slug']}"
        target_dir = os.path.join(PRACTICES_DIR, sec_dir, folder_name)
        os.makedirs(target_dir, exist_ok=True)

        readme_path = os.path.join(target_dir, "README.md")
        bad_path = os.path.join(target_dir, "bad_code.cpp")
        good_path = os.path.join(target_dir, "good_code.cpp")
        test_path = os.path.join(target_dir, "test.cpp")

        if sec_dir not in domain_map:
            domain_map[sec_dir] = {"title": item["section_title"], "items": []}
        domain_map[sec_dir]["items"].append((folder_name, item["title"], item.get("book_reference", "")))

        # 1. README.md
        with open(readme_path, "w", encoding="utf-8") as f:
            f.write(make_readme(item))

        # 2. bad_code.cpp
        if force or not os.path.exists(bad_path):
            with open(bad_path, "w", encoding="utf-8") as f:
                f.write(f"// [실습 시작용 베이스 코드]\n// README.md의 문제점을 분석하고 직접 good_code.cpp 형태로 리팩터링해보세요.\n\n{item['bad_code']}")

        # 3. good_code.cpp
        if force or not os.path.exists(good_path):
            with open(good_path, "w", encoding="utf-8") as f:
                f.write(f"// [리팩터링 완성 모범 코드]\n\n{item['good_code']}")

        # 4. test.cpp
        if force or not os.path.exists(test_path):
            with open(test_path, "w", encoding="utf-8") as f:
                f.write(f"// [GoogleTest 단위 테스트]\n\n{item['test_code']}")

        created_count += 1

    # practices/README.md 카타 색인 생성
    index_md_path = os.path.join(PRACTICES_DIR, "README.md")
    with open(index_md_path, "w", encoding="utf-8") as f:
        f.write("# 🥋 소프트웨어 품질 & 리팩터링 실전 카타 뱅크 (Kata Practices)\n\n")
        f.write("본 디렉터리는 9대 명저에서 추출한 핵심 원칙을 직접 손으로 타이핑하고 리팩터링하며 검증할 수 있는 실습 뱅크입니다.\n\n")
        for sec_dir, data in domain_map.items():
            f.write(f"## {data['title']} (`{sec_dir}/`)\n\n")
            for folder, title, book in data["items"]:
                f.write(f"- [{title}](./{sec_dir}/{folder}/) — *{book}*\n")
            f.write("\n")

    print(f"✅ 총 {created_count}개 실습 카타 스캐폴드가 성공적으로 생성/갱신되었습니다.")
    print(f"📄 카타 색인 문서: {index_md_path}")


def verify_katas():
    items = load_all_items()
    print(f"🔍 총 {len(items)}개 항목의 C++17 컴파일 유효성 전수 검사를 시작합니다...")

    success = 0
    fail = 0

    for item in items:
        name = f"{item['section_dir']}/{item['num']}_{item['slug']}"
        source = f"{item['good_code']}\n\nint main() {{ return 0; }}\n"

        with tempfile.NamedTemporaryFile(suffix=".cpp", mode="w", delete=False) as tf:
            tf.write(source)
            tf_path = tf.name

        out_bin = tf_path + ".out"
        try:
            res = subprocess.run(
                ["g++", "-std=c++17", "-fsyntax-only", tf_path],
                stdout=subprocess.PIPE,
                stderr=subprocess.PIPE,
                text=True
            )
            if res.returncode == 0:
                print(f"  [PASS] {name}")
                success += 1
            else:
                print(f"  [FAIL] {name}\n{res.stderr}")
                fail += 1
        finally:
            if os.path.exists(tf_path):
                os.remove(tf_path)

    print(f"\n==========================================")
    print(f"검사 결과: 성공 {success}개 / 실패 {fail}개")
    if fail > 0:
        sys.exit(1)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Kata Scaffold Generator")
    parser.add_argument("--force", action="store_true", help="기존 실습 파일을 강제로 덮어씁니다.")
    parser.add_argument("--verify", action="store_true", help="모든 항목의 C++17 구문 유효성을 컴파일 검증합니다.")
    args = parser.parse_args()

    if args.verify:
        verify_katas()
    else:
        generate_katas(force=args.force)
