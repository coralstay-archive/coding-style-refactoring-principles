// @snippet 02_sprout_method_safe_addition
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
