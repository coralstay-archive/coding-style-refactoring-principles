// ==============================================================================
// @file: test.cpp
// @path: tracks/01_code_complete/15_using_conditionals/15.1_nominal_flow_first/test.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <cassert>
int main() { assert(handleOperation(true).find("정상") != std::string::npos); return 0; }
