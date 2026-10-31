// ==============================================================================
// @file: bad_code.cpp
// @path: practices/04_legacy_and_patterns/01_break_dependency_with_seam/bad_code.cpp
// @book: 《소프트웨어 공학 4대 도메인 실전 카타 뱅크》(4-File Formula)
// ==============================================================================

// [실습 시작용 베이스 코드]
// README.md의 문제점을 분석하고 직접 good_code.cpp 형태로 리팩터링해보세요.

#include <string>
#include <iostream>

// 실제 운영 환경에서만 동작하고 단위 테스트에서는 실행 불가능한 외부 센서 함수
inline double readHardwareTemperatureSensor() {
    // 실제 장비에 연결되어 있지 않으면 크래시가 발생한다고 가정
    throw std::runtime_error("하드웨어 장치에 연결할 수 없습니다!");
}

// [Bad Code] 하드웨어 의존성이 코드 내부에 하드코딩되어 단위 테스트 불가능
class TemperatureMonitor {
public:
    std::string checkStatus() {
        // 단위 테스트 환경에서는 무조건 예외가 터져서 테스트 불가능
        double temp = readHardwareTemperatureSensor();
        if (temp > 100.0) {
            return "DANGER";
        }
        return "NORMAL";
    }
};
