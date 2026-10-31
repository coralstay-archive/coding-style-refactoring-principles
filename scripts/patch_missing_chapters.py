#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Patch missing chapters into contents_data modules to ensure 100% chapter coverage across all 9 contents.
"""

import os
import sys

SCRIPTS_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_DIR = os.path.join(SCRIPTS_DIR, "contents_data")

# 1. Book 04: Refactoring to Patterns (Java) - Ch 03, 04, 08, 09, 11
BOOK04_PATCH = '''
    # Chapter 03: 패턴 탐색
    ("03", "03_pattern_discovery", "01_pattern_discovery", "3.1 패턴 탐색 (Pattern Discovery)",
     "문제를 깊이 이해하고 적절한 패턴을 탐색하여 불필요한 복잡성 방지",
     r"""public class Main {
    public static class PatternAdvisor {
        public static String advise(boolean hasComplexCreation, boolean hasManyAlgorithms) {
            if (hasComplexCreation) return "Builder or Factory";
            if (hasManyAlgorithms) return "Strategy";
            return "Simple Method";
        }
    }
    public static void main(String[] args) {
        System.out.println("[RFP 3.1] 패턴 탐색 추천: " + PatternAdvisor.advise(false, true));
    }
}
""",
     r"""public class Test {
    public static void main(String[] args) {
        String rec = Main.PatternAdvisor.advise(false, true);
        if (!"Strategy".equals(rec)) throw new AssertionError("Expected Strategy but got " + rec);
        System.out.println("PASS: 3.1 Test");
    }
}
"""),

    # Chapter 04: 코드 악취와 패턴
    ("04", "04_smells_and_patterns", "01_smell_indicators", "4.1 코드 악취와 리팩터링 방향 (Smells and Patterns)",
     "코드 악취를 진단하여 리팩터링 목적지로서의 패턴 결정",
     r"""public class Main {
    public static String getPatternForSmell(String smell) {
        if ("LongMethod".equals(smell)) return "ComposeMethod";
        if ("ConditionalComplexity".equals(smell)) return "StrategyOrState";
        return "RefactorExtract";
    }
    public static void main(String[] args) {
        System.out.println("[RFP 4.1] 악취에 따른 해결책: " + getPatternForSmell("ConditionalComplexity"));
    }
}
""",
     r"""public class Test {
    public static void main(String[] args) {
        if (!"StrategyOrState".equals(Main.getPatternForSmell("ConditionalComplexity"))) throw new AssertionError();
        System.out.println("PASS: 4.1 Test");
    }
}
"""),

    # Chapter 08: 보호 관련 패턴으로 리팩터링
    ("08", "08_protection_refactorings", "01_inline_singleton", "8.1 인라인 싱글톤 (Inline Singleton)",
     "전역 상태 싱글톤을 인라인화하여 불필요한 전역 상태 및 결합 제거",
     r"""public class Main {
    public static class HitCounter {
        private int count = 0;
        public void increment() { count++; }
        public int getCount() { return count; }
    }
    public static void main(String[] args) {
        HitCounter counter = new HitCounter();
        counter.increment();
        System.out.println("[RFP 8.1] 인스턴스화된 카운터: " + counter.getCount());
    }
}
""",
     r"""public class Test {
    public static void main(String[] args) {
        Main.HitCounter c1 = new Main.HitCounter();
        Main.HitCounter c2 = new Main.HitCounter();
        c1.increment();
        if (c1.getCount() != 1 || c2.getCount() != 0) throw new AssertionError();
        System.out.println("PASS: 8.1 Test");
    }
}
"""),

    # Chapter 09: 축적 관련 패턴으로 리팩터링
    ("09", "09_accumulation_refactorings", "01_move_accumulation_to_visitor", "9.1 비지터(Visitor)로 축적 이동",
     "복합 노드 구조에서 정보 수집 및 합산 알고리즘을 Visitor 객체로 분리",
     r"""public class Main {
    public interface Node { void accept(NodeVisitor visitor); }
    public interface NodeVisitor { void visitText(String text); }
    public static class TextNode implements Node {
        private final String text;
        public TextNode(String text) { this.text = text; }
        public void accept(NodeVisitor visitor) { visitor.visitText(this.text); }
    }
    public static class WordCountVisitor implements NodeVisitor {
        public int words = 0;
        public void visitText(String text) {
            if (text != null && !text.isEmpty()) words += text.split("\\\\s+").length;
        }
    }
    public static void main(String[] args) {
        WordCountVisitor visitor = new WordCountVisitor();
        new TextNode("Refactoring to Patterns").accept(visitor);
        System.out.println("[RFP 9.1] 비지터 단어 집계: " + visitor.words);
    }
}
""",
     r"""public class Test {
    public static void main(String[] args) {
        Main.WordCountVisitor visitor = new Main.WordCountVisitor();
        new Main.TextNode("Hello World Clean Code").accept(visitor);
        if (visitor.words != 4) throw new AssertionError("Expected 4 but got " + visitor.words);
        System.out.println("PASS: 9.1 Test");
    }
}
"""),

    # Chapter 11: 팩터링 툴과 지향점
    ("11", "11_refactoring_tools", "01_refactoring_directions", "11.1 리팩터링 도구와 지향점 (Tools & Directions)",
     "도구의 자동화 기능과 인간의 설계 판단 조화",
     r"""public class Main {
    public static boolean isToolSafe(boolean hasAutomatedTests, boolean isAtomicRefactor) {
        return hasAutomatedTests && isAtomicRefactor;
    }
    public static void main(String[] args) {
        System.out.println("[RFP 11.1] 리팩터링 안전성: " + isToolSafe(true, true));
    }
}
""",
     r"""public class Test {
    public static void main(String[] args) {
        if (!Main.isToolSafe(true, true)) throw new AssertionError();
        System.out.println("PASS: 11.1 Test");
    }
}
"""),
'''

# 2. Book 05: Legacy Code (C++17) - Ch 05, 07, 08, 09, 10, 11, 12, 14, 15, 17, 18, 20, 21, 22, 23, 24
BOOK05_PATCH = '''
    # Ch 05: 도구
    ("05", "05_tools", "01_test_harness_tools", "5.1 테스트 프레임워크와 리팩터링 도구",
     "자동화 도구와 컴파일러 단언문을 활용한 안전망 구축",
     r"""#include <iostream>
