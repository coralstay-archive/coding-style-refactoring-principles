// ==============================================================================
// @file: Test.java
// @path: tracks/09_junit_in_action/20_tdd_with_junit5/01_junit5_tdd_cycle/Test.java
// @book: 《JUnit in Action 3판》(Cătălin Tudose 저, 제이펍)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        if (Main.StringCalculator.add("") != 0) throw new AssertionError();
        if (Main.StringCalculator.add("5") != 5) throw new AssertionError();
        System.out.println("PASS: 20.1 Test");
    }
}
