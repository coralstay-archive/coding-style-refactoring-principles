// ==============================================================================
// @file: Main.java
// @path: tracks/04_refactoring_to_patterns/05_creation_refactorings/01_creation_methods/Main.java
// @book: 《패턴을 활용한 리팩터링》(Joshua Kerievsky 저, 인사이트)
// ==============================================================================

public class Main {
    public static class Loan {
        private final double commitment;
        private final double outstanding;
        private final int riskRating;

        private Loan(double commitment, double outstanding, int riskRating) {
            this.commitment = commitment;
            this.outstanding = outstanding;
            this.riskRating = riskRating;
        }

        public static Loan createTermLoan(double commitment, int riskRating) {
            return new Loan(commitment, 0.0, riskRating);
        }

        public static Loan createRevolvingCredit(double commitment, double outstanding) {
            return new Loan(commitment, outstanding, 0);
        }

        public double getCommitment() { return commitment; }
    }
    public static void main(String[] args) {
        Loan loan = Loan.createTermLoan(1000.0, 3);
        System.out.println("[RFP 5.1] 생성 메서드로 대출 생성: " + loan.getCommitment());
    }
}
