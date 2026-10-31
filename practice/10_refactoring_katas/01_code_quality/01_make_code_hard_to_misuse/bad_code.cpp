// ==============================================================================
// @file: bad_code.cpp
// @path: practices/01_code_quality/01_make_code_hard_to_misuse/bad_code.cpp
// @book: 《소프트웨어 공학 4대 도메인 실전 카타 뱅크》(4-File Formula)
// ==============================================================================

// [실습 시작용 베이스 코드]
// README.md의 문제점을 분석하고 직접 good_code.cpp 형태로 리팩터링해보세요.

#include <string>
#include <iostream>

// [Bad Code] 가변 상태와 불완전한 초기화 위험
class BankAccount {
public:
    std::string accountNumber;
    double balance;

    BankAccount() : balance(0.0) {} // 껍데기 객체 생성 가능

    void setBalance(double b) {
        // 음수 잔액 검증 없이 무조건 대입 가능 (오용에 취약)
        balance = b;
    }
};
