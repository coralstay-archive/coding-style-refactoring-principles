// ==============================================================================
// @file: main.cpp
// @path: tracks/01_code_complete/19_general_control_issues/01_core_example/main.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <iostream>

bool isValidUser(bool hasToken, bool isExpired) noexcept {
    return hasToken && !isExpired;
}

int main() {
    std::cout << "인증 상태: " << (isValidUser(true, false) ? "유효" : "무효") << "\n";
    return 0;
}
