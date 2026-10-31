// ==============================================================================
// @file: main.cpp
// @path: tracks/05_legacy_code/24_feel_like_giving_up/01_continuous_improvement_mindset/main.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <iostream>
int getProgressStep(int currentStep) { return currentStep + 1; }
int main() {
    std::cout << "[Legacy 24.1] 점진적 전진 스텝: " << getProgressStep(10) << "\n";
    return 0;
}
