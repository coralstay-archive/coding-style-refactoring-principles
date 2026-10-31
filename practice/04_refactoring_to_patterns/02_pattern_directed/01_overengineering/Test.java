// ==============================================================================
// @file: Test.java
// @path: tracks/04_refactoring_to_patterns/02_pattern_directed/01_overengineering/Test.java
// @book: 《패턴을 활용한 리팩터링》(Joshua Kerievsky 저, 인사이트)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        if (new Main.SimpleCalculator().add(1, 1) != 2) throw new AssertionError();
        System.out.println("PASS: 2.1 Test");
    }
}
