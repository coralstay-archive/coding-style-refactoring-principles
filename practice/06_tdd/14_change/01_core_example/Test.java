// ==============================================================================
// @file: Test.java
// @path: tracks/06_tdd/14_change/01_core_example/Test.java
// @book: 《테스트 주도 개발 (TDD)》(Kent Beck 저, 인사이트)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        Main.Bank b = new Main.Bank();
        b.addRate("CHF", "USD", 2);
        if (b.rate("CHF", "USD") != 2) throw new AssertionError();
        System.out.println("PASS: TDD Ch 14");
    }
}
