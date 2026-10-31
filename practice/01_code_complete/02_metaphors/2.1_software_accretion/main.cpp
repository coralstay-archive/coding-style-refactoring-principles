// ==============================================================================
// @file: main.cpp
// @path: tracks/01_code_complete/02_metaphors/2.1_software_accretion/main.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <iostream>
class AccretionModel {
public:
    static int growSystem(int initialFeatures, int incrementalGrowth) { return initialFeatures + incrementalGrowth; }
};
int main() { std::cout << "[CC 2.1] 점진적 기능: " << AccretionModel::growSystem(10, 5) << "\n"; return 0; }
