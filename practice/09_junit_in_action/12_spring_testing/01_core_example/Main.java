// ==============================================================================
// @file: Main.java
// @path: tracks/09_junit_in_action/12_spring_testing/01_core_example/Main.java
// @book: 《JUnit in Action 3판》(Cătălin Tudose 저, 제이펍)
// ==============================================================================

public class Main {
    public static class AppConfig {
        public String appName() { return "OrderSystem"; }
    }
    public static void main(String[] args) {
        System.out.println("[JUnit in Action Ch 12] 앱 이름: " + new AppConfig().appName());
    }
}
