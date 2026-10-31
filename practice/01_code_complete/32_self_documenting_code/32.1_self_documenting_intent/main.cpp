// ==============================================================================
// @file: main.cpp
// @path: tracks/01_code_complete/32_self_documenting_code/32.1_self_documenting_intent/main.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <iostream>
bool isLeapYear(int year) noexcept {
    return (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
}
int main() { std::cout << "[CC 32.1] 2024 윤년 여부: " << isLeapYear(2024) << "\n"; return 0; }
