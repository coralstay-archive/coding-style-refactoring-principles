// ==============================================================================
// @file: test.cpp
// @path: tracks/01_code_complete/16_controlling_loops/01_loop_safety_guard/test.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <cassert>
#include <iostream>

int safeConvergenceLoop(int startValue, int target, int maxIterations);

int main() {
    assert(safeConvergenceLoop(0, 10, 100) == 5);
    // 무한 루프 상황에서도 maxIterations로 안전하게 탈출
    assert(safeConvergenceLoop(0, 100, 10) == 10);
    std::cout << "PASS: 16.1 Loop Safety Guard" << std::endl;
    return 0;
}
