// ==============================================================================
// @file: main.cpp
// @path: tracks/05_legacy_code/20_class_too_big/01_incubator_class/main.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <iostream>
class InvoiceIncubator {
public:
    double computeTax(double total) { return total * 0.1; }
};
int main() {
    InvoiceIncubator inc;
    std::cout << "[Legacy 20.1] 추출된 인큐베이터 클래스: " << inc.computeTax(1000.0) << "\n";
    return 0;
}
