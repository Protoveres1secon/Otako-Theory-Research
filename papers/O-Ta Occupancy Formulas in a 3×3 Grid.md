# O-Ta-Ko Theory

## O-Ta Occupancy Formulas in a 3×3 Grid

*A comprehensive international formulation of the O-Ta-Ko occupancy system, including its theoretical model, notation, mathematical foundations, occupancy formulas, geometric rules, verification framework, and extended rules.*

**Status:** O1 is included in the O-Ta-Ko documentation. O2 has been officially published as an official O-Ta-Ko formula.

---

# Table of Contents

1. Basic Model
2. O-Ta-Ko Standard Configuration
3. Detailed Notation System
4. Mathematical Foundations
5. Formula O1 — Cell 1 Occupancy
6. Cell 1 Deviation
7. Formula O2 — Cell 2 Occupancy
8. Verification and Mathematical Explanation of O2
9. Symmetry Rules
10. Cell 5 and the Small-Circle Separation Rule
11. Formula 4 — Total Area
12. Formula 5 — Hollow Rule
13. General O-Ta-Ko Calculation Procedure
14. Numerical Example
15. Final Formula Table
16. General Rules of the O-Ta-Ko Occupancy System
17. Scope and Conditions of Application
18. Final Statement

---

# 1. Basic Model

The O-Ta-Ko occupancy system considers a perfect circular O-Ta structure positioned inside a 3×3 square grid.

The center of the circle coincides exactly with the center of the grid.

The diameter of the O-Ta circle is exactly three times the side length of one grid cell.

Therefore:

$$
D = 3s
$$

where:

- `D` is the diameter of the O-Ta circle.
- `s` is the side length of one grid cell.

The nine cells are numbered as follows:

```text
1   2   3

4   5   6

7   8   9
```

The cells are divided into three geometric categories:

- **Corner cells:** 1, 3, 7, 9
- **Edge cells:** 2, 4, 6, 8
- **Center cell:** 5

This classification is essential because cells belonging to the same geometric category are equivalent by symmetry in the standard centered configuration.

---

# 2. O-Ta-Ko Standard Configuration

The occupancy formulas defined in this document apply to the standard configuration.

The standard configuration is defined by the following conditions.

## Rule 1 — Perfect Circular O-Ta

The O-Ta structure is represented by a perfect circle.

## Rule 2 — Center Alignment

The center of the O-Ta circle coincides with the center of the 3×3 grid.

## Rule 3 — Equal Grid Cells

The grid contains nine equal square cells.

Each cell has side length `s`.

## Rule 4 — Diameter Relation

The diameter of the circle is exactly three cell lengths:

$$
D = 3s
$$

## Rule 5 — Cell-Local Measurement

The O-Ta occupancy of a cell is determined only from the part of the O-Ta region that actually lies inside that cell.

## Rule 6 — Cell Area as Denominator

The denominator of the occupancy ratio is the total geometric area of the selected cell:

$$
A_i = s^2
$$

The total area of the complete circle is not used as the denominator of `T_i`.

## Rule 7 — Configuration-Dependent Coefficients

An occupancy coefficient `K_i` may only be used when the geometric configuration associated with that coefficient is satisfied.

## Rule 8 — Symmetry

Geometrically symmetric cells have equal occupancy ratios under the standard configuration.

---

# 3. Detailed Notation System

The following notation is used throughout the O-Ta-Ko occupancy theory.

| Symbol | Meaning | Role |
|---|---|---|
| `A_circle` | Total area of the O-Ta circle | `A_circle = πR² = C²/(4π)` |
| `C` | Circumference of the O-Ta circle | Input quantity |
| `R` or `r` | Radius of the circle | Circle dimension |
| `D` | Diameter of the circle | `D = 2R` |
| `s` | Side length of one grid cell | Grid dimension |
| `A_i` | Total area of cell `i` | Denominator of `T_i` |
| `S_i` | Actual O-Ta area contained inside cell `i` | Numerator of `T_i` |
| `T_i` | O-Ta occupancy ratio of cell `i` | `T_i = S_i/A_i` |
| `K_i` | Occupancy coefficient associated with cell type `i` | Under the correct configuration, `T_i = K_i` |
| `Δ_1` | Deviation of Cell 1 from the 50% reference | `Δ_1 = T_1 - 1/2` |
| `π` | Pi | Mathematical constant |
| `√2` | Square root of 2 | Appears in `K_2` |
| `sin` | Sine function | Mathematical foundation |
| `arcsin(x)` | Inverse sine function | Mathematical foundation |
| `q` | Number of area terms being added | Used in Formula 4 |

---

## 3.1 `A_circle` — Total Area of the O-Ta Circle

`A_circle` represents the total area of the complete O-Ta circle.

