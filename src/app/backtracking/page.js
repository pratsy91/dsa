"use client";

import { useState } from "react";

export default function BacktrackingPage() {
  const [activeSection, setActiveSection] = useState("concepts");

  const sections = [
    { id: "concepts", title: "Concepts", icon: "📚" },
    { id: "rat-maze", title: "Rat in Maze", icon: "🐭" },
    { id: "n-queen", title: "N Queen", icon: "👑" },
    { id: "sudoku", title: "Sudoku", icon: "🔢" },
    { id: "advanced", title: "Advanced", icon: "⚡" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Backtracking Algorithms Mastery
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Master backtracking algorithms: Rat in a Maze, N Queen Problem,
            Sudoku Solver, and advanced backtracking techniques
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeSection === section.id
                  ? "bg-purple-600 text-white shadow-lg"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              <span className="mr-2">{section.icon}</span>
              {section.title}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto">
          {activeSection === "concepts" && <ConceptsSection />}
          {activeSection === "rat-maze" && <RatMazeSection />}
          {activeSection === "n-queen" && <NQueenSection />}
          {activeSection === "sudoku" && <SudokuSection />}
          {activeSection === "advanced" && <AdvancedSection />}
        </div>
      </div>
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

  return (
    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <div className="flex items-center gap-3">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
              difficulty === "Easy"
                ? "bg-green-500/20 text-green-300"
                : difficulty === "Medium"
                ? "bg-yellow-500/20 text-yellow-300"
                : "bg-red-500/20 text-red-300"
            }`}
          >
            {difficulty}
          </span>
          <button
            onClick={() => setShowSolution(!showSolution)}
            className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-sm font-semibold transition-colors"
          >
            {showSolution ? "Hide Solution" : "Show Solution"}
          </button>
        </div>
      </div>

      <p className="text-gray-300 mb-4">{description}</p>

      {showSolution && (
        <div className="space-y-4">
          <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
            <pre className="text-green-400 text-sm">
              <code>{solution}</code>
            </pre>
          </div>
          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
            <h4 className="text-blue-200 font-semibold mb-2">Explanation:</h4>
            <p className="text-blue-100 text-sm">{explanation}</p>
          </div>
        </div>
      )}
    </div>
  );
}

function ConceptsSection() {
  return (
    <div className="space-y-8">
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Concepts of Backtracking
        </h2>
        <p className="text-gray-300 mb-6">
          Backtracking is a systematic way to explore all possible solutions to
          a problem by building solutions incrementally and abandoning a path as
          soon as it determines that the path cannot lead to a valid solution.
        </p>

        <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-purple-200 mb-3">
            Key Backtracking Concepts:
          </h3>
          <ul className="space-y-2 text-purple-100">
            <li>
              • <strong>Systematic Search:</strong> Explore all possible
              solutions systematically
            </li>
            <li>
              • <strong>Constraint Satisfaction:</strong> Check if current
              partial solution satisfies constraints
            </li>
            <li>
              • <strong>Pruning:</strong> Abandon paths that cannot lead to
              valid solutions
            </li>
            <li>
              • <strong>State Space Tree:</strong> Represent all possible
              solutions as a tree
            </li>
            <li>
              • <strong>Recursive Exploration:</strong> Use recursion to explore
              different paths
            </li>
            <li>
              • <strong>Backtracking:</strong> Undo choices when path doesn't
              work
            </li>
          </ul>
        </div>

        <div className="mt-6 bg-gray-700 rounded-lg p-4">
          <h4 className="text-lg font-semibold text-white mb-3">
            Backtracking Algorithm Template:
          </h4>
          <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
            <pre className="text-green-400 text-sm">
              <code>{`// General Backtracking Template

function backtrack(problem, currentSolution, step) {
  // Base case: check if we have a complete solution
  if (isComplete(currentSolution)) {
    if (isValid(currentSolution)) {
      processSolution(currentSolution);
    }
    return;
  }
  
  // Generate all possible choices for current step
  const choices = generateChoices(problem, currentSolution, step);
  
  // Try each choice
  for (let choice of choices) {
    // Make the choice
    currentSolution[step] = choice;
    
    // Check if this choice is valid so far
    if (isValid(currentSolution, step)) {
      // Recursively explore with this choice
      backtrack(problem, currentSolution, step + 1);
    }
    
    // Backtrack: undo the choice
    currentSolution[step] = null; // or remove the choice
  }
}

// Helper functions to implement based on problem
function isComplete(solution) {
  // Check if solution is complete
  return true; // Implement based on problem
}

function isValid(solution, step = null) {
  // Check if current partial solution is valid
  return true; // Implement based on problem
}

function generateChoices(problem, solution, step) {
  // Generate all possible choices for current step
  return []; // Implement based on problem
}

function processSolution(solution) {
  // Process a complete valid solution
  console.log("Solution found:", solution);
}`}</code>
            </pre>
          </div>
        </div>

        <div className="mt-6 bg-gray-700 rounded-lg p-4">
          <h4 className="text-lg font-semibold text-white mb-3">
            When to Use Backtracking:
          </h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h5 className="font-semibold text-green-400 mb-2">
                ✅ Good for:
              </h5>
              <ul className="space-y-1 text-gray-300">
                <li>• Constraint Satisfaction Problems</li>
                <li>• Combinatorial Problems</li>
                <li>• Optimization Problems</li>
                <li>• Decision Problems</li>
                <li>• Puzzle Solving (N-Queens, Sudoku)</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-red-400 mb-2">
                ❌ Not good for:
              </h5>
              <ul className="space-y-1 text-gray-300">
                <li>• Problems with overlapping subproblems</li>
                <li>• Problems with optimal substructure</li>
                <li>• Problems where greedy approach works</li>
                <li>• Very large search spaces</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Backtracking vs Other Approaches
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-600">
                <th className="text-left py-2 text-white">Aspect</th>
                <th className="text-left py-2 text-white">Backtracking</th>
                <th className="text-left py-2 text-white">
                  Dynamic Programming
                </th>
                <th className="text-left py-2 text-white">Greedy</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-gray-300">Time Complexity</td>
                <td className="py-2 text-red-400">Usually Exponential</td>
                <td className="py-2 text-yellow-400">Usually O(n²) or O(n³)</td>
                <td className="py-2 text-green-400">Usually O(n log n)</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-gray-300">Space Complexity</td>
                <td className="py-2 text-yellow-400">O(depth of recursion)</td>
                <td className="py-2 text-red-400">Usually O(n) or O(n²)</td>
                <td className="py-2 text-green-400">Usually O(1) or O(n)</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-gray-300">Optimality</td>
                <td className="py-2 text-green-400">Always finds optimal</td>
                <td className="py-2 text-green-400">Always optimal</td>
                <td className="py-2 text-yellow-400">Not always optimal</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-gray-300">Use Case</td>
                <td className="py-2 text-blue-400">Constraint satisfaction</td>
                <td className="py-2 text-blue-400">
                  Optimization with overlapping subproblems
                </td>
                <td className="py-2 text-blue-400">
                  Optimization with greedy choice
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function RatMazeSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-white mb-6">
        Rat in a Maze Problem
      </h2>

      <ProblemBlock
        title="Rat in a Maze - Basic Implementation"
        difficulty="Medium"
        description="Find a path for a rat to reach the destination in a maze. The rat can move in 4 directions: up, down, left, right."
        solution={`// Rat in a Maze Problem

function ratInMaze(maze) {
  console.log("=== Rat in a Maze Problem ===");
  console.log("Maze:");
  maze.forEach(row => console.log(row.join(' ')));
  
  const n = maze.length;
  const solution = Array(n).fill().map(() => Array(n).fill(0));
  const directions = [
    [-1, 0], // Up
    [1, 0],  // Down
    [0, -1], // Left
    [0, 1]   // Right
  ];
  
  console.log("\\nStarting from (0,0) to reach (" + (n-1) + "," + (n-1) + ")");
  
  function isValid(x, y) {
    return x >= 0 && x < n && y >= 0 && y < n && maze[x][y] === 1;
  }
  
  function solveMaze(x, y) {
    console.log("\\nTrying position (" + x + "," + y + ")");
    
    // Base case: reached destination
    if (x === n - 1 && y === n - 1) {
      solution[x][y] = 1;
      console.log("✓ Reached destination!");
      return true;
    }
    
    // Check if current position is valid
    if (!isValid(x, y)) {
      console.log("✗ Invalid position (" + x + "," + y + ")");
      return false;
    }
    
    // Mark current position as part of solution path
    solution[x][y] = 1;
    console.log("✓ Marked (" + x + "," + y + ") as part of path");
    
    // Try all 4 directions
    for (let [dx, dy] of directions) {
      const newX = x + dx;
      const newY = y + dy;
      
      console.log("  Trying direction: (" + dx + "," + dy + ") -> (" + newX + "," + newY + ")");
      
      if (solveMaze(newX, newY)) {
        return true;
      }
    }
    
    // If no direction works, backtrack
    solution[x][y] = 0;
    console.log("✗ Backtracking from (" + x + "," + y + ")");
    return false;
  }
  
  if (solveMaze(0, 0)) {
    console.log("\\n=== Solution Found ===");
    console.log("Path matrix:");
    solution.forEach(row => console.log(row.join(' ')));
    return solution;
  } else {
    console.log("\\n=== No Solution Found ===");
    return null;
  }
}

// Alternative: Find all possible paths
function findAllPaths(maze) {
  console.log("\\n=== Finding All Possible Paths ===");
  
  const n = maze.length;
  const allPaths = [];
  const currentPath = [];
  
  function findPaths(x, y) {
    if (x === n - 1 && y === n - 1) {
      allPaths.push([...currentPath]);
      console.log("Found path: " + currentPath.join(" -> "));
      return;
    }
    
    if (!isValid(x, y)) return;
    
    currentPath.push("(" + x + "," + y + ")");
    
    // Try all 4 directions
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    for (let [dx, dy] of directions) {
      findPaths(x + dx, y + dy);
    }
    
    currentPath.pop(); // Backtrack
  }
  
  function isValid(x, y) {
    return x >= 0 && x < n && y >= 0 && y < n && maze[x][y] === 1;
  }
  
  findPaths(0, 0);
  console.log("Total paths found: " + allPaths.length);
  return allPaths;
}

// Test cases
const maze1 = [
  [1, 0, 0, 0],
  [1, 1, 0, 1],
  [0, 1, 0, 0],
  [1, 1, 1, 1]
];

const maze2 = [
  [1, 1, 1],
  [1, 0, 1],
  [0, 1, 1]
];

console.log("=== Testing Rat in a Maze ===");
console.log("\\n--- Test Case 1 ---");
ratInMaze([...maze1]);

console.log("\\n--- Test Case 2 ---");
ratInMaze([...maze2]);

console.log("\\n--- Finding All Paths for Maze 1 ---");
findAllPaths([...maze1]);`}
        explanation="Backtracking approach: try all 4 directions from current position, mark path as you go, backtrack if no valid path found. Time: O(4^(n²)), Space: O(n²)."
      />

      <ProblemBlock
        title="Rat in a Maze - Optimized with Visited Array"
        difficulty="Medium"
        description="Optimized version that uses a visited array to avoid revisiting the same cell multiple times."
        solution={`// Rat in a Maze - Optimized Version

function ratInMazeOptimized(maze) {
  console.log("=== Rat in a Maze - Optimized Version ===");
  console.log("Maze:");
  maze.forEach(row => console.log(row.join(' ')));
  
  const n = maze.length;
  const solution = Array(n).fill().map(() => Array(n).fill(0));
  const visited = Array(n).fill().map(() => Array(n).fill(false));
  const directions = [
    [-1, 0], // Up
    [1, 0],  // Down
    [0, -1], // Left
    [0, 1]   // Right
  ];
  
  function isValid(x, y) {
    return x >= 0 && x < n && y >= 0 && y < n && 
           maze[x][y] === 1 && !visited[x][y];
  }
  
  function solveMaze(x, y) {
    console.log("\\nTrying position (" + x + "," + y + ")");
    
    // Base case: reached destination
    if (x === n - 1 && y === n - 1) {
      solution[x][y] = 1;
      console.log("✓ Reached destination!");
      return true;
    }
    
    // Check if current position is valid
    if (!isValid(x, y)) {
      console.log("✗ Invalid position (" + x + "," + y + ")");
      return false;
    }
    
    // Mark current position as visited and part of solution
    visited[x][y] = true;
    solution[x][y] = 1;
    console.log("✓ Marked (" + x + "," + y + ") as visited and part of path");
    
    // Try all 4 directions
    for (let [dx, dy] of directions) {
      const newX = x + dx;
      const newY = y + dy;
      
      console.log("  Trying direction: (" + dx + "," + dy + ") -> (" + newX + "," + newY + ")");
      
      if (solveMaze(newX, newY)) {
        return true;
      }
    }
    
    // If no direction works, backtrack
    visited[x][y] = false;
    solution[x][y] = 0;
    console.log("✗ Backtracking from (" + x + "," + y + ")");
    return false;
  }
  
  if (solveMaze(0, 0)) {
    console.log("\\n=== Solution Found ===");
    console.log("Path matrix:");
    solution.forEach(row => console.log(row.join(' ')));
    console.log("Visited matrix:");
    visited.forEach(row => console.log(row.join(' ')));
    return solution;
  } else {
    console.log("\\n=== No Solution Found ===");
    return null;
  }
}

// Count number of paths
function countPaths(maze) {
  console.log("\\n=== Counting Number of Paths ===");
  
  const n = maze.length;
  const visited = Array(n).fill().map(() => Array(n).fill(false));
  let pathCount = 0;
  
  function countPathsRecursive(x, y) {
    if (x === n - 1 && y === n - 1) {
      pathCount++;
      console.log("Found path #" + pathCount);
      return;
    }
    
    if (x < 0 || x >= n || y < 0 || y >= n || 
        maze[x][y] === 0 || visited[x][y]) {
      return;
    }
    
    visited[x][y] = true;
    
    // Try all 4 directions
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    for (let [dx, dy] of directions) {
      countPathsRecursive(x + dx, y + dy);
    }
    
    visited[x][y] = false; // Backtrack
  }
  
  countPathsRecursive(0, 0);
  console.log("Total paths: " + pathCount);
  return pathCount;
}

// Find shortest path length
function shortestPathLength(maze) {
  console.log("\\n=== Finding Shortest Path Length ===");
  
  const n = maze.length;
  const visited = Array(n).fill().map(() => Array(n).fill(false));
  let minLength = Infinity;
  
  function findShortestPath(x, y, length) {
    if (x === n - 1 && y === n - 1) {
      minLength = Math.min(minLength, length);
      console.log("Found path with length: " + length);
      return;
    }
    
    if (x < 0 || x >= n || y < 0 || y >= n || 
        maze[x][y] === 0 || visited[x][y]) {
      return;
    }
    
    visited[x][y] = true;
    
    // Try all 4 directions
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    for (let [dx, dy] of directions) {
      findShortestPath(x + dx, y + dy, length + 1);
    }
    
    visited[x][y] = false; // Backtrack
  }
  
  findShortestPath(0, 0, 1);
  console.log("Shortest path length: " + (minLength === Infinity ? "No path" : minLength));
  return minLength === Infinity ? -1 : minLength;
}

// Test cases
const maze = [
  [1, 0, 0, 0],
  [1, 1, 0, 1],
  [0, 1, 0, 0],
  [1, 1, 1, 1]
];

console.log("=== Testing Optimized Rat in a Maze ===");
ratInMazeOptimized([...maze]);
countPaths([...maze]);
shortestPathLength([...maze]);`}
        explanation="Optimized version uses visited array to avoid revisiting cells, reducing redundant exploration. Still exponential time complexity but with better practical performance."
      />
    </div>
  );
}

function NQueenSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-white mb-6">N Queen Problem</h2>

      <ProblemBlock
        title="N Queen Problem - Basic Implementation"
        difficulty="Hard"
        description="Place N queens on an N×N chessboard such that no two queens attack each other. Queens can attack horizontally, vertically, and diagonally."
        solution={`// N Queen Problem

function solveNQueens(n) {
  console.log("=== N Queen Problem for N = " + n + " ===");
  
  const board = Array(n).fill().map(() => Array(n).fill(0));
  const solutions = [];
  
  function isSafe(row, col) {
    console.log("Checking if safe to place queen at (" + row + "," + col + ")");
    
    // Check column
    for (let i = 0; i < row; i++) {
      if (board[i][col] === 1) {
        console.log("  ✗ Column " + col + " already has queen at row " + i);
        return false;
      }
    }
    
    // Check upper left diagonal
    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === 1) {
        console.log("  ✗ Upper left diagonal has queen at (" + i + "," + j + ")");
        return false;
      }
    }
    
    // Check upper right diagonal
    for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
      if (board[i][j] === 1) {
        console.log("  ✗ Upper right diagonal has queen at (" + i + "," + j + ")");
        return false;
      }
    }
    
    console.log("  ✓ Safe to place queen at (" + row + "," + col + ")");
    return true;
  }
  
  function solveNQueensRecursive(row) {
    console.log("\\nTrying to place queen in row " + row);
    
    // Base case: all queens placed
    if (row === n) {
      console.log("✓ All queens placed successfully!");
      solutions.push(board.map(row => [...row])); // Deep copy
      printBoard(board);
      return true;
    }
    
    // Try placing queen in each column of current row
    for (let col = 0; col < n; col++) {
      console.log("  Trying column " + col + " in row " + row);
      
      if (isSafe(row, col)) {
        // Place queen
        board[row][col] = 1;
        console.log("  ✓ Placed queen at (" + row + "," + col + ")");
        
        // Recursively place queens in remaining rows
        if (solveNQueensRecursive(row + 1)) {
          return true; // If we want only one solution
        }
        
        // Backtrack: remove queen
        board[row][col] = 0;
        console.log("  ✗ Backtracking: removed queen from (" + row + "," + col + ")");
      }
    }
    
    console.log("✗ No valid position found in row " + row);
    return false;
  }
  
  function printBoard(board) {
    console.log("\\nSolution:");
    board.forEach((row, i) => {
      console.log("Row " + i + ": " + row.join(' '));
    });
    console.log("");
  }
  
  solveNQueensRecursive(0);
  console.log("\\nTotal solutions found: " + solutions.length);
  return solutions;
}

