// ==============================================================================
// @file: main.cpp
// @path: tracks/01_code_complete/08_defensive_programming/03_offensive_programming/main.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <iostream>
#include <stdexcept>
#include <string>

class OffensiveFlightController {
public:
    static int calculateAltitude(int speed, int angle) {
        // 공격적 검사: 유효 범위를 벗어나면 개발 중에 조용히 넘어가지 않고 즉시 예외 방출
        if (speed < 0 || speed > 1000) {
            throw std::invalid_argument("Offensive: Speed out of bounds!");
        }
        if (angle < -90 || angle > 90) {
            throw std::invalid_argument("Offensive: Angle out of bounds!");
        }
        return speed * angle / 10;
    }
};

int main() {
    std::cout << "[McConnell 8.3] Alt: " << OffensiveFlightController::calculateAltitude(300, 15) << "\n";
    return 0;
}
