// ==============================================================================
// @file: test.cpp
// @path: tracks/05_legacy_code/25_dependency_breaking/18_pull_up_feature/test.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <cassert>

class TestableTaxEngine : public AbstractTaxEngine {};

int main() {
    TestableTaxEngine testEngine;
    assert(testEngine.calculateVat(1000) == 100);
    assert(testEngine.calculateVat(5000) == 500);
    return 0;
}
