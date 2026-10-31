// ==============================================================================
// @file: main.cpp
// @path: tracks/01_code_complete/03_upstream_prerequisites/3.2_architecture_prerequisites/main.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <iostream>
struct ArchitectureSpec { bool hasConceptualIntegrity; };
bool validateArch(const ArchitectureSpec& a) { return a.hasConceptualIntegrity; }
int main() { std::cout << "[CC 3.2] 아키텍처 무결성: " << (validateArch({true}) ? "PASS" : "FAIL") << "\n"; return 0; }
