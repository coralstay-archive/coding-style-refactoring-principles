// ==============================================================================
// @file: Main.java
// @path: tracks/04_refactoring_to_patterns/07_simplification/02_replace_with_strategy/Main.java
// @book: 《패턴을 활용한 리팩터링》(Joshua Kerievsky 저, 인사이트)
// ==============================================================================

interface CapitalStrategy {
    double capital(double commitment, double duration);
}

class TermLoanStrategy implements CapitalStrategy {
    public double capital(double commitment, double duration) {
        return commitment * duration * 0.05;
    }
}

class RevolverStrategy implements CapitalStrategy {
    public double capital(double commitment, double duration) {
        return commitment * duration * 0.02;
    }
}

class LoanCalculator {
    public static double calculate(CapitalStrategy strategy, double commitment, double duration) {
        return strategy.capital(commitment, duration);
    }

    public static void main(String[] args) {
        double cap = calculate(new TermLoanStrategy(), 1000.0, 2.0);
        System.out.println("[Kerievsky 7.2] Strategy Capital: " + cap);
    }
}
