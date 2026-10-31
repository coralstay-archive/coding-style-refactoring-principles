// ==============================================================================
// @file: test.cpp
// @path: tracks/05_legacy_code/19_code_not_object_oriented/01_core_example/test.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <cassert>
int testStub(int x) { return 999; }
int main() {
    ActionFunc f = testStub;
    assert(f(1) == 999);
    return 0;
}
