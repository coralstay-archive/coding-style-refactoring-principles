// ==============================================================================
// @file: main.cpp
// @path: tracks/01_code_complete/24_refactoring/24.1_safe_refactoring_steps/main.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <iostream>
double calculateDiscounted(double price, double rate) noexcept { return price * (1.0 - rate); }
int main() { std::cout << "[CC 24.1] 리팩터링 할인액: " << calculateDiscounted(100.0, 0.2) << "\n"; return 0; }
