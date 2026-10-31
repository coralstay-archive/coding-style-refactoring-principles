// ==============================================================================
// @file: Main.java
// @path: tracks/08_pragmatic_unit_testing/10_test_doubles/doubles_01_stub_and_mock/Main.java
// @book: 《자바와 JUnit을 활용한 실용주의 단위 테스트》(Jeff Langr 저, 길벗)
// ==============================================================================

public class Main {
    public interface PaymentService { boolean pay(int amount); }
    public static class OrderManager {
        private final PaymentService ps;
        public OrderManager(PaymentService ps) { this.ps = ps; }
        public boolean processOrder(int amt) { return ps.pay(amt); }
    }
    public static void main(String[] args) {
        System.out.println("[Pragmatic 10.1] 테스트 대역 주입 완료");
    }
}
