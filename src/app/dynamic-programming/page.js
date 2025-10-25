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
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-semibold transition-colors"
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
        solution={`// Fibonacci with Memoization

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
fibonacciMemo(20);`}
        explanation="Memoization stores results of subproblems in a table to avoid redundant calculations. Time: O(n), Space: O(n)."
      />

      <ProblemBlock
        title="Longest Common Subsequence with Memoization"
        difficulty="Medium"
        description="Find the length of the longest common subsequence between two strings using memoization."
        solution={`// LCS with Memoization

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
lcsMemo("AGGTAB", "GXTXAYB");`}
        explanation="Memoization stores LCS results for each (i,j) pair to avoid recalculating the same subproblems. Time: O(m×n), Space: O(m×n)."
      />

      <ProblemBlock
        title="Coin Change (Naive Recursive Solution)"
        difficulty="Medium"
        description="Find the minimum number of coins needed to make a given amount using naive recursion."
        solution={`// Coin Change - Naive Recursive Solution

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
coinChangeNaive([2, 5, 10], 3);`}
        explanation="Naive recursive solution tries all possible combinations of coins. For each coin, recursively find minimum coins for remaining amount. Time: O(amount^coins), Space: O(amount)."
      />

      <ProblemBlock
        title="Coin Change (DP Solution)"
        difficulty="Medium"
        description="Optimized coin change solution using dynamic programming with memoization."
        solution={`// Coin Change - DP Solution

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
coinChangeTab([2, 5, 10], 3);`}
        explanation="DP solution uses memoization to store results of subproblems. Tabulation version builds solution bottom-up. Time: O(amount×coins), Space: O(amount)."
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
        solution={`// Fibonacci with Tabulation

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
fibonacciTabOptimized(10);`}
        explanation="Tabulation fills the DP table bottom-up, solving smaller subproblems first. Time: O(n), Space: O(n) or O(1) with optimization."
      />

      <ProblemBlock
        title="Longest Common Subsequence with Tabulation"
        difficulty="Medium"
        description="Find the length of the longest common subsequence between two strings using tabulation."
        solution={`// LCS with Tabulation

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
lcsTab("AGGTAB", "GXTXAYB");`}
        explanation="Tabulation builds the DP table bottom-up, filling each cell based on previously computed values. Time: O(m×n), Space: O(m×n)."
      />

      <ProblemBlock
        title="Maximum Cuts"
        difficulty="Medium"
        description="Find the maximum number of cuts that can be made on a rod of length n using cuts of lengths a, b, and c."
        solution={`// Maximum Cuts

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
maximumCuts(7, 2, 3, 5);`}
        explanation="DP solution: for each rod length, try all possible cuts and take maximum. dp[i] = 1 + max(dp[i-a], dp[i-b], dp[i-c]) if cuts are possible. Time: O(n), Space: O(n)."
      />

      <ProblemBlock
        title="Minimum coins to make a value"
        difficulty="Medium"
        description="Find the minimum number of coins needed to make a given value using coins of given denominations."
        solution={`// Minimum coins to make a value

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
countWaysToMakeValue([1, 2, 3], 4);`}
        explanation="DP solution: for each value, try all coins and take minimum. dp[i] = min(dp[i], 1 + dp[i-coin]) for all valid coins. Time: O(value×coins), Space: O(value)."
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
        solution={`// Longest Common Subsequence - Basic Implementation

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
longestCommonSubsequence("AGGTAB", "GXTXAYB");`}
        explanation="LCS uses DP to find the longest subsequence common to both strings. If characters match, add 1 to diagonal value; otherwise, take maximum of top and left values."
      />

      <ProblemBlock
        title="LCS - Part 2: Print the Actual LCS"
        difficulty="Medium"
        description="Not only find the length but also print the actual longest common subsequence."
        solution={`// LCS - Print the Actual Subsequence

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
printLCS("AGGTAB", "GXTXAYB");`}
        explanation="After filling the DP table, backtrack from dp[m][n] to dp[0][0] to reconstruct the actual LCS. Move diagonally when characters match, otherwise move in the direction of the maximum value."
      />

      <ProblemBlock
        title="Variation of LCS"
        difficulty="Medium"
        description="Solve variations of LCS problem like Longest Common Substring, Shortest Common Supersequence."
        solution={`// LCS Variations

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
shortestCommonSupersequence("AGGTAB", "GXTXAYB");`}
        explanation="LCS variations: Substring requires resetting to 0 when characters don't match, while supersequence uses minimum of top and left values plus 1."
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
        solution={`// Edit Distance Problem

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
editDistance("saturday", "sunday");`}
        explanation="Edit distance uses DP to find minimum operations. If characters match, take diagonal value; otherwise, take minimum of insert, delete, or replace operations plus 1."
      />

      <ProblemBlock
        title="Edit Distance Problem - DP Solution with Operations"
        difficulty="Medium"
        description="Not only find the edit distance but also show the actual operations performed."
        solution={`// Edit Distance with Operations

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
editDistanceWithOperations("saturday", "sunday");`}
        explanation="After computing edit distance, backtrack through the DP table to determine which operations were used to achieve the minimum distance."
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
        solution={`// Longest Increasing Subsequence

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
longestIncreasingSubsequence([3, 10, 2, 1, 20]);`}
        explanation="LIS uses DP where dp[i] represents the length of LIS ending at index i. For each element, check all previous elements and update if current element is greater."
      />

      <ProblemBlock
        title="LIS in O(n log n) - Binary Search Approach"
        difficulty="Hard"
        description="Optimized LIS solution using binary search to achieve O(n log n) time complexity."
        solution={`// LIS in O(n log n) using Binary Search

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
lisOptimized([3, 10, 2, 1, 20]);`}
        explanation="Optimized LIS uses binary search to maintain the smallest tail of each LIS length. Time: O(n log n), Space: O(n)."
      />

      <ProblemBlock
        title="Variation of LIS - Part 1: Longest Decreasing Subsequence"
        difficulty="Medium"
        description="Find the longest decreasing subsequence and other LIS variations."
        solution={`// LIS Variations

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
maxSumIncreasingSubsequence([1, 101, 2, 3, 100, 4, 5]);`}
        explanation="LIS variations: LDS uses > instead of <, Bitonic combines LIS and LDS, Max Sum uses array values instead of length."
      />

      <ProblemBlock
        title="Variations of LIS - Part 2: Advanced Problems"
        difficulty="Hard"
        description="Solve advanced LIS variations like Minimum Operations to Make Array Increasing."
        solution={`// Advanced LIS Variations

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
lis2D([[1, 1], [2, 3], [3, 2], [4, 4]]);`}
        explanation="Advanced LIS variations include minimum operations, LIS with allowed changes, and 2D LIS problems that extend the basic LIS concept."
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
        solution={`// 0/1 Knapsack - Naive Recursive Solution

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

knapsackRecursive(weights, values, capacity);`}
        explanation="Naive recursive solution tries all possible combinations. For each item, we either take it or don't take it. Time: O(2^n), Space: O(n)."
      />

      <ProblemBlock
        title="0/1 Knapsack Problem - DP Solution"
        difficulty="Medium"
        description="Solve 0/1 knapsack problem using dynamic programming with memoization."
        solution={`// 0/1 Knapsack - DP Solution

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
knapsackDPSpaceOptimized(weights, values, capacity);`}
        explanation="DP solution builds a table where dp[i][w] represents maximum value using first i items with capacity w. Time: O(n×W), Space: O(n×W) or O(W) with optimization."
      />

      <ProblemBlock
        title="Minimum Jumps to reach at end"
        difficulty="Medium"
        description="Find the minimum number of jumps needed to reach the end of an array where each element represents the maximum jump length from that position."
        solution={`// Minimum Jumps to reach at end

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
minJumpsGreedy([2, 3, 1, 1, 4]);`}
        explanation="DP solution: for each position, check all previous positions that can reach it and take minimum jumps. Greedy approach: track maximum reachable position and steps remaining. Time: O(n²) DP, O(n) Greedy."
      />

      <ProblemBlock
        title="Optimal Strategy for a Game"
        difficulty="Hard"
        description="Two players take turns picking numbers from either end of an array. Find the maximum value the first player can guarantee."
        solution={`// Optimal Strategy for a Game

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
optimalStrategyForGame([2, 2, 2, 2]);`}
        explanation="DP solution: for each subarray, player can take either end. After taking, opponent will take optimally, so we get minimum of remaining subarrays. Time: O(n²), Space: O(n²)."
      />

      <ProblemBlock
        title="Egg Dropping Puzzle - Part 1"
        difficulty="Hard"
        description="Find the minimum number of attempts needed to determine the critical floor where an egg breaks."
        solution={`// Egg Dropping Puzzle - Part 1

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
eggDroppingPuzzle(3, 14);`}
        explanation="DP solution: for each floor, consider both scenarios (egg breaks or doesn't break) and take maximum. Then take minimum over all floors. Time: O(eggs×floors²), Space: O(eggs×floors)."
      />

      <ProblemBlock
        title="Egg Dropping Puzzle - Part 2"
        difficulty="Hard"
        description="Optimized egg dropping solution using binary search approach."
        solution={`// Egg Dropping Puzzle - Part 2 (Optimized)

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
eggDropping2Eggs(10);`}
        explanation="Optimized version uses binary search to find optimal floor. For 2 eggs, mathematical formula gives direct answer. Time: O(eggs×floors×log(floors)), Space: O(eggs×floors)."
      />

      <ProblemBlock
        title="Count BSTs with n keys"
        difficulty="Medium"
        description="Count the number of structurally unique BSTs that can be formed with n distinct keys."
        solution={`// Count BSTs with n keys

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
countBSTsCatalan(4);`}
        explanation="DP solution: for each root, multiply left and right subtree counts. This gives Catalan numbers. Time: O(n²), Space: O(n). Direct formula: C(n) = (2n)!/((n+1)!×n!)."
      />

      <ProblemBlock
        title="Maximum sum with no two consecutive"
        difficulty="Medium"
        description="Find the maximum sum of elements in an array such that no two elements are adjacent."
        solution={`// Maximum sum with no two consecutive

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
maxSumNoTwoConsecutiveOptimized([3, 2, 7, 10]);`}
        explanation="DP solution: for each element, choose maximum of including it (with dp[i-2]) or excluding it (dp[i-1]). Space-optimized version uses only two variables. Time: O(n), Space: O(n) or O(1)."
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
        solution={`// Allocate Minimum Pages - Naive Method

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
allocateMinimumPagesNaive([10, 20, 30, 40], 2);`}
        explanation="Naive approach tries all possible ways to partition books among students. For each partition, calculate the maximum pages assigned to any student and find the minimum of these maximums. Time: O(n^m), Space: O(m)."
      />

      <ProblemBlock
        title="Allocate Minimum Pages (DP Solution)"
        difficulty="Hard"
        description="Optimized solution using dynamic programming to find minimum pages allocation."
        solution={`// Allocate Minimum Pages - DP Solution

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
allocateMinimumPagesOptimized([10, 20, 30, 40], 2);`}
        explanation="DP solution uses table dp[i][j] to store minimum max pages for first i books with j students. Try all possible ways to assign last few books to last student. Time: O(n²×m), Space: O(n×m) or O(m) with optimization."
      />

      <ProblemBlock
        title="Allocate Minimum Pages (Binary Search + DP)"
        difficulty="Hard"
        description="Most efficient solution using binary search on answer with DP validation."
        solution={`// Allocate Minimum Pages - Binary Search + DP

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
allocateMinimumPagesBSOptimized([10, 20, 30, 40], 2);`}
        explanation="Binary search approach: search for minimum maximum pages that allows allocation. For each candidate, check if it's possible to allocate books within that limit. Time: O(n×log(sum)), Space: O(1)."
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
