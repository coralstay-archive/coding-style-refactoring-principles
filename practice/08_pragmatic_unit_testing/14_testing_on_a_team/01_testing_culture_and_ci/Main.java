// ==============================================================================
// @file: Main.java
// @path: tracks/08_pragmatic_unit_testing/14_testing_on_a_team/01_testing_culture_and_ci/Main.java
// @book: 《자바와 JUnit을 활용한 실용주의 단위 테스트》(Jeff Langr 저, 길벗)
// ==============================================================================

public class Main {
    public static boolean checkBuildGate(boolean testsPassed, int codeCoveragePercent) {
        return testsPassed && codeCoveragePercent >= 80;
    }
    public static void main(String[] args) {
        System.out.println("[Pragmatic 14.1] 빌드 게이트 통과: " + checkBuildGate(true, 85));
    }
}
