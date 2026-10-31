// ==============================================================================
// @file: Test.java
// @path: tracks/08_pragmatic_unit_testing/07_correct/correct_02_ordering/Test.java
// @book: 《자바와 JUnit을 활용한 실용주의 단위 테스트》(Jeff Langr 저, 길벗)
// ==============================================================================

import java.util.Arrays;
public class Test {
    public static void main(String[] args) {
        if (!Main.isSortedAsc(Arrays.asList(1, 5, 10))) throw new AssertionError();
        if (Main.isSortedAsc(Arrays.asList(5, 1))) throw new AssertionError();
        System.out.println("PASS: Ordering Test");
    }
}
