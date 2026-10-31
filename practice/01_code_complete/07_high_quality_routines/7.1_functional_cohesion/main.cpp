// ==============================================================================
// @file: main.cpp
// @path: tracks/01_code_complete/07_high_quality_routines/7.1_functional_cohesion/main.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <iostream>
#include <cmath>
double computeHypotenuse(double a, double b) noexcept { return std::sqrt(a * a + b * b); }
int main() { std::cout << "[CC 7.1] 빗변 길이: " << computeHypotenuse(3.0, 4.0) << "\n"; return 0; }
