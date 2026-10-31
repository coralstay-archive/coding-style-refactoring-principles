// ==============================================================================
// @file: Main.java
// @path: tracks/08_pragmatic_unit_testing/06_right_bicep/bicep_04_cross_check/Main.java
// @book: 《자바와 JUnit을 활용한 실용주의 단위 테스트》(Jeff Langr 저, 길벗)
// ==============================================================================

public class Main {
    public static int sumIterative(int n) {
        int s = 0; for (int i = 1; i <= n; i++) s += i; return s;
    }
    public static int sumFormula(int n) { return n * (n + 1) / 2; }
    public static void main(String[] args) {
        System.out.println("[Right-BICEP: Cross-check] 일치 여부: " + (sumIterative(10) == sumFormula(10)));
    }
}
