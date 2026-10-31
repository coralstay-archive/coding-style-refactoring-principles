// ==============================================================================
// @file: Main.java
// @path: tracks/04_refactoring_to_patterns/07_simplification/01_compose_method/Main.java
// @book: 《패턴을 활용한 리팩터링》(Joshua Kerievsky 저, 인사이트)
// ==============================================================================

import java.util.ArrayList;
import java.util.List;

class Inventory {
    private final List<String> items = new ArrayList<>();

    public void add(String item) {
        validateItem(item);
        store(item);
    }

    private void validateItem(String item) {
        if (item == null || item.trim().isEmpty()) {
            throw new IllegalArgumentException("아이템은 비어있을 수 없습니다.");
        }
    }

    private void store(String item) {
        items.add(item);
    }

    public int count() { return items.size(); }

    public static void main(String[] args) {
        Inventory inv = new Inventory();
        inv.add("Potion");
        System.out.println("[Kerievsky 7.1] Count: " + inv.count());
    }
}
