// ==============================================================================
// @file: main.cpp
// @path: tracks/05_legacy_code/25_dependency_breaking/17_primitivize_parameter/main.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <iostream>
#include <string>

class RequestParser {
public:
    // 거대한 HttpRequest 객체 대신 원시 string 헤더만을 수신
    static std::string extractAuthToken(const std::string& authHeader) {
        if (authHeader.rfind("Bearer ", 0) == 0) {
            return authHeader.substr(7);
        }
        return "";
    }
};

int main() {
    std::cout << "[Legacy 25.16] Token: " << RequestParser::extractAuthToken("Bearer my-secret-token") << "\n";
    return 0;
}
