// ==============================================================================
// @file: Main.java
// @path: tracks/08_pragmatic_unit_testing/07_right_bicep/bicep_03_cross_checking/Main.java
// @book: 《자바와 JUnit을 활용한 실용주의 단위 테스트》(Jeff Langr 저, 길벗)
// ==============================================================================

import java.util.Arrays;

class FastSorter {
    public static int[] sort(int[] input) {
        int[] copy = input.clone();
        Arrays.sort(copy); // 참조 표준 구현체
        return copy;
    }

    public static void main(String[] args) {
        System.out.println("[Langr 7.3] Sorter ready");
    }
}
