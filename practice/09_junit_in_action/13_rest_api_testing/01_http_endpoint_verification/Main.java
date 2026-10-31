// ==============================================================================
// @file: Main.java
// @path: tracks/09_junit_in_action/13_rest_api_testing/01_http_endpoint_verification/Main.java
// @book: 《JUnit in Action 3판》(Cătălin Tudose 저, 제이펍)
// ==============================================================================

public class Main {
    public static int handleEndpoint(String method, String path) {
        if ("GET".equals(method) && "/api/status".equals(path)) return 200;
        return 404;
    }
    public static void main(String[] args) {
        System.out.println("[JUnit in Action 13.1] HTTP 상태: " + handleEndpoint("GET", "/api/status"));
    }
}
