// ==============================================================================
// @file: test.cpp
// @path: tracks/05_legacy_code/25_dependency_breaking_techniques/01_extract_and_override_method/test.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <cassert>
#include <iostream>

class TransactionProcessor {
protected:
    virtual bool executeRemotePayment(int amount) { return false; }
public:
    virtual ~TransactionProcessor() = default;
    bool process(int amount) {
        if (amount <= 0) return false;
        return executeRemotePayment(amount);
    }
};

class FakeTransactionProcessor : public TransactionProcessor {
protected:
    bool executeRemotePayment(int amount) override {
        return true; // 테스트를 위해 성공 응답 모의
    }
};

int main() {
    FakeTransactionProcessor fake;
    assert(fake.process(100) == true);
    assert(fake.process(-50) == false);
    std::cout << "PASS: 25.1 Extract and Override Method" << std::endl;
    return 0;
}
