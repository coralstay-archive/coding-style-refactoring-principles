// ==============================================================================
// @file: Test.java
// @path: tracks/04_refactoring_to_patterns/06_simplification_refactorings/03_move_embellishment_to_decorator/Test.java
// @book: 《패턴을 활용한 리팩터링》(Joshua Kerievsky 저, 인사이트)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        Main.TextWriter w = new Main.UppercaseDecorator(new Main.PlainWriter());
        if (!w.write("abc").equals("ABC")) throw new AssertionError();
        System.out.println("PASS: 6.3 Test");
    }
}