// Find all solutions
function findAllSolutions(n) {
  console.log("\\n=== Finding All Solutions for N = " + n + " ===");
  
  const board = Array(n).fill().map(() => Array(n).fill(0));
  const allSolutions = [];
  
  function isSafe(row, col) {
    // Check column
    for (let i = 0; i < row; i++) {
      if (board[i][col] === 1) return false;
    }
    
    // Check diagonals
    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === 1) return false;
    }
    
    for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
      if (board[i][j] === 1) return false;
    }
    
    return true;
  }
  
  function findAllSolutionsRecursive(row) {
    if (row === n) {
      allSolutions.push(board.map(row => [...row]));
      return;
    }
    
    for (let col = 0; col < n; col++) {
      if (isSafe(row, col)) {
        board[row][col] = 1;
        findAllSolutionsRecursive(row + 1);
        board[row][col] = 0; // Backtrack
      }
    }
  }
  
  findAllSolutionsRecursive(0);
  console.log("All solutions:");
  allSolutions.forEach((solution, index) => {
    console.log("\\nSolution " + (index + 1) + ":");
    solution.forEach(row => console.log(row.join(' ')));
  });
  
  return allSolutions;
}

// Test cases
console.log("=== Testing N Queen Problem ===");
console.log("\\n--- N = 4 ---");
solveNQueens(4);

