// ==============================================================================
// @file: main.cpp
// @path: tracks/01_code_complete/16_controlling_loops/01_core_example/main.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <iostream>
#include <vector>

int findFirstNegativeIndex(const std::vector<int>& list) {
    for (size_t i = 0; i < list.size(); ++i) {
        if (list[i] < 0) return static_cast<int>(i);
    }
    return -1;
}

int main() {
    std::cout << "첫 음수 위치: " << findFirstNegativeIndex({10, 20, -5, 30}) << "\n";
    return 0;
}
