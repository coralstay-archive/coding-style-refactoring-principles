// ==============================================================================
// @file: Test.java
// @path: tracks/06_tdd/08_making_objects/01_core_example/Test.java
// @book: 《테스트 주도 개발 (TDD)》(Kent Beck 저, 인사이트)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        Main.Money d = Main.Money.dollar(5);
        if (d == null) throw new AssertionError();
        System.out.println("PASS: TDD Ch 08");
    }
}
