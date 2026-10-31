// ==============================================================================
// @file: test.cpp
// @path: practices/04_legacy_and_patterns/02_sprout_method_safe_addition/test.cpp
// @book: 《소프트웨어 공학 4대 도메인 실전 카타 뱅크》(4-File Formula)
// ==============================================================================

// [GoogleTest 단위 테스트]

#include <gtest/gtest.h>

// 발아 메서드(Sprout Method)에 대해 완벽한 단위 테스트 수행
TEST(SproutMethodTest, FilterOutDuplicatesPreservingOrder) {
    std::vector<std::string> raw = {"TX1", "TX2", "TX1", "TX3", "TX2"};
    std::vector<std::string> expected = {"TX1", "TX2", "TX3"};

    auto result = TransactionBatchProcessor::filterUniqueEntries(raw);
    EXPECT_EQ(result, expected);
}

TEST(SproutMethodTest, HandlesEmptyListGracefully) {
    std::vector<std::string> empty;
    auto result = TransactionBatchProcessor::filterUniqueEntries(empty);
    EXPECT_TRUE(result.empty());
}
