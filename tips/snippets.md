# 🧩 coding-style-refactoring-principles 코드 스니펫 레지스트리

- 전체: 8개 (`VERIFIED` 0 · `PENDING_REVIEW` 8 · `OUTDATED` 0)

## [PENDING_REVIEW] `BankAccount` — 01_make_code_hard_to_misuse

- 파일 위치: `practice/10_refactoring_katas/01_code_quality/01_make_code_hard_to_misuse/main.cpp:1`
- 코드 SHA-256: `79cd6e2bb00043f333b0b58da455d60d8f1459ebf12a3e3be17a0fad095f777d`
- 검증 정보: `미검증` (-)

```cpp
// ==============================================================================
// @file: good_code.cpp
// @path: practices/01_code_quality/01_make_code_hard_to_misuse/good_code.cpp
// @book: 《소프트웨어 공학 4대 도메인 실전 카타 뱅크》(4-File Formula)
// ==============================================================================

// [리팩터링 완성 모범 코드]

#include <string>
#include <stdexcept>
#include <utility>

// [Good Code] 읽기 전용 특성 보장 및 생성자 계약 검증
class BankAccount {
private:
    const std::string m_accountNumber;
    const double m_balance;

public:
    BankAccount(std::string accountNumber, double initialBalance)
        : m_accountNumber(std::move(accountNumber)), m_balance(initialBalance) {
        if (m_accountNumber.empty()) {
            throw std::invalid_argument("계좌 번호는 비어 있을 수 없습니다.");
        }
        if (m_balance < 0.0) {
            throw std::invalid_argument("초기 잔액은 음수일 수 없습니다.");
        }
    }

    [[nodiscard]] const std::string& accountNumber() const noexcept { return m_accountNumber; }
    [[nodiscard]] double balance() const noexcept { return m_balance; }

    // 새로운 상태가 필요하면 새 객체를 반환하는 읽기 전용 패턴
    [[nodiscard]] BankAccount deposit(double amount) const {
        if (amount <= 0.0) {
            throw std::invalid_argument("입금액은 0보다 커야 합니다.");
        }
        return BankAccount(m_accountNumber, m_balance + amount);
    }
};

int main() {
    return 0;
}
```

## [PENDING_REVIEW] `OrderItem` — 02_single_level_of_abstraction

- 파일 위치: `practice/10_refactoring_katas/01_code_quality/02_single_level_of_abstraction/main.cpp:1`
- 코드 SHA-256: `802978c34502e5972fb0f0b32de025e50b0e5f39512c22c9b96858cf369a7c84`
- 검증 정보: `미검증` (-)

```cpp
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
```

## [PENDING_REVIEW] `class` — 01_resistance_to_refactoring_classical_testing

- 파일 위치: `practice/10_refactoring_katas/02_unit_testing/01_resistance_to_refactoring_classical_testing/main.cpp:1`
- 코드 SHA-256: `5b79d2bf7432d20216e03fd7d3387f26cee44fee0a8f6e1c098d4d465492a05b`
- 검증 정보: `미검증` (-)

```cpp
// ==============================================================================
// @file: good_code.cpp
// @path: practices/02_unit_testing/01_resistance_to_refactoring_classical_testing/good_code.cpp
// @book: 《소프트웨어 공학 4대 도메인 실전 카타 뱅크》(4-File Formula)
// ==============================================================================

// [리팩터링 완성 모범 코드]

#include <string>
#include <vector>

enum class CustomerTier { Regular, VIP };

struct CartItem {
    std::string name;
    double price;
    int quantity;
};

// [Good Code] 관찰 가능한 상태와 결과만 제공하는 깔끔한 도메인 모델
class ShoppingCart {
private:
    std::vector<CartItem> m_items;
    CustomerTier m_tier;

public:
    explicit ShoppingCart(CustomerTier tier) : m_tier(tier) {}

    void addItem(std::string name, double price, int quantity) {
        m_items.push_back({std::move(name), price, quantity});
    }

    // 내부 구현(루프 방식, 임시 변수 등)이 어떻게 바뀌든 관찰 가능한 총액만 검증 대상
    [[nodiscard]] double calculateTotalPrice() const noexcept {
        double subtotal = 0.0;
        for (const auto& item : m_items) {
            subtotal += item.price * item.quantity;
        }

        if (m_tier == CustomerTier::VIP) {
            return subtotal * 0.85; // VIP 15% 할인
        }
        return subtotal;
    }
};

int main() {
    return 0;
}
```

