// ==============================================================================
// @file: Main.java
// @path: tracks/09_junit_in_action/11_database_layer_testing/01_in_memory_db/Main.java
// @book: 《JUnit in Action 3판》(Cătălin Tudose 저, 제이펍)
// ==============================================================================

import java.util.*;
public class Main {
    public static class DatabaseStub {
        private final Map<Integer, String> storage = new HashMap<>();
        public void insert(int id, String val) { storage.put(id, val); }
        public String find(int id) { return storage.get(id); }
    }
    public static void main(String[] args) {
        DatabaseStub db = new DatabaseStub();
        db.insert(1, "Product_A");
        System.out.println("[JUnit in Action 11.1] DB 조회: " + db.find(1));
    }
}
