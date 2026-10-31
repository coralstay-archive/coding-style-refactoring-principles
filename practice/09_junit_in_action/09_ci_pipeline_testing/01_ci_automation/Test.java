// ==============================================================================
// @file: Test.java
// @path: tracks/09_junit_in_action/09_ci_pipeline_testing/01_ci_automation/Test.java
// @book: 《JUnit in Action 3판》(Cătălin Tudose 저, 제이펍)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        if (!Main.evaluatePipeline(true, true)) throw new AssertionError();
        System.out.println("PASS: 9.1 Test");
    }
}
