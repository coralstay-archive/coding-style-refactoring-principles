// ==============================================================================
// @file: main.cpp
// @path: tracks/01_code_complete/05_design_in_construction/5.2_cohesion_and_coupling/main.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <iostream>
bool isGoodArchitecture(int cohesion, int coupling) { return cohesion >= 8 && coupling <= 2; }
int main() { std::cout << "[CC 5.2] 아키텍처 점수: " << (isGoodArchitecture(9, 1) ? "우수" : "불량") << "\n"; return 0; }
