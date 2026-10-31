// ==============================================================================
// @file: Main.java
// @path: tracks/06_tdd/05_francly_speaking/01_core_example/Main.java
// @book: 《테스트 주도 개발 (TDD)》(Kent Beck 저, 인사이트)
// ==============================================================================

public class Main {
    public static class Franc {
        private final int amount;
        public Franc(int amount) { this.amount = amount; }
        public Franc times(int multiplier) { return new Franc(amount * multiplier); }
        public boolean equals(Object obj) {
            if (!(obj instanceof Franc)) return false;
            return this.amount == ((Franc) obj).amount;
        }
    }
    public static void main(String[] args) {
        System.out.println("[TDD Ch 5] 5 CHF * 2 = " + new Franc(5).times(2).equals(new Franc(10)));
    }
}
