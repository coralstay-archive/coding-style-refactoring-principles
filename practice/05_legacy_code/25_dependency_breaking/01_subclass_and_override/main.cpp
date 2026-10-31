// ==============================================================================
// @file: main.cpp
// @path: tracks/05_legacy_code/25_dependency_breaking/01_subclass_and_override/main.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <iostream>
class HardwareReader {
protected:
    virtual int readRaw() { return 10; }
public:
    virtual ~HardwareReader() = default;
    int getValue() { return readRaw() * 2; }
};
int main() { HardwareReader hr; std::cout << "[Legacy Code 25.1] " << hr.getValue() << "\n"; return 0; }
