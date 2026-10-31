// ==============================================================================
// @file: main.cpp
// @path: tracks/05_legacy_code/06_sprout_and_wrap/02_wrap_method/main.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <iostream>
class LegacyService {
private:
    void originalAction() { std::cout << "Original Action\n"; }
public:
    // 감싸기 메서드
    void actionWithLogging() {
        std::cout << "[LOG START]\n";
        originalAction();
        std::cout << "[LOG END]\n";
    }
};
int main() { LegacyService s; s.actionWithLogging(); return 0; }
