// ==============================================================================
// @file: main.cpp
// @path: tracks/01_code_complete/16_controlling_loops/01_loop_safety_guard/main.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <iostream>

int safeConvergenceLoop(int startValue, int target, int maxIterations) {
    int current = startValue;
    int iterations = 0;
    while (current < target && iterations < maxIterations) {
        current += 2;
        iterations++;
    }
    return iterations;
}

int main() {
    std::cout << "[CC2 16.1] Iterations: " << safeConvergenceLoop(0, 10, 100) << std::endl;
    return 0;
}
