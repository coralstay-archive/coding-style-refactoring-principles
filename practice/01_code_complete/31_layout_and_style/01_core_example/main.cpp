// ==============================================================================
// @file: main.cpp
// @path: tracks/01_code_complete/31_layout_and_style/01_core_example/main.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <iostream>

void demonstrateCleanLayout() {
    const int threshold = 100;
    int current = 42;

    if (current < threshold) {
        std::cout << "정상 범위입니다.\n";
    }
}

int main() {
    demonstrateCleanLayout();
    return 0;
}
