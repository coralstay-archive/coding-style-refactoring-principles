// ==============================================================================
// @file: main.cpp
// @path: tracks/05_legacy_code/25_dependency_breaking_techniques/02_extract_and_override_getter/main.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <iostream>
#include <memory>

class DatabaseConnection {
public:
    virtual ~DatabaseConnection() = default;
    virtual bool ping() const { return false; }
};

class DataService {
protected:
    virtual std::shared_ptr<DatabaseConnection> getDb() {
        return std::make_shared<DatabaseConnection>(); // 기본은 실제 DB
    }
public:
    virtual ~DataService() = default;
    bool isHealthy() {
        return getDb()->ping();
    }
};

int main() {
    DataService svc;
    std::cout << "[Feathers 25.2] Healthy: " << svc.isHealthy() << std::endl;
    return 0;
}
