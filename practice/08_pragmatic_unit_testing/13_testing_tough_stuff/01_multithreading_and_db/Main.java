// ==============================================================================
// @file: Main.java
// @path: tracks/08_pragmatic_unit_testing/13_testing_tough_stuff/01_multithreading_and_db/Main.java
// @book: 《자바와 JUnit을 활용한 실용주의 단위 테스트》(Jeff Langr 저, 길벗)
// ==============================================================================

import java.util.concurrent.atomic.AtomicInteger;
public class Main {
    public static class ThreadSafeCounter {
        private final AtomicInteger count = new AtomicInteger(0);
        public void increment() { count.incrementAndGet(); }
        public int get() { return count.get(); }
    }
    public static void main(String[] args) {
        ThreadSafeCounter c = new ThreadSafeCounter();
        c.increment();
        System.out.println("[Pragmatic 13.1] 스레드 안전 카운터: " + c.get());
    }
}
