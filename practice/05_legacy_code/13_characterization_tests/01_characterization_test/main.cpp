// ==============================================================================
// @file: main.cpp
// @path: tracks/05_legacy_code/13_characterization_tests/01_characterization_test/main.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <iostream>
#include <string>
std::string legacyHash(int id) { return "HASH_" + std::to_string(id * 3); }
int main() { std::cout << "[Legacy Code 13.1] 특성 출력: " << legacyHash(4) << "\n"; return 0; }
