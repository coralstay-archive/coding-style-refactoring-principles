// ==============================================================================
// @file: Test.java
// @path: tracks/04_refactoring_to_patterns/09_accumulation_refactorings/01_move_accumulation_to_visitor/Test.java
// @book: 《패턴을 활용한 리팩터링》(Joshua Kerievsky 저, 인사이트)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        Main.WordCountVisitor visitor = new Main.WordCountVisitor();
        new Main.TextNode("Hello World Clean Code").accept(visitor);
        if (visitor.words != 4) throw new AssertionError("Expected 4 but got " + visitor.words);
        System.out.println("PASS: 9.1 Test");
    }
}
