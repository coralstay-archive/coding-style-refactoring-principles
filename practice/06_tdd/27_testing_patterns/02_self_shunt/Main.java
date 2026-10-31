// ==============================================================================
// @file: Main.java
// @path: tracks/06_tdd/27_testing_patterns/02_self_shunt/Main.java
// @book: 《테스트 주도 개발 (TDD)》(Kent Beck 저, 인사이트)
// ==============================================================================

interface AlertListener {
    void onAlert(String alertMessage);
}

class TemperatureSensor {
    private AlertListener listener;

    public void setAlertListener(AlertListener listener) {
        this.listener = listener;
    }

    public void checkTemperature(int temp) {
        if (temp > 100 && listener != null) {
            listener.onAlert("OVERHEAT: " + temp);
        }
    }
}

public class Main {
    public static void main(String[] args) {
        System.out.println("[Beck 27.2] Sensor Ready");
    }
}
