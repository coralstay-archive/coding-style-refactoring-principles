// ==============================================================================
// @file: test.cpp
// @path: tracks/05_legacy_code/25_dependency_breaking_techniques/03_parameterize_constructor/test.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <cassert>
#include <iostream>
#include <memory>

class IClock {
public:
    virtual ~IClock() = default;
    virtual long long now() const = 0;
};

class FakeClock : public IClock {
public:
    long long fakeTime;
    explicit FakeClock(long long t) : fakeTime(t) {}
    long long now() const override { return fakeTime; }
};

class TokenValidator {
private:
    std::shared_ptr<IClock> clock;
public:
    explicit TokenValidator(std::shared_ptr<IClock> clk) : clock(std::move(clk)) {}
    bool isValid(long long tokenExpiry) const { return clock->now() < tokenExpiry; }
};

int main() {
    auto fake = std::make_shared<FakeClock>(1000);
    TokenValidator validator(fake);

    assert(validator.isValid(1500) == true);
    fake->fakeTime = 2000;
    assert(validator.isValid(1500) == false);
    std::cout << "PASS: 25.3 Parameterize Constructor" << std::endl;
    return 0;
}
