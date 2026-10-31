# ==============================================================================
# @file: test_main.py
# @path: tracks/06_tdd/28_green_bar_patterns/01_core_example/test_main.py
# @book: 《테스트 주도 개발 (TDD)》(Kent Beck 저, 인사이트)
# ==============================================================================

from main import add
assert add(2, 3) == 5
assert add(5, 5) == 10
print("PASS: TDD Ch 28")
