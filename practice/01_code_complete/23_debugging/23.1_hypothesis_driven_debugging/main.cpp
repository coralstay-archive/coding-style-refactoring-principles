// ==============================================================================
// @file: main.cpp
// @path: tracks/01_code_complete/23_debugging/23.1_hypothesis_driven_debugging/main.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <iostream>
int findRootCause(int errorCode) { return (errorCode == 404) ? 1 : 0; }
int main() { std::cout << "[CC 23.1] 원인 규명: " << findRootCause(404) << "\n"; return 0; }
