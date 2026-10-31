// ==============================================================================
// @file: main.cpp
// @path: tracks/05_legacy_code/25_dependency_breaking/14_introduce_static_setter/main.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <iostream>
#include <string>

class DatabaseConnection {
    static DatabaseConnection* instance;
public:
    virtual ~DatabaseConnection() = default;
    virtual std::string query() { return "RealProductionData"; }

    static DatabaseConnection* getInstance() {
        if (!instance) instance = new DatabaseConnection();
        return instance;
    }
    static void setTestingInstance(DatabaseConnection* mock) {
        instance = mock;
    }
};

DatabaseConnection* DatabaseConnection::instance = nullptr;

class UserService {
public:
    std::string getUserInfo() {
        return DatabaseConnection::getInstance()->query();
    }
};

int main() {
    UserService svc;
    std::cout << "[Legacy 25.12] Info: " << svc.getUserInfo() << "\n";
    return 0;
}
