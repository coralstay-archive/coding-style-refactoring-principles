# ==============================================================================
# @file: test.py
# @path: tracks/06_tdd/30_design_patterns/05_collecting_parameter/test.py
# @book: 《테스트 주도 개발 (TDD)》(Kent Beck 저, 인사이트)
# ==============================================================================

from main import Node

tree = Node("A", [Node("B"), Node("C", [Node("D")])])
res = []
tree.collect_inorder(res)
assert res == ["B", "D", "C", "A"]

print("PASS: 30.10 Collecting Parameter")
