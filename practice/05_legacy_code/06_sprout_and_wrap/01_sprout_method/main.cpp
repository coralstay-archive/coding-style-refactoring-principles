// ==============================================================================
// @file: main.cpp
// @path: tracks/05_legacy_code/06_sprout_and_wrap/01_sprout_method/main.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <iostream>
#include <vector>
#include <numeric>
class LegacyAccount {
public:
    // 신규 발아 메서드
    static double calculateInterest(double principal, double rate) {
        return (principal > 0 && rate > 0) ? principal * rate : 0.0;
    }
};
int main() { std::cout << "[Legacy Code 6.1] 발아 이자 계산: " << LegacyAccount::calculateInterest(1000, 0.05) << "\n"; return 0; }
