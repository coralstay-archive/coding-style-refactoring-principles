// ==============================================================================
// @file: test.cpp
// @path: tracks/01_code_complete/06_working_classes/01_core_example/test.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <cassert>
int main() {
    ScreenPoint pt(10, 20);
    assert(pt.x() == 10 && pt.y() == 20);
    return 0;
}
