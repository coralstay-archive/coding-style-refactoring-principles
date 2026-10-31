// ==============================================================================
// @file: Main.java
// @path: tracks/08_pragmatic_unit_testing/06_right_bicep/02_boundary_conditions/Main.java
// @book: 《자바와 JUnit을 활용한 실용주의 단위 테스트》(Jeff Langr 저, 길벗)
// ==============================================================================

public class Main {
    public static int getScoreGrade(int score) {
        if (score < 0 || score > 100) throw new IllegalArgumentException("Invalid score: " + score);
        if (score >= 90) return 1;
        if (score >= 80) return 2;
        return 3;
    }
    public static void main(String[] args) {
        System.out.println("[Langr 6.2] Grade for 90: " + getScoreGrade(90));
    }
}
