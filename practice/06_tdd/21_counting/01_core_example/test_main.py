# ==============================================================================
# @file: test_main.py
# @path: tracks/06_tdd/21_counting/01_core_example/test_main.py
# @book: 《테스트 주도 개발 (TDD)》(Kent Beck 저, 인사이트)
# ==============================================================================

from main import TestResult
r = TestResult()
r.testStarted()
assert r.summary() == "1 run, 0 failed"
print("PASS: TDD Ch 21")
