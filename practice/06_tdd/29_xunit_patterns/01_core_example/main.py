# ==============================================================================
# @file: main.py
# @path: tracks/06_tdd/29_xunit_patterns/01_core_example/main.py
# @book: 《테스트 주도 개발 (TDD)》(Kent Beck 저, 인사이트)
# ==============================================================================

def assert_equal(expected, actual):
    assert expected == actual, f"Expected {expected}, got {actual}"

if __name__ == "__main__":
    assert_equal(100, 100)
    print("[TDD Ch 29] 단언문 패턴 검증 완료")
