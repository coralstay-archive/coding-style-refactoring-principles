// ==============================================================================
// @file: main.cpp
// @path: tracks/01_code_complete/11_power_of_variable_names/01_core_example/main.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <iostream>
#include <string_view>

void processPayroll() {
    constexpr int MAX_EMPLOYEE_COUNT = 100;
    constexpr std::string_view DEPARTMENT_NAME = "Engineering";
    std::cout << "부서: " << DEPARTMENT_NAME << ", 정원: " << MAX_EMPLOYEE_COUNT << "\n";
}

int main() {
    processPayroll();
    return 0;
}
