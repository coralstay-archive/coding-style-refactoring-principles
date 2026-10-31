// ==============================================================================
// @file: main.cpp
// @path: tracks/01_code_complete/32_self_documenting_code/01_core_example/main.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <iostream>

// 주석 없이도 스스로 의도를 명확히 설명하는 함수
bool isAccountEligibleForRenewal(int accountAgeMonths, double debtBalance) noexcept {
    return (accountAgeMonths >= 12) && (debtBalance <= 0.0);
}

int main() {
    std::cout << "갱신 자격: " << (isAccountEligibleForRenewal(24, 0.0) ? "자격 있음" : "불가") << "\n";
    return 0;
}