Using the standard circle-area formula:

$$
A_{\text{circle}} = \pi R^2
$$

Because:

$$
C = 2\pi R
$$

the radius can be written as:

$$
R = \frac{C}{2\pi}
$$

Substitution gives:

$$
A_{\text{circle}}
=
\pi
\left(
\frac{C}{2\pi}
\right)^2
$$

Therefore:

$$
A_{\text{circle}} = \frac{C^2}{4\pi}
$$

Thus, the total circle area may be expressed in either of the following forms:

$$
A_{\text{circle}} = \pi R^2
$$

or:

$$
A_{\text{circle}} = \frac{C^2}{4\pi}
$$

---

## 3.2 `C` — Circumference

`C` represents the circumference of the O-Ta circle.

The standard relation is:

$$
C = 2\pi R
$$

Therefore:

$$
R = \frac{C}{2\pi}
$$

Under the standard O-Ta-Ko configuration, the circumference is also related to the grid-cell side length by:

$$
C = 3\pi s
$$

so:

$$
s = \frac{C}{3\pi}
$$

---

## 3.3 `R` or `r` — Radius

`R` or `r` represents the radius of a circle.

The standard relationship between circumference and radius is:

$$
C = 2\pi R
$$

Therefore:

$$
R = \frac{C}{2\pi}
$$

Under the standard 3×3 configuration:

$$
D = 3s
$$

and:

$$
D = 2R
$$

so:

$$
2R = 3s
$$

and:

$$
R = \frac{3s}{2}
$$

---

## 3.4 `D` — Diameter

`D` represents the diameter of the O-Ta circle.

The standard relation is:

$$
D = 2R
$$

The defining dimensional condition of the standard O-Ta-Ko model is:

$$
D = 3s
$$

Therefore:

$$
2R = 3s
$$

This relation connects the circle dimension to the size of the 3×3 grid.

---

## 3.5 `s` — Grid-Cell Side Length

`s` represents the side length of one grid cell.

Because:

$$
D = 3s
$$

we have:

$$
s = \frac{D}{3}
$$

Since:

$$
C = 2\pi R
$$

and:

$$
R = \frac{3s}{2}
$$

we obtain:

$$
C = 3\pi s
$$

Therefore:

$$
s = \frac{C}{3\pi}
$$

Thus, `s` can be calculated either from the diameter or from the circumference:

$$
s = \frac{D}{3}
$$

and:

$$
s = \frac{C}{3\pi}
$$

---

## 3.6 `A_i` — Total Area of Cell `i`

`A_i` represents the entire geometric area of cell `i`.

Every cell in the standard grid is a square with side length `s`.

Therefore:

$$
A_i = s^2
$$

This is the complete area of the cell.

It includes both:

- the portion containing O-Ta;
- the portion outside the O-Ta region.

`A_i` is the denominator in:

$$
T_i = \frac{S_i}{A_i}
$$

---

## 3.7 `S_i` — O-Ta Area Inside Cell `i`

`S_i` represents the actual area of the O-Ta structure that lies inside cell `i`.

Only the portion of the O-Ta region physically contained within that cell is counted.

Therefore:

$$
S_i \neq A_{\text{circle}}
$$

in general.

`S_i` is a local area associated with a particular cell.

---

## 3.8 `T_i` — O-Ta Occupancy Ratio

The central definition of the occupancy system is:

$$
T_i = \frac{S_i}{A_i}
$$

`T_i` represents the proportion of the selected cell that is occupied by the O-Ta region.

For example:

$$
T_i = 0.54540604
$$

corresponds to:

$$
T_i = 54.540604\%
$$

The percentage form is obtained by multiplying the decimal ratio by 100.

### Important Definition

`T_i` is:

> **the proportion of the actual O-Ta area contained inside cell `i` relative to the total area of cell `i` itself.**

Therefore:

$$
T_i =
\frac{\text{O-Ta area inside cell }i}
{\text{total area of cell }i}
$$

It is **not**:

$$
\frac{\text{O-Ta area inside cell }i}
{\text{total area of the entire O-Ta circle}}
$$

The denominator is the cell area.

This distinction is fundamental to the O-Ta-Ko occupancy system.

---

## 3.9 `K_i` — Occupancy Coefficient

`K_i` represents an occupancy coefficient associated with a specific geometric cell configuration.

When the corresponding standard configuration is satisfied:

$$
T_i = K_i
$$

Examples include:

$$
K_1 = 0.54540604
$$

for the standard corner-cell configuration,

and:

$$
K_2 =
\frac{\sqrt2}{2}
+
\frac94
\arcsin\left(\frac13\right)
-
\frac12
$$

for the standard edge-cell configuration.

For the standard center-cell configuration:

$$
K_5 = 1
$$