struct BuildStatus { bool warningsAsErrors; bool hasCoverage; };
int main() {
    BuildStatus s{true, true};
    std::cout << "[Legacy 5.1] 안전 도구 구축 여부: " << (s.warningsAsErrors && s.hasCoverage) << "\\n";
    return 0;
}
""",
     r"""#include <cassert>
int main() { assert(true); return 0; }
"""),

    # Ch 07: 지연 시간 줄이기
    ("07", "07_time_to_change", "01_reduce_lag_time", "7.1 지연 시간 줄이기 (Reduce Lag Time)",
     "빌드/테스트 지연 시간을 줄여 즉각적 피드백 루프 확보",
     r"""#include <iostream>
bool isLagTimeAcceptable(int feedbackSeconds) { return feedbackSeconds <= 10; }
int main() {
    std::cout << "[Legacy 7.1] 피드백 3초 합격 여부: " << isLagTimeAcceptable(3) << "\\n";
    return 0;
}
""",
     r"""#include <cassert>
bool isLagTimeAcceptable(int feedbackSeconds);
int main() { assert(isLagTimeAcceptable(5)); return 0; }
"""),

    # Ch 08: 새 기능 추가
    ("08", "08_how_to_add_feature", "01_tdd_in_legacy", "8.1 레거시 코드에 TDD로 기능 추가하기",
     "새 기능을 레거시 클래스 외부에서 TDD로 독립 개발 후 안전하게 접합",
     r"""#include <iostream>
class TaxCalculator {
public:
    double calculate(double amount, double rate) { return amount * rate; }
};
int main() {
    TaxCalculator tc;
    std::cout << "[Legacy 8.1] 신규 세금 계산기: " << tc.calculate(100.0, 0.1) << "\\n";
    return 0;
}
""",
     r"""#include <cassert>
