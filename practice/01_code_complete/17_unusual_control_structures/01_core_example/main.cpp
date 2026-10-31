// ==============================================================================
// @file: main.cpp
// @path: tracks/01_code_complete/17_unusual_control_structures/01_core_example/main.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <iostream>

long long factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

int main() {
    std::cout << "5! = " << factorial(5) << "\n";
    return 0;
}
