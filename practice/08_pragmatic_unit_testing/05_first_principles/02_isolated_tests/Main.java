// ==============================================================================
// @file: Main.java
// @path: tracks/08_pragmatic_unit_testing/05_first_principles/02_isolated_tests/Main.java
// @book: 《자바와 JUnit을 활용한 실용주의 단위 테스트》(Jeff Langr 저, 길벗)
// ==============================================================================

public class Main {
    public static class ShoppingCart {
        private double total = 0.0;
        public void addItem(double price) { total += price; }
        public double getTotal() { return total; }
        public void clear() { total = 0.0; }
    }
    public static void main(String[] args) {
        ShoppingCart cart = new ShoppingCart();
        cart.addItem(100.0);
        System.out.println("[Langr 5.1] Total: " + cart.getTotal());
    }
}
