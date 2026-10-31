// ==============================================================================
// @file: Test.java
// @path: tracks/08_pragmatic_unit_testing/07_correct/correct_06_cardinality/Test.java
// @book: 《자바와 JUnit을 활용한 실용주의 단위 테스트》(Jeff Langr 저, 길벗)
// ==============================================================================

import java.util.*;
public class Test {
    public static void main(String[] args) {
        if (!Main.describeCount(Collections.emptyList()).equals("ZERO")) throw new AssertionError();
        if (!Main.describeCount(Collections.singletonList(1)).equals("ONE")) throw new AssertionError();
        if (!Main.describeCount(Arrays.asList(1, 2)).equals("MANY")) throw new AssertionError();
        System.out.println("PASS: Cardinality Test");
    }
}
