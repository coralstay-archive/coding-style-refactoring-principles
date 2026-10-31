// ==============================================================================
// @file: Test.java
// @path: tracks/04_refactoring_to_patterns/06_simplification_refactorings/02_replace_conditional_with_strategy/Test.java
// @book: 《패턴을 활용한 리팩터링》(Joshua Kerievsky 저, 인사이트)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        Main.BillingStrategy s = new Main.HappyHourStrategy();
        if (s.getAct(200.0) != 100.0) throw new AssertionError();
        System.out.println("PASS: 6.2 Test");
    }
}
