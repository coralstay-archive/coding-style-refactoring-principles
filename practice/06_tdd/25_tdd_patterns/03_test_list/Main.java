// ==============================================================================
// @file: Main.java
// @path: tracks/06_tdd/25_tdd_patterns/03_test_list/Main.java
// @book: 《테스트 주도 개발 (TDD)》(Kent Beck 저, 인사이트)
// ==============================================================================

class StringCalculator {
    public static int add(String numbers) {
        if (numbers == null || numbers.isEmpty()) return 0;
        String[] tokens = numbers.split(",");
        int sum = 0;
        for (String t : tokens) {
            sum += Integer.parseInt(t.trim());
        }
        return sum;
    }

    public static void main(String[] args) {
        System.out.println("[Beck 25.3] 1+2 = " + add("1,2"));
    }
}
