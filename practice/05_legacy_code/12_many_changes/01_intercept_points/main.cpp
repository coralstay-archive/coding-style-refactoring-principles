// ==============================================================================
// @file: main.cpp
// @path: tracks/05_legacy_code/12_many_changes/01_intercept_points/main.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <iostream>
class RequestRouter {
public:
    int route(int reqId) { return reqId * 100; }
};
int main() {
    RequestRouter r;
    std::cout << "[Legacy 12.1] 인터셉트 라우팅: " << r.route(3) << "\n";
    return 0;
}
