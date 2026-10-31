// ==============================================================================
// @file: main.cpp
// @path: tracks/05_legacy_code/13_characterization_tests/01_core_example/main.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <iostream>
#include <string>

// 레거시 블랙박스 함수
std::string legacyCrypt(int code) {
    return "KEY_" + std::to_string(code * 2);
}

int main() {
    // 특성 테스트: 기존의 동작을 그대로 검증식으로 고정
    std::cout << "[Legacy Code Ch 13] 특성 테스트 대상: " << legacyCrypt(5) << "\n";
    return 0;
}
