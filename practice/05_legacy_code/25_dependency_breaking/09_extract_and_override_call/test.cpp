// ==============================================================================
// @file: test.cpp
// @path: tracks/05_legacy_code/25_dependency_breaking/09_extract_and_override_call/test.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <cassert>

class TestableGateway : public PaymentGateway {
public:
    bool wasNetworkCalled = false;
protected:
    bool executeNetworkCall(int amount) override {
        wasNetworkCalled = true;
        return true;
    }
};

int main() {
    TestableGateway testGw;
    assert(testGw.pay(100) == true);
    assert(testGw.wasNetworkCalled == true);
    assert(testGw.pay(-50) == false);
    return 0;
}
