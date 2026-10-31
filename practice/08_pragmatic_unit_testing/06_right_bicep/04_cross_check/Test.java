// ==============================================================================
// @file: Test.java
// @path: tracks/08_pragmatic_unit_testing/06_right_bicep/04_cross_check/Test.java
// @book: 《자바와 JUnit을 활용한 실용주의 단위 테스트》(Jeff Langr 저, 길벗)
// ==============================================================================

import java.util.Arrays;

public class Test {
    public static void main(String[] args) {
        int[] raw = {42, 17, 88, 3, 29, 0, -5};
        int[] mySorted = Main.bubbleSort(raw);

        // 교차 검사(Cross-Check): Java 표준 Arrays.sort()와 100% 동일한지 비교
        int[] stdSorted = Arrays.copyOf(raw, raw.length);
        Arrays.sort(stdSorted);

        if (!Arrays.equals(mySorted, stdSorted)) {
            throw new AssertionError("Cross-check mismatch with standard sort!");
        }
        System.out.println("PASS: 6.4 Cross-Check");
    }
}
