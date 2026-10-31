// ==============================================================================
// @file: Test.java
// @path: tracks/06_tdd/28_green_bar_patterns/01_triangulation_rule/Test.java
// @book: 《테스트 주도 개발 (TDD)》(Kent Beck 저, 인사이트)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        // 첫 번째 삼각측량 포인트 (a가 더 큰 경우)
        assert MaxFinder.max(5, 3) == 5;
        // 두 번째 삼각측량 포인트 (b가 더 큰 경우) -> 단순 상수 반환 불가능 유도
        assert MaxFinder.max(2, 8) == 8;
        // 세 번째 삼각측량 포인트 (동일한 경우)
        assert MaxFinder.max(4, 4) == 4;

        System.out.println("PASS: 28.1 Triangulation");
    }
}
