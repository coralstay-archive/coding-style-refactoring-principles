// ==============================================================================
// @file: good_code.cpp
// @path: practices/01_code_quality/01_make_code_hard_to_misuse/good_code.cpp
// @book: 《소프트웨어 공학 4대 도메인 실전 카타 뱅크》(4-File Formula)
// ==============================================================================

// [리팩터링 완성 모범 코드]

#include <string>
#include <stdexcept>
#include <utility>

// [Good Code] 불변성 보장 및 생성자 계약 검증
class BankAccount {
private:
    const std::string m_accountNumber;
    const double m_balance;

public:
    BankAccount(std::string accountNumber, double initialBalance)
        : m_accountNumber(std::move(accountNumber)), m_balance(initialBalance) {
        if (m_accountNumber.empty()) {
            throw std::invalid_argument("계좌 번호는 비어 있을 수 없습니다.");
        }
        if (m_balance < 0.0) {
            throw std::invalid_argument("초기 잔액은 음수일 수 없습니다.");
        }
    }

    [[nodiscard]] const std::string& accountNumber() const noexcept { return m_accountNumber; }
    [[nodiscard]] double balance() const noexcept { return m_balance; }

    // 새로운 상태가 필요하면 새 객체를 반환하는 불변 패턴
    [[nodiscard]] BankAccount deposit(double amount) const {
        if (amount <= 0.0) {
            throw std::invalid_argument("입금액은 0보다 커야 합니다.");
        }
        return BankAccount(m_accountNumber, m_balance + amount);
    }
};
