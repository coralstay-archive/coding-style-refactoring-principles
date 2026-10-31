// ==============================================================================
// @file: test.cpp
// @path: tracks/05_legacy_code/12_many_changes/01_intercept_points/test.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <cassert>
int main() { RequestRouter r; assert(r.route(2) == 200); return 0; }
