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
            code={{
              JavaScript: `// Creating a 2D array in JavaScript
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
}`,
              Java: `public class MatrixBasics {
    public static void main(String[] args) {
        // Creating a 2D array in Java
        int[][] matrix = {
            {1, 2, 3, 4},
            {5, 6, 7, 8},
            {9, 10, 11, 12}
        };
        
        // Accessing elements: matrix[row][column]
        System.out.println(matrix[1][2]); // 7 (row 1, column 2)
        
        // Getting dimensions
        int rows = matrix.length;        // 3
        int cols = matrix[0].length;     // 4
        
        // Iterating through 2D array
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                System.out.println("matrix[" + i + "][" + j + "] = " + matrix[i][j]);
            }
        }
        
        // Common patterns:
        // 1. Row-wise traversal
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                // Process matrix[i][j]
            }
        }
        
        // 2. Column-wise traversal
        for (int j = 0; j < cols; j++) {
            for (int i = 0; i < rows; i++) {
                // Process matrix[i][j]
            }
        }
        
        // 3. Diagonal traversal
        for (int i = 0; i < Math.min(rows, cols); i++) {
            // Process matrix[i][i] (main diagonal)
        }
        
        // 4. Anti-diagonal traversal
        for (int i = 0; i < Math.min(rows, cols); i++) {
            // Process matrix[i][cols-1-i]
        }
    }
}`,
            }}
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
        solutions={{
          JavaScript: `// Matrix in Snake Pattern

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
printSnakePatternVisual(matrix);`,
          Java: `import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class SnakePattern {
    public static List<Integer> printSnakePattern(int[][] matrix) {
        int rows = matrix.length;
        int cols = matrix[0].length;
        List<Integer> result = new ArrayList<>();
        
        for (int i = 0; i < rows; i++) {
            if (i % 2 == 0) {
                // Even rows: left to right
                for (int j = 0; j < cols; j++) {
                    result.add(matrix[i][j]);
                }
            } else {
                // Odd rows: right to left
                for (int j = cols - 1; j >= 0; j--) {
                    result.add(matrix[i][j]);
                }
            }
        }
        
        return result;
    }
    
    // Alternative: Using reverse for odd rows
    public static List<Integer> printSnakePatternReverse(int[][] matrix) {
        List<Integer> result = new ArrayList<>();
        
        for (int i = 0; i < matrix.length; i++) {
            List<Integer> row = new ArrayList<>();
            for (int j = 0; j < matrix[i].length; j++) {
                row.add(matrix[i][j]);
            }
            
            if (i % 2 == 0) {
                result.addAll(row);
            } else {
                Collections.reverse(row);
                result.addAll(row);
            }
        }
        
        return result;
    }
    
    // Snake pattern with custom separator
    public static String printSnakePatternCustom(int[][] matrix, String separator) {
        int rows = matrix.length;
        int cols = matrix[0].length;
        List<String> result = new ArrayList<>();
        
        for (int i = 0; i < rows; i++) {
            if (i % 2 == 0) {
                // Left to right
                for (int j = 0; j < cols; j++) {
                    result.add(String.valueOf(matrix[i][j]));
                }
            } else {
                // Right to left
                for (int j = cols - 1; j >= 0; j--) {
                    result.add(String.valueOf(matrix[i][j]));
                }
            }
        }
        
        return String.join(separator, result);
    }
    
    public static void main(String[] args) {
        int[][] matrix = {
            {1, 2, 3, 4},
            {5, 6, 7, 8},
            {9, 10, 11, 12}
        };
        
        System.out.println(printSnakePattern(matrix)); 
        // [1, 2, 3, 4, 8, 7, 6, 5, 9, 10, 11, 12]
        
        System.out.println(printSnakePatternCustom(matrix, " → ")); 
        // "1 → 2 → 3 → 4 → 8 → 7 → 6 → 5 → 9 → 10 → 11 → 12"
    }
}`,
        }}
        explanation="Snake pattern alternates direction: even rows go left-to-right, odd rows go right-to-left. Time: O(m×n), Space: O(1)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Print matrix elements in snake pattern",
                "Even rows: left to right",
                "Odd rows: right to left",
                "Input: 2D matrix, Output: Array of elements in snake pattern",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: [
                "snake pattern",
                "alternate",
                "direction",
                "row traversal",
              ],
              details: [
                "Keywords: 'snake pattern', 'alternate direction' → Row-wise traversal with direction change",
                "Pattern: Alternate direction per row → Check row index parity",
                "This is a 'matrix traversal' problem",
                "Similar to: Spiral traversal, boundary traversal",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "2D Array: Input is already a matrix",
                "Result array: To store elements",
                "O(1) space if just printing",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Row-wise traversal with direction alternation",
                "  - For each row i:",
                "    - If i % 2 == 0: traverse left to right",
                "    - Else: traverse right to left",
                "  - Time: O(m×n), Space: O(1)",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • Single row: Return as is",
                "  • Single column: Return as is",
                "  • Empty matrix: Return empty array",
                "",
                "Optimization:",
                "  • Single pass: O(m×n) time",
                "  • O(1) space if just printing",
                "  • Simple parity check for direction",
                "",
                "Implementation:",
                "  1. For i = 0 to rows-1:",
                "     - If i % 2 == 0:",
                "       * For j = 0 to cols-1: add matrix[i][j]",
                "     - Else:",
                "       * For j = cols-1 to 0: add matrix[i][j]",
                "  2. Return result",
              ],
            },
          ],
          pattern: "Matrix Traversal (Alternating Direction)",
          complexity: {
            time: "O(m×n) - Visit each element once",
            space: "O(1) - Excluding result array",
          },
        }}
      />

      <ProblemBlock
        title="2. Matrix Boundary Traversal"
        difficulty="Easy"
        description="Print all boundary elements of a matrix in clockwise order: top row, right column, bottom row (reverse), left column (reverse)."
        solutions={{
          JavaScript: `// Matrix Boundary Traversal

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
console.log(printBoundaryWithSteps(matrix));`,
          Java: `import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class BoundaryTraversal {
    public static List<Integer> printBoundaryElements(int[][] matrix) {
        int rows = matrix.length;
        int cols = matrix[0].length;
        List<Integer> result = new ArrayList<>();
        
        // Handle edge cases
        if (rows == 1) {
            // Only one row
            for (int j = 0; j < cols; j++) {
                result.add(matrix[0][j]);
            }
            return result;
        }
        
        if (cols == 1) {
            // Only one column
            for (int i = 0; i < rows; i++) {
                result.add(matrix[i][0]);
            }
            return result;
        }
        
        // Top row (left to right)
        for (int j = 0; j < cols; j++) {
            result.add(matrix[0][j]);
        }
        
        // Right column (top to bottom, excluding first element)
        for (int i = 1; i < rows; i++) {
            result.add(matrix[i][cols - 1]);
        }
        
        // Bottom row (right to left, excluding last element)
        for (int j = cols - 2; j >= 0; j--) {
            result.add(matrix[rows - 1][j]);
        }
        
        // Left column (bottom to top, excluding first and last elements)
        for (int i = rows - 2; i >= 1; i--) {
            result.add(matrix[i][0]);
        }
        
        return result;
    }
    
    // Alternative: Using direction vectors
    public static List<Integer> printBoundaryDirectional(int[][] matrix) {
        int rows = matrix.length;
        int cols = matrix[0].length;
        
        if (rows == 1) {
            List<Integer> result = new ArrayList<>();
            for (int j = 0; j < cols; j++) {
                result.add(matrix[0][j]);
            }
            return result;
        }
        
        if (cols == 1) {
            List<Integer> result = new ArrayList<>();
            for (int i = 0; i < rows; i++) {
                result.add(matrix[i][0]);
            }
            return result;
        }
        
        List<Integer> result = new ArrayList<>();
        int[][] directions = {
            {0, 1},   // Right
            {1, 0},   // Down
            {0, -1},  // Left
            {-1, 0}   // Up
        };
        
        int i = 0, j = 0;
        int dirIndex = 0;
        Set<String> visited = new HashSet<>();
        
        // Move in boundary pattern
        while (result.size() < (2 * rows + 2 * cols - 4)) {
            String key = i + "-" + j;
            if (!visited.contains(key)) {
                result.add(matrix[i][j]);
                visited.add(key);
            }
            
            int nextI = i + directions[dirIndex][0];
            int nextJ = j + directions[dirIndex][1];
            
            // Check if next position is valid and on boundary
            if (nextI >= 0 && nextI < rows && nextJ >= 0 && nextJ < cols &&
                (nextI == 0 || nextI == rows - 1 || nextJ == 0 || nextJ == cols - 1)) {
                i = nextI;
                j = nextJ;
            } else {
                dirIndex = (dirIndex + 1) % 4;
            }
        }
        
        return result;
    }
    
    public static void main(String[] args) {
        int[][] matrix = {
            {1, 2, 3, 4},
            {5, 6, 7, 8},
            {9, 10, 11, 12},
            {13, 14, 15, 16}
        };
        
        System.out.println(printBoundaryElements(matrix)); 
        // [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5]
    }
}`,
        }}
        explanation="Boundary traversal follows the perimeter: top row → right column → bottom row (reverse) → left column (reverse). Time: O(m+n), Space: O(1)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Print all boundary elements of matrix in clockwise order",
                "Top row → Right column → Bottom row (reverse) → Left column (reverse)",
                "Avoid duplicates at corners",
                "Input: 2D matrix, Output: Array of boundary elements",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: ["boundary", "perimeter", "clockwise", "traversal"],
              details: [
                "Keywords: 'boundary', 'perimeter' → Four sides traversal",
                "Pattern: Four separate traversals → Top, right, bottom, left",
                "This is a 'boundary traversal' problem",
                "Similar to: Spiral traversal, matrix perimeter",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "2D Array: Input is already a matrix",
                "Result array: To store boundary elements",
                "O(1) space if just printing",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Four-side traversal",
                "  - Top row: left to right",
                "  - Right column: top to bottom (excluding corners)",
                "  - Bottom row: right to left (excluding corners)",
                "  - Left column: bottom to top (excluding corners)",
                "  - Time: O(m+n), Space: O(1)",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • Single row: Return entire row",
                "  • Single column: Return entire column",
                "  • 1×1 matrix: Return single element",
                "",
                "Optimization:",
                "  • O(m+n) time - only boundary elements",
                "  • O(1) space if just printing",
                "  • Handle corner duplicates carefully",
                "",
                "Implementation:",
                "  1. Top row: j = 0 to cols-1",
                "  2. Right column: i = 1 to rows-2",
                "  3. Bottom row: j = cols-1 to 0 (if rows > 1)",
                "  4. Left column: i = rows-2 to 1 (if cols > 1)",
                "  5. Return result",
              ],
            },
          ],
          pattern: "Boundary Traversal (Four Sides)",
          complexity: {
            time: "O(m+n) - Only boundary elements",
            space: "O(1) - Excluding result array",
          },
        }}
      />

      <ProblemBlock
        title="3. Spiral Traversal of Matrix"
        difficulty="Medium"
        description="Print matrix elements in spiral order: start from top-left, go right, down, left, up, and repeat inwards."
        solutions={{
          JavaScript: `// Spiral Traversal of Matrix

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
console.log(generateSpiralMatrix(4));`,
          Java: `import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class SpiralTraversal {
    public static List<Integer> spiralTraversal(int[][] matrix) {
        if (matrix.length == 0) return new ArrayList<>();
        
        int rows = matrix.length;
        int cols = matrix[0].length;
        List<Integer> result = new ArrayList<>();
        
        int top = 0, bottom = rows - 1;
        int left = 0, right = cols - 1;
        
        while (top <= bottom && left <= right) {
            // Traverse top row from left to right
            for (int j = left; j <= right; j++) {
                result.add(matrix[top][j]);
            }
            top++;
            
            // Traverse right column from top to bottom
            for (int i = top; i <= bottom; i++) {
                result.add(matrix[i][right]);
            }
            right--;
            
            // Traverse bottom row from right to left (if top <= bottom)
            if (top <= bottom) {
                for (int j = right; j >= left; j--) {
                    result.add(matrix[bottom][j]);
                }
                bottom--;
            }
            
            // Traverse left column from bottom to top (if left <= right)
            if (left <= right) {
                for (int i = bottom; i >= top; i--) {
                    result.add(matrix[i][left]);
                }
                left++;
            }
        }
        
        return result;
    }
    
    // Spiral traversal with direction vectors
    public static List<Integer> spiralTraversalDirectional(int[][] matrix) {
        if (matrix.length == 0) return new ArrayList<>();
        
        int rows = matrix.length;
        int cols = matrix[0].length;
        List<Integer> result = new ArrayList<>();
        boolean[][] visited = new boolean[rows][cols];
        
        int[][] directions = {
            {0, 1},   // Right
            {1, 0},   // Down
            {0, -1},  // Left
            {-1, 0}   // Up
        };
        
        int i = 0, j = 0;
        int dirIndex = 0;
        
        for (int count = 0; count < rows * cols; count++) {
            result.add(matrix[i][j]);
            visited[i][j] = true;
            
            // Calculate next position
            int nextI = i + directions[dirIndex][0];
            int nextJ = j + directions[dirIndex][1];
            
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
    
    // Generate spiral matrix
    public static int[][] generateSpiralMatrix(int n) {
        int[][] matrix = new int[n][n];
        
        int top = 0, bottom = n - 1;
        int left = 0, right = n - 1;
        int num = 1;
        
        while (top <= bottom && left <= right) {
            // Top row
            for (int j = left; j <= right; j++) {
                matrix[top][j] = num++;
            }
            top++;
            
            // Right column
            for (int i = top; i <= bottom; i++) {
                matrix[i][right] = num++;
            }
            right--;
            
            // Bottom row
            if (top <= bottom) {
                for (int j = right; j >= left; j--) {
                    matrix[bottom][j] = num++;
                }
                bottom--;
            }
            
            // Left column
            if (left <= right) {
                for (int i = bottom; i >= top; i--) {
                    matrix[i][left] = num++;
                }
                left++;
            }
        }
        
        return matrix;
    }
    
    public static void main(String[] args) {
        int[][] matrix = {
            {1, 2, 3, 4},
            {5, 6, 7, 8},
            {9, 10, 11, 12},
            {13, 14, 15, 16}
        };
        
        System.out.println(spiralTraversal(matrix)); 
        // [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]
        
        int[][] spiral = generateSpiralMatrix(4);
        for (int[] row : spiral) {
            System.out.println(Arrays.toString(row));
        }
    }
}`,
        }}
        explanation="Spiral traversal uses four boundaries (top, bottom, left, right) and moves inward. Time: O(m×n), Space: O(1)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Print matrix elements in spiral order",
                "Start from top-left, go right → down → left → up",
                "Move inward layer by layer",
                "Input: 2D matrix, Output: Array of elements in spiral order",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: ["spiral", "clockwise", "boundaries", "layers"],
              details: [
                "Keywords: 'spiral', 'clockwise' → Layer-by-layer traversal",
                "Pattern: Four boundaries → Move inward after each side",
                "This is a 'spiral traversal' problem",
                "Similar to: Boundary traversal, matrix layers",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "2D Array: Input is already a matrix",
                "Four boundaries: top, bottom, left, right",
                "Result array: To store elements",
                "O(1) space if just printing",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Four-boundary traversal",
                "  - While top <= bottom and left <= right:",
                "    - Top row: left to right",
                "    - Right column: top+1 to bottom",
                "    - Bottom row: right-1 to left (if top != bottom)",
                "    - Left column: bottom-1 to top+1 (if left != right)",
                "    - Move boundaries inward",
                "  - Time: O(m×n), Space: O(1)",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • Single row: Traverse left to right",
                "  • Single column: Traverse top to bottom",
                "  • 1×1 matrix: Return single element",
                "",
                "Optimization:",
                "  • Single pass: O(m×n) time",
                "  • O(1) space if just printing",
                "  • Four boundary variables",
                "",
                "Implementation:",
                "  1. top = 0, bottom = rows-1, left = 0, right = cols-1",
                "  2. While top <= bottom and left <= right:",
                "     - Top row: j = left to right, top++",
                "     - Right column: i = top to bottom, right--",
                "     - Bottom row: j = right to left (if top <= bottom), bottom--",
                "     - Left column: i = bottom to top (if left <= right), left++",
                "  3. Return result",
              ],
            },
          ],
          pattern: "Spiral Traversal (Four Boundaries)",
          complexity: {
            time: "O(m×n) - Visit each element once",
            space: "O(1) - Excluding result array",
          },
        }}
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
        solutions={{
          JavaScript: `// Transpose of a Matrix

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
console.log(transposeFunctional(matrix));`,
          Java: `import java.util.Arrays;

public class TransposeMatrix {
    public static int[][] transposeMatrix(int[][] matrix) {
        int rows = matrix.length;
        int cols = matrix[0].length;
        int[][] transpose = new int[cols][rows];
        
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                transpose[j][i] = matrix[i][j];
            }
        }
        
        return transpose;
    }
    
    // In-place transpose for square matrix
    public static void transposeSquareMatrix(int[][] matrix) {
        int n = matrix.length;
        
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                // Swap matrix[i][j] and matrix[j][i]
                int temp = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = temp;
            }
        }
    }
    
    public static void main(String[] args) {
        int[][] matrix = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };
        
        int[][] rectangularMatrix = {
            {1, 2, 3, 4},
            {5, 6, 7, 8}
        };
        
        System.out.println("Square Matrix Transpose:");
        int[][] transposed = transposeMatrix(matrix);
        for (int[] row : transposed) {
            System.out.println(Arrays.toString(row));
        }
        
        System.out.println("\\nRectangular Matrix Transpose:");
        int[][] transposedRect = transposeMatrix(rectangularMatrix);
        for (int[] row : transposedRect) {
            System.out.println(Arrays.toString(row));
        }
        
        System.out.println("\\nIn-place transpose:");
        int[][] matrixCopy = new int[matrix.length][];
        for (int i = 0; i < matrix.length; i++) {
            matrixCopy[i] = matrix[i].clone();
        }
        transposeSquareMatrix(matrixCopy);
        for (int[] row : matrixCopy) {
            System.out.println(Arrays.toString(row));
        }
    }
}`,
        }}
        explanation="Transpose swaps rows and columns: A^T[i][j] = A[j][i]. For square matrices, can be done in-place. Time: O(m×n), Space: O(m×n) or O(1) for in-place."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Transpose matrix: swap rows and columns",
                "A^T[i][j] = A[j][i]",
                "Square matrix: Can do in-place",
                "Rectangular matrix: Need new matrix",
                "Input: 2D matrix, Output: Transposed matrix",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: ["transpose", "swap", "rows", "columns", "diagonal"],
              details: [
                "Keywords: 'transpose', 'swap rows columns' → Element swapping",
                "Pattern: Swap elements across diagonal → matrix[i][j] ↔ matrix[j][i]",
                "This is a 'matrix transformation' problem",
                "Similar to: Matrix rotation, matrix reflection",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "2D Array: Input is already a matrix",
                "Square matrix: In-place (O(1) space)",
                "Rectangular matrix: New matrix (O(m×n) space)",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Element swapping",
                "  - For square matrix:",
                "    - Swap matrix[i][j] and matrix[j][i] for i < j",
                "    - Only swap upper triangle to avoid double swapping",
                "  - For rectangular matrix:",
                "    - Create new matrix of size cols×rows",
                "    - Copy transpose[j][i] = matrix[i][j]",
                "  - Time: O(m×n), Space: O(1) or O(m×n)",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • Square matrix: In-place transpose",
                "  • Rectangular matrix: Need new matrix",
                "  • 1×1 matrix: Return as is",
                "",
                "Optimization:",
                "  • Square matrix: O(1) space",
                "  • Only swap upper triangle: Avoid double swaps",
                "  • O(m×n) time for both cases",
                "",
                "Implementation:",
                "  Square:",
                "    1. For i = 0 to n-1:",
                "       - For j = i+1 to n-1:",
                "         * Swap matrix[i][j] and matrix[j][i]",
                "  Rectangular:",
                "    1. Create new matrix[cols][rows]",
                "    2. For i = 0 to rows-1:",
                "       - For j = 0 to cols-1:",
                "         * transpose[j][i] = matrix[i][j]",
              ],
            },
          ],
          pattern: "Matrix Transformation (Transpose)",
          complexity: {
            time: "O(m×n) - Visit each element once",
            space: "O(1) for square, O(m×n) for rectangular",
          },
        }}
      />

      <ProblemBlock
        title="5. Rotate Matrix Anti-clockwise by 90"
        difficulty="Medium"
        description="Rotate a matrix 90 degrees anti-clockwise (counter-clockwise) in-place."
        solutions={{
          JavaScript: `// Rotate Matrix Anti-clockwise by 90 degrees

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

// Multiple rotations
function rotateMatrixMultiple(matrix, rotations) {
  const n = matrix.length;
  const effectiveRotations = rotations % 4; // 4 rotations = 360° = no change
  
  for (let r = 0; r < effectiveRotations; r++) {
    rotateMatrix90AntiClockwise(matrix);
  }
  
  return matrix;
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
console.log(rotateMatrixMultiple(matrix.map(row => [...row]), 2));`,
          Java: `import java.util.Arrays;

public class RotateMatrix {
    // Rotate Matrix Anti-clockwise by 90 degrees (in-place)
    public static void rotateMatrix90AntiClockwise(int[][] matrix) {
        int n = matrix.length;
        
        // Step 1: Transpose the matrix
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                int temp = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = temp;
            }
        }
        
        // Step 2: Reverse each column
        for (int j = 0; j < n; j++) {
            int top = 0, bottom = n - 1;
            while (top < bottom) {
                int temp = matrix[top][j];
                matrix[top][j] = matrix[bottom][j];
                matrix[bottom][j] = temp;
                top++;
                bottom--;
            }
        }
    }
    
    // Alternative: Direct rotation formula
    public static int[][] rotateMatrix90AntiClockwiseDirect(int[][] matrix) {
        int n = matrix.length;
        int[][] rotated = new int[n][n];
        
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                // For 90° anti-clockwise: new_row = old_col, new_col = n-1-old_row
                rotated[i][j] = matrix[j][n - 1 - i];
            }
        }
        
        return rotated;
    }
    
    // Multiple rotations
    public static void rotateMatrixMultiple(int[][] matrix, int rotations) {
        int n = matrix.length;
        int effectiveRotations = rotations % 4; // 4 rotations = 360° = no change
        
        for (int r = 0; r < effectiveRotations; r++) {
            rotateMatrix90AntiClockwise(matrix);
        }
    }
    
    // Helper function for clockwise rotation
    public static void rotateMatrix90Clockwise(int[][] matrix) {
        int n = matrix.length;
        
        // Step 1: Transpose
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                int temp = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = temp;
            }
        }
        
        // Step 2: Reverse each row
        for (int i = 0; i < n; i++) {
            int left = 0, right = n - 1;
            while (left < right) {
                int temp = matrix[i][left];
                matrix[i][left] = matrix[i][right];
                matrix[i][right] = temp;
                left++;
                right--;
            }
        }
    }
    
    public static void main(String[] args) {
        int[][] matrix = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };
        
        System.out.println("Original Matrix:");
        for (int[] row : matrix) {
            System.out.println(Arrays.toString(row));
        }
        
        System.out.println("\\n90° Anti-clockwise Rotation:");
        int[][] matrixCopy = new int[matrix.length][];
        for (int i = 0; i < matrix.length; i++) {
            matrixCopy[i] = matrix[i].clone();
        }
        rotateMatrix90AntiClockwise(matrixCopy);
        for (int[] row : matrixCopy) {
            System.out.println(Arrays.toString(row));
        }
        
        System.out.println("\\nDirect rotation:");
        int[][] rotated = rotateMatrix90AntiClockwiseDirect(matrix);
        for (int[] row : rotated) {
            System.out.println(Arrays.toString(row));
        }
    }
}`,
        }}
        explanation="90° anti-clockwise rotation: first transpose matrix, then reverse each column. Time: O(n²), Space: O(1) for in-place. Formula: new[i][j] = old[j][n-1-i]."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Rotate matrix 90 degrees anti-clockwise (counter-clockwise)",
                "In-place rotation for square matrix",
                "Each element moves to new position",
                "Input: Square matrix, Output: Rotated matrix",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: [
                "rotate",
                "90 degrees",
                "anti-clockwise",
                "transpose",
                "reverse",
              ],
              details: [
                "Keywords: 'rotate 90 degrees', 'anti-clockwise' → Two-step transformation",
                "Pattern: Transpose + reverse columns → 90° anti-clockwise",
                "This is a 'matrix rotation' problem",
                "Similar to: Matrix transpose, matrix reflection",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "2D Array: Input is already a matrix",
                "In-place: O(1) space",
                "Square matrix required for in-place",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Transpose + Reverse Columns",
                "  - Step 1: Transpose matrix (swap across diagonal)",
                "  - Step 2: Reverse each column",
                "  - Time: O(n²), Space: O(1)",
                "",
                "Alternative: Direct formula new[i][j] = old[j][n-1-i]",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • 1×1 matrix: Return as is",
                "  • 2×2 matrix: Simple swap",
                "",
                "Optimization:",
                "  • In-place: O(1) space",
                "  • Two-step process: Transpose then reverse",
                "  • O(n²) time",
                "",
                "Implementation:",
                "  1. Transpose: Swap matrix[i][j] and matrix[j][i] for i < j",
                "  2. Reverse each column:",
                "     - For each column j:",
                "       * Swap matrix[i][j] and matrix[n-1-i][j] for i < n/2",
                "  3. Return matrix",
              ],
            },
          ],
          pattern: "Matrix Rotation (Transpose + Reverse)",
          complexity: {
            time: "O(n²) - Visit each element once",
            space: "O(1) - In-place rotation",
          },
        }}
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
        solutions={{
          JavaScript: `// Search in Row-wise and Column-wise Sorted Matrix

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

// Test cases
const matrix = [
  [10, 20, 30, 40],
  [15, 25, 35, 45],
  [27, 29, 37, 48],
  [32, 33, 39, 50]
];

console.log("Search in sorted matrix:");
console.log(searchInSortedMatrix(matrix, 29)); // [2, 1]
console.log(searchInSortedMatrix(matrix, 100)); // [-1, -1]`,
          Java: `public class SearchSortedMatrix {
    public static int[] searchInSortedMatrix(int[][] matrix, int target) {
        if (matrix.length == 0 || matrix[0].length == 0) {
            return new int[]{-1, -1};
        }
        
        int rows = matrix.length;
        int cols = matrix[0].length;
        
        // Start from top-right corner
        int i = 0, j = cols - 1;
        
        while (i < rows && j >= 0) {
            if (matrix[i][j] == target) {
                return new int[]{i, j};
            } else if (matrix[i][j] > target) {
                // Current element is greater, move left
                j--;
            } else {
                // Current element is smaller, move down
                i++;
            }
        }
        
        return new int[]{-1, -1}; // Not found
    }
    
    // Alternative: Start from bottom-left corner
    public static int[] searchInSortedMatrixBottomLeft(int[][] matrix, int target) {
        if (matrix.length == 0 || matrix[0].length == 0) {
            return new int[]{-1, -1};
        }
        
        int rows = matrix.length;
        int cols = matrix[0].length;
        
        // Start from bottom-left corner
        int i = rows - 1, j = 0;
        
        while (i >= 0 && j < cols) {
            if (matrix[i][j] == target) {
                return new int[]{i, j};
            } else if (matrix[i][j] > target) {
                // Current element is greater, move up
                i--;
            } else {
                // Current element is smaller, move right
                j++;
            }
        }
        
        return new int[]{-1, -1};
    }
    
    // Binary search approach for each row
    public static int[] searchInSortedMatrixBinarySearch(int[][] matrix, int target) {
        int rows = matrix.length;
        
        for (int i = 0; i < rows; i++) {
            int result = binarySearch(matrix[i], target);
            if (result != -1) {
                return new int[]{i, result};
            }
        }
        
        return new int[]{-1, -1};
    }
    
    private static int binarySearch(int[] arr, int target) {
        int left = 0, right = arr.length - 1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (arr[mid] == target) {
                return mid;
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return -1;
    }
    
    public static void main(String[] args) {
        int[][] matrix = {
            {10, 20, 30, 40},
            {15, 25, 35, 45},
            {27, 29, 37, 48},
            {32, 33, 39, 50}
        };
        
        System.out.println("Search in sorted matrix:");
        int[] result1 = searchInSortedMatrix(matrix, 29);
        System.out.println("Found at: [" + result1[0] + ", " + result1[1] + "]"); // [2, 1]
        
        int[] result2 = searchInSortedMatrix(matrix, 100);
        System.out.println("Not found: [" + result2[0] + ", " + result2[1] + "]"); // [-1, -1]
    }
}`,
        }}
        explanation="Start from top-right corner, move left if current element > target, down if current element < target. Time: O(m+n), Space: O(1)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Search for target in row-wise and column-wise sorted matrix",
                "Each row is sorted, each column is sorted",
                "Efficient search required (not O(m×n))",
                "Input: Sorted matrix, target, Output: Position or -1",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: [
                "sorted",
                "row-wise",
                "column-wise",
                "search",
                "two pointers",
              ],
              details: [
                "Keywords: 'sorted matrix', 'search' → Two pointers or binary search",
                "Pattern: Sorted in both directions → Start from corner",
                "This is a 'search in sorted matrix' problem",
                "Similar to: Search in 2D array, binary search",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "2D Array: Input is already a matrix",
                "Two pointers: For navigation",
                "O(1) space",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Two Pointers from Corner",
                "  - Start from top-right (or bottom-left)",
                "  - If current > target: move left (decrease)",
                "  - If current < target: move down (increase)",
                "  - Time: O(m+n), Space: O(1)",
                "",
                "Alternative: Binary search each row - O(m log n)",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • Target not found: Return [-1, -1]",
                "  • Target at corner: Return immediately",
                "  • Empty matrix: Return [-1, -1]",
                "",
                "Optimization:",
                "  • O(m+n) time - better than O(m×n)",
                "  • O(1) space",
                "  • Start from corner with two directions",
                "",
                "Implementation:",
                "  1. Start from top-right: i = 0, j = cols-1",
                "  2. While i < rows and j >= 0:",
                "     - If matrix[i][j] == target: return [i, j]",
                "     - Else if matrix[i][j] > target: j--",
                "     - Else: i++",
                "  3. Return [-1, -1]",
              ],
            },
          ],
          pattern: "Two Pointers Search (Sorted Matrix)",
          complexity: {
            time: "O(m+n) - At most m+n moves",
            space: "O(1) - Only two pointers",
          },
        }}
      />

      <ProblemBlock
        title="7. Median of a Row Wise Sorted Matrix"
        difficulty="Hard"
        description="Find the median of a matrix where each row is sorted in ascending order."
        solutions={{
          JavaScript: `// Median of a Row Wise Sorted Matrix

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
}`,
          Java: `public class MedianSortedMatrix {
    public static int findMedianInSortedMatrix(int[][] matrix) {
        int rows = matrix.length;
        int cols = matrix[0].length;
        int totalElements = rows * cols;
        
        // Find minimum and maximum elements
        int min = matrix[0][0];
        int max = matrix[0][cols - 1];
        
        for (int i = 1; i < rows; i++) {
            min = Math.min(min, matrix[i][0]);
            max = Math.max(max, matrix[i][cols - 1]);
        }
        
        // Binary search for median
        int left = min;
        int right = max;
        
        while (left < right) {
            int mid = left + (right - left) / 2;
            
            // Count elements less than or equal to mid
            int count = countElementsLessThanOrEqual(matrix, mid);
            
            if (count < (totalElements / 2) + 1) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        
        return left;
    }
    
    // Count elements less than or equal to target
    private static int countElementsLessThanOrEqual(int[][] matrix, int target) {
        int count = 0;
        
        for (int[] row : matrix) {
            // Binary search in each row to count elements <= target
            int left = 0, right = row.length - 1;
            int rowCount = 0;
            
            while (left <= right) {
                int mid = left + (right - left) / 2;
                
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
    
    // Find kth smallest element in matrix
    public static int findKthSmallest(int[][] matrix, int k) {
        int rows = matrix.length;
        int cols = matrix[0].length;
        
        // Find min and max
        int min = matrix[0][0];
        int max = matrix[0][cols - 1];
        
        for (int i = 1; i < rows; i++) {
            min = Math.min(min, matrix[i][0]);
            max = Math.max(max, matrix[i][cols - 1]);
        }
        
        // Binary search for kth smallest
        int left = min;
        int right = max;
        
        while (left < right) {
            int mid = left + (right - left) / 2;
            int count = countElementsLessThanOrEqual(matrix, mid);
            
            if (count < k) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        
        return left;
    }
    
    public static void main(String[] args) {
        int[][] matrix = {
            {1, 3, 5},
            {2, 6, 9},
            {3, 6, 9}
        };
        
        System.out.println("Matrix:");
        for (int[] row : matrix) {
            for (int val : row) {
                System.out.print(val + " ");
            }
            System.out.println();
        }
        
        System.out.println("\\nMedian: " + findMedianInSortedMatrix(matrix)); // 5
        
        System.out.println("\\nKth smallest elements:");
        for (int k = 1; k <= 9; k++) {
            System.out.println(k + "th smallest: " + findKthSmallest(matrix, k));
        }
    }
}`,
        }}
        explanation="Use binary search on the range [min, max]. For each candidate median, count elements ≤ it using binary search in each row. Time: O(log(max-min) × m × log(n)), Space: O(1)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Find median of row-wise sorted matrix",
                "Each row is sorted in ascending order",
                "Median is middle element when all elements sorted",
                "Input: Row-wise sorted matrix, Output: Median value",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: ["median", "sorted", "binary search", "count", "range"],
              details: [
                "Keywords: 'median', 'sorted matrix' → Binary search on answer",
                "Pattern: Binary search on range → Count elements ≤ candidate",
                "This is a 'binary search on answer' problem",
                "Similar to: Kth smallest, find median",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "2D Array: Input is already a matrix",
                "Binary search: On range [min, max]",
                "O(1) space",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Binary Search on Answer",
                "  - Find min and max in matrix",
                "  - Binary search on range [min, max]",
                "  - For each candidate:",
                "    - Count elements ≤ candidate using binary search in each row",
                "    - If count >= (total/2 + 1): candidate is too large",
                "    - Else: candidate is too small",
                "  - Time: O(log(max-min) × m × log(n)), Space: O(1)",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • Odd total elements: Return middle element",
                "  • Even total elements: Return average of two middle",
                "",
                "Optimization:",
                "  • Binary search on range: O(log(max-min))",
                "  • Count using binary search: O(m log n)",
                "  • Total: O(log(max-min) × m × log(n))",
                "",
                "Implementation:",
                "  1. Find min and max in matrix",
                "  2. left = min, right = max",
                "  3. While left < right:",
                "     - mid = (left + right) / 2",
                "     - count = countElementsLessThanOrEqual(matrix, mid)",
                "     - If count < (total/2 + 1): left = mid + 1",
                "     - Else: right = mid",
                "  4. Return left",
              ],
            },
          ],
          pattern: "Binary Search on Answer (Median Finding)",
          complexity: {
            time: "O(log(max-min) × m × log(n)) - Binary search on range",
            space: "O(1) - Only variables",
          },
        }}
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

