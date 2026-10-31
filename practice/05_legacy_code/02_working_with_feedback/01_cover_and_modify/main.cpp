// ==============================================================================
// @file: main.cpp
// @path: tracks/05_legacy_code/02_working_with_feedback/01_cover_and_modify/main.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <iostream>
bool isChangeSafe(bool hasTests) { return hasTests; }
int main() { std::cout << "[Legacy Code 2.1] 변경 안전성: " << isChangeSafe(true) << "\n"; return 0; }
