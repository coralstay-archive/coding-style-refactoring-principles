# ==============================================================================
# @file: main.py
# @path: tracks/06_tdd/30_design_patterns/03_null_object/main.py
# @book: 《테스트 주도 개발 (TDD)》(Kent Beck 저, 인사이트)
# ==============================================================================

class Logger:
    def log(self, msg: str) -> None:
        pass

class ConsoleLogger(Logger):
    def log(self, msg: str) -> None:
        print(f"[Console] {msg}")

class NullLogger(Logger):
    def log(self, msg: str) -> None:
        pass  # No-op

def get_logger(debug_mode: bool) -> Logger:
    return ConsoleLogger() if debug_mode else NullLogger()

if __name__ == "__main__":
    logger = get_logger(False)
    logger.log("Silent Log")
