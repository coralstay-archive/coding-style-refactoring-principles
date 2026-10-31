// ==============================================================================
// @file: Test.java
// @path: tracks/06_tdd/25_tdd_patterns/02_isolated_test/Test.java
// @book: 《테스트 주도 개발 (TDD)》(Kent Beck 저, 인사이트)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        Main.Counter c1 = new Main.Counter();
        c1.increment();
        if (c1.getCount() != 1) throw new AssertionError("Test 1 failed");

        Main.Counter c2 = new Main.Counter(); // 완전히 독립된 새 인스턴스로 격리
        if (c2.getCount() != 0) throw new AssertionError("Test 2 leaked state!");

        System.out.println("PASS: 25.2 Isolated Test");
    }
}
