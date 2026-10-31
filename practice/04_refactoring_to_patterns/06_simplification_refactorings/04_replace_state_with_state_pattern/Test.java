// ==============================================================================
// @file: Test.java
// @path: tracks/04_refactoring_to_patterns/06_simplification_refactorings/04_replace_state_with_state_pattern/Test.java
// @book: 《패턴을 활용한 리팩터링》(Joshua Kerievsky 저, 인사이트)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        if (!new Main.OnState().handle().equals("POWER_ON")) throw new AssertionError();
        System.out.println("PASS: 6.4 Test");
    }
}
