// ==============================================================================
// @file: main.cpp
// @path: tracks/01_code_complete/09_pseudocode_process/9.1_ppp_workflow/main.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <iostream>
#include <vector>
int sumPositiveOnly(const std::vector<int>& numbers) {
    // 1. 합계 변수 초기화
    int sum = 0;
    // 2. 각 숫자 순회
    for (int n : numbers) {
        // 3. 양수일 때만 누적
        if (n > 0) sum += n;
    }
    return sum;
}
int main() { std::cout << "[CC 9.1] PPP 합계: " << sumPositiveOnly({1, -2, 3, 4}) << "\n"; return 0; }
