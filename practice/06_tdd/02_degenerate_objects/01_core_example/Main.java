// ==============================================================================
// @file: Main.java
// @path: tracks/06_tdd/02_degenerate_objects/01_core_example/Main.java
// @book: 《테스트 주도 개발 (TDD)》(Kent Beck 저, 인사이트)
// ==============================================================================

public class Main {
    public static class Dollar {
        public int amount;
        public Dollar(int amount) { this.amount = amount; }
        public Dollar times(int multiplier) { return new Dollar(amount * multiplier); }
    }
    public static void main(String[] args) {
        Dollar five = new Dollar(5);
        Dollar ten = five.times(2);
        Dollar fifteen = five.times(3);
        System.out.println("[TDD Ch 2] 불변성 유지: " + ten.amount + ", " + fifteen.amount);
    }
}
