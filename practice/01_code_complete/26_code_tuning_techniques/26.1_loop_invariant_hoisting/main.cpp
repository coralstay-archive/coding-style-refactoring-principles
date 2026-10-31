// ==============================================================================
// @file: main.cpp
// @path: tracks/01_code_complete/26_code_tuning_techniques/26.1_loop_invariant_hoisting/main.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <iostream>
#include <vector>
long long sumScaled(const std::vector<int>& v, int scaleFactor) {
    long long total = 0;
    const size_t n = v.size(); // 불변식 호이스팅
    for (size_t i = 0; i < n; ++i) {
        total += v[i];
    }
    return total * scaleFactor;
}
int main() { std::cout << "[CC 26.1] 스케일 합: " << sumScaled({1, 2, 3}, 10) << "\n"; return 0; }
