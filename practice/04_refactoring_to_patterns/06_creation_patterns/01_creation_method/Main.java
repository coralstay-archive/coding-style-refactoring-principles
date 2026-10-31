// ==============================================================================
// @file: Main.java
// @path: tracks/04_refactoring_to_patterns/06_creation_patterns/01_creation_method/Main.java
// @book: 《패턴을 활용한 리팩터링》(Joshua Kerievsky 저, 인사이트)
// ==============================================================================

class Loan {
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

    public static Loan createRevolver(double commitment, double outstanding, int riskRating) {
        return new Loan(commitment, outstanding, riskRating);
    }

    public double getCommitment() { return commitment; }
    public double getOutstanding() { return outstanding; }

    public static void main(String[] args) {
        Loan loan = Loan.createTermLoan(1000.0, 3);
        System.out.println("[Kerievsky 6.1] Loan Commitment: " + loan.getCommitment());
    }
}
