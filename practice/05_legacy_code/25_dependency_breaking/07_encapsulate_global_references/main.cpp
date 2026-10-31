// ==============================================================================
// @file: main.cpp
// @path: tracks/05_legacy_code/25_dependency_breaking/07_encapsulate_global_references/main.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <iostream>
#include <string>

std::string g_DatabaseConnectionString = "mysql://prod-cluster:3306";

class GlobalConfigBridge {
public:
    static std::string& getDbUrl() { return g_DatabaseConnectionString; }
    static void setDbUrl(const std::string& url) { g_DatabaseConnectionString = url; }
};

class Repository {
public:
    std::string connect() {
        return "Connecting to " + GlobalConfigBridge::getDbUrl();
    }
};

int main() {
    Repository repo;
    std::cout << "[Legacy 25.4] " << repo.connect() << "\n";
    return 0;
}
