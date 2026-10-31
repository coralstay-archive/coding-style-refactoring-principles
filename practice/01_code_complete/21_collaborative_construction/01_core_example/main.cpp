// ==============================================================================
// @file: main.cpp
// @path: tracks/01_code_complete/21_collaborative_construction/01_core_example/main.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <iostream>

// 협력 구현 점검 체크리스트
struct ReviewChecklist {
    bool passedNamingConvention;
    bool hasUnitTests;
    bool handledErrorCases;
};

int main() {
    ReviewChecklist r{true, true, true};
    std::cout << "코드 리뷰 통과 여부: " << (r.hasUnitTests ? "PASS" : "FAIL") << "\n";
    return 0;
}
