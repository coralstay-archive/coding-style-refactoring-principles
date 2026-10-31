// @snippet 01_resistance_to_refactoring_classical_testing
// ==============================================================================
// @file: good_code.cpp
// @path: practices/02_unit_testing/01_resistance_to_refactoring_classical_testing/good_code.cpp
// @book: 《소프트웨어 공학 4대 도메인 실전 카타 뱅크》(4-File Formula)
// ==============================================================================

// [리팩터링 완성 모범 코드]

#include <string>
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

int main() {
    return 0;
}
