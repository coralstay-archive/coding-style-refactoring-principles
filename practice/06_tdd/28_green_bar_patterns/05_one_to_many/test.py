# ==============================================================================
# @file: test.py
# @path: tracks/06_tdd/28_green_bar_patterns/05_one_to_many/test.py
# @book: 《테스트 주도 개발 (TDD)》(Kent Beck 저, 인사이트)
# ==============================================================================

from main import sum_amounts

assert sum_amounts([5]) == 5          # 단일 원소(One)
assert sum_amounts([5, 10, 15]) == 30  # 다수 원소(Many)
assert sum_amounts([]) == 0           # 빈 리스트(Zero)

print("PASS: 28.4 One to Many")
