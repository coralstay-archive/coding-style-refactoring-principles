# ==============================================================================
# @file: test_main.py
# @path: tracks/06_tdd/27_testing_patterns/01_core_example/test_main.py
# @book: 《테스트 주도 개발 (TDD)》(Kent Beck 저, 인사이트)
# ==============================================================================

from main import DummyFile
try:
    DummyFile().read()
    assert False
except IOError:
    pass
print("PASS: TDD Ch 27")
