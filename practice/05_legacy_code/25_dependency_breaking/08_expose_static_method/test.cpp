// ==============================================================================
// @file: test.cpp
// @path: tracks/05_legacy_code/25_dependency_breaking/08_expose_static_method/test.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <cassert>

int main() {
    assert(PriceEngine::calculateDiscount(2000, 20) == 1600);
    assert(PriceEngine::calculateDiscount(1000, 0) == 1000);
    return 0;
}
