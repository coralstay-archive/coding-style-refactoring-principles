// ==============================================================================
// @file: Test.java
// @path: tracks/04_refactoring_to_patterns/05_creation_refactorings/01_creation_methods/Test.java
// @book: 《패턴을 활용한 리팩터링》(Joshua Kerievsky 저, 인사이트)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        Main.Loan l = Main.Loan.createTermLoan(500.0, 1);
        if (l.getCommitment() != 500.0) throw new AssertionError();
        System.out.println("PASS: 5.1 Test");
    }
}
