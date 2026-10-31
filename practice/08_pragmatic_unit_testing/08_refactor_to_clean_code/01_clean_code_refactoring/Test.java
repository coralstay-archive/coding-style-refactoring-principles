// ==============================================================================
// @file: Test.java
// @path: tracks/08_pragmatic_unit_testing/08_refactor_to_clean_code/01_clean_code_refactoring/Test.java
// @book: 《자바와 JUnit을 활용한 실용주의 단위 테스트》(Jeff Langr 저, 길벗)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        if (!Main.isValidIdentifier("hello")) throw new AssertionError();
        if (Main.isValidIdentifier("123")) throw new AssertionError();
        System.out.println("PASS: 8.1 Test");
    }
}
