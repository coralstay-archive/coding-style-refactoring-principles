// ==============================================================================
// @file: Main.java
// @path: tracks/09_junit_in_action/02_exploring_core_junit/02_assumptions/Main.java
// @book: 《JUnit in Action 3판》(Cătălin Tudose 저, 제이펍)
// ==============================================================================

public class Main {
    public static boolean assumeEnvironment(boolean isCi) {
        return isCi;
    }
    public static void main(String[] args) {
        System.out.println("[JUnit in Action 2.2] 환경 가정 검사 완료");
    }
}
