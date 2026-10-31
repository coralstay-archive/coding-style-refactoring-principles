// ==============================================================================
// @file: main.cpp
// @path: tracks/01_code_complete/28_managing_construction/28.1_configuration_management/main.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <iostream>
#include <string_view>
constexpr std::string_view BRANCH_STRATEGY = "Trunk-Based Development";
int main() { std::cout << "[CC 28.1] 채택 브랜치 전략: " << BRANCH_STRATEGY << "\n"; return 0; }
