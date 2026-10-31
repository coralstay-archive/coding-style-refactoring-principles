// ==============================================================================
// @file: main.cpp
// @path: tracks/05_legacy_code/25_dependency_breaking_techniques/03_parameterize_constructor/main.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <iostream>
#include <memory>

class IClock {
public:
    virtual ~IClock() = default;
    virtual long long now() const = 0;
};

class SystemClock : public IClock {
public:
    long long now() const override { return 1000000LL; }
};

class TokenValidator {
private:
    std::shared_ptr<IClock> clock;
public:
    explicit TokenValidator(std::shared_ptr<IClock> clk = std::make_shared<SystemClock>())
        : clock(std::move(clk)) {}

    bool isValid(long long tokenExpiry) const {
        return clock->now() < tokenExpiry;
    }
};

int main() {
    TokenValidator tv;
    std::cout << "[Feathers 25.3] Valid: " << tv.isValid(2000000LL) << std::endl;
    return 0;
}