console.log("\\n--- N = 8 (All Solutions) ---");
findAllSolutions(8);`}
        explanation="Backtracking approach: place queens row by row, check if current placement is safe, backtrack if no valid position found. Time: O(N!), Space: O(N²)."
      />

      <ProblemBlock
        title="N Queen Problem - Optimized with Column Tracking"
        difficulty="Hard"
        description="Optimized version that tracks which columns and diagonals are already occupied to avoid redundant checks."
        solution={`// N Queen Problem - Optimized Version

function solveNQueensOptimized(n) {
  console.log("=== N Queen Problem - Optimized for N = " + n + " ===");
  
  const board = Array(n).fill().map(() => Array(n).fill(0));
  const colUsed = Array(n).fill(false);
  const diag1Used = Array(2 * n - 1).fill(false); // Main diagonal
  const diag2Used = Array(2 * n - 1).fill(false); // Anti-diagonal
  
  function isSafe(row, col) {
    console.log("Checking if safe to place queen at (" + row + "," + col + ")");
    
    // Check column
    if (colUsed[col]) {
      console.log("  ✗ Column " + col + " already occupied");
      return false;
    }
    
    // Check main diagonal (row - col + n - 1)
    const diag1 = row - col + n - 1;
    if (diag1Used[diag1]) {
      console.log("  ✗ Main diagonal " + diag1 + " already occupied");
      return false;
    }
    
    // Check anti-diagonal (row + col)
    const diag2 = row + col;
    if (diag2Used[diag2]) {
      console.log("  ✗ Anti-diagonal " + diag2 + " already occupied");
      return false;
    }
    
    console.log("  ✓ Safe to place queen at (" + row + "," + col + ")");
    return true;
  }
  
  function placeQueen(row, col) {
    board[row][col] = 1;
    colUsed[col] = true;
    diag1Used[row - col + n - 1] = true;
    diag2Used[row + col] = true;
    console.log("  ✓ Placed queen at (" + row + "," + col + ")");
  }
  
  function removeQueen(row, col) {
    board[row][col] = 0;
    colUsed[col] = false;
    diag1Used[row - col + n - 1] = false;
    diag2Used[row + col] = false;
    console.log("  ✗ Removed queen from (" + row + "," + col + ")");
  }
  
  function solveNQueensRecursive(row) {
    console.log("\\nTrying to place queen in row " + row);
    
    if (row === n) {
      console.log("✓ All queens placed successfully!");
      printBoard(board);
      return true;
    }
    
    for (let col = 0; col < n; col++) {
      console.log("  Trying column " + col + " in row " + row);
      
      if (isSafe(row, col)) {
        placeQueen(row, col);
        
        if (solveNQueensRecursive(row + 1)) {
          return true;
        }
        
        removeQueen(row, col); // Backtrack
      }
    }
    
    console.log("✗ No valid position found in row " + row);
    return false;
  }
  
  function printBoard(board) {
    console.log("\\nSolution:");
    board.forEach((row, i) => {
      console.log("Row " + i + ": " + row.join(' '));
    });
    console.log("");
  }
  
  return solveNQueensRecursive(0);
}

