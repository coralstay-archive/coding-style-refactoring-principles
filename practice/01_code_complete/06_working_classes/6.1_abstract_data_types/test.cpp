// ==============================================================================
// @file: test.cpp
// @path: tracks/01_code_complete/06_working_classes/6.1_abstract_data_types/test.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <cassert>
int main() { BoundedQueue q(2); q.push(); assert(q.size() == 1); return 0; }
