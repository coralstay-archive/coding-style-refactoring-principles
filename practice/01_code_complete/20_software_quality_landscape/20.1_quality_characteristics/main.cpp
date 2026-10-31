// ==============================================================================
// @file: main.cpp
// @path: tracks/01_code_complete/20_software_quality_landscape/20.1_quality_characteristics/main.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <iostream>
struct QualityIndex { double correctness; double maintainability; };
bool isShippable(const QualityIndex& q) { return q.correctness >= 0.99 && q.maintainability >= 0.90; }
int main() { std::cout << "[CC 20.1] 출시 준비도: " << isShippable({0.99, 0.95}) << "\n"; return 0; }
