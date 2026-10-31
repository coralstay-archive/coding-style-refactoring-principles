// ==============================================================================
// @file: Main.java
// @path: tracks/04_refactoring_to_patterns/06_simplification_refactorings/01_core_example/Main.java
// @book: 《패턴을 활용한 리팩터링》(Joshua Kerievsky 저, 인사이트)
// ==============================================================================

// [Refactoring to Patterns Ch 6] Strategy 패턴으로 분기 제거
public class Main {
    public interface PaymentStrategy {
        double calculateFee(double amount);
    }

    public static class CreditCardStrategy implements PaymentStrategy {
        public double calculateFee(double amount) { return amount * 0.03; }
    }

    public static class WireTransferStrategy implements PaymentStrategy {
        public double calculateFee(double amount) { return 1000.0; }
    }

    public static void main(String[] args) {
        PaymentStrategy strategy = new CreditCardStrategy();
        System.out.println("[Ch 6] 카드 결제 수수료: " + strategy.calculateFee(10000.0));
    }
}
