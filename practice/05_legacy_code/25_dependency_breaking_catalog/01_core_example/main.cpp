// ==============================================================================
// @file: main.cpp
// @path: tracks/05_legacy_code/25_dependency_breaking_catalog/01_core_example/main.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <iostream>

class TimeProvider {
public:
    virtual ~TimeProvider() = default;
    virtual long long getNow() { return 1000; }
};

int main() {
    TimeProvider tp;
    std::cout << "[Legacy Code Ch 25] 인터페이스 추출을 통한 시간 의존성 분리 완료: " << tp.getNow() << "\n";
    return 0;
}
