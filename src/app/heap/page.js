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

function FundamentalsSection() {
  return (
    <div className="space-y-8">
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Binary Heap Introduction
        </h2>
        <p className="text-gray-300 mb-6">
          A Binary Heap is a complete binary tree that satisfies the heap
          property. It's commonly used to implement priority queues and heap
          sort.
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
            <div className="text-green-400">// For node at index i:</div>
            <div className="text-blue-400">// Parent: Math.floor((i-1)/2)</div>
            <div className="text-blue-400">// Left Child: 2*i + 1</div>
            <div className="text-blue-400">// Right Child: 2*i + 2</div>
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

        <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
          <pre className="text-green-400 text-sm">
            <code>{`// Binary Heap Implementation

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
}`}</code>
          </pre>
        </div>
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
        solution={`// Binary Heap Insert

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
insertWithExplanation(heap3, 5);`}
        explanation="Insert element at end, then heapify up by comparing with parent and swapping if needed. Time: O(log n), Space: O(1)."
      />

      <ProblemBlock
        title="2. Binary Heap Extract Min/Max"
        difficulty="Medium"
        description="Extract the minimum (or maximum) element from a binary heap and maintain heap property."
        solution={`// Binary Heap Extract Min/Max

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
extractMinDetailed(heap);`}
        explanation="Extract root element, move last element to root, then heapify down by comparing with children and swapping with smaller/larger child. Time: O(log n), Space: O(1)."
      />

      <ProblemBlock
        title="3. Binary Heap Decrease Key & Delete"
        difficulty="Medium"
        description="Decrease key at specific index and delete element from heap."
        solution={`// Binary Heap Decrease Key & Delete

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
console.log("After deleting element at index 2:", heap3);`}
        explanation="Decrease key: update value and heapify up. Delete: decrease to negative infinity, heapify up to root, then extract min. Alternative: swap with last element and heapify. Time: O(log n), Space: O(1)."
      />

      <ProblemBlock
        title="4. Heap Sort"
        difficulty="Medium"
        description="Sort an array using heap sort algorithm."
        solution={`// Heap Sort

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
heapSortDetailed([...arr2]);`}
        explanation="Build max heap, then repeatedly extract maximum and place at end. Use heapify down to maintain heap property. Time: O(n log n), Space: O(1)."
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
        solution={`// Sort K-Sorted Array

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
sortKSortedArray([...arr3], 2);`}
        explanation="Use min heap of size k+1. Insert first k+1 elements, then for each remaining element: extract min, add to result, insert new element. Time: O(n log k), Space: O(k)."
      />

      <ProblemBlock
        title="2. Buy Maximum Items with Given Sum"
        difficulty="Easy"
        description="Find maximum number of items that can be bought with given sum."
        solution={`// Buy Maximum Items with Given Sum

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
buyMaximumItemsDetailed([...prices3], sum3);`}
        explanation="Use min heap to always buy cheapest available item. Sort prices and buy from cheapest to most expensive. Time: O(n log n), Space: O(n)."
      />

      <ProblemBlock
        title="3. K Largest Elements"
        difficulty="Medium"
        description="Find K largest elements in an array."
        solution={`// K Largest Elements

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
kLargestElementsQuickSelect([...arr2], k2);`}
        explanation="Min heap approach: maintain heap of size k, replace root if current element is larger. Max heap: extract k largest elements. Time: O(n log k) for min heap, O(n log n) for max heap, Space: O(k)."
      />

      <ProblemBlock
        title="4. K Closest Elements"
        difficulty="Medium"
        description="Find K closest elements to a given value in a sorted array."
        solution={`// K Closest Elements

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
kClosestElementsMinHeap([...arr3], x3, k3);`}
        explanation="Two pointers: find window of k elements with minimum total distance. Binary search: find optimal starting position. Max heap: maintain k closest elements. Time: O(log n + k) for binary search, O(n log k) for heap, Space: O(k)."
      />

      <ProblemBlock
        title="5. Merge K Sorted Arrays"
        difficulty="Hard"
        description="Merge K sorted arrays into one sorted array."
        solution={`// Merge K Sorted Arrays

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
mergeKSortedArraysPQ([...arrays3]);`}
        explanation="Min heap: insert first element from each array, extract minimum and add next element from same array. Divide and conquer: recursively merge halves. Time: O(n log k), Space: O(k)."
      />

      <ProblemBlock
        title="6. Median of a Stream"
        difficulty="Hard"
        description="Find median of a stream of integers using two heaps."
        solution={`// Median of a Stream

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
medianOfStreamDetailed();`}
        explanation="Use two heaps: max heap for smaller half, min heap for larger half. Keep heaps balanced (size difference ≤ 1). Median is root of max heap (odd) or average of both roots (even). Time: O(log n) per insertion, Space: O(n)."
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
              Dijkstra's Algorithm
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