// Count number of solutions
function countNQueensSolutions(n) {
  console.log("\\n=== Counting Solutions for N = " + n + " ===");
  
  const colUsed = Array(n).fill(false);
  const diag1Used = Array(2 * n - 1).fill(false);
  const diag2Used = Array(2 * n - 1).fill(false);
  let count = 0;
  
  function countSolutions(row) {
    if (row === n) {
      count++;
      console.log("Found solution #" + count);
      return;
    }
    
    for (let col = 0; col < n; col++) {
      if (!colUsed[col] && 
          !diag1Used[row - col + n - 1] && 
          !diag2Used[row + col]) {
        
        colUsed[col] = true;
        diag1Used[row - col + n - 1] = true;
        diag2Used[row + col] = true;
        
        countSolutions(row + 1);
        
        colUsed[col] = false;
        diag1Used[row - col + n - 1] = false;
        diag2Used[row + col] = false;
      }
    }
  }
  
  countSolutions(0);
  console.log("Total solutions: " + count);
  return count;
}

// Test cases
console.log("=== Testing Optimized N Queen Problem ===");
console.log("\\n--- N = 4 ---");
solveNQueensOptimized(4);

console.log("\\n--- N = 8 (Count Solutions) ---");
countNQueensSolutions(8);`}
        explanation="Optimized version uses arrays to track occupied columns and diagonals, reducing time complexity of safety check from O(n) to O(1). Overall time complexity remains O(N!)."
      />
    </div>
  );
}

function SudokuSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-white mb-6">Sudoku Problem</h2>

      <ProblemBlock
        title="Sudoku Solver - Basic Implementation"
        difficulty="Hard"
        description="Solve a 9×9 Sudoku puzzle using backtracking. Fill empty cells with numbers 1-9 such that each row, column, and 3×3 subgrid contains all digits 1-9 exactly once."
        solution={`// Sudoku Solver

