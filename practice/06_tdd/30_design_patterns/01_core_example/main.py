# ==============================================================================
# @file: main.py
# @path: tracks/06_tdd/30_design_patterns/01_core_example/main.py
# @book: 《테스트 주도 개발 (TDD)》(Kent Beck 저, 인사이트)
# ==============================================================================

class ValueObject:
    def __init__(self, val): self.val = val
    def __eq__(self, other): return self.val == other.val

if __name__ == "__main__":
    print(f"[TDD Ch 30] 값 객체 동등성: {ValueObject(5) == ValueObject(5)}")
