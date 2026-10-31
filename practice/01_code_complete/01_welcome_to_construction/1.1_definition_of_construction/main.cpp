// ==============================================================================
// @file: main.cpp
// @path: tracks/01_code_complete/01_welcome_to_construction/1.1_definition_of_construction/main.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <iostream>
#include <string>
std::string getConstructionScope() { return "코딩, 상세설계, 단위테스트, 디버깅"; }
int main() { std::cout << "[CC 1.1] 구축 범위: " << getConstructionScope() << "\n"; return 0; }
