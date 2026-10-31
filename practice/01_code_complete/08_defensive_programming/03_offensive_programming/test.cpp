// ==============================================================================
// @file: test.cpp
// @path: tracks/01_code_complete/08_defensive_programming/03_offensive_programming/test.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <cassert>
#include <stdexcept>

int main() {
    assert(OffensiveFlightController::calculateAltitude(200, 10) == 200);

    // 공격적 프로그래밍 검증: 잘못된 입력 시 즉시 fail-fast 예외 발생
    bool caught = false;
    try {
        OffensiveFlightController::calculateAltitude(-50, 10);
    } catch (const std::invalid_argument&) {
        caught = true;
    }
    assert(caught == true);
    std::cout << "PASS: 8.3 Offensive Programming\n";
    return 0;
}
