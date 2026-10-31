// ==============================================================================
// @file: test.cpp
// @path: tracks/05_legacy_code/10_cant_run_method/01_expose_protected_method/test.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <cassert>
int main() { TestProcessor tp; assert(tp.testCompute(5) == 10); return 0; }
