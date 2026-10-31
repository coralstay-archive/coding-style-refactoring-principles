// ==============================================================================
// @file: test.cpp
// @path: tracks/01_code_complete/11_power_of_variable_names/01_specific_naming/test.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <cassert>
#include <iostream>

bool isOrderEligibleForFreeShipping(double totalAmount, bool hasVipMembership);

int main() {
    assert(isOrderEligibleForFreeShipping(60.0, false) == true);
    assert(isOrderEligibleForFreeShipping(30.0, true) == true);
    assert(isOrderEligibleForFreeShipping(30.0, false) == false);
    std::cout << "PASS: 11.1 Specific Naming" << std::endl;
    return 0;
}
