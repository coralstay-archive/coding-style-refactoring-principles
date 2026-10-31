// ==============================================================================
// @file: Test.java
// @path: tracks/09_junit_in_action/13_rest_api_testing/01_core_example/Test.java
// @book: 《JUnit in Action 3판》(Cătălin Tudose 저, 제이펍)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        if (Main.handleRequest("/api/v1/health") != 200) throw new AssertionError();
        if (Main.handleRequest("/invalid") != 404) throw new AssertionError();
        System.out.println("PASS: JUnit in Action Ch 13");
    }
}
