// ==============================================================================
// @file: Main.java
// @path: tracks/09_junit_in_action/02_exploring_core_junit/01_core_example/Main.java
// @book: 《JUnit in Action 3판》(Cătălin Tudose 저, 제이펍)
// ==============================================================================

public class Main {
    public static boolean isEven(int n) { return n % 2 == 0; }
    public static void main(String[] args) {
        System.out.println("[JUnit in Action Ch 2] isEven(4): " + isEven(4));
    }
}
