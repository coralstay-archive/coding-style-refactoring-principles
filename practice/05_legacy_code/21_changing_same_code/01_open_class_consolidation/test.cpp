// ==============================================================================
// @file: test.cpp
// @path: tracks/05_legacy_code/21_changing_same_code/01_open_class_consolidation/test.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <cassert>
#include <string>
int main() { assert(SharedFormatter::formatCurrency(1000) == "$10"); return 0; }
