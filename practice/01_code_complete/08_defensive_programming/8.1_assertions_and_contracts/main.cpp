// ==============================================================================
// @file: main.cpp
// @path: tracks/01_code_complete/08_defensive_programming/8.1_assertions_and_contracts/main.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <iostream>
#include <cassert>
int divideStrict(int numerator, int denominator) {
    assert(denominator != 0 && "분모는 0이 될 수 없음");
    return numerator / denominator;
}
int main() { std::cout << "[CC 8.1] 어서션 안전 나눗셈: " << divideStrict(10, 2) << "\n"; return 0; }
