// ==============================================================================
// @file: main.cpp
// @path: tracks/01_code_complete/14_straight_line_code/14.1_sequential_dependencies/main.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <iostream>
struct InitializedState { int handle; };
InitializedState initSystem() { return InitializedState{1}; }
bool runSystem(InitializedState state) { return state.handle > 0; }
int main() { std::cout << "[CC 14.1] 순차 의존성 보장 실행: " << runSystem(initSystem()) << "\n"; return 0; }
