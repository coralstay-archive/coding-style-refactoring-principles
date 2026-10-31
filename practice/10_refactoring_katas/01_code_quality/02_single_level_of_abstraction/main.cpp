// @snippet 02_single_level_of_abstraction
// ==============================================================================
// @file: good_code.cpp
// @path: practices/01_code_quality/02_single_level_of_abstraction/good_code.cpp
// @book: 《소프트웨어 공학 4대 도메인 실전 카타 뱅크》(4-File Formula)
// ==============================================================================

// [리팩터링 완성 모범 코드]

#include <string>
#include <vector>
#include <sstream>
#include <stdexcept>

struct OrderItem {
    std::string name;
    double price;
    int quantity;
};

// [Good Code] 파싱 계층과 비즈니스 계산 계층 분리
class OrderParser {
public:
    static OrderItem parseCsv(const std::string& line) {
        std::stringstream ss(line);
        std::string name, priceStr, qtyStr;
        if (!std::getline(ss, name, ',') ||
            !std::getline(ss, priceStr, ',') ||
            !std::getline(ss, qtyStr, ',')) {
            throw std::invalid_argument("비정상적인 CSV 주문 포맷입니다.");
        }
        return OrderItem{name, std::stod(priceStr), std::stoi(qtyStr)};
    }
};

class OrderCalculator {
public:
    static constexpr double DISCOUNT_THRESHOLD = 100.0;
    static constexpr double DISCOUNT_RATE = 0.10;

    static double calculateTotal(const OrderItem& item) {
        double subtotal = item.price * item.quantity;
        return (subtotal > DISCOUNT_THRESHOLD) ? subtotal * (1.0 - DISCOUNT_RATE) : subtotal;
    }
};

class OrderProcessor {
public:
    double processRawOrder(const std::string& rawCsvLine) {
        // 단일 추상화 계층 유지: 파싱 ➔ 계산의 고수준 흐름만 제어
        const OrderItem item = OrderParser::parseCsv(rawCsvLine);
        return OrderCalculator::calculateTotal(item);
    }
};

int main() {
    return 0;
}
