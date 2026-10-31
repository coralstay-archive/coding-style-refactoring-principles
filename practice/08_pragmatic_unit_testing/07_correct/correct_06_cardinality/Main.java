// ==============================================================================
// @file: Main.java
// @path: tracks/08_pragmatic_unit_testing/07_correct/correct_06_cardinality/Main.java
// @book: 《자바와 JUnit을 활용한 실용주의 단위 테스트》(Jeff Langr 저, 길벗)
// ==============================================================================

import java.util.*;
public class Main {
    public static String describeCount(List<?> list) {
        if (list == null || list.isEmpty()) return "ZERO";
        if (list.size() == 1) return "ONE";
        return "MANY";
    }
    public static void main(String[] args) {
        System.out.println("[CORRECT: Cardinality] 기수: " + describeCount(Collections.singletonList("A")));
    }
}