function CodeBlock({ code, defaultLanguage = "JavaScript" }) {
  const isMultiLanguage = typeof code === "object" && code !== null;
  const languageKeys = isMultiLanguage ? Object.keys(code) : [];
  const [activeLanguage, setActiveLanguage] = useState(
    isMultiLanguage ? languageKeys[0] : defaultLanguage
  );
  const displayedCode = isMultiLanguage ? code[activeLanguage] : code;

  return (
    <div className="bg-gray-950 rounded-lg p-4 overflow-x-auto">
      {isMultiLanguage && (
        <div className="flex gap-2 mb-4">
          {languageKeys.map((language) => (
            <button
              key={language}
              onClick={() => setActiveLanguage(language)}
              className={`px-3 py-1 rounded text-sm font-semibold transition-colors ${
                activeLanguage === language
                  ? "bg-green-500 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {language}
            </button>
          ))}
        </div>
      )}
      <pre className="text-sm text-green-400">
        <code>{displayedCode}</code>
      </pre>
    </div>
  );
}

function ProblemBlock({
  title,
  difficulty,
  description,
  solution,
  solutions,
  explanation,
  approach,
}) {
  const [showSolution, setShowSolution] = useState(false);
  const [activeTab, setActiveTab] = useState("solution");
  const codeData =
    solutions ||
    (solution
      ? {
          JavaScript: solution,
        }
      : null);

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

      {showSolution && codeData && (
        <div>
          {/* Tabs */}
          {approach && (
            <div className="flex gap-2 mb-4 border-b border-gray-700">
              <button
                onClick={() => setActiveTab("solution")}
                className={`px-4 py-2 font-semibold transition-colors ${
                  activeTab === "solution"
                    ? "text-purple-400 border-b-2 border-purple-400"
                    : "text-gray-400 hover:text-gray-300"
                }`}
              >
                Solution
              </button>
              <button
                onClick={() => setActiveTab("approach")}
                className={`px-4 py-2 font-semibold transition-colors ${
                  activeTab === "approach"
                    ? "text-purple-400 border-b-2 border-purple-400"
                    : "text-gray-400 hover:text-gray-300"
                }`}
              >
                Approach
              </button>
            </div>
          )}

          {/* Tab Content */}
          {activeTab === "solution" && (
            <div className="space-y-4">
              <CodeBlock code={codeData} defaultLanguage="JavaScript" />
              <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-4">
                <p className="text-blue-200">
                  <strong>💡 Explanation:</strong>
                  <br />
                  {explanation}
                </p>
              </div>
            </div>
          )}

          {activeTab === "approach" && approach && (
            <ApproachTab approach={approach} />
          )}
        </div>
      )}
    </div>
  );
}

// Approach Tab Component
function ApproachTab({ approach }) {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 rounded-xl p-6 border border-blue-500/30">
        <h3 className="text-2xl font-bold text-white mb-2">
          🎯 Problem Solving Approach
        </h3>
        <p className="text-gray-300 text-sm">
          Following the systematic 5-step framework to solve this problem
        </p>
      </div>

      {approach.steps?.map((step, index) => (
        <div
          key={index}
          className="bg-gray-800 rounded-lg p-5 border border-gray-700"
        >
          <div className="flex items-start gap-4">
            <div className="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
              {index + 1}
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-white mb-2">
                {step.title}
              </h4>
              <p className="text-gray-300 mb-3">{step.description}</p>
              {step.details && (
                <div className="bg-gray-900 rounded p-3 mt-3">
                  <ul className="space-y-2">
                    {step.details.map((detail, i) => (
                      <li
                        key={i}
                        className="text-sm text-gray-300 flex items-start gap-2"
                      >
                        <span className="text-orange-400 mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {step.keywords && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {step.keywords.map((keyword, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}

      {approach.complexity && (
        <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-4">
          <h4 className="text-lg font-semibold text-green-200 mb-2">
            ⏱️ Complexity Analysis
          </h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-400">Time Complexity:</span>
              <span className="text-white font-mono ml-2">
                {approach.complexity.time}
              </span>
            </div>
            <div>
              <span className="text-gray-400">Space Complexity:</span>
              <span className="text-white font-mono ml-2">
                {approach.complexity.space}
              </span>
            </div>
          </div>
        </div>
      )}

      {approach.pattern && (
        <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-4">
          <h4 className="text-lg font-semibold text-purple-200 mb-2">
            🎨 Pattern Identified
          </h4>
          <p className="text-gray-300">{approach.pattern}</p>
        </div>
      )}
    </div>
  );
}
