// ==============================================================================
// @file: Test.java
// @path: tracks/06_tdd/01_multi_currency/01_core_example/Test.java
// @book: 《테스트 주도 개발 (TDD)》(Kent Beck 저, 인사이트)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        Main.Dollar five = new Main.Dollar(5);
        if (five.times(2).amount != 10) throw new AssertionError();
        System.out.println("PASS: TDD Ch 01");
    }
}
