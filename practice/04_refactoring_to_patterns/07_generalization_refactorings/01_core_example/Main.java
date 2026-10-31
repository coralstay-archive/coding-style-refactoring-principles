// ==============================================================================
// @file: Main.java
// @path: tracks/04_refactoring_to_patterns/07_generalization_refactorings/01_core_example/Main.java
// @book: 《패턴을 활용한 리팩터링》(Joshua Kerievsky 저, 인사이트)
// ==============================================================================

// [Refactoring to Patterns Ch 7] Adapter 패턴
public class Main {
    public interface ModernLogger {
        void logInfo(String msg);
    }

    public static class LegacyLogger {
        public void writeRaw(String s) { System.out.println("[LEGACY] " + s); }
    }

    public static class LoggerAdapter implements ModernLogger {
        private final LegacyLogger legacy;
        public LoggerAdapter(LegacyLogger legacy) { this.legacy = legacy; }
        public void logInfo(String msg) { legacy.writeRaw(msg); }
    }

    public static void main(String[] args) {
        ModernLogger logger = new LoggerAdapter(new LegacyLogger());
        logger.logInfo("어댑터를 통한 로깅");
    }
}
