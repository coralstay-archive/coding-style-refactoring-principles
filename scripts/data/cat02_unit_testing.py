# -*- coding: utf-8 -*-
"""
Domain 2: 단위 테스트 & TDD (Unit Testing & Verification)
기반 도서: 《단위 테스트 (Khorikov)》, 《테스트 주도 개발 (Kent Beck)》, 《실용주의 단위 테스트》
"""

ITEMS = [
    {
        "section_dir": "02_unit_testing",
        "section_title": "도메인 2. 단위 테스트 & TDD (Unit Testing & Verification)",
        "num": "01",
        "slug": "resistance_to_refactoring_classical_testing",
        "title": "01. 리팩터링 내성을 갖춘 단위 테스트 (고전파 vs 런던파)",
        "book_reference": "단위 테스트 4장 (좋은 단위 테스트의 4대 요소), 5장 (목과 테스트 취약성)",
        "smell_or_issue": r"""- [런던파 안티패턴] 내부 private 헬퍼 메서드의 호출 여부나 내부 데이터 구조를 Mock/Spy로 검증함.
- 결과적으로 비즈니스 결과(출력/상태)는 동일한데도, 내부 코드를 리팩터링(함수 분리, 알고리즘 변경)할 때마다 테스트가 줄줄이 깨지는 '거짓 양성(False Positive)'이 발생하여 리팩터링을 가로막음.""",
        "concept": r"""- **리팩터링 내성 (Resistance to Refactoring)**:
  좋은 테스트는 구현 세부 사항(어떻게 계산했는가)과 결합되지 않고, 최종 관찰 가능한 동작(무엇을 반환/변경했는가)만 검증해야 합니다.
- **고전파(Detroit School) 스타일**:
  협력 객체들을 모킹하지 않고 실제 객체와 상태를 사용하여 검증함으로써, 내부 구현이 완전히 바뀌어도 동작이 같으면 테스트가 항상 초록색을 유지하도록 보장합니다.""",
        "bad_code": r"""#include <string>
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
""",
        "good_code": r"""#include <string>
#include <vector>

enum class CustomerTier { Regular, VIP };

struct CartItem {
    std::string name;
    double price;
    int quantity;
};

// [Good Code] 관찰 가능한 상태와 결과만 제공하는 깔끔한 도메인 모델
class ShoppingCart {
private:
    std::vector<CartItem> m_items;
    CustomerTier m_tier;

public:
    explicit ShoppingCart(CustomerTier tier) : m_tier(tier) {}

    void addItem(std::string name, double price, int quantity) {
        m_items.push_back({std::move(name), price, quantity});
    }

    // 내부 구현(루프 방식, 임시 변수 등)이 어떻게 바뀌든 관찰 가능한 총액만 검증 대상
    [[nodiscard]] double calculateTotalPrice() const noexcept {
        double subtotal = 0.0;
        for (const auto& item : m_items) {
            subtotal += item.price * item.quantity;
        }

        if (m_tier == CustomerTier::VIP) {
            return subtotal * 0.85; // VIP 15% 할인
        }
        return subtotal;
    }
};
""",
        "test_code": r"""#include <gtest/gtest.h>

// 고전파 단위 테스트: 모의 객체 없이 실제 객체의 입력과 최종 관찰 가능한 결과만 검증
// 내부 루프가 STL std::accumulate로 바뀌거나 병렬 처리로 리팩터링되어도 테스트는 깨지지 않음!
TEST(UnitTestingPrinciples, CalculateTotalPriceForRegularCustomer) {
    ShoppingCart cart(CustomerTier::Regular);
    cart.addItem("Item A", 100.0, 2);
    cart.addItem("Item B", 50.0, 1);

    // 100*2 + 50*1 = 250
    EXPECT_DOUBLE_EQ(cart.calculateTotalPrice(), 250.0);
}

TEST(UnitTestingPrinciples, CalculateTotalPriceWithVipDiscount) {
    ShoppingCart cart(CustomerTier::VIP);
    cart.addItem("Item A", 100.0, 2);

    // 200 * 0.85 = 170.0
    EXPECT_DOUBLE_EQ(cart.calculateTotalPrice(), 170.0);
}
""",
        "steps": [
            "Step 1: 내부 구현용 중간 인터페이스와 불필요한 Mock 주입 구조를 제거합니다.",
            "Step 2: 비즈니스 요구사항을 온전히 담는 ShoppingCart 도메인 엔티티를 정의합니다.",
            "Step 3: 테스트는 Mock 의존성 없이 실제 ShoppingCart 객체에 아이템을 넣고 최종 결과(calculateTotalPrice)만 검증하도록 작성합니다."
        ]
    },
    {
        "section_dir": "02_unit_testing",
        "section_title": "도메인 2. 단위 테스트 & TDD (Unit Testing & Verification)",
        "num": "02",
        "slug": "boundary_testing_correct_checklist",
        "title": "02. 경계 조건 전수 검증 (CORRECT 원칙)",
        "book_reference": "실용주의 단위 테스트 7장 (경계 조건: CORRECT 기억법)",
        "smell_or_issue": r"""- 정상적인 입력(Happy Path)만 대충 1~2개 테스트하고 넘어가서, 빈 컬렉션(0), 단일 항목(1), 대량 항목(N), 음수 범위 등 경계 조건에서 NullPointer나 IndexOutOfBounds 크래시 발생.""",
        "concept": r"""- **CORRECT 기억법**:
  - **C**onformance (형식 준수): 입력 형식이 기대치와 다를 때
  - **O**rdering (순서): 정렬 여부나 컬렉션 순서가 결과에 미치는 영향
  - **R**ange (범위): 허용 최소값, 최대값, 범위를 벗어난 값
  - **R**eference (참조): 외부 참조의 상태나 의존성
  - **E**xistence (존재): 0, null, 빈 문자열, 빈 컬렉션
  - **C**ardinality (기수): 0-1-N 법칙 (0개일 때, 1개일 때, 여러 개일 때)
  - **T**ime (시간): 순서, 시간 경과, 동시성""",
        "bad_code": r"""#include <vector>
#include <numeric>

// [Bad Code] 빈 벡터(0)나 단일 원소(1)에 대한 경계 조건 처리가 부실함
class StatisticalEngine {
public:
    double calculateAverage(const std::vector<double>& numbers) {
        // numbers가 비어있으면 0으로 나누기 (Divide by Zero) 버그 발생!
        double sum = 0.0;
        for (double n : numbers) sum += n;
        return sum / numbers.size(); 
    }
};
""",
        "good_code": r"""#include <vector>
#include <stdexcept>
#include <numeric>

// [Good Code] 0-1-N 경계 조건을 안전하게 방어하고 계약을 보장
class StatisticalEngine {
public:
    [[nodiscard]] double calculateAverage(const std::vector<double>& numbers) const {
        if (numbers.empty()) {
            throw std::invalid_argument("평균을 계산할 데이터가 존재하지 않습니다 (빈 컬렉션).");
        }
        const double sum = std::accumulate(numbers.begin(), numbers.end(), 0.0);
        return sum / static_cast<double>(numbers.size());
    }
};
""",
        "test_code": r"""#include <gtest/gtest.h>

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
""",
        "steps": [
            "Step 1: 빈 컬렉션(0개) 인입 시 동작을 정의하고 방어 코드를 작성합니다.",
            "Step 2: 1개 원소 및 N개 원소에 대한 정상 계산 알고리즘을 std::accumulate로 정리합니다.",
            "Step 3: GoogleTest에 Cardinality(0, 1, Many) 3대 케이스를 모두 등록하여 전수 검증합니다."
        ]
    }
]
