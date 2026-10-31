// ==============================================================================
// @file: Main.java
// @path: tracks/06_tdd/13_make_it_real/01_core_example/Main.java
// @book: 《테스트 주도 개발 (TDD)》(Kent Beck 저, 인사이트)
// ==============================================================================

public class Main {
    public interface Expression { int reduce(); }
    public static class Sum implements Expression {
        public int augend; public int addend;
        public Sum(int a, int b) { this.augend = a; this.addend = b; }
        public int reduce() { return augend + addend; }
    }
    public static void main(String[] args) {
        System.out.println("[TDD Ch 13] 5 + 5 = " + new Sum(5, 5).reduce());
    }
}
