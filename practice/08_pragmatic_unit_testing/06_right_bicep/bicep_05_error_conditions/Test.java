// ==============================================================================
// @file: Test.java
// @path: tracks/08_pragmatic_unit_testing/06_right_bicep/bicep_05_error_conditions/Test.java
// @book: 《자바와 JUnit을 활용한 실용주의 단위 테스트》(Jeff Langr 저, 길벗)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        try {
            Main.parseToken("INVALID");
            throw new AssertionError();
        } catch (RuntimeException e) {
            System.out.println("PASS: Error Test");
        }
    }
}
