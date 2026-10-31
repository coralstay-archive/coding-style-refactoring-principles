// ==============================================================================
// @file: test.cpp
// @path: tracks/05_legacy_code/25_dependency_breaking/05_break_out_method_object/test.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <cassert>

int main() {
    OrderCalculator calc(1000, 10, 50);
    assert(calc.computeTax() == 100);
    assert(calc.computeNet() == 1050);
    return 0;
}
