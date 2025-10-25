"use client";

import { useState } from "react";

export default function DisjointSetsPage() {
  const [activeSection, setActiveSection] = useState("introduction");

  const sections = [
    { id: "introduction", title: "Introduction", icon: "📚" },
    { id: "basic-operations", title: "Basic Operations", icon: "🔧" },
    { id: "optimizations", title: "Optimizations", icon: "⚡" },
    { id: "applications", title: "Applications", icon: "🎯" },
    { id: "advanced", title: "Advanced", icon: "🚀" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Disjoint Sets (Union-Find) Mastery
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Master Disjoint Set data structure: Introduction, Find/Union
            operations, Union by Rank, Path Compression, and Kruskal&apos;s
            Algorithm
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
          {activeSection === "basic-operations" && <BasicOperationsSection />}
          {activeSection === "optimizations" && <OptimizationsSection />}
          {activeSection === "applications" && <ApplicationsSection />}
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
  duration,
}) {
  const [showSolution, setShowSolution] = useState(false);

  return (
    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 mb-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          {duration && (
            <span className="text-sm text-gray-400 flex items-center gap-1">
              <span>▶</span>
              {duration}
            </span>
          )}
        </div>
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
      <h2 className="text-3xl font-bold text-white mb-6">
        Introduction to Disjoint Sets (Union-Find)
      </h2>

      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h3 className="text-2xl font-bold text-white mb-4">
          What are Disjoint Sets?
        </h3>
        <p className="text-gray-300 mb-4">
          A Disjoint Set (also called Union-Find) is a data structure that
          tracks a set of elements partitioned into a number of disjoint
          (non-overlapping) subsets. It provides efficient operations to find
          which subset an element belongs to and to merge two subsets.
        </p>

        <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
          <h4 className="text-xl font-semibold text-blue-200 mb-3">
            Key Operations:
          </h4>
          <ul className="space-y-2 text-blue-100">
            <li>
              • <strong>Find(x):</strong> Find which subset element x belongs to
            </li>
            <li>
              • <strong>Union(x, y):</strong> Merge subsets containing x and y
            </li>
            <li>
              • <strong>Connected(x, y):</strong> Check if x and y are in same
              subset
            </li>
            <li>
              • <strong>Count:</strong> Get number of disjoint subsets
            </li>
          </ul>
        </div>

        <div className="mt-6 bg-gray-700 rounded-lg p-4">
          <h4 className="text-lg font-semibold text-white mb-3">
            Applications
          </h4>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>
              <strong>Kruskal&apos;s Algorithm:</strong> Minimum Spanning Tree
            </li>
            <li>
              <strong>Connected Components:</strong> Graph connectivity
            </li>
            <li>
              <strong>Network Connectivity:</strong> Check if nodes are
              connected
            </li>
            <li>
              <strong>Image Processing:</strong> Connected component labeling
            </li>
            <li>
              <strong>Maze Generation:</strong> Ensure path connectivity
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h3 className="text-2xl font-bold text-white mb-4">Time Complexity</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-600">
                <th className="text-left py-2 text-white">Operation</th>
                <th className="text-left py-2 text-white">Naive</th>
                <th className="text-left py-2 text-white">Union by Rank</th>
                <th className="text-left py-2 text-white">
                  With Path Compression
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-gray-300">Find</td>
                <td className="py-2 text-red-400">O(n)</td>
                <td className="py-2 text-yellow-400">O(log n)</td>
                <td className="py-2 text-green-400">O(α(n))</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-gray-300">Union</td>
                <td className="py-2 text-red-400">O(n)</td>
                <td className="py-2 text-yellow-400">O(log n)</td>
                <td className="py-2 text-green-400">O(α(n))</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-gray-300">Space</td>
                <td className="py-2 text-green-400">O(n)</td>
                <td className="py-2 text-green-400">O(n)</td>
                <td className="py-2 text-green-400">O(n)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-400 text-sm mt-4">
          α(n) is the inverse Ackermann function, which grows very slowly and is
          practically constant for all reasonable values of n.
        </p>
      </div>

      <ProblemBlock
        title="Disjoint Set Introduction"
        difficulty="Medium"
        description="Basic implementation of Disjoint Set data structure with find and union operations."
        duration="10 min, 17 sec"
        solution={`// Disjoint Set (Union-Find) - Introduction

class DisjointSet {
  constructor(n) {
    this.parent = new Array(n);
    this.rank = new Array(n);
    this.count = n; // Number of disjoint sets
    
    console.log("=== Initializing Disjoint Set ===");
    console.log("Number of elements:", n);
    
    // Initialize each element as its own parent
    for (let i = 0; i < n; i++) {
      this.parent[i] = i;
      this.rank[i] = 0;
    }
    
    console.log("Parent array:", this.parent);
    console.log("Rank array:", this.rank);
    console.log("Initial count of sets:", this.count);
  }

  // Find the root of element x
  find(x) {
    console.log("\\nFinding root of element", x);
    
    // If x is not its own parent, find root recursively
    if (this.parent[x] !== x) {
      console.log("  " + x + " is not root, parent is " + this.parent[x]);
      this.parent[x] = this.find(this.parent[x]); // Path compression
      console.log("  After path compression, parent of " + x + " is " + this.parent[x]);
    }
    
    console.log("  Root of " + x + " is " + this.parent[x]);
    return this.parent[x];
  }

  // Union two sets containing x and y
  union(x, y) {
    console.log("\\n=== Union(" + x + ", " + y + ") ===");
    
    const rootX = this.find(x);
    const rootY = this.find(y);
    
    console.log("Root of " + x + " is " + rootX);
    console.log("Root of " + y + " is " + rootY);
    
    // If already in same set, no union needed
    if (rootX === rootY) {
      console.log("Elements are already in the same set, no union needed");
      return;
    }
    
    // Union by rank: attach smaller tree to larger tree
    if (this.rank[rootX] < this.rank[rootY]) {
      console.log("Rank of " + rootX + " (" + this.rank[rootX] + ") < rank of " + rootY + " (" + this.rank[rootY] + ")");
      this.parent[rootX] = rootY;
      console.log("Setting parent of " + rootX + " to " + rootY);
    } else if (this.rank[rootX] > this.rank[rootY]) {
      console.log("Rank of " + rootX + " (" + this.rank[rootX] + ") > rank of " + rootY + " (" + this.rank[rootY] + ")");
      this.parent[rootY] = rootX;
      console.log("Setting parent of " + rootY + " to " + rootX);
    } else {
      console.log("Ranks are equal, attaching " + rootY + " to " + rootX);
      this.parent[rootY] = rootX;
      this.rank[rootX]++;
      console.log("Incrementing rank of " + rootX + " to " + this.rank[rootX]);
    }
    
    this.count--;
    console.log("Number of sets after union:", this.count);
  }

  // Check if two elements are in the same set
  connected(x, y) {
    console.log("\\nChecking if " + x + " and " + y + " are connected");
    const result = this.find(x) === this.find(y);
    console.log("Result:", result);
    return result;
  }

  // Get number of disjoint sets
  getCount() {
    console.log("\\nNumber of disjoint sets:", this.count);
    return this.count;
  }

  // Print current state
  printState() {
    console.log("\\n=== Current State ===");
    console.log("Parent array:", this.parent);
    console.log("Rank array:", this.rank);
    console.log("Number of sets:", this.count);
  }
}

// Test the Disjoint Set
console.log("=== Testing Disjoint Set ===");

const ds = new DisjointSet(5);
ds.printState();

console.log("\\n--- Testing Union Operations ---");
ds.union(0, 1);
ds.printState();

ds.union(2, 3);
ds.printState();

ds.union(1, 2);
ds.printState();

console.log("\\n--- Testing Find Operations ---");
console.log("Find(0):", ds.find(0));
console.log("Find(3):", ds.find(3));
console.log("Find(4):", ds.find(4));

console.log("\\n--- Testing Connected Operations ---");
console.log("Connected(0, 3):", ds.connected(0, 3));
console.log("Connected(0, 4):", ds.connected(0, 4));
console.log("Connected(1, 2):", ds.connected(1, 2));`}
        explanation="Disjoint Set uses a parent array where each element points to its parent. The find operation uses path compression to flatten the tree structure. Union by rank ensures the tree remains balanced. Time complexity is nearly constant with optimizations."
      />
    </div>
  );
}

function BasicOperationsSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-white mb-6">Basic Operations</h2>

      <ProblemBlock
        title="Find and Union Operations on Disjoint Sets"
        difficulty="Medium"
        description="Implement and understand the core find and union operations in disjoint sets."
        duration="8 min, 11 sec"
        solution={`// Find and Union Operations on Disjoint Sets

class UnionFind {
  constructor(n) {
    this.parent = new Array(n);
    this.size = new Array(n);
    this.count = n;
    
    console.log("=== Initializing Union-Find ===");
    console.log("Number of elements:", n);
    
    for (let i = 0; i < n; i++) {
      this.parent[i] = i;
      this.size[i] = 1;
    }
    
    console.log("Parent array:", this.parent);
    console.log("Size array:", this.size);
  }

  // Find with path compression
  find(x) {
    console.log("\\nFinding root of element", x);
    let path = [x];
    
    // Find root
    while (this.parent[x] !== x) {
      console.log("  " + x + " -> " + this.parent[x]);
      x = this.parent[x];
      path.push(x);
    }
    
    const root = x;
    console.log("  Root found:", root);
    
    // Path compression: make all nodes point directly to root
    for (let node of path) {
      if (this.parent[node] !== root) {
        console.log("  Compressing path: " + node + " -> " + root);
        this.parent[node] = root;
      }
    }
    
    return root;
  }

  // Union by size
  union(x, y) {
    console.log("\\n=== Union(" + x + ", " + y + ") ===");
    
    const rootX = this.find(x);
    const rootY = this.find(y);
    
    if (rootX === rootY) {
      console.log("Elements are already connected");
      return;
    }
    
    // Union by size: attach smaller tree to larger tree
    if (this.size[rootX] < this.size[rootY]) {
      console.log("Size of " + rootX + " (" + this.size[rootX] + ") < size of " + rootY + " (" + this.size[rootY] + ")");
      this.parent[rootX] = rootY;
      this.size[rootY] += this.size[rootX];
      console.log("Attaching " + rootX + " to " + rootY);
      console.log("New size of " + rootY + ":", this.size[rootY]);
    } else {
      console.log("Size of " + rootX + " (" + this.size[rootX] + ") >= size of " + rootY + " (" + this.size[rootY] + ")");
      this.parent[rootY] = rootX;
      this.size[rootX] += this.size[rootY];
      console.log("Attaching " + rootY + " to " + rootX);
      console.log("New size of " + rootX + ":", this.size[rootX]);
    }
    
    this.count--;
    console.log("Number of components:", this.count);
  }

  // Check connectivity
  connected(x, y) {
    return this.find(x) === this.find(y);
  }

  // Get component count
  getCount() {
    return this.count;
  }

  // Get size of component containing x
  getSize(x) {
    const root = this.find(x);
    return this.size[root];
  }

  // Print current state
  printState() {
    console.log("\\n=== Current State ===");
    console.log("Parent:", this.parent);
    console.log("Size:", this.size);
    console.log("Components:", this.count);
  }
}

// Alternative: Naive implementation without optimizations
class NaiveUnionFind {
  constructor(n) {
    this.parent = new Array(n);
    this.count = n;
    
    console.log("\\n=== Naive Union-Find (No Optimizations) ===");
    
    for (let i = 0; i < n; i++) {
      this.parent[i] = i;
    }
  }

  find(x) {
    console.log("\\nNaive find(" + x + ")");
    while (this.parent[x] !== x) {
      console.log("  " + x + " -> " + this.parent[x]);
      x = this.parent[x];
    }
    console.log("  Root:", x);
    return x;
  }

  union(x, y) {
    console.log("\\nNaive union(" + x + ", " + y + ")");
    const rootX = this.find(x);
    const rootY = this.find(y);
    
    if (rootX !== rootY) {
      this.parent[rootX] = rootY;
      this.count--;
      console.log("  Unioned " + rootX + " to " + rootY);
    }
  }

  connected(x, y) {
    return this.find(x) === this.find(y);
  }
}

// Test cases
console.log("=== Testing Union-Find Operations ===");

const uf = new UnionFind(6);
uf.printState();

console.log("\\n--- Test Case 1: Basic Unions ---");
uf.union(0, 1);
uf.printState();

uf.union(2, 3);
uf.printState();

uf.union(4, 5);
uf.printState();

console.log("\\n--- Test Case 2: Cross Unions ---");
uf.union(1, 2);
uf.printState();

console.log("\\n--- Test Case 3: Connectivity Tests ---");
console.log("Connected(0, 3):", uf.connected(0, 3));
console.log("Connected(0, 4):", uf.connected(0, 4));
console.log("Connected(4, 5):", uf.connected(4, 5));

console.log("\\n--- Test Case 4: Component Sizes ---");
console.log("Size of component containing 0:", uf.getSize(0));
console.log("Size of component containing 4:", uf.getSize(4));

console.log("\\n--- Comparison with Naive Implementation ---");
const naiveUf = new NaiveUnionFind(6);
naiveUf.union(0, 1);
naiveUf.union(2, 3);
naiveUf.union(1, 2);
console.log("Naive connected(0, 3):", naiveUf.connected(0, 3));`}
        explanation="The find operation uses path compression to flatten the tree structure, making future finds faster. Union by size ensures the tree remains balanced. This gives us nearly constant time complexity for both operations."
      />

      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h3 className="text-2xl font-bold text-white mb-4">
          Union-Find Operations Explained
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-lg font-semibold text-white mb-3">
              Find Operation
            </h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                • <strong>Purpose:</strong> Find the root of an element
              </li>
              <li>
                • <strong>Path Compression:</strong> Flatten tree during find
              </li>
              <li>
                • <strong>Time:</strong> O(α(n)) with optimizations
              </li>
              <li>
                • <strong>Recursive:</strong> Can be implemented recursively
              </li>
            </ul>
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-lg font-semibold text-white mb-3">
              Union Operation
            </h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                • <strong>Purpose:</strong> Merge two sets
              </li>
              <li>
                • <strong>Union by Rank/Size:</strong> Attach smaller to larger
              </li>
              <li>
                • <strong>Time:</strong> O(α(n)) with optimizations
              </li>
              <li>
                • <strong>Count:</strong> Decrements component count
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function OptimizationsSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-white mb-6">Optimizations</h2>

      <ProblemBlock
        title="Union by Rank"
        difficulty="Medium"
        description="Implement union by rank optimization to keep the tree balanced and improve performance."
        duration="7 min, 40 sec"
        solution={`// Union by Rank Optimization

class UnionFindRank {
  constructor(n) {
    this.parent = new Array(n);
    this.rank = new Array(n);
    this.count = n;
    
    console.log("=== Union-Find with Union by Rank ===");
    console.log("Number of elements:", n);
    
    for (let i = 0; i < n; i++) {
      this.parent[i] = i;
      this.rank[i] = 0; // Initially all trees have rank 0
    }
    
    console.log("Parent array:", this.parent);
    console.log("Rank array:", this.rank);
  }

  // Find with path compression
  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }

  // Union by rank
  union(x, y) {
    console.log("\\n=== Union by Rank(" + x + ", " + y + ") ===");
    
    const rootX = this.find(x);
    const rootY = this.find(y);
    
    console.log("Root of " + x + " is " + rootX + " (rank: " + this.rank[rootX] + ")");
    console.log("Root of " + y + " is " + rootY + " (rank: " + this.rank[rootY] + ")");
    
    if (rootX === rootY) {
      console.log("Elements are already in the same set");
      return;
    }
    
    // Union by rank: attach tree with smaller rank to tree with larger rank
    if (this.rank[rootX] < this.rank[rootY]) {
      console.log("Rank of " + rootX + " (" + this.rank[rootX] + ") < rank of " + rootY + " (" + this.rank[rootY] + ")");
      this.parent[rootX] = rootY;
      console.log("Attaching " + rootX + " to " + rootY);
      console.log("Rank of " + rootY + " remains " + this.rank[rootY]);
    } else if (this.rank[rootX] > this.rank[rootY]) {
      console.log("Rank of " + rootX + " (" + this.rank[rootX] + ") > rank of " + rootY + " (" + this.rank[rootY] + ")");
      this.parent[rootY] = rootX;
      console.log("Attaching " + rootY + " to " + rootX);
      console.log("Rank of " + rootX + " remains " + this.rank[rootX]);
    } else {
      console.log("Ranks are equal (" + this.rank[rootX] + "), attaching " + rootY + " to " + rootX);
      this.parent[rootY] = rootX;
      this.rank[rootX]++;
      console.log("Incrementing rank of " + rootX + " to " + this.rank[rootX]);
    }
    
    this.count--;
    console.log("Number of components:", this.count);
  }

  connected(x, y) {
    return this.find(x) === this.find(y);
  }

  getCount() {
    return this.count;
  }

  // Get the rank of the tree containing x
  getRank(x) {
    const root = this.find(x);
    return this.rank[root];
  }

  printState() {
    console.log("\\n=== Current State ===");
    console.log("Parent:", this.parent);
    console.log("Rank:", this.rank);
    console.log("Components:", this.count);
  }
}

// Comparison: Union by Size vs Union by Rank
class UnionFindSize {
  constructor(n) {
    this.parent = new Array(n);
    this.size = new Array(n);
    this.count = n;
    
    console.log("\\n=== Union-Find with Union by Size ===");
    
    for (let i = 0; i < n; i++) {
      this.parent[i] = i;
      this.size[i] = 1;
    }
  }

  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    
    if (rootX === rootY) return;
    
    if (this.size[rootX] < this.size[rootY]) {
      this.parent[rootX] = rootY;
      this.size[rootY] += this.size[rootX];
    } else {
      this.parent[rootY] = rootX;
      this.size[rootX] += this.size[rootY];
    }
    
    this.count--;
  }

  connected(x, y) {
    return this.find(x) === this.find(y);
  }
}

// Test cases
console.log("=== Testing Union by Rank ===");

const ufRank = new UnionFindRank(8);
ufRank.printState();

console.log("\\n--- Test Case 1: Building Balanced Tree ---");
ufRank.union(0, 1);
ufRank.printState();

ufRank.union(2, 3);
ufRank.printState();

ufRank.union(4, 5);
ufRank.printState();

ufRank.union(6, 7);
ufRank.printState();

console.log("\\n--- Test Case 2: Merging Equal Rank Trees ---");
ufRank.union(0, 2);
ufRank.printState();

ufRank.union(4, 6);
ufRank.printState();

console.log("\\n--- Test Case 3: Merging Different Rank Trees ---");
ufRank.union(0, 4);
ufRank.printState();

console.log("\\n--- Test Case 4: Final Connectivity ---");
console.log("Connected(0, 7):", ufRank.connected(0, 7));
console.log("Connected(1, 3):", ufRank.connected(1, 3));
console.log("Connected(2, 5):", ufRank.connected(2, 5));

console.log("\\n--- Performance Comparison ---");
console.log("Union by Rank - Final ranks:", ufRank.rank);
console.log("Union by Rank - Component count:", ufRank.getCount());`}
        explanation="Union by rank keeps the tree balanced by always attaching the tree with smaller rank to the tree with larger rank. When ranks are equal, we choose arbitrarily and increment the rank. This ensures the tree height is O(log n)."
      />

      <ProblemBlock
        title="Path Compression"
        difficulty="Medium"
        description="Implement path compression optimization to flatten the tree structure during find operations."
        duration="5 min, 9 sec"
        solution={`// Path Compression Optimization

class UnionFindPathCompression {
  constructor(n) {
    this.parent = new Array(n);
    this.rank = new Array(n);
    this.count = n;
    
    console.log("=== Union-Find with Path Compression ===");
    console.log("Number of elements:", n);
    
    for (let i = 0; i < n; i++) {
      this.parent[i] = i;
      this.rank[i] = 0;
    }
    
    console.log("Parent array:", this.parent);
    console.log("Rank array:", this.rank);
  }

  // Find with path compression (recursive)
  findRecursive(x) {
    console.log("\\nFind recursive(" + x + ")");
    
    if (this.parent[x] !== x) {
      console.log("  " + x + " is not root, parent is " + this.parent[x]);
      this.parent[x] = this.findRecursive(this.parent[x]);
      console.log("  After path compression, parent of " + x + " is " + this.parent[x]);
    }
    
    console.log("  Root of " + x + " is " + this.parent[x]);
    return this.parent[x];
  }

  // Find with path compression (iterative)
  findIterative(x) {
    console.log("\\nFind iterative(" + x + ")");
    
    // Find root
    let root = x;
    while (this.parent[root] !== root) {
      console.log("  " + root + " -> " + this.parent[root]);
      root = this.parent[root];
    }
    
    console.log("  Root found:", root);
    
    // Path compression: make all nodes point directly to root
    while (x !== root) {
      const next = this.parent[x];
      console.log("  Compressing: " + x + " -> " + root);
      this.parent[x] = root;
      x = next;
    }
    
    return root;
  }

  // Union by rank with path compression
  union(x, y) {
    console.log("\\n=== Union(" + x + ", " + y + ") ===");
    
    const rootX = this.findIterative(x);
    const rootY = this.findIterative(y);
    
    if (rootX === rootY) {
      console.log("Elements are already connected");
      return;
    }
    
    // Union by rank
    if (this.rank[rootX] < this.rank[rootY]) {
      this.parent[rootX] = rootY;
      console.log("Attaching " + rootX + " to " + rootY);
    } else if (this.rank[rootX] > this.rank[rootY]) {
      this.parent[rootY] = rootX;
      console.log("Attaching " + rootY + " to " + rootX);
    } else {
      this.parent[rootY] = rootX;
      this.rank[rootX]++;
      console.log("Equal ranks, attaching " + rootY + " to " + rootX + ", incrementing rank to " + this.rank[rootX]);
    }
    
    this.count--;
  }

  connected(x, y) {
    return this.findIterative(x) === this.findIterative(y);
  }

  getCount() {
    return this.count;
  }

  printState() {
    console.log("\\n=== Current State ===");
    console.log("Parent:", this.parent);
    console.log("Rank:", this.rank);
    console.log("Components:", this.count);
  }
}

// Comparison: Without Path Compression
class UnionFindNoCompression {
  constructor(n) {
    this.parent = new Array(n);
    this.rank = new Array(n);
    this.count = n;
    
    console.log("\\n=== Union-Find WITHOUT Path Compression ===");
    
    for (let i = 0; i < n; i++) {
      this.parent[i] = i;
      this.rank[i] = 0;
    }
  }

  find(x) {
    console.log("\\nFind without compression(" + x + ")");
    while (this.parent[x] !== x) {
      console.log("  " + x + " -> " + this.parent[x]);
      x = this.parent[x];
    }
    console.log("  Root:", x);
    return x;
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    
    if (rootX === rootY) return;
    
    if (this.rank[rootX] < this.rank[rootY]) {
      this.parent[rootX] = rootY;
    } else if (this.rank[rootX] > this.rank[rootY]) {
      this.parent[rootY] = rootX;
    } else {
      this.parent[rootY] = rootX;
      this.rank[rootX]++;
    }
    
    this.count--;
  }

  connected(x, y) {
    return this.find(x) === this.find(y);
  }
}

// Test cases
console.log("=== Testing Path Compression ===");

const ufPC = new UnionFindPathCompression(6);
ufPC.printState();

console.log("\\n--- Test Case 1: Building Chain ---");
ufPC.union(0, 1);
ufPC.printState();

ufPC.union(1, 2);
ufPC.printState();

ufPC.union(2, 3);
ufPC.printState();

console.log("\\n--- Test Case 2: Path Compression in Action ---");
console.log("Before find(0):", ufPC.parent);
ufPC.findIterative(0);
console.log("After find(0):", ufPC.parent);

console.log("\\n--- Test Case 3: Multiple Finds ---");
ufPC.findIterative(1);
console.log("After find(1):", ufPC.parent);

ufPC.findIterative(2);
console.log("After find(2):", ufPC.parent);

console.log("\\n--- Test Case 4: Comparison with No Compression ---");
const ufNoPC = new UnionFindNoCompression(6);
ufNoPC.union(0, 1);
ufNoPC.union(1, 2);
ufNoPC.union(2, 3);

console.log("Without compression - find(0):");
ufNoPC.find(0);
console.log("Parent array:", ufNoPC.parent);

console.log("\\n--- Test Case 5: Performance Impact ---");
console.log("With path compression - all elements point to root after finds");
console.log("Without path compression - elements may form long chains");`}
        explanation="Path compression flattens the tree structure during find operations by making every node point directly to the root. This dramatically improves the performance of future find operations. Combined with union by rank, it gives us nearly constant time complexity."
      />

      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h3 className="text-2xl font-bold text-white mb-4">
          Optimization Benefits
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-lg font-semibold text-white mb-3">
              Union by Rank
            </h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                • <strong>Balanced Trees:</strong> Keeps tree height O(log n)
              </li>
              <li>
                • <strong>Rank Property:</strong> Rank ≤ height of tree
              </li>
              <li>
                • <strong>No Cycles:</strong> Prevents tree cycles
              </li>
              <li>
                • <strong>Efficient Union:</strong> O(log n) per operation
              </li>
            </ul>
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-lg font-semibold text-white mb-3">
              Path Compression
            </h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                • <strong>Flattening:</strong> Makes all nodes point to root
              </li>
              <li>
                • <strong>Amortized Cost:</strong> O(α(n)) per operation
              </li>
              <li>
                • <strong>Future Finds:</strong> Much faster after compression
              </li>
              <li>
                • <strong>Space Efficient:</strong> No extra space needed
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function ApplicationsSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-white mb-6">Applications</h2>

      <ProblemBlock
        title="Kruskal's Algorithm"
        difficulty="Hard"
        description="Implement Kruskal's algorithm for finding Minimum Spanning Tree using Union-Find data structure."
        duration="24 min, 4 sec"
        solution={`// Kruskal's Algorithm using Union-Find

class KruskalMST {
  constructor(vertices) {
    this.vertices = vertices;
    this.edges = [];
    this.uf = new UnionFind(vertices);
    
    console.log("=== Kruskal's Algorithm for MST ===");
    console.log("Number of vertices:", vertices);
  }

  // Add an edge to the graph
  addEdge(u, v, weight) {
    this.edges.push({ u, v, weight });
    console.log("Added edge: " + u + " - " + v + " (weight: " + weight + ")");
  }

  // Find Minimum Spanning Tree using Kruskal's algorithm
  findMST() {
    console.log("\\n=== Finding MST using Kruskal's Algorithm ===");
    
    // Sort edges by weight in ascending order
    this.edges.sort((a, b) => a.weight - b.weight);
    console.log("Sorted edges by weight:", this.edges);
    
    const mst = [];
    let mstWeight = 0;
    
    console.log("\\n--- Processing edges in order ---");
    
    for (let edge of this.edges) {
      const { u, v, weight } = edge;
      
      console.log("\\nProcessing edge: " + u + " - " + v + " (weight: " + weight + ")");
      
      // Check if adding this edge creates a cycle
      if (!this.uf.connected(u, v)) {
        console.log("  No cycle detected, adding edge to MST");
        mst.push(edge);
        mstWeight += weight;
        this.uf.union(u, v);
        console.log("  MST weight so far:", mstWeight);
        console.log("  Components remaining:", this.uf.getCount());
      } else {
        console.log("  Cycle detected, skipping edge");
      }
      
      // Stop if we have V-1 edges (minimum for MST)
      if (mst.length === this.vertices - 1) {
        console.log("\\nMST complete! Found " + mst.length + " edges");
        break;
      }
    }
    
    console.log("\\n=== Final MST ===");
    console.log("MST edges:", mst);
    console.log("Total MST weight:", mstWeight);
    console.log("Components in final graph:", this.uf.getCount());
    
    return { mst, weight: mstWeight };
  }

  // Check if graph is connected
  isConnected() {
    return this.uf.getCount() === 1;
  }

  // Print graph representation
  printGraph() {
    console.log("\\n=== Graph Representation ===");
    console.log("Vertices:", this.vertices);
    console.log("Edges:", this.edges);
  }
}

// Union-Find implementation for Kruskal's
class UnionFind {
  constructor(n) {
    this.parent = new Array(n);
    this.rank = new Array(n);
    this.count = n;
    
    for (let i = 0; i < n; i++) {
      this.parent[i] = i;
      this.rank[i] = 0;
    }
  }

  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    
    if (rootX === rootY) return;
    
    if (this.rank[rootX] < this.rank[rootY]) {
      this.parent[rootX] = rootY;
    } else if (this.rank[rootX] > this.rank[rootY]) {
      this.parent[rootY] = rootX;
    } else {
      this.parent[rootY] = rootX;
      this.rank[rootX]++;
    }
    
    this.count--;
  }

  connected(x, y) {
    return this.find(x) === this.find(y);
  }

  getCount() {
    return this.count;
  }
}

// Alternative: Prim's Algorithm for comparison
class PrimMST {
  constructor(vertices) {
    this.vertices = vertices;
    this.graph = Array(vertices).fill().map(() => []);
  }

  addEdge(u, v, weight) {
    this.graph[u].push({ v, weight });
    this.graph[v].push({ u, weight });
  }

  findMST() {
    console.log("\\n=== Prim's Algorithm for MST ===");
    
    const mst = [];
    const visited = new Array(this.vertices).fill(false);
    const pq = []; // Priority queue (min heap)
    
    // Start with vertex 0
    visited[0] = true;
    for (let edge of this.graph[0]) {
      pq.push({ u: 0, v: edge.v, weight: edge.weight });
    }
    
    pq.sort((a, b) => a.weight - b.weight);
    
    while (pq.length > 0 && mst.length < this.vertices - 1) {
      const edge = pq.shift();
      const { u, v, weight } = edge;
      
      if (!visited[v]) {
        visited[v] = true;
        mst.push(edge);
        
        // Add new edges from v
        for (let newEdge of this.graph[v]) {
          if (!visited[newEdge.v]) {
            pq.push({ u: v, v: newEdge.v, weight: newEdge.weight });
          }
        }
        
        pq.sort((a, b) => a.weight - b.weight);
      }
    }
    
    const totalWeight = mst.reduce((sum, edge) => sum + edge.weight, 0);
    return { mst, weight: totalWeight };
  }
}

// Test cases
console.log("=== Testing Kruskal's Algorithm ===");

// Test Case 1: Simple graph
const kruskal1 = new KruskalMST(4);
kruskal1.addEdge(0, 1, 10);
kruskal1.addEdge(0, 2, 6);
kruskal1.addEdge(0, 3, 5);
kruskal1.addEdge(1, 3, 15);
kruskal1.addEdge(2, 3, 4);

kruskal1.printGraph();
const result1 = kruskal1.findMST();

console.log("\\n--- Test Case 2: Larger Graph ---");
const kruskal2 = new KruskalMST(6);
kruskal2.addEdge(0, 1, 4);
kruskal2.addEdge(0, 2, 3);
kruskal2.addEdge(1, 2, 1);
kruskal2.addEdge(1, 3, 2);
kruskal2.addEdge(2, 3, 4);
kruskal2.addEdge(2, 4, 5);
kruskal2.addEdge(3, 4, 7);
kruskal2.addEdge(3, 5, 2);
kruskal2.addEdge(4, 5, 6);

const result2 = kruskal2.findMST();

console.log("\\n--- Comparison with Prim's Algorithm ---");
const prim = new PrimMST(4);
prim.addEdge(0, 1, 10);
prim.addEdge(0, 2, 6);
prim.addEdge(0, 3, 5);
prim.addEdge(1, 3, 15);
prim.addEdge(2, 3, 4);

const primResult = prim.findMST();
console.log("Prim's MST weight:", primResult.weight);
console.log("Kruskal's MST weight:", result1.weight);
console.log("Weights match:", primResult.weight === result1.weight);`}
        explanation="Kruskal's algorithm finds the Minimum Spanning Tree by sorting all edges by weight and greedily adding the lightest edge that doesn't create a cycle. Union-Find efficiently detects cycles. Time complexity is O(E log E) due to sorting."
      />

      <ProblemBlock
        title="Number of Connected Components"
        difficulty="Medium"
        description="Find the number of connected components in an undirected graph using Union-Find."
        solution={`// Number of Connected Components using Union-Find

class ConnectedComponents {
  constructor(vertices) {
    this.vertices = vertices;
    this.uf = new UnionFind(vertices);
    this.edges = [];
    
    console.log("=== Finding Connected Components ===");
    console.log("Number of vertices:", vertices);
  }

  // Add an edge to the graph
  addEdge(u, v) {
    this.edges.push({ u, v });
    console.log("Added edge: " + u + " - " + v);
  }

  // Find number of connected components
  findConnectedComponents() {
    console.log("\\n=== Processing Edges ===");
    
    // Process all edges
    for (let edge of this.edges) {
      const { u, v } = edge;
      console.log("\\nProcessing edge: " + u + " - " + v);
      
      if (!this.uf.connected(u, v)) {
        console.log("  Not connected, performing union");
        this.uf.union(u, v);
        console.log("  Components remaining:", this.uf.getCount());
      } else {
        console.log("  Already connected, skipping");
      }
    }
    
    const components = this.uf.getCount();
    console.log("\\n=== Result ===");
    console.log("Number of connected components:", components);
    
    return components;
  }

  // Get the component each vertex belongs to
  getComponentMapping() {
    const mapping = {};
    for (let i = 0; i < this.vertices; i++) {
      mapping[i] = this.uf.find(i);
    }
    return mapping;
  }

  // Check if two vertices are in the same component
  areConnected(u, v) {
    return this.uf.connected(u, v);
  }

  // Print component information
  printComponents() {
    console.log("\\n=== Component Information ===");
    const mapping = this.getComponentMapping();
    const componentGroups = {};
    
    for (let vertex in mapping) {
      const component = mapping[vertex];
      if (!componentGroups[component]) {
        componentGroups[component] = [];
      }
      componentGroups[component].push(parseInt(vertex));
    }
    
    console.log("Component groups:");
    for (let component in componentGroups) {
      console.log("  Component " + component + ":", componentGroups[component]);
    }
  }
}

// Union-Find implementation
class UnionFind {
  constructor(n) {
    this.parent = new Array(n);
    this.rank = new Array(n);
    this.count = n;
    
    for (let i = 0; i < n; i++) {
      this.parent[i] = i;
      this.rank[i] = 0;
    }
  }

  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    
    if (rootX === rootY) return;
    
    if (this.rank[rootX] < this.rank[rootY]) {
      this.parent[rootX] = rootY;
    } else if (this.rank[rootX] > this.rank[rootY]) {
      this.parent[rootY] = rootX;
    } else {
      this.parent[rootY] = rootX;
      this.rank[rootX]++;
    }
    
    this.count--;
  }

  connected(x, y) {
    return this.find(x) === this.find(y);
  }

  getCount() {
    return this.count;
  }
}

// Alternative: DFS approach for comparison
class ConnectedComponentsDFS {
  constructor(vertices) {
    this.vertices = vertices;
    this.graph = Array(vertices).fill().map(() => []);
    this.visited = new Array(vertices).fill(false);
  }

  addEdge(u, v) {
    this.graph[u].push(v);
    this.graph[v].push(u);
  }

  findConnectedComponents() {
    console.log("\\n=== DFS Approach for Connected Components ===");
    
    let components = 0;
    
    for (let i = 0; i < this.vertices; i++) {
      if (!this.visited[i]) {
        console.log("\\nStarting DFS from vertex " + i);
        this.dfs(i);
        components++;
        console.log("Completed component " + components);
      }
    }
    
    console.log("\\nNumber of connected components (DFS):", components);
    return components;
  }

  dfs(vertex) {
    this.visited[vertex] = true;
    console.log("  Visiting vertex " + vertex);
    
    for (let neighbor of this.graph[vertex]) {
      if (!this.visited[neighbor]) {
        this.dfs(neighbor);
      }
    }
  }
}

// Test cases
console.log("=== Testing Connected Components ===");

// Test Case 1: Multiple components
const cc1 = new ConnectedComponents(6);
cc1.addEdge(0, 1);
cc1.addEdge(1, 2);
cc1.addEdge(3, 4);
// Vertices 0,1,2 form one component
// Vertices 3,4 form another component  
// Vertex 5 is isolated

const components1 = cc1.findConnectedComponents();
cc1.printComponents();

console.log("\\n--- Test Case 2: Single Component ---");
const cc2 = new ConnectedComponents(5);
cc2.addEdge(0, 1);
cc2.addEdge(1, 2);
cc2.addEdge(2, 3);
cc2.addEdge(3, 4);
cc2.addEdge(4, 0); // Creates a cycle

const components2 = cc2.findConnectedComponents();
cc2.printComponents();

console.log("\\n--- Test Case 3: No Edges ---");
const cc3 = new ConnectedComponents(4);
const components3 = cc3.findConnectedComponents();
cc3.printComponents();

console.log("\\n--- Comparison with DFS ---");
const ccDFS = new ConnectedComponentsDFS(6);
ccDFS.addEdge(0, 1);
ccDFS.addEdge(1, 2);
ccDFS.addEdge(3, 4);

const dfsComponents = ccDFS.findConnectedComponents();
console.log("Union-Find components:", components1);
console.log("DFS components:", dfsComponents);
console.log("Results match:", components1 === dfsComponents);`}
        explanation="Union-Find efficiently finds connected components by processing edges and merging sets. Each union operation reduces the component count. The final count gives us the number of connected components. Time complexity is O(E α(V)) where E is edges and V is vertices."
      />

      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h3 className="text-2xl font-bold text-white mb-4">
          Common Applications
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-lg font-semibold text-white mb-3">
              Graph Algorithms
            </h4>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li>• Kruskal&apos;s MST Algorithm</li>
              <li>• Connected Components</li>
              <li>• Cycle Detection</li>
              <li>• Bipartite Graph Checking</li>
            </ul>
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-lg font-semibold text-white mb-3">
              Other Applications
            </h4>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li>• Network Connectivity</li>
              <li>• Image Processing</li>
              <li>• Maze Generation</li>
              <li>• Social Network Analysis</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function AdvancedSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-white mb-6">Advanced Problems</h2>

      <ProblemBlock
        title="Redundant Connection"
        difficulty="Medium"
        description="Find the edge that can be removed to make the graph a tree using Union-Find."
        solution={`// Redundant Connection using Union-Find

class RedundantConnection {
  constructor(vertices) {
    this.vertices = vertices;
    this.uf = new UnionFind(vertices);
  }

  // Find redundant connection
  findRedundantConnection(edges) {
    console.log("=== Finding Redundant Connection ===");
    console.log("Edges:", edges);
    
    for (let i = 0; i < edges.length; i++) {
      const [u, v] = edges[i];
      console.log("\\nProcessing edge " + i + ": " + u + " - " + v);
      
      if (this.uf.connected(u, v)) {
        console.log("  Edge creates cycle! This is the redundant edge");
        return [u, v];
      } else {
        console.log("  No cycle, adding edge");
        this.uf.union(u, v);
      }
    }
    
    return null; // No redundant edge found
  }

  // Find all redundant connections
  findAllRedundantConnections(edges) {
    console.log("\\n=== Finding All Redundant Connections ===");
    
    const redundant = [];
    
    for (let i = 0; i < edges.length; i++) {
      const [u, v] = edges[i];
      console.log("\\nProcessing edge " + i + ": " + u + " - " + v);
      
      if (this.uf.connected(u, v)) {
        console.log("  Redundant edge found!");
        redundant.push([u, v]);
      } else {
        console.log("  Adding edge");
        this.uf.union(u, v);
      }
    }
    
    return redundant;
  }
}

// Union-Find implementation
class UnionFind {
  constructor(n) {
    this.parent = new Array(n);
    this.rank = new Array(n);
    
    for (let i = 0; i < n; i++) {
      this.parent[i] = i;
      this.rank[i] = 0;
    }
  }

  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    
    if (rootX === rootY) return false;
    
    if (this.rank[rootX] < this.rank[rootY]) {
      this.parent[rootX] = rootY;
    } else if (this.rank[rootX] > this.rank[rootY]) {
      this.parent[rootY] = rootX;
    } else {
      this.parent[rootY] = rootX;
      this.rank[rootX]++;
    }
    
    return true;
  }

  connected(x, y) {
    return this.find(x) === this.find(y);
  }
}

// Test cases
console.log("=== Testing Redundant Connection ===");

// Test Case 1: Single redundant edge
const rc1 = new RedundantConnection(4);
const edges1 = [[1, 2], [1, 3], [2, 3]];
const redundant1 = rc1.findRedundantConnection(edges1);
console.log("Redundant edge:", redundant1);

// Test Case 2: Multiple edges, one redundant
const rc2 = new RedundantConnection(5);
const edges2 = [[1, 2], [2, 3], [3, 4], [1, 4], [1, 5]];
const redundant2 = rc2.findRedundantConnection(edges2);
console.log("Redundant edge:", redundant2);

// Test Case 3: No redundant edges
const rc3 = new RedundantConnection(3);
const edges3 = [[1, 2], [2, 3]];
const redundant3 = rc3.findRedundantConnection(edges3);
console.log("Redundant edge:", redundant3);`}
        explanation="To find redundant connections, we process edges one by one. If adding an edge creates a cycle (both vertices are already connected), that edge is redundant. Union-Find efficiently detects cycles in O(α(n)) time per operation."
      />

      <ProblemBlock
        title="Number of Islands II"
        difficulty="Hard"
        description="Given a 2D grid and a list of positions to add land, find the number of islands after each addition using Union-Find."
        solution={`// Number of Islands II using Union-Find

class NumberOfIslandsII {
  constructor(m, n) {
    this.m = m;
    this.n = n;
    this.uf = new UnionFind(m * n);
    this.grid = Array(m).fill().map(() => Array(n).fill(0));
    this.directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    this.islandCount = 0;
    
    console.log("=== Number of Islands II ===");
    console.log("Grid size: " + m + " x " + n);
  }

  // Add land at position (row, col)
  addLand(row, col) {
    console.log("\\n=== Adding land at (" + row + ", " + col + ") ===");
    
    if (this.grid[row][col] === 1) {
      console.log("Land already exists at this position");
      return this.islandCount;
    }
    
    this.grid[row][col] = 1;
    this.islandCount++;
    console.log("Added land, current island count:", this.islandCount);
    
    const currentIndex = row * this.n + col;
    console.log("Current position index:", currentIndex);
    
    // Check all 4 directions
    for (let [dr, dc] of this.directions) {
      const newRow = row + dr;
      const newCol = col + dc;
      
      console.log("\\nChecking direction: (" + dr + ", " + dc + ")");
      console.log("New position: (" + newRow + ", " + newCol + ")");
      
      if (this.isValid(newRow, newCol) && this.grid[newRow][newCol] === 1) {
        const neighborIndex = newRow * this.n + newCol;
        console.log("Found land at (" + newRow + ", " + newCol + "), index:", neighborIndex);
        
        if (!this.uf.connected(currentIndex, neighborIndex)) {
          console.log("Connecting islands at " + currentIndex + " and " + neighborIndex);
          this.uf.union(currentIndex, neighborIndex);
          this.islandCount--;
          console.log("Islands merged, new count:", this.islandCount);
        } else {
          console.log("Already connected");
        }
      } else {
        console.log("No land or invalid position");
      }
    }
    
    console.log("Final island count:", this.islandCount);
    return this.islandCount;
  }

  // Check if position is valid
  isValid(row, col) {
    return row >= 0 && row < this.m && col >= 0 && col < this.n;
  }

  // Get current grid state
  getGrid() {
    return this.grid.map(row => [...row]);
  }

  // Print grid
  printGrid() {
    console.log("\\n=== Current Grid ===");
    for (let i = 0; i < this.m; i++) {
      console.log("Row " + i + ":", this.grid[i]);
    }
  }
}

// Union-Find implementation
class UnionFind {
  constructor(n) {
    this.parent = new Array(n);
    this.rank = new Array(n);
    
    for (let i = 0; i < n; i++) {
      this.parent[i] = i;
      this.rank[i] = 0;
    }
  }

  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    
    if (rootX === rootY) return false;
    
    if (this.rank[rootX] < this.rank[rootY]) {
      this.parent[rootX] = rootY;
    } else if (this.rank[rootX] > this.rank[rootY]) {
      this.parent[rootY] = rootX;
    } else {
      this.parent[rootY] = rootX;
      this.rank[rootX]++;
    }
    
    return true;
  }

  connected(x, y) {
    return this.find(x) === this.find(y);
  }
}

// Test cases
console.log("=== Testing Number of Islands II ===");

// Test Case 1: 3x3 grid
const islands1 = new NumberOfIslandsII(3, 3);
const positions1 = [[0, 0], [0, 1], [1, 2], [2, 1]];
const result1 = [];

console.log("\\n--- Adding positions one by one ---");
for (let [row, col] of positions1) {
  const count = islands1.addLand(row, col);
  result1.push(count);
  islands1.printGrid();
}

console.log("\\nResult:", result1);

// Test Case 2: 2x2 grid with diagonal
const islands2 = new NumberOfIslandsII(2, 2);
const positions2 = [[0, 0], [1, 1], [0, 1], [1, 0]];
const result2 = [];

console.log("\\n--- Test Case 2: 2x2 Grid ---");
for (let [row, col] of positions2) {
  const count = islands2.addLand(row, col);
  result2.push(count);
  islands2.printGrid();
}

console.log("\\nResult:", result2);

// Test Case 3: Single row
const islands3 = new NumberOfIslandsII(1, 4);
const positions3 = [[0, 0], [0, 1], [0, 2], [0, 3]];
const result3 = [];

console.log("\\n--- Test Case 3: Single Row ---");
for (let [row, col] of positions3) {
  const count = islands3.addLand(row, col);
  result3.push(count);
  islands3.printGrid();
}

console.log("\\nResult:", result3);`}
        explanation="For each land addition, we check all 4 neighboring cells. If a neighbor is land and not already connected, we merge the islands using Union-Find. The island count starts at 1 for each new land and decreases by 1 for each successful union operation."
      />

      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h3 className="text-2xl font-bold text-white mb-4">
          Advanced Union-Find Techniques
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold text-blue-400 mb-3">
              Optimizations
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                • <strong>Path Compression:</strong> Flatten tree during find
              </li>
              <li>
                • <strong>Union by Rank:</strong> Keep trees balanced
              </li>
              <li>
                • <strong>Union by Size:</strong> Alternative to rank
              </li>
              <li>
                • <strong>Path Halving:</strong> Compress every other node
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-purple-400 mb-3">
              Applications
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                • <strong>MST Algorithms:</strong> Kruskal&apos;s algorithm
              </li>
              <li>
                • <strong>Cycle Detection:</strong> In undirected graphs
              </li>
              <li>
                • <strong>Connected Components:</strong> Graph connectivity
              </li>
              <li>
                • <strong>Dynamic Connectivity:</strong> Online queries
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
