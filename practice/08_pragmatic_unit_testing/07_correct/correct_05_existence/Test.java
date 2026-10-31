// ==============================================================================
// @file: Test.java
// @path: tracks/08_pragmatic_unit_testing/07_correct/correct_05_existence/Test.java
// @book: 《자바와 JUnit을 활용한 실용주의 단위 테스트》(Jeff Langr 저, 길벗)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        if (Main.safeLength(null) != 0) throw new AssertionError();
        if (Main.safeLength("") != 0) throw new AssertionError();
        if (Main.safeLength("abc") != 3) throw new AssertionError();
        System.out.println("PASS: Existence Test");
    }
}
