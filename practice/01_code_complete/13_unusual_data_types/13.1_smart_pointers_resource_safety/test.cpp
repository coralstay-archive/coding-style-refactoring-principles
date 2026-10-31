// ==============================================================================
// @file: test.cpp
// @path: tracks/01_code_complete/13_unusual_data_types/13.1_smart_pointers_resource_safety/test.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <cassert>
#include <memory>
int main() { auto p = std::make_unique<int>(42); assert(*p == 42); return 0; }
