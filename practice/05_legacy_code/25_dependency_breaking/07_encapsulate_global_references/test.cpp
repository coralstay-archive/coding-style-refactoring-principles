// ==============================================================================
// @file: test.cpp
// @path: tracks/05_legacy_code/25_dependency_breaking/07_encapsulate_global_references/test.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <cassert>

int main() {
    GlobalConfigBridge::setDbUrl("sqlite://:memory:");
    Repository repo;
    assert(repo.connect() == "Connecting to sqlite://:memory:");
    return 0;
}
