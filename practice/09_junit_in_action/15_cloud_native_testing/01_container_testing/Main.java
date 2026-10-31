// ==============================================================================
// @file: Main.java
// @path: tracks/09_junit_in_action/15_cloud_native_testing/01_container_testing/Main.java
// @book: 《JUnit in Action 3판》(Cătălin Tudose 저, 제이펍)
// ==============================================================================

public class Main {
    public static class ContainerLifecycle {
        public static boolean isHealthy(int status) { return status == 200; }
    }
    public static void main(String[] args) {
        System.out.println("[JUnit in Action 15.1] 컨테이너 헬스체크: " + ContainerLifecycle.isHealthy(200));
    }
}
