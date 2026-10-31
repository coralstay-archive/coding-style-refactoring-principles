// ==============================================================================
// @file: Test.java
// @path: tracks/08_pragmatic_unit_testing/10_test_doubles/doubles_01_stub_and_mock/Test.java
// @book: 《자바와 JUnit을 활용한 실용주의 단위 테스트》(Jeff Langr 저, 길벗)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        Main.PaymentService stub = amt -> amt > 0;
        Main.OrderManager mgr = new Main.OrderManager(stub);
        if (!mgr.processOrder(500)) throw new AssertionError();
        System.out.println("PASS: 10.1 Test");
    }
}
