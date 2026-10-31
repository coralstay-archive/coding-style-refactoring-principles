// ==============================================================================
// @file: Test.java
// @path: tracks/08_pragmatic_unit_testing/09_design_for_testability/01_dip_and_low_coupling/Test.java
// @book: 《자바와 JUnit을 활용한 실용주의 단위 테스트》(Jeff Langr 저, 길벗)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        Main.Clock fakeClock = () -> 1000L;
        Main.Logger logger = new Main.Logger(fakeClock);
        String out = logger.log("Test");
        if (!"[1000] Test".equals(out)) throw new AssertionError("Expected [1000] Test but got " + out);
        System.out.println("PASS: 9.1 Test");
    }
}
