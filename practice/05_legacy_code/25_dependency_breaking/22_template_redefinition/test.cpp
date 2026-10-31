// ==============================================================================
// @file: test.cpp
// @path: tracks/05_legacy_code/25_dependency_breaking/22_template_redefinition/test.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <cassert>

class MockSocketPolicy {
public:
    std::string read() { return "MockPacket"; }
};

int main() {
    NetworkReader<MockSocketPolicy> testReader;
    assert(testReader.readMessage() == "Msg: MockPacket");
    return 0;
}
