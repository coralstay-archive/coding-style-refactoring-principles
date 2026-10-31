// ==============================================================================
// @file: Main.java
// @path: tracks/09_junit_in_action/18_testing_rest_apis/01_rest_api_contract/Main.java
// @book: 《JUnit in Action 3판》(Cătălin Tudose 저, 제이펍)
// ==============================================================================

public class Main {
    public static class ApiResponse {
        public int statusCode = 200;
        public String body = "{\"status\": \"OK\"}";
    }
    public static void main(String[] args) {
        System.out.println("[JUnit in Action 18.1] REST 응답 코드: " + new ApiResponse().statusCode);
    }
}
