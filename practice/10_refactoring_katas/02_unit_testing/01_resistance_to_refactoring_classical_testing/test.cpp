// ==============================================================================
// @file: test.cpp
// @path: practices/02_unit_testing/01_resistance_to_refactoring_classical_testing/test.cpp
// @book: 《소프트웨어 공학 4대 도메인 실전 카타 뱅크》(4-File Formula)
// ==============================================================================

// [GoogleTest 단위 테스트]

#include <gtest/gtest.h>

// 고전파 단위 테스트: 모의 객체 없이 실제 객체의 입력과 최종 관찰 가능한 결과만 검증
// 내부 루프가 STL std::accumulate로 바뀌거나 병렬 처리로 리팩터링되어도 테스트는 깨지지 않음!
TEST(UnitTestingPrinciples, CalculateTotalPriceForRegularCustomer) {
    ShoppingCart cart(CustomerTier::Regular);
    cart.addItem("Item A", 100.0, 2);
    cart.addItem("Item B", 50.0, 1);

    // 100*2 + 50*1 = 250
    EXPECT_DOUBLE_EQ(cart.calculateTotalPrice(), 250.0);
}

TEST(UnitTestingPrinciples, CalculateTotalPriceWithVipDiscount) {
    ShoppingCart cart(CustomerTier::VIP);
    cart.addItem("Item A", 100.0, 2);

    // 200 * 0.85 = 170.0
    EXPECT_DOUBLE_EQ(cart.calculateTotalPrice(), 170.0);
}
