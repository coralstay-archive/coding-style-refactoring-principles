// ==============================================================================
// @file: test.cpp
// @path: tracks/01_code_complete/22_developer_testing/22.1_boundary_value_analysis/test.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <cassert>
int main() { assert(isAgeValid(1)); assert(isAgeValid(120)); assert(!isAgeValid(0)); assert(!isAgeValid(121)); return 0; }
