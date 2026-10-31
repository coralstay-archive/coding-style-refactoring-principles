// ==============================================================================
// @file: Main.java
// @path: tracks/09_junit_in_action/22_test_pyramid_strategy/02_component_testing/Main.java
// @book: 《JUnit in Action 3판》(Cătălin Tudose 저, 제이펍)
// ==============================================================================

import java.util.HashMap;
import java.util.Map;

public class Main {
    public static class InMemoryUserStore {
        private Map<String, String> db = new HashMap<>();
        public void save(String id, String name) { db.put(id, name); }
        public String find(String id) { return db.get(id); }
    }

    public static class UserServiceComponent {
        private InMemoryUserStore store;
        public UserServiceComponent(InMemoryUserStore s) { this.store = s; }
        public String registerUser(String id, String name) {
            if (id == null || name == null) return "FAIL";
            store.save(id, name);
            return "SUCCESS:" + store.find(id);
        }
    }

    public static void main(String[] args) {
        UserServiceComponent comp = new UserServiceComponent(new InMemoryUserStore());
        System.out.println("[Tudose 22.2] " + comp.registerUser("user1", "Martin"));
    }
}
