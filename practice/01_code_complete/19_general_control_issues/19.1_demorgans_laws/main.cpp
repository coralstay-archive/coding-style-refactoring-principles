// ==============================================================================
// @file: main.cpp
// @path: tracks/01_code_complete/19_general_control_issues/19.1_demorgans_laws/main.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <iostream>
bool isClosed(bool isOpen, bool isPending) noexcept {
    // !isOpen && !isPending == !(isOpen || isPending)
    return !isOpen && !isPending;
}
int main() { std::cout << "[CC 19.1] 마감 상태: " << isClosed(false, false) << "\n"; return 0; }
