// ==============================================================================
// @file: Main.java
// @path: tracks/04_refactoring_to_patterns/08_protection_refactorings/01_inline_singleton/Main.java
// @book: 《패턴을 활용한 리팩터링》(Joshua Kerievsky 저, 인사이트)
// ==============================================================================

public class Main {
    public static class HitCounter {
        private int count = 0;
        public void increment() { count++; }
        public int getCount() { return count; }
    }
    public static void main(String[] args) {
        HitCounter counter = new HitCounter();
        counter.increment();
        System.out.println("[RFP 8.1] 인스턴스화된 카운터: " + counter.getCount());
    }
}
