// ==============================================================================
// @file: main.cpp
// @path: tracks/05_legacy_code/09_cant_harness_class/01_pass_null_and_subclass/main.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <iostream>
class HeavyDatabase { public: virtual ~HeavyDatabase() = default; virtual bool isConnected() { return true; } };
class Service {
    HeavyDatabase* db;
public:
    Service(HeavyDatabase* d = nullptr) : db(d) {}
    bool run() { return db ? db->isConnected() : true; }
};
int main() {
    Service s(nullptr);
    std::cout << "[Legacy 9.1] 널 주입 하네스 실행: " << s.run() << "\n";
    return 0;
}
