// ==============================================================================
// @file: test.cpp
// @path: tracks/01_code_complete/22_developer_testing/01_core_example/test.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <cassert>
int main() {
    assert(clamp(50, 0, 100) == 50);
    assert(clamp(-10, 0, 100) == 0);
    assert(clamp(150, 0, 100) == 100);
    return 0;
}
