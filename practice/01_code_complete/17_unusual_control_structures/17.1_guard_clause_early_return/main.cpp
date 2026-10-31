// ==============================================================================
// @file: main.cpp
// @path: tracks/01_code_complete/17_unusual_control_structures/17.1_guard_clause_early_return/main.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <iostream>
int processScore(int score) {
    if (score < 0) return 0;
    if (score > 100) return 100;
    return score;
}
int main() { std::cout << "[CC 17.1] 정규화 점수: " << processScore(150) << "\n"; return 0; }
