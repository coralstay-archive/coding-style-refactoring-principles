// ==============================================================================
// @file: test.cpp
// @path: tracks/01_code_complete/18_table_driven_methods/01_direct_access_table/test.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <cassert>
#include <iostream>

int getDaysInMonth(int month);

int main() {
    assert(getDaysInMonth(1) == 31);
    assert(getDaysInMonth(2) == 28);
    assert(getDaysInMonth(12) == 31);
    assert(getDaysInMonth(13) == -1);
    std::cout << "PASS: 18.1 Direct-Access Table" << std::endl;
    return 0;
}
