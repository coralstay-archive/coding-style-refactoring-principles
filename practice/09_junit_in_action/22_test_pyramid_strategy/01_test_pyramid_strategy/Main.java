// ==============================================================================
// @file: Main.java
// @path: tracks/09_junit_in_action/22_test_pyramid_strategy/01_test_pyramid_strategy/Main.java
// @book: 《JUnit in Action 3판》(Cătălin Tudose 저, 제이펍)
// ==============================================================================

public class Main {
    public static class TestPyramid {
        private final int unitTests;
        private final int integrationTests;
        private final int systemTests;
        public TestPyramid(int unitTests, int integrationTests, int systemTests) {
            this.unitTests = unitTests;
            this.integrationTests = integrationTests;
            this.systemTests = systemTests;
        }
        public boolean isHealthy() {
            return unitTests > integrationTests && integrationTests > systemTests && systemTests > 0;
        }
        public double getUnitTestRatio() {
            int total = unitTests + integrationTests + systemTests;
            return total == 0 ? 0.0 : (double) unitTests / total;
        }
    }
    public static void main(String[] args) {
        TestPyramid tp = new TestPyramid(100, 20, 5);
        System.out.println("[JUnit in Action 22.1] 테스트 피라미드 건전성: " + tp.isHealthy() + ", 단위테스트 비율: " + (int)(tp.getUnitTestRatio() * 100) + "%");
    }
}
