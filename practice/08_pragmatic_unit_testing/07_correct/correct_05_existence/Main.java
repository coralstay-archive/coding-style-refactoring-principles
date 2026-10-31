// ==============================================================================
// @file: Main.java
// @path: tracks/08_pragmatic_unit_testing/07_correct/correct_05_existence/Main.java
// @book: 《자바와 JUnit을 활용한 실용주의 단위 테스트》(Jeff Langr 저, 길벗)
// ==============================================================================

public class Main {
    public static int safeLength(String s) { return (s == null) ? 0 : s.length(); }
    public static void main(String[] args) {
        System.out.println("[CORRECT: Existence] null 안전 길이: " + safeLength(null));
    }
}
