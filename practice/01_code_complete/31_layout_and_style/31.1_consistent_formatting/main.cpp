// ==============================================================================
// @file: main.cpp
// @path: tracks/01_code_complete/31_layout_and_style/31.1_consistent_formatting/main.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <iostream>
void printFormattedBlock(int val) {
    if (val > 0) {
        std::cout << "양수 블록 들여쓰기\n";
    }
}
int main() { printFormattedBlock(1); return 0; }
