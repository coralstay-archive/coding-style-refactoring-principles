// ==============================================================================
// @file: main.cpp
// @path: tracks/05_legacy_code/08_how_to_add_feature/01_tdd_in_legacy/main.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <iostream>
class TaxCalculator {
public:
    double calculate(double amount, double rate) { return amount * rate; }
};
int main() {
    TaxCalculator tc;
    std::cout << "[Legacy 8.1] 신규 세금 계산기: " << tc.calculate(100.0, 0.1) << "\n";
    return 0;
}
