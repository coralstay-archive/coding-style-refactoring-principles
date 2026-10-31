# ==============================================================================
# @file: main.py
# @path: tracks/06_tdd/25_tdd_patterns/01_core_example/main.py
# @book: 《테스트 주도 개발 (TDD)》(Kent Beck 저, 인사이트)
# ==============================================================================

def test_isolated():
    val = 10 + 20
    assert val == 30
if __name__ == "__main__":
    test_isolated()
    print("[TDD Ch 25] 격리된 테스트 통과")
