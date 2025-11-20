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

function CodeBlock({ code, defaultLanguage = "JavaScript" }) {
  const isMultiLanguage = typeof code === "object" && code !== null;
  const languageKeys = isMultiLanguage ? Object.keys(code) : [];
  const [activeLanguage, setActiveLanguage] = useState(
    isMultiLanguage ? languageKeys[0] : defaultLanguage
  );
  const displayedCode = isMultiLanguage ? code[activeLanguage] : code;

  return (
    <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
      {isMultiLanguage && (
        <div className="flex gap-2 mb-4">
          {languageKeys.map((language) => (
            <button
              key={language}
              onClick={() => setActiveLanguage(language)}
              className={`px-3 py-1 rounded text-sm font-semibold transition-colors ${
                activeLanguage === language
                  ? "bg-purple-500 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {language}
            </button>
          ))}
        </div>
      )}
      <pre className="text-green-400 text-sm">
        <code>{displayedCode}</code>
      </pre>
    </div>
  );
}

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
              <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                <h4 className="text-blue-200 font-semibold mb-2">
                  Explanation:
                </h4>
                <p className="text-blue-100 text-sm">{explanation}</p>
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
              • <strong>Backtracking:</strong> Undo choices when path
              doesn&apos;t work
            </li>
          </ul>
        </div>

        <div className="mt-6 bg-gray-700 rounded-lg p-4">
          <h4 className="text-lg font-semibold text-white mb-3">
            Backtracking Algorithm Template:
          </h4>
          <CodeBlock
            code={{
              JavaScript: `// General Backtracking Template

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
}`,
              Java: `import java.util.*;

// General Backtracking Template
public class BacktrackingTemplate {
    // General backtracking method
    public static void backtrack(List<Object> problem, List<Object> currentSolution, int step) {
        // Base case: check if we have a complete solution
        if (isComplete(currentSolution)) {
            if (isValid(currentSolution)) {
                processSolution(currentSolution);
            }
            return;
        }
        
        // Generate all possible choices for current step
        List<Object> choices = generateChoices(problem, currentSolution, step);
        
        // Try each choice
        for (Object choice : choices) {
            // Make the choice
            if (currentSolution.size() <= step) {
                currentSolution.add(choice);
            } else {
                currentSolution.set(step, choice);
            }
            
            // Check if this choice is valid so far
            if (isValid(currentSolution, step)) {
                // Recursively explore with this choice
                backtrack(problem, currentSolution, step + 1);
            }
            
            // Backtrack: undo the choice
            if (currentSolution.size() > step) {
                currentSolution.set(step, null); // or remove the choice
            }
        }
    }
    
    // Helper functions to implement based on problem
    private static boolean isComplete(List<Object> solution) {
        // Check if solution is complete
        return true; // Implement based on problem
    }
    
    private static boolean isValid(List<Object> solution, Integer step) {
        // Check if current partial solution is valid
        return true; // Implement based on problem
    }
    
    private static List<Object> generateChoices(List<Object> problem, List<Object> solution, int step) {
        // Generate all possible choices for current step
        return new ArrayList<>(); // Implement based on problem
    }
    
    private static void processSolution(List<Object> solution) {
        // Process a complete valid solution
        System.out.println("Solution found: " + solution);
    }
    
    public static void main(String[] args) {
        List<Object> problem = new ArrayList<>();
        List<Object> currentSolution = new ArrayList<>();
        
        System.out.println("Backtracking Template Example");
        backtrack(problem, currentSolution, 0);
    }
}`,
            }}
          />
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
        solutions={{
          JavaScript: `// Rat in a Maze Problem

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
findAllPaths([...maze1]);`,
          Java: `import java.util.*;

public class RatInMaze {
    // Rat in a Maze Problem
    public static int[][] ratInMaze(int[][] maze) {
        System.out.println("=== Rat in a Maze Problem ===");
        System.out.println("Maze:");
        for (int[] row : maze) {
            System.out.println(Arrays.toString(row));
        }
        
        int n = maze.length;
        int[][] solution = new int[n][n];
        int[][] directions = {
            {-1, 0}, // Up
            {1, 0},  // Down
            {0, -1}, // Left
            {0, 1}   // Right
        };
        
        System.out.println("\\nStarting from (0,0) to reach (" + (n-1) + "," + (n-1) + ")");
        
        if (solveMaze(maze, solution, 0, 0, n, directions)) {
            System.out.println("\\n=== Solution Found ===");
            System.out.println("Path matrix:");
            for (int[] row : solution) {
                System.out.println(Arrays.toString(row));
            }
            return solution;
        } else {
            System.out.println("\\n=== No Solution Found ===");
            return null;
        }
    }
    
    private static boolean isValid(int[][] maze, int x, int y, int n) {
        return x >= 0 && x < n && y >= 0 && y < n && maze[x][y] == 1;
    }
    
    private static boolean solveMaze(int[][] maze, int[][] solution, int x, int y, int n, int[][] directions) {
        System.out.println("\\nTrying position (" + x + "," + y + ")");
        
        // Base case: reached destination
        if (x == n - 1 && y == n - 1) {
            solution[x][y] = 1;
            System.out.println("✓ Reached destination!");
            return true;
        }
        
        // Check if current position is valid
        if (!isValid(maze, x, y, n)) {
            System.out.println("✗ Invalid position (" + x + "," + y + ")");
            return false;
        }
        
        // Mark current position as part of solution path
        solution[x][y] = 1;
        System.out.println("✓ Marked (" + x + "," + y + ") as part of path");
        
        // Try all 4 directions
        for (int[] dir : directions) {
            int newX = x + dir[0];
            int newY = y + dir[1];
            
            System.out.println("  Trying direction: (" + dir[0] + "," + dir[1] + ") -> (" + newX + "," + newY + ")");
            
            if (solveMaze(maze, solution, newX, newY, n, directions)) {
                return true;
            }
        }
        
        // If no direction works, backtrack
        solution[x][y] = 0;
        System.out.println("✗ Backtracking from (" + x + "," + y + ")");
        return false;
    }
    
    // Alternative: Find all possible paths
    public static List<List<String>> findAllPaths(int[][] maze) {
        System.out.println("\\n=== Finding All Possible Paths ===");
        
        int n = maze.length;
        List<List<String>> allPaths = new ArrayList<>();
        List<String> currentPath = new ArrayList<>();
        int[][] directions = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};
        
        findPaths(maze, allPaths, currentPath, 0, 0, n, directions);
        
        System.out.println("Total paths found: " + allPaths.size());
        return allPaths;
    }
    
    private static void findPaths(int[][] maze, List<List<String>> allPaths, 
                                   List<String> currentPath, int x, int y, int n, int[][] directions) {
        if (x == n - 1 && y == n - 1) {
            allPaths.add(new ArrayList<>(currentPath));
            System.out.println("Found path: " + String.join(" -> ", currentPath));
            return;
        }
        
        if (!isValid(maze, x, y, n)) return;
        
        currentPath.add("(" + x + "," + y + ")");
        
        // Try all 4 directions
        for (int[] dir : directions) {
            findPaths(maze, allPaths, currentPath, x + dir[0], y + dir[1], n, directions);
        }
        
        currentPath.remove(currentPath.size() - 1); // Backtrack
    }
    
    private static boolean isValid(int[][] maze, int x, int y, int n) {
        return x >= 0 && x < n && y >= 0 && y < n && maze[x][y] == 1;
    }
    
    public static void main(String[] args) {
        int[][] maze1 = {
            {1, 0, 0, 0},
            {1, 1, 0, 1},
            {0, 1, 0, 0},
            {1, 1, 1, 1}
        };
        
        int[][] maze2 = {
            {1, 1, 1},
            {1, 0, 1},
            {0, 1, 1}
        };
        
        System.out.println("=== Testing Rat in a Maze ===");
        System.out.println("\\n--- Test Case 1 ---");
        ratInMaze(copyMaze(maze1));
        
        System.out.println("\\n--- Test Case 2 ---");
        ratInMaze(copyMaze(maze2));
        
        System.out.println("\\n--- Finding All Paths for Maze 1 ---");
        findAllPaths(copyMaze(maze1));
    }
    
    private static int[][] copyMaze(int[][] maze) {
        int[][] copy = new int[maze.length][];
        for (int i = 0; i < maze.length; i++) {
            copy[i] = Arrays.copyOf(maze[i], maze[i].length);
        }
        return copy;
    }
}`,
        }}
        explanation="Backtracking approach: try all 4 directions from current position, mark path as you go, backtrack if no valid path found. Time: O(4^(n²)), Space: O(n²)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Find a path from top-left (0,0) to bottom-right (n-1,n-1) in a maze where 1 = open cell, 0 = blocked cell.",
              details: [
                "Rat can move in 4 directions: up, down, left, right",
                "Must stay within maze boundaries",
                "Return solution matrix showing the path (1 = path, 0 = not in path)",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Backtracking: explore all possible paths, mark current cell, try all directions, backtrack if dead end.",
              keywords: [
                "backtracking",
                "recursive exploration",
                "path finding",
                "maze traversal",
              ],
              details: [
                "State space tree: each node represents a position, children are 4 directions",
                "Prune paths that go out of bounds or hit blocked cells",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "2D solution matrix to track path; maze matrix for input; recursion stack for backtracking.",
              details: [
                "Solution matrix initialized to all zeros",
                "Mark cells as 1 when part of path, 0 when backtracking",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Base case: if (x,y) == (n-1,n-1), mark and return true. If invalid cell, return false. Mark current cell, try all 4 directions recursively. If all fail, unmark and return false.",
              details: [
                "Try directions in order: up, down, left, right",
                "Return immediately on first valid path found",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Time complexity is exponential O(4^(n²)) in worst case. Space O(n²) for solution matrix and recursion stack.",
              details: [
                "Can optimize with visited array to avoid revisiting cells",
                "For finding all paths, don't return early; collect all solutions",
              ],
            },
          ],
          pattern: "Backtracking Path Finding",
          complexity: {
            time: "O(4^(n²)) worst case",
            space: "O(n²)",
          },
        }}
      />

      <ProblemBlock
        title="Rat in a Maze - Optimized with Visited Array"
        difficulty="Medium"
        description="Optimized version that uses a visited array to avoid revisiting the same cell multiple times."
        solutions={{
          JavaScript: `// Rat in a Maze - Optimized Version

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
shortestPathLength([...maze]);`,
          Java: `import java.util.*;

public class RatInMazeOptimized {
    // Rat in a Maze - Optimized Version
    public static int[][] ratInMazeOptimized(int[][] maze) {
        System.out.println("=== Rat in a Maze - Optimized Version ===");
        System.out.println("Maze:");
        for (int[] row : maze) {
            System.out.println(Arrays.toString(row));
        }
        
        int n = maze.length;
        int[][] solution = new int[n][n];
        boolean[][] visited = new boolean[n][n];
        int[][] directions = {
            {-1, 0}, // Up
            {1, 0},  // Down
            {0, -1}, // Left
            {0, 1}   // Right
        };
        
        if (solveMaze(maze, solution, visited, 0, 0, n, directions)) {
            System.out.println("\\n=== Solution Found ===");
            System.out.println("Path matrix:");
            for (int[] row : solution) {
                System.out.println(Arrays.toString(row));
            }
            System.out.println("Visited matrix:");
            for (boolean[] row : visited) {
                System.out.println(Arrays.toString(row));
            }
            return solution;
        } else {
            System.out.println("\\n=== No Solution Found ===");
            return null;
        }
    }
    
    private static boolean isValid(int[][] maze, int x, int y, int n, boolean[][] visited) {
        return x >= 0 && x < n && y >= 0 && y < n && 
               maze[x][y] == 1 && !visited[x][y];
    }
    
    private static boolean solveMaze(int[][] maze, int[][] solution, boolean[][] visited, 
                                      int x, int y, int n, int[][] directions) {
        System.out.println("\\nTrying position (" + x + "," + y + ")");
        
        // Base case: reached destination
        if (x == n - 1 && y == n - 1) {
            solution[x][y] = 1;
            System.out.println("✓ Reached destination!");
            return true;
        }
        
        // Check if current position is valid
        if (!isValid(maze, x, y, n, visited)) {
            System.out.println("✗ Invalid position (" + x + "," + y + ")");
            return false;
        }
        
        // Mark current position as visited and part of solution
        visited[x][y] = true;
        solution[x][y] = 1;
        System.out.println("✓ Marked (" + x + "," + y + ") as visited and part of path");
        
        // Try all 4 directions
        for (int[] dir : directions) {
            int newX = x + dir[0];
            int newY = y + dir[1];
            
            System.out.println("  Trying direction: (" + dir[0] + "," + dir[1] + ") -> (" + newX + "," + newY + ")");
            
            if (solveMaze(maze, solution, visited, newX, newY, n, directions)) {
                return true;
            }
        }
        
        // If no direction works, backtrack
        visited[x][y] = false;
        solution[x][y] = 0;
        System.out.println("✗ Backtracking from (" + x + "," + y + ")");
        return false;
    }
    
    // Count number of paths
    public static int countPaths(int[][] maze) {
        System.out.println("\\n=== Counting Number of Paths ===");
        
        int n = maze.length;
        boolean[][] visited = new boolean[n][n];
        int[] pathCount = {0};
        int[][] directions = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};
        
        countPathsRecursive(maze, visited, 0, 0, n, pathCount, directions);
        
        System.out.println("Total paths: " + pathCount[0]);
        return pathCount[0];
    }
    
    private static void countPathsRecursive(int[][] maze, boolean[][] visited, 
                                            int x, int y, int n, int[] pathCount, int[][] directions) {
        if (x == n - 1 && y == n - 1) {
            pathCount[0]++;
            System.out.println("Found path #" + pathCount[0]);
            return;
        }
        
        if (x < 0 || x >= n || y < 0 || y >= n || 
            maze[x][y] == 0 || visited[x][y]) {
            return;
        }
        
        visited[x][y] = true;
        
        // Try all 4 directions
        for (int[] dir : directions) {
            countPathsRecursive(maze, visited, x + dir[0], y + dir[1], n, pathCount, directions);
        }
        
        visited[x][y] = false; // Backtrack
    }
    
    // Find shortest path length
    public static int shortestPathLength(int[][] maze) {
        System.out.println("\\n=== Finding Shortest Path Length ===");
        
        int n = maze.length;
        boolean[][] visited = new boolean[n][n];
        int[] minLength = {Integer.MAX_VALUE};
        int[][] directions = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};
        
        findShortestPath(maze, visited, 0, 0, 1, n, minLength, directions);
        
        System.out.println("Shortest path length: " + 
                         (minLength[0] == Integer.MAX_VALUE ? "No path" : minLength[0]));
        return minLength[0] == Integer.MAX_VALUE ? -1 : minLength[0];
    }
    
    private static void findShortestPath(int[][] maze, boolean[][] visited, 
                                         int x, int y, int length, int n, 
                                         int[] minLength, int[][] directions) {
        if (x == n - 1 && y == n - 1) {
            minLength[0] = Math.min(minLength[0], length);
            System.out.println("Found path with length: " + length);
            return;
        }
        
        if (x < 0 || x >= n || y < 0 || y >= n || 
            maze[x][y] == 0 || visited[x][y]) {
            return;
        }
        
        visited[x][y] = true;
        
        // Try all 4 directions
        for (int[] dir : directions) {
            findShortestPath(maze, visited, x + dir[0], y + dir[1], length + 1, n, minLength, directions);
        }
        
        visited[x][y] = false; // Backtrack
    }
    
    public static void main(String[] args) {
        int[][] maze = {
            {1, 0, 0, 0},
            {1, 1, 0, 1},
            {0, 1, 0, 0},
            {1, 1, 1, 1}
        };
        
        System.out.println("=== Testing Optimized Rat in a Maze ===");
        ratInMazeOptimized(copyMaze(maze));
        countPaths(copyMaze(maze));
        shortestPathLength(copyMaze(maze));
    }
    
    private static int[][] copyMaze(int[][] maze) {
        int[][] copy = new int[maze.length][];
        for (int i = 0; i < maze.length; i++) {
            copy[i] = Arrays.copyOf(maze[i], maze[i].length);
        }
        return copy;
    }
}`,
        }}
        explanation="Optimized version uses visited array to avoid revisiting cells, reducing redundant exploration. Still exponential time complexity but with better practical performance."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Same problem as basic version, but optimize by tracking visited cells to avoid redundant exploration.",
              details: [
                "Visited array prevents revisiting same cell multiple times",
                "Improves practical performance even though worst-case complexity remains exponential",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Backtracking with memoization: use visited array to prune already-explored paths.",
              keywords: [
                "backtracking",
                "visited tracking",
                "path pruning",
                "optimization",
              ],
              details: [
                "Mark cell as visited before exploring, unmark when backtracking",
                "Skip cells that are already visited",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "2D visited boolean array; solution matrix; recursion stack.",
              details: [
                "Visited array same size as maze",
                "Initialize all cells to false",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Before exploring, check if cell is valid and not visited. Mark as visited, try directions, unmark when backtracking.",
              details: [
                "Visited check happens before recursive calls",
                "Unmarking allows cell to be part of different paths if finding all paths",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Reduces redundant exploration significantly. Can also find all paths or shortest path by modifying base case and tracking path length.",
              details: [
                "For all paths: don't return early, collect all solutions",
                "For shortest path: track current path length, update minimum",
              ],
            },
          ],
          pattern: "Backtracking with Visited Tracking",
          complexity: {
            time: "O(4^(n²)) worst case, better practical performance",
            space: "O(n²)",
          },
        }}
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
        solutions={{
          JavaScript: `// N Queen Problem

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
findAllSolutions(8);`,
          Java: `import java.util.*;

public class NQueen {
    // N Queen Problem
    public static List<int[][]> solveNQueens(int n) {
        System.out.println("=== N Queen Problem for N = " + n + " ===");
        
        int[][] board = new int[n][n];
        List<int[][]> solutions = new ArrayList<>();
        
        if (solveNQueensRecursive(board, 0, n, solutions)) {
            System.out.println("\\nTotal solutions found: " + solutions.size());
            return solutions;
        } else {
            System.out.println("\\nNo solution found");
            return solutions;
        }
    }
    
    private static boolean isSafe(int[][] board, int row, int col, int n) {
        System.out.println("Checking if safe to place queen at (" + row + "," + col + ")");
        
        // Check column
        for (int i = 0; i < row; i++) {
            if (board[i][col] == 1) {
                System.out.println("  ✗ Column " + col + " already has queen at row " + i);
                return false;
            }
        }
        
        // Check upper left diagonal
        for (int i = row, j = col; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] == 1) {
                System.out.println("  ✗ Upper left diagonal has queen at (" + i + "," + j + ")");
                return false;
            }
        }
        
        // Check upper right diagonal
        for (int i = row, j = col; i >= 0 && j < n; i--, j++) {
            if (board[i][j] == 1) {
                System.out.println("  ✗ Upper right diagonal has queen at (" + i + "," + j + ")");
                return false;
            }
        }
        
        System.out.println("  ✓ Safe to place queen at (" + row + "," + col + ")");
        return true;
    }
    
    private static boolean solveNQueensRecursive(int[][] board, int row, int n, List<int[][]> solutions) {
        System.out.println("\\nTrying to place queen in row " + row);
        
        // Base case: all queens placed
        if (row == n) {
            System.out.println("✓ All queens placed successfully!");
            int[][] solution = new int[n][n];
            for (int i = 0; i < n; i++) {
                solution[i] = Arrays.copyOf(board[i], n);
            }
            solutions.add(solution);
            printBoard(board);
            return true;
        }
        
        // Try placing queen in each column of current row
        for (int col = 0; col < n; col++) {
            System.out.println("  Trying column " + col + " in row " + row);
            
            if (isSafe(board, row, col, n)) {
                // Place queen
                board[row][col] = 1;
                System.out.println("  ✓ Placed queen at (" + row + "," + col + ")");
                
                // Recursively place queens in remaining rows
                if (solveNQueensRecursive(board, row + 1, n, solutions)) {
                    return true; // If we want only one solution
                }
                
                // Backtrack: remove queen
                board[row][col] = 0;
                System.out.println("  ✗ Backtracking: removed queen from (" + row + "," + col + ")");
            }
        }
        
        System.out.println("✗ No valid position found in row " + row);
        return false;
    }
    
    private static void printBoard(int[][] board) {
        System.out.println("\\nSolution:");
        for (int i = 0; i < board.length; i++) {
            System.out.println("Row " + i + ": " + Arrays.toString(board[i]));
        }
        System.out.println();
    }
    
    // Find all solutions
    public static List<int[][]> findAllSolutions(int n) {
        System.out.println("\\n=== Finding All Solutions for N = " + n + " ===");
        
        int[][] board = new int[n][n];
        List<int[][]> allSolutions = new ArrayList<>();
        
        findAllSolutionsRecursive(board, 0, n, allSolutions);
        
        System.out.println("All solutions:");
        for (int i = 0; i < allSolutions.size(); i++) {
            System.out.println("\\nSolution " + (i + 1) + ":");
            printBoard(allSolutions.get(i));
        }
        
        return allSolutions;
    }
    
    private static boolean isSafeForAll(int[][] board, int row, int col, int n) {
        // Check column
        for (int i = 0; i < row; i++) {
            if (board[i][col] == 1) return false;
        }
        
        // Check diagonals
        for (int i = row, j = col; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] == 1) return false;
        }
        
        for (int i = row, j = col; i >= 0 && j < n; i--, j++) {
            if (board[i][j] == 1) return false;
        }
        
        return true;
    }
    
    private static void findAllSolutionsRecursive(int[][] board, int row, int n, List<int[][]> allSolutions) {
        if (row == n) {
            int[][] solution = new int[n][n];
            for (int i = 0; i < n; i++) {
                solution[i] = Arrays.copyOf(board[i], n);
            }
            allSolutions.add(solution);
            return;
        }
        
        for (int col = 0; col < n; col++) {
            if (isSafeForAll(board, row, col, n)) {
                board[row][col] = 1;
                findAllSolutionsRecursive(board, row + 1, n, allSolutions);
                board[row][col] = 0; // Backtrack
            }
        }
    }
    
    public static void main(String[] args) {
        System.out.println("=== Testing N Queen Problem ===");
        System.out.println("\\n--- N = 4 ---");
        solveNQueens(4);
        
        System.out.println("\\n--- N = 8 (All Solutions) ---");
        findAllSolutions(8);
    }
}`,
        }}
        explanation="Backtracking approach: place queens row by row, check if current placement is safe, backtrack if no valid position found. Time: O(N!), Space: O(N²)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Place N queens on an N×N chessboard such that no two queens attack each other (not in same row, column, or diagonal).",
              details: [
                "Each row must have exactly one queen",
                "Queens attack horizontally, vertically, and diagonally",
                "Return one valid solution or all solutions",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Backtracking: place queen row by row, check safety constraints, backtrack if no valid position in current row.",
              keywords: [
                "backtracking",
                "constraint satisfaction",
                "N queens",
                "recursive placement",
              ],
              details: [
                "State space: each level represents a row, choices are columns",
                "Prune invalid placements early (constraint checking)",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "2D board matrix (0 = empty, 1 = queen); recursion stack for backtracking.",
              details: [
                "Can use 1D array where index = row, value = column",
                "Safety check requires checking columns and diagonals",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "For each row, try each column: if safe, place queen and recurse to next row. If no valid column, backtrack. Base case: all rows filled.",
              details: [
                "Safety check: no queen in same column, no queen in same diagonal (both directions)",
                "For all solutions: don't return early, collect all valid boards",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Time O(N!) in worst case. Safety check is O(N) per placement. Can optimize by tracking occupied columns and diagonals with arrays.",
              details: [
                "Optimized version uses boolean arrays for O(1) safety checks",
                "Diagonal tracking: main diagonal (row-col), anti-diagonal (row+col)",
              ],
            },
          ],
          pattern: "Backtracking Constraint Satisfaction",
          complexity: {
            time: "O(N!)",
            space: "O(N²)",
          },
        }}
      />

      <ProblemBlock
        title="N Queen Problem - Optimized with Column Tracking"
        difficulty="Hard"
        description="Optimized version that tracks which columns and diagonals are already occupied to avoid redundant checks."
        solutions={{
          JavaScript: `// N Queen Problem - Optimized Version

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
countNQueensSolutions(8);`,
          Java: `import java.util.*;

