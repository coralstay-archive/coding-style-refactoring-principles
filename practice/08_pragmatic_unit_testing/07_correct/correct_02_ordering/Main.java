// ==============================================================================
// @file: Main.java
// @path: tracks/08_pragmatic_unit_testing/07_correct/correct_02_ordering/Main.java
// @book: 《자바와 JUnit을 활용한 실용주의 단위 테스트》(Jeff Langr 저, 길벗)
// ==============================================================================

import java.util.*;
public class Main {
    public static boolean isSortedAsc(List<Integer> list) {
        for (int i = 1; i < list.size(); i++) {
            if (list.get(i - 1) > list.get(i)) return false;
        }
        return true;
    }
    public static void main(String[] args) {
        System.out.println("[CORRECT: Ordering] 정렬 검사: " + isSortedAsc(Arrays.asList(1, 2, 3)));
    }
}
