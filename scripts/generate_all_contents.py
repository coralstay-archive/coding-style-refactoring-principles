#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
9 Software Engineering Classics All-Book Scaffold & Exercise Generator
`stoneCpp` 모델을 계승하여 9대 명저 162개 전 챕터의 실습 예제(README, main, test)를 전수 생성하고 검증합니다.
"""

import argparse
import importlib
import os
import shutil
import subprocess
import sys
import tempfile
from collections import defaultdict

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TRACKS_DIR = os.path.join(ROOT_DIR, "tracks")

CONTENT_MODULES = [
    "contents_data.content01_code_complete",
    "contents_data.content02_good_code",
    "contents_data.content03_refactoring2",
    "contents_data.content04_refactor_patterns",
    "contents_data.content05_legacy_code",
    "contents_data.content06_tdd",
    "contents_data.content07_unit_testing",
    "contents_data.content08_pragmatic_junit",
    "contents_data.content09_junit_action",
]


def load_all_items():
    scripts_dir = os.path.dirname(os.path.abspath(__file__))
    if scripts_dir not in sys.path:
        sys.path.insert(0, scripts_dir)

    all_items = []
    for mod_name in CONTENT_MODULES:
        try:
            mod = importlib.import_module(mod_name)
            items = getattr(mod, "ITEMS", [])
            all_items.extend(items)
        except Exception as e:
            print(f"[Error] Failed to load {mod_name}: {e}")
    return all_items


def get_file_names(lang: str):
    if lang == "cpp":
        return "main.cpp", "test.cpp", "cpp"
    elif lang == "ts":
        return "main.ts", "test.ts", "typescript"
    elif lang == "java":
        return "Main.java", "Test.java", "java"
    elif lang == "py":
        return "main.py", "test_main.py", "python"
    return "main.txt", "test.txt", "text"


def make_readme(item: dict) -> str:
    book_title = item["book_title"]
    ch_title = item["chapter_title"]
    title = item["title"]
    concept = item["concept"].strip()
    target_code = item["target_code"].strip()
    test_code = item["test_code"].strip()
    lang = item["lang"]
    main_file, test_file, md_lang = get_file_names(lang)

    return f"""# {title}

> **도서**: `{book_title}`  
> **장/절**: `{ch_title}`  
> **실습 언어**: `{lang.upper()}`

---

## 1. 핵심 개념 및 설계 원리
{concept}

---

## 2. 목표 코드 (`{main_file}`)
```{md_lang}
{target_code}
```

---

## 3. 검증 단위 테스트 (`{test_file}`)
```{md_lang}
{test_code}
```

---

