// ==============================================================================
// @file: Main.java
// @path: tracks/06_tdd/27_testing_patterns/05_crash_dummy/Main.java
// @book: 《테스트 주도 개발 (TDD)》(Kent Beck 저, 인사이트)
// ==============================================================================

public class Main {
    public interface FileSystem {
        void write(String data) throws java.io.IOException;
    }
    public static class ReportGenerator {
        public boolean saveReport(FileSystem fs, String content) {
            try {
                fs.write(content);
                return true;
            } catch (java.io.IOException e) {
                return false;
            }
        }
    }
    public static void main(String[] args) {
        ReportGenerator gen = new ReportGenerator();
        System.out.println("[Beck 27.5] Ready");
    }
}
