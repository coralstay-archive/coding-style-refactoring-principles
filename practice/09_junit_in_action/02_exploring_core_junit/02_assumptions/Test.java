// ==============================================================================
// @file: Test.java
// @path: tracks/09_junit_in_action/02_exploring_core_junit/02_assumptions/Test.java
// @book: 《JUnit in Action 3판》(Cătălin Tudose 저, 제이펍)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        if (!Main.assumeEnvironment(true)) throw new AssertionError();
        System.out.println("PASS: 2.2 Test");
    }
}
