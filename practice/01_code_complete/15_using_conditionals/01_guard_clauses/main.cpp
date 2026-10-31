// ==============================================================================
// @file: main.cpp
// @path: tracks/01_code_complete/15_using_conditionals/01_guard_clauses/main.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <iostream>
#include <string>

std::string processRegistration(int age, bool hasConsent, bool isBanned) {
    if (isBanned) return "BANNED";
    if (age < 14 && !hasConsent) return "REQUIRES_CONSENT";
    return "APPROVED";
}

int main() {
    std::cout << "[CC2 15.1] " << processRegistration(12, true, false) << std::endl;
    return 0;
}
