// ==============================================================================
// @file: Main.java
// @path: tracks/06_tdd/27_testing_patterns/01_crash_dummy/Main.java
// @book: 《테스트 주도 개발 (TDD)》(Kent Beck 저, 인사이트)
// ==============================================================================

import java.io.IOException;

interface FileStorage {
    void write(String data) throws IOException;
}

class LogManager {
    private final FileStorage storage;

    public LogManager(FileStorage storage) {
        this.storage = storage;
    }

    public boolean logSafely(String message) {
        try {
            storage.write(message);
            return true;
        } catch (IOException e) {
            return false; // 예외 처리 복구 성공
        }
    }

    public static void main(String[] args) {
        System.out.println("[Beck 27.1] LogManager ready");
    }
}