function solveSudoku(board) {
  console.log("=== Sudoku Solver ===");
  console.log("Initial board:");
  printBoard(board);
  
  function isValid(board, row, col, num) {
    console.log("Checking if " + num + " is valid at (" + row + "," + col + ")");
    
    // Check row
    for (let x = 0; x < 9; x++) {
      if (board[row][x] === num) {
        console.log("  ✗ Number " + num + " already exists in row " + row);
        return false;
      }
    }
    
    // Check column
    for (let x = 0; x < 9; x++) {
      if (board[x][col] === num) {
        console.log("  ✗ Number " + num + " already exists in column " + col);
        return false;
      }
    }
    
    // Check 3x3 subgrid
    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;
    
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[startRow + i][startCol + j] === num) {
          console.log("  ✗ Number " + num + " already exists in 3x3 subgrid");
          return false;
        }
      }
    }
    
    console.log("  ✓ Number " + num + " is valid at (" + row + "," + col + ")");
    return true;
  }
  
  function solveSudokuRecursive(board) {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (board[row][col] === 0) {
          console.log("\\nFound empty cell at (" + row + "," + col + ")");
          
          for (let num = 1; num <= 9; num++) {
            console.log("  Trying number " + num + " at (" + row + "," + col + ")");
            
            if (isValid(board, row, col, num)) {
              board[row][col] = num;
              console.log("  ✓ Placed " + num + " at (" + row + "," + col + ")");
              
              if (solveSudokuRecursive(board)) {
                return true;
              }
              
              board[row][col] = 0;
              console.log("  ✗ Backtracking: removed " + num + " from (" + row + "," + col + ")");
            }
          }
          
          console.log("✗ No valid number found for (" + row + "," + col + ")");
          return false;
        }
      }
    }
    
    console.log("✓ Sudoku solved!");
    return true;
  }
  
  function printBoard(board) {
    console.log("\\nSudoku Board:");
    for (let i = 0; i < 9; i++) {
      let row = "";
      for (let j = 0; j < 9; j++) {
        row += board[i][j] + " ";
        if (j === 2 || j === 5) row += "| ";
      }
      console.log(row);
      if (i === 2 || i === 5) console.log("------+-------+------");
    }
    console.log("");
  }
  
  if (solveSudokuRecursive(board)) {
    console.log("\\n=== Solution Found ===");
    printBoard(board);
    return true;
  } else {
    console.log("\\n=== No Solution Found ===");
    return false;
  }
}

