// @snippet 02_boundary_testing_correct_checklist
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
