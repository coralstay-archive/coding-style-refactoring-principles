// ==============================================================================
// @file: Test.java
// @path: tracks/06_tdd/27_testing_patterns/05_crash_dummy/Test.java
// @book: 《테스트 주도 개발 (TDD)》(Kent Beck 저, 인사이트)
// ==============================================================================

public class Test {
    static class CrashingFileSystem implements Main.FileSystem {
        public void write(String data) throws java.io.IOException {
            throw new java.io.IOException("Disk Full Crash Simulation!");
        }
    }
    public static void main(String[] args) {
        Main.ReportGenerator gen = new Main.ReportGenerator();
        boolean result = gen.saveReport(new CrashingFileSystem(), "Sales Data");
        if (result != false) throw new AssertionError("Crash dummy was not handled!");
        System.out.println("PASS: 27.5 Crash Dummy");
    }
}
