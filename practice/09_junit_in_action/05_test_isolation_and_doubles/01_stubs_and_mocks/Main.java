// ==============================================================================
// @file: Main.java
// @path: tracks/09_junit_in_action/05_test_isolation_and_doubles/01_stubs_and_mocks/Main.java
// @book: 《JUnit in Action 3판》(Cătălin Tudose 저, 제이펍)
// ==============================================================================

public class Main {
    public interface PaymentGateway { boolean pay(int amount); }
    public static class PaymentProcessor {
        private final PaymentGateway gateway;
        public PaymentProcessor(PaymentGateway g) { this.gateway = g; }
        public boolean process(int amount) { return amount > 0 && gateway.pay(amount); }
    }
    public static void main(String[] args) {
        PaymentProcessor p = new PaymentProcessor(a -> true);
        System.out.println("[JUnit in Action 5.1] 결제 처리 성공 여부: " + p.process(100));
    }
}
