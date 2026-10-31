// ==============================================================================
// @file: test.cpp
// @path: tracks/01_code_complete/06_working_classes/6.2_class_interfaces/test.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <cassert>
int main() { ReadOnlyCounter c; c.increment(); assert(c.value() == 1); return 0; }
