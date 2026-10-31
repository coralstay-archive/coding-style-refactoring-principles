// ==============================================================================
// @file: main.ts
// @path: tracks/02_good_code_bad_code/03_code_contracts/01_core_example/main.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

// [Good Code Bad Code Ch 3] 엄격한 사전 조건(Precondition) 검증
export class BoundedCounter {
    private count: number = 0;

    constructor(private readonly maxLimit: number) {
        if (maxLimit <= 0) {
            throw new Error("최대 한도는 0보다 커야 합니다.");
        }
    }

    increment(): void {
        if (this.count >= this.maxLimit) {
            throw new Error(`최대 한도(${this.maxLimit})를 초과할 수 없습니다.`);
        }
        this.count++;
    }

    getCount(): number {
        return this.count;
    }
}

const counter = new BoundedCounter(5);
counter.increment();
console.log("[Good Code Ch 3] 카운트:", counter.getCount());
