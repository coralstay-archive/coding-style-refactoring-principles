// ==============================================================================
// @file: Main.java
// @path: tracks/09_junit_in_action/12_spring_testing/01_dependency_injection_test/Main.java
// @book: 《JUnit in Action 3판》(Cătălin Tudose 저, 제이펍)
// ==============================================================================

public class Main {
    public interface OrderRepository { int getOrderCount(); }
    public static class OrderService {
        private final OrderRepository repo;
        public OrderService(OrderRepository r) { this.repo = r; }
        public boolean hasOrders() { return repo.getOrderCount() > 0; }
    }
    public static void main(String[] args) {
        System.out.println("[JUnit in Action 12.1] 스프링 서비스 컴포넌트");
    }
}