## [PENDING_REVIEW] `StatisticalEngine` — 02_boundary_testing_correct_checklist

- 파일 위치: `practice/10_refactoring_katas/02_unit_testing/02_boundary_testing_correct_checklist/main.cpp:1`
- 코드 SHA-256: `ad771719a61d85937d57865d1d01268d3f342655a2fa71479beba46b5fc616dc`
- 검증 정보: `미검증` (-)

```cpp
// ==============================================================================
// @file: good_code.cpp
// @path: practices/02_unit_testing/02_boundary_testing_correct_checklist/good_code.cpp
// @book: 《소프트웨어 공학 4대 도메인 실전 카타 뱅크》(4-File Formula)
// ==============================================================================

// [리팩터링 완성 모범 코드]

#include <vector>
#include <stdexcept>
#include <numeric>

// [Good Code] 0-1-N 경계 조건을 안전하게 방어하고 계약을 보장
class StatisticalEngine {
public:
    [[nodiscard]] double calculateAverage(const std::vector<double>& numbers) const {
        if (numbers.empty()) {
            throw std::invalid_argument("평균을 계산할 데이터가 존재하지 않습니다 (빈 컬렉션).");
        }
        const double sum = std::accumulate(numbers.begin(), numbers.end(), 0.0);
        return sum / static_cast<double>(numbers.size());
    }
};

int main() {
    return 0;
}
```

## [PENDING_REVIEW] `getAdjustedCapital` — 01_replace_nested_conditional_with_guard_clauses

- 파일 위치: `practice/10_refactoring_katas/03_refactoring_smells/01_replace_nested_conditional_with_guard_clauses/main.cpp:1`
- 코드 SHA-256: `88d237cf978bef4f624e8088652eb290f9ea1db08f751f487cf432c702a634c6`
- 검증 정보: `미검증` (-)

```cpp
// ==============================================================================
// @file: good_code.cpp
// @path: practices/03_refactoring_smells/01_replace_nested_conditional_with_guard_clauses/good_code.cpp
// @book: 《소프트웨어 공학 4대 도메인 실전 카타 뱅크》(4-File Formula)
// ==============================================================================

// [리팩터링 완성 모범 코드]

// [Good Code] 보호 구문(Guard Clauses)으로 조기 반환하여 평탄화
double getAdjustedCapital(double capital, double rate, double duration, bool isRetired, bool hasGoodCredit) {
    // 1. 비정상적이거나 자격 미달인 조건을 조기에 걸러냄 (보호 구문)
    if (capital <= 0.0 || rate <= 0.0 || duration <= 0.0 || isRetired) {
        return 0.0;
    }

    // 2. 주 실행 경로(Happy Path)는 들여쓰기 없이 명확하게 전개
    const double baseCapital = (capital / duration) * rate;
    return hasGoodCredit ? baseCapital * 1.2 : baseCapital;
}

int main() {
    return 0;
}
```

## [PENDING_REVIEW] `Employee` — 02_replace_conditional_with_polymorphism

- 파일 위치: `practice/10_refactoring_katas/03_refactoring_smells/02_replace_conditional_with_polymorphism/main.cpp:1`
- 코드 SHA-256: `67986c2aa6d07bc028109a7c81e82bf0114711e372f9f3980ec392b82fe55132`
- 검증 정보: `미검증` (-)

