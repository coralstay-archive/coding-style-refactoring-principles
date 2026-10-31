// ==============================================================================
// @file: Main.java
// @path: tracks/06_tdd/07_apples_and_oranges/01_core_example/Main.java
// @book: 《테스트 주도 개발 (TDD)》(Kent Beck 저, 인사이트)
// ==============================================================================

public class Main {
    public static class Money {
        protected int amount;
        public boolean equals(Object obj) {
            if (obj == null || getClass() != obj.getClass()) return false;
            return this.amount == ((Money) obj).amount;
        }
    }
    public static class Dollar extends Money { public Dollar(int a) { this.amount = a; } }
    public static class Franc extends Money { public Franc(int a) { this.amount = a; } }
    public static void main(String[] args) {
        System.out.println("[TDD Ch 7] $5 == 5 CHF: " + new Dollar(5).equals(new Franc(5)));
    }
}
