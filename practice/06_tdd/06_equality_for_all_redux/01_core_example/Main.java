// ==============================================================================
// @file: Main.java
// @path: tracks/06_tdd/06_equality_for_all_redux/01_core_example/Main.java
// @book: 《테스트 주도 개발 (TDD)》(Kent Beck 저, 인사이트)
// ==============================================================================

public class Main {
    public static class Money {
        protected int amount;
        public boolean equals(Object obj) {
            if (!(obj instanceof Money)) return false;
            return this.amount == ((Money) obj).amount;
        }
    }
    public static void main(String[] args) {
        System.out.println("[TDD Ch 6] 공통 슈퍼클래스 Money 추출 완료");
    }
}