```cpp
// ==============================================================================
// @file: good_code.cpp
// @path: practices/03_refactoring_smells/02_replace_conditional_with_polymorphism/good_code.cpp
// @book: 《소프트웨어 공학 4대 도메인 실전 카타 뱅크》(4-File Formula)
// ==============================================================================

// [리팩터링 완성 모범 코드]

#include <memory>
#include <string>

// [Good Code] 다형적 클래스 계층 구조를 통한 분기 제거
class Employee {
protected:
    double m_monthlySalary;

public:
    explicit Employee(double monthlySalary) : m_monthlySalary(monthlySalary) {}
    virtual ~Employee() = default;

    [[nodiscard]] virtual double calculatePay() const noexcept = 0;
};

class Engineer : public Employee {
public:
    using Employee::Employee;
    [[nodiscard]] double calculatePay() const noexcept override {
        return m_monthlySalary;
    }
};

class Manager : public Employee {
private:
    double m_bonus;
public:
    Manager(double salary, double bonus) : Employee(salary), m_bonus(bonus) {}
    [[nodiscard]] double calculatePay() const noexcept override {
        return m_monthlySalary + m_bonus;
    }
};

class Salesman : public Employee {
private:
    double m_commission;
public:
    Salesman(double salary, double commission) : Employee(salary), m_commission(commission) {}
    [[nodiscard]] double calculatePay() const noexcept override {
        return m_monthlySalary + m_commission;
    }
};

int main() {
    return 0;
}
```

## [PENDING_REVIEW] `TemperatureMonitor` — 01_break_dependency_with_seam

- 파일 위치: `practice/10_refactoring_katas/04_legacy_and_patterns/01_break_dependency_with_seam/main.cpp:1`
- 코드 SHA-256: `1f71dfa9b9ca5390476ed07a2f2c9dcd75396fcb1f579a7601288fc0e852802a`
- 검증 정보: `미검증` (-)

```cpp
// ==============================================================================
// @file: good_code.cpp
// @path: practices/04_legacy_and_patterns/01_break_dependency_with_seam/good_code.cpp
// @book: 《소프트웨어 공학 4대 도메인 실전 카타 뱅크》(4-File Formula)
// ==============================================================================

// [리팩터링 완성 모범 코드]

#include <string>
#include <stdexcept>

// [Good Code] 접합부(Seam)를 제공하여 테스트 가능한 구조로 변경
class TemperatureMonitor {
protected:
    // 객체 지향 접합부(Object Seam): 가상 메서드로 감싸서 테스트에서 재정의 가능하게 개방
    virtual double getTemperature() const {
        // 기본 구현: 실제 하드웨어 센서 호출
        // throw std::runtime_error("하드웨어 장치에 연결할 수 없습니다!");
        return 25.0; // 시뮬레이션 기본값
    }

public:
    virtual ~TemperatureMonitor() = default;

    [[nodiscard]] std::string checkStatus() const {
        const double temp = getTemperature();
        if (temp > 100.0) {
            return "DANGER";
        }
        return "NORMAL";
    }
};

int main() {
    return 0;
}
```

## [PENDING_REVIEW] `TransactionBatchProcessor` — 02_sprout_method_safe_addition

- 파일 위치: `practice/10_refactoring_katas/04_legacy_and_patterns/02_sprout_method_safe_addition/main.cpp:1`
- 코드 SHA-256: `1a273ca20178ed5f6e9f5698afab5b155d53c77e98ccc89f2cf4c08deaff6da0`
- 검증 정보: `미검증` (-)

```cpp
// ==============================================================================
// @file: good_code.cpp
// @path: practices/04_legacy_and_patterns/02_sprout_method_safe_addition/good_code.cpp
// @book: 《소프트웨어 공학 4대 도메인 실전 카타 뱅크》(4-File Formula)
// ==============================================================================

// [리팩터링 완성 모범 코드]

#include <vector>
#include <string>
#include <unordered_set>

// [Good Code] 신규 요구사항(고유 항목 필터링)을 독립된 발아 메서드(Sprout Method)로 추출
class TransactionBatchProcessor {
public:
    // 신규 발아 메서드: 독립적으로 격리되어 있어 단위 테스트 작성이 매우 쉬움
    static std::vector<std::string> filterUniqueEntries(const std::vector<std::string>& input) {
        std::vector<std::string> uniqueList;
        std::unordered_set<std::string> seen;

        for (const auto& item : input) {
            if (seen.insert(item).second) {
                uniqueList.push_back(item);
            }
        }
        return uniqueList;
    }

    void executeMassiveBatch(std::vector<std::string>& entries) {
        // 기존 레거시 코드에서는 단 1줄로 검증된 발아 메서드를 호출
        const auto filtered = filterUniqueEntries(entries);

        // ... (기존 레거시 로직 수행) ...
    }
};

int main() {
    return 0;
}
```
