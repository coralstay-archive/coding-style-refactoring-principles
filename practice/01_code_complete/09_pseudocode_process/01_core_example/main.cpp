// ==============================================================================
// @file: main.cpp
// @path: tracks/01_code_complete/09_pseudocode_process/01_core_example/main.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <iostream>
#include <vector>

// [Code Complete Ch 9] PPP: 의사코드를 단계별 주석으로 두고 구현
int sumEvenNumbers(const std::vector<int>& numbers) {
    // 1. 합계 누적 변수를 0으로 초기화한다
    int sum = 0;
    // 2. 각 숫자를 순회하며
    for (int n : numbers) {
        // 3. 짝수이면 합계에 더한다
        if (n % 2 == 0) sum += n;
    }
    // 4. 최종 합계를 반환한다
    return sum;
}

int main() {
    std::cout << "짝수 합: " << sumEvenNumbers({1, 2, 3, 4, 5, 6}) << "\n";
    return 0;
}
