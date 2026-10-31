// ==============================================================================
// @file: test.cpp
// @path: tracks/01_code_complete/07_high_quality_routines/01_core_example/test.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <cassert>
#include <cmath>
int main() {
    assert(std::abs(calculatePythagoreanDistance(3.0, 4.0) - 5.0) < 1e-9);
    return 0;
}
