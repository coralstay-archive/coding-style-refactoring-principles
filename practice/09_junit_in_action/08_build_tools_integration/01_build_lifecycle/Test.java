// ==============================================================================
// @file: Test.java
// @path: tracks/09_junit_in_action/08_build_tools_integration/01_build_lifecycle/Test.java
// @book: 《JUnit in Action 3판》(Cătălin Tudose 저, 제이펍)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        if (!"test".equals(Main.getPhase("test"))) throw new AssertionError();
        System.out.println("PASS: 8.1 Test");
    }
}
