// ==============================================================================
// @file: test.cpp
// @path: tracks/05_legacy_code/06_sprout_and_wrap/01_core_example/test.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <cassert>
int main() {
    assert(LegacyBilling::calculateLateFee(1000.0, 45) == 50.0);
    assert(LegacyBilling::calculateLateFee(1000.0, 10) == 0.0);
    return 0;
}
