// ==============================================================================
// @file: test.cpp
// @path: practices/01_code_quality/02_single_level_of_abstraction/test.cpp
// @book: 《소프트웨어 공학 4대 도메인 실전 카타 뱅크》(4-File Formula)
// ==============================================================================

// [GoogleTest 단위 테스트]

#include <gtest/gtest.h>

TEST(SLAPTest, ParseAndCalculateDiscountedOrder) {
    OrderProcessor processor;
    // 20.0 * 10 = 200.0 -> 10% 할인 -> 180.0
    double total = processor.processRawOrder("Book,20.0,10");
    EXPECT_DOUBLE_EQ(total, 180.0);
}

TEST(SLAPTest, InvalidFormatThrowsExplicitException) {
    OrderProcessor processor;
    EXPECT_THROW(processor.processRawOrder("InvalidLine"), std::invalid_argument);
}
