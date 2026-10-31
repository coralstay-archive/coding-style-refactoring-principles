// ==============================================================================
// @file: main.cpp
// @path: tracks/05_legacy_code/14_dependencies_on_libraries/01_core_example/main.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <iostream>
class DatabaseDriverWrapper {
public:
    virtual ~DatabaseDriverWrapper() = default;
    virtual bool execute(const char* query) { return true; }
};

int main() {
    DatabaseDriverWrapper db;
    std::cout << "[Legacy Code Ch 14] 라이브러리 래핑 실행: " << (db.execute("SELECT 1") ? "OK" : "FAIL") << "\n";
    return 0;
}
