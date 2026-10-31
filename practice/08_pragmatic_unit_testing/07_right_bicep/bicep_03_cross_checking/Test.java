// ==============================================================================
// @file: Test.java
// @path: tracks/08_pragmatic_unit_testing/07_right_bicep/bicep_03_cross_checking/Test.java
// @book: 《자바와 JUnit을 활용한 실용주의 단위 테스트》(Jeff Langr 저, 길벗)
// ==============================================================================

import java.util.Arrays;

public class Test {
    public static void main(String[] args) {
        int[] data = {5, 2, 9, 1, 3};
        int[] sorted = FastSorter.sort(data);

        // Cross-checking against standard library expectation
        assert Arrays.equals(sorted, new int[]{1, 2, 3, 5, 9}) : "교차 검사 일치해야 함";
        System.out.println("PASS: 7.3 Cross-Checking");
    }
}
