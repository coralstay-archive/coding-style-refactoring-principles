// ==============================================================================
// @file: Test.java
// @path: tracks/04_refactoring_to_patterns/07_generalization_refactorings/02_extract_adapter/Test.java
// @book: 《패턴을 활용한 리팩터링》(Joshua Kerievsky 저, 인사이트)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        Main.Target t = new Main.Adapter(new Main.Adaptee());
        if (t.getVal() != 999) throw new AssertionError();
        System.out.println("PASS: 7.2 Test");
    }
}