## 4. 실행 및 테스트 방법
통합 실행기를 통해 바로 실행할 수 있습니다:
```bash
# 목표 코드 실행
./scripts/run.sh tracks/{item['track_dir']}/{item['chapter_dir']}/{item['section_slug']}

# 단위 테스트 실행
./scripts/run.sh tracks/{item['track_dir']}/{item['chapter_dir']}/{item['section_slug']} --test
```
"""


def generate_all(force: bool = False):
    items = load_all_items()
    os.makedirs(TRACKS_DIR, exist_ok=True)

    book_index = defaultdict(lambda: {"title": "", "chapters": []})
    created = 0

    for item in items:
        t_dir = item["track_dir"]
        ch_dir = item["chapter_dir"]
        s_slug = item["section_slug"]
        folder = os.path.join(TRACKS_DIR, t_dir, ch_dir, s_slug)
        os.makedirs(folder, exist_ok=True)

        lang = item["lang"]
        main_name, test_name, _ = get_file_names(lang)

        readme_path = os.path.join(folder, "README.md")
        main_path = os.path.join(folder, main_name)
        test_path = os.path.join(folder, test_name)

        book_index[t_dir]["title"] = item["book_title"]
        book_index[t_dir]["chapters"].append((ch_dir, s_slug, item["title"], item["lang"]))

        # README.md
        with open(readme_path, "w", encoding="utf-8") as f:
            f.write(make_readme(item))

        # main.*
        if force or not os.path.exists(main_path):
            with open(main_path, "w", encoding="utf-8") as f:
                f.write(item["target_code"])

        # test.*
        if force or not os.path.exists(test_path):
            with open(test_path, "w", encoding="utf-8") as f:
                f.write(item["test_code"])

        created += 1

    # tracks/README.md 색인 생성
    idx_path = os.path.join(TRACKS_DIR, "README.md")
    unique_chapters = set((item["track_dir"], item["chapter_num"]) for item in items)
    with open(idx_path, "w", encoding="utf-8") as f:
        f.write("# 📚 9대 명저 전수 실습 트랙 색인 (Tracks Index)\n\n")
        f.write(f"소프트웨어 엔지니어링 9대 명저의 **총 {len(unique_chapters)}개 전 챕터 및 {len(items)}개 세부 절 실습 예제(이론/개념/원칙 포함 전수 구현)**가 수록되어 있습니다.\n\n")
        for t_dir in sorted(book_index.keys()):
            data = book_index[t_dir]
            f.write(f"## {data['title']} (`{t_dir}/`)\n\n")
            for ch_dir, s_slug, title, lang in data["chapters"]:
                f.write(f"- [{title}](./{t_dir}/{ch_dir}/{s_slug}/) — `[{lang.upper()}]`\n")
            f.write("\n")

    print(f"✅ 총 9권 도서 {created}개 전 챕터 실습 스캐폴드가 성공적으로 생성되었습니다!")
    print(f"📄 마스터 색인 파일: {idx_path}")


def verify_all():
    items = load_all_items()
    print(f"🔍 총 {len(items)}개 도서 챕터 예제의 다국어 유효성 전수 검사를 시작합니다...")

    success = 0
    fail = 0

    for item in items:
        lang = item["lang"]
        code = item["target_code"]
        name = f"[{lang.upper()}] {item['track_dir']}/{item['chapter_dir']}"

        try:
            if lang == "cpp":
                with tempfile.NamedTemporaryFile(suffix=".cpp", mode="w", delete=False) as tf:
                    tf.write(code)
                    tf_path = tf.name
                res = subprocess.run(["g++", "-std=c++17", "-fsyntax-only", tf_path],
                                     stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
                os.remove(tf_path)
                if res.returncode != 0: raise RuntimeError(res.stderr)

            elif lang == "ts":
                with tempfile.NamedTemporaryFile(suffix=".ts", mode="w", delete=False) as tf:
                    tf.write(code)
                    tf_path = tf.name
                node_bin = shutil.which("node") or "/opt/homebrew/bin/node"
                ts_node_bin = "/opt/homebrew/bin/ts-node" if os.path.exists("/opt/homebrew/bin/ts-node") else (shutil.which("ts-node") or "ts-node")
                cmd = [node_bin, ts_node_bin, "--transpile-only", tf_path] if os.path.exists(ts_node_bin) else ["ts-node", "--transpile-only", tf_path]
                res = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
                os.remove(tf_path)
                if res.returncode != 0: raise RuntimeError(res.stderr)

            elif lang == "java":
                temp_dir = tempfile.mkdtemp()
                main_java = os.path.join(temp_dir, "Main.java")
                with open(main_java, "w", encoding="utf-8") as f:
                    f.write(code)
                javac_bin = "/opt/homebrew/opt/openjdk/bin/javac" if os.path.exists("/opt/homebrew/opt/openjdk/bin/javac") else (shutil.which("javac") or "javac")
                res = subprocess.run([javac_bin, "-encoding", "UTF-8", main_java],
                                     stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
                shutil.rmtree(temp_dir)
                if res.returncode != 0: raise RuntimeError(res.stderr)

            elif lang == "py":
                with tempfile.NamedTemporaryFile(suffix=".py", mode="w", delete=False) as tf:
                    tf.write(code)
                    tf_path = tf.name
                res = subprocess.run(["python3", "-m", "py_compile", tf_path],
                                     stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
                os.remove(tf_path)
                if res.returncode != 0: raise RuntimeError(res.stderr)

            success += 1
            # 간결한 출력
            print(f"  [PASS] {name}")
        except Exception as e:
            print(f"  [FAIL] {name}: {e}")
            fail += 1

    print("\n==========================================")
    print(f"전수 검증 완료: 성공 {success}개 / 실패 {fail}개")
    if fail > 0:
        sys.exit(1)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Generate exercises for all 9 books")
    parser.add_argument("--force", action="store_true", help="기존 파일을 강제로 덮어씁니다.")
    parser.add_argument("--verify", action="store_true", help="모든 언어(C++, TS, Java, Python) 코드의 컴파일/구문 유효성을 검증합니다.")
    args = parser.parse_args()

    if args.verify:
        verify_all()
    else:
        generate_all(force=args.force)
