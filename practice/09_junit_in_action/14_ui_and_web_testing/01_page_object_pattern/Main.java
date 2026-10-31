// ==============================================================================
// @file: Main.java
// @path: tracks/09_junit_in_action/14_ui_and_web_testing/01_page_object_pattern/Main.java
// @book: 《JUnit in Action 3판》(Cătălin Tudose 저, 제이펍)
// ==============================================================================

public class Main {
    public static class LoginPageModel {
        public boolean submit(String user, String pass) {
            return "admin".equals(user) && "secret".equals(pass);
        }
    }
    public static void main(String[] args) {
        LoginPageModel page = new LoginPageModel();
        System.out.println("[JUnit in Action 14.1] 페이지 객체 로그인: " + page.submit("admin", "secret"));
    }
}
