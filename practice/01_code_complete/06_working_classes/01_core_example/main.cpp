// ==============================================================================
// @file: main.cpp
// @path: tracks/01_code_complete/06_working_classes/01_core_example/main.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <iostream>
#include <string>
#include <stdexcept>

// [Code Complete Ch 6] 추상 데이터 타입으로서의 Point
class ScreenPoint {
private:
    int m_x;
    int m_y;
public:
    ScreenPoint(int x, int y) : m_x(x), m_y(y) {
        if (x < 0 || y < 0) throw std::out_of_range("화면 좌표는 음수일 수 없습니다.");
    }
    int x() const noexcept { return m_x; }
    int y() const noexcept { return m_y; }
};

int main() {
    ScreenPoint pt(1920, 1080);
    std::cout << "좌표: (" << pt.x() << ", " << pt.y() << ")\n";
    return 0;
}
