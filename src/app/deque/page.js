"use client";
import Link from "next/link";
import { useState } from "react";

export default function Deque() {
  const [activeTab, setActiveTab] = useState("fundamentals");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <header className="border-b border-gray-700 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link
            href="/"
            className="text-purple-400 hover:text-purple-300 mb-2 inline-block"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Deque Mastery
          </h1>
          <p className="text-gray-400 mt-2">
            Double-ended Queue, Sliding Window & Advanced Algorithms
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
              { id: "applications", label: "🎯 Applications" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 font-semibold whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? "text-purple-400 border-b-2 border-purple-400"
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
        {activeTab === "applications" && <ApplicationsSection />}
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
          Deque Fundamentals
        </h2>
        <p className="text-gray-300 text-lg mb-6">
          Understanding deque (double-ended queue) as a data structure that
          allows insertion and deletion at both ends.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-purple-200 mb-3">
              Key Concepts:
            </h3>
            <ul className="space-y-2 text-purple-100">
              <li>
                • <strong>Double-ended:</strong> Insert/delete at both ends
              </li>
              <li>
                • <strong>Front:</strong> First element (left end)
              </li>
              <li>
                • <strong>Rear:</strong> Last element (right end)
              </li>
              <li>
                • <strong>addFront:</strong> Add element to front
              </li>
              <li>
                • <strong>addRear:</strong> Add element to rear
              </li>
              <li>
                • <strong>removeFront:</strong> Remove from front
              </li>
              <li>
                • <strong>removeRear:</strong> Remove from rear
              </li>
            </ul>
          </div>

          <div className="bg-pink-900/20 border border-pink-500/30 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-pink-200 mb-3">
              Operations:
            </h3>
            <ul className="space-y-2 text-pink-100">
              <li>
                • <strong>addFront(x):</strong> Add x to front
              </li>
              <li>
                • <strong>addRear(x):</strong> Add x to rear
              </li>
              <li>
                • <strong>removeFront():</strong> Remove from front
              </li>
              <li>
                • <strong>removeRear():</strong> Remove from rear
              </li>
              <li>
                • <strong>getFront():</strong> View front element
              </li>
              <li>
                • <strong>getRear():</strong> View rear element
              </li>
              <li>
                • <strong>isEmpty():</strong> Check if empty
              </li>
            </ul>
          </div>
        </div>

        <TheoryBlock title="Deque Implementation in JavaScript">
          <CodeBlock
            code={`// Deque Implementation using Array

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

// Usage example
const deque = new Deque();
deque.addRear(10);
deque.addRear(20);
deque.addFront(5);
deque.display(); // "Deque: 5 10 20"
console.log(deque.getFront()); // 5
console.log(deque.getRear()); // 20
deque.removeFront(); // 5
deque.display(); // "Deque: 10 20"`}
          />
        </TheoryBlock>
      </div>

      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Deque Applications
        </h2>
        <p className="text-gray-300 mb-6">
          Common applications where deque is particularly useful.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-3">
              🪟 Sliding Window
            </h3>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>• Maximum of subarrays</li>
              <li>• Minimum of subarrays</li>
              <li>• Efficient window operations</li>
            </ul>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-3">
              📊 Min/Max Structures
            </h3>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>• O(1) min/max operations</li>
              <li>• Efficient data structures</li>
              <li>• Range queries</li>
            </ul>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-3">
              🔄 Circular Problems
            </h3>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>• Circular tour problems</li>
              <li>• Round-robin algorithms</li>
              <li>• Circular buffer</li>
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
          Basic Deque Problems
        </h2>
        <p className="text-gray-300 mb-6">
          Fundamental deque problems including basic operations and simple
          algorithms.
        </p>
      </div>

      <ProblemBlock
        title="1. Basic Deque Operations"
        difficulty="Easy"
        description="Implement all basic deque operations: addFront, addRear, removeFront, removeRear, getFront, getRear, isEmpty, and size."
        solution={`// Basic Deque Operations

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
  
  // Clear deque
  clear() {
    this.items = [];
    this.front = 0;
    this.rear = -1;
    console.log("Deque cleared");
  }
}

// Test cases
const deque = new Deque();

console.log("=== Testing Basic Deque Operations ===");
deque.addRear(10);
deque.addRear(20);
deque.addFront(5);
deque.display(); // Deque: 5 10 20

console.log("Front element:", deque.getFront()); // 5
console.log("Rear element:", deque.getRear()); // 20
console.log("Size:", deque.size()); // 3

deque.removeFront();
deque.display(); // Deque: 10 20

deque.removeRear();
deque.display(); // Deque: 10

console.log("Is empty:", deque.isEmpty()); // false
deque.clear();
console.log("Is empty:", deque.isEmpty()); // true`}
        explanation="Implement deque using array with front and rear pointers. AddFront shifts elements or moves front pointer. AddRear increments rear pointer. Time: O(1) for addRear, O(n) for addFront, Space: O(n)."
      />

      <ProblemBlock
        title="2. Circular Deque Implementation"
        difficulty="Medium"
        description="Implement a circular deque with fixed size that efficiently uses space."
        solution={`// Circular Deque Implementation

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
    const rearIndex = (this.rear - 1 + this.capacity) % this.capacity;
    return this.items[rearIndex];
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
const cDeque = new CircularDeque(5);

console.log("=== Testing Circular Deque ===");
cDeque.addFront(1);
cDeque.addRear(2);
cDeque.addFront(3);
cDeque.addRear(4);
cDeque.display(); // Circular Deque: 3 1 2 4

console.log("Front:", cDeque.getFront()); // 3
console.log("Rear:", cDeque.getRear()); // 4
console.log("Size:", cDeque.getSize()); // 4

cDeque.removeFront();
cDeque.removeRear();
cDeque.display(); // Circular Deque: 1 2

console.log("Trying to add when full:");
cDeque.addFront(5);
cDeque.addRear(6);
cDeque.addFront(7);
cDeque.display(); // Circular Deque: 7 5 1 2 6`}
        explanation="Use circular array with modulo arithmetic. Front and rear wrap around using (index ± 1) % capacity. Check full condition: size === capacity. Time: O(1) for all operations, Space: O(n)."
      />

      <ProblemBlock
        title="3. Deque using Linked List"
        difficulty="Medium"
        description="Implement deque using doubly linked list for efficient operations at both ends."
        solution={`// Deque using Doubly Linked List

class DequeNode {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DequeLinkedList {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }
  
  // Add element to front
  addFront(element) {
    const newNode = new DequeNode(element);
    
    if (this.isEmpty()) {
      this.front = this.rear = newNode;
    } else {
      newNode.next = this.front;
      this.front.prev = newNode;
      this.front = newNode;
    }
    
    this.size++;
    console.log(\`Added to front: \${element}\`);
  }
  
  // Add element to rear
  addRear(element) {
    const newNode = new DequeNode(element);
    
    if (this.isEmpty()) {
      this.front = this.rear = newNode;
    } else {
      newNode.prev = this.rear;
      this.rear.next = newNode;
      this.rear = newNode;
    }
    
    this.size++;
    console.log(\`Added to rear: \${element}\`);
  }
  
  // Remove element from front
  removeFront() {
    if (this.isEmpty()) {
      console.log("Deque is empty");
      return null;
    }
    
    const element = this.front.data;
    
    if (this.front === this.rear) {
      // Only one element
      this.front = this.rear = null;
    } else {
      this.front = this.front.next;
      this.front.prev = null;
    }
    
    this.size--;
    console.log(\`Removed from front: \${element}\`);
    return element;
  }
  
  // Remove element from rear
  removeRear() {
    if (this.isEmpty()) {
      console.log("Deque is empty");
      return null;
    }
    
    const element = this.rear.data;
    
    if (this.front === this.rear) {
      // Only one element
      this.front = this.rear = null;
    } else {
      this.rear = this.rear.prev;
      this.rear.next = null;
    }
    
    this.size--;
    console.log(\`Removed from rear: \${element}\`);
    return element;
  }
  
  // Get front element
  getFront() {
    if (this.isEmpty()) {
      console.log("Deque is empty");
      return null;
    }
    return this.front.data;
  }
  
  // Get rear element
  getRear() {
    if (this.isEmpty()) {
      console.log("Deque is empty");
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
  
  // Display deque
  display() {
    if (this.isEmpty()) {
      console.log("Deque is empty");
      return;
    }
    
    let result = "Deque: ";
    let current = this.front;
    
    while (current !== null) {
      result += current.data + " <-> ";
      current = current.next;
    }
    
    result += "null";
    console.log(result);
  }
  
  // Display in reverse
  displayReverse() {
    if (this.isEmpty()) {
      console.log("Deque is empty");
      return;
    }
    
    let result = "Deque (reverse): ";
    let current = this.rear;
    
    while (current !== null) {
      result += current.data + " <-> ";
      current = current.prev;
    }
    
    result += "null";
    console.log(result);
  }
  
  // Clear deque
  clear() {
    this.front = null;
    this.rear = null;
    this.size = 0;
    console.log("Deque cleared");
  }
}

// Test cases
const deque = new DequeLinkedList();

console.log("=== Testing Deque with Doubly Linked List ===");
deque.addRear(10);
deque.addRear(20);
deque.addFront(5);
deque.display(); // Deque: 5 <-> 10 <-> 20 <-> null

deque.addFront(1);
deque.addRear(30);
deque.display(); // Deque: 1 <-> 5 <-> 10 <-> 20 <-> 30 <-> null

console.log("Front:", deque.getFront()); // 1
console.log("Rear:", deque.getRear()); // 30
console.log("Size:", deque.getSize()); // 5

deque.removeFront();
deque.removeRear();
deque.display(); // Deque: 5 <-> 10 <-> 20 <-> null

deque.displayReverse(); // Deque (reverse): 20 <-> 10 <-> 5 <-> null

console.log("Is empty:", deque.isEmpty()); // false
deque.clear();
console.log("Is empty:", deque.isEmpty()); // true`}
        explanation="Use doubly linked list with front and rear pointers. Each node has prev and next pointers. AddFront/AddRear update pointers accordingly. Time: O(1) for all operations, Space: O(n)."
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
          Advanced Deque Problems
        </h2>
        <p className="text-gray-300 mb-6">
          Advanced deque problems including sliding window and min/max
          structures.
        </p>
      </div>

      <ProblemBlock
        title="4. Design a Data Structure with Min and Max"
        difficulty="Hard"
        description="Design a data structure that supports insert, delete, getMin, and getMax operations in O(1) time using deque."
        solution={`// Design a Data Structure with Min and Max

class MinMaxDeque {
  constructor() {
    this.deque = []; // Main deque to store elements
    this.minDeque = []; // Deque to maintain minimum elements
    this.maxDeque = []; // Deque to maintain maximum elements
  }
  
  // Insert element
  insert(element) {
    // Add to main deque
    this.deque.push(element);
    
    // Maintain min deque (increasing order)
    while (this.minDeque.length > 0 && this.minDeque[this.minDeque.length - 1] > element) {
      this.minDeque.pop();
    }
    this.minDeque.push(element);
    
    // Maintain max deque (decreasing order)
    while (this.maxDeque.length > 0 && this.maxDeque[this.maxDeque.length - 1] < element) {
      this.maxDeque.pop();
    }
    this.maxDeque.push(element);
    
    console.log(\`Inserted: \${element}\`);
  }
  
  // Delete element
  delete(element) {
    const index = this.deque.indexOf(element);
    if (index === -1) {
      console.log("Element not found");
      return false;
    }
    
    // Remove from main deque
    this.deque.splice(index, 1);
    
    // Remove from min deque if it's the minimum
    if (this.minDeque.length > 0 && this.minDeque[0] === element) {
      this.minDeque.shift();
    }
    
    // Remove from max deque if it's the maximum
    if (this.maxDeque.length > 0 && this.maxDeque[0] === element) {
      this.maxDeque.shift();
    }
    
    console.log(\`Deleted: \${element}\`);
    return true;
  }
  
  // Get minimum element
  getMin() {
    if (this.deque.length === 0) {
      console.log("Deque is empty");
      return null;
    }
    return this.minDeque[0];
  }
  
  // Get maximum element
  getMax() {
    if (this.deque.length === 0) {
      console.log("Deque is empty");
      return null;
    }
    return this.maxDeque[0];
  }
  
  // Get size
  size() {
    return this.deque.length;
  }
  
  // Check if empty
  isEmpty() {
    return this.deque.length === 0;
  }
  
  // Display all deques
  display() {
    console.log("Main deque:", this.deque);
    console.log("Min deque:", this.minDeque);
    console.log("Max deque:", this.maxDeque);
    console.log("Min:", this.getMin());
    console.log("Max:", this.getMax());
  }
}

// Alternative implementation using single deque
class MinMaxDequeOptimized {
  constructor() {
    this.deque = [];
    this.minDeque = [];
    this.maxDeque = [];
  }
  
  // Insert at front
  insertFront(element) {
    this.deque.unshift(element);
    
    // Update min deque
    while (this.minDeque.length > 0 && this.minDeque[0] > element) {
      this.minDeque.shift();
    }
    this.minDeque.unshift(element);
    
    // Update max deque
    while (this.maxDeque.length > 0 && this.maxDeque[0] < element) {
      this.maxDeque.shift();
    }
    this.maxDeque.unshift(element);
    
    console.log(\`Inserted at front: \${element}\`);
  }
  
  // Insert at rear
  insertRear(element) {
    this.deque.push(element);
    
    // Update min deque
    while (this.minDeque.length > 0 && this.minDeque[this.minDeque.length - 1] > element) {
      this.minDeque.pop();
    }
    this.minDeque.push(element);
    
    // Update max deque
    while (this.maxDeque.length > 0 && this.maxDeque[this.maxDeque.length - 1] < element) {
      this.maxDeque.pop();
    }
    this.maxDeque.push(element);
    
    console.log(\`Inserted at rear: \${element}\`);
  }
  
  // Remove from front
  removeFront() {
    if (this.isEmpty()) {
      console.log("Deque is empty");
      return null;
    }
    
    const element = this.deque.shift();
    
    // Update min deque
    if (this.minDeque.length > 0 && this.minDeque[0] === element) {
      this.minDeque.shift();
    }
    
    // Update max deque
    if (this.maxDeque.length > 0 && this.maxDeque[0] === element) {
      this.maxDeque.shift();
    }
    
    console.log(\`Removed from front: \${element}\`);
    return element;
  }
  
  // Remove from rear
  removeRear() {
    if (this.isEmpty()) {
      console.log("Deque is empty");
      return null;
    }
    
    const element = this.deque.pop();
    
    // Update min deque
    if (this.minDeque.length > 0 && this.minDeque[this.minDeque.length - 1] === element) {
      this.minDeque.pop();
    }
    
    // Update max deque
    if (this.maxDeque.length > 0 && this.maxDeque[this.maxDeque.length - 1] === element) {
      this.maxDeque.pop();
    }
    
    console.log(\`Removed from rear: \${element}\`);
    return element;
  }
  
  // Get minimum
  getMin() {
    if (this.isEmpty()) {
      console.log("Deque is empty");
      return null;
    }
    return this.minDeque[0];
  }
  
  // Get maximum
  getMax() {
    if (this.isEmpty()) {
      console.log("Deque is empty");
      return null;
    }
    return this.maxDeque[0];
  }
  
  // Check if empty
  isEmpty() {
    return this.deque.length === 0;
  }
  
  // Get size
  size() {
    return this.deque.length;
  }
  
  // Display
  display() {
    console.log("Deque:", this.deque);
    console.log("Min:", this.getMin());
    console.log("Max:", this.getMax());
  }
}

// Test cases
console.log("=== Testing MinMaxDeque ===");
const minMaxDeque = new MinMaxDeque();

minMaxDeque.insert(5);
minMaxDeque.insert(3);
minMaxDeque.insert(8);
minMaxDeque.insert(1);
minMaxDeque.display();

minMaxDeque.delete(3);
minMaxDeque.display();

console.log("\\n=== Testing MinMaxDequeOptimized ===");
const optimizedDeque = new MinMaxDequeOptimized();

optimizedDeque.insertFront(5);
optimizedDeque.insertRear(3);
optimizedDeque.insertFront(8);
optimizedDeque.insertRear(1);
optimizedDeque.display();

optimizedDeque.removeFront();
optimizedDeque.removeRear();
optimizedDeque.display();`}
        explanation="Use auxiliary deques to maintain min and max elements. Min deque stores elements in increasing order, max deque in decreasing order. Remove elements when they're no longer min/max. Time: O(1) amortized, Space: O(n)."
      />

      <ProblemBlock
        title="5. Maximums of all subarrays of size k"
        difficulty="Hard"
        description="Find the maximum element in every subarray of size k using deque."
        solution={`// Maximums of all subarrays of size k

function maxOfSubarrays(arr, k) {
  const result = [];
  const deque = []; // Store indices
  
  // Process first window
  for (let i = 0; i < k; i++) {
    // Remove elements smaller than current element
    while (deque.length > 0 && arr[deque[deque.length - 1]] <= arr[i]) {
      deque.pop();
    }
    deque.push(i);
  }
  
  // Process remaining windows
  for (let i = k; i < arr.length; i++) {
    // Add maximum of previous window
    result.push(arr[deque[0]]);
    
    // Remove elements outside current window
    while (deque.length > 0 && deque[0] <= i - k) {
      deque.shift();
    }
    
    // Remove elements smaller than current element
    while (deque.length > 0 && arr[deque[deque.length - 1]] <= arr[i]) {
      deque.pop();
    }
    
    deque.push(i);
  }
  
  // Add maximum of last window
  result.push(arr[deque[0]]);
  
  return result;
}

// Alternative implementation with detailed explanation
function maxOfSubarraysDetailed(arr, k) {
  console.log(\`Finding maximums of subarrays of size \${k} in: [\${arr.join(', ')}]\`);
  
  const result = [];
  const deque = []; // Store indices of array elements
  
  console.log("\\nProcessing first window:");
  for (let i = 0; i < k; i++) {
    console.log(\`\\nProcessing element \${arr[i]} at index \${i}\`);
    console.log("Current deque (indices):", deque);
    
    // Remove elements smaller than current element
    while (deque.length > 0 && arr[deque[deque.length - 1]] <= arr[i]) {
      const removedIndex = deque.pop();
      console.log(\`Removed index \${removedIndex} (value: \${arr[removedIndex]}) as it's <= \${arr[i]}\`);
    }
    
    deque.push(i);
    console.log(\`Added index \${i} to deque\`);
    console.log("Updated deque:", deque);
  }
  
  console.log("\\nProcessing remaining windows:");
  for (let i = k; i < arr.length; i++) {
    console.log(\`\\nProcessing element \${arr[i]} at index \${i}\`);
    
    // Add maximum of previous window
    const maxValue = arr[deque[0]];
    result.push(maxValue);
    console.log(\`Maximum of previous window: \${maxValue}\`);
    
    // Remove elements outside current window
    while (deque.length > 0 && deque[0] <= i - k) {
      const removedIndex = deque.shift();
      console.log(\`Removed index \${removedIndex} as it's outside window\`);
    }
    
    // Remove elements smaller than current element
    while (deque.length > 0 && arr[deque[deque.length - 1]] <= arr[i]) {
      const removedIndex = deque.pop();
      console.log(\`Removed index \${removedIndex} (value: \${arr[removedIndex]}) as it's <= \${arr[i]}\`);
    }
    
    deque.push(i);
    console.log(\`Added index \${i} to deque\`);
    console.log("Current deque:", deque);
  }
  
  // Add maximum of last window
  const lastMax = arr[deque[0]];
  result.push(lastMax);
  console.log(\`\\nMaximum of last window: \${lastMax}\`);
  
  console.log(\`\\nFinal result: [\${result.join(', ')}]\`);
  return result;
}

// Test cases
const arr1 = [1, 3, -1, -3, 5, 3, 6, 7];
const k1 = 3;
console.log("=== Testing Max of Subarrays ===");
console.log("Array:", arr1);
console.log("Window size:", k1);
console.log("Result:", maxOfSubarrays(arr1, k1)); // [3, 3, 5, 5, 6, 7]

const arr2 = [8, 5, 10, 7, 9, 4, 15, 12, 90, 13];
const k2 = 4;
console.log("\\nArray:", arr2);
console.log("Window size:", k2);
console.log("Result:", maxOfSubarrays(arr2, k2)); // [10, 10, 10, 15, 15, 90, 90]

console.log("\\n=== Detailed Example ===");
maxOfSubarraysDetailed([1, 3, -1, -3, 5, 3, 6, 7], 3);`}
        explanation="Use deque to store indices of elements in decreasing order. Remove elements outside window and smaller than current element. Front of deque always contains index of maximum element. Time: O(n), Space: O(k)."
      />

      <ProblemBlock
        title="6. First Circular Tour"
        difficulty="Hard"
        description="Find the first petrol pump from where a truck can complete a circular tour using deque."
        solution={`// First Circular Tour

function firstCircularTour(petrol, distance) {
  const n = petrol.length;
  const deque = [];
  let start = 0;
  let end = 1;
  let currentPetrol = petrol[start] - distance[start];
  
  // Add first station to deque
  deque.push(start);
  
  // Continue while we haven't completed a full circle
  while (start !== end || currentPetrol < 0) {
    // If current petrol is negative, we can't reach next station
    while (currentPetrol < 0 && start !== end) {
      // Remove start station from deque
      if (deque.length > 0 && deque[0] === start) {
        deque.shift();
      }
      
      // Move start to next station
      currentPetrol -= petrol[start] - distance[start];
      start = (start + 1) % n;
      
      // If we've tried all stations
      if (start === 0) {
        return -1;
      }
    }
    
    // Add current station to deque
    currentPetrol += petrol[end] - distance[end];
    deque.push(end);
    end = (end + 1) % n;
  }
  
  return start;
}

// Alternative implementation with detailed explanation
function firstCircularTourDetailed(petrol, distance) {
  console.log("Finding first circular tour...");
  console.log("Petrol:", petrol);
  console.log("Distance:", distance);
  
  const n = petrol.length;
  const deque = [];
  let start = 0;
  let end = 1;
  let currentPetrol = petrol[start] - distance[start];
  
  console.log(\`\\nStarting from station \${start}\`);
  console.log(\`Initial petrol: \${currentPetrol}\`);
  
  // Add first station to deque
  deque.push(start);
  console.log("Deque:", deque);
  
  let step = 1;
  while (start !== end || currentPetrol < 0) {
    console.log(\`\\nStep \${step++}: start=\${start}, end=\${end}, currentPetrol=\${currentPetrol}\`);
    
    // If current petrol is negative, we can't reach next station
    while (currentPetrol < 0 && start !== end) {
      console.log(\`Current petrol is negative (\${currentPetrol}), moving start from \${start}\`);
      
      // Remove start station from deque
      if (deque.length > 0 && deque[0] === start) {
        const removed = deque.shift();
        console.log(\`Removed station \${removed} from deque\`);
      }
      
      // Move start to next station
      currentPetrol -= petrol[start] - distance[start];
      start = (start + 1) % n;
      
      console.log(\`New start: \${start}, updated petrol: \${currentPetrol}\`);
      
      // If we've tried all stations
      if (start === 0) {
        console.log("Tried all stations, no solution found");
        return -1;
      }
    }
    
    // Add current station to deque
    const petrolAtEnd = petrol[end];
    const distanceAtEnd = distance[end];
    const netPetrol = petrolAtEnd - distanceAtEnd;
    
    console.log(\`Adding station \${end}: petrol=\${petrolAtEnd}, distance=\${distanceAtEnd}, net=\${netPetrol}\`);
    
    currentPetrol += netPetrol;
    deque.push(end);
    end = (end + 1) % n;
    
    console.log(\`Updated petrol: \${currentPetrol}, deque: [\${deque.join(', ')}]\`);
  }
  
  console.log(\`\\nFound solution! Start from station \${start}\`);
  return start;
}

// Optimized implementation
function firstCircularTourOptimized(petrol, distance) {
  const n = petrol.length;
  let start = 0;
  let end = 1;
  let currentPetrol = petrol[start] - distance[start];
  
  while (start !== end || currentPetrol < 0) {
    // If current petrol is negative, we can't reach next station
    while (currentPetrol < 0 && start !== end) {
      currentPetrol -= petrol[start] - distance[start];
      start = (start + 1) % n;
      
      // If we've tried all stations
      if (start === 0) {
        return -1;
      }
    }
    
    // Add current station
    currentPetrol += petrol[end] - distance[end];
    end = (end + 1) % n;
  }
  
  return start;
}

// Test cases
const petrol1 = [4, 6, 7, 4];
const distance1 = [6, 5, 3, 5];
console.log("=== Testing First Circular Tour ===");
console.log("Petrol:", petrol1);
console.log("Distance:", distance1);
console.log("Result:", firstCircularTour(petrol1, distance1)); // 1

const petrol2 = [6, 7, 4, 10, 6, 5];
const distance2 = [5, 6, 7, 8, 6, 4];
console.log("\\nPetrol:", petrol2);
console.log("Distance:", distance2);
console.log("Result:", firstCircularTour(petrol2, distance2)); // 3

const petrol3 = [1, 2, 3, 4, 5];
const distance3 = [3, 4, 5, 1, 2];
console.log("\\nPetrol:", petrol3);
console.log("Distance:", distance3);
console.log("Result:", firstCircularTour(petrol3, distance3)); // 3

console.log("\\n=== Detailed Example ===");
firstCircularTourDetailed([4, 6, 7, 4], [6, 5, 3, 5]);`}
        explanation="Use two pointers: start and end. If current petrol becomes negative, move start pointer. If we can complete a full circle, return start. If start reaches 0 again, no solution exists. Time: O(n), Space: O(1)."
      />
    </div>
  );
}

