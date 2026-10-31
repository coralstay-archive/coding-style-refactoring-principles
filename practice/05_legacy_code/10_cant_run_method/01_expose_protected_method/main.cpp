// ==============================================================================
// @file: main.cpp
// @path: tracks/05_legacy_code/10_cant_run_method/01_expose_protected_method/main.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <iostream>
class Processor {
protected:
    virtual int computeInternal(int x) { return x * 2; }
public:
    virtual ~Processor() = default;
};
class TestProcessor : public Processor {
public:
    int testCompute(int x) { return computeInternal(x); }
};
int main() {
    TestProcessor tp;
    std::cout << "[Legacy 10.1] 노출된 내부 연산: " << tp.testCompute(21) << "\n";
    return 0;
}
