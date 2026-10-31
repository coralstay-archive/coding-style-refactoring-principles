// ==============================================================================
// @file: main.cpp
// @path: tracks/01_code_complete/13_unusual_data_types/01_core_example/main.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <iostream>
#include <memory>

struct SensorPacket {
    int id;
    double reading;
};

int main() {
    auto packet = std::make_unique<SensorPacket>(SensorPacket{1, 98.6});
    std::cout << "센서 " << packet->id << " 값: " << packet->reading << "\n";
    return 0;
}