// Applications Section
function ApplicationsSection() {
  return (
    <div className="space-y-8">
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Deque Applications
        </h2>
        <p className="text-gray-300 mb-6">
          Real-world applications and advanced problems using deque.
        </p>
      </div>

      <ProblemBlock
        title="7. Sliding Window Minimum"
        difficulty="Medium"
        description="Find the minimum element in every subarray of size k using deque."
        solution={`// Sliding Window Minimum

function minOfSubarrays(arr, k) {
  const result = [];
  const deque = []; // Store indices
  
  // Process first window
  for (let i = 0; i < k; i++) {
    // Remove elements greater than current element
    while (deque.length > 0 && arr[deque[deque.length - 1]] >= arr[i]) {
      deque.pop();
    }
    deque.push(i);
  }
  
  // Process remaining windows
  for (let i = k; i < arr.length; i++) {
    // Add minimum of previous window
    result.push(arr[deque[0]]);
    
    // Remove elements outside current window
    while (deque.length > 0 && deque[0] <= i - k) {
      deque.shift();
    }
    
    // Remove elements greater than current element
    while (deque.length > 0 && arr[deque[deque.length - 1]] >= arr[i]) {
      deque.pop();
    }
    
    deque.push(i);
  }
  
  // Add minimum of last window
  result.push(arr[deque[0]]);
  
  return result;
}

// Test cases
const arr1 = [1, 3, -1, -3, 5, 3, 6, 7];
const k1 = 3;
console.log("=== Testing Min of Subarrays ===");
console.log("Array:", arr1);
console.log("Window size:", k1);
console.log("Result:", minOfSubarrays(arr1, k1)); // [-1, -3, -3, -3, 3, 3]`}
        explanation="Use deque to store indices of elements in increasing order. Remove elements outside window and greater than current element. Front of deque always contains index of minimum element. Time: O(n), Space: O(k)."
      />

      <ProblemBlock
        title="8. Deque in BFS"
        difficulty="Medium"
        description="Use deque for efficient BFS traversal with level-by-level processing."
        solution={`// Deque in BFS

function bfsWithDeque(graph, start) {
  const visited = new Set();
  const deque = [start];
  const result = [];
  
  visited.add(start);
  
  while (deque.length > 0) {
    const current = deque.shift();
    result.push(current);
    
    console.log(\`Visiting: \${current}\`);
    
    for (const neighbor of graph[current] || []) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        deque.push(neighbor);
        console.log(\`Added to deque: \${neighbor}\`);
      }
    }
  }
  
  return result;
}

// Level-order traversal using deque
function levelOrderTraversal(root) {
  if (!root) return [];
  
  const result = [];
  const deque = [root];
  
  while (deque.length > 0) {
    const levelSize = deque.length;
    const currentLevel = [];
    
    for (let i = 0; i < levelSize; i++) {
      const node = deque.shift();
      currentLevel.push(node.val);
      
      if (node.left) deque.push(node.left);
      if (node.right) deque.push(node.right);
    }
    
    result.push(currentLevel);
  }
  
  return result;
}

// Test cases
const graph = {
  'A': ['B', 'C'],
  'B': ['A', 'D', 'E'],
  'C': ['A', 'F'],
  'D': ['B'],
  'E': ['B', 'F'],
  'F': ['C', 'E']
};

console.log("=== Testing BFS with Deque ===");
console.log("BFS traversal:", bfsWithDeque(graph, 'A'));`}
        explanation="Use deque for FIFO processing in BFS. Add neighbors to rear, process from front. Maintains level-by-level traversal order. Time: O(V + E), Space: O(V)."
      />

      <ProblemBlock
        title="9. Deque in Palindrome Checking"
        difficulty="Easy"
        description="Use deque to check if a string is a palindrome efficiently."
        solution={`// Deque in Palindrome Checking

function isPalindromeDeque(str) {
  const deque = [];
  
  // Add all characters to deque
  for (const char of str.toLowerCase()) {
    if (char.match(/[a-z0-9]/)) {
      deque.push(char);
    }
  }
  
  // Check palindrome by comparing front and rear
  while (deque.length > 1) {
    if (deque.shift() !== deque.pop()) {
      return false;
    }
  }
  
  return true;
}

// Alternative implementation
function isPalindromeDequeAlt(str) {
  const deque = [];
  
  // Add characters to deque
  for (const char of str.toLowerCase()) {
    if (char.match(/[a-z0-9]/)) {
      deque.push(char);
    }
  }
  
  // Check palindrome
  let left = 0;
  let right = deque.length - 1;
  
  while (left < right) {
    if (deque[left] !== deque[right]) {
      return false;
    }
    left++;
    right--;
  }
  
  return true;
}

// Test cases
const str1 = "A man a plan a canal Panama";
const str2 = "race a car";
const str3 = "level";

console.log("=== Testing Palindrome with Deque ===");
console.log(\`"\${str1}" is palindrome:\`, isPalindromeDeque(str1)); // true
console.log(\`"\${str2}" is palindrome:\`, isPalindromeDeque(str2)); // false
console.log(\`"\${str3}" is palindrome:\`, isPalindromeDeque(str3)); // true`}
        explanation="Use deque to store characters, then compare front and rear elements. Remove characters from both ends while they match. Time: O(n), Space: O(n)."
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
        className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors mb-4"
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
          <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-4">
            <p className="text-purple-200">
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
