// ==============================================================================
// @file: main.cpp
// @path: tracks/05_legacy_code/06_sprout_and_wrap/01_core_example/main.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <iostream>
#include <vector>

class LegacyBilling {
public:
    // 신규 발아 메서드: 독립적으로 격리하여 테스트 가능
    static double calculateLateFee(double overdueAmount, int days) {
        return (days > 30) ? overdueAmount * 0.05 : 0.0;
    }
};

int main() {
    std::cout << "[Legacy Code Ch 6] 연체 수수료: " << LegacyBilling::calculateLateFee(1000.0, 45) << "\n";
    return 0;
}
