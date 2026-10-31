// ==============================================================================
// @file: Main.java
// @path: tracks/06_tdd/09_times_we_are_in/01_core_example/Main.java
// @book: 《테스트 주도 개발 (TDD)》(Kent Beck 저, 인사이트)
// ==============================================================================

public class Main {
    public static class Money {
        protected int amount;
        protected String currency;
        public Money(int amount, String currency) {
            this.amount = amount;
            this.currency = currency;
        }
        public String currency() { return currency; }
    }
    public static void main(String[] args) {
        Money m = new Money(10, "USD");
        System.out.println("[TDD Ch 9] 통화: " + m.currency());
    }
}
