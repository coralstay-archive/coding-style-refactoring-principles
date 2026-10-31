// ==============================================================================
// @file: Main.java
// @path: tracks/09_junit_in_action/16_testing_spring_applications/01_spring_context_test/Main.java
// @book: 《JUnit in Action 3판》(Cătălin Tudose 저, 제이펍)
// ==============================================================================

public class Main {
    public static class BeanContainer {
        public String getGreeting() { return "Hello from Spring Bean"; }
    }
    public static void main(String[] args) {
        System.out.println("[JUnit in Action 16.1] " + new BeanContainer().getGreeting());
    }
}
