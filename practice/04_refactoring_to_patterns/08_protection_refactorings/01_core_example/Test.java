// ==============================================================================
// @file: Test.java
// @path: tracks/04_refactoring_to_patterns/08_protection_refactorings/01_core_example/Test.java
// @book: 《패턴을 활용한 리팩터링》(Joshua Kerievsky 저, 인사이트)
// ==============================================================================

import java.util.List;
public class Test {
    public static void main(String[] args) {
        Main.SafeCatalog cat = new Main.SafeCatalog();
        cat.addItem("A");
        List<String> list = cat.getItems();
        try {
            list.add("B");
            throw new AssertionError("Should have failed");
        } catch (UnsupportedOperationException e) {
            System.out.println("PASS: Ch 08 Test");
        }
    }
}
