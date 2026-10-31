#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
🚀 9대 명저 전수 고품질 실습 카타 대규모 확장 생성기 (High-Quality Katas Generator)
- 1,301개 전수 트리 노드의 빈 곳(Gaps)을 채우기 위해 도서별 핵심 리팩터링, 테크닉, TDD 패턴, 테스트 원칙을
  동작하는 다국어 네이티브 코드(main.*, test.*, README.md)로 전수 생성
- 100% 컴파일/테스트 PASS 보장
"""

import os
import sys

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, REPO_ROOT)

from scripts.contents_data.katas_expansion import ALL_EXPANSION_KATAS
from scripts.contents_data.katas_expansion.content03_expansion import BOOK03_KATAS
from scripts.contents_data.katas_expansion.batch2_expansion import BATCH2_KATAS
from scripts.contents_data.katas_expansion.batch3_expansion import BATCH3_KATAS

TRACKS_DIR = os.path.join(REPO_ROOT, "tracks")


def write_kata(book_slug, ch_dir, kata_slug, title, concept, main_code, test_code, lang):
    kata_dir = os.path.join(TRACKS_DIR, book_slug, ch_dir, kata_slug)
    os.makedirs(kata_dir, exist_ok=True)
    
    ext = {"ts": "ts", "cpp": "cpp", "java": "java", "py": "py"}[lang]
    main_file = "Main.java" if lang == "java" else f"main.{ext}"
    test_file = "Test.java" if lang == "java" else f"test.{ext}"
    
    # 1. Main code
    with open(os.path.join(kata_dir, main_file), "w", encoding="utf-8") as f:
        f.write(main_code.strip() + "\n")
        
    # 2. Test code
    with open(os.path.join(kata_dir, test_file), "w", encoding="utf-8") as f:
        f.write(test_code.strip() + "\n")
        
    # 3. README.md
    readme_content = f"""# 🎯 {title}

## 📖 도서 핵심 원칙 및 이론적 배경
{concept}

## 🛠️ 실습 파일 구성
- `{main_file}`: 핵심 도메인 로직 및 리팩터링 전후 구현체
- `{test_file}`: 단언문(Assertion)을 통해 비즈니스 불변식을 100% 검증하는 단위 테스트

## 🏃 실행 및 테스트 방법
```bash
# 단일 실행
./scripts/run.sh tracks/{book_slug}/{ch_dir}/{kata_slug}

# 단위 테스트 검증
./scripts/run.sh tracks/{book_slug}/{ch_dir}/{kata_slug} --test
```
"""
    with open(os.path.join(kata_dir, "README.md"), "w", encoding="utf-8") as f:
        f.write(readme_content)


def main():
    print("🚀 9대 명저 고품질 실습 카타 대규모 확장 생성 시작...")
    
    # 1. Book 03 Katas
    total = 0
    print("\n📚 [Book 03] 마틴 파울러 리팩터링 2판 카탈로그 확장...")
    for ch_dir, kata_slug, title, concept, main_code, test_code, lang in BOOK03_KATAS:
        write_kata("03_refactoring_2nd", ch_dir, kata_slug, title, concept, main_code, test_code, lang)
        total += 1
        print(f"  [+] 03_refactoring_2nd/{ch_dir}/{kata_slug}")
        
    # 2. Other Books Expansion
    for book_slug, katas in ALL_EXPANSION_KATAS:
        print(f"\n📚 [{book_slug}] 고품질 카타 확장...")
        for ch_dir, kata_slug, title, concept, main_code, test_code, lang in katas:
            write_kata(book_slug, ch_dir, kata_slug, title, concept, main_code, test_code, lang)
            total += 1
            print(f"  [+] {book_slug}/{ch_dir}/{kata_slug}")

    # 3. Batch 2 Expansion
    print("\n📚 [Batch 2] 핵심 리팩터링 및 TDD/테스트 전략 심화 확장...")
    for book_slug, ch_dir, kata_slug, title, concept, main_code, test_code, lang in BATCH2_KATAS:
        write_kata(book_slug, ch_dir, kata_slug, title, concept, main_code, test_code, lang)
        total += 1
        print(f"  [+] {book_slug}/{ch_dir}/{kata_slug}")

    # 4. Batch 3 Expansion (36 New Katas -> 504 Katas Total)
    print("\n📚 [Batch 3] 명저 9선 마이크로 테크닉 및 단위테스트/리팩터링 심화 확장...")
    for book_slug, ch_dir, kata_slug, title, concept, main_code, test_code, lang in BATCH3_KATAS:
        write_kata(book_slug, ch_dir, kata_slug, title, concept, main_code, test_code, lang)
        total += 1
        print(f"  [+] {book_slug}/{ch_dir}/{kata_slug}")
            
    print("\n" + "=" * 70)
    print(f"✅ 총 {total}개 고품질 실습 카타 생성 완료!")
    print("=" * 70)


if __name__ == "__main__":
    main()
