# ==============================================================================
# @file: test_main.py
# @path: tracks/06_tdd/23_how_suite_it_is/01_core_example/test_main.py
# @book: 《테스트 주도 개발 (TDD)》(Kent Beck 저, 인사이트)
# ==============================================================================

from main import TestSuite
s = TestSuite()
s.add(1)
s.add(2)
assert s.count() == 2
print("PASS: TDD Ch 23")