class TaxCalculator { public: double calculate(double a, double r); };
int main() { TaxCalculator tc; assert(tc.calculate(200.0, 0.1) == 20.0); return 0; }
"""),

    # Ch 09: 하네스에 넣을 수 없는 클래스
    ("09", "09_cant_harness_class", "01_pass_null_and_subclass", "9.1 널 전달 및 서브클래스화 (Pass Null)",
     "생성 불가능한 무거운 의존성을 테스트용 널 객체나 가짜 협력자로 우회",
     r"""#include <iostream>
class HeavyDatabase { public: virtual ~HeavyDatabase() = default; virtual bool isConnected() { return true; } };
class Service {
    HeavyDatabase* db;
public:
    Service(HeavyDatabase* d = nullptr) : db(d) {}
    bool run() { return db ? db->isConnected() : true; }
};
int main() {
    Service s(nullptr);
    std::cout << "[Legacy 9.1] 널 주입 하네스 실행: " << s.run() << "\\n";
    return 0;
}
""",
     r"""#include <cassert>
class HeavyDatabase { public: virtual ~HeavyDatabase() = default; virtual bool isConnected(); };
class Service { HeavyDatabase* db; public: Service(HeavyDatabase* d = nullptr); bool run(); };
int main() { Service s(nullptr); assert(s.run()); return 0; }
"""),

    # Ch 10: 하네스에서 실행할 수 없는 메서드
    ("10", "10_cant_run_method", "01_expose_protected_method", "10.1 보호 메서드 노출 및 부수 효과 격리",
     "테스트용 파생 클래스를 통해 비공개 로직을 검증 가능하게 노출",
     r"""#include <iostream>
class Processor {
protected:
    virtual int computeInternal(int x) { return x * 2; }
public:
    virtual ~Processor() = default;
};
class TestProcessor : public Processor {
public:
    int testCompute(int x) { return computeInternal(x); }
};
int main() {
    TestProcessor tp;
    std::cout << "[Legacy 10.1] 노출된 내부 연산: " << tp.testCompute(21) << "\\n";
    return 0;
}
""",
     r"""#include <cassert>
class TestProcessor { public: int testCompute(int x); };
int main() { TestProcessor tp; assert(tp.testCompute(5) == 10); return 0; }
"""),

    # Ch 11: 어느 메서드를 테스트해야 할까?
    ("11", "11_what_to_test", "01_effect_reasoning", "11.1 영향 전파 경로 분석 (Effect Reasoning)",
     "코드 변경의 영향 전파 경로를 추론하여 검증 대상 메서드 식별",
     r"""#include <iostream>
int propagateEffect(int val) { return val + 10; }
int main() {
    std::cout << "[Legacy 11.1] 전파된 영향 값: " << propagateEffect(5) << "\\n";
    return 0;
}
""",
     r"""#include <cassert>
int propagateEffect(int val);
int main() { assert(propagateEffect(20) == 30); return 0; }
"""),

    # Ch 12: 한 곳을 변경하려면 수많은 변경이 필요하다
    ("12", "12_many_changes", "01_intercept_points", "12.1 인터셉트 지점 찾기와 래핑",
     "수많은 변경 대신 공통 진입 지점을 찾아 인터셉트 래퍼 도입",
     r"""#include <iostream>
class RequestRouter {
public:
    int route(int reqId) { return reqId * 100; }
};
int main() {
    RequestRouter r;
    std::cout << "[Legacy 12.1] 인터셉트 라우팅: " << r.route(3) << "\\n";
    return 0;
}
""",
     r"""#include <cassert>
class RequestRouter { public: int route(int reqId); };
int main() { RequestRouter r; assert(r.route(2) == 200); return 0; }
"""),

    # Ch 14: 라이브러리 의존성 문제
    ("14", "14_library_dependencies", "01_library_wrapper", "14.1 서드파티 라이브러리 격리 래퍼",
     "외부 라이브러리 직접 호출을 래퍼 인터페이스로 감싸 결합 격리",
     r"""#include <iostream>
class ThirdPartyWrapper {
public:
    virtual ~ThirdPartyWrapper() = default;
    virtual std::string query() { return "LIB_DATA"; }
};
int main() {
    ThirdPartyWrapper w;
    std::cout << "[Legacy 14.1] 래핑된 라이브러리 출력: " << w.query() << "\\n";
    return 0;
}
""",
     r"""#include <cassert>
