// ==============================================================================
// @file: Main.java
// @path: tracks/08_pragmatic_unit_testing/06_right_bicep/bicep_01_right_results/Main.java
// @book: 《자바와 JUnit을 활용한 실용주의 단위 테스트》(Jeff Langr 저, 길벗)
// ==============================================================================

public class Main {
    public static int multiply(int a, int b) { return a * b; }
    public static void main(String[] args) {
        System.out.println("[Right-BICEP: Right] 5 * 6 = " + multiply(5, 6));
    }
}
