// ==============================================================================
// @file: main.cpp
// @path: tracks/05_legacy_code/25_dependency_breaking/03_parameterize_constructor/main.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <iostream>
class Dependency {};
class Consumer {
private:
    Dependency* m_dep;
public:
    explicit Consumer(Dependency* dep) : m_dep(dep) {}
    bool hasDependency() const { return m_dep != nullptr; }
};
int main() { Dependency d; Consumer c(&d); std::cout << "[Legacy Code 25.3] 의존성 주입 확인: " << c.hasDependency() << "\n"; return 0; }
