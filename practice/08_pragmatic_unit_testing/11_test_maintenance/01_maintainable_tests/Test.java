// ==============================================================================
// @file: Test.java
// @path: tracks/08_pragmatic_unit_testing/11_test_maintenance/01_maintainable_tests/Test.java
// @book: 《자바와 JUnit을 활용한 실용주의 단위 테스트》(Jeff Langr 저, 길벗)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        if (Main.sum(1, 2, 3, 4) != 10) throw new AssertionError();
        System.out.println("PASS: 11.1 Test");
    }
}
