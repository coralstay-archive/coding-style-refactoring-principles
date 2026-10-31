// ==============================================================================
// @file: Test.java
// @path: tracks/06_tdd/27_testing_patterns/01_crash_dummy/Test.java
// @book: 《테스트 주도 개발 (TDD)》(Kent Beck 저, 인사이트)
// ==============================================================================

import java.io.IOException;

class CrashDummyStorage implements FileStorage {
    public void write(String data) throws IOException {
        throw new IOException("디스크 I/O 강제 실패 (Crash Dummy)");
    }
}

public class Test {
    public static void main(String[] args) {
        LogManager manager = new LogManager(new CrashDummyStorage());
        boolean success = manager.logSafely("Critical system log");
        assert !success : "I/O 예외 발생 시 안전하게 false를 반환해야 함";
        System.out.println("PASS: 27.1 Crash Dummy");
    }
}
