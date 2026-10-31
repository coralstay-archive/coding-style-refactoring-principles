// ==============================================================================
// @file: main.cpp
// @path: tracks/01_code_complete/13_unusual_data_types/13.1_smart_pointers_resource_safety/main.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <iostream>
#include <memory>
struct Packet { int id; };
int main() {
    auto p = std::make_unique<Packet>(Packet{101});
    std::cout << "[CC 13.1] 스마트 포인터 패킷 ID: " << p->id << "\n";
    return 0;
}
