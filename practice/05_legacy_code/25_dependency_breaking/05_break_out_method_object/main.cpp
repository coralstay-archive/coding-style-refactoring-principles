// ==============================================================================
// @file: main.cpp
// @path: tracks/05_legacy_code/25_dependency_breaking/05_break_out_method_object/main.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <iostream>

class OrderCalculator {
    int basePrice;
    int taxRate;
    int discount;
public:
    OrderCalculator(int base, int tax, int disc) 
        : basePrice(base), taxRate(tax), discount(disc) {}

    int computeTax() { return basePrice * taxRate / 100; }
    int computeNet() { return basePrice + computeTax() - discount; }
};

class OrderService {
public:
    int calculate(int base, int tax, int disc) {
        OrderCalculator calc(base, tax, disc);
        return calc.computeNet();
    }
};

int main() {
    OrderService svc;
    std::cout << "[Legacy 25.2] Net: " << svc.calculate(1000, 10, 50) << "\n";
    return 0;
}
