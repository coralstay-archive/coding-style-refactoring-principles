// ==============================================================================
// @file: main.cpp
// @path: tracks/05_legacy_code/04_the_seam_model/02_link_seam/main.cpp
// @book: 《레거시 코드 활용 전략》(Michael Feathers 저, 에이콘)
// ==============================================================================

#include <iostream>
extern "C" const char* getHardwareSerial();
const char* defaultSerialImpl() { return "HW-PROD-999"; }
int main() { std::cout << "[Legacy Code 4.2] 링크 접합부 시뮬레이션: " << defaultSerialImpl() << "\n"; return 0; }
