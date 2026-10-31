# ==============================================================================
# @file: test.py
# @path: tracks/06_tdd/30_design_patterns/03_null_object/test.py
# @book: 《테스트 주도 개발 (TDD)》(Kent Beck 저, 인사이트)
# ==============================================================================

from main import get_logger, NullLogger, ConsoleLogger

logger = get_logger(False)
assert isinstance(logger, NullLogger)
logger.log("This will never crash or print")

logger2 = get_logger(True)
assert isinstance(logger2, ConsoleLogger)

print("PASS: 30.3 Null Object Pattern")
