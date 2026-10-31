# -*- coding: utf-8 -*-
"""
Domain 3: 리팩터링 메커니즘 & 코드 악취 (Refactoring Mechanics)
기반 도서: 《리팩터링 2판 (Martin Fowler)》
"""

ITEMS = [
    {
        "section_dir": "03_refactoring_smells",
        "section_title": "도메인 3. 리팩터링 메커니즘 & 코드 악취 (Refactoring Mechanics)",
        "num": "01",
        "slug": "replace_nested_conditional_with_guard_clauses",
        "title": "01. 중첩 조건문을 보호 구문으로 바꾸기 (Guard Clauses)",
        "book_reference": "리팩터링 2판 10.3절 (중첩 조건문을 보호 구문으로 바꾸기)",
        "smell_or_issue": r"""- [화살표 안티패턴(Arrow Anti-pattern)] 조건문이 3~4단계로 깊게 중첩되어 정상적인 비즈니스 실행 경로(Happy Path)를 한눈에 파악하기 매우 어려움.
- else 블록의 끝이 어디인지 찾느라 스크롤을 위아래로 헤매게 됨.""",
        "concept": r"""- **보호 구문 (Guard Clause)**:
  비정상적이거나 예외적인 조건(자격 미달, 비활성 계정, 만료 등)은 함수 진입 초기에 조기 반환(`early return`)하여 즉시 쳐냅니다.
  보호 구문을 통과한 이후의 본문은 들여쓰기 없는 깔끔한 1단계 깊이에서 정상 비즈니스 로직(Happy Path)만 집중적으로 다룹니다.""",
        "bad_code": r"""// [Bad Code] 화살표 안티패턴: 깊은 중첩 조건문
double getAdjustedCapital(double capital, double rate, double duration, bool isRetired, bool hasGoodCredit) {
    double result = 0.0;
    if (capital > 0.0) {
        if (rate > 0.0 && duration > 0.0) {
            if (!isRetired) {
                if (hasGoodCredit) {
                    result = (capital / duration) * rate * 1.2;
                } else {
                    result = (capital / duration) * rate;
                }
            }
        }
    }
    return result;
}
""",
        "good_code": r"""// [Good Code] 보호 구문(Guard Clauses)으로 조기 반환하여 평탄화
double getAdjustedCapital(double capital, double rate, double duration, bool isRetired, bool hasGoodCredit) {
    // 1. 비정상적이거나 자격 미달인 조건을 조기에 걸러냄 (보호 구문)
    if (capital <= 0.0 || rate <= 0.0 || duration <= 0.0 || isRetired) {
        return 0.0;
    }

    // 2. 주 실행 경로(Happy Path)는 들여쓰기 없이 명확하게 전개
    const double baseCapital = (capital / duration) * rate;
    return hasGoodCredit ? baseCapital * 1.2 : baseCapital;
}
""",
        "test_code": r"""#include <gtest/gtest.h>

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
""",
        "steps": [
            "Step 1: capital <= 0.0 검사 후 조기 return 0.0 보호 구문 작성.",
            "Step 2: rate <= 0.0 및 duration <= 0.0 검사 후 조기 return 0.0 작성.",
            "Step 3: isRetired 검사 후 조기 return 0.0 작성.",
            "Step 4: 모든 보호 구문을 통과한 메인 흐름을 삼항 연산자 또는 단일 계산식으로 정리하여 반환."
        ]
    },
    {
        "section_dir": "03_refactoring_smells",
        "section_title": "도메인 3. 리팩터링 메커니즘 & 코드 악취 (Refactoring Mechanics)",
        "num": "02",
        "slug": "replace_conditional_with_polymorphism",
        "title": "02. 조건부 로직을 다형성으로 바꾸기 (Replace Conditional with Polymorphism)",
        "book_reference": "리팩터링 2판 10.4절 (조건부 로직을 다형성으로 바꾸기)",
        "smell_or_issue": r"""- [반복되는 switch문 / 타입 코드] 새로운 직원 유형이나 배송 요금 정책이 추가될 때마다 코드 곳곳에 흩어진 switch/case 문들을 일일이 찾아다니며 수정해야 함 (OCP 위반, 산탄총 수술 악취).""",
        "concept": r"""- **다형성 대체**:
  타입 코드나 enum 기반의 switch 분기를 객체 지향 다형성(상속 또는 인터페이스 구현)으로 캡슐화합니다.
  새로운 타입이 추가될 때 기존 코드를 수정할 필요 없이, 단지 새 파생 클래스 하나만 추가하면 되는 개방-폐쇄 원칙(OCP)을 실현합니다.""",
        "bad_code": r"""#include <string>
#include <stdexcept>

enum class EmployeeType { Engineer, Manager, Salesman };

// [Bad Code] switch문으로 급여를 계산하여 새 타입 추가 시 코드 수정 불가피
class Employee {
public:
    EmployeeType type;
    double monthlySalary;
    double commission;
    double bonus;

    double calculatePay() const {
        switch (type) {
            case EmployeeType::Engineer:
                return monthlySalary;
            case EmployeeType::Manager:
                return monthlySalary + bonus;
            case EmployeeType::Salesman:
                return monthlySalary + commission;
            default:
                throw std::invalid_argument("알 수 없는 직원 유형입니다.");
        }
    }
};
""",
        "good_code": r"""#include <memory>
#include <string>

// [Good Code] 다형적 클래스 계층 구조를 통한 분기 제거
class Employee {
protected:
    double m_monthlySalary;

public:
    explicit Employee(double monthlySalary) : m_monthlySalary(monthlySalary) {}
    virtual ~Employee() = default;

    [[nodiscard]] virtual double calculatePay() const noexcept = 0;
};

class Engineer : public Employee {
public:
    using Employee::Employee;
    [[nodiscard]] double calculatePay() const noexcept override {
        return m_monthlySalary;
    }
};

class Manager : public Employee {
private:
    double m_bonus;
public:
    Manager(double salary, double bonus) : Employee(salary), m_bonus(bonus) {}
    [[nodiscard]] double calculatePay() const noexcept override {
        return m_monthlySalary + m_bonus;
    }
};

class Salesman : public Employee {
private:
    double m_commission;
public:
    Salesman(double salary, double commission) : Employee(salary), m_commission(commission) {}
    [[nodiscard]] double calculatePay() const noexcept override {
        return m_monthlySalary + m_commission;
    }
};
""",
        "test_code": r"""#include <gtest/gtest.h>

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
""",
        "steps": [
            "Step 1: 공통 인터페이스 calculatePay()를 갖는 추상 기본 클래스 Employee를 선언합니다.",
            "Step 2: 각 타입 코드에 해당하는 파생 클래스(Engineer, Manager, Salesman)를 정의하고 각각의 계산 로직을 오버라이딩합니다.",
            "Step 3: switch문 본문을 제거하고 다형적 호출로 대체합니다."
        ]
    }
]
