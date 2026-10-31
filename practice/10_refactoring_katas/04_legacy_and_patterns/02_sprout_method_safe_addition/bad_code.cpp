// ==============================================================================
// @file: bad_code.cpp
// @path: practices/04_legacy_and_patterns/02_sprout_method_safe_addition/bad_code.cpp
// @book: 《소프트웨어 공학 4대 도메인 실전 카타 뱅크》(4-File Formula)
// ==============================================================================

// [실습 시작용 베이스 코드]
// README.md의 문제점을 분석하고 직접 good_code.cpp 형태로 리팩터링해보세요.

#include <vector>
#include <string>

// [Bad Code] 500줄짜리 복잡한 레거시 함수 중간에 인라인으로 중복 제거 코드를 끼워 넣으려는 시도
class TransactionBatchProcessor {
public:
    void executeMassiveBatch(std::vector<std::string>& entries) {
        // ... (수백 줄의 복잡하고 위험한 레거시 처리 로직) ...
        
        // 여기에 검증되지 않은 중복 제거 루프를 직접 덕지덕지 작성하면 사이드 이펙트 발생 위험 극대화!
        // ...
    }
};
