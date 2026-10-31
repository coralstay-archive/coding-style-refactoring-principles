// ==============================================================================
// @file: Test.java
// @path: tracks/08_pragmatic_unit_testing/07_correct/03_ordering_properties/Test.java
// @book: 《자바와 JUnit을 활용한 실용주의 단위 테스트》(Jeff Langr 저, 길벗)
// ==============================================================================

import java.util.Arrays;
import java.util.Collections;

public class Test {
    public static void main(String[] args) {
        if (!Main.isMonotonicallyIncreasing(Arrays.asList(1, 2, 3, 5, 8))) throw new AssertionError();
        if (Main.isMonotonicallyIncreasing(Arrays.asList(1, 5, 2, 8))) throw new AssertionError();
        if (!Main.isMonotonicallyIncreasing(Collections.emptyList())) throw new AssertionError();
        System.out.println("PASS: 7.2 CORRECT Ordering");
    }
}
