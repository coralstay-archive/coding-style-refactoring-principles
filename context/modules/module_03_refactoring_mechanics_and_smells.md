# Module 03: Refactoring Mechanics & Code Smells
*(Deep-dive context based on "Refactoring 2nd Edition (Martin Fowler)")*

## 1. Core Smells & Prescriptions
- **Long Method / Duplication**: Apply *Extract Function*, *Slide Statements*.
- **Primitive Obsession**: Apply *Replace Primitive with Object*, *Replace Type Code with Subclasses/State*.
- **Feature Envy**: Method accesses data of another class more than its own. Apply *Move Function*.
- **Data Clumps**: Fields/parameters that frequently travel together. Apply *Introduce Parameter Object*, *Extract Class*.
- **Deep Nested Conditionals**: Apply *Replace Nested Conditional with Guard Clauses*.
- **Complex Switch Statements**: Apply *Replace Conditional with Polymorphism*.
- **Divergent Change**: One class modified for multiple unrelated reasons. Apply *Extract Class* (Enforce Single Responsibility).
- **Shotgun Surgery**: One change requires small edits across many classes. Apply *Move Function*, *Combine Functions into Class*.

## 2. Refactoring Mechanics
1. Check existing tests: If tests fail, fix them before touching design.
2. Make one small structural change at a time.
3. Run test suite: Ensure 100% green after every step.
4. Commit frequently: Small, safe, reversible steps.
5. Never mix refactoring with adding new features or fixing functional bugs.
