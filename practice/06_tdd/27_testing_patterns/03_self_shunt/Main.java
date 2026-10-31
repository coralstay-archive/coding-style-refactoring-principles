// ==============================================================================
// @file: Main.java
// @path: tracks/06_tdd/27_testing_patterns/03_self_shunt/Main.java
// @book: 《테스트 주도 개발 (TDD)》(Kent Beck 저, 인사이트)
// ==============================================================================

public class Main {
    public interface AlertListener {
        void onAlert(String message);
    }
    public static class Sensor {
        private AlertListener listener;
        public Sensor(AlertListener l) { this.listener = l; }
        public void trigger(int value) {
            if (value > 100) listener.onAlert("OVERHEAT");
        }
    }
    public static void main(String[] args) {
        Sensor s = new Sensor(msg -> System.out.println("[Beck 27.3] Alert: " + msg));
        s.trigger(150);
    }
}
