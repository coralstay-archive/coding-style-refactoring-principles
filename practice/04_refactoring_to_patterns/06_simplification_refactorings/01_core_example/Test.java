// ==============================================================================
// @file: Test.java
// @path: tracks/04_refactoring_to_patterns/06_simplification_refactorings/01_core_example/Test.java
// @book: 《패턴을 활용한 리팩터링》(Joshua Kerievsky 저, 인사이트)
// ==============================================================================

public class Test {
    public static void main(String[] args) {
        Main.PaymentStrategy s = new Main.CreditCardStrategy();
        if (s.calculateFee(100.0) != 3.0) throw new AssertionError();
        System.out.println("PASS: Ch 06 Test");
    }
}
