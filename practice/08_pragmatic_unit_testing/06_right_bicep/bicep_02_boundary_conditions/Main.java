// ==============================================================================
// @file: Main.java
// @path: tracks/08_pragmatic_unit_testing/06_right_bicep/bicep_02_boundary_conditions/Main.java
// @book: 《자바와 JUnit을 활용한 실용주의 단위 테스트》(Jeff Langr 저, 길벗)
// ==============================================================================

public class Main {
    public static int clamp(int val, int min, int max) {
        if (val < min) return min;
        if (val > max) return max;
        return val;
    }
    public static void main(String[] args) {
        System.out.println("[Right-BICEP: Boundary] clamp(150, 0, 100) = " + clamp(150, 0, 100));
    }
}
