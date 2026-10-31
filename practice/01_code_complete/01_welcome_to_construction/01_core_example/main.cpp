// ==============================================================================
// @file: main.cpp
// @path: tracks/01_code_complete/01_welcome_to_construction/01_core_example/main.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <iostream>
#include <string>

// [Code Complete Ch 1] 소프트웨어 구축의 핵심 활동 정의
class ConstructionMetrics {
public:
    static std::string getConstructionScope() {
        return "코딩, 상세 설계, 단위 테스트, 통합, 디버깅";
    }
};

int main() {
    std::cout << "[Code Complete Ch 1] 구축 활동: " << ConstructionMetrics::getConstructionScope() << "\n";
    return 0;
}
