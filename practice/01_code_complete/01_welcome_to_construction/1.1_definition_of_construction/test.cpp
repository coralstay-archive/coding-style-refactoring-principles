// ==============================================================================
// @file: test.cpp
// @path: tracks/01_code_complete/01_welcome_to_construction/1.1_definition_of_construction/test.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <cassert>
#include <string>
int main() { assert(getConstructionScope().find("코딩") != std::string::npos); return 0; }
