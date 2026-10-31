// ==============================================================================
// @file: main.cpp
// @path: tracks/01_code_complete/22_developer_testing/01_core_example/main.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <iostream>
#include <cassert>

int clamp(int value, int minVal, int maxVal) {
    if (value < minVal) return minVal;
    if (value > maxVal) return maxVal;
    return value;
}

int main() {
    std::cout << "클램프(150, 0, 100): " << clamp(150, 0, 100) << "\n";
    return 0;
}
