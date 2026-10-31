// ==============================================================================
// @file: main.ts
// @path: tracks/02_good_code_bad_code/09_reusable_code/9.1_minimize_assumptions/main.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

export function formatPath(dir: string, file: string, sep: string = "/"): string {
    return dir.endsWith(sep) ? `${dir}${file}` : `${dir}${sep}${file}`;
}
console.log("[Good Code 9.1]", formatPath("home/user", "data.txt"));
