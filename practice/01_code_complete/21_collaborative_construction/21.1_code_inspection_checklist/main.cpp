// ==============================================================================
// @file: main.cpp
// @path: tracks/01_code_complete/21_collaborative_construction/21.1_code_inspection_checklist/main.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <iostream>
struct InspectionSheet { bool testsPassed; bool namingClear; bool memorySafe; };
bool passesInspection(const InspectionSheet& s) { return s.testsPassed && s.namingClear && s.memorySafe; }
int main() { std::cout << "[CC 21.1] 인스펙션 통과: " << passesInspection({true, true, true}) << "\n"; return 0; }
