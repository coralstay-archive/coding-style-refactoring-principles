// ==============================================================================
// @file: Test.java
// @path: tracks/09_junit_in_action/14_ui_and_web_testing/01_page_object_pattern/Test.java
// @book: 《JUnit in Action 3판》(Cătălin Tudose 저, 제이펍)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        Main.LoginPageModel page = new Main.LoginPageModel();
        if (!page.submit("admin", "secret")) throw new AssertionError();
        if (page.submit("admin", "wrong")) throw new AssertionError();
        System.out.println("PASS: 14.1 Test");
    }
}
