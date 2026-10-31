// ==============================================================================
// @file: main.cpp
// @path: tracks/05_legacy_code/03_sensing_and_separation/01_core_example/main.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <iostream>
class Display {
public:
    virtual ~Display() = default;
    virtual void show(const char* msg) { std::cout << msg << "\n"; }
};

int main() {
    Display d;
    d.show("[Legacy Code Ch 3] 감지와 격리 메커니즘");
    return 0;
}
