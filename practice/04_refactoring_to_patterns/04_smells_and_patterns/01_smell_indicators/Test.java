// ==============================================================================
// @file: Test.java
// @path: tracks/04_refactoring_to_patterns/04_smells_and_patterns/01_smell_indicators/Test.java
// @book: 《패턴을 활용한 리팩터링》(Joshua Kerievsky 저, 인사이트)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        if (!"StrategyOrState".equals(Main.getPatternForSmell("ConditionalComplexity"))) throw new AssertionError();
        System.out.println("PASS: 4.1 Test");
    }
}
