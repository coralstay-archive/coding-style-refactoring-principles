// ==============================================================================
// @file: Main.java
// @path: tracks/04_refactoring_to_patterns/05_creation_refactorings/01_core_example/Main.java
// @book: 《패턴을 활용한 리팩터링》(Joshua Kerievsky 저, 인사이트)
// ==============================================================================

// [Refactoring to Patterns Ch 5] 정적 생성 메서드
public class Main {
    public static class Loan {
        private final double commitment;
        private final double outstanding;

        private Loan(double commitment, double outstanding) {
            this.commitment = commitment;
            this.outstanding = outstanding;
        }

        public static Loan createTermLoan(double commitment) {
            return new Loan(commitment, 0.0);
        }

        public static Loan createRevolvingCredit(double commitment, double outstanding) {
            return new Loan(commitment, outstanding);
        }

        public double getCommitment() { return commitment; }
    }

    public static void main(String[] args) {
        Loan loan = Loan.createTermLoan(1000.0);
        System.out.println("[Ch 5] 생성 메서드로 대출 생성 완료: " + loan.getCommitment());
    }
}
