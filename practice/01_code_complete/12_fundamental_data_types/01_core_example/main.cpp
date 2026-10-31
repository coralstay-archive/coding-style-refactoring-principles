// ==============================================================================
// @file: main.cpp
// @path: tracks/01_code_complete/12_fundamental_data_types/01_core_example/main.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <iostream>
#include <cmath>

bool areNearlyEqual(double a, double b, double epsilon = 1e-6) noexcept {
    return std::abs(a - b) <= epsilon;
}

int main() {
    std::cout << "부동소수점 비교: " << (areNearlyEqual(0.1 + 0.2, 0.3) ? "동일" : "상이") << "\n";
    return 0;
}
