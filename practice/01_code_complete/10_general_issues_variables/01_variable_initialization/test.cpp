// ==============================================================================
// @file: test.cpp
// @path: tracks/01_code_complete/10_general_issues_variables/01_variable_initialization/test.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <cassert>
#include <iostream>

int calculateTotalScore(int baseScore, int bonus);

int main() {
    assert(calculateTotalScore(100, 20) == 120);
    assert(calculateTotalScore(0, 0) == 0);
    std::cout << "PASS: 10.1 Variable Initialization" << std::endl;
    return 0;
}
