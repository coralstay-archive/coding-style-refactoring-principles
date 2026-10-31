// ==============================================================================
// @file: main.cpp
// @path: tracks/01_code_complete/06_working_classes/6.1_abstract_data_types/main.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <iostream>
#include <stdexcept>
class BoundedQueue {
private:
    int m_count = 0;
    const int m_max;
public:
    explicit BoundedQueue(int max) : m_max(max) {}
    void push() {
        if (m_count >= m_max) throw std::overflow_error("Queue Full");
        m_count++;
    }
    int size() const noexcept { return m_count; }
};
int main() { BoundedQueue q(5); q.push(); std::cout << "[CC 6.1] ADT 크기: " << q.size() << "\n"; return 0; }
