// ==============================================================================
// @file: main.cpp
// @path: tracks/05_legacy_code/25_dependency_breaking/10_extract_and_override_factory_method/main.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <iostream>
#include <memory>
#include <string>

class Logger {
public:
    virtual ~Logger() = default;
    virtual std::string log(const std::string& msg) { return "FileLog: " + msg; }
};

class OrderProcessor {
protected:
    virtual std::unique_ptr<Logger> createLogger() {
        return std::make_unique<Logger>();
    }
public:
    virtual ~OrderProcessor() = default;
    std::string processOrder(int orderId) {
        auto logger = createLogger();
        return logger->log("Order#" + std::to_string(orderId));
    }
};

int main() {
    OrderProcessor proc;
    std::cout << "[Legacy 25.7] " << proc.processOrder(42) << "\n";
    return 0;
}
