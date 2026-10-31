// ==============================================================================
// @file: test.cpp
// @path: tracks/01_code_complete/18_table_driven_methods/03_stair_step_table/test.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <cassert>

int main() {
    assert(StairStepGrader::getGrade(30) == 'F');
    assert(StairStepGrader::getGrade(50) == 'F');
    assert(StairStepGrader::getGrade(60) == 'D');
    assert(StairStepGrader::getGrade(70) == 'C');
    assert(StairStepGrader::getGrade(85) == 'B');
    assert(StairStepGrader::getGrade(95) == 'A');
    std::cout << "PASS: 18.3 Stair-Step Table\n";
    return 0;
}
