// ==============================================================================
// @file: Main.java
// @path: tracks/06_tdd/11_root_of_all_evil/01_core_example/Main.java
// @book: 《테스트 주도 개발 (TDD)》(Kent Beck 저, 인사이트)
// ==============================================================================

public class Main {
    public static class Money {
        private final int amount;
        private final String currency;
        public Money(int a, String c) { this.amount = a; this.currency = c; }
        public static Money dollar(int a) { return new Money(a, "USD"); }
        public static Money franc(int a) { return new Money(a, "CHF"); }
    }
    public static void main(String[] args) {
        System.out.println("[TDD Ch 11] 하위 서브클래스 완전 삭제 및 Money 단일화");
    }
}
