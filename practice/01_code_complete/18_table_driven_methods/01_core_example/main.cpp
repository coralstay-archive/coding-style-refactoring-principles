// ==============================================================================
// @file: main.cpp
// @path: tracks/01_code_complete/18_table_driven_methods/01_core_example/main.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <iostream>
#include <array>

int getDaysInMonth(int month) {
    static constexpr std::array<int, 12> DAYS = {31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
    if (month < 1 || month > 12) return 0;
    return DAYS[month - 1];
}

int main() {
    std::cout << "8월 일수: " << getDaysInMonth(8) << "\n";
    return 0;
}
