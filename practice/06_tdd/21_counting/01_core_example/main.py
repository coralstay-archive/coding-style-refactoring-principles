# ==============================================================================
# @file: main.py
# @path: tracks/06_tdd/21_counting/01_core_example/main.py
# @book: 《테스트 주도 개발 (TDD)》(Kent Beck 저, 인사이트)
# ==============================================================================

# [TDD Ch 21] TestResult 객체
class TestResult:
    def __init__(self):
        self.runCount = 0

    def testStarted(self):
        self.runCount += 1

    def summary(self):
        return f"{self.runCount} run, 0 failed"

if __name__ == "__main__":
    r = TestResult()
    r.testStarted()
    print(f"[TDD Ch 21] 요약: {r.summary()}")
