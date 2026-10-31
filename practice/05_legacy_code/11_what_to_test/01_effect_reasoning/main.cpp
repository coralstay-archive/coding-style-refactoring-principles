// ==============================================================================
// @file: main.cpp
// @path: tracks/05_legacy_code/11_what_to_test/01_effect_reasoning/main.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <iostream>
int propagateEffect(int val) { return val + 10; }
int main() {
    std::cout << "[Legacy 11.1] 전파된 영향 값: " << propagateEffect(5) << "\n";
    return 0;
}
