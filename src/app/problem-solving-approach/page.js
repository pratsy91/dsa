"use client";
import Link from "next/link";
import { useState } from "react";

export default function ProblemSolvingApproach() {
  const [activeTab, setActiveTab] = useState("overview");

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
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Problem Solving Approach
          </h1>
          <p className="text-gray-400 mt-2">
            Master the art of choosing the right data structure and algorithm
          </p>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-gray-800/50 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-2 overflow-x-auto">
            {[
              { id: "overview", label: "📋 Overview" },
              { id: "problem-analysis", label: "🔍 Problem Analysis" },
              { id: "constraints", label: "⏱️ Constraints & Complexity" },
              { id: "data-structures", label: "📊 Data Structures Guide" },
              { id: "algorithms", label: "⚡ Algorithms Guide" },
              { id: "optimization", label: "🚀 Optimization Techniques" },
              { id: "examples", label: "💡 Walkthrough Examples" },
              { id: "pitfalls", label: "⚠️ Common Pitfalls" },
              { id: "debugging", label: "🔧 Testing & Debugging" },
              { id: "interview-tips", label: "💼 Interview Tips" },
              { id: "practice-strategy", label: "📚 Practice Strategy" },
              { id: "code-templates", label: "💻 Code Templates" },
              { id: "cheatsheet", label: "📄 Quick Reference" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 font-semibold whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? "text-blue-400 border-b-2 border-blue-400"
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
        {activeTab === "overview" && <OverviewSection />}
        {activeTab === "problem-analysis" && <ProblemAnalysisSection />}
        {activeTab === "constraints" && <ConstraintsSection />}
        {activeTab === "data-structures" && <DataStructuresSection />}
        {activeTab === "algorithms" && <AlgorithmsSection />}
        {activeTab === "optimization" && <OptimizationSection />}
        {activeTab === "examples" && <ExamplesSection />}
        {activeTab === "pitfalls" && <PitfallsSection />}
        {activeTab === "debugging" && <DebuggingSection />}
        {activeTab === "interview-tips" && <InterviewTipsSection />}
        {activeTab === "practice-strategy" && <PracticeStrategySection />}
        {activeTab === "code-templates" && <CodeTemplatesSection />}
        {activeTab === "cheatsheet" && <CheatsheetSection />}
      </main>
    </div>
  );
}

// Overview Section
function OverviewSection() {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 rounded-2xl p-8 border border-blue-500/30">
        <h2 className="text-3xl font-bold text-white mb-4">
          How to Approach Any DSA Problem 🎯
        </h2>
        <p className="text-gray-300 text-lg mb-6">
          When an interviewer asks you a DSA problem, having a systematic
          approach is crucial. This guide will help you identify which data
          structure and algorithm to use for any given problem.
        </p>
        <p className="text-gray-400">
          The key is <strong>pattern recognition</strong> - the more problems
          you solve, the faster you&apos;ll identify these patterns!
        </p>
      </div>

      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-6">
          The 5-Step Problem Solving Framework
        </h2>

        <div className="space-y-6">
          <StepCard
            number={1}
            title="Understand & Clarify"
            description="Read the problem carefully. Ask clarifying questions about constraints, edge cases, and expected output format."
            examples={[
              "What are the input constraints? (n ≤ 10⁵?)",
              "Are there any edge cases? (empty array, single element?)",
              "What's the expected time/space complexity?",
              "Can the input contain negative numbers?",
            ]}
            color="blue"
          />

          <StepCard
            number={2}
            title="Identify the Pattern"
            description="Look for keywords and patterns that hint at specific data structures or algorithms."
            examples={[
              "'Find k elements' → Heap",
              "'Range queries' → Segment Tree / Prefix Sum",
              "'Shortest path' → BFS / Dijkstra",
              "'Generate all combinations' → Backtracking",
            ]}
            color="purple"
          />

          <StepCard
            number={3}
            title="Choose Data Structure"
            description="Based on the operations you need (lookup, insertion, deletion, ordering), select the appropriate data structure."
            examples={[
              "Fast lookup → Hash Table",
              "Maintain order + fast operations → Balanced BST",
              "Min/Max access → Heap",
              "Both ends access → Deque",
            ]}
            color="green"
          />

          <StepCard
            number={4}
            title="Select Algorithm"
            description="Choose the algorithm that matches the problem type and constraints."
            examples={[
              "Optimization with overlapping subproblems → DP",
              "Local optimum = global optimum → Greedy",
              "Need all possibilities → Backtracking",
              "Divide into smaller problems → Divide & Conquer",
            ]}
            color="orange"
          />

          <StepCard
            number={5}
            title="Implement & Optimize"
            description="Start with a simple solution, then optimize. Always state time and space complexity before coding."
            examples={[
              "Start with brute force if needed",
              "Optimize step by step",
              "Consider edge cases",
              "Test with examples",
            ]}
            color="red"
          />
        </div>
      </div>

      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-2xl font-bold text-white mb-4">
          Quick Decision Tree
        </h2>
        <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
          <div className="space-y-4 text-gray-300">
            <div>
              <strong className="text-white">
                Problem: &quot;Find kth largest element&quot;
              </strong>
              <div className="ml-4 mt-2 space-y-1 text-sm">
                <div>↓ Need top k? → Heap candidate</div>
                <div>↓ Can we use selection? → Quickselect O(n) average</div>
                <div>↓ Need all k elements sorted? → Min Heap of size k</div>
                <div className="text-green-400">
                  ✓ Choose: Min Heap approach
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Problem Analysis Section
function ProblemAnalysisSection() {
  return (
    <div className="space-y-8">
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Problem Analysis Framework
        </h2>
        <p className="text-gray-300 mb-6">
          Ask yourself these questions to identify the right approach:
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <QuestionCard
            question="Do I need to store data?"
            yes="Choose appropriate data structure"
            no="Focus on algorithm"
            color="blue"
          />

          <QuestionCard
            question="What operations am I performing most?"
            yes="Fast lookup → Hash Table"
            no="Maintain order → BST / Heap"
            color="purple"
          />

          <QuestionCard
            question="What's the constraint size?"
            yes="Small (n ≤ 20) → Backtracking / Brute Force"
            no="Large (n ≤ 10⁶) → O(n) or O(n log n) max"
            color="green"
          />

          <QuestionCard
            question="Is there optimal substructure?"
            yes="Overlapping subproblems → DP"
            no="Greedy choice works → Greedy"
            color="orange"
          />

          <QuestionCard
            question="Do I need all possibilities?"
            yes="Backtracking / DFS"
            no="Optimization algorithm"
            color="red"
          />

          <QuestionCard
            question="Is the data sorted?"
            yes="Binary Search / Two Pointers"
            no="Sort first or use Hash Map"
            color="cyan"
          />
        </div>
      </div>

      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Common Problem Patterns
        </h2>

        <div className="space-y-4">
          <PatternCard
            pattern="'Find k elements'"
            solution="Heap"
            examples={["kth largest", "top k frequent", "k closest points"]}
          />
          <PatternCard
            pattern="'Range queries'"
            solution="Segment Tree / Prefix Sum"
            examples={["range sum", "range min/max", "range updates"]}
          />
          <PatternCard
            pattern="'Connected components'"
            solution="Union-Find / DFS"
            examples={[
              "number of islands",
              "friend circles",
              "graph connectivity",
            ]}
          />
          <PatternCard
            pattern="'Shortest path'"
            solution="BFS (unweighted) / Dijkstra (weighted)"
            examples={[
              "shortest path in grid",
              "network delay",
              "cheapest flights",
            ]}
          />
          <PatternCard
            pattern="'Two elements sum to target'"
            solution="Two Pointers / Hash Map"
            examples={["two sum", "three sum", "four sum"]}
          />
          <PatternCard
            pattern="'Longest/shortest substring with condition'"
            solution="Sliding Window"
            examples={[
              "longest substring without repeating",
              "minimum window substring",
            ]}
          />
          <PatternCard
            pattern="'Valid arrangement'"
            solution="Stack / Greedy"
            examples={["valid parentheses", "merge intervals", "meeting rooms"]}
          />
          <PatternCard
            pattern="'Count ways to do X'"
            solution="Dynamic Programming"
            examples={["unique paths", "coin change", "climbing stairs"]}
          />
          <PatternCard
            pattern="'Generate all X'"
            solution="Backtracking"
            examples={["all permutations", "all subsets", "all combinations"]}
          />
          <PatternCard
            pattern="'Maximum/Minimum in range'"
            solution="Segment Tree / Sparse Table"
            examples={["range maximum query", "range minimum query"]}
          />
          <PatternCard
            pattern="'Palindrome problems'"
            solution="Two Pointers / DP"
            examples={["longest palindrome", "palindrome partitioning"]}
          />
          <PatternCard
            pattern="'Cycle detection'"
            solution="Floyd's Cycle Detection / DFS"
            examples={["linked list cycle", "graph cycle", "duplicate number"]}
          />
          <PatternCard
            pattern="'Optimize repeated calculations'"
            solution="Memoization / DP"
            examples={["fibonacci", "matrix chain multiplication"]}
          />
        </div>
      </div>

      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Comprehensive Keyword → Solution Mapping
        </h2>
        <p className="text-gray-300 mb-6">
          Quick reference for problem keywords and their corresponding
          solutions:
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <KeywordMapping
            keywords={["minimum", "maximum", "optimize", "best"]}
            solution="Dynamic Programming / Greedy"
            color="blue"
          />
          <KeywordMapping
            keywords={["all possible", "combinations", "permutations"]}
            solution="Backtracking"
            color="purple"
          />
          <KeywordMapping
            keywords={["kth largest", "kth smallest", "top k"]}
            solution="Heap / Quickselect"
            color="green"
          />
          <KeywordMapping
            keywords={["contiguous", "subarray", "substring"]}
            solution="Sliding Window / Kadane's"
            color="orange"
          />
          <KeywordMapping
            keywords={["duplicate", "frequency", "count"]}
            solution="Hash Map / Hash Set"
            color="red"
          />
          <KeywordMapping
            keywords={["sorted", "rotated array"]}
            solution="Binary Search / Two Pointers"
            color="cyan"
          />
          <KeywordMapping
            keywords={["tree", "hierarchical", "parent-child"]}
            solution="DFS / BFS / Tree Traversal"
            color="teal"
          />
          <KeywordMapping
            keywords={["graph", "connected", "path"]}
            solution="BFS / DFS / Union-Find"
            color="yellow"
          />
          <KeywordMapping
            keywords={["prefix", "autocomplete", "dictionary"]}
            solution="Trie"
            color="pink"
          />
          <KeywordMapping
            keywords={["range query", "range update"]}
            solution="Segment Tree / BIT"
            color="indigo"
          />
          <KeywordMapping
            keywords={["monotonic", "next greater", "next smaller"]}
            solution="Monotonic Stack"
            color="violet"
          />
          <KeywordMapping
            keywords={["merge", "intervals", "overlapping"]}
            solution="Sorting + Greedy"
            color="lime"
          />
        </div>
      </div>
    </div>
  );
}

// Constraints Section
function ConstraintsSection() {
  return (
    <div className="space-y-8">
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Understanding Constraints & Time Complexity
        </h2>
        <p className="text-gray-300 mb-6">
          The constraint size directly determines which algorithmic approach
          will work. Here&apos;s how to map constraints to time complexity:
        </p>

        <div className="space-y-4">
          <ConstraintCard
            constraint="n ≤ 10-12"
            complexity="O(n!), O(n^6)"
            approach="Brute force with permutations"
            examples={["Traveling Salesman (small)", "All permutations"]}
            color="red"
          />
          <ConstraintCard
            constraint="n ≤ 18-22"
            complexity="O(2^n), O(n * 2^n)"
            approach="Backtracking, Bit manipulation"
            examples={["Subset generation", "Bitmask DP", "TSP with bitmask"]}
            color="orange"
          />
          <ConstraintCard
            constraint="n ≤ 100"
            complexity="O(n^4), O(n^3)"
            approach="Dynamic Programming (3D/4D)"
            examples={["Floyd-Warshall", "4D DP problems"]}
            color="yellow"
          />
          <ConstraintCard
            constraint="n ≤ 1,000"
            complexity="O(n^2), O(n^2 log n)"
            approach="DP, Nested loops"
            examples={["2D DP", "All pairs shortest path", "Bubble sort"]}
            color="blue"
          />
          <ConstraintCard
            constraint="n ≤ 10,000"
            complexity="O(n^2)"
            approach="Optimized O(n^2)"
            examples={["Selection sort", "Simple DP"]}
            color="cyan"
          />
          <ConstraintCard
            constraint="n ≤ 100,000"
            complexity="O(n log n)"
            approach="Sorting, Heap, Divide & Conquer"
            examples={["Merge sort", "Heap operations", "Binary search tree"]}
            color="green"
          />
          <ConstraintCard
            constraint="n ≤ 1,000,000"
            complexity="O(n)"
            approach="Linear algorithms, Hash maps"
            examples={[
              "Two pointers",
              "Kadane's",
              "Sliding window",
              "Hash map",
            ]}
            color="teal"
          />
          <ConstraintCard
            constraint="n ≤ 10^9"
            complexity="O(log n), O(√n)"
            approach="Binary search, Math"
            examples={["Binary search", "GCD", "Prime factorization"]}
            color="purple"
          />
          <ConstraintCard
            constraint="n ≤ 10^18"
            complexity="O(log n)"
            approach="Binary search, Matrix exponentiation"
            examples={["Binary search on answer", "Fast exponentiation"]}
            color="pink"
          />
        </div>
      </div>

      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Time Complexity Quick Reference
        </h2>

        <div className="space-y-4">
          <ComplexityCard
            complexity="O(1)"
            name="Constant"
            operations="Direct access, arithmetic operations"
            examples={[
              "Array access arr[i]",
              "Hash map lookup",
              "Math operations",
            ]}
          />
          <ComplexityCard
            complexity="O(log n)"
            name="Logarithmic"
            operations="Dividing problem in half each time"
            examples={[
              "Binary search",
              "Balanced BST operations",
              "Heap operations",
            ]}
          />
          <ComplexityCard
            complexity="O(n)"
            name="Linear"
            operations="Single loop through data"
            examples={["Linear search", "Array traversal", "Finding max/min"]}
          />
          <ComplexityCard
            complexity="O(n log n)"
            name="Linearithmic"
            operations="Divide and conquer with merging"
            examples={["Merge sort", "Quick sort (average)", "Heap sort"]}
          />
          <ComplexityCard
            complexity="O(n²)"
            name="Quadratic"
            operations="Nested loops"
            examples={["Bubble sort", "Selection sort", "2D DP"]}
          />
          <ComplexityCard
            complexity="O(n³)"
            name="Cubic"
            operations="Triple nested loops"
            examples={["Floyd-Warshall", "3D DP", "Matrix multiplication"]}
          />
          <ComplexityCard
            complexity="O(2^n)"
            name="Exponential"
            operations="Generating all subsets"
            examples={[
              "All subsets",
              "Fibonacci (naive)",
              "Traveling salesman",
            ]}
          />
          <ComplexityCard
            complexity="O(n!)"
            name="Factorial"
            operations="Generating all permutations"
            examples={["All permutations", "Brute force TSP"]}
          />
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-900/40 to-red-900/40 rounded-xl p-8 border border-orange-500/30">
        <h2 className="text-2xl font-bold text-white mb-4">
          ⚡ Pro Tip: 1 Second Rule
        </h2>
        <p className="text-gray-300 mb-4">
          Most online judges allow ~10^8 operations per second. Use this rule:
        </p>
        <ul className="space-y-2 text-gray-300">
          <li>
            • <strong>10^8 operations = 1 second</strong>
          </li>
          <li>
            • If n = 10^5, then O(n²) = 10^10 operations ≈ 100 seconds = TLE ❌
          </li>
          <li>
            • If n = 10^5, then O(n log n) = ~10^6 operations ≈ 0.01 seconds =
            AC ✓
          </li>
          <li>
            • Always calculate: <code>time_complexity(n) ≤ 10^8</code>
          </li>
        </ul>
      </div>
    </div>
  );
}

// Data Structures Section
function DataStructuresSection() {
  return (
    <div className="space-y-8">
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Data Structure Selection Guide
        </h2>
        <p className="text-gray-300 mb-6">
          Choose the right data structure based on your needs:
        </p>

        <div className="space-y-6">
          <DSGuideCard
            name="Arrays / Strings"
            keywords={["subarray", "substring", "contiguous", "sliding window"]}
            patterns={[
              "Two pointers",
              "Sliding window",
              "Prefix sum",
              "Kadane's",
            ]}
            operations={["O(1) access", "O(n) search", "O(n) insert/delete"]}
            color="orange"
          />

          <DSGuideCard
            name="Linked Lists"
            keywords={[
              "sequential access",
              "insertion/deletion",
              "no random access",
            ]}
            patterns={["Fast & slow pointers", "Reverse", "Merge"]}
            operations={["O(n) access", "O(1) insert/delete", "O(n) search"]}
            color="indigo"
          />

          <DSGuideCard
            name="Stacks"
            keywords={[
              "LIFO",
              "nearest greater/smaller",
              "valid parentheses",
              "undo",
            ]}
            patterns={["Monotonic stack", "Expression evaluation"]}
            operations={["O(1) push/pop", "O(1) top", "O(n) search"]}
            color="red"
          />

          <DSGuideCard
            name="Queues"
            keywords={["FIFO", "order preservation", "BFS", "level-order"]}
            patterns={["Sliding window max", "Recent requests"]}
            operations={["O(1) enqueue/dequeue", "O(n) search"]}
            color="blue"
          />

          <DSGuideCard
            name="Trees"
            keywords={["hierarchical", "parent-child", "root", "leaf"]}
            patterns={[
              "DFS (pre/in/post)",
              "BFS (level-order)",
              "Tree traversal",
            ]}
            operations={["O(log n) search (BST)", "O(n) traversal"]}
            color="green"
          />

          <DSGuideCard
            name="BST"
            keywords={["sorted", "search in O(log n)", "kth smallest/largest"]}
            patterns={["Inorder traversal", "Binary search on tree"]}
            operations={["O(log n) search", "O(log n) insert/delete"]}
            color="yellow"
          />

          <DSGuideCard
            name="Graphs"
            keywords={["network", "connections", "paths", "cycles"]}
            patterns={["BFS", "DFS", "Topological sort", "Union-Find"]}
            operations={["O(V+E) traversal", "O(V²) or O(E) representation"]}
            color="purple"
          />

          <DSGuideCard
            name="Heap"
            keywords={["kth largest/smallest", "median", "top k", "priority"]}
            patterns={["Min/max heap", "K-way merge"]}
            operations={["O(log n) insert", "O(log n) extract", "O(1) peek"]}
            color="pink"
          />

          <DSGuideCard
            name="Hashing"
            keywords={[
              "frequency count",
              "O(1) lookup",
              "duplicate",
              "anagrams",
            ]}
            patterns={["HashMap/HashSet", "Two-sum pattern"]}
            operations={["O(1) average lookup", "O(1) average insert"]}
            color="cyan"
          />

          <DSGuideCard
            name="Trie"
            keywords={["prefix", "autocomplete", "dictionary", "word search"]}
            patterns={["Prefix matching", "Word validation"]}
            operations={["O(m) search/insert", "m = word length"]}
            color="teal"
          />
        </div>
      </div>
    </div>
  );
}

// Algorithms Section
function AlgorithmsSection() {
  return (
    <div className="space-y-8">
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Algorithm Selection Guide
        </h2>
        <p className="text-gray-300 mb-6">
          Choose the right algorithm based on problem characteristics:
        </p>

        <div className="space-y-6">
          <AlgoGuideCard
            name="Dynamic Programming"
            keywords={[
              "optimization",
              "min/max",
              "count ways",
              "overlapping subproblems",
            ]}
            signs={[
              "Fibonacci-like",
              "choices at each step",
              "optimal substructure",
            ]}
            examples={["LCS", "Edit Distance", "Knapsack", "Coin Change"]}
            complexity="O(n²) to O(n³) typically"
            color="blue"
          />

          <AlgoGuideCard
            name="Greedy"
            keywords={["optimal immediate choice", "scheduling", "intervals"]}
            signs={["Local optimum = global optimum", "No need to backtrack"]}
            examples={[
              "Activity Selection",
              "Fractional Knapsack",
              "Huffman Coding",
            ]}
            complexity="O(n log n) typically"
            color="green"
          />

          <AlgoGuideCard
            name="Backtracking"
            keywords={[
              "generate all",
              "combinations",
              "permutations",
              "subsets",
            ]}
            signs={[
              "Constraint satisfaction",
              "Exhaustive search with pruning",
            ]}
            examples={["N-Queens", "Sudoku", "Rat in Maze", "Subset Sum"]}
            complexity="O(2^n) to O(n!)"
            color="purple"
          />

          <AlgoGuideCard
            name="Divide & Conquer"
            keywords={["merge sort", "quick sort", "binary search"]}
            signs={["Break into smaller subproblems", "Solve and combine"]}
            examples={["Merge Sort", "Quick Sort", "Binary Search", "Power"]}
            complexity="O(n log n) typically"
            color="orange"
          />

          <AlgoGuideCard
            name="Two Pointers"
            keywords={["sorted array", "pair sum", "remove duplicates"]}
            signs={["Array is sorted", "Need to find pairs/triplets"]}
            examples={["Two Sum", "Three Sum", "Container with Water"]}
            complexity="O(n) to O(n²)"
            color="cyan"
          />

          <AlgoGuideCard
            name="Sliding Window"
            keywords={["subarray", "substring", "fixed/variable size"]}
            signs={["Contiguous elements", "Window of elements"]}
            examples={["Maximum Subarray", "Longest Substring", "Anagrams"]}
            complexity="O(n)"
            color="red"
          />

          <AlgoGuideCard
            name="Binary Search"
            keywords={["sorted", "search", "find position"]}
            signs={["Array is sorted", "Need O(log n) search"]}
            examples={["Search in Sorted Array", "Find Peak", "Square Root"]}
            complexity="O(log n)"
            color="yellow"
          />
        </div>
      </div>
    </div>
  );
}

// Optimization Section
function OptimizationSection() {
  return (
    <div className="space-y-8">
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Optimization Techniques & Trade-offs
        </h2>
        <p className="text-gray-300 mb-6">
          Learn how to optimize your solutions and make smart trade-offs:
        </p>

        <div className="space-y-6">
          <OptimizationCard
            title="Space-Time Trade-off"
            concept="Trade space for time or vice versa"
            whenToUse="When one resource is abundant but the other is limited"
            examples={[
              {
                problem: "Fibonacci",
                slow: "Recursion O(2^n) time, O(n) space",
                fast: "DP O(n) time, O(n) space",
                optimal: "DP O(n) time, O(1) space (only keep last 2)",
              },
              {
                problem: "Two Sum",
                slow: "Nested loops O(n²) time, O(1) space",
                fast: "Hash map O(n) time, O(n) space",
              },
            ]}
            color="blue"
          />

          <OptimizationCard
            title="Preprocessing / Precomputation"
            concept="Calculate once, use multiple times"
            whenToUse="When you have multiple queries on static data"
            examples={[
              {
                problem: "Range Sum Query",
                slow: "Calculate sum each time O(n) per query",
                fast: "Prefix sum O(n) preprocess, O(1) per query",
              },
              {
                problem: "GCD of range",
                slow: "Calculate for each query O(n log n)",
                fast: "Sparse table O(n log n) build, O(1) query",
              },
            ]}
            color="green"
          />

          <OptimizationCard
            title="Early Termination"
            concept="Stop as soon as answer is found"
            whenToUse="When you don't need to check all possibilities"
            examples={[
              {
                problem: "Search in sorted matrix",
                slow: "Check all elements O(n*m)",
                fast: "Start from corner, eliminate row/col O(n+m)",
              },
              {
                problem: "Finding any pair sum",
                slow: "Find all pairs O(n²)",
                fast: "Use hash set, return on first match O(n)",
              },
            ]}
            color="purple"
          />

          <OptimizationCard
            title="Problem Transformation"
            concept="Convert to an easier equivalent problem"
            whenToUse="When problem looks complex but has simpler equivalent"
            examples={[
              {
                problem: "Longest palindrome substring",
                slow: "Check all substrings O(n³)",
                fast: "Expand around center O(n²)",
                optimal: "Manacher's algorithm O(n)",
              },
              {
                problem: "Maximum circular subarray",
                slow: "Try all rotations O(n²)",
                fast: "Max normal + (total - min subarray) O(n)",
              },
            ]}
            color="orange"
          />

          <OptimizationCard
            title="Auxiliary Data Structures"
            concept="Use helper structure to speed up operations"
            whenToUse="When direct approach requires repeated expensive operations"
            examples={[
              {
                problem: "K closest points",
                slow: "Sort all points O(n log n)",
                fast: "Use max heap of size k O(n log k)",
              },
              {
                problem: "Sliding window maximum",
                slow: "Find max in each window O(n*k)",
                fast: "Use deque O(n)",
              },
            ]}
            color="cyan"
          />
        </div>
      </div>

      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Common Optimization Patterns
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <OptimizationPattern
            from="O(n²) → O(n log n)"
            technique="Use sorting or divide & conquer"
            examples={[
              "Merge sort",
              "Closest pair of points",
              "Inversion count",
            ]}
          />
          <OptimizationPattern
            from="O(n²) → O(n)"
            technique="Use hash map or two pointers"
            examples={["Two sum", "Subarray with sum", "Remove duplicates"]}
          />
          <OptimizationPattern
            from="O(2^n) → O(n²)"
            technique="Use dynamic programming"
            examples={["Fibonacci", "LCS", "Edit distance"]}
          />
          <OptimizationPattern
            from="O(n) → O(log n)"
            technique="Use binary search or math"
            examples={["Search in sorted", "Find square root", "Peak element"]}
          />
          <OptimizationPattern
            from="O(n) queries → O(1) queries"
            technique="Preprocessing with extra space"
            examples={["Prefix sum", "Sparse table", "Suffix array"]}
          />
          <OptimizationPattern
            from="O(n log n) → O(n)"
            technique="Use counting/bucket sort or linear scan"
            examples={["Counting sort", "Find duplicate", "Array partition"]}
          />
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 rounded-xl p-8 border border-purple-500/30">
        <h2 className="text-2xl font-bold text-white mb-4">
          🎯 Optimization Decision Tree
        </h2>
        <div className="space-y-3 text-gray-300">
          <div className="bg-gray-900/50 rounded p-4">
            <strong className="text-white">Step 1:</strong> Is current solution
            too slow?
            <div className="ml-4 mt-2">
              → Compare time_complexity × n with 10^8
            </div>
          </div>
          <div className="bg-gray-900/50 rounded p-4">
            <strong className="text-white">Step 2:</strong> Can you reduce
            complexity class?
            <div className="ml-4 mt-2">
              → O(n²) to O(n log n) to O(n) to O(log n)
            </div>
          </div>
          <div className="bg-gray-900/50 rounded p-4">
            <strong className="text-white">Step 3:</strong> Can you add
            preprocessing?
            <div className="ml-4 mt-2">
              → Spend O(n) build time to get O(1) query
            </div>
          </div>
          <div className="bg-gray-900/50 rounded p-4">
            <strong className="text-white">Step 4:</strong> Can you reduce
            constant factors?
            <div className="ml-4 mt-2">
              → Remove redundant operations, combine loops
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Examples Section
function ExamplesSection() {
  return (
    <div className="space-y-8">
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Step-by-Step Problem Solving Examples
        </h2>
        <p className="text-gray-300 mb-6">
          Let&apos;s walk through applying the framework to real problems:
        </p>

        <div className="space-y-8">
          <ExampleWalkthrough
            problem="Find the kth largest element in an unsorted array"
            constraints="1 ≤ k ≤ array.length ≤ 10^5"
            steps={[
              {
                step: "1. Understand & Clarify",
                content:
                  "Need kth largest (not kth smallest). Array is unsorted. k is valid (1-indexed).",
              },
              {
                step: "2. Identify Pattern",
                content: "Keyword: 'kth largest' → Heap or Quickselect",
              },
              {
                step: "3. Consider Approaches",
                content: `Approach 1: Sort entire array O(n log n)
Approach 2: Min heap of size k O(n log k)
Approach 3: Quickselect O(n) average`,
              },
              {
                step: "4. Choose Optimal",
                content:
                  "For n ≤ 10^5, all work. Choose Min Heap (consistent O(n log k), easier to implement)",
              },
              {
                step: "5. Edge Cases",
                content: "k = 1 (largest), k = n (smallest), all same elements",
              },
            ]}
            solution="Use Min Heap of size k: O(n log k) time, O(k) space"
            color="blue"
          />

          <ExampleWalkthrough
            problem="Find longest substring without repeating characters"
            constraints="0 ≤ string.length ≤ 5 * 10^4"
            steps={[
              {
                step: "1. Understand & Clarify",
                content:
                  "Need length, not the actual substring. Characters can be any ASCII.",
              },
              {
                step: "2. Identify Pattern",
                content:
                  "Keywords: 'substring' + 'without repeating' → Sliding Window",
              },
              {
                step: "3. Consider Approaches",
                content: `Approach 1: Check all substrings O(n³)
Approach 2: Sliding window with hash set O(n)`,
              },
              {
                step: "4. Choose Optimal",
                content:
                  "For n ≤ 5*10^4, need O(n) or O(n log n). Choose Sliding Window.",
              },
              {
                step: "5. Edge Cases",
                content:
                  "Empty string, all same characters, all unique characters",
              },
            ]}
            solution="Sliding window with hash set: O(n) time, O(min(n, m)) space (m = charset size)"
            color="green"
          />

          <ExampleWalkthrough
            problem="Count number of ways to climb stairs (1 or 2 steps at a time)"
            constraints="1 ≤ n ≤ 45"
            steps={[
              {
                step: "1. Understand & Clarify",
                content:
                  "Can take 1 or 2 steps. Count distinct ways to reach nth stair.",
              },
              {
                step: "2. Identify Pattern",
                content:
                  "Keywords: 'count ways' + 'choices at each step' → Dynamic Programming",
              },
              {
                step: "3. Consider Approaches",
                content: `Approach 1: Recursion O(2^n) - too slow
Approach 2: DP with memoization O(n)
Approach 3: DP bottom-up O(n)`,
              },
              {
                step: "4. Choose Optimal",
                content:
                  "Pattern: dp[n] = dp[n-1] + dp[n-2] (Fibonacci). Use bottom-up DP.",
              },
              {
                step: "5. Optimize",
                content: "Only need last 2 values → O(1) space instead of O(n)",
              },
            ]}
            solution="Bottom-up DP with constant space: O(n) time, O(1) space"
            color="purple"
          />
        </div>
      </div>

      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Decision Making: When Multiple Approaches Work
        </h2>

        <div className="space-y-4">
          <DecisionCard
            scenario="Finding kth element"
            options={[
              {
                approach: "Sort + Index",
                time: "O(n log n)",
                space: "O(1)",
                when: "Need sorted array anyway",
              },
              {
                approach: "Min Heap",
                time: "O(n log k)",
                space: "O(k)",
                when: "k is small, want consistency",
              },
              {
                approach: "Quickselect",
                time: "O(n) avg",
                space: "O(1)",
                when: "Best average case, ok with worst case",
              },
            ]}
          />
          <DecisionCard
            scenario="Checking if substring exists"
            options={[
              {
                approach: "Brute Force",
                time: "O(n*m)",
                space: "O(1)",
                when: "Very small strings",
              },
              {
                approach: "KMP",
                time: "O(n+m)",
                space: "O(m)",
                when: "Large strings, multiple searches",
              },
              {
                approach: "Rabin-Karp",
                time: "O(n+m)",
                space: "O(1)",
                when: "Multiple pattern search",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

// Pitfalls Section
function PitfallsSection() {
  return (
    <div className="space-y-8">
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Common Pitfalls & How to Avoid Them
        </h2>

        <div className="space-y-6">
          <PitfallCard
            title="Off-by-One Errors"
            mistake="Using wrong loop bounds or array indices"
            examples={[
              "for (i = 1; i <= n) but array is 0-indexed",
              "Forgetting to include end index in range",
              "Wrong mid calculation in binary search",
            ]}
            solution="Always clarify: 0-indexed or 1-indexed? Inclusive or exclusive bounds?"
            color="red"
          />

          <PitfallCard
            title="Integer Overflow"
            mistake="Not considering overflow for large numbers"
            examples={[
              "Sum of large numbers exceeds int range",
              "Multiplication in combinations/permutations",
              "Mid calculation: (left + right) / 2",
            ]}
            solution="Use long/BigInteger, or use (left + (right-left)/2) for mid"
            color="orange"
          />

          <PitfallCard
            title="Not Handling Edge Cases"
            mistake="Forgetting to test edge cases"
            examples={[
              "Empty input (n = 0, empty string)",
              "Single element",
              "All same elements",
              "Minimum/maximum constraint values",
            ]}
            solution="Always test: empty, single, duplicates, min/max values, negative numbers"
            color="yellow"
          />

          <PitfallCard
            title="Wrong Data Structure Choice"
            mistake="Using inefficient data structure"
            examples={[
              "Using ArrayList for frequent deletions (use LinkedList)",
              "Using array for frequent insertions (use dynamic structure)",
              "Not using HashMap when O(1) lookup needed",
            ]}
            solution="Match operations to data structure strengths. Review complexity table."
            color="blue"
          />

          <PitfallCard
            title="Modifying Collection While Iterating"
            mistake="Concurrent modification during iteration"
            examples={[
              "Removing from list while looping",
              "Adding to set during for-each",
              "Modifying map while iterating",
            ]}
            solution="Use iterator.remove(), create new collection, or iterate backwards"
            color="purple"
          />

          <PitfallCard
            title="Not Optimizing After Brute Force"
            mistake="Stopping at first working solution"
            examples={[
              "O(n³) when O(n²) possible",
              "O(n²) when O(n log n) possible",
              "Using unnecessary space",
            ]}
            solution="Always ask: Can we do better? Check constraint size vs complexity."
            color="green"
          />

          <PitfallCard
            title="Incorrect Base Cases in Recursion"
            mistake="Wrong or missing base cases"
            examples={[
              "Infinite recursion",
              "Not handling n=0 or n=1",
              "Wrong return value for base case",
            ]}
            solution="Identify all base cases before coding. Test with smallest inputs."
            color="cyan"
          />

          <PitfallCard
            title="Misunderstanding Problem Statement"
            mistake="Not reading problem carefully"
            examples={[
              "Confusing 'subarray' with 'subsequence'",
              "Missing 'distinct' or 'unique' requirement",
              "Wrong understanding of 'kth largest' vs 'kth smallest'",
            ]}
            solution="Re-read problem twice. Ask clarifying questions. Test with examples."
            color="pink"
          />
        </div>
      </div>

      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Edge Cases Checklist
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <EdgeCaseCategory
            category="Size Edge Cases"
            cases={[
              "Empty input (n = 0, empty array/string)",
              "Single element (n = 1)",
              "Two elements (n = 2)",
              "Maximum constraint size",
            ]}
          />
          <EdgeCaseCategory
            category="Value Edge Cases"
            cases={[
              "All elements same",
              "All elements different",
              "Negative numbers",
              "Zero values",
              "Maximum/minimum values",
            ]}
          />
          <EdgeCaseCategory
            category="Order Edge Cases"
            cases={[
              "Already sorted (ascending)",
              "Already sorted (descending)",
              "Reverse sorted",
              "Random order",
            ]}
          />
          <EdgeCaseCategory
            category="Special Cases"
            cases={[
              "Duplicates when expecting unique",
              "Out of bounds access",
              "Division by zero",
              "Null/undefined values",
            ]}
          />
        </div>
      </div>

      <div className="bg-gradient-to-r from-red-900/40 to-orange-900/40 rounded-xl p-8 border border-red-500/30">
        <h2 className="text-2xl font-bold text-white mb-4">
          🎯 Golden Rule for Avoiding Bugs
        </h2>
        <ul className="space-y-3 text-gray-300">
          <li className="flex items-start gap-3">
            <span className="text-red-400 text-xl">1.</span>
            <span>
              <strong>Trace with small example</strong> before coding (n=2, n=3)
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-red-400 text-xl">2.</span>
            <span>
              <strong>Test edge cases</strong> mentally while writing code
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-red-400 text-xl">3.</span>
            <span>
              <strong>Dry run</strong> final code with edge case before
              submitting
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-red-400 text-xl">4.</span>
            <span>
              <strong>If stuck</strong>, revisit problem statement and
              constraints
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

// Debugging Section
function DebuggingSection() {
  return (
    <div className="space-y-8">
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Testing & Debugging Strategy
        </h2>
        <p className="text-gray-300 mb-6">
          Systematic approach to test and debug your solutions:
        </p>

        <div className="space-y-6">
          <TestingStep
            step={1}
            title="Test with Given Examples"
            description="Always start with examples from problem statement"
            checklist={[
              "Run through example manually",
              "Verify output matches expected",
              "Understand why it works",
            ]}
            color="blue"
          />

          <TestingStep
            step={2}
            title="Test Edge Cases"
            description="Try boundary conditions and special cases"
            checklist={[
              "Empty input (n=0)",
              "Single element (n=1)",
              "Minimum and maximum constraint values",
              "All same elements",
              "All different elements",
            ]}
            color="green"
          />

          <TestingStep
            step={3}
            title="Test Corner Cases"
            description="Think about unusual but valid inputs"
            checklist={[
              "Negative numbers (if allowed)",
              "Zero values",
              "Duplicates",
              "Already sorted input",
              "Reverse sorted input",
            ]}
            color="purple"
          />

          <TestingStep
            step={4}
            title="Test Your Assumptions"
            description="Challenge what you think is guaranteed"
            checklist={[
              "Is array always non-empty?",
              "Can k be larger than n?",
              "Are numbers always positive?",
              "Can target sum be negative?",
            ]}
            color="orange"
          />
        </div>
      </div>

      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          When Your Solution Fails
        </h2>

        <div className="space-y-4">
          <DebuggingCard
            issue="Wrong Answer"
            questions={[
              "Did I understand the problem correctly?",
              "Are my edge cases handled?",
              "Is there an off-by-one error?",
              "Am I using the right comparison (< vs <=)?",
              "Did I initialize variables correctly?",
            ]}
            approach="Trace through failing test case step by step on paper"
            color="red"
          />

          <DebuggingCard
            issue="Time Limit Exceeded (TLE)"
            questions={[
              "What's my time complexity?",
              "Is it within constraint limits?",
              "Are there redundant operations?",
              "Can I use better data structure?",
              "Am I recalculating same things?",
            ]}
            approach="Calculate: time_complexity × n ≤ 10^8. If not, need better algorithm."
            color="orange"
          />

          <DebuggingCard
            issue="Memory Limit Exceeded (MLE)"
            questions={[
              "What's my space complexity?",
              "Can I reuse space?",
              "Do I need to store all results?",
              "Can I use iterative instead of recursive?",
              "Are there unnecessary copies?",
            ]}
            approach="Check if you can reduce space from O(n²) to O(n) or O(n) to O(1)"
            color="yellow"
          />

          <DebuggingCard
            issue="Runtime Error"
            questions={[
              "Am I accessing array out of bounds?",
              "Division by zero?",
              "Stack overflow from recursion?",
              "Null pointer access?",
              "Integer overflow?",
            ]}
            approach="Add bounds checking and null checks. Use debugger or print statements."
            color="purple"
          />
        </div>
      </div>

      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Debugging Techniques
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <TechniqueCard
            technique="Print Debugging"
            when="Quick check of variable values"
            howTo="Print at key points: loop iterations, function entry/exit, condition checks"
            pros="Simple, fast for small inputs"
            cons="Messy for large inputs"
          />

          <TechniqueCard
            technique="Binary Search Debug"
            when="Bug is in a large code section"
            howTo="Comment out half the code, see if bug persists. Narrow down section repeatedly."
            pros="Finds bug location quickly"
            cons="May not work if sections depend on each other"
          />

          <TechniqueCard
            technique="Trace on Paper"
            when="Logic error in algorithm"
            howTo="Draw variables, array states at each step for small test case"
            pros="Understand flow deeply"
            cons="Time consuming"
          />

          <TechniqueCard
            technique="Rubber Duck Debugging"
            when="Stuck without clear error"
            howTo="Explain your code line-by-line out loud as if teaching"
            pros="Often spot issues while explaining"
            cons="Requires patience"
          />

          <TechniqueCard
            technique="Compare with Brute Force"
            when="Optimized solution fails"
            howTo="Write simple O(n²) solution, compare outputs on same input"
            pros="Finds where optimization breaks"
            cons="Need to write another solution"
          />

          <TechniqueCard
            technique="Simplify First"
            when="Complex solution not working"
            howTo="Solve easier version first (smaller constraints, remove conditions)"
            pros="Build confidence, find pattern"
            cons="Takes extra time"
          />
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-900/40 to-cyan-900/40 rounded-xl p-8 border border-blue-500/30">
        <h2 className="text-2xl font-bold text-white mb-4">
          🎯 Debugging Checklist
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="text-white font-semibold mb-2">
              Before Submitting:
            </div>
            <label className="flex items-start gap-2 text-gray-300">
              <input type="checkbox" className="mt-1" />
              <span>Tested with given examples</span>
            </label>
            <label className="flex items-start gap-2 text-gray-300">
              <input type="checkbox" className="mt-1" />
              <span>Tested n=0 (empty)</span>
            </label>
            <label className="flex items-start gap-2 text-gray-300">
              <input type="checkbox" className="mt-1" />
              <span>Tested n=1 (single)</span>
            </label>
            <label className="flex items-start gap-2 text-gray-300">
              <input type="checkbox" className="mt-1" />
              <span>Tested max constraints</span>
            </label>
            <label className="flex items-start gap-2 text-gray-300">
              <input type="checkbox" className="mt-1" />
              <span>Checked for overflow</span>
            </label>
          </div>
          <div className="space-y-2">
            <div className="text-white font-semibold mb-2">Code Review:</div>
            <label className="flex items-start gap-2 text-gray-300">
              <input type="checkbox" className="mt-1" />
              <span>No off-by-one errors</span>
            </label>
            <label className="flex items-start gap-2 text-gray-300">
              <input type="checkbox" className="mt-1" />
              <span>Variables initialized</span>
            </label>
            <label className="flex items-start gap-2 text-gray-300">
              <input type="checkbox" className="mt-1" />
              <span>Base cases handled</span>
            </label>
            <label className="flex items-start gap-2 text-gray-300">
              <input type="checkbox" className="mt-1" />
              <span>No array out of bounds</span>
            </label>
            <label className="flex items-start gap-2 text-gray-300">
              <input type="checkbox" className="mt-1" />
              <span>Return correct type</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

// Interview Tips Section
function InterviewTipsSection() {
  return (
    <div className="space-y-8">
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Interview Best Practices
        </h2>

        <div className="space-y-6">
          <TipCard
            step={1}
            title="Clarify the Problem"
            description="Ask questions about constraints, edge cases, and expected output format. Don't assume!"
            examples={[
              "What are the input constraints?",
              "Are there any edge cases I should consider?",
              "What's the expected time/space complexity?",
              "Can the input be empty or null?",
            ]}
            color="blue"
          />

          <TipCard
            step={2}
            title="Think Aloud"
            description="Explain your thought process. Interviewers want to see how you think, not just the code."
            examples={[
              "I'm thinking about using a hash map because...",
              "This reminds me of the sliding window pattern...",
              "Let me consider the time complexity...",
            ]}
            color="purple"
          />

          <TipCard
            step={3}
            title="Start Simple"
            description="Begin with a brute force solution, then optimize. This shows problem-solving progression."
            examples={[
              "First, I'll try O(n²) approach...",
              "Now let me optimize to O(n log n)...",
              "Can we do better? Yes, O(n) with hash map!",
            ]}
            color="green"
          />

          <TipCard
            step={4}
            title="State Complexity"
            description="Always state time and space complexity before coding. This shows awareness of efficiency."
            examples={[
              "Time: O(n), Space: O(1)",
              "Time: O(n log n), Space: O(n)",
              "Time: O(n²), Space: O(1)",
            ]}
            color="orange"
          />

          <TipCard
            step={5}
            title="Verify with Examples"
            description="Walk through your solution with examples. This helps catch bugs early."
            examples={[
              "Let me trace through with [1, 2, 3]...",
              "For edge case of empty array...",
              "What if all elements are the same?",
            ]}
            color="red"
          />

          <TipCard
            step={6}
            title="Handle Edge Cases"
            description="Always consider edge cases: empty input, single element, all same elements, etc."
            examples={[
              "Empty array → return 0 or empty result",
              "Single element → return that element",
              "All negative numbers → special handling",
            ]}
            color="cyan"
          />
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-900/40 to-blue-900/40 rounded-xl p-8 border border-green-500/30">
        <h2 className="text-2xl font-bold text-white mb-4">🎯 Key Takeaways</h2>
        <ul className="space-y-3 text-gray-300">
          <li className="flex items-start gap-3">
            <span className="text-green-400 text-xl">✓</span>
            <span>
              <strong>Pattern Recognition:</strong> The more problems you solve,
              the faster you&apos;ll identify patterns
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 text-xl">✓</span>
            <span>
              <strong>Practice Makes Perfect:</strong> Solve problems across all
              categories to build intuition
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 text-xl">✓</span>
            <span>
              <strong>Think Before Coding:</strong> Spend time analyzing the
              problem before jumping to code
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 text-xl">✓</span>
            <span>
              <strong>Communication Matters:</strong> Explain your approach
              clearly - it&apos;s as important as the solution
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

// Practice Strategy Section
function PracticeStrategySection() {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 rounded-2xl p-8 border border-purple-500/30">
        <h2 className="text-3xl font-bold text-white mb-4">
          📚 Practice Strategy & Learning Path
        </h2>
        <p className="text-gray-300 text-lg">
          A structured approach to master DSA through consistent practice.
          Follow this roadmap to build strong problem-solving skills!
        </p>
      </div>

      {/* Learning Path */}
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h3 className="text-2xl font-bold text-white mb-6">
          🗺️ Recommended Learning Path
        </h3>
        <div className="space-y-4">
          <LearningPhase
            phase="Phase 1: Foundations (2-3 weeks)"
            topics={[
              "Arrays & Strings",
              "Two Pointers",
              "Sliding Window",
              "Hashing",
            ]}
            problems="50-70 problems"
            goal="Build basic problem-solving intuition"
            color="blue"
          />
          <LearningPhase
            phase="Phase 2: Core Data Structures (3-4 weeks)"
            topics={[
              "Linked Lists",
              "Stacks & Queues",
              "Trees",
              "Binary Search",
            ]}
            problems="60-80 problems"
            goal="Master fundamental data structures"
            color="green"
          />
          <LearningPhase
            phase="Phase 3: Advanced Structures (2-3 weeks)"
            topics={["Heaps", "BST", "Trie", "Graphs (DFS/BFS)"]}
            problems="50-60 problems"
            goal="Handle complex data organization"
            color="purple"
          />
          <LearningPhase
            phase="Phase 4: Advanced Algorithms (4-5 weeks)"
            topics={[
              "Dynamic Programming",
              "Greedy",
              "Backtracking",
              "Graph Algorithms",
            ]}
            problems="70-90 problems"
            goal="Solve optimization problems"
            color="orange"
          />
          <LearningPhase
            phase="Phase 5: Advanced Topics (2-3 weeks)"
            topics={[
              "Segment Trees",
              "Union-Find",
              "Advanced DP",
              "Math & Bit Manipulation",
            ]}
            problems="40-50 problems"
            goal="Master competitive programming concepts"
            color="red"
          />
          <LearningPhase
            phase="Phase 6: Interview Prep (2-3 weeks)"
            topics={[
              "Mixed Problems",
              "Mock Interviews",
              "Company-Specific",
              "Speed Practice",
            ]}
            problems="60-80 problems"
            goal="Prepare for real interviews"
            color="cyan"
          />
        </div>
      </div>

      {/* Daily Practice Plan */}
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h3 className="text-2xl font-bold text-white mb-6">
          📅 Daily Practice Plan
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <PracticePlan
            level="Beginner"
            duration="1-2 hours/day"
            problems="2-3 easy problems"
            focus={[
              "Understand problem thoroughly",
              "Focus on correctness over speed",
              "Learn one pattern at a time",
              "Review solutions after solving",
            ]}
            color="green"
          />
          <PracticePlan
            level="Intermediate"
            duration="2-3 hours/day"
            problems="2 medium + 1 easy"
            focus={[
              "Time yourself (30-40 min/problem)",
              "Try optimizing solutions",
              "Practice pattern recognition",
              "Solve variations of same problem",
            ]}
            color="blue"
          />
          <PracticePlan
            level="Advanced"
            duration="2-4 hours/day"
            problems="1 hard + 2 medium"
            focus={[
              "Time yourself (20-30 min/medium)",
              "Multiple approaches for each",
              "Participate in contests",
              "Teach/explain solutions to others",
            ]}
            color="purple"
          />
        </div>
      </div>

      {/* Weekly Schedule */}
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h3 className="text-2xl font-bold text-white mb-6">
          📆 Sample Weekly Schedule
        </h3>
        <div className="space-y-3">
          <WeekDay
            day="Monday"
            focus="Arrays & Strings"
            activity="Learn/Practice new pattern"
            problems="2-3 problems"
          />
          <WeekDay
            day="Tuesday"
            focus="Same Topic"
            activity="More practice + variations"
            problems="3-4 problems"
          />
          <WeekDay
            day="Wednesday"
            focus="Linked Lists / Stacks"
            activity="New data structure"
            problems="2-3 problems"
          />
          <WeekDay
            day="Thursday"
            focus="Mixed Review"
            activity="Previous topics"
            problems="2-3 mixed problems"
          />
          <WeekDay
            day="Friday"
            focus="Trees / Graphs"
            activity="New algorithms"
            problems="2-3 problems"
          />
          <WeekDay
            day="Saturday"
            focus="Contest Day"
            activity="Timed practice / Mock contest"
            problems="4-5 problems in 2 hours"
          />
          <WeekDay
            day="Sunday"
            focus="Review & Learn"
            activity="Review weak areas, watch solutions"
            problems="1-2 hard problems"
          />
        </div>
      </div>

      {/* How to Practice Each Problem */}
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h3 className="text-2xl font-bold text-white mb-6">
          🎯 How to Practice Each Problem (The Right Way)
        </h3>
        <div className="space-y-4">
          <PracticeStep
            step={1}
            title="Read & Understand (2-3 min)"
            actions={[
              "Read problem 2-3 times carefully",
              "Identify input, output, and constraints",
              "Ask: What is really being asked?",
            ]}
          />
          <PracticeStep
            step={2}
            title="Think Without Code (5-10 min)"
            actions={[
              "Think of brute force solution first",
              "Identify patterns and keywords",
              "Think of optimizations",
              "Estimate time/space complexity",
            ]}
          />
          <PracticeStep
            step={3}
            title="Plan Your Approach (2-3 min)"
            actions={[
              "Write pseudocode or outline",
              "Think about edge cases",
              "Decide on data structures",
            ]}
          />
          <PracticeStep
            step={4}
            title="Code the Solution (10-15 min)"
            actions={[
              "Write clean, readable code",
              "Add comments for complex logic",
              "Handle edge cases",
            ]}
          />
          <PracticeStep
            step={5}
            title="Test Thoroughly (3-5 min)"
            actions={[
              "Test with given examples",
              "Test edge cases",
              "Walk through code mentally",
            ]}
          />
          <PracticeStep
            step={6}
            title="Review & Learn (5-10 min)"
            actions={[
              "Read other solutions",
              "Learn alternative approaches",
              "Note down the pattern",
              "Add to your notes/flashcards",
            ]}
          />
        </div>
      </div>

      {/* Problem Difficulty Distribution */}
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h3 className="text-2xl font-bold text-white mb-6">
          📊 Problem Distribution Strategy
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-900 rounded-lg p-6 border border-blue-500/30">
            <h4 className="text-lg font-semibold text-white mb-4">
              🎯 For Beginners (First 3 months)
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Easy:</span>
                <span className="text-green-400 font-semibold">
                  70% (150-200 problems)
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Medium:</span>
                <span className="text-yellow-400 font-semibold">
                  25% (50-70 problems)
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Hard:</span>
                <span className="text-red-400 font-semibold">
                  5% (10-15 problems)
                </span>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-4">
              Focus on building confidence and learning patterns
            </p>
          </div>
          <div className="bg-gray-900 rounded-lg p-6 border border-purple-500/30">
            <h4 className="text-lg font-semibold text-white mb-4">
              🚀 For Interview Prep (Last 2 months)
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Easy:</span>
                <span className="text-green-400 font-semibold">
                  20% (30-40 problems)
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Medium:</span>
                <span className="text-yellow-400 font-semibold">
                  60% (100-120 problems)
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Hard:</span>
                <span className="text-red-400 font-semibold">
                  20% (30-40 problems)
                </span>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-4">
              Focus on medium problems - most common in interviews
            </p>
          </div>
        </div>
      </div>

      {/* Progress Tracking */}
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h3 className="text-2xl font-bold text-white mb-6">
          📈 Track Your Progress
        </h3>
        <div className="space-y-4">
          <TrackingMetric
            metric="Problem Count by Topic"
            why="Ensures balanced coverage"
            howTo="Maintain spreadsheet: Topic | Easy | Medium | Hard | Total"
          />
          <TrackingMetric
            metric="Patterns Mastered"
            why="Helps recognize what you know well"
            howTo="List of patterns with confidence level (1-5 stars)"
          />
          <TrackingMetric
            metric="Time Taken Per Problem"
            why="Tracks speed improvement"
            howTo="Note time for each difficulty level, aim to reduce over weeks"
          />
          <TrackingMetric
            metric="Success Rate"
            why="Shows if you're solving right difficulty"
            howTo="Track: Solved without help / Needed hints / Couldn't solve"
          />
          <TrackingMetric
            metric="Weak Areas"
            why="Focus practice where needed"
            howTo="Note topics/patterns that take longest or have low success rate"
          />
        </div>
      </div>

      {/* When You Get Stuck */}
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h3 className="text-2xl font-bold text-white mb-6">
          🤔 What to Do When Stuck (The 20-Minute Rule)
        </h3>
        <div className="bg-gradient-to-r from-orange-900/40 to-red-900/40 rounded-lg p-6 border border-orange-500/30">
          <div className="space-y-4 text-gray-300">
            <div className="flex items-start gap-3">
              <span className="text-2xl">⏰</span>
              <div>
                <strong className="text-white">0-20 minutes:</strong> Try
                solving on your own. Think, plan, code.
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">💡</span>
              <div>
                <strong className="text-white">20-30 minutes:</strong> Read
                hints (not solution). Try again with hint.
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">📖</span>
              <div>
                <strong className="text-white">30+ minutes:</strong> Read
                solution&apos;s approach (not code). Try implementing yourself.
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">✍️</span>
              <div>
                <strong className="text-white">After solving:</strong>{" "}
                Understand why it works. Write the approach in your notes.
                Re-solve after 1 week.
              </div>
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-400 mt-4">
          <strong>Important:</strong> Don&apos;t feel bad about reading
          solutions! Learning from good solutions is how you improve. Just make
          sure you understand the &quot;why&quot; behind the approach.
        </p>
      </div>

      {/* Resources */}
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h3 className="text-2xl font-bold text-white mb-6">
          🔗 Practice Platforms & Resources
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <ResourceCard
            platform="LeetCode"
            bestFor="Interview preparation, company-specific problems"
            features={[
              "150+ curated problems (LeetCode 75)",
              "Company tags",
              "Discussion forum",
            ]}
          />
          <ResourceCard
            platform="Codeforces"
            bestFor="Competitive programming, contests"
            features={["Regular contests", "Rating system", "Strong community"]}
          />
          <ResourceCard
            platform="HackerRank"
            bestFor="Beginners, certification"
            features={[
              "Structured tracks",
              "Clear explanations",
              "Certifications",
            ]}
          />
          <ResourceCard
            platform="CodeChef"
            bestFor="Long challenges, learning DSA"
            features={[
              "Monthly contests",
              "Learning resources",
              "All difficulty levels",
            ]}
          />
          <ResourceCard
            platform="GeeksforGeeks"
            bestFor="Learning concepts, practice"
            features={[
              "Detailed explanations",
              "Company-wise problems",
              "Topic-wise practice",
            ]}
          />
          <ResourceCard
            platform="NeetCode"
            bestFor="Curated problem lists with videos"
            features={[
              "150 problems list",
              "Video explanations",
              "Pattern-based learning",
            ]}
          />
        </div>
      </div>

      {/* Final Motivation */}
      <div className="bg-gradient-to-r from-green-900/40 to-emerald-900/40 rounded-xl p-8 border border-green-500/30">
        <h3 className="text-2xl font-bold text-white mb-4">
          💪 Stay Consistent & Patient
        </h3>
        <div className="space-y-3 text-gray-300">
          <p>
            <strong className="text-white">Remember:</strong> Problem-solving is
            a skill that develops over time. You won&apos;t become expert in
            weeks, but you WILL see progress with consistent practice.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-gray-900/50 rounded p-4">
              <div className="text-green-400 font-semibold mb-2">
                ✓ Do&apos;s
              </div>
              <ul className="text-sm space-y-1">
                <li>• Practice daily (even 1 hour counts)</li>
                <li>• Focus on understanding, not just solving</li>
                <li>• Review problems after 1 week, 1 month</li>
                <li>• Join study groups or find accountability partner</li>
                <li>• Participate in contests regularly</li>
              </ul>
            </div>
            <div className="bg-gray-900/50 rounded p-4">
              <div className="text-red-400 font-semibold mb-2">
                ✗ Don&apos;ts
              </div>
              <ul className="text-sm space-y-1">
                <li>• Don&apos;t solve problems randomly</li>
                <li>• Don&apos;t skip easy problems (they build confidence)</li>
                <li>• Don&apos;t just read solutions without trying</li>
                <li>• Don&apos;t compare your progress with others</li>
                <li>• Don&apos;t practice only 1 week before interview</li>
              </ul>
            </div>
          </div>
          <p className="text-center text-lg font-semibold text-white mt-6 pt-4 border-t border-gray-700">
            &quot;It&apos;s not about how many problems you solve, it&apos;s
            about how deeply you understand them!&quot;
          </p>
        </div>
      </div>
    </div>
  );
}

// Practice Strategy Helper Components
function LearningPhase({ phase, topics, problems, goal, color }) {
  const colorClasses = {
    blue: "border-l-blue-500",
    green: "border-l-green-500",
    purple: "border-l-purple-500",
    orange: "border-l-orange-500",
    red: "border-l-red-500",
    cyan: "border-l-cyan-500",
  };

  return (
    <div
      className={`bg-gray-900 rounded-lg p-5 border-l-4 ${colorClasses[color]} border-t border-r border-b border-gray-700`}
    >
      <div className="flex items-start justify-between mb-3">
        <h4 className="text-lg font-semibold text-white">{phase}</h4>
        <span className="text-sm text-gray-400 bg-gray-800 px-3 py-1 rounded">
          {problems}
        </span>
      </div>
      <div className="flex flex-wrap gap-2 mb-3">
        {topics.map((topic, i) => (
          <span
            key={i}
            className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded"
          >
            {topic}
          </span>
        ))}
      </div>
      <p className="text-sm text-gray-400">
        <strong className="text-gray-300">Goal:</strong> {goal}
      </p>
    </div>
  );
}

function PracticePlan({ level, duration, problems, focus, color }) {
  const colorClasses = {
    green: "border-green-500/30",
    blue: "border-blue-500/30",
    purple: "border-purple-500/30",
  };

  return (
    <div className={`bg-gray-900 rounded-lg p-6 border ${colorClasses[color]}`}>
      <h4 className="text-xl font-semibold text-white mb-3">{level}</h4>
      <div className="space-y-2 mb-4">
        <div className="text-sm text-gray-400">
          <strong className="text-gray-300">Time:</strong> {duration}
        </div>
        <div className="text-sm text-gray-400">
          <strong className="text-gray-300">Problems:</strong> {problems}
        </div>
      </div>
      <div className="border-t border-gray-700 pt-3">
        <div className="text-sm font-semibold text-gray-300 mb-2">
          Focus Areas:
        </div>
        <ul className="space-y-1">
          {focus.map((item, i) => (
            <li
              key={i}
              className="text-xs text-gray-400 flex items-start gap-2"
            >
              <span className="text-green-400">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function WeekDay({ day, focus, activity, problems }) {
  return (
    <div className="bg-gray-900 rounded-lg p-4 border border-gray-700 flex items-center gap-4">
      <div className="text-center min-w-[100px]">
        <div className="font-semibold text-white">{day}</div>
        <div className="text-xs text-gray-500">{focus}</div>
      </div>
      <div className="flex-1">
        <div className="text-sm text-gray-300">{activity}</div>
      </div>
      <div className="text-sm text-blue-400 font-mono">{problems}</div>
    </div>
  );
}

function PracticeStep({ step, title, actions }) {
  return (
    <div className="flex items-start gap-4">
      <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
        {step}
      </div>
      <div className="flex-1">
        <h4 className="font-semibold text-white mb-2">{title}</h4>
        <ul className="space-y-1">
          {actions.map((action, i) => (
            <li
              key={i}
              className="text-sm text-gray-300 flex items-start gap-2"
            >
              <span className="text-gray-500">→</span>
              <span>{action}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function TrackingMetric({ metric, why, howTo }) {
  return (
    <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
      <h4 className="font-semibold text-white mb-2">{metric}</h4>
      <div className="grid md:grid-cols-2 gap-3 text-sm">
        <div>
          <span className="text-gray-400 font-semibold">Why:</span>
          <span className="text-gray-300 ml-2">{why}</span>
        </div>
        <div>
          <span className="text-gray-400 font-semibold">How:</span>
          <span className="text-gray-300 ml-2">{howTo}</span>
        </div>
      </div>
    </div>
  );
}

function ResourceCard({ platform, bestFor, features }) {
  return (
    <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
      <h4 className="font-semibold text-blue-400 mb-2">{platform}</h4>
      <p className="text-xs text-gray-400 mb-3">
        <strong>Best for:</strong> {bestFor}
      </p>
      <ul className="space-y-1">
        {features.map((feature, i) => (
          <li key={i} className="text-xs text-gray-300 flex items-start gap-2">
            <span className="text-green-400">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Code Templates Section
function CodeTemplatesSection() {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-cyan-900/40 to-blue-900/40 rounded-2xl p-8 border border-cyan-500/30">
        <h2 className="text-3xl font-bold text-white mb-4">
          💻 Code Templates & Snippets
        </h2>
        <p className="text-gray-300 text-lg">
          Ready-to-use code templates for common DSA patterns. Copy, modify, and
          use in your solutions!
        </p>
      </div>

      {/* Two Pointers */}
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <h3 className="text-2xl font-bold text-white mb-4">
          🔄 Two Pointers Pattern
        </h3>
        <div className="space-y-6">
          <CodeTemplate
            title="Two Pointers (Opposite Ends)"
            description="Start from both ends, move towards center"
            code={`function twoPointers(arr) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left < right) {
    // Process current pair
    if (condition) {
      // Found solution
      return [left, right];
    } else if (needMoveLeft) {
      left++;
    } else {
      right--;
    }
  }
  
  return -1; // Not found
}`}
            useCase="Two Sum (sorted), Valid Palindrome, Container with Most Water"
          />

          <CodeTemplate
            title="Two Pointers (Same Direction - Fast & Slow)"
            description="Remove duplicates, partition arrays"
            code={`function fastSlow(arr) {
  let slow = 0;
  
  for (let fast = 0; fast < arr.length; fast++) {
    if (arr[fast] meets condition) {
      arr[slow] = arr[fast];
      slow++;
    }
  }
  
  return slow; // New length
}`}
            useCase="Remove Duplicates, Move Zeros, Remove Element"
          />
        </div>
      </div>

      {/* Sliding Window */}
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <h3 className="text-2xl font-bold text-white mb-4">
          🪟 Sliding Window Pattern
        </h3>
        <div className="space-y-6">
          <CodeTemplate
            title="Fixed Size Sliding Window"
            description="Window of constant size k"
            code={`function fixedWindow(arr, k) {
  let windowSum = 0;
  let maxSum = 0;
  
  // Build first window
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  maxSum = windowSum;
  
  // Slide window
  for (let i = k; i < arr.length; i++) {
    windowSum = windowSum - arr[i - k] + arr[i];
    maxSum = Math.max(maxSum, windowSum);
  }
  
  return maxSum;
}`}
            useCase="Max sum subarray of size k, Average of subarray"
          />

          <CodeTemplate
            title="Variable Size Sliding Window"
            description="Expand/contract window based on condition"
            code={`function variableWindow(arr, target) {
  let left = 0;
  let sum = 0;
  let minLength = Infinity;
  
  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];
    
    // Contract window while condition met
    while (sum >= target) {
      minLength = Math.min(minLength, right - left + 1);
      sum -= arr[left];
      left++;
    }
  }
  
  return minLength === Infinity ? 0 : minLength;
}`}
            useCase="Minimum window substring, Longest substring without repeating"
          />
        </div>
      </div>

      {/* Binary Search */}
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <h3 className="text-2xl font-bold text-white mb-4">
          🔍 Binary Search Templates
        </h3>
        <div className="space-y-6">
          <CodeTemplate
            title="Standard Binary Search"
            description="Find exact element in sorted array"
            code={`function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return -1; // Not found
}`}
            useCase="Search in sorted array"
          />

          <CodeTemplate
            title="Binary Search (First/Last Occurrence)"
            description="Find boundary in sorted array"
            code={`function findBoundary(arr, target, findFirst = true) {
  let left = 0;
  let right = arr.length - 1;
  let result = -1;
  
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    
    if (arr[mid] === target) {
      result = mid;
      if (findFirst) {
        right = mid - 1; // Look left
      } else {
        left = mid + 1;  // Look right
      }
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return result;
}`}
            useCase="First/Last occurrence, Find range"
          />
        </div>
      </div>

      {/* DFS Templates */}
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <h3 className="text-2xl font-bold text-white mb-4">
          🌳 DFS/Backtracking Templates
        </h3>
        <div className="space-y-6">
          <CodeTemplate
            title="DFS on Tree"
            description="Recursive tree traversal"
            code={`function dfs(node) {
  if (!node) return;
  
  // Pre-order: Process before children
  console.log(node.val);
  
  dfs(node.left);
  
  // In-order: Process between children
  
  dfs(node.right);
  
  // Post-order: Process after children
}`}
            useCase="Tree traversal, Path sum, Max depth"
          />

          <CodeTemplate
            title="Backtracking Template"
            description="Generate all combinations/permutations"
            code={`function backtrack(path, choices, result) {
  // Base case: Valid solution found
  if (isValid(path)) {
    result.push([...path]); // Save copy
    return;
  }
  
  // Try each choice
  for (let choice of choices) {
    // Make choice
    path.push(choice);
    
    // Explore with this choice
    backtrack(path, getNextChoices(), result);
    
    // Undo choice (backtrack)
    path.pop();
  }
}

// Usage
let result = [];
backtrack([], initialChoices, result);`}
            useCase="Permutations, Combinations, N-Queens, Sudoku"
          />

          <CodeTemplate
            title="DFS on Graph"
            description="With visited tracking"
            code={`function dfsGraph(graph, start) {
  const visited = new Set();
  
  function dfs(node) {
    if (visited.has(node)) return;
    
    visited.add(node);
    console.log(node); // Process node
    
    for (let neighbor of graph[node]) {
      dfs(neighbor);
    }
  }
  
  dfs(start);
  return visited;
}`}
            useCase="Graph traversal, Connected components, Cycle detection"
          />
        </div>
      </div>

      {/* BFS Template */}
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <h3 className="text-2xl font-bold text-white mb-4">📊 BFS Template</h3>
        <div className="space-y-6">
          <CodeTemplate
            title="BFS Level Order"
            description="Process nodes level by level"
            code={`function bfs(root) {
  if (!root) return [];
  
  const queue = [root];
  const result = [];
  
  while (queue.length > 0) {
    const levelSize = queue.length;
    const currentLevel = [];
    
    // Process all nodes at current level
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      currentLevel.push(node.val);
      
      // Add children for next level
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    
    result.push(currentLevel);
  }
  
  return result;
}`}
            useCase="Level order traversal, Shortest path, Min depth"
          />

          <CodeTemplate
            title="BFS Shortest Path (Grid)"
            description="Find shortest path in 2D grid"
            code={`function shortestPath(grid, start, end) {
  const rows = grid.length;
  const cols = grid[0].length;
  const queue = [[start[0], start[1], 0]]; // [row, col, distance]
  const visited = new Set();
  visited.add(\`\${start[0]},\${start[1]}\`);
  
  const directions = [[0,1], [1,0], [0,-1], [-1,0]];
  
  while (queue.length > 0) {
    const [row, col, dist] = queue.shift();
    
    if (row === end[0] && col === end[1]) {
      return dist;
    }
    
    for (const [dr, dc] of directions) {
      const newR = row + dr;
      const newC = col + dc;
      const key = \`\${newR},\${newC}\`;
      
      if (newR >= 0 && newR < rows && 
          newC >= 0 && newC < cols &&
          grid[newR][newC] !== 1 && // Not wall
          !visited.has(key)) {
        visited.add(key);
        queue.push([newR, newC, dist + 1]);
      }
    }
  }
  
  return -1; // Path not found
}`}
            useCase="Shortest path in maze, Word ladder, Flood fill"
          />
        </div>
      </div>

      {/* Dynamic Programming */}
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <h3 className="text-2xl font-bold text-white mb-4">
          💎 Dynamic Programming Templates
        </h3>
        <div className="space-y-6">
          <CodeTemplate
            title="1D DP (Bottom-Up)"
            description="When dp[i] depends on previous values"
            code={`function dp1D(n) {
  // dp[i] = answer for subproblem of size i
  const dp = new Array(n + 1).fill(0);
  
  // Base case
  dp[0] = baseValue;
  dp[1] = baseValue;
  
  // Fill table
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i-1] + dp[i-2]; // Transition
  }
  
  return dp[n];
}`}
            useCase="Fibonacci, Climbing stairs, House robber"
          />

          <CodeTemplate
            title="2D DP (Grid)"
            description="When dp[i][j] depends on previous cells"
            code={`function dp2D(grid) {
  const m = grid.length;
  const n = grid[0].length;
  const dp = Array(m).fill(0).map(() => Array(n).fill(0));
  
  // Base cases
  dp[0][0] = grid[0][0];
  
  // Fill first row
  for (let j = 1; j < n; j++) {
    dp[0][j] = dp[0][j-1] + grid[0][j];
  }
  
  // Fill first column
  for (let i = 1; i < m; i++) {
    dp[i][0] = dp[i-1][0] + grid[i][0];
  }
  
  // Fill rest of table
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + grid[i][j];
    }
  }
  
  return dp[m-1][n-1];
}`}
            useCase="Unique paths, Min path sum, Longest common subsequence"
          />

          <CodeTemplate
            title="DP with Memoization (Top-Down)"
            description="Recursive with caching"
            code={`function dpMemo(n, memo = {}) {
  // Check cache
  if (n in memo) return memo[n];
  
  // Base cases
  if (n <= 1) return n;
  
  // Recursive case with memoization
  memo[n] = dpMemo(n-1, memo) + dpMemo(n-2, memo);
  
  return memo[n];
}`}
            useCase="When recursive solution is natural, Fibonacci, Coin change"
          />
        </div>
      </div>

      {/* Common Data Structure Usage */}
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <h3 className="text-2xl font-bold text-white mb-4">
          📦 Common Data Structure Patterns
        </h3>
        <div className="space-y-6">
          <CodeTemplate
            title="Frequency Counter (Hash Map)"
            description="Count occurrences of elements"
            code={`function frequencyCounter(arr) {
  const freq = new Map();
  
  for (const item of arr) {
    freq.set(item, (freq.get(item) || 0) + 1);
  }
  
  return freq;
}

// Usage examples:
// Find most frequent: Math.max(...freq.values())
// Find items with freq > k: [...freq].filter(([key, val]) => val > k)
// Check if exists: freq.has(item)`}
            useCase="Two sum, Anagram check, First unique character"
          />

          <CodeTemplate
            title="Monotonic Stack"
            description="Maintain increasing/decreasing stack"
            code={`function nextGreaterElement(arr) {
  const result = new Array(arr.length).fill(-1);
  const stack = []; // Store indices
  
  for (let i = 0; i < arr.length; i++) {
    // Pop elements smaller than current
    while (stack.length > 0 && arr[stack[stack.length-1]] < arr[i]) {
      const idx = stack.pop();
      result[idx] = arr[i];
    }
    
    stack.push(i);
  }
  
  return result;
}`}
            useCase="Next greater/smaller element, Daily temperatures, Trapping rain water"
          />

          <CodeTemplate
            title="Heap (Priority Queue)"
            description="Using array as min/max heap"
            code={`class MinHeap {
  constructor() {
    this.heap = [];
  }
  
  push(val) {
    this.heap.push(val);
    this.bubbleUp(this.heap.length - 1);
  }
  
  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();
    
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);
    return min;
  }
  
  peek() {
    return this.heap[0];
  }
  
  bubbleUp(idx) {
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      if (this.heap[parentIdx] <= this.heap[idx]) break;
      [this.heap[parentIdx], this.heap[idx]] = [this.heap[idx], this.heap[parentIdx]];
      idx = parentIdx;
    }
  }
  
  bubbleDown(idx) {
    while (true) {
      let smallest = idx;
      const left = 2 * idx + 1;
      const right = 2 * idx + 2;
      
      if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
        smallest = left;
      }
      if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
        smallest = right;
      }
      if (smallest === idx) break;
      
      [this.heap[idx], this.heap[smallest]] = [this.heap[smallest], this.heap[idx]];
      idx = smallest;
    }
  }
}`}
            useCase="Kth largest, Merge k sorted lists, Median of stream"
          />

          <CodeTemplate
            title="Union-Find (Disjoint Set)"
            description="Track connected components"
            code={`class UnionFind {
  constructor(n) {
    this.parent = Array.from({length: n}, (_, i) => i);
    this.rank = new Array(n).fill(0);
  }
  
  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]); // Path compression
    }
    return this.parent[x];
  }
  
  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    
    if (rootX === rootY) return false; // Already connected
    
    // Union by rank
    if (this.rank[rootX] < this.rank[rootY]) {
      this.parent[rootX] = rootY;
    } else if (this.rank[rootX] > this.rank[rootY]) {
      this.parent[rootY] = rootX;
    } else {
      this.parent[rootY] = rootX;
      this.rank[rootX]++;
    }
    
    return true; // Successfully united
  }
  
  connected(x, y) {
    return this.find(x) === this.find(y);
  }
}`}
            useCase="Number of islands, Redundant connection, Account merge"
          />
        </div>
      </div>

      {/* Quick Tips */}
      <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 rounded-xl p-6 border border-purple-500/30">
        <h3 className="text-2xl font-bold text-white mb-4">
          💡 Template Usage Tips
        </h3>
        <ul className="space-y-2 text-gray-300">
          <li className="flex items-start gap-2">
            <span className="text-green-400 text-xl">✓</span>
            <span>
              <strong>Understand before using:</strong> Don&apos;t blindly copy
              - understand why each line exists
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400 text-xl">✓</span>
            <span>
              <strong>Customize for problem:</strong> Templates are starting
              points, adapt them to specific requirements
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400 text-xl">✓</span>
            <span>
              <strong>Practice variations:</strong> Solve multiple problems with
              same template to master it
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400 text-xl">✓</span>
            <span>
              <strong>Build your library:</strong> Maintain your own collection
              of tested templates
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400 text-xl">✓</span>
            <span>
              <strong>Language agnostic:</strong> These patterns work in any
              language - just adjust syntax
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

// Code Template Helper Component
function CodeTemplate({ title, description, code, useCase }) {
  return (
    <div className="bg-gray-900 rounded-lg p-5 border border-gray-700">
      <div className="mb-3">
        <h4 className="text-lg font-semibold text-white mb-1">{title}</h4>
        <p className="text-sm text-gray-400">{description}</p>
      </div>

      <div className="bg-gray-950 rounded-lg p-4 mb-3 overflow-x-auto">
        <pre className="text-sm text-gray-300">
          <code>{code}</code>
        </pre>
      </div>

      <div className="text-xs text-gray-400">
        <strong className="text-blue-400">Use cases:</strong> {useCase}
      </div>
    </div>
  );
}

// Cheatsheet Section
function CheatsheetSection() {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-indigo-900/40 to-purple-900/40 rounded-2xl p-8 border border-indigo-500/30">
        <h2 className="text-3xl font-bold text-white mb-4">
          📄 Quick Reference Cheatsheet
        </h2>
        <p className="text-gray-300 text-lg">
          A condensed guide for quick lookup while solving problems. Bookmark
          this page!
        </p>
      </div>

      {/* Pattern Recognition Quick Guide */}
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <h3 className="text-2xl font-bold text-white mb-4">
          🎯 Quick Pattern Recognition
        </h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <CheatItem
            pattern="Two pointers/Sliding Window"
            keywords="subarray, substring, pairs, partition"
            example="Two sum (sorted), Max subarray of size k"
          />
          <CheatItem
            pattern="Hash Map/Set"
            keywords="frequency, duplicate, unique, first occurrence"
            example="Two sum, First unique char"
          />
          <CheatItem
            pattern="Binary Search"
            keywords="sorted, search, find first/last, minimize/maximize"
            example="Find peak element, Search in rotated array"
          />
          <CheatItem
            pattern="DFS/Backtracking"
            keywords="all combinations, all permutations, generate all"
            example="Permutations, N-Queens, Word search"
          />
          <CheatItem
            pattern="BFS"
            keywords="shortest path, level order, minimum moves"
            example="Shortest path in maze, Level order traversal"
          />
          <CheatItem
            pattern="Dynamic Programming"
            keywords="count ways, maximum/minimum, optimize, subsequence"
            example="Coin change, LIS, LCS, Knapsack"
          />
          <CheatItem
            pattern="Greedy"
            keywords="activity selection, interval, scheduling, maximize local choice"
            example="Jump game, Activity selection"
          />
          <CheatItem
            pattern="Stack"
            keywords="next greater, next smaller, valid parentheses, undo/redo"
            example="Next greater element, Valid parentheses"
          />
          <CheatItem
            pattern="Monotonic Stack/Queue"
            keywords="next greater/smaller, sliding window max/min"
            example="Sliding window maximum"
          />
          <CheatItem
            pattern="Heap (Priority Queue)"
            keywords="kth largest/smallest, median, top k, merge k"
            example="Kth largest, Merge k sorted lists"
          />
          <CheatItem
            pattern="Union-Find"
            keywords="connected components, cycle detection, islands"
            example="Number of islands, Redundant connection"
          />
          <CheatItem
            pattern="Trie"
            keywords="prefix, autocomplete, dictionary, word search"
            example="Implement autocomplete, Word search II"
          />
        </div>
      </div>

      {/* Complexity Constraints Quick Reference */}
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <h3 className="text-2xl font-bold text-white mb-4">
          ⏱️ Complexity by Constraint
        </h3>
        <div className="space-y-2 text-sm">
          <CheatComplexity
            constraint="n ≤ 10"
            complexity="O(n!)"
            approach="Brute force, all permutations"
          />
          <CheatComplexity
            constraint="n ≤ 20"
            complexity="O(2^n)"
            approach="Backtracking, subsets, bitmask DP"
          />
          <CheatComplexity
            constraint="n ≤ 100"
            complexity="O(n³) or O(n⁴)"
            approach="3-4 nested loops, Floyd-Warshall"
          />
          <CheatComplexity
            constraint="n ≤ 1,000"
            complexity="O(n²)"
            approach="2 nested loops, DP with 2D array"
          />
          <CheatComplexity
            constraint="n ≤ 10,000"
            complexity="O(n√n)"
            approach="Square root decomposition"
          />
          <CheatComplexity
            constraint="n ≤ 100,000"
            complexity="O(n log n)"
            approach="Sorting, heap, divide & conquer"
          />
          <CheatComplexity
            constraint="n ≤ 1,000,000"
            complexity="O(n)"
            approach="Hash map, two pointers, prefix sum"
          />
          <CheatComplexity
            constraint="n > 1,000,000"
            complexity="O(log n) or O(1)"
            approach="Math formula, binary search, precompute"
          />
        </div>
      </div>

      {/* Data Structure Selection */}
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <h3 className="text-2xl font-bold text-white mb-4">
          📊 When to Use Which DS
        </h3>
        <div className="grid md:grid-cols-2 gap-3 text-sm">
          <CheatDS
            ds="Array"
            when="Sequential access, random access by index"
          />
          <CheatDS
            ds="Hash Map"
            when="Fast lookup O(1), frequency count, mapping"
          />
          <CheatDS ds="Hash Set" when="Unique elements, fast existence check" />
          <CheatDS ds="Stack" when="LIFO, undo/redo, parsing, DFS" />
          <CheatDS ds="Queue" when="FIFO, BFS, level order" />
          <CheatDS
            ds="Deque"
            when="Add/remove from both ends, sliding window"
          />
          <CheatDS
            ds="Heap"
            when="Dynamic min/max, kth element, priority queue"
          />
          <CheatDS ds="LinkedList" when="Frequent insertions/deletions" />
          <CheatDS ds="BST" when="Sorted order, range queries, ceil/floor" />
          <CheatDS ds="Trie" when="Prefix-based operations, dictionary" />
          <CheatDS ds="Segment Tree" when="Range queries with updates" />
          <CheatDS
            ds="Union-Find"
            when="Connected components, cycle detection"
          />
        </div>
      </div>

      {/* Common Gotchas */}
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <h3 className="text-2xl font-bold text-white mb-4">
          ⚠️ Quick Checklist Before Submit
        </h3>
        <div className="grid md:grid-cols-2 gap-3">
          <div className="bg-gray-900 rounded p-4 border border-red-500/30">
            <h4 className="font-semibold text-red-400 mb-2">❌ Common Bugs</h4>
            <ul className="space-y-1 text-xs text-gray-300">
              <li>• Off-by-one errors (≤ vs &lt;)</li>
              <li>• Array out of bounds</li>
              <li>• Integer overflow (use long)</li>
              <li>• Null/empty input not handled</li>
              <li>• Wrong loop initialization</li>
              <li>• Forgot to return result</li>
            </ul>
          </div>
          <div className="bg-gray-900 rounded p-4 border border-green-500/30">
            <h4 className="font-semibold text-green-400 mb-2">✓ Must Test</h4>
            <ul className="space-y-1 text-xs text-gray-300">
              <li>• Empty input (n=0)</li>
              <li>• Single element (n=1)</li>
              <li>• All same elements</li>
              <li>• Already sorted/reverse sorted</li>
              <li>• Negative numbers (if allowed)</li>
              <li>• Max constraint value</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Optimization Patterns */}
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <h3 className="text-2xl font-bold text-white mb-4">
          🚀 Optimization Patterns
        </h3>
        <div className="space-y-2 text-sm">
          <div className="flex items-center justify-between bg-gray-900 rounded p-3">
            <span className="font-mono text-gray-400">O(n²) → O(n log n)</span>
            <span className="text-gray-300">Use sorting or merge sort</span>
          </div>
          <div className="flex items-center justify-between bg-gray-900 rounded p-3">
            <span className="font-mono text-gray-400">O(n²) → O(n)</span>
            <span className="text-gray-300">Use hash map or two pointers</span>
          </div>
          <div className="flex items-center justify-between bg-gray-900 rounded p-3">
            <span className="font-mono text-gray-400">O(2^n) → O(n²)</span>
            <span className="text-gray-300">Use dynamic programming</span>
          </div>
          <div className="flex items-center justify-between bg-gray-900 rounded p-3">
            <span className="font-mono text-gray-400">O(n) → O(log n)</span>
            <span className="text-gray-300">Use binary search</span>
          </div>
          <div className="flex items-center justify-between bg-gray-900 rounded p-3">
            <span className="font-mono text-gray-400">
              O(n) per query → O(1)
            </span>
            <span className="text-gray-300">Precompute/prefix sum</span>
          </div>
        </div>
      </div>

      {/* Interview Flow */}
      <div className="bg-gradient-to-r from-blue-900/40 to-cyan-900/40 rounded-xl p-6 border border-blue-500/30">
        <h3 className="text-2xl font-bold text-white mb-4">
          💼 Interview Problem Solving Flow
        </h3>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
              1
            </div>
            <div>
              <div className="font-semibold text-white">
                Clarify & Understand (2-3 min)
              </div>
              <div className="text-sm text-gray-300">
                Ask about constraints, edge cases, input format
              </div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
              2
            </div>
            <div>
              <div className="font-semibold text-white">
                Identify Pattern (2-3 min)
              </div>
              <div className="text-sm text-gray-300">
                Look for keywords, similar problems you&apos;ve seen
              </div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
              3
            </div>
            <div>
              <div className="font-semibold text-white">
                Discuss Approach (3-5 min)
              </div>
              <div className="text-sm text-gray-300">
                Explain brute force → optimized, state complexity
              </div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
              4
            </div>
            <div>
              <div className="font-semibold text-white">
                Code Solution (10-15 min)
              </div>
              <div className="text-sm text-gray-300">
                Write clean code, explain as you go
              </div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
              5
            </div>
            <div>
              <div className="font-semibold text-white">
                Test & Debug (3-5 min)
              </div>
              <div className="text-sm text-gray-300">
                Walk through examples, check edge cases
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final Tips */}
      <div className="bg-gradient-to-r from-green-900/40 to-emerald-900/40 rounded-xl p-6 border border-green-500/30">
        <h3 className="text-2xl font-bold text-white mb-3">🎯 Golden Rules</h3>
        <ul className="space-y-2 text-gray-300">
          <li className="flex items-start gap-2">
            <span className="text-green-400 font-bold">1.</span>
            <span>
              <strong>Read carefully</strong> - Don&apos;t miss important
              details
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400 font-bold">2.</span>
            <span>
              <strong>Think before coding</strong> - 5 minutes thinking saves 15
              minutes debugging
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400 font-bold">3.</span>
            <span>
              <strong>Check constraints</strong> - They tell you the expected
              complexity
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400 font-bold">4.</span>
            <span>
              <strong>Start simple</strong> - Brute force first, then optimize
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400 font-bold">5.</span>
            <span>
              <strong>Test thoroughly</strong> - Don&apos;t skip edge cases
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400 font-bold">6.</span>
            <span>
              <strong>Communicate clearly</strong> - Explain your thinking
              process
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

// Cheatsheet Helper Components
function CheatItem({ pattern, keywords, example }) {
  return (
    <div className="bg-gray-900 rounded-lg p-3 border border-gray-700">
      <div className="font-semibold text-white mb-1">{pattern}</div>
      <div className="text-xs text-gray-400 mb-1">
        <strong>Keywords:</strong> {keywords}
      </div>
      <div className="text-xs text-blue-400">Ex: {example}</div>
    </div>
  );
}

function CheatComplexity({ constraint, complexity, approach }) {
  return (
    <div className="flex items-center justify-between bg-gray-900 rounded p-3">
      <span className="font-mono text-gray-400 text-xs">{constraint}</span>
      <span className="font-mono text-blue-400 text-xs font-semibold">
        {complexity}
      </span>
      <span className="text-gray-300 text-xs">{approach}</span>
    </div>
  );
}

function CheatDS({ ds, when }) {
  return (
    <div className="bg-gray-900 rounded p-3 border border-gray-700">
      <div className="font-semibold text-blue-400 mb-1 text-xs">{ds}</div>
      <div className="text-xs text-gray-300">{when}</div>
    </div>
  );
}

// Helper Components
function KeywordMapping({ keywords, solution, color }) {
  const colorClasses = {
    blue: "border-blue-500/30",
    purple: "border-purple-500/30",
    green: "border-green-500/30",
    orange: "border-orange-500/30",
    red: "border-red-500/30",
    cyan: "border-cyan-500/30",
    teal: "border-teal-500/30",
    yellow: "border-yellow-500/30",
    pink: "border-pink-500/30",
    indigo: "border-indigo-500/30",
    violet: "border-violet-500/30",
    lime: "border-lime-500/30",
  };

  return (
    <div
      className={`bg-gray-900 rounded-lg p-4 border ${
        colorClasses[color] || colorClasses.blue
      }`}
    >
      <div className="mb-2">
        <div className="flex flex-wrap gap-2 mb-2">
          {keywords.map((kw, i) => (
            <span
              key={i}
              className="text-sm text-gray-300 bg-gray-800 px-2 py-1 rounded"
            >
              &quot;{kw}&quot;
            </span>
          ))}
        </div>
      </div>
      <div className="text-sm text-gray-400">→</div>
      <div className="text-white font-semibold mt-1">{solution}</div>
    </div>
  );
}

function ConstraintCard({ constraint, complexity, approach, examples, color }) {
  const colorClasses = {
    red: "border-red-500/30 bg-red-900/10",
    orange: "border-orange-500/30 bg-orange-900/10",
    yellow: "border-yellow-500/30 bg-yellow-900/10",
    blue: "border-blue-500/30 bg-blue-900/10",
    cyan: "border-cyan-500/30 bg-cyan-900/10",
    green: "border-green-500/30 bg-green-900/10",
    teal: "border-teal-500/30 bg-teal-900/10",
    purple: "border-purple-500/30 bg-purple-900/10",
    pink: "border-pink-500/30 bg-pink-900/10",
  };

  return (
    <div className={`rounded-lg p-6 border ${colorClasses[color]}`}>
      <div className="flex items-start justify-between mb-3">
        <div>
          <div className="text-2xl font-bold text-white mb-1">{constraint}</div>
          <div className="text-sm text-gray-400">{approach}</div>
        </div>
        <div className="px-3 py-1 bg-gray-800 rounded-full text-sm font-mono text-white">
          {complexity}
        </div>
      </div>
      <div className="text-sm text-gray-300">
        <strong>Examples:</strong> {examples.join(", ")}
      </div>
    </div>
  );
}

function ComplexityCard({ complexity, name, operations, examples }) {
  return (
    <div className="bg-gray-900 rounded-lg p-5 border border-gray-700">
      <div className="flex items-start justify-between mb-3">
        <div>
          <div className="text-xl font-bold text-white font-mono">
            {complexity}
          </div>
          <div className="text-sm text-gray-400">{name}</div>
        </div>
      </div>
      <div className="text-sm text-gray-300 mb-2">
        <strong>Operations:</strong> {operations}
      </div>
      <div className="text-xs text-gray-400">
        <strong>Examples:</strong> {examples.join(" • ")}
      </div>
    </div>
  );
}

function ExampleWalkthrough({ problem, constraints, steps, solution, color }) {
  const colorClasses = {
    blue: "border-blue-500/30",
    green: "border-green-500/30",
    purple: "border-purple-500/30",
  };

  return (
    <div className={`bg-gray-900 rounded-lg p-6 border ${colorClasses[color]}`}>
      <h3 className="text-xl font-semibold text-white mb-2">{problem}</h3>
      <div className="text-sm text-gray-400 mb-4">
        Constraints: {constraints}
      </div>

      <div className="space-y-3 mb-4">
        {steps.map((s, i) => (
          <div key={i} className="bg-gray-800 rounded p-3">
            <div className="text-sm font-semibold text-blue-400 mb-1">
              {s.step}
            </div>
            <div className="text-sm text-gray-300 whitespace-pre-line">
              {s.content}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-green-900/20 border border-green-500/30 rounded p-3">
        <div className="text-sm font-semibold text-green-400 mb-1">
          ✓ Final Solution:
        </div>
        <div className="text-sm text-gray-300">{solution}</div>
      </div>
    </div>
  );
}

function DecisionCard({ scenario, options }) {
  return (
    <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
      <h3 className="text-lg font-semibold text-white mb-4">{scenario}</h3>
      <div className="space-y-3">
        {options.map((opt, i) => (
          <div key={i} className="bg-gray-800 rounded p-4">
            <div className="flex items-start justify-between mb-2">
              <div className="font-semibold text-white">{opt.approach}</div>
              <div className="text-sm text-gray-400">
                Time: {opt.time} | Space: {opt.space}
              </div>
            </div>
            <div className="text-sm text-gray-400">
              <strong className="text-gray-300">When to use:</strong> {opt.when}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PitfallCard({ title, mistake, examples, solution, color }) {
  const colorClasses = {
    red: "border-red-500/30",
    orange: "border-orange-500/30",
    yellow: "border-yellow-500/30",
    blue: "border-blue-500/30",
    purple: "border-purple-500/30",
    green: "border-green-500/30",
    cyan: "border-cyan-500/30",
    pink: "border-pink-500/30",
  };

  return (
    <div className={`bg-gray-900 rounded-lg p-6 border ${colorClasses[color]}`}>
      <h3 className="text-xl font-semibold text-white mb-2">❌ {title}</h3>
      <div className="text-sm text-gray-300 mb-3">
        <strong>Mistake:</strong> {mistake}
      </div>
      <div className="bg-gray-800 rounded p-3 mb-3">
        <div className="text-sm font-semibold text-gray-400 mb-2">
          Common Examples:
        </div>
        <ul className="space-y-1">
          {examples.map((ex, i) => (
            <li key={i} className="text-sm text-gray-300">
              • {ex}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-green-900/20 border border-green-500/30 rounded p-3">
        <div className="text-sm font-semibold text-green-400 mb-1">
          ✓ Solution:
        </div>
        <div className="text-sm text-gray-300">{solution}</div>
      </div>
    </div>
  );
}

function EdgeCaseCategory({ category, cases }) {
  return (
    <div className="bg-gray-900 rounded-lg p-5 border border-gray-700">
      <h4 className="text-lg font-semibold text-white mb-3">{category}</h4>
      <ul className="space-y-2">
        {cases.map((c, i) => (
          <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
            <span className="text-blue-400">✓</span>
            <span>{c}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function OptimizationCard({ title, concept, whenToUse, examples, color }) {
  const colorClasses = {
    blue: "border-blue-500/30",
    green: "border-green-500/30",
    purple: "border-purple-500/30",
    orange: "border-orange-500/30",
    cyan: "border-cyan-500/30",
  };

  return (
    <div className={`bg-gray-900 rounded-lg p-6 border ${colorClasses[color]}`}>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <div className="text-sm text-gray-400 mb-3">
        <strong>Concept:</strong> {concept}
      </div>
      <div className="text-sm text-gray-300 mb-4">
        <strong>When to use:</strong> {whenToUse}
      </div>
      <div className="space-y-3">
        {examples.map((ex, i) => (
          <div key={i} className="bg-gray-800 rounded p-3">
            <div className="text-sm font-semibold text-blue-400 mb-2">
              Example: {ex.problem}
            </div>
            <div className="text-xs space-y-1">
              <div className="text-red-300">❌ {ex.slow}</div>
              {ex.fast && <div className="text-yellow-300">⚡ {ex.fast}</div>}
              {ex.optimal && (
                <div className="text-green-300">✓ {ex.optimal}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function OptimizationPattern({ from, technique, examples }) {
  return (
    <div className="bg-gray-900 rounded-lg p-5 border border-gray-700">
      <div className="text-lg font-bold text-white mb-2 font-mono">{from}</div>
      <div className="text-sm text-gray-400 mb-3">
        <strong>Technique:</strong> {technique}
      </div>
      <div className="text-xs text-gray-300">
        <strong>Examples:</strong> {examples.join(" • ")}
      </div>
    </div>
  );
}

function TestingStep({ step, title, description, checklist, color }) {
  const colorClasses = {
    blue: "border-blue-500/30 bg-blue-900/10",
    green: "border-green-500/30 bg-green-900/10",
    purple: "border-purple-500/30 bg-purple-900/10",
    orange: "border-orange-500/30 bg-orange-900/10",
  };

  return (
    <div className={`rounded-lg p-6 border ${colorClasses[color]}`}>
      <div className="flex items-start gap-4">
        <div className="text-2xl font-bold text-white bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
          {step}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-300 mb-3">{description}</p>
          <ul className="space-y-1">
            {checklist.map((item, i) => (
              <li
                key={i}
                className="text-sm text-gray-400 flex items-start gap-2"
              >
                <span className="text-green-400">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function DebuggingCard({ issue, questions, approach, color }) {
  const colorClasses = {
    red: "border-red-500/30",
    orange: "border-orange-500/30",
    yellow: "border-yellow-500/30",
    purple: "border-purple-500/30",
  };

  return (
    <div className={`bg-gray-900 rounded-lg p-6 border ${colorClasses[color]}`}>
      <h3 className="text-xl font-semibold text-white mb-3">🔴 {issue}</h3>
      <div className="mb-4">
        <div className="text-sm font-semibold text-gray-400 mb-2">
          Ask yourself:
        </div>
        <ul className="space-y-1">
          {questions.map((q, i) => (
            <li key={i} className="text-sm text-gray-300">
              • {q}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-gray-800 rounded p-3">
        <div className="text-sm font-semibold text-green-400 mb-1">
          Approach:
        </div>
        <div className="text-sm text-gray-300">{approach}</div>
      </div>
    </div>
  );
}

function TechniqueCard({ technique, when, howTo, pros, cons }) {
  return (
    <div className="bg-gray-900 rounded-lg p-5 border border-gray-700">
      <h4 className="text-lg font-semibold text-white mb-3">{technique}</h4>
      <div className="space-y-2 text-sm">
        <div>
          <span className="font-semibold text-gray-400">When:</span>
          <span className="text-gray-300 ml-2">{when}</span>
        </div>
        <div>
          <span className="font-semibold text-gray-400">How:</span>
          <span className="text-gray-300 ml-2">{howTo}</span>
        </div>
        <div className="flex gap-4 mt-3 pt-3 border-t border-gray-700">
          <div className="flex-1">
            <div className="text-xs font-semibold text-green-400">✓ Pros</div>
            <div className="text-xs text-gray-400">{pros}</div>
          </div>
          <div className="flex-1">
            <div className="text-xs font-semibold text-red-400">✗ Cons</div>
            <div className="text-xs text-gray-400">{cons}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Existing Helper Components
function StepCard({ number, title, description, examples, color }) {
  const colorClasses = {
    blue: "border-blue-500/30 bg-blue-900/20",
    purple: "border-purple-500/30 bg-purple-900/20",
    green: "border-green-500/30 bg-green-900/20",
    orange: "border-orange-500/30 bg-orange-900/20",
    red: "border-red-500/30 bg-red-900/20",
  };

  return (
    <div
      className={`rounded-lg p-6 border ${
        colorClasses[color] || colorClasses.blue
      }`}
    >
      <div className="flex items-start gap-4">
        <div className="text-3xl font-bold text-white bg-gray-800 rounded-full w-12 h-12 flex items-center justify-center">
          {number}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-300 mb-3">{description}</p>
          <ul className="space-y-1">
            {examples.map((example, i) => (
              <li
                key={i}
                className="text-sm text-gray-400 flex items-start gap-2"
              >
                <span>•</span>
                <span>{example}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function QuestionCard({ question, yes, no, color }) {
  const colorClasses = {
    blue: "border-blue-500/30",
    purple: "border-purple-500/30",
    green: "border-green-500/30",
    orange: "border-orange-500/30",
    red: "border-red-500/30",
    cyan: "border-cyan-500/30",
  };

  return (
    <div
      className={`bg-gray-900 rounded-lg p-6 border ${
        colorClasses[color] || colorClasses.blue
      }`}
    >
      <h3 className="text-lg font-semibold text-white mb-3">{question}</h3>
      <div className="space-y-2 text-sm">
        <div className="text-green-400">✓ {yes}</div>
        <div className="text-gray-400">✗ {no}</div>
      </div>
    </div>
  );
}

function PatternCard({ pattern, solution, examples }) {
  return (
    <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-semibold text-white">{pattern}</h3>
        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-semibold">
          {solution}
        </span>
      </div>
      <div className="flex gap-2 flex-wrap">
        {examples.map((example, i) => (
          <span
            key={i}
            className="px-2 py-1 bg-gray-800 text-gray-400 rounded text-xs"
          >
            {example}
          </span>
        ))}
      </div>
    </div>
  );
}

function DSGuideCard({ name, keywords, patterns, operations, color }) {
  const colorClasses = {
    orange: "border-orange-500/30",
    indigo: "border-indigo-500/30",
    red: "border-red-500/30",
    blue: "border-blue-500/30",
    green: "border-green-500/30",
    yellow: "border-yellow-500/30",
    purple: "border-purple-500/30",
    pink: "border-pink-500/30",
    cyan: "border-cyan-500/30",
    teal: "border-teal-500/30",
  };

  return (
    <div
      className={`bg-gray-900 rounded-lg p-6 border ${
        colorClasses[color] || colorClasses.blue
      }`}
    >
      <h3 className="text-xl font-semibold text-white mb-4">{name}</h3>
      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <h4 className="text-sm font-semibold text-gray-400 mb-2">
            Keywords:
          </h4>
          <ul className="space-y-1 text-sm text-gray-300">
            {keywords.map((kw, i) => (
              <li key={i}>• {kw}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-gray-400 mb-2">
            Patterns:
          </h4>
          <ul className="space-y-1 text-sm text-gray-300">
            {patterns.map((p, i) => (
              <li key={i}>• {p}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-gray-400 mb-2">
            Operations:
          </h4>
          <ul className="space-y-1 text-sm text-gray-300">
            {operations.map((op, i) => (
              <li key={i}>• {op}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function AlgoGuideCard({ name, keywords, signs, examples, complexity, color }) {
  const colorClasses = {
    blue: "border-blue-500/30",
    green: "border-green-500/30",
    purple: "border-purple-500/30",
    orange: "border-orange-500/30",
    cyan: "border-cyan-500/30",
    red: "border-red-500/30",
    yellow: "border-yellow-500/30",
  };

  return (
    <div
      className={`bg-gray-900 rounded-lg p-6 border ${
        colorClasses[color] || colorClasses.blue
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-semibold text-white">{name}</h3>
        <span className="px-3 py-1 bg-gray-800 text-gray-400 rounded-full text-sm">
          {complexity}
        </span>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <h4 className="text-sm font-semibold text-gray-400 mb-2">
            Keywords:
          </h4>
          <ul className="space-y-1 text-sm text-gray-300">
            {keywords.map((kw, i) => (
              <li key={i}>• {kw}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-gray-400 mb-2">Signs:</h4>
          <ul className="space-y-1 text-sm text-gray-300">
            {signs.map((s, i) => (
              <li key={i}>• {s}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-4">
        <h4 className="text-sm font-semibold text-gray-400 mb-2">Examples:</h4>
        <div className="flex gap-2 flex-wrap">
          {examples.map((ex, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-gray-800 text-gray-400 rounded text-xs"
            >
              {ex}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function TipCard({ step, title, description, examples, color }) {
  const colorClasses = {
    blue: "border-blue-500/30 bg-blue-900/20",
    purple: "border-purple-500/30 bg-purple-900/20",
    green: "border-green-500/30 bg-green-900/20",
    orange: "border-orange-500/30 bg-orange-900/20",
    red: "border-red-500/30 bg-red-900/20",
    cyan: "border-cyan-500/30 bg-cyan-900/20",
  };

  return (
    <div
      className={`rounded-lg p-6 border ${
        colorClasses[color] || colorClasses.blue
      }`}
    >
      <div className="flex items-start gap-4">
        <div className="text-2xl font-bold text-white bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center">
          {step}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-300 mb-3">{description}</p>
          <ul className="space-y-1">
            {examples.map((example, i) => (
              <li
                key={i}
                className="text-sm text-gray-400 flex items-start gap-2"
              >
                <span>•</span>
                <span>{example}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
