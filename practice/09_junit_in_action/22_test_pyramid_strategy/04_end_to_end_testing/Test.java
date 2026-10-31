// ==============================================================================
// @file: Test.java
// @path: tracks/09_junit_in_action/22_test_pyramid_strategy/04_end_to_end_testing/Test.java
// @book: 《JUnit in Action 3판》(Cătălin Tudose 저, 제이펍)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        String res = Main.E2EFlowSimulator.runUserJourney("Bob", 500);
        if (!res.startsWith("SUCCESS")) throw new AssertionError("E2E journey failed");
        if (!"REJECTED".equals(Main.E2EFlowSimulator.runUserJourney("Bob", -10))) throw new AssertionError();
        System.out.println("PASS: 22.4 End-to-End Testing Layer");
    }
}
