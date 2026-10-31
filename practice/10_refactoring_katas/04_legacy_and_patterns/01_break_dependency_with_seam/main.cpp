// @snippet 01_break_dependency_with_seam
// ==============================================================================
// @file: good_code.cpp
// @path: practices/04_legacy_and_patterns/01_break_dependency_with_seam/good_code.cpp
// @book: 《소프트웨어 공학 4대 도메인 실전 카타 뱅크》(4-File Formula)
// ==============================================================================

// [리팩터링 완성 모범 코드]

#include <string>
#include <stdexcept>

// [Good Code] 접합부(Seam)를 제공하여 테스트 가능한 구조로 변경
class TemperatureMonitor {
protected:
    // 객체 지향 접합부(Object Seam): 가상 메서드로 감싸서 테스트에서 재정의 가능하게 개방
    virtual double getTemperature() const {
        // 기본 구현: 실제 하드웨어 센서 호출
        // throw std::runtime_error("하드웨어 장치에 연결할 수 없습니다!");
        return 25.0; // 시뮬레이션 기본값
    }

public:
    virtual ~TemperatureMonitor() = default;

    [[nodiscard]] std::string checkStatus() const {
        const double temp = getTemperature();
        if (temp > 100.0) {
            return "DANGER";
        }
        return "NORMAL";
    }
};

int main() {
    return 0;
}
