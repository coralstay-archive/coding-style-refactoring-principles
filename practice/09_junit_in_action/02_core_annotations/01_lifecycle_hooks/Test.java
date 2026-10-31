// ==============================================================================
// @file: Test.java
// @path: tracks/09_junit_in_action/02_core_annotations/01_lifecycle_hooks/Test.java
// @book: 《JUnit in Action 3판》(Cătălin Tudose 저, 제이펍)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        TestExecutionContext ctx = new TestExecutionContext();
        ctx.before();
        ctx.runTest("test_calculation");
        ctx.after();

        assert ctx.logs.size() == 3;
        assert ctx.logs.get(0).equals("BEFORE");
        assert ctx.logs.get(1).equals("RUN:test_calculation");
        assert ctx.logs.get(2).equals("AFTER");
        System.out.println("PASS: 2.1 Lifecycle Hooks");
    }
}
