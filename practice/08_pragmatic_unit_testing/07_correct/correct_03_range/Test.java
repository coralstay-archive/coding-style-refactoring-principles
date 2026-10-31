// ==============================================================================
// @file: Test.java
// @path: tracks/08_pragmatic_unit_testing/07_correct/correct_03_range/Test.java
// @book: 《자바와 JUnit을 활용한 실용주의 단위 테스트》(Jeff Langr 저, 길벗)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        if (!Main.isPercentage(0)) throw new AssertionError();
        if (!Main.isPercentage(100)) throw new AssertionError();
        if (Main.isPercentage(-1)) throw new AssertionError();
        if (Main.isPercentage(101)) throw new AssertionError();
        System.out.println("PASS: Range Test");
    }
}
