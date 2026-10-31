// ==============================================================================
// @file: Main.java
// @path: tracks/08_pragmatic_unit_testing/04_test_organization/01_fixture_lifecycle/Main.java
// @book: 《자바와 JUnit을 활용한 실용주의 단위 테스트》(Jeff Langr 저, 길벗)
// ==============================================================================

public class Main {
    public static class Account {
        private int balance = 100;
        public void deposit(int amt) { balance += amt; }
        public int getBalance() { return balance; }
    }
    public static void main(String[] args) {
        Account acc = new Account();
        acc.deposit(50);
        System.out.println("[Pragmatic 4.1] 계좌 잔고: " + acc.getBalance());
    }
}
