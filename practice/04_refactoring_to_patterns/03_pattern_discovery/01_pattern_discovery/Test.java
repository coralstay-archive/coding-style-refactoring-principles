// ==============================================================================
// @file: Test.java
// @path: tracks/04_refactoring_to_patterns/03_pattern_discovery/01_pattern_discovery/Test.java
// @book: 《패턴을 활용한 리팩터링》(Joshua Kerievsky 저, 인사이트)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        String rec = Main.PatternAdvisor.advise(false, true);
        if (!"Strategy".equals(rec)) throw new AssertionError("Expected Strategy but got " + rec);
        System.out.println("PASS: 3.1 Test");
    }
}
