// ==============================================================================
// @file: main.cpp
// @path: tracks/05_legacy_code/17_no_structure/01_architecture_storytelling/main.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <iostream>
struct ArchitectureStory {
    static const char* summarize() { return "Input -> Validation -> Processing -> Storage"; }
};
int main() {
    std::cout << "[Legacy 17.1] 아키텍처 핵심 스토리: " << ArchitectureStory::summarize() << "\n";
    return 0;
}
