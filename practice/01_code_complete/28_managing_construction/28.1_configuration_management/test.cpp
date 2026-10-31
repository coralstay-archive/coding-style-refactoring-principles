// ==============================================================================
// @file: test.cpp
// @path: tracks/01_code_complete/28_managing_construction/28.1_configuration_management/test.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <cassert>
int main() { assert(BRANCH_STRATEGY.find("Trunk") != std::string_view::npos); return 0; }