The coefficients are configuration-dependent.

They are not universal constants for arbitrary circle-grid arrangements.

---

## 3.10 `Δ_1` — Cell 1 Deviation

`Δ_1` measures the deviation of Cell 1 occupancy from the 50% reference level.

It is defined as:

$$
\Delta_1 = T_1 - \frac12
$$

This is a comparison quantity rather than a new occupancy coefficient.

---

## 3.11 `π` — Pi

`π` is the standard mathematical constant used in circular geometry.

It appears in:

$$
C = 2\pi R
$$

and:

$$
A = \pi R^2
$$

It forms part of the elementary geometric foundation of the O-Ta-Ko model.

---

## 3.12 `√2`

`√2` represents the square root of 2.

It appears in the expression for the Cell 2 occupancy coefficient:

$$
K_2 =
\frac{\sqrt2}{2}
+
\frac94
\arcsin\left(\frac13\right)
-
\frac12
$$

---

## 3.13 `sin` and `arcsin`

`sin` is the sine function.

`arcsin(x)` is the inverse sine function.

These are standard mathematical functions used in trigonometric and geometric analysis.

They are not unique O-Ta-Ko functions.

---

## 3.14 `q`

`q` represents the number of area terms being added in the total-area formula:

$$
S = S_1 + S_2 + \cdots + S_q
$$

---

# 4. Mathematical Foundations

The O-Ta-Ko occupancy system uses standard mathematical and elementary-geometric relationships as its foundation.

These relationships are used to determine the dimensions of the O-Ta circle and the 3×3 grid.

They are not presented as newly invented O-Ta-Ko formulas.

---

## 4.1 Circumference

For a circle with radius `R`:

$$
C = 2\pi R
$$

Therefore:

$$
R = \frac{C}{2\pi}
$$

This relation allows the radius to be calculated when the circumference is known.

---

## 4.2 Diameter

The diameter is twice the radius:

$$
D = 2R
$$

For the standard O-Ta-Ko configuration:

$$
D = 3s
$$

Therefore:

$$
2R = 3s
$$

and:

$$
R = \frac{3s}{2}
$$

---

## 4.3 Circle Area

The standard formula for the area of a circle is:

$$
A = \pi R^2
$$

Thus:

$$
A_{\text{circle}} = \pi R^2
$$

Using:

$$
R = \frac{C}{2\pi}
$$

gives:

$$
A_{\text{circle}}
=
\pi
\left(
\frac{C}{2\pi}
\right)^2
$$

Therefore:

$$
A_{\text{circle}} = \frac{C^2}{4\pi}
$$

---

## 4.4 Diameter-to-Grid Relationship

The standard O-Ta-Ko model imposes:

$$
D = 3s
$$

Since:

$$
D = 2R
$$

we obtain:

$$
2R = 3s
$$

Therefore:

$$
R = \frac{3s}{2}
$$

This is the dimensional relationship connecting the circular O-Ta structure to the 3×3 grid.

---

## 4.5 Circumference-to-Grid Relationship

Using:

$$
C = 2\pi R
$$

and:

$$
R = \frac{3s}{2}
$$

we obtain:

$$
C
=
2\pi
\left(
\frac{3s}{2}
\right)
$$

Therefore:

$$
C = 3\pi s
$$

and:

$$
s = \frac{C}{3\pi}
$$

This allows the grid-cell side length to be obtained directly from the circle circumference.

---

## 4.6 Area of One Grid Cell

Each grid cell is a square.

Therefore:

$$
A_i = s^2
$$

This is the denominator used by the occupancy ratio:

$$
T_i = \frac{S_i}{A_i}
$$

The use of `s²` as the denominator is one of the most important distinctions in the occupancy system.

---

# 5. Formula O1 — Cell 1 Occupancy

Cell 1 is a corner cell of the 3×3 grid.

For the standard configuration, the O-Ta-Ko documentation establishes the following corner-cell occupancy coefficient:

$$
K_1 = 0.54540604
$$

The actual O-Ta area contained inside Cell 1 is:

$$
S_1 = 0.54540604s^2
$$

The total area of Cell 1 is:

$$
A_1 = s^2
$$

By the occupancy definition:

$$
T_1 = \frac{S_1}{A_1}
$$

Substituting the values:

$$
T_1 =
\frac{0.54540604s^2}{s^2}
$$

The factor `s²` cancels:

$$
T_1 = 0.54540604
$$

Therefore:

$$
T_1 = 54.540604\%
$$

---

## 5.1 Interpretation of O1

The value:

$$
0.54540604
$$

means that approximately 54.540604% of the area of Cell 1 is occupied by the O-Ta region under the standard configuration.

It does not mean that Cell 1 contains 54.540604% of the entire circle.

