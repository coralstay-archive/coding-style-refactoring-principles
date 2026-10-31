# ==============================================================================
# @file: main.py
# @path: tracks/06_tdd/30_design_patterns/05_collecting_parameter/main.py
# @book: 《테스트 주도 개발 (TDD)》(Kent Beck 저, 인사이트)
# ==============================================================================

from typing import List

class Node:
    def __init__(self, val: str, children=None):
        self.val = val
        self.children = children or []

    def collect_inorder(self, result: List[str]) -> None:
        for child in self.children:
            child.collect_inorder(result)
        result.append(self.val)

if __name__ == "__main__":
    tree = Node("Root", [Node("Child1"), Node("Child2")])
    res = []
    tree.collect_inorder(res)
    print(f"[Beck 30.10] Collected: {res}")
