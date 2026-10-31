// ==============================================================================
// @file: test.cpp
// @path: tracks/05_legacy_code/03_sensing_and_separation/01_sensing_effect/test.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <cassert>
int main() { FakeDisplay fd; fd.show("OK"); assert(fd.lastShown != nullptr); return 0; }
