// ==============================================================================
// @file: test.cpp
// @path: tracks/05_legacy_code/25_dependency_breaking/02_extract_interface/test.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <cassert>
int main() { MockEmailClient mc; assert(mc.send() == true); return 0; }
