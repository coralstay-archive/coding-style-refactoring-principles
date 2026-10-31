# ==============================================================================
# @file: main.py
# @path: tracks/06_tdd/22_dealing_with_failure/01_core_example/main.py
# @book: 《테스트 주도 개발 (TDD)》(Kent Beck 저, 인사이트)
# ==============================================================================

# [TDD Ch 22] 실패 집계
class TestResult:
    def __init__(self):
        self.runCount = 0
        self.errorCount = 0

    def testStarted(self): self.runCount += 1
    def testFailed(self): self.errorCount += 1
    def summary(self): return f"{self.runCount} run, {self.errorCount} failed"

if __name__ == "__main__":
    r = TestResult()
    r.testStarted()
    r.testFailed()
    print(f"[TDD Ch 22] 실패 요약: {r.summary()}")
