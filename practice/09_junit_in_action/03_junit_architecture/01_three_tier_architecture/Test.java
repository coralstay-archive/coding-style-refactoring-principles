// ==============================================================================
// @file: Test.java
// @path: tracks/09_junit_in_action/03_junit_architecture/01_three_tier_architecture/Test.java
// @book: 《JUnit in Action 3판》(Cătălin Tudose 저, 제이펍)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        if (!"junit-jupiter-engine".equals(Main.getEngineName(true))) throw new AssertionError();
        System.out.println("PASS: 3.1 Test");
    }
}
