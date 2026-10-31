// ==============================================================================
// @file: Main.java
// @path: tracks/04_refactoring_to_patterns/06_simplification_refactorings/02_replace_conditional_with_strategy/Main.java
// @book: 《패턴을 활용한 리팩터링》(Joshua Kerievsky 저, 인사이트)
// ==============================================================================

public class Main {
    public interface BillingStrategy { double getAct(double raw); }
    public static class NormalStrategy implements BillingStrategy { public double getAct(double raw) { return raw; } }
    public static class HappyHourStrategy implements BillingStrategy { public double getAct(double raw) { return raw * 0.5; } }

    public static void main(String[] args) {
        BillingStrategy strat = new HappyHourStrategy();
        System.out.println("[RFP 6.2] 전략 패턴 요금: " + strat.getAct(100.0));
    }
}
