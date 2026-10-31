// ==============================================================================
// @file: Test.java
// @path: tracks/04_refactoring_to_patterns/11_refactoring_tools/01_refactoring_directions/Test.java
// @book: 《패턴을 활용한 리팩터링》(Joshua Kerievsky 저, 인사이트)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        if (!Main.isToolSafe(true, true)) throw new AssertionError();
        System.out.println("PASS: 11.1 Test");
    }
}
