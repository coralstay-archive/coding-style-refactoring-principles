// ==============================================================================
// @file: Main.java
// @path: tracks/09_junit_in_action/02_core_annotations/01_lifecycle_hooks/Main.java
// @book: 《JUnit in Action 3판》(Cătălin Tudose 저, 제이펍)
// ==============================================================================

import java.util.ArrayList;
import java.util.List;

class TestExecutionContext {
    public final List<String> logs = new ArrayList<>();

    public void before() { logs.add("BEFORE"); }
    public void after() { logs.add("AFTER"); }
    public void runTest(String testName) { logs.add("RUN:" + testName); }

    public static void main(String[] args) {
        System.out.println("[Tudose 2.1] Lifecycle Ready");
    }
}
