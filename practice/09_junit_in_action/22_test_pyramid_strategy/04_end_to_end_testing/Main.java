// ==============================================================================
// @file: Main.java
// @path: tracks/09_junit_in_action/22_test_pyramid_strategy/04_end_to_end_testing/Main.java
// @book: 《JUnit in Action 3판》(Cătălin Tudose 저, 제이펍)
// ==============================================================================

public class Main {
    public static class E2EFlowSimulator {
        public static String runUserJourney(String user, int checkoutAmount) {
            if (checkoutAmount <= 0) return "REJECTED";
            return "SUCCESS: User " + user + " checked out $" + checkoutAmount;
        }
    }
    public static void main(String[] args) {
        System.out.println("[Tudose 22.4] " + E2EFlowSimulator.runUserJourney("Alice", 250));
    }
}
