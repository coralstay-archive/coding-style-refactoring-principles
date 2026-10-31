// ==============================================================================
// @file: main.cpp
// @path: tracks/05_legacy_code/04_the_seam_model/01_object_seam/main.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <iostream>
class PriceFeed {
protected:
    virtual double fetchRawPrice() { return 100.0; } // Object Seam
public:
    virtual ~PriceFeed() = default;
    double getCalculatedPrice() { return fetchRawPrice() * 1.1; }
};
int main() { PriceFeed pf; std::cout << "[Legacy Code 4.1] 기본 가격: " << pf.getCalculatedPrice() << "\n"; return 0; }
