// ==============================================================================
// @file: main.cpp
// @path: tracks/01_code_complete/15_using_conditionals/01_core_example/main.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <iostream>
#include <string>

std::string getStatusMessage(int statusCode) {
    if (statusCode == 200) {
        return "OK";
    }
    return "ERROR";
}

int main() {
    std::cout << "응답: " << getStatusMessage(200) << "\n";
    return 0;
}
