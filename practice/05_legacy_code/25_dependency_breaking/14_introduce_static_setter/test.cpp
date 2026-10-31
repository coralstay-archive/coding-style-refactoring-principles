// ==============================================================================
// @file: test.cpp
// @path: tracks/05_legacy_code/25_dependency_breaking/14_introduce_static_setter/test.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <cassert>

class MockDatabaseConnection : public DatabaseConnection {
public:
    std::string query() override { return "FakeMockUserData"; }
};

int main() {
    MockDatabaseConnection mockDb;
    DatabaseConnection::setTestingInstance(&mockDb);
    UserService svc;
    assert(svc.getUserInfo() == "FakeMockUserData");
    return 0;
}
