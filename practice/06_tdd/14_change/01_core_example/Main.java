// ==============================================================================
// @file: Main.java
// @path: tracks/06_tdd/14_change/01_core_example/Main.java
// @book: 《테스트 주도 개발 (TDD)》(Kent Beck 저, 인사이트)
// ==============================================================================

import java.util.*;
public class Main {
    public static class Bank {
        private final Map<String, Integer> rates = new HashMap<>();
        public void addRate(String from, String to, int rate) { rates.put(from + "-" + to, rate); }
        public int rate(String from, String to) {
            if (from.equals(to)) return 1;
            return rates.get(from + "-" + to);
        }
    }
    public static void main(String[] args) {
        Bank bank = new Bank();
        bank.addRate("CHF", "USD", 2);
        System.out.println("[TDD Ch 14] 2 CHF -> 1 USD (환율 2)");
    }
}
