// ==============================================================================
// @file: main.cpp
// @path: tracks/05_legacy_code/22_monster_method/01_extract_monster_method/main.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <iostream>
class MonsterMethodRefactored {
    int step1() { return 10; }
    int step2() { return 20; }
public:
    int executePipeline() { return step1() + step2(); }
};
int main() {
    MonsterMethodRefactored mm;
    std::cout << "[Legacy 22.1] 분해된 파이프라인: " << mm.executePipeline() << "\n";
    return 0;
}
