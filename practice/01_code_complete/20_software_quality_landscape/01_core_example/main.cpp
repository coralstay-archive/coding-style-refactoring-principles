// ==============================================================================
// @file: main.cpp
// @path: tracks/01_code_complete/20_software_quality_landscape/01_core_example/main.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <iostream>

struct QualityReport {
    double correctness;
    double maintainability;
};

int main() {
    QualityReport q{0.99, 0.95};
    std::cout << "품질 점수: 정합성 " << q.correctness << ", 유지보수성 " << q.maintainability << "\n";
    return 0;
}
