// ==============================================================================
// @file: Main.java
// @path: tracks/09_junit_in_action/21_bdd_with_junit5/01_bdd_given_when_then/Main.java
// @book: 《JUnit in Action 3판》(Cătălin Tudose 저, 제이펍)
// ==============================================================================

public class Main {
    public static class ShoppingCart {
        private int items = 0;
        public void addItem() { items++; }
        public int getItemCount() { return items; }
    }
    public static void main(String[] args) {
        ShoppingCart cart = new ShoppingCart();
        cart.addItem();
        System.out.println("[JUnit in Action 21.1] BDD 카트 수량: " + cart.getItemCount());
    }
}
