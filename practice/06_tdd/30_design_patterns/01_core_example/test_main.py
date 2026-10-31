# ==============================================================================
# @file: test_main.py
# @path: tracks/06_tdd/30_design_patterns/01_core_example/test_main.py
# @book: 《테스트 주도 개발 (TDD)》(Kent Beck 저, 인사이트)
# ==============================================================================

from main import ValueObject
assert ValueObject(10) == ValueObject(10)
print("PASS: TDD Ch 30")
