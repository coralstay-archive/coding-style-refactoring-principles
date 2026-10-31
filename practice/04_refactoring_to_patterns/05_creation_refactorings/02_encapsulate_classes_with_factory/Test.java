// ==============================================================================
// @file: Test.java
// @path: tracks/04_refactoring_to_patterns/05_creation_refactorings/02_encapsulate_classes_with_factory/Test.java
// @book: 《패턴을 활용한 리팩터링》(Joshua Kerievsky 저, 인사이트)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        Main.Node n = Main.NodeFactory.createStringNode("Test");
        if (!n.render().equals("Test")) throw new AssertionError();
        System.out.println("PASS: 5.2 Test");
    }
}
