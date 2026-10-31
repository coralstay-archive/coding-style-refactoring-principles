// ==============================================================================
// @file: main.cpp
// @path: tracks/05_legacy_code/14_library_dependencies/01_library_wrapper/main.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <iostream>
class ThirdPartyWrapper {
public:
    virtual ~ThirdPartyWrapper() = default;
    virtual std::string query() { return "LIB_DATA"; }
};
int main() {
    ThirdPartyWrapper w;
    std::cout << "[Legacy 14.1] 래핑된 라이브러리 출력: " << w.query() << "\n";
    return 0;
}
