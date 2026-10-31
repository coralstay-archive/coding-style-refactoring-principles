// ==============================================================================
// @file: test.cpp
// @path: tracks/05_legacy_code/22_monster_method/01_extract_monster_method/test.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <cassert>
int main() { MonsterMethodRefactored mm; assert(mm.executePipeline() == 30); return 0; }
