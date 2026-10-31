// ==============================================================================
// @file: test.cpp
// @path: tracks/01_code_complete/08_defensive_programming/8.1_assertions_and_contracts/test.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <cassert>
int main() { assert(divideStrict(20, 4) == 5); return 0; }
