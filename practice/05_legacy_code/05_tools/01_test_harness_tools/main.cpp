// ==============================================================================
// @file: main.cpp
// @path: tracks/05_legacy_code/05_tools/01_test_harness_tools/main.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <iostream>
struct BuildStatus { bool warningsAsErrors; bool hasCoverage; };
int main() {
    BuildStatus s{true, true};
    std::cout << "[Legacy 5.1] 안전 도구 구축 여부: " << (s.warningsAsErrors && s.hasCoverage) << "\n";
    return 0;
}
