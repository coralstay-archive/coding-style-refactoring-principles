// ==============================================================================
// @file: test.cpp
// @path: tracks/05_legacy_code/08_how_to_add_feature/01_tdd_in_legacy/test.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <cassert>
int main() { TaxCalculator tc; assert(tc.calculate(200.0, 0.1) == 20.0); return 0; }
