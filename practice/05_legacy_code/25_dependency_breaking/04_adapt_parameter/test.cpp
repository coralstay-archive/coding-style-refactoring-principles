// ==============================================================================
// @file: test.cpp
// @path: tracks/05_legacy_code/25_dependency_breaking/04_adapt_parameter/test.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <cassert>
#include <string>

class FakeAdapter : public IParamAdapter {
public:
    std::string getData() override { return "MockedTestPayload"; }
};

int main() {
    FakeAdapter fake;
    BusinessService svc;
    assert(svc.process(&fake) == "Processed: MockedTestPayload");
    return 0;
}
