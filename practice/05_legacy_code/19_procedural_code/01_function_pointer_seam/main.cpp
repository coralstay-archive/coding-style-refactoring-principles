// ==============================================================================
// @file: main.cpp
// @path: tracks/05_legacy_code/19_procedural_code/01_function_pointer_seam/main.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <iostream>
typedef int (*ReadSensorFunc)();
int defaultSensor() { return 25; }
int testSensor() { return 99; }
int checkTemperature(ReadSensorFunc readFunc) { return readFunc(); }
int main() { std::cout << "[Legacy Code 19.1] 함수 포인터 접합 온도: " << checkTemperature(defaultSensor) << "\n"; return 0; }
