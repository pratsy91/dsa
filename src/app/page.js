"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <header className="border-b border-gray-700 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            DSA Mastery
          </h1>
          <p className="text-gray-400 mt-2">
            Master Data Structures & Algorithms, one concept at a time
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 rounded-2xl p-8 mb-12 border border-blue-500/30">
          <h2 className="text-3xl font-bold text-white mb-4">
            Welcome to Your DSA Journey! 🚀
          </h2>
          <p className="text-gray-300 text-lg mb-4">
            Before diving into data structures, let's build a strong foundation
            by understanding how to analyze algorithms.
          </p>
          <p className="text-gray-400">
            Algorithm analysis helps you understand how efficient your code is
            and make better decisions when solving problems.
          </p>
        </div>

        {/* Main Topic Card */}
        <Link href="/algorithm-analysis">
          <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-8 border border-gray-600 hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 cursor-pointer">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-6xl">⏱️</div>
              <div>
                <h3 className="text-3xl font-bold text-white">
                  Algorithm Analysis
                </h3>
                <p className="text-gray-400">Time & Space Complexity</p>
              </div>
            </div>

            <p className="text-gray-300 mb-6 text-lg">
              Learn to analyze the efficiency of your code using Big O notation.
              Understand time and space complexity to write optimal solutions.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                <div className="text-2xl mb-2">📊</div>
                <h4 className="font-semibold text-white mb-1">
                  Time Complexity
                </h4>
                <p className="text-sm text-gray-400">
                  How execution time grows with input size
                </p>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                <div className="text-2xl mb-2">💾</div>
                <h4 className="font-semibold text-white mb-1">
                  Space Complexity
                </h4>
                <p className="text-sm text-gray-400">
                  How memory usage grows with input size
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex gap-4">
                <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-semibold">
                  Essential Foundation
                </span>
                <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold">
                  Interactive Examples
                </span>
              </div>
              <span className="text-blue-400 font-semibold">
                Start Learning →
              </span>
            </div>
          </div>
        </Link>

        {/* Why Start Here */}
        <div className="mt-12 bg-gray-800/50 rounded-xl p-6 border border-gray-700">
          <h3 className="text-xl font-bold text-white mb-4">
            🎯 Why Start with Algorithm Analysis?
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✓</span>
              <span>
                <strong>Universal Language:</strong> Big O notation is the
                standard way developers communicate about efficiency
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✓</span>
              <span>
                <strong>Better Decisions:</strong> Choose the right data
                structure and algorithm for each problem
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✓</span>
              <span>
                <strong>Interview Essential:</strong> Every technical interview
                expects you to analyze complexity
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✓</span>
              <span>
                <strong>Foundation for Everything:</strong> You'll use this
                knowledge in every data structure and algorithm
              </span>
            </li>
          </ul>
        </div>

        {/* Math for DSA */}
        <div className="mt-12">
          <Link href="/math-for-dsa">
            <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-2xl p-8 border border-purple-500/30 hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-5xl">🔢</div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Math for DSA
                  </h3>
                  <p className="text-gray-400">
                    Essential Mathematical Concepts
                  </p>
                </div>
              </div>

              <p className="text-gray-300 mb-4">
                Master the mathematical foundations needed for DSA: Number
                Theory, Bit Manipulation, Combinatorics, and more with real
                interview problems.
              </p>

              <div className="flex items-center justify-between">
                <div className="flex gap-2 flex-wrap">
                  {[
                    "Prime Numbers",
                    "GCD/LCM",
                    "Bit Tricks",
                    "Permutations",
                  ].map((topic, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-semibold"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                <span className="text-purple-400 font-semibold">
                  Start Learning →
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Recursion */}
        <div className="mt-12">
          <Link href="/recursion">
            <div className="bg-gradient-to-br from-green-900/40 to-teal-900/40 rounded-2xl p-8 border border-green-500/30 hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-5xl">🔄</div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Recursion Mastery
                  </h3>
                  <p className="text-gray-400">
                    Master the Art of Recursive Thinking
                  </p>
                </div>
              </div>

              <p className="text-gray-300 mb-4">
                Learn recursion from basics to advanced: call stack, base cases,
                recursive patterns, backtracking, and solve classic problems.
              </p>

              <div className="flex items-center justify-between">
                <div className="flex gap-2 flex-wrap">
                  {[
                    "Call Stack",
                    "Base Cases",
                    "Backtracking",
                    "Tree Recursion",
                  ].map((topic, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs font-semibold"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                <span className="text-green-400 font-semibold">
                  Start Learning →
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Arrays */}
        <div className="mt-12">
          <Link href="/arrays">
            <div className="bg-gradient-to-br from-orange-900/40 to-red-900/40 rounded-2xl p-8 border border-orange-500/30 hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-5xl">📊</div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Arrays & Strings Mastery
                  </h3>
                  <p className="text-gray-400">
                    Foundation of Programming - Contiguous Memory & Character
                    Sequences
                  </p>
                </div>
              </div>

              <p className="text-gray-300 mb-4">
                Master arrays from basics to advanced: two pointers, sliding
                window, prefix sums, and solve 25+ essential problems including
                Leaders, Trapping Rain Water, and Maximum Subarray Sum.
              </p>

              <div className="flex items-center justify-between">
                <div className="flex gap-2 flex-wrap">
                  {[
                    "Two Pointers",
                    "Sliding Window",
                    "Prefix Sums",
                    "Kadane's Algorithm",
                  ].map((topic, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-xs font-semibold"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                <span className="text-orange-400 font-semibold">
                  Start Learning →
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Searching */}
        <div className="mt-12">
          <Link href="/searching">
            <div className="bg-gradient-to-br from-indigo-900/40 to-blue-900/40 rounded-2xl p-8 border border-indigo-500/30 hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-5xl">🔍</div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Searching Algorithms Mastery
                  </h3>
                  <p className="text-gray-400">
                    Binary Search, Linear Search & Advanced Search Techniques
                  </p>
                </div>
              </div>

              <p className="text-gray-300 mb-4">
                Master searching algorithms from basics to advanced: Binary
                Search variations, Peak Finding, Rotated Array Search, and solve
                15+ essential problems including Square Root and Median of Two
                Sorted Arrays.
              </p>

              <div className="flex items-center justify-between">
                <div className="flex gap-2 flex-wrap">
                  {[
                    "Binary Search",
                    "Linear Search",
                    "Peak Finding",
                    "Rotated Arrays",
                  ].map((topic, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs font-semibold"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                <span className="text-indigo-400 font-semibold">
                  Start Learning →
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Sorting */}
        <div className="mt-12">
          <Link href="/sorting">
            <div className="bg-gradient-to-br from-emerald-900/40 to-teal-900/40 rounded-2xl p-8 border border-emerald-500/30 hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-5xl">📊</div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Sorting Algorithms Mastery
                  </h3>
                  <p className="text-gray-400">
                    Bubble, Selection, Insertion, Merge, Quick, Heap & Special
                    Sorts
                  </p>
                </div>
              </div>

              <p className="text-gray-300 mb-4">
                Master all sorting algorithms from basics to advanced: Bubble,
                Selection, Insertion, Merge Sort, QuickSort, Heap Sort, Counting
                Sort, Radix Sort, and solve 33+ essential problems including Kth
                Smallest Element and Cycle Sort.
              </p>

              <div className="flex items-center justify-between">
                <div className="flex gap-2 flex-wrap">
                  {["Bubble Sort", "QuickSort", "Merge Sort", "Heap Sort"].map(
                    (topic, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs font-semibold"
                      >
                        {topic}
                      </span>
                    )
                  )}
                </div>
                <span className="text-emerald-400 font-semibold">
                  Start Learning →
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Matrix */}
        <div className="mt-12">
          <Link href="/matrix">
            <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-2xl p-8 border border-purple-500/30 hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-5xl">📊</div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Matrix & 2D Arrays Mastery
                  </h3>
                  <p className="text-gray-400">
                    Snake Pattern, Spiral Traversal, Rotation & Search in 2D
                    Arrays
                  </p>
                </div>
              </div>

              <p className="text-gray-300 mb-4">
                Master 2D array algorithms: Snake Pattern traversal, Matrix
                boundary traversal, Transpose operations, Matrix rotation,
                Spiral traversal, and search in row-wise and column-wise sorted
                matrices.
              </p>

              <div className="flex items-center justify-between">
                <div className="flex gap-2 flex-wrap">
                  {[
                    "Snake Pattern",
                    "Spiral Traversal",
                    "Matrix Rotation",
                    "Boundary Traversal",
                  ].map((topic, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-semibold"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                <span className="text-purple-400 font-semibold">
                  Start Learning →
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Hashing */}
        <div className="mt-12">
          <Link href="/hashing">
            <div className="bg-gradient-to-br from-orange-900/40 to-red-900/40 rounded-2xl p-8 border border-orange-500/30 hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-5xl">🔑</div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Hashing & Hash Tables Mastery
                  </h3>
                  <p className="text-gray-400">
                    Hash Tables, Frequency Count, Subarray Problems & Advanced
                    Hashing
                  </p>
                </div>
              </div>

              <p className="text-gray-300 mb-4">
                Master hashing algorithms: Count distinct elements, frequency
                analysis, array intersections/unions, subarray problems with
                given sum, longest consecutive subsequences, and sliding window
                techniques.
              </p>

              <div className="flex items-center justify-between">
                <div className="flex gap-2 flex-wrap">
                  {[
                    "Hash Tables",
                    "Frequency Count",
                    "Subarray Sum",
                    "Sliding Window",
                  ].map((topic, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-xs font-semibold"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                <span className="text-orange-400 font-semibold">
                  Start Learning →
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Strings */}
        <div className="mt-12">
          <Link href="/strings">
            <div className="bg-gradient-to-br from-cyan-900/40 to-blue-900/40 rounded-2xl p-8 border border-cyan-500/30 hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-5xl">📝</div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Strings & Pattern Matching Mastery
                  </h3>
                  <p className="text-gray-400">
                    String Manipulation, Pattern Searching & Advanced String
                    Algorithms
                  </p>
                </div>
              </div>

              <p className="text-gray-300 mb-4">
                Master string algorithms: Palindrome checks, anagram detection,
                pattern searching with KMP and Rabin-Karp, string rotations,
                lexicographic operations, and substring problems.
              </p>

              <div className="flex items-center justify-between">
                <div className="flex gap-2 flex-wrap">
                  {[
                    "Palindrome",
                    "Pattern Matching",
                    "String Rotation",
                    "Anagram Search",
                  ].map((topic, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs font-semibold"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                <span className="text-cyan-400 font-semibold">
                  Start Learning →
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Linked Lists */}
        <div className="mt-12">
          <Link href="/linked-lists">
            <div className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 rounded-2xl p-8 border border-indigo-500/30 hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-5xl">🔗</div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Linked Lists Mastery
                  </h3>
                  <p className="text-gray-400">
                    Singly, Doubly, Circular Linked Lists & Advanced Operations
                  </p>
                </div>
              </div>

              <p className="text-gray-300 mb-4">
                Master linked list algorithms: Traversal, insertion, deletion,
                reversal, loop detection, and advanced operations including
                cloning with random pointers and pairwise swapping.
              </p>

              <div className="flex items-center justify-between">
                <div className="flex gap-2 flex-wrap">
                  {[
                    "Traversal",
                    "Insertion/Deletion",
                    "Reversal",
                    "Loop Detection",
                  ].map((topic, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs font-semibold"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                <span className="text-indigo-400 font-semibold">
                  Start Learning →
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Stacks */}
        <div className="mt-12">
          <Link href="/stacks">
            <div className="bg-gradient-to-br from-orange-900/40 to-red-900/40 rounded-2xl p-8 border border-orange-500/30 hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-5xl">📚</div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Stacks Mastery
                  </h3>
                  <p className="text-gray-400">
                    LIFO Data Structure, Expression Evaluation & Advanced
                    Problems
                  </p>
                </div>
              </div>

              <p className="text-gray-300 mb-4">
                Master stack algorithms: Balanced parentheses, expression
                evaluation, stock span problems, histogram area, and advanced
                stack operations with O(1) minimum.
              </p>

              <div className="flex items-center justify-between">
                <div className="flex gap-2 flex-wrap">
                  {[
                    "LIFO Operations",
                    "Expression Evaluation",
                    "Stock Span",
                    "Histogram Area",
                  ].map((topic, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-xs font-semibold"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                <span className="text-orange-400 font-semibold">
                  Start Learning →
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Queues */}
        <div className="mt-12">
          <Link href="/queues">
            <div className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 rounded-2xl p-8 border border-blue-500/30 hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-5xl">🚀</div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Queues Mastery
                  </h3>
                  <p className="text-gray-400">
                    FIFO Data Structure, Implementation & Advanced Problems
                  </p>
                </div>
              </div>

              <p className="text-gray-300 mb-4">
                Master queue algorithms: FIFO operations, circular queues,
                priority queues, stack implementation using queues, and number
                generation with given digits.
              </p>

              <div className="flex items-center justify-between">
                <div className="flex gap-2 flex-wrap">
                  {[
                    "FIFO Operations",
                    "Circular Queue",
                    "Priority Queue",
                    "Stack Implementation",
                  ].map((topic, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-semibold"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                <span className="text-blue-400 font-semibold">
                  Start Learning →
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Deque */}
        <div className="mt-12">
          <Link href="/deque">
            <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-2xl p-8 border border-purple-500/30 hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-5xl">🔄</div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Deque Mastery
                  </h3>
                  <p className="text-gray-400">
                    Double-ended Queue, Sliding Window & Advanced Algorithms
                  </p>
                </div>
              </div>

              <p className="text-gray-300 mb-4">
                Master deque algorithms: Min/Max data structures, sliding window
                maximums, circular tour problems, and advanced deque
                applications.
              </p>

              <div className="flex items-center justify-between">
                <div className="flex gap-2 flex-wrap">
                  {[
                    "Double-ended Operations",
                    "Sliding Window",
                    "Min/Max Structures",
                    "Circular Tour",
                  ].map((topic, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-semibold"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                <span className="text-purple-400 font-semibold">
                  Start Learning →
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Trees */}
        <div className="mt-12">
          <Link href="/trees">
            <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 rounded-2xl p-8 border border-green-500/30 hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-5xl">🌳</div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Trees Mastery
                  </h3>
                  <p className="text-gray-400">
                    Binary Trees, Traversals & Advanced Tree Algorithms
                  </p>
                </div>
              </div>

              <p className="text-gray-300 mb-4">
                Master tree algorithms: Binary trees, traversals
                (inorder/preorder/postorder), level order, tree construction,
                LCA, diameter, and advanced tree operations.
              </p>

              <div className="flex items-center justify-between">
                <div className="flex gap-2 flex-wrap">
                  {[
                    "Binary Trees",
                    "Tree Traversals",
                    "Tree Construction",
                    "Advanced Algorithms",
                  ].map((topic, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs font-semibold"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                <span className="text-green-400 font-semibold">
                  Start Learning →
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Binary Search Trees */}
        <div className="mt-12">
          <Link href="/bst">
            <div className="bg-gradient-to-br from-yellow-900/40 to-orange-900/40 rounded-2xl p-8 border border-yellow-500/30 hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-5xl">🔍</div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Binary Search Trees Mastery
                  </h3>
                  <p className="text-gray-400">
                    BST Operations, Self-Balancing Trees & Advanced Algorithms
                  </p>
                </div>
              </div>

              <p className="text-gray-300 mb-4">
                Master BST algorithms: Insert, delete, search, floor, ceil, kth
                smallest, BST validation, self-balancing trees (AVL, Red-Black),
                and advanced BST problems.
              </p>

              <div className="flex items-center justify-between">
                <div className="flex gap-2 flex-wrap">
                  {[
                    "BST Operations",
                    "Self-Balancing Trees",
                    "BST Validation",
                    "Advanced Problems",
                  ].map((topic, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-xs font-semibold"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                <span className="text-yellow-400 font-semibold">
                  Start Learning →
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Heaps */}
        <div className="mt-12">
          <Link href="/heap">
            <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-2xl p-8 border border-purple-500/30 hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-5xl">📚</div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Heaps & Priority Queues Mastery
                  </h3>
                  <p className="text-gray-400">
                    Binary Heaps, Heap Sort & Advanced Heap Problems
                  </p>
                </div>
              </div>

              <p className="text-gray-300 mb-4">
                Master heap data structures: Binary heap implementation, heap
                operations (insert, extract, heapify), heap sort, priority
                queues, and advanced heap problems like K-largest elements,
                merge K sorted arrays, and median of stream.
              </p>

              <div className="flex items-center justify-between">
                <div className="flex gap-2 flex-wrap">
                  {[
                    "Binary Heaps",
                    "Heap Sort",
                    "Priority Queues",
                    "Advanced Problems",
                  ].map((topic, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-semibold"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                <span className="text-purple-400 font-semibold">
                  Start Learning →
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Graphs */}
        <div className="mt-12">
          <Link href="/graph">
            <div className="bg-gradient-to-br from-green-900/40 to-blue-900/40 rounded-2xl p-8 border border-green-500/30 hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-5xl">🕸️</div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Graphs & Graph Algorithms Mastery
                  </h3>
                  <p className="text-gray-400">
                    BFS, DFS, Shortest Paths, MST & Advanced Graph Algorithms
                  </p>
                </div>
              </div>

              <p className="text-gray-300 mb-4">
                Master graph data structures and algorithms: BFS, DFS, shortest
                paths (Dijkstra, Bellman-Ford), minimum spanning trees (Prim,
                Kruskal), cycle detection, topological sorting, and advanced
                algorithms like Kosaraju's, articulation points, and bridges.
              </p>

              <div className="flex items-center justify-between">
                <div className="flex gap-2 flex-wrap">
                  {[
                    "Graph Traversal",
                    "Shortest Paths",
                    "MST Algorithms",
                    "Advanced Topics",
                  ].map((topic, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs font-semibold"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                <span className="text-green-400 font-semibold">
                  Start Learning →
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Greedy Algorithms */}
        <div className="mt-12">
          <Link href="/greedy">
            <div className="bg-gradient-to-br from-orange-900/40 to-red-900/40 rounded-2xl p-8 border border-orange-500/30 hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-5xl">🎯</div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Greedy Algorithms Mastery
                  </h3>
                  <p className="text-gray-400">
                    Activity Selection, Knapsack, Job Sequencing & Huffman
                    Coding
                  </p>
                </div>
              </div>

              <p className="text-gray-300 mb-4">
                Master greedy algorithms: Activity Selection Problem, Fractional
                Knapsack, Job Sequencing, Huffman Coding, and advanced greedy
                techniques. Learn when to use greedy approach and how to prove
                optimality.
              </p>

              <div className="flex items-center justify-between">
                <div className="flex gap-2 flex-wrap">
                  {[
                    "Activity Selection",
                    "Knapsack Problems",
                    "Job Sequencing",
                    "Huffman Coding",
                  ].map((topic, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-xs font-semibold"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                <span className="text-orange-400 font-semibold">
                  Start Learning →
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Backtracking */}
        <div className="mt-12">
          <Link href="/backtracking">
            <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-2xl p-8 border border-purple-500/30 hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-5xl">🔄</div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Backtracking Algorithms Mastery
                  </h3>
                  <p className="text-gray-400">
                    Rat in Maze, N Queen Problem, Sudoku & Advanced Backtracking
                  </p>
                </div>
              </div>

              <p className="text-gray-300 mb-4">
                Master backtracking algorithms: Rat in a Maze, N Queen Problem,
                Sudoku Solver, and advanced backtracking techniques. Learn
                systematic exploration and constraint satisfaction.
              </p>

              <div className="flex items-center justify-between">
                <div className="flex gap-2 flex-wrap">
                  {["Concepts", "Rat in Maze", "N Queen", "Sudoku"].map(
                    (topic, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-semibold"
                      >
                        {topic}
                      </span>
                    )
                  )}
                </div>
                <span className="text-purple-400 font-semibold">
                  Start Learning →
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Dynamic Programming */}
        <div className="mt-12">
          <Link href="/dynamic-programming">
            <div className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 rounded-2xl p-8 border border-blue-500/30 hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-5xl">⚡</div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Dynamic Programming Mastery
                  </h3>
                  <p className="text-gray-400">
                    LCS, Edit Distance, LIS, Knapsack & Advanced DP Problems
                  </p>
                </div>
              </div>

              <p className="text-gray-300 mb-4">
                Master dynamic programming: Memoization, Tabulation, Longest
                Common Subsequence, Edit Distance, Longest Increasing
                Subsequence, 0/1 Knapsack, and advanced DP techniques.
              </p>

              <div className="flex items-center justify-between">
                <div className="flex gap-2 flex-wrap">
                  {[
                    "Memoization",
                    "Tabulation",
                    "LCS",
                    "Edit Distance",
                    "LIS",
                    "Knapsack",
                  ].map((topic, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-semibold"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                <span className="text-blue-400 font-semibold">
                  Start Learning →
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Trie Data Structure */}
        <div className="mt-12">
          <Link href="/trie">
            <div className="bg-gradient-to-br from-green-900/40 to-blue-900/40 rounded-2xl p-8 border border-green-500/30 hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-5xl">🌳</div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Trie Data Structure Mastery
                  </h3>
                  <p className="text-gray-400">
                    Introduction, Representation, Search, Insert, Delete &
                    Advanced Applications
                  </p>
                </div>
              </div>

              <p className="text-gray-300 mb-4">
                Master Trie data structure: Introduction, Representation,
                Search, Insert, Delete, Count Distinct Rows, and advanced
                applications like Word Search and Auto-complete.
              </p>

              <div className="flex items-center justify-between">
                <div className="flex gap-2 flex-wrap">
                  {[
                    "Introduction",
                    "Representation",
                    "Search",
                    "Insert",
                    "Delete",
                    "Applications",
                  ].map((topic, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs font-semibold"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                <span className="text-green-400 font-semibold">
                  Start Learning →
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Segment Trees & Binary Indexed Trees */}
        <div className="mt-12">
          <Link href="/segment-trees">
            <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-2xl p-8 border border-purple-500/30 hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-5xl">🌲</div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Segment Trees & Binary Indexed Trees Mastery
                  </h3>
                  <p className="text-gray-400">
                    Range Queries, Range Updates, Lazy Propagation & Advanced
                    Applications
                  </p>
                </div>
              </div>

              <p className="text-gray-300 mb-4">
                Master advanced tree data structures: Segment Trees, Binary
                Indexed Trees, Range Queries, Range Updates, Lazy Propagation,
                and advanced applications like Count of Smaller Numbers.
              </p>

              <div className="flex items-center justify-between">
                <div className="flex gap-2 flex-wrap">
                  {[
                    "Segment Trees",
                    "Binary Indexed Trees",
                    "Range Queries",
                    "Range Updates",
                    "Lazy Propagation",
                    "Applications",
                  ].map((topic, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-semibold"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                <span className="text-purple-400 font-semibold">
                  Start Learning →
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Disjoint Sets */}
        <div className="mt-12">
          <Link href="/disjoint-sets">
            <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 rounded-2xl p-8 border border-blue-500/30 hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-5xl">🔗</div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Disjoint Sets (Union-Find) Mastery
                  </h3>
                  <p className="text-gray-400">
                    Find/Union Operations, Union by Rank, Path Compression &
                    Kruskal's Algorithm
                  </p>
                </div>
              </div>

              <p className="text-gray-300 mb-4">
                Master Disjoint Set data structure: Introduction, Find/Union
                operations, Union by Rank, Path Compression, and Kruskal's
                Algorithm for MST.
              </p>

              <div className="flex items-center justify-between">
                <div className="flex gap-2 flex-wrap">
                  {[
                    "Find/Union Operations",
                    "Union by Rank",
                    "Path Compression",
                    "Kruskal's Algorithm",
                    "Connected Components",
                    "Cycle Detection",
                  ].map((topic, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-semibold"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                <span className="text-blue-400 font-semibold">
                  Start Learning →
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Coming Next */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-white mb-6">
            🔜 Coming Next: Advanced Topics
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Arrays & Strings",
              "Linked Lists",
              "Stacks & Queues",
              "Hash Tables",
            ].map((topic, i) => (
              <div
                key={i}
                className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/50 opacity-50"
              >
                <div className="flex items-center gap-3">
                  <div className="text-2xl">🔒</div>
                  <div>
                    <div className="font-semibold text-gray-400">{topic}</div>
                    <div className="text-sm text-gray-500">Coming Soon</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
