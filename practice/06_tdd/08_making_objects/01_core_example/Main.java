// ==============================================================================
// @file: Main.java
// @path: tracks/06_tdd/08_making_objects/01_core_example/Main.java
// @book: 《테스트 주도 개발 (TDD)》(Kent Beck 저, 인사이트)
// ==============================================================================

public class Main {
    public static abstract class Money {
        protected int amount;
        public static Money dollar(int amount) { return new Dollar(amount); }
        public static Money franc(int amount) { return new Franc(amount); }
        public abstract Money times(int multiplier);
    }
    static class Dollar extends Money {
        Dollar(int a) { this.amount = a; }
        public Money times(int m) { return new Dollar(amount * m); }
    }
    static class Franc extends Money {
        Franc(int a) { this.amount = a; }
        public Money times(int m) { return new Franc(amount * m); }
    }
    public static void main(String[] args) {
        System.out.println("[TDD Ch 8] 팩터리 메서드 Money.dollar(5)");
    }
}
