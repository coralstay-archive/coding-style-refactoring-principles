// ==============================================================================
// @file: Test.java
// @path: tracks/09_junit_in_action/22_test_pyramid_strategy/02_component_testing/Test.java
// @book: 《JUnit in Action 3판》(Cătălin Tudose 저, 제이펍)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        Main.InMemoryUserStore store = new Main.InMemoryUserStore();
        Main.UserServiceComponent comp = new Main.UserServiceComponent(store);

        String res = comp.registerUser("1001", "Joshua");
        if (!"SUCCESS:Joshua".equals(res)) throw new AssertionError("Component registration failed");
        if (!"Joshua".equals(store.find("1001"))) throw new AssertionError("Store verification failed");

        System.out.println("PASS: 22.2 Component Testing Layer");
    }
}