The denominator remains the area of Cell 1:

$$
A_1 = s^2
$$

---

## 5.2 Conditions for O1

The coefficient:

$$
K_1 = 0.54540604
$$

applies when the following conditions are satisfied:

1. The O-Ta shape is a perfect circle.
2. The grid is a 3×3 grid.
3. All cells are equal squares.
4. The circle is centered at the center of the grid.
5. The circle diameter is exactly `3s`.
6. The selected cell is a corner cell.
7. Occupancy is defined as O-Ta area inside the cell divided by the total area of that cell.

The coefficient should not automatically be applied to other configurations.

---

# 6. Cell 1 Deviation

A reference level of 50% is introduced for comparison.

The reference value is:

$$
T_{\text{ideal}} = \frac12 = 0.5
$$

The deviation is defined as:

$$
\Delta_1 = T_1 - \frac12
$$

Using:

$$
T_1 = 0.54540604
$$

we obtain:

$$
\Delta_1
=
0.54540604 - 0.5
$$

Therefore:

$$
\Delta_1 = 0.04540604
$$

and:

$$
|\Delta_1| = 0.04540604
$$

In percentage-point terms, the Cell 1 occupancy is approximately:

**4.540604 percentage points above the 50% reference level.**

The deviation quantity does not replace the occupancy ratio and does not represent a new occupancy coefficient.

---

# 7. Formula O2 — Cell 2 Occupancy

Cell 2 is the middle cell of the top row.

For the standard O-Ta-Ko configuration, the officially published Cell 2 coefficient is:

$$
K_2 =
\frac{\sqrt2}{2}
+
\frac94
\arcsin\left(\frac13\right)
-
\frac12
$$

Numerically:

$$
K_2 \approx 0.971739827458
$$

The total area of Cell 2 is:

$$
A_2 = s^2
$$

The O-Ta area contained inside Cell 2 is:

$$
S_2 = K_2A_2
$$

Therefore:

$$
S_2 = K_2s^2
$$

By the definition of occupancy:

$$
T_2 = \frac{S_2}{A_2}
$$

Since:

$$
S_2 = K_2A_2
$$

we obtain:

$$
T_2 = K_2
$$

Therefore:

$$
T_2 \approx 0.971739827458
$$

or:

$$
T_2 \approx 97.1739827458\%
$$

---

## 7.1 Interpretation of O2

The value:

$$
0.971739827458
$$

means that approximately 97.1739827458% of the area of Cell 2 is occupied by the O-Ta region under the standard configuration.

Again, this is a percentage of the area of Cell 2.

It is not a percentage of the total O-Ta circle area.

---

## 7.2 Conditions for O2

The coefficient `K_2` is associated with the following standard configuration:

1. The O-Ta structure is a perfect circle.
2. The grid contains nine equal square cells.
3. The circle is centered exactly at the center of the grid.
4. The selected cell is Cell 2, the middle cell of the top row.
5. The circle diameter satisfies:

$$
D = 3s
$$

6. Occupancy is calculated relative to the area of Cell 2 itself.

The coefficient should not be transferred automatically to arbitrary configurations.

---

# 8. Verification and Mathematical Explanation of O2

The Cell 2 result can be represented and investigated using an integral describing the corresponding circular area.

For normalization, set:

$$
s = 1
$$

From:

$$
R = \frac{3s}{2}
$$

we obtain:

$$
R = 1.5
$$

The O-Ta area contained inside Cell 2 can be represented by:

$$
S_2 =
\int_{-s/2}^{s/2}
\left(
\sqrt{2.25s^2-x^2}
-\frac{s}{2}
\right)
dx
$$

This integral is a mathematical representation used to verify the geometric area associated with the specified configuration.

After evaluating the integral for the standard configuration:

$$
S_2 =
\left[
\frac{\sqrt2}{2}
+
\frac94
\arcsin\left(\frac13\right)
-
\frac12
\right]s^2
$$

Therefore:

$$
K_2 =
\frac{\sqrt2}{2}
+
\frac94
\arcsin\left(\frac13\right)
-
\frac12
$$

Numerically:

$$
K_2 \approx 0.971739827458
$$

---

## 8.1 Role of the Integral

The integral is a verification and mathematical-analysis tool.

It describes the amount of circular area located inside the boundaries of Cell 2.

The integral does not change the definition of the occupancy ratio:

$$
T_2 = \frac{S_2}{A_2}
$$

Instead, it provides a way to calculate or verify the value of `S_2` for the specified geometry.

---

## 8.2 Role of `√2`

The term:

$$
\frac{\sqrt2}{2}
$$

appears in the exact expression for `K_2`.

`√2` itself is a standard mathematical quantity.

Its appearance within the complete expression does not make the entire expression a standard elementary-geometry formula.

