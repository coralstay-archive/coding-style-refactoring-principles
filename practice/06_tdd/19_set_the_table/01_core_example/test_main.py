# ==============================================================================
# @file: test_main.py
# @path: tracks/06_tdd/19_set_the_table/01_core_example/test_main.py
# @book: 《테스트 주도 개발 (TDD)》(Kent Beck 저, 인사이트)
# ==============================================================================

from main import WasRun

test = WasRun("testMethod")
test.run()
assert test.wasSetUp == 1
assert test.wasRun == 1
print("PASS: TDD Ch 19")
