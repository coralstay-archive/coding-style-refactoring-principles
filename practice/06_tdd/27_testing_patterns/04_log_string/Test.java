// ==============================================================================
// @file: Test.java
// @path: tracks/06_tdd/27_testing_patterns/04_log_string/Test.java
// @book: 《테스트 주도 개발 (TDD)》(Kent Beck 저, 인사이트)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        Main.TemplatePipeline p = new Main.TemplatePipeline();
        p.execute();
        if (!"A B".equals(p.getLog())) {
            throw new AssertionError("Expected 'A B' but got: " + p.getLog());
        }
        System.out.println("PASS: 27.4 Log String");
    }
}
