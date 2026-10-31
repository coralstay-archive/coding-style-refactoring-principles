// ==============================================================================
// @file: Main.java
// @path: tracks/06_tdd/27_testing_patterns/04_log_string/Main.java
// @book: 《테스트 주도 개발 (TDD)》(Kent Beck 저, 인사이트)
// ==============================================================================

public class Main {
    public static class TemplatePipeline {
        protected StringBuilder log = new StringBuilder();
        public void stepA() { log.append("A "); }
        public void stepB() { log.append("B "); }
        public void execute() { stepA(); stepB(); }
        public String getLog() { return log.toString().trim(); }
    }
    public static void main(String[] args) {
        TemplatePipeline p = new TemplatePipeline();
        p.execute();
        System.out.println("[Beck 27.4] Log: " + p.getLog());
    }
}
