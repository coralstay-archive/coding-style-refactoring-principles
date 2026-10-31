// ==============================================================================
// @file: Test.java
// @path: tracks/09_junit_in_action/05_test_isolation_and_doubles/01_core_example/Test.java
// @book: 《JUnit in Action 3판》(Cătălin Tudose 저, 제이펍)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        Main.AccountRepository stub = id -> 100.0;
        Main.AccountService svc = new Main.AccountService(stub);
        if (!svc.hasFunds("acc1", 50.0)) throw new AssertionError();
        System.out.println("PASS: JUnit in Action Ch 05");
    }
}
