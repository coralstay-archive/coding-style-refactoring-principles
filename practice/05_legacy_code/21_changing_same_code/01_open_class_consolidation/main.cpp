// ==============================================================================
// @file: main.cpp
// @path: tracks/05_legacy_code/21_changing_same_code/01_open_class_consolidation/main.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <iostream>
class SharedFormatter {
public:
    static std::string formatCurrency(int cents) { return "$" + std::to_string(cents / 100); }
};
int main() {
    std::cout << "[Legacy 21.1] 중복 통합된 포맷터: " << SharedFormatter::formatCurrency(2500) << "\n";
    return 0;
}
