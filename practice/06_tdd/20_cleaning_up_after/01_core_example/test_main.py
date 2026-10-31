# ==============================================================================
# @file: test_main.py
# @path: tracks/06_tdd/20_cleaning_up_after/01_core_example/test_main.py
# @book: 《테스트 주도 개발 (TDD)》(Kent Beck 저, 인사이트)
# ==============================================================================

from main import WasRun
t = WasRun("testMethod")
t.run()
assert t.log == "setUp testMethod tearDown "
print("PASS: TDD Ch 20")
