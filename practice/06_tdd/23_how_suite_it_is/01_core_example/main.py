# ==============================================================================
# @file: main.py
# @path: tracks/06_tdd/23_how_suite_it_is/01_core_example/main.py
# @book: 《테스트 주도 개발 (TDD)》(Kent Beck 저, 인사이트)
# ==============================================================================

# [TDD Ch 23] TestSuite Composite
class TestSuite:
    def __init__(self):
        self.tests = []

    def add(self, test):
        self.tests.append(test)

    def count(self):
        return len(self.tests)

if __name__ == "__main__":
    suite = TestSuite()
    suite.add("Test1")
    suite.add("Test2")
    print(f"[TDD Ch 23] 스위트 테스트 개수: {suite.count()}")
