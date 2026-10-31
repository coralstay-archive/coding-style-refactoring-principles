// ==============================================================================
// @file: Main.java
// @path: tracks/09_junit_in_action/13_rest_api_testing/01_core_example/Main.java
// @book: 《JUnit in Action 3판》(Cătălin Tudose 저, 제이펍)
// ==============================================================================

public class Main {
    public static int handleRequest(String path) {
        if ("/api/v1/health".equals(path)) return 200;
        return 404;
    }
    public static void main(String[] args) {
        System.out.println("[JUnit in Action Ch 13] 헬스체크: " + handleRequest("/api/v1/health"));
    }
}
