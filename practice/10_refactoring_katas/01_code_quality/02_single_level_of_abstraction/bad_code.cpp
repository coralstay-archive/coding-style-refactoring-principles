// ==============================================================================
// @file: bad_code.cpp
// @path: practices/01_code_quality/02_single_level_of_abstraction/bad_code.cpp
// @book: 《소프트웨어 공학 4대 도메인 실전 카타 뱅크》(4-File Formula)
// ==============================================================================

// [실습 시작용 베이스 코드]
// README.md의 문제점을 분석하고 직접 good_code.cpp 형태로 리팩터링해보세요.

#include <string>
#include <vector>
#include <sstream>

// [Bad Code] 고수준 비즈니스 로직과 저수준 파싱이 뒤섞임
class OrderProcessor {
public:
    double processRawOrder(const std::string& rawCsvLine) {
        // 저수준 CSV 파싱 세부사항이 그대로 노출됨
        std::stringstream ss(rawCsvLine);
        std::string item;
        std::vector<std::string> tokens;
        while (std::getline(ss, item, ',')) {
            tokens.push_back(item);
        }
        if (tokens.size() < 3) return -1.0; // 침묵 매직 오류

        double price = std::stod(tokens[1]);
        int quantity = std::stoi(tokens[2]);
        
        // 고수준 비즈니스 할인 계산
        double total = price * quantity;
        if (total > 100.0) total *= 0.9;
        return total;
    }
};
