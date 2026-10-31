# -*- coding: utf-8 -*-
"""
Domain 1: 코드 품질 & 마이크로 설계 (Quality & Contracts)
기반 도서: 《굿 코드, 배드 코드》, 《Code Complete 2》
"""

ITEMS = [
    {
        "section_dir": "01_code_quality",
        "section_title": "도메인 1. 코드 품질 & 마이크로 설계 (Quality & Contracts)",
        "num": "01",
        "slug": "make_code_hard_to_misuse",
        "title": "01. 오용하기 어려운 코드 설계 (불변 객체와 생성 시점 유효성 검증)",
        "book_reference": "굿 코드, 배드 코드 7장 (코드를 오용하기 어렵게 만들라)",
        "smell_or_issue": r"""- 객체가 생성된 후에도 setter를 통해 언제든 비정상적인 상태(예: 음수 금액, 빈 통화코드)로 오염될 수 있음.
- 기본 생성자로 껍데기만 만든 후 초기화 메서드를 깜빡하면 런타임에 치명적인 Null 또는 쓰레기 값 오류 발생.
- 원시 타입(double, string)에 의존하는 기본형 집착(Primitive Obsession)으로 인해 잘못된 인수가 전달되기 쉬움.""",
        "concept": r"""- **생성 시점 유효성 보장 (Enforce Invariants at Construction)**:
  생성자에서 유효성을 철저히 검증하고, 유효하지 않은 데이터가 들어오면 즉시 예외를 던져 불완전한 객체가 아예 생성되지 못하게 차단합니다.
- **불변성 (Immutability)**:
  모든 멤버 변수를 `const`로 선언하고 setter를 배제하여, 한 번 생성된 객체는 스레드 안전하며 상태가 변하지 않도록 설계합니다.
- **오용하기 어려운 API**:
  호출자가 실수하고 싶어도 컴파일러나 런타임 제약에 의해 실수가 불가능한 구조를 만듭니다.""",
        "bad_code": r"""#include <string>
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
""",
        "good_code": r"""#include <string>
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
""",
        "test_code": r"""#include <gtest/gtest.h>
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
""",
        "steps": [
            "Step 1: 멤버 변수를 private const로 전환하여 외부 임의 수정을 차단합니다.",
            "Step 2: 기본 생성자를 제거하고, 모든 필수 데이터를 받는 생성자를 정의합니다.",
            "Step 3: 생성자 본문에서 계좌번호와 잔액 유효성을 검증하고 실패 시 std::invalid_argument를 던집니다.",
            "Step 4: 상태 변경이 필요할 경우 기존 객체를 수정하는 대신 새 BankAccount 인스턴스를 반환하도록 리팩터링합니다."
        ]
    },
    {
        "section_dir": "01_code_quality",
        "section_title": "도메인 1. 코드 품질 & 마이크로 설계 (Quality & Contracts)",
        "num": "02",
        "slug": "single_level_of_abstraction",
        "title": "02. 단일 추상화 계층 원칙 (SLAP) 준수",
        "book_reference": "굿 코드, 배드 코드 2장 (추상화 계층)",
        "smell_or_issue": r"""- 비즈니스 오케스트레이션 로직(주문 결제) 안에 저수준 CSV 문자열 분할, 원시 포맷팅 로직이 섞여 가독성을 심각하게 해침.
- 한 함수 안에서 높은 수준의 개념('결제 승인')과 낮은 수준의 구현 세부사항('쉼표로 자르고 공백 트림')이 공존함.""",
        "concept": r"""- **SLAP (Single Level of Abstraction Principle)**:
  한 함수의 모든 코드는 동일한 추상화 수준을 유지해야 합니다.
  고수준 함수는 흐름 제어(오케스트레이션)만 담당하고, 저수준 파싱이나 알고리즘은 하위 헬퍼 함수로 완전히 위임합니다.""",
        "bad_code": r"""#include <string>
#include <vector>
#include <sstream>

// [Bad Code] 고수준 비즈니스 로직과 저수준 파싱이 뒤섞임
class OrderProcessor {
public:
    double processRawOrder(const std::string& rawCsvLine) {
        // 저수준 CSV 파싱 세부사항이 그대로 노출됨
        std::stringstream ss(rawCsvLine);
        std::string item;
        std::vector<std::string> tokens;
        while (std::getline(ss, item, ',')) {
            tokens.push_back(item);
        }
        if (tokens.size() < 3) return -1.0; // 침묵 매직 오류

        double price = std::stod(tokens[1]);
        int quantity = std::stoi(tokens[2]);
        
        // 고수준 비즈니스 할인 계산
        double total = price * quantity;
        if (total > 100.0) total *= 0.9;
        return total;
    }
};
""",
        "good_code": r"""#include <string>
#include <vector>
#include <sstream>
#include <stdexcept>

struct OrderItem {
    std::string name;
    double price;
    int quantity;
};

// [Good Code] 파싱 계층과 비즈니스 계산 계층 분리
class OrderParser {
public:
    static OrderItem parseCsv(const std::string& line) {
        std::stringstream ss(line);
        std::string name, priceStr, qtyStr;
        if (!std::getline(ss, name, ',') ||
            !std::getline(ss, priceStr, ',') ||
            !std::getline(ss, qtyStr, ',')) {
            throw std::invalid_argument("비정상적인 CSV 주문 포맷입니다.");
        }
        return OrderItem{name, std::stod(priceStr), std::stoi(qtyStr)};
    }
};

class OrderCalculator {
public:
    static constexpr double DISCOUNT_THRESHOLD = 100.0;
    static constexpr double DISCOUNT_RATE = 0.10;

    static double calculateTotal(const OrderItem& item) {
        double subtotal = item.price * item.quantity;
        return (subtotal > DISCOUNT_THRESHOLD) ? subtotal * (1.0 - DISCOUNT_RATE) : subtotal;
    }
};

class OrderProcessor {
public:
    double processRawOrder(const std::string& rawCsvLine) {
        // 단일 추상화 계층 유지: 파싱 ➔ 계산의 고수준 흐름만 제어
        const OrderItem item = OrderParser::parseCsv(rawCsvLine);
        return OrderCalculator::calculateTotal(item);
    }
};
""",
        "test_code": r"""#include <gtest/gtest.h>

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
""",
        "steps": [
            "Step 1: 저수준 CSV 문자열 분해 로직을 OrderParser::parseCsv 전용 함수로 추출합니다.",
            "Step 2: 추출된 데이터를 표현할 순수 데이터 구조체 OrderItem을 정의합니다.",
            "Step 3: 비즈니스 할인 규칙을 OrderCalculator로 캡슐화합니다.",
            "Step 4: OrderProcessor는 상위 수준의 오케스트레이션(파싱 호출 -> 계산 호출)만 수행하도록 정리합니다."
        ]
    }
]
