// ==============================================================================
// @file: Main.java
// @path: tracks/09_junit_in_action/07_extension_model/01_extension_model/Main.java
// @book: 《JUnit in Action 3판》(Cătălin Tudose 저, 제이펍)
// ==============================================================================

public class Main {
    public interface CustomExtension { void beforeTest(); }
    public static void main(String[] args) {
        System.out.println("[JUnit in Action 7.1] Extension Model 인터셉터 준비 완료");
    }
}
