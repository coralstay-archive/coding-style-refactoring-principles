// ==============================================================================
// @file: Main.java
// @path: tracks/04_refactoring_to_patterns/11_refactoring_tools/01_refactoring_directions/Main.java
// @book: 《패턴을 활용한 리팩터링》(Joshua Kerievsky 저, 인사이트)
// ==============================================================================

public class Main {
    public static boolean isToolSafe(boolean hasAutomatedTests, boolean isAtomicRefactor) {
        return hasAutomatedTests && isAtomicRefactor;
    }
    public static void main(String[] args) {
        System.out.println("[RFP 11.1] 리팩터링 안전성: " + isToolSafe(true, true));
    }
}
