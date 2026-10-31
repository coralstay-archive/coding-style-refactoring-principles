// ==============================================================================
// @file: Test.java
// @path: tracks/04_refactoring_to_patterns/08_protection_refactorings/01_inline_singleton/Test.java
// @book: 《패턴을 활용한 리팩터링》(Joshua Kerievsky 저, 인사이트)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        Main.HitCounter c1 = new Main.HitCounter();
        Main.HitCounter c2 = new Main.HitCounter();
        c1.increment();
        if (c1.getCount() != 1 || c2.getCount() != 0) throw new AssertionError();
        System.out.println("PASS: 8.1 Test");
    }
}
