// ==============================================================================
// @file: test.cpp
// @path: tracks/01_code_complete/15_using_conditionals/01_guard_clauses/test.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <cassert>
#include <iostream>
#include <string>

std::string processRegistration(int age, bool hasConsent, bool isBanned);

int main() {
    assert(processRegistration(25, false, true) == "BANNED");
    assert(processRegistration(10, false, false) == "REQUIRES_CONSENT");
    assert(processRegistration(10, true, false) == "APPROVED");
    assert(processRegistration(20, false, false) == "APPROVED");
    std::cout << "PASS: 15.1 Guard Clauses" << std::endl;
    return 0;
}
