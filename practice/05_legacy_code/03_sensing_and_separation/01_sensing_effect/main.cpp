// ==============================================================================
// @file: main.cpp
// @path: tracks/05_legacy_code/03_sensing_and_separation/01_sensing_effect/main.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <iostream>
class DisplaySensing {
public:
    virtual ~DisplaySensing() = default;
    virtual void show(const char* text) = 0;
};
class FakeDisplay : public DisplaySensing {
public:
    const char* lastShown = nullptr;
    void show(const char* text) override { lastShown = text; }
};
int main() { std::cout << "[Legacy Code 3.1] 감지용 가짜 객체 준비 완료\n"; return 0; }
