// ==============================================================================
// @file: Test.java
// @path: tracks/08_pragmatic_unit_testing/02_junit_basics/01_core_example/Test.java
// @book: 《자바와 JUnit을 활용한 실용주의 단위 테스트》(Jeff Langr 저, 길벗)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        if (!Main.isPositive(5)) throw new AssertionError();
        if (Main.isPositive(-1)) throw new AssertionError();
        System.out.println("PASS: Pragmatic Ch 02");
    }
}
