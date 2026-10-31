// ==============================================================================
// @file: test.cpp
// @path: practices/02_unit_testing/02_boundary_testing_correct_checklist/test.cpp
// @book: 《소프트웨어 공학 4대 도메인 실전 카타 뱅크》(4-File Formula)
// ==============================================================================

// [GoogleTest 단위 테스트]

#include <gtest/gtest.h>

// CORRECT 원칙 중 Cardinality (0, 1, N) 경계값 전수 검증
TEST(CorrectChecklistTest, CardinalityZeroThrowsException) {
    StatisticalEngine engine;
    std::vector<double> empty;
    EXPECT_THROW(engine.calculateAverage(empty), std::invalid_argument);
}

TEST(CorrectChecklistTest, CardinalityOneReturnsSameValue) {
    StatisticalEngine engine;
    std::vector<double> single = {42.0};
    EXPECT_DOUBLE_EQ(engine.calculateAverage(single), 42.0);
}

TEST(CorrectChecklistTest, CardinalityManyReturnsCorrectAverage) {
    StatisticalEngine engine;
    std::vector<double> many = {10.0, 20.0, 30.0};
    EXPECT_DOUBLE_EQ(engine.calculateAverage(many), 20.0);
}
