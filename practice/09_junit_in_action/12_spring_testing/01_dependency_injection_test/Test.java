// ==============================================================================
// @file: Test.java
// @path: tracks/09_junit_in_action/12_spring_testing/01_dependency_injection_test/Test.java
// @book: 《JUnit in Action 3판》(Cătălin Tudose 저, 제이펍)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        Main.OrderRepository mockRepo = () -> 3;
        Main.OrderService svc = new Main.OrderService(mockRepo);
        if (!svc.hasOrders()) throw new AssertionError();
        System.out.println("PASS: 12.1 Test");
    }
}
