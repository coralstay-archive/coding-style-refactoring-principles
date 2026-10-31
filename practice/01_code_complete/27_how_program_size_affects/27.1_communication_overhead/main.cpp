// ==============================================================================
// @file: main.cpp
// @path: tracks/01_code_complete/27_how_program_size_affects/27.1_communication_overhead/main.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <iostream>
int communicationChannels(int teamSize) { return teamSize * (teamSize - 1) / 2; }
int main() { std::cout << "[CC 27.1] 5명 팀의 소통 채널 수: " << communicationChannels(5) << "\n"; return 0; }
