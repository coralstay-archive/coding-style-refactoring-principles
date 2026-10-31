// ==============================================================================
// @file: main.cpp
// @path: tracks/01_code_complete/04_construction_decisions/4.2_programming_conventions/main.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <iostream>
#include <string_view>
constexpr std::string_view TEAM_STANDARD = "Google C++ Style Guide";
int main() { std::cout << "[CC 4.2] 채택 규약: " << TEAM_STANDARD << "\n"; return 0; }
