// ==============================================================================
// @file: Test.java
// @path: tracks/09_junit_in_action/18_testing_rest_apis/01_rest_api_contract/Test.java
// @book: 《JUnit in Action 3판》(Cătălin Tudose 저, 제이펍)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        Main.ApiResponse res = new Main.ApiResponse();
        if (res.statusCode != 200 || !res.body.contains("OK")) throw new AssertionError();
        System.out.println("PASS: 18.1 Test");
    }
}