public class NQueenOptimized {
    // N Queen Problem - Optimized Version
    public static boolean solveNQueensOptimized(int n) {
        System.out.println("=== N Queen Problem - Optimized for N = " + n + " ===");
        
        int[][] board = new int[n][n];
        boolean[] colUsed = new boolean[n];
        boolean[] diag1Used = new boolean[2 * n - 1]; // Main diagonal
        boolean[] diag2Used = new boolean[2 * n - 1]; // Anti-diagonal
        
        return solveNQueensRecursive(board, 0, n, colUsed, diag1Used, diag2Used);
    }
    
    private static boolean isSafe(int row, int col, int n, boolean[] colUsed, 
                                   boolean[] diag1Used, boolean[] diag2Used) {
        System.out.println("Checking if safe to place queen at (" + row + "," + col + ")");
        
        // Check column
        if (colUsed[col]) {
            System.out.println("  ✗ Column " + col + " already occupied");
            return false;
        }
        
        // Check main diagonal (row - col + n - 1)
        int diag1 = row - col + n - 1;
        if (diag1Used[diag1]) {
            System.out.println("  ✗ Main diagonal " + diag1 + " already occupied");
            return false;
        }
        
        // Check anti-diagonal (row + col)
        int diag2 = row + col;
        if (diag2Used[diag2]) {
            System.out.println("  ✗ Anti-diagonal " + diag2 + " already occupied");
            return false;
        }
        
        System.out.println("  ✓ Safe to place queen at (" + row + "," + col + ")");
        return true;
    }
    
