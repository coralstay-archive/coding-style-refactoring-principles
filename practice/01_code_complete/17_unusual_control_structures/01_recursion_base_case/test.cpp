// ==============================================================================
// @file: test.cpp
// @path: tracks/01_code_complete/17_unusual_control_structures/01_recursion_base_case/test.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <cassert>
#include <iostream>

long long factorialWithBaseCase(int n);

int main() {
    assert(factorialWithBaseCase(0) == 1);
    assert(factorialWithBaseCase(1) == 1);
    assert(factorialWithBaseCase(5) == 120);
    std::cout << "PASS: 17.1 Recursion Base Case" << std::endl;
    return 0;
}
