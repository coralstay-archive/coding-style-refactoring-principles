// ==============================================================================
// @file: main.cpp
// @path: tracks/05_legacy_code/25_dependency_breaking/02_extract_interface/main.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <iostream>
class IEmailClient {
public:
    virtual ~IEmailClient() = default;
    virtual bool send() = 0;
};
class MockEmailClient : public IEmailClient {
public:
    bool send() override { return true; }
};
int main() { MockEmailClient mc; std::cout << "[Legacy Code 25.2] 인터페이스 분리 완료\n"; return 0; }
