// ==============================================================================
// @file: main.cpp
// @path: tracks/01_code_complete/16_controlling_loops/16.1_loop_invariants_and_termination/main.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <iostream>
int sumBounded(int limit) {
    int sum = 0;
    for (int i = 1; i <= limit; ++i) sum += i;
    return sum;
}
int main() { std::cout << "[CC 16.1] 1~10 합: " << sumBounded(10) << "\n"; return 0; }
