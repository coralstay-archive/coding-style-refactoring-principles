// ==============================================================================
// @file: main.cpp
// @path: tracks/01_code_complete/10_general_issues_variables/10.1_variable_scope_minimization/main.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <iostream>
int computeLocalTask() {
    const int multiplier = 10; // 사용 직전 선언
    return 5 * multiplier;
}
int main() { std::cout << "[CC 10.1] 국소 변수 계산: " << computeLocalTask() << "\n"; return 0; }
