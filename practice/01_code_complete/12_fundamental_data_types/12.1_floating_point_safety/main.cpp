// ==============================================================================
// @file: main.cpp
// @path: tracks/01_code_complete/12_fundamental_data_types/12.1_floating_point_safety/main.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <iostream>
#include <cmath>
bool areEqualFloat(double a, double b, double eps = 1e-6) noexcept {
    return std::abs(a - b) <= eps;
}
int main() { std::cout << "[CC 12.1] 부동소수점 안전 비교: " << areEqualFloat(0.1 + 0.2, 0.3) << "\n"; return 0; }
