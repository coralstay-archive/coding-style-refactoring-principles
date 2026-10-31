// ==============================================================================
// @file: main.cpp
// @path: tracks/05_legacy_code/19_code_not_object_oriented/01_core_example/main.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <iostream>
typedef int (*ActionFunc)(int);

int defaultAction(int x) { return x * 2; }

int main() {
    ActionFunc currentAction = defaultAction; // 함수 포인터 접합부
    std::cout << "[Legacy Code Ch 19] C 접합부 실행: " << currentAction(10) << "\n";
    return 0;
}