    private static void placeQueen(int[][] board, int row, int col, int n, 
                                    boolean[] colUsed, boolean[] diag1Used, boolean[] diag2Used) {
        board[row][col] = 1;
        colUsed[col] = true;
        diag1Used[row - col + n - 1] = true;
        diag2Used[row + col] = true;
        System.out.println("  ✓ Placed queen at (" + row + "," + col + ")");
    }
    
    private static void removeQueen(int[][] board, int row, int col, int n, 
                                     boolean[] colUsed, boolean[] diag1Used, boolean[] diag2Used) {
        board[row][col] = 0;
        colUsed[col] = false;
        diag1Used[row - col + n - 1] = false;
        diag2Used[row + col] = false;
        System.out.println("  ✗ Removed queen from (" + row + "," + col + ")");
    }
    
    private static boolean solveNQueensRecursive(int[][] board, int row, int n, 
                                                  boolean[] colUsed, boolean[] diag1Used, boolean[] diag2Used) {
        System.out.println("\\nTrying to place queen in row " + row);
        
        if (row == n) {
            System.out.println("✓ All queens placed successfully!");
            printBoard(board);
            return true;
        }
        
        for (int col = 0; col < n; col++) {
            System.out.println("  Trying column " + col + " in row " + row);
            
            if (isSafe(row, col, n, colUsed, diag1Used, diag2Used)) {
                placeQueen(board, row, col, n, colUsed, diag1Used, diag2Used);
                
                if (solveNQueensRecursive(board, row + 1, n, colUsed, diag1Used, diag2Used)) {
                    return true;
                }
                
                removeQueen(board, row, col, n, colUsed, diag1Used, diag2Used); // Backtrack
            }
        }
        
        System.out.println("✗ No valid position found in row " + row);
        return false;
    }
    
