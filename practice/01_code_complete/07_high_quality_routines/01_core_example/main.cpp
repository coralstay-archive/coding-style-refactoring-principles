// ==============================================================================
// @file: main.cpp
// @path: tracks/01_code_complete/07_high_quality_routines/01_core_example/main.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <iostream>
#include <cmath>

// [Code Complete Ch 7] 기능적 응집도를 가진 순수 계산 루틴
double calculatePythagoreanDistance(double dx, double dy) noexcept {
    return std::sqrt(dx * dx + dy * dy);
}

int main() {
    std::cout << "피타고라스 거리: " << calculatePythagoreanDistance(3.0, 4.0) << "\n";
    return 0;
}
