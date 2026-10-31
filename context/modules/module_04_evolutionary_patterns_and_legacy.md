# Module 04: Evolutionary Patterns & Legacy Code Remediation
*(Deep-dive context based on "Refactoring to Patterns" & "Working Effectively with Legacy Code")*

## 1. Evolutionary Design (Refactoring to Patterns)
- **Do not design with upfront patterns**: Patterns introduce indirection. Introduce them only when justified by evolving complexity or repeated variation.
- **Creation Refactorings**:
  - Replace confusing constructors with Creation Methods or Static Factory Methods.
  - When construction logic becomes overly complex or conditional, extract into a Builder or Factory.
- **Behavioral Evolution**:
  - Refactor large `switch` statements into Strategy pattern when algorithms vary independently.
  - Refactor state-checking flags into State pattern when object behavior varies with internal lifecycle states.
- **Pattern Removal (YAGNI)**:
  - If a pattern is no longer serving a purpose, aggressively inline or remove it (e.g., *Inline Singleton*, *Remove Factory*).

## 2. Legacy Code Strategy (Working Effectively with Legacy Code)
- **Definition**: Legacy code is code without automated tests.
- **The Seam Model**:
  - A *Seam* is a place where you can alter behavior in a program without editing in that place.
  - **Object Seam**: Subclassing and overriding virtual methods to substitute test doubles.
  - **Link Seam / Compile Seam**: Swapping libraries, headers, or linking stubs during test compilation.
- **Dependency-Breaking Techniques**:
  - *Extract Interface*: Separate the abstract contract from the concrete problematic class.
  - *Subclass and Override Method*: Make problematic calls (DB, clock, file system) virtual/protected and override them in a test-specific subclass.
  - *Parameterize Constructor*: Pass dependencies explicitly instead of instantiating them internally.
- **Safe Change Algorithms**:
  - *Sprout Method / Class*: When adding new logic, write it as a brand-new, tested method/class and simply call it from the legacy code.
  - *Wrap Method / Class*: Wrap legacy methods inside a decorator or facade that executes new logic before/after the original behavior.
