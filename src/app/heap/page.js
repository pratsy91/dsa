"use client";

import { useState } from "react";

export default function HeapPage() {
  const [activeSection, setActiveSection] = useState("fundamentals");

  const sections = [
    { id: "fundamentals", title: "Fundamentals", icon: "📚" },
    { id: "operations", title: "Heap Operations", icon: "⚙️" },
    { id: "problems", title: "Heap Problems", icon: "🚀" },
    { id: "advanced", title: "Advanced Applications", icon: "💡" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Heaps & Priority Queues Mastery
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Master heap data structures, priority queues, heap sort, and solve
            advanced heap problems
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
          {activeSection === "fundamentals" && <FundamentalsSection />}
          {activeSection === "operations" && <OperationsSection />}
          {activeSection === "problems" && <ProblemsSection />}
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
                  ? "bg-green-500 text-white"
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
          {approach && (
            <div className="flex gap-2 mb-4 border-b border-gray-700">
              <button
                onClick={() => setActiveTab("solution")}
                className={`px-4 py-2 font-semibold transition-colors ${
                  activeTab === "solution"
                    ? "text-purple-300 border-b-2 border-purple-300"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                Solution
              </button>
              <button
                onClick={() => setActiveTab("approach")}
                className={`px-4 py-2 font-semibold transition-colors ${
                  activeTab === "approach"
                    ? "text-purple-300 border-b-2 border-purple-300"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                Approach
              </button>
            </div>
          )}

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

function ApproachTab({ approach }) {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-xl p-6 border border-purple-500/30">
        <h3 className="text-2xl font-bold text-white mb-2">
          🎯 Problem Solving Approach
        </h3>
        <p className="text-gray-300 text-sm">
          Following the systematic 5-step framework for this heap problem
        </p>
      </div>

      {approach.steps?.map((step, index) => (
        <div
          key={index}
          className="bg-gray-800 rounded-lg p-5 border border-gray-700"
        >
          <div className="flex items-start gap-4">
            <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
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
                        <span className="text-purple-400 mt-1">•</span>
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
                      className="px-2 py-1 bg-purple-500/20 text-purple-200 rounded text-xs"
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
        <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
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
        <div className="bg-pink-900/20 border border-pink-500/30 rounded-lg p-4">
          <h4 className="text-lg font-semibold text-pink-200 mb-2">
            🎨 Pattern Identified
          </h4>
          <p className="text-gray-300">{approach.pattern}</p>
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
          Binary Heap Introduction
        </h2>
        <p className="text-gray-300 mb-6">
          A Binary Heap is a complete binary tree that satisfies the heap
          property. It&apos;s commonly used to implement priority queues and
          heap sort.
        </p>

        <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-purple-200 mb-3">
            Heap Properties:
          </h3>
          <ul className="space-y-2 text-purple-100">
            <li>
              • <strong>Complete Binary Tree:</strong> All levels filled except
              possibly the last
            </li>
            <li>
              • <strong>Heap Property:</strong> Parent ≥ Children (Max Heap) or
              Parent ≤ Children (Min Heap)
            </li>
            <li>
              • <strong>Array Representation:</strong> Parent at index i,
              children at 2i+1 and 2i+2
            </li>
            <li>
              • <strong>Height:</strong> O(log n) for n elements
            </li>
            <li>
              • <strong>Root:</strong> Maximum (Max Heap) or Minimum (Min Heap)
              element
            </li>
          </ul>
        </div>

        <div className="mt-6 bg-gray-700 rounded-lg p-4">
          <h4 className="text-lg font-semibold text-white mb-3">
            Array Representation:
          </h4>
          <div className="bg-gray-900 rounded p-3 font-mono text-sm">
            <div className="text-green-400">{/* For node at index i: */}</div>
            <div className="text-blue-400">
              {/* Parent: Math.floor((i-1)/2) */}
            </div>
            <div className="text-blue-400">{/* Left Child: 2*i + 1 */}</div>
            <div className="text-blue-400">{/* Right Child: 2*i + 2 */}</div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Binary Heap Implementation
        </h2>
        <p className="text-gray-300 mb-6">
          Complete implementation of a Min Heap with all essential operations.
        </p>

        <CodeBlock
          code={{
            JavaScript: `// Binary Heap Implementation

class MinHeap {
  constructor() {
    this.heap = [];
  }

  // Get parent index
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  // Get left child index
  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  // Get right child index
  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  // Check if heap is empty
  isEmpty() {
    return this.heap.length === 0;
  }

  // Get heap size
  size() {
    return this.heap.length;
  }

  // Get minimum element (root)
  peek() {
    return this.heap.length > 0 ? this.heap[0] : null;
  }

  // Swap two elements
  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
  }

  // Insert element
  insert(value) {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }

  // Extract minimum element
  extractMin() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return min;
  }

  // Heapify up (for insert)
  heapifyUp(index) {
    while (index > 0) {
      const parentIndex = this.getParentIndex(index);
      if (this.heap[parentIndex] <= this.heap[index]) break;
      
      this.swap(parentIndex, index);
      index = parentIndex;
    }
  }

  // Heapify down (for extract)
  heapifyDown(index) {
    while (true) {
      let smallest = index;
      const leftChild = this.getLeftChildIndex(index);
      const rightChild = this.getRightChildIndex(index);

      if (leftChild < this.heap.length && this.heap[leftChild] < this.heap[smallest]) {
        smallest = leftChild;
      }

      if (rightChild < this.heap.length && this.heap[rightChild] < this.heap[smallest]) {
        smallest = rightChild;
      }

      if (smallest === index) break;

      this.swap(index, smallest);
      index = smallest;
    }
  }

  // Build heap from array
  buildHeap(arr) {
    this.heap = [...arr];
    for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
      this.heapifyDown(i);
    }
  }

  // Decrease key at index
  decreaseKey(index, newValue) {
    if (newValue > this.heap[index]) return false;
    
    this.heap[index] = newValue;
    this.heapifyUp(index);
    return true;
  }

  // Delete element at index
  delete(index) {
    if (index >= this.heap.length) return false;
    
    this.decreaseKey(index, Number.NEGATIVE_INFINITY);
    this.extractMin();
    return true;
  }

  // Print heap
  print() {
    console.log("Heap:", this.heap);
  }
}

// Test the implementation
const heap = new MinHeap();

console.log("=== Testing Min Heap ===");
heap.insert(10);
heap.insert(20);
heap.insert(5);
heap.insert(15);
heap.insert(1);

console.log("After insertions:");
heap.print();
console.log("Min element:", heap.peek());

console.log("\\nExtracting elements:");
while (!heap.isEmpty()) {
  console.log("Extracted:", heap.extractMin());
}`,
            Java: `import java.util.*;

// Binary Heap Implementation
class MinHeap {
    private List<Integer> heap;
    
    public MinHeap() {
        this.heap = new ArrayList<>();
    }
    
    // Get parent index
    private int getParentIndex(int index) {
        return (index - 1) / 2;
    }
    
    // Get left child index
    private int getLeftChildIndex(int index) {
        return 2 * index + 1;
    }
    
    // Get right child index
    private int getRightChildIndex(int index) {
        return 2 * index + 2;
    }
    
    // Check if heap is empty
    public boolean isEmpty() {
        return heap.isEmpty();
    }
    
    // Get heap size
    public int size() {
        return heap.size();
    }
    
    // Get minimum element (root)
    public Integer peek() {
        return heap.isEmpty() ? null : heap.get(0);
    }
    
    // Swap two elements
    private void swap(int index1, int index2) {
        int temp = heap.get(index1);
        heap.set(index1, heap.get(index2));
        heap.set(index2, temp);
    }
    
    // Insert element
    public void insert(int value) {
        heap.add(value);
        heapifyUp(heap.size() - 1);
    }
    
    // Extract minimum element
    public Integer extractMin() {
        if (heap.isEmpty()) return null;
        if (heap.size() == 1) return heap.remove(0);
        
        int min = heap.get(0);
        heap.set(0, heap.remove(heap.size() - 1));
        heapifyDown(0);
        return min;
    }
    
    // Heapify up (for insert)
    private void heapifyUp(int index) {
        while (index > 0) {
            int parentIndex = getParentIndex(index);
            if (heap.get(parentIndex) <= heap.get(index)) break;
            
            swap(parentIndex, index);
            index = parentIndex;
        }
    }
    
    // Heapify down (for extract)
    private void heapifyDown(int index) {
        while (true) {
            int smallest = index;
            int leftChild = getLeftChildIndex(index);
            int rightChild = getRightChildIndex(index);
            
            if (leftChild < heap.size() && heap.get(leftChild) < heap.get(smallest)) {
                smallest = leftChild;
            }
            
            if (rightChild < heap.size() && heap.get(rightChild) < heap.get(smallest)) {
                smallest = rightChild;
            }
            
            if (smallest == index) break;
            
            swap(index, smallest);
            index = smallest;
        }
    }
    
    // Build heap from array
    public void buildHeap(int[] arr) {
        heap.clear();
        for (int value : arr) {
            heap.add(value);
        }
        
        for (int i = heap.size() / 2 - 1; i >= 0; i--) {
            heapifyDown(i);
        }
    }
    
    // Decrease key at index
    public boolean decreaseKey(int index, int newValue) {
        if (index >= heap.size() || newValue > heap.get(index)) {
            return false;
        }
        
        heap.set(index, newValue);
        heapifyUp(index);
        return true;
    }
    
    // Delete element at index
    public boolean delete(int index) {
        if (index >= heap.size()) return false;
        
        decreaseKey(index, Integer.MIN_VALUE);
        extractMin();
        return true;
    }
    
    // Print heap
    public void print() {
        System.out.println("Heap: " + heap);
    }
    
    public static void main(String[] args) {
        MinHeap heap = new MinHeap();
        
        System.out.println("=== Testing Min Heap ===");
        heap.insert(10);
        heap.insert(20);
        heap.insert(5);
        heap.insert(15);
        heap.insert(1);
        
        System.out.println("After insertions:");
        heap.print();
        System.out.println("Min element: " + heap.peek());
        
        System.out.println("\\nExtracting elements:");
        while (!heap.isEmpty()) {
            System.out.println("Extracted: " + heap.extractMin());
        }
    }
}`,
          }}
        />
      </div>
    </div>
  );
}

function OperationsSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-white mb-6">Heap Operations</h2>

      <ProblemBlock
        title="1. Binary Heap Insert"
        difficulty="Easy"
        description="Insert an element into a binary heap and maintain heap property."
        solutions={{
          JavaScript: `// Binary Heap Insert

// Approach 1: Using class implementation
function insertIntoHeap(heap, value) {
  heap.push(value);
  heapifyUp(heap, heap.length - 1);
}

function heapifyUp(heap, index) {
  while (index > 0) {
    const parentIndex = Math.floor((index - 1) / 2);
    
    if (heap[parentIndex] <= heap[index]) break;
    
    // Swap with parent
    [heap[parentIndex], heap[index]] = [heap[index], heap[parentIndex]];
    index = parentIndex;
  }
}

// Approach 2: Detailed implementation with explanation
function insertWithExplanation(heap, value) {
  console.log(\`Inserting \${value} into heap: [\${heap.join(', ')}]\`);
  
  // Step 1: Add element to end
  heap.push(value);
  console.log(\`After adding to end: [\${heap.join(', ')}]\`);
  
  // Step 2: Heapify up
  let index = heap.length - 1;
  let steps = 0;
  
  while (index > 0) {
    const parentIndex = Math.floor((index - 1) / 2);
    steps++;
    
    console.log(\`Step \${steps}: Comparing \${heap[index]} with parent \${heap[parentIndex]}\`);
    
    if (heap[parentIndex] <= heap[index]) {
      console.log(\`Parent \${heap[parentIndex]} <= \${heap[index]}, heap property maintained\`);
      break;
    }
    
    // Swap with parent
    [heap[parentIndex], heap[index]] = [heap[index], heap[parentIndex]];
    console.log(\`Swapped: [\${heap.join(', ')}]\`);
    
    index = parentIndex;
  }
  
  console.log(\`Final heap: [\${heap.join(', ')}]\`);
  console.log(\`Total steps: \${steps}\`);
}

// Test cases
const heap1 = [10, 20, 30, 40, 50, 60, 70];
const heap2 = [1, 3, 6, 5, 2, 4];

console.log("=== Testing Heap Insert ===");
console.log("Original heap:", heap1);
insertIntoHeap(heap1, 5);
console.log("After inserting 5:", heap1);

console.log("\\n=== Detailed Insert Process ===");
const heap3 = [10, 20, 30, 40, 50, 60, 70];
insertWithExplanation(heap3, 5);`,
          Java: `import java.util.*;

public class HeapInsert {
    // Insert into heap
    public static void insertIntoHeap(List<Integer> heap, int value) {
        heap.add(value);
        heapifyUp(heap, heap.size() - 1);
    }
    
    private static void heapifyUp(List<Integer> heap, int index) {
        while (index > 0) {
            int parentIndex = (index - 1) / 2;
            
            if (heap.get(parentIndex) <= heap.get(index)) break;
            
            // Swap with parent
            int temp = heap.get(parentIndex);
            heap.set(parentIndex, heap.get(index));
            heap.set(index, temp);
            index = parentIndex;
        }
    }
    
    public static void main(String[] args) {
        List<Integer> heap = new ArrayList<>();
        heap.add(10);
        heap.add(20);
        heap.add(30);
        heap.add(40);
        heap.add(50);
        heap.add(60);
        heap.add(70);
        
        System.out.println("Original heap: " + heap);
        insertIntoHeap(heap, 5);
        System.out.println("After inserting 5: " + heap);
    }
}`,
        }}
        explanation="Insert element at end, then heapify up by comparing with parent and swapping if needed. Time: O(log n), Space: O(1)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Maintain the complete tree structure and heap property after inserting one key.",
              details: [
                "Insert position must be next available leaf (array append)",
                "Decide max heap vs min heap comparison direction",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Sift-up (percolate-up) pattern: compare node with parent, swap if heap property violated.",
              keywords: ["heapify-up", "percolate", "array heap"],
              details: [
                "Parent index = floor((i-1)/2)",
                "Continue until node becomes root or parent satisfies property",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Array-backed binary heap; children indices 2i+1 and 2i+2.",
              details: [
                "Append value with `heap.push(val)` (or `heap[size]=val` when using size counter)",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Append new value, set `i = size-1`, loop while `i>0` and compare with parent; swap when needed.",
              details: [
                "Max heap: swap while parent < child",
                "Min heap: swap while parent > child",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Swap via destructuring (JS) or temp variable; ensure loop terminates when no swap needed.",
              details: [
                "Time O(log n) because height is log n",
                "Space O(1) excluding heap array itself",
              ],
            },
          ],
          pattern: "Heap Insert via Sift-Up",
          complexity: {
            time: "O(log n)",
            space: "O(1)",
          },
        }}
      />

      <ProblemBlock
        title="2. Binary Heap Extract Min/Max"
        difficulty="Medium"
        description="Extract the minimum (or maximum) element from a binary heap and maintain heap property."
        solutions={{
          JavaScript: `// Binary Heap Extract Min/Max

// Extract minimum from min heap
function extractMin(heap) {
  if (heap.length === 0) return null;
  if (heap.length === 1) return heap.pop();

  // Store minimum element
  const min = heap[0];
  
  // Move last element to root
  heap[0] = heap.pop();
  
  // Heapify down from root
  heapifyDown(heap, 0);
  
  return min;
}

function heapifyDown(heap, index) {
  while (true) {
    let smallest = index;
    const leftChild = 2 * index + 1;
    const rightChild = 2 * index + 2;

    // Find smallest among node and its children
    if (leftChild < heap.length && heap[leftChild] < heap[smallest]) {
      smallest = leftChild;
    }

    if (rightChild < heap.length && heap[rightChild] < heap[smallest]) {
      smallest = rightChild;
    }

    // If node is smallest, heap property is maintained
    if (smallest === index) break;

    // Swap with smallest child
    [heap[index], heap[smallest]] = [heap[smallest], heap[index]];
    index = smallest;
  }
}

// Extract maximum from max heap
function extractMax(heap) {
  if (heap.length === 0) return null;
  if (heap.length === 1) return heap.pop();

  const max = heap[0];
  heap[0] = heap.pop();
  heapifyDownMax(heap, 0);
  
  return max;
}

function heapifyDownMax(heap, index) {
  while (true) {
    let largest = index;
    const leftChild = 2 * index + 1;
    const rightChild = 2 * index + 2;

    if (leftChild < heap.length && heap[leftChild] > heap[largest]) {
      largest = leftChild;
    }

    if (rightChild < heap.length && heap[rightChild] > heap[largest]) {
      largest = rightChild;
    }

    if (largest === index) break;

    [heap[index], heap[largest]] = [heap[largest], heap[index]];
    index = largest;
  }
}

// Detailed extract with explanation
function extractMinDetailed(heap) {
  console.log(\`Extracting min from heap: [\${heap.join(', ')}]\`);
  
  if (heap.length === 0) {
    console.log("Heap is empty");
    return null;
  }
  
  if (heap.length === 1) {
    const min = heap.pop();
    console.log(\`Only one element, extracted: \${min}\`);
    return min;
  }
  
  // Store minimum
  const min = heap[0];
  console.log(\`Minimum element: \${min}\`);
  
  // Move last element to root
  const lastElement = heap[heap.length - 1];
  heap[0] = lastElement;
  heap.pop();
  console.log(\`Moved \${lastElement} to root: [\${heap.join(', ')}]\`);
  
  // Heapify down
  let index = 0;
  let steps = 0;
  
  while (true) {
    let smallest = index;
    const leftChild = 2 * index + 1;
    const rightChild = 2 * index + 2;
    
    steps++;
    console.log(\`\\nStep \${steps}: Checking node at index \${index} (value: \${heap[index]})\`);
    
    if (leftChild < heap.length) {
      console.log(\`Left child at \${leftChild}: \${heap[leftChild]}\`);
      if (heap[leftChild] < heap[smallest]) {
        smallest = leftChild;
        console.log(\`Left child is smaller, updating smallest to \${smallest}\`);
      }
    }
    
    if (rightChild < heap.length) {
      console.log(\`Right child at \${rightChild}: \${heap[rightChild]}\`);
      if (heap[rightChild] < heap[smallest]) {
        smallest = rightChild;
        console.log(\`Right child is smaller, updating smallest to \${smallest}\`);
      }
    }
    
    if (smallest === index) {
      console.log(\`Node at \${index} is smallest, heap property maintained\`);
      break;
    }
    
    console.log(\`Swapping \${heap[index]} with \${heap[smallest]}\`);
    [heap[index], heap[smallest]] = [heap[smallest], heap[index]];
    console.log(\`After swap: [\${heap.join(', ')}]\`);
    
    index = smallest;
  }
  
  console.log(\`Final heap: [\${heap.join(', ')}]\`);
  console.log(\`Extracted minimum: \${min}\`);
  console.log(\`Total steps: \${steps}\`);
  
  return min;
}

// Test cases
const minHeap = [1, 3, 6, 5, 2, 4];
const maxHeap = [10, 8, 6, 4, 2, 1];

console.log("=== Testing Extract Min ===");
console.log("Original min heap:", minHeap);
const min = extractMin(minHeap);
console.log("Extracted min:", min);
console.log("Heap after extraction:", minHeap);

console.log("\\n=== Testing Extract Max ===");
console.log("Original max heap:", maxHeap);
const max = extractMax(maxHeap);
console.log("Extracted max:", max);
console.log("Heap after extraction:", maxHeap);

console.log("\\n=== Detailed Extract Process ===");
const heap = [1, 3, 6, 5, 2, 4];
extractMinDetailed(heap);`,
          Java: `import java.util.*;

public class HeapExtract {
    // Extract minimum from min heap
    public static Integer extractMin(List<Integer> heap) {
        if (heap.isEmpty()) return null;
        if (heap.size() == 1) return heap.remove(0);
        
        // Store minimum element
        int min = heap.get(0);
        
        // Move last element to root
        heap.set(0, heap.remove(heap.size() - 1));
        
        // Heapify down from root
        heapifyDown(heap, 0);
        
        return min;
    }
    
    private static void heapifyDown(List<Integer> heap, int index) {
        while (true) {
            int smallest = index;
            int leftChild = 2 * index + 1;
            int rightChild = 2 * index + 2;
            
            // Find smallest among node and its children
            if (leftChild < heap.size() && heap.get(leftChild) < heap.get(smallest)) {
                smallest = leftChild;
            }
            
            if (rightChild < heap.size() && heap.get(rightChild) < heap.get(smallest)) {
                smallest = rightChild;
            }
            
            // If node is smallest, heap property is maintained
            if (smallest == index) break;
            
            // Swap with smallest child
            int temp = heap.get(index);
            heap.set(index, heap.get(smallest));
            heap.set(smallest, temp);
            index = smallest;
        }
    }
    
    // Extract maximum from max heap
    public static Integer extractMax(List<Integer> heap) {
        if (heap.isEmpty()) return null;
        if (heap.size() == 1) return heap.remove(0);
        
        int max = heap.get(0);
        heap.set(0, heap.remove(heap.size() - 1));
        heapifyDownMax(heap, 0);
        
        return max;
    }
    
    private static void heapifyDownMax(List<Integer> heap, int index) {
        while (true) {
            int largest = index;
            int leftChild = 2 * index + 1;
            int rightChild = 2 * index + 2;
            
            if (leftChild < heap.size() && heap.get(leftChild) > heap.get(largest)) {
                largest = leftChild;
            }
            
            if (rightChild < heap.size() && heap.get(rightChild) > heap.get(largest)) {
                largest = rightChild;
            }
            
            if (largest == index) break;
            
            int temp = heap.get(index);
            heap.set(index, heap.get(largest));
            heap.set(largest, temp);
            index = largest;
        }
    }
    
    public static void main(String[] args) {
        List<Integer> minHeap = new ArrayList<>(Arrays.asList(1, 3, 6, 5, 2, 4));
        System.out.println("Original min heap: " + minHeap);
        Integer min = extractMin(minHeap);
        System.out.println("Extracted min: " + min);
        System.out.println("Heap after extraction: " + minHeap);
        
        List<Integer> maxHeap = new ArrayList<>(Arrays.asList(10, 8, 6, 4, 2, 1));
        System.out.println("\\nOriginal max heap: " + maxHeap);
        Integer max = extractMax(maxHeap);
        System.out.println("Extracted max: " + max);
        System.out.println("Heap after extraction: " + maxHeap);
    }
}`,
        }}
        explanation="Extract root element, move last element to root, then heapify down by comparing with children and swapping with smaller/larger child. Time: O(log n), Space: O(1)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Remove highest priority element (root) while preserving heap property and completeness.",
              details: ["After removing root, last element fills vacancy"],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Sift-down (heapify-down) pattern: compare node with children, swap with best child until property restored.",
              keywords: ["heapify-down", "sift", "percolate down"],
              details: [
                "Max heap swaps with larger child; min heap with smaller child",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Array heap; remove root by swapping arr[0] with arr[size-1], then popping last.",
              details: ["Children indices 2i+1, 2i+2 as usual"],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Swap root with last, pop last, set `i=0`, while children exist choose best child and swap if property violated.",
              details: ["If node already in correct position, stop early"],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Edge cases: empty heap (throw), single element (just pop).",
              details: ["Time O(log n) due to height; no extra space"],
            },
          ],
          pattern: "Heap Extract via Sift-Down",
          complexity: {
            time: "O(log n)",
            space: "O(1)",
          },
        }}
      />

      <ProblemBlock
        title="3. Binary Heap Decrease Key & Delete"
        difficulty="Medium"
        description="Decrease key at specific index and delete element from heap."
        solutions={{
          JavaScript: `// Binary Heap Decrease Key & Delete

// Decrease key at specific index
function decreaseKey(heap, index, newValue) {
  if (index >= heap.length || newValue > heap[index]) {
    console.log("Invalid operation: index out of bounds or new value is greater");
    return false;
  }
  
  console.log(\`Decreasing key at index \${index} from \${heap[index]} to \${newValue}\`);
  
  heap[index] = newValue;
  heapifyUp(heap, index);
  
  return true;
}

function heapifyUp(heap, index) {
  while (index > 0) {
    const parentIndex = Math.floor((index - 1) / 2);
    
    if (heap[parentIndex] <= heap[index]) break;
    
    [heap[parentIndex], heap[index]] = [heap[index], heap[parentIndex]];
    index = parentIndex;
  }
}

// Delete element at specific index
function deleteAtIndex(heap, index) {
  if (index >= heap.length) {
    console.log("Index out of bounds");
    return false;
  }
  
  console.log(\`Deleting element at index \${index}: \${heap[index]}\`);
  
  // Decrease key to negative infinity (minimum possible value)
  heap[index] = Number.NEGATIVE_INFINITY;
  
  // Move to root by heapifying up
  heapifyUp(heap, index);
  
  // Extract minimum (which is our deleted element)
  return extractMin(heap);
}

function extractMin(heap) {
  if (heap.length === 0) return null;
  if (heap.length === 1) return heap.pop();

  const min = heap[0];
  heap[0] = heap.pop();
  heapifyDown(heap, 0);
  
  return min;
}

function heapifyDown(heap, index) {
  while (true) {
    let smallest = index;
    const leftChild = 2 * index + 1;
    const rightChild = 2 * index + 2;

    if (leftChild < heap.length && heap[leftChild] < heap[smallest]) {
      smallest = leftChild;
    }

    if (rightChild < heap.length && heap[rightChild] < heap[smallest]) {
      smallest = rightChild;
    }

    if (smallest === index) break;

    [heap[index], heap[smallest]] = [heap[smallest], heap[index]];
    index = smallest;
  }
}

// Alternative delete method (swap with last element)
function deleteAtIndexAlternative(heap, index) {
  if (index >= heap.length) return false;
  
  console.log(\`Deleting element at index \${index}: \${heap[index]}\`);
  
  // Move last element to the position to be deleted
  const lastIndex = heap.length - 1;
  heap[index] = heap[lastIndex];
  heap.pop();
  
  // If we deleted the last element, we're done
  if (index === lastIndex) {
    console.log("Deleted last element");
    return true;
  }
  
  // Heapify up or down as needed
  const parentIndex = Math.floor((index - 1) / 2);
  
  if (index > 0 && heap[index] < heap[parentIndex]) {
    console.log("Heapifying up");
    heapifyUp(heap, index);
  } else {
    console.log("Heapifying down");
    heapifyDown(heap, index);
  }
  
  return true;
}

// Test cases
const heap = [1, 3, 6, 5, 2, 4, 7];

console.log("=== Testing Decrease Key ===");
console.log("Original heap:", heap);
decreaseKey(heap, 2, 0); // Decrease 6 to 0
console.log("After decreasing key at index 2:", heap);

console.log("\\n=== Testing Delete at Index ===");
const heap2 = [1, 3, 6, 5, 2, 4, 7];
console.log("Original heap:", heap2);
deleteAtIndex(heap2, 1); // Delete 3
console.log("After deleting element at index 1:", heap2);

console.log("\\n=== Testing Alternative Delete ===");
const heap3 = [1, 3, 6, 5, 2, 4, 7];
console.log("Original heap:", heap3);
deleteAtIndexAlternative(heap3, 2); // Delete 6
console.log("After deleting element at index 2:", heap3);`,
          Java: `import java.util.*;

public class HeapDecreaseKey {
    // Decrease key at specific index
    public static boolean decreaseKey(List<Integer> heap, int index, int newValue) {
        if (index >= heap.size() || newValue > heap.get(index)) {
            System.out.println("Invalid operation: index out of bounds or new value is greater");
            return false;
        }
        
        System.out.println("Decreasing key at index " + index + " from " + heap.get(index) + " to " + newValue);
        
        heap.set(index, newValue);
        heapifyUp(heap, index);
        
        return true;
    }
    
    private static void heapifyUp(List<Integer> heap, int index) {
        while (index > 0) {
            int parentIndex = (index - 1) / 2;
            
            if (heap.get(parentIndex) <= heap.get(index)) break;
            
            int temp = heap.get(parentIndex);
            heap.set(parentIndex, heap.get(index));
            heap.set(index, temp);
            index = parentIndex;
        }
    }
    
    // Delete element at specific index
    public static boolean deleteAtIndex(List<Integer> heap, int index) {
        if (index >= heap.size()) {
            System.out.println("Index out of bounds");
            return false;
        }
        
        System.out.println("Deleting element at index " + index + ": " + heap.get(index));
        
        // Decrease key to negative infinity (minimum possible value)
        heap.set(index, Integer.MIN_VALUE);
        
        // Move to root by heapifying up
        heapifyUp(heap, index);
        
        // Extract minimum (which is our deleted element)
        extractMin(heap);
        return true;
    }
    
    private static Integer extractMin(List<Integer> heap) {
        if (heap.isEmpty()) return null;
        if (heap.size() == 1) return heap.remove(0);
        
        int min = heap.get(0);
        heap.set(0, heap.remove(heap.size() - 1));
        heapifyDown(heap, 0);
        
        return min;
    }
    
    private static void heapifyDown(List<Integer> heap, int index) {
        while (true) {
            int smallest = index;
            int leftChild = 2 * index + 1;
            int rightChild = 2 * index + 2;
            
            if (leftChild < heap.size() && heap.get(leftChild) < heap.get(smallest)) {
                smallest = leftChild;
            }
            
            if (rightChild < heap.size() && heap.get(rightChild) < heap.get(smallest)) {
                smallest = rightChild;
            }
            
            if (smallest == index) break;
            
            int temp = heap.get(index);
            heap.set(index, heap.get(smallest));
            heap.set(smallest, temp);
            index = smallest;
        }
    }
    
    // Alternative delete method (swap with last element)
    public static boolean deleteAtIndexAlternative(List<Integer> heap, int index) {
        if (index >= heap.size()) return false;
        
        System.out.println("Deleting element at index " + index + ": " + heap.get(index));
        
        // Move last element to the position to be deleted
        int lastIndex = heap.size() - 1;
        heap.set(index, heap.get(lastIndex));
        heap.remove(lastIndex);
        
        // If we deleted the last element, we're done
        if (index == lastIndex) {
            System.out.println("Deleted last element");
            return true;
        }
        
        // Heapify up or down as needed
        int parentIndex = (index - 1) / 2;
        
        if (index > 0 && heap.get(index) < heap.get(parentIndex)) {
            System.out.println("Heapifying up");
            heapifyUp(heap, index);
        } else {
            System.out.println("Heapifying down");
            heapifyDown(heap, index);
        }
        
        return true;
    }
    
    public static void main(String[] args) {
        List<Integer> heap = new ArrayList<>(Arrays.asList(1, 3, 6, 5, 2, 4, 7));
        
        System.out.println("=== Testing Decrease Key ===");
        System.out.println("Original heap: " + heap);
        decreaseKey(heap, 2, 0); // Decrease 6 to 0
        System.out.println("After decreasing key at index 2: " + heap);
        
        System.out.println("\\n=== Testing Delete at Index ===");
        List<Integer> heap2 = new ArrayList<>(Arrays.asList(1, 3, 6, 5, 2, 4, 7));
        System.out.println("Original heap: " + heap2);
        deleteAtIndex(heap2, 1); // Delete 3
        System.out.println("After deleting element at index 1: " + heap2);
        
        System.out.println("\\n=== Testing Alternative Delete ===");
        List<Integer> heap3 = new ArrayList<>(Arrays.asList(1, 3, 6, 5, 2, 4, 7));
        System.out.println("Original heap: " + heap3);
        deleteAtIndexAlternative(heap3, 2); // Delete 6
        System.out.println("After deleting element at index 2: " + heap3);
    }
}`,
        }}
        explanation="Decrease key: update value and heapify up. Delete: decrease to negative infinity, heapify up to root, then extract min. Alternative: swap with last element and heapify. Time: O(log n), Space: O(1)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Decrease-key lowers value at index; delete removes node entirely without violating heap structure.",
              details: [
                "Deleting arbitrary index must still yield complete tree",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Decrease-key triggers sift-up (since key became smaller in min heap). Delete can be reduced to decrease-key followed by extract-root.",
              keywords: ["decrease key", "delete key", "sift up/down"],
              details: [
                "Alternatively swap with last element then heapify (down or up depending on value)",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Array heap with direct index access. Need helper to swap and update heap size.",
              details: [
                "For `delete(i)`: either decrease to -∞ (min heap) and extract min, or swap with last and adjust direction based on new value",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Decrease-key: set `heap[i]=newVal`; while i>0 and heap[i]<heap[parent], swap. Delete(i): decrease to -∞, sift up to root, then extractMin().",
              details: [
                "Max heap uses +∞ for delete trick",
                "Alternative path: swap with last, pop, and choose to sift-up/down depending on comparison with parent",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Guard invalid indices; ensure heap size updates correctly.",
              details: [
                "Time remains O(log n) due to single sift",
                "No extra space beyond heap array",
              ],
            },
          ],
          pattern: "Sift-Up/Sift-Down Adjustments for Key Updates",
          complexity: {
            time: "O(log n)",
            space: "O(1)",
          },
        }}
      />

      <ProblemBlock
        title="4. Heap Sort"
        difficulty="Medium"
        description="Sort an array using heap sort algorithm."
        solutions={{
          JavaScript: `// Heap Sort

// Main heap sort function
function heapSort(arr) {
  console.log(\`Original array: [\${arr.join(', ')}]\`);
  
  // Step 1: Build max heap
  buildMaxHeap(arr);
  console.log(\`After building max heap: [\${arr.join(', ')}]\`);
  
  // Step 2: Extract elements one by one
  for (let i = arr.length - 1; i > 0; i--) {
    // Move current root to end
    [arr[0], arr[i]] = [arr[i], arr[0]];
    console.log(\`Moved \${arr[i]} to position \${i}: [\${arr.join(', ')}]\`);
    
    // Heapify the reduced heap
    heapifyDown(arr, 0, i);
    console.log(\`After heapifying: [\${arr.join(', ')}]\`);
  }
  
  console.log(\`Final sorted array: [\${arr.join(', ')}]\`);
  return arr;
}

// Build max heap from array
function buildMaxHeap(arr) {
  const n = arr.length;
  
  // Start from last non-leaf node
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapifyDown(arr, i, n);
  }
}

// Heapify down for max heap
function heapifyDown(arr, index, heapSize) {
  while (true) {
    let largest = index;
    const leftChild = 2 * index + 1;
    const rightChild = 2 * index + 2;
    
    // Find largest among node and its children
    if (leftChild < heapSize && arr[leftChild] > arr[largest]) {
      largest = leftChild;
    }
    
    if (rightChild < heapSize && arr[rightChild] > arr[largest]) {
      largest = rightChild;
    }
    
    // If node is largest, heap property is maintained
    if (largest === index) break;
    
    // Swap with largest child
    [arr[index], arr[largest]] = [arr[largest], arr[index]];
    index = largest;
  }
}

// Alternative implementation with detailed steps
function heapSortDetailed(arr) {
  console.log("=== Heap Sort Detailed Process ===");
  console.log(\`Input array: [\${arr.join(', ')}]\`);
  
  const n = arr.length;
  
  // Build max heap
  console.log("\\n--- Building Max Heap ---");
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    console.log(\`Heapifying node at index \${i} (value: \${arr[i]})\`);
    heapifyDownDetailed(arr, i, n);
    console.log(\`After heapifying index \${i}: [\${arr.join(', ')}]\`);
  }
  
  console.log(\`Max heap built: [\${arr.join(', ')}]\`);
  
  // Extract elements
  console.log("\\n--- Extracting Elements ---");
  for (let i = n - 1; i > 0; i--) {
    console.log(\`\\nIteration \${n - i}: Moving root \${arr[0]} to position \${i}\`);
    
    // Swap root with last element
    [arr[0], arr[i]] = [arr[i], arr[0]];
    console.log(\`After swap: [\${arr.join(', ')}]\`);
    
    // Heapify the reduced heap
    console.log(\`Heapifying reduced heap (size: \${i})\`);
    heapifyDownDetailed(arr, 0, i);
    console.log(\`After heapifying: [\${arr.join(', ')}]\`);
  }
  
  console.log(\`\\nFinal sorted array: [\${arr.join(', ')}]\`);
  return arr;
}

function heapifyDownDetailed(arr, index, heapSize) {
  let steps = 0;
  
  while (true) {
    let largest = index;
    const leftChild = 2 * index + 1;
    const rightChild = 2 * index + 2;
    
    steps++;
    console.log(\`  Step \${steps}: Checking node at index \${index} (value: \${arr[index]})\`);
    
    if (leftChild < heapSize) {
      console.log(\`    Left child at \${leftChild}: \${arr[leftChild]}\`);
      if (arr[leftChild] > arr[largest]) {
        largest = leftChild;
        console.log(\`    Left child is larger, updating largest to \${largest}\`);
      }
    }
    
    if (rightChild < heapSize) {
      console.log(\`    Right child at \${rightChild}: \${arr[rightChild]}\`);
      if (arr[rightChild] > arr[largest]) {
        largest = rightChild;
        console.log(\`    Right child is larger, updating largest to \${largest}\`);
      }
    }
    
    if (largest === index) {
      console.log(\`    Node at \${index} is largest, heap property maintained\`);
      break;
    }
    
    console.log(\`    Swapping \${arr[index]} with \${arr[largest]}\`);
    [arr[index], arr[largest]] = [arr[largest], arr[index]];
    console.log(\`    After swap: [\${arr.join(', ')}]\`);
    
    index = largest;
  }
}

// Test cases
const arr1 = [64, 34, 25, 12, 22, 11, 90];
const arr2 = [5, 2, 8, 1, 9, 3, 7, 4, 6];

console.log("=== Testing Heap Sort ===");
console.log("Original array:", arr1);
heapSort([...arr1]);

console.log("\\n=== Detailed Heap Sort Process ===");
heapSortDetailed([...arr2]);`,
          Java: `import java.util.*;

public class HeapSort {
    // Main heap sort function
    public static void heapSort(int[] arr) {
        System.out.println("Original array: " + Arrays.toString(arr));
        
        // Step 1: Build max heap
        buildMaxHeap(arr);
        System.out.println("After building max heap: " + Arrays.toString(arr));
        
        // Step 2: Extract elements one by one
        for (int i = arr.length - 1; i > 0; i--) {
            // Move current root to end
            int temp = arr[0];
            arr[0] = arr[i];
            arr[i] = temp;
            System.out.println("Moved " + arr[i] + " to position " + i + ": " + Arrays.toString(arr));
            
            // Heapify the reduced heap
            heapifyDown(arr, 0, i);
            System.out.println("After heapifying: " + Arrays.toString(arr));
        }
        
        System.out.println("Final sorted array: " + Arrays.toString(arr));
    }
    
    // Build max heap from array
    private static void buildMaxHeap(int[] arr) {
        int n = arr.length;
        
        // Start from last non-leaf node
        for (int i = n / 2 - 1; i >= 0; i--) {
            heapifyDown(arr, i, n);
        }
    }
    
    // Heapify down for max heap
    private static void heapifyDown(int[] arr, int index, int heapSize) {
        while (true) {
            int largest = index;
            int leftChild = 2 * index + 1;
            int rightChild = 2 * index + 2;
            
            // Find largest among node and its children
            if (leftChild < heapSize && arr[leftChild] > arr[largest]) {
                largest = leftChild;
            }
            
            if (rightChild < heapSize && arr[rightChild] > arr[largest]) {
                largest = rightChild;
            }
            
            // If node is largest, heap property is maintained
            if (largest == index) break;
            
            // Swap with largest child
            int temp = arr[index];
            arr[index] = arr[largest];
            arr[largest] = temp;
            index = largest;
        }
    }
    
    public static void main(String[] args) {
        int[] arr1 = {64, 34, 25, 12, 22, 11, 90};
        int[] arr2 = {5, 2, 8, 1, 9, 3, 7, 4, 6};
        
        System.out.println("=== Testing Heap Sort ===");
        System.out.println("Original array: " + Arrays.toString(arr1));
        heapSort(arr1.clone());
        
        System.out.println("\\n=== Testing Heap Sort 2 ===");
        System.out.println("Original array: " + Arrays.toString(arr2));
        heapSort(arr2.clone());
    }
}`,
        }}
        explanation="Build max heap, then repeatedly extract maximum and place at end. Use heapify down to maintain heap property. Time: O(n log n), Space: O(1)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Sort array in-place using heap. Build max heap so largest element at root, then move it to array end iteratively.",
              details: ["Result should be ascending order when using max heap"],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Two-phase algorithm: heapify array bottom-up (build heap), then shrink heap while swapping root with last item.",
              keywords: ["build-heap", "heapify down", "in-place sort"],
              details: [
                "Build heap: start from last internal node floor(n/2)-1 down to 0 calling heapify",
                "Sorting phase uses repeated `swap(0, end)` + `heapifyDown(0, heapSize)`",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description: "Use same array; no extra heap structure needed.",
              details: [
                "heapifyDown uses children indices 2i+1 / 2i+2 but limited to current heap size",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Build heap O(n), then for i = n-1 down to 1 swap arr[0] with arr[i], reduce heap size, heapify at root.",
              details: ["After each iteration, arr[i..n-1] is sorted tail"],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Heapify uses iterative compare with larger child; ensure boundaries with `heapSize` argument.",
              details: [
                "Overall time O(n log n); building heap is O(n)",
                "Space O(1) extra",
              ],
            },
          ],
          pattern: "Heap Sort via Build-Heap + Repeated Extract",
          complexity: {
            time: "O(n log n)",
            space: "O(1)",
          },
        }}
      />
    </div>
  );
}

function ProblemsSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-white mb-6">Heap Problems</h2>

      <ProblemBlock
        title="1. Sort K-Sorted Array"
        difficulty="Medium"
        description="Sort an array where each element is at most k positions away from its sorted position."
        solutions={{
          JavaScript: `// Sort K-Sorted Array

// Approach 1: Using Min Heap
function sortKSortedArray(arr, k) {
  const n = arr.length;
  const minHeap = [];
  const result = [];
  
  console.log(\`Sorting k-sorted array: [\${arr.join(', ')}], k = \${k}\`);
  
  // Insert first k+1 elements into heap
  for (let i = 0; i <= Math.min(k, n - 1); i++) {
    minHeap.push(arr[i]);
  }
  
  // Build min heap
  buildMinHeap(minHeap);
  console.log(\`Initial heap: [\${minHeap.join(', ')}]\`);
  
  // Extract minimum and add next element
  for (let i = k + 1; i < n; i++) {
    // Extract minimum
    const min = extractMin(minHeap);
    result.push(min);
    console.log(\`Extracted \${min}, heap: [\${minHeap.join(', ')}]\`);
    
    // Add next element
    minHeap.push(arr[i]);
    heapifyUp(minHeap, minHeap.length - 1);
    console.log(\`Added \${arr[i]}, heap: [\${minHeap.join(', ')}]\`);
  }
  
  // Extract remaining elements
  while (minHeap.length > 0) {
    const min = extractMin(minHeap);
    result.push(min);
    console.log(\`Extracted \${min}, heap: [\${minHeap.join(', ')}]\`);
  }
  
  console.log(\`Final sorted array: [\${result.join(', ')}]\`);
  return result;
}

// Approach 2: Using Priority Queue (simulated with array)
function sortKSortedArrayPQ(arr, k) {
  const n = arr.length;
  const pq = []; // Priority queue (min heap)
  const result = [];
  
  // Insert first k+1 elements
  for (let i = 0; i <= Math.min(k, n - 1); i++) {
    insert(pq, arr[i]);
  }
  
  // Process remaining elements
  for (let i = k + 1; i < n; i++) {
    result.push(extractMin(pq));
    insert(pq, arr[i]);
  }
  
  // Extract remaining elements
  while (pq.length > 0) {
    result.push(extractMin(pq));
  }
  
  return result;
}

// Helper functions for min heap
function buildMinHeap(arr) {
  for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
    heapifyDown(arr, i);
  }
}

function extractMin(heap) {
  if (heap.length === 0) return null;
  if (heap.length === 1) return heap.pop();
  
  const min = heap[0];
  heap[0] = heap.pop();
  heapifyDown(heap, 0);
  return min;
}

function insert(heap, value) {
  heap.push(value);
  heapifyUp(heap, heap.length - 1);
}

function heapifyUp(heap, index) {
  while (index > 0) {
    const parentIndex = Math.floor((index - 1) / 2);
    if (heap[parentIndex] <= heap[index]) break;
    
    [heap[parentIndex], heap[index]] = [heap[index], heap[parentIndex]];
    index = parentIndex;
  }
}

function heapifyDown(heap, index) {
  while (true) {
    let smallest = index;
    const leftChild = 2 * index + 1;
    const rightChild = 2 * index + 2;
    
    if (leftChild < heap.length && heap[leftChild] < heap[smallest]) {
      smallest = leftChild;
    }
    
    if (rightChild < heap.length && heap[rightChild] < heap[smallest]) {
      smallest = rightChild;
    }
    
    if (smallest === index) break;
    
    [heap[index], heap[smallest]] = [heap[smallest], heap[index]];
    index = smallest;
  }
}

// Test cases
const arr1 = [6, 5, 3, 2, 8, 10, 9];
const arr2 = [10, 9, 8, 7, 4, 70, 50, 60];
const arr3 = [1, 4, 5, 2, 3, 7, 8, 6, 10, 9];

console.log("=== Testing Sort K-Sorted Array ===");
console.log("Array 1:", arr1, "k = 3");
sortKSortedArray([...arr1], 3);

console.log("\\nArray 2:", arr2, "k = 4");
sortKSortedArray([...arr2], 4);

console.log("\\nArray 3:", arr3, "k = 2");
sortKSortedArray([...arr3], 2);`,
          Java: `import java.util.*;

public class SortKSortedArray {
    // Using Min Heap
    public static List<Integer> sortKSortedArray(int[] arr, int k) {
        int n = arr.length;
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();
        List<Integer> result = new ArrayList<>();
        
        System.out.println("Sorting k-sorted array: " + Arrays.toString(arr) + ", k = " + k);
        
        // Insert first k+1 elements into heap
        for (int i = 0; i <= Math.min(k, n - 1); i++) {
            minHeap.offer(arr[i]);
        }
        
        System.out.println("Initial heap: " + minHeap);
        
        // Extract minimum and add next element
        for (int i = k + 1; i < n; i++) {
            // Extract minimum
            int min = minHeap.poll();
            result.add(min);
            System.out.println("Extracted " + min + ", heap: " + minHeap);
            
            // Add next element
            minHeap.offer(arr[i]);
            System.out.println("Added " + arr[i] + ", heap: " + minHeap);
        }
        
        // Extract remaining elements
        while (!minHeap.isEmpty()) {
            int min = minHeap.poll();
            result.add(min);
            System.out.println("Extracted " + min + ", heap: " + minHeap);
        }
        
        System.out.println("Final sorted array: " + result);
        return result;
    }
    
    public static void main(String[] args) {
        int[] arr1 = {6, 5, 3, 2, 8, 10, 9};
        int[] arr2 = {10, 9, 8, 7, 4, 70, 50, 60};
        int[] arr3 = {1, 4, 5, 2, 3, 7, 8, 6, 10, 9};
        
        System.out.println("=== Testing Sort K-Sorted Array ===");
        System.out.println("Array 1: " + Arrays.toString(arr1) + ", k = 3");
        sortKSortedArray(arr1, 3);
        
        System.out.println("\\nArray 2: " + Arrays.toString(arr2) + ", k = 4");
        sortKSortedArray(arr2, 4);
        
        System.out.println("\\nArray 3: " + Arrays.toString(arr3) + ", k = 2");
        sortKSortedArray(arr3, 2);
    }
}`,
        }}
        explanation="Use min heap of size k+1. Insert first k+1 elements, then for each remaining element: extract min, add to result, insert new element. Time: O(n log k), Space: O(k)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Array is nearly sorted: each element is at most k positions from its target position.",
              details: [
                "Goal: fully sort faster than O(n log n) by leveraging limited disorder",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Use min heap of size k+1 to obtain next smallest element since it must lie within current window.",
              keywords: ["k-sorted", "min heap", "sliding window"],
              details: [
                "At any index, the smallest available element among next k+1 entries belongs next in sorted output",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Min heap storing up to k+1 elements; output array or in-place writes.",
              details: [
                "Push initial k+1 numbers, then for each new number push after extracting min",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Process array left→right: fill heap with first k+1 items, then for each remaining item extract min to result and push current element.",
              details: ["After loop, extract remaining heap elements in order"],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Use priority queue (min-heap). Complexity O(n log k).",
              details: [
                "If k small relative to n, big speedup compared with general sort",
              ],
            },
          ],
          pattern: "Min-Heap Sorting of Nearly Sorted Array",
          complexity: {
            time: "O(n log k)",
            space: "O(k)",
          },
        }}
      />

      <ProblemBlock
        title="2. Buy Maximum Items with Given Sum"
        difficulty="Easy"
        description="Find maximum number of items that can be bought with given sum."
        solutions={{
          JavaScript: `// Buy Maximum Items with Given Sum

// Approach 1: Using Min Heap
function buyMaximumItems(price, sum) {
  console.log(\`Prices: [\${price.join(', ')}], Sum: \${sum}\`);
  
  // Build min heap from prices
  const minHeap = [...price];
  buildMinHeap(minHeap);
  console.log(\`Min heap: [\${minHeap.join(', ')}]\`);
  
  let count = 0;
  let remainingSum = sum;
  
  // Buy items starting from cheapest
  while (minHeap.length > 0 && remainingSum >= minHeap[0]) {
    const cheapest = extractMin(minHeap);
    remainingSum -= cheapest;
    count++;
    console.log(\`Bought item with price \${cheapest}, remaining sum: \${remainingSum}\`);
  }
  
  console.log(\`Maximum items that can be bought: \${count}\`);
  return count;
}

// Approach 2: Using Sorting
function buyMaximumItemsSort(price, sum) {
  console.log(\`Prices: [\${price.join(', ')}], Sum: \${sum}\`);
  
  // Sort prices in ascending order
  const sortedPrices = [...price].sort((a, b) => a - b);
  console.log(\`Sorted prices: [\${sortedPrices.join(', ')}]\`);
  
  let count = 0;
  let remainingSum = sum;
  
  // Buy items starting from cheapest
  for (let i = 0; i < sortedPrices.length; i++) {
    if (remainingSum >= sortedPrices[i]) {
      remainingSum -= sortedPrices[i];
      count++;
      console.log(\`Bought item with price \${sortedPrices[i]}, remaining sum: \${remainingSum}\`);
    } else {
      break;
    }
  }
  
  console.log(\`Maximum items that can be bought: \${count}\`);
  return count;
}

// Approach 3: Using Priority Queue with detailed steps
function buyMaximumItemsDetailed(price, sum) {
  console.log("=== Buy Maximum Items - Detailed Process ===");
  console.log(\`Available items with prices: [\${price.join(', ')}]\`);
  console.log(\`Available sum: \${sum}\`);
  
  // Create min heap
  const minHeap = [...price];
  buildMinHeap(minHeap);
  console.log(\`\\nMin heap created: [\${minHeap.join(', ')}]\`);
  
  let count = 0;
  let remainingSum = sum;
  let totalSpent = 0;
  
  console.log("\\n--- Buying Process ---");
  
  while (minHeap.length > 0) {
    const cheapest = minHeap[0];
    console.log(\`\\nCheapest item available: \${cheapest}\`);
    console.log(\`Remaining sum: \${remainingSum}\`);
    
    if (remainingSum >= cheapest) {
      // Buy the item
      extractMin(minHeap);
      remainingSum -= cheapest;
      totalSpent += cheapest;
      count++;
      
      console.log(\`✓ Bought item for \${cheapest}\`);
      console.log(\`  Remaining sum: \${remainingSum}\`);
      console.log(\`  Total spent: \${totalSpent}\`);
      console.log(\`  Items bought: \${count}\`);
      console.log(\`  Remaining items: [\${minHeap.join(', ')}]\`);
    } else {
      console.log(\`✗ Cannot afford \${cheapest} (need \${cheapest}, have \${remainingSum})\`);
      break;
    }
  }
  
  console.log(\`\\n=== Final Result ===\`);
  console.log(\`Maximum items that can be bought: \${count}\`);
  console.log(\`Total amount spent: \${totalSpent}\`);
  console.log(\`Remaining sum: \${remainingSum}\`);
  
  return count;
}

// Helper functions
function buildMinHeap(arr) {
  for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
    heapifyDown(arr, i);
  }
}

function extractMin(heap) {
  if (heap.length === 0) return null;
  if (heap.length === 1) return heap.pop();
  
  const min = heap[0];
  heap[0] = heap.pop();
  heapifyDown(heap, 0);
  return min;
}

function heapifyDown(heap, index) {
  while (true) {
    let smallest = index;
    const leftChild = 2 * index + 1;
    const rightChild = 2 * index + 2;
    
    if (leftChild < heap.length && heap[leftChild] < heap[smallest]) {
      smallest = leftChild;
    }
    
    if (rightChild < heap.length && heap[rightChild] < heap[smallest]) {
      smallest = rightChild;
    }
    
    if (smallest === index) break;
    
    [heap[index], heap[smallest]] = [heap[smallest], heap[index]];
    index = smallest;
  }
}

// Test cases
const prices1 = [1, 12, 5, 111, 200, 1000, 10];
const sum1 = 50;

const prices2 = [20, 10, 5, 30, 100];
const sum2 = 35;

const prices3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum3 = 25;

console.log("=== Testing Buy Maximum Items ===");
buyMaximumItems([...prices1], sum1);

console.log("\\n=== Testing with Sorting ===");
buyMaximumItemsSort([...prices2], sum2);

console.log("\\n=== Detailed Process ===");
buyMaximumItemsDetailed([...prices3], sum3);`,
          Java: `import java.util.*;

public class BuyMaximumItems {
    // Using Min Heap
    public static int buyMaximumItems(int[] price, int sum) {
        System.out.println("Prices: " + Arrays.toString(price) + ", Sum: " + sum);
        
        // Build min heap from prices
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();
        for (int p : price) {
            minHeap.offer(p);
        }
        
        System.out.println("Min heap: " + minHeap);
        
        int count = 0;
        int remainingSum = sum;
        
        // Buy items starting from cheapest
        while (!minHeap.isEmpty() && remainingSum >= minHeap.peek()) {
            int cheapest = minHeap.poll();
            remainingSum -= cheapest;
            count++;
            System.out.println("Bought item with price " + cheapest + ", remaining sum: " + remainingSum);
        }
        
        System.out.println("Maximum items that can be bought: " + count);
        return count;
    }
    
    // Using Sorting
    public static int buyMaximumItemsSort(int[] price, int sum) {
        System.out.println("Prices: " + Arrays.toString(price) + ", Sum: " + sum);
        
        // Sort prices in ascending order
        int[] sortedPrices = price.clone();
        Arrays.sort(sortedPrices);
        System.out.println("Sorted prices: " + Arrays.toString(sortedPrices));
        
        int count = 0;
        int remainingSum = sum;
        
        // Buy items starting from cheapest
        for (int i = 0; i < sortedPrices.length; i++) {
            if (remainingSum >= sortedPrices[i]) {
                remainingSum -= sortedPrices[i];
                count++;
                System.out.println("Bought item with price " + sortedPrices[i] + ", remaining sum: " + remainingSum);
            } else {
                break;
            }
        }
        
        System.out.println("Maximum items that can be bought: " + count);
        return count;
    }
    
    public static void main(String[] args) {
        int[] prices1 = {1, 12, 5, 111, 200, 1000, 10};
        int sum1 = 50;
        
        int[] prices2 = {20, 10, 5, 30, 100};
        int sum2 = 35;
        
        System.out.println("=== Testing Buy Maximum Items ===");
        buyMaximumItems(prices1, sum1);
        
        System.out.println("\\n=== Testing with Sorting ===");
        buyMaximumItemsSort(prices2, sum2);
    }
}`,
        }}
        explanation="Use min heap to always buy cheapest available item. Sort prices and buy from cheapest to most expensive. Time: O(n log n), Space: O(n)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Given budget and item costs, maximize count of items purchased.",
              details: ["All costs positive; each item available once"],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Greedy strategy: always buy cheapest remaining item. Min heap or sorting can provide cheapest price quickly.",
              keywords: ["greedy", "min heap", "budget"],
              details: [
                "Because all costs positive, buying cheapest first maximizes count",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Either sort array once (O(n log n)) or push into min heap (also O(n log n)).",
              details: ["Heap beneficial if streaming or partial input"],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "While budget ≥ smallest cost: pop min cost, subtract from budget, increment count.",
              details: [
                "Stop when heap empty or next cost exceeds remaining budget",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Sorting approach simpler: iterate sorted prices until budget depleted.",
              details: ["Complexity O(n log n) due to sort/heap operations"],
            },
          ],
          pattern: "Greedy Purchase via Min-Heap or Sorting",
          complexity: {
            time: "O(n log n)",
            space: "O(n) for heap / O(1) extra after sorting",
          },
        }}
      />

      <ProblemBlock
        title="3. K Largest Elements"
        difficulty="Medium"
        description="Find K largest elements in an array."
        solutions={{
          JavaScript: `// K Largest Elements

// Approach 1: Using Min Heap
function kLargestElements(arr, k) {
  console.log(\`Finding \${k} largest elements in: [\${arr.join(', ')}]\`);
  
  const minHeap = [];
  
  // Insert first k elements
  for (let i = 0; i < k; i++) {
    minHeap.push(arr[i]);
  }
  
  // Build min heap
  buildMinHeap(minHeap);
  console.log(\`Initial heap with first \${k} elements: [\${minHeap.join(', ')}]\`);
  
  // Process remaining elements
  for (let i = k; i < arr.length; i++) {
    console.log(\`\\nProcessing element \${arr[i]}\`);
    console.log(\`Current heap: [\${minHeap.join(', ')}]\`);
    console.log(\`Heap root (smallest): \${minHeap[0]}\`);
    
    if (arr[i] > minHeap[0]) {
      console.log(\`\${arr[i]} > \${minHeap[0]}, replacing root\`);
      minHeap[0] = arr[i];
      heapifyDown(minHeap, 0);
      console.log(\`After replacement: [\${minHeap.join(', ')}]\`);
    } else {
      console.log(\`\${arr[i]} <= \${minHeap[0]}, skipping\`);
    }
  }
  
  console.log(\`Final heap with \${k} largest elements: [\${minHeap.join(', ')}]\`);
  return minHeap;
}

// Approach 2: Using Max Heap
function kLargestElementsMaxHeap(arr, k) {
  console.log(\`Finding \${k} largest elements using max heap: [\${arr.join(', ')}]\`);
  
  // Build max heap
  const maxHeap = [...arr];
  buildMaxHeap(maxHeap);
  console.log(\`Max heap: [\${maxHeap.join(', ')}]\`);
  
  const result = [];
  
  // Extract k largest elements
  for (let i = 0; i < k; i++) {
    const max = extractMax(maxHeap);
    result.push(max);
    console.log(\`Extracted \${max}, remaining heap: [\${maxHeap.join(', ')}]\`);
  }
  
  console.log(\`\${k} largest elements: [\${result.join(', ')}]\`);
  return result;
}

// Approach 3: Using Sorting
function kLargestElementsSort(arr, k) {
  console.log(\`Finding \${k} largest elements using sorting: [\${arr.join(', ')}]\`);
  
  // Sort in descending order
  const sorted = [...arr].sort((a, b) => b - a);
  console.log(\`Sorted array: [\${sorted.join(', ')}]\`);
  
  const result = sorted.slice(0, k);
  console.log(\`\${k} largest elements: [\${result.join(', ')}]\`);
  return result;
}

// Approach 4: Using Quick Select (O(n) average)
function kLargestElementsQuickSelect(arr, k) {
  console.log(\`Finding \${k} largest elements using quick select: [\${arr.join(', ')}]\`);
  
  const result = [];
  const copy = [...arr];
  
  for (let i = 0; i < k; i++) {
    const kthLargest = quickSelect(copy, 0, copy.length - 1, copy.length - i);
    result.push(kthLargest);
    console.log(\`\${i + 1}th largest: \${kthLargest}\`);
  }
  
  console.log(\`\${k} largest elements: [\${result.join(', ')}]\`);
  return result;
}

function quickSelect(arr, left, right, k) {
  if (left === right) return arr[left];
  
  const pivotIndex = partition(arr, left, right);
  
  if (k === pivotIndex) {
    return arr[k];
  } else if (k < pivotIndex) {
    return quickSelect(arr, left, pivotIndex - 1, k);
  } else {
    return quickSelect(arr, pivotIndex + 1, right, k);
  }
}

function partition(arr, left, right) {
  const pivot = arr[right];
  let i = left;
  
  for (let j = left; j < right; j++) {
    if (arr[j] <= pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }
  
  [arr[i], arr[right]] = [arr[right], arr[i]];
  return i;
}

// Helper functions
function buildMinHeap(arr) {
  for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
    heapifyDownMin(arr, i);
  }
}

function buildMaxHeap(arr) {
  for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
    heapifyDownMax(arr, i);
  }
}

function heapifyDownMin(heap, index) {
  while (true) {
    let smallest = index;
    const leftChild = 2 * index + 1;
    const rightChild = 2 * index + 2;
    
    if (leftChild < heap.length && heap[leftChild] < heap[smallest]) {
      smallest = leftChild;
    }
    
    if (rightChild < heap.length && heap[rightChild] < heap[smallest]) {
      smallest = rightChild;
    }
    
    if (smallest === index) break;
    
    [heap[index], heap[smallest]] = [heap[smallest], heap[index]];
    index = smallest;
  }
}

function heapifyDownMax(heap, index) {
  while (true) {
    let largest = index;
    const leftChild = 2 * index + 1;
    const rightChild = 2 * index + 2;
    
    if (leftChild < heap.length && heap[leftChild] > heap[largest]) {
      largest = leftChild;
    }
    
    if (rightChild < heap.length && heap[rightChild] > heap[largest]) {
      largest = rightChild;
    }
    
    if (largest === index) break;
    
    [heap[index], heap[largest]] = [heap[largest], heap[index]];
    index = largest;
  }
}

function extractMax(heap) {
  if (heap.length === 0) return null;
  if (heap.length === 1) return heap.pop();
  
  const max = heap[0];
  heap[0] = heap.pop();
  heapifyDownMax(heap, 0);
  return max;
}

// Test cases
const arr1 = [7, 10, 4, 3, 20, 15];
const k1 = 3;

const arr2 = [1, 23, 12, 9, 30, 2, 50];
const k2 = 3;

console.log("=== Testing K Largest Elements ===");
console.log("Array 1:", arr1, "k =", k1);
kLargestElements([...arr1], k1);

console.log("\\n=== Using Max Heap ===");
kLargestElementsMaxHeap([...arr2], k2);

console.log("\\n=== Using Sorting ===");
kLargestElementsSort([...arr1], k1);

console.log("\\n=== Using Quick Select ===");
kLargestElementsQuickSelect([...arr2], k2);`,
          Java: `import java.util.*;

public class KLargestElements {
    // Using Min Heap
    public static List<Integer> kLargestElements(int[] arr, int k) {
        System.out.println("Finding " + k + " largest elements in: " + Arrays.toString(arr));
        
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();
        
        // Insert first k elements
        for (int i = 0; i < k; i++) {
            minHeap.offer(arr[i]);
        }
        
        System.out.println("Initial heap with first " + k + " elements: " + minHeap);
        
        // Process remaining elements
        for (int i = k; i < arr.length; i++) {
            System.out.println("\\nProcessing element " + arr[i]);
            System.out.println("Current heap: " + minHeap);
            System.out.println("Heap root (smallest): " + minHeap.peek());
            
            if (arr[i] > minHeap.peek()) {
                System.out.println(arr[i] + " > " + minHeap.peek() + ", replacing root");
                minHeap.poll();
                minHeap.offer(arr[i]);
                System.out.println("After replacement: " + minHeap);
            } else {
                System.out.println(arr[i] + " <= " + minHeap.peek() + ", skipping");
            }
        }
        
        List<Integer> result = new ArrayList<>(minHeap);
        Collections.sort(result, Collections.reverseOrder());
        System.out.println("Final heap with " + k + " largest elements: " + result);
        return result;
    }
    
    // Using Max Heap
    public static List<Integer> kLargestElementsMaxHeap(int[] arr, int k) {
        System.out.println("Finding " + k + " largest elements using max heap: " + Arrays.toString(arr));
        
        // Build max heap
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());
        for (int value : arr) {
            maxHeap.offer(value);
        }
        
        System.out.println("Max heap: " + maxHeap);
        
        List<Integer> result = new ArrayList<>();
        
        // Extract k largest elements
        for (int i = 0; i < k; i++) {
            int max = maxHeap.poll();
            result.add(max);
            System.out.println("Extracted " + max + ", remaining heap: " + maxHeap);
        }
        
        System.out.println(k + " largest elements: " + result);
        return result;
    }
    
    // Using Sorting
    public static List<Integer> kLargestElementsSort(int[] arr, int k) {
        System.out.println("Finding " + k + " largest elements using sorting: " + Arrays.toString(arr));
        
        // Sort in descending order
        Integer[] sorted = Arrays.stream(arr).boxed().toArray(Integer[]::new);
        Arrays.sort(sorted, Collections.reverseOrder());
        System.out.println("Sorted array: " + Arrays.toString(sorted));
        
        List<Integer> result = Arrays.asList(Arrays.copyOf(sorted, k));
        System.out.println(k + " largest elements: " + result);
        return result;
    }
    
    public static void main(String[] args) {
        int[] arr1 = {7, 10, 4, 3, 20, 15};
        int k1 = 3;
        
        int[] arr2 = {1, 23, 12, 9, 30, 2, 50};
        int k2 = 3;
        
        System.out.println("=== Testing K Largest Elements ===");
        System.out.println("Array 1: " + Arrays.toString(arr1) + ", k = " + k1);
        kLargestElements(arr1, k1);
        
        System.out.println("\\n=== Using Max Heap ===");
        kLargestElementsMaxHeap(arr2, k2);
        
        System.out.println("\\n=== Using Sorting ===");
        kLargestElementsSort(arr1, k1);
    }
}`,
        }}
        explanation="Min heap approach: maintain heap of size k, replace root if current element is larger. Max heap: extract k largest elements. Time: O(n log k) for min heap, O(n log n) for max heap, Space: O(k)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Given unsorted array, return k largest values (order not necessarily sorted, though we usually output descending).",
              details: [
                "k may be far smaller than n; exploit this to reduce complexity",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Maintain size-k min heap so root always smallest among chosen elements. If new value exceeds root, replace.",
              keywords: ["min heap", "size k", "top k elements"],
              details: [
                "Alternatively use max heap to pop k times, but that's O(n log n)",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description: "Min heap of size k (priority queue).",
              details: [
                "Heap stores candidate largest values; ensures O(log k) updates",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Build heap from first k values, then iterate rest: if value > heap[0], pop root and insert value.",
              details: [
                "After traversal, heap contains k largest; pop all to obtain sorted ascending; reverse for descending",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Edge cases: k >= n just return sorted array. Complexity O(n log k).",
              details: [
                "For streaming data, same approach works with infinite input",
              ],
            },
          ],
          pattern: "Maintain Min-Heap of Size k",
          complexity: {
            time: "O(n log k)",
            space: "O(k)",
          },
        }}
      />

      <ProblemBlock
        title="4. K Closest Elements"
        difficulty="Medium"
        description="Find K closest elements to a given value in a sorted array."
        solutions={{
          JavaScript: `// K Closest Elements

// Approach 1: Using Two Pointers
function kClosestElements(arr, x, k) {
  console.log(\`Finding \${k} closest elements to \${x} in: [\${arr.join(', ')}]\`);
  
  const n = arr.length;
  let left = 0;
  let right = n - 1;
  
  // Find the position where x should be inserted
  while (right - left >= k) {
    const leftDiff = Math.abs(arr[left] - x);
    const rightDiff = Math.abs(arr[right] - x);
    
    console.log(\`Comparing distances: |\${arr[left]} - \${x}| = \${leftDiff}, |\${arr[right]} - \${x}| = \${rightDiff}\`);
    
    if (leftDiff > rightDiff) {
      console.log(\`\${leftDiff} > \${rightDiff}, moving left pointer\`);
      left++;
    } else {
      console.log(\`\${leftDiff} <= \${rightDiff}, moving right pointer\`);
      right--;
    }
  }
  
  const result = arr.slice(left, right + 1);
  console.log(\`\${k} closest elements: [\${result.join(', ')}]\`);
  return result;
}

// Approach 2: Using Binary Search + Two Pointers
function kClosestElementsBinarySearch(arr, x, k) {
  console.log(\`Finding \${k} closest elements to \${x} using binary search: [\${arr.join(', ')}]\`);
  
  const n = arr.length;
  
  // Find the position where x should be inserted
  let left = 0;
  let right = n - k;
  
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    console.log(\`Binary search: left=\${left}, right=\${right}, mid=\${mid}\`);
    console.log(\`Comparing: |\${arr[mid]} - \${x}| vs |\${arr[mid + k]} - \${x}|\`);
    
    if (x - arr[mid] > arr[mid + k] - x) {
      console.log(\`\${x - arr[mid]} > \${arr[mid + k] - x}, moving left to \${mid + 1}\`);
      left = mid + 1;
    } else {
      console.log(\`\${x - arr[mid]} <= \${arr[mid + k] - x}, moving right to \${mid}\`);
      right = mid;
    }
  }
  
  const result = arr.slice(left, left + k);
  console.log(\`\${k} closest elements: [\${result.join(', ')}]\`);
  return result;
}

// Approach 3: Using Max Heap
function kClosestElementsMaxHeap(arr, x, k) {
  console.log(\`Finding \${k} closest elements to \${x} using max heap: [\${arr.join(', ')}]\`);
  
  const maxHeap = [];
  
  // Insert first k elements
  for (let i = 0; i < k; i++) {
    const diff = Math.abs(arr[i] - x);
    maxHeap.push({ value: arr[i], diff });
  }
  
  // Build max heap
  buildMaxHeap(maxHeap);
  console.log(\`Initial heap: [\${maxHeap.map(item => item.value).join(', ')}]\`);
  
  // Process remaining elements
  for (let i = k; i < arr.length; i++) {
    const diff = Math.abs(arr[i] - x);
    const maxDiff = maxHeap[0].diff;
    
    console.log(\`\\nProcessing \${arr[i]} (diff: \${diff})\`);
    console.log(\`Current heap max diff: \${maxDiff}\`);
    
    if (diff < maxDiff) {
      console.log(\`\${diff} < \${maxDiff}, replacing root\`);
      maxHeap[0] = { value: arr[i], diff };
      heapifyDownMax(maxHeap, 0);
      console.log(\`After replacement: [\${maxHeap.map(item => item.value).join(', ')}]\`);
    } else {
      console.log(\`\${diff} >= \${maxDiff}, skipping\`);
    }
  }
  
  const result = maxHeap.map(item => item.value).sort((a, b) => a - b);
  console.log(\`\${k} closest elements: [\${result.join(', ')}]\`);
  return result;
}

// Approach 4: Using Min Heap with Custom Comparator
function kClosestElementsMinHeap(arr, x, k) {
  console.log(\`Finding \${k} closest elements to \${x} using min heap: [\${arr.join(', ')}]\`);
  
  const minHeap = [];
  
  // Insert all elements with their distances
  for (let i = 0; i < arr.length; i++) {
    const diff = Math.abs(arr[i] - x);
    minHeap.push({ value: arr[i], diff });
  }
  
  // Build min heap
  buildMinHeap(minHeap);
  console.log(\`Min heap built with all elements\`);
  
  const result = [];
  
  // Extract k closest elements
  for (let i = 0; i < k; i++) {
    const closest = extractMin(minHeap);
    result.push(closest.value);
    console.log(\`Extracted \${closest.value} (diff: \${closest.diff})\`);
  }
  
  result.sort((a, b) => a - b);
  console.log(\`\${k} closest elements: [\${result.join(', ')}]\`);
  return result;
}

// Helper functions
function buildMaxHeap(arr) {
  for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
    heapifyDownMax(arr, i);
  }
}

function buildMinHeap(arr) {
  for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
    heapifyDownMin(arr, i);
  }
}

function heapifyDownMax(heap, index) {
  while (true) {
    let largest = index;
    const leftChild = 2 * index + 1;
    const rightChild = 2 * index + 2;
    
    if (leftChild < heap.length && heap[leftChild].diff > heap[largest].diff) {
      largest = leftChild;
    }
    
    if (rightChild < heap.length && heap[rightChild].diff > heap[largest].diff) {
      largest = rightChild;
    }
    
    if (largest === index) break;
    
    [heap[index], heap[largest]] = [heap[largest], heap[index]];
    index = largest;
  }
}

function heapifyDownMin(heap, index) {
  while (true) {
    let smallest = index;
    const leftChild = 2 * index + 1;
    const rightChild = 2 * index + 2;
    
    if (leftChild < heap.length && heap[leftChild].diff < heap[smallest].diff) {
      smallest = leftChild;
    }
    
    if (rightChild < heap.length && heap[rightChild].diff < heap[smallest].diff) {
      smallest = rightChild;
    }
    
    if (smallest === index) break;
    
    [heap[index], heap[smallest]] = [heap[smallest], heap[index]];
    index = smallest;
  }
}

function extractMin(heap) {
  if (heap.length === 0) return null;
  if (heap.length === 1) return heap.pop();
  
  const min = heap[0];
  heap[0] = heap.pop();
  heapifyDownMin(heap, 0);
  return min;
}

// Test cases
const arr1 = [1, 2, 3, 4, 5];
const x1 = 3;
const k1 = 4;

const arr2 = [1, 2, 3, 4, 5];
const x2 = -1;
const k2 = 4;

const arr3 = [1, 1, 1, 10, 10, 10];
const x3 = 9;
const k3 = 1;

console.log("=== Testing K Closest Elements ===");
console.log("Array 1:", arr1, "x =", x1, "k =", k1);
kClosestElements([...arr1], x1, k1);

console.log("\\n=== Using Binary Search ===");
kClosestElementsBinarySearch([...arr2], x2, k2);

console.log("\\n=== Using Max Heap ===");
kClosestElementsMaxHeap([...arr1], x1, k1);

console.log("\\n=== Using Min Heap ===");
kClosestElementsMinHeap([...arr3], x3, k3);`,
          Java: `import java.util.*;

public class KClosestElements {
    // Using Two Pointers
    public static List<Integer> kClosestElements(int[] arr, int x, int k) {
        System.out.println("Finding " + k + " closest elements to " + x + " in: " + Arrays.toString(arr));
        
        int n = arr.length;
        int left = 0;
        int right = n - 1;
        
        // Find the position where x should be inserted
        while (right - left >= k) {
            int leftDiff = Math.abs(arr[left] - x);
            int rightDiff = Math.abs(arr[right] - x);
            
            System.out.println("Comparing distances: |" + arr[left] + " - " + x + "| = " + leftDiff + 
                             ", |" + arr[right] + " - " + x + "| = " + rightDiff);
            
            if (leftDiff > rightDiff) {
                System.out.println(leftDiff + " > " + rightDiff + ", moving left pointer");
                left++;
            } else {
                System.out.println(leftDiff + " <= " + rightDiff + ", moving right pointer");
                right--;
            }
        }
        
        List<Integer> result = new ArrayList<>();
        for (int i = left; i <= right; i++) {
            result.add(arr[i]);
        }
        
        System.out.println(k + " closest elements: " + result);
        return result;
    }
    
    // Using Max Heap
    public static List<Integer> kClosestElementsMaxHeap(int[] arr, int x, int k) {
        System.out.println("Finding " + k + " closest elements to " + x + " using max heap: " + Arrays.toString(arr));
        
        PriorityQueue<int[]> maxHeap = new PriorityQueue<>((a, b) -> b[1] - a[1]);
        
        // Insert first k elements
        for (int i = 0; i < k; i++) {
            int diff = Math.abs(arr[i] - x);
            maxHeap.offer(new int[]{arr[i], diff});
        }
        
        System.out.println("Initial heap: " + Arrays.toString(maxHeap.peek()));
        
        // Process remaining elements
        for (int i = k; i < arr.length; i++) {
            int diff = Math.abs(arr[i] - x);
            int maxDiff = maxHeap.peek()[1];
            
            System.out.println("\\nProcessing " + arr[i] + " (diff: " + diff + ")");
            System.out.println("Current heap max diff: " + maxDiff);
            
            if (diff < maxDiff) {
                System.out.println(diff + " < " + maxDiff + ", replacing root");
                maxHeap.poll();
                maxHeap.offer(new int[]{arr[i], diff});
                System.out.println("After replacement: " + Arrays.toString(maxHeap.peek()));
            } else {
                System.out.println(diff + " >= " + maxDiff + ", skipping");
            }
        }
        
        List<Integer> result = new ArrayList<>();
        while (!maxHeap.isEmpty()) {
            result.add(maxHeap.poll()[0]);
        }
        Collections.sort(result);
        
        System.out.println(k + " closest elements: " + result);
        return result;
    }
    
    public static void main(String[] args) {
        int[] arr1 = {1, 2, 3, 4, 5};
        int x1 = 3;
        int k1 = 4;
        
        int[] arr2 = {1, 2, 3, 4, 5};
        int x2 = -1;
        int k2 = 4;
        
        System.out.println("=== Testing K Closest Elements ===");
        System.out.println("Array 1: " + Arrays.toString(arr1) + ", x = " + x1 + ", k = " + k1);
        kClosestElements(arr1, x1, k1);
        
        System.out.println("\\n=== Using Max Heap ===");
        kClosestElementsMaxHeap(arr1, x1, k1);
    }
}`,
        }}
        explanation="Two pointers: find window of k elements with minimum total distance. Binary search: find optimal starting position. Max heap: maintain k closest elements. Time: O(log n + k) for binary search, O(n log k) for heap, Space: O(k)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Given sorted array and value x, return k elements closest to x (ties resolved by smaller element).",
              details: ["Array sorted ascending; outputs should remain sorted"],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Two standard patterns: binary search + two pointers window, or max heap of size k storing (distance, value).",
              keywords: ["binary search", "two pointers", "max heap"],
              details: [
                "Binary search finds insertion point of x, then expand window to size k",
                "Heap approach works even if array unsorted",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "For sorted input, sliding window / two pointers is optimal (O(log n + k)). For general input, max heap of size k.",
              details: [
                "Max heap stores pair (distance, value) with custom comparator",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Binary search left boundary: `lo=0, hi=n-k`, compare distances at window edges; shrink hi or move lo accordingly.",
              details: [
                "Or pointer expansion: start `left=right=insertionIndex`, expand while window size < k choosing closer side",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Return array slice `arr[lo..lo+k-1]`. Complexity O(log n + k).",
              details: [
                "For heap variant: iterate arr, push pair in max heap, trim size k; at end output heap contents sorted",
              ],
            },
          ],
          pattern: "Binary Search + Window Expansion (or Max Heap)",
          complexity: {
            time: "O(log n + k) (sorted) / O(n log k) (heap)",
            space: "O(1) extra window / O(k) heap",
          },
        }}
      />

      <ProblemBlock
        title="5. Merge K Sorted Arrays"
        difficulty="Hard"
        description="Merge K sorted arrays into one sorted array."
        solutions={{
          JavaScript: `// Merge K Sorted Arrays

// Approach 1: Using Min Heap
function mergeKSortedArrays(arrays) {
  console.log(\`Merging \${arrays.length} sorted arrays:\`);
  arrays.forEach((arr, i) => console.log(\`Array \${i}: [\${arr.join(', ')}]\`));
  
  const k = arrays.length;
  const minHeap = [];
  const result = [];
  
  // Insert first element from each array
  for (let i = 0; i < k; i++) {
    if (arrays[i].length > 0) {
      minHeap.push({
        value: arrays[i][0],
        arrayIndex: i,
        elementIndex: 0
      });
    }
  }
  
  // Build min heap
  buildMinHeap(minHeap);
  console.log(\`Initial heap: [\${minHeap.map(item => item.value).join(', ')}]\`);
  
  // Extract elements one by one
  while (minHeap.length > 0) {
    const min = extractMin(minHeap);
    result.push(min.value);
    
    console.log(\`\\nExtracted \${min.value} from array \${min.arrayIndex}\`);
    console.log(\`Result so far: [\${result.join(', ')}]\`);
    
    // Add next element from the same array
    const nextElementIndex = min.elementIndex + 1;
    if (nextElementIndex < arrays[min.arrayIndex].length) {
      const nextElement = {
        value: arrays[min.arrayIndex][nextElementIndex],
        arrayIndex: min.arrayIndex,
        elementIndex: nextElementIndex
      };
      
      minHeap.push(nextElement);
      heapifyUp(minHeap, minHeap.length - 1);
      
      console.log(\`Added \${nextElement.value} from array \${min.arrayIndex}\`);
      console.log(\`Updated heap: [\${minHeap.map(item => item.value).join(', ')}]\`);
    }
  }
  
  console.log(\`\\nFinal merged array: [\${result.join(', ')}]\`);
  return result;
}

// Approach 2: Using Divide and Conquer
function mergeKSortedArraysDivideConquer(arrays) {
  console.log(\`Merging \${arrays.length} sorted arrays using divide and conquer:\`);
  arrays.forEach((arr, i) => console.log(\`Array \${i}: [\${arr.join(', ')}]\`));
  
  if (arrays.length === 0) return [];
  if (arrays.length === 1) return arrays[0];
  
  return mergeKSortedArraysHelper(arrays, 0, arrays.length - 1);
}

function mergeKSortedArraysHelper(arrays, left, right) {
  if (left === right) return arrays[left];
  
  const mid = Math.floor((left + right) / 2);
  console.log(\`Merging arrays from \${left} to \${mid} and \${mid + 1} to \${right}\`);
  
  const leftMerged = mergeKSortedArraysHelper(arrays, left, mid);
  const rightMerged = mergeKSortedArraysHelper(arrays, mid + 1, right);
  
  const result = mergeTwoSortedArrays(leftMerged, rightMerged);
  console.log(\`Merged result: [\${result.join(', ')}]\`);
  
  return result;
}

function mergeTwoSortedArrays(arr1, arr2) {
  const result = [];
  let i = 0, j = 0;
  
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  
  return result;
}

// Approach 3: Using Priority Queue (simulated)
function mergeKSortedArraysPQ(arrays) {
  console.log(\`Merging \${arrays.length} sorted arrays using priority queue:\`);
  arrays.forEach((arr, i) => console.log(\`Array \${i}: [\${arr.join(', ')}]\`));
  
  const pq = [];
  const result = [];
  
  // Insert first element from each array
  for (let i = 0; i < arrays.length; i++) {
    if (arrays[i].length > 0) {
      insert(pq, {
        value: arrays[i][0],
        arrayIndex: i,
        elementIndex: 0
      });
    }
  }
  
  // Extract elements one by one
  while (pq.length > 0) {
    const min = extractMin(pq);
    result.push(min.value);
    
    // Add next element from the same array
    const nextElementIndex = min.elementIndex + 1;
    if (nextElementIndex < arrays[min.arrayIndex].length) {
      insert(pq, {
        value: arrays[min.arrayIndex][nextElementIndex],
        arrayIndex: min.arrayIndex,
        elementIndex: nextElementIndex
      });
    }
  }
  
  console.log(\`Final merged array: [\${result.join(', ')}]\`);
  return result;
}

// Helper functions
function buildMinHeap(arr) {
  for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
    heapifyDown(arr, i);
  }
}

function heapifyDown(heap, index) {
  while (true) {
    let smallest = index;
    const leftChild = 2 * index + 1;
    const rightChild = 2 * index + 2;
    
    if (leftChild < heap.length && heap[leftChild].value < heap[smallest].value) {
      smallest = leftChild;
    }
    
    if (rightChild < heap.length && heap[rightChild].value < heap[smallest].value) {
      smallest = rightChild;
    }
    
    if (smallest === index) break;
    
    [heap[index], heap[smallest]] = [heap[smallest], heap[index]];
    index = smallest;
  }
}

function heapifyUp(heap, index) {
  while (index > 0) {
    const parentIndex = Math.floor((index - 1) / 2);
    if (heap[parentIndex].value <= heap[index].value) break;
    
    [heap[parentIndex], heap[index]] = [heap[index], heap[parentIndex]];
    index = parentIndex;
  }
}

function extractMin(heap) {
  if (heap.length === 0) return null;
  if (heap.length === 1) return heap.pop();
  
  const min = heap[0];
  heap[0] = heap.pop();
  heapifyDown(heap, 0);
  return min;
}

function insert(heap, value) {
  heap.push(value);
  heapifyUp(heap, heap.length - 1);
}

// Test cases
const arrays1 = [
  [1, 3, 5, 7],
  [2, 4, 6, 8],
  [0, 9, 10, 11]
];

const arrays2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12]
];

const arrays3 = [
  [1, 4, 7, 10],
  [2, 5, 8, 11],
  [3, 6, 9, 12]
];

console.log("=== Testing Merge K Sorted Arrays ===");
console.log("Arrays 1:");
mergeKSortedArrays([...arrays1]);

console.log("\\n=== Using Divide and Conquer ===");
console.log("Arrays 2:");
mergeKSortedArraysDivideConquer([...arrays2]);

console.log("\\n=== Using Priority Queue ===");
console.log("Arrays 3:");
mergeKSortedArraysPQ([...arrays3]);`,
          Java: `import java.util.*;

class ArrayElement {
    int value;
    int arrayIndex;
    int elementIndex;
    
    ArrayElement(int value, int arrayIndex, int elementIndex) {
        this.value = value;
        this.arrayIndex = arrayIndex;
        this.elementIndex = elementIndex;
    }
}

public class MergeKSortedArrays {
    // Using Min Heap
    public static List<Integer> mergeKSortedArrays(int[][] arrays) {
        System.out.println("Merging " + arrays.length + " sorted arrays:");
        for (int i = 0; i < arrays.length; i++) {
            System.out.println("Array " + i + ": " + Arrays.toString(arrays[i]));
        }
        
        int k = arrays.length;
        PriorityQueue<ArrayElement> minHeap = new PriorityQueue<>((a, b) -> a.value - b.value);
        List<Integer> result = new ArrayList<>();
        
        // Insert first element from each array
        for (int i = 0; i < k; i++) {
            if (arrays[i].length > 0) {
                minHeap.offer(new ArrayElement(arrays[i][0], i, 0));
            }
        }
        
        System.out.println("Initial heap: " + minHeap.peek().value);
        
        // Extract elements one by one
        while (!minHeap.isEmpty()) {
            ArrayElement min = minHeap.poll();
            result.add(min.value);
            
            System.out.println("\\nExtracted " + min.value + " from array " + min.arrayIndex);
            System.out.println("Result so far: " + result);
            
            // Add next element from the same array
            int nextElementIndex = min.elementIndex + 1;
            if (nextElementIndex < arrays[min.arrayIndex].length) {
                ArrayElement nextElement = new ArrayElement(
                    arrays[min.arrayIndex][nextElementIndex],
                    min.arrayIndex,
                    nextElementIndex
                );
                
                minHeap.offer(nextElement);
                System.out.println("Added " + nextElement.value + " from array " + min.arrayIndex);
            }
        }
        
        System.out.println("\\nFinal merged array: " + result);
        return result;
    }
    
    // Using Divide and Conquer
    public static List<Integer> mergeKSortedArraysDivideConquer(int[][] arrays) {
        System.out.println("Merging " + arrays.length + " sorted arrays using divide and conquer:");
        for (int i = 0; i < arrays.length; i++) {
            System.out.println("Array " + i + ": " + Arrays.toString(arrays[i]));
        }
        
        if (arrays.length == 0) return new ArrayList<>();
        if (arrays.length == 1) {
            List<Integer> result = new ArrayList<>();
            for (int value : arrays[0]) {
                result.add(value);
            }
            return result;
        }
        
        return mergeKSortedArraysHelper(arrays, 0, arrays.length - 1);
    }
    
    private static List<Integer> mergeKSortedArraysHelper(int[][] arrays, int left, int right) {
        if (left == right) {
            List<Integer> result = new ArrayList<>();
            for (int value : arrays[left]) {
                result.add(value);
            }
            return result;
        }
        
        int mid = (left + right) / 2;
        System.out.println("Merging arrays from " + left + " to " + mid + " and " + (mid + 1) + " to " + right);
        
        List<Integer> leftMerged = mergeKSortedArraysHelper(arrays, left, mid);
        List<Integer> rightMerged = mergeKSortedArraysHelper(arrays, mid + 1, right);
        
        List<Integer> result = mergeTwoSortedArrays(leftMerged, rightMerged);
        System.out.println("Merged result: " + result);
        
        return result;
    }
    
    private static List<Integer> mergeTwoSortedArrays(List<Integer> arr1, List<Integer> arr2) {
        List<Integer> result = new ArrayList<>();
        int i = 0, j = 0;
        
        while (i < arr1.size() && j < arr2.size()) {
            if (arr1.get(i) <= arr2.get(j)) {
                result.add(arr1.get(i));
                i++;
            } else {
                result.add(arr2.get(j));
                j++;
            }
        }
        
        while (i < arr1.size()) {
            result.add(arr1.get(i));
            i++;
        }
        
        while (j < arr2.size()) {
            result.add(arr2.get(j));
            j++;
        }
        
        return result;
    }
    
    public static void main(String[] args) {
        int[][] arrays1 = {
            {1, 3, 5, 7},
            {2, 4, 6, 8},
            {0, 9, 10, 11}
        };
        
        int[][] arrays2 = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9},
            {10, 11, 12}
        };
        
        System.out.println("=== Testing Merge K Sorted Arrays ===");
        System.out.println("Arrays 1:");
        mergeKSortedArrays(arrays1);
        
        System.out.println("\\n=== Using Divide and Conquer ===");
        System.out.println("Arrays 2:");
        mergeKSortedArraysDivideConquer(arrays2);
    }
}`,
        }}
        explanation="Min heap: insert first element from each array, extract minimum and add next element from same array. Divide and conquer: recursively merge halves. Time: O(n log k), Space: O(k)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Merge k sorted arrays (or lists) into one sorted output; total elements n.",
              details: [
                "Need efficient merging better than repeated 2-array merge (O(k n))",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Use min heap to pick current smallest among k heads, similar to merging k sorted lists.",
              keywords: ["k-way merge", "priority queue", "min heap"],
              details: [
                "Each heap entry stores value plus origin array index (and element index)",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Min heap of size up to k containing tuple (value, arrayId, nextIndex).",
              details: [
                "After extracting min, push next element from same array if exists",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Initialize heap with first element of each array. While heap non-empty: pop min, append to result, push next element from same array.",
              details: [
                "Alternative divide & conquer: recursively merge halves using standard merge of two arrays",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Complexity O(n log k); memory O(k). Ensure comparator handles values correctly.",
              details: [
                "For linked lists, store node pointer; for arrays store indices",
              ],
            },
          ],
          pattern: "K-Way Merge via Min Heap",
          complexity: {
            time: "O(n log k)",
            space: "O(k)",
          },
        }}
      />

      <ProblemBlock
        title="6. Median of a Stream"
        difficulty="Hard"
        description="Find median of a stream of integers using two heaps."
        solutions={{
          JavaScript: `// Median of a Stream

class MedianFinder {
  constructor() {
    this.maxHeap = []; // Left half (smaller elements)
    this.minHeap = []; // Right half (larger elements)
  }

  addNum(num) {
    console.log(\`\\nAdding \${num} to stream\`);
    console.log(\`Before: maxHeap=[\${this.maxHeap.join(', ')}], minHeap=[\${this.minHeap.join(', ')}]\`);
    
    // Add to max heap if it's empty or num is smaller than max
    if (this.maxHeap.length === 0 || num <= this.maxHeap[0]) {
      this.maxHeap.push(num);
      this.heapifyUpMax(this.maxHeap, this.maxHeap.length - 1);
      console.log(\`Added \${num} to maxHeap\`);
    } else {
      this.minHeap.push(num);
      this.heapifyUpMin(this.minHeap, this.minHeap.length - 1);
      console.log(\`Added \${num} to minHeap\`);
    }
    
    // Balance the heaps
    this.balanceHeaps();
    
    console.log(\`After: maxHeap=[\${this.maxHeap.join(', ')}], minHeap=[\${this.minHeap.join(', ')}]\`);
  }

  balanceHeaps() {
    const maxHeapSize = this.maxHeap.length;
    const minHeapSize = this.minHeap.length;
    
    console.log(\`Balancing: maxHeap size=\${maxHeapSize}, minHeap size=\${minHeapSize}\`);
    
    // If max heap has more than 1 element than min heap
    if (maxHeapSize > minHeapSize + 1) {
      const max = this.extractMax(this.maxHeap);
      this.minHeap.push(max);
      this.heapifyUpMin(this.minHeap, this.minHeap.length - 1);
      console.log(\`Moved \${max} from maxHeap to minHeap\`);
    }
    // If min heap has more elements than max heap
    else if (minHeapSize > maxHeapSize) {
      const min = this.extractMin(this.minHeap);
      this.maxHeap.push(min);
      this.heapifyUpMax(this.maxHeap, this.maxHeap.length - 1);
      console.log(\`Moved \${min} from minHeap to maxHeap\`);
    }
  }

  findMedian() {
    const maxHeapSize = this.maxHeap.length;
    const minHeapSize = this.minHeap.length;
    
    console.log(\`\\nFinding median: maxHeap=[\${this.maxHeap.join(', ')}], minHeap=[\${this.minHeap.join(', ')}]\`);
    
    if (maxHeapSize === minHeapSize) {
      const median = (this.maxHeap[0] + this.minHeap[0]) / 2;
      console.log(\`Even number of elements: median = (\${this.maxHeap[0]} + \${this.minHeap[0]}) / 2 = \${median}\`);
      return median;
    } else {
      const median = this.maxHeap[0];
      console.log(\`Odd number of elements: median = \${median}\`);
      return median;
    }
  }

  // Helper methods for max heap
  heapifyUpMax(heap, index) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (heap[parentIndex] >= heap[index]) break;
      
      [heap[parentIndex], heap[index]] = [heap[index], heap[parentIndex]];
      index = parentIndex;
    }
  }

  heapifyDownMax(heap, index) {
    while (true) {
      let largest = index;
      const leftChild = 2 * index + 1;
      const rightChild = 2 * index + 2;
      
      if (leftChild < heap.length && heap[leftChild] > heap[largest]) {
        largest = leftChild;
      }
      
      if (rightChild < heap.length && heap[rightChild] > heap[largest]) {
        largest = rightChild;
      }
      
      if (largest === index) break;
      
      [heap[index], heap[largest]] = [heap[largest], heap[index]];
      index = largest;
    }
  }

  extractMax(heap) {
    if (heap.length === 0) return null;
    if (heap.length === 1) return heap.pop();
    
    const max = heap[0];
    heap[0] = heap.pop();
    this.heapifyDownMax(heap, 0);
    return max;
  }

  // Helper methods for min heap
  heapifyUpMin(heap, index) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (heap[parentIndex] <= heap[index]) break;
      
      [heap[parentIndex], heap[index]] = [heap[index], heap[parentIndex]];
      index = parentIndex;
    }
  }

  heapifyDownMin(heap, index) {
    while (true) {
      let smallest = index;
      const leftChild = 2 * index + 1;
      const rightChild = 2 * index + 2;
      
      if (leftChild < heap.length && heap[leftChild] < heap[smallest]) {
        smallest = leftChild;
      }
      
      if (rightChild < heap.length && heap[rightChild] < heap[smallest]) {
        smallest = rightChild;
      }
      
      if (smallest === index) break;
      
      [heap[index], heap[smallest]] = [heap[smallest], heap[index]];
      index = smallest;
    }
  }

  extractMin(heap) {
    if (heap.length === 0) return null;
    if (heap.length === 1) return heap.pop();
    
    const min = heap[0];
    heap[0] = heap.pop();
    this.heapifyDownMin(heap, 0);
    return min;
  }
}

// Alternative implementation with detailed explanation
function medianOfStreamDetailed() {
  console.log("=== Median of a Stream - Detailed Process ===");
  
  const medianFinder = new MedianFinder();
  const stream = [5, 15, 1, 3, 2, 8, 7, 9, 10, 6, 11, 4];
  
  console.log(\`Stream: [\${stream.join(', ')}]\`);
  
  for (let i = 0; i < stream.length; i++) {
    medianFinder.addNum(stream[i]);
    const median = medianFinder.findMedian();
    console.log(\`After adding \${stream[i]}: median = \${median}\`);
  }
}

// Test cases
console.log("=== Testing Median of a Stream ===");
const medianFinder = new MedianFinder();

// Test case 1
const stream1 = [5, 15, 1, 3];
console.log("\\nStream 1:", stream1);
for (const num of stream1) {
  medianFinder.addNum(num);
  const median = medianFinder.findMedian();
  console.log(\`After adding \${num}: median = \${median}\`);
}

// Test case 2
console.log("\\n=== Detailed Process ===");
medianOfStreamDetailed();`,
          Java: `import java.util.*;

public class MedianOfStream {
    static class MedianFinder {
        private PriorityQueue<Integer> maxHeap; // Left half (smaller elements)
        private PriorityQueue<Integer> minHeap; // Right half (larger elements)
        
        public MedianFinder() {
            maxHeap = new PriorityQueue<>(Collections.reverseOrder());
            minHeap = new PriorityQueue<>();
        }
        
        public void addNum(int num) {
            System.out.println("\\nAdding " + num + " to stream");
            System.out.println("Before: maxHeap=" + maxHeap + ", minHeap=" + minHeap);
            
            // Add to max heap if it's empty or num is smaller than max
            if (maxHeap.isEmpty() || num <= maxHeap.peek()) {
                maxHeap.offer(num);
                System.out.println("Added " + num + " to maxHeap");
            } else {
                minHeap.offer(num);
                System.out.println("Added " + num + " to minHeap");
            }
            
            // Balance the heaps
            balanceHeaps();
            
            System.out.println("After: maxHeap=" + maxHeap + ", minHeap=" + minHeap);
        }
        
        private void balanceHeaps() {
            int maxHeapSize = maxHeap.size();
            int minHeapSize = minHeap.size();
            
            System.out.println("Balancing: maxHeap size=" + maxHeapSize + ", minHeap size=" + minHeapSize);
            
            // If max heap has more than 1 element than min heap
            if (maxHeapSize > minHeapSize + 1) {
                int max = maxHeap.poll();
                minHeap.offer(max);
                System.out.println("Moved " + max + " from maxHeap to minHeap");
            }
            // If min heap has more elements than max heap
            else if (minHeapSize > maxHeapSize) {
                int min = minHeap.poll();
                maxHeap.offer(min);
                System.out.println("Moved " + min + " from minHeap to maxHeap");
            }
        }
        
        public double findMedian() {
            int maxHeapSize = maxHeap.size();
            int minHeapSize = minHeap.size();
            
            System.out.println("\\nFinding median: maxHeap=" + maxHeap + ", minHeap=" + minHeap);
            
            if (maxHeapSize == minHeapSize) {
                double median = (maxHeap.peek() + minHeap.peek()) / 2.0;
                System.out.println("Even number of elements: median = (" + maxHeap.peek() + 
                                 " + " + minHeap.peek() + ") / 2 = " + median);
                return median;
            } else {
                double median = maxHeap.peek();
                System.out.println("Odd number of elements: median = " + median);
                return median;
            }
        }
    }
    
    public static void main(String[] args) {
        System.out.println("=== Testing Median of a Stream ===");
        MedianFinder medianFinder = new MedianFinder();
        
        // Test case 1
        int[] stream1 = {5, 15, 1, 3};
        System.out.println("\\nStream 1: " + Arrays.toString(stream1));
        for (int num : stream1) {
            medianFinder.addNum(num);
            double median = medianFinder.findMedian();
            System.out.println("After adding " + num + ": median = " + median);
        }
        
        // Test case 2
        System.out.println("\\n=== Detailed Process ===");
        MedianFinder medianFinder2 = new MedianFinder();
        int[] stream2 = {5, 15, 1, 3, 2, 8, 7, 9, 10, 6, 11, 4};
        System.out.println("Stream: " + Arrays.toString(stream2));
        
        for (int num : stream2) {
            medianFinder2.addNum(num);
            double median = medianFinder2.findMedian();
            System.out.println("After adding " + num + ": median = " + median);
        }
    }
}`,
        }}
        explanation="Use two heaps: max heap for smaller half, min heap for larger half. Keep heaps balanced (size difference ≤ 1). Median is root of max heap (odd) or average of both roots (even). Time: O(log n) per insertion, Space: O(n)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Maintaining running median as numbers stream in; queries require median after each insertion.",
              details: [
                "Need efficient insert (O(log n)) and median query O(1)",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Use two heaps: max heap for lower half, min heap for upper half; keep sizes balanced.",
              keywords: [
                "two heaps",
                "median maintenance",
                "max heap",
                "min heap",
              ],
              details: ["Ensures all elements in max heap ≤ min heap roots"],
            },
            {
              title: "Step 3: Choose Data Structure",
              description: "Max heap (lower half) and min heap (upper half).",
              details: [
                "In JS use two priority queues (custom implementation) or arrays with helper functions",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Insert new value into appropriate heap, rebalance sizes (size difference ≤1). Median is maxHeap.top (odd) or average of both tops (even).",
              details: [
                "If maxHeap bigger by >1 shift root to minHeap; vice versa",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Encapsulate push/pop operations; maintain invariants after each insert.",
              details: ["Time O(log n) per insert; query O(1)"],
            },
          ],
          pattern: "Two-Heaps Streaming Median",
          complexity: {
            time: "O(log n) per insertion",
            space: "O(n)",
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
        Advanced Heap Applications
      </h2>

      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h3 className="text-2xl font-bold text-white mb-4">
          Priority Queue Applications
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-lg font-semibold text-white mb-2">
              Task Scheduling
            </h4>
            <p className="text-gray-300 text-sm">
              Use min heap to schedule tasks by priority and deadline.
            </p>
          </div>
          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-lg font-semibold text-white mb-2">
              Dijkstra&apos;s Algorithm
            </h4>
            <p className="text-gray-300 text-sm">
              Use min heap to find shortest paths in weighted graphs.
            </p>
          </div>
          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-lg font-semibold text-white mb-2">
              Huffman Coding
            </h4>
            <p className="text-gray-300 text-sm">
              Use min heap to build optimal prefix codes for compression.
            </p>
          </div>
          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-lg font-semibold text-white mb-2">
              Memory Management
            </h4>
            <p className="text-gray-300 text-sm">
              Use heap to manage memory allocation and deallocation.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h3 className="text-2xl font-bold text-white mb-4">
          Heap vs Other Data Structures
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-600">
                <th className="text-left py-2 text-white">Operation</th>
                <th className="text-left py-2 text-white">Heap</th>
                <th className="text-left py-2 text-white">BST</th>
                <th className="text-left py-2 text-white">Array</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-gray-300">Insert</td>
                <td className="py-2 text-green-400">O(log n)</td>
                <td className="py-2 text-green-400">O(log n)</td>
                <td className="py-2 text-red-400">O(n)</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-gray-300">Extract Min/Max</td>
                <td className="py-2 text-green-400">O(log n)</td>
                <td className="py-2 text-green-400">O(log n)</td>
                <td className="py-2 text-red-400">O(n)</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-gray-300">Find Min/Max</td>
                <td className="py-2 text-green-400">O(1)</td>
                <td className="py-2 text-green-400">O(log n)</td>
                <td className="py-2 text-red-400">O(n)</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-gray-300">Search</td>
                <td className="py-2 text-red-400">O(n)</td>
                <td className="py-2 text-green-400">O(log n)</td>
                <td className="py-2 text-red-400">O(n)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
