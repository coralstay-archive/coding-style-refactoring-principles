// ==============================================================================
// @file: Main.java
// @path: tracks/06_tdd/12_addition_finally/01_core_example/Main.java
// @book: 《테스트 주도 개발 (TDD)》(Kent Beck 저, 인사이트)
// ==============================================================================

public class Main {
    public interface Expression {}
    public static class Money implements Expression {
        public int amount;
        public Money(int a) { this.amount = a; }
    }
    public static void main(String[] args) {
        System.out.println("[TDD Ch 12] Expression 인터페이스 도입");
    }
}
