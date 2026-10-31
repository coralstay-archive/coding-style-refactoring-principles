// ==============================================================================
// @file: main.cpp
// @path: tracks/01_code_complete/01_welcome_to_construction/1.2_importance_of_construction/main.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <iostream>
bool isCriticalPath(int constructionEffortPercentage) { return constructionEffortPercentage >= 50; }
int main() { std::cout << "[CC 1.2] 중요 경로 판정: " << (isCriticalPath(65) ? "YES" : "NO") << "\n"; return 0; }
