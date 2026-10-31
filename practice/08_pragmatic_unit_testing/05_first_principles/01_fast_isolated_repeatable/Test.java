// ==============================================================================
// @file: Test.java
// @path: tracks/08_pragmatic_unit_testing/05_first_principles/01_fast_isolated_repeatable/Test.java
// @book: 《자바와 JUnit을 활용한 실용주의 단위 테스트》(Jeff Langr 저, 길벗)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        if (!Main.FirstPolicy.isCompliant(5, true)) throw new AssertionError();
        System.out.println("PASS: 5.1 Test");
    }
}
