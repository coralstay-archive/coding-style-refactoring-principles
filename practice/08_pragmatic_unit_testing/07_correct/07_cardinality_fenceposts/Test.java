// ==============================================================================
// @file: Test.java
// @path: tracks/08_pragmatic_unit_testing/07_correct/07_cardinality_fenceposts/Test.java
// @book: 《자바와 JUnit을 활용한 실용주의 단위 테스트》(Jeff Langr 저, 길벗)
// ==============================================================================

import java.util.Arrays;
import java.util.Collections;

public class Test {
    public static void main(String[] args) {
        // 0개 (Zero)
        if (Main.computeAverage(Collections.emptyList()) != 0.0) throw new AssertionError("0 elements failed");

        // 1개 (One)
        if (Main.computeAverage(Collections.singletonList(42)) != 42.0) throw new AssertionError("1 element failed");

        // N개 (Many)
        if (Main.computeAverage(Arrays.asList(10, 20, 30)) != 20.0) throw new AssertionError("N elements failed");

        System.out.println("PASS: 7.6 Cardinality (0-1-N)");
    }
}
