// ==============================================================================
// @file: test.cpp
// @path: tracks/05_legacy_code/06_sprout_and_wrap/01_sprout_method/test.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <cassert>
int main() { assert(LegacyAccount::calculateInterest(1000, 0.05) == 50.0); return 0; }
