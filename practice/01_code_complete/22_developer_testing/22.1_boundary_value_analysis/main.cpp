// ==============================================================================
// @file: main.cpp
// @path: tracks/01_code_complete/22_developer_testing/22.1_boundary_value_analysis/main.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <iostream>
bool isAgeValid(int age) { return age >= 1 && age <= 120; }
int main() { std::cout << "[CC 22.1] 1세 검증: " << isAgeValid(1) << "\n"; return 0; }
