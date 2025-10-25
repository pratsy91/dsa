"use client";
import Link from "next/link";
import { useState } from "react";

export default function Matrix() {
  const [activeTab, setActiveTab] = useState("fundamentals");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <header className="border-b border-gray-700 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link
            href="/"
            className="text-blue-400 hover:text-blue-300 mb-2 inline-block"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Matrix & 2D Arrays Mastery
          </h1>
          <p className="text-gray-400 mt-2">
            Snake Pattern, Spiral Traversal, Rotation & Search in 2D Arrays
          </p>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-gray-800/50 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-2 overflow-x-auto">
            {[
              { id: "fundamentals", label: "📚 Fundamentals" },
              { id: "traversal", label: "🔄 Traversal" },
              { id: "transformation", label: "🔄 Transformation" },
              { id: "search", label: "🔍 Search" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 font-semibold whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? "text-purple-400 border-b-2 border-purple-400"
                    : "text-gray-400 hover:text-gray-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {activeTab === "fundamentals" && <FundamentalsSection />}
        {activeTab === "traversal" && <TraversalSection />}
        {activeTab === "transformation" && <TransformationSection />}
        {activeTab === "search" && <SearchSection />}
      </main>
    </div>
  );
}

// Fundamentals Section
function FundamentalsSection() {
  return (
    <div className="space-y-8">
      {/* What are 2D Arrays */}
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          What are 2D Arrays (Matrices)?
        </h2>
        <p className="text-gray-300 text-lg mb-6">
          A 2D array (matrix) is a data structure that represents a collection
          of elements arranged in rows and columns. It&apos;s essentially an
          array of arrays, where each element can be accessed using two indices:
          row and column.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-purple-200 mb-3">
              Key Characteristics:
            </h3>
            <ul className="space-y-2 text-purple-100">
              <li>
                • <strong>Dimensions:</strong> Defined by rows × columns
              </li>
              <li>
                • <strong>Indexing:</strong> matrix[i][j] where i=row, j=column
              </li>
              <li>
                • <strong>Memory Layout:</strong> Row-major or column-major
              </li>
              <li>
                • <strong>Applications:</strong> Images, spreadsheets, games
              </li>
            </ul>
          </div>

          <div className="bg-pink-900/20 border border-pink-500/30 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-pink-200 mb-3">
              Common Operations:
            </h3>
            <ul className="space-y-2 text-pink-100">
              <li>
                • <strong>Traversal:</strong> Snake pattern, spiral, boundary
              </li>
              <li>
                • <strong>Transformation:</strong> Transpose, rotate, flip
              </li>
              <li>
                • <strong>Search:</strong> Binary search in sorted matrices
              </li>
              <li>
                • <strong>Manipulation:</strong> Add, subtract, multiply
                matrices
              </li>
            </ul>
          </div>
        </div>

        <TheoryBlock title="2D Array Representation & Access">
          <CodeBlock
            code={`// Creating a 2D array in JavaScript
const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12]
];

// Accessing elements: matrix[row][column]
console.log(matrix[1][2]); // 7 (row 1, column 2)

// Getting dimensions
const rows = matrix.length;        // 3
const cols = matrix[0].length;     // 4

// Iterating through 2D array
for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
    console.log(\`matrix[\${i}][\${j}] = \${matrix[i][j]}\`);
  }
}

// Common patterns:
// 1. Row-wise traversal
for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
    // Process matrix[i][j]
  }
}

// 2. Column-wise traversal
for (let j = 0; j < cols; j++) {
  for (let i = 0; i < rows; i++) {
    // Process matrix[i][j]
  }
}

// 3. Diagonal traversal
for (let i = 0; i < Math.min(rows, cols); i++) {
  // Process matrix[i][i] (main diagonal)
}

// 4. Anti-diagonal traversal
for (let i = 0; i < Math.min(rows, cols); i++) {
  // Process matrix[i][cols-1-i]
}`}
          />
        </TheoryBlock>
      </div>

      {/* Matrix Types */}
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Types of Matrices
        </h2>
        <p className="text-gray-300 mb-6">
          Different types of matrices have specific properties that can be
          exploited for efficient algorithms.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-3">
              🔲 Square Matrix
            </h3>
            <p className="text-gray-300 text-sm mb-3">
              Equal number of rows and columns (n × n).
            </p>
            <ul className="text-gray-400 text-xs space-y-1">
              <li>• Symmetric: A[i][j] = A[j][i]</li>
              <li>• Diagonal: Non-zero only on main diagonal</li>
              <li>• Identity: 1s on diagonal, 0s elsewhere</li>
            </ul>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-3">
              📊 Sorted Matrix
            </h3>
            <p className="text-gray-300 text-sm mb-3">
              Elements sorted in rows and/or columns.
            </p>
            <ul className="text-gray-400 text-xs space-y-1">
              <li>• Row-wise sorted</li>
              <li>• Column-wise sorted</li>
              <li>• Both row and column sorted</li>
            </ul>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-3">
              🔄 Special Patterns
            </h3>
            <p className="text-gray-300 text-sm mb-3">
              Matrices with specific arrangements.
            </p>
            <ul className="text-gray-400 text-xs space-y-1">
              <li>• Snake pattern</li>
              <li>• Spiral pattern</li>
              <li>• Boundary elements</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// Traversal Section
function TraversalSection() {
  return (
    <div className="space-y-8">
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Matrix Traversal Problems
        </h2>
        <p className="text-gray-300 mb-6">
          Different ways to traverse and process elements in a 2D array.
        </p>
      </div>

      <ProblemBlock
        title="1. Matrix in Snake Pattern"
        difficulty="Easy"
        description="Print matrix elements in snake pattern: first row left to right, second row right to left, and so on."
        solution={`// Matrix in Snake Pattern

function printSnakePattern(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = [];
  
  for (let i = 0; i < rows; i++) {
    if (i % 2 === 0) {
      // Even rows: left to right
      for (let j = 0; j < cols; j++) {
        result.push(matrix[i][j]);
      }
    } else {
      // Odd rows: right to left
      for (let j = cols - 1; j >= 0; j--) {
        result.push(matrix[i][j]);
      }
    }
  }
  
  return result;
}

// Alternative: Using reverse for odd rows
function printSnakePatternReverse(matrix) {
  const result = [];
  
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 === 0) {
      result.push(...matrix[i]);
    } else {
      result.push(...matrix[i].reverse());
    }
  }
  
  return result;
}

// Print snake pattern with visualization
function printSnakePatternVisual(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  
  console.log("Snake Pattern Traversal:");
  
  for (let i = 0; i < rows; i++) {
    if (i % 2 === 0) {
      console.log(\`Row \${i}: \${matrix[i].join(' → ')}\`);
    } else {
      console.log(\`Row \${i}: \${matrix[i].reverse().join(' ← ')}\`);
      matrix[i].reverse(); // Restore original order
    }
  }
}

// Snake pattern with custom separator
function printSnakePatternCustom(matrix, separator = ' ') {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = [];
  
  for (let i = 0; i < rows; i++) {
    if (i % 2 === 0) {
      // Left to right
      for (let j = 0; j < cols; j++) {
        result.push(matrix[i][j]);
      }
    } else {
      // Right to left
      for (let j = cols - 1; j >= 0; j--) {
        result.push(matrix[i][j]);
      }
    }
  }
  
  return result.join(separator);
}

// Test cases
const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12]
];

console.log(printSnakePattern(matrix)); // [1, 2, 3, 4, 8, 7, 6, 5, 9, 10, 11, 12]
console.log(printSnakePatternCustom(matrix, ' → ')); // "1 → 2 → 3 → 4 → 8 → 7 → 6 → 5 → 9 → 10 → 11 → 12"
printSnakePatternVisual(matrix);`}
        explanation="Snake pattern alternates direction: even rows go left-to-right, odd rows go right-to-left. Time: O(m×n), Space: O(1)."
      />

      <ProblemBlock
        title="2. Matrix Boundary Traversal"
        difficulty="Easy"
        description="Print all boundary elements of a matrix in clockwise order: top row, right column, bottom row (reverse), left column (reverse)."
        solution={`// Matrix Boundary Traversal

function printBoundaryElements(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = [];
  
  // Handle edge cases
  if (rows === 1) {
    // Only one row
    return matrix[0];
  }
  
  if (cols === 1) {
    // Only one column
    return matrix.map(row => row[0]);
  }
  
  // Top row (left to right)
  for (let j = 0; j < cols; j++) {
    result.push(matrix[0][j]);
  }
  
  // Right column (top to bottom, excluding first element)
  for (let i = 1; i < rows; i++) {
    result.push(matrix[i][cols - 1]);
  }
  
  // Bottom row (right to left, excluding last element)
  for (let j = cols - 2; j >= 0; j--) {
    result.push(matrix[rows - 1][j]);
  }
  
  // Left column (bottom to top, excluding first and last elements)
  for (let i = rows - 2; i >= 1; i--) {
    result.push(matrix[i][0]);
  }
  
  return result;
}

// Boundary traversal with detailed steps
function printBoundaryWithSteps(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = [];
  
  console.log("Boundary Traversal Steps:");
  
  if (rows === 1) {
    console.log("Single row:", matrix[0]);
    return matrix[0];
  }
  
  if (cols === 1) {
    console.log("Single column:", matrix.map(row => row[0]));
    return matrix.map(row => row[0]);
  }
  
  // Step 1: Top row
  const topRow = [];
  for (let j = 0; j < cols; j++) {
    topRow.push(matrix[0][j]);
  }
  console.log("1. Top row:", topRow);
  result.push(...topRow);
  
  // Step 2: Right column
  const rightCol = [];
  for (let i = 1; i < rows; i++) {
    rightCol.push(matrix[i][cols - 1]);
  }
  console.log("2. Right column:", rightCol);
  result.push(...rightCol);
  
  // Step 3: Bottom row
  const bottomRow = [];
  for (let j = cols - 2; j >= 0; j--) {
    bottomRow.push(matrix[rows - 1][j]);
  }
  console.log("3. Bottom row (reverse):", bottomRow);
  result.push(...bottomRow);
  
  // Step 4: Left column
  const leftCol = [];
  for (let i = rows - 2; i >= 1; i--) {
    leftCol.push(matrix[i][0]);
  }
  console.log("4. Left column (reverse):", leftCol);
  result.push(...leftCol);
  
  return result;
}

// Alternative: Using direction vectors
function printBoundaryDirectional(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  
  if (rows === 1) return matrix[0];
  if (cols === 1) return matrix.map(row => row[0]);
  
  const result = [];
  const directions = [
    [0, 1],   // Right
    [1, 0],   // Down
    [0, -1],  // Left
    [-1, 0]   // Up
  ];
  
  let i = 0, j = 0;
  let dirIndex = 0;
  let visited = new Set();
  
  // Move in boundary pattern
  while (result.length < (2 * rows + 2 * cols - 4)) {
    const key = \`\${i}-\${j}\`;
    if (!visited.has(key)) {
      result.push(matrix[i][j]);
      visited.add(key);
    }
    
    const nextI = i + directions[dirIndex][0];
    const nextJ = j + directions[dirIndex][1];
    
    // Check if next position is valid and on boundary
    if (nextI >= 0 && nextI < rows && nextJ >= 0 && nextJ < cols &&
        (nextI === 0 || nextI === rows - 1 || nextJ === 0 || nextJ === cols - 1)) {
      i = nextI;
      j = nextJ;
    } else {
      dirIndex = (dirIndex + 1) % 4;
    }
  }
  
  return result;
}

// Test cases
const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];

console.log(printBoundaryElements(matrix)); // [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5]
console.log(printBoundaryWithSteps(matrix));`}
        explanation="Boundary traversal follows the perimeter: top row → right column → bottom row (reverse) → left column (reverse). Time: O(m+n), Space: O(1)."
      />

      <ProblemBlock
        title="3. Spiral Traversal of Matrix"
        difficulty="Medium"
        description="Print matrix elements in spiral order: start from top-left, go right, down, left, up, and repeat inwards."
        solution={`// Spiral Traversal of Matrix

function spiralTraversal(matrix) {
  if (matrix.length === 0) return [];
  
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = [];
  
  let top = 0, bottom = rows - 1;
  let left = 0, right = cols - 1;
  
  while (top <= bottom && left <= right) {
    // Traverse top row from left to right
    for (let j = left; j <= right; j++) {
      result.push(matrix[top][j]);
    }
    top++;
    
    // Traverse right column from top to bottom
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right--;
    
    // Traverse bottom row from right to left (if top <= bottom)
    if (top <= bottom) {
      for (let j = right; j >= left; j--) {
        result.push(matrix[bottom][j]);
      }
      bottom--;
    }
    
    // Traverse left column from bottom to top (if left <= right)
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++;
    }
  }
  
  return result;
}

// Spiral traversal with direction vectors
function spiralTraversalDirectional(matrix) {
  if (matrix.length === 0) return [];
  
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = [];
  const visited = Array(rows).fill().map(() => Array(cols).fill(false));
  
  const directions = [
    [0, 1],   // Right
    [1, 0],   // Down
    [0, -1],  // Left
    [-1, 0]   // Up
  ];
  
  let i = 0, j = 0;
  let dirIndex = 0;
  
  for (let count = 0; count < rows * cols; count++) {
    result.push(matrix[i][j]);
    visited[i][j] = true;
    
    // Calculate next position
    const nextI = i + directions[dirIndex][0];
    const nextJ = j + directions[dirIndex][1];
    
    // Check if next position is valid and not visited
    if (nextI >= 0 && nextI < rows && nextJ >= 0 && nextJ < cols && 
        !visited[nextI][nextJ]) {
      i = nextI;
      j = nextJ;
    } else {
      // Change direction
      dirIndex = (dirIndex + 1) % 4;
      i += directions[dirIndex][0];
      j += directions[dirIndex][1];
    }
  }
  
  return result;
}

// Spiral traversal with step-by-step visualization
function spiralTraversalVisual(matrix) {
  if (matrix.length === 0) return [];
  
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = [];
  
  let top = 0, bottom = rows - 1;
  let left = 0, right = cols - 1;
  let step = 1;
  
  console.log("Spiral Traversal Steps:");
  
  while (top <= bottom && left <= right) {
    console.log(\`\\nStep \${step}: Top=\${top}, Bottom=\${bottom}, Left=\${left}, Right=\${right}\`);
    
    // Top row
    const topRow = [];
    for (let j = left; j <= right; j++) {
      topRow.push(matrix[top][j]);
    }
    console.log(\`  → Top row: \${topRow.join(' → ')}\`);
    result.push(...topRow);
    top++;
    
    if (top > bottom) break;
    
    // Right column
    const rightCol = [];
    for (let i = top; i <= bottom; i++) {
      rightCol.push(matrix[i][right]);
    }
    console.log(\`  ↓ Right column: \${rightCol.join(' ↓ ')}\`);
    result.push(...rightCol);
    right--;
    
    if (left > right) break;
    
    // Bottom row
    const bottomRow = [];
    for (let j = right; j >= left; j--) {
      bottomRow.push(matrix[bottom][j]);
    }
    console.log(\`  ← Bottom row: \${bottomRow.join(' ← ')}\`);
    result.push(...bottomRow);
    bottom--;
    
    if (top > bottom) break;
    
    // Left column
    const leftCol = [];
    for (let i = bottom; i >= top; i--) {
      leftCol.push(matrix[i][left]);
    }
    console.log(\`  ↑ Left column: \${leftCol.join(' ↑ ')}\`);
    result.push(...leftCol);
    left++;
    
    step++;
  }
  
  return result;
}

// Generate spiral matrix
function generateSpiralMatrix(n) {
  const matrix = Array(n).fill().map(() => Array(n).fill(0));
  
  let top = 0, bottom = n - 1;
  let left = 0, right = n - 1;
  let num = 1;
  
  while (top <= bottom && left <= right) {
    // Top row
    for (let j = left; j <= right; j++) {
      matrix[top][j] = num++;
    }
    top++;
    
    // Right column
    for (let i = top; i <= bottom; i++) {
      matrix[i][right] = num++;
    }
    right--;
    
    // Bottom row
    if (top <= bottom) {
      for (let j = right; j >= left; j--) {
        matrix[bottom][j] = num++;
      }
      bottom--;
    }
    
    // Left column
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        matrix[i][left] = num++;
      }
      left++;
    }
  }
  
  return matrix;
}

// Test cases
const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];

console.log(spiralTraversal(matrix)); // [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]
console.log(spiralTraversalVisual(matrix));
console.log(generateSpiralMatrix(4));`}
        explanation="Spiral traversal uses four boundaries (top, bottom, left, right) and moves inward. Time: O(m×n), Space: O(1)."
      />
    </div>
  );
}

// Transformation Section
function TransformationSection() {
  return (
    <div className="space-y-8">
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Matrix Transformation Problems
        </h2>
        <p className="text-gray-300 mb-6">
          Operations that modify the structure or orientation of matrices.
        </p>
      </div>

      <ProblemBlock
        title="4. Transpose of a Matrix"
        difficulty="Easy"
        description="Find the transpose of a matrix by swapping rows and columns: A^T[i][j] = A[j][i]."
        solution={`// Transpose of a Matrix

function transposeMatrix(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const transpose = Array(cols).fill().map(() => Array(rows).fill(0));
  
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      transpose[j][i] = matrix[i][j];
    }
  }
  
  return transpose;
}

// In-place transpose for square matrix
function transposeSquareMatrix(matrix) {
  const n = matrix.length;
  
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      // Swap matrix[i][j] and matrix[j][i]
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  
  return matrix;
}

// Transpose using map (functional approach)
function transposeFunctional(matrix) {
  return matrix[0].map((_, colIndex) => 
    matrix.map(row => row[colIndex])
  );
}

// Transpose with validation
function transposeWithValidation(matrix) {
  if (!matrix || matrix.length === 0) {
    throw new Error("Matrix cannot be empty");
  }
  
  const rows = matrix.length;
  const cols = matrix[0].length;
  
  // Check if all rows have same length
  for (let i = 1; i < rows; i++) {
    if (matrix[i].length !== cols) {
      throw new Error("All rows must have the same length");
    }
  }
  
  const transpose = Array(cols).fill().map(() => Array(rows).fill(0));
  
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      transpose[j][i] = matrix[i][j];
    }
  }
  
  return transpose;
}

// Transpose with step-by-step visualization
function transposeVisual(matrix) {
  console.log("Original Matrix:");
  matrix.forEach((row, i) => {
    console.log(\`Row \${i}: [\${row.join(', ')}]\`);
  });
  
  const rows = matrix.length;
  const cols = matrix[0].length;
  const transpose = Array(cols).fill().map(() => Array(rows).fill(0));
  
  console.log("\\nTranspose Process:");
  
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      transpose[j][i] = matrix[i][j];
      console.log(\`matrix[\${i}][\${j}] = \${matrix[i][j]} → transpose[\${j}][\${i}] = \${transpose[j][i]}\`);
    }
  }
  
  console.log("\\nTransposed Matrix:");
  transpose.forEach((row, i) => {
    console.log(\`Row \${i}: [\${row.join(', ')}]\`);
  });
  
  return transpose;
}

// Properties of transpose
function transposeProperties(matrix) {
  const transpose = transposeMatrix(matrix);
  
  console.log("Transpose Properties:");
  console.log("1. (A^T)^T = A");
  const doubleTranspose = transposeMatrix(transpose);
  console.log("   Double transpose equals original:", 
    JSON.stringify(doubleTranspose) === JSON.stringify(matrix));
  
  console.log("2. (A + B)^T = A^T + B^T");
  console.log("   (This applies when adding two matrices)");
  
  console.log("3. (kA)^T = k(A^T)");
  console.log("   (This applies when multiplying by scalar)");
  
  return transpose;
}

// Test cases
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const rectangularMatrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8]
];

console.log("Square Matrix Transpose:");
console.log(transposeMatrix(matrix));
console.log("\\nRectangular Matrix Transpose:");
console.log(transposeMatrix(rectangularMatrix));

console.log("\\nIn-place transpose:");
console.log(transposeSquareMatrix([...matrix]));

console.log("\\nFunctional approach:");
console.log(transposeFunctional(matrix));

transposeVisual(matrix);`}
        explanation="Transpose swaps rows and columns: A^T[i][j] = A[j][i]. For square matrices, can be done in-place. Time: O(m×n), Space: O(m×n) or O(1) for in-place."
      />

      <ProblemBlock
        title="5. Rotate Matrix Anti-clockwise by 90"
        difficulty="Medium"
        description="Rotate a matrix 90 degrees anti-clockwise (counter-clockwise) in-place."
        solution={`// Rotate Matrix Anti-clockwise by 90 degrees

function rotateMatrix90AntiClockwise(matrix) {
  const n = matrix.length;
  
  // Step 1: Transpose the matrix
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  
  // Step 2: Reverse each column
  for (let j = 0; j < n; j++) {
    let top = 0, bottom = n - 1;
    while (top < bottom) {
      [matrix[top][j], matrix[bottom][j]] = [matrix[bottom][j], matrix[top][j]];
      top++;
      bottom--;
    }
  }
  
  return matrix;
}

// Alternative: Direct rotation formula
function rotateMatrix90AntiClockwiseDirect(matrix) {
  const n = matrix.length;
  const rotated = Array(n).fill().map(() => Array(n).fill(0));
  
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // For 90° anti-clockwise: new_row = old_col, new_col = n-1-old_row
      rotated[i][j] = matrix[j][n - 1 - i];
    }
  }
  
  return rotated;
}

// Rotate with step-by-step visualization
function rotateMatrix90AntiClockwiseVisual(matrix) {
  console.log("Original Matrix:");
  matrix.forEach((row, i) => {
    console.log(\`Row \${i}: [\${row.join(', ')}]\`);
  });
  
  const n = matrix.length;
  
  // Step 1: Transpose
  console.log("\\nStep 1: Transpose the matrix");
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
      console.log(\`Swap matrix[\${i}][\${j}] and matrix[\${j}][\${i}]\`);
    }
  }
  
  console.log("After transpose:");
  matrix.forEach((row, i) => {
    console.log(\`Row \${i}: [\${row.join(', ')}]\`);
  });
  
  // Step 2: Reverse each column
  console.log("\\nStep 2: Reverse each column");
  for (let j = 0; j < n; j++) {
    let top = 0, bottom = n - 1;
    while (top < bottom) {
      [matrix[top][j], matrix[bottom][j]] = [matrix[bottom][j], matrix[top][j]];
      console.log(\`Swap matrix[\${top}][\${j}] and matrix[\${bottom}][\${j}]\`);
      top++;
      bottom--;
    }
  }
  
  console.log("\\nFinal rotated matrix (90° anti-clockwise):");
  matrix.forEach((row, i) => {
    console.log(\`Row \${i}: [\${row.join(', ')}]\`);
  });
  
  return matrix;
}

// Multiple rotations
function rotateMatrixMultiple(matrix, rotations) {
  const n = matrix.length;
  const effectiveRotations = rotations % 4; // 4 rotations = 360° = no change
  
  for (let r = 0; r < effectiveRotations; r++) {
    rotateMatrix90AntiClockwise(matrix);
  }
  
  return matrix;
}

// Compare different rotation directions
function compareRotations(matrix) {
  const original = matrix.map(row => [...row]);
  const antiClockwise = rotateMatrix90AntiClockwise(matrix.map(row => [...row]));
  const clockwise = rotateMatrix90Clockwise(matrix.map(row => [...row]));
  
  console.log("Rotation Comparison:");
  console.log("Original:");
  original.forEach(row => console.log(row));
  
  console.log("\\n90° Anti-clockwise:");
  antiClockwise.forEach(row => console.log(row));
  
  console.log("\\n90° Clockwise:");
  clockwise.forEach(row => console.log(row));
  
  return { original, antiClockwise, clockwise };
}

// Helper function for clockwise rotation
function rotateMatrix90Clockwise(matrix) {
  const n = matrix.length;
  
  // Step 1: Transpose
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  
  // Step 2: Reverse each row
  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }
  
  return matrix;
}

// Rotate by any angle (90, 180, 270)
function rotateMatrixByAngle(matrix, angle) {
  const n = matrix.length;
  const rotations = angle / 90;
  
  if (rotations % 1 !== 0) {
    throw new Error("Angle must be a multiple of 90 degrees");
  }
  
  for (let i = 0; i < rotations; i++) {
    rotateMatrix90AntiClockwise(matrix);
  }
  
  return matrix;
}

// Test cases
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log("Original Matrix:");
matrix.forEach(row => console.log(row));

console.log("\\n90° Anti-clockwise Rotation:");
const rotated = rotateMatrix90AntiClockwise(matrix.map(row => [...row]));
rotated.forEach(row => console.log(row));

console.log("\\nDirect rotation:");
console.log(rotateMatrix90AntiClockwiseDirect(matrix.map(row => [...row])));

console.log("\\nMultiple rotations (180°):");
console.log(rotateMatrixMultiple(matrix.map(row => [...row]), 2));

compareRotations(matrix.map(row => [...row]));`}
        explanation="90° anti-clockwise rotation: first transpose matrix, then reverse each column. Time: O(n²), Space: O(1) for in-place. Formula: new[i][j] = old[j][n-1-i]."
      />
    </div>
  );
}

// Search Section
function SearchSection() {
  return (
    <div className="space-y-8">
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Matrix Search Problems
        </h2>
        <p className="text-gray-300 mb-6">
          Searching for elements in sorted and unsorted matrices.
        </p>
      </div>

      <ProblemBlock
        title="6. Search in Row-wise and Column-wise Sorted Matrix"
        difficulty="Medium"
        description="Search for a target value in a matrix where each row and column is sorted in ascending order."
        solution={`// Search in Row-wise and Column-wise Sorted Matrix

function searchInSortedMatrix(matrix, target) {
  if (matrix.length === 0 || matrix[0].length === 0) return [-1, -1];
  
  const rows = matrix.length;
  const cols = matrix[0].length;
  
  // Start from top-right corner
  let i = 0, j = cols - 1;
  
  while (i < rows && j >= 0) {
    if (matrix[i][j] === target) {
      return [i, j];
    } else if (matrix[i][j] > target) {
      // Current element is greater, move left
      j--;
    } else {
      // Current element is smaller, move down
      i++;
    }
  }
  
  return [-1, -1]; // Not found
}

// Alternative: Start from bottom-left corner
function searchInSortedMatrixBottomLeft(matrix, target) {
  if (matrix.length === 0 || matrix[0].length === 0) return [-1, -1];
  
  const rows = matrix.length;
  const cols = matrix[0].length;
  
  // Start from bottom-left corner
  let i = rows - 1, j = 0;
  
  while (i >= 0 && j < cols) {
    if (matrix[i][j] === target) {
      return [i, j];
    } else if (matrix[i][j] > target) {
      // Current element is greater, move up
      i--;
    } else {
      // Current element is smaller, move right
      j++;
    }
  }
  
  return [-1, -1];
}

// Search with detailed steps
function searchInSortedMatrixWithSteps(matrix, target) {
  console.log(\`Searching for \${target} in sorted matrix:\`);
  matrix.forEach((row, i) => {
    console.log(\`Row \${i}: [\${row.join(', ')}]\`);
  });
  
  if (matrix.length === 0 || matrix[0].length === 0) {
    console.log("Matrix is empty");
    return [-1, -1];
  }
  
  const rows = matrix.length;
  const cols = matrix[0].length;
  
  let i = 0, j = cols - 1;
  let step = 1;
  
  console.log(\`\\nStarting from top-right corner: matrix[0][\${cols-1}] = \${matrix[0][cols-1]}\`);
  
  while (i < rows && j >= 0) {
    console.log(\`\\nStep \${step}: At position [\${i}][\${j}] = \${matrix[i][j]}\`);
    
    if (matrix[i][j] === target) {
      console.log(\`✓ Found target \${target} at position [\${i}][\${j}]\`);
      return [i, j];
    } else if (matrix[i][j] > target) {
      console.log(\`\${matrix[i][j]} > \${target}, moving left to [\${i}][\${j-1}]\`);
      j--;
    } else {
      console.log(\`\${matrix[i][j]} < \${target}, moving down to [\${i+1}][\${j}]\`);
      i++;
    }
    step++;
  }
  
  console.log("✗ Target not found");
  return [-1, -1];
}

// Search all occurrences
function searchAllInSortedMatrix(matrix, target) {
  const results = [];
  const rows = matrix.length;
  const cols = matrix[0].length;
  
  let i = 0, j = cols - 1;
  
  while (i < rows && j >= 0) {
    if (matrix[i][j] === target) {
      results.push([i, j]);
      
      // Check if there are more occurrences in the same row or column
      let tempI = i + 1;
      let tempJ = j - 1;
      
      // Check down
      while (tempI < rows && matrix[tempI][j] === target) {
        results.push([tempI, j]);
        tempI++;
      }
      
      // Check left
      while (tempJ >= 0 && matrix[i][tempJ] === target) {
        results.push([i, tempJ]);
        tempJ--;
      }
      
      i++;
      j--;
    } else if (matrix[i][j] > target) {
      j--;
    } else {
      i++;
    }
  }
  
  return results;
}

// Binary search approach for each row
function searchInSortedMatrixBinarySearch(matrix, target) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  
  for (let i = 0; i < rows; i++) {
    const result = binarySearch(matrix[i], target);
    if (result !== -1) {
      return [i, result];
    }
  }
  
  return [-1, -1];
}

function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return -1;
}

// Performance comparison
function compareSearchMethods(matrix, target) {
  console.log("Performance Comparison:");
  
  const start1 = performance.now();
  const result1 = searchInSortedMatrix(matrix, target);
  const end1 = performance.now();
  console.log(\`Top-right approach: \${result1} (Time: \${(end1-start1).toFixed(2)}ms)\`);
  
  const start2 = performance.now();
  const result2 = searchInSortedMatrixBottomLeft(matrix, target);
  const end2 = performance.now();
  console.log(\`Bottom-left approach: \${result2} (Time: \${(end2-start2).toFixed(2)}ms)\`);
  
  const start3 = performance.now();
  const result3 = searchInSortedMatrixBinarySearch(matrix, target);
  const end3 = performance.now();
  console.log(\`Binary search approach: \${result3} (Time: \${(end3-start3).toFixed(2)}ms)\`);
  
  return { result1, result2, result3 };
}

// Test cases
const matrix = [
  [10, 20, 30, 40],
  [15, 25, 35, 45],
  [27, 29, 37, 48],
  [32, 33, 39, 50]
];

console.log("Search in sorted matrix:");
console.log(searchInSortedMatrix(matrix, 29)); // [2, 1]
console.log(searchInSortedMatrix(matrix, 100)); // [-1, -1]

console.log("\\nSearch with steps:");
searchInSortedMatrixWithSteps(matrix, 29);

console.log("\\nSearch all occurrences:");
const matrixWithDuplicates = [
  [1, 2, 2, 3],
  [2, 2, 3, 4],
  [2, 3, 4, 5]
];
console.log(searchAllInSortedMatrix(matrixWithDuplicates, 2)); // [[0,1], [0,2], [1,0], [1,1], [2,0]]

compareSearchMethods(matrix, 29);`}
        explanation="Start from top-right corner, move left if current element > target, down if current element < target. Time: O(m+n), Space: O(1)."
      />

      <ProblemBlock
        title="7. Median of a Row Wise Sorted Matrix"
        difficulty="Hard"
        description="Find the median of a matrix where each row is sorted in ascending order."
        solution={`// Median of a Row Wise Sorted Matrix

function findMedianInSortedMatrix(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const totalElements = rows * cols;
  
  // Find minimum and maximum elements
  let min = matrix[0][0];
  let max = matrix[0][cols - 1];
  
  for (let i = 1; i < rows; i++) {
    min = Math.min(min, matrix[i][0]);
    max = Math.max(max, matrix[i][cols - 1]);
  }
  
  // Binary search for median
  let left = min;
  let right = max;
  
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    
    // Count elements less than or equal to mid
    const count = countElementsLessThanOrEqual(matrix, mid);
    
    if (count < Math.floor(totalElements / 2) + 1) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  
  return left;
}

// Count elements less than or equal to target
function countElementsLessThanOrEqual(matrix, target) {
  let count = 0;
  
  for (const row of matrix) {
    // Binary search in each row to count elements <= target
    let left = 0, right = row.length - 1;
    let rowCount = 0;
    
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      
      if (row[mid] <= target) {
        rowCount = mid + 1;
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    
    count += rowCount;
  }
  
  return count;
}

// Alternative: Using merge approach for small matrices
function findMedianMergeApproach(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const totalElements = rows * cols;
  
  // Merge all rows into a single sorted array
  let merged = matrix[0];
  
  for (let i = 1; i < rows; i++) {
    merged = mergeSortedArrays(merged, matrix[i]);
  }
  
  // Find median in merged array
  if (totalElements % 2 === 1) {
    return merged[Math.floor(totalElements / 2)];
  } else {
    const mid = totalElements / 2;
    return (merged[mid - 1] + merged[mid]) / 2;
  }
}

function mergeSortedArrays(arr1, arr2) {
  const result = [];
  let i = 0, j = 0;
  
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i++]);
    } else {
      result.push(arr2[j++]);
    }
  }
  
  while (i < arr1.length) result.push(arr1[i++]);
  while (j < arr2.length) result.push(arr2[j++]);
  
  return result;
}

// Median with detailed steps
function findMedianWithSteps(matrix) {
  console.log("Finding median in row-wise sorted matrix:");
  matrix.forEach((row, i) => {
    console.log(\`Row \${i}: [\${row.join(', ')}]\`);
  });
  
  const rows = matrix.length;
  const cols = matrix[0].length;
  const totalElements = rows * cols;
  
  console.log(\`\\nTotal elements: \${totalElements}\`);
  
  // Find min and max
  let min = matrix[0][0];
  let max = matrix[0][cols - 1];
  
  for (let i = 1; i < rows; i++) {
    min = Math.min(min, matrix[i][0]);
    max = Math.max(max, matrix[i][cols - 1]);
  }
  
  console.log(\`Range: [\${min}, \${max}]\`);
  console.log(\`Target position: \${Math.floor(totalElements / 2) + 1}\`);
  
  // Binary search
  let left = min, right = max;
  let iterations = 0;
  
  while (left < right) {
    iterations++;
    const mid = Math.floor((left + right) / 2);
    const count = countElementsLessThanOrEqual(matrix, mid);
    
    console.log(\`\\nIteration \${iterations}: mid=\${mid}, count=\${count}\`);
    
    if (count < Math.floor(totalElements / 2) + 1) {
      console.log(\`Count < target, searching in [\${mid + 1}, \${right}]\`);
      left = mid + 1;
    } else {
      console.log(\`Count >= target, searching in [\${left}, \${mid}]\`);
      right = mid;
    }
  }
  
  console.log(\`\\nFinal median: \${left}\`);
  return left;
}

// Find kth smallest element in matrix
function findKthSmallest(matrix, k) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  
  // Find min and max
  let min = matrix[0][0];
  let max = matrix[0][cols - 1];
  
  for (let i = 1; i < rows; i++) {
    min = Math.min(min, matrix[i][0]);
    max = Math.max(max, matrix[i][cols - 1]);
  }
  
  // Binary search for kth smallest
  let left = min;
  let right = max;
  
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    const count = countElementsLessThanOrEqual(matrix, mid);
    
    if (count < k) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  
  return left;
}

// Performance comparison
function compareMedianMethods(matrix) {
  console.log("Median Methods Comparison:");
  
  const start1 = performance.now();
  const result1 = findMedianInSortedMatrix(matrix);
  const end1 = performance.now();
  console.log(\`Binary search approach: \${result1} (Time: \${(end1-start1).toFixed(2)}ms)\`);
  
  const start2 = performance.now();
  const result2 = findMedianMergeApproach(matrix);
  const end2 = performance.now();
  console.log(\`Merge approach: \${result2} (Time: \${(end2-start2).toFixed(2)}ms)\`);
  
  return { result1, result2 };
}

// Test cases
const matrix = [
  [1, 3, 5],
  [2, 6, 9],
  [3, 6, 9]
];

console.log("Matrix:");
matrix.forEach(row => console.log(row));

console.log("\\nMedian:", findMedianInSortedMatrix(matrix)); // 5

console.log("\\nKth smallest elements:");
for (let k = 1; k <= 9; k++) {
  console.log(\`\${k}th smallest: \${findKthSmallest(matrix, k)}\`);
}

console.log("\\nDetailed steps:");
findMedianWithSteps(matrix);

compareMedianMethods(matrix);`}
        explanation="Use binary search on the range [min, max]. For each candidate median, count elements ≤ it using binary search in each row. Time: O(log(max-min) × m × log(n)), Space: O(1)."
      />
    </div>
  );
}

// Helper Components
function TheoryBlock({ title, children }) {
  return (
    <div className="bg-gray-900/50 rounded-lg p-6 mb-6 border border-gray-700">
      <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
      {children}
    </div>
  );
}

function CodeBlock({ code }) {
  return (
    <div className="bg-gray-950 rounded-lg p-4 overflow-x-auto">
      <pre className="text-sm text-green-400">
        <code>{code}</code>
      </pre>
    </div>
  );
}

function ProblemBlock({
  title,
  difficulty,
  description,
  solution,
  explanation,
}) {
  const [showSolution, setShowSolution] = useState(false);

  const difficultyColors = {
    Easy: "bg-green-500/20 text-green-400",
    Medium: "bg-yellow-500/20 text-yellow-400",
    Hard: "bg-red-500/20 text-red-400",
  };

  return (
    <div className="bg-gray-800/40 rounded-xl p-6 mb-8 border border-gray-700/50">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <span
          className={`px-3 py-1 rounded text-sm font-semibold ${difficultyColors[difficulty]}`}
        >
          {difficulty}
        </span>
      </div>

      <p className="text-gray-300 mb-4">{description}</p>

      <button
        onClick={() => setShowSolution(!showSolution)}
        className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors mb-4"
      >
        {showSolution ? "Hide Solution" : "Show Solution"}
      </button>

      {showSolution && (
        <div className="space-y-4">
          <div className="bg-gray-900 rounded-lg p-4">
            <h4 className="text-lg font-medium text-white mb-2">
              JavaScript Solution:
            </h4>
            <pre className="whitespace-pre-wrap text-sm text-gray-200">
              <code>{solution}</code>
            </pre>
          </div>
          <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-4">
            <p className="text-blue-200">
              <strong>💡 Explanation:</strong>
              <br />
              {explanation}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
