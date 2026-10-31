// ==============================================================================
// @file: test.cpp
// @path: tracks/05_legacy_code/25_dependency_breaking/17_primitivize_parameter/test.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <cassert>

int main() {
    assert(RequestParser::extractAuthToken("Bearer abc-123") == "abc-123");
    assert(RequestParser::extractAuthToken("Basic xyz") == "");
    assert(RequestParser::extractAuthToken("") == "");
    return 0;
}
