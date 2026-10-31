// ==============================================================================
// @file: test.cpp
// @path: tracks/01_code_complete/23_debugging/01_core_example/test.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <cassert>
int main() {
    int data[] = {10, 20, 30};
    assert(binarySearch(data, 3, 20) == 1);
    return 0;
}
