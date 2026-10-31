// ==============================================================================
// @file: main.cpp
// @path: tracks/01_code_complete/15_using_conditionals/15.1_nominal_flow_first/main.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <iostream>
#include <string>
std::string handleOperation(bool isSuccess) {
    if (isSuccess) {
        return "정상 처리 완료";
    } else {
        return "오류 복구 처리";
    }
}
int main() { std::cout << "[CC 15.1] " << handleOperation(true) << "\n"; return 0; }
