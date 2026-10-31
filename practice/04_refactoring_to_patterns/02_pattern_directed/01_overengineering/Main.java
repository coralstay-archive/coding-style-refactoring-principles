// ==============================================================================
// @file: Main.java
// @path: tracks/04_refactoring_to_patterns/02_pattern_directed/01_overengineering/Main.java
// @book: 《패턴을 활용한 리팩터링》(Joshua Kerievsky 저, 인사이트)
// ==============================================================================

public class Main {
    public static class SimpleCalculator {
        public int add(int a, int b) { return a + b; }
    }
    public static void main(String[] args) {
        System.out.println("[RFP 2.1] 불필요한 패턴 없이 단순하게: " + new SimpleCalculator().add(3, 4));
    }
}
