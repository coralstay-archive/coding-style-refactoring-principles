// ==============================================================================
// @file: Main.java
// @path: tracks/04_refactoring_to_patterns/08_protection_refactorings/01_core_example/Main.java
// @book: 《패턴을 활용한 리팩터링》(Joshua Kerievsky 저, 인사이트)
// ==============================================================================

import java.util.*;

public class Main {
    public static class SafeCatalog {
        private final List<String> items = new ArrayList<>();

        public void addItem(String item) { items.add(item); }
        public List<String> getItems() { return Collections.unmodifiableList(items); }
    }

    public static void main(String[] args) {
        SafeCatalog cat = new SafeCatalog();
        cat.addItem("Item1");
        System.out.println("[Ch 8] 안전한 불변 컬렉션 반환: " + cat.getItems());
    }
}
