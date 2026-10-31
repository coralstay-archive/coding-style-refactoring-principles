// ==============================================================================
// @file: Test.java
// @path: tracks/09_junit_in_action/10_code_coverage/01_line_vs_branch_coverage/Test.java
// @book: 《JUnit in Action 3판》(Cătălin Tudose 저, 제이펍)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        // 모든 분기 커버
        if (Main.sign(10) != 1) throw new AssertionError();
        if (Main.sign(-5) != -1) throw new AssertionError();
        if (Main.sign(0) != 0) throw new AssertionError();
        System.out.println("PASS: 10.1 Test");
    }
}
