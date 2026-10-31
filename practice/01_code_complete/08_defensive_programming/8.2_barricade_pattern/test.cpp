// ==============================================================================
// @file: test.cpp
// @path: tracks/01_code_complete/08_defensive_programming/8.2_barricade_pattern/test.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <cassert>
int main() { assert(sanitizeBarricade("a!b@c") == "abc"); return 0; }
