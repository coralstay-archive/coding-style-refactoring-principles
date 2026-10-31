// ==============================================================================
// @file: test.cpp
// @path: practices/03_refactoring_smells/01_replace_nested_conditional_with_guard_clauses/test.cpp
// @book: 《소프트웨어 공학 4대 도메인 실전 카타 뱅크》(4-File Formula)
// ==============================================================================

// [GoogleTest 단위 테스트]

#include <gtest/gtest.h>

TEST(GuardClausesTest, InvalidCapitalReturnsZero) {
    EXPECT_DOUBLE_EQ(getAdjustedCapital(-100.0, 0.05, 12, false, true), 0.0);
    EXPECT_DOUBLE_EQ(getAdjustedCapital(0.0, 0.05, 12, false, true), 0.0);
}

TEST(GuardClausesTest, RetiredPersonReturnsZero) {
    EXPECT_DOUBLE_EQ(getAdjustedCapital(1000.0, 0.05, 10, true, true), 0.0);
}

TEST(GuardClausesTest, ActivePersonStandardCreditCalculation) {
    // (1000 / 10) * 0.05 = 5.0
    EXPECT_DOUBLE_EQ(getAdjustedCapital(1000.0, 0.05, 10, false, false), 5.0);
}

TEST(GuardClausesTest, ActivePersonGoodCreditReceivesBonus) {
    // 5.0 * 1.2 = 6.0
    EXPECT_DOUBLE_EQ(getAdjustedCapital(1000.0, 0.05, 10, false, true), 6.0);
}
