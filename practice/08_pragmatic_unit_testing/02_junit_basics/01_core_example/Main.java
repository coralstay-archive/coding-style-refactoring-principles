// ==============================================================================
// @file: Main.java
// @path: tracks/08_pragmatic_unit_testing/02_junit_basics/01_core_example/Main.java
// @book: 《자바와 JUnit을 활용한 실용주의 단위 테스트》(Jeff Langr 저, 길벗)
// ==============================================================================

public class Main {
    public static boolean isPositive(int n) { return n > 0; }
    public static void main(String[] args) {
        System.out.println("[Pragmatic JUnit Ch 2] isPositive(10): " + isPositive(10));
    }
}
