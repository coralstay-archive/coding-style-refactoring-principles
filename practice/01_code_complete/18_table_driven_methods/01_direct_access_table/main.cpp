// ==============================================================================
// @file: main.cpp
// @path: tracks/01_code_complete/18_table_driven_methods/01_direct_access_table/main.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <iostream>
#include <array>

int getDaysInMonth(int month) {
    // 1~12월 일수 테이블 (평년 기준)
    static const std::array<int, 13> days = {0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
    if (month < 1 || month > 12) return -1;
    return days[month];
}

int main() {
    std::cout << "[CC2 18.1] Feb days: " << getDaysInMonth(2) << std::endl;
    return 0;
}
