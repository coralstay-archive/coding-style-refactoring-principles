// ==============================================================================
// @file: main.ts
// @path: tracks/02_good_code_bad_code/01_code_quality/1.1_how_code_becomes_software/main.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

export class SoftwarePipeline {
    static buildArtifact(sourceCode: string): { compiled: boolean; artifactSize: number } {
        if (!sourceCode.trim()) throw new Error("소스 코드가 비어 있습니다.");
        return { compiled: true, artifactSize: sourceCode.length * 2 };
    }
}
console.log("[Good Code 1.1]", SoftwarePipeline.buildArtifact("export const x = 10;"));
