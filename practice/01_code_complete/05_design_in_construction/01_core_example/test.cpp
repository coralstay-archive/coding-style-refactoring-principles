// ==============================================================================
// @file: test.cpp
// @path: tracks/01_code_complete/05_design_in_construction/01_core_example/test.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <cassert>
int main() {
    assert(DesignMetric::isHighCohesionAndLowCoupling(9, 2) == true);
    return 0;
}
