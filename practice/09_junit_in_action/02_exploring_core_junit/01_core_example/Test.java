// ==============================================================================
// @file: Test.java
// @path: tracks/09_junit_in_action/02_exploring_core_junit/01_core_example/Test.java
// @book: 《JUnit in Action 3판》(Cătălin Tudose 저, 제이펍)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        if (!Main.isEven(4)) throw new AssertionError();
        System.out.println("PASS: JUnit in Action Ch 02");
    }
}
