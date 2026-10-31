// ==============================================================================
// @file: Main.java
// @path: tracks/08_pragmatic_unit_testing/05_first_principles/01_core_example/Main.java
// @book: 《자바와 JUnit을 활용한 실용주의 단위 테스트》(Jeff Langr 저, 길벗)
// ==============================================================================

public class Main {
    public static class FirstChecker {
        public static boolean isFast(long durationMs) { return durationMs < 200; }
    }
    public static void main(String[] args) {
        System.out.println("[Pragmatic JUnit Ch 5] FIRST 원칙 준수 여부: " + FirstChecker.isFast(15));
    }
}
