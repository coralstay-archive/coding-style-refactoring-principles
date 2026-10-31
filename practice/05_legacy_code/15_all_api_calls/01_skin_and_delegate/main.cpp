// ==============================================================================
// @file: main.cpp
// @path: tracks/05_legacy_code/15_all_api_calls/01_skin_and_delegate/main.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <iostream>
class BusinessCore {
public:
    int calculate(int raw) { return raw + 42; }
};
int main() {
    BusinessCore core;
    std::cout << "[Legacy 15.1] 프레임워크와 분리된 비즈니스 코어: " << core.calculate(8) << "\n";
    return 0;
}
