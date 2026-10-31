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
