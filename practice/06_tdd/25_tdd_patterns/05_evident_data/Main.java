// ==============================================================================
// @file: Main.java
// @path: tracks/06_tdd/25_tdd_patterns/05_evident_data/Main.java
// @book: 《테스트 주도 개발 (TDD)》(Kent Beck 저, 인사이트)
// ==============================================================================

public class Main {
    public static int getSecondsInDays(int days) {
        return days * 24 * 60 * 60; // 매직 넘버 86400 대신 계산 의도 명시
    }
    public static void main(String[] args) {
        System.out.println("[Beck 25.7] Seconds in 2 days: " + getSecondsInDays(2));
    }
}
