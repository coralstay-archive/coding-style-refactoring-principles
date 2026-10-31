# ==============================================================================
# @file: test.py
# @path: tracks/06_tdd/28_green_bar_patterns/03_triangulation/test.py
# @book: 《테스트 주도 개발 (TDD)》(Kent Beck 저, 인사이트)
# ==============================================================================

import sys
from main import add

assert add(2, 2) == 4
assert add(3, 7) == 10  # 두 번째 예제로 삼각측량 검증
assert add(0, 5) == 5

print("PASS: 28.2 Triangulation")
