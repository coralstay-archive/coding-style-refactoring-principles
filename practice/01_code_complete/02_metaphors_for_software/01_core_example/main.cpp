// ==============================================================================
// @file: main.cpp
// @path: tracks/01_code_complete/02_metaphors_for_software/01_core_example/main.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <iostream>
#include <string>

// [Code Complete Ch 2] 점진적 성장을 표현하는 농경 은유 모델
class SoftwareMetaphor {
public:
    static std::string describeAccretion() {
        return "소프트웨어는 건축물처럼 한 번에 굳히기보다 식물처럼 점진적으로 자라난다(Accretion).";
    }
};

int main() {
    std::cout << SoftwareMetaphor::describeAccretion() << "\n";
    return 0;
}
