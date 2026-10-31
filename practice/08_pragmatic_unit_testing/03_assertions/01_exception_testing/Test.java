// ==============================================================================
// @file: Test.java
// @path: tracks/08_pragmatic_unit_testing/03_assertions/01_exception_testing/Test.java
// @book: 《자바와 JUnit을 활용한 실용주의 단위 테스트》(Jeff Langr 저, 길벗)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        try {
            Main.divide(1, 0);
            throw new AssertionError("예외가 발생해야 합니다.");
        } catch (IllegalArgumentException e) {
            System.out.println("PASS: 3.1 Test");
        }
    }
}
