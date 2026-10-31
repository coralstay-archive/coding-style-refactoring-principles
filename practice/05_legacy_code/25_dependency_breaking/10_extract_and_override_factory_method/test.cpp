// ==============================================================================
// @file: test.cpp
// @path: tracks/05_legacy_code/25_dependency_breaking/10_extract_and_override_factory_method/test.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <cassert>

class MockLogger : public Logger {
public:
    std::string log(const std::string& msg) override { return "MockLog: " + msg; }
};

class TestableProcessor : public OrderProcessor {
protected:
    std::unique_ptr<Logger> createLogger() override {
        return std::make_unique<MockLogger>();
    }
};

int main() {
    TestableProcessor testProc;
    assert(testProc.processOrder(101) == "MockLog: Order#101");
    return 0;
}
