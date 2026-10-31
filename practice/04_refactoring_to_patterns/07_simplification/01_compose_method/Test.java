// ==============================================================================
// @file: Test.java
// @path: tracks/04_refactoring_to_patterns/07_simplification/01_compose_method/Test.java
// @book: 《패턴을 활용한 리팩터링》(Joshua Kerievsky 저, 인사이트)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        Inventory inv = new Inventory();
        inv.add("Shield");
        assert inv.count() == 1;

        try {
            inv.add("");
            assert false : "빈 아이템은 거부되어야 함";
        } catch (IllegalArgumentException e) {
            // PASS
        }
        System.out.println("PASS: 7.1 Compose Method");
    }
}
