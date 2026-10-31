// ==============================================================================
// @file: Test.java
// @path: tracks/09_junit_in_action/22_test_pyramid_strategy/01_test_pyramid_strategy/Test.java
// @book: 《JUnit in Action 3판》(Cătălin Tudose 저, 제이펍)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        Main.TestPyramid tp = new Main.TestPyramid(100, 20, 5);
        if (!tp.isHealthy()) throw new AssertionError("피라미드 건전성 검증 실패");
        if (tp.getUnitTestRatio() < 0.70) throw new AssertionError("단위 테스트 비율 70% 미달");
        System.out.println("PASS: 22.1 Test");
    }
}
