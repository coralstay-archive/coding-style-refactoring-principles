// ==============================================================================
// @file: test.cpp
// @path: practices/01_code_quality/01_make_code_hard_to_misuse/test.cpp
// @book: 《소프트웨어 공학 4대 도메인 실전 카타 뱅크》(4-File Formula)
// ==============================================================================

// [GoogleTest 단위 테스트]

#include <gtest/gtest.h>
#include <stdexcept>

// Good Code 검증을 위한 단위 테스트
TEST(CodeQualityTest, CannotCreateAccountWithInvalidData) {
    // 빈 계좌번호 생성 시도 차단 검증
    EXPECT_THROW(BankAccount("", 100.0), std::invalid_argument);
    // 음수 잔액 생성 시도 차단 검증
    EXPECT_THROW(BankAccount("ACC-001", -50.0), std::invalid_argument);
}

TEST(CodeQualityTest, ImmutableAccountDepositProducesNewState) {
    BankAccount acc("ACC-001", 1000.0);
    EXPECT_EQ(acc.balance(), 1000.0);

    BankAccount updated = acc.deposit(500.0);
    // 기존 객체 상태 불변 유지 검증
    EXPECT_EQ(acc.balance(), 1000.0);
    // 새 객체 정상 갱신 검증
    EXPECT_EQ(updated.balance(), 1500.0);
}
