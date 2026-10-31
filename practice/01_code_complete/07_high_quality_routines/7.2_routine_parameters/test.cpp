// ==============================================================================
// @file: test.cpp
// @path: tracks/01_code_complete/07_high_quality_routines/7.2_routine_parameters/test.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <cassert>
int main() { assert(clampRange(50, 0, 100) == 50); assert(clampRange(-5, 0, 100) == 0); return 0; }
