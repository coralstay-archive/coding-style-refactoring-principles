// ==============================================================================
// @file: Main.java
// @path: tracks/04_refactoring_to_patterns/03_pattern_discovery/01_pattern_discovery/Main.java
// @book: 《패턴을 활용한 리팩터링》(Joshua Kerievsky 저, 인사이트)
// ==============================================================================

public class Main {
    public static class PatternAdvisor {
        public static String advise(boolean hasComplexCreation, boolean hasManyAlgorithms) {
            if (hasComplexCreation) return "Builder or Factory";
            if (hasManyAlgorithms) return "Strategy";
            return "Simple Method";
        }
    }
    public static void main(String[] args) {
        System.out.println("[RFP 3.1] 패턴 탐색 추천: " + PatternAdvisor.advise(false, true));
    }
}
