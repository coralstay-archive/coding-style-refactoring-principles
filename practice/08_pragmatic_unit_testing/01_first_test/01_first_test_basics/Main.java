// ==============================================================================
// @file: Main.java
// @path: tracks/08_pragmatic_unit_testing/01_first_test/01_first_test_basics/Main.java
// @book: 《자바와 JUnit을 활용한 실용주의 단위 테스트》(Jeff Langr 저, 길벗)
// ==============================================================================

public class Main {
    public static int add(int a, int b) { return a + b; }
    public static void main(String[] args) {
        System.out.println("[Pragmatic 1.1] add(2, 3) = " + add(2, 3));
    }
}
