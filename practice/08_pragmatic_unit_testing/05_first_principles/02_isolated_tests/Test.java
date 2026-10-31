// ==============================================================================
// @file: Test.java
// @path: tracks/08_pragmatic_unit_testing/05_first_principles/02_isolated_tests/Test.java
// @book: 《자바와 JUnit을 활용한 실용주의 단위 테스트》(Jeff Langr 저, 길벗)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        Main.ShoppingCart cartA = new Main.ShoppingCart();
        cartA.addItem(50.0);
        if (cartA.getTotal() != 50.0) throw new AssertionError();

        Main.ShoppingCart cartB = new Main.ShoppingCart(); // 독립된 카트
        if (cartB.getTotal() != 0.0) throw new AssertionError("State leaked between tests!");

        System.out.println("PASS: 5.1 Isolated / Independent");
    }
}
