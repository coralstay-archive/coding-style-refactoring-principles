// ==============================================================================
// @file: test.cpp
// @path: tracks/05_legacy_code/04_the_seam_model/01_core_example/test.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <cassert>
class MockService : public MarketDataService {
protected:
    double fetchPrice() override { return 200.0; }
};
int main() {
    MockService m;
    assert(m.getValuation() == 220.0);
    return 0;
}
