// ==============================================================================
// @file: Test.java
// @path: tracks/04_refactoring_to_patterns/07_simplification/02_replace_with_strategy/Test.java
// @book: 《패턴을 활용한 리팩터링》(Joshua Kerievsky 저, 인사이트)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        double termCap = LoanCalculator.calculate(new TermLoanStrategy(), 1000.0, 3.0);
        assert Math.abs(termCap - 150.0) < 0.001;

        double revCap = LoanCalculator.calculate(new RevolverStrategy(), 1000.0, 3.0);
        assert Math.abs(revCap - 60.0) < 0.001;

        System.out.println("PASS: 7.2 Replace with Strategy");
    }
}
