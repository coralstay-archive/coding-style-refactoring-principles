// ==============================================================================
// @file: main.cpp
// @path: tracks/05_legacy_code/25_dependency_breaking/09_extract_and_override_call/main.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <iostream>
#include <string>

class PaymentGateway {
protected:
    virtual bool executeNetworkCall(int amount) {
        // 실제 운영망 통신 (테스트에서 실행 불가)
        return true;
    }
public:
    virtual ~PaymentGateway() = default;
    bool pay(int amount) {
        if (amount <= 0) return false;
        return executeNetworkCall(amount);
    }
};

int main() {
    PaymentGateway gw;
    std::cout << "[Legacy 25.6] Pay: " << gw.pay(500) << "\n";
    return 0;
}
