// ==============================================================================
// @file: Test.java
// @path: tracks/08_pragmatic_unit_testing/04_test_organization/01_fixture_lifecycle/Test.java
// @book: 《자바와 JUnit을 활용한 실용주의 단위 테스트》(Jeff Langr 저, 길벗)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        Main.Account acc = new Main.Account();
        acc.deposit(20);
        if (acc.getBalance() != 120) throw new AssertionError();
        System.out.println("PASS: 4.1 Test");
    }
}
