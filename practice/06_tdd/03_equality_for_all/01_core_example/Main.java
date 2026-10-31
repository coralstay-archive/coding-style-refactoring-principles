// ==============================================================================
// @file: Main.java
// @path: tracks/06_tdd/03_equality_for_all/01_core_example/Main.java
// @book: 《테스트 주도 개발 (TDD)》(Kent Beck 저, 인사이트)
// ==============================================================================

public class Main {
    public static class Dollar {
        public int amount;
        public Dollar(int amount) { this.amount = amount; }
        public boolean equals(Object obj) {
            if (!(obj instanceof Dollar)) return false;
            return this.amount == ((Dollar) obj).amount;
        }
    }
    public static void main(String[] args) {
        System.out.println("[TDD Ch 3] $5 == $5: " + new Dollar(5).equals(new Dollar(5)));
    }
}
