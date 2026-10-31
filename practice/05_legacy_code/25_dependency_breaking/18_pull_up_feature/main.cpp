// ==============================================================================
// @file: main.cpp
// @path: tracks/05_legacy_code/25_dependency_breaking/18_pull_up_feature/main.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <iostream>

class AbstractTaxEngine {
public:
    virtual ~AbstractTaxEngine() = default;
    int calculateVat(int amount) {
        return amount * 10 / 100;
    }
};

class ProductionTaxEngine : public AbstractTaxEngine {
    // 하드웨어 프린터 및 POS 기기 의존성 포함
};

int main() {
    ProductionTaxEngine prod;
    std::cout << "[Legacy 25.17] VAT: " << prod.calculateVat(5000) << "\n";
    return 0;
}
