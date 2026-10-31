# ==============================================================================
# @file: main.py
# @path: tracks/06_tdd/28_green_bar_patterns/01_core_example/main.py
# @book: 《테스트 주도 개발 (TDD)》(Kent Beck 저, 인사이트)
# ==============================================================================

# [TDD Ch 28] 삼각측량법: 두 개 이상의 예제로 일반화
def add(a, b):
    return a + b

if __name__ == "__main__":
    print(f"[TDD Ch 28] 삼각측량 검증: add(2,3)={add(2,3)}, add(5,5)={add(5,5)}")
