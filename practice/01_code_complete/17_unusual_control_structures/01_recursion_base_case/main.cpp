// ==============================================================================
// @file: main.cpp
// @path: tracks/01_code_complete/17_unusual_control_structures/01_recursion_base_case/main.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <iostream>

long long factorialWithBaseCase(int n) {
    if (n <= 1) return 1; // 명확한 기저 조건
    return n * factorialWithBaseCase(n - 1);
}

int main() {
    std::cout << "[CC2 17.1] 5! = " << factorialWithBaseCase(5) << std::endl;
    return 0;
}
