// ==============================================================================
// @file: Main.java
// @path: tracks/06_tdd/04_privacy/01_core_example/Main.java
// @book: 《테스트 주도 개발 (TDD)》(Kent Beck 저, 인사이트)
// ==============================================================================

public class Main {
    public static class Dollar {
        private final int amount;
        public Dollar(int amount) { this.amount = amount; }
        public Dollar times(int multiplier) { return new Dollar(amount * multiplier); }
        public boolean equals(Object obj) {
            if (!(obj instanceof Dollar)) return false;
            return this.amount == ((Dollar) obj).amount;
        }
    }
    public static void main(String[] args) {
        Dollar five = new Dollar(5);
        System.out.println("[TDD Ch 4] 캡슐화 완료: " + five.times(2).equals(new Dollar(10)));
    }
}
