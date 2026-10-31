// ==============================================================================
// @file: main.cpp
// @path: tracks/05_legacy_code/25_dependency_breaking/16_parameterize_method/main.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <iostream>
#include <string>

class Clock {
public:
    virtual ~Clock() = default;
    virtual int getHour() { return 14; }
};

class SecurityDoor {
public:
    bool isOpenAllowed(Clock* clock) {
        int hour = clock->getHour();
        return (hour >= 9 && hour <= 18);
    }
};

int main() {
    Clock realClock;
    SecurityDoor door;
    std::cout << "[Legacy 25.15] Allowed: " << door.isOpenAllowed(&realClock) << "\n";
    return 0;
}
