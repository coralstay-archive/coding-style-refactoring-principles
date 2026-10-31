// ==============================================================================
// @file: main.ts
// @path: tracks/02_good_code_bad_code/07_hard_to_misuse/7.1_make_objects_immutable/main.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

export class Dimension2D {
    constructor(public readonly width: number, public readonly height: number) {
        if (width <= 0 || height <= 0) throw new Error("크기는 0보다 커야 합니다.");
    }
    scale(factor: number): Dimension2D {
        return new Dimension2D(this.width * factor, this.height * factor);
    }
}
console.log("[Good Code 7.1] 스케일 변환:", new Dimension2D(10, 20).scale(2));
