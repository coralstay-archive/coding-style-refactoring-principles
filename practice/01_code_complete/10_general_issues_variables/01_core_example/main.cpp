// ==============================================================================
// @file: main.cpp
// @path: tracks/01_code_complete/10_general_issues_variables/01_core_example/main.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <iostream>

int calculateNetIncome(int revenue, int expense) {
    const int netIncome = revenue - expense;
    return netIncome;
}

int main() {
    std::cout << "순이익: " << calculateNetIncome(1000, 400) << "\n";
    return 0;
}
