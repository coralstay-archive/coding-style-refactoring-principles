// ==============================================================================
// @file: Test.java
// @path: tracks/04_refactoring_to_patterns/10_refactoring_away/01_inline_singleton/Test.java
// @book: 《패턴을 활용한 리팩터링》(Joshua Kerievsky 저, 인사이트)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        Main.Registry r = new Main.Registry();
        if (!r.lookup("k").equals("val_k")) throw new AssertionError();
        System.out.println("PASS: 10.1 Test");
    }
}