    private static void printBoard(int[][] board) {
        System.out.println("\\nSolution:");
        for (int i = 0; i < board.length; i++) {
            System.out.println("Row " + i + ": " + Arrays.toString(board[i]));
        }
        System.out.println();
    }
    
    // Count number of solutions
    public static int countNQueensSolutions(int n) {
        System.out.println("\\n=== Counting Solutions for N = " + n + " ===");
        
        boolean[] colUsed = new boolean[n];
        boolean[] diag1Used = new boolean[2 * n - 1];
        boolean[] diag2Used = new boolean[2 * n - 1];
        int[] count = {0};
        
        countSolutions(0, n, colUsed, diag1Used, diag2Used, count);
        
        System.out.println("Total solutions: " + count[0]);
        return count[0];
    }
    
    private static void countSolutions(int row, int n, boolean[] colUsed, 
                                       boolean[] diag1Used, boolean[] diag2Used, int[] count) {
        if (row == n) {
            count[0]++;
            System.out.println("Found solution #" + count[0]);
            return;
        }
        
        for (int col = 0; col < n; col++) {
            if (!colUsed[col] && 
                !diag1Used[row - col + n - 1] && 
                !diag2Used[row + col]) {
                
                colUsed[col] = true;
                diag1Used[row - col + n - 1] = true;
                diag2Used[row + col] = true;
                
                countSolutions(row + 1, n, colUsed, diag1Used, diag2Used, count);
                
                colUsed[col] = false;
                diag1Used[row - col + n - 1] = false;
                diag2Used[row + col] = false;
            }
        }
    }
    
