// ==============================================================================
// @file: Test.java
// @path: tracks/08_pragmatic_unit_testing/14_testing_on_a_team/01_testing_culture_and_ci/Test.java
// @book: 《자바와 JUnit을 활용한 실용주의 단위 테스트》(Jeff Langr 저, 길벗)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        if (!Main.checkBuildGate(true, 90)) throw new AssertionError();
        if (Main.checkBuildGate(true, 75)) throw new AssertionError();
        System.out.println("PASS: 14.1 Test");
    }
}
