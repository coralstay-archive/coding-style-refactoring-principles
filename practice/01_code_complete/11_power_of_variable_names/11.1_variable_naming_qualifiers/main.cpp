// ==============================================================================
// @file: main.cpp
// @path: tracks/01_code_complete/11_power_of_variable_names/11.1_variable_naming_qualifiers/main.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <iostream>
int main() {
    const int revenueTotal = 1000;
    const int expenseAverage = 200;
    std::cout << "[CC 11.1] 명확한 한정자 변수: " << revenueTotal - expenseAverage << "\n";
    return 0;
}