---

## 8.3 Role of `arcsin`

The inverse sine function:

$$
\arcsin(x)
$$

appears because the exact geometric evaluation involves trigonometric relationships associated with the circular boundary.

Again, `arcsin` is a standard mathematical function.

The O-Ta-Ko-specific result is the particular coefficient produced for the specified geometric configuration.

---

## 8.4 Mathematical Foundation vs. O-Ta-Ko Formula

The following are standard mathematical foundations:

$$
C = 2\pi R
$$

$$
D = 2R
$$

$$
A = \pi R^2
$$

$$
A_i = s^2
$$

as well as the standard functions `sin` and `arcsin`.

The O-Ta-Ko-specific component is the definition and application of the occupancy coefficient:

$$
K_2 =
\frac{\sqrt2}{2}
+
\frac94
\arcsin\left(\frac13\right)
-
\frac12
$$

under the specified configuration.

---

# 9. Symmetry Rules

The standard centered circular configuration possesses geometric symmetry.

Therefore, cells that are equivalent by symmetry have equal occupancy ratios.

---

## 9.1 Corner-Cell Symmetry

Cells 1, 3, 7, and 9 are equivalent corner cells.

Therefore:

$$
T_1 = T_3 = T_7 = T_9
$$

Using the Cell 1 coefficient:

$$
T_1 = T_3 = T_7 = T_9
=
54.540604\%
$$

---

## 9.2 Edge-Cell Symmetry

Cells 2, 4, 6, and 8 are equivalent edge cells.

Therefore:

$$
T_2 = T_4 = T_6 = T_8
$$

Using the Cell 2 coefficient:

$$
T_2 = T_4 = T_6 = T_8
\approx
97.1739827458\%
$$

---

## 9.3 Center Cell

Cell 5 is the central cell.

Under the standard large-circle configuration, the entire cell lies inside the circle.

Therefore:

$$
T_5 = 100\%
$$

and:

$$
K_5 = 1
$$

---

# 10. Cell 5 and the Small-Circle Separation Rule

In the standard configuration of the large O-Ta circle, the entire center cell is contained within the circle.

Therefore:

$$
K_5 = 1
$$

and:

$$
T_5 = 100\%
$$

Because:

$$
A_5 = s^2
$$

and the complete cell lies inside the O-Ta circle:

$$
S_5 = A_5 = s^2
$$

---

## 10.1 Small-Circle Separation Rule

If Cell 5 contains a smaller circle, such as a smaller circular component referred to as a **"head of Bình"**, that smaller circle must not automatically be subtracted from the 100% occupancy value of the large O-Ta circle.

The smaller circle is treated as a separate geometric object.

The separation procedure is:

1. Treat the smaller circle as a separate geometric object.
2. Construct a new 3×3 grid for the smaller circle.
3. Determine its circumference `C`.
4. Determine its radius `R`.
5. Determine its diameter `D`.
6. Determine its grid-cell side length `s`.
7. Determine the occupancy coefficient for its own configuration.
8. Use `K_1`, `K_2`, or `K_5` only if the smaller circle satisfies the corresponding standard configuration.

This rule prevents the geometry of a smaller object from being automatically mixed with the occupancy result of the larger circle.

---

## 10.2 Principle of Independent Geometric Objects

A smaller circle inside a larger O-Ta structure does not automatically become part of the larger circle's occupancy calculation.

The two objects may require separate geometric descriptions.

Therefore, when the smaller object is analyzed:

$$
\text{Large O-Ta system}
\neq
\text{Small-circle system}
$$

unless an explicit rule defines how the two are related.

---

# 11. Formula 4 — Total Area

The total O-Ta area included in a calculation may be expressed as:

$$
S = S_1 + S_2 + \cdots + S_q
$$

where:

- `S_1`, `S_2`, ..., `S_q` are the O-Ta area components being included;
- `q` is the number of terms being added.

Only area belonging to the O-Ta region is included.

Areas outside the O-Ta region are not included.

Formula 4 therefore functions as an accumulation rule for selected O-Ta area components.

---

## 11.1 Interpretation of Formula 4

Formula 4 does not define a new geometric shape.

It provides a general way to combine already-determined O-Ta area components.

For example, if a calculation requires the areas of several cells:

$$
S_{\text{total}}
=
S_1+S_2+S_3
$$

the required components may be added together.

The exact number of terms depends on the problem.

---

# 12. Formula 5 — Hollow Rule

The current O-Ta-Ko formulation contains the following relationships:

$$
O_2 \subset O_4
$$

and:

$$
n_1 > n_2
$$

with:

$$
S = S_0 + d
$$

Some symbols in the original source material are not sufficiently clear to establish their exact intended meanings.

