// ==============================================================================
// @file: test.cpp
// @path: tracks/05_legacy_code/25_dependency_breaking/16_parameterize_method/test.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <cassert>

class FakeNightClock : public Clock {
public:
    int getHour() override { return 23; }
};

class FakeDayClock : public Clock {
public:
    int getHour() override { return 10; }
};

int main() {
    SecurityDoor door;
    FakeNightClock night;
    FakeDayClock day;
    assert(door.isOpenAllowed(&night) == false);
    assert(door.isOpenAllowed(&day) == true);
    return 0;
}
