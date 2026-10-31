// ==============================================================================
// @file: main.cpp
// @path: tracks/05_legacy_code/04_the_seam_model/01_core_example/main.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <iostream>
class MarketDataService {
protected:
    virtual double fetchPrice() { return 100.0; } // Object Seam
public:
    virtual ~MarketDataService() = default;
    double getValuation() { return fetchPrice() * 1.1; }
};

int main() {
    MarketDataService s;
    std::cout << "[Legacy Code Ch 4] 평가액: " << s.getValuation() << "\n";
    return 0;
}
