// ==============================================================================
// @file: main.cpp
// @path: tracks/01_code_complete/18_table_driven_methods/18.1_direct_access_table/main.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <iostream>
#include <array>
int getMonthDays(int month) {
    static constexpr std::array<int, 13> DAYS = {0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
    if (month < 1 || month > 12) return 0;
    return DAYS[month];
}
int main() { std::cout << "[CC 18.1] 7월 일수: " << getMonthDays(7) << "\n"; return 0; }
