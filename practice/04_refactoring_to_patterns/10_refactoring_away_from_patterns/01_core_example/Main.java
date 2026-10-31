// ==============================================================================
// @file: Main.java
// @path: tracks/04_refactoring_to_patterns/10_refactoring_away_from_patterns/01_core_example/Main.java
// @book: 《패턴을 활용한 리팩터링》(Joshua Kerievsky 저, 인사이트)
// ==============================================================================

// [Refactoring to Patterns Ch 10] 불필요한 싱글톤 제거하고 단순 클래스로 복귀
public class Main {
    public static class SimpleValidator {
        public boolean isValid(String input) { return input != null && !input.isEmpty(); }
    }

    public static void main(String[] args) {
        SimpleValidator val = new SimpleValidator();
        System.out.println("[Ch 10] 패턴 제거 후 단순화된 검증: " + val.isValid("data"));
    }
}
