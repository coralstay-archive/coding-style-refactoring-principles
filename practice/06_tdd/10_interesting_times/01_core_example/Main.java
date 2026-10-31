// ==============================================================================
// @file: Main.java
// @path: tracks/06_tdd/10_interesting_times/01_core_example/Main.java
// @book: 《테스트 주도 개발 (TDD)》(Kent Beck 저, 인사이트)
// ==============================================================================

public class Main {
    public static class Money {
        protected int amount;
        protected String currency;
        public Money(int a, String c) { this.amount = a; this.currency = c; }
        public Money times(int m) { return new Money(amount * m, currency); }
    }
    public static void main(String[] args) {
        System.out.println("[TDD Ch 10] 통화 일원화 완료");
    }
}
