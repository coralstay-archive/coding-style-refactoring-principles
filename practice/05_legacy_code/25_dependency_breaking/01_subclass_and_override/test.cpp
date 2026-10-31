// ==============================================================================
// @file: test.cpp
// @path: tracks/05_legacy_code/25_dependency_breaking/01_subclass_and_override/test.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <cassert>
class TestReader : public HardwareReader {
protected:
    int readRaw() override { return 50; }
};
int main() { TestReader tr; assert(tr.getValue() == 100); return 0; }
