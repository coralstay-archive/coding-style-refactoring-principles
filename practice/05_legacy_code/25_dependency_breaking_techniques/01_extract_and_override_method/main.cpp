// ==============================================================================
// @file: main.cpp
// @path: tracks/05_legacy_code/25_dependency_breaking_techniques/01_extract_and_override_method/main.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <iostream>
#include <string>

class TransactionProcessor {
protected:
    virtual bool executeRemotePayment(int amount) {
        // 실제로는 외부 결제 네트워크 호출 (테스트 환경에서는 실패 유발)
        return false;
    }
public:
    virtual ~TransactionProcessor() = default;

    bool process(int amount) {
        if (amount <= 0) return false;
        return executeRemotePayment(amount);
    }
};

int main() {
    TransactionProcessor tp;
    std::cout << "[Feathers 25.1] Process: " << tp.process(100) << std::endl;
    return 0;
}
