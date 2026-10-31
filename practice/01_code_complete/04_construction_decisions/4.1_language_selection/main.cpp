// ==============================================================================
// @file: main.cpp
// @path: tracks/01_code_complete/04_construction_decisions/4.1_language_selection/main.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <iostream>
int getProductivityMultiplier(int abstractionLevel) { return abstractionLevel * 2; }
int main() { std::cout << "[CC 4.1] 생산성 승수: " << getProductivityMultiplier(5) << "\n"; return 0; }
