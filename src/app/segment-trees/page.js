"use client";

import { useState } from "react";

export default function SegmentTreesPage() {
  const [activeSection, setActiveSection] = useState("introduction");

  const sections = [
    { id: "introduction", title: "Introduction", icon: "📚" },
    { id: "segment-trees", title: "Segment Trees", icon: "🌳" },
    { id: "binary-indexed", title: "Binary Indexed Trees", icon: "🔢" },
    { id: "applications", title: "Applications", icon: "🎯" },
    { id: "advanced", title: "Advanced", icon: "⚡" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Segment Trees & Binary Indexed Trees Mastery
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Master advanced tree data structures: Segment Trees, Binary Indexed
            Trees, Range Queries, and Range Updates
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
          {activeSection === "introduction" && <IntroductionSection />}
          {activeSection === "segment-trees" && <SegmentTreesSection />}
          {activeSection === "binary-indexed" && <BinaryIndexedSection />}
          {activeSection === "applications" && <ApplicationsSection />}
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

function IntroductionSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-white mb-6">
        Introduction to Segment Trees & Binary Indexed Trees
      </h2>

      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h3 className="text-2xl font-bold text-white mb-4">
          What are Segment Trees?
        </h3>
        <p className="text-gray-300 mb-4">
          A Segment Tree is a data structure that allows efficient range queries
          and range updates on an array. It&apos;s particularly useful for
          problems involving range sum, range minimum/maximum, and other
          range-based operations.
        </p>

        <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6">
          <h4 className="text-xl font-semibold text-purple-200 mb-3">
            Key Characteristics:
          </h4>
          <ul className="space-y-2 text-purple-100">
            <li>
              • <strong>Range Queries:</strong> O(log n) time for range
              operations
            </li>
            <li>
              • <strong>Range Updates:</strong> O(log n) time for updating
              ranges
            </li>
            <li>
              • <strong>Space Complexity:</strong> O(4n) for array of size n
            </li>
            <li>
              • <strong>Binary Tree Structure:</strong> Each node represents a
              range
            </li>
            <li>
              • <strong>Lazy Propagation:</strong> Efficient range updates
            </li>
          </ul>
        </div>

        <div className="mt-6 bg-gray-700 rounded-lg p-4">
          <h4 className="text-lg font-semibold text-white mb-3">
            What are Binary Indexed Trees (Fenwick Trees)?
          </h4>
          <p className="text-gray-300 mb-4">
            A Binary Indexed Tree (BIT) or Fenwick Tree is a data structure that
            can efficiently update elements and calculate prefix sums in a table
            of numbers.
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>
              <strong>Prefix Sums:</strong> O(log n) time for range sum queries
            </li>
            <li>
              <strong>Point Updates:</strong> O(log n) time for single element
              updates
            </li>
            <li>
              <strong>Space Complexity:</strong> O(n) for array of size n
            </li>
            <li>
              <strong>Simple Implementation:</strong> Easier to implement than
              Segment Trees
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h3 className="text-2xl font-bold text-white mb-4">
          When to Use Each Data Structure
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-600">
                <th className="text-left py-2 text-white">Aspect</th>
                <th className="text-left py-2 text-white">Segment Tree</th>
                <th className="text-left py-2 text-white">
                  Binary Indexed Tree
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-gray-300">Range Queries</td>
                <td className="py-2 text-green-400">Any range [L, R]</td>
                <td className="py-2 text-yellow-400">
                  Only prefix sums [1, R]
                </td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-gray-300">Range Updates</td>
                <td className="py-2 text-green-400">
                  Efficient with lazy propagation
                </td>
                <td className="py-2 text-red-400">Not directly supported</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-gray-300">Space Usage</td>
                <td className="py-2 text-yellow-400">O(4n)</td>
                <td className="py-2 text-green-400">O(n)</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-gray-300">Implementation</td>
                <td className="py-2 text-yellow-400">More complex</td>
                <td className="py-2 text-green-400">Simpler</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-gray-300">Use Cases</td>
                <td className="py-2 text-blue-400">
                  General range queries, min/max
                </td>
                <td className="py-2 text-blue-400">
                  Prefix sums, frequency arrays
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <ProblemBlock
        title="Segment Tree Introduction"
        difficulty="Medium"
        description="Basic implementation of Segment Tree for range sum queries and point updates."
        solutions={{
          JavaScript: `// Segment Tree - Introduction

class SegmentTree {
  constructor(arr) {
    this.n = arr.length;
    this.tree = new Array(4 * this.n);
    this.arr = [...arr];
    console.log("=== Building Segment Tree ===");
    console.log("Array:", this.arr);
    this.build(1, 0, this.n - 1);
    console.log("Segment Tree:", this.tree);
  }

  // Build the segment tree
  build(node, start, end) {
    console.log("\\nBuilding node " + node + " for range [" + start + ", " + end + "]");
    
    if (start === end) {
      // Leaf node
      this.tree[node] = this.arr[start];
      console.log("  Leaf node: tree[" + node + "] = " + this.tree[node]);
    } else {
      const mid = Math.floor((start + end) / 2);
      console.log("  Internal node: mid = " + mid);
      
      // Build left and right subtrees
      this.build(2 * node, start, mid);
      this.build(2 * node + 1, mid + 1, end);
      
      // Merge the results
      this.tree[node] = this.tree[2 * node] + this.tree[2 * node + 1];
      console.log("  tree[" + node + "] = tree[" + (2 * node) + "] + tree[" + (2 * node + 1) + "] = " + this.tree[node]);
    }
  }

  // Query range sum
  query(node, start, end, left, right) {
    console.log("\\nQuerying node " + node + " for range [" + start + ", " + end + "] with query [" + left + ", " + right + "]");
    
    // No overlap
    if (right < start || left > end) {
      console.log("  No overlap, returning 0");
      return 0;
    }
    
    // Complete overlap
    if (left <= start && end <= right) {
      console.log("  Complete overlap, returning tree[" + node + "] = " + this.tree[node]);
      return this.tree[node];
    }
    
    // Partial overlap
    const mid = Math.floor((start + end) / 2);
    console.log("  Partial overlap, splitting at mid = " + mid);
    
    const leftSum = this.query(2 * node, start, mid, left, right);
    const rightSum = this.query(2 * node + 1, mid + 1, end, left, right);
    
    const result = leftSum + rightSum;
    console.log("  Result: " + leftSum + " + " + rightSum + " = " + result);
    return result;
  }

  // Update a single element
  update(node, start, end, index, value) {
    console.log("\\nUpdating node " + node + " for range [" + start + ", " + end + "] at index " + index + " with value " + value);
    
    if (start === end) {
      // Leaf node
      this.arr[index] = value;
      this.tree[node] = value;
      console.log("  Updated leaf: tree[" + node + "] = " + value);
    } else {
      const mid = Math.floor((start + end) / 2);
      console.log("  Internal node: mid = " + mid);
      
      if (index <= mid) {
        console.log("  Updating left subtree");
        this.update(2 * node, start, mid, index, value);
      } else {
        console.log("  Updating right subtree");
        this.update(2 * node + 1, mid + 1, end, index, value);
      }
      
      // Update current node
      this.tree[node] = this.tree[2 * node] + this.tree[2 * node + 1];
      console.log("  Updated tree[" + node + "] = " + this.tree[node]);
    }
  }

  // Public methods
  rangeQuery(left, right) {
    console.log("\\n=== Range Query [" + left + ", " + right + "] ===");
    return this.query(1, 0, this.n - 1, left, right);
  }

  pointUpdate(index, value) {
    console.log("\\n=== Point Update at index " + index + " with value " + value + " ===");
    this.update(1, 0, this.n - 1, index, value);
    console.log("Updated array:", this.arr);
  }

  // Print tree structure
  printTree() {
    console.log("\\n=== Segment Tree Structure ===");
    this._printTreeHelper(1, 0, this.n - 1, 0);
  }

  _printTreeHelper(node, start, end, level) {
    const indent = "  ".repeat(level);
    const range = "[" + start + ", " + end + "]";
    const value = this.tree[node];
    console.log(indent + "Node " + node + " " + range + ": " + value);
    
    if (start !== end) {
      const mid = Math.floor((start + end) / 2);
      this._printTreeHelper(2 * node, start, mid, level + 1);
      this._printTreeHelper(2 * node + 1, mid + 1, end, level + 1);
    }
  }
}

// Test the Segment Tree
console.log("=== Testing Segment Tree ===");
const arr = [1, 3, 5, 7, 9, 11];
const st = new SegmentTree(arr);

st.printTree();

// Test range queries
console.log("\\n=== Testing Range Queries ===");
console.log("Sum [1, 3]:", st.rangeQuery(1, 3));
console.log("Sum [0, 5]:", st.rangeQuery(0, 5));
console.log("Sum [2, 4]:", st.rangeQuery(2, 4));

// Test point updates
console.log("\\n=== Testing Point Updates ===");
st.pointUpdate(1, 10);
console.log("Sum [1, 3] after update:", st.rangeQuery(1, 3));

st.pointUpdate(3, 15);
console.log("Sum [2, 4] after update:", st.rangeQuery(2, 4));`,
          Java: `// Segment Tree - Introduction

class SegmentTree {
    private int[] tree;
    private int[] arr;
    private int n;
    
    public SegmentTree(int[] arr) {
        this.n = arr.length;
        this.tree = new int[4 * n];
        this.arr = arr.clone();
        
        System.out.println("=== Building Segment Tree ===");
        System.out.print("Array: ");
        printArray(this.arr);
        
        build(1, 0, n - 1);
        
        System.out.print("Segment Tree: ");
        printArray(this.tree);
    }
    
    // Build the segment tree
    private void build(int node, int start, int end) {
        System.out.println("\\nBuilding node " + node + " for range [" + start + ", " + end + "]");
        
        if (start == end) {
            // Leaf node
            tree[node] = arr[start];
            System.out.println("  Leaf node: tree[" + node + "] = " + tree[node]);
        } else {
            int mid = (start + end) / 2;
            System.out.println("  Internal node: mid = " + mid);
            
            // Build left and right subtrees
            build(2 * node, start, mid);
            build(2 * node + 1, mid + 1, end);
            
            // Merge the results
            tree[node] = tree[2 * node] + tree[2 * node + 1];
            System.out.println("  tree[" + node + "] = tree[" + (2 * node) + "] + tree[" + (2 * node + 1) + "] = " + tree[node]);
        }
    }
    
    // Query range sum
    private int query(int node, int start, int end, int left, int right) {
        System.out.println("\\nQuerying node " + node + " for range [" + start + ", " + end + "] with query [" + left + ", " + right + "]");
        
        // No overlap
        if (right < start || left > end) {
            System.out.println("  No overlap, returning 0");
            return 0;
        }
        
        // Complete overlap
        if (left <= start && end <= right) {
            System.out.println("  Complete overlap, returning tree[" + node + "] = " + tree[node]);
            return tree[node];
        }
        
        // Partial overlap
        int mid = (start + end) / 2;
        System.out.println("  Partial overlap, splitting at mid = " + mid);
        
        int leftSum = query(2 * node, start, mid, left, right);
        int rightSum = query(2 * node + 1, mid + 1, end, left, right);
        
        int result = leftSum + rightSum;
        System.out.println("  Result: " + leftSum + " + " + rightSum + " = " + result);
        return result;
    }
    
    // Update a single element
    private void update(int node, int start, int end, int index, int value) {
        System.out.println("\\nUpdating node " + node + " for range [" + start + ", " + end + "] at index " + index + " with value " + value);
        
        if (start == end) {
            // Leaf node
            arr[index] = value;
            tree[node] = value;
            System.out.println("  Updated leaf: tree[" + node + "] = " + value);
        } else {
            int mid = (start + end) / 2;
            System.out.println("  Internal node: mid = " + mid);
            
            if (index <= mid) {
                System.out.println("  Updating left subtree");
                update(2 * node, start, mid, index, value);
            } else {
                System.out.println("  Updating right subtree");
                update(2 * node + 1, mid + 1, end, index, value);
            }
            
            // Update current node
            tree[node] = tree[2 * node] + tree[2 * node + 1];
            System.out.println("  Updated tree[" + node + "] = " + tree[node]);
        }
    }
    
    // Public methods
    public int rangeQuery(int left, int right) {
        System.out.println("\\n=== Range Query [" + left + ", " + right + "] ===");
        return query(1, 0, n - 1, left, right);
    }
    
    public void pointUpdate(int index, int value) {
        System.out.println("\\n=== Point Update at index " + index + " with value " + value + " ===");
        update(1, 0, n - 1, index, value);
        System.out.print("Updated array: ");
        printArray(arr);
    }
    
    // Print tree structure
    public void printTree() {
        System.out.println("\\n=== Segment Tree Structure ===");
        printTreeHelper(1, 0, n - 1, 0);
    }
    
    private void printTreeHelper(int node, int start, int end, int level) {
        String indent = "  ".repeat(level);
        String range = "[" + start + ", " + end + "]";
        int value = tree[node];
        System.out.println(indent + "Node " + node + " " + range + ": " + value);
        
        if (start != end) {
            int mid = (start + end) / 2;
            printTreeHelper(2 * node, start, mid, level + 1);
            printTreeHelper(2 * node + 1, mid + 1, end, level + 1);
        }
    }
    
    private void printArray(int[] arr) {
        System.out.print("[");
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i]);
            if (i < arr.length - 1) System.out.print(", ");
        }
        System.out.println("]");
    }
}

// Test the Segment Tree
public class SegmentTreeTest {
    public static void main(String[] args) {
        System.out.println("=== Testing Segment Tree ===");
        int[] arr = {1, 3, 5, 7, 9, 11};
        SegmentTree st = new SegmentTree(arr);
        
        st.printTree();
        
        // Test range queries
        System.out.println("\\n=== Testing Range Queries ===");
        System.out.println("Sum [1, 3]: " + st.rangeQuery(1, 3));
        System.out.println("Sum [0, 5]: " + st.rangeQuery(0, 5));
        System.out.println("Sum [2, 4]: " + st.rangeQuery(2, 4));
        
        // Test point updates
        System.out.println("\\n=== Testing Point Updates ===");
        st.pointUpdate(1, 10);
        System.out.println("Sum [1, 3] after update: " + st.rangeQuery(1, 3));
        
        st.pointUpdate(3, 15);
        System.out.println("Sum [2, 4] after update: " + st.rangeQuery(2, 4));
    }
}`,
        }}
        explanation="Segment Tree is a binary tree where each node represents a range of the array. It allows efficient range queries and point updates in O(log n) time. The tree is built bottom-up, with leaf nodes containing array elements and internal nodes containing the result of their children."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Implement Segment Tree data structure for range sum queries and point updates. Each node stores sum of a range.",
              details: [
                "Support range queries: get sum of range [l, r]",
                "Support point updates: update value at index i",
                "Both operations in O(log n) time",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Binary tree structure: root represents entire array, children represent halves. Build bottom-up: leaf nodes = array elements, internal nodes = sum of children.",
              keywords: [
                "segment tree",
                "binary tree",
                "range queries",
                "divide and conquer",
              ],
              details: [
                "Tree structure: array-based representation (4n size)",
                "Build: recursive bottom-up construction",
                "Query: traverse tree, combine overlapping ranges",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Array tree[4*n] to store segment tree. Root at index 1. Left child: 2*i, right child: 2*i+1. Each node stores sum of its range.",
              details: [
                "1-based indexing for easier parent-child calculation",
                "4n size ensures enough space for all nodes",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Build: recursively build left and right subtrees, merge results. Query: if current range completely inside query range, return node value. If completely outside, return 0. Otherwise recurse on both children and merge. Update: update leaf, propagate up.",
              details: [
                "Build: O(n) time",
                "Query: O(log n) time - traverse height of tree",
                "Update: O(log n) time - update path to root",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Time O(n) build, O(log n) query/update. Space O(4n) for tree array. Can optimize space to O(2n) with careful indexing. Lazy propagation for range updates.",
              details: [
                "Efficient for range queries with updates",
                "Better than O(n) naive approach for multiple queries",
              ],
            },
          ],
          pattern: "Segment Tree (Range Sum)",
          complexity: {
            time: "O(n) build, O(log n) query/update",
            space: "O(4n)",
          },
        }}
      />
    </div>
  );
}

function SegmentTreesSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-white mb-6">Segment Trees</h2>

      <ProblemBlock
        title="Range Sum Query - Immutable"
        difficulty="Easy"
        description="Given an integer array nums, find the sum of the elements between indices left and right inclusive."
        solutions={{
          JavaScript: `// Range Sum Query - Immutable

class NumArray {
  constructor(nums) {
    this.n = nums.length;
    this.tree = new Array(4 * this.n);
    this.arr = [...nums];
    console.log("=== Building Segment Tree for Range Sum ===");
    console.log("Array:", this.arr);
    this.build(1, 0, this.n - 1);
  }

  build(node, start, end) {
    if (start === end) {
      this.tree[node] = this.arr[start];
    } else {
      const mid = Math.floor((start + end) / 2);
      this.build(2 * node, start, mid);
      this.build(2 * node + 1, mid + 1, end);
      this.tree[node] = this.tree[2 * node] + this.tree[2 * node + 1];
    }
  }

  query(node, start, end, left, right) {
    // No overlap
    if (right < start || left > end) {
      return 0;
    }
    
    // Complete overlap
    if (left <= start && end <= right) {
      return this.tree[node];
    }
    
    // Partial overlap
    const mid = Math.floor((start + end) / 2);
    const leftSum = this.query(2 * node, start, mid, left, right);
    const rightSum = this.query(2 * node + 1, mid + 1, end, left, right);
    return leftSum + rightSum;
  }

  sumRange(left, right) {
    console.log("\\n=== Range Sum Query [" + left + ", " + right + "] ===");
    const result = this.query(1, 0, this.n - 1, left, right);
    console.log("Sum of range [" + left + ", " + right + "]: " + result);
    return result;
  }
}

// Alternative: Prefix Sum approach (simpler for immutable arrays)
class NumArrayPrefixSum {
  constructor(nums) {
    this.prefixSum = new Array(nums.length + 1);
    this.prefixSum[0] = 0;
    
    console.log("=== Building Prefix Sum Array ===");
    console.log("Original array:", nums);
    
    for (let i = 0; i < nums.length; i++) {
      this.prefixSum[i + 1] = this.prefixSum[i] + nums[i];
      console.log("prefixSum[" + (i + 1) + "] = " + this.prefixSum[i + 1]);
    }
    
    console.log("Prefix sum array:", this.prefixSum);
  }

  sumRange(left, right) {
    console.log("\\n=== Prefix Sum Query [" + left + ", " + right + "] ===");
    const result = this.prefixSum[right + 1] - this.prefixSum[left];
    console.log("Sum = prefixSum[" + (right + 1) + "] - prefixSum[" + left + "] = " + this.prefixSum[right + 1] + " - " + this.prefixSum[left] + " = " + result);
    return result;
  }
}

// Test cases
console.log("=== Testing Range Sum Query ===");

const nums = [-2, 0, 3, -5, 2, -1];
console.log("\\n--- Test Case 1: Segment Tree Approach ---");
const numArray = new NumArray(nums);
console.log("sumRange(0, 2):", numArray.sumRange(0, 2));
console.log("sumRange(2, 5):", numArray.sumRange(2, 5));
console.log("sumRange(0, 5):", numArray.sumRange(0, 5));

console.log("\\n--- Test Case 2: Prefix Sum Approach ---");
const numArrayPrefix = new NumArrayPrefixSum(nums);
console.log("sumRange(0, 2):", numArrayPrefix.sumRange(0, 2));
console.log("sumRange(2, 5):", numArrayPrefix.sumRange(2, 5));
console.log("sumRange(0, 5):", numArrayPrefix.sumRange(0, 5));`,
          Java: `// Range Sum Query - Immutable

class NumArray {
    private int[] tree;
    private int[] arr;
    private int n;
    
    public NumArray(int[] nums) {
        this.n = nums.length;
        this.tree = new int[4 * n];
        this.arr = nums.clone();
        
        System.out.println("=== Building Segment Tree for Range Sum ===");
        System.out.print("Array: ");
        printArray(this.arr);
        
        build(1, 0, n - 1);
    }
    
    private void build(int node, int start, int end) {
        if (start == end) {
            tree[node] = arr[start];
        } else {
            int mid = (start + end) / 2;
            build(2 * node, start, mid);
            build(2 * node + 1, mid + 1, end);
            tree[node] = tree[2 * node] + tree[2 * node + 1];
        }
    }
    
    private int query(int node, int start, int end, int left, int right) {
        // No overlap
        if (right < start || left > end) {
            return 0;
        }
        
        // Complete overlap
        if (left <= start && end <= right) {
            return tree[node];
        }
        
        // Partial overlap
        int mid = (start + end) / 2;
        int leftSum = query(2 * node, start, mid, left, right);
        int rightSum = query(2 * node + 1, mid + 1, end, left, right);
        return leftSum + rightSum;
    }
    
    public int sumRange(int left, int right) {
        System.out.println("\\n=== Range Sum Query [" + left + ", " + right + "] ===");
        int result = query(1, 0, n - 1, left, right);
        System.out.println("Sum of range [" + left + ", " + right + "]: " + result);
        return result;
    }
    
    private void printArray(int[] arr) {
        System.out.print("[");
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i]);
            if (i < arr.length - 1) System.out.print(", ");
        }
        System.out.println("]");
    }
}

// Alternative: Prefix Sum approach (simpler for immutable arrays)
class NumArrayPrefixSum {
    private int[] prefixSum;
    
    public NumArrayPrefixSum(int[] nums) {
        prefixSum = new int[nums.length + 1];
        prefixSum[0] = 0;
        
        System.out.println("=== Building Prefix Sum Array ===");
        System.out.print("Original array: ");
        printArray(nums);
        
        for (int i = 0; i < nums.length; i++) {
            prefixSum[i + 1] = prefixSum[i] + nums[i];
            System.out.println("prefixSum[" + (i + 1) + "] = " + prefixSum[i + 1]);
        }
        
        System.out.print("Prefix sum array: ");
        printArray(prefixSum);
    }
    
    public int sumRange(int left, int right) {
        System.out.println("\\n=== Prefix Sum Query [" + left + ", " + right + "] ===");
        int result = prefixSum[right + 1] - prefixSum[left];
        System.out.println("Sum = prefixSum[" + (right + 1) + "] - prefixSum[" + left + "] = " + prefixSum[right + 1] + " - " + prefixSum[left] + " = " + result);
        return result;
    }
    
    private void printArray(int[] arr) {
        System.out.print("[");
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i]);
            if (i < arr.length - 1) System.out.print(", ");
        }
        System.out.println("]");
    }
}

// Test cases
public class RangeSumQueryTest {
    public static void main(String[] args) {
        System.out.println("=== Testing Range Sum Query ===");
        
        int[] nums = {-2, 0, 3, -5, 2, -1};
        System.out.println("\\n--- Test Case 1: Segment Tree Approach ---");
        NumArray numArray = new NumArray(nums);
        System.out.println("sumRange(0, 2): " + numArray.sumRange(0, 2));
        System.out.println("sumRange(2, 5): " + numArray.sumRange(2, 5));
        System.out.println("sumRange(0, 5): " + numArray.sumRange(0, 5));
        
        System.out.println("\\n--- Test Case 2: Prefix Sum Approach ---");
        NumArrayPrefixSum numArrayPrefix = new NumArrayPrefixSum(nums);
        System.out.println("sumRange(0, 2): " + numArrayPrefix.sumRange(0, 2));
        System.out.println("sumRange(2, 5): " + numArrayPrefix.sumRange(2, 5));
        System.out.println("sumRange(0, 5): " + numArrayPrefix.sumRange(0, 5));
    }
}`,
        }}
        explanation="For immutable arrays, prefix sum is more efficient (O(1) query, O(n) space). Segment tree is useful when updates are needed. Time: O(log n) for segment tree, O(1) for prefix sum. Space: O(n) for both."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Range sum query on immutable array. No updates allowed. Need efficient range sum queries.",
              details: [
                "Example: array=[1,3,5,7,9], query(0,2) → 9",
                "Array doesn't change after initialization",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Two approaches: Prefix Sum (O(1) query) or Segment Tree (O(log n) query). For immutable arrays, prefix sum is optimal.",
              keywords: [
                "prefix sum",
                "segment tree",
                "range query",
                "immutable array",
              ],
              details: [
                "Prefix sum: precompute cumulative sums",
                "Query: sum[l..r] = prefix[r+1] - prefix[l]",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Prefix sum array: prefix[i] = sum of arr[0..i-1]. Initialize prefix[0]=0, prefix[i]=prefix[i-1]+arr[i-1].",
              details: [
                "Prefix sum: O(1) query, O(n) space",
                "Segment tree: O(log n) query, O(4n) space (overkill for immutable)",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Build prefix sum: for i from 1 to n, prefix[i]=prefix[i-1]+arr[i-1]. Query: return prefix[right+1]-prefix[left].",
              details: [
                "Prefix sum: simple and efficient",
                "Segment tree: unnecessary complexity for immutable array",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Prefix sum: Time O(n) build, O(1) query. Space O(n). Segment tree: Time O(n) build, O(log n) query. Space O(4n). Prefix sum is optimal for immutable arrays.",
              details: [
                "Use prefix sum for immutable arrays",
                "Use segment tree only if updates are needed",
              ],
            },
          ],
          pattern: "Prefix Sum (Immutable Array)",
          complexity: {
            time: "O(n) build, O(1) query",
            space: "O(n)",
          },
        }}
      />

      <ProblemBlock
        title="Range Sum Query - Mutable"
        difficulty="Medium"
        description="Given an integer array nums, find the sum of the elements between indices left and right inclusive, with support for updates."
        solutions={{
          JavaScript: `// Range Sum Query - Mutable

class NumArrayMutable {
  constructor(nums) {
    this.n = nums.length;
    this.tree = new Array(4 * this.n);
    this.arr = [...nums];
    console.log("=== Building Mutable Segment Tree ===");
    console.log("Array:", this.arr);
    this.build(1, 0, this.n - 1);
    this.printTree();
  }

  build(node, start, end) {
    if (start === end) {
      this.tree[node] = this.arr[start];
    } else {
      const mid = Math.floor((start + end) / 2);
      this.build(2 * node, start, mid);
      this.build(2 * node + 1, mid + 1, end);
      this.tree[node] = this.tree[2 * node] + this.tree[2 * node + 1];
    }
  }

  query(node, start, end, left, right) {
    console.log("\\nQuerying node " + node + " for range [" + start + ", " + end + "] with query [" + left + ", " + right + "]");
    
    // No overlap
    if (right < start || left > end) {
      console.log("  No overlap, returning 0");
      return 0;
    }
    
    // Complete overlap
    if (left <= start && end <= right) {
      console.log("  Complete overlap, returning tree[" + node + "] = " + this.tree[node]);
      return this.tree[node];
    }
    
    // Partial overlap
    const mid = Math.floor((start + end) / 2);
    console.log("  Partial overlap, splitting at mid = " + mid);
    
    const leftSum = this.query(2 * node, start, mid, left, right);
    const rightSum = this.query(2 * node + 1, mid + 1, end, left, right);
    
    const result = leftSum + rightSum;
    console.log("  Result: " + leftSum + " + " + rightSum + " = " + result);
    return result;
  }

  update(node, start, end, index, value) {
    console.log("\\nUpdating node " + node + " for range [" + start + ", " + end + "] at index " + index + " with value " + value);
    
    if (start === end) {
      // Leaf node
      this.arr[index] = value;
      this.tree[node] = value;
      console.log("  Updated leaf: tree[" + node + "] = " + value);
    } else {
      const mid = Math.floor((start + end) / 2);
      console.log("  Internal node: mid = " + mid);
      
      if (index <= mid) {
        console.log("  Updating left subtree");
        this.update(2 * node, start, mid, index, value);
      } else {
        console.log("  Updating right subtree");
        this.update(2 * node + 1, mid + 1, end, index, value);
      }
      
      // Update current node
      this.tree[node] = this.tree[2 * node] + this.tree[2 * node + 1];
      console.log("  Updated tree[" + node + "] = " + this.tree[node]);
    }
  }

  // Public methods
  sumRange(left, right) {
    console.log("\\n=== Range Sum Query [" + left + ", " + right + "] ===");
    const result = this.query(1, 0, this.n - 1, left, right);
    console.log("Sum of range [" + left + ", " + right + "]: " + result);
    return result;
  }

  updateVal(index, value) {
    console.log("\\n=== Point Update at index " + index + " with value " + value + " ===");
    this.update(1, 0, this.n - 1, index, value);
    console.log("Updated array:", this.arr);
    this.printTree();
  }

  printTree() {
    console.log("\\n=== Segment Tree Structure ===");
    this._printTreeHelper(1, 0, this.n - 1, 0);
  }

  _printTreeHelper(node, start, end, level) {
    const indent = "  ".repeat(level);
    const range = "[" + start + ", " + end + "]";
    const value = this.tree[node];
    console.log(indent + "Node " + node + " " + range + ": " + value);
    
    if (start !== end) {
      const mid = Math.floor((start + end) / 2);
      this._printTreeHelper(2 * node, start, mid, level + 1);
      this._printTreeHelper(2 * node + 1, mid + 1, end, level + 1);
    }
  }
}

// Test cases
console.log("=== Testing Mutable Range Sum Query ===");

const nums = [1, 3, 5];
const numArray = new NumArrayMutable(nums);

console.log("\\n--- Initial Queries ---");
console.log("sumRange(0, 2):", numArray.sumRange(0, 2));

console.log("\\n--- After Update ---");
numArray.updateVal(1, 2);
console.log("sumRange(0, 2):", numArray.sumRange(0, 2));

console.log("\\n--- Another Update ---");
numArray.updateVal(2, 10);
console.log("sumRange(0, 2):", numArray.sumRange(0, 2));
console.log("sumRange(1, 2):", numArray.sumRange(1, 2));`,
          Java: `// Range Sum Query - Mutable

class NumArrayMutable {
    private int[] tree;
    private int[] arr;
    private int n;
    
    public NumArrayMutable(int[] nums) {
        this.n = nums.length;
        this.tree = new int[4 * n];
        this.arr = nums.clone();
        
        System.out.println("=== Building Mutable Segment Tree ===");
        System.out.print("Array: ");
        printArray(this.arr);
        
        build(1, 0, n - 1);
        printTree();
    }
    
    private void build(int node, int start, int end) {
        if (start == end) {
            tree[node] = arr[start];
        } else {
            int mid = (start + end) / 2;
            build(2 * node, start, mid);
            build(2 * node + 1, mid + 1, end);
            tree[node] = tree[2 * node] + tree[2 * node + 1];
        }
    }
    
    private int query(int node, int start, int end, int left, int right) {
        System.out.println("\\nQuerying node " + node + " for range [" + start + ", " + end + "] with query [" + left + ", " + right + "]");
        
        // No overlap
        if (right < start || left > end) {
            System.out.println("  No overlap, returning 0");
            return 0;
        }
        
        // Complete overlap
        if (left <= start && end <= right) {
            System.out.println("  Complete overlap, returning tree[" + node + "] = " + tree[node]);
            return tree[node];
        }
        
        // Partial overlap
        int mid = (start + end) / 2;
        System.out.println("  Partial overlap, splitting at mid = " + mid);
        
        int leftSum = query(2 * node, start, mid, left, right);
        int rightSum = query(2 * node + 1, mid + 1, end, left, right);
        
        int result = leftSum + rightSum;
        System.out.println("  Result: " + leftSum + " + " + rightSum + " = " + result);
        return result;
    }
    
    private void update(int node, int start, int end, int index, int value) {
        System.out.println("\\nUpdating node " + node + " for range [" + start + ", " + end + "] at index " + index + " with value " + value);
        
        if (start == end) {
            // Leaf node
            arr[index] = value;
            tree[node] = value;
            System.out.println("  Updated leaf: tree[" + node + "] = " + value);
        } else {
            int mid = (start + end) / 2;
            System.out.println("  Internal node: mid = " + mid);
            
            if (index <= mid) {
                System.out.println("  Updating left subtree");
                update(2 * node, start, mid, index, value);
            } else {
                System.out.println("  Updating right subtree");
                update(2 * node + 1, mid + 1, end, index, value);
            }
            
            // Update current node
            tree[node] = tree[2 * node] + tree[2 * node + 1];
            System.out.println("  Updated tree[" + node + "] = " + tree[node]);
        }
    }
    
    // Public methods
    public int sumRange(int left, int right) {
        System.out.println("\\n=== Range Sum Query [" + left + ", " + right + "] ===");
        int result = query(1, 0, n - 1, left, right);
        System.out.println("Sum of range [" + left + ", " + right + "]: " + result);
        return result;
    }
    
    public void updateVal(int index, int value) {
        System.out.println("\\n=== Point Update at index " + index + " with value " + value + " ===");
        update(1, 0, n - 1, index, value);
        System.out.print("Updated array: ");
        printArray(arr);
        printTree();
    }
    
    public void printTree() {
        System.out.println("\\n=== Segment Tree Structure ===");
        printTreeHelper(1, 0, n - 1, 0);
    }
    
    private void printTreeHelper(int node, int start, int end, int level) {
        String indent = "  ".repeat(level);
        String range = "[" + start + ", " + end + "]";
        int value = tree[node];
        System.out.println(indent + "Node " + node + " " + range + ": " + value);
        
        if (start != end) {
            int mid = (start + end) / 2;
            printTreeHelper(2 * node, start, mid, level + 1);
            printTreeHelper(2 * node + 1, mid + 1, end, level + 1);
        }
    }
    
    private void printArray(int[] arr) {
        System.out.print("[");
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i]);
            if (i < arr.length - 1) System.out.print(", ");
        }
        System.out.println("]");
    }
}

// Test cases
public class MutableRangeSumQueryTest {
    public static void main(String[] args) {
        System.out.println("=== Testing Mutable Range Sum Query ===");
        
        int[] nums = {1, 3, 5};
        NumArrayMutable numArray = new NumArrayMutable(nums);
        
        System.out.println("\\n--- Initial Queries ---");
        System.out.println("sumRange(0, 2): " + numArray.sumRange(0, 2));
        
        System.out.println("\\n--- After Update ---");
        numArray.updateVal(1, 2);
        System.out.println("sumRange(0, 2): " + numArray.sumRange(0, 2));
        
        System.out.println("\\n--- Another Update ---");
        numArray.updateVal(2, 10);
        System.out.println("sumRange(0, 2): " + numArray.sumRange(0, 2));
        System.out.println("sumRange(1, 2): " + numArray.sumRange(1, 2));
    }
}`,
        }}
        explanation="Mutable segment tree supports both range queries and point updates in O(log n) time. Each update propagates up the tree, maintaining the sum property. Space complexity is O(4n) for the tree structure."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Range sum query on mutable array. Support both range queries and point updates efficiently.",
              details: [
                "Example: array=[1,3,5,7,9], update(2,10), query(0,2) → 14",
                "Array can be updated after initialization",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Segment Tree is optimal for mutable arrays. Prefix sum doesn't work well with updates (O(n) per update). Segment tree supports O(log n) updates.",
              keywords: [
                "segment tree",
                "mutable array",
                "range query",
                "point update",
              ],
              details: [
                "Segment tree: O(log n) for both query and update",
                "Prefix sum: O(1) query but O(n) update (not suitable)",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Segment tree array tree[4*n]. Each node stores sum of its range. Root at index 1.",
              details: [
                "Tree structure: array-based representation",
                "Update propagates from leaf to root",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Build: recursively build left/right, merge with sum. Query: traverse tree, combine overlapping ranges. Update: update leaf node, propagate change up to root.",
              details: [
                "Build: O(n) time",
                "Query: O(log n) - traverse tree height",
                "Update: O(log n) - update path to root",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Time O(n) build, O(log n) query/update. Space O(4n) for tree. Optimal for mutable arrays with range queries.",
              details: [
                "Much better than O(n) naive update approach",
                "Efficient for multiple queries and updates",
              ],
            },
          ],
          pattern: "Segment Tree (Mutable Array)",
          complexity: {
            time: "O(n) build, O(log n) query/update",
            space: "O(4n)",
          },
        }}
      />

      <ProblemBlock
        title="Range Minimum Query (RMQ)"
        difficulty="Medium"
        description="Find the minimum element in a range [L, R] of an array with support for updates."
        solutions={{
          JavaScript: `// Range Minimum Query (RMQ)

class RMQSegmentTree {
  constructor(arr) {
    this.n = arr.length;
    this.tree = new Array(4 * this.n);
    this.arr = [...arr];
    console.log("=== Building RMQ Segment Tree ===");
    console.log("Array:", this.arr);
    this.build(1, 0, this.n - 1);
    this.printTree();
  }

  build(node, start, end) {
    if (start === end) {
      this.tree[node] = this.arr[start];
    } else {
      const mid = Math.floor((start + end) / 2);
      this.build(2 * node, start, mid);
      this.build(2 * node + 1, mid + 1, end);
      this.tree[node] = Math.min(this.tree[2 * node], this.tree[2 * node + 1]);
    }
  }

  query(node, start, end, left, right) {
    console.log("\\nRMQ Querying node " + node + " for range [" + start + ", " + end + "] with query [" + left + ", " + right + "]");
    
    // No overlap
    if (right < start || left > end) {
      console.log("  No overlap, returning Infinity");
      return Infinity;
    }
    
    // Complete overlap
    if (left <= start && end <= right) {
      console.log("  Complete overlap, returning tree[" + node + "] = " + this.tree[node]);
      return this.tree[node];
    }
    
    // Partial overlap
    const mid = Math.floor((start + end) / 2);
    console.log("  Partial overlap, splitting at mid = " + mid);
    
    const leftMin = this.query(2 * node, start, mid, left, right);
    const rightMin = this.query(2 * node + 1, mid + 1, end, left, right);
    
    const result = Math.min(leftMin, rightMin);
    console.log("  Result: min(" + leftMin + ", " + rightMin + ") = " + result);
    return result;
  }

  update(node, start, end, index, value) {
    console.log("\\nRMQ Updating node " + node + " for range [" + start + ", " + end + "] at index " + index + " with value " + value);
    
    if (start === end) {
      // Leaf node
      this.arr[index] = value;
      this.tree[node] = value;
      console.log("  Updated leaf: tree[" + node + "] = " + value);
    } else {
      const mid = Math.floor((start + end) / 2);
      console.log("  Internal node: mid = " + mid);
      
      if (index <= mid) {
        console.log("  Updating left subtree");
        this.update(2 * node, start, mid, index, value);
      } else {
        console.log("  Updating right subtree");
        this.update(2 * node + 1, mid + 1, end, index, value);
      }
      
      // Update current node
      this.tree[node] = Math.min(this.tree[2 * node], this.tree[2 * node + 1]);
      console.log("  Updated tree[" + node + "] = " + this.tree[node]);
    }
  }

  // Public methods
  rangeMinQuery(left, right) {
    console.log("\\n=== RMQ [" + left + ", " + right + "] ===");
    const result = this.query(1, 0, this.n - 1, left, right);
    console.log("Minimum in range [" + left + ", " + right + "]: " + result);
    return result;
  }

  updateVal(index, value) {
    console.log("\\n=== RMQ Update at index " + index + " with value " + value + " ===");
    this.update(1, 0, this.n - 1, index, value);
    console.log("Updated array:", this.arr);
    this.printTree();
  }

  printTree() {
    console.log("\\n=== RMQ Segment Tree Structure ===");
    this._printTreeHelper(1, 0, this.n - 1, 0);
  }

  _printTreeHelper(node, start, end, level) {
    const indent = "  ".repeat(level);
    const range = "[" + start + ", " + end + "]";
    const value = this.tree[node];
    console.log(indent + "Node " + node + " " + range + ": " + value);
    
    if (start !== end) {
      const mid = Math.floor((start + end) / 2);
      this._printTreeHelper(2 * node, start, mid, level + 1);
      this._printTreeHelper(2 * node + 1, mid + 1, end, level + 1);
    }
  }
}

// Test cases
console.log("=== Testing Range Minimum Query ===");

const arr = [2, 5, 1, 4, 9, 3];
const rmq = new RMQSegmentTree(arr);

console.log("\\n--- Initial Queries ---");
console.log("RMQ(0, 2):", rmq.rangeMinQuery(0, 2));
console.log("RMQ(1, 4):", rmq.rangeMinQuery(1, 4));
console.log("RMQ(0, 5):", rmq.rangeMinQuery(0, 5));

console.log("\\n--- After Update ---");
rmq.updateVal(2, 0);
console.log("RMQ(0, 2):", rmq.rangeMinQuery(0, 2));
console.log("RMQ(1, 4):", rmq.rangeMinQuery(1, 4));`,
          Java: `// Range Minimum Query (RMQ)

class RMQSegmentTree {
    private int[] tree;
    private int[] arr;
    private int n;
    private static final int INF = Integer.MAX_VALUE;
    
    public RMQSegmentTree(int[] arr) {
        this.n = arr.length;
        this.tree = new int[4 * n];
        this.arr = arr.clone();
        
        System.out.println("=== Building RMQ Segment Tree ===");
        System.out.print("Array: ");
        printArray(this.arr);
        
        build(1, 0, n - 1);
        printTree();
    }
    
    private void build(int node, int start, int end) {
        if (start == end) {
            tree[node] = arr[start];
        } else {
            int mid = (start + end) / 2;
            build(2 * node, start, mid);
            build(2 * node + 1, mid + 1, end);
            tree[node] = Math.min(tree[2 * node], tree[2 * node + 1]);
        }
    }
    
    private int query(int node, int start, int end, int left, int right) {
        System.out.println("\\nRMQ Querying node " + node + " for range [" + start + ", " + end + "] with query [" + left + ", " + right + "]");
        
        // No overlap
        if (right < start || left > end) {
            System.out.println("  No overlap, returning INF");
            return INF;
        }
        
        // Complete overlap
        if (left <= start && end <= right) {
            System.out.println("  Complete overlap, returning tree[" + node + "] = " + tree[node]);
            return tree[node];
        }
        
        // Partial overlap
        int mid = (start + end) / 2;
        System.out.println("  Partial overlap, splitting at mid = " + mid);
        
        int leftMin = query(2 * node, start, mid, left, right);
        int rightMin = query(2 * node + 1, mid + 1, end, left, right);
        
        int result = Math.min(leftMin, rightMin);
        System.out.println("  Result: min(" + leftMin + ", " + rightMin + ") = " + result);
        return result;
    }
    
    private void update(int node, int start, int end, int index, int value) {
        System.out.println("\\nRMQ Updating node " + node + " for range [" + start + ", " + end + "] at index " + index + " with value " + value);
        
        if (start == end) {
            // Leaf node
            arr[index] = value;
            tree[node] = value;
            System.out.println("  Updated leaf: tree[" + node + "] = " + value);
        } else {
            int mid = (start + end) / 2;
            System.out.println("  Internal node: mid = " + mid);
            
            if (index <= mid) {
                System.out.println("  Updating left subtree");
                update(2 * node, start, mid, index, value);
            } else {
                System.out.println("  Updating right subtree");
                update(2 * node + 1, mid + 1, end, index, value);
            }
            
            // Update current node
            tree[node] = Math.min(tree[2 * node], tree[2 * node + 1]);
            System.out.println("  Updated tree[" + node + "] = " + tree[node]);
        }
    }
    
    // Public methods
    public int rangeMinQuery(int left, int right) {
        System.out.println("\\n=== RMQ [" + left + ", " + right + "] ===");
        int result = query(1, 0, n - 1, left, right);
        System.out.println("Minimum in range [" + left + ", " + right + "]: " + result);
        return result;
    }
    
    public void updateVal(int index, int value) {
        System.out.println("\\n=== RMQ Update at index " + index + " with value " + value + " ===");
        update(1, 0, n - 1, index, value);
        System.out.print("Updated array: ");
        printArray(arr);
        printTree();
    }
    
    public void printTree() {
        System.out.println("\\n=== RMQ Segment Tree Structure ===");
        printTreeHelper(1, 0, n - 1, 0);
    }
    
    private void printTreeHelper(int node, int start, int end, int level) {
        String indent = "  ".repeat(level);
        String range = "[" + start + ", " + end + "]";
        int value = tree[node];
        System.out.println(indent + "Node " + node + " " + range + ": " + value);
        
        if (start != end) {
            int mid = (start + end) / 2;
            printTreeHelper(2 * node, start, mid, level + 1);
            printTreeHelper(2 * node + 1, mid + 1, end, level + 1);
        }
    }
    
    private void printArray(int[] arr) {
        System.out.print("[");
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i]);
            if (i < arr.length - 1) System.out.print(", ");
        }
        System.out.println("]");
    }
}

// Test cases
public class RMQTest {
    public static void main(String[] args) {
        System.out.println("=== Testing Range Minimum Query ===");
        
        int[] arr = {2, 5, 1, 4, 9, 3};
        RMQSegmentTree rmq = new RMQSegmentTree(arr);
        
        System.out.println("\\n--- Initial Queries ---");
        System.out.println("RMQ(0, 2): " + rmq.rangeMinQuery(0, 2));
        System.out.println("RMQ(1, 4): " + rmq.rangeMinQuery(1, 4));
        System.out.println("RMQ(0, 5): " + rmq.rangeMinQuery(0, 5));
        
        System.out.println("\\n--- After Update ---");
        rmq.updateVal(2, 0);
        System.out.println("RMQ(0, 2): " + rmq.rangeMinQuery(0, 2));
        System.out.println("RMQ(1, 4): " + rmq.rangeMinQuery(1, 4));
    }
}`,
        }}
        explanation="RMQ segment tree stores minimum values instead of sums. The merge operation uses Math.min instead of addition. Time complexity remains O(log n) for both queries and updates."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Range Minimum Query: find minimum value in range [l, r]. Support both queries and point updates.",
              details: [
                "Example: array=[1,3,5,2,4], query(0,3) → 1",
                "Similar to range sum, but find minimum instead",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Segment Tree with minimum operation. Same structure as sum tree, but merge operation uses min instead of addition.",
              keywords: [
                "segment tree",
                "range minimum query",
                "RMQ",
                "minimum operation",
              ],
              details: [
                "Tree structure: same as sum tree",
                "Merge: min(left, right) instead of left + right",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Segment tree array tree[4*n]. Each node stores minimum of its range. Initialize with Infinity for empty ranges.",
              details: [
                "Same structure as sum tree",
                "Use Infinity as identity for minimum",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Build: recursively build, merge with min. Query: traverse tree, return min of overlapping ranges. Update: update leaf, propagate min up to root.",
              details: [
                "Build: O(n) time",
                "Query: O(log n) - return minimum of ranges",
                "Update: O(log n) - update path to root",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Time O(n) build, O(log n) query/update. Space O(4n). Can extend to range maximum query (RMQ) by using max operation.",
              details: [
                "Efficient for range minimum/maximum queries",
                "Same complexity as range sum tree",
              ],
            },
          ],
          pattern: "Segment Tree (Range Minimum Query)",
          complexity: {
            time: "O(n) build, O(log n) query/update",
            space: "O(4n)",
          },
        }}
      />

      <ProblemBlock
        title="Lazy Propagation for Range Updates"
        difficulty="Hard"
        description="Implement lazy propagation to efficiently handle range updates in segment trees."
        solution={`// Lazy Propagation for Range Updates

class LazySegmentTree {
  constructor(arr) {
    this.n = arr.length;
    this.tree = new Array(4 * this.n).fill(0);
    this.lazy = new Array(4 * this.n).fill(0);
    this.arr = [...arr];
    console.log("=== Building Lazy Segment Tree ===");
    console.log("Array:", this.arr);
    this.build(1, 0, this.n - 1);
    this.printTree();
  }

  build(node, start, end) {
    if (start === end) {
      this.tree[node] = this.arr[start];
    } else {
      const mid = Math.floor((start + end) / 2);
      this.build(2 * node, start, mid);
      this.build(2 * node + 1, mid + 1, end);
      this.tree[node] = this.tree[2 * node] + this.tree[2 * node + 1];
    }
  }

  // Push lazy updates to children
  pushLazy(node, start, end) {
    if (this.lazy[node] !== 0) {
      console.log("  Pushing lazy update " + this.lazy[node] + " from node " + node);
      
      // Update current node
      this.tree[node] += this.lazy[node] * (end - start + 1);
      
      // If not leaf, push to children
      if (start !== end) {
        this.lazy[2 * node] += this.lazy[node];
        this.lazy[2 * node + 1] += this.lazy[node];
        console.log("    Pushed to children: lazy[" + (2 * node) + "] = " + this.lazy[2 * node] + ", lazy[" + (2 * node + 1) + "] = " + this.lazy[2 * node + 1]);
      }
      
      // Clear lazy value
      this.lazy[node] = 0;
    }
  }

  query(node, start, end, left, right) {
    console.log("\\nLazy Querying node " + node + " for range [" + start + ", " + end + "] with query [" + left + ", " + right + "]");
    
    // Push lazy updates
    this.pushLazy(node, start, end);
    
    // No overlap
    if (right < start || left > end) {
      console.log("  No overlap, returning 0");
      return 0;
    }
    
    // Complete overlap
    if (left <= start && end <= right) {
      console.log("  Complete overlap, returning tree[" + node + "] = " + this.tree[node]);
      return this.tree[node];
    }
    
    // Partial overlap
    const mid = Math.floor((start + end) / 2);
    console.log("  Partial overlap, splitting at mid = " + mid);
    
    const leftSum = this.query(2 * node, start, mid, left, right);
    const rightSum = this.query(2 * node + 1, mid + 1, end, left, right);
    
    const result = leftSum + rightSum;
    console.log("  Result: " + leftSum + " + " + rightSum + " = " + result);
    return result;
  }

  rangeUpdate(node, start, end, left, right, value) {
    console.log("\\nLazy Range Update node " + node + " for range [" + start + ", " + end + "] with update [" + left + ", " + right + "] += " + value);
    
    // Push lazy updates
    this.pushLazy(node, start, end);
    
    // No overlap
    if (right < start || left > end) {
      console.log("  No overlap, returning");
      return;
    }
    
    // Complete overlap
    if (left <= start && end <= right) {
      console.log("  Complete overlap, applying lazy update");
      this.lazy[node] += value;
      this.pushLazy(node, start, end);
      return;
    }
    
    // Partial overlap
    const mid = Math.floor((start + end) / 2);
    console.log("  Partial overlap, splitting at mid = " + mid);
    
    this.rangeUpdate(2 * node, start, mid, left, right, value);
    this.rangeUpdate(2 * node + 1, mid + 1, end, left, right, value);
    
    // Update current node
    this.pushLazy(2 * node, start, mid);
    this.pushLazy(2 * node + 1, mid + 1, end);
    this.tree[node] = this.tree[2 * node] + this.tree[2 * node + 1];
    console.log("  Updated tree[" + node + "] = " + this.tree[node]);
  }

  // Public methods
  rangeQuery(left, right) {
    console.log("\\n=== Lazy Range Query [" + left + ", " + right + "] ===");
    const result = this.query(1, 0, this.n - 1, left, right);
    console.log("Sum of range [" + left + ", " + right + "]: " + result);
    return result;
  }

  rangeUpdateVal(left, right, value) {
    console.log("\\n=== Lazy Range Update [" + left + ", " + right + "] += " + value + " ===");
    this.rangeUpdate(1, 0, this.n - 1, left, right, value);
    this.printTree();
  }

  printTree() {
    console.log("\\n=== Lazy Segment Tree Structure ===");
    this._printTreeHelper(1, 0, this.n - 1, 0);
    console.log("Lazy array:", this.lazy.slice(1, 8)); // Show first 7 elements
  }

  _printTreeHelper(node, start, end, level) {
    const indent = "  ".repeat(level);
    const range = "[" + start + ", " + end + "]";
    const value = this.tree[node];
    const lazyVal = this.lazy[node];
    console.log(indent + "Node " + node + " " + range + ": " + value + " (lazy: " + lazyVal + ")");
    
    if (start !== end) {
      const mid = Math.floor((start + end) / 2);
      this._printTreeHelper(2 * node, start, mid, level + 1);
      this._printTreeHelper(2 * node + 1, mid + 1, end, level + 1);
    }
  }
}

// Test cases
console.log("=== Testing Lazy Propagation ===");

const arr = [1, 2, 3, 4, 5];
const lazyST = new LazySegmentTree(arr);

console.log("\\n--- Initial Queries ---");
console.log("Range [0, 2]:", lazyST.rangeQuery(0, 2));
console.log("Range [1, 4]:", lazyST.rangeQuery(1, 4));

console.log("\\n--- Range Updates ---");
lazyST.rangeUpdateVal(0, 2, 2); // Add 2 to range [0, 2]
console.log("After range update [0, 2] += 2:");
console.log("Range [0, 2]:", lazyST.rangeQuery(0, 2));
console.log("Range [1, 4]:", lazyST.rangeQuery(1, 4));

lazyST.rangeUpdateVal(1, 3, 1); // Add 1 to range [1, 3]
console.log("After range update [1, 3] += 1:");
console.log("Range [0, 2]:", lazyST.rangeQuery(0, 2));
console.log("Range [1, 4]:", lazyST.rangeQuery(1, 4));`}
        explanation="Lazy propagation defers range updates by storing them in a lazy array. Updates are applied only when needed during queries. This reduces time complexity from O(n log n) to O(log n) for range updates."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Support range updates (add value to entire range) efficiently. Without lazy propagation, range update takes O(n log n). With lazy propagation, it's O(log n).",
              details: [
                "Example: update range [0,2] by adding 5",
                "Need to update all elements in range efficiently",
                "Lazy propagation defers updates until needed",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Lazy array stores pending updates. Instead of updating all nodes immediately, store update in lazy array. Apply lazy updates only when querying or updating overlapping ranges.",
              keywords: [
                "lazy propagation",
                "range update",
                "deferred update",
                "segment tree",
              ],
              details: [
                "Lazy array: lazy[i] = pending update for node i",
                "Push lazy: apply lazy update to children when needed",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Segment tree array tree[4*n] and lazy array lazy[4*n]. Lazy array stores pending updates to be applied later.",
              details: [
                "Tree array: stores actual values",
                "Lazy array: stores pending updates",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Range update: if current range completely inside update range, update lazy value and tree value, return. If partially overlapping, push lazy to children, recurse on both children. Query: push lazy before querying, then query normally.",
              details: [
                "Push lazy: apply lazy[node] to tree[node] and children's lazy",
                "Update: mark lazy instead of updating all nodes",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Time O(log n) for range update and query. Space O(4n) for tree and lazy arrays. Reduces from O(n log n) to O(log n) for range updates.",
              details: [
                "Lazy propagation is key optimization",
                "Essential for efficient range updates",
              ],
            },
          ],
          pattern: "Segment Tree with Lazy Propagation",
          complexity: {
            time: "O(log n) for range update and query",
            space: "O(4n)",
          },
        }}
      />
    </div>
  );
}

function BinaryIndexedSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-white mb-6">
        Binary Indexed Trees (Fenwick Trees)
      </h2>

      <ProblemBlock
        title="Binary Indexed Tree Introduction"
        difficulty="Medium"
        description="Basic implementation of Binary Indexed Tree for prefix sum queries and point updates."
        solution={`// Binary Indexed Tree (Fenwick Tree) - Introduction

class BinaryIndexedTree {
  constructor(arr) {
    this.n = arr.length;
    this.tree = new Array(this.n + 1).fill(0);
    this.arr = [...arr];
    console.log("=== Building Binary Indexed Tree ===");
    console.log("Array:", this.arr);
    this.build();
    console.log("BIT:", this.tree);
  }

  // Get the least significant bit
  getLSB(x) {
    return x & (-x);
  }

  // Build the BIT
  build() {
    for (let i = 0; i < this.n; i++) {
      this.update(i, this.arr[i]);
    }
  }

  // Update value at index
  update(index, delta) {
    console.log("\\nUpdating index " + index + " with delta " + delta);
    index++; // Convert to 1-based indexing
    
    while (index <= this.n) {
      this.tree[index] += delta;
      console.log("  tree[" + index + "] += " + delta + " = " + this.tree[index]);
      index += this.getLSB(index);
      console.log("  Next index: " + index);
    }
  }

  // Get prefix sum from 1 to index
  query(index) {
    console.log("\\nQuerying prefix sum from 1 to " + index);
    let sum = 0;
    index++; // Convert to 1-based indexing
    
    while (index > 0) {
      sum += this.tree[index];
      console.log("  sum += tree[" + index + "] = " + sum);
      index -= this.getLSB(index);
      console.log("  Next index: " + index);
    }
    
    console.log("  Final sum: " + sum);
    return sum;
  }

  // Get range sum from left to right
  rangeQuery(left, right) {
    console.log("\\n=== Range Query [" + left + ", " + right + "] ===");
    const rightSum = this.query(right);
    const leftSum = left > 0 ? this.query(left - 1) : 0;
    const result = rightSum - leftSum;
    console.log("Range sum = query(" + right + ") - query(" + (left - 1) + ") = " + rightSum + " - " + leftSum + " = " + result);
    return result;
  }

  // Update value at specific index
  updateVal(index, value) {
    console.log("\\n=== Point Update at index " + index + " with value " + value + " ===");
    const delta = value - this.arr[index];
    this.arr[index] = value;
    this.update(index, delta);
    console.log("Updated array:", this.arr);
  }

  // Print BIT structure
  printBIT() {
    console.log("\\n=== Binary Indexed Tree Structure ===");
    for (let i = 1; i <= this.n; i++) {
      const lsb = this.getLSB(i);
      console.log("tree[" + i + "] = " + this.tree[i] + " (LSB: " + lsb + ")");
    }
  }
}

// Test cases
console.log("=== Testing Binary Indexed Tree ===");

const arr = [1, 3, 5, 7, 9, 11];
const bit = new BinaryIndexedTree(arr);

bit.printBIT();

console.log("\\n--- Testing Prefix Sum Queries ---");
console.log("Prefix sum [0, 0]:", bit.query(0));
console.log("Prefix sum [0, 2]:", bit.query(2));
console.log("Prefix sum [0, 5]:", bit.query(5));

console.log("\\n--- Testing Range Queries ---");
console.log("Range [1, 3]:", bit.rangeQuery(1, 3));
console.log("Range [2, 4]:", bit.rangeQuery(2, 4));
console.log("Range [0, 5]:", bit.rangeQuery(0, 5));

console.log("\\n--- Testing Point Updates ---");
bit.updateVal(1, 10);
console.log("Range [1, 3] after update:", bit.rangeQuery(1, 3));

bit.updateVal(3, 15);
console.log("Range [2, 4] after update:", bit.rangeQuery(2, 4));`}
        explanation="Binary Indexed Tree uses 1-based indexing and stores prefix sums. Each node at index i stores sum of elements from (i - LSB(i) + 1) to i. LSB(i) = i & (-i) gives the least significant bit. Time: O(log n) for both queries and updates."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Implement Binary Indexed Tree (Fenwick Tree) for prefix sum queries and point updates. More space-efficient than Segment Tree.",
              details: [
                "BIT uses 1-based indexing",
                "Each node stores sum of range based on LSB",
                "More space-efficient: O(n) vs O(4n) for segment tree",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "BIT structure: tree[i] stores sum of range [i-LSB(i)+1, i]. Update: add delta to all nodes that include index. Query: sum prefix by traversing backwards using LSB.",
              keywords: [
                "binary indexed tree",
                "fenwick tree",
                "LSB",
                "prefix sum",
              ],
              details: [
                "LSB(i) = i & (-i) gives least significant bit",
                "Update: add to tree[i], then i += LSB(i)",
                "Query: sum tree[i], then i -= LSB(i)",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Array tree[n+1] with 1-based indexing. LSB function to calculate least significant bit.",
              details: [
                "1-based indexing for easier LSB calculation",
                "Size n+1 (index 0 unused)",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Update: index++ (1-based), while index<=n: tree[index]+=delta, index+=LSB(index). Query: sum=0, while index>0: sum+=tree[index], index-=LSB(index). Return sum.",
              details: [
                "Update: propagate forward using LSB",
                "Query: accumulate backwards using LSB",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Time O(log n) for both query and update. Space O(n) - more efficient than segment tree. BIT is simpler and uses less space.",
              details: [
                "More space-efficient than segment tree",
                "Easier to implement for prefix sum queries",
              ],
            },
          ],
          pattern: "Binary Indexed Tree (Fenwick Tree)",
          complexity: {
            time: "O(log n) for query and update",
            space: "O(n)",
          },
        }}
      />

      <ProblemBlock
        title="Range Sum Query with BIT"
        difficulty="Medium"
        description="Implement range sum queries using Binary Indexed Tree with support for point updates."
        solution={`// Range Sum Query with Binary Indexed Tree

class RangeSumBIT {
  constructor(nums) {
    this.n = nums.length;
    this.tree = new Array(this.n + 1).fill(0);
    this.nums = [...nums];
    console.log("=== Building Range Sum BIT ===");
    console.log("Array:", this.nums);
    this.build();
    console.log("BIT:", this.tree);
  }

  getLSB(x) {
    return x & (-x);
  }

  build() {
    for (let i = 0; i < this.n; i++) {
      this.update(i, this.nums[i]);
    }
  }

  update(index, delta) {
    console.log("\\nBIT Update: index " + index + ", delta " + delta);
    index++;
    
    while (index <= this.n) {
      this.tree[index] += delta;
      console.log("  tree[" + index + "] = " + this.tree[index]);
      index += this.getLSB(index);
    }
  }

  query(index) {
    console.log("\\nBIT Query: prefix sum to index " + index);
    let sum = 0;
    index++;
    
    while (index > 0) {
      sum += this.tree[index];
      console.log("  sum += tree[" + index + "] = " + sum);
      index -= this.getLSB(index);
    }
    
    return sum;
  }

  sumRange(left, right) {
    console.log("\\n=== Range Sum Query [" + left + ", " + right + "] ===");
    const rightSum = this.query(right);
    const leftSum = left > 0 ? this.query(left - 1) : 0;
    const result = rightSum - leftSum;
    console.log("Range sum = query(" + right + ") - query(" + (left - 1) + ") = " + rightSum + " - " + leftSum + " = " + result);
    return result;
  }

  updateVal(index, value) {
    console.log("\\n=== Point Update at index " + index + " with value " + value + " ===");
    const delta = value - this.nums[index];
    this.nums[index] = value;
    this.update(index, delta);
    console.log("Updated array:", this.nums);
  }

  printBIT() {
    console.log("\\n=== BIT Structure ===");
    for (let i = 1; i <= this.n; i++) {
      console.log("tree[" + i + "] = " + this.tree[i]);
    }
  }
}

// Alternative: Using prefix sum array (for immutable arrays)
class RangeSumPrefix {
  constructor(nums) {
    this.prefixSum = new Array(nums.length + 1);
    this.prefixSum[0] = 0;
    
    console.log("=== Building Prefix Sum Array ===");
    console.log("Array:", nums);
    
    for (let i = 0; i < nums.length; i++) {
      this.prefixSum[i + 1] = this.prefixSum[i] + nums[i];
      console.log("prefixSum[" + (i + 1) + "] = " + this.prefixSum[i + 1]);
    }
    
    console.log("Prefix sum array:", this.prefixSum);
  }

  sumRange(left, right) {
    console.log("\\n=== Prefix Sum Query [" + left + ", " + right + "] ===");
    const result = this.prefixSum[right + 1] - this.prefixSum[left];
    console.log("Range sum = prefixSum[" + (right + 1) + "] - prefixSum[" + left + "] = " + this.prefixSum[right + 1] + " - " + this.prefixSum[left] + " = " + result);
    return result;
  }
}

// Test cases
console.log("=== Testing Range Sum with BIT ===");

const nums = [-2, 0, 3, -5, 2, -1];
console.log("\\n--- Test Case 1: BIT Approach ---");
const rangeSumBIT = new RangeSumBIT(nums);
rangeSumBIT.printBIT();

console.log("\\n--- Initial Queries ---");
console.log("sumRange(0, 2):", rangeSumBIT.sumRange(0, 2));
console.log("sumRange(2, 5):", rangeSumBIT.sumRange(2, 5));
console.log("sumRange(0, 5):", rangeSumBIT.sumRange(0, 5));

console.log("\\n--- After Updates ---");
rangeSumBIT.updateVal(1, 2);
console.log("sumRange(0, 2):", rangeSumBIT.sumRange(0, 2));

rangeSumBIT.updateVal(3, 1);
console.log("sumRange(2, 5):", rangeSumBIT.sumRange(2, 5));

console.log("\\n--- Test Case 2: Prefix Sum Approach (Immutable) ---");
const rangeSumPrefix = new RangeSumPrefix(nums);
console.log("sumRange(0, 2):", rangeSumPrefix.sumRange(0, 2));
console.log("sumRange(2, 5):", rangeSumPrefix.sumRange(2, 5));
console.log("sumRange(0, 5):", rangeSumPrefix.sumRange(0, 5));`}
        explanation="BIT is efficient for range sum queries when updates are needed. For immutable arrays, prefix sum array is simpler and faster (O(1) query). BIT supports point updates in O(log n) time."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Range sum query with point updates using BIT. Compare with prefix sum approach for immutable arrays.",
              details: [
                "BIT: O(log n) query, O(log n) update",
                "Prefix sum: O(1) query, but O(n) update (not suitable)",
                "Use BIT when updates are needed",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "BIT for range sum: query(l, r) = prefixSum(r) - prefixSum(l-1). Prefix sum query uses two BIT queries.",
              keywords: [
                "binary indexed tree",
                "range sum",
                "prefix sum",
                "point update",
              ],
              details: [
                "Range query = difference of two prefix queries",
                "BIT efficiently supports prefix queries",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "BIT array tree[n+1] for prefix sums. Range query uses two prefix queries.",
              details: [
                "BIT stores prefix sums",
                "Range query: query(r) - query(l-1)",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Range query: return query(right) - query(left-1). Query: prefix sum using BIT (traverse backwards with LSB). Update: point update using BIT (propagate forward with LSB).",
              details: [
                "Range query: two prefix queries",
                "Each prefix query: O(log n)",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Time O(log n) for range query and update. Space O(n). For immutable arrays, prefix sum array is better (O(1) query).",
              details: [
                "BIT is optimal for mutable arrays",
                "Prefix sum is optimal for immutable arrays",
              ],
            },
          ],
          pattern: "Binary Indexed Tree (Range Sum)",
          complexity: {
            time: "O(log n) for query and update",
            space: "O(n)",
          },
        }}
      />

      <ProblemBlock
        title="2D Binary Indexed Tree"
        difficulty="Hard"
        description="Implement 2D Binary Indexed Tree for 2D range sum queries and point updates."
        solution={`// 2D Binary Indexed Tree

class BIT2D {
  constructor(matrix) {
    this.rows = matrix.length;
    this.cols = matrix[0].length;
    this.tree = Array(this.rows + 1).fill().map(() => Array(this.cols + 1).fill(0));
    this.matrix = matrix.map(row => [...row]);
    
    console.log("=== Building 2D Binary Indexed Tree ===");
    console.log("Matrix:");
    this.matrix.forEach((row, i) => console.log("  " + i + ":", row));
    
    this.build();
    this.print2DBIT();
  }

  getLSB(x) {
    return x & (-x);
  }

  build() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.update(i, j, this.matrix[i][j]);
      }
    }
  }

  update(row, col, delta) {
    console.log("\\n2D BIT Update: (" + row + ", " + col + "), delta " + delta);
    row++;
    col++;
    
    for (let i = row; i <= this.rows; i += this.getLSB(i)) {
      for (let j = col; j <= this.cols; j += this.getLSB(j)) {
        this.tree[i][j] += delta;
        console.log("  tree[" + i + "][" + j + "] = " + this.tree[i][j]);
      }
    }
  }

  query(row, col) {
    console.log("\\n2D BIT Query: prefix sum to (" + row + ", " + col + ")");
    let sum = 0;
    row++;
    col++;
    
    for (let i = row; i > 0; i -= this.getLSB(i)) {
      for (let j = col; j > 0; j -= this.getLSB(j)) {
        sum += this.tree[i][j];
        console.log("  sum += tree[" + i + "][" + j + "] = " + sum);
      }
    }
    
    return sum;
  }

  rangeSum(row1, col1, row2, col2) {
    console.log("\\n=== 2D Range Sum Query [(" + row1 + ", " + col1 + "), (" + row2 + ", " + col2 + ")] ===");
    
    const sum1 = this.query(row2, col2);
    const sum2 = row1 > 0 ? this.query(row1 - 1, col2) : 0;
    const sum3 = col1 > 0 ? this.query(row2, col1 - 1) : 0;
    const sum4 = (row1 > 0 && col1 > 0) ? this.query(row1 - 1, col1 - 1) : 0;
    
    const result = sum1 - sum2 - sum3 + sum4;
    console.log("Range sum = " + sum1 + " - " + sum2 + " - " + sum3 + " + " + sum4 + " = " + result);
    return result;
  }

  updateVal(row, col, value) {
    console.log("\\n=== 2D Point Update at (" + row + ", " + col + ") with value " + value + " ===");
    const delta = value - this.matrix[row][col];
    this.matrix[row][col] = value;
    this.update(row, col, delta);
    
    console.log("Updated matrix:");
    this.matrix.forEach((row, i) => console.log("  " + i + ":", row));
  }

  print2DBIT() {
    console.log("\\n=== 2D BIT Structure ===");
    for (let i = 1; i <= this.rows; i++) {
      let row = "Row " + i + ": ";
      for (let j = 1; j <= this.cols; j++) {
        row += this.tree[i][j] + " ";
      }
      console.log(row);
    }
  }
}

// Test cases
console.log("=== Testing 2D Binary Indexed Tree ===");

const matrix = [
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5]
];

const bit2d = new BIT2D(matrix);

console.log("\\n--- Testing 2D Range Queries ---");
console.log("Range [(2, 1), (4, 3)]:", bit2d.rangeSum(2, 1, 4, 3));
console.log("Range [(1, 1), (2, 2)]:", bit2d.rangeSum(1, 1, 2, 2));
console.log("Range [(1, 2), (2, 4)]:", bit2d.rangeSum(1, 2, 2, 4));

console.log("\\n--- Testing 2D Point Updates ---");
bit2d.updateVal(3, 2, 2);
console.log("Range [(2, 1), (4, 3)] after update:", bit2d.rangeSum(2, 1, 4, 3));

bit2d.updateVal(2, 1, 1);
console.log("Range [(1, 1), (2, 2)] after update:", bit2d.rangeSum(1, 1, 2, 2));`}
        explanation="2D BIT extends the concept to 2D matrices. Each cell (i,j) stores sum of rectangle from (1,1) to (i,j). Range sum uses inclusion-exclusion principle. Time: O(log m × log n) for both queries and updates."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "2D range sum queries and point updates on matrix. Each query asks for sum of rectangle from (r1,c1) to (r2,c2).",
              details: [
                "Example: matrix 5×5, query rectangle from (1,1) to (3,3)",
                "Support point updates: update value at (i,j)",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "2D BIT: tree[i][j] stores sum of rectangle from (1,1) to (i,j). Range query uses inclusion-exclusion: sum(r1,c1,r2,c2) = query(r2,c2) - query(r1-1,c2) - query(r2,c1-1) + query(r1-1,c1-1).",
              keywords: [
                "2D binary indexed tree",
                "2D range query",
                "inclusion-exclusion",
                "matrix",
              ],
              details: [
                "2D BIT: nested BIT structure",
                "Inclusion-exclusion: add/subtract overlapping regions",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "2D array tree[m+1][n+1] with 1-based indexing. Each cell stores sum of rectangle from (1,1) to (i,j).",
              details: [
                "1-based indexing for easier LSB calculation",
                "Size (m+1)×(n+1)",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Update: nested loops with LSB (i loop, j loop). Query: nested loops with LSB. Range query: use inclusion-exclusion with 4 queries.",
              details: [
                "Update: O(log m × log n) - nested BIT updates",
                "Range query: O(log m × log n) - 4 queries with inclusion-exclusion",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Time O(log m × log n) for query and update. Space O(m×n). For immutable matrices, 2D prefix sum is better (O(1) query).",
              details: [
                "Efficient for mutable 2D matrices",
                "Inclusion-exclusion principle is key",
              ],
            },
          ],
          pattern: "2D Binary Indexed Tree",
          complexity: {
            time: "O(log m × log n) for query and update",
            space: "O(m×n)",
          },
        }}
      />
    </div>
  );
}

function ApplicationsSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-white mb-6">Applications</h2>

      <ProblemBlock
        title="Count of Smaller Numbers After Self"
        difficulty="Hard"
        description="Given an array nums, return a new array counts where counts[i] is the number of smaller elements to the right of nums[i]."
        solution={`// Count of Smaller Numbers After Self

class Solution {
  countSmaller(nums) {
    console.log("=== Count of Smaller Numbers After Self ===");
    console.log("Input array:", nums);
    
    if (nums.length === 0) return [];
    
    // Coordinate compression
    const sorted = [...new Set(nums)].sort((a, b) => a - b);
    const rank = {};
    sorted.forEach((num, index) => {
      rank[num] = index + 1; // 1-based indexing for BIT
    });
    
    console.log("Sorted unique elements:", sorted);
    console.log("Rank mapping:", rank);
    
    const n = sorted.length;
    const bit = new Array(n + 1).fill(0);
    const result = [];
    
    // Process from right to left
    for (let i = nums.length - 1; i >= 0; i--) {
      const num = nums[i];
      const numRank = rank[num];
      
      console.log("\\nProcessing element " + num + " at index " + i + " with rank " + numRank);
      
      // Query count of smaller elements
      const count = this.query(bit, numRank - 1);
      result.unshift(count);
      console.log("Count of smaller elements: " + count);
      
      // Update BIT
      this.update(bit, numRank, 1);
      console.log("Updated BIT at rank " + numRank);
    }
    
    console.log("Result:", result);
    return result;
  }
  
  getLSB(x) {
    return x & (-x);
  }
  
  query(bit, index) {
    let sum = 0;
    while (index > 0) {
      sum += bit[index];
      index -= this.getLSB(index);
    }
    return sum;
  }
  
  update(bit, index, delta) {
    while (index < bit.length) {
      bit[index] += delta;
      index += this.getLSB(index);
    }
  }
}

// Alternative: Using Segment Tree
class SolutionSegmentTree {
  countSmaller(nums) {
    console.log("\\n=== Count of Smaller Numbers After Self (Segment Tree) ===");
    console.log("Input array:", nums);
    
    if (nums.length === 0) return [];
    
    // Coordinate compression
    const sorted = [...new Set(nums)].sort((a, b) => a - b);
    const rank = {};
    sorted.forEach((num, index) => {
      rank[num] = index;
    });
    
    console.log("Sorted unique elements:", sorted);
    console.log("Rank mapping:", rank);
    
    const n = sorted.length;
    const st = new Array(4 * n).fill(0);
    const result = [];
    
    // Process from right to left
    for (let i = nums.length - 1; i >= 0; i--) {
      const num = nums[i];
      const numRank = rank[num];
      
      console.log("\\nProcessing element " + num + " at index " + i + " with rank " + numRank);
      
      // Query count of smaller elements
      const count = this.query(st, 0, 0, n - 1, 0, numRank - 1);
      result.unshift(count);
      console.log("Count of smaller elements: " + count);
      
      // Update segment tree
      this.update(st, 0, 0, n - 1, numRank, 1);
      console.log("Updated segment tree at rank " + numRank);
    }
    
    console.log("Result:", result);
    return result;
  }
  
  query(st, node, start, end, left, right) {
    if (right < start || left > end) return 0;
    if (left <= start && end <= right) return st[node];
    
    const mid = Math.floor((start + end) / 2);
    return this.query(st, 2 * node + 1, start, mid, left, right) +
           this.query(st, 2 * node + 2, mid + 1, end, left, right);
  }
  
  update(st, node, start, end, index, delta) {
    if (start === end) {
      st[node] += delta;
    } else {
      const mid = Math.floor((start + end) / 2);
      if (index <= mid) {
        this.update(st, 2 * node + 1, start, mid, index, delta);
      } else {
        this.update(st, 2 * node + 2, mid + 1, end, index, delta);
      }
      st[node] = st[2 * node + 1] + st[2 * node + 2];
    }
  }
}

// Test cases
console.log("=== Testing Count of Smaller Numbers After Self ===");

const solution = new Solution();
const solutionST = new SolutionSegmentTree();

// Test case 1
const nums1 = [5, 2, 6, 1];
console.log("\\n--- Test Case 1 ---");
console.log("BIT approach:", solution.countSmaller(nums1));
console.log("Segment Tree approach:", solutionST.countSmaller(nums1));

// Test case 2
const nums2 = [-1];
console.log("\\n--- Test Case 2 ---");
console.log("BIT approach:", solution.countSmaller(nums2));
console.log("Segment Tree approach:", solutionST.countSmaller(nums2));

// Test case 3
const nums3 = [-1, -1];
console.log("\\n--- Test Case 3 ---");
console.log("BIT approach:", solution.countSmaller(nums3));
console.log("Segment Tree approach:", solutionST.countSmaller(nums3));`}
        explanation="Use coordinate compression to map values to ranks, then process from right to left. For each element, query count of smaller elements and update the data structure. BIT is more efficient for this problem."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "For each element, count how many elements to its right are smaller. Return array of counts.",
              details: [
                "Example: [5,2,6,1] → [2,1,1,0]",
                "Process from right to left",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Coordinate compression: map values to ranks (1..n). Process from right to left: for each element, query count of elements with rank < current rank, then update BIT/segment tree.",
              keywords: [
                "coordinate compression",
                "binary indexed tree",
                "segment tree",
                "inversion count",
              ],
              details: [
                "Compress values to ranks for efficient indexing",
                "Query: count of smaller elements seen so far",
                "Update: increment count for current element",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "BIT or Segment Tree to count frequencies. Coordinate compression maps original values to ranks 1..n.",
              details: [
                "BIT: more efficient, O(n) space",
                "Segment Tree: O(4n) space but same time",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Compress: sort unique values, map to ranks. Process from right to left: for each element, query BIT for count of ranks < current rank, add to result, update BIT at current rank.",
              details: [
                "Compression: O(n log n) time",
                "Query and update: O(log n) per element",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Time O(n log n) - compression + n queries/updates. Space O(n) for BIT. BIT is more efficient than segment tree for this problem.",
              details: [
                "BIT is optimal for frequency counting",
                "Coordinate compression is essential",
              ],
            },
          ],
          pattern: "BIT/Segment Tree with Coordinate Compression",
          complexity: {
            time: "O(n log n)",
            space: "O(n)",
          },
        }}
      />

      <ProblemBlock
        title="Range Sum Query 2D - Immutable"
        difficulty="Medium"
        description="Given a 2D matrix, find the sum of the elements inside the rectangle defined by its upper left corner and lower right corner."
        solution={`// Range Sum Query 2D - Immutable

class NumMatrix {
  constructor(matrix) {
    this.rows = matrix.length;
    this.cols = matrix[0].length;
    this.prefixSum = Array(this.rows + 1).fill().map(() => Array(this.cols + 1).fill(0));
    
    console.log("=== Building 2D Prefix Sum Array ===");
    console.log("Matrix:");
    matrix.forEach((row, i) => console.log("  " + i + ":", row));
    
    // Build prefix sum
    for (let i = 1; i <= this.rows; i++) {
      for (let j = 1; j <= this.cols; j++) {
        this.prefixSum[i][j] = matrix[i-1][j-1] + 
                              this.prefixSum[i-1][j] + 
                              this.prefixSum[i][j-1] - 
                              this.prefixSum[i-1][j-1];
        console.log("prefixSum[" + i + "][" + j + "] = " + this.prefixSum[i][j]);
      }
    }
    
    console.log("\\nPrefix Sum Matrix:");
    this.prefixSum.forEach((row, i) => console.log("  " + i + ":", row));
  }

  sumRegion(row1, col1, row2, col2) {
    console.log("\\n=== 2D Range Sum Query [(" + row1 + ", " + col1 + "), (" + row2 + ", " + col2 + ")] ===");
    
    // Convert to 1-based indexing
    row1++; col1++; row2++; col2++;
    
    const sum1 = this.prefixSum[row2][col2];
    const sum2 = this.prefixSum[row1-1][col2];
    const sum3 = this.prefixSum[row2][col1-1];
    const sum4 = this.prefixSum[row1-1][col1-1];
    
    const result = sum1 - sum2 - sum3 + sum4;
    console.log("Range sum = " + sum1 + " - " + sum2 + " - " + sum3 + " + " + sum4 + " = " + result);
    return result;
  }
}

// Alternative: Using 2D Binary Indexed Tree (for mutable matrices)
class NumMatrixMutable {
  constructor(matrix) {
    this.rows = matrix.length;
    this.cols = matrix[0].length;
    this.tree = Array(this.rows + 1).fill().map(() => Array(this.cols + 1).fill(0));
    this.matrix = matrix.map(row => [...row]);
    
    console.log("\\n=== Building 2D Binary Indexed Tree ===");
    console.log("Matrix:");
    this.matrix.forEach((row, i) => console.log("  " + i + ":", row));
    
    this.build();
  }

  getLSB(x) {
    return x & (-x);
  }

  build() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.update(i, j, this.matrix[i][j]);
      }
    }
  }

  update(row, col, delta) {
    row++; col++;
    for (let i = row; i <= this.rows; i += this.getLSB(i)) {
      for (let j = col; j <= this.cols; j += this.getLSB(j)) {
        this.tree[i][j] += delta;
      }
    }
  }

  query(row, col) {
    let sum = 0;
    row++; col++;
    for (let i = row; i > 0; i -= this.getLSB(i)) {
      for (let j = col; j > 0; j -= this.getLSB(j)) {
        sum += this.tree[i][j];
      }
    }
    return sum;
  }

  sumRegion(row1, col1, row2, col2) {
    console.log("\\n=== 2D BIT Range Sum Query [(" + row1 + ", " + col1 + "), (" + row2 + ", " + col2 + ")] ===");
    
    const sum1 = this.query(row2, col2);
    const sum2 = row1 > 0 ? this.query(row1 - 1, col2) : 0;
    const sum3 = col1 > 0 ? this.query(row2, col1 - 1) : 0;
    const sum4 = (row1 > 0 && col1 > 0) ? this.query(row1 - 1, col1 - 1) : 0;
    
    const result = sum1 - sum2 - sum3 + sum4;
    console.log("Range sum = " + sum1 + " - " + sum2 + " - " + sum3 + " + " + sum4 + " = " + result);
    return result;
  }

  updateVal(row, col, value) {
    console.log("\\n=== 2D BIT Update at (" + row + ", " + col + ") with value " + value + " ===");
    const delta = value - this.matrix[row][col];
    this.matrix[row][col] = value;
    this.update(row, col, delta);
  }
}

// Test cases
console.log("=== Testing 2D Range Sum Query ===");

const matrix = [
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5]
];

console.log("\\n--- Test Case 1: Immutable Matrix (Prefix Sum) ---");
const numMatrix = new NumMatrix(matrix);
console.log("sumRegion(2, 1, 4, 3):", numMatrix.sumRegion(2, 1, 4, 3));
console.log("sumRegion(1, 1, 2, 2):", numMatrix.sumRegion(1, 1, 2, 2));
console.log("sumRegion(1, 2, 2, 4):", numMatrix.sumRegion(1, 2, 2, 4));

console.log("\\n--- Test Case 2: Mutable Matrix (2D BIT) ---");
const numMatrixMutable = new NumMatrixMutable(matrix);
console.log("sumRegion(2, 1, 4, 3):", numMatrixMutable.sumRegion(2, 1, 4, 3));
console.log("sumRegion(1, 1, 2, 2):", numMatrixMutable.sumRegion(1, 1, 2, 2));

numMatrixMutable.updateVal(3, 2, 2);
console.log("After update (3,2) = 2:");
console.log("sumRegion(2, 1, 4, 3):", numMatrixMutable.sumRegion(2, 1, 4, 3));`}
        explanation="For immutable 2D matrices, prefix sum array is most efficient (O(1) query, O(mn) space). For mutable matrices, 2D BIT provides O(log m × log n) queries and updates. Both use inclusion-exclusion principle for range queries."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "2D range sum query on matrix. For immutable matrix, use 2D prefix sum. For mutable matrix, use 2D BIT.",
              details: [
                "Query: sum of rectangle from (r1,c1) to (r2,c2)",
                "Immutable: no updates",
                "Mutable: support point updates",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "2D prefix sum: precompute prefix[i][j] = sum from (0,0) to (i,j). Range query: inclusion-exclusion with 4 prefix queries. 2D BIT: same inclusion-exclusion but supports updates.",
              keywords: [
                "2D prefix sum",
                "2D binary indexed tree",
                "inclusion-exclusion",
                "range query",
              ],
              details: [
                "Prefix sum: O(1) query, O(mn) space",
                "2D BIT: O(log m × log n) query, O(mn) space",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Immutable: 2D prefix sum array prefix[m+1][n+1]. Mutable: 2D BIT tree[m+1][n+1].",
              details: [
                "Prefix sum: simpler for immutable",
                "2D BIT: necessary for mutable",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Prefix sum: build prefix[i][j] = matrix[i][j] + prefix[i-1][j] + prefix[i][j-1] - prefix[i-1][j-1]. Query: prefix[r2][c2] - prefix[r1-1][c2] - prefix[r2][c1-1] + prefix[r1-1][c1-1]. 2D BIT: same query logic but with BIT operations.",
              details: [
                "Inclusion-exclusion: add/subtract overlapping regions",
                "2D BIT: nested BIT operations",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Prefix sum: Time O(mn) build, O(1) query. Space O(mn). 2D BIT: Time O(log m × log n) query/update. Space O(mn). Use prefix sum for immutable, 2D BIT for mutable.",
              details: [
                "Prefix sum is optimal for immutable",
                "2D BIT is optimal for mutable",
              ],
            },
          ],
          pattern: "2D Range Sum (Prefix Sum / 2D BIT)",
          complexity: {
            time: "O(1) query (prefix), O(log m × log n) query (BIT)",
            space: "O(mn)",
          },
        }}
      />

      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h3 className="text-2xl font-bold text-white mb-4">
          Common Applications
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-lg font-semibold text-white mb-2">
              Segment Trees
            </h4>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li>• Range sum/min/max queries</li>
              <li>• Range updates with lazy propagation</li>
              <li>• Frequency counting in ranges</li>
              <li>• Longest increasing subsequence</li>
              <li>• Interval scheduling problems</li>
            </ul>
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-lg font-semibold text-white mb-2">
              Binary Indexed Trees
            </h4>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li>• Prefix sum queries</li>
              <li>• Point updates</li>
              <li>• Inversion count in arrays</li>
              <li>• Order statistics</li>
              <li>• 2D range queries</li>
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
        title="Fenwick Tree for Range Updates"
        difficulty="Hard"
        description="Implement range updates in Binary Indexed Tree using difference array technique."
        solution={`// Fenwick Tree for Range Updates

class RangeUpdateBIT {
  constructor(arr) {
    this.n = arr.length;
    this.bit1 = new Array(this.n + 1).fill(0); // For range updates
    this.bit2 = new Array(this.n + 1).fill(0); // For range updates
    this.arr = [...arr];
    
    console.log("=== Building Range Update BIT ===");
    console.log("Array:", this.arr);
    
    // Build difference array
    this.diff = new Array(this.n);
    this.diff[0] = this.arr[0];
    for (let i = 1; i < this.n; i++) {
      this.diff[i] = this.arr[i] - this.arr[i-1];
    }
    console.log("Difference array:", this.diff);
    
    this.build();
  }

  getLSB(x) {
    return x & (-x);
  }

  build() {
    for (let i = 0; i < this.n; i++) {
      this.updateRange(i, i, this.arr[i]);
    }
  }

  update(bit, index, delta) {
    index++;
    while (index <= this.n) {
      bit[index] += delta;
      index += this.getLSB(index);
    }
  }

  query(bit, index) {
    let sum = 0;
    index++;
    while (index > 0) {
      sum += bit[index];
      index -= this.getLSB(index);
    }
    return sum;
  }

  // Range update: add val to range [l, r]
  updateRange(l, r, val) {
    console.log("\\nRange Update: [" + l + ", " + r + "] += " + val);
    
    // Update BIT1
    this.update(this.bit1, l, val);
    this.update(this.bit1, r + 1, -val);
    
    // Update BIT2
    this.update(this.bit2, l, val * l);
    this.update(this.bit2, r + 1, -val * (r + 1));
    
    console.log("Updated BIT1 and BIT2");
  }

  // Point query: get value at index i
  pointQuery(index) {
    console.log("\\nPoint Query at index " + index);
    
    const sum1 = this.query(this.bit1, index) * (index + 1);
    const sum2 = this.query(this.bit2, index);
    const result = sum1 - sum2;
    
    console.log("Point query result: " + result);
    return result;
  }

  // Range query: get sum of range [l, r]
  rangeQuery(l, r) {
    console.log("\\n=== Range Query [" + l + ", " + r + "] ===");
    
    const rightSum = this.pointQuery(r);
    const leftSum = l > 0 ? this.pointQuery(l - 1) : 0;
    const result = rightSum - leftSum;
    
    console.log("Range query result: " + result);
    return result;
  }

  printBIT() {
    console.log("\\n=== Range Update BIT Structure ===");
    console.log("BIT1:", this.bit1.slice(1));
    console.log("BIT2:", this.bit2.slice(1));
  }
}

// Alternative: Using Segment Tree with Lazy Propagation
class LazySegmentTreeRange {
  constructor(arr) {
    this.n = arr.length;
    this.tree = new Array(4 * this.n).fill(0);
    this.lazy = new Array(4 * this.n).fill(0);
    this.arr = [...arr];
    
    console.log("\\n=== Building Lazy Segment Tree for Range Updates ===");
    console.log("Array:", this.arr);
    
    this.build(1, 0, this.n - 1);
  }

  build(node, start, end) {
    if (start === end) {
      this.tree[node] = this.arr[start];
    } else {
      const mid = Math.floor((start + end) / 2);
      this.build(2 * node, start, mid);
      this.build(2 * node + 1, mid + 1, end);
      this.tree[node] = this.tree[2 * node] + this.tree[2 * node + 1];
    }
  }

  pushLazy(node, start, end) {
    if (this.lazy[node] !== 0) {
      this.tree[node] += this.lazy[node] * (end - start + 1);
      
      if (start !== end) {
        this.lazy[2 * node] += this.lazy[node];
        this.lazy[2 * node + 1] += this.lazy[node];
      }
      
      this.lazy[node] = 0;
    }
  }

  rangeUpdate(node, start, end, left, right, val) {
    this.pushLazy(node, start, end);
    
    if (right < start || left > end) return;
    
    if (left <= start && end <= right) {
      this.lazy[node] += val;
      this.pushLazy(node, start, end);
      return;
    }
    
    const mid = Math.floor((start + end) / 2);
    this.rangeUpdate(2 * node, start, mid, left, right, val);
    this.rangeUpdate(2 * node + 1, mid + 1, end, left, right, val);
    
    this.pushLazy(2 * node, start, mid);
    this.pushLazy(2 * node + 1, mid + 1, end);
    this.tree[node] = this.tree[2 * node] + this.tree[2 * node + 1];
  }

  rangeQuery(node, start, end, left, right) {
    this.pushLazy(node, start, end);
    
    if (right < start || left > end) return 0;
    if (left <= start && end <= right) return this.tree[node];
    
    const mid = Math.floor((start + end) / 2);
    return this.rangeQuery(2 * node, start, mid, left, right) +
           this.rangeQuery(2 * node + 1, mid + 1, end, left, right);
  }

  updateRange(left, right, val) {
    console.log("\\nLazy ST Range Update: [" + left + ", " + right + "] += " + val);
    this.rangeUpdate(1, 0, this.n - 1, left, right, val);
  }

  queryRange(left, right) {
    console.log("\\nLazy ST Range Query: [" + left + ", " + right + "]");
    const result = this.rangeQuery(1, 0, this.n - 1, left, right);
    console.log("Range query result: " + result);
    return result;
  }
}

// Test cases
console.log("=== Testing Range Updates ===");

const arr = [1, 2, 3, 4, 5];
console.log("\\n--- Test Case 1: Range Update BIT ---");
const rangeUpdateBIT = new RangeUpdateBIT(arr);
rangeUpdateBIT.printBIT();

console.log("\\n--- Initial Queries ---");
console.log("Range [0, 2]:", rangeUpdateBIT.rangeQuery(0, 2));
console.log("Range [1, 4]:", rangeUpdateBIT.rangeQuery(1, 4));

console.log("\\n--- Range Updates ---");
rangeUpdateBIT.updateRange(0, 2, 2); // Add 2 to range [0, 2]
console.log("After range update [0, 2] += 2:");
console.log("Range [0, 2]:", rangeUpdateBIT.rangeQuery(0, 2));
console.log("Range [1, 4]:", rangeUpdateBIT.rangeQuery(1, 4));

rangeUpdateBIT.updateRange(1, 3, 1); // Add 1 to range [1, 3]
console.log("After range update [1, 3] += 1:");
console.log("Range [0, 2]:", rangeUpdateBIT.rangeQuery(0, 2));
console.log("Range [1, 4]:", rangeUpdateBIT.rangeQuery(1, 4));

console.log("\\n--- Test Case 2: Lazy Segment Tree ---");
const lazyST = new LazySegmentTreeRange(arr);
console.log("Range [0, 2]:", lazyST.queryRange(0, 2));
console.log("Range [1, 4]:", lazyST.queryRange(1, 4));

lazyST.updateRange(0, 2, 2);
console.log("After range update [0, 2] += 2:");
console.log("Range [0, 2]:", lazyST.queryRange(0, 2));
console.log("Range [1, 4]:", lazyST.queryRange(1, 4));`}
        explanation="Range updates in BIT use two BITs: one for the update value and one for the weighted update value. This allows O(log n) range updates and point queries. Lazy propagation in segment trees is more intuitive but uses more space."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Support range updates (add value to entire range) and point queries using BIT. BIT normally supports point updates, need technique for range updates.",
              details: [
                "Example: update range [0,2] by adding 5",
                "Query point at index 1 should reflect the update",
                "BIT needs special technique for range updates",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Use two BITs: BIT1 stores update values, BIT2 stores weighted update values. Range update [l, r] with value v: update BIT1 at l with +v, at r+1 with -v. Update BIT2 at l with +v×l, at r+1 with -v×(r+1). Point query at i: i×query(BIT1, i) - query(BIT2, i).",
              keywords: [
                "range update",
                "binary indexed tree",
                "two BITs",
                "weighted updates",
              ],
              details: [
                "Two BITs: one for values, one for weighted values",
                "Mathematical trick: difference array approach",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Two BIT arrays: bit1[n+1] and bit2[n+1]. Both use 1-based indexing.",
              details: [
                "BIT1: stores update deltas",
                "BIT2: stores weighted update deltas",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Range update [l, r] with v: update BIT1 at l with +v, at r+1 with -v. Update BIT2 at l with +v×l, at r+1 with -v×(r+1). Point query at i: return i×query(BIT1, i) - query(BIT2, i).",
              details: [
                "Update: O(log n) - two BIT updates",
                "Query: O(log n) - two BIT queries",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Time O(log n) for range update and point query. Space O(2n) for two BITs. More space-efficient than lazy segment tree (O(4n)), but less intuitive.",
              details: [
                "BIT range updates: less intuitive but space-efficient",
                "Lazy segment tree: more intuitive but uses more space",
              ],
            },
          ],
          pattern: "BIT Range Updates (Two BITs)",
          complexity: {
            time: "O(log n) for range update and point query",
            space: "O(2n)",
          },
        }}
      />

      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h3 className="text-2xl font-bold text-white mb-4">
          Optimization Techniques
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold text-purple-400 mb-3">
              Memory Optimization
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                • <strong>Coordinate Compression:</strong> Map large values to
                smaller indices
              </li>
              <li>
                • <strong>Persistence:</strong> Store multiple versions of the
                tree
              </li>
              <li>
                • <strong>Implicit Trees:</strong> Use array representation
                without explicit nodes
              </li>
              <li>
                • <strong>Memory Pooling:</strong> Reuse node objects
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-blue-400 mb-3">
              Performance Optimization
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                • <strong>Batch Operations:</strong> Process multiple updates
                together
              </li>
              <li>
                • <strong>Parallel Processing:</strong> Use multiple threads for
                large datasets
              </li>
              <li>
                • <strong>Cache Optimization:</strong> Improve memory access
                patterns
              </li>
              <li>
                • <strong>SIMD Instructions:</strong> Use vectorized operations
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