// Count number of solutions
function countSudokuSolutions(board) {
  console.log("\\n=== Counting Sudoku Solutions ===");
  
  let count = 0;
  
  function isValid(board, row, col, num) {
    // Check row
    for (let x = 0; x < 9; x++) {
      if (board[row][x] === num) return false;
    }
    
    // Check column
    for (let x = 0; x < 9; x++) {
      if (board[x][col] === num) return false;
    }
    
    // Check 3x3 subgrid
    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;
    
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[startRow + i][startCol + j] === num) return false;
      }
    }
    
    return true;
  }
  
  function countSolutions(board) {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (board[row][col] === 0) {
          for (let num = 1; num <= 9; num++) {
            if (isValid(board, row, col, num)) {
              board[row][col] = num;
              countSolutions(board);
              board[row][col] = 0;
            }
          }
          return;
        }
      }
    }
    count++;
    console.log("Found solution #" + count);
  }
  
  countSolutions(board);
  console.log("Total solutions: " + count);
  return count;
}

// Test cases
const sudokuBoard = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

console.log("=== Testing Sudoku Solver ===");
solveSudoku([...sudokuBoard]);`}
        explanation="Backtracking approach: find empty cell, try numbers 1-9, check validity, backtrack if no valid number found. Time: O(9^(empty cells)), Space: O(9×9)."
      />

      <ProblemBlock
        title="Sudoku Solver - Optimized with Constraint Propagation"
        difficulty="Hard"
        description="Optimized version that uses constraint propagation and more efficient cell selection to reduce the search space."
        solution={`// Sudoku Solver - Optimized Version

