// ==============================================================================
// @file: main.cpp
// @path: tracks/05_legacy_code/25_dependency_breaking_techniques/04_parameterize_method/main.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <iostream>

class TimeService {
public:
    static long long getRealTime() { return 1000000LL; }
};

class LicenseCheck {
public:
    // 기본값으로 기존 호환성을 유지하면서 테스트에서는 주입 가능
    bool isExpired(long long expiry, long long currentTime = TimeService::getRealTime()) {
        return currentTime > expiry;
    }
};

int main() {
    LicenseCheck lc;
    std::cout << "[Feathers 25.4] Expired: " << lc.isExpired(2000000LL) << std::endl;
    return 0;
}