    public static void main(String[] args) {
        System.out.println("=== Testing Optimized N Queen Problem ===");
        System.out.println("\\n--- N = 4 ---");
        solveNQueensOptimized(4);
        
        System.out.println("\\n--- N = 8 (Count Solutions) ---");
        countNQueensSolutions(8);
    }
}`,
        }}
        explanation="Optimized version uses arrays to track occupied columns and diagonals, reducing time complexity of safety check from O(n) to O(1). Overall time complexity remains O(N!)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Same N Queen problem, but optimize safety checking by maintaining arrays for occupied columns and diagonals.",
              details: [
                "Instead of checking all previous queens, use boolean arrays for O(1) lookup",
                "Maintains same correctness but improves practical performance",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Backtracking with constraint tracking: use arrays to track which columns and diagonals are occupied.",
              keywords: [
                "backtracking",
                "constraint tracking",
                "optimization",
                "O(1) safety check",
              ],
              details: [
                "Track columns: boolean array of size N",
                "Track diagonals: main diagonal (row-col), anti-diagonal (row+col)",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Boolean arrays: colUsed[N], diag1Used[2N-1], diag2Used[2N-1]; recursion stack.",
              details: [
                "diag1Used tracks main diagonal: index = row - col + N - 1",
                "diag2Used tracks anti-diagonal: index = row + col",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "For each row, try each column: if colUsed[col] and diagonals are free, mark all three, recurse, unmark when backtracking.",
              details: [
                "Safety check is now O(1): just check three boolean values",
                "Update arrays when placing/removing queen",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Reduces per-placement cost from O(N) to O(1), significantly improving practical performance. Overall complexity still O(N!) but with much better constant factors.",
              details: [
                "Can count solutions without storing all boards",
                "Useful for large N where storing all solutions is impractical",
              ],
            },
          ],
          pattern: "Backtracking with Constraint Tracking",
          complexity: {
            time: "O(N!) with O(1) per-placement checks",
            space: "O(N)",
          },
        }}
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
        solutions={{
          JavaScript: `// Sudoku Solver

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
solveSudoku([...sudokuBoard]);`,
          Java: `import java.util.*;

