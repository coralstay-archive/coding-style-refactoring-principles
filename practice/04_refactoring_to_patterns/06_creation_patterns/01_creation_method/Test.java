// ==============================================================================
// @file: Test.java
// @path: tracks/04_refactoring_to_patterns/06_creation_patterns/01_creation_method/Test.java
// @book: 《패턴을 활용한 리팩터링》(Joshua Kerievsky 저, 인사이트)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        Loan termLoan = Loan.createTermLoan(5000.0, 1);
        assert termLoan.getCommitment() == 5000.0;
        assert termLoan.getOutstanding() == 0.0;

        Loan revolver = Loan.createRevolver(10000.0, 2000.0, 2);
        assert revolver.getOutstanding() == 2000.0;

        System.out.println("PASS: 6.1 Creation Method");
    }
}
