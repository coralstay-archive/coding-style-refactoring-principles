// ==============================================================================
// @file: main.cpp
// @path: tracks/01_code_complete/07_high_quality_routines/7.2_routine_parameters/main.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <iostream>
int clampRange(int value, int minVal, int maxVal) {
    if (value < minVal) return minVal;
    if (value > maxVal) return maxVal;
    return value;
}
int main() { std::cout << "[CC 7.2] 클램프 결과: " << clampRange(120, 0, 100) << "\n"; return 0; }
