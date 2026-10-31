// ==============================================================================
// @file: main.cpp
// @path: tracks/01_code_complete/06_working_classes/6.2_class_interfaces/main.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <iostream>
class ReadOnlyCounter {
private:
    int m_val = 0;
public:
    void increment() noexcept { m_val++; }
    int value() const noexcept { return m_val; }
};
int main() { ReadOnlyCounter c; c.increment(); std::cout << "[CC 6.2] 불변 인터페이스 값: " << c.value() << "\n"; return 0; }
