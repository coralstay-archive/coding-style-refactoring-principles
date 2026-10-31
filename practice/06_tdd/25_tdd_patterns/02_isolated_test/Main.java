// ==============================================================================
// @file: Main.java
// @path: tracks/06_tdd/25_tdd_patterns/02_isolated_test/Main.java
// @book: 《테스트 주도 개발 (TDD)》(Kent Beck 저, 인사이트)
// ==============================================================================

public class Main {
    public static class Counter {
        private int count = 0;
        public void increment() { count++; }
        public int getCount() { return count; }
    }
    public static void main(String[] args) {
        Counter c = new Counter();
        c.increment();
        System.out.println("[Beck 25.2] Count: " + c.getCount());
    }
}
