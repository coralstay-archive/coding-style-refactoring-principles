// ==============================================================================
// @file: bad_code.cpp
// @path: practices/03_refactoring_smells/01_replace_nested_conditional_with_guard_clauses/bad_code.cpp
// @book: 《소프트웨어 공학 4대 도메인 실전 카타 뱅크》(4-File Formula)
// ==============================================================================

// [실습 시작용 베이스 코드]
// README.md의 문제점을 분석하고 직접 good_code.cpp 형태로 리팩터링해보세요.

// [Bad Code] 화살표 안티패턴: 깊은 중첩 조건문
double getAdjustedCapital(double capital, double rate, double duration, bool isRetired, bool hasGoodCredit) {
    double result = 0.0;
    if (capital > 0.0) {
        if (rate > 0.0 && duration > 0.0) {
            if (!isRetired) {
                if (hasGoodCredit) {
                    result = (capital / duration) * rate * 1.2;
                } else {
                    result = (capital / duration) * rate;
                }
            }
        }
    }
    return result;
}
