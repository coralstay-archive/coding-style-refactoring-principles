// ==============================================================================
// @file: test.cpp
// @path: tracks/01_code_complete/17_unusual_control_structures/17.1_guard_clause_early_return/test.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <cassert>
int main() { assert(processScore(80) == 80); assert(processScore(-10) == 0); return 0; }
