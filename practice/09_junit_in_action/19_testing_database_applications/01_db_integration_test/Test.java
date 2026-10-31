// ==============================================================================
// @file: Test.java
// @path: tracks/09_junit_in_action/19_testing_database_applications/01_db_integration_test/Test.java
// @book: 《JUnit in Action 3판》(Cătălin Tudose 저, 제이펍)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        if (new Main.UserRepo().count() != 1) throw new AssertionError();
        System.out.println("PASS: 19.1 Test");
    }
}