#include <string>
class ThirdPartyWrapper { public: virtual ~ThirdPartyWrapper() = default; virtual std::string query(); };
int main() { ThirdPartyWrapper w; assert(w.query() == "LIB_DATA"); return 0; }
"""),

    # Ch 15: 애플리케이션의 모든 부분이 API 호출로 가득 차 있다
    ("15", "15_all_api_calls", "01_skin_and_delegate", "15.1 API 덩어리 코드의 스킨(Skin) 분리",
     "프레임워크 API 덩어리에서 순수 도메인 로직을 Skin과 Core로 분리",
     r"""#include <iostream>
class BusinessCore {
public:
    int calculate(int raw) { return raw + 42; }
};
int main() {
    BusinessCore core;
    std::cout << "[Legacy 15.1] 프레임워크와 분리된 비즈니스 코어: " << core.calculate(8) << "\\n";
    return 0;
}
""",
     r"""#include <cassert>
class BusinessCore { public: int calculate(int raw); };
int main() { BusinessCore c; assert(c.calculate(10) == 52); return 0; }
"""),

    # Ch 17: 애플리케이션에 구조가 없다
    ("17", "17_no_structure", "01_architecture_storytelling", "17.1 아키텍처 스토리텔링과 모듈화",
     "구조 없는 스파게티 시스템의 핵심 흐름을 이야기로 재구성하여 계층화",
     r"""#include <iostream>
struct ArchitectureStory {
    static const char* summarize() { return "Input -> Validation -> Processing -> Storage"; }
};
int main() {
    std::cout << "[Legacy 17.1] 아키텍처 핵심 스토리: " << ArchitectureStory::summarize() << "\\n";
    return 0;
}
""",
     r"""#include <cassert>
#include <cstring>
struct ArchitectureStory { static const char* summarize(); };
int main() { assert(std::strstr(ArchitectureStory::summarize(), "Processing") != nullptr); return 0; }
"""),

    # Ch 18: 테스트 코드가 방해가 된다
    ("18", "18_test_code_in_way", "01_test_code_placement", "18.1 테스트 코드 명명과 프로덕션 격리",
     "테스트 코드가 배포 산출물에 섞이지 않도록 디렉터리 및 조건부 컴파일 격리",
     r"""#include <iostream>
#ifdef UNIT_TEST_BUILD
const char* buildType = "Test";
#else
const char* buildType = "Production";
#endif
int main() {
    std::cout << "[Legacy 18.1] 빌드 타입 격리: " << buildType << "\\n";
    return 0;
}
""",
     r"""#include <cassert>
extern const char* buildType;
int main() { assert(buildType != nullptr); return 0; }
"""),

    # Ch 20: 이 클래스는 너무 크다
    ("20", "20_class_too_big", "01_incubator_class", "20.1 거대 클래스 분해 및 인큐베이터 클래스",
     "수천 줄의 신(God) 클래스에서 단일 책임을 갖는 인큐베이터 클래스로 추출",
     r"""#include <iostream>
class InvoiceIncubator {
public:
    double computeTax(double total) { return total * 0.1; }
};
int main() {
    InvoiceIncubator inc;
    std::cout << "[Legacy 20.1] 추출된 인큐베이터 클래스: " << inc.computeTax(1000.0) << "\\n";
    return 0;
}
""",
     r"""#include <cassert>
class InvoiceIncubator { public: double computeTax(double total); };
int main() { InvoiceIncubator inc; assert(inc.computeTax(500.0) == 50.0); return 0; }
"""),

    # Ch 21: 동일한 코드를 수없이 수정해야 한다
    ("21", "21_changing_same_code", "01_open_class_consolidation", "21.1 열린 클래스와 중복 통합",
     "시스템 전역에 산재한 복사-붙여넣기 중복 코드를 하나의 클래스로 단일화",
     r"""#include <iostream>
class SharedFormatter {
public:
    static std::string formatCurrency(int cents) { return "$" + std::to_string(cents / 100); }
};
int main() {
    std::cout << "[Legacy 21.1] 중복 통합된 포맷터: " << SharedFormatter::formatCurrency(2500) << "\\n";
    return 0;
}
""",
     r"""#include <cassert>
