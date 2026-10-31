// ==============================================================================
// @file: Test.java
// @path: tracks/09_junit_in_action/05_test_isolation_and_doubles/01_stubs_and_mocks/Test.java
// @book: 《JUnit in Action 3판》(Cătălin Tudose 저, 제이펍)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        Main.PaymentProcessor p = new Main.PaymentProcessor(a -> true);
        if (!p.process(500)) throw new AssertionError();
        if (p.process(-10)) throw new AssertionError();
        System.out.println("PASS: 5.1 Test");
    }
}
