// ==============================================================================
// @file: Test.java
// @path: tracks/06_tdd/25_tdd_patterns/04_assert_first/Test.java
// @book: 《테스트 주도 개발 (TDD)》(Kent Beck 저, 인사이트)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        // 단언 우선 작성: assert (expected == actual)
        int expected = 42;
        int actual = Main.multiply(6, 7);
        if (actual != expected) throw new AssertionError("Assert First failed");
        System.out.println("PASS: 25.5 Assert First");
    }
}
