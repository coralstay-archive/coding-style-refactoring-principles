// ==============================================================================
// @file: Test.java
// @path: tracks/08_pragmatic_unit_testing/08_correct_boundary/correct_03_cardinality/Test.java
// @book: 《자바와 JUnit을 활용한 실용주의 단위 테스트》(Jeff Langr 저, 길벗)
// ==============================================================================

import java.util.Collections;
import java.util.List;

public class Test {
    public static void main(String[] args) {
        // 0개 (Zero)
        assert AverageCalculator.average(Collections.emptyList()) == 0.0;
        // 1개 (One)
        assert AverageCalculator.average(List.of(42)) == 42.0;
        // N개 (Many)
        assert AverageCalculator.average(List.of(10, 20, 30)) == 20.0;

        System.out.println("PASS: 8.3 CORRECT Cardinality");
    }
}
