# ==============================================================================
# @file: main.py
# @path: tracks/06_tdd/28_green_bar_patterns/05_one_to_many/main.py
# @book: 《테스트 주도 개발 (TDD)》(Kent Beck 저, 인사이트)
# ==============================================================================

from typing import List

def sum_amounts(amounts: List[int]) -> int:
    total = 0
    for a in amounts:
        total += a
    return total

if __name__ == "__main__":
    print(f"[Beck 28.4] Sum: {sum_amounts([10, 20, 30])}")
