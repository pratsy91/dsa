"use client";

import { useState } from "react";

export default function DynamicProgrammingPage() {
  const [activeSection, setActiveSection] = useState("introduction");

  const sections = [
    { id: "introduction", title: "Introduction", icon: "📚" },
    { id: "memoization", title: "Memoization", icon: "💾" },
    { id: "tabulation", title: "Tabulation", icon: "📊" },
    { id: "lcs", title: "LCS", icon: "🔗" },
    { id: "edit-distance", title: "Edit Distance", icon: "✏️" },
    { id: "lis", title: "LIS", icon: "📈" },
    { id: "knapsack", title: "Knapsack", icon: "🎒" },
    { id: "advanced", title: "Advanced", icon: "⚡" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Dynamic Programming Mastery
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Master dynamic programming: Memoization, Tabulation, LCS, Edit
            Distance, LIS, Knapsack, and advanced DP techniques
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
                  ? "bg-blue-600 text-white shadow-lg"
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
          {activeSection === "introduction" && <IntroductionSection />}
          {activeSection === "memoization" && <MemoizationSection />}
          {activeSection === "tabulation" && <TabulationSection />}
          {activeSection === "lcs" && <LCSSection />}
          {activeSection === "edit-distance" && <EditDistanceSection />}
          {activeSection === "lis" && <LISSection />}
          {activeSection === "knapsack" && <KnapsackSection />}
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
                  ? "bg-blue-500 text-white"
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
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-semibold transition-colors"
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
                    ? "text-blue-400 border-b-2 border-blue-400"
                    : "text-gray-400 hover:text-gray-300"
                }`}
              >
                Solution
              </button>
              <button
                onClick={() => setActiveTab("approach")}
                className={`px-4 py-2 font-semibold transition-colors ${
                  activeTab === "approach"
                    ? "text-blue-400 border-b-2 border-blue-400"
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

function IntroductionSection() {
  return (
    <div className="space-y-8">
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Introduction to Dynamic Programming
        </h2>
        <p className="text-gray-300 mb-6">
          Dynamic Programming is an optimization technique that solves complex
          problems by breaking them down into simpler subproblems and storing
          the results of these subproblems to avoid redundant calculations.
        </p>

        <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-blue-200 mb-3">
            Key DP Concepts:
          </h3>
          <ul className="space-y-2 text-blue-100">
            <li>
              • <strong>Overlapping Subproblems:</strong> Same subproblems are
              solved multiple times
            </li>
            <li>
              • <strong>Optimal Substructure:</strong> Optimal solution contains
              optimal solutions to subproblems
            </li>
            <li>
              • <strong>Memoization:</strong> Top-down approach with caching
            </li>
            <li>
              • <strong>Tabulation:</strong> Bottom-up approach with table
              filling
            </li>
            <li>
              • <strong>State Transition:</strong> How to move from one state to
              another
            </li>
            <li>
              • <strong>Base Cases:</strong> Simple cases that can be solved
              directly
            </li>
          </ul>
        </div>

        <div className="mt-6 bg-gray-700 rounded-lg p-4">
          <h4 className="text-lg font-semibold text-white mb-3">
            When to Use Dynamic Programming:
          </h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h5 className="font-semibold text-green-400 mb-2">
                ✅ Good for:
              </h5>
              <ul className="space-y-1 text-gray-300">
                <li>• Optimization problems</li>
                <li>• Counting problems</li>
                <li>• Decision problems</li>
                <li>• Problems with overlapping subproblems</li>
                <li>• Problems with optimal substructure</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-red-400 mb-2">
                ❌ Not good for:
              </h5>
              <ul className="space-y-1 text-gray-300">
                <li>• Problems without overlapping subproblems</li>
                <li>• Problems without optimal substructure</li>
                <li>• Problems where greedy approach works</li>
                <li>• Problems requiring all possible solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          DP vs Other Approaches
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-600">
                <th className="text-left py-2 text-white">Aspect</th>
                <th className="text-left py-2 text-white">
                  Dynamic Programming
                </th>
                <th className="text-left py-2 text-white">Recursion</th>
                <th className="text-left py-2 text-white">Greedy</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-gray-300">Time Complexity</td>
                <td className="py-2 text-green-400">Usually O(n²) or O(n³)</td>
                <td className="py-2 text-red-400">Usually Exponential</td>
                <td className="py-2 text-blue-400">Usually O(n log n)</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-gray-300">Space Complexity</td>
                <td className="py-2 text-yellow-400">Usually O(n) or O(n²)</td>
                <td className="py-2 text-green-400">O(depth of recursion)</td>
                <td className="py-2 text-green-400">Usually O(1) or O(n)</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-gray-300">Optimality</td>
                <td className="py-2 text-green-400">Always optimal</td>
                <td className="py-2 text-green-400">Always optimal</td>
                <td className="py-2 text-yellow-400">Not always optimal</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-gray-300">Use Case</td>
                <td className="py-2 text-blue-400">
                  Optimization with overlapping subproblems
                </td>
                <td className="py-2 text-blue-400">
                  Simple recursive problems
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

function MemoizationSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-white mb-6">
        Dynamic Programming Memoization
      </h2>

      <ProblemBlock
        title="Fibonacci with Memoization"
        difficulty="Easy"
        description="Calculate Fibonacci numbers using memoization to avoid redundant calculations."
        solutions={{
          JavaScript: `// Fibonacci with Memoization

function fibonacciMemo(n) {
  console.log("=== Fibonacci with Memoization ===");
  console.log("Calculating Fibonacci(" + n + ")");
  
  const memo = {};
  
  function fib(n) {
    console.log("  Computing fib(" + n + ")");
    
    // Base cases
    if (n <= 1) {
      console.log("    Base case: fib(" + n + ") = " + n);
      return n;
    }
    
    // Check if already computed
    if (memo[n] !== undefined) {
      console.log("    Found in memo: fib(" + n + ") = " + memo[n]);
      return memo[n];
    }
    
    // Compute and store
    console.log("    Computing fib(" + n + ") = fib(" + (n-1) + ") + fib(" + (n-2) + ")");
    memo[n] = fib(n - 1) + fib(n - 2);
    console.log("    Stored in memo: fib(" + n + ") = " + memo[n]);
    
    return memo[n];
  }
  
  const result = fib(n);
  console.log("Final result: Fibonacci(" + n + ") = " + result);
  console.log("Memo table:", memo);
  
  return result;
}

// Test cases
console.log("=== Testing Fibonacci Memoization ===");
fibonacciMemo(10);
fibonacciMemo(20);`,
          Java: `import java.util.*;

public class FibonacciMemo {
    // Fibonacci with Memoization
    public static long fibonacciMemo(int n) {
        System.out.println("=== Fibonacci with Memoization ===");
        System.out.println("Calculating Fibonacci(" + n + ")");
        
        Map<Integer, Long> memo = new HashMap<>();
        
        long result = fib(n, memo);
        System.out.println("Final result: Fibonacci(" + n + ") = " + result);
        System.out.println("Memo table: " + memo);
        
        return result;
    }
    
    private static long fib(int n, Map<Integer, Long> memo) {
        System.out.println("  Computing fib(" + n + ")");
        
        // Base cases
        if (n <= 1) {
            System.out.println("    Base case: fib(" + n + ") = " + n);
            return n;
        }
        
        // Check if already computed
        if (memo.containsKey(n)) {
            System.out.println("    Found in memo: fib(" + n + ") = " + memo.get(n));
            return memo.get(n);
        }
        
        // Compute and store
        System.out.println("    Computing fib(" + n + ") = fib(" + (n-1) + ") + fib(" + (n-2) + ")");
        long result = fib(n - 1, memo) + fib(n - 2, memo);
        memo.put(n, result);
        System.out.println("    Stored in memo: fib(" + n + ") = " + result);
        
        return result;
    }
    
    public static void main(String[] args) {
        System.out.println("=== Testing Fibonacci Memoization ===");
        fibonacciMemo(10);
        fibonacciMemo(20);
    }
}`,
        }}
        explanation="Memoization stores results of subproblems in a table to avoid redundant calculations. Time: O(n), Space: O(n)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Calculate the nth Fibonacci number. Naive recursion recalculates same values multiple times (exponential time).",
              details: [
                "Fibonacci: F(0)=0, F(1)=1, F(n)=F(n-1)+F(n-2)",
                "Goal: optimize by storing computed values",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Overlapping subproblems: same Fibonacci values computed multiple times. Memoization caches results.",
              keywords: [
                "memoization",
                "top-down DP",
                "overlapping subproblems",
                "caching",
              ],
              details: [
                "Recursive structure with repeated calculations",
                "Store results in hash map/array to avoid recomputation",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Hash map (object/dictionary) or array to store computed Fibonacci values.",
              details: [
                "Key: n, Value: F(n)",
                "Check memo before computing, store after computing",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Base cases: return 0 if n=0, 1 if n=1. Check memo: if F(n) exists, return it. Otherwise compute F(n)=F(n-1)+F(n-2), store in memo, return.",
              details: [
                "Recursive calls use memoized values when available",
                "Each value computed exactly once",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Time O(n) - each value computed once. Space O(n) for memo. Can optimize space to O(1) using iterative approach with two variables.",
              details: [
                "Memoization reduces time from O(2^n) to O(n)",
                "Tabulation (bottom-up) can achieve O(1) space",
              ],
            },
          ],
          pattern: "Memoization (Top-Down DP)",
          complexity: {
            time: "O(n)",
            space: "O(n)",
          },
        }}
      />

      <ProblemBlock
        title="Longest Common Subsequence with Memoization"
        difficulty="Medium"
        description="Find the length of the longest common subsequence between two strings using memoization."
        solutions={{
          JavaScript: `// LCS with Memoization

function lcsMemo(s1, s2) {
  console.log("=== LCS with Memoization ===");
  console.log("String 1:", s1);
  console.log("String 2:", s2);
  
  const memo = {};
  
  function lcs(i, j) {
    console.log("  Computing LCS(" + i + ", " + j + ")");
    
    // Base case: empty strings
    if (i === 0 || j === 0) {
      console.log("    Base case: LCS(" + i + ", " + j + ") = 0");
      return 0;
    }
    
    // Check memo
    const key = i + "," + j;
    if (memo[key] !== undefined) {
      console.log("    Found in memo: LCS(" + i + ", " + j + ") = " + memo[key]);
      return memo[key];
    }
    
    let result;
    
    // If characters match
    if (s1[i-1] === s2[j-1]) {
      console.log("    Characters match: '" + s1[i-1] + "' == '" + s2[j-1] + "'");
      result = 1 + lcs(i-1, j-1);
      console.log("    LCS(" + i + ", " + j + ") = 1 + LCS(" + (i-1) + ", " + (j-1) + ") = " + result);
    } else {
      console.log("    Characters don't match: '" + s1[i-1] + "' != '" + s2[j-1] + "'");
      const option1 = lcs(i-1, j);
      const option2 = lcs(i, j-1);
      result = Math.max(option1, option2);
      console.log("    LCS(" + i + ", " + j + ") = max(LCS(" + (i-1) + ", " + j + "), LCS(" + i + ", " + (j-1) + ")) = " + result);
    }
    
    memo[key] = result;
    console.log("    Stored in memo: LCS(" + i + ", " + j + ") = " + result);
    
    return result;
  }
  
  const result = lcs(s1.length, s2.length);
  console.log("Final result: LCS length = " + result);
  console.log("Memo table:", memo);
  
  return result;
}

// Test cases
console.log("=== Testing LCS Memoization ===");
lcsMemo("ABCDGH", "AEDFHR");
lcsMemo("AGGTAB", "GXTXAYB");`,
          Java: `import java.util.*;

public class LCSMemo {
    // LCS with Memoization
    public static int lcsMemo(String s1, String s2) {
        System.out.println("=== LCS with Memoization ===");
        System.out.println("String 1: " + s1);
        System.out.println("String 2: " + s2);
        
        Map<String, Integer> memo = new HashMap<>();
        
        int result = lcs(s1, s2, s1.length(), s2.length(), memo);
        System.out.println("Final result: LCS length = " + result);
        System.out.println("Memo table: " + memo);
        
        return result;
    }
    
    private static int lcs(String s1, String s2, int i, int j, Map<String, Integer> memo) {
        System.out.println("  Computing LCS(" + i + ", " + j + ")");
        
        // Base case: empty strings
        if (i == 0 || j == 0) {
            System.out.println("    Base case: LCS(" + i + ", " + j + ") = 0");
            return 0;
        }
        
        // Check memo
        String key = i + "," + j;
        if (memo.containsKey(key)) {
            System.out.println("    Found in memo: LCS(" + i + ", " + j + ") = " + memo.get(key));
            return memo.get(key);
        }
        
        int result;
        
        // If characters match
        if (s1.charAt(i-1) == s2.charAt(j-1)) {
            System.out.println("    Characters match: '" + s1.charAt(i-1) + "' == '" + s2.charAt(j-1) + "'");
            result = 1 + lcs(s1, s2, i-1, j-1, memo);
            System.out.println("    LCS(" + i + ", " + j + ") = 1 + LCS(" + (i-1) + ", " + (j-1) + ") = " + result);
        } else {
            System.out.println("    Characters don't match: '" + s1.charAt(i-1) + "' != '" + s2.charAt(j-1) + "'");
            int option1 = lcs(s1, s2, i-1, j, memo);
            int option2 = lcs(s1, s2, i, j-1, memo);
            result = Math.max(option1, option2);
            System.out.println("    LCS(" + i + ", " + j + ") = max(LCS(" + (i-1) + ", " + j + "), LCS(" + i + ", " + (j-1) + ")) = " + result);
        }
        
        memo.put(key, result);
        System.out.println("    Stored in memo: LCS(" + i + ", " + j + ") = " + result);
        
        return result;
    }
    
    public static void main(String[] args) {
        System.out.println("=== Testing LCS Memoization ===");
        lcsMemo("ABCDGH", "AEDFHR");
        lcsMemo("AGGTAB", "GXTXAYB");
    }
}`,
        }}
        explanation="Memoization stores LCS results for each (i,j) pair to avoid recalculating the same subproblems. Time: O(m×n), Space: O(m×n)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Find length of longest common subsequence (LCS) between two strings. Subsequence: characters in order but not necessarily contiguous.",
              details: [
                "LCS of 'ABCD' and 'ACBD' is 'ABD' or 'ACD' (length 3)",
                "Need to find maximum length, not the actual sequence",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "DP with two strings: compare characters at positions i and j. If match, add 1 to LCS of prefixes. If no match, take max of two options.",
              keywords: [
                "2D DP",
                "memoization",
                "string comparison",
                "subsequence",
              ],
              details: [
                "State: LCS length for s1[0..i] and s2[0..j]",
                "Overlapping subproblems: same (i,j) pairs computed multiple times",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "2D memo table: memo[i][j] stores LCS length for s1[0..i] and s2[0..j].",
              details: [
                "Use hash map with key '(i,j)' or 2D array",
                "Initialize with base cases",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Base: if i<0 or j<0, return 0. Check memo for (i,j). If s1[i]==s2[j], result = 1 + LCS(i-1,j-1). Else result = max(LCS(i-1,j), LCS(i,j-1)). Store and return.",
              details: [
                "Match case: extend LCS by 1",
                "No match: try both skipping s1[i] and skipping s2[j]",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Time O(m×n) - each (i,j) computed once. Space O(m×n) for memo. Can optimize space to O(min(m,n)) using rolling array.",
              details: [
                "Memoization avoids exponential time of naive recursion",
                "Tabulation can be more space-efficient",
              ],
            },
          ],
          pattern: "2D DP with Memoization",
          complexity: {
            time: "O(m×n)",
            space: "O(m×n)",
          },
        }}
      />

      <ProblemBlock
        title="Coin Change (Naive Recursive Solution)"
        difficulty="Medium"
        description="Find the minimum number of coins needed to make a given amount using naive recursion."
        solutions={{
          JavaScript: `// Coin Change - Naive Recursive Solution

function coinChangeNaive(coins, amount) {
  console.log("=== Coin Change - Naive Recursive ===");
  console.log("Coins:", coins);
  console.log("Amount:", amount);
  
  function minCoins(remainingAmount) {
    console.log("  minCoins(" + remainingAmount + ")");
    
    // Base case: amount is 0
    if (remainingAmount === 0) {
      console.log("    Base case: amount is 0, return 0");
      return 0;
    }
    
    // Base case: amount is negative
    if (remainingAmount < 0) {
      console.log("    Base case: amount is negative, return Infinity");
      return Infinity;
    }
    
    let minCount = Infinity;
    
    // Try each coin
    for (let i = 0; i < coins.length; i++) {
      console.log("    Trying coin " + coins[i]);
      
      if (coins[i] <= remainingAmount) {
        const result = 1 + minCoins(remainingAmount - coins[i]);
        console.log("    Using coin " + coins[i] + ", remaining: " + (remainingAmount - coins[i]) + ", coins needed: " + result);
        minCount = Math.min(minCount, result);
      } else {
        console.log("    Coin " + coins[i] + " is too large, skip");
      }
    }
    
    console.log("    Minimum coins for amount " + remainingAmount + ": " + minCount);
    return minCount;
  }
  
  const result = minCoins(amount);
  console.log("\\nResult: Minimum coins needed = " + (result === Infinity ? "Impossible" : result));
  return result === Infinity ? -1 : result;
}

// Test cases
console.log("=== Testing Coin Change Naive ===");
coinChangeNaive([1, 3, 4], 6);
coinChangeNaive([2, 5, 10], 3);`,
          Java: `import java.util.*;

public class CoinChangeNaive {
    // Coin Change - Naive Recursive Solution
    public static int coinChangeNaive(int[] coins, int amount) {
        System.out.println("=== Coin Change - Naive Recursive ===");
        System.out.println("Coins: " + Arrays.toString(coins));
        System.out.println("Amount: " + amount);
        
        int result = minCoins(coins, amount);
        System.out.println("\\nResult: Minimum coins needed = " + (result == Integer.MAX_VALUE ? "Impossible" : result));
        return result == Integer.MAX_VALUE ? -1 : result;
    }
    
    private static int minCoins(int[] coins, int remainingAmount) {
        System.out.println("  minCoins(" + remainingAmount + ")");
        
        // Base case: amount is 0
        if (remainingAmount == 0) {
            System.out.println("    Base case: amount is 0, return 0");
            return 0;
        }
        
        // Base case: amount is negative
        if (remainingAmount < 0) {
            System.out.println("    Base case: amount is negative, return Infinity");
            return Integer.MAX_VALUE;
        }
        
        int minCount = Integer.MAX_VALUE;
        
        // Try each coin
        for (int i = 0; i < coins.length; i++) {
            System.out.println("    Trying coin " + coins[i]);
            
            if (coins[i] <= remainingAmount) {
                int result = minCoins(coins, remainingAmount - coins[i]);
                if (result != Integer.MAX_VALUE) {
                    result = 1 + result;
                    System.out.println("    Using coin " + coins[i] + ", remaining: " + (remainingAmount - coins[i]) + ", coins needed: " + result);
                    minCount = Math.min(minCount, result);
                }
            } else {
                System.out.println("    Coin " + coins[i] + " is too large, skip");
            }
        }
        
        System.out.println("    Minimum coins for amount " + remainingAmount + ": " + 
                         (minCount == Integer.MAX_VALUE ? "Impossible" : minCount));
        return minCount;
    }
    
    public static void main(String[] args) {
        System.out.println("=== Testing Coin Change Naive ===");
        coinChangeNaive(new int[]{1, 3, 4}, 6);
        coinChangeNaive(new int[]{2, 5, 10}, 3);
    }
}`,
        }}
        explanation="Naive recursive solution tries all possible combinations of coins. For each coin, recursively find minimum coins for remaining amount. Time: O(amount^coins), Space: O(amount)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Find minimum number of coins to make exact amount. Can use unlimited coins of each denomination.",
              details: [
                "Example: coins=[1,3,4], amount=6 → answer=2 (3+3)",
                "Return -1 if impossible",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "For each amount, try all coins and recursively solve for remaining amount. Take minimum.",
              keywords: [
                "unbounded knapsack",
                "recursion",
                "minimization",
                "exponential time",
              ],
              details: [
                "State: minCoins(amount) = minimum coins for amount",
                "Recurrence: minCoins(amount) = 1 + min(minCoins(amount-coin)) for all valid coins",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Recursion with base cases; no extra structure needed for naive version.",
              details: [
                "Base case: amount=0 → return 0, amount<0 → return Infinity",
                "Try each coin and recurse",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "If amount==0, return 0. If amount<0, return Infinity. For each coin: if coin<=amount, try 1+minCoins(amount-coin). Return minimum of all tries.",
              details: [
                "Exponential time: each amount branches into multiple subproblems",
                "Same subproblems computed multiple times",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Time O(amount^coins) exponential. Space O(amount) for recursion stack. Needs memoization/DP to optimize.",
              details: [
                "This naive version demonstrates the problem structure",
                "DP solution reduces to O(amount×coins) time",
              ],
            },
          ],
          pattern: "Unbounded Knapsack (Naive Recursion)",
          complexity: {
            time: "O(amount^coins)",
            space: "O(amount)",
          },
        }}
      />

      <ProblemBlock
        title="Coin Change (DP Solution)"
        difficulty="Medium"
        description="Optimized coin change solution using dynamic programming with memoization."
        solutions={{
          JavaScript: `// Coin Change - DP Solution

function coinChangeDP(coins, amount) {
  console.log("=== Coin Change - DP Solution ===");
  console.log("Coins:", coins);
  console.log("Amount:", amount);
  
  const memo = {};
  
  function minCoins(remainingAmount) {
    console.log("  minCoins(" + remainingAmount + ")");
    
    // Base case: amount is 0
    if (remainingAmount === 0) {
      console.log("    Base case: amount is 0, return 0");
      return 0;
    }
    
    // Base case: amount is negative
    if (remainingAmount < 0) {
      console.log("    Base case: amount is negative, return Infinity");
      return Infinity;
    }
    
    // Check memo
    if (memo[remainingAmount] !== undefined) {
      console.log("    Found in memo: minCoins(" + remainingAmount + ") = " + memo[remainingAmount]);
      return memo[remainingAmount];
    }
    
    let minCount = Infinity;
    
    // Try each coin
    for (let i = 0; i < coins.length; i++) {
      console.log("    Trying coin " + coins[i]);
      
      if (coins[i] <= remainingAmount) {
        const result = 1 + minCoins(remainingAmount - coins[i]);
        console.log("    Using coin " + coins[i] + ", remaining: " + (remainingAmount - coins[i]) + ", coins needed: " + result);
        minCount = Math.min(minCount, result);
      } else {
        console.log("    Coin " + coins[i] + " is too large, skip");
      }
    }
    
    memo[remainingAmount] = minCount;
    console.log("    Stored in memo: minCoins(" + remainingAmount + ") = " + minCount);
    
    return minCount;
  }
  
  const result = minCoins(amount);
  console.log("\\nResult: Minimum coins needed = " + (result === Infinity ? "Impossible" : result));
  console.log("Memo table:", memo);
  return result === Infinity ? -1 : result;
}

// Tabulation version
function coinChangeTab(coins, amount) {
  console.log("\\n=== Coin Change - Tabulation ===");
  console.log("Coins:", coins);
  console.log("Amount:", amount);
  
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  
  console.log("\\nStep 1: Initialize DP array");
  console.log("  dp[0] = 0 (0 coins for amount 0)");
  
  for (let i = 1; i <= amount; i++) {
    console.log("\\n  Computing dp[" + i + "]:");
    
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= i) {
        const result = 1 + dp[i - coins[j]];
        console.log("    Coin " + coins[j] + ": 1 + dp[" + (i - coins[j]) + "] = 1 + " + dp[i - coins[j]] + " = " + result);
        dp[i] = Math.min(dp[i], result);
      }
    }
    
    console.log("  Final dp[" + i + "] = " + dp[i]);
  }
  
  console.log("\\nFinal DP array:", dp);
  console.log("Result: Minimum coins needed = " + (dp[amount] === Infinity ? "Impossible" : dp[amount]));
  
  return dp[amount] === Infinity ? -1 : dp[amount];
}

// Test cases
console.log("=== Testing Coin Change DP ===");
coinChangeDP([1, 3, 4], 6);
coinChangeTab([2, 5, 10], 3);`,
          Java: `import java.util.*;

public class CoinChangeDP {
    // Coin Change - DP Solution
    public static int coinChangeDP(int[] coins, int amount) {
        System.out.println("=== Coin Change - DP Solution ===");
        System.out.println("Coins: " + Arrays.toString(coins));
        System.out.println("Amount: " + amount);
        
        Map<Integer, Integer> memo = new HashMap<>();
        int result = minCoins(coins, amount, memo);
        System.out.println("\\nResult: Minimum coins needed = " + (result == Integer.MAX_VALUE ? "Impossible" : result));
        System.out.println("Memo table: " + memo);
        return result == Integer.MAX_VALUE ? -1 : result;
    }
    
    private static int minCoins(int[] coins, int remainingAmount, Map<Integer, Integer> memo) {
        System.out.println("  minCoins(" + remainingAmount + ")");
        
        // Base case: amount is 0
        if (remainingAmount == 0) {
            System.out.println("    Base case: amount is 0, return 0");
            return 0;
        }
        
        // Base case: amount is negative
        if (remainingAmount < 0) {
            System.out.println("    Base case: amount is negative, return Infinity");
            return Integer.MAX_VALUE;
        }
        
        // Check memo
        if (memo.containsKey(remainingAmount)) {
            System.out.println("    Found in memo: minCoins(" + remainingAmount + ") = " + memo.get(remainingAmount));
            return memo.get(remainingAmount);
        }
        
        int minCount = Integer.MAX_VALUE;
        
        // Try each coin
        for (int i = 0; i < coins.length; i++) {
            System.out.println("    Trying coin " + coins[i]);
            
            if (coins[i] <= remainingAmount) {
                int result = minCoins(coins, remainingAmount - coins[i], memo);
                if (result != Integer.MAX_VALUE) {
                    result = 1 + result;
                    System.out.println("    Using coin " + coins[i] + ", remaining: " + (remainingAmount - coins[i]) + ", coins needed: " + result);
                    minCount = Math.min(minCount, result);
                }
            } else {
                System.out.println("    Coin " + coins[i] + " is too large, skip");
            }
        }
        
        memo.put(remainingAmount, minCount);
        System.out.println("    Stored in memo: minCoins(" + remainingAmount + ") = " + minCount);
        
        return minCount;
    }
    
    // Tabulation version
    public static int coinChangeTab(int[] coins, int amount) {
        System.out.println("\\n=== Coin Change - Tabulation ===");
        System.out.println("Coins: " + Arrays.toString(coins));
        System.out.println("Amount: " + amount);
        
        int[] dp = new int[amount + 1];
        Arrays.fill(dp, Integer.MAX_VALUE);
        dp[0] = 0;
        
        System.out.println("\\nStep 1: Initialize DP array");
        System.out.println("  dp[0] = 0 (0 coins for amount 0)");
        
        for (int i = 1; i <= amount; i++) {
            System.out.println("\\n  Computing dp[" + i + "]:");
            
            for (int j = 0; j < coins.length; j++) {
                if (coins[j] <= i && dp[i - coins[j]] != Integer.MAX_VALUE) {
                    int result = 1 + dp[i - coins[j]];
                    System.out.println("    Coin " + coins[j] + ": 1 + dp[" + (i - coins[j]) + "] = 1 + " + dp[i - coins[j]] + " = " + result);
                    dp[i] = Math.min(dp[i], result);
                }
            }
            
            System.out.println("  Final dp[" + i + "] = " + (dp[i] == Integer.MAX_VALUE ? "Impossible" : dp[i]));
        }
        
        System.out.println("\\nFinal DP array: " + Arrays.toString(dp));
        System.out.println("Result: Minimum coins needed = " + (dp[amount] == Integer.MAX_VALUE ? "Impossible" : dp[amount]));
        
        return dp[amount] == Integer.MAX_VALUE ? -1 : dp[amount];
    }
    
    public static void main(String[] args) {
        System.out.println("=== Testing Coin Change DP ===");
        coinChangeDP(new int[]{1, 3, 4}, 6);
        coinChangeTab(new int[]{2, 5, 10}, 3);
    }
}`,
        }}
        explanation="DP solution uses memoization to store results of subproblems. Tabulation version builds solution bottom-up. Time: O(amount×coins), Space: O(amount)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Same coin change problem: find minimum coins for amount. Optimize naive recursion with DP.",
              details: [
                "Memoization: cache results for each amount",
                "Tabulation: build solution bottom-up from 0 to amount",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Unbounded knapsack pattern: dp[i] = minimum coins for amount i. For each amount, try all coins.",
              keywords: [
                "unbounded knapsack",
                "DP",
                "memoization",
                "tabulation",
              ],
              details: [
                "State: dp[amount] = minimum coins needed",
                "Recurrence: dp[i] = min(1 + dp[i-coin]) for all valid coins",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "1D array: dp[i] stores minimum coins for amount i. Initialize dp[0]=0, others=Infinity.",
              details: [
                "Memoization: hash map with amount as key",
                "Tabulation: array of size (amount+1)",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Memoization: if memo[amount] exists, return it. For each coin: if coin<=amount, try 1+minCoins(amount-coin). Store minimum. Tabulation: for i from 1 to amount, for each coin, if coin<=i, dp[i]=min(dp[i], 1+dp[i-coin]).",
              details: [
                "Memoization: top-down recursive with caching",
                "Tabulation: bottom-up iterative",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Time O(amount×coins) - each amount computed once, each coin tried. Space O(amount) for DP array.",
              details: [
                "DP reduces time from exponential to polynomial",
                "Both memoization and tabulation have same complexity",
              ],
            },
          ],
          pattern: "Unbounded Knapsack (DP)",
          complexity: {
            time: "O(amount×coins)",
            space: "O(amount)",
          },
        }}
      />
    </div>
  );
}

function TabulationSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-white mb-6">
        Dynamic Programming Tabulation
      </h2>

      <ProblemBlock
        title="Fibonacci with Tabulation"
        difficulty="Easy"
        description="Calculate Fibonacci numbers using tabulation (bottom-up approach)."
        solutions={{
          JavaScript: `// Fibonacci with Tabulation

function fibonacciTab(n) {
  console.log("=== Fibonacci with Tabulation ===");
  console.log("Calculating Fibonacci(" + n + ")");
  
  if (n <= 1) {
    console.log("Base case: n <= 1, returning " + n);
    return n;
  }
  
  // Create DP table
  const dp = new Array(n + 1);
  dp[0] = 0;
  dp[1] = 1;
  
  console.log("Initializing DP table:");
  console.log("  dp[0] = " + dp[0]);
  console.log("  dp[1] = " + dp[1]);
  
  // Fill the table bottom-up
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i-1] + dp[i-2];
    console.log("  dp[" + i + "] = dp[" + (i-1) + "] + dp[" + (i-2) + "] = " + dp[i-1] + " + " + dp[i-2] + " = " + dp[i]);
  }
  
  console.log("Final DP table:", dp);
  console.log("Result: Fibonacci(" + n + ") = " + dp[n]);
  
  return dp[n];
}

// Space-optimized version
function fibonacciTabOptimized(n) {
  console.log("\\n=== Fibonacci with Tabulation (Space Optimized) ===");
  console.log("Calculating Fibonacci(" + n + ")");
  
  if (n <= 1) {
    console.log("Base case: n <= 1, returning " + n);
    return n;
  }
  
  let prev2 = 0; // dp[i-2]
  let prev1 = 1; // dp[i-1]
  
  console.log("Initial values:");
  console.log("  prev2 = " + prev2);
  console.log("  prev1 = " + prev1);
  
  for (let i = 2; i <= n; i++) {
    const current = prev1 + prev2;
    console.log("  i = " + i + ": current = prev1 + prev2 = " + prev1 + " + " + prev2 + " = " + current);
    
    // Update for next iteration
    prev2 = prev1;
    prev1 = current;
    
    console.log("    Updated: prev2 = " + prev2 + ", prev1 = " + prev1);
  }
  
  console.log("Result: Fibonacci(" + n + ") = " + prev1);
  return prev1;
}

// Test cases
console.log("=== Testing Fibonacci Tabulation ===");
fibonacciTab(10);
fibonacciTabOptimized(10);`,
          Java: `import java.util.*;

public class FibonacciTab {
    // Fibonacci with Tabulation
    public static long fibonacciTab(int n) {
        System.out.println("=== Fibonacci with Tabulation ===");
        System.out.println("Calculating Fibonacci(" + n + ")");
        
        if (n <= 1) {
            System.out.println("Base case: n <= 1, returning " + n);
            return n;
        }
        
        // Create DP table
        long[] dp = new long[n + 1];
        dp[0] = 0;
        dp[1] = 1;
        
        System.out.println("Initializing DP table:");
        System.out.println("  dp[0] = " + dp[0]);
        System.out.println("  dp[1] = " + dp[1]);
        
        // Fill the table bottom-up
        for (int i = 2; i <= n; i++) {
            dp[i] = dp[i-1] + dp[i-2];
            System.out.println("  dp[" + i + "] = dp[" + (i-1) + "] + dp[" + (i-2) + "] = " + dp[i-1] + " + " + dp[i-2] + " = " + dp[i]);
        }
        
        System.out.println("Final DP table: " + Arrays.toString(dp));
        System.out.println("Result: Fibonacci(" + n + ") = " + dp[n]);
        
        return dp[n];
    }
    
    // Space-optimized version
    public static long fibonacciTabOptimized(int n) {
        System.out.println("\\n=== Fibonacci with Tabulation (Space Optimized) ===");
        System.out.println("Calculating Fibonacci(" + n + ")");
        
        if (n <= 1) {
            System.out.println("Base case: n <= 1, returning " + n);
            return n;
        }
        
        long prev2 = 0; // dp[i-2]
        long prev1 = 1; // dp[i-1]
        
        System.out.println("Initial values:");
        System.out.println("  prev2 = " + prev2);
        System.out.println("  prev1 = " + prev1);
        
        for (int i = 2; i <= n; i++) {
            long current = prev1 + prev2;
            System.out.println("  i = " + i + ": current = prev1 + prev2 = " + prev1 + " + " + prev2 + " = " + current);
            
            // Update for next iteration
            prev2 = prev1;
            prev1 = current;
            
            System.out.println("    Updated: prev2 = " + prev2 + ", prev1 = " + prev1);
        }
        
        System.out.println("Result: Fibonacci(" + n + ") = " + prev1);
        return prev1;
    }
    
    public static void main(String[] args) {
        System.out.println("=== Testing Fibonacci Tabulation ===");
        fibonacciTab(10);
        fibonacciTabOptimized(10);
    }
}`,
        }}
        explanation="Tabulation fills the DP table bottom-up, solving smaller subproblems first. Time: O(n), Space: O(n) or O(1) with optimization."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Calculate Fibonacci using tabulation (bottom-up DP). Build solution from base cases up to n.",
              details: [
                "Start with F(0)=0, F(1)=1",
                "Compute F(2), F(3), ..., F(n) iteratively",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Bottom-up approach: solve smaller subproblems first, use their results for larger ones.",
              keywords: [
                "tabulation",
                "bottom-up DP",
                "iterative",
                "space optimization",
              ],
              details: [
                "No recursion overhead",
                "Can optimize space to O(1) using only two variables",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "1D array dp[i] = F(i). Can optimize to two variables (prev, curr).",
              details: [
                "Standard: array of size (n+1)",
                "Optimized: only need last two values",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Initialize dp[0]=0, dp[1]=1. For i from 2 to n: dp[i]=dp[i-1]+dp[i-2]. Return dp[n]. Optimized: use two variables, update in each iteration.",
              details: [
                "Iterative approach, no recursion",
                "Space-optimized version uses O(1) space",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Time O(n) - single pass. Space O(n) for array, O(1) with optimization. Better than memoization for space.",
              details: [
                "Tabulation avoids recursion stack overhead",
                "Space optimization reduces to constant space",
              ],
            },
          ],
          pattern: "Tabulation (Bottom-Up DP)",
          complexity: {
            time: "O(n)",
            space: "O(n) or O(1) optimized",
          },
        }}
      />

      <ProblemBlock
        title="Longest Common Subsequence with Tabulation"
        difficulty="Medium"
        description="Find the length of the longest common subsequence between two strings using tabulation."
        solutions={{
          JavaScript: `// LCS with Tabulation

function lcsTab(s1, s2) {
  console.log("=== LCS with Tabulation ===");
  console.log("String 1:", s1);
  console.log("String 2:", s2);
  
  const m = s1.length;
  const n = s2.length;
  
  // Create DP table
  const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));
  
  console.log("Initializing DP table with zeros:");
  console.log("  dp[" + m + "][" + n + "] = 0");
  
  // Fill the table
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      console.log("\\nComputing dp[" + i + "][" + j + "]:");
      console.log("  Comparing s1[" + (i-1) + "] = '" + s1[i-1] + "' with s2[" + (j-1) + "] = '" + s2[j-1] + "'");
      
      if (s1[i-1] === s2[j-1]) {
        dp[i][j] = 1 + dp[i-1][j-1];
        console.log("  Characters match: dp[" + i + "][" + j + "] = 1 + dp[" + (i-1) + "][" + (j-1) + "] = 1 + " + dp[i-1][j-1] + " = " + dp[i][j]);
      } else {
        dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
        console.log("  Characters don't match: dp[" + i + "][" + j + "] = max(dp[" + (i-1) + "][" + j + "], dp[" + i + "][" + (j-1) + "]) = max(" + dp[i-1][j] + ", " + dp[i][j-1] + ") = " + dp[i][j]);
      }
    }
  }
  
  console.log("\\nFinal DP table:");
  for (let i = 0; i <= m; i++) {
    console.log("  " + dp[i].join(" "));
  }
  
  console.log("\\nResult: LCS length = " + dp[m][n]);
  return dp[m][n];
}

// Test cases
console.log("=== Testing LCS Tabulation ===");
lcsTab("ABCDGH", "AEDFHR");
lcsTab("AGGTAB", "GXTXAYB");`,
          Java: `import java.util.*;

public class LCSTab {
    // LCS with Tabulation
    public static int lcsTab(String s1, String s2) {
        System.out.println("=== LCS with Tabulation ===");
        System.out.println("String 1: " + s1);
        System.out.println("String 2: " + s2);
        
        int m = s1.length();
        int n = s2.length();
        
        // Create DP table
        int[][] dp = new int[m + 1][n + 1];
        
        System.out.println("Initializing DP table with zeros:");
        System.out.println("  dp[" + m + "][" + n + "] = 0");
        
        // Fill the table
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                System.out.println("\\nComputing dp[" + i + "][" + j + "]:");
                System.out.println("  Comparing s1[" + (i-1) + "] = '" + s1.charAt(i-1) + "' with s2[" + (j-1) + "] = '" + s2.charAt(j-1) + "'");
                
                if (s1.charAt(i-1) == s2.charAt(j-1)) {
                    dp[i][j] = 1 + dp[i-1][j-1];
                    System.out.println("  Characters match: dp[" + i + "][" + j + "] = 1 + dp[" + (i-1) + "][" + (j-1) + "] = 1 + " + dp[i-1][j-1] + " = " + dp[i][j]);
                } else {
                    dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
                    System.out.println("  Characters don't match: dp[" + i + "][" + j + "] = max(dp[" + (i-1) + "][" + j + "], dp[" + i + "][" + (j-1) + "]) = max(" + dp[i-1][j] + ", " + dp[i][j-1] + ") = " + dp[i][j]);
                }
            }
        }
        
        System.out.println("\\nFinal DP table:");
        for (int i = 0; i <= m; i++) {
            System.out.println("  " + Arrays.toString(dp[i]));
        }
        
        System.out.println("\\nResult: LCS length = " + dp[m][n]);
        return dp[m][n];
    }
    
    public static void main(String[] args) {
        System.out.println("=== Testing LCS Tabulation ===");
        lcsTab("ABCDGH", "AEDFHR");
        lcsTab("AGGTAB", "GXTXAYB");
    }
}`,
        }}
        explanation="Tabulation builds the DP table bottom-up, filling each cell based on previously computed values. Time: O(m×n), Space: O(m×n)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Same LCS problem: find length using tabulation (bottom-up) instead of memoization.",
              details: [
                "Build 2D table from (0,0) to (m,n)",
                "Fill table iteratively, no recursion",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "2D DP table: dp[i][j] = LCS length for s1[0..i-1] and s2[0..j-1]. Fill row by row or column by column.",
              keywords: [
                "2D tabulation",
                "bottom-up DP",
                "iterative",
                "string DP",
              ],
              details: [
                "State transition: same as memoization but computed iteratively",
                "Fill table from smaller to larger subproblems",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "2D array dp[m+1][n+1]. Initialize first row and column to 0 (empty string LCS).",
              details: [
                "dp[i][0] = 0, dp[0][j] = 0 for all i, j",
                "Can optimize space to O(min(m,n)) using rolling array",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "For i from 1 to m, for j from 1 to n: if s1[i-1]==s2[j-1], dp[i][j]=1+dp[i-1][j-1]. Else dp[i][j]=max(dp[i-1][j], dp[i][j-1]). Return dp[m][n].",
              details: [
                "Match: extend diagonal value",
                "No match: take max of top and left",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Time O(m×n) - fill all cells. Space O(m×n) for table. Can optimize to O(min(m,n)) using two rows.",
              details: [
                "Tabulation avoids recursion stack",
                "Space optimization possible with rolling array technique",
              ],
            },
          ],
          pattern: "2D Tabulation (Bottom-Up DP)",
          complexity: {
            time: "O(m×n)",
            space: "O(m×n)",
          },
        }}
      />

      <ProblemBlock
        title="Maximum Cuts"
        difficulty="Medium"
        description="Find the maximum number of cuts that can be made on a rod of length n using cuts of lengths a, b, and c."
        solutions={{
          JavaScript: `// Maximum Cuts

function maximumCuts(n, a, b, c) {
  console.log("=== Maximum Cuts ===");
  console.log("Rod length:", n);
  console.log("Cut lengths:", a, b, c);
  
  // Create DP array: dp[i] = maximum cuts for rod of length i
  const dp = new Array(n + 1).fill(-1);
  dp[0] = 0; // 0 cuts for rod of length 0
  
  console.log("\\nStep 1: Initialize DP array");
  console.log("  dp[0] = 0 (0 cuts for length 0)");
  
  for (let i = 1; i <= n; i++) {
    console.log("\\n  Computing dp[" + i + "]:");
    
    let maxCuts = -1;
    
    // Try each cut length
    if (a <= i && dp[i - a] !== -1) {
      const cuts = 1 + dp[i - a];
      console.log("    Cut " + a + ": 1 + dp[" + (i - a) + "] = 1 + " + dp[i - a] + " = " + cuts);
      maxCuts = Math.max(maxCuts, cuts);
    }
    
    if (b <= i && dp[i - b] !== -1) {
      const cuts = 1 + dp[i - b];
      console.log("    Cut " + b + ": 1 + dp[" + (i - b) + "] = 1 + " + dp[i - b] + " = " + cuts);
      maxCuts = Math.max(maxCuts, cuts);
    }
    
    if (c <= i && dp[i - c] !== -1) {
      const cuts = 1 + dp[i - c];
      console.log("    Cut " + c + ": 1 + dp[" + (i - c) + "] = 1 + " + dp[i - c] + " = " + cuts);
      maxCuts = Math.max(maxCuts, cuts);
    }
    
    dp[i] = maxCuts;
    console.log("  Final dp[" + i + "] = " + dp[i]);
  }
  
  console.log("\\nFinal DP array:", dp);
  console.log("Result: Maximum cuts = " + dp[n]);
  
  return dp[n];
}

// Test cases
console.log("=== Testing Maximum Cuts ===");
maximumCuts(5, 1, 2, 3);
maximumCuts(7, 2, 3, 5);`,
          Java: `import java.util.*;

public class MaximumCuts {
    // Maximum Cuts
    public static int maximumCuts(int n, int a, int b, int c) {
        System.out.println("=== Maximum Cuts ===");
        System.out.println("Rod length: " + n);
        System.out.println("Cut lengths: " + a + ", " + b + ", " + c);
        
        // Create DP array: dp[i] = maximum cuts for rod of length i
        int[] dp = new int[n + 1];
        Arrays.fill(dp, -1);
        dp[0] = 0; // 0 cuts for rod of length 0
        
        System.out.println("\\nStep 1: Initialize DP array");
        System.out.println("  dp[0] = 0 (0 cuts for length 0)");
        
        for (int i = 1; i <= n; i++) {
            System.out.println("\\n  Computing dp[" + i + "]:");
            
            int maxCuts = -1;
            
            // Try each cut length
            if (a <= i && dp[i - a] != -1) {
                int cuts = 1 + dp[i - a];
                System.out.println("    Cut " + a + ": 1 + dp[" + (i - a) + "] = 1 + " + dp[i - a] + " = " + cuts);
                maxCuts = Math.max(maxCuts, cuts);
            }
            
            if (b <= i && dp[i - b] != -1) {
                int cuts = 1 + dp[i - b];
                System.out.println("    Cut " + b + ": 1 + dp[" + (i - b) + "] = 1 + " + dp[i - b] + " = " + cuts);
                maxCuts = Math.max(maxCuts, cuts);
            }
            
            if (c <= i && dp[i - c] != -1) {
                int cuts = 1 + dp[i - c];
                System.out.println("    Cut " + c + ": 1 + dp[" + (i - c) + "] = 1 + " + dp[i - c] + " = " + cuts);
                maxCuts = Math.max(maxCuts, cuts);
            }
            
            dp[i] = maxCuts;
            System.out.println("  Final dp[" + i + "] = " + dp[i]);
        }
        
        System.out.println("\\nFinal DP array: " + Arrays.toString(dp));
        System.out.println("Result: Maximum cuts = " + dp[n]);
        
        return dp[n];
    }
    
    public static void main(String[] args) {
        System.out.println("=== Testing Maximum Cuts ===");
        maximumCuts(5, 1, 2, 3);
        maximumCuts(7, 2, 3, 5);
    }
}`,
        }}
        explanation="DP solution: for each rod length, try all possible cuts and take maximum. dp[i] = 1 + max(dp[i-a], dp[i-b], dp[i-c]) if cuts are possible. Time: O(n), Space: O(n)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Find maximum number of cuts on rod of length n using cuts of lengths a, b, c. Can use each cut multiple times.",
              details: [
                "Example: n=5, a=1, b=2, c=3 → answer=5 (1+1+1+1+1)",
                "Return -1 if impossible",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Unbounded knapsack variant: maximize cuts. For each length, try all three cuts and take maximum.",
              keywords: [
                "unbounded knapsack",
                "maximization",
                "DP",
                "rod cutting",
              ],
              details: [
                "State: dp[i] = maximum cuts for rod length i",
                "Recurrence: dp[i] = 1 + max(dp[i-a], dp[i-b], dp[i-c]) if valid",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "1D array dp[i] stores maximum cuts for length i. Initialize dp[0]=0, others=-1 (impossible).",
              details: [
                "Use -1 to mark impossible lengths",
                "Update only if cut is valid (length >= cut size)",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "For i from 1 to n: try cuts a, b, c. If i>=cut and dp[i-cut]!=-1, candidate = 1+dp[i-cut]. Take maximum of valid candidates. Store in dp[i].",
              details: [
                "Base case: dp[0]=0 (0 cuts for length 0)",
                "Only consider cuts that are valid (i >= cut size)",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Time O(n) - each length computed once, 3 cuts tried. Space O(n) for DP array.",
              details: [
                "DP avoids exponential time of naive recursion",
                "Can optimize by sorting cuts and early termination",
              ],
            },
          ],
          pattern: "Unbounded Knapsack (Maximization)",
          complexity: {
            time: "O(n)",
            space: "O(n)",
          },
        }}
      />

      <ProblemBlock
        title="Minimum coins to make a value"
        difficulty="Medium"
        description="Find the minimum number of coins needed to make a given value using coins of given denominations."
        solutions={{
          JavaScript: `// Minimum coins to make a value

function minCoinsToMakeValue(coins, value) {
  console.log("=== Minimum coins to make a value ===");
  console.log("Coins:", coins);
  console.log("Value:", value);
  
  // Create DP array: dp[i] = minimum coins for value i
  const dp = new Array(value + 1).fill(Infinity);
  dp[0] = 0; // 0 coins for value 0
  
  console.log("\\nStep 1: Initialize DP array");
  console.log("  dp[0] = 0 (0 coins for value 0)");
  
  for (let i = 1; i <= value; i++) {
    console.log("\\n  Computing dp[" + i + "]:");
    
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= i) {
        const result = 1 + dp[i - coins[j]];
        console.log("    Coin " + coins[j] + ": 1 + dp[" + (i - coins[j]) + "] = 1 + " + dp[i - coins[j]] + " = " + result);
        dp[i] = Math.min(dp[i], result);
      }
    }
    
    console.log("  Final dp[" + i + "] = " + dp[i]);
  }
  
  console.log("\\nFinal DP array:", dp);
  console.log("Result: Minimum coins = " + (dp[value] === Infinity ? "Impossible" : dp[value]));
  
  return dp[value] === Infinity ? -1 : dp[value];
}

// Alternative: Count ways to make value
function countWaysToMakeValue(coins, value) {
  console.log("\\n=== Count ways to make value ===");
  console.log("Coins:", coins);
  console.log("Value:", value);
  
  // Create DP array: dp[i] = number of ways for value i
  const dp = new Array(value + 1).fill(0);
  dp[0] = 1; // 1 way for value 0 (use no coins)
  
  console.log("\\nStep 1: Initialize DP array");
  console.log("  dp[0] = 1 (1 way for value 0)");
  
  for (let i = 0; i < coins.length; i++) {
    console.log("\\n  Processing coin " + coins[i] + ":");
    
    for (let j = coins[i]; j <= value; j++) {
      dp[j] += dp[j - coins[i]];
      console.log("    dp[" + j + "] += dp[" + (j - coins[i]) + "] = " + dp[j]);
    }
  }
  
  console.log("\\nFinal DP array:", dp);
  console.log("Result: Number of ways = " + dp[value]);
  
  return dp[value];
}

// Test cases
console.log("=== Testing Minimum coins to make value ===");
minCoinsToMakeValue([1, 3, 4], 6);
countWaysToMakeValue([1, 2, 3], 4);`,
          Java: `import java.util.*;

public class MinCoinsToMakeValue {
    // Minimum coins to make a value
    public static int minCoinsToMakeValue(int[] coins, int value) {
        System.out.println("=== Minimum coins to make a value ===");
        System.out.println("Coins: " + Arrays.toString(coins));
        System.out.println("Value: " + value);
        
        // Create DP array: dp[i] = minimum coins for value i
        int[] dp = new int[value + 1];
        Arrays.fill(dp, Integer.MAX_VALUE);
        dp[0] = 0; // 0 coins for value 0
        
        System.out.println("\\nStep 1: Initialize DP array");
        System.out.println("  dp[0] = 0 (0 coins for value 0)");
        
        for (int i = 1; i <= value; i++) {
            System.out.println("\\n  Computing dp[" + i + "]:");
            
            for (int j = 0; j < coins.length; j++) {
                if (coins[j] <= i && dp[i - coins[j]] != Integer.MAX_VALUE) {
                    int result = 1 + dp[i - coins[j]];
                    System.out.println("    Coin " + coins[j] + ": 1 + dp[" + (i - coins[j]) + "] = 1 + " + dp[i - coins[j]] + " = " + result);
                    dp[i] = Math.min(dp[i], result);
                }
            }
            
            System.out.println("  Final dp[" + i + "] = " + (dp[i] == Integer.MAX_VALUE ? "Impossible" : dp[i]));
        }
        
        System.out.println("\\nFinal DP array: " + Arrays.toString(dp));
        System.out.println("Result: Minimum coins = " + (dp[value] == Integer.MAX_VALUE ? "Impossible" : dp[value]));
        
        return dp[value] == Integer.MAX_VALUE ? -1 : dp[value];
    }
    
    // Alternative: Count ways to make value
    public static int countWaysToMakeValue(int[] coins, int value) {
        System.out.println("\\n=== Count ways to make value ===");
        System.out.println("Coins: " + Arrays.toString(coins));
        System.out.println("Value: " + value);
        
        // Create DP array: dp[i] = number of ways for value i
        int[] dp = new int[value + 1];
        dp[0] = 1; // 1 way for value 0 (use no coins)
        
        System.out.println("\\nStep 1: Initialize DP array");
        System.out.println("  dp[0] = 1 (1 way for value 0)");
        
        for (int i = 0; i < coins.length; i++) {
            System.out.println("\\n  Processing coin " + coins[i] + ":");
            
            for (int j = coins[i]; j <= value; j++) {
                dp[j] += dp[j - coins[i]];
                System.out.println("    dp[" + j + "] += dp[" + (j - coins[i]) + "] = " + dp[j]);
            }
        }
        
        System.out.println("\\nFinal DP array: " + Arrays.toString(dp));
        System.out.println("Result: Number of ways = " + dp[value]);
        
        return dp[value];
    }
    
    public static void main(String[] args) {
        System.out.println("=== Testing Minimum coins to make value ===");
        minCoinsToMakeValue(new int[]{1, 3, 4}, 6);
        countWaysToMakeValue(new int[]{1, 2, 3}, 4);
    }
}`,
        }}
        explanation="DP solution: for each value, try all coins and take minimum. dp[i] = min(dp[i], 1 + dp[i-coin]) for all valid coins. Time: O(value×coins), Space: O(value)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Find minimum coins to make exact value. Same as coin change problem - unbounded knapsack minimization.",
              details: [
                "Can use unlimited coins of each denomination",
                "Return minimum count, or -1 if impossible",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Unbounded knapsack minimization: dp[i] = minimum coins for value i. Try all coins for each value.",
              keywords: [
                "unbounded knapsack",
                "minimization",
                "DP",
                "coin change",
              ],
              details: [
                "State: dp[value] = minimum coins needed",
                "Recurrence: dp[i] = min(1 + dp[i-coin]) for all valid coins",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "1D array dp[i] stores minimum coins for value i. Initialize dp[0]=0, others=Infinity.",
              details: [
                "Use Infinity to represent impossible values",
                "Update only when valid coin is used",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "For i from 1 to value: for each coin, if coin<=i, dp[i]=min(dp[i], 1+dp[i-coin]). Return dp[value] or -1 if Infinity.",
              details: [
                "Base case: dp[0]=0 (0 coins for value 0)",
                "Try all coins for each value, take minimum",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Time O(value×coins) - each value computed once, each coin tried. Space O(value) for DP array.",
              details: [
                "DP reduces from exponential to polynomial time",
                "Can optimize by sorting coins and early termination",
              ],
            },
          ],
          pattern: "Unbounded Knapsack (Minimization)",
          complexity: {
            time: "O(value×coins)",
            space: "O(value)",
          },
        }}
      />
    </div>
  );
}

function LCSSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-white mb-6">
        Longest Common Subsequence (LCS)
      </h2>

      <ProblemBlock
        title="LCS - Part 1: Basic Implementation"
        difficulty="Medium"
        description="Find the length of the longest common subsequence between two strings."
        solutions={{
          JavaScript: `// Longest Common Subsequence - Basic Implementation

function longestCommonSubsequence(s1, s2) {
  console.log("=== Longest Common Subsequence ===");
  console.log("String 1:", s1);
  console.log("String 2:", s2);
  
  const m = s1.length;
  const n = s2.length;
  
  // Create DP table
  const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));
  
  console.log("\\nStep 1: Initialize DP table");
  console.log("  dp[" + m + "][" + n + "] = 0");
  
  // Fill the DP table
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      console.log("\\nStep 2: Computing dp[" + i + "][" + j + "]");
      console.log("  Comparing s1[" + (i-1) + "] = '" + s1[i-1] + "' with s2[" + (j-1) + "] = '" + s2[j-1] + "'");
      
      if (s1[i-1] === s2[j-1]) {
        dp[i][j] = 1 + dp[i-1][j-1];
        console.log("  ✓ Characters match: dp[" + i + "][" + j + "] = 1 + dp[" + (i-1) + "][" + (j-1) + "] = 1 + " + dp[i-1][j-1] + " = " + dp[i][j]);
      } else {
        dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
        console.log("  ✗ Characters don't match: dp[" + i + "][" + j + "] = max(dp[" + (i-1) + "][" + j + "], dp[" + i + "][" + (j-1) + "]) = max(" + dp[i-1][j] + ", " + dp[i][j-1] + ") = " + dp[i][j]);
      }
    }
  }
  
  console.log("\\nStep 3: Final DP table");
  for (let i = 0; i <= m; i++) {
    console.log("  " + dp[i].join(" "));
  }
  
  console.log("\\nResult: LCS length = " + dp[m][n]);
  return dp[m][n];
}

// Test cases
console.log("=== Testing LCS ===");
longestCommonSubsequence("ABCDGH", "AEDFHR");
longestCommonSubsequence("AGGTAB", "GXTXAYB");`,
          Java: `import java.util.*;

public class LongestCommonSubsequence {
    // Longest Common Subsequence - Basic Implementation
    public static int longestCommonSubsequence(String s1, String s2) {
        System.out.println("=== Longest Common Subsequence ===");
        System.out.println("String 1: " + s1);
        System.out.println("String 2: " + s2);
        
        int m = s1.length();
        int n = s2.length();
        
        // Create DP table
        int[][] dp = new int[m + 1][n + 1];
        
        System.out.println("\\nStep 1: Initialize DP table");
        System.out.println("  dp[" + m + "][" + n + "] = 0");
        
        // Fill the DP table
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                System.out.println("\\nStep 2: Computing dp[" + i + "][" + j + "]");
                System.out.println("  Comparing s1[" + (i-1) + "] = '" + s1.charAt(i-1) + "' with s2[" + (j-1) + "] = '" + s2.charAt(j-1) + "'");
                
                if (s1.charAt(i-1) == s2.charAt(j-1)) {
                    dp[i][j] = 1 + dp[i-1][j-1];
                    System.out.println("  ✓ Characters match: dp[" + i + "][" + j + "] = 1 + dp[" + (i-1) + "][" + (j-1) + "] = 1 + " + dp[i-1][j-1] + " = " + dp[i][j]);
                } else {
                    dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
                    System.out.println("  ✗ Characters don't match: dp[" + i + "][" + j + "] = max(dp[" + (i-1) + "][" + j + "], dp[" + i + "][" + (j-1) + "]) = max(" + dp[i-1][j] + ", " + dp[i][j-1] + ") = " + dp[i][j]);
                }
            }
        }
        
        System.out.println("\\nStep 3: Final DP table");
        for (int i = 0; i <= m; i++) {
            System.out.println("  " + Arrays.toString(dp[i]));
        }
        
        System.out.println("\\nResult: LCS length = " + dp[m][n]);
        return dp[m][n];
    }
    
    public static void main(String[] args) {
        System.out.println("=== Testing LCS ===");
        longestCommonSubsequence("ABCDGH", "AEDFHR");
        longestCommonSubsequence("AGGTAB", "GXTXAYB");
    }
}`,
        }}
        explanation="LCS uses DP to find the longest subsequence common to both strings. If characters match, add 1 to diagonal value; otherwise, take maximum of top and left values."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Find length of longest common subsequence between two strings. Classic 2D DP problem.",
              details: [
                "Subsequence: characters in order but not necessarily contiguous",
                "Need to find maximum length",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "2D DP: dp[i][j] = LCS length for s1[0..i-1] and s2[0..j-1]. Match: extend diagonal. No match: take max of top/left.",
              keywords: [
                "2D DP",
                "string comparison",
                "subsequence",
                "tabulation",
              ],
              details: [
                "State: LCS length for prefixes of both strings",
                "Optimal substructure: LCS of prefixes contains LCS of smaller prefixes",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "2D array dp[m+1][n+1]. Initialize first row and column to 0.",
              details: [
                "dp[i][0] = 0, dp[0][j] = 0 for all i, j",
                "Can optimize space to O(min(m,n))",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "For i from 1 to m, for j from 1 to n: if s1[i-1]==s2[j-1], dp[i][j]=1+dp[i-1][j-1]. Else dp[i][j]=max(dp[i-1][j], dp[i][j-1]). Return dp[m][n].",
              details: [
                "Match: extend LCS by including current character",
                "No match: take best of skipping s1[i] or s2[j]",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Time O(m×n) - fill all cells. Space O(m×n) for table, O(min(m,n)) with optimization.",
              details: [
                "Classic 2D DP problem",
                "Space optimization uses rolling array technique",
              ],
            },
          ],
          pattern: "2D DP (LCS)",
          complexity: {
            time: "O(m×n)",
            space: "O(m×n)",
          },
        }}
      />

      <ProblemBlock
        title="LCS - Part 2: Print the Actual LCS"
        difficulty="Medium"
        description="Not only find the length but also print the actual longest common subsequence."
        solutions={{
          JavaScript: `// LCS - Print the Actual Subsequence

function printLCS(s1, s2) {
  console.log("=== LCS - Print Actual Subsequence ===");
  console.log("String 1:", s1);
  console.log("String 2:", s2);
  
  const m = s1.length;
  const n = s2.length;
  
  // Create DP table
  const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));
  
  // Fill DP table
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s1[i-1] === s2[j-1]) {
        dp[i][j] = 1 + dp[i-1][j-1];
      } else {
        dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
      }
    }
  }
  
  console.log("\\nDP table filled:");
  for (let i = 0; i <= m; i++) {
    console.log("  " + dp[i].join(" "));
  }
  
  // Backtrack to find the actual LCS
  let lcs = "";
  let i = m, j = n;
  
  console.log("\\nStep 4: Backtracking to find actual LCS");
  console.log("Starting from dp[" + i + "][" + j + "] = " + dp[i][j]);
  
  while (i > 0 && j > 0) {
    console.log("\\nCurrent position: dp[" + i + "][" + j + "] = " + dp[i][j]);
    console.log("Comparing s1[" + (i-1) + "] = '" + s1[i-1] + "' with s2[" + (j-1) + "] = '" + s2[j-1] + "'");
    
    if (s1[i-1] === s2[j-1]) {
      lcs = s1[i-1] + lcs;
      console.log("  ✓ Characters match! Adding '" + s1[i-1] + "' to LCS");
      console.log("  Current LCS: '" + lcs + "'");
      i--;
      j--;
      console.log("  Moving to dp[" + i + "][" + j + "]");
    } else if (dp[i-1][j] > dp[i][j-1]) {
      console.log("  Moving up: dp[" + (i-1) + "][" + j + "] = " + dp[i-1][j] + " > dp[" + i + "][" + (j-1) + "] = " + dp[i][j-1]);
      i--;
    } else {
      console.log("  Moving left: dp[" + i + "][" + (j-1) + "] = " + dp[i][j-1] + " >= dp[" + (i-1) + "][" + j + "] = " + dp[i-1][j]);
      j--;
    }
  }
  
  console.log("\\nFinal LCS: '" + lcs + "'");
  console.log("LCS length: " + lcs.length);
  
  return lcs;
}

// Test cases
console.log("=== Testing LCS with Backtracking ===");
printLCS("ABCDGH", "AEDFHR");
printLCS("AGGTAB", "GXTXAYB");`,
          Java: `import java.util.*;

public class PrintLCS {
    // LCS - Print the Actual Subsequence
    public static String printLCS(String s1, String s2) {
        System.out.println("=== LCS - Print Actual Subsequence ===");
        System.out.println("String 1: " + s1);
        System.out.println("String 2: " + s2);
        
        int m = s1.length();
        int n = s2.length();
        
        // Create DP table
        int[][] dp = new int[m + 1][n + 1];
        
        // Fill DP table
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (s1.charAt(i-1) == s2.charAt(j-1)) {
                    dp[i][j] = 1 + dp[i-1][j-1];
                } else {
                    dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
                }
            }
        }
        
        System.out.println("\\nDP table filled:");
        for (int i = 0; i <= m; i++) {
            System.out.println("  " + Arrays.toString(dp[i]));
        }
        
        // Backtrack to find the actual LCS
        StringBuilder lcs = new StringBuilder();
        int i = m, j = n;
        
        System.out.println("\\nStep 4: Backtracking to find actual LCS");
        System.out.println("Starting from dp[" + i + "][" + j + "] = " + dp[i][j]);
        
        while (i > 0 && j > 0) {
            System.out.println("\\nCurrent position: dp[" + i + "][" + j + "] = " + dp[i][j]);
            System.out.println("Comparing s1[" + (i-1) + "] = '" + s1.charAt(i-1) + "' with s2[" + (j-1) + "] = '" + s2.charAt(j-1) + "'");
            
            if (s1.charAt(i-1) == s2.charAt(j-1)) {
                lcs.insert(0, s1.charAt(i-1));
                System.out.println("  ✓ Characters match! Adding '" + s1.charAt(i-1) + "' to LCS");
                System.out.println("  Current LCS: '" + lcs.toString() + "'");
                i--;
                j--;
                System.out.println("  Moving to dp[" + i + "][" + j + "]");
            } else if (dp[i-1][j] > dp[i][j-1]) {
                System.out.println("  Moving up: dp[" + (i-1) + "][" + j + "] = " + dp[i-1][j] + " > dp[" + i + "][" + (j-1) + "] = " + dp[i][j-1]);
                i--;
            } else {
                System.out.println("  Moving left: dp[" + i + "][" + (j-1) + "] = " + dp[i][j-1] + " >= dp[" + (i-1) + "][" + j + "] = " + dp[i-1][j]);
                j--;
            }
        }
        
        System.out.println("\\nFinal LCS: '" + lcs.toString() + "'");
        System.out.println("LCS length: " + lcs.length());
        
        return lcs.toString();
    }
    
    public static void main(String[] args) {
        System.out.println("=== Testing LCS with Backtracking ===");
        printLCS("ABCDGH", "AEDFHR");
        printLCS("AGGTAB", "GXTXAYB");
    }
}`,
        }}
        explanation="After filling the DP table, backtrack from dp[m][n] to dp[0][0] to reconstruct the actual LCS. Move diagonally when characters match, otherwise move in the direction of the maximum value."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Not only find LCS length, but also reconstruct and print the actual longest common subsequence string.",
              details: [
                "First build DP table to find length (same as before)",
                "Then backtrack through table to reconstruct the sequence",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Backtracking: start from dp[m][n], trace back to dp[0][0]. When characters match, include in LCS and move diagonally. Otherwise, move in direction of maximum.",
              keywords: [
                "backtracking",
                "reconstruction",
                "2D DP",
                "path tracing",
              ],
              details: [
                "Use DP table to trace optimal path",
                "Build LCS string in reverse, then reverse it",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "DP table (already built), string/array to store LCS characters, two pointers (i, j) for backtracking.",
              details: [
                "Build LCS from end to beginning",
                "Can use string builder or array",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Start at (m, n). While i>0 and j>0: if s1[i-1]==s2[j-1], add to LCS and move to (i-1, j-1). Else if dp[i-1][j] > dp[i][j-1], move to (i-1, j). Else move to (i, j-1). Reverse LCS string.",
              details: [
                "Match: character is part of LCS, move diagonally",
                "No match: move in direction that gave maximum value",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Time O(m+n) for backtracking (in addition to O(m×n) for DP table). Space O(m×n) for table, O(min(m,n)) for LCS string.",
              details: [
                "Backtracking is linear in length of LCS",
                "Can optimize space for DP table using rolling array",
              ],
            },
          ],
          pattern: "2D DP with Backtracking",
          complexity: {
            time: "O(m×n) for DP + O(m+n) for backtracking",
            space: "O(m×n)",
          },
        }}
      />

      <ProblemBlock
        title="Variation of LCS"
        difficulty="Medium"
        description="Solve variations of LCS problem like Longest Common Substring, Shortest Common Supersequence."
        solutions={{
          JavaScript: `// LCS Variations

// 1. Longest Common Substring
function longestCommonSubstring(s1, s2) {
  console.log("=== Longest Common Substring ===");
  console.log("String 1:", s1);
  console.log("String 2:", s2);
  
  const m = s1.length;
  const n = s2.length;
  const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));
  let maxLength = 0;
  let endIndex = 0;
  
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s1[i-1] === s2[j-1]) {
        dp[i][j] = 1 + dp[i-1][j-1];
        if (dp[i][j] > maxLength) {
          maxLength = dp[i][j];
          endIndex = i - 1;
        }
      } else {
        dp[i][j] = 0; // Reset for substring
      }
    }
  }
  
  const result = s1.substring(endIndex - maxLength + 1, endIndex + 1);
  console.log("Longest common substring: '" + result + "'");
  console.log("Length: " + maxLength);
  
  return result;
}

// 2. Shortest Common Supersequence
function shortestCommonSupersequence(s1, s2) {
  console.log("\\n=== Shortest Common Supersequence ===");
  console.log("String 1:", s1);
  console.log("String 2:", s2);
  
  const m = s1.length;
  const n = s2.length;
  const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));
  
  // Fill DP table
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i === 0) {
        dp[i][j] = j;
      } else if (j === 0) {
        dp[i][j] = i;
      } else if (s1[i-1] === s2[j-1]) {
        dp[i][j] = 1 + dp[i-1][j-1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i-1][j], dp[i][j-1]);
      }
    }
  }
  
  console.log("Shortest common supersequence length: " + dp[m][n]);
  
  // Print the supersequence
  let result = "";
  let i = m, j = n;
  
  while (i > 0 && j > 0) {
    if (s1[i-1] === s2[j-1]) {
      result = s1[i-1] + result;
      i--;
      j--;
    } else if (dp[i-1][j] < dp[i][j-1]) {
      result = s1[i-1] + result;
      i--;
    } else {
      result = s2[j-1] + result;
      j--;
    }
  }
  
  while (i > 0) {
    result = s1[i-1] + result;
    i--;
  }
  
  while (j > 0) {
    result = s2[j-1] + result;
    j--;
  }
  
  console.log("Shortest common supersequence: '" + result + "'");
  return result;
}

// Test cases
console.log("=== Testing LCS Variations ===");
longestCommonSubstring("ABCDGH", "AEDFHR");
shortestCommonSupersequence("AGGTAB", "GXTXAYB");`,
          Java: `import java.util.*;

public class LCSVariations {
    // 1. Longest Common Substring
    public static String longestCommonSubstring(String s1, String s2) {
        System.out.println("=== Longest Common Substring ===");
        System.out.println("String 1: " + s1);
        System.out.println("String 2: " + s2);
        
        int m = s1.length();
        int n = s2.length();
        int[][] dp = new int[m + 1][n + 1];
        int maxLength = 0;
        int endIndex = 0;
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (s1.charAt(i-1) == s2.charAt(j-1)) {
                    dp[i][j] = 1 + dp[i-1][j-1];
                    if (dp[i][j] > maxLength) {
                        maxLength = dp[i][j];
                        endIndex = i - 1;
                    }
                } else {
                    dp[i][j] = 0; // Reset for substring
                }
            }
        }
        
        String result = s1.substring(endIndex - maxLength + 1, endIndex + 1);
        System.out.println("Longest common substring: '" + result + "'");
        System.out.println("Length: " + maxLength);
        
        return result;
    }
    
    // 2. Shortest Common Supersequence
    public static String shortestCommonSupersequence(String s1, String s2) {
        System.out.println("\\n=== Shortest Common Supersequence ===");
        System.out.println("String 1: " + s1);
        System.out.println("String 2: " + s2);
        
        int m = s1.length();
        int n = s2.length();
        int[][] dp = new int[m + 1][n + 1];
        
        // Fill DP table
        for (int i = 0; i <= m; i++) {
            for (int j = 0; j <= n; j++) {
                if (i == 0) {
                    dp[i][j] = j;
                } else if (j == 0) {
                    dp[i][j] = i;
                } else if (s1.charAt(i-1) == s2.charAt(j-1)) {
                    dp[i][j] = 1 + dp[i-1][j-1];
                } else {
                    dp[i][j] = 1 + Math.min(dp[i-1][j], dp[i][j-1]);
                }
            }
        }
        
        System.out.println("Shortest common supersequence length: " + dp[m][n]);
        
        // Print the supersequence
        StringBuilder result = new StringBuilder();
        int i = m, j = n;
        
        while (i > 0 && j > 0) {
            if (s1.charAt(i-1) == s2.charAt(j-1)) {
                result.insert(0, s1.charAt(i-1));
                i--;
                j--;
            } else if (dp[i-1][j] < dp[i][j-1]) {
                result.insert(0, s1.charAt(i-1));
                i--;
            } else {
                result.insert(0, s2.charAt(j-1));
                j--;
            }
        }
        
        while (i > 0) {
            result.insert(0, s1.charAt(i-1));
            i--;
        }
        
        while (j > 0) {
            result.insert(0, s2.charAt(j-1));
            j--;
        }
        
        System.out.println("Shortest common supersequence: '" + result.toString() + "'");
        return result.toString();
    }
    
    public static void main(String[] args) {
        System.out.println("=== Testing LCS Variations ===");
        longestCommonSubstring("ABCDGH", "AEDFHR");
        shortestCommonSupersequence("AGGTAB", "GXTXAYB");
    }
}`,
        }}
        explanation="LCS variations: Substring requires resetting to 0 when characters don't match, while supersequence uses minimum of top and left values plus 1."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Solve LCS variations: Longest Common Substring (contiguous) and Shortest Common Supersequence (contains both strings).",
              details: [
                "Substring: must be contiguous (different from subsequence)",
                "Supersequence: shortest string containing both as subsequences",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Substring: reset to 0 when mismatch, track maximum. Supersequence: if match, take diagonal; else take min of top/left + 1.",
              keywords: [
                "LCS variations",
                "substring",
                "supersequence",
                "2D DP",
              ],
              details: [
                "Substring: dp[i][j] = 0 if mismatch, 1+dp[i-1][j-1] if match",
                "Supersequence: dp[i][j] = 1+min(dp[i-1][j], dp[i][j-1]) if mismatch",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "2D DP table for both problems. For substring, track maximum value seen. For supersequence, build result string.",
              details: [
                "Substring: need to track max length during DP",
                "Supersequence: backtrack to build result",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Substring: if match, dp[i][j]=1+dp[i-1][j-1], update max. If mismatch, dp[i][j]=0. Supersequence: if match, dp[i][j]=1+dp[i-1][j-1]. Else dp[i][j]=1+min(dp[i-1][j], dp[i][j-1]).",
              details: [
                "Substring: reset on mismatch (not contiguous)",
                "Supersequence: include both characters when mismatch",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Both O(m×n) time, O(m×n) space. Can optimize space for substring to O(min(m,n)).",
              details: [
                "Substring: only need previous row",
                "Supersequence: need full table for backtracking",
              ],
            },
          ],
          pattern: "2D DP (LCS Variations)",
          complexity: {
            time: "O(m×n)",
            space: "O(m×n)",
          },
        }}
      />
    </div>
  );
}

function EditDistanceSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-white mb-6">
        Edit Distance Problem
      </h2>

      <ProblemBlock
        title="Edit Distance Problem - Basic Implementation"
        difficulty="Medium"
        description="Find the minimum number of operations (insert, delete, replace) to convert one string to another."
        solutions={{
          JavaScript: `// Edit Distance Problem

function editDistance(s1, s2) {
  console.log("=== Edit Distance Problem ===");
  console.log("String 1:", s1);
  console.log("String 2:", s2);
  
  const m = s1.length;
  const n = s2.length;
  
  // Create DP table
  const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));
  
  console.log("\\nStep 1: Initialize base cases");
  
  // Initialize base cases
  for (let i = 0; i <= m; i++) {
    dp[i][0] = i;
    console.log("  dp[" + i + "][0] = " + i + " (delete " + i + " characters from s1)");
  }
  
  for (let j = 0; j <= n; j++) {
    dp[0][j] = j;
    console.log("  dp[0][" + j + "] = " + j + " (insert " + j + " characters to s1)");
  }
  
  console.log("\\nStep 2: Fill DP table");
  
  // Fill the DP table
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      console.log("\\nComputing dp[" + i + "][" + j + "]:");
      console.log("  Comparing s1[" + (i-1) + "] = '" + s1[i-1] + "' with s2[" + (j-1) + "] = '" + s2[j-1] + "'");
      
      if (s1[i-1] === s2[j-1]) {
        dp[i][j] = dp[i-1][j-1];
        console.log("  ✓ Characters match: dp[" + i + "][" + j + "] = dp[" + (i-1) + "][" + (j-1) + "] = " + dp[i][j] + " (no operation needed)");
      } else {
        const insert = dp[i][j-1] + 1;
        const delete_op = dp[i-1][j] + 1;
        const replace = dp[i-1][j-1] + 1;
        
        dp[i][j] = Math.min(insert, delete_op, replace);
        
        console.log("  ✗ Characters don't match:");
        console.log("    Insert: dp[" + i + "][" + (j-1) + "] + 1 = " + dp[i][j-1] + " + 1 = " + insert);
        console.log("    Delete: dp[" + (i-1) + "][" + j + "] + 1 = " + dp[i-1][j] + " + 1 = " + delete_op);
        console.log("    Replace: dp[" + (i-1) + "][" + (j-1) + "] + 1 = " + dp[i-1][j-1] + " + 1 = " + replace);
        console.log("    Minimum: " + dp[i][j]);
      }
    }
  }
  
  console.log("\\nStep 3: Final DP table");
  for (let i = 0; i <= m; i++) {
    console.log("  " + dp[i].join(" "));
  }
  
  console.log("\\nResult: Edit distance = " + dp[m][n]);
  return dp[m][n];
}

// Test cases
console.log("=== Testing Edit Distance ===");
editDistance("kitten", "sitting");
editDistance("saturday", "sunday");`,
          Java: `import java.util.*;

public class EditDistance {
    // Edit Distance Problem
    public static int editDistance(String s1, String s2) {
        System.out.println("=== Edit Distance Problem ===");
        System.out.println("String 1: " + s1);
        System.out.println("String 2: " + s2);
        
        int m = s1.length();
        int n = s2.length();
        
        // Create DP table
        int[][] dp = new int[m + 1][n + 1];
        
        System.out.println("\\nStep 1: Initialize base cases");
        
        // Initialize base cases
        for (int i = 0; i <= m; i++) {
            dp[i][0] = i;
            System.out.println("  dp[" + i + "][0] = " + i + " (delete " + i + " characters from s1)");
        }
        
        for (int j = 0; j <= n; j++) {
            dp[0][j] = j;
            System.out.println("  dp[0][" + j + "] = " + j + " (insert " + j + " characters to s1)");
        }
        
        System.out.println("\\nStep 2: Fill DP table");
        
        // Fill the DP table
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                System.out.println("\\nComputing dp[" + i + "][" + j + "]:");
                System.out.println("  Comparing s1[" + (i-1) + "] = '" + s1.charAt(i-1) + "' with s2[" + (j-1) + "] = '" + s2.charAt(j-1) + "'");
                
                if (s1.charAt(i-1) == s2.charAt(j-1)) {
                    dp[i][j] = dp[i-1][j-1];
                    System.out.println("  ✓ Characters match: dp[" + i + "][" + j + "] = dp[" + (i-1) + "][" + (j-1) + "] = " + dp[i][j] + " (no operation needed)");
                } else {
                    int insert = dp[i][j-1] + 1;
                    int delete_op = dp[i-1][j] + 1;
                    int replace = dp[i-1][j-1] + 1;
                    
                    dp[i][j] = Math.min(insert, Math.min(delete_op, replace));
                    
                    System.out.println("  ✗ Characters don't match:");
                    System.out.println("    Insert: dp[" + i + "][" + (j-1) + "] + 1 = " + dp[i][j-1] + " + 1 = " + insert);
                    System.out.println("    Delete: dp[" + (i-1) + "][" + j + "] + 1 = " + dp[i-1][j] + " + 1 = " + delete_op);
                    System.out.println("    Replace: dp[" + (i-1) + "][" + (j-1) + "] + 1 = " + dp[i-1][j-1] + " + 1 = " + replace);
                    System.out.println("    Minimum: " + dp[i][j]);
                }
            }
        }
        
        System.out.println("\\nStep 3: Final DP table");
        for (int i = 0; i <= m; i++) {
            System.out.println("  " + Arrays.toString(dp[i]));
        }
        
        System.out.println("\\nResult: Edit distance = " + dp[m][n]);
        return dp[m][n];
    }
    
    public static void main(String[] args) {
        System.out.println("=== Testing Edit Distance ===");
        editDistance("kitten", "sitting");
        editDistance("saturday", "sunday");
    }
}`,
        }}
        explanation="Edit distance uses DP to find minimum operations. If characters match, take diagonal value; otherwise, take minimum of insert, delete, or replace operations plus 1."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Find minimum operations (insert, delete, replace) to convert string s1 to s2. Classic edit distance (Levenshtein distance).",
              details: [
                "Insert: add character to s1",
                "Delete: remove character from s1",
                "Replace: change character in s1",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "2D DP: dp[i][j] = edit distance for s1[0..i-1] and s2[0..j-1]. If match, take diagonal. Else take min of insert/delete/replace + 1.",
              keywords: [
                "2D DP",
                "edit distance",
                "Levenshtein",
                "string transformation",
              ],
              details: [
                "State: minimum operations to transform prefix",
                "Three operations: insert, delete, replace",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "2D array dp[m+1][n+1]. Initialize first row and column: dp[i][0]=i (delete all), dp[0][j]=j (insert all).",
              details: [
                "Base cases: empty string transformations",
                "Can optimize space to O(min(m,n))",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "For i from 1 to m, for j from 1 to n: if s1[i-1]==s2[j-1], dp[i][j]=dp[i-1][j-1]. Else dp[i][j]=1+min(dp[i-1][j] (delete), dp[i][j-1] (insert), dp[i-1][j-1] (replace)).",
              details: [
                "Match: no operation needed",
                "No match: try all three operations, take minimum",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Time O(m×n) - fill all cells. Space O(m×n) for table, O(min(m,n)) with optimization.",
              details: [
                "Classic 2D DP problem",
                "Space optimization uses rolling array",
              ],
            },
          ],
          pattern: "2D DP (Edit Distance)",
          complexity: {
            time: "O(m×n)",
            space: "O(m×n)",
          },
        }}
      />

      <ProblemBlock
        title="Edit Distance Problem - DP Solution with Operations"
        difficulty="Medium"
        description="Not only find the edit distance but also show the actual operations performed."
        solutions={{
          JavaScript: `// Edit Distance with Operations

function editDistanceWithOperations(s1, s2) {
  console.log("=== Edit Distance with Operations ===");
  console.log("String 1:", s1);
  console.log("String 2:", s2);
  
  const m = s1.length;
  const n = s2.length;
  
  // Create DP table
  const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));
  
  // Initialize base cases
  for (let i = 0; i <= m; i++) {
    dp[i][0] = i;
  }
  for (let j = 0; j <= n; j++) {
    dp[0][j] = j;
  }
  
  // Fill DP table
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s1[i-1] === s2[j-1]) {
        dp[i][j] = dp[i-1][j-1];
      } else {
        dp[i][j] = Math.min(
          dp[i][j-1] + 1,    // Insert
          dp[i-1][j] + 1,    // Delete
          dp[i-1][j-1] + 1   // Replace
        );
      }
    }
  }
  
  console.log("\\nDP table:");
  for (let i = 0; i <= m; i++) {
    console.log("  " + dp[i].join(" "));
  }
  
  console.log("\\nEdit distance: " + dp[m][n]);
  
  // Backtrack to find operations
  const operations = [];
  let i = m, j = n;
  
  console.log("\\nStep 4: Backtracking to find operations");
  
  while (i > 0 && j > 0) {
    console.log("\\nCurrent position: dp[" + i + "][" + j + "] = " + dp[i][j]);
    console.log("Comparing s1[" + (i-1) + "] = '" + s1[i-1] + "' with s2[" + (j-1) + "] = '" + s2[j-1] + "'");
    
    if (s1[i-1] === s2[j-1]) {
      console.log("  Characters match, no operation needed");
      i--;
      j--;
    } else {
      const insert = dp[i][j-1] + 1;
      const delete_op = dp[i-1][j] + 1;
      const replace = dp[i-1][j-1] + 1;
      
      console.log("  Operations available:");
      console.log("    Insert: " + insert);
      console.log("    Delete: " + delete_op);
      console.log("    Replace: " + replace);
      
      if (dp[i][j] === insert) {
        operations.unshift("Insert '" + s2[j-1] + "' at position " + i);
        console.log("  ✓ Chose Insert: '" + s2[j-1] + "'");
        j--;
      } else if (dp[i][j] === delete_op) {
        operations.unshift("Delete '" + s1[i-1] + "' at position " + (i-1));
        console.log("  ✓ Chose Delete: '" + s1[i-1] + "'");
        i--;
      } else {
        operations.unshift("Replace '" + s1[i-1] + "' with '" + s2[j-1] + "' at position " + (i-1));
        console.log("  ✓ Chose Replace: '" + s1[i-1] + "' with '" + s2[j-1] + "'");
        i--;
        j--;
      }
    }
  }
  
  // Handle remaining characters
  while (i > 0) {
    operations.unshift("Delete '" + s1[i-1] + "' at position " + (i-1));
    i--;
  }
  
  while (j > 0) {
    operations.unshift("Insert '" + s2[j-1] + "' at position " + i);
    j--;
  }
  
  console.log("\\nOperations performed:");
  operations.forEach((op, index) => {
    console.log("  " + (index + 1) + ". " + op);
  });
  
  return { distance: dp[m][n], operations };
}

// Test cases
console.log("=== Testing Edit Distance with Operations ===");
editDistanceWithOperations("kitten", "sitting");
editDistanceWithOperations("saturday", "sunday");`,
          Java: `import java.util.*;

public class EditDistanceWithOperations {
    // Edit Distance with Operations
    public static EditDistanceResult editDistanceWithOperations(String s1, String s2) {
        System.out.println("=== Edit Distance with Operations ===");
        System.out.println("String 1: " + s1);
        System.out.println("String 2: " + s2);
        
        int m = s1.length();
        int n = s2.length();
        
        // Create DP table
        int[][] dp = new int[m + 1][n + 1];
        
        // Initialize base cases
        for (int i = 0; i <= m; i++) {
            dp[i][0] = i;
        }
        for (int j = 0; j <= n; j++) {
            dp[0][j] = j;
        }
        
        // Fill DP table
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (s1.charAt(i-1) == s2.charAt(j-1)) {
                    dp[i][j] = dp[i-1][j-1];
                } else {
                    dp[i][j] = Math.min(
                        dp[i][j-1] + 1,    // Insert
                        Math.min(dp[i-1][j] + 1,    // Delete
                        dp[i-1][j-1] + 1)   // Replace
                    );
                }
            }
        }
        
        System.out.println("\\nDP table:");
        for (int i = 0; i <= m; i++) {
            System.out.println("  " + Arrays.toString(dp[i]));
        }
        
        System.out.println("\\nEdit distance: " + dp[m][n]);
        
        // Backtrack to find operations
        List<String> operations = new ArrayList<>();
        int i = m, j = n;
        
        System.out.println("\\nStep 4: Backtracking to find operations");
        
        while (i > 0 && j > 0) {
            System.out.println("\\nCurrent position: dp[" + i + "][" + j + "] = " + dp[i][j]);
            System.out.println("Comparing s1[" + (i-1) + "] = '" + s1.charAt(i-1) + "' with s2[" + (j-1) + "] = '" + s2.charAt(j-1) + "'");
            
            if (s1.charAt(i-1) == s2.charAt(j-1)) {
                System.out.println("  Characters match, no operation needed");
                i--;
                j--;
            } else {
                int insert = dp[i][j-1] + 1;
                int delete_op = dp[i-1][j] + 1;
                int replace = dp[i-1][j-1] + 1;
                
                System.out.println("  Operations available:");
                System.out.println("    Insert: " + insert);
                System.out.println("    Delete: " + delete_op);
                System.out.println("    Replace: " + replace);
                
                if (dp[i][j] == insert) {
                    operations.add(0, "Insert '" + s2.charAt(j-1) + "' at position " + i);
                    System.out.println("  ✓ Chose Insert: '" + s2.charAt(j-1) + "'");
                    j--;
                } else if (dp[i][j] == delete_op) {
                    operations.add(0, "Delete '" + s1.charAt(i-1) + "' at position " + (i-1));
                    System.out.println("  ✓ Chose Delete: '" + s1.charAt(i-1) + "'");
                    i--;
                } else {
                    operations.add(0, "Replace '" + s1.charAt(i-1) + "' with '" + s2.charAt(j-1) + "' at position " + (i-1));
                    System.out.println("  ✓ Chose Replace: '" + s1.charAt(i-1) + "' with '" + s2.charAt(j-1) + "'");
                    i--;
                    j--;
                }
            }
        }
        
        // Handle remaining characters
        while (i > 0) {
            operations.add(0, "Delete '" + s1.charAt(i-1) + "' at position " + (i-1));
            i--;
        }
        
        while (j > 0) {
            operations.add(0, "Insert '" + s2.charAt(j-1) + "' at position " + i);
            j--;
        }
        
        System.out.println("\\nOperations performed:");
        for (int idx = 0; idx < operations.size(); idx++) {
            System.out.println("  " + (idx + 1) + ". " + operations.get(idx));
        }
        
        return new EditDistanceResult(dp[m][n], operations);
    }
    
    static class EditDistanceResult {
        int distance;
        List<String> operations;
        
        EditDistanceResult(int distance, List<String> operations) {
            this.distance = distance;
            this.operations = operations;
        }
    }
    
    public static void main(String[] args) {
        System.out.println("=== Testing Edit Distance with Operations ===");
        editDistanceWithOperations("kitten", "sitting");
        editDistanceWithOperations("saturday", "sunday");
    }
}`,
        }}
        explanation="After computing edit distance, backtrack through the DP table to determine which operations were used to achieve the minimum distance."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Same edit distance problem, but also reconstruct and show the actual sequence of operations (insert, delete, replace) performed.",
              details: [
                "First compute DP table (same as before)",
                "Then backtrack to determine which operations were used",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Backtracking: start from dp[m][n], trace back to dp[0][0]. Determine which operation was used at each step by comparing dp values.",
              keywords: [
                "backtracking",
                "reconstruction",
                "edit distance",
                "operations tracking",
              ],
              details: [
                "Use DP table to trace optimal path",
                "Determine operation by comparing dp[i][j] with neighbors",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "DP table (already built), list/array to store operations, two pointers (i, j) for backtracking.",
              details: [
                "Build operations list in reverse, then reverse it",
                "Store operation type and character information",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Start at (m, n). While i>0 and j>0: if s1[i-1]==s2[j-1], move to (i-1, j-1) (no op). Else if dp[i][j]==1+dp[i-1][j], delete s1[i-1] and move to (i-1, j). Else if dp[i][j]==1+dp[i][j-1], insert s2[j-1] and move to (i, j-1). Else replace s1[i-1] with s2[j-1] and move to (i-1, j-1).",
              details: [
                "Match: no operation, move diagonally",
                "No match: determine which operation gave minimum",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Time O(m×n) for DP + O(m+n) for backtracking. Space O(m×n) for table, O(m+n) for operations list.",
              details: [
                "Backtracking is linear in length of strings",
                "Can optimize space for DP table using rolling array",
              ],
            },
          ],
          pattern: "2D DP with Backtracking (Edit Distance)",
          complexity: {
            time: "O(m×n) for DP + O(m+n) for backtracking",
            space: "O(m×n)",
          },
        }}
      />
    </div>
  );
}

function LISSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-white mb-6">
        Longest Increasing Subsequence (LIS)
      </h2>

      <ProblemBlock
        title="LIS Problem - Basic Implementation"
        difficulty="Medium"
        description="Find the length of the longest increasing subsequence in an array."
        solutions={{
          JavaScript: `// Longest Increasing Subsequence

function longestIncreasingSubsequence(arr) {
  console.log("=== Longest Increasing Subsequence ===");
  console.log("Array:", arr);
  
  const n = arr.length;
  if (n === 0) return 0;
  
  // dp[i] represents the length of LIS ending at index i
  const dp = new Array(n).fill(1);
  
  console.log("\\nStep 1: Initialize DP array");
  console.log("  dp[i] = length of LIS ending at index i");
  console.log("  Initial values: " + dp.join(" "));
  
  // Fill DP array
  for (let i = 1; i < n; i++) {
    console.log("\\nStep 2: Processing index " + i + " (value = " + arr[i] + ")");
    
    for (let j = 0; j < i; j++) {
      console.log("  Comparing with index " + j + " (value = " + arr[j] + ")");
      
      if (arr[j] < arr[i]) {
        const newLength = dp[j] + 1;
        console.log("    " + arr[j] + " < " + arr[i] + ": dp[" + j + "] + 1 = " + dp[j] + " + 1 = " + newLength);
        
        if (newLength > dp[i]) {
          dp[i] = newLength;
          console.log("    ✓ Updated dp[" + i + "] = " + dp[i]);
        } else {
          console.log("    ✗ dp[" + i + "] = " + dp[i] + " >= " + newLength + ", no update");
        }
      } else {
        console.log("    " + arr[j] + " >= " + arr[i] + ", skip");
      }
    }
    
    console.log("  Final dp[" + i + "] = " + dp[i]);
  }
  
  console.log("\\nStep 3: Final DP array");
  console.log("  " + dp.join(" "));
  
  const maxLength = Math.max(...dp);
  console.log("\\nResult: LIS length = " + maxLength);
  
  return maxLength;
}

// Test cases
console.log("=== Testing LIS ===");
longestIncreasingSubsequence([10, 22, 9, 33, 21, 50, 41, 60, 80]);
longestIncreasingSubsequence([3, 10, 2, 1, 20]);`,
          Java: `import java.util.*;

public class LongestIncreasingSubsequence {
    // Longest Increasing Subsequence
    public static int longestIncreasingSubsequence(int[] arr) {
        System.out.println("=== Longest Increasing Subsequence ===");
        System.out.println("Array: " + Arrays.toString(arr));
        
        int n = arr.length;
        if (n == 0) return 0;
        
        // dp[i] represents the length of LIS ending at index i
        int[] dp = new int[n];
        Arrays.fill(dp, 1);
        
        System.out.println("\\nStep 1: Initialize DP array");
        System.out.println("  dp[i] = length of LIS ending at index i");
        System.out.println("  Initial values: " + Arrays.toString(dp));
        
        // Fill DP array
        for (int i = 1; i < n; i++) {
            System.out.println("\\nStep 2: Processing index " + i + " (value = " + arr[i] + ")");
            
            for (int j = 0; j < i; j++) {
                System.out.println("  Comparing with index " + j + " (value = " + arr[j] + ")");
                
                if (arr[j] < arr[i]) {
                    int newLength = dp[j] + 1;
                    System.out.println("    " + arr[j] + " < " + arr[i] + ": dp[" + j + "] + 1 = " + dp[j] + " + 1 = " + newLength);
                    
                    if (newLength > dp[i]) {
                        dp[i] = newLength;
                        System.out.println("    ✓ Updated dp[" + i + "] = " + dp[i]);
                    } else {
                        System.out.println("    ✗ dp[" + i + "] = " + dp[i] + " >= " + newLength + ", no update");
                    }
                } else {
                    System.out.println("    " + arr[j] + " >= " + arr[i] + ", skip");
                }
            }
            
            System.out.println("  Final dp[" + i + "] = " + dp[i]);
        }
        
        System.out.println("\\nStep 3: Final DP array");
        System.out.println("  " + Arrays.toString(dp));
        
        int maxLength = Arrays.stream(dp).max().orElse(0);
        System.out.println("\\nResult: LIS length = " + maxLength);
        
        return maxLength;
    }
    
    public static void main(String[] args) {
        System.out.println("=== Testing LIS ===");
        longestIncreasingSubsequence(new int[]{10, 22, 9, 33, 21, 50, 41, 60, 80});
        longestIncreasingSubsequence(new int[]{3, 10, 2, 1, 20});
    }
}`,
        }}
        explanation="LIS uses DP where dp[i] represents the length of LIS ending at index i. For each element, check all previous elements and update if current element is greater."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Find length of longest increasing subsequence (LIS) in array. Subsequence: elements in order but not necessarily contiguous.",
              details: [
                "Example: [10,22,9,33,21,50] → LIS length = 4 ([10,22,33,50])",
                "Need to find maximum length",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "1D DP: dp[i] = LIS length ending at index i. For each element, check all previous smaller elements and take maximum + 1.",
              keywords: ["1D DP", "LIS", "subsequence", "optimization"],
              details: [
                "State: LIS length ending at each position",
                "For each element, find longest previous subsequence it can extend",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "1D array dp[i] stores LIS length ending at index i. Initialize all to 1 (each element is LIS of length 1).",
              details: [
                "Base case: dp[i] = 1 for all i",
                "Track maximum value in dp array",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "For i from 0 to n-1: for j from 0 to i-1, if arr[j] < arr[i], dp[i] = max(dp[i], 1+dp[j]). Return maximum value in dp array.",
              details: [
                "For each element, check all previous elements",
                "If previous element is smaller, can extend its LIS",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Time O(n²) - for each element, check all previous. Space O(n) for DP array. Can optimize to O(n log n) using binary search.",
              details: [
                "Standard DP approach is O(n²)",
                "Binary search approach reduces to O(n log n)",
              ],
            },
          ],
          pattern: "1D DP (LIS)",
          complexity: {
            time: "O(n²)",
            space: "O(n)",
          },
        }}
      />

      <ProblemBlock
        title="LIS in O(n log n) - Binary Search Approach"
        difficulty="Hard"
        description="Optimized LIS solution using binary search to achieve O(n log n) time complexity."
        solutions={{
          JavaScript: `// LIS in O(n log n) using Binary Search

function lisOptimized(arr) {
  console.log("=== LIS in O(n log n) ===");
  console.log("Array:", arr);
  
  const n = arr.length;
  if (n === 0) return 0;
  
  // tails[i] stores the smallest tail of all increasing subsequences of length i+1
  const tails = [];
  
  console.log("\\nStep 1: Initialize tails array");
  console.log("  tails[i] = smallest tail of LIS of length i+1");
  
  for (let i = 0; i < n; i++) {
    console.log("\\nProcessing arr[" + i + "] = " + arr[i]);
    
    // Binary search for the position to replace
    let left = 0, right = tails.length;
    
    console.log("  Binary search in tails: " + tails.join(" "));
    console.log("  Search range: [" + left + ", " + right + ")");
    
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      console.log("    mid = " + mid + ", tails[" + mid + "] = " + tails[mid]);
      
      if (tails[mid] < arr[i]) {
        left = mid + 1;
        console.log("    tails[" + mid + "] < " + arr[i] + ", search right: [" + left + ", " + right + ")");
      } else {
        right = mid;
        console.log("    tails[" + mid + "] >= " + arr[i] + ", search left: [" + left + ", " + right + ")");
      }
    }
    
    if (left === tails.length) {
      tails.push(arr[i]);
      console.log("  " + arr[i] + " extends LIS, tails = " + tails.join(" "));
    } else {
      tails[left] = arr[i];
      console.log("  " + arr[i] + " replaces tails[" + left + "], tails = " + tails.join(" "));
    }
  }
  
  console.log("\\nFinal tails array: " + tails.join(" "));
  console.log("Result: LIS length = " + tails.length);
  
  return tails.length;
}

// Helper function for binary search
function binarySearch(tails, target) {
  let left = 0, right = tails.length;
  
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (tails[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  
  return left;
}

// Test cases
console.log("=== Testing LIS O(n log n) ===");
lisOptimized([10, 22, 9, 33, 21, 50, 41, 60, 80]);
lisOptimized([3, 10, 2, 1, 20]);`,
          Java: `import java.util.*;

public class LISOptimized {
    // LIS in O(n log n) using Binary Search
    public static int lisOptimized(int[] arr) {
        System.out.println("=== LIS in O(n log n) ===");
        System.out.println("Array: " + Arrays.toString(arr));
        
        int n = arr.length;
        if (n == 0) return 0;
        
        // tails[i] stores the smallest tail of all increasing subsequences of length i+1
        List<Integer> tails = new ArrayList<>();
        
        System.out.println("\\nStep 1: Initialize tails array");
        System.out.println("  tails[i] = smallest tail of LIS of length i+1");
        
        for (int i = 0; i < n; i++) {
            System.out.println("\\nProcessing arr[" + i + "] = " + arr[i]);
            
            // Binary search for the position to replace
            int left = 0, right = tails.size();
            
            System.out.print("  Binary search in tails: ");
            for (int val : tails) {
                System.out.print(val + " ");
            }
            System.out.println();
            System.out.println("  Search range: [" + left + ", " + right + ")");
            
            while (left < right) {
                int mid = (left + right) / 2;
                System.out.println("    mid = " + mid + ", tails[" + mid + "] = " + tails.get(mid));
                
                if (tails.get(mid) < arr[i]) {
                    left = mid + 1;
                    System.out.println("    tails[" + mid + "] < " + arr[i] + ", search right: [" + left + ", " + right + ")");
                } else {
                    right = mid;
                    System.out.println("    tails[" + mid + "] >= " + arr[i] + ", search left: [" + left + ", " + right + ")");
                }
            }
            
            if (left == tails.size()) {
                tails.add(arr[i]);
                System.out.print("  " + arr[i] + " extends LIS, tails = ");
                for (int val : tails) {
                    System.out.print(val + " ");
                }
                System.out.println();
            } else {
                tails.set(left, arr[i]);
                System.out.print("  " + arr[i] + " replaces tails[" + left + "], tails = ");
                for (int val : tails) {
                    System.out.print(val + " ");
                }
                System.out.println();
            }
        }
        
        System.out.print("\\nFinal tails array: ");
        for (int val : tails) {
            System.out.print(val + " ");
        }
        System.out.println();
        System.out.println("Result: LIS length = " + tails.size());
        
        return tails.size();
    }
    
    // Helper function for binary search
    private static int binarySearch(List<Integer> tails, int target) {
        int left = 0, right = tails.size();
        
        while (left < right) {
            int mid = (left + right) / 2;
            if (tails.get(mid) < target) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        
        return left;
    }
    
    public static void main(String[] args) {
        System.out.println("=== Testing LIS O(n log n) ===");
        lisOptimized(new int[]{10, 22, 9, 33, 21, 50, 41, 60, 80});
        lisOptimized(new int[]{3, 10, 2, 1, 20});
    }
}`,
        }}
        explanation="Optimized LIS uses binary search to maintain the smallest tail of each LIS length. Time: O(n log n), Space: O(n)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Same LIS problem, but optimize from O(n²) to O(n log n) using binary search. Maintain smallest tail element for each LIS length.",
              details: [
                "Key insight: maintain tails[i] = smallest tail of LIS of length i+1",
                "Use binary search to find position to insert/replace",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Greedy + Binary Search: maintain array of smallest tails. For each element, binary search to find where it fits, then update tails array.",
              keywords: ["binary search", "greedy", "optimization", "LIS"],
              details: [
                "Maintain invariant: tails array is always sorted",
                "Binary search finds position to insert/replace",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Array/list tails to store smallest tail for each LIS length. Binary search helper function.",
              details: [
                "tails[i] = smallest tail of LIS of length i+1",
                "Array size = LIS length",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "For each element: binary search in tails to find position where element should be placed. If position == tails.length, append (new LIS). Else replace tails[position] with element. Return tails.length.",
              details: [
                "Binary search finds leftmost position where element >= tails[pos]",
                "Replace maintains smallest tail property",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Time O(n log n) - n elements, each requires O(log n) binary search. Space O(n) for tails array. Much better than O(n²) DP approach.",
              details: [
                "Optimal time complexity for LIS",
                "Can also reconstruct actual LIS with additional tracking",
              ],
            },
          ],
          pattern: "Binary Search Optimization (LIS)",
          complexity: {
            time: "O(n log n)",
            space: "O(n)",
          },
        }}
      />

      <ProblemBlock
        title="Variation of LIS - Part 1: Longest Decreasing Subsequence"
        difficulty="Medium"
        description="Find the longest decreasing subsequence and other LIS variations."
        solutions={{
          JavaScript: `// LIS Variations

// 1. Longest Decreasing Subsequence
function longestDecreasingSubsequence(arr) {
  console.log("=== Longest Decreasing Subsequence ===");
  console.log("Array:", arr);
  
  const n = arr.length;
  if (n === 0) return 0;
  
  const dp = new Array(n).fill(1);
  
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[i]) { // Changed condition for decreasing
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  
  const maxLength = Math.max(...dp);
  console.log("LDS length: " + maxLength);
  
  return maxLength;
}

// 2. Longest Bitonic Subsequence
function longestBitonicSubsequence(arr) {
  console.log("\\n=== Longest Bitonic Subsequence ===");
  console.log("Array:", arr);
  
  const n = arr.length;
  if (n === 0) return 0;
  
  // LIS from left to right
  const lis = new Array(n).fill(1);
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i]) {
        lis[i] = Math.max(lis[i], lis[j] + 1);
      }
    }
  }
  
  // LDS from right to left
  const lds = new Array(n).fill(1);
  for (let i = n - 2; i >= 0; i--) {
    for (let j = n - 1; j > i; j--) {
      if (arr[j] < arr[i]) {
        lds[i] = Math.max(lds[i], lds[j] + 1);
      }
    }
  }
  
  // Find maximum bitonic length
  let maxLength = 0;
  for (let i = 0; i < n; i++) {
    maxLength = Math.max(maxLength, lis[i] + lds[i] - 1);
  }
  
  console.log("LIS array: " + lis.join(" "));
  console.log("LDS array: " + lds.join(" "));
  console.log("Bitonic length: " + maxLength);
  
  return maxLength;
}

// 3. Maximum Sum Increasing Subsequence
function maxSumIncreasingSubsequence(arr) {
  console.log("\\n=== Maximum Sum Increasing Subsequence ===");
  console.log("Array:", arr);
  
  const n = arr.length;
  if (n === 0) return 0;
  
  const dp = [...arr]; // Initialize with array values
  
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i]) {
        dp[i] = Math.max(dp[i], dp[j] + arr[i]);
      }
    }
  }
  
  const maxSum = Math.max(...dp);
  console.log("Max sum: " + maxSum);
  
  return maxSum;
}

// Test cases
console.log("=== Testing LIS Variations ===");
longestDecreasingSubsequence([10, 22, 9, 33, 21, 50, 41, 60, 80]);
longestBitonicSubsequence([1, 11, 2, 10, 4, 5, 2, 1]);
maxSumIncreasingSubsequence([1, 101, 2, 3, 100, 4, 5]);`,
          Java: `import java.util.*;

public class LISVariations {
    // 1. Longest Decreasing Subsequence
    public static int longestDecreasingSubsequence(int[] arr) {
        System.out.println("=== Longest Decreasing Subsequence ===");
        System.out.println("Array: " + Arrays.toString(arr));
        
        int n = arr.length;
        if (n == 0) return 0;
        
        int[] dp = new int[n];
        Arrays.fill(dp, 1);
        
        for (int i = 1; i < n; i++) {
            for (int j = 0; j < i; j++) {
                if (arr[j] > arr[i]) { // Changed condition for decreasing
                    dp[i] = Math.max(dp[i], dp[j] + 1);
                }
            }
        }
        
        int maxLength = Arrays.stream(dp).max().orElse(0);
        System.out.println("LDS length: " + maxLength);
        
        return maxLength;
    }
    
    // 2. Longest Bitonic Subsequence
    public static int longestBitonicSubsequence(int[] arr) {
        System.out.println("\\n=== Longest Bitonic Subsequence ===");
        System.out.println("Array: " + Arrays.toString(arr));
        
        int n = arr.length;
        if (n == 0) return 0;
        
        // LIS from left to right
        int[] lis = new int[n];
        Arrays.fill(lis, 1);
        for (int i = 1; i < n; i++) {
            for (int j = 0; j < i; j++) {
                if (arr[j] < arr[i]) {
                    lis[i] = Math.max(lis[i], lis[j] + 1);
                }
            }
        }
        
        // LDS from right to left
        int[] lds = new int[n];
        Arrays.fill(lds, 1);
        for (int i = n - 2; i >= 0; i--) {
            for (int j = n - 1; j > i; j--) {
                if (arr[j] < arr[i]) {
                    lds[i] = Math.max(lds[i], lds[j] + 1);
                }
            }
        }
        
        // Find maximum bitonic length
        int maxLength = 0;
        for (int i = 0; i < n; i++) {
            maxLength = Math.max(maxLength, lis[i] + lds[i] - 1);
        }
        
        System.out.println("LIS array: " + Arrays.toString(lis));
        System.out.println("LDS array: " + Arrays.toString(lds));
        System.out.println("Bitonic length: " + maxLength);
        
        return maxLength;
    }
    
    // 3. Maximum Sum Increasing Subsequence
    public static int maxSumIncreasingSubsequence(int[] arr) {
        System.out.println("\\n=== Maximum Sum Increasing Subsequence ===");
        System.out.println("Array: " + Arrays.toString(arr));
        
        int n = arr.length;
        if (n == 0) return 0;
        
        int[] dp = Arrays.copyOf(arr, n); // Initialize with array values
        
        for (int i = 1; i < n; i++) {
            for (int j = 0; j < i; j++) {
                if (arr[j] < arr[i]) {
                    dp[i] = Math.max(dp[i], dp[j] + arr[i]);
                }
            }
        }
        
        int maxSum = Arrays.stream(dp).max().orElse(0);
        System.out.println("Max sum: " + maxSum);
        
        return maxSum;
    }
    
    public static void main(String[] args) {
        System.out.println("=== Testing LIS Variations ===");
        longestDecreasingSubsequence(new int[]{10, 22, 9, 33, 21, 50, 41, 60, 80});
        longestBitonicSubsequence(new int[]{1, 11, 2, 10, 4, 5, 2, 1});
        maxSumIncreasingSubsequence(new int[]{1, 101, 2, 3, 100, 4, 5});
    }
}`,
        }}
        explanation="LIS variations: LDS uses > instead of <, Bitonic combines LIS and LDS, Max Sum uses array values instead of length."
      />

      <ProblemBlock
        title="Variations of LIS - Part 2: Advanced Problems"
        difficulty="Hard"
        description="Solve advanced LIS variations like Minimum Operations to Make Array Increasing."
        solutions={{
          JavaScript: `// Advanced LIS Variations

// 1. Minimum Operations to Make Array Increasing
function minOperationsToMakeIncreasing(arr) {
  console.log("=== Minimum Operations to Make Array Increasing ===");
  console.log("Array:", arr);
  
  const n = arr.length;
  if (n <= 1) return 0;
  
  let operations = 0;
  
  for (let i = 1; i < n; i++) {
    if (arr[i] <= arr[i-1]) {
      const needed = arr[i-1] + 1;
      operations += needed - arr[i];
      arr[i] = needed;
      console.log("  arr[" + i + "] = " + arr[i] + " (increased by " + (needed - arr[i]) + ")");
    }
  }
  
  console.log("Minimum operations: " + operations);
  return operations;
}

// 2. Longest Increasing Subsequence with K Allowed Changes
function lisWithKChanges(arr, k) {
  console.log("\\n=== LIS with K Allowed Changes ===");
  console.log("Array:", arr);
  console.log("K:", k);
  
  const n = arr.length;
  if (n === 0) return 0;
  
  // dp[i][j] = LIS length ending at index i with j changes
  const dp = Array(n).fill().map(() => Array(k + 1).fill(1));
  
  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= k; j++) {
      for (let prev = 0; prev < i; prev++) {
        if (arr[prev] < arr[i]) {
          dp[i][j] = Math.max(dp[i][j], dp[prev][j] + 1);
        } else if (j > 0) {
          // Use a change to make arr[prev] < arr[i]
          dp[i][j] = Math.max(dp[i][j], dp[prev][j-1] + 1);
        }
      }
    }
  }
  
  const maxLength = Math.max(...dp.map(row => Math.max(...row)));
  console.log("Max LIS length with " + k + " changes: " + maxLength);
  
  return maxLength;
}

// 3. Longest Increasing Subsequence in 2D
function lis2D(points) {
  console.log("\\n=== LIS in 2D ===");
  console.log("Points:", points);
  
  // Sort by x-coordinate, then by y-coordinate
  points.sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0];
    return a[1] - b[1];
  });
  
  const n = points.length;
  if (n === 0) return 0;
  
  const dp = new Array(n).fill(1);
  
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (points[j][0] < points[i][0] && points[j][1] < points[i][1]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  
  const maxLength = Math.max(...dp);
  console.log("2D LIS length: " + maxLength);
  
  return maxLength;
}

// Test cases
console.log("=== Testing Advanced LIS Variations ===");
minOperationsToMakeIncreasing([1, 1, 1]);
lisWithKChanges([1, 2, 3, 2, 4], 1);
lis2D([[1, 1], [2, 3], [3, 2], [4, 4]]);`,
          Java: `import java.util.*;

public class AdvancedLISVariations {
    // 1. Minimum Operations to Make Array Increasing
    public static int minOperationsToMakeIncreasing(int[] arr) {
        System.out.println("=== Minimum Operations to Make Array Increasing ===");
        System.out.println("Array: " + Arrays.toString(arr));
        
        int n = arr.length;
        if (n <= 1) return 0;
        
        int operations = 0;
        int[] arrCopy = Arrays.copyOf(arr, n);
        
        for (int i = 1; i < n; i++) {
            if (arrCopy[i] <= arrCopy[i-1]) {
                int needed = arrCopy[i-1] + 1;
                operations += needed - arrCopy[i];
                arrCopy[i] = needed;
                System.out.println("  arr[" + i + "] = " + arrCopy[i] + " (increased by " + (needed - arr[i]) + ")");
            }
        }
        
        System.out.println("Minimum operations: " + operations);
        return operations;
    }
    
    // 2. Longest Increasing Subsequence with K Allowed Changes
    public static int lisWithKChanges(int[] arr, int k) {
        System.out.println("\\n=== LIS with K Allowed Changes ===");
        System.out.println("Array: " + Arrays.toString(arr));
        System.out.println("K: " + k);
        
        int n = arr.length;
        if (n == 0) return 0;
        
        // dp[i][j] = LIS length ending at index i with j changes
        int[][] dp = new int[n][k + 1];
        for (int[] row : dp) {
            Arrays.fill(row, 1);
        }
        
        for (int i = 1; i < n; i++) {
            for (int j = 0; j <= k; j++) {
                for (int prev = 0; prev < i; prev++) {
                    if (arr[prev] < arr[i]) {
                        dp[i][j] = Math.max(dp[i][j], dp[prev][j] + 1);
                    } else if (j > 0) {
                        // Use a change to make arr[prev] < arr[i]
                        dp[i][j] = Math.max(dp[i][j], dp[prev][j-1] + 1);
                    }
                }
            }
        }
        
        int maxLength = 0;
        for (int[] row : dp) {
            for (int val : row) {
                maxLength = Math.max(maxLength, val);
            }
        }
        System.out.println("Max LIS length with " + k + " changes: " + maxLength);
        
        return maxLength;
    }
    
    // 3. Longest Increasing Subsequence in 2D
    public static int lis2D(int[][] points) {
        System.out.println("\\n=== LIS in 2D ===");
        System.out.println("Points:");
        for (int[] point : points) {
            System.out.println("  " + Arrays.toString(point));
        }
        
        // Sort by x-coordinate, then by y-coordinate
        Arrays.sort(points, (a, b) -> {
            if (a[0] != b[0]) return Integer.compare(a[0], b[0]);
            return Integer.compare(a[1], b[1]);
        });
        
        int n = points.length;
        if (n == 0) return 0;
        
        int[] dp = new int[n];
        Arrays.fill(dp, 1);
        
        for (int i = 1; i < n; i++) {
            for (int j = 0; j < i; j++) {
                if (points[j][0] < points[i][0] && points[j][1] < points[i][1]) {
                    dp[i] = Math.max(dp[i], dp[j] + 1);
                }
            }
        }
        
        int maxLength = Arrays.stream(dp).max().orElse(0);
        System.out.println("2D LIS length: " + maxLength);
        
        return maxLength;
    }
    
    public static void main(String[] args) {
        System.out.println("=== Testing Advanced LIS Variations ===");
        minOperationsToMakeIncreasing(new int[]{1, 1, 1});
        lisWithKChanges(new int[]{1, 2, 3, 2, 4}, 1);
        lis2D(new int[][]{{1, 1}, {2, 3}, {3, 2}, {4, 4}});
    }
}`,
        }}
        explanation="Advanced LIS variations include minimum operations, LIS with allowed changes, and 2D LIS problems that extend the basic LIS concept."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Solve LIS variations: decreasing subsequence, bitonic subsequence, max sum increasing subsequence, and advanced problems.",
              details: [
                "Decreasing: reverse array and find LIS, or change comparison",
                "Bitonic: increasing then decreasing",
                "Max sum: track sum instead of length",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "All variations use similar DP structure as LIS, with modifications: different comparison, additional dimension, or different optimization goal.",
              keywords: [
                "LIS variations",
                "1D/2D DP",
                "subsequence",
                "optimization",
              ],
              details: [
                "Decreasing: arr[j] > arr[i] instead of <",
                "Bitonic: find LIS from both ends, combine",
                "Max sum: dp[i] = max sum instead of max length",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "1D or 2D DP array depending on variation. For 2D LIS, need 2D array for points.",
              details: [
                "Standard: 1D array dp[i]",
                "Advanced: 2D array dp[i][j] for additional constraints",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Similar to LIS: for each element, check previous elements and update DP. Variations modify comparison or optimization goal.",
              details: [
                "Decreasing: reverse comparison operator",
                "Bitonic: compute LIS from both directions",
                "Max sum: track sum instead of count",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Time O(n²) for standard variations, O(n²×k) for variations with constraints. Space O(n) or O(n×k).",
              details: [
                "Similar complexity to standard LIS",
                "Can optimize with binary search for some variations",
              ],
            },
          ],
          pattern: "1D/2D DP (LIS Variations)",
          complexity: {
            time: "O(n²) to O(n²×k)",
            space: "O(n) to O(n×k)",
          },
        }}
      />
    </div>
  );
}

function KnapsackSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-white mb-6">
        0/1 Knapsack Problem
      </h2>

      <ProblemBlock
        title="0/1 Knapsack Problem - Naive Recursive Solution"
        difficulty="Medium"
        description="Solve 0/1 knapsack problem using naive recursion (exponential time)."
        solutions={{
          JavaScript: `// 0/1 Knapsack - Naive Recursive Solution

function knapsackRecursive(weights, values, capacity) {
  console.log("=== 0/1 Knapsack - Naive Recursive ===");
  console.log("Weights:", weights);
  console.log("Values:", values);
  console.log("Capacity:", capacity);
  
  const n = weights.length;
  
  function knapsack(i, remainingCapacity) {
    console.log("\\n  knapsack(" + i + ", " + remainingCapacity + ")");
    
    // Base case: no more items or no capacity
    if (i >= n || remainingCapacity <= 0) {
      console.log("    Base case: return 0");
      return 0;
    }
    
    console.log("    Item " + i + ": weight = " + weights[i] + ", value = " + values[i]);
    
    // Option 1: Don't take the item
    const notTake = knapsack(i + 1, remainingCapacity);
    console.log("    Not taking item " + i + ": value = " + notTake);
    
    // Option 2: Take the item (if it fits)
    let take = 0;
    if (weights[i] <= remainingCapacity) {
      take = values[i] + knapsack(i + 1, remainingCapacity - weights[i]);
      console.log("    Taking item " + i + ": value = " + values[i] + " + knapsack(" + (i + 1) + ", " + (remainingCapacity - weights[i]) + ") = " + take);
    } else {
      console.log("    Item " + i + " doesn't fit, can't take");
    }
    
    const result = Math.max(notTake, take);
    console.log("    Max of not taking (" + notTake + ") and taking (" + take + ") = " + result);
    
    return result;
  }
  
  const result = knapsack(0, capacity);
  console.log("\\nResult: Maximum value = " + result);
  
  return result;
}

// Test cases
console.log("=== Testing 0/1 Knapsack Recursive ===");
const weights = [10, 20, 30];
const values = [60, 100, 120];
const capacity = 50;

knapsackRecursive(weights, values, capacity);`,
          Java: `import java.util.*;

public class KnapsackRecursive {
    // 0/1 Knapsack - Naive Recursive Solution
    public static int knapsackRecursive(int[] weights, int[] values, int capacity) {
        System.out.println("=== 0/1 Knapsack - Naive Recursive ===");
        System.out.println("Weights: " + Arrays.toString(weights));
        System.out.println("Values: " + Arrays.toString(values));
        System.out.println("Capacity: " + capacity);
        
        int n = weights.length;
        int result = knapsack(weights, values, 0, capacity, n);
        System.out.println("\\nResult: Maximum value = " + result);
        
        return result;
    }
    
    private static int knapsack(int[] weights, int[] values, int i, int remainingCapacity, int n) {
        System.out.println("\\n  knapsack(" + i + ", " + remainingCapacity + ")");
        
        // Base case: no more items or no capacity
        if (i >= n || remainingCapacity <= 0) {
            System.out.println("    Base case: return 0");
            return 0;
        }
        
        System.out.println("    Item " + i + ": weight = " + weights[i] + ", value = " + values[i]);
        
        // Option 1: Don't take the item
        int notTake = knapsack(weights, values, i + 1, remainingCapacity, n);
        System.out.println("    Not taking item " + i + ": value = " + notTake);
        
        // Option 2: Take the item (if it fits)
        int take = 0;
        if (weights[i] <= remainingCapacity) {
            take = values[i] + knapsack(weights, values, i + 1, remainingCapacity - weights[i], n);
            System.out.println("    Taking item " + i + ": value = " + values[i] + " + knapsack(" + (i + 1) + ", " + (remainingCapacity - weights[i]) + ") = " + take);
        } else {
            System.out.println("    Item " + i + " doesn't fit, can't take");
        }
        
        int result = Math.max(notTake, take);
        System.out.println("    Max of not taking (" + notTake + ") and taking (" + take + ") = " + result);
        
        return result;
    }
    
    public static void main(String[] args) {
        System.out.println("=== Testing 0/1 Knapsack Recursive ===");
        int[] weights = {10, 20, 30};
        int[] values = {60, 100, 120};
        int capacity = 50;
        
        knapsackRecursive(weights, values, capacity);
    }
}`,
        }}
        explanation="Naive recursive solution tries all possible combinations. For each item, we either take it or don't take it. Time: O(2^n), Space: O(n)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Given items with weights and values, maximize value in knapsack of capacity W. Each item can be taken at most once (0/1).",
              details: [
                "0/1: each item either taken (1) or not (0)",
                "Cannot take fraction of item",
                "Goal: maximize value within weight capacity",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "For each item, two choices: take it or skip it. Recursively try both options and take maximum.",
              keywords: [
                "0/1 knapsack",
                "recursion",
                "exponential time",
                "decision problem",
              ],
              details: [
                "State: knapsack(index, remainingCapacity)",
                "Two choices: include item or exclude item",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Recursion with base cases. No extra structure needed for naive version.",
              details: [
                "Base case: no items left or capacity exhausted",
                "Try both including and excluding current item",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "If index<0 or capacity<=0, return 0. If weight[index]>capacity, skip item: return knapsack(index-1, capacity). Else return max(value[index]+knapsack(index-1, capacity-weight[index]), knapsack(index-1, capacity)).",
              details: [
                "Include: add value, reduce capacity",
                "Exclude: keep capacity, move to next item",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Time O(2^n) exponential - each item branches into two. Space O(n) for recursion stack. Needs memoization/DP to optimize.",
              details: [
                "This naive version demonstrates the problem structure",
                "DP solution reduces to O(n×W) time",
              ],
            },
          ],
          pattern: "0/1 Knapsack (Naive Recursion)",
          complexity: {
            time: "O(2^n)",
            space: "O(n)",
          },
        }}
      />

      <ProblemBlock
        title="0/1 Knapsack Problem - DP Solution"
        difficulty="Medium"
        description="Solve 0/1 knapsack problem using dynamic programming with memoization."
        solutions={{
          JavaScript: `// 0/1 Knapsack - DP Solution

function knapsackDP(weights, values, capacity) {
  console.log("=== 0/1 Knapsack - DP Solution ===");
  console.log("Weights:", weights);
  console.log("Values:", values);
  console.log("Capacity:", capacity);
  
  const n = weights.length;
  
  // Create DP table: dp[i][w] = max value using first i items with capacity w
  const dp = Array(n + 1).fill().map(() => Array(capacity + 1).fill(0));
  
  console.log("\\nStep 1: Initialize DP table");
  console.log("  dp[i][w] = max value using first i items with capacity w");
  
  // Fill DP table
  for (let i = 1; i <= n; i++) {
    for (let w = 1; w <= capacity; w++) {
      console.log("\\n  Computing dp[" + i + "][" + w + "]:");
      console.log("    Item " + (i-1) + ": weight = " + weights[i-1] + ", value = " + values[i-1]);
      
      // Option 1: Don't take the item
      const notTake = dp[i-1][w];
      console.log("    Not taking: dp[" + (i-1) + "][" + w + "] = " + notTake);
      
      // Option 2: Take the item (if it fits)
      let take = 0;
      if (weights[i-1] <= w) {
        take = values[i-1] + dp[i-1][w - weights[i-1]];
        console.log("    Taking: " + values[i-1] + " + dp[" + (i-1) + "][" + (w - weights[i-1]) + "] = " + values[i-1] + " + " + dp[i-1][w - weights[i-1]] + " = " + take);
      } else {
        console.log("    Item doesn't fit, can't take");
      }
      
      dp[i][w] = Math.max(notTake, take);
      console.log("    Max of not taking (" + notTake + ") and taking (" + take + ") = " + dp[i][w]);
    }
  }
  
  console.log("\\nStep 2: Final DP table");
  for (let i = 0; i <= n; i++) {
    console.log("  " + dp[i].join(" "));
  }
  
  console.log("\\nResult: Maximum value = " + dp[n][capacity]);
  
  return dp[n][capacity];
}

// Space-optimized version
function knapsackDPSpaceOptimized(weights, values, capacity) {
  console.log("\\n=== 0/1 Knapsack - Space Optimized ===");
  console.log("Weights:", weights);
  console.log("Values:", values);
  console.log("Capacity:", capacity);
  
  const n = weights.length;
  
  // Use only one row
  let prev = new Array(capacity + 1).fill(0);
  let curr = new Array(capacity + 1).fill(0);
  
  console.log("\\nStep 1: Initialize with zeros");
  console.log("  prev = " + prev.join(" "));
  
  for (let i = 1; i <= n; i++) {
    console.log("\\n  Processing item " + (i-1) + ": weight = " + weights[i-1] + ", value = " + values[i-1]);
    
    for (let w = 0; w <= capacity; w++) {
      if (weights[i-1] <= w) {
        curr[w] = Math.max(prev[w], values[i-1] + prev[w - weights[i-1]]);
      } else {
        curr[w] = prev[w];
      }
    }
    
    console.log("  curr = " + curr.join(" "));
    
    // Swap arrays
    [prev, curr] = [curr, prev];
  }
  
  console.log("\\nResult: Maximum value = " + prev[capacity]);
  
  return prev[capacity];
}

// Test cases
console.log("=== Testing 0/1 Knapsack DP ===");
const weights = [10, 20, 30];
const values = [60, 100, 120];
const capacity = 50;

knapsackDP(weights, values, capacity);
knapsackDPSpaceOptimized(weights, values, capacity);`,
          Java: `import java.util.*;

public class KnapsackDP {
    // 0/1 Knapsack - DP Solution
    public static int knapsackDP(int[] weights, int[] values, int capacity) {
        System.out.println("=== 0/1 Knapsack - DP Solution ===");
        System.out.println("Weights: " + Arrays.toString(weights));
        System.out.println("Values: " + Arrays.toString(values));
        System.out.println("Capacity: " + capacity);
        
        int n = weights.length;
        
        // Create DP table: dp[i][w] = max value using first i items with capacity w
        int[][] dp = new int[n + 1][capacity + 1];
        
        System.out.println("\\nStep 1: Initialize DP table");
        System.out.println("  dp[i][w] = max value using first i items with capacity w");
        
        // Fill DP table
        for (int i = 1; i <= n; i++) {
            for (int w = 1; w <= capacity; w++) {
                System.out.println("\\n  Computing dp[" + i + "][" + w + "]:");
                System.out.println("    Item " + (i-1) + ": weight = " + weights[i-1] + ", value = " + values[i-1]);
                
                // Option 1: Don't take the item
                int notTake = dp[i-1][w];
                System.out.println("    Not taking: dp[" + (i-1) + "][" + w + "] = " + notTake);
                
                // Option 2: Take the item (if it fits)
                int take = 0;
                if (weights[i-1] <= w) {
                    take = values[i-1] + dp[i-1][w - weights[i-1]];
                    System.out.println("    Taking: " + values[i-1] + " + dp[" + (i-1) + "][" + (w - weights[i-1]) + "] = " + values[i-1] + " + " + dp[i-1][w - weights[i-1]] + " = " + take);
                } else {
                    System.out.println("    Item doesn't fit, can't take");
                }
                
                dp[i][w] = Math.max(notTake, take);
                System.out.println("    Max of not taking (" + notTake + ") and taking (" + take + ") = " + dp[i][w]);
            }
        }
        
        System.out.println("\\nStep 2: Final DP table");
        for (int i = 0; i <= n; i++) {
            System.out.println("  " + Arrays.toString(dp[i]));
        }
        
        System.out.println("\\nResult: Maximum value = " + dp[n][capacity]);
        
        return dp[n][capacity];
    }
    
    // Space-optimized version
    public static int knapsackDPSpaceOptimized(int[] weights, int[] values, int capacity) {
        System.out.println("\\n=== 0/1 Knapsack - Space Optimized ===");
        System.out.println("Weights: " + Arrays.toString(weights));
        System.out.println("Values: " + Arrays.toString(values));
        System.out.println("Capacity: " + capacity);
        
        int n = weights.length;
        
        // Use only one row
        int[] prev = new int[capacity + 1];
        int[] curr = new int[capacity + 1];
        
        System.out.println("\\nStep 1: Initialize with zeros");
        System.out.println("  prev = " + Arrays.toString(prev));
        
        for (int i = 1; i <= n; i++) {
            System.out.println("\\n  Processing item " + (i-1) + ": weight = " + weights[i-1] + ", value = " + values[i-1]);
            
            for (int w = 0; w <= capacity; w++) {
                if (weights[i-1] <= w) {
                    curr[w] = Math.max(prev[w], values[i-1] + prev[w - weights[i-1]]);
                } else {
                    curr[w] = prev[w];
                }
            }
            
            System.out.println("  curr = " + Arrays.toString(curr));
            
            // Swap arrays
            int[] temp = prev;
            prev = curr;
            curr = temp;
        }
        
        System.out.println("\\nResult: Maximum value = " + prev[capacity]);
        
        return prev[capacity];
    }
    
    public static void main(String[] args) {
        System.out.println("=== Testing 0/1 Knapsack DP ===");
        int[] weights = {10, 20, 30};
        int[] values = {60, 100, 120};
        int capacity = 50;
        
        knapsackDP(weights, values, capacity);
        knapsackDPSpaceOptimized(weights, values, capacity);
    }
}`,
        }}
        explanation="DP solution builds a table where dp[i][w] represents maximum value using first i items with capacity w. Time: O(n×W), Space: O(n×W) or O(W) with optimization."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Same 0/1 knapsack problem: maximize value in knapsack. Optimize naive recursion with DP.",
              details: [
                "Memoization: cache results for (index, capacity) pairs",
                "Tabulation: build table bottom-up",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "2D DP: dp[i][w] = maximum value using first i items with capacity w. For each item, try including and excluding.",
              keywords: ["0/1 knapsack", "2D DP", "memoization", "tabulation"],
              details: [
                "State: maximum value for (items, capacity)",
                "Recurrence: dp[i][w] = max(dp[i-1][w], value[i]+dp[i-1][w-weight[i]])",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "2D array dp[n+1][W+1]. Initialize first row and column to 0. Can optimize space to O(W) using two rows.",
              details: [
                "Memoization: hash map with key '(i,w)'",
                "Tabulation: 2D array, can optimize to 1D",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "For i from 1 to n, for w from 1 to W: if weight[i-1]<=w, dp[i][w]=max(dp[i-1][w], value[i-1]+dp[i-1][w-weight[i-1]]). Else dp[i][w]=dp[i-1][w]. Return dp[n][W].",
              details: [
                "Include: add value, reduce capacity",
                "Exclude: keep previous value",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Time O(n×W) - fill all cells. Space O(n×W) for table, O(W) with space optimization using rolling array.",
              details: [
                "DP reduces time from exponential to polynomial",
                "Space optimization uses only two rows",
              ],
            },
          ],
          pattern: "2D DP (0/1 Knapsack)",
          complexity: {
            time: "O(n×W)",
            space: "O(n×W) or O(W) optimized",
          },
        }}
      />

      <ProblemBlock
        title="Minimum Jumps to reach at end"
        difficulty="Medium"
        description="Find the minimum number of jumps needed to reach the end of an array where each element represents the maximum jump length from that position."
        solutions={{
          JavaScript: `// Minimum Jumps to reach at end

function minJumpsToEnd(arr) {
  console.log("=== Minimum Jumps to reach at end ===");
  console.log("Array:", arr);
  
  const n = arr.length;
  
  if (n <= 1) {
    console.log("Array length <= 1, no jumps needed");
    return 0;
  }
  
  if (arr[0] === 0) {
    console.log("Cannot move from first position");
    return -1;
  }
  
  // Create DP array: dp[i] = minimum jumps to reach index i
  const dp = new Array(n).fill(Infinity);
  dp[0] = 0; // 0 jumps to reach first position
  
  console.log("\\nStep 1: Initialize DP array");
  console.log("  dp[0] = 0 (0 jumps to reach index 0)");
  
  for (let i = 1; i < n; i++) {
    console.log("\\n  Computing dp[" + i + "]:");
    
    for (let j = 0; j < i; j++) {
      console.log("    Checking if we can reach " + i + " from " + j);
      console.log("      arr[" + j + "] = " + arr[j] + ", distance = " + (i - j));
      
      if (j + arr[j] >= i && dp[j] !== Infinity) {
        const jumps = dp[j] + 1;
        console.log("      Can reach! dp[" + j + "] + 1 = " + dp[j] + " + 1 = " + jumps);
        dp[i] = Math.min(dp[i], jumps);
      } else {
        console.log("      Cannot reach from " + j);
      }
    }
    
    console.log("  Final dp[" + i + "] = " + dp[i]);
  }
  
  console.log("\\nFinal DP array:", dp);
  console.log("Result: Minimum jumps = " + (dp[n-1] === Infinity ? "Impossible" : dp[n-1]));
  
  return dp[n-1] === Infinity ? -1 : dp[n-1];
}

// Optimized version using greedy approach
function minJumpsGreedy(arr) {
  console.log("\\n=== Minimum Jumps - Greedy Approach ===");
  console.log("Array:", arr);
  
  const n = arr.length;
  
  if (n <= 1) return 0;
  if (arr[0] === 0) return -1;
  
  let jumps = 1;
  let maxReach = arr[0];
  let steps = arr[0];
  
  console.log("\\nInitial: jumps = " + jumps + ", maxReach = " + maxReach + ", steps = " + steps);
  
  for (let i = 1; i < n; i++) {
    console.log("\\nPosition " + i + ":");
    console.log("  arr[" + i + "] = " + arr[i]);
    
    if (i === n - 1) {
      console.log("  Reached end! Total jumps = " + jumps);
      return jumps;
    }
    
    maxReach = Math.max(maxReach, i + arr[i]);
    console.log("  Updated maxReach = " + maxReach);
    
    steps--;
    console.log("  Steps remaining = " + steps);
    
    if (steps === 0) {
      jumps++;
      console.log("  Need to jump! jumps = " + jumps);
      
      if (i >= maxReach) {
        console.log("  Cannot reach further, impossible");
        return -1;
      }
      
      steps = maxReach - i;
      console.log("  New steps = " + steps);
    }
  }
  
  return jumps;
}

// Test cases
console.log("=== Testing Minimum Jumps ===");
minJumpsToEnd([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]);
minJumpsGreedy([2, 3, 1, 1, 4]);`,
          Java: `import java.util.*;

public class MinJumpsToEnd {
    // Minimum Jumps to reach at end
    public static int minJumpsToEnd(int[] arr) {
        System.out.println("=== Minimum Jumps to reach at end ===");
        System.out.println("Array: " + Arrays.toString(arr));
        
        int n = arr.length;
        
        if (n <= 1) {
            System.out.println("Array length <= 1, no jumps needed");
            return 0;
        }
        
        if (arr[0] == 0) {
            System.out.println("Cannot move from first position");
            return -1;
        }
        
        // Create DP array: dp[i] = minimum jumps to reach index i
        int[] dp = new int[n];
        Arrays.fill(dp, Integer.MAX_VALUE);
        dp[0] = 0; // 0 jumps to reach first position
        
        System.out.println("\\nStep 1: Initialize DP array");
        System.out.println("  dp[0] = 0 (0 jumps to reach index 0)");
        
        for (int i = 1; i < n; i++) {
            System.out.println("\\n  Computing dp[" + i + "]:");
            
            for (int j = 0; j < i; j++) {
                System.out.println("    Checking if we can reach " + i + " from " + j);
                System.out.println("      arr[" + j + "] = " + arr[j] + ", distance = " + (i - j));
                
                if (j + arr[j] >= i && dp[j] != Integer.MAX_VALUE) {
                    int jumps = dp[j] + 1;
                    System.out.println("      Can reach! dp[" + j + "] + 1 = " + dp[j] + " + 1 = " + jumps);
                    dp[i] = Math.min(dp[i], jumps);
                } else {
                    System.out.println("      Cannot reach from " + j);
                }
            }
            
            System.out.println("  Final dp[" + i + "] = " + (dp[i] == Integer.MAX_VALUE ? "Impossible" : dp[i]));
        }
        
        System.out.println("\\nFinal DP array: " + Arrays.toString(dp));
        System.out.println("Result: Minimum jumps = " + (dp[n-1] == Integer.MAX_VALUE ? "Impossible" : dp[n-1]));
        
        return dp[n-1] == Integer.MAX_VALUE ? -1 : dp[n-1];
    }
    
    // Optimized version using greedy approach
    public static int minJumpsGreedy(int[] arr) {
        System.out.println("\\n=== Minimum Jumps - Greedy Approach ===");
        System.out.println("Array: " + Arrays.toString(arr));
        
        int n = arr.length;
        
        if (n <= 1) return 0;
        if (arr[0] == 0) return -1;
        
        int jumps = 1;
        int maxReach = arr[0];
        int steps = arr[0];
        
        System.out.println("\\nInitial: jumps = " + jumps + ", maxReach = " + maxReach + ", steps = " + steps);
        
        for (int i = 1; i < n; i++) {
            System.out.println("\\nPosition " + i + ":");
            System.out.println("  arr[" + i + "] = " + arr[i]);
            
            if (i == n - 1) {
                System.out.println("  Reached end! Total jumps = " + jumps);
                return jumps;
            }
            
            maxReach = Math.max(maxReach, i + arr[i]);
            System.out.println("  Updated maxReach = " + maxReach);
            
            steps--;
            System.out.println("  Steps remaining = " + steps);
            
            if (steps == 0) {
                jumps++;
                System.out.println("  Need to jump! jumps = " + jumps);
                
                if (i >= maxReach) {
                    System.out.println("  Cannot reach further, impossible");
                    return -1;
                }
                
                steps = maxReach - i;
                System.out.println("  New steps = " + steps);
            }
        }
        
        return jumps;
    }
    
    public static void main(String[] args) {
        System.out.println("=== Testing Minimum Jumps ===");
        minJumpsToEnd(new int[]{1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9});
        minJumpsGreedy(new int[]{2, 3, 1, 1, 4});
    }
}`,
        }}
        explanation="DP solution: for each position, check all previous positions that can reach it and take minimum jumps. Greedy approach: track maximum reachable position and steps remaining. Time: O(n²) DP, O(n) Greedy."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Find minimum jumps to reach end of array. Each element arr[i] represents maximum jump length from position i.",
              details: [
                "Example: [2,3,1,1,4] → answer=2 (0→1→4)",
                "Return -1 if end is unreachable",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "DP: dp[i] = minimum jumps to reach index i. For each position, check all previous positions that can reach it. Greedy: track max reach and steps.",
              keywords: ["1D DP", "greedy", "jump game", "optimization"],
              details: [
                "DP: check all previous reachable positions",
                "Greedy: optimal substructure allows O(n) solution",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "DP: 1D array dp[i] stores minimum jumps to index i. Greedy: variables for maxReach, steps, jumps.",
              details: [
                "DP: initialize dp[0]=0, others=Infinity",
                "Greedy: track current maximum reachable position",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "DP: for i from 1 to n-1, for j from 0 to i-1, if j+arr[j]>=i, dp[i]=min(dp[i], 1+dp[j]). Greedy: for each position, update maxReach, decrement steps. If steps==0, increment jumps.",
              details: [
                "DP: check all previous positions",
                "Greedy: make jump when current steps exhausted",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "DP: Time O(n²), Space O(n). Greedy: Time O(n), Space O(1). Greedy is optimal for this problem.",
              details: [
                "Greedy approach is more efficient",
                "DP approach is more intuitive but slower",
              ],
            },
          ],
          pattern: "1D DP / Greedy (Jump Game)",
          complexity: {
            time: "O(n²) DP, O(n) Greedy",
            space: "O(n) DP, O(1) Greedy",
          },
        }}
      />

      <ProblemBlock
        title="Optimal Strategy for a Game"
        difficulty="Hard"
        description="Two players take turns picking numbers from either end of an array. Find the maximum value the first player can guarantee."
        solutions={{
          JavaScript: `// Optimal Strategy for a Game

function optimalStrategyForGame(arr) {
  console.log("=== Optimal Strategy for a Game ===");
  console.log("Array:", arr);
  
  const n = arr.length;
  
  // Create DP table: dp[i][j] = maximum value player can get from subarray [i...j]
  const dp = Array(n).fill().map(() => Array(n).fill(0));
  
  console.log("\\nStep 1: Initialize DP table");
  console.log("  dp[i][j] = maximum value from subarray [i...j]");
  
  // Fill diagonal (single elements)
  for (let i = 0; i < n; i++) {
    dp[i][i] = arr[i];
    console.log("  dp[" + i + "][" + i + "] = " + arr[i] + " (single element)");
  }
  
  // Fill for subarrays of length 2
  for (let i = 0; i < n - 1; i++) {
    dp[i][i + 1] = Math.max(arr[i], arr[i + 1]);
    console.log("  dp[" + i + "][" + (i + 1) + "] = max(" + arr[i] + ", " + arr[i + 1] + ") = " + dp[i][i + 1]);
  }
  
  console.log("\\nStep 2: Fill DP table for longer subarrays");
  
  // Fill for subarrays of length 3 and more
  for (let length = 3; length <= n; length++) {
    for (let i = 0; i <= n - length; i++) {
      const j = i + length - 1;
      console.log("\\n  Computing dp[" + i + "][" + j + "] (length " + length + "):");
      
      // Option 1: Take left element
      const takeLeft = arr[i] + Math.min(dp[i + 2][j], dp[i + 1][j - 1]);
      console.log("    Take left " + arr[i] + ": " + arr[i] + " + min(dp[" + (i + 2) + "][" + j + "], dp[" + (i + 1) + "][" + (j - 1) + "]) = " + arr[i] + " + min(" + dp[i + 2][j] + ", " + dp[i + 1][j - 1] + ") = " + takeLeft);
      
      // Option 2: Take right element
      const takeRight = arr[j] + Math.min(dp[i + 1][j - 1], dp[i][j - 2]);
      console.log("    Take right " + arr[j] + ": " + arr[j] + " + min(dp[" + (i + 1) + "][" + (j - 1) + "], dp[" + i + "][" + (j - 2) + "]) = " + arr[j] + " + min(" + dp[i + 1][j - 1] + ", " + dp[i][j - 2] + ") = " + takeRight);
      
      dp[i][j] = Math.max(takeLeft, takeRight);
      console.log("    Max of take left (" + takeLeft + ") and take right (" + takeRight + ") = " + dp[i][j]);
    }
  }
  
  console.log("\\nStep 3: Final DP table");
  for (let i = 0; i < n; i++) {
    console.log("  " + dp[i].join(" "));
  }
  
  console.log("\\nResult: Maximum value player 1 can guarantee = " + dp[0][n - 1]);
  
  return dp[0][n - 1];
}

// Test cases
console.log("=== Testing Optimal Strategy for a Game ===");
optimalStrategyForGame([8, 15, 3, 7]);
optimalStrategyForGame([2, 2, 2, 2]);`,
          Java: `import java.util.*;

public class OptimalStrategyForGame {
    // Optimal Strategy for a Game
    public static int optimalStrategyForGame(int[] arr) {
        System.out.println("=== Optimal Strategy for a Game ===");
        System.out.println("Array: " + Arrays.toString(arr));
        
        int n = arr.length;
        
        // Create DP table: dp[i][j] = maximum value player can get from subarray [i...j]
        int[][] dp = new int[n][n];
        
        System.out.println("\\nStep 1: Initialize DP table");
        System.out.println("  dp[i][j] = maximum value from subarray [i...j]");
        
        // Fill diagonal (single elements)
        for (int i = 0; i < n; i++) {
            dp[i][i] = arr[i];
            System.out.println("  dp[" + i + "][" + i + "] = " + arr[i] + " (single element)");
        }
        
        // Fill for subarrays of length 2
        for (int i = 0; i < n - 1; i++) {
            dp[i][i + 1] = Math.max(arr[i], arr[i + 1]);
            System.out.println("  dp[" + i + "][" + (i + 1) + "] = max(" + arr[i] + ", " + arr[i + 1] + ") = " + dp[i][i + 1]);
        }
        
        System.out.println("\\nStep 2: Fill DP table for longer subarrays");
        
        // Fill for subarrays of length 3 and more
        for (int length = 3; length <= n; length++) {
            for (int i = 0; i <= n - length; i++) {
                int j = i + length - 1;
                System.out.println("\\n  Computing dp[" + i + "][" + j + "] (length " + length + "):");
                
                // Option 1: Take left element
                int takeLeft = arr[i] + Math.min(dp[i + 2][j], dp[i + 1][j - 1]);
                System.out.println("    Take left " + arr[i] + ": " + arr[i] + " + min(dp[" + (i + 2) + "][" + j + "], dp[" + (i + 1) + "][" + (j - 1) + "]) = " + arr[i] + " + min(" + dp[i + 2][j] + ", " + dp[i + 1][j - 1] + ") = " + takeLeft);
                
                // Option 2: Take right element
                int takeRight = arr[j] + Math.min(dp[i + 1][j - 1], dp[i][j - 2]);
                System.out.println("    Take right " + arr[j] + ": " + arr[j] + " + min(dp[" + (i + 1) + "][" + (j - 1) + "], dp[" + i + "][" + (j - 2) + "]) = " + arr[j] + " + min(" + dp[i + 1][j - 1] + ", " + dp[i][j - 2] + ") = " + takeRight);
                
                dp[i][j] = Math.max(takeLeft, takeRight);
                System.out.println("    Max of take left (" + takeLeft + ") and take right (" + takeRight + ") = " + dp[i][j]);
            }
        }
        
        System.out.println("\\nStep 3: Final DP table");
        for (int i = 0; i < n; i++) {
            System.out.println("  " + Arrays.toString(dp[i]));
        }
        
        System.out.println("\\nResult: Maximum value player 1 can guarantee = " + dp[0][n - 1]);
        
        return dp[0][n - 1];
    }
    
    public static void main(String[] args) {
        System.out.println("=== Testing Optimal Strategy for a Game ===");
        optimalStrategyForGame(new int[]{8, 15, 3, 7});
        optimalStrategyForGame(new int[]{2, 2, 2, 2});
    }
}`,
        }}
        explanation="DP solution: for each subarray, player can take either end. After taking, opponent will take optimally, so we get minimum of remaining subarrays. Time: O(n²), Space: O(n²)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Two players take turns picking from either end of array. First player wants to maximize sum. Both play optimally.",
              details: [
                "Example: [5,3,7,10] → first player can guarantee 15",
                "Both players play optimally",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "2D DP: dp[i][j] = maximum value first player can get from subarray arr[i..j]. Take either end, opponent takes optimally from remaining.",
              keywords: ["2D DP", "game theory", "optimal play", "minimax"],
              details: [
                "State: maximum value for subarray",
                "After first player's move, opponent plays optimally",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "2D array dp[i][j] stores maximum value for subarray arr[i..j]. Initialize dp[i][i]=arr[i].",
              details: [
                "Base case: single element subarray",
                "Fill table for increasing subarray lengths",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "For length L from 2 to n: for i from 0 to n-L, j=i+L-1. If take arr[i]: value = arr[i] + min(dp[i+2][j], dp[i+1][j-1]). If take arr[j]: value = arr[j] + min(dp[i+1][j-1], dp[i][j-2]). dp[i][j] = max of both.",
              details: [
                "Take left: opponent gets best of remaining",
                "Take right: opponent gets best of remaining",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Time O(n²) - fill all subarrays. Space O(n²) for table. Can optimize space to O(n) using 1D array with careful indexing.",
              details: [
                "Classic game theory DP problem",
                "Space optimization is complex but possible",
              ],
            },
          ],
          pattern: "2D DP (Game Theory)",
          complexity: {
            time: "O(n²)",
            space: "O(n²)",
          },
        }}
      />

      <ProblemBlock
        title="Egg Dropping Puzzle - Part 1"
        difficulty="Hard"
        description="Find the minimum number of attempts needed to determine the critical floor where an egg breaks."
        solutions={{
          JavaScript: `// Egg Dropping Puzzle - Part 1

function eggDroppingPuzzle(eggs, floors) {
  console.log("=== Egg Dropping Puzzle - Part 1 ===");
  console.log("Eggs:", eggs);
  console.log("Floors:", floors);
  
  // Create DP table: dp[i][j] = minimum attempts with i eggs and j floors
  const dp = Array(eggs + 1).fill().map(() => Array(floors + 1).fill(0));
  
  console.log("\\nStep 1: Initialize base cases");
  
  // Base case: 0 floors = 0 attempts
  for (let i = 0; i <= eggs; i++) {
    dp[i][0] = 0;
    console.log("  dp[" + i + "][0] = 0 (0 floors)");
  }
  
  // Base case: 1 floor = 1 attempt
  for (let i = 1; i <= eggs; i++) {
    dp[i][1] = 1;
    console.log("  dp[" + i + "][1] = 1 (1 floor)");
  }
  
  // Base case: 1 egg = floor number attempts
  for (let j = 1; j <= floors; j++) {
    dp[1][j] = j;
    console.log("  dp[1][" + j + "] = " + j + " (1 egg)");
  }
  
  console.log("\\nStep 2: Fill DP table");
  
  for (let i = 2; i <= eggs; i++) {
    for (let j = 2; j <= floors; j++) {
      console.log("\\n  Computing dp[" + i + "][" + j + "]:");
      
      let minAttempts = Infinity;
      
      // Try dropping from each floor k
      for (let k = 1; k <= j; k++) {
        console.log("    Trying floor " + k + ":");
        
        // If egg breaks, we have i-1 eggs and k-1 floors below
        const breaks = dp[i - 1][k - 1];
        console.log("      If breaks: dp[" + (i - 1) + "][" + (k - 1) + "] = " + breaks);
        
        // If egg doesn't break, we have i eggs and j-k floors above
        const notBreaks = dp[i][j - k];
        console.log("      If not breaks: dp[" + i + "][" + (j - k) + "] = " + notBreaks);
        
        // We need to consider worst case (maximum of both scenarios)
        const attempts = 1 + Math.max(breaks, notBreaks);
        console.log("      Attempts: 1 + max(" + breaks + ", " + notBreaks + ") = " + attempts);
        
        minAttempts = Math.min(minAttempts, attempts);
      }
      
      dp[i][j] = minAttempts;
      console.log("  Final dp[" + i + "][" + j + "] = " + minAttempts);
    }
  }
  
  console.log("\\nStep 3: Final DP table");
  for (let i = 0; i <= eggs; i++) {
    console.log("  " + dp[i].join(" "));
  }
  
  console.log("\\nResult: Minimum attempts = " + dp[eggs][floors]);
  
  return dp[eggs][floors];
}

// Test cases
console.log("=== Testing Egg Dropping Puzzle ===");
eggDroppingPuzzle(2, 10);
eggDroppingPuzzle(3, 14);`,
          Java: `import java.util.*;

public class EggDroppingPuzzle {
    // Egg Dropping Puzzle - Part 1
    public static int eggDroppingPuzzle(int eggs, int floors) {
        System.out.println("=== Egg Dropping Puzzle - Part 1 ===");
        System.out.println("Eggs: " + eggs);
        System.out.println("Floors: " + floors);
        
        // Create DP table: dp[i][j] = minimum attempts with i eggs and j floors
        int[][] dp = new int[eggs + 1][floors + 1];
        
        System.out.println("\\nStep 1: Initialize base cases");
        
        // Base case: 0 floors = 0 attempts
        for (int i = 0; i <= eggs; i++) {
            dp[i][0] = 0;
            System.out.println("  dp[" + i + "][0] = 0 (0 floors)");
        }
        
        // Base case: 1 floor = 1 attempt
        for (int i = 1; i <= eggs; i++) {
            dp[i][1] = 1;
            System.out.println("  dp[" + i + "][1] = 1 (1 floor)");
        }
        
        // Base case: 1 egg = floor number attempts
        for (int j = 1; j <= floors; j++) {
            dp[1][j] = j;
            System.out.println("  dp[1][" + j + "] = " + j + " (1 egg)");
        }
        
        System.out.println("\\nStep 2: Fill DP table");
        
        for (int i = 2; i <= eggs; i++) {
            for (int j = 2; j <= floors; j++) {
                System.out.println("\\n  Computing dp[" + i + "][" + j + "]:");
                
                int minAttempts = Integer.MAX_VALUE;
                
                // Try dropping from each floor k
                for (int k = 1; k <= j; k++) {
                    System.out.println("    Trying floor " + k + ":");
                    
                    // If egg breaks, we have i-1 eggs and k-1 floors below
                    int breaks = dp[i - 1][k - 1];
                    System.out.println("      If breaks: dp[" + (i - 1) + "][" + (k - 1) + "] = " + breaks);
                    
                    // If egg doesn't break, we have i eggs and j-k floors above
                    int notBreaks = dp[i][j - k];
                    System.out.println("      If not breaks: dp[" + i + "][" + (j - k) + "] = " + notBreaks);
                    
                    // We need to consider worst case (maximum of both scenarios)
                    int attempts = 1 + Math.max(breaks, notBreaks);
                    System.out.println("      Attempts: 1 + max(" + breaks + ", " + notBreaks + ") = " + attempts);
                    
                    minAttempts = Math.min(minAttempts, attempts);
                }
                
                dp[i][j] = minAttempts;
                System.out.println("  Final dp[" + i + "][" + j + "] = " + minAttempts);
            }
        }
        
        System.out.println("\\nStep 3: Final DP table");
        for (int i = 0; i <= eggs; i++) {
            System.out.println("  " + Arrays.toString(dp[i]));
        }
        
        System.out.println("\\nResult: Minimum attempts = " + dp[eggs][floors]);
        
        return dp[eggs][floors];
    }
    
    public static void main(String[] args) {
        System.out.println("=== Testing Egg Dropping Puzzle ===");
        eggDroppingPuzzle(2, 10);
        eggDroppingPuzzle(3, 14);
    }
}`,
        }}
        explanation="DP solution: for each floor, consider both scenarios (egg breaks or doesn't break) and take maximum. Then take minimum over all floors. Time: O(eggs×floors²), Space: O(eggs×floors)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Find minimum attempts to determine critical floor where egg breaks. Have k eggs and n floors. Need to find critical floor with minimum attempts.",
              details: [
                "If egg breaks at floor x, critical floor is <= x",
                "If egg doesn't break, critical floor is > x",
                "Goal: minimize worst-case attempts",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "2D DP: dp[i][j] = minimum attempts with i eggs and j floors. For each floor, try dropping egg, consider both outcomes, take maximum (worst case), then take minimum over floors.",
              keywords: ["2D DP", "egg dropping", "minimax", "optimization"],
              details: [
                "State: minimum attempts for (eggs, floors)",
                "For each floor, two outcomes: break or not break",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "2D array dp[eggs+1][floors+1]. Initialize dp[1][j]=j (1 egg needs j attempts), dp[i][0]=0, dp[i][1]=1.",
              details: [
                "Base cases: 0 floors = 0 attempts, 1 floor = 1 attempt",
                "1 egg: need to try each floor from bottom",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "For i from 2 to eggs, for j from 2 to floors: for k from 1 to j, attempts = 1 + max(dp[i-1][k-1] (breaks), dp[i][j-k] (doesn't break)). dp[i][j] = min(attempts) over all k.",
              details: [
                "Try each floor k as drop point",
                "Worst case: take maximum of both outcomes",
                "Best strategy: take minimum over all floors",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Time O(eggs×floors²) - for each (eggs, floors), try all floors. Space O(eggs×floors) for table. Can optimize with binary search to O(eggs×floors×log(floors)).",
              details: [
                "Classic minimax DP problem",
                "Binary search optimization reduces inner loop",
              ],
            },
          ],
          pattern: "2D DP (Minimax)",
          complexity: {
            time: "O(eggs×floors²)",
            space: "O(eggs×floors)",
          },
        }}
      />

      <ProblemBlock
        title="Egg Dropping Puzzle - Part 2"
        difficulty="Hard"
        description="Optimized egg dropping solution using binary search approach."
        solutions={{
          JavaScript: `// Egg Dropping Puzzle - Part 2 (Optimized)

function eggDroppingOptimized(eggs, floors) {
  console.log("=== Egg Dropping Puzzle - Part 2 (Optimized) ===");
  console.log("Eggs:", eggs);
  console.log("Floors:", floors);
  
  // Create DP table: dp[i][j] = minimum attempts with i eggs and j floors
  const dp = Array(eggs + 1).fill().map(() => Array(floors + 1).fill(0));
  
  console.log("\\nStep 1: Initialize base cases");
  
  // Base cases
  for (let i = 0; i <= eggs; i++) {
    dp[i][0] = 0;
    dp[i][1] = 1;
  }
  
  for (let j = 1; j <= floors; j++) {
    dp[1][j] = j;
  }
  
  console.log("\\nStep 2: Fill DP table with optimization");
  
  for (let i = 2; i <= eggs; i++) {
    for (let j = 2; j <= floors; j++) {
      console.log("\\n  Computing dp[" + i + "][" + j + "]:");
      
      let minAttempts = Infinity;
      let left = 1, right = j;
      
      // Binary search for optimal floor
      while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        console.log("    Binary search: left = " + left + ", right = " + right + ", mid = " + mid);
        
        const breaks = dp[i - 1][mid - 1];
        const notBreaks = dp[i][j - mid];
        
        console.log("      If breaks: dp[" + (i - 1) + "][" + (mid - 1) + "] = " + breaks);
        console.log("      If not breaks: dp[" + i + "][" + (j - mid) + "] = " + notBreaks);
        
        if (breaks > notBreaks) {
          right = mid - 1;
          console.log("      breaks > notBreaks, search left: [" + left + ", " + right + "]");
        } else {
          left = mid + 1;
          console.log("      breaks <= notBreaks, search right: [" + left + ", " + right + "]");
        }
        
        const attempts = 1 + Math.max(breaks, notBreaks);
        minAttempts = Math.min(minAttempts, attempts);
        console.log("      Attempts: 1 + max(" + breaks + ", " + notBreaks + ") = " + attempts);
      }
      
      dp[i][j] = minAttempts;
      console.log("  Final dp[" + i + "][" + j + "] = " + minAttempts);
    }
  }
  
  console.log("\\nResult: Minimum attempts = " + dp[eggs][floors]);
  
  return dp[eggs][floors];
}

// Mathematical approach for 2 eggs
function eggDropping2Eggs(floors) {
  console.log("\\n=== Egg Dropping - 2 Eggs Mathematical ===");
  console.log("Floors:", floors);
  
  // For 2 eggs, optimal strategy is to drop from floors: 1, 3, 6, 10, 15, ...
  // This is triangular numbers: n(n+1)/2 >= floors
  // Solving: n² + n - 2*floors >= 0
  // n = (-1 + sqrt(1 + 8*floors)) / 2
  
  const n = Math.ceil((-1 + Math.sqrt(1 + 8 * floors)) / 2);
  console.log("Mathematical solution: n = " + n);
  console.log("Verification: n(n+1)/2 = " + (n * (n + 1) / 2) + " >= " + floors);
  
  return n;
}

// Test cases
console.log("=== Testing Egg Dropping Optimized ===");
eggDroppingOptimized(2, 10);
eggDropping2Eggs(10);`,
          Java: `import java.util.*;

public class EggDroppingOptimized {
    // Egg Dropping Puzzle - Part 2 (Optimized)
    public static int eggDroppingOptimized(int eggs, int floors) {
        System.out.println("=== Egg Dropping Puzzle - Part 2 (Optimized) ===");
        System.out.println("Eggs: " + eggs);
        System.out.println("Floors: " + floors);
        
        // Create DP table: dp[i][j] = minimum attempts with i eggs and j floors
        int[][] dp = new int[eggs + 1][floors + 1];
        
        System.out.println("\\nStep 1: Initialize base cases");
        
        // Base cases
        for (int i = 0; i <= eggs; i++) {
            dp[i][0] = 0;
            dp[i][1] = 1;
        }
        
        for (int j = 1; j <= floors; j++) {
            dp[1][j] = j;
        }
        
        System.out.println("\\nStep 2: Fill DP table with optimization");
        
        for (int i = 2; i <= eggs; i++) {
            for (int j = 2; j <= floors; j++) {
                System.out.println("\\n  Computing dp[" + i + "][" + j + "]:");
                
                int minAttempts = Integer.MAX_VALUE;
                int left = 1, right = j;
                
                // Binary search for optimal floor
                while (left <= right) {
                    int mid = (left + right) / 2;
                    System.out.println("    Binary search: left = " + left + ", right = " + right + ", mid = " + mid);
                    
                    int breaks = dp[i - 1][mid - 1];
                    int notBreaks = dp[i][j - mid];
                    
                    System.out.println("      If breaks: dp[" + (i - 1) + "][" + (mid - 1) + "] = " + breaks);
                    System.out.println("      If not breaks: dp[" + i + "][" + (j - mid) + "] = " + notBreaks);
                    
                    if (breaks > notBreaks) {
                        right = mid - 1;
                        System.out.println("      breaks > notBreaks, search left: [" + left + ", " + right + "]");
                    } else {
                        left = mid + 1;
                        System.out.println("      breaks <= notBreaks, search right: [" + left + ", " + right + "]");
                    }
                    
                    int attempts = 1 + Math.max(breaks, notBreaks);
                    minAttempts = Math.min(minAttempts, attempts);
                    System.out.println("      Attempts: 1 + max(" + breaks + ", " + notBreaks + ") = " + attempts);
                }
                
                dp[i][j] = minAttempts;
                System.out.println("  Final dp[" + i + "][" + j + "] = " + minAttempts);
            }
        }
        
        System.out.println("\\nResult: Minimum attempts = " + dp[eggs][floors]);
        
        return dp[eggs][floors];
    }
    
    // Mathematical approach for 2 eggs
    public static int eggDropping2Eggs(int floors) {
        System.out.println("\\n=== Egg Dropping - 2 Eggs Mathematical ===");
        System.out.println("Floors: " + floors);
        
        // For 2 eggs, optimal strategy is to drop from floors: 1, 3, 6, 10, 15, ...
        // This is triangular numbers: n(n+1)/2 >= floors
        // Solving: n² + n - 2*floors >= 0
        // n = (-1 + sqrt(1 + 8*floors)) / 2
        
        int n = (int) Math.ceil((-1 + Math.sqrt(1 + 8 * floors)) / 2.0);
        System.out.println("Mathematical solution: n = " + n);
        System.out.println("Verification: n(n+1)/2 = " + (n * (n + 1) / 2) + " >= " + floors);
        
        return n;
    }
    
    public static void main(String[] args) {
        System.out.println("=== Testing Egg Dropping Optimized ===");
        eggDroppingOptimized(2, 10);
        eggDropping2Eggs(10);
    }
}`,
        }}
        explanation="Optimized version uses binary search to find optimal floor. For 2 eggs, mathematical formula gives direct answer. Time: O(eggs×floors×log(floors)), Space: O(eggs×floors)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Same egg dropping problem, but optimize inner loop using binary search. For 2 eggs, use mathematical formula.",
              details: [
                "Binary search finds optimal floor to drop from",
                "2 eggs: triangular number formula gives direct answer",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Optimization: instead of trying all floors linearly, use binary search to find optimal floor. dp[i-1][k-1] is increasing, dp[i][j-k] is decreasing.",
              keywords: [
                "binary search",
                "optimization",
                "egg dropping",
                "mathematical formula",
              ],
              details: [
                "Key insight: optimal floor is where both outcomes are balanced",
                "Binary search finds this optimal point",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Same 2D DP table. Binary search helper function to find optimal floor.",
              details: [
                "Binary search on floor range [1, j]",
                "For 2 eggs: use formula n = ceil((-1 + sqrt(1+8*floors))/2)",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "For each (eggs, floors): binary search in [1, j] to find floor k where dp[i-1][k-1] and dp[i][j-k] are balanced. Use this k to compute dp[i][j]. For 2 eggs: use formula directly.",
              details: [
                "Binary search reduces inner loop from O(floors) to O(log(floors))",
                "2 eggs formula: triangular numbers",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Time O(eggs×floors×log(floors)) - binary search for each cell. Space O(eggs×floors). For 2 eggs: O(1) time with formula.",
              details: [
                "Significant improvement over O(eggs×floors²)",
                "2 eggs case has closed-form solution",
              ],
            },
          ],
          pattern: "2D DP with Binary Search Optimization",
          complexity: {
            time: "O(eggs×floors×log(floors))",
            space: "O(eggs×floors)",
          },
        }}
      />

      <ProblemBlock
        title="Count BSTs with n keys"
        difficulty="Medium"
        description="Count the number of structurally unique BSTs that can be formed with n distinct keys."
        solutions={{
          JavaScript: `// Count BSTs with n keys

function countBSTs(n) {
  console.log("=== Count BSTs with n keys ===");
  console.log("Number of keys:", n);
  
  // Create DP array: dp[i] = number of BSTs with i keys
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1; // 1 BST with 0 keys (empty tree)
  dp[1] = 1; // 1 BST with 1 key
  
  console.log("\\nStep 1: Initialize base cases");
  console.log("  dp[0] = 1 (empty tree)");
  console.log("  dp[1] = 1 (single node)");
  
  console.log("\\nStep 2: Fill DP array");
  
  for (let i = 2; i <= n; i++) {
    console.log("\\n  Computing dp[" + i + "]:");
    
    let totalBSTs = 0;
    
    // Try each key as root
    for (let j = 1; j <= i; j++) {
      const leftBSTs = dp[j - 1]; // Left subtree with j-1 keys
      const rightBSTs = dp[i - j]; // Right subtree with i-j keys
      const bstsWithJAsRoot = leftBSTs * rightBSTs;
      
      console.log("    Root = " + j + ": left = dp[" + (j - 1) + "] = " + leftBSTs + ", right = dp[" + (i - j) + "] = " + rightBSTs + ", total = " + leftBSTs + " × " + rightBSTs + " = " + bstsWithJAsRoot);
      
      totalBSTs += bstsWithJAsRoot;
    }
    
    dp[i] = totalBSTs;
    console.log("  Final dp[" + i + "] = " + totalBSTs);
  }
  
  console.log("\\nFinal DP array:", dp);
  console.log("Result: Number of BSTs = " + dp[n]);
  
  return dp[n];
}

// Alternative: Direct formula using Catalan numbers
function countBSTsCatalan(n) {
  console.log("\\n=== Count BSTs - Catalan Numbers ===");
  console.log("Number of keys:", n);
  
  // Catalan number formula: C(n) = (2n)! / ((n+1)! * n!)
  // For BSTs: C(n) = (2n)! / ((n+1)! * n!)
  
  function factorial(num) {
    if (num <= 1) return 1;
    return num * factorial(num - 1);
  }
  
  const catalan = factorial(2 * n) / (factorial(n + 1) * factorial(n));
  console.log("Catalan number C(" + n + ") = " + catalan);
  
  return catalan;
}

// Test cases
console.log("=== Testing Count BSTs ===");
countBSTs(3);
countBSTsCatalan(4);`,
          Java: `import java.util.*;

public class CountBSTs {
    // Count BSTs with n keys
    public static long countBSTs(int n) {
        System.out.println("=== Count BSTs with n keys ===");
        System.out.println("Number of keys: " + n);
        
        // Create DP array: dp[i] = number of BSTs with i keys
        long[] dp = new long[n + 1];
        dp[0] = 1; // 1 BST with 0 keys (empty tree)
        dp[1] = 1; // 1 BST with 1 key
        
        System.out.println("\\nStep 1: Initialize base cases");
        System.out.println("  dp[0] = 1 (empty tree)");
        System.out.println("  dp[1] = 1 (single node)");
        
        System.out.println("\\nStep 2: Fill DP array");
        
        for (int i = 2; i <= n; i++) {
            System.out.println("\\n  Computing dp[" + i + "]:");
            
            long totalBSTs = 0;
            
            // Try each key as root
            for (int j = 1; j <= i; j++) {
                long leftBSTs = dp[j - 1]; // Left subtree with j-1 keys
                long rightBSTs = dp[i - j]; // Right subtree with i-j keys
                long bstsWithJAsRoot = leftBSTs * rightBSTs;
                
                System.out.println("    Root = " + j + ": left = dp[" + (j - 1) + "] = " + leftBSTs + ", right = dp[" + (i - j) + "] = " + rightBSTs + ", total = " + leftBSTs + " × " + rightBSTs + " = " + bstsWithJAsRoot);
                
                totalBSTs += bstsWithJAsRoot;
            }
            
            dp[i] = totalBSTs;
            System.out.println("  Final dp[" + i + "] = " + totalBSTs);
        }
        
        System.out.println("\\nFinal DP array: " + Arrays.toString(dp));
        System.out.println("Result: Number of BSTs = " + dp[n]);
        
        return dp[n];
    }
    
    // Alternative: Direct formula using Catalan numbers
    public static long countBSTsCatalan(int n) {
        System.out.println("\\n=== Count BSTs - Catalan Numbers ===");
        System.out.println("Number of keys: " + n);
        
        // Catalan number formula: C(n) = (2n)! / ((n+1)! * n!)
        // For BSTs: C(n) = (2n)! / ((n+1)! * n!)
        
        long catalan = factorial(2 * n) / (factorial(n + 1) * factorial(n));
        System.out.println("Catalan number C(" + n + ") = " + catalan);
        
        return catalan;
    }
    
    private static long factorial(int num) {
        if (num <= 1) return 1;
        return num * factorial(num - 1);
    }
    
    public static void main(String[] args) {
        System.out.println("=== Testing Count BSTs ===");
        countBSTs(3);
        countBSTsCatalan(4);
    }
}`,
        }}
        explanation="DP solution: for each root, multiply left and right subtree counts. This gives Catalan numbers. Time: O(n²), Space: O(n). Direct formula: C(n) = (2n)!/((n+1)!×n!)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Count number of structurally unique BSTs with n distinct keys. Order matters: different structures are different BSTs.",
              details: [
                "Example: n=3 → 5 unique BSTs",
                "This is the nth Catalan number",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "For each key as root, left subtree has i keys, right subtree has n-1-i keys. Total = sum of (left count × right count) for all roots.",
              keywords: [
                "Catalan numbers",
                "1D DP",
                "BST counting",
                "combinatorics",
              ],
              details: [
                "State: dp[i] = number of BSTs with i keys",
                "Recurrence: dp[n] = sum(dp[i] × dp[n-1-i]) for i from 0 to n-1",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "1D array dp[i] stores number of BSTs with i keys. Initialize dp[0]=1, dp[1]=1.",
              details: [
                "Base case: 0 keys = 1 BST (empty), 1 key = 1 BST",
                "Can use direct Catalan formula for O(1) solution",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "For n from 2 to target: dp[n] = sum(dp[i] × dp[n-1-i]) for i from 0 to n-1. Return dp[n]. Alternative: use Catalan formula C(n) = (2n)!/((n+1)!×n!).",
              details: [
                "For each root, multiply left and right subtree counts",
                "Catalan formula gives direct answer",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "DP: Time O(n²), Space O(n). Formula: Time O(n) for factorial, Space O(1). Can optimize formula computation.",
              details: [
                "DP approach is intuitive",
                "Catalan formula is more efficient for large n",
              ],
            },
          ],
          pattern: "1D DP (Catalan Numbers)",
          complexity: {
            time: "O(n²) DP, O(n) formula",
            space: "O(n) DP, O(1) formula",
          },
        }}
      />

      <ProblemBlock
        title="Maximum sum with no two consecutive"
        difficulty="Medium"
        description="Find the maximum sum of elements in an array such that no two elements are adjacent."
        solutions={{
          JavaScript: `// Maximum sum with no two consecutive

function maxSumNoTwoConsecutive(arr) {
  console.log("=== Maximum sum with no two consecutive ===");
  console.log("Array:", arr);
  
  const n = arr.length;
  
  if (n === 0) {
    console.log("Empty array, sum = 0");
    return 0;
  }
  
  if (n === 1) {
    console.log("Single element, sum = " + arr[0]);
    return arr[0];
  }
  
  // Create DP array: dp[i] = maximum sum ending at index i
  const dp = new Array(n).fill(0);
  dp[0] = arr[0];
  dp[1] = Math.max(arr[0], arr[1]);
  
  console.log("\\nStep 1: Initialize base cases");
  console.log("  dp[0] = " + arr[0] + " (first element)");
  console.log("  dp[1] = max(" + arr[0] + ", " + arr[1] + ") = " + dp[1]);
  
  console.log("\\nStep 2: Fill DP array");
  
  for (let i = 2; i < n; i++) {
    console.log("\\n  Computing dp[" + i + "]:");
    
    // Option 1: Include current element and dp[i-2]
    const include = arr[i] + dp[i - 2];
    console.log("    Include arr[" + i + "] + dp[" + (i - 2) + "]: " + arr[i] + " + " + dp[i - 2] + " = " + include);
    
    // Option 2: Exclude current element, take dp[i-1]
    const exclude = dp[i - 1];
    console.log("    Exclude arr[" + i + "], take dp[" + (i - 1) + "]: " + exclude);
    
    dp[i] = Math.max(include, exclude);
    console.log("    Max of include (" + include + ") and exclude (" + exclude + ") = " + dp[i]);
  }
  
  console.log("\\nFinal DP array:", dp);
  console.log("Result: Maximum sum = " + dp[n - 1]);
  
  return dp[n - 1];
}

// Space-optimized version
function maxSumNoTwoConsecutiveOptimized(arr) {
  console.log("\\n=== Maximum sum - Space Optimized ===");
  console.log("Array:", arr);
  
  const n = arr.length;
  
  if (n === 0) return 0;
  if (n === 1) return arr[0];
  
  let prev2 = arr[0]; // dp[i-2]
  let prev1 = Math.max(arr[0], arr[1]); // dp[i-1]
  
  console.log("\\nInitial: prev2 = " + prev2 + ", prev1 = " + prev1);
  
  for (let i = 2; i < n; i++) {
    const current = Math.max(arr[i] + prev2, prev1);
    console.log("  i = " + i + ": current = max(" + arr[i] + " + " + prev2 + ", " + prev1 + ") = " + current);
    
    prev2 = prev1;
    prev1 = current;
    console.log("    Updated: prev2 = " + prev2 + ", prev1 = " + prev1);
  }
  
  console.log("\\nResult: Maximum sum = " + prev1);
  return prev1;
}

// Test cases
console.log("=== Testing Maximum sum with no two consecutive ===");
maxSumNoTwoConsecutive([5, 1, 1, 5]);
maxSumNoTwoConsecutiveOptimized([3, 2, 7, 10]);`,
          Java: `import java.util.*;

public class MaxSumNoTwoConsecutive {
    // Maximum sum with no two consecutive
    public static int maxSumNoTwoConsecutive(int[] arr) {
        System.out.println("=== Maximum sum with no two consecutive ===");
        System.out.println("Array: " + Arrays.toString(arr));
        
        int n = arr.length;
        
        if (n == 0) {
            System.out.println("Empty array, sum = 0");
            return 0;
        }
        
        if (n == 1) {
            System.out.println("Single element, sum = " + arr[0]);
            return arr[0];
        }
        
        // Create DP array: dp[i] = maximum sum ending at index i
        int[] dp = new int[n];
        dp[0] = arr[0];
        dp[1] = Math.max(arr[0], arr[1]);
        
        System.out.println("\\nStep 1: Initialize base cases");
        System.out.println("  dp[0] = " + arr[0] + " (first element)");
        System.out.println("  dp[1] = max(" + arr[0] + ", " + arr[1] + ") = " + dp[1]);
        
        System.out.println("\\nStep 2: Fill DP array");
        
        for (int i = 2; i < n; i++) {
            System.out.println("\\n  Computing dp[" + i + "]:");
            
            // Option 1: Include current element and dp[i-2]
            int include = arr[i] + dp[i - 2];
            System.out.println("    Include arr[" + i + "] + dp[" + (i - 2) + "]: " + arr[i] + " + " + dp[i - 2] + " = " + include);
            
            // Option 2: Exclude current element, take dp[i-1]
            int exclude = dp[i - 1];
            System.out.println("    Exclude arr[" + i + "], take dp[" + (i - 1) + "]: " + exclude);
            
            dp[i] = Math.max(include, exclude);
            System.out.println("    Max of include (" + include + ") and exclude (" + exclude + ") = " + dp[i]);
        }
        
        System.out.println("\\nFinal DP array: " + Arrays.toString(dp));
        System.out.println("Result: Maximum sum = " + dp[n - 1]);
        
        return dp[n - 1];
    }
    
    // Space-optimized version
    public static int maxSumNoTwoConsecutiveOptimized(int[] arr) {
        System.out.println("\\n=== Maximum sum - Space Optimized ===");
        System.out.println("Array: " + Arrays.toString(arr));
        
        int n = arr.length;
        
        if (n == 0) return 0;
        if (n == 1) return arr[0];
        
        int prev2 = arr[0]; // dp[i-2]
        int prev1 = Math.max(arr[0], arr[1]); // dp[i-1]
        
        System.out.println("\\nInitial: prev2 = " + prev2 + ", prev1 = " + prev1);
        
        for (int i = 2; i < n; i++) {
            int current = Math.max(arr[i] + prev2, prev1);
            System.out.println("  i = " + i + ": current = max(" + arr[i] + " + " + prev2 + ", " + prev1 + ") = " + current);
            
            prev2 = prev1;
            prev1 = current;
            System.out.println("    Updated: prev2 = " + prev2 + ", prev1 = " + prev1);
        }
        
        System.out.println("\\nResult: Maximum sum = " + prev1);
        return prev1;
    }
    
    public static void main(String[] args) {
        System.out.println("=== Testing Maximum sum with no two consecutive ===");
        maxSumNoTwoConsecutive(new int[]{5, 1, 1, 5});
        maxSumNoTwoConsecutiveOptimized(new int[]{3, 2, 7, 10});
    }
}`,
        }}
        explanation="DP solution: for each element, choose maximum of including it (with dp[i-2]) or excluding it (dp[i-1]). Space-optimized version uses only two variables. Time: O(n), Space: O(n) or O(1)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Find maximum sum of array elements such that no two consecutive elements are included. Classic house robber problem variant.",
              details: [
                "Example: [5,1,1,5] → answer=10 (5+5)",
                "Cannot pick adjacent elements",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "1D DP: dp[i] = maximum sum using elements up to index i. For each element, two choices: include it (with dp[i-2]) or exclude it (dp[i-1]).",
              keywords: [
                "1D DP",
                "house robber",
                "no consecutive",
                "optimization",
              ],
              details: [
                "State: maximum sum up to index i",
                "Recurrence: dp[i] = max(arr[i] + dp[i-2], dp[i-1])",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "1D array dp[i] stores maximum sum up to index i. Can optimize to two variables (prev2, prev1).",
              details: [
                "Standard: array of size n",
                "Optimized: only need last two values",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Initialize dp[0]=arr[0], dp[1]=max(arr[0], arr[1]). For i from 2 to n-1: dp[i]=max(arr[i]+dp[i-2], dp[i-1]). Return dp[n-1]. Optimized: use two variables, update in each iteration.",
              details: [
                "Include: add current element and best sum from i-2",
                "Exclude: take best sum from i-1",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Time O(n) - single pass. Space O(n) for array, O(1) with optimization. Classic DP problem with space optimization.",
              details: [
                "Space optimization reduces to constant space",
                "Similar to Fibonacci with choice",
              ],
            },
          ],
          pattern: "1D DP (No Consecutive)",
          complexity: {
            time: "O(n)",
            space: "O(n) or O(1) optimized",
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
        Advanced Dynamic Programming Problems
      </h2>

      <ProblemBlock
        title="Allocate Minimum Pages (Naive Method)"
        difficulty="Medium"
        description="Given an array of pages in books and number of students, find the minimum number of pages a student must read such that the maximum pages assigned to any student is minimized."
        solutions={{
          JavaScript: `// Allocate Minimum Pages - Naive Method

function allocateMinimumPagesNaive(pages, students) {
  console.log("=== Allocate Minimum Pages - Naive Method ===");
  console.log("Pages:", pages);
  console.log("Students:", students);
  
  const n = pages.length;
  
  // If more students than books, impossible
  if (students > n) {
    console.log("Impossible: More students than books");
    return -1;
  }
  
  // If only one student, sum all pages
  if (students === 1) {
    const sum = pages.reduce((a, b) => a + b, 0);
    console.log("Only one student, total pages:", sum);
    return sum;
  }
  
  // If students equal to books, each student gets one book
  if (students === n) {
    const maxPages = Math.max(...pages);
    console.log("Students equal to books, maximum pages:", maxPages);
    return maxPages;
  }
  
  // Try all possible ways to partition books among students
  function partitionBooks(bookIndex, remainingStudents) {
    console.log("\\nPartitioning from book " + bookIndex + " with " + remainingStudents + " students left");
    
    // Base case: only one student left, assign all remaining books
    if (remainingStudents === 1) {
      const sum = pages.slice(bookIndex).reduce((a, b) => a + b, 0);
      console.log("  Last student gets books from " + bookIndex + " to " + (n-1) + ", pages: " + sum);
      return sum;
    }
    
    let minMaxPages = Infinity;
    
    // Try different ways to assign books to current student
    for (let i = bookIndex; i < n - remainingStudents + 1; i++) {
      const currentStudentPages = pages.slice(bookIndex, i + 1).reduce((a, b) => a + b, 0);
      console.log("  Current student gets books " + bookIndex + " to " + i + ", pages: " + currentStudentPages);
      
      const remainingMaxPages = partitionBooks(i + 1, remainingStudents - 1);
      const maxPages = Math.max(currentStudentPages, remainingMaxPages);
      
      console.log("  Max pages so far: " + maxPages);
      minMaxPages = Math.min(minMaxPages, maxPages);
    }
    
    console.log("  Minimum max pages for this partition: " + minMaxPages);
    return minMaxPages;
  }
  
  const result = partitionBooks(0, students);
  console.log("\\nResult: Minimum maximum pages = " + result);
  return result;
}

// Test cases
console.log("=== Testing Allocate Minimum Pages Naive ===");
allocateMinimumPagesNaive([12, 34, 67, 90], 2);
allocateMinimumPagesNaive([10, 20, 30, 40], 2);`,
          Java: `import java.util.*;

public class AllocateMinimumPagesNaive {
    // Allocate Minimum Pages - Naive Method
    public static int allocateMinimumPagesNaive(int[] pages, int students) {
        System.out.println("=== Allocate Minimum Pages - Naive Method ===");
        System.out.println("Pages: " + Arrays.toString(pages));
        System.out.println("Students: " + students);
        
        int n = pages.length;
        
        // If more students than books, impossible
        if (students > n) {
            System.out.println("Impossible: More students than books");
            return -1;
        }
        
        // If only one student, sum all pages
        if (students == 1) {
            int sum = Arrays.stream(pages).sum();
            System.out.println("Only one student, total pages: " + sum);
            return sum;
        }
        
        // If students equal to books, each student gets one book
        if (students == n) {
            int maxPages = Arrays.stream(pages).max().orElse(0);
            System.out.println("Students equal to books, maximum pages: " + maxPages);
            return maxPages;
        }
        
        int result = partitionBooks(pages, 0, students, n);
        System.out.println("\\nResult: Minimum maximum pages = " + result);
        return result;
    }
    
    private static int partitionBooks(int[] pages, int bookIndex, int remainingStudents, int n) {
        System.out.println("\\nPartitioning from book " + bookIndex + " with " + remainingStudents + " students left");
        
        // Base case: only one student left, assign all remaining books
        if (remainingStudents == 1) {
            int sum = 0;
            for (int i = bookIndex; i < n; i++) {
                sum += pages[i];
            }
            System.out.println("  Last student gets books from " + bookIndex + " to " + (n-1) + ", pages: " + sum);
            return sum;
        }
        
        int minMaxPages = Integer.MAX_VALUE;
        
        // Try different ways to assign books to current student
        for (int i = bookIndex; i < n - remainingStudents + 1; i++) {
            int currentStudentPages = 0;
            for (int j = bookIndex; j <= i; j++) {
                currentStudentPages += pages[j];
            }
            System.out.println("  Current student gets books " + bookIndex + " to " + i + ", pages: " + currentStudentPages);
            
            int remainingMaxPages = partitionBooks(pages, i + 1, remainingStudents - 1, n);
            int maxPages = Math.max(currentStudentPages, remainingMaxPages);
            
            System.out.println("  Max pages so far: " + maxPages);
            minMaxPages = Math.min(minMaxPages, maxPages);
        }
        
        System.out.println("  Minimum max pages for this partition: " + minMaxPages);
        return minMaxPages;
    }
    
    public static void main(String[] args) {
        System.out.println("=== Testing Allocate Minimum Pages Naive ===");
        allocateMinimumPagesNaive(new int[]{12, 34, 67, 90}, 2);
        allocateMinimumPagesNaive(new int[]{10, 20, 30, 40}, 2);
    }
}`,
        }}
        explanation="Naive approach tries all possible ways to partition books among students. For each partition, calculate the maximum pages assigned to any student and find the minimum of these maximums. Time: O(n^m), Space: O(m)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Allocate n books (with pages) to m students such that maximum pages assigned to any student is minimized. Books must be allocated in contiguous order.",
              details: [
                "Example: pages=[12,34,67,90], m=2 → answer=113",
                "Books must be allocated in order (contiguous)",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recursive: try all possible ways to partition books. For each partition, calculate maximum pages and take minimum.",
              keywords: [
                "partitioning",
                "recursion",
                "exponential time",
                "optimization",
              ],
              details: [
                "State: allocate(books, students, startIndex)",
                "Try all possible cut points",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Recursion with base cases. Prefix sum array to quickly calculate sum of pages in range.",
              details: [
                "Base case: 1 student gets all remaining books",
                "Prefix sum: O(1) range sum calculation",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "If students==1, return sum of remaining books. For each possible cut point: pages = sum(books[start..cut]), remaining = allocate(books, students-1, cut+1). Return min(max(pages, remaining)) over all cuts.",
              details: [
                "Try all possible ways to assign first k books to first student",
                "Recursively solve for remaining",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Time O(n^m) exponential - try all partitions. Space O(m) for recursion stack. Needs DP/memoization to optimize.",
              details: [
                "This naive version demonstrates the problem structure",
                "DP solution reduces to O(n²×m) time",
              ],
            },
          ],
          pattern: "Partitioning (Naive Recursion)",
          complexity: {
            time: "O(n^m)",
            space: "O(m)",
          },
        }}
      />

      <ProblemBlock
        title="Allocate Minimum Pages (DP Solution)"
        difficulty="Hard"
        description="Optimized solution using dynamic programming to find minimum pages allocation."
        solutions={{
          JavaScript: `// Allocate Minimum Pages - DP Solution

function allocateMinimumPagesDP(pages, students) {
  console.log("=== Allocate Minimum Pages - DP Solution ===");
  console.log("Pages:", pages);
  console.log("Students:", students);
  
  const n = pages.length;
  
  // If more students than books, impossible
  if (students > n) {
    console.log("Impossible: More students than books");
    return -1;
  }
  
  // If only one student, sum all pages
  if (students === 1) {
    const sum = pages.reduce((a, b) => a + b, 0);
    console.log("Only one student, total pages:", sum);
    return sum;
  }
  
  // If students equal to books, each student gets one book
  if (students === n) {
    const maxPages = Math.max(...pages);
    console.log("Students equal to books, maximum pages:", maxPages);
    return maxPages;
  }
  
  // Create DP table: dp[i][j] = minimum max pages for first i books with j students
  const dp = Array(n + 1).fill().map(() => Array(students + 1).fill(Infinity));
  
  console.log("\\nStep 1: Initialize DP table");
  console.log("  dp[i][j] = minimum max pages for first i books with j students");
  
  // Base case: 0 books with any students = 0 pages
  for (let j = 0; j <= students; j++) {
    dp[0][j] = 0;
    console.log("  dp[0][" + j + "] = 0");
  }
  
  // Base case: any books with 0 students = impossible (Infinity)
  for (let i = 1; i <= n; i++) {
    dp[i][0] = Infinity;
    console.log("  dp[" + i + "][0] = Infinity");
  }
  
  // Base case: 1 book with 1 student = pages of that book
  for (let i = 1; i <= n; i++) {
    dp[i][1] = pages.slice(0, i).reduce((a, b) => a + b, 0);
    console.log("  dp[" + i + "][1] = " + dp[i][1] + " (sum of first " + i + " books)");
  }
  
  console.log("\\nStep 2: Fill DP table");
  
  // Fill DP table
  for (let i = 1; i <= n; i++) {
    for (let j = 2; j <= students; j++) {
      console.log("\\n  Computing dp[" + i + "][" + j + "]:");
      
      // Try different ways to partition first i books among j students
      for (let k = 1; k <= i; k++) {
        const lastStudentPages = pages.slice(k-1, i).reduce((a, b) => a + b, 0);
        const remainingMaxPages = dp[k-1][j-1];
        const maxPages = Math.max(lastStudentPages, remainingMaxPages);
        
        console.log("    Last student gets books " + (k-1) + " to " + (i-1) + ", pages: " + lastStudentPages);
        console.log("    Remaining " + (k-1) + " books with " + (j-1) + " students: " + remainingMaxPages);
        console.log("    Max pages: " + maxPages);
        
        dp[i][j] = Math.min(dp[i][j], maxPages);
      }
      
      console.log("  Final dp[" + i + "][" + j + "] = " + dp[i][j]);
    }
  }
  
  console.log("\\nStep 3: Final DP table");
  for (let i = 0; i <= n; i++) {
    console.log("  " + dp[i].join(" "));
  }
  
  console.log("\\nResult: Minimum maximum pages = " + dp[n][students]);
  return dp[n][students];
}

// Space-optimized version
function allocateMinimumPagesOptimized(pages, students) {
  console.log("\\n=== Allocate Minimum Pages - Space Optimized ===");
  console.log("Pages:", pages);
  console.log("Students:", students);
  
  const n = pages.length;
  
  if (students > n) return -1;
  if (students === 1) return pages.reduce((a, b) => a + b, 0);
  if (students === n) return Math.max(...pages);
  
  // Use only two rows
  let prev = new Array(students + 1).fill(Infinity);
  let curr = new Array(students + 1).fill(Infinity);
  
  // Initialize base cases
  prev[0] = 0;
  for (let j = 1; j <= students; j++) {
    prev[j] = 0;
  }
  
  console.log("\\nInitial prev array: " + prev.join(" "));
  
  for (let i = 1; i <= n; i++) {
    curr[0] = Infinity;
    
    for (let j = 1; j <= students; j++) {
      curr[j] = Infinity;
      
      for (let k = 1; k <= i; k++) {
        const lastStudentPages = pages.slice(k-1, i).reduce((a, b) => a + b, 0);
        const remainingMaxPages = prev[j-1];
        const maxPages = Math.max(lastStudentPages, remainingMaxPages);
        
        curr[j] = Math.min(curr[j], maxPages);
      }
    }
    
    console.log("  After processing " + i + " books: " + curr.join(" "));
    [prev, curr] = [curr, prev];
  }
  
  console.log("\\nResult: Minimum maximum pages = " + prev[students]);
  return prev[students];
}

// Test cases
console.log("=== Testing Allocate Minimum Pages DP ===");
allocateMinimumPagesDP([12, 34, 67, 90], 2);
allocateMinimumPagesOptimized([10, 20, 30, 40], 2);`,
          Java: `import java.util.*;

public class AllocateMinimumPagesDP {
    // Allocate Minimum Pages - DP Solution
    public static int allocateMinimumPagesDP(int[] pages, int students) {
        System.out.println("=== Allocate Minimum Pages - DP Solution ===");
        System.out.println("Pages: " + Arrays.toString(pages));
        System.out.println("Students: " + students);
        
        int n = pages.length;
        
        // If more students than books, impossible
        if (students > n) {
            System.out.println("Impossible: More students than books");
            return -1;
        }
        
        // If only one student, sum all pages
        if (students == 1) {
            int sum = Arrays.stream(pages).sum();
            System.out.println("Only one student, total pages: " + sum);
            return sum;
        }
        
        // If students equal to books, each student gets one book
        if (students == n) {
            int maxPages = Arrays.stream(pages).max().orElse(0);
            System.out.println("Students equal to books, maximum pages: " + maxPages);
            return maxPages;
        }
        
        // Create DP table: dp[i][j] = minimum max pages for first i books with j students
        int[][] dp = new int[n + 1][students + 1];
        for (int[] row : dp) {
            Arrays.fill(row, Integer.MAX_VALUE);
        }
        
        System.out.println("\\nStep 1: Initialize DP table");
        System.out.println("  dp[i][j] = minimum max pages for first i books with j students");
        
        // Base case: 0 books with any students = 0 pages
        for (int j = 0; j <= students; j++) {
            dp[0][j] = 0;
            System.out.println("  dp[0][" + j + "] = 0");
        }
        
        // Base case: any books with 0 students = impossible (Infinity)
        for (int i = 1; i <= n; i++) {
            dp[i][0] = Integer.MAX_VALUE;
            System.out.println("  dp[" + i + "][0] = Infinity");
        }
        
        // Base case: 1 book with 1 student = pages of that book
        for (int i = 1; i <= n; i++) {
            int sum = 0;
            for (int k = 0; k < i; k++) {
                sum += pages[k];
            }
            dp[i][1] = sum;
            System.out.println("  dp[" + i + "][1] = " + sum + " (sum of first " + i + " books)");
        }
        
        System.out.println("\\nStep 2: Fill DP table");
        
        // Fill DP table
        for (int i = 1; i <= n; i++) {
            for (int j = 2; j <= students; j++) {
                System.out.println("\\n  Computing dp[" + i + "][" + j + "]:");
                
                // Try different ways to partition first i books among j students
                for (int k = 1; k <= i; k++) {
                    int lastStudentPages = 0;
                    for (int m = k - 1; m < i; m++) {
                        lastStudentPages += pages[m];
                    }
                    int remainingMaxPages = dp[k - 1][j - 1];
                    int maxPages = Math.max(lastStudentPages, remainingMaxPages);
                    
                    System.out.println("    Last student gets books " + (k - 1) + " to " + (i - 1) + ", pages: " + lastStudentPages);
                    System.out.println("    Remaining " + (k - 1) + " books with " + (j - 1) + " students: " + remainingMaxPages);
                    System.out.println("    Max pages: " + maxPages);
                    
                    if (remainingMaxPages != Integer.MAX_VALUE) {
                        dp[i][j] = Math.min(dp[i][j], maxPages);
                    }
                }
                
                System.out.println("  Final dp[" + i + "][" + j + "] = " + (dp[i][j] == Integer.MAX_VALUE ? "Impossible" : dp[i][j]));
            }
        }
        
        System.out.println("\\nStep 3: Final DP table");
        for (int i = 0; i <= n; i++) {
            System.out.println("  " + Arrays.toString(dp[i]));
        }
        
        System.out.println("\\nResult: Minimum maximum pages = " + (dp[n][students] == Integer.MAX_VALUE ? "Impossible" : dp[n][students]));
        return dp[n][students] == Integer.MAX_VALUE ? -1 : dp[n][students];
    }
    
    // Space-optimized version
    public static int allocateMinimumPagesOptimized(int[] pages, int students) {
        System.out.println("\\n=== Allocate Minimum Pages - Space Optimized ===");
        System.out.println("Pages: " + Arrays.toString(pages));
        System.out.println("Students: " + students);
        
        int n = pages.length;
        
        if (students > n) return -1;
        if (students == 1) return Arrays.stream(pages).sum();
        if (students == n) return Arrays.stream(pages).max().orElse(0);
        
        // Use only two rows
        int[] prev = new int[students + 1];
        int[] curr = new int[students + 1];
        Arrays.fill(prev, Integer.MAX_VALUE);
        Arrays.fill(curr, Integer.MAX_VALUE);
        
        // Initialize base cases
        prev[0] = 0;
        for (int j = 1; j <= students; j++) {
            prev[j] = 0;
        }
        
        System.out.println("\\nInitial prev array: " + Arrays.toString(prev));
        
        for (int i = 1; i <= n; i++) {
            curr[0] = Integer.MAX_VALUE;
            
            for (int j = 1; j <= students; j++) {
                curr[j] = Integer.MAX_VALUE;
                
                for (int k = 1; k <= i; k++) {
                    int lastStudentPages = 0;
                    for (int m = k - 1; m < i; m++) {
                        lastStudentPages += pages[m];
                    }
                    int remainingMaxPages = prev[j - 1];
                    if (remainingMaxPages != Integer.MAX_VALUE) {
                        int maxPages = Math.max(lastStudentPages, remainingMaxPages);
                        curr[j] = Math.min(curr[j], maxPages);
                    }
                }
            }
            
            System.out.println("  After processing " + i + " books: " + Arrays.toString(curr));
            int[] temp = prev;
            prev = curr;
            curr = temp;
        }
        
        System.out.println("\\nResult: Minimum maximum pages = " + (prev[students] == Integer.MAX_VALUE ? "Impossible" : prev[students]));
        return prev[students] == Integer.MAX_VALUE ? -1 : prev[students];
    }
    
    public static void main(String[] args) {
        System.out.println("=== Testing Allocate Minimum Pages DP ===");
        allocateMinimumPagesDP(new int[]{12, 34, 67, 90}, 2);
        allocateMinimumPagesOptimized(new int[]{10, 20, 30, 40}, 2);
    }
}`,
        }}
        explanation="DP solution uses table dp[i][j] to store minimum max pages for first i books with j students. Try all possible ways to assign last few books to last student. Time: O(n²×m), Space: O(n×m) or O(m) with optimization."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Same allocation problem: minimize maximum pages assigned to any student. Optimize naive recursion with DP.",
              details: [
                "DP: dp[i][j] = minimum max pages for first i books with j students",
                "Try all possible ways to partition",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "2D DP: dp[i][j] = minimum maximum pages for first i books with j students. For each position, try assigning last k books to last student.",
              keywords: ["2D DP", "partitioning", "minimax", "optimization"],
              details: [
                "State: minimum maximum pages for (books, students)",
                "Recurrence: dp[i][j] = min(max(sum(pages[k..i]), dp[k-1][j-1])) for all k",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "2D array dp[n+1][m+1]. Initialize dp[0][j]=0, dp[i][0]=Infinity. Prefix sum array for O(1) range sum.",
              details: [
                "Base cases: 0 books = 0 pages, 0 students = impossible",
                "Can optimize space to O(m) using rolling array",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "For i from 1 to n, for j from 1 to m: for k from j to i, pages = sum(pages[k..i]), dp[i][j] = min(dp[i][j], max(pages, dp[k-1][j-1])). Return dp[n][m].",
              details: [
                "Try all possible ways to assign last few books to last student",
                "Take minimum of maximum pages over all partitions",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Time O(n²×m) - for each (books, students), try all partitions. Space O(n×m) for table, O(m) with optimization. Can optimize further with binary search.",
              details: [
                "DP reduces time from exponential to polynomial",
                "Binary search approach is more efficient",
              ],
            },
          ],
          pattern: "2D DP (Partitioning)",
          complexity: {
            time: "O(n²×m)",
            space: "O(n×m) or O(m) optimized",
          },
        }}
      />

      <ProblemBlock
        title="Allocate Minimum Pages (Binary Search + DP)"
        difficulty="Hard"
        description="Most efficient solution using binary search on answer with DP validation."
        solutions={{
          JavaScript: `// Allocate Minimum Pages - Binary Search + DP

function allocateMinimumPagesBinarySearch(pages, students) {
  console.log("=== Allocate Minimum Pages - Binary Search + DP ===");
  console.log("Pages:", pages);
  console.log("Students:", students);
  
  const n = pages.length;
  
  if (students > n) return -1;
  if (students === 1) return pages.reduce((a, b) => a + b, 0);
  if (students === n) return Math.max(...pages);
  
  // Binary search on the answer (minimum maximum pages)
  let left = Math.max(...pages); // Minimum possible answer
  let right = pages.reduce((a, b) => a + b, 0); // Maximum possible answer
  
  console.log("\\nBinary search range: [" + left + ", " + right + "]");
  
  function canAllocate(maxPages) {
    console.log("\\nChecking if we can allocate with max " + maxPages + " pages per student");
    
    let studentsNeeded = 1;
    let currentPages = 0;
    
    for (let i = 0; i < n; i++) {
      console.log("  Book " + i + " has " + pages[i] + " pages");
      
      if (currentPages + pages[i] > maxPages) {
        studentsNeeded++;
        currentPages = pages[i];
        console.log("    Need new student, current pages: " + currentPages);
      } else {
        currentPages += pages[i];
        console.log("    Add to current student, total pages: " + currentPages);
      }
    }
    
    console.log("  Students needed: " + studentsNeeded + ", Available: " + students);
    return studentsNeeded <= students;
  }
  
  let result = right;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    console.log("\\nTrying mid = " + mid);
    
    if (canAllocate(mid)) {
      result = mid;
      right = mid - 1;
      console.log("  ✓ Possible, search left: [" + left + ", " + right + "]");
    } else {
      left = mid + 1;
      console.log("  ✗ Not possible, search right: [" + left + ", " + right + "]");
    }
  }
  
  console.log("\\nResult: Minimum maximum pages = " + result);
  return result;
}

// Alternative: Binary search with validation function
function allocateMinimumPagesBSOptimized(pages, students) {
  console.log("\\n=== Allocate Minimum Pages - Binary Search Optimized ===");
  console.log("Pages:", pages);
  console.log("Students:", students);
  
  const n = pages.length;
  
  if (students > n) return -1;
  if (students === 1) return pages.reduce((a, b) => a + b, 0);
  if (students === n) return Math.max(...pages);
  
  function isValid(maxPages) {
    let studentsNeeded = 1;
    let currentPages = 0;
    
    for (let i = 0; i < n; i++) {
      if (currentPages + pages[i] > maxPages) {
        studentsNeeded++;
        currentPages = pages[i];
      } else {
        currentPages += pages[i];
      }
    }
    
    return studentsNeeded <= students;
  }
  
  let left = Math.max(...pages);
  let right = pages.reduce((a, b) => a + b, 0);
  let result = right;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (isValid(mid)) {
      result = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  
  console.log("Result: Minimum maximum pages = " + result);
  return result;
}

// Test cases
console.log("=== Testing Allocate Minimum Pages Binary Search ===");
allocateMinimumPagesBinarySearch([12, 34, 67, 90], 2);
allocateMinimumPagesBSOptimized([10, 20, 30, 40], 2);`,
          Java: `import java.util.*;

public class AllocateMinimumPagesBinarySearch {
    // Allocate Minimum Pages - Binary Search + DP
    public static int allocateMinimumPagesBinarySearch(int[] pages, int students) {
        System.out.println("=== Allocate Minimum Pages - Binary Search + DP ===");
        System.out.println("Pages: " + Arrays.toString(pages));
        System.out.println("Students: " + students);
        
        int n = pages.length;
        
        if (students > n) return -1;
        if (students == 1) return Arrays.stream(pages).sum();
        if (students == n) return Arrays.stream(pages).max().orElse(0);
        
        // Binary search on the answer (minimum maximum pages)
        int left = Arrays.stream(pages).max().orElse(0); // Minimum possible answer
        int right = Arrays.stream(pages).sum(); // Maximum possible answer
        
        System.out.println("\\nBinary search range: [" + left + ", " + right + "]");
        
        int result = right;
        
        while (left <= right) {
            int mid = (left + right) / 2;
            System.out.println("\\nTrying mid = " + mid);
            
            if (canAllocate(pages, students, mid, n)) {
                result = mid;
                right = mid - 1;
                System.out.println("  ✓ Possible, search left: [" + left + ", " + right + "]");
            } else {
                left = mid + 1;
                System.out.println("  ✗ Not possible, search right: [" + left + ", " + right + "]");
            }
        }
        
        System.out.println("\\nResult: Minimum maximum pages = " + result);
        return result;
    }
    
    private static boolean canAllocate(int[] pages, int students, int maxPages, int n) {
        System.out.println("\\nChecking if we can allocate with max " + maxPages + " pages per student");
        
        int studentsNeeded = 1;
        int currentPages = 0;
        
        for (int i = 0; i < n; i++) {
            System.out.println("  Book " + i + " has " + pages[i] + " pages");
            
            if (currentPages + pages[i] > maxPages) {
                studentsNeeded++;
                currentPages = pages[i];
                System.out.println("    Need new student, current pages: " + currentPages);
            } else {
                currentPages += pages[i];
                System.out.println("    Add to current student, total pages: " + currentPages);
            }
        }
        
        System.out.println("  Students needed: " + studentsNeeded + ", Available: " + students);
        return studentsNeeded <= students;
    }
    
    // Alternative: Binary search with validation function
    public static int allocateMinimumPagesBSOptimized(int[] pages, int students) {
        System.out.println("\\n=== Allocate Minimum Pages - Binary Search Optimized ===");
        System.out.println("Pages: " + Arrays.toString(pages));
        System.out.println("Students: " + students);
        
        int n = pages.length;
        
        if (students > n) return -1;
        if (students == 1) return Arrays.stream(pages).sum();
        if (students == n) return Arrays.stream(pages).max().orElse(0);
        
        int left = Arrays.stream(pages).max().orElse(0);
        int right = Arrays.stream(pages).sum();
        int result = right;
        
        while (left <= right) {
            int mid = (left + right) / 2;
            
            if (isValid(pages, students, mid, n)) {
                result = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        
        System.out.println("Result: Minimum maximum pages = " + result);
        return result;
    }
    
    private static boolean isValid(int[] pages, int students, int maxPages, int n) {
        int studentsNeeded = 1;
        int currentPages = 0;
        
        for (int i = 0; i < n; i++) {
            if (currentPages + pages[i] > maxPages) {
                studentsNeeded++;
                currentPages = pages[i];
            } else {
                currentPages += pages[i];
            }
        }
        
        return studentsNeeded <= students;
    }
    
    public static void main(String[] args) {
        System.out.println("=== Testing Allocate Minimum Pages Binary Search ===");
        allocateMinimumPagesBinarySearch(new int[]{12, 34, 67, 90}, 2);
        allocateMinimumPagesBSOptimized(new int[]{10, 20, 30, 40}, 2);
    }
}`,
        }}
        explanation="Binary search approach: search for minimum maximum pages that allows allocation. For each candidate, check if it's possible to allocate books within that limit. Time: O(n×log(sum)), Space: O(1)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Same allocation problem: minimize maximum pages. Use binary search on answer space with validation function.",
              details: [
                "Binary search on possible maximum pages: [max(pages), sum(pages)]",
                "Validation: check if allocation is possible with given limit",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Binary search on answer: search for minimum value that allows valid allocation. Validation function checks feasibility.",
              keywords: [
                "binary search",
                "answer space",
                "validation",
                "optimization",
              ],
              details: [
                "Search space: [max(pages), sum(pages)]",
                "Validation: greedy allocation with limit",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Binary search variables (left, right, mid). Validation function to check feasibility.",
              details: [
                "No DP table needed",
                "Greedy validation: assign books until limit reached",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Binary search: left = max(pages), right = sum(pages). While left < right: mid = (left+right)/2, if valid(mid), right = mid, else left = mid+1. Return left. Validation: greedy assign books, count students needed.",
              details: [
                "Binary search finds minimum valid value",
                "Validation: check if allocation possible with limit",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Time O(n×log(sum)) - binary search with O(n) validation. Space O(1). Much more efficient than DP approach.",
              details: [
                "Optimal approach for this problem",
                "No DP table needed, just validation",
              ],
            },
          ],
          pattern: "Binary Search on Answer",
          complexity: {
            time: "O(n×log(sum))",
            space: "O(1)",
          },
        }}
      />

      <ProblemBlock
        title="Subset Sum Problem (Recursive Solution)"
        difficulty="Medium"
        description="Check if there exists a subset of array elements that sum to a given target value using recursion."
        solution={`// Subset Sum Problem - Recursive Solution

function subsetSumRecursive(arr, target) {
  console.log("=== Subset Sum Problem - Recursive ===");
  console.log("Array:", arr);
  console.log("Target:", target);
  
  const n = arr.length;
  
  function subsetSum(i, remainingSum) {
    console.log("\\n  subsetSum(" + i + ", " + remainingSum + ")");
    
    // Base case: target achieved
    if (remainingSum === 0) {
      console.log("    ✓ Target achieved! remainingSum = 0");
      return true;
    }
    
    // Base case: no more elements
    if (i >= n) {
      console.log("    ✗ No more elements, remainingSum = " + remainingSum);
      return false;
    }
    
    // Base case: remaining sum negative
    if (remainingSum < 0) {
      console.log("    ✗ Remaining sum negative: " + remainingSum);
      return false;
    }
    
    console.log("    Element " + i + ": " + arr[i]);
    
    // Option 1: Include current element
    const include = subsetSum(i + 1, remainingSum - arr[i]);
    console.log("    Include arr[" + i + "]: subsetSum(" + (i + 1) + ", " + (remainingSum - arr[i]) + ") = " + include);
    
    // Option 2: Exclude current element
    const exclude = subsetSum(i + 1, remainingSum);
    console.log("    Exclude arr[" + i + "]: subsetSum(" + (i + 1) + ", " + remainingSum + ") = " + exclude);
    
    const result = include || exclude;
    console.log("    Result: " + include + " || " + exclude + " = " + result);
    
    return result;
  }
  
  const result = subsetSum(0, target);
  console.log("\\nResult: Subset sum exists = " + result);
  
  return result;
}

// Test cases
console.log("=== Testing Subset Sum Recursive ===");
subsetSumRecursive([3, 34, 4, 12, 5, 2], 9);
subsetSumRecursive([3, 34, 4, 12, 5, 2], 30);`}
        explanation="Recursive solution: for each element, try including it or excluding it. If target becomes 0, subset exists. Time: O(2^n), Space: O(n)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Check if there exists a subset of array elements that sum to target. Each element can be included or excluded.",
              details: [
                "Example: arr=[3,34,4,12,5,2], target=9 → true (4+5)",
                "Return true if subset exists, false otherwise",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "For each element, two choices: include it or exclude it. Recursively try both options.",
              keywords: [
                "subset sum",
                "recursion",
                "exponential time",
                "decision problem",
              ],
              details: [
                "State: subsetSum(index, remainingSum)",
                "Two choices: include element or exclude element",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Recursion with base cases. No extra structure needed for naive version.",
              details: [
                "Base case: target==0 → true, index>=n → false",
                "Try both including and excluding current element",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "If target==0, return true. If index>=n or target<0, return false. Return subsetSum(index+1, target-arr[index]) || subsetSum(index+1, target).",
              details: [
                "Include: reduce target by element value",
                "Exclude: keep target, move to next element",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Time O(2^n) exponential - each element branches into two. Space O(n) for recursion stack. Needs memoization/DP to optimize.",
              details: [
                "This naive version demonstrates the problem structure",
                "DP solution reduces to O(n×target) time",
              ],
            },
          ],
          pattern: "Subset Sum (Naive Recursion)",
          complexity: {
            time: "O(2^n)",
            space: "O(n)",
          },
        }}
      />

      <ProblemBlock
        title="Subset Sum Problem (DP Solution)"
        difficulty="Medium"
        description="Optimized subset sum solution using dynamic programming with memoization."
        solution={`// Subset Sum Problem - DP Solution

function subsetSumDP(arr, target) {
  console.log("=== Subset Sum Problem - DP Solution ===");
  console.log("Array:", arr);
  console.log("Target:", target);
  
  const n = arr.length;
  
  // Create DP table: dp[i][j] = true if subset of first i elements sums to j
  const dp = Array(n + 1).fill().map(() => Array(target + 1).fill(false));
  
  console.log("\\nStep 1: Initialize DP table");
  console.log("  dp[i][j] = true if subset of first i elements sums to j");
  
  // Base case: sum 0 is always possible (empty subset)
  for (let i = 0; i <= n; i++) {
    dp[i][0] = true;
    console.log("  dp[" + i + "][0] = true (empty subset)");
  }
  
  // Base case: no elements, non-zero sum is impossible
  for (let j = 1; j <= target; j++) {
    dp[0][j] = false;
    console.log("  dp[0][" + j + "] = false (no elements)");
  }
  
  console.log("\\nStep 2: Fill DP table");
  
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= target; j++) {
      console.log("\\n  Computing dp[" + i + "][" + j + "]:");
      console.log("    Element " + (i-1) + ": " + arr[i-1] + ", Target: " + j);
      
      // Option 1: Exclude current element
      const exclude = dp[i-1][j];
      console.log("    Exclude: dp[" + (i-1) + "][" + j + "] = " + exclude);
      
      // Option 2: Include current element (if it fits)
      let include = false;
      if (arr[i-1] <= j) {
        include = dp[i-1][j - arr[i-1]];
        console.log("    Include: dp[" + (i-1) + "][" + (j - arr[i-1]) + "] = " + include);
      } else {
        console.log("    Include: Element " + arr[i-1] + " > target " + j + ", cannot include");
      }
      
      dp[i][j] = exclude || include;
      console.log("    Result: " + exclude + " || " + include + " = " + dp[i][j]);
    }
  }
  
  console.log("\\nStep 3: Final DP table");
  for (let i = 0; i <= n; i++) {
    console.log("  " + dp[i].join(" "));
  }
  
  console.log("\\nResult: Subset sum exists = " + dp[n][target]);
  
  return dp[n][target];
}

// Space-optimized version
function subsetSumDPSpaceOptimized(arr, target) {
  console.log("\\n=== Subset Sum - Space Optimized ===");
  console.log("Array:", arr);
  console.log("Target:", target);
  
  const n = arr.length;
  
  // Use only one row
  let prev = new Array(target + 1).fill(false);
  let curr = new Array(target + 1).fill(false);
  
  prev[0] = true; // Empty subset
  
  console.log("\\nInitial prev array: " + prev.join(" "));
  
  for (let i = 1; i <= n; i++) {
    curr[0] = true; // Empty subset always possible
    
    for (let j = 1; j <= target; j++) {
      if (arr[i-1] <= j) {
        curr[j] = prev[j] || prev[j - arr[i-1]];
      } else {
        curr[j] = prev[j];
      }
    }
    
    console.log("  After processing element " + (i-1) + ": " + curr.join(" "));
    [prev, curr] = [curr, prev];
  }
  
  console.log("\\nResult: Subset sum exists = " + prev[target]);
  
  return prev[target];
}

// Test cases
console.log("=== Testing Subset Sum DP ===");
subsetSumDP([3, 34, 4, 12, 5, 2], 9);
subsetSumDPSpaceOptimized([3, 34, 4, 12, 5, 2], 30);`}
        explanation="DP solution: dp[i][j] represents whether subset of first i elements can sum to j. Space-optimized version uses only one row. Time: O(n×target), Space: O(n×target) or O(target)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Same subset sum problem: check if subset exists. Optimize naive recursion with DP.",
              details: [
                "DP: dp[i][j] = true if subset of first i elements can sum to j",
                "Can optimize space to O(target) using 1D array",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "2D DP: dp[i][j] = true if subset of first i elements can sum to j. For each element, try including and excluding.",
              keywords: ["subset sum", "2D DP", "memoization", "tabulation"],
              details: [
                "State: whether subset exists for (elements, target)",
                "Recurrence: dp[i][j] = dp[i-1][j] || dp[i-1][j-arr[i-1]]",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "2D boolean array dp[n+1][target+1]. Initialize dp[0][0]=true, others=false. Can optimize to 1D array.",
              details: [
                "Base case: empty set can sum to 0",
                "Space optimization uses only one row",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "For i from 1 to n, for j from 0 to target: dp[i][j] = dp[i-1][j] || (j>=arr[i-1] && dp[i-1][j-arr[i-1]]). Return dp[n][target]. Space-optimized: process backwards to avoid overwriting.",
              details: [
                "Include: check if target-arr[i] is achievable",
                "Exclude: check if target is achievable without element",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Time O(n×target) - fill all cells. Space O(n×target) for table, O(target) with optimization.",
              details: [
                "DP reduces time from exponential to polynomial",
                "Space optimization reduces to linear space",
              ],
            },
          ],
          pattern: "2D DP (Subset Sum)",
          complexity: {
            time: "O(n×target)",
            space: "O(n×target) or O(target) optimized",
          },
        }}
      />

      <ProblemBlock
        title="Matrix Chain Multiplication"
        difficulty="Hard"
        description="Find the minimum number of scalar multiplications needed to multiply a chain of matrices."
        solution={`// Matrix Chain Multiplication

function matrixChainMultiplication(dimensions) {
  console.log("=== Matrix Chain Multiplication ===");
  console.log("Dimensions:", dimensions);
  
  const n = dimensions.length - 1; // Number of matrices
  
  // Create DP table: dp[i][j] = minimum multiplications for matrices i to j
  const dp = Array(n).fill().map(() => Array(n).fill(0));
  
  console.log("\\nStep 1: Initialize DP table");
  console.log("  dp[i][j] = minimum multiplications for matrices i to j");
  
  // Fill diagonal (single matrices need 0 multiplications)
  for (let i = 0; i < n; i++) {
    dp[i][i] = 0;
    console.log("  dp[" + i + "][" + i + "] = 0 (single matrix)");
  }
  
  console.log("\\nStep 2: Fill DP table for chains of length 2 and more");
  
  // Fill for chains of length 2, 3, ..., n
  for (let length = 2; length <= n; length++) {
    console.log("\\n  Processing chains of length " + length + ":");
    
    for (let i = 0; i <= n - length; i++) {
      const j = i + length - 1;
      console.log("\\n    Computing dp[" + i + "][" + j + "]:");
      
      dp[i][j] = Infinity;
      
      // Try all possible split points
      for (let k = i; k < j; k++) {
        console.log("      Split at k = " + k + ":");
        
        const cost = dp[i][k] + dp[k+1][j] + dimensions[i] * dimensions[k+1] * dimensions[j+1];
        console.log("        Cost = dp[" + i + "][" + k + "] + dp[" + (k+1) + "][" + j + "] + " + dimensions[i] + " × " + dimensions[k+1] + " × " + dimensions[j+1]);
        console.log("        Cost = " + dp[i][k] + " + " + dp[k+1][j] + " + " + (dimensions[i] * dimensions[k+1] * dimensions[j+1]) + " = " + cost);
        
        dp[i][j] = Math.min(dp[i][j], cost);
        console.log("        Updated dp[" + i + "][" + j + "] = " + dp[i][j]);
      }
    }
  }
  
  console.log("\\nStep 3: Final DP table");
  for (let i = 0; i < n; i++) {
    console.log("  " + dp[i].join(" "));
  }
  
  console.log("\\nResult: Minimum multiplications = " + dp[0][n-1]);
  
  return dp[0][n-1];
}

// Test cases
console.log("=== Testing Matrix Chain Multiplication ===");
matrixChainMultiplication([1, 2, 3, 4, 3]);
matrixChainMultiplication([40, 20, 30, 10, 30]);`}
        explanation="DP solution: for each chain length, try all possible split points and take minimum cost. Cost = left cost + right cost + multiplication cost. Time: O(n³), Space: O(n²)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Find minimum scalar multiplications to multiply chain of matrices. Matrix multiplication is associative, so parenthesization matters.",
              details: [
                "Example: dimensions=[1,2,3,4] → 3 matrices, minimum cost=18",
                "Different parenthesizations have different costs",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "2D DP: dp[i][j] = minimum cost to multiply matrices from i to j. For each chain, try all split points and take minimum.",
              keywords: [
                "2D DP",
                "matrix chain",
                "interval DP",
                "optimization",
              ],
              details: [
                "State: minimum cost for subchain",
                "Recurrence: dp[i][j] = min(dp[i][k] + dp[k+1][j] + cost) for all k",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "2D array dp[i][j] stores minimum cost for matrices i to j. Initialize dp[i][i]=0 (single matrix).",
              details: [
                "Base case: single matrix needs 0 multiplications",
                "Fill table for increasing chain lengths",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "For length L from 2 to n: for i from 0 to n-L, j=i+L-1. For k from i to j-1: cost = dp[i][k] + dp[k+1][j] + dimensions[i]×dimensions[k+1]×dimensions[j+1]. dp[i][j] = min(cost) over all k.",
              details: [
                "Try all possible split points",
                "Cost includes left, right, and multiplication cost",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Time O(n³) - for each chain length, try all splits. Space O(n²) for table. Classic interval DP problem.",
              details: [
                "Optimal time complexity for this problem",
                "Can track split points to reconstruct solution",
              ],
            },
          ],
          pattern: "2D DP (Interval DP)",
          complexity: {
            time: "O(n³)",
            space: "O(n²)",
          },
        }}
      />

      <ProblemBlock
        title="Matrix Chain Multiplication (DP Solution)"
        difficulty="Hard"
        description="Optimized matrix chain multiplication with parenthesization tracking."
        solution={`// Matrix Chain Multiplication - DP Solution with Parenthesization

function matrixChainMultiplicationWithParentheses(dimensions) {
  console.log("=== Matrix Chain Multiplication - DP Solution ===");
  console.log("Dimensions:", dimensions);
  
  const n = dimensions.length - 1;
  
  // Create DP table and split table
  const dp = Array(n).fill().map(() => Array(n).fill(0));
  const split = Array(n).fill().map(() => Array(n).fill(0));
  
  console.log("\\nStep 1: Initialize tables");
  
  // Fill diagonal
  for (let i = 0; i < n; i++) {
    dp[i][i] = 0;
    split[i][i] = i;
  }
  
  console.log("\\nStep 2: Fill DP table");
  
  for (let length = 2; length <= n; length++) {
    for (let i = 0; i <= n - length; i++) {
      const j = i + length - 1;
      dp[i][j] = Infinity;
      
      for (let k = i; k < j; k++) {
        const cost = dp[i][k] + dp[k+1][j] + dimensions[i] * dimensions[k+1] * dimensions[j+1];
        
        if (cost < dp[i][j]) {
          dp[i][j] = cost;
          split[i][j] = k;
        }
      }
    }
  }
  
  console.log("\\nStep 3: Print optimal parenthesization");
  
  function printParentheses(i, j) {
    if (i === j) {
      return "A" + i;
    } else {
      const k = split[i][j];
      return "(" + printParentheses(i, k) + " × " + printParentheses(k+1, j) + ")";
    }
  }
  
  const optimalParentheses = printParentheses(0, n-1);
  console.log("Optimal parenthesization: " + optimalParentheses);
  console.log("Minimum multiplications: " + dp[0][n-1]);
  
  return { cost: dp[0][n-1], parentheses: optimalParentheses };
}

// Test cases
console.log("=== Testing Matrix Chain Multiplication DP ===");
matrixChainMultiplicationWithParentheses([1, 2, 3, 4, 3]);
matrixChainMultiplicationWithParentheses([40, 20, 30, 10, 30]);`}
        explanation="DP solution with parenthesization tracking: store optimal split points and reconstruct the optimal parenthesization. Time: O(n³), Space: O(n²)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Same matrix chain problem, but also reconstruct and show the optimal parenthesization (how to group matrices).",
              details: [
                "First compute DP table (same as before)",
                "Then backtrack to reconstruct optimal parenthesization",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Backtracking: store split points in separate table. After computing DP, trace back to reconstruct parenthesization.",
              keywords: [
                "backtracking",
                "reconstruction",
                "interval DP",
                "parenthesization",
              ],
              details: [
                "Use split table to track optimal split points",
                "Recursively reconstruct parenthesization",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "DP table (already built), split table split[i][j] stores optimal split point for matrices i to j.",
              details: [
                "Store split point when updating dp[i][j]",
                "Use split table to reconstruct solution",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Same DP algorithm, but also store split[i][j] = k when dp[i][j] is minimized. To reconstruct: recursively print (A[i]...A[k]) and (A[k+1]...A[j]) with parentheses.",
              details: [
                "Store split point when finding minimum",
                "Recursive reconstruction builds parenthesization",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Time O(n³) for DP + O(n) for reconstruction. Space O(n²) for both tables. Same complexity as basic version.",
              details: [
                "Reconstruction is linear in number of matrices",
                "Split table adds no extra time complexity",
              ],
            },
          ],
          pattern: "2D DP with Backtracking (Interval DP)",
          complexity: {
            time: "O(n³) for DP + O(n) for reconstruction",
            space: "O(n²)",
          },
        }}
      />

      <ProblemBlock
        title="Palindrome Partitioning"
        difficulty="Hard"
        description="Find the minimum number of cuts needed to partition a string into palindromes."
        solution={`// Palindrome Partitioning

function palindromePartitioning(s) {
  console.log("=== Palindrome Partitioning ===");
  console.log("String:", s);
  
  const n = s.length;
  
  // Create DP table: dp[i][j] = true if s[i...j] is palindrome
  const isPalindrome = Array(n).fill().map(() => Array(n).fill(false));
  
  console.log("\\nStep 1: Precompute palindromes");
  
  // Single characters are palindromes
  for (let i = 0; i < n; i++) {
    isPalindrome[i][i] = true;
    console.log("  isPalindrome[" + i + "][" + i + "] = true (single character)");
  }
  
  // Two characters
  for (let i = 0; i < n - 1; i++) {
    if (s[i] === s[i + 1]) {
      isPalindrome[i][i + 1] = true;
      console.log("  isPalindrome[" + i + "][" + (i + 1) + "] = true (two characters)");
    }
  }
  
  // Longer palindromes
  for (let length = 3; length <= n; length++) {
    for (let i = 0; i <= n - length; i++) {
      const j = i + length - 1;
      
      if (s[i] === s[j] && isPalindrome[i + 1][j - 1]) {
        isPalindrome[i][j] = true;
        console.log("  isPalindrome[" + i + "][" + j + "] = true (longer palindrome)");
      }
    }
  }
  
  console.log("\\nStep 2: Find minimum cuts");
  
  // Create DP array: cuts[i] = minimum cuts for s[0...i]
  const cuts = new Array(n).fill(Infinity);
  
  for (let i = 0; i < n; i++) {
    console.log("\\n  Computing cuts[" + i + "]:");
    
    // If s[0...i] is palindrome, no cuts needed
    if (isPalindrome[0][i]) {
      cuts[i] = 0;
      console.log("    s[0..." + i + "] is palindrome, cuts = 0");
    } else {
      // Try all possible cuts
      for (let j = 0; j < i; j++) {
        console.log("    Trying cut at " + j + ":");
        
        if (isPalindrome[j + 1][i]) {
          const newCuts = cuts[j] + 1;
          console.log("      s[" + (j + 1) + "..." + i + "] is palindrome, cuts = " + cuts[j] + " + 1 = " + newCuts);
          cuts[i] = Math.min(cuts[i], newCuts);
        } else {
          console.log("      s[" + (j + 1) + "..." + i + "] is not palindrome, skip");
        }
      }
    }
    
    console.log("    Final cuts[" + i + "] = " + cuts[i]);
  }
  
  console.log("\\nFinal cuts array:", cuts);
  console.log("Result: Minimum cuts = " + cuts[n - 1]);
  
  return cuts[n - 1];
}

// Alternative: Count all possible palindrome partitions
function countPalindromePartitions(s) {
  console.log("\\n=== Count Palindrome Partitions ===");
  console.log("String:", s);
  
  const n = s.length;
  
  // Precompute palindromes
  const isPalindrome = Array(n).fill().map(() => Array(n).fill(false));
  
  for (let i = 0; i < n; i++) {
    isPalindrome[i][i] = true;
  }
  
  for (let i = 0; i < n - 1; i++) {
    if (s[i] === s[i + 1]) {
      isPalindrome[i][i + 1] = true;
    }
  }
  
  for (let length = 3; length <= n; length++) {
    for (let i = 0; i <= n - length; i++) {
      const j = i + length - 1;
      if (s[i] === s[j] && isPalindrome[i + 1][j - 1]) {
        isPalindrome[i][j] = true;
      }
    }
  }
  
  // Count partitions
  const count = new Array(n).fill(0);
  count[0] = 1; // Empty string has 1 partition
  
  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      if (isPalindrome[j][i]) {
        count[i] += (j === 0) ? 1 : count[j - 1];
      }
    }
  }
  
  console.log("Number of palindrome partitions: " + count[n - 1]);
  return count[n - 1];
}

// Test cases
console.log("=== Testing Palindrome Partitioning ===");
palindromePartitioning("aab");
countPalindromePartitions("aab");`}
        explanation="DP solution: precompute all palindromes, then find minimum cuts. For each position, try all possible cuts and take minimum. Time: O(n²), Space: O(n²)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Find minimum cuts needed to partition string into palindromes. Each partition must be a palindrome.",
              details: [
                "Example: 'aab' → 1 cut (aa|b)",
                "Return minimum number of cuts",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Two-step DP: first precompute all palindromes, then find minimum cuts. For each position, try all possible cuts and take minimum.",
              keywords: ["2D DP", "palindrome", "partitioning", "optimization"],
              details: [
                "Step 1: isPalindrome[i][j] = true if s[i..j] is palindrome",
                "Step 2: cuts[i] = minimum cuts for s[0..i]",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "2D boolean array isPalindrome[i][j] for palindrome check. 1D array cuts[i] for minimum cuts.",
              details: [
                "Precompute palindromes using DP",
                "Use cuts array to find minimum",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Precompute palindromes: for length L from 1 to n, for i from 0 to n-L, j=i+L-1. If L<=2, isPalindrome[i][j] = (s[i]==s[j]). Else isPalindrome[i][j] = (s[i]==s[j] && isPalindrome[i+1][j-1]). Then for cuts: cuts[0]=0. For i from 1 to n-1: if isPalindrome[0][i], cuts[i]=0. Else cuts[i] = min(1+cuts[j-1]) for all j where isPalindrome[j][i].",
              details: [
                "Precompute all palindromes first",
                "Then find minimum cuts using precomputed palindromes",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Time O(n²) - precompute palindromes O(n²), find cuts O(n²). Space O(n²) for palindrome table, O(n) for cuts array.",
              details: [
                "Classic two-step DP problem",
                "Can optimize space for palindrome check",
              ],
            },
          ],
          pattern: "2D DP (Palindrome Partitioning)",
          complexity: {
            time: "O(n²)",
            space: "O(n²)",
          },
        }}
      />

      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h3 className="text-2xl font-bold text-white mb-4">
          Advanced DP Applications
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-lg font-semibold text-white mb-2">
              Optimization Problems
            </h4>
            <p className="text-gray-300 text-sm">
              Knapsack, Coin Change, Longest Path, Maximum Subarray Sum, Edit
              Distance.
            </p>
          </div>
          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-lg font-semibold text-white mb-2">
              Counting Problems
            </h4>
            <p className="text-gray-300 text-sm">
              Number of ways to reach destination, Count BSTs, Palindrome
              partitioning, Subset sum count.
            </p>
          </div>
          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-lg font-semibold text-white mb-2">
              Decision Problems
            </h4>
            <p className="text-gray-300 text-sm">
              Subset sum, Partition equal subset sum, Word break, Regular
              expression matching.
            </p>
          </div>
          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-lg font-semibold text-white mb-2">
              Game Theory
            </h4>
            <p className="text-gray-300 text-sm">
              Optimal strategy for games, Nim game, Stone game, Predict the
              winner.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h3 className="text-2xl font-bold text-white mb-4">
          DP Optimization Techniques
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold text-green-400 mb-3">
              ✅ Space Optimization
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                • <strong>Rolling Array:</strong> Use only necessary
                rows/columns
              </li>
              <li>
                • <strong>1D Array:</strong> Convert 2D DP to 1D when possible
              </li>
              <li>
                • <strong>Variables:</strong> Use variables instead of arrays
                for simple cases
              </li>
              <li>
                • <strong>Bitmasking:</strong> Use bits to represent states
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-blue-400 mb-3">
              ⚡ Time Optimization
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                • <strong>Memoization:</strong> Cache results to avoid
                recomputation
              </li>
              <li>
                • <strong>Bottom-up:</strong> Fill table in optimal order
              </li>
              <li>
                • <strong>State Compression:</strong> Reduce state space
              </li>
              <li>
                • <strong>Mathematical Optimization:</strong> Use mathematical
                insights
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h3 className="text-2xl font-bold text-white mb-4">
          Common DP Patterns
        </h3>
        <div className="space-y-4">
          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-lg font-semibold text-white mb-2">1. 1D DP</h4>
            <p className="text-gray-300 text-sm">
              Fibonacci, Climbing stairs, House robber, Coin change.
            </p>
          </div>
          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-lg font-semibold text-white mb-2">2. 2D DP</h4>
            <p className="text-gray-300 text-sm">
              LCS, Edit distance, Knapsack, Unique paths, Minimum path sum.
            </p>
          </div>
          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-lg font-semibold text-white mb-2">
              3. Interval DP
            </h4>
            <p className="text-gray-300 text-sm">
              Matrix chain multiplication, Palindrome partitioning, Burst
              balloons.
            </p>
          </div>
          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-lg font-semibold text-white mb-2">
              4. Tree DP
            </h4>
            <p className="text-gray-300 text-sm">
              Binary tree problems, Tree diameter, Tree coloring, Tree path sum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
