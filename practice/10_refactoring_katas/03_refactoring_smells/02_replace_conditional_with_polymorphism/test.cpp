// ==============================================================================
// @file: test.cpp
// @path: practices/03_refactoring_smells/02_replace_conditional_with_polymorphism/test.cpp
// @book: 《소프트웨어 공학 4대 도메인 실전 카타 뱅크》(4-File Formula)
// ==============================================================================

// [GoogleTest 단위 테스트]

#include <gtest/gtest.h>

TEST(PolymorphismRefactoringTest, EngineerPayEqualsMonthlySalary) {
    std::unique_ptr<Employee> emp = std::make_unique<Engineer>(5000.0);
    EXPECT_DOUBLE_EQ(emp->calculatePay(), 5000.0);
}

TEST(PolymorphismRefactoringTest, ManagerPayIncludesBonus) {
    std::unique_ptr<Employee> mgr = std::make_unique<Manager>(6000.0, 2000.0);
    EXPECT_DOUBLE_EQ(mgr->calculatePay(), 8000.0);
}

TEST(PolymorphismRefactoringTest, SalesmanPayIncludesCommission) {
    std::unique_ptr<Employee> sales = std::make_unique<Salesman>(3000.0, 1500.0);
    EXPECT_DOUBLE_EQ(sales->calculatePay(), 4500.0);
}
