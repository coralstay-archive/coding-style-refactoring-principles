// ==============================================================================
// @file: Test.java
// @path: tracks/08_pragmatic_unit_testing/06_right_bicep/01_core_example/Test.java
// @book: 《자바와 JUnit을 활용한 실용주의 단위 테스트》(Jeff Langr 저, 길벗)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        // Right: 정상 동작
        if (Main.multiply(3, 4) != 12) throw new AssertionError();
        // Boundary: 0 곱하기
        if (Main.multiply(0, 5) != 0) throw new AssertionError();
        System.out.println("PASS: Pragmatic Ch 06");
    }
}
