// ==============================================================================
// @file: main.cpp
// @path: tracks/01_code_complete/11_power_of_variable_names/01_specific_naming/main.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <iostream>
#include <string>

bool isOrderEligibleForFreeShipping(double totalAmount, bool hasVipMembership) {
    const bool qualifiesByPrice = (totalAmount >= 50.0);
    const bool qualifiesByStatus = hasVipMembership;
    return qualifiesByPrice || qualifiesByStatus;
}

int main() {
    std::cout << "[CC2 11.1] Free shipping: " << isOrderEligibleForFreeShipping(30.0, true) << std::endl;
    return 0;
}
