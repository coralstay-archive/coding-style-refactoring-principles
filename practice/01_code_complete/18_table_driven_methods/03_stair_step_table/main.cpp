// ==============================================================================
// @file: main.cpp
// @path: tracks/01_code_complete/18_table_driven_methods/03_stair_step_table/main.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <iostream>
#include <vector>

class StairStepGrader {
    static inline const std::vector<int> rangeLimits = { 50, 65, 75, 90, 100 };
    static inline const char grades[] = { 'F', 'D', 'C', 'B', 'A' };
public:
    static char getGrade(int score) {
        for (size_t i = 0; i < rangeLimits.size(); ++i) {
            if (score <= rangeLimits[i]) return grades[i];
        }
        return 'A';
    }
};

int main() {
    std::cout << "[McConnell 18.3] Grade for 82: " << StairStepGrader::getGrade(82) << "\n";
    return 0;
}
