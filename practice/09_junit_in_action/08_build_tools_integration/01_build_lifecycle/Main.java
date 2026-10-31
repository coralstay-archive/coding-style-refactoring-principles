// ==============================================================================
// @file: Main.java
// @path: tracks/09_junit_in_action/08_build_tools_integration/01_build_lifecycle/Main.java
// @book: 《JUnit in Action 3판》(Cătălin Tudose 저, 제이펍)
// ==============================================================================

public class Main {
    public static String getPhase(String goal) {
        if ("test".equals(goal)) return "test";
        if ("package".equals(goal)) return "package";
        return "compile";
    }
    public static void main(String[] args) {
        System.out.println("[JUnit in Action 8.1] 빌드 페이즈: " + getPhase("test"));
    }
}
