// @snippet 02_replace_conditional_with_polymorphism
// ==============================================================================
// @file: good_code.cpp
// @path: practices/03_refactoring_smells/02_replace_conditional_with_polymorphism/good_code.cpp
// @book: 《소프트웨어 공학 4대 도메인 실전 카타 뱅크》(4-File Formula)
// ==============================================================================

// [리팩터링 완성 모범 코드]

#include <memory>
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

int main() {
    return 0;
}
