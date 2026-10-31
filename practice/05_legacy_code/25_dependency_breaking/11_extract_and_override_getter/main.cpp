// ==============================================================================
// @file: main.cpp
// @path: tracks/05_legacy_code/25_dependency_breaking/11_extract_and_override_getter/main.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <iostream>
#include <string>

class HeavyResource {
public:
    virtual ~HeavyResource() = default;
    virtual std::string fetch() { return "LiveDatabaseClusterData"; }
};

class ClientService {
    HeavyResource* res = nullptr;
protected:
    virtual HeavyResource* getResource() {
        if (!res) res = new HeavyResource();
        return res;
    }
public:
    virtual ~ClientService() { delete res; }
    std::string run() {
        return "Loaded: " + getResource()->fetch();
    }
};

int main() {
    ClientService svc;
    std::cout << "[Legacy 25.8] " << svc.run() << "\n";
    return 0;
}