public class SudokuSolver {
    // Sudoku Solver
    public static boolean solveSudoku(int[][] board) {
        System.out.println("=== Sudoku Solver ===");
        System.out.println("Initial board:");
        printBoard(board);
        
        if (solveSudokuRecursive(board)) {
            System.out.println("\\n=== Solution Found ===");
            printBoard(board);
            return true;
        } else {
            System.out.println("\\n=== No Solution Found ===");
            return false;
        }
    }
    
    private static boolean isValid(int[][] board, int row, int col, int num) {
        System.out.println("Checking if " + num + " is valid at (" + row + "," + col + ")");
        
        // Check row
        for (int x = 0; x < 9; x++) {
            if (board[row][x] == num) {
                System.out.println("  ✗ Number " + num + " already exists in row " + row);
                return false;
            }
        }
        
        // Check column
        for (int x = 0; x < 9; x++) {
            if (board[x][col] == num) {
                System.out.println("  ✗ Number " + num + " already exists in column " + col);
                return false;
            }
        }
        
        // Check 3x3 subgrid
        int startRow = (row / 3) * 3;
        int startCol = (col / 3) * 3;
        
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                if (board[startRow + i][startCol + j] == num) {
                    System.out.println("  ✗ Number " + num + " already exists in 3x3 subgrid");
                    return false;
                }
            }
        }
        
        System.out.println("  ✓ Number " + num + " is valid at (" + row + "," + col + ")");
        return true;
    }
    
    private static boolean solveSudokuRecursive(int[][] board) {
        for (int row = 0; row < 9; row++) {
            for (int col = 0; col < 9; col++) {
                if (board[row][col] == 0) {
                    System.out.println("\\nFound empty cell at (" + row + "," + col + ")");
                    
                    for (int num = 1; num <= 9; num++) {
                        System.out.println("  Trying number " + num + " at (" + row + "," + col + ")");
                        
                        if (isValid(board, row, col, num)) {
                            board[row][col] = num;
                            System.out.println("  ✓ Placed " + num + " at (" + row + "," + col + ")");
                            
                            if (solveSudokuRecursive(board)) {
                                return true;
                            }
                            
                            board[row][col] = 0;
                            System.out.println("  ✗ Backtracking: removed " + num + " from (" + row + "," + col + ")");
                        }
                    }
                    
                    System.out.println("✗ No valid number found for (" + row + "," + col + ")");
                    return false;
                }
            }
        }
        
        System.out.println("✓ Sudoku solved!");
        return true;
    }
    
    private static void printBoard(int[][] board) {
        System.out.println("\\nSudoku Board:");
        for (int i = 0; i < 9; i++) {
            StringBuilder row = new StringBuilder();
            for (int j = 0; j < 9; j++) {
                row.append(board[i][j]).append(" ");
                if (j == 2 || j == 5) row.append("| ");
            }
            System.out.println(row.toString());
            if (i == 2 || i == 5) System.out.println("------+-------+------");
        }
        System.out.println();
    }
    
    // Count number of solutions
    public static int countSudokuSolutions(int[][] board) {
        System.out.println("\\n=== Counting Sudoku Solutions ===");
        
        int[] count = {0};
        countSolutions(board, count);
        
        System.out.println("Total solutions: " + count[0]);
        return count[0];
    }
    
    private static boolean isValidForCount(int[][] board, int row, int col, int num) {
        // Check row
        for (int x = 0; x < 9; x++) {
            if (board[row][x] == num) return false;
        }
        
        // Check column
        for (int x = 0; x < 9; x++) {
            if (board[x][col] == num) return false;
        }
        
        // Check 3x3 subgrid
        int startRow = (row / 3) * 3;
        int startCol = (col / 3) * 3;
        
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                if (board[startRow + i][startCol + j] == num) return false;
            }
        }
        
        return true;
    }
    
    private static void countSolutions(int[][] board, int[] count) {
        for (int row = 0; row < 9; row++) {
            for (int col = 0; col < 9; col++) {
                if (board[row][col] == 0) {
                    for (int num = 1; num <= 9; num++) {
                        if (isValidForCount(board, row, col, num)) {
                            board[row][col] = num;
                            countSolutions(board, count);
                            board[row][col] = 0;
                        }
                    }
                    return;
                }
            }
        }
        count[0]++;
        System.out.println("Found solution #" + count[0]);
    }
    
    public static void main(String[] args) {
        int[][] sudokuBoard = {
            {5, 3, 0, 0, 7, 0, 0, 0, 0},
            {6, 0, 0, 1, 9, 5, 0, 0, 0},
            {0, 9, 8, 0, 0, 0, 0, 6, 0},
            {8, 0, 0, 0, 6, 0, 0, 0, 3},
            {4, 0, 0, 8, 0, 3, 0, 0, 1},
            {7, 0, 0, 0, 2, 0, 0, 0, 6},
            {0, 6, 0, 0, 0, 0, 2, 8, 0},
            {0, 0, 0, 4, 1, 9, 0, 0, 5},
            {0, 0, 0, 0, 8, 0, 0, 7, 9}
        };
        
        System.out.println("=== Testing Sudoku Solver ===");
        solveSudoku(copyBoard(sudokuBoard));
    }
    
    private static int[][] copyBoard(int[][] board) {
        int[][] copy = new int[board.length][];
        for (int i = 0; i < board.length; i++) {
            copy[i] = Arrays.copyOf(board[i], board[i].length);
        }
        return copy;
    }
}`,
        }}
        explanation="Backtracking approach: find empty cell, try numbers 1-9, check validity, backtrack if no valid number found. Time: O(9^(empty cells)), Space: O(9×9)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Fill a 9×9 Sudoku grid such that each row, column, and 3×3 box contains digits 1-9 exactly once. Some cells are pre-filled.",
              details: [
                "Empty cells are represented as 0",
                "Must satisfy three constraints: row, column, and 3×3 box",
                "Return true if solvable, false otherwise",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Backtracking: find empty cell, try numbers 1-9, check if valid, recurse to next empty cell, backtrack if no valid number.",
              keywords: [
                "backtracking",
                "constraint satisfaction",
                "sudoku solver",
                "recursive search",
              ],
              details: [
                "State space: each empty cell has 9 choices",
                "Prune invalid placements early (constraint checking)",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "9×9 2D array for board; recursion stack for backtracking.",
              details: [
                "Board modified in-place during backtracking",
                "Need helper function to find next empty cell",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Find empty cell. If none, return true (solved). For each number 1-9: if valid in row/column/box, place it and recurse. If recursion succeeds, return true. Otherwise backtrack and try next number.",
              details: [
                "Validity check: number not in same row, column, or 3×3 box",
                "Box index = (row/3)*3 + col/3",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Time complexity is O(9^m) where m is number of empty cells. Can optimize by selecting most constrained cell first (fewest possibilities).",
              details: [
                "Constraint propagation: eliminate impossible values early",
                "For counting solutions: don't return early, explore all paths",
              ],
            },
          ],
          pattern: "Backtracking Constraint Satisfaction",
          complexity: {
            time: "O(9^(empty cells))",
            space: "O(9×9)",
          },
        }}
      />

      <ProblemBlock
        title="Sudoku Solver - Optimized with Constraint Propagation"
        difficulty="Hard"
        description="Optimized version that uses constraint propagation and more efficient cell selection to reduce the search space."
        solutions={{
          JavaScript: `// Sudoku Solver - Optimized Version

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
solveSudokuOptimized([...newPuzzle]);`,
          Java: `import java.util.*;

