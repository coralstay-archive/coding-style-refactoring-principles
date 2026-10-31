// ==============================================================================
// @file: main.cpp
// @path: tracks/01_code_complete/03_upstream_prerequisites/01_core_example/main.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <iostream>
#include <stdexcept>

// [Code Complete Ch 3] 아키텍처 선행 조건 검증기
class ArchitectureValidator {
public:
    static bool validatePrerequisites(bool hasClearRequirements, bool hasArchitecturalVision) {
        if (!hasClearRequirements || !hasArchitecturalVision) {
            throw std::runtime_error("선행 요구사항 또는 아키텍처가 확정되지 않았습니다.");
        }
        return true;
    }
};

int main() {
    std::cout << "선행 조건 검증: " << (ArchitectureValidator::validatePrerequisites(true, true) ? "PASS" : "FAIL") << "\n";
    return 0;
}
