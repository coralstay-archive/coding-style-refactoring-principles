// ==============================================================================
// @file: test.cpp
// @path: tracks/05_legacy_code/25_dependency_breaking_techniques/04_parameterize_method/test.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <cassert>
#include <iostream>

class TimeService {
public:
    static long long getRealTime() { return 1000000LL; }
};

class LicenseCheck {
public:
    bool isExpired(long long expiry, long long currentTime = TimeService::getRealTime()) {
        return currentTime > expiry;
    }
};

int main() {
    LicenseCheck lc;
    // 테스트에서 원하는 시간을 직접 주입하여 검증
    assert(lc.isExpired(1000, 500) == false);
    assert(lc.isExpired(1000, 1500) == true);
    std::cout << "PASS: 25.4 Parameterize Method" << std::endl;
    return 0;
}
