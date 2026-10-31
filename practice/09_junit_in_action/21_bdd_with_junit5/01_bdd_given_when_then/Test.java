// ==============================================================================
// @file: Test.java
// @path: tracks/09_junit_in_action/21_bdd_with_junit5/01_bdd_given_when_then/Test.java
// @book: 《JUnit in Action 3판》(Cătălin Tudose 저, 제이펍)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        Main.ShoppingCart cart = new Main.ShoppingCart();
        cart.addItem();
        if (cart.getItemCount() != 1) throw new AssertionError();
        System.out.println("PASS: 21.1 Test");
    }
}
