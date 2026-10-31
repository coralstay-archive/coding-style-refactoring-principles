// ==============================================================================
// @file: Main.java
// @path: tracks/09_junit_in_action/09_ci_pipeline_testing/01_ci_automation/Main.java
// @book: 《JUnit in Action 3판》(Cătălin Tudose 저, 제이펍)
// ==============================================================================

public class Main {
    public static boolean evaluatePipeline(boolean testsPass, boolean lintPass) {
        return testsPass && lintPass;
    }
    public static void main(String[] args) {
        System.out.println("[JUnit in Action 9.1] CI 통과 여부: " + evaluatePipeline(true, true));
    }
}
