// ==============================================================================
// @file: Main.java
// @path: tracks/08_pragmatic_unit_testing/07_correct/03_ordering_properties/Main.java
// @book: 《자바와 JUnit을 활용한 실용주의 단위 테스트》(Jeff Langr 저, 길벗)
// ==============================================================================

import java.util.Collections;
import java.util.List;

public class Main {
    public static boolean isMonotonicallyIncreasing(List<Integer> list) {
        if (list == null || list.size() <= 1) return true;
        for (int i = 0; i < list.size() - 1; i++) {
            if (list.get(i) > list.get(i + 1)) return false;
        }
        return true;
    }
    public static void main(String[] args) {
        System.out.println("[Langr 7.2] Ready");
    }
}