public class SudokuSolverOptimized {
    // Cell class for tracking best cell
    static class Cell {
        int row;
        int col;
        List<Integer> possibilities;
        
        Cell(int row, int col, List<Integer> possibilities) {
            this.row = row;
            this.col = col;
            this.possibilities = possibilities;
        }
    }
    
    // Sudoku Solver - Optimized Version
    public static boolean solveSudokuOptimized(int[][] board) {
        System.out.println("=== Sudoku Solver - Optimized Version ===");
        System.out.println("Initial board:");
        printBoard(board);
        
        if (solveSudokuRecursive(board)) {
            System.out.println("\\n=== Solution Found ===");
            printBoard(board);
            return true;
        } else {
            System.out.println("\\n=== No Solution Found ===");
            return false;
        }
    }
    
    // Find the cell with minimum possible values (most constrained)
    private static Cell findBestCell(int[][] board) {
        int minPossibilities = 10;
        Cell bestCell = null;
        
        for (int row = 0; row < 9; row++) {
            for (int col = 0; col < 9; col++) {
                if (board[row][col] == 0) {
                    List<Integer> possibilities = getPossibleValues(board, row, col);
                    if (possibilities.size() < minPossibilities) {
                        minPossibilities = possibilities.size();
                        bestCell = new Cell(row, col, possibilities);
                    }
                }
            }
        }
        
        return bestCell;
    }
    
    // Get possible values for a cell
    private static List<Integer> getPossibleValues(int[][] board, int row, int col) {
        List<Integer> possibilities = new ArrayList<>();
        
        for (int num = 1; num <= 9; num++) {
            if (isValid(board, row, col, num)) {
                possibilities.add(num);
            }
        }
        
        return possibilities;
    }
    
