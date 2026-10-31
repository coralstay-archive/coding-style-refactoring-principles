// ==============================================================================
// @file: bad_code.cpp
// @path: practices/03_refactoring_smells/02_replace_conditional_with_polymorphism/bad_code.cpp
// @book: 《소프트웨어 공학 4대 도메인 실전 카타 뱅크》(4-File Formula)
// ==============================================================================

// [실습 시작용 베이스 코드]
// README.md의 문제점을 분석하고 직접 good_code.cpp 형태로 리팩터링해보세요.

#include <string>
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