function solveSudokuOptimized(board) {
  console.log("=== Sudoku Solver - Optimized Version ===");
  console.log("Initial board:");
  printBoard(board);
  
  // Find the cell with minimum possible values (most constrained)
  function findBestCell(board) {
    let minPossibilities = 10;
    let bestCell = null;
    
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (board[row][col] === 0) {
          const possibilities = getPossibleValues(board, row, col);
          if (possibilities.length < minPossibilities) {
            minPossibilities = possibilities.length;
            bestCell = { row, col, possibilities };
          }
        }
      }
    }
    
    return bestCell;
  }
  
  // Get possible values for a cell
  function getPossibleValues(board, row, col) {
    const possibilities = [];
    
    for (let num = 1; num <= 9; num++) {
      if (isValid(board, row, col, num)) {
        possibilities.push(num);
      }
    }
    
    return possibilities;
  }
  
  function isValid(board, row, col, num) {
    // Check row
    for (let x = 0; x < 9; x++) {
      if (board[row][x] === num) return false;
    }
    
    // Check column
    for (let x = 0; x < 9; x++) {
      if (board[x][col] === num) return false;
    }
    
    // Check 3x3 subgrid
    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;
    
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[startRow + i][startCol + j] === num) return false;
      }
    }
    
    return true;
  }
  
  function solveSudokuRecursive(board) {
    const bestCell = findBestCell(board);
    
    if (!bestCell) {
      console.log("✓ Sudoku solved!");
      return true;
    }
    
    const { row, col, possibilities } = bestCell;
    console.log("\\nBest cell: (" + row + "," + col + ") with possibilities: [" + possibilities.join(', ') + "]");
    
    for (let num of possibilities) {
      console.log("  Trying " + num + " at (" + row + "," + col + ")");
      
      board[row][col] = num;
      
      if (solveSudokuRecursive(board)) {
        return true;
      }
      
      board[row][col] = 0;
      console.log("  ✗ Backtracking: removed " + num + " from (" + row + "," + col + ")");
    }
    
    console.log("✗ No valid number found for (" + row + "," + col + ")");
    return false;
  }
  
  function printBoard(board) {
    console.log("\\nSudoku Board:");
    for (let i = 0; i < 9; i++) {
      let row = "";
      for (let j = 0; j < 9; j++) {
        row += board[i][j] + " ";
        if (j === 2 || j === 5) row += "| ";
      }
      console.log(row);
      if (i === 2 || i === 5) console.log("------+-------+------");
    }
    console.log("");
  }
  
  if (solveSudokuRecursive(board)) {
    console.log("\\n=== Solution Found ===");
    printBoard(board);
    return true;
  } else {
    console.log("\\n=== No Solution Found ===");
    return false;
  }
}

// Generate a valid Sudoku puzzle
function generateSudoku(difficulty = 'medium') {
  console.log("\\n=== Generating Sudoku Puzzle ===");
  
  const board = Array(9).fill().map(() => Array(9).fill(0));
  
  // Fill diagonal 3x3 subgrids first (they are independent)
  function fillDiagonalSubgrids() {
    for (let i = 0; i < 9; i += 3) {
      fillSubgrid(i, i);
    }
  }
  
  function fillSubgrid(row, col) {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    shuffle(nums);
    
    let index = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        board[row + i][col + j] = nums[index++];
      }
    }
  }
  
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  // Fill the board
  fillDiagonalSubgrids();
  solveSudokuRecursive(board);
  
  // Remove numbers based on difficulty
  const cellsToRemove = {
    'easy': 30,
    'medium': 45,
    'hard': 60
  };
  
  const toRemove = cellsToRemove[difficulty] || 45;
  let removed = 0;
  
  while (removed < toRemove) {
    const row = Math.floor(Math.random() * 9);
    const col = Math.floor(Math.random() * 9);
    
    if (board[row][col] !== 0) {
      board[row][col] = 0;
      removed++;
    }
  }
  
  console.log("Generated " + difficulty + " difficulty puzzle:");
  printBoard(board);
  return board;
}

function solveSudokuRecursive(board) {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === 0) {
        for (let num = 1; num <= 9; num++) {
          if (isValid(board, row, col, num)) {
            board[row][col] = num;
            if (solveSudokuRecursive(board)) {
              return true;
            }
            board[row][col] = 0;
          }
        }
        return false;
      }
    }
  }
  return true;
}

