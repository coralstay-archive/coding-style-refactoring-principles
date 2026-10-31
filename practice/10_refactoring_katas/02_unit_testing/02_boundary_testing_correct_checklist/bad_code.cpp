// ==============================================================================
// @file: bad_code.cpp
// @path: practices/02_unit_testing/02_boundary_testing_correct_checklist/bad_code.cpp
// @book: 《소프트웨어 공학 4대 도메인 실전 카타 뱅크》(4-File Formula)
// ==============================================================================

// [실습 시작용 베이스 코드]
// README.md의 문제점을 분석하고 직접 good_code.cpp 형태로 리팩터링해보세요.

#include <vector>
#include <numeric>

// [Bad Code] 빈 벡터(0)나 단일 원소(1)에 대한 경계 조건 처리가 부실함
class StatisticalEngine {
public:
    double calculateAverage(const std::vector<double>& numbers) {
        // numbers가 비어있으면 0으로 나누기 (Divide by Zero) 버그 발생!
        double sum = 0.0;
        for (double n : numbers) sum += n;
        return sum / numbers.size(); 
    }
};
