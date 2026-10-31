// ==============================================================================
// @file: main.cpp
// @path: tracks/01_code_complete/02_metaphors/2.2_toolbox_metaphor/main.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <iostream>
#include <string>
std::string selectTool(bool isQuickPrototype) { return isQuickPrototype ? "Scripting" : "Strict Type System"; }
int main() { std::cout << "[CC 2.2] 도구 선택: " << selectTool(false) << "\n"; return 0; }
