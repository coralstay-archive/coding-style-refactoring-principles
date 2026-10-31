// ==============================================================================
// @file: Main.java
// @path: tracks/04_refactoring_to_patterns/04_smells_and_patterns/01_smell_indicators/Main.java
// @book: 《패턴을 활용한 리팩터링》(Joshua Kerievsky 저, 인사이트)
// ==============================================================================

public class Main {
    public static String getPatternForSmell(String smell) {
        if ("LongMethod".equals(smell)) return "ComposeMethod";
        if ("ConditionalComplexity".equals(smell)) return "StrategyOrState";
        return "RefactorExtract";
    }
    public static void main(String[] args) {
        System.out.println("[RFP 4.1] 악취에 따른 해결책: " + getPatternForSmell("ConditionalComplexity"));
    }
}
