// ==============================================================================
// @file: main.cpp
// @path: tracks/01_code_complete/03_upstream_prerequisites/3.1_requirements_prerequisites/main.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <iostream>
#include <cmath>
double getDefectFixCost(int phaseIndex) { return std::pow(10.0, phaseIndex); }
int main() { std::cout << "[CC 3.1] 배포 단계 결함 비용 승수: " << getDefectFixCost(3) << "배\n"; return 0; }
