"use client";
import Link from "next/link";
import { useState } from "react";

export default function Queues() {
  const [activeTab, setActiveTab] = useState("fundamentals");

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
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
            Queues Mastery
          </h1>
          <p className="text-gray-400 mt-2">
            FIFO Data Structure, Implementation & Advanced Problems
          </p>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-gray-800/50 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-2 overflow-x-auto">
            {[
              { id: "fundamentals", label: "📚 Fundamentals" },
              { id: "basic", label: "⚙️ Basic Problems" },
              { id: "advanced", label: "🚀 Advanced Problems" },
              { id: "implementation", label: "🔧 Implementation" },
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
        {activeTab === "fundamentals" && <FundamentalsSection />}
        {activeTab === "basic" && <BasicSection />}
        {activeTab === "advanced" && <AdvancedSection />}
        {activeTab === "implementation" && <ImplementationSection />}
      </main>
    </div>
  );
}

// Fundamentals Section
function FundamentalsSection() {
  return (
    <div className="space-y-8">
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Queue Fundamentals
        </h2>
        <p className="text-gray-300 text-lg mb-6">
          Understanding queues as FIFO (First In, First Out) data structures and
          their core operations.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-blue-200 mb-3">
              Key Concepts:
            </h3>
            <ul className="space-y-2 text-blue-100">
              <li>
                • <strong>FIFO:</strong> First In, First Out principle
              </li>
              <li>
                • <strong>Front:</strong> First element (oldest)
              </li>
              <li>
                • <strong>Rear:</strong> Last element (newest)
              </li>
              <li>
                • <strong>Enqueue:</strong> Add element to rear
              </li>
              <li>
                • <strong>Dequeue:</strong> Remove element from front
              </li>
            </ul>
          </div>

          <div className="bg-cyan-900/20 border border-cyan-500/30 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-cyan-200 mb-3">
              Operations:
            </h3>
            <ul className="space-y-2 text-cyan-100">
              <li>
                • <strong>enqueue(x):</strong> Add x to rear
              </li>
              <li>
                • <strong>dequeue():</strong> Remove from front
              </li>
              <li>
                • <strong>front():</strong> View front element
              </li>
              <li>
                • <strong>isEmpty():</strong> Check if empty
              </li>
              <li>
                • <strong>size():</strong> Get number of elements
              </li>
            </ul>
          </div>
        </div>

        <TheoryBlock title="Queue Implementation in JavaScript">
          <CodeBlock
            code={`// Queue Implementation using Array

class Queue {
  constructor() {
    this.items = [];
    this.front = 0;
    this.rear = -1;
  }
  
  // Add element to rear of queue
  enqueue(element) {
    this.rear++;
    this.items[this.rear] = element;
  }
  
  // Remove element from front of queue
  dequeue() {
    if (this.isEmpty()) {
      return "Queue Underflow";
    }
    const element = this.items[this.front];
    this.front++;
    
    // Reset when queue becomes empty
    if (this.front > this.rear) {
      this.front = 0;
      this.rear = -1;
    }
    
    return element;
  }
  
  // Peek at front element without removing
  front() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[this.front];
  }
  
  // Check if queue is empty
  isEmpty() {
    return this.front > this.rear;
  }
  
  // Get size of queue
  size() {
    return this.rear - this.front + 1;
  }
  
  // Display queue contents
  display() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    let result = "Queue: ";
    for (let i = this.front; i <= this.rear; i++) {
      result += this.items[i] + " ";
    }
    return result;
  }
}

// Usage example
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.display()); // "Queue: 10 20 30"
console.log(queue.front()); // 10
console.log(queue.dequeue()); // 10
console.log(queue.display()); // "Queue: 20 30"`}
          />
        </TheoryBlock>
      </div>

      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">Types of Queues</h2>
        <p className="text-gray-300 mb-6">
          Different types of queues and their applications.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-3">
              🔄 Simple Queue
            </h3>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>• Basic FIFO structure</li>
              <li>• Fixed size limitation</li>
              <li>• Linear implementation</li>
            </ul>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-3">
              🔁 Circular Queue
            </h3>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>• Efficient space usage</li>
              <li>• Fixed size array</li>
              <li>• Wraps around when full</li>
            </ul>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-3">
              ⭐ Priority Queue
            </h3>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>• Elements have priorities</li>
              <li>• Higher priority first</li>
              <li>• Used in scheduling</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// Basic Section
function BasicSection() {
  return (
    <div className="space-y-8">
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Basic Queue Problems
        </h2>
        <p className="text-gray-300 mb-6">
          Fundamental queue problems including basic operations and simple
          algorithms.
        </p>
      </div>

      <ProblemBlock
        title="1. Basic Queue Operations"
        difficulty="Easy"
        description="Implement all basic queue operations: enqueue, dequeue, front, isEmpty, and size."
        solution={`// Basic Queue Operations

class Queue {
  constructor() {
    this.items = [];
    this.front = 0;
    this.rear = -1;
  }
  
  // Add element to rear
  enqueue(element) {
    this.rear++;
    this.items[this.rear] = element;
    console.log(\`Enqueued: \${element}\`);
  }
  
  // Remove element from front
  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue Underflow");
      return null;
    }
    
    const element = this.items[this.front];
    this.front++;
    
    // Reset when queue becomes empty
    if (this.front > this.rear) {
      this.front = 0;
      this.rear = -1;
    }
    
    console.log(\`Dequeued: \${element}\`);
    return element;
  }
  
  // Get front element without removing
  getFront() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return null;
    }
    return this.items[this.front];
  }
  
  // Get rear element without removing
  getRear() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return null;
    }
    return this.items[this.rear];
  }
  
  // Check if queue is empty
  isEmpty() {
    return this.front > this.rear;
  }
  
  // Get size of queue
  size() {
    return this.isEmpty() ? 0 : this.rear - this.front + 1;
  }
  
  // Display queue
  display() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return;
    }
    
    let result = "Queue: ";
    for (let i = this.front; i <= this.rear; i++) {
      result += this.items[i] + " ";
    }
    console.log(result);
  }
  
  // Clear queue
  clear() {
    this.items = [];
    this.front = 0;
    this.rear = -1;
    console.log("Queue cleared");
  }
}

// Test cases
const queue = new Queue();

console.log("=== Testing Basic Queue Operations ===");
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.display(); // Queue: 10 20 30

console.log("Front element:", queue.getFront()); // 10
console.log("Rear element:", queue.getRear()); // 30
console.log("Size:", queue.size()); // 3

queue.dequeue();
queue.display(); // Queue: 20 30

console.log("Is empty:", queue.isEmpty()); // false
queue.clear();
console.log("Is empty:", queue.isEmpty()); // true`}
        explanation="Implement queue using array with front and rear pointers. Enqueue adds to rear, dequeue removes from front. Reset pointers when queue becomes empty. Time: O(1) for all operations, Space: O(n)."
      />

      <ProblemBlock
        title="2. Circular Queue Implementation"
        difficulty="Medium"
        description="Implement a circular queue with fixed size that efficiently uses space."
        solution={`// Circular Queue Implementation

class CircularQueue {
  constructor(size) {
    this.size = size;
    this.items = new Array(size);
    this.front = -1;
    this.rear = -1;
  }
  
  // Check if queue is full
  isFull() {
    return (this.rear + 1) % this.size === this.front;
  }
  
  // Check if queue is empty
  isEmpty() {
    return this.front === -1;
  }
  
  // Add element to rear
  enqueue(element) {
    if (this.isFull()) {
      console.log("Queue is full");
      return false;
    }
    
    if (this.isEmpty()) {
      this.front = 0;
    }
    
    this.rear = (this.rear + 1) % this.size;
    this.items[this.rear] = element;
    console.log(\`Enqueued: \${element}\`);
    return true;
  }
  
  // Remove element from front
  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return null;
    }
    
    const element = this.items[this.front];
    
    if (this.front === this.rear) {
      // Only one element
      this.front = -1;
      this.rear = -1;
    } else {
      this.front = (this.front + 1) % this.size;
    }
    
    console.log(\`Dequeued: \${element}\`);
    return element;
  }
  
  // Get front element
  getFront() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return null;
    }
    return this.items[this.front];
  }
  
  // Get rear element
  getRear() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return null;
    }
    return this.items[this.rear];
  }
  
  // Display queue
  display() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return;
    }
    
    let result = "Circular Queue: ";
    let i = this.front;
    
    do {
      result += this.items[i] + " ";
      i = (i + 1) % this.size;
    } while (i !== (this.rear + 1) % this.size);
    
    console.log(result);
  }
  
  // Get current size
  getSize() {
    if (this.isEmpty()) return 0;
    if (this.front <= this.rear) {
      return this.rear - this.front + 1;
    } else {
      return this.size - this.front + this.rear + 1;
    }
  }
}

// Test cases
const cq = new CircularQueue(5);

console.log("=== Testing Circular Queue ===");
cq.enqueue(10);
cq.enqueue(20);
cq.enqueue(30);
cq.enqueue(40);
cq.enqueue(50);
cq.display(); // Circular Queue: 10 20 30 40 50

console.log("Trying to enqueue when full:");
cq.enqueue(60); // Queue is full

cq.dequeue();
cq.dequeue();
cq.display(); // Circular Queue: 30 40 50

cq.enqueue(60);
cq.enqueue(70);
cq.display(); // Circular Queue: 30 40 50 60 70

console.log("Front:", cq.getFront()); // 30
console.log("Rear:", cq.getRear()); // 70
console.log("Size:", cq.getSize()); // 5`}
        explanation="Use modulo arithmetic for circular behavior. Front and rear wrap around using (index + 1) % size. Check full condition: (rear + 1) % size === front. Time: O(1) for all operations, Space: O(n)."
      />

      <ProblemBlock
        title="3. Priority Queue Implementation"
        difficulty="Medium"
        description="Implement a priority queue where elements are served based on their priority."
        solution={`// Priority Queue Implementation

class PriorityQueue {
  constructor() {
    this.items = [];
  }
  
  // Queue element with priority
  enqueue(element, priority) {
    const queueElement = { element, priority };
    let added = false;
    
    // Find correct position based on priority
    for (let i = 0; i < this.items.length; i++) {
      if (queueElement.priority < this.items[i].priority) {
        this.items.splice(i, 0, queueElement);
        added = true;
        break;
      }
    }
    
    // If not added, push to end
    if (!added) {
      this.items.push(queueElement);
    }
    
    console.log(\`Enqueued: \${element} with priority \${priority}\`);
  }
  
  // Remove highest priority element
  dequeue() {
    if (this.isEmpty()) {
      console.log("Priority Queue is empty");
      return null;
    }
    
    const element = this.items.shift();
    console.log(\`Dequeued: \${element.element} (priority: \${element.priority})\`);
    return element.element;
  }
  
  // Get highest priority element
  front() {
    if (this.isEmpty()) {
      console.log("Priority Queue is empty");
      return null;
    }
    return this.items[0].element;
  }
  
  // Check if empty
  isEmpty() {
    return this.items.length === 0;
  }
  
  // Get size
  size() {
    return this.items.length;
  }
  
  // Display priority queue
  display() {
    if (this.isEmpty()) {
      console.log("Priority Queue is empty");
      return;
    }
    
    let result = "Priority Queue: ";
    this.items.forEach(item => {
      result += \`\${item.element}(p:\${item.priority}) \`;
    });
    console.log(result);
  }
}

// Alternative implementation using heap
class MaxPriorityQueue {
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
  
  // Swap elements
  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
  }
  
  // Heapify up
  heapifyUp(index) {
    if (index === 0) return;
    
    const parentIndex = this.getParentIndex(index);
    if (this.heap[parentIndex].priority < this.heap[index].priority) {
      this.swap(parentIndex, index);
      this.heapifyUp(parentIndex);
    }
  }
  
  // Heapify down
  heapifyDown(index) {
    const leftChildIndex = this.getLeftChildIndex(index);
    const rightChildIndex = this.getRightChildIndex(index);
    let largestIndex = index;
    
    if (leftChildIndex < this.heap.length && 
        this.heap[leftChildIndex].priority > this.heap[largestIndex].priority) {
      largestIndex = leftChildIndex;
    }
    
    if (rightChildIndex < this.heap.length && 
        this.heap[rightChildIndex].priority > this.heap[largestIndex].priority) {
      largestIndex = rightChildIndex;
    }
    
    if (largestIndex !== index) {
      this.swap(index, largestIndex);
      this.heapifyDown(largestIndex);
    }
  }
  
  // Enqueue with priority
  enqueue(element, priority) {
    const queueElement = { element, priority };
    this.heap.push(queueElement);
    this.heapifyUp(this.heap.length - 1);
    console.log(\`Enqueued: \${element} with priority \${priority}\`);
  }
  
  // Dequeue highest priority
  dequeue() {
    if (this.isEmpty()) {
      console.log("Priority Queue is empty");
      return null;
    }
    
    const max = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    
    if (this.heap.length > 0) {
      this.heapifyDown(0);
    }
    
    console.log(\`Dequeued: \${max.element} (priority: \${max.priority})\`);
    return max.element;
  }
  
  // Check if empty
  isEmpty() {
    return this.heap.length === 0;
  }
  
  // Get size
  size() {
    return this.heap.length;
  }
}

// Test cases
const pq = new PriorityQueue();

console.log("=== Testing Priority Queue ===");
pq.enqueue("Task A", 3);
pq.enqueue("Task B", 1);
pq.enqueue("Task C", 2);
pq.enqueue("Task D", 1);
pq.display(); // Priority Queue: Task B(p:1) Task D(p:1) Task C(p:2) Task A(p:3)

pq.dequeue(); // Task B
pq.dequeue(); // Task D
pq.display(); // Priority Queue: Task C(p:2) Task A(p:3)

console.log("\\n=== Testing Max Priority Queue (Heap-based) ===");
const maxPQ = new MaxPriorityQueue();
maxPQ.enqueue("High Priority", 10);
maxPQ.enqueue("Low Priority", 1);
maxPQ.enqueue("Medium Priority", 5);
maxPQ.enqueue("Highest Priority", 15);

while (!maxPQ.isEmpty()) {
  maxPQ.dequeue();
}`}
        explanation="Maintain elements in priority order. Lower numbers = higher priority. Use array insertion or heap for efficient implementation. Time: O(n) for array, O(log n) for heap, Space: O(n)."
      />
    </div>
  );
}

// Advanced Section
function AdvancedSection() {
  return (
    <div className="space-y-8">
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Advanced Queue Problems
        </h2>
        <p className="text-gray-300 mb-6">
          Advanced queue problems including stack implementation and number
          generation.
        </p>
      </div>

      <ProblemBlock
        title="4. Implementing Stack using Queue"
        difficulty="Medium"
        description="Implement a stack data structure using only queue operations."
        solution={`// Implementing Stack using Queue

class StackUsingQueue {
  constructor() {
    this.q1 = [];
    this.q2 = [];
  }
  
  // Push element to stack
  push(element) {
    // Add element to q1
    this.q1.push(element);
    console.log(\`Pushed: \${element}\`);
  }
  
  // Pop element from stack
  pop() {
    if (this.q1.length === 0) {
      console.log("Stack is empty");
      return null;
    }
    
    // Move all elements except last from q1 to q2
    while (this.q1.length > 1) {
      this.q2.push(this.q1.shift());
    }
    
    // Get the last element (top of stack)
    const element = this.q1.shift();
    
    // Swap q1 and q2
    [this.q1, this.q2] = [this.q2, this.q1];
    
    console.log(\`Popped: \${element}\`);
    return element;
  }
  
  // Get top element without removing
  top() {
    if (this.q1.length === 0) {
      console.log("Stack is empty");
      return null;
    }
    
    // Move all elements except last from q1 to q2
    while (this.q1.length > 1) {
      this.q2.push(this.q1.shift());
    }
    
    const element = this.q1[0];
    
    // Move element back to q1
    this.q2.push(this.q1.shift());
    
    // Swap q1 and q2
    [this.q1, this.q2] = [this.q2, this.q1];
    
    return element;
  }
  
  // Check if stack is empty
  isEmpty() {
    return this.q1.length === 0;
  }
  
  // Get size
  size() {
    return this.q1.length;
  }
  
  // Display stack
  display() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
      return;
    }
    
    console.log("Stack (top to bottom):", this.q1.slice().reverse());
  }
}

// Alternative implementation using single queue
class StackUsingSingleQueue {
  constructor() {
    this.queue = [];
  }
  
  // Push element to stack
  push(element) {
    // Add element to queue
    this.queue.push(element);
    
    // Rotate queue to make new element at front
    for (let i = 0; i < this.queue.length - 1; i++) {
      this.queue.push(this.queue.shift());
    }
    
    console.log(\`Pushed: \${element}\`);
  }
  
  // Pop element from stack
  pop() {
    if (this.queue.length === 0) {
      console.log("Stack is empty");
      return null;
    }
    
    const element = this.queue.shift();
    console.log(\`Popped: \${element}\`);
    return element;
  }
  
  // Get top element
  top() {
    if (this.queue.length === 0) {
      console.log("Stack is empty");
      return null;
    }
    return this.queue[0];
  }
  
  // Check if empty
  isEmpty() {
    return this.queue.length === 0;
  }
  
  // Get size
  size() {
    return this.queue.length;
  }
  
  // Display stack
  display() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
      return;
    }
    console.log("Stack (top to bottom):", this.queue);
  }
}

// Test cases
console.log("=== Testing Stack using Two Queues ===");
const stack1 = new StackUsingQueue();
stack1.push(10);
stack1.push(20);
stack1.push(30);
stack1.display(); // Stack (top to bottom): [30, 20, 10]

console.log("Top element:", stack1.top()); // 30
stack1.pop(); // 30
stack1.display(); // Stack (top to bottom): [20, 10]

console.log("\\n=== Testing Stack using Single Queue ===");
const stack2 = new StackUsingSingleQueue();
stack2.push(10);
stack2.push(20);
stack2.push(30);
stack2.display(); // Stack (top to bottom): [30, 20, 10]

console.log("Top element:", stack2.top()); // 30
stack2.pop(); // 30
stack2.display(); // Stack (top to bottom): [20, 10]`}
        explanation="Use two queues: move all elements except last from q1 to q2, pop last element, swap queues. For single queue: rotate queue after each push to maintain stack order. Time: O(n) for push, O(1) for pop, Space: O(n)."
      />

      <ProblemBlock
        title="5. Reversing a Queue"
        difficulty="Medium"
        description="Reverse a queue using only queue operations and a stack."
        solution={`// Reversing a Queue

function reverseQueue(queue) {
  const stack = [];
  
  // Push all elements from queue to stack
  while (!queue.isEmpty()) {
    stack.push(queue.dequeue());
  }
  
  // Pop all elements from stack back to queue
  while (stack.length > 0) {
    queue.enqueue(stack.pop());
  }
  
  return queue;
}

// Alternative implementation using recursion
function reverseQueueRecursive(queue) {
  if (queue.isEmpty()) {
    return;
  }
  
  // Remove front element
  const element = queue.dequeue();
  
  // Recursively reverse remaining queue
  reverseQueueRecursive(queue);
  
  // Add element to rear
  queue.enqueue(element);
}

// Alternative implementation using array methods
function reverseQueueArray(queue) {
  // Convert queue to array
  const arr = [];
  while (!queue.isEmpty()) {
    arr.push(queue.dequeue());
  }
  
  // Reverse array
  arr.reverse();
  
  // Add back to queue
  for (const element of arr) {
    queue.enqueue(element);
  }
  
  return queue;
}

// Detailed implementation with step-by-step explanation
function reverseQueueDetailed(queue) {
  console.log("=== Reversing Queue Step by Step ===");
  
  const stack = [];
  let step = 1;
  
  console.log("Original queue:", queue.display());
  
  // Step 1: Move all elements from queue to stack
  console.log("\\nStep 1: Moving elements from queue to stack");
  while (!queue.isEmpty()) {
    const element = queue.dequeue();
    stack.push(element);
    console.log(\`Step \${step++}: Dequeued \${element}, Stack: [\${stack.join(', ')}]\`);
  }
  
  console.log("\\nStep 2: Moving elements from stack back to queue");
  // Step 2: Move all elements from stack back to queue
  while (stack.length > 0) {
    const element = stack.pop();
    queue.enqueue(element);
    console.log(\`Step \${step++}: Popped \${element}, Enqueued \${element}\`);
  }
  
  console.log("\\nFinal reversed queue:", queue.display());
  return queue;
}

// Test cases
class Queue {
  constructor() {
    this.items = [];
    this.front = 0;
    this.rear = -1;
  }
  
  enqueue(element) {
    this.rear++;
    this.items[this.rear] = element;
  }
  
  dequeue() {
    if (this.isEmpty()) return null;
    const element = this.items[this.front];
    this.front++;
    if (this.front > this.rear) {
      this.front = 0;
      this.rear = -1;
    }
    return element;
  }
  
  isEmpty() {
    return this.front > this.rear;
  }
  
  display() {
    if (this.isEmpty()) return "Queue is empty";
    let result = [];
    for (let i = this.front; i <= this.rear; i++) {
      result.push(this.items[i]);
    }
    return result.join(' -> ');
  }
}

// Test the implementations
const queue1 = new Queue();
[1, 2, 3, 4, 5].forEach(el => queue1.enqueue(el));

console.log("=== Testing Queue Reversal ===");
console.log("Original queue:", queue1.display()); // 1 -> 2 -> 3 -> 4 -> 5

const reversedQueue1 = reverseQueue(queue1);
console.log("Reversed queue:", reversedQueue1.display()); // 5 -> 4 -> 3 -> 2 -> 1

// Test recursive approach
const queue2 = new Queue();
[10, 20, 30, 40].forEach(el => queue2.enqueue(el));

console.log("\\n=== Testing Recursive Reversal ===");
console.log("Original queue:", queue2.display()); // 10 -> 20 -> 30 -> 40
reverseQueueRecursive(queue2);
console.log("Reversed queue:", queue2.display()); // 40 -> 30 -> 20 -> 10

// Test detailed approach
const queue3 = new Queue();
[100, 200, 300].forEach(el => queue3.enqueue(el));
reverseQueueDetailed(queue3);`}
        explanation="Use stack as intermediate storage: dequeue all elements to stack, then pop from stack back to queue. Recursive approach: dequeue one element, reverse remaining queue, enqueue element. Time: O(n), Space: O(n)."
      />

      <ProblemBlock
        title="6. Generate Numbers with Given Digits"
        difficulty="Medium"
        description="Generate numbers using only given digits in sorted order using queue."
        solution={`// Generate Numbers with Given Digits

function generateNumbersWithDigits(digits, n) {
  const queue = [];
  const result = [];
  
  // Add all single-digit numbers to queue
  for (const digit of digits) {
    queue.push(digit);
  }
  
  let count = 0;
  
  while (queue.length > 0 && count < n) {
    const current = queue.shift();
    result.push(current);
    count++;
    
    // Generate numbers by appending each digit
    for (const digit of digits) {
      const newNumber = current * 10 + digit;
      queue.push(newNumber);
    }
  }
  
  return result;
}

// Alternative implementation with detailed explanation
function generateNumbersDetailed(digits, n) {
  console.log(\`Generating first \${n} numbers using digits [\${digits.join(', ')}]\`);
  
  const queue = [];
  const result = [];
  
  // Step 1: Add single-digit numbers
  console.log("\\nStep 1: Adding single-digit numbers to queue");
  for (const digit of digits) {
    queue.push(digit);
    console.log(\`Added: \${digit}\`);
  }
  
  let count = 0;
  let step = 2;
  
  console.log("\\nStep 2: Generating multi-digit numbers");
  while (queue.length > 0 && count < n) {
    const current = queue.shift();
    result.push(current);
    count++;
    
    console.log(\`Step \${step++}: Generated \${current} (count: \${count})\`);
    
    // Generate next level numbers
    for (const digit of digits) {
      const newNumber = current * 10 + digit;
      queue.push(newNumber);
      console.log(\`  Added to queue: \${newNumber}\`);
    }
    
    console.log(\`  Queue: [\${queue.join(', ')}]\`);
  }
  
  console.log(\`\\nFinal result: [\${result.join(', ')}]\`);
  return result;
}

// Generate numbers up to a maximum value
function generateNumbersUpTo(digits, maxValue) {
  const queue = [];
  const result = [];
  
  // Add single-digit numbers
  for (const digit of digits) {
    if (digit <= maxValue) {
      queue.push(digit);
    }
  }
  
  while (queue.length > 0) {
    const current = queue.shift();
    result.push(current);
    
    // Generate next level numbers
    for (const digit of digits) {
      const newNumber = current * 10 + digit;
      if (newNumber <= maxValue) {
        queue.push(newNumber);
      }
    }
  }
  
  return result;
}

// Generate numbers with specific pattern
function generateNumbersWithPattern(digits, pattern) {
  const queue = [];
  const result = [];
  
  // Add single-digit numbers that match pattern
  for (const digit of digits) {
    if (pattern.test(digit.toString())) {
      queue.push(digit);
    }
  }
  
  while (queue.length > 0) {
    const current = queue.shift();
    result.push(current);
    
    // Generate next level numbers
    for (const digit of digits) {
      const newNumber = current * 10 + digit;
      if (pattern.test(newNumber.toString())) {
        queue.push(newNumber);
      }
    }
  }
  
  return result;
}

// Test cases
console.log("=== Testing Number Generation ===");

// Test 1: Generate first 10 numbers using digits 1, 2, 3
const digits1 = [1, 2, 3];
console.log("\\nTest 1: First 10 numbers using digits [1, 2, 3]");
const result1 = generateNumbersWithDigits(digits1, 10);
console.log("Result:", result1); // [1, 2, 3, 11, 12, 13, 21, 22, 23, 31]

// Test 2: Generate first 15 numbers using digits 5, 6
const digits2 = [5, 6];
console.log("\\nTest 2: First 15 numbers using digits [5, 6]");
const result2 = generateNumbersWithDigits(digits2, 15);
console.log("Result:", result2); // [5, 6, 55, 56, 65, 66, 555, 556, 565, 566, 655, 656, 665, 666, 5555]

// Test 3: Detailed generation
console.log("\\nTest 3: Detailed generation");
generateNumbersDetailed([1, 2], 8);

// Test 4: Generate numbers up to 100
console.log("\\nTest 4: Numbers up to 100 using digits [1, 2, 3]");
const result4 = generateNumbersUpTo([1, 2, 3], 100);
console.log("Result:", result4);

// Test 5: Generate numbers with even pattern
console.log("\\nTest 5: Even numbers using digits [1, 2, 3, 4]");
const evenPattern = /^[1-4]*[24]$/; // Ends with 2 or 4
const result5 = generateNumbersWithPattern([1, 2, 3, 4], evenPattern);
console.log("Result:", result5.slice(0, 20)); // First 20 even numbers`}
        explanation="Use BFS approach with queue. Start with single digits, for each number append all possible digits to generate next level. Maintains sorted order naturally. Time: O(n), Space: O(n)."
      />
    </div>
  );
}

// Implementation Section
function ImplementationSection() {
  return (
    <div className="space-y-8">
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Queue Implementation Techniques
        </h2>
        <p className="text-gray-300 mb-6">
          Different ways to implement queues and their trade-offs.
        </p>
      </div>

      <ProblemBlock
        title="7. Queue using Linked List"
        difficulty="Medium"
        description="Implement queue using linked list for dynamic size and efficient operations."
        solution={`// Queue using Linked List

class QueueNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class QueueLinkedList {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }
  
  // Add element to rear
  enqueue(element) {
    const newNode = new QueueNode(element);
    
    if (this.rear === null) {
      // First element
      this.front = this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
    
    this.size++;
    console.log(\`Enqueued: \${element}\`);
  }
  
  // Remove element from front
  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return null;
    }
    
    const element = this.front.data;
    this.front = this.front.next;
    
    // If queue becomes empty
    if (this.front === null) {
      this.rear = null;
    }
    
    this.size--;
    console.log(\`Dequeued: \${element}\`);
    return element;
  }
  
  // Get front element
  getFront() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return null;
    }
    return this.front.data;
  }
  
  // Get rear element
  getRear() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return null;
    }
    return this.rear.data;
  }
  
  // Check if empty
  isEmpty() {
    return this.front === null;
  }
  
  // Get size
  getSize() {
    return this.size;
  }
  
  // Display queue
  display() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return;
    }
    
    let result = "Queue: ";
    let current = this.front;
    
    while (current !== null) {
      result += current.data + " -> ";
      current = current.next;
    }
    
    result += "null";
    console.log(result);
  }
  
  // Clear queue
  clear() {
    this.front = null;
    this.rear = null;
    this.size = 0;
    console.log("Queue cleared");
  }
}

// Test cases
const queue = new QueueLinkedList();

console.log("=== Testing Queue with Linked List ===");
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.display(); // Queue: 10 -> 20 -> 30 -> null

console.log("Front:", queue.getFront()); // 10
console.log("Rear:", queue.getRear()); // 30
console.log("Size:", queue.getSize()); // 3

queue.dequeue();
queue.display(); // Queue: 20 -> 30 -> null

console.log("Is empty:", queue.isEmpty()); // false
queue.clear();
console.log("Is empty:", queue.isEmpty()); // true`}
        explanation="Use two pointers: front and rear. Enqueue adds to rear, dequeue removes from front. Dynamic size, no memory waste. Time: O(1) for all operations, Space: O(n)."
      />

      <ProblemBlock
        title="8. Deque (Double-ended Queue)"
        difficulty="Medium"
        description="Implement a deque that allows insertion and deletion at both ends."
        solution={`// Deque (Double-ended Queue) Implementation

class Deque {
  constructor() {
    this.items = [];
    this.front = 0;
    this.rear = -1;
  }
  
  // Add element to front
  addFront(element) {
    if (this.front > 0) {
      this.front--;
      this.items[this.front] = element;
    } else {
      // Shift all elements to make room
      for (let i = this.rear; i >= this.front; i--) {
        this.items[i + 1] = this.items[i];
      }
      this.items[this.front] = element;
      this.rear++;
    }
    console.log(\`Added to front: \${element}\`);
  }
  
  // Add element to rear
  addRear(element) {
    this.rear++;
    this.items[this.rear] = element;
    console.log(\`Added to rear: \${element}\`);
  }
  
  // Remove element from front
  removeFront() {
    if (this.isEmpty()) {
      console.log("Deque is empty");
      return null;
    }
    
    const element = this.items[this.front];
    this.front++;
    
    // Reset if empty
    if (this.front > this.rear) {
      this.front = 0;
      this.rear = -1;
    }
    
    console.log(\`Removed from front: \${element}\`);
    return element;
  }
  
  // Remove element from rear
  removeRear() {
    if (this.isEmpty()) {
      console.log("Deque is empty");
      return null;
    }
    
    const element = this.items[this.rear];
    this.rear--;
    
    // Reset if empty
    if (this.front > this.rear) {
      this.front = 0;
      this.rear = -1;
    }
    
    console.log(\`Removed from rear: \${element}\`);
    return element;
  }
  
  // Get front element
  getFront() {
    if (this.isEmpty()) {
      console.log("Deque is empty");
      return null;
    }
    return this.items[this.front];
  }
  
  // Get rear element
  getRear() {
    if (this.isEmpty()) {
      console.log("Deque is empty");
      return null;
    }
    return this.items[this.rear];
  }
  
  // Check if empty
  isEmpty() {
    return this.front > this.rear;
  }
  
  // Get size
  size() {
    return this.isEmpty() ? 0 : this.rear - this.front + 1;
  }
  
  // Display deque
  display() {
    if (this.isEmpty()) {
      console.log("Deque is empty");
      return;
    }
    
    let result = "Deque: ";
    for (let i = this.front; i <= this.rear; i++) {
      result += this.items[i] + " ";
    }
    console.log(result);
  }
}

// Alternative implementation using circular array
class CircularDeque {
  constructor(capacity) {
    this.capacity = capacity;
    this.items = new Array(capacity);
    this.front = 0;
    this.rear = 0;
    this.size = 0;
  }
  
  // Check if full
  isFull() {
    return this.size === this.capacity;
  }
  
  // Add to front
  addFront(element) {
    if (this.isFull()) {
      console.log("Deque is full");
      return false;
    }
    
    if (this.isEmpty()) {
      this.items[this.front] = element;
    } else {
      this.front = (this.front - 1 + this.capacity) % this.capacity;
      this.items[this.front] = element;
    }
    
    this.size++;
    console.log(\`Added to front: \${element}\`);
    return true;
  }
  
  // Add to rear
  addRear(element) {
    if (this.isFull()) {
      console.log("Deque is full");
      return false;
    }
    
    this.items[this.rear] = element;
    this.rear = (this.rear + 1) % this.capacity;
    this.size++;
    console.log(\`Added to rear: \${element}\`);
    return true;
  }
  
  // Remove from front
  removeFront() {
    if (this.isEmpty()) {
      console.log("Deque is empty");
      return null;
    }
    
    const element = this.items[this.front];
    this.front = (this.front + 1) % this.capacity;
    this.size--;
    console.log(\`Removed from front: \${element}\`);
    return element;
  }
  
  // Remove from rear
  removeRear() {
    if (this.isEmpty()) {
      console.log("Deque is empty");
      return null;
    }
    
    this.rear = (this.rear - 1 + this.capacity) % this.capacity;
    const element = this.items[this.rear];
    this.size--;
    console.log(\`Removed from rear: \${element}\`);
    return element;
  }
  
  // Check if empty
  isEmpty() {
    return this.size === 0;
  }
  
  // Get size
  getSize() {
    return this.size;
  }
  
  // Display deque
  display() {
    if (this.isEmpty()) {
      console.log("Deque is empty");
      return;
    }
    
    let result = "Circular Deque: ";
    let count = 0;
    let i = this.front;
    
    while (count < this.size) {
      result += this.items[i] + " ";
      i = (i + 1) % this.capacity;
      count++;
    }
    
    console.log(result);
  }
}

// Test cases
console.log("=== Testing Deque ===");
const deque = new Deque();

deque.addRear(10);
deque.addRear(20);
deque.addFront(5);
deque.display(); // Deque: 5 10 20

deque.removeFront();
deque.removeRear();
deque.display(); // Deque: 10

console.log("\\n=== Testing Circular Deque ===");
const cDeque = new CircularDeque(5);

cDeque.addFront(1);
cDeque.addRear(2);
cDeque.addFront(3);
cDeque.addRear(4);
cDeque.display(); // Circular Deque: 3 1 2 4

cDeque.removeFront();
cDeque.removeRear();
cDeque.display(); // Circular Deque: 1 2`}
        explanation="Deque allows insertion/deletion at both ends. Use array with front/rear pointers or circular array for efficiency. Time: O(1) for all operations, Space: O(n)."
      />

      <ProblemBlock
        title="9. Queue Applications in Real-world"
        difficulty="Easy"
        description="Common real-world applications of queues and their implementations."
        solution={`// Queue Applications in Real-world

// 1. Task Scheduler
class TaskScheduler {
  constructor() {
    this.taskQueue = [];
    this.priorityQueue = [];
  }
  
  addTask(task, priority = 0) {
    if (priority > 0) {
      this.priorityQueue.push({ task, priority });
      this.priorityQueue.sort((a, b) => b.priority - a.priority);
    } else {
      this.taskQueue.push(task);
    }
    console.log(\`Added task: \${task} (priority: \${priority})\`);
  }
  
  executeNext() {
    if (this.priorityQueue.length > 0) {
      const { task } = this.priorityQueue.shift();
      console.log(\`Executing priority task: \${task}\`);
      return task;
    } else if (this.taskQueue.length > 0) {
      const task = this.taskQueue.shift();
      console.log(\`Executing task: \${task}\`);
      return task;
    } else {
      console.log("No tasks to execute");
      return null;
    }
  }
  
  getQueueStatus() {
    return {
      regularTasks: this.taskQueue.length,
      priorityTasks: this.priorityQueue.length,
      totalTasks: this.taskQueue.length + this.priorityQueue.length
    };
  }
}

// 2. Print Spooler
class PrintSpooler {
  constructor() {
    this.printQueue = [];
    this.currentJob = null;
  }
  
  addPrintJob(document, priority = 0) {
    const job = {
      id: Date.now(),
      document,
      priority,
      timestamp: new Date()
    };
    
    if (priority > 0) {
      // Insert based on priority
      let inserted = false;
      for (let i = 0; i < this.printQueue.length; i++) {
        if (this.printQueue[i].priority < priority) {
          this.printQueue.splice(i, 0, job);
          inserted = true;
          break;
        }
      }
      if (!inserted) {
        this.printQueue.push(job);
      }
    } else {
      this.printQueue.push(job);
    }
    
    console.log(\`Added print job: \${document} (ID: \${job.id})\`);
  }
  
  processNextJob() {
    if (this.printQueue.length === 0) {
      console.log("No print jobs in queue");
      return null;
    }
    
    this.currentJob = this.printQueue.shift();
    console.log(\`Processing: \${this.currentJob.document} (ID: \${this.currentJob.id})\`);
    
    // Simulate printing
    setTimeout(() => {
      console.log(\`Completed: \${this.currentJob.document}\`);
      this.currentJob = null;
    }, 1000);
    
    return this.currentJob;
  }
  
  getQueueStatus() {
    return {
      queueLength: this.printQueue.length,
      currentJob: this.currentJob?.document || "None",
      nextJob: this.printQueue[0]?.document || "None"
    };
  }
}

// 3. Breadth-First Search (BFS) using Queue
function bfs(graph, start) {
  const visited = new Set();
  const queue = [start];
  const result = [];
  
  visited.add(start);
  
  while (queue.length > 0) {
    const current = queue.shift();
    result.push(current);
    
    console.log(\`Visiting: \${current}\`);
    
    for (const neighbor of graph[current] || []) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
        console.log(\`Added to queue: \${neighbor}\`);
      }
    }
  }
  
  return result;
}

// 4. Call Center System
class CallCenter {
  constructor() {
    this.callQueue = [];
    this.agents = [];
    this.maxWaitTime = 300000; // 5 minutes
  }
  
  addCall(callerId, priority = 0) {
    const call = {
      id: callerId,
      priority,
      timestamp: Date.now(),
      waitTime: 0
    };
    
    if (priority > 0) {
      this.callQueue.unshift(call);
    } else {
      this.callQueue.push(call);
    }
    
    console.log(\`Call \${callerId} added to queue\`);
  }
  
  assignAgent(agentId) {
    if (this.callQueue.length === 0) {
      console.log("No calls in queue");
      return null;
    }
    
    const call = this.callQueue.shift();
    call.waitTime = Date.now() - call.timestamp;
    
    console.log(\`Agent \${agentId} assigned to call \${call.id} (waited: \${call.waitTime}ms)\`);
    return call;
  }
  
  getQueueStats() {
    const now = Date.now();
    const calls = this.callQueue.map(call => ({
      ...call,
      waitTime: now - call.timestamp
    }));
    
    return {
      totalCalls: calls.length,
      averageWaitTime: calls.reduce((sum, call) => sum + call.waitTime, 0) / calls.length || 0,
      longestWait: Math.max(...calls.map(call => call.waitTime), 0)
    };
  }
}

// Test cases
console.log("=== Testing Task Scheduler ===");
const scheduler = new TaskScheduler();
scheduler.addTask("Backup database", 0);
scheduler.addTask("Critical system update", 10);
scheduler.addTask("Send email", 0);
scheduler.addTask("Security scan", 5);

console.log("Queue status:", scheduler.getQueueStatus());
scheduler.executeNext(); // Critical system update
scheduler.executeNext(); // Security scan

console.log("\\n=== Testing Print Spooler ===");
const spooler = new PrintSpooler();
spooler.addPrintJob("Document1.pdf", 0);
spooler.addPrintJob("Urgent Report.pdf", 10);
spooler.addPrintJob("Document2.pdf", 0);

console.log("Spooler status:", spooler.getQueueStatus());
spooler.processNextJob(); // Urgent Report.pdf

console.log("\\n=== Testing BFS ===");
const graph = {
  'A': ['B', 'C'],
  'B': ['A', 'D', 'E'],
  'C': ['A', 'F'],
  'D': ['B'],
  'E': ['B', 'F'],
  'F': ['C', 'E']
};

console.log("BFS traversal:", bfs(graph, 'A'));

console.log("\\n=== Testing Call Center ===");
const callCenter = new CallCenter();
callCenter.addCall("Caller1", 0);
callCenter.addCall("VIP Caller", 10);
callCenter.addCall("Caller2", 0);

console.log("Call center stats:", callCenter.getQueueStats());
callCenter.assignAgent("Agent1"); // VIP Caller`}
        explanation="Queues are used in task scheduling, print spooling, BFS traversal, call centers, and many other real-world applications where FIFO processing is required. Time: O(1) for enqueue/dequeue, Space: O(n)."
      />
    </div>
  );
}

// Helper Components
function TheoryBlock({ title, children }) {
  return (
    <div className="bg-gray-900/50 rounded-lg p-6 mb-6 border border-gray-700">
      <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
      {children}
    </div>
  );
}

function CodeBlock({ code }) {
  return (
    <div className="bg-gray-950 rounded-lg p-4 overflow-x-auto">
      <pre className="text-sm text-green-400">
        <code>{code}</code>
      </pre>
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

  const difficultyColors = {
    Easy: "bg-green-500/20 text-green-400",
    Medium: "bg-yellow-500/20 text-yellow-400",
    Hard: "bg-red-500/20 text-red-400",
  };

  return (
    <div className="bg-gray-800/40 rounded-xl p-6 mb-8 border border-gray-700/50">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <span
          className={`px-3 py-1 rounded text-sm font-semibold ${difficultyColors[difficulty]}`}
        >
          {difficulty}
        </span>
      </div>

      <p className="text-gray-300 mb-4">{description}</p>

      <button
        onClick={() => setShowSolution(!showSolution)}
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors mb-4"
      >
        {showSolution ? "Hide Solution" : "Show Solution"}
      </button>

      {showSolution && (
        <div className="space-y-4">
          <div className="bg-gray-900 rounded-lg p-4">
            <h4 className="text-lg font-medium text-white mb-2">
              JavaScript Solution:
            </h4>
            <pre className="whitespace-pre-wrap text-sm text-gray-200">
              <code>{solution}</code>
            </pre>
          </div>
          <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-4">
            <p className="text-blue-200">
              <strong>💡 Explanation:</strong>
              <br />
              {explanation}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
