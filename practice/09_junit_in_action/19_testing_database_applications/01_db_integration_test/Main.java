// ==============================================================================
// @file: Main.java
// @path: tracks/09_junit_in_action/19_testing_database_applications/01_db_integration_test/Main.java
// @book: 《JUnit in Action 3판》(Cătălin Tudose 저, 제이펍)
// ==============================================================================

public class Main {
    public static class UserRepo {
        public int count() { return 1; }
    }
    public static void main(String[] args) {
        System.out.println("[JUnit in Action 19.1] DB 사용자 수: " + new UserRepo().count());
    }
}
