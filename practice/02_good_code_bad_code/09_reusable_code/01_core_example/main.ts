// ==============================================================================
// @file: main.ts
// @path: tracks/02_good_code_bad_code/09_reusable_code/01_core_example/main.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

// [Good Code Bad Code Ch 9] 제네릭 기반 불변 스택
export class ImmutableStack<T> {
    constructor(private readonly elements: readonly T[] = []) {}

    push(item: T): ImmutableStack<T> {
        return new ImmutableStack([...this.elements, item]);
    }

    peek(): T | undefined {
        return this.elements[this.elements.length - 1];
    }

    size(): number {
        return this.elements.length;
    }
}

const s1 = new ImmutableStack<number>().push(10).push(20);
console.log("[Good Code Ch 9] 스택 탑:", s1.peek(), "크기:", s1.size());
