// ==============================================================================
// @file: Main.java
// @path: tracks/09_junit_in_action/05_test_isolation_and_doubles/01_core_example/Main.java
// @book: 《JUnit in Action 3판》(Cătălin Tudose 저, 제이펍)
// ==============================================================================

public class Main {
    public interface AccountRepository { double getBalance(String id); }
    public static class AccountService {
        private final AccountRepository repo;
        public AccountService(AccountRepository r) { this.repo = r; }
        public boolean hasFunds(String id, double req) { return repo.getBalance(id) >= req; }
    }
    public static void main(String[] args) {
        System.out.println("[JUnit in Action Ch 5] 테스트 격리 서비스");
    }
}
