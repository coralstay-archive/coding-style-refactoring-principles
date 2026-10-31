// ==============================================================================
// @file: Test.java
// @path: tracks/09_junit_in_action/13_rest_api_testing/01_http_endpoint_verification/Test.java
// @book: 《JUnit in Action 3판》(Cătălin Tudose 저, 제이펍)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        if (Main.handleEndpoint("GET", "/api/status") != 200) throw new AssertionError();
        if (Main.handleEndpoint("POST", "/api/status") != 404) throw new AssertionError();
        System.out.println("PASS: 13.1 Test");
    }
}
