// ==============================================================================
// @file: test.cpp
// @path: practices/04_legacy_and_patterns/01_break_dependency_with_seam/test.cpp
// @book: 《소프트웨어 공학 4대 도메인 실전 카타 뱅크》(4-File Formula)
// ==============================================================================

// [GoogleTest 단위 테스트]

#include <gtest/gtest.h>

// 테스트 전용 서브클래스 (Test-Specific Subclass)
// 운영 코드를 전혀 건드리지 않고 센서 반환값만 가로챔 (Seam 활용)
class TestableTemperatureMonitor : public TemperatureMonitor {
public:
    double mockTemperature = 25.0;

protected:
    double getTemperature() const override {
        return mockTemperature;
    }
};

TEST(LegacySeamTest, StatusIsNormalWhenTempBelowThreshold) {
    TestableTemperatureMonitor monitor;
    monitor.mockTemperature = 85.0;
    EXPECT_EQ(monitor.checkStatus(), "NORMAL");
}

TEST(LegacySeamTest, StatusIsDangerWhenTempExceedsThreshold) {
    TestableTemperatureMonitor monitor;
    monitor.mockTemperature = 105.0;
    EXPECT_EQ(monitor.checkStatus(), "DANGER");
}
