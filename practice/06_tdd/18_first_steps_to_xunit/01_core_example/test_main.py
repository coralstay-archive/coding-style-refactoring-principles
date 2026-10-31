# ==============================================================================
# @file: test_main.py
# @path: tracks/06_tdd/18_first_steps_to_xunit/01_core_example/test_main.py
# @book: 《테스트 주도 개발 (TDD)》(Kent Beck 저, 인사이트)
# ==============================================================================

from main import WasRun

test = WasRun("testMethod")
assert test.wasRun is None
test.run()
assert test.wasRun == 1
print("PASS: TDD Ch 18")
