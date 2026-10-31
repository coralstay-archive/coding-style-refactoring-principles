// ==============================================================================
// @file: Main.java
// @path: tracks/04_refactoring_to_patterns/09_accumulation_refactorings/01_core_example/Main.java
// @book: 《패턴을 활용한 리팩터링》(Joshua Kerievsky 저, 인사이트)
// ==============================================================================

import java.util.*;

public class Main {
    public interface Component {
        int getPrice();
    }

    public static class Product implements Component {
        private final int price;
        public Product(int price) { this.price = price; }
        public int getPrice() { return price; }
    }

    public static class Box implements Component {
        private final List<Component> children = new ArrayList<>();
        public void add(Component c) { children.add(c); }
        public int getPrice() {
            int total = 0;
            for (Component c : children) total += c.getPrice();
            return total;
        }
    }

    public static void main(String[] args) {
        Box box = new Box();
        box.add(new Product(100));
        box.add(new Product(200));
        System.out.println("[Ch 9] Composite 총액: " + box.getPrice());
    }
}
