// ==============================================================================
// @file: main.cpp
// @path: tracks/01_code_complete/24_refactoring/01_core_example/main.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <iostream>

// 리팩터링 전: 한 함수에서 계산과 출력 혼재 -> 리팩터링 후: 순수 계산 분리
double calculateTax(double subtotal, double rate) noexcept {
    return subtotal * rate;
}

int main() {
    std::cout << "세금: " << calculateTax(100.0, 0.1) << "\n";
    return 0;
}
