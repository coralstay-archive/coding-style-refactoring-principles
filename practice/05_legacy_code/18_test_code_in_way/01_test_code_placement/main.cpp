// ==============================================================================
// @file: main.cpp
// @path: tracks/05_legacy_code/18_test_code_in_way/01_test_code_placement/main.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <iostream>
#ifdef UNIT_TEST_BUILD
const char* buildType = "Test";
#else
const char* buildType = "Production";
#endif
int main() {
    std::cout << "[Legacy 18.1] 빌드 타입 격리: " << buildType << "\n";
    return 0;
}