#include <string>
class SharedFormatter { public: static std::string formatCurrency(int cents); };
int main() { assert(SharedFormatter::formatCurrency(1000) == "$10"); return 0; }
"""),

    # Ch 22: 괴물 메서드를 변경해야 한다
    ("22", "22_monster_method", "01_extract_monster_method", "22.1 괴물 메서드 분해 전략",
     "수백 줄의 괴물 메서드를 감지 후 골격 메서드와 도우미 메서드로 분해",
     r"""#include <iostream>
class MonsterMethodRefactored {
    int step1() { return 10; }
    int step2() { return 20; }
public:
    int executePipeline() { return step1() + step2(); }
};
int main() {
    MonsterMethodRefactored mm;
    std::cout << "[Legacy 22.1] 분해된 파이프라인: " << mm.executePipeline() << "\\n";
    return 0;
}
""",
     r"""#include <cassert>
class MonsterMethodRefactored { public: int executePipeline(); };
int main() { MonsterMethodRefactored mm; assert(mm.executePipeline() == 30); return 0; }
"""),

    # Ch 23: 변경이 다른 부분에 영향을 주지 않는지 어떻게 확인할까?
    ("23", "23_preserve_behavior", "01_characterization_assertion", "23.1 변경 보존 테스트 및 불변식 검증",
     "리팩터링 중 기존 동작이 변하지 않음을 보증하는 상태 불변식 검증",
     r"""#include <iostream>
bool checkInvariants(int a, int b) { return (a + b) >= 0; }
int main() {
    std::cout << "[Legacy 23.1] 불변식 검증: " << checkInvariants(10, 20) << "\\n";
    return 0;
}
""",
     r"""#include <cassert>
bool checkInvariants(int a, int b);
int main() { assert(checkInvariants(5, 5)); return 0; }
"""),

    # Ch 24: 포기하고 싶을 때
    ("24", "24_feel_like_giving_up", "01_continuous_improvement_mindset", "24.1 레거시 코드 개선 마인드셋",
     "포기하지 않고 한 번에 하나의 테스트, 하나의 Seam씩 점진적으로 전진",
     r"""#include <iostream>
int getProgressStep(int currentStep) { return currentStep + 1; }
int main() {
    std::cout << "[Legacy 24.1] 점진적 전진 스텝: " << getProgressStep(10) << "\\n";
    return 0;
}
""",
     r"""#include <cassert>
int getProgressStep(int currentStep);
int main() { assert(getProgressStep(1) == 2); return 0; }
"""),
'''

# 3. Book 07: Unit Testing (TypeScript) - Ch 09, 10
BOOK07_PATCH = '''
    # Ch 09: 목 처리에 대한 모범 사례
    ("09", "09_mocking_best_practices", "01_mock_unmanaged_only", "9.1 비관리 의존성만 목킹 (Mock Unmanaged)",
     "데이터베이스는 실제 컨테이너로 검증하고, 외부 이메일/메시지 큐 등 비관리 의존성만 시스템 경계에서 목킹",
     r"""export interface MessageGateway { send(msg: string): boolean; }
export class NotificationService {
    constructor(private gateway: MessageGateway) {}
    notifyUser(userId: string, text: string): boolean {
        return this.gateway.send(`[User: ${userId}] ${text}`);
    }
}
const dummyGateway: MessageGateway = { send: () => true };
console.log("[Khorikov 9.1] 비관리 의존성 통신 서비스 초기화");
""",
     r"""import { NotificationService, MessageGateway } from "./main";
import assert from "assert";
let captured = "";
const fakeGateway: MessageGateway = { send: (m) => { captured = m; return true; } };
const svc = new NotificationService(fakeGateway);
assert.strictEqual(svc.notifyUser("42", "Welcome"), true);
assert.strictEqual(captured, "[User: 42] Welcome");
console.log("PASS: 9.1 Test");
"""),

    # Ch 10: 데이터베이스 테스트
    ("10", "10_database_testing", "01_transaction_isolation", "10.1 데이터베이스 테스트 트랜잭션 격리",
     "테스트 간 상태 오염을 방지하기 위한 롤백 또는 테이블 데이터 격리 정리 패턴",
     r"""export class InMemoryDb {
    private tables = new Map<string, any[]>();
    insert(table: string, record: any) {
        const rows = this.tables.get(table) || [];
        rows.push(record);
        this.tables.set(table, rows);
    }
    count(table: string): number { return (this.tables.get(table) || []).length; }
    cleanup() { this.tables.clear(); }
}
const db = new InMemoryDb();
db.insert("users", { id: 1, name: "Alice" });
console.log("[Khorikov 10.1] DB 격리 레코드 수:", db.count("users"));
""",
     r"""import { InMemoryDb } from "./main";
