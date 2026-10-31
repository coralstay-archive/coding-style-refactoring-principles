// ==============================================================================
// @file: Test.java
// @path: tracks/09_junit_in_action/15_cloud_native_testing/01_container_testing/Test.java
// @book: 《JUnit in Action 3판》(Cătălin Tudose 저, 제이펍)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        if (!Main.ContainerLifecycle.isHealthy(200)) throw new AssertionError();
        System.out.println("PASS: 15.1 Test");
    }
}
