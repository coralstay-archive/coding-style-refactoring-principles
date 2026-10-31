// ==============================================================================
// @file: Main.java
// @path: tracks/08_pragmatic_unit_testing/05_first_principles/01_fast_isolated_repeatable/Main.java
// @book: 《자바와 JUnit을 활용한 실용주의 단위 테스트》(Jeff Langr 저, 길벗)
// ==============================================================================

public class Main {
    public static class FirstPolicy {
        public static boolean isCompliant(long ms, boolean isIsolated) {
            return ms < 100 && isIsolated;
        }
    }
    public static void main(String[] args) {
        System.out.println("[Pragmatic 5.1] FIRST 충족: " + FirstPolicy.isCompliant(10, true));
    }
}