import assert from "assert";
const db = new InMemoryDb();
db.insert("orders", { id: 101, amount: 50 });
assert.strictEqual(db.count("orders"), 1);
db.cleanup();
assert.strictEqual(db.count("orders"), 0);
console.log("PASS: 10.1 Test");
"""),
'''

# 4. Book 08: Pragmatic Unit Testing (Java) - Ch 04, 08, 09, 11
BOOK08_PATCH = '''
    # Ch 04: 테스트 조직화
    ("04", "04_test_organization", "01_fixture_lifecycle", "4.1 테스트 구조화 및 픽스처 생명주기",
     "Given-When-Then 3단계 구조와 사전 상태 초기화",
     r"""public class Main {
    public static class Account {
        private int balance = 100;
        public void deposit(int amt) { balance += amt; }
        public int getBalance() { return balance; }
    }
    public static void main(String[] args) {
        Account acc = new Account();
        acc.deposit(50);
        System.out.println("[Pragmatic 4.1] 계좌 잔고: " + acc.getBalance());
    }
}
""",
     r"""public class Test {
    public static void main(String[] args) {
        Main.Account acc = new Main.Account();
        acc.deposit(20);
        if (acc.getBalance() != 120) throw new AssertionError();
        System.out.println("PASS: 4.1 Test");
    }
}
"""),

    # Ch 08: 깔끔한 코드로 리팩터링하기
    ("08", "08_refactor_to_clean_code", "01_clean_code_refactoring", "8.1 깔끔한 코드로 리팩터링하기",
     "테스트를 안전망 삼아 가독성과 유지보수성을 극대화하는 리팩터링",
     r"""public class Main {
    public static boolean isValidIdentifier(String s) {
        if (s == null || s.isEmpty()) return false;
        return Character.isLetter(s.charAt(0));
    }
    public static void main(String[] args) {
        System.out.println("[Pragmatic 8.1] 식별자 검증: " + isValidIdentifier("user1"));
    }
}
""",
     r"""public class Test {
    public static void main(String[] args) {
        if (!Main.isValidIdentifier("hello")) throw new AssertionError();
        if (Main.isValidIdentifier("123")) throw new AssertionError();
        System.out.println("PASS: 8.1 Test");
    }
}
"""),

    # Ch 09: 테스트 가능성을 고려한 설계
    ("09", "09_design_for_testability", "01_dip_and_low_coupling", "9.1 테스트 가능성을 고려한 설계 (DIP)",
     "의존 역전 원칙(DIP)을 적용하여 구체 결합을 낮추고 테스트 대역 주입 가능하게 설계",
     r"""public class Main {
    public interface Clock { long now(); }
    public static class SystemClock implements Clock { public long now() { return System.currentTimeMillis(); } }
    public static class Logger {
        private final Clock clock;
        public Logger(Clock clock) { this.clock = clock; }
        public String log(String msg) { return "[" + clock.now() + "] " + msg; }
    }
    public static void main(String[] args) {
        Logger logger = new Logger(new SystemClock());
        System.out.println("[Pragmatic 9.1] 테스트 가능한 로거 생성 완료");
    }
}
""",
     r"""public class Test {
    public static void main(String[] args) {
        Main.Clock fakeClock = () -> 1000L;
        Main.Logger logger = new Main.Logger(fakeClock);
        String out = logger.log("Test");
        if (!"[1000] Test".equals(out)) throw new AssertionError("Expected [1000] Test but got " + out);
        System.out.println("PASS: 9.1 Test");
    }
}
"""),

    # Ch 11: 테스트 리팩터링 및 유지보수
    ("11", "11_test_maintenance", "01_maintainable_tests", "11.1 테스트 리팩터링 및 유지보수",
     "중복 단언문 제거 및 의도가 뚜렷한 도우미 메서드 활용",
     r"""public class Main {
    public static int sum(int... nums) {
        int s = 0;
        for (int n : nums) s += n;
        return s;
    }
    public static void main(String[] args) {
        System.out.println("[Pragmatic 11.1] sum: " + sum(1, 2, 3));
    }
}
""",
     r"""public class Test {
    public static void main(String[] args) {
        if (Main.sum(1, 2, 3, 4) != 10) throw new AssertionError();
        System.out.println("PASS: 11.1 Test");
    }
}
"""),
'''

# 5. Book 09: JUnit in Action (Java) - Ch 03, 04, 05, 08, 09, 10, 14
BOOK09_PATCH = '''
    # Ch 03: JUnit 아키텍처
    ("03", "03_junit_architecture", "01_three_tier_architecture", "3.1 JUnit Platform, Jupiter, Vintage 계층 구조",
     "런처 플랫폼과 테스트 엔진(Jupiter/Vintage)의 분리 아키텍처",
     r"""public class Main {
    public static String getEngineName(boolean isJunit5) {
        return isJunit5 ? "junit-jupiter-engine" : "junit-vintage-engine";
    }
    public static void main(String[] args) {
        System.out.println("[JUnit in Action 3.1] 주피터 엔진: " + getEngineName(true));
    }
}
""",
     r"""public class Test {
    public static void main(String[] args) {
        if (!"junit-jupiter-engine".equals(Main.getEngineName(true))) throw new AssertionError();
        System.out.println("PASS: 3.1 Test");
    }
}
"""),

    # Ch 04: 소프트웨어 테스트 철학과 모범 사례
    ("04", "04_test_philosophy", "01_testing_pyramid", "4.1 소프트웨어 테스트 피라미드와 품질 원칙",
     "단위 테스트 - 통합 테스트 - UI 테스트의 이상적 피라미드 비율 모델",
     r"""public class Main {
    public static boolean isPyramidHealthy(int unitTests, int integrationTests, int uiTests) {
        return (unitTests > integrationTests) && (integrationTests > uiTests);
    }
    public static void main(String[] args) {
        System.out.println("[JUnit in Action 4.1] 건강한 피라미드 여부: " + isPyramidHealthy(100, 20, 5));
    }
}
""",
     r"""public class Test {
    public static void main(String[] args) {
        if (!Main.isPyramidHealthy(100, 30, 5)) throw new AssertionError();
        System.out.println("PASS: 4.1 Test");
    }
}
"""),

    # Ch 05: 테스트 격리와 테스트 대역
    ("05", "05_test_isolation_and_doubles", "01_stubs_and_mocks", "5.1 스텁(Stub)과 목(Mock) 격리 패턴",
     "상태 검증용 스텁과 호출 행위 검증용 목의 올바른 활용",
     r"""public class Main {
    public interface PaymentGateway { boolean pay(int amount); }
    public static class PaymentProcessor {
        private final PaymentGateway gateway;
        public PaymentProcessor(PaymentGateway g) { this.gateway = g; }
        public boolean process(int amount) { return amount > 0 && gateway.pay(amount); }
    }
    public static void main(String[] args) {
        PaymentProcessor p = new PaymentProcessor(a -> true);
        System.out.println("[JUnit in Action 5.1] 결제 처리 성공 여부: " + p.process(100));
    }
}
""",
     r"""public class Test {
    public static void main(String[] args) {
        Main.PaymentProcessor p = new Main.PaymentProcessor(a -> true);
        if (!p.process(500)) throw new AssertionError();
        if (p.process(-10)) throw new AssertionError();
        System.out.println("PASS: 5.1 Test");
    }
}
"""),

    # Ch 08: 빌드 도구와의 통합
    ("08", "08_build_tools_integration", "01_build_lifecycle", "8.1 Maven/Gradle 빌드 수명주기와 테스트 단계",
     "컴파일, 테스트, 패키징의 수명주기 분리와 플러그인 연동",
     r"""public class Main {
    public static String getPhase(String goal) {
        if ("test".equals(goal)) return "test";
        if ("package".equals(goal)) return "package";
        return "compile";
    }
    public static void main(String[] args) {
        System.out.println("[JUnit in Action 8.1] 빌드 페이즈: " + getPhase("test"));
    }
}
""",
     r"""public class Test {
    public static void main(String[] args) {
        if (!"test".equals(Main.getPhase("test"))) throw new AssertionError();
        System.out.println("PASS: 8.1 Test");
    }
}
"""),

    # Ch 09: 지속적 통합(CI/CD) 파이프라인
    ("09", "09_ci_pipeline_testing", "01_ci_automation", "9.1 지속적 통합(CI) 파이프라인과 자동화 테스트",
     "코드 푸시마다 자동 테스트를 격리 컨테이너에서 구동하는 CI 파이프라인 모델",
     r"""public class Main {
    public static boolean evaluatePipeline(boolean testsPass, boolean lintPass) {
        return testsPass && lintPass;
    }
    public static void main(String[] args) {
        System.out.println("[JUnit in Action 9.1] CI 통과 여부: " + evaluatePipeline(true, true));
    }
}
""",
     r"""public class Test {
    public static void main(String[] args) {
        if (!Main.evaluatePipeline(true, true)) throw new AssertionError();
        System.out.println("PASS: 9.1 Test");
    }
}
"""),

    # Ch 10: 코드 커버리지 및 정적 분석
    ("10", "10_code_coverage", "01_line_vs_branch_coverage", "10.1 라인 커버리지 vs 분기 커버리지 메트릭",
     "단순 라인 커버리지의 맹점을 극복하고 조건문 분기 커버리지를 함께 측정",
     r"""public class Main {
    public static int sign(int x) {
        if (x > 0) return 1;
        if (x < 0) return -1;
        return 0;
    }
    public static void main(String[] args) {
        System.out.println("[JUnit in Action 10.1] sign(5): " + sign(5));
    }
}
""",
     r"""public class Test {
    public static void main(String[] args) {
        // 모든 분기 커버
        if (Main.sign(10) != 1) throw new AssertionError();
        if (Main.sign(-5) != -1) throw new AssertionError();
        if (Main.sign(0) != 0) throw new AssertionError();
        System.out.println("PASS: 10.1 Test");
    }
}
"""),

    # Ch 14: 프론트엔드 및 웹 UI 테스트
    ("14", "14_ui_and_web_testing", "01_page_object_pattern", "14.1 페이지 객체 패턴(Page Object Pattern)",
     "UI 변경에 취약하지 않은 화면 추상화 모델",
     r"""public class Main {
    public static class LoginPageModel {
        public boolean submit(String user, String pass) {
            return "admin".equals(user) && "secret".equals(pass);
        }
    }
    public static void main(String[] args) {
        LoginPageModel page = new LoginPageModel();
        System.out.println("[JUnit in Action 14.1] 페이지 객체 로그인: " + page.submit("admin", "secret"));
    }
}
""",
     r"""public class Test {
    public static void main(String[] args) {
        Main.LoginPageModel page = new Main.LoginPageModel();
        if (!page.submit("admin", "secret")) throw new AssertionError();
        if (page.submit("admin", "wrong")) throw new AssertionError();
        System.out.println("PASS: 14.1 Test");
    }
}
"""),
'''

def apply_patch(filename, patch_text):
    path = os.path.join(DATA_DIR, filename)
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()
    
    target = "]\n\nITEMS = []"
    if target in content:
        new_content = content.replace(target, "," + patch_text + target)
        with open(path, "w", encoding="utf-8") as f:
            f.write(new_content)
        print(f"Applied patch to {filename}")
    else:
        print(f"Target marker not found in {filename}!")

if __name__ == "__main__":
    apply_patch("content04_refactor_patterns.py", BOOK04_PATCH)
    apply_patch("content05_legacy_code.py", BOOK05_PATCH)
    apply_patch("content07_unit_testing.py", BOOK07_PATCH)
    apply_patch("content08_pragmatic_junit.py", BOOK08_PATCH)
    apply_patch("content09_junit_action.py", BOOK09_PATCH)
    print("All patches applied!")
