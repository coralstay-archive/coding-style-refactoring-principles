// ==============================================================================
// @file: main.cpp
// @path: tracks/05_legacy_code/09_cant_get_class_in_harness/01_core_example/main.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <iostream>
class Engine {};
class Car {
private:
    Engine* m_engine;
public:
    // 생성자 매개변수화(Parameterize Constructor)로 의존성 주입 가능하게 변경
    explicit Car(Engine* engine) : m_engine(engine) {}
};

int main() {
    Engine e;
    Car c(&e);
    std::cout << "[Legacy Code Ch 9] 생성자 매개변수화 성공\n";
    return 0;
}