In particular, the exact definitions of some variables, including `n_1`, `n_2`, `z`, and `d`, cannot be determined with complete certainty from the available handwritten notation.

Therefore:

- the readable relationships are preserved;
- no additional definition is invented;
- no uncertain symbol is assigned an unsupported meaning.

This section should remain subject to clarification when the original notation is available in a sufficiently clear form.

---

## 12.1 Notation Preservation Principle

When an original symbol is unclear, the international formulation preserves the symbol rather than replacing it with an invented interpretation.

This prevents ambiguity from being converted into an incorrect theoretical statement.

---

# 13. General O-Ta-Ko Calculation Procedure

A standard O-Ta-Ko occupancy problem can be organized into the following sequence.

---

## Step 1 — Obtain the Circumference

Start with the given circumference:

$$
C
$$

---

## Step 2 — Calculate the Radius

Use the standard circle relation:

$$
R = \frac{C}{2\pi}
$$

---

## Step 3 — Calculate the Diameter

Use:

$$
D = 2R
$$

---

## Step 4 — Verify the Standard Configuration

For the standard O-Ta-Ko configuration, verify:

$$
D = 3s
$$

If the circumference is the known input, calculate the cell side length using:

$$
s = \frac{C}{3\pi}
$$

Equivalently:

$$
s = \frac{D}{3}
$$

---

## Step 5 — Calculate the Area of One Cell

Since each cell is a square:

$$
A_i = s^2
$$

---

## Step 6 — Identify the Cell Type

Determine whether the selected cell is:

- a corner cell;
- an edge cell; or
- the center cell.

---

## Step 7 — Select the Corresponding Occupancy Coefficient

For the standard configuration:

- use `K_1` for a corner cell;
- use `K_2` for an edge cell;
- use `K_5 = 1` for the center cell.

The coefficient must correspond to the actual geometric configuration.

---

## Step 8 — Calculate the O-Ta Area Inside the Cell

Use:

$$
S_i = K_iA_i
$$

Since:

$$
A_i = s^2
$$

this becomes:

$$
S_i = K_is^2
$$

---

## Step 9 — Calculate the Occupancy Ratio

Use:

$$
T_i = \frac{S_i}{A_i}
$$

Under the corresponding standard configuration:

$$
T_i = K_i
$$

---

## Step 10 — Handle a Smaller Circle Separately

If a smaller circle appears inside Cell 5 and further analysis is required, separate it as an independent geometric object.

Construct a new 3×3 configuration for the smaller circle.

---

## Step 11 — Add Required Area Components

Use Formula 4:

$$
S = S_1 + S_2 + \cdots + S_q
$$

to combine the required O-Ta area components.

---

# 14. Numerical Example

Let:

$$
C = 999\text{ m}
$$

and assume that the standard O-Ta-Ko configuration is satisfied.

---

## 14.1 Calculate the Grid-Cell Side

Using:

$$
s = \frac{C}{3\pi}
$$

we obtain:

$$
s =
\frac{999}{3\pi}
\approx
105.9971920992\text{ m}
$$

---

## 14.2 Calculate the Area of One Cell

Using:

$$
A_i = s^2
$$

we obtain:

$$
A_i
\approx
11235.4047329152\text{ m}^2
$$

---

## 14.3 Calculate Cell 1

Using:

$$
S_1 = K_1A_1
$$

with:

$$
K_1 = 0.54540604
$$

gives:

$$
S_1 =
0.54540604A_1
$$

and approximately:

$$
S_1
\approx
6127.8576031765\text{ m}^2
$$

Therefore:

$$
T_1 = 54.540604\%
$$

---

## 14.4 Calculate Cell 2

Using:

$$
S_2 = K_2A_2
$$

with:

$$
K_2 \approx 0.971739827458
$$

gives:

$$
S_2 =
0.971739827458A_2
$$

and approximately:

$$
S_2
\approx
10917.8902565838\text{ m}^2
$$

Therefore:

$$
T_2
\approx
97.1739827458\%
$$

---

## 14.5 Calculate Cell 5

For the standard large-circle configuration:

$$
K_5 = 1
$$

Therefore:

$$
S_5 = A_5
$$

and:

$$
S_5
\approx
11235.4047329152\text{ m}^2
$$

Thus:

$$
T_5 = 100\%
$$

---

# 15. Final Formula Table

