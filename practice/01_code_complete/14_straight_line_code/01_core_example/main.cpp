// ==============================================================================
// @file: main.cpp
// @path: tracks/01_code_complete/14_straight_line_code/01_core_example/main.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <iostream>

void initializeHardware() {}
void configureParameters() {}
void startService() {}

int main() {
    // 순서 의존성이 명확한 단계별 호출
    initializeHardware();
    configureParameters();
    startService();
    std::cout << "직선적 초기화 완료\n";
    return 0;
}
