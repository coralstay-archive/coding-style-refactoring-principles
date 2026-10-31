// ==============================================================================
// @file: Main.java
// @path: tracks/08_pragmatic_unit_testing/07_correct/correct_04_reference/Main.java
// @book: 《자바와 JUnit을 활용한 실용주의 단위 테스트》(Jeff Langr 저, 길벗)
// ==============================================================================

public class Main {
    public static class Account { public boolean isActive = true; }
    public static boolean canWithdraw(Account acc) { return acc != null && acc.isActive; }
    public static void main(String[] args) {
        System.out.println("[CORRECT: Reference] 출금 가능: " + canWithdraw(new Account()));
    }
}
