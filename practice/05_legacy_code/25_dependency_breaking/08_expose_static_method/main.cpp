// ==============================================================================
// @file: main.cpp
// @path: tracks/05_legacy_code/25_dependency_breaking/08_expose_static_method/main.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <iostream>

class PriceEngine {
    int hardwareId = 999;
public:
    static int calculateDiscount(int originalPrice, int discountPercent) {
        return originalPrice - (originalPrice * discountPercent / 100);
    }
};

int main() {
    std::cout << "[Legacy 25.5] Discounted: " << PriceEngine::calculateDiscount(2000, 20) << "\n";
    return 0;
}
