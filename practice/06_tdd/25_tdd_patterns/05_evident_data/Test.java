// ==============================================================================
// @file: Test.java
// @path: tracks/06_tdd/25_tdd_patterns/05_evident_data/Test.java
// @book: 《테스트 주도 개발 (TDD)》(Kent Beck 저, 인사이트)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        int expected = 2 * 24 * 60 * 60;
        if (Main.getSecondsInDays(2) != expected) throw new AssertionError();
        System.out.println("PASS: 25.7 Evident Data");
    }
}
