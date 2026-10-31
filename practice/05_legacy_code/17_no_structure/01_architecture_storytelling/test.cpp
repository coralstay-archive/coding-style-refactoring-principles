// ==============================================================================
// @file: test.cpp
// @path: tracks/05_legacy_code/17_no_structure/01_architecture_storytelling/test.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <cassert>
#include <cstring>
int main() { assert(std::strstr(ArchitectureStory::summarize(), "Processing") != nullptr); return 0; }
