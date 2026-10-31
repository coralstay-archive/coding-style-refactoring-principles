// ==============================================================================
// @file: test.cpp
// @path: tracks/05_legacy_code/25_dependency_breaking_techniques/02_extract_and_override_getter/test.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <cassert>
#include <iostream>
#include <memory>

class DatabaseConnection {
public:
    virtual ~DatabaseConnection() = default;
    virtual bool ping() const { return false; }
};

class MockDb : public DatabaseConnection {
public:
    bool ping() const override { return true; }
};

class DataService {
protected:
    virtual std::shared_ptr<DatabaseConnection> getDb() {
        return std::make_shared<DatabaseConnection>();
    }
public:
    virtual ~DataService() = default;
    bool isHealthy() { return getDb()->ping(); }
};

class TestableDataService : public DataService {
protected:
    std::shared_ptr<DatabaseConnection> getDb() override {
        return std::make_shared<MockDb>();
    }
};

int main() {
    TestableDataService svc;
    assert(svc.isHealthy() == true);
    std::cout << "PASS: 25.2 Extract and Override Getter" << std::endl;
    return 0;
}
