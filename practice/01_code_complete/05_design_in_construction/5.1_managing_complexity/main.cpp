// ==============================================================================
// @file: main.cpp
// @path: tracks/01_code_complete/05_design_in_construction/5.1_managing_complexity/main.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <iostream>
bool isCognitivelyManageable(int cyclomaticComplexity) { return cyclomaticComplexity <= 10; }
int main() { std::cout << "[CC 5.1] 인지 복잡도 적합성: " << (isCognitivelyManageable(5) ? "PASS" : "FAIL") << "\n"; return 0; }