function isValid(board, row, col, num) {
  // Check row
  for (let x = 0; x < 9; x++) {
    if (board[row][x] === num) return false;
  }
  
  // Check column
  for (let x = 0; x < 9; x++) {
    if (board[x][col] === num) return false;
  }
  
  // Check 3x3 subgrid
  const startRow = Math.floor(row / 3) * 3;
  const startCol = Math.floor(col / 3) * 3;
  
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[startRow + i][startCol + j] === num) return false;
    }
  }
  
  return true;
}

function printBoard(board) {
  console.log("\\nSudoku Board:");
  for (let i = 0; i < 9; i++) {
    let row = "";
    for (let j = 0; j < 9; j++) {
      row += board[i][j] + " ";
      if (j === 2 || j === 5) row += "| ";
    }
    console.log(row);
    if (i === 2 || i === 5) console.log("------+-------+------");
  }
  console.log("");
}

// Test cases
const sudokuBoard = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

console.log("=== Testing Optimized Sudoku Solver ===");
solveSudokuOptimized([...sudokuBoard]);

console.log("\\n=== Generating New Puzzle ===");
const newPuzzle = generateSudoku('medium');
solveSudokuOptimized([...newPuzzle]);`}
        explanation="Optimized version selects the most constrained cell (fewest possibilities) first, reducing the search space and improving performance. Still exponential time complexity but with better practical performance."
      />
    </div>
  );
}

function AdvancedSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-white mb-6">
        Advanced Backtracking Problems
      </h2>

      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h3 className="text-2xl font-bold text-white mb-4">
          Backtracking Applications
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-lg font-semibold text-white mb-2">
              Puzzle Solving
            </h4>
            <p className="text-gray-300 text-sm">
              N-Queens, Sudoku, Crossword puzzles, Word search, Magic squares.
            </p>
          </div>
          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-lg font-semibold text-white mb-2">
              Combinatorial Problems
            </h4>
            <p className="text-gray-300 text-sm">
              Permutations, combinations, subset generation, partition problems.
            </p>
          </div>
          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-lg font-semibold text-white mb-2">
              Graph Problems
            </h4>
            <p className="text-gray-300 text-sm">
              Hamiltonian path, graph coloring, path finding, cycle detection.
            </p>
          </div>
          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-lg font-semibold text-white mb-2">
              Optimization
            </h4>
            <p className="text-gray-300 text-sm">
              Knapsack, traveling salesman, job scheduling, resource allocation.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h3 className="text-2xl font-bold text-white mb-4">
          Backtracking Optimization Techniques
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold text-green-400 mb-3">
              ✅ Pruning Techniques
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                • <strong>Constraint Propagation:</strong> Reduce search space
                early
              </li>
              <li>
                • <strong>Forward Checking:</strong> Check constraints before
                exploring
              </li>
              <li>
                • <strong>Most Constrained Variable:</strong> Choose variable
                with fewest options
              </li>
              <li>
                • <strong>Least Constraining Value:</strong> Choose value that
                leaves most options
              </li>
              <li>
                • <strong>Symmetry Breaking:</strong> Avoid exploring symmetric
                solutions
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-blue-400 mb-3">
              ⚡ Performance Tips
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                • <strong>Memoization:</strong> Cache results of subproblems
              </li>
              <li>
                • <strong>Iterative Deepening:</strong> Limit search depth
              </li>
              <li>
                • <strong>Heuristic Ordering:</strong> Order choices by
                likelihood of success
              </li>
              <li>
                • <strong>Early Termination:</strong> Stop when first solution
                found
              </li>
              <li>
                • <strong>Parallel Search:</strong> Explore multiple paths
                simultaneously
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h3 className="text-2xl font-bold text-white mb-4">
          Common Backtracking Patterns
        </h3>
        <div className="space-y-4">
          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-lg font-semibold text-white mb-2">
              1. Generate and Test
            </h4>
            <p className="text-gray-300 text-sm">
              Generate all possible solutions and test each one for validity.
            </p>
          </div>
          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-lg font-semibold text-white mb-2">
              2. Constraint Satisfaction
            </h4>
            <p className="text-gray-300 text-sm">
              Satisfy a set of constraints by assigning values to variables.
            </p>
          </div>
          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-lg font-semibold text-white mb-2">
              3. Decision Tree Traversal
            </h4>
            <p className="text-gray-300 text-sm">
              Systematically explore all possible decision paths.
            </p>
          </div>
          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-lg font-semibold text-white mb-2">
              4. State Space Search
            </h4>
            <p className="text-gray-300 text-sm">
              Search through all possible states of a problem to find a
              solution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
