// ==============================================================================
// @file: main.cpp
// @path: tracks/01_code_complete/08_defensive_programming/01_core_example/main.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <iostream>
#include <cassert>
#include <string>

// [Code Complete Ch 8] 외부 입력 정제 및 격리 방화벽
std::string sanitizeUserInput(const std::string& input) {
    std::string clean;
    for (char c : input) {
        if (c != '\'' && c != ';') clean += c;
    }
    return clean;
}

int main() {
    std::cout << "정제된 입력: " << sanitizeUserInput("admin'; DROP TABLE") << "\n";
    return 0;
}
