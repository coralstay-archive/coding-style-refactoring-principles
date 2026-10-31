// ==============================================================================
// @file: main.cpp
// @path: tracks/05_legacy_code/23_preserve_behavior/01_characterization_assertion/main.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <iostream>
bool checkInvariants(int a, int b) { return (a + b) >= 0; }
int main() {
    std::cout << "[Legacy 23.1] 불변식 검증: " << checkInvariants(10, 20) << "\n";
    return 0;
}
