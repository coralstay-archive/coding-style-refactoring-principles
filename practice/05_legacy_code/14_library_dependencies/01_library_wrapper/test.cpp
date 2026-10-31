// ==============================================================================
// @file: test.cpp
// @path: tracks/05_legacy_code/14_library_dependencies/01_library_wrapper/test.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <cassert>
#include <string>
int main() { ThirdPartyWrapper w; assert(w.query() == "LIB_DATA"); return 0; }
