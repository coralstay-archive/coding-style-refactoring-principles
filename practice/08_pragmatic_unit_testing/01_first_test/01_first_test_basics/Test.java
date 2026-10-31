// ==============================================================================
// @file: Test.java
// @path: tracks/08_pragmatic_unit_testing/01_first_test/01_first_test_basics/Test.java
// @book: 《자바와 JUnit을 활용한 실용주의 단위 테스트》(Jeff Langr 저, 길벗)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        if (Main.add(2, 3) != 5) throw new AssertionError();
        System.out.println("PASS: 1.1 Test");
    }
}
