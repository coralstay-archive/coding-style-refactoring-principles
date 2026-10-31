// ==============================================================================
// @file: Test.java
// @path: tracks/09_junit_in_action/16_testing_spring_applications/01_spring_context_test/Test.java
// @book: 《JUnit in Action 3판》(Cătălin Tudose 저, 제이펍)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        Main.BeanContainer bc = new Main.BeanContainer();
        if (!"Hello from Spring Bean".equals(bc.getGreeting())) throw new AssertionError();
        System.out.println("PASS: 16.1 Test");
    }
}
