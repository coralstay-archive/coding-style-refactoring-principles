// ==============================================================================
// @file: main.cpp
// @path: tracks/05_legacy_code/07_time_to_change/01_reduce_lag_time/main.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <iostream>
bool isLagTimeAcceptable(int feedbackSeconds) { return feedbackSeconds <= 10; }
int main() {
    std::cout << "[Legacy 7.1] 피드백 3초 합격 여부: " << isLagTimeAcceptable(3) << "\n";
    return 0;
}
