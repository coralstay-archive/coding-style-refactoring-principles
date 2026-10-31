// ==============================================================================
// @file: Test.java
// @path: tracks/06_tdd/03_equality_for_all/01_core_example/Test.java
// @book: 《테스트 주도 개발 (TDD)》(Kent Beck 저, 인사이트)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        if (!new Main.Dollar(5).equals(new Main.Dollar(5))) throw new AssertionError();
        if (new Main.Dollar(5).equals(new Main.Dollar(6))) throw new AssertionError();
        System.out.println("PASS: TDD Ch 03");
    }
}
