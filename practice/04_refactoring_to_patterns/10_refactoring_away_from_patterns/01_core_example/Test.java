// ==============================================================================
// @file: Test.java
// @path: tracks/04_refactoring_to_patterns/10_refactoring_away_from_patterns/01_core_example/Test.java
// @book: 《패턴을 활용한 리팩터링》(Joshua Kerievsky 저, 인사이트)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        Main.SimpleValidator v = new Main.SimpleValidator();
        if (!v.isValid("hello")) throw new AssertionError();
        System.out.println("PASS: Ch 10 Test");
    }
}