| Category | Formula | Meaning |
|---|---|---|
| Radius | `R = C/(2π)` | Radius of the O-Ta circle |
| Diameter | `D = 2R` | Diameter of the O-Ta circle |
| Circle area | `A_circle = πR²` | Total area of the O-Ta circle |
| Circle area from circumference | `A_circle = C²/(4π)` | Total circle area expressed using circumference |
| Standard configuration | `D = 3s` | Diameter-to-grid relationship |
| Grid-cell side | `s = D/3` | Side length of one grid cell |
| Grid-cell side | `s = C/(3π)` | Cell side length derived from circumference |
| Cell area | `A_i = s²` | Total area of cell `i` |
| Occupancy definition | `T_i = S_i/A_i` | O-Ta occupancy ratio within cell `i` |
| Cell 1 coefficient | `K_1 = 0.54540604` | Standard corner-cell occupancy coefficient |
| Cell 1 area | `S_1 = 0.54540604s²` | O-Ta area inside Cell 1 |
| Cell 1 occupancy | `T_1 = 0.54540604` | `54.540604%` |
| Cell 1 deviation | `Δ_1 = T_1 - 1/2` | Deviation from the 50% reference |
| Cell 2 coefficient | `K_2 = √2/2 + (9/4)arcsin(1/3) - 1/2` | Standard edge-cell occupancy coefficient |
| Cell 2 coefficient | `K_2 ≈ 0.971739827458` | Numerical value |
| Cell 2 area | `S_2 = K_2s²` | O-Ta area inside Cell 2 |
| Cell 2 occupancy | `T_2 = K_2` | `97.1739827458%` |
| Cell 5 coefficient | `K_5 = 1` | Full standard center-cell occupancy |
| Cell 5 occupancy | `T_5 = 100%` | Entire center cell is occupied |
| Total area | `S = S_1 + S_2 + ··· + S_q` | Sum of selected O-Ta area components |

---

# 16. General Rules of the O-Ta-Ko Occupancy System

## Rule 1 — Cell-Local Occupancy

The fundamental occupancy definition is:

$$
T_i = \frac{S_i}{A_i}
$$

The ratio measures the proportion of O-Ta area within the individual cell.

It does not measure the proportion of the complete circle represented by that cell.

---

## Rule 2 — The Denominator Is the Cell Area

For the standard square grid:

$$
A_i = s^2
$$

Therefore:

$$
T_i = \frac{S_i}{s^2}
$$

The complete circle area is not used as the denominator of `T_i`.

---

## Rule 3 — The Numerator Is the Actual O-Ta Area Inside the Cell

The numerator:

$$
S_i
$$

contains only the O-Ta area that physically lies inside the selected cell.

Any area outside the O-Ta region is excluded.

---

## Rule 4 — Occupancy Coefficients Are Configuration-Dependent

The coefficient:

$$
K_1 = 0.54540604
$$

is associated with the standard corner-cell configuration.

The coefficient:

$$
K_2 =
\frac{\sqrt2}{2}
+
\frac94
\arcsin\left(\frac13\right)
-
\frac12
$$

is associated with the standard edge-cell configuration.

These coefficients are not universal for arbitrary shapes, positions, or grid sizes.

---

## Rule 5 — Symmetry May Be Used

Under the standard centered configuration:

$$
T_1 = T_3 = T_7 = T_9
$$

and:

$$
T_2 = T_4 = T_6 = T_8
$$

Symmetry allows a single coefficient to represent an entire geometrically equivalent group.

---

## Rule 6 — The Center Cell Has Full Occupancy

For the standard large-circle configuration:

$$
T_5 = 100\%
$$

and:

$$
K_5 = 1
$$

because the entire center cell lies inside the circle.

---

## Rule 7 — Smaller Circles Are Separate Objects

A smaller circle inside Cell 5 is not automatically subtracted from the large-circle occupancy.

It must be treated as a separate geometric object when further analysis is required.

---

## Rule 8 — A New 3×3 System May Be Used for a Smaller Circle

A smaller circle may be analyzed using its own 3×3 grid.

Its own:

- circumference;
- radius;
- diameter;
- grid-cell side length;
- occupancy coefficients;

must be determined from its own configuration.

---

## Rule 9 — Standard Geometry and O-Ta-Ko Formulas Must Be Distinguished

The following are standard mathematical relationships:

$$
C = 2\pi R
$$

$$
D = 2R
$$

$$
A = \pi R^2
$$

$$
A_i = s^2
$$

These relationships provide the mathematical foundation.

The O-Ta-Ko-specific component is the occupancy framework and its configuration-dependent coefficients.

---

## Rule 10 — The 3×3 Configuration Must Be Preserved

The standard coefficients described in this document rely on the standard 3×3 geometry.

Changing the grid structure, circle position, diameter-to-cell relationship, or selected cell configuration may change the occupancy result.

---

## Rule 11 — The Relation `D = 3s` Is Essential to the Standard Configuration

The standard configuration requires:

$$
D = 3s
$$

Therefore:

$$
s = \frac{D}{3}
$$

and, using the circumference:

$$
s = \frac{C}{3\pi}
$$

