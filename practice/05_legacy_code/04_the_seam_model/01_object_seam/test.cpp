// ==============================================================================
// @file: test.cpp
// @path: tracks/05_legacy_code/04_the_seam_model/01_object_seam/test.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <cassert>
class MockPriceFeed : public PriceFeed {
protected:
    double fetchRawPrice() override { return 200.0; }
};
int main() { MockPriceFeed mpf; assert(mpf.getCalculatedPrice() == 220.0); return 0; }
