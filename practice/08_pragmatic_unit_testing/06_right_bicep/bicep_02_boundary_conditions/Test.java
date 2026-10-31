// ==============================================================================
// @file: Test.java
// @path: tracks/08_pragmatic_unit_testing/06_right_bicep/bicep_02_boundary_conditions/Test.java
// @book: 《자바와 JUnit을 활용한 실용주의 단위 테스트》(Jeff Langr 저, 길벗)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        if (Main.clamp(-5, 0, 10) != 0) throw new AssertionError();
        if (Main.clamp(15, 0, 10) != 10) throw new AssertionError();
        System.out.println("PASS: Boundary Test");
    }
}
