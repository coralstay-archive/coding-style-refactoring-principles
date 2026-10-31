// ==============================================================================
// @file: main.cpp
// @path: tracks/01_code_complete/23_debugging/01_core_example/main.cpp
// @book: 《Code Complete 2판》(Steve McConnell 저, 정보문화사)
// ==============================================================================

#include <iostream>

int binarySearch(const int arr[], int size, int target) {
    int low = 0;
    int high = size - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (arr[mid] == target) return mid;
        if (arr[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}

int main() {
    int data[] = {1, 3, 5, 7, 9};
    std::cout << "5의 위치: " << binarySearch(data, 5, 5) << "\n";
    return 0;
}
