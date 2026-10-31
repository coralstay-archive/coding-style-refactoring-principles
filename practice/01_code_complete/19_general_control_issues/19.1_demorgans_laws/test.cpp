// ==============================================================================
// @file: test.cpp
// @path: tracks/01_code_complete/19_general_control_issues/19.1_demorgans_laws/test.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <cassert>
int main() { assert(isClosed(false, false) == true); assert(isClosed(true, false) == false); return 0; }
