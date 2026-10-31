// ==============================================================================
// @file: main.cpp
// @path: tracks/01_code_complete/04_key_construction_decisions/01_core_example/main.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <iostream>
#include <string_view>

class ConstructionConventions {
public:
    static constexpr std::string_view STANDARD = "C++17 Standard";
};

int main() {
    std::cout << "채택 표준: " << ConstructionConventions::STANDARD << "\n";
    return 0;
}
