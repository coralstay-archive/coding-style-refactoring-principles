// ==============================================================================
// @file: test.cpp
// @path: tracks/05_legacy_code/25_dependency_breaking_catalog/01_core_example/test.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <cassert>
class FakeTime : public TimeProvider {
public:
    long long getNow() override { return 9999; }
};
int main() {
    FakeTime ft;
    assert(ft.getNow() == 9999);
    return 0;
}
