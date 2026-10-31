// ==============================================================================
// @file: main.ts
// @path: tracks/03_refactoring_2nd/03_bad_smells/smell_05_global_data/main.ts
// @book: 《리팩터링 2판》(Martin Fowler 저, 한빛미디어)
// ==============================================================================

class SafeStore {
    private static data: string = "initial";
    static get(): string { return this.data; }
    static set(val: string): void { this.data = val; }
}
export { SafeStore };
console.log("[Smell 05] 캡슐화된 저장소:", SafeStore.get());
