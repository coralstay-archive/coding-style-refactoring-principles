// ==============================================================================
// @file: main.cpp
// @path: tracks/01_code_complete/26_code_tuning_techniques/01_core_example/main.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <iostream>
#include <vector>

// 루프 내부 불변식(size())을 외부로 호이스팅
long long sumElements(const std::vector<int>& vec) {
    long long total = 0;
    const size_t n = vec.size();
    for (size_t i = 0; i < n; ++i) {
        total += vec[i];
    }
    return total;
}

int main() {
    std::cout << "합: " << sumElements({1, 2, 3, 4}) << "\n";
    return 0;
}
