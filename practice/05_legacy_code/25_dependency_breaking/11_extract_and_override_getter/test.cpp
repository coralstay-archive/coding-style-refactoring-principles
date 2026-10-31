// ==============================================================================
// @file: test.cpp
// @path: tracks/05_legacy_code/25_dependency_breaking/11_extract_and_override_getter/test.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <cassert>

class MockHeavyResource : public HeavyResource {
public:
    std::string fetch() override { return "MockData"; }
};

class TestableService : public ClientService {
    MockHeavyResource mockRes;
protected:
    HeavyResource* getResource() override { return &mockRes; }
};

int main() {
    TestableService testSvc;
    assert(testSvc.run() == "Loaded: MockData");
    return 0;
}
