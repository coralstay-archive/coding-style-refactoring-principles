// ==============================================================================
// @file: main.cpp
// @path: tracks/01_code_complete/05_design_in_construction/01_core_example/main.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <iostream>
#include <string>

// [Code Complete Ch 5] 결합도와 응집도 평가 모델
class DesignMetric {
public:
    static bool isHighCohesionAndLowCoupling(int cohesionScore, int couplingScore) {
        return cohesionScore >= 8 && couplingScore <= 3;
    }
};

int main() {
    std::cout << "설계 적합도: " << (DesignMetric::isHighCohesionAndLowCoupling(9, 2) ? "우수" : "불량") << "\n";
    return 0;
}
