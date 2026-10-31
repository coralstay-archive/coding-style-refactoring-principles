// ==============================================================================
// @file: Main.java
// @path: tracks/08_pragmatic_unit_testing/06_right_bicep/04_cross_check/Main.java
// @book: 《자바와 JUnit을 활용한 실용주의 단위 테스트》(Jeff Langr 저, 길벗)
// ==============================================================================

import java.util.Arrays;

public class Main {
    public static int[] bubbleSort(int[] arr) {
        int[] copy = Arrays.copyOf(arr, arr.length);
        for (int i = 0; i < copy.length - 1; i++) {
            for (int j = 0; j < copy.length - i - 1; j++) {
                if (copy[j] > copy[j + 1]) {
                    int tmp = copy[j];
                    copy[j] = copy[j + 1];
                    copy[j + 1] = tmp;
                }
            }
        }
        return copy;
    }
    public static void main(String[] args) {
        int[] sorted = bubbleSort(new int[]{5, 2, 8, 1});
        System.out.println("[Langr 6.4] Sorted: " + Arrays.toString(sorted));
    }
}
