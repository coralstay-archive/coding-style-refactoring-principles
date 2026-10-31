// ==============================================================================
// @file: Test.java
// @path: tracks/06_tdd/25_tdd_patterns/03_test_list/Test.java
// @book: 《테스트 주도 개발 (TDD)》(Kent Beck 저, 인사이트)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        // Test List 1: 빈 문자열은 0 반환
        assert StringCalculator.add("") == 0;
        // Test List 2: 단일 숫자는 그 숫자 반환
        assert StringCalculator.add("5") == 5;
        // Test List 3: 쉼표 구분 숫자들의 합 반환
        assert StringCalculator.add("1,2,3") == 6;

        System.out.println("PASS: 25.3 Test List");
    }
}
