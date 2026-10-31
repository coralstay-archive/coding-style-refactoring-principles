// ==============================================================================
// @file: Test.java
// @path: tracks/08_pragmatic_unit_testing/07_correct_boundary_conditions/01_core_example/Test.java
// @book: 《자바와 JUnit을 활용한 실용주의 단위 테스트》(Jeff Langr 저, 길벗)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        if (Main.getFirstOrZero(null) != 0) throw new AssertionError();
        if (Main.getFirstOrZero(new int[]{}) != 0) throw new AssertionError();
        if (Main.getFirstOrZero(new int[]{42}) != 42) throw new AssertionError();
        System.out.println("PASS: Pragmatic Ch 07");
    }
}
