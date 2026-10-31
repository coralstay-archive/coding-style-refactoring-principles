// ==============================================================================
// @file: bad_code.cpp
// @path: practices/02_unit_testing/01_resistance_to_refactoring_classical_testing/bad_code.cpp
// @book: 《소프트웨어 공학 4대 도메인 실전 카타 뱅크》(4-File Formula)
// ==============================================================================

// [실습 시작용 베이스 코드]
// README.md의 문제점을 분석하고 직접 good_code.cpp 형태로 리팩터링해보세요.

#include <string>
#include <vector>

// [Bad Code / Test Fragility] 내부 구현 세부사항에 강하게 결합된 설계
class DiscountPolicy {
public:
    virtual ~DiscountPolicy() = default;
    virtual double applyVipStep(double amount) = 0; // 내부 중간 단계가 외부로 노출됨
};

class CartPriceCalculator {
private:
    DiscountPolicy* m_policy;
public:
    explicit CartPriceCalculator(DiscountPolicy* policy) : m_policy(policy) {}

    // 내부에서 applyVipStep을 정확히 1번 호출해야만 통과하는 취약한 구조
    double calculate(double basePrice) {
        return m_policy->applyVipStep(basePrice);
    }
};
