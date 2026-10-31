// ==============================================================================
// @file: Main.java
// @path: tracks/06_tdd/28_green_bar_patterns/01_triangulation_rule/Main.java
// @book: 《테스트 주도 개발 (TDD)》(Kent Beck 저, 인사이트)
// ==============================================================================

class MaxFinder {
    public static int max(int a, int b) {
        return (a > b) ? a : b;
    }

    public static void main(String[] args) {
        System.out.println("[Beck 28.1] Max: " + max(10, 20));
    }
}