    private static boolean isValid(int[][] board, int row, int col, int num) {
        // Check row
        for (int x = 0; x < 9; x++) {
            if (board[row][x] == num) return false;
        }
        
        // Check column
        for (int x = 0; x < 9; x++) {
            if (board[x][col] == num) return false;
        }
        
        // Check 3x3 subgrid
        int startRow = (row / 3) * 3;
        int startCol = (col / 3) * 3;
        
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                if (board[startRow + i][startCol + j] == num) return false;
            }
        }
        
        return true;
    }
    
    private static boolean solveSudokuRecursive(int[][] board) {
        Cell bestCell = findBestCell(board);
        
        if (bestCell == null) {
            System.out.println("✓ Sudoku solved!");
            return true;
        }
        
        int row = bestCell.row;
        int col = bestCell.col;
        List<Integer> possibilities = bestCell.possibilities;
        
        System.out.println("\\nBest cell: (" + row + "," + col + ") with possibilities: " + possibilities);
        
        for (int num : possibilities) {
            System.out.println("  Trying " + num + " at (" + row + "," + col + ")");
            
            board[row][col] = num;
            
            if (solveSudokuRecursive(board)) {
                return true;
            }
            
            board[row][col] = 0;
            System.out.println("  ✗ Backtracking: removed " + num + " from (" + row + "," + col + ")");
        }
        
        System.out.println("✗ No valid number found for (" + row + "," + col + ")");
        return false;
    }
    
    private static void printBoard(int[][] board) {
        System.out.println("\\nSudoku Board:");
        for (int i = 0; i < 9; i++) {
            StringBuilder row = new StringBuilder();
            for (int j = 0; j < 9; j++) {
                row.append(board[i][j]).append(" ");
                if (j == 2 || j == 5) row.append("| ");
            }
            System.out.println(row.toString());
            if (i == 2 || i == 5) System.out.println("------+-------+------");
        }
        System.out.println();
    }
    
    // Generate a valid Sudoku puzzle
    public static int[][] generateSudoku(String difficulty) {
        System.out.println("\\n=== Generating Sudoku Puzzle ===");
        
        int[][] board = new int[9][9];
        
        // Fill diagonal 3x3 subgrids first (they are independent)
        fillDiagonalSubgrids(board);
        
        // Fill the board
        solveSudokuRecursive(board);
        
        // Remove numbers based on difficulty
        Map<String, Integer> cellsToRemove = new HashMap<>();
        cellsToRemove.put("easy", 30);
        cellsToRemove.put("medium", 45);
        cellsToRemove.put("hard", 60);
        
        int toRemove = cellsToRemove.getOrDefault(difficulty, 45);
        int removed = 0;
        Random random = new Random();
        
        while (removed < toRemove) {
            int row = random.nextInt(9);
            int col = random.nextInt(9);
            
            if (board[row][col] != 0) {
                board[row][col] = 0;
                removed++;
            }
        }
        
        System.out.println("Generated " + difficulty + " difficulty puzzle:");
        printBoard(board);
        return board;
    }
    
    private static void fillDiagonalSubgrids(int[][] board) {
        for (int i = 0; i < 9; i += 3) {
            fillSubgrid(board, i, i);
        }
    }
    
    private static void fillSubgrid(int[][] board, int row, int col) {
        List<Integer> nums = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9));
        Collections.shuffle(nums);
        
        int index = 0;
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                board[row + i][col + j] = nums.get(index++);
            }
        }
    }
    
    public static void main(String[] args) {
        int[][] sudokuBoard = {
            {5, 3, 0, 0, 7, 0, 0, 0, 0},
            {6, 0, 0, 1, 9, 5, 0, 0, 0},
            {0, 9, 8, 0, 0, 0, 0, 6, 0},
            {8, 0, 0, 0, 6, 0, 0, 0, 3},
            {4, 0, 0, 8, 0, 3, 0, 0, 1},
            {7, 0, 0, 0, 2, 0, 0, 0, 6},
            {0, 6, 0, 0, 0, 0, 2, 8, 0},
            {0, 0, 0, 4, 1, 9, 0, 0, 5},
            {0, 0, 0, 0, 8, 0, 0, 7, 9}
        };
        
        System.out.println("=== Testing Optimized Sudoku Solver ===");
        solveSudokuOptimized(copyBoard(sudokuBoard));
        
        System.out.println("\\n=== Generating New Puzzle ===");
        int[][] newPuzzle = generateSudoku("medium");
        solveSudokuOptimized(copyBoard(newPuzzle));
    }
    
    private static int[][] copyBoard(int[][] board) {
        int[][] copy = new int[board.length][];
        for (int i = 0; i < board.length; i++) {
            copy[i] = Arrays.copyOf(board[i], board[i].length);
        }
        return copy;
    }
}`,
        }}
        explanation="Optimized version selects the most constrained cell (fewest possibilities) first, reducing the search space and improving performance. Still exponential time complexity but with better practical performance."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Same Sudoku problem, but optimize by selecting the most constrained empty cell first (cell with fewest valid number possibilities).",
              details: [
                "Most constrained cell selection reduces branching factor",
                "Constraint propagation eliminates impossible values early",
                "Significantly improves practical performance",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Backtracking with intelligent cell selection: choose cell with minimum possibilities, reducing search space.",
              keywords: [
                "backtracking",
                "constraint propagation",
                "most constrained first",
                "optimization",
              ],
              details: [
                "Heuristic: cells with fewer possibilities lead to faster pruning",
                "Constraint propagation: update possibilities as values are placed",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "9×9 board; helper to find most constrained cell; function to get possible values for a cell.",
              details: [
                "Track possible values per cell based on row/column/box constraints",
                "Select cell with minimum possible values",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Find most constrained empty cell (fewest possibilities). If none, return true. For each possible value: place it, recurse. If recursion fails, backtrack and try next value.",
              details: [
                "Most constrained cell selection: iterate all empty cells, find one with minimum possibilities",
                "Get possibilities by checking row, column, and box constraints",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Reduces search space significantly by choosing cells that lead to faster pruning. Can further optimize with constraint propagation (eliminate values from neighbors when placing a value).",
              details: [
                "Time complexity still exponential but with much better constant factors",
                "Most constrained first heuristic is key optimization",
                "Can use bit masks for faster possibility checking",
              ],
            },
          ],
          pattern: "Backtracking with Constraint Propagation",
          complexity: {
            time: "O(9^(empty cells)) with better practical performance",
            space: "O(9×9)",
          },
        }}
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
