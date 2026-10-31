// ==============================================================================
// @file: main.cpp
// @path: tracks/01_code_complete/10_general_issues_variables/01_variable_initialization/main.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <iostream>
#include <string>

int calculateTotalScore(int baseScore, int bonus) {
    // 사용 직전에 선언 및 초기화 (라이브 타임 최소화)
    const int total = baseScore + bonus;
    return total;
}

int main() {
    std::cout << "[CC2 10.1] Score: " << calculateTotalScore(80, 15) << std::endl;
    return 0;
}
