// ==============================================================================
// @file: Main.java
// @path: tracks/08_pragmatic_unit_testing/07_correct/correct_03_range/Main.java
// @book: 《자바와 JUnit을 활용한 실용주의 단위 테스트》(Jeff Langr 저, 길벗)
// ==============================================================================

public class Main {
    public static boolean isPercentage(int n) { return n >= 0 && n <= 100; }
    public static void main(String[] args) {
        System.out.println("[CORRECT: Range] 백분율: " + isPercentage(50));
    }
}