This relation must be preserved when applying the standard coefficients.

---

## Rule 12 — `S_i` and `T_i` Are Different Quantities

`S_i` represents an area:

$$
S_i = \text{O-Ta area inside cell }i
$$

while `T_i` represents a ratio:

$$
T_i = \frac{S_i}{A_i}
$$

Thus:

- `S_i` has units of area.
- `T_i` is dimensionless.
- `T_i` may be represented as a decimal or a percentage.

---

## Rule 13 — Percentage Conversion

If:

$$
T_i = x
$$

then its percentage representation is:

$$
T_i(\%) = 100x
$$

For example:

$$
0.54540604 \times 100
=
54.540604\%
$$

---

## Rule 14 — A Coefficient Must Not Be Used Without Its Conditions

Before applying a coefficient such as `K_1` or `K_2`, verify that the relevant geometric conditions are satisfied.

A coefficient is tied to its defined configuration.

---

# 17. Scope and Conditions of Application

The formulas and coefficients in this document are intended for the standard O-Ta-Ko 3×3 circular configuration unless otherwise specified.

The standard conditions include:

$$
D = 3s
$$

with:

- a perfect circular O-Ta structure;
- a centered circle;
- a 3×3 grid;
- equal square cells;
- cell-local occupancy measurement;
- configuration-specific occupancy coefficients.

The following standard values are documented:

### Corner-cell occupancy

$$
K_1 = 0.54540604
$$

and:

$$
T_1 = 54.540604\%
$$

### Edge-cell occupancy

$$
K_2 =
\frac{\sqrt2}{2}
+
\frac94
\arcsin\left(\frac13\right)
-
\frac12
$$

with:

$$
K_2 \approx 0.971739827458
$$

and:

$$
T_2 \approx 97.1739827458\%
$$

### Center-cell occupancy

$$
K_5 = 1
$$

and:

$$
T_5 = 100\%
$$

These values apply only within the corresponding standard geometric configurations.

---

# 18. Final Statement

The **O-Ta-Ko Theory — O-Ta Occupancy Formulas in a 3×3 Grid** provides a framework for describing the proportion of O-Ta area contained inside individual cells of a centered 3×3 grid.

The central quantity is the cell-local occupancy ratio:

$$
T_i = \frac{S_i}{A_i}
$$

where:

- `S_i` is the actual O-Ta area contained inside cell `i`;
- `A_i` is the total geometric area of cell `i`.

For a standard square grid:

$$
A_i = s^2
$$

and the standard circle-grid relationship is:

$$
D = 3s
$$

The documented corner-cell coefficient is:

$$
K_1 = 0.54540604
$$

giving:

$$
T_1 = 54.540604\%
$$

The documented edge-cell coefficient is:

$$
K_2 =
\frac{\sqrt2}{2}
+
\frac94
\arcsin\left(\frac13\right)
-
\frac12
$$

with:

$$
K_2 \approx 0.971739827458
$$

giving:

$$
T_2 \approx 97.1739827458\%
$$

The standard center cell satisfies:

$$
K_5 = 1
$$

and therefore:

$$
T_5 = 100\%
$$

The standard mathematical relationships involving circumference, radius, diameter, circle area, square area, and trigonometric functions form the mathematical foundation of the system.

The O-Ta-Ko-specific component lies in the occupancy definition, occupancy coefficients, geometric configuration rules, symmetry rules, and the procedures used to apply those quantities to the specified 3×3 model.

O1 is included in the O-Ta-Ko documentation.

O2 has been officially published as an official O-Ta-Ko formula.

All occupancy coefficients must be applied only to the geometric configurations for which they are defined.

---

# Summary of the Core O-Ta-Ko System

The standard dimensional relationship is:

$$
D = 3s
$$

The standard circle relations are:

$$
C = 2\pi R
$$

$$
D = 2R
$$

$$
A_{\text{circle}} = \pi R^2
$$

The grid-cell area is:

$$
A_i = s^2
$$

The fundamental occupancy definition is:

$$
T_i = \frac{S_i}{A_i}
$$

For the standard corner-cell configuration:

$$
K_1 = 0.54540604
$$

For the standard edge-cell configuration:

$$
K_2 =
\frac{\sqrt2}{2}
+
\frac94
\arcsin\left(\frac13\right)
-
\frac12
$$

For the standard center-cell configuration:

$$
K_5 = 1
$$

The symmetry relations are:

$$
T_1 = T_3 = T_7 = T_9
$$

and:

$$
T_2 = T_4 = T_6 = T_8
$$

The total selected O-Ta area is represented by:

$$
S = S_1 + S_2 + \cdots + S_q
$$

These relations together form the documented core of the O-Ta-Ko occupancy system for the standard 3×3 circular configuration.
