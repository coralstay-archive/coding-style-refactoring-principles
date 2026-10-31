# ==============================================================================
# @file: test.py
# @path: tracks/06_tdd/30_design_patterns/04_pluggable_object/test.py
# @book: 《테스트 주도 개발 (TDD)》(Kent Beck 저, 인사이트)
# ==============================================================================

from main import OrderCheckout, NormalDiscount, VipDiscount

regular = OrderCheckout(NormalDiscount())
assert regular.checkout(100.0) == 100.0

vip = OrderCheckout(VipDiscount())
assert vip.checkout(100.0) == 80.0

print("PASS: 30.5 Pluggable Object")
