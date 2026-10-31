// ==============================================================================
// @file: Main.java
// @path: tracks/09_junit_in_action/17_testing_spring_boot/01_spring_boot_test/Main.java
// @book: 《JUnit in Action 3판》(Cătălin Tudose 저, 제이펍)
// ==============================================================================

public class Main {
    public static class AppConfig {
        public boolean isAutoConfigured() { return true; }
    }
    public static void main(String[] args) {
        System.out.println("[JUnit in Action 17.1] 스프링 부트 자동 구성: " + new AppConfig().isAutoConfigured());
    }
}
