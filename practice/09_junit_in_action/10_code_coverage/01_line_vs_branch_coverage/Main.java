// ==============================================================================
// @file: Main.java
// @path: tracks/09_junit_in_action/10_code_coverage/01_line_vs_branch_coverage/Main.java
// @book: 《JUnit in Action 3판》(Cătălin Tudose 저, 제이펍)
// ==============================================================================

public class Main {
    public static int sign(int x) {
        if (x > 0) return 1;
        if (x < 0) return -1;
        return 0;
    }
    public static void main(String[] args) {
        System.out.println("[JUnit in Action 10.1] sign(5): " + sign(5));
    }
}
