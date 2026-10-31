// ==============================================================================
// @file: main.cpp
// @path: tracks/01_code_complete/08_defensive_programming/8.2_barricade_pattern/main.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <iostream>
#include <string>
std::string sanitizeBarricade(const std::string& raw) {
    std::string safe;
    for (char c : raw) {
        if (std::isalnum(c)) safe += c;
    }
    return safe;
}
int main() { std::cout << "[CC 8.2] 정제된 데이터: " << sanitizeBarricade("hello#$123") << "\n"; return 0; }
