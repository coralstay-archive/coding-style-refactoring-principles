# ==============================================================================
# @file: main.py
# @path: tracks/06_tdd/28_green_bar_patterns/03_triangulation/main.py
# @book: 《테스트 주도 개발 (TDD)》(Kent Beck 저, 인사이트)
# ==============================================================================

def add(a: int, b: int) -> int:
    return a + b

if __name__ == "__main__":
    print(f"[Beck 28.2] 3 + 4 = {add(3, 4)}")
