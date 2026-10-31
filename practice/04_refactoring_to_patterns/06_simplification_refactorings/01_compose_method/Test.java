// ==============================================================================
// @file: Test.java
// @path: tracks/04_refactoring_to_patterns/06_simplification_refactorings/01_compose_method/Test.java
// @book: 《패턴을 활용한 리팩터링》(Joshua Kerievsky 저, 인사이트)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        if (!new Main.TaskRunner().run().contains("Done")) throw new AssertionError();
        System.out.println("PASS: 6.1 Test");
    }
}
