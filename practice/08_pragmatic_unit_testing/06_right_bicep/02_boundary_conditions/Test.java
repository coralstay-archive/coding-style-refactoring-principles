// ==============================================================================
// @file: Test.java
// @path: tracks/08_pragmatic_unit_testing/06_right_bicep/02_boundary_conditions/Test.java
// @book: 《자바와 JUnit을 활용한 실용주의 단위 테스트》(Jeff Langr 저, 길벗)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        // 경계 조건(Boundary) 철저 검증: 0, 89, 90, 100
        if (Main.getScoreGrade(90) != 1) throw new AssertionError("Boundary 90 failed");
        if (Main.getScoreGrade(89) != 2) throw new AssertionError("Boundary 89 failed");
        if (Main.getScoreGrade(100) != 1) throw new AssertionError("Boundary 100 failed");
        if (Main.getScoreGrade(0) != 3) throw new AssertionError("Boundary 0 failed");

        try {
            Main.getScoreGrade(101);
            throw new AssertionError("Upper bound not protected");
        } catch (IllegalArgumentException expected) {}

        try {
            Main.getScoreGrade(-1);
            throw new AssertionError("Lower bound not protected");
        } catch (IllegalArgumentException expected) {}

        System.out.println("PASS: 6.2 Boundary Conditions");
    }
}
