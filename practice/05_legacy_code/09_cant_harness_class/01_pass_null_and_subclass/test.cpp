// ==============================================================================
// @file: test.cpp
// @path: tracks/05_legacy_code/09_cant_harness_class/01_pass_null_and_subclass/test.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <cassert>
int main() { Service s(nullptr); assert(s.run()); return 0; }
