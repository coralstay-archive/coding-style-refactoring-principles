# ==============================================================================
# @file: main.py
# @path: tracks/06_tdd/30_design_patterns/04_pluggable_object/main.py
# @book: 《테스트 주도 개발 (TDD)》(Kent Beck 저, 인사이트)
# ==============================================================================

class NormalDiscount:
    def apply(self, price: float) -> float:
        return price

class VipDiscount:
    def apply(self, price: float) -> float:
        return price * 0.8

class OrderCheckout:
    def __init__(self, discount_policy):
        self.discount_policy = discount_policy

    def checkout(self, price: float) -> float:
        return self.discount_policy.apply(price)

if __name__ == "__main__":
    c = OrderCheckout(VipDiscount())
    print(f"[Beck 30.5] VIP Price: {c.checkout(100.0)}")
