"use client";

import { useState } from "react";

export default function GreedyPage() {
  const [activeSection, setActiveSection] = useState("fundamentals");

  const sections = [
    { id: "fundamentals", title: "Fundamentals", icon: "📚" },
    { id: "problems", title: "Classic Problems", icon: "🎯" },
    { id: "huffman", title: "Huffman Coding", icon: "📝" },
    { id: "advanced", title: "Advanced", icon: "⚡" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
            Greedy Algorithms Mastery
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Master greedy algorithms: Activity Selection, Knapsack Problems, Job
            Sequencing, Huffman Coding, and advanced greedy techniques
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
                  ? "bg-orange-600 text-white shadow-lg"
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
          {activeSection === "fundamentals" && <FundamentalsSection />}
          {activeSection === "problems" && <ProblemsSection />}
          {activeSection === "huffman" && <HuffmanSection />}
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
            className="px-4 py-2 bg-orange-600 hover:bg-orange-700 rounded-lg text-sm font-semibold transition-colors"
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

function FundamentalsSection() {
  return (
    <div className="space-y-8">
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Introduction to Greedy Algorithms
        </h2>
        <p className="text-gray-300 mb-6">
          A greedy algorithm is a simple, intuitive algorithm that makes the
          locally optimal choice at each step with the hope of finding a global
          optimum. Greedy algorithms are used for optimization problems.
        </p>

        <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-orange-200 mb-3">
            Greedy Algorithm Characteristics:
          </h3>
          <ul className="space-y-2 text-orange-100">
            <li>
              • <strong>Greedy Choice Property:</strong> A global optimum can be
              arrived at by selecting a local optimum
            </li>
            <li>
              • <strong>Optimal Substructure:</strong> An optimal solution
              contains optimal solutions to subproblems
            </li>
            <li>
              • <strong>No Backtracking:</strong> Once a choice is made,
              it&apos;s never reconsidered
            </li>
            <li>
              • <strong>Top-Down Approach:</strong> Problems are solved by
              making the best choice at each step
            </li>
            <li>
              • <strong>Efficiency:</strong> Often more efficient than other
              approaches
            </li>
          </ul>
        </div>

        <div className="mt-6 bg-gray-700 rounded-lg p-4">
          <h4 className="text-lg font-semibold text-white mb-3">
            When to Use Greedy Algorithms:
          </h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h5 className="font-semibold text-green-400 mb-2">
                ✅ Good for:
              </h5>
              <ul className="space-y-1 text-gray-300">
                <li>• Activity Selection Problem</li>
                <li>• Fractional Knapsack</li>
                <li>• Huffman Coding</li>
                <li>• Minimum Spanning Tree</li>
                <li>• Shortest Path (Dijkstra)</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-red-400 mb-2">
                ❌ Not good for:
              </h5>
              <ul className="space-y-1 text-gray-300">
                <li>• 0/1 Knapsack Problem</li>
                <li>• Traveling Salesman Problem</li>
                <li>• Longest Path Problem</li>
                <li>• Problems requiring backtracking</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Greedy Algorithm Template
        </h2>
        <p className="text-gray-300 mb-6">
          Here&apos;s a general template for implementing greedy algorithms:
        </p>

        <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
          <pre className="text-green-400 text-sm">
            <code>{`// General Greedy Algorithm Template

function greedyAlgorithm(input) {
  // Step 1: Sort the input based on some criteria
  input.sort((a, b) => {
    // Define sorting criteria based on problem
    return a.criteria - b.criteria; // or b.criteria - a.criteria
  });
  
  // Step 2: Initialize result and current state
  let result = [];
  let currentState = initialValue;
  
  // Step 3: Make greedy choices
  for (let item of input) {
    if (isValidChoice(item, currentState)) {
      result.push(item);
      currentState = updateState(currentState, item);
    }
  }
  
  return result;
}

// Helper functions
function isValidChoice(item, currentState) {
  // Check if this choice doesn't violate constraints
  return true; // Implement based on problem
}

function updateState(currentState, item) {
  // Update the current state after making a choice
  return currentState; // Implement based on problem
}

// Example usage
const activities = [
  { start: 1, end: 3, name: 'A' },
  { start: 2, end: 5, name: 'B' },
  { start: 0, end: 6, name: 'C' },
  { start: 5, end: 7, name: 'D' },
  { start: 8, end: 9, name: 'E' },
  { start: 5, end: 9, name: 'F' }
];

console.log("Greedy Algorithm Template Example");
console.log("Input:", activities);
console.log("Result:", greedyAlgorithm(activities));`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

function ProblemsSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-white mb-6">
        Classic Greedy Problems
      </h2>

      <ProblemBlock
        title="Activity Selection Problem"
        difficulty="Medium"
        description="Select maximum number of non-overlapping activities from a set of activities with start and end times."
        solution={`// Activity Selection Problem

// Approach 1: Sort by end time (Greedy)
function activitySelection(activities) {
  console.log("Activity Selection Problem - Greedy Approach");
  console.log("Original activities:", activities);
  
  // Sort activities by end time
  activities.sort((a, b) => a.end - b.end);
  console.log("Sorted by end time:", activities);
  
  const selected = [];
  let lastEndTime = 0;
  
  for (let i = 0; i < activities.length; i++) {
    const activity = activities[i];
    console.log("\\nChecking activity " + activity.name + ": start=" + activity.start + ", end=" + activity.end);
    console.log("Last end time: " + lastEndTime);
    
    if (activity.start >= lastEndTime) {
      selected.push(activity);
      lastEndTime = activity.end;
      console.log("✓ Selected activity " + activity.name);
      console.log("Updated last end time to: " + lastEndTime);
    } else {
      console.log("✗ Skipped activity " + activity.name + " (overlaps with previous)");
    }
  }
  
  console.log("\\nSelected activities: [" + selected.map(a => a.name).join(', ') + "]");
  console.log("Total activities selected: " + selected.length);
  
  return selected;
}

// Test cases
const activities = [
  { start: 1, end: 3, name: 'A' },
  { start: 2, end: 5, name: 'B' },
  { start: 0, end: 6, name: 'C' },
  { start: 5, end: 7, name: 'D' },
  { start: 8, end: 9, name: 'E' },
  { start: 5, end: 9, name: 'F' }
];

console.log("=== Testing Activity Selection Problem ===");
activitySelection([...activities]);`}
        explanation="Greedy approach: sort by end time, always select the activity with earliest end time that doesn't conflict. This guarantees optimal solution. Time: O(n log n), Space: O(1)."
      />

      <ProblemBlock
        title="Fractional Knapsack Problem"
        difficulty="Medium"
        description="Maximize value in knapsack by taking fractions of items. Items can be divided."
        solution={`// Fractional Knapsack Problem

function fractionalKnapsack(items, capacity) {
  console.log("Fractional Knapsack Problem");
  console.log("Items:", items);
  console.log("Knapsack capacity:", capacity);
  
  // Calculate value per unit weight
  const itemsWithRatio = items.map(item => ({
    ...item,
    ratio: item.value / item.weight
  }));
  
  console.log("\\nStep 1: Calculate value per unit weight");
  itemsWithRatio.forEach(item => {
    console.log(item.name + ": value=" + item.value + ", weight=" + item.weight + ", ratio=" + item.ratio.toFixed(2));
  });
  
  // Sort by value per unit weight (descending)
  itemsWithRatio.sort((a, b) => b.ratio - a.ratio);
  console.log("\\nStep 2: Sort by value per unit weight (descending)");
  console.log("Sorted items:", itemsWithRatio.map(item => item.name + "(" + item.ratio.toFixed(2) + ")"));
  
  let totalValue = 0;
  let remainingCapacity = capacity;
  const selectedItems = [];
  
  console.log("\\nStep 3: Greedy selection process");
  
  for (let i = 0; i < itemsWithRatio.length && remainingCapacity > 0; i++) {
    const item = itemsWithRatio[i];
    console.log("\\n--- Item " + (i + 1) + ": " + item.name + " ---");
    console.log("Value: " + item.value + ", Weight: " + item.weight + ", Ratio: " + item.ratio.toFixed(2));
    console.log("Remaining capacity: " + remainingCapacity);
    
    if (item.weight <= remainingCapacity) {
      // Take the entire item
      const fraction = 1;
      const value = item.value;
      const weight = item.weight;
      
      selectedItems.push({
        name: item.name,
        fraction: fraction,
        value: value,
        weight: weight
      });
      
      totalValue += value;
      remainingCapacity -= weight;
      
      console.log("✓ Took entire item: " + (fraction * 100) + "% of " + item.name);
      console.log("Added value: " + value + ", Added weight: " + weight);
    } else {
      // Take fraction of the item
      const fraction = remainingCapacity / item.weight;
      const value = fraction * item.value;
      const weight = remainingCapacity;
      
      selectedItems.push({
        name: item.name,
        fraction: fraction,
        value: value,
        weight: weight
      });
      
      totalValue += value;
      remainingCapacity = 0;
      
      console.log("✓ Took fraction: " + (fraction * 100).toFixed(1) + "% of " + item.name);
      console.log("Added value: " + value.toFixed(2) + ", Added weight: " + weight);
    }
    
    console.log("Total value so far: " + totalValue.toFixed(2));
    console.log("Remaining capacity: " + remainingCapacity);
  }
  
  console.log("\\n=== Final Result ===");
  console.log("Selected items:");
  selectedItems.forEach(item => {
    console.log("  " + item.name + ": " + (item.fraction * 100).toFixed(1) + "% (value: " + item.value.toFixed(2) + ", weight: " + item.weight.toFixed(2) + ")");
  });
  console.log("Total value: " + totalValue.toFixed(2));
  console.log("Total weight: " + (capacity - remainingCapacity).toFixed(2) + "/" + capacity);
  
  return { selectedItems, totalValue, totalWeight: capacity - remainingCapacity };
}

// Test cases
const items = [
  { name: 'A', value: 60, weight: 10 },
  { name: 'B', value: 100, weight: 20 },
  { name: 'C', value: 120, weight: 30 }
];

const capacity = 50;

console.log("=== Testing Fractional Knapsack ===");
fractionalKnapsack([...items], capacity);`}
        explanation="Greedy approach: sort by value per unit weight, always take the item with highest value/weight ratio. For fractional knapsack, this guarantees optimal solution. Time: O(n log n), Space: O(1)."
      />

      <ProblemBlock
        title="Job Sequencing Problem"
        difficulty="Medium"
        description="Schedule jobs to maximize profit with deadline constraints. Each job has a deadline and profit."
        solution={`// Job Sequencing Problem

function jobSequencing(jobs) {
  console.log("Job Sequencing Problem");
  console.log("Input jobs:", jobs);
  
  // Sort jobs by profit in descending order
  const sortedJobs = [...jobs].sort((a, b) => b.profit - a.profit);
  console.log("\\nStep 1: Sort jobs by profit (descending)");
  console.log("Sorted jobs:", sortedJobs.map(job => job.id + "(" + job.profit + ")"));
  
  // Find maximum deadline
  const maxDeadline = Math.max(...jobs.map(job => job.deadline));
  console.log("\\nStep 2: Maximum deadline = " + maxDeadline);
  
  // Initialize result array
  const result = new Array(maxDeadline).fill(null);
  let totalProfit = 0;
  let jobsScheduled = 0;
  
  console.log("\\nStep 3: Greedy scheduling process");
  
  for (let i = 0; i < sortedJobs.length; i++) {
    const job = sortedJobs[i];
    console.log("\\n--- Processing Job " + job.id + " ---");
    console.log("Profit: " + job.profit + ", Deadline: " + job.deadline);
    
    // Find latest available slot before deadline
    let slot = job.deadline - 1;
    while (slot >= 0 && result[slot] !== null) {
      slot--;
    }
    
    if (slot >= 0) {
      result[slot] = job;
      totalProfit += job.profit;
      jobsScheduled++;
      console.log("✓ Scheduled Job " + job.id + " at slot " + slot);
      console.log("Running total: " + jobsScheduled + " jobs, " + totalProfit + " profit");
    } else {
      console.log("✗ Cannot schedule Job " + job.id + " (no available slot before deadline " + job.deadline + ")");
    }
    
    console.log("Current schedule:", result.map((job, index) => 
      job ? "Slot " + index + ": Job " + job.id : "Slot " + index + ": Empty"
    ));
  }
  
  console.log("\\n=== Final Result ===");
  console.log("Optimal schedule:");
  result.forEach((job, index) => {
    if (job) {
      console.log("  Slot " + index + ": Job " + job.id + " (profit: " + job.profit + ")");
    }
  });
  console.log("Total jobs scheduled: " + jobsScheduled);
  console.log("Total profit: " + totalProfit);
  
  return {
    schedule: result.filter(job => job !== null),
    totalProfit,
    jobsScheduled
  };
}

// Test cases
const jobs = [
  { id: 'A', deadline: 2, profit: 100 },
  { id: 'B', deadline: 1, profit: 19 },
  { id: 'C', deadline: 2, profit: 27 },
  { id: 'D', deadline: 1, profit: 25 },
  { id: 'E', deadline: 3, profit: 15 }
];

console.log("=== Testing Job Sequencing ===");
jobSequencing([...jobs]);`}
        explanation="Greedy approach: sort by profit (descending), schedule each job at the latest possible slot before its deadline. This maximizes total profit. Time: O(n²), Space: O(n)."
      />
    </div>
  );
}

function HuffmanSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-white mb-6">Huffman Coding</h2>

      <ProblemBlock
        title="Huffman Coding Introduction"
        difficulty="Medium"
        description="Introduction to Huffman coding - a lossless data compression algorithm that assigns variable-length codes to characters based on their frequency."
        solution={`// Huffman Coding Introduction

class HuffmanNode {
  constructor(char = null, freq = 0, left = null, right = null) {
    this.char = char;      // Character (null for internal nodes)
    this.freq = freq;      // Frequency
    this.left = left;      // Left child
    this.right = right;    // Right child
  }
}

class HuffmanCoding {
  constructor(text) {
    this.text = text;
    this.frequencies = this.calculateFrequencies(text);
    this.root = null;
    this.codes = {};
  }

  // Calculate character frequencies
  calculateFrequencies(text) {
    const freq = {};
    for (let char of text) {
      freq[char] = (freq[char] || 0) + 1;
    }
    return freq;
  }

  // Build Huffman tree
  buildTree() {
    console.log("=== Building Huffman Tree ===");
    console.log("Character frequencies:", this.frequencies);
    
    // Create priority queue (min heap) with all leaf nodes
    const heap = [];
    for (let char in this.frequencies) {
      heap.push(new HuffmanNode(char, this.frequencies[char]));
    }
    
    // Sort by frequency (min heap)
    heap.sort((a, b) => a.freq - b.freq);
    console.log("Initial heap:", heap.map(node => node.char + ":" + node.freq));
    
    // Build tree by combining two nodes with minimum frequency
    while (heap.length > 1) {
      console.log("\\n--- Iteration " + (heap.length - 1) + " ---");
      console.log("Current heap:", heap.map(node => (node.char || 'Internal') + ":" + node.freq));
      
      // Extract two nodes with minimum frequency
      const left = heap.shift();
      const right = heap.shift();
      
      console.log("Combining: " + (left.char || 'Internal') + ":" + left.freq + " + " + (right.char || 'Internal') + ":" + right.freq);
      
      // Create new internal node
      const internal = new HuffmanNode(
        null, 
        left.freq + right.freq, 
        left, 
        right
      );
      
      // Insert back into heap
      heap.push(internal);
      heap.sort((a, b) => a.freq - b.freq);
      
      console.log("Created internal node: " + internal.freq);
      console.log("Updated heap:", heap.map(node => (node.char || 'Internal') + ":" + node.freq));
    }
    
    this.root = heap[0];
    console.log("\\nHuffman tree built. Root frequency: " + this.root.freq);
    return this.root;
  }

  // Generate Huffman codes
  generateCodes() {
    if (!this.root) {
      this.buildTree();
    }
    
    console.log("\\n=== Generating Huffman Codes ===");
    this.codes = {};
    this.generateCodesHelper(this.root, "");
    
    console.log("Huffman codes:");
    for (let char in this.codes) {
      console.log("  " + char + ": " + this.codes[char]);
    }
    
    return this.codes;
  }

  generateCodesHelper(node, code) {
    if (node.char !== null) {
      // Leaf node
      this.codes[node.char] = code;
      console.log("  " + node.char + ": " + code);
      return;
    }
    
    // Internal node - traverse left and right
    if (node.left) {
      this.generateCodesHelper(node.left, code + "0");
    }
    if (node.right) {
      this.generateCodesHelper(node.right, code + "1");
    }
  }

  // Encode text using Huffman codes
  encode() {
    if (Object.keys(this.codes).length === 0) {
      this.generateCodes();
    }
    
    console.log("\\n=== Encoding Text ===");
    console.log("Original text:", this.text);
    
    let encoded = "";
    for (let char of this.text) {
      encoded += this.codes[char];
      console.log(char + " -> " + this.codes[char]);
    }
    
    console.log("Encoded text: " + encoded);
    console.log("Original size: " + (this.text.length * 8) + " bits");
    console.log("Encoded size: " + encoded.length + " bits");
    console.log("Compression ratio: " + (encoded.length / (this.text.length * 8) * 100).toFixed(1) + "%");
    
    return encoded;
  }

  // Decode text using Huffman tree
  decode(encoded) {
    if (!this.root) {
      throw new Error("Huffman tree not built");
    }
    
    console.log("\\n=== Decoding Text ===");
    console.log("Encoded text:", encoded);
    
    let decoded = "";
    let current = this.root;
    
    for (let bit of encoded) {
      if (bit === "0") {
        current = current.left;
      } else {
        current = current.right;
      }
      
      if (current.char !== null) {
        decoded += current.char;
        console.log(bit + " -> " + current.char);
        current = this.root; // Reset to root
      }
    }
    
    console.log("Decoded text: " + decoded);
    return decoded;
  }

  // Calculate compression statistics
  getStats() {
    const originalSize = this.text.length * 8;
    const encoded = this.encode();
    const compressedSize = encoded.length;
    
    return {
      originalSize,
      compressedSize,
      compressionRatio: (compressedSize / originalSize * 100).toFixed(1) + "%",
      spaceSaved: originalSize - compressedSize
    };
  }
}

// Test Huffman Coding
const text = "hello world";
console.log("=== Huffman Coding Example ===");
console.log("Text to compress:", text);

const huffman = new HuffmanCoding(text);
huffman.buildTree();
huffman.generateCodes();
const encoded = huffman.encode();
const decoded = huffman.decode(encoded);

console.log("\\n=== Verification ===");
console.log("Original:", text);
console.log("Decoded:", decoded);
console.log("Match:", text === decoded);

const stats = huffman.getStats();
console.log("\\n=== Compression Statistics ===");
console.log("Original size:", stats.originalSize, "bits");
console.log("Compressed size:", stats.compressedSize, "bits");
console.log("Compression ratio:", stats.compressionRatio);
console.log("Space saved:", stats.spaceSaved, "bits");`}
        explanation="Huffman coding creates variable-length codes based on character frequency. More frequent characters get shorter codes. Uses min heap to build optimal binary tree. Time: O(n log n), Space: O(n)."
      />
    </div>
  );
}

function AdvancedSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-white mb-6">
        Advanced Greedy Problems
      </h2>

      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h3 className="text-2xl font-bold text-white mb-4">
          Greedy Algorithm Applications
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-lg font-semibold text-white mb-2">
              Scheduling Problems
            </h4>
            <p className="text-gray-300 text-sm">
              Activity selection, job scheduling, task assignment with deadlines
              and constraints.
            </p>
          </div>
          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-lg font-semibold text-white mb-2">
              Optimization Problems
            </h4>
            <p className="text-gray-300 text-sm">
              Fractional knapsack, minimum spanning tree, shortest path
              algorithms.
            </p>
          </div>
          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-lg font-semibold text-white mb-2">
              Compression Algorithms
            </h4>
            <p className="text-gray-300 text-sm">
              Huffman coding, data compression, file encoding and decoding.
            </p>
          </div>
          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-lg font-semibold text-white mb-2">
              Graph Algorithms
            </h4>
            <p className="text-gray-300 text-sm">
              Prim&apos;s MST, Kruskal&apos;s MST, Dijkstra&apos;s shortest
              path, topological sorting.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h3 className="text-2xl font-bold text-white mb-4">
          When to Use Greedy Algorithms
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold text-green-400 mb-3">
              ✅ Good Candidates
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li>• Problems with greedy choice property</li>
              <li>• Problems with optimal substructure</li>
              <li>• Optimization problems with local choices</li>
              <li>• Problems where greedy choice leads to global optimum</li>
              <li>• Scheduling and assignment problems</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-red-400 mb-3">
              ❌ Not Suitable
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li>• Problems requiring backtracking</li>
              <li>• Problems with overlapping subproblems</li>
              <li>• Problems where local optimum ≠ global optimum</li>
              <li>• Complex constraint satisfaction problems</li>
              <li>• Problems requiring exhaustive search</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h3 className="text-2xl font-bold text-white mb-4">
          Greedy vs Other Approaches
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-600">
                <th className="text-left py-2 text-white">Aspect</th>
                <th className="text-left py-2 text-white">Greedy</th>
                <th className="text-left py-2 text-white">
                  Dynamic Programming
                </th>
                <th className="text-left py-2 text-white">Divide & Conquer</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-gray-300">Time Complexity</td>
                <td className="py-2 text-green-400">Usually O(n log n)</td>
                <td className="py-2 text-yellow-400">Usually O(n²) or O(n³)</td>
                <td className="py-2 text-blue-400">Usually O(n log n)</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-gray-300">Space Complexity</td>
                <td className="py-2 text-green-400">Usually O(1) or O(n)</td>
                <td className="py-2 text-red-400">Usually O(n) or O(n²)</td>
                <td className="py-2 text-yellow-400">Usually O(log n)</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-gray-300">Optimality</td>
                <td className="py-2 text-yellow-400">Not always optimal</td>
                <td className="py-2 text-green-400">Always optimal</td>
                <td className="py-2 text-yellow-400">Depends on problem</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-gray-300">Backtracking</td>
                <td className="py-2 text-red-400">No backtracking</td>
                <td className="py-2 text-green-400">No backtracking</td>
                <td className="py-2 text-green-400">No backtracking</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
