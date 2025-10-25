"use client";
import Link from "next/link";
import { useState } from "react";

export default function LinkedLists() {
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
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            Linked Lists Mastery
          </h1>
          <p className="text-gray-400 mt-2">
            Singly, Doubly, Circular Linked Lists & Advanced Operations
          </p>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-gray-800/50 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-2 overflow-x-auto">
            {[
              { id: "fundamentals", label: "📚 Fundamentals" },
              { id: "traversal", label: "🔄 Traversal" },
              { id: "operations", label: "⚙️ Basic Operations" },
              { id: "advanced", label: "🚀 Advanced Problems" },
              { id: "circular", label: "🔁 Circular Lists" },
              { id: "reversal", label: "↩️ Reversal" },
              { id: "detection", label: "🔍 Loop Detection" },
              { id: "final", label: "🎯 Final Problems" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 font-semibold whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? "text-indigo-400 border-b-2 border-indigo-400"
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
        {activeTab === "traversal" && <TraversalSection />}
        {activeTab === "operations" && <OperationsSection />}
        {activeTab === "advanced" && <AdvancedSection />}
        {activeTab === "circular" && <CircularSection />}
        {activeTab === "reversal" && <ReversalSection />}
        {activeTab === "detection" && <DetectionSection />}
        {activeTab === "final" && <FinalSection />}
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
          Linked List Fundamentals
        </h2>
        <p className="text-gray-300 text-lg mb-6">
          Understanding linked lists as dynamic data structures with nodes
          connected by pointers.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-indigo-900/20 border border-indigo-500/30 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-indigo-200 mb-3">
              Key Concepts:
            </h3>
            <ul className="space-y-2 text-indigo-100">
              <li>
                • <strong>Node:</strong> Data + Pointer to next node
              </li>
              <li>
                • <strong>Head:</strong> First node of the list
              </li>
              <li>
                • <strong>Tail:</strong> Last node (points to null)
              </li>
              <li>
                • <strong>Dynamic Size:</strong> Grows/shrinks at runtime
              </li>
            </ul>
          </div>

          <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-purple-200 mb-3">
              Types of Linked Lists:
            </h3>
            <ul className="space-y-2 text-purple-100">
              <li>
                • <strong>Singly:</strong> One pointer per node
              </li>
              <li>
                • <strong>Doubly:</strong> Two pointers per node
              </li>
              <li>
                • <strong>Circular:</strong> Last node points to first
              </li>
              <li>
                • <strong>Circular Doubly:</strong> Combination of both
              </li>
            </ul>
          </div>
        </div>

        <TheoryBlock title="Linked List Implementation in JavaScript">
          <CodeBlock
            code={`// Node class for Singly Linked List
class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Node class for Doubly Linked List
class DoublyListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

// Singly Linked List Implementation
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  
  // Check if list is empty
  isEmpty() {
    return this.head === null;
  }
  
  // Get size of list
  getSize() {
    return this.size;
  }
  
  // Add element at beginning
  addFirst(data) {
    const newNode = new ListNode(data);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }
  
  // Add element at end
  addLast(data) {
    const newNode = new ListNode(data);
    
    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }
  
  // Print all elements
  print() {
    let current = this.head;
    const result = [];
    
    while (current !== null) {
      result.push(current.data);
      current = current.next;
    }
    
    return result.join(' -> ');
  }
}

// Usage example
const list = new SinglyLinkedList();
list.addFirst(3);
list.addFirst(2);
list.addFirst(1);
console.log(list.print()); // "1 -> 2 -> 3"`}
          />
        </TheoryBlock>
      </div>

      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Applications of Linked Lists
        </h2>
        <p className="text-gray-300 mb-6">
          Real-world applications where linked lists are commonly used.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-3">
              🔄 Dynamic Memory
            </h3>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>• Memory allocation</li>
              <li>• Garbage collection</li>
              <li>• File systems</li>
            </ul>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-3">
              📊 Data Structures
            </h3>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>• Stacks & Queues</li>
              <li>• Hash tables</li>
              <li>• Graphs (adjacency lists)</li>
            </ul>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-3">
              🎯 Algorithms
            </h3>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>• LRU Cache</li>
              <li>• Music playlists</li>
              <li>• Undo operations</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// Traversal Section (Starting with Simple Traversal as requested)
function TraversalSection() {
  return (
    <div className="space-y-8">
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Linked List Traversal
        </h2>
        <p className="text-gray-300 mb-6">
          Basic traversal techniques for linked lists - iterative and recursive
          approaches.
        </p>
      </div>

      <ProblemBlock
        title="1. How do you traverse a Linked List?"
        difficulty="Easy"
        description="Learn both iterative and recursive approaches to traverse a singly linked list."
        solution={`// Iterative Traversal of Linked List

function traverseLinkedList(head) {
  let current = head;
  const result = [];
  
  while (current !== null) {
    result.push(current.data);
    current = current.next;
  }
  
  return result;
}

// Recursive Traversal of Singly Linked List
function traverseLinkedListRecursive(head) {
  const result = [];
  
  function traverse(node) {
    if (node === null) return;
    
    result.push(node.data);
    traverse(node.next);
  }
  
  traverse(head);
  return result;
}

// Traversal with detailed steps
function traverseWithSteps(head) {
  console.log("Traversing linked list:");
  
  let current = head;
  let position = 0;
  const result = [];
  
  while (current !== null) {
    console.log(\`Position \${position}: \${current.data}\`);
    result.push(current.data);
    current = current.next;
    position++;
  }
  
  console.log("End of list reached");
  console.log("Traversal result:", result.join(' -> '));
  return result;
}

// Traversal with custom action
function traverseWithAction(head, action) {
  let current = head;
  let position = 0;
  
  while (current !== null) {
    action(current.data, position);
    current = current.next;
    position++;
  }
}

// Count nodes while traversing
function countNodes(head) {
  let count = 0;
  let current = head;
  
  while (current !== null) {
    count++;
    current = current.next;
  }
  
  return count;
}

// Find maximum element during traversal
function findMax(head) {
  if (head === null) return null;
  
  let max = head.data;
  let current = head.next;
  
  while (current !== null) {
    if (current.data > max) {
      max = current.data;
    }
    current = current.next;
  }
  
  return max;
}

// Sum all elements during traversal
function sumLinkedList(head) {
  let sum = 0;
  let current = head;
  
  while (current !== null) {
    sum += current.data;
    current = current.next;
  }
  
  return sum;
}

// Traversal with early termination
function traverseUntil(head, condition) {
  let current = head;
  const result = [];
  
  while (current !== null && !condition(current.data)) {
    result.push(current.data);
    current = current.next;
  }
  
  return result;
}

// Test cases
const head = {
  data: 1,
  next: {
    data: 2,
    next: {
      data: 3,
      next: {
        data: 4,
        next: null
      }
    }
  }
};

console.log(traverseLinkedList(head)); // [1, 2, 3, 4]
console.log(traverseLinkedListRecursive(head)); // [1, 2, 3, 4]
console.log(countNodes(head)); // 4
console.log(findMax(head)); // 4
console.log(sumLinkedList(head)); // 10

// Traverse with custom action
traverseWithAction(head, (data, pos) => {
  console.log(\`Element at position \${pos}: \${data}\`);
});

// Traverse until condition
console.log(traverseUntil(head, (data) => data === 3)); // [1, 2]`}
        explanation="Use a pointer to traverse from head to tail. Iterative: while loop with pointer update. Recursive: call function with next node. Time: O(n), Space: O(1) iterative, O(n) recursive."
      />

      <ProblemBlock
        title="2. How do you perform a recursive traversal of a Singly Linked List?"
        difficulty="Easy"
        description="Deep dive into recursive traversal with detailed examples and use cases."
        solution={`// Recursive Traversal - Detailed Implementation

function recursiveTraversal(head) {
  // Base case: empty list
  if (head === null) {
    console.log("End of list");
    return;
  }
  
  // Process current node
  console.log(\`Visiting node: \${head.data}\`);
  
  // Recursive call for next node
  recursiveTraversal(head.next);
}

// Recursive traversal with return values
function recursiveTraversalWithReturn(head) {
  if (head === null) {
    return [];
  }
  
  // Process current node and combine with recursive result
  const currentData = [head.data];
  const restOfList = recursiveTraversalWithReturn(head.next);
  
  return currentData.concat(restOfList);
}

// Recursive traversal with accumulator (tail recursion)
function recursiveTraversalAccumulator(head, acc = []) {
  if (head === null) {
    return acc;
  }
  
  acc.push(head.data);
  return recursiveTraversalAccumulator(head.next, acc);
}

// Recursive traversal with step-by-step explanation
function recursiveTraversalDetailed(head, depth = 0) {
  const indent = "  ".repeat(depth);
  
  if (head === null) {
    console.log(\`\${indent}Base case: null node\`);
    return [];
  }
  
  console.log(\`\${indent}Processing node: \${head.data}\`);
  
  const result = [head.data];
  console.log(\`\${indent}Current result: [\${result.join(', ')}]\`);
  
  console.log(\`\${indent}Making recursive call for next node...\`);
  const recursiveResult = recursiveTraversalDetailed(head.next, depth + 1);
  
  console.log(\`\${indent}Recursive result: [\${recursiveResult.join(', ')}]\`);
  
  const finalResult = result.concat(recursiveResult);
  console.log(\`\${indent}Combined result: [\${finalResult.join(', ')}]\`);
  
  return finalResult;
}

// Recursive count nodes
function recursiveCountNodes(head) {
  if (head === null) {
    return 0;
  }
  
  return 1 + recursiveCountNodes(head.next);
}

// Recursive find maximum
function recursiveFindMax(head) {
  if (head === null) {
    return Number.MIN_SAFE_INTEGER;
  }
  
  const maxOfRest = recursiveFindMax(head.next);
  return Math.max(head.data, maxOfRest);
}

// Recursive sum
function recursiveSum(head) {
  if (head === null) {
    return 0;
  }
  
  return head.data + recursiveSum(head.next);
}

// Recursive search
function recursiveSearch(head, target) {
  if (head === null) {
    return false;
  }
  
  if (head.data === target) {
    return true;
  }
  
  return recursiveSearch(head.next, target);
}

// Recursive reverse traversal (print in reverse order)
function recursiveReverseTraversal(head) {
  if (head === null) {
    return;
  }
  
  // First traverse to the end
  recursiveReverseTraversal(head.next);
  
  // Then print current node
  console.log(head.data);
}

// Recursive traversal with custom processing
function recursiveTraversalWithProcessing(head, processFn) {
  if (head === null) {
    return;
  }
  
  processFn(head.data);
  recursiveTraversalWithProcessing(head.next, processFn);
}

// Test cases
const head = {
  data: 1,
  next: {
    data: 2,
    next: {
      data: 3,
      next: null
    }
  }
};

console.log("=== Basic Recursive Traversal ===");
recursiveTraversal(head);

console.log("\\n=== Recursive Traversal with Return ===");
console.log(recursiveTraversalWithReturn(head)); // [1, 2, 3]

console.log("\\n=== Recursive Traversal with Accumulator ===");
console.log(recursiveTraversalAccumulator(head)); // [1, 2, 3]

console.log("\\n=== Detailed Recursive Traversal ===");
console.log(recursiveTraversalDetailed(head));

console.log("\\n=== Recursive Operations ===");
console.log("Count:", recursiveCountNodes(head)); // 3
console.log("Max:", recursiveFindMax(head)); // 3
console.log("Sum:", recursiveSum(head)); // 6
console.log("Search 2:", recursiveSearch(head, 2)); // true
console.log("Search 5:", recursiveSearch(head, 5)); // false

console.log("\\n=== Reverse Traversal ===");
recursiveReverseTraversal(head); // Prints: 3, 2, 1

console.log("\\n=== Traversal with Custom Processing ===");
recursiveTraversalWithProcessing(head, (data) => {
  console.log(\`Processing: \${data * 2}\`);
}); // Prints: 2, 4, 6`}
        explanation="Recursive traversal uses function calls instead of loops. Base case: null node. Recursive case: process current node, then call function with next node. Time: O(n), Space: O(n) for call stack."
      />

      <ProblemBlock
        title="3. How do you implement a Simple Linked List?"
        difficulty="Easy"
        description="Complete implementation of a singly linked list with all basic operations."
        solution={`// Simple Linked List Implementation

class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SimpleLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  
  // Check if list is empty
  isEmpty() {
    return this.head === null;
  }
  
  // Get size of list
  getSize() {
    return this.size;
  }
  
  // Insert at beginning
  insertAtBeginning(data) {
    const newNode = new ListNode(data);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
    return this;
  }
  
  // Insert at end
  insertAtEnd(data) {
    const newNode = new ListNode(data);
    
    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
    return this;
  }
  
  // Insert at specific position
  insertAtPosition(data, position) {
    if (position < 0 || position > this.size) {
      throw new Error("Invalid position");
    }
    
    if (position === 0) {
      return this.insertAtBeginning(data);
    }
    
    if (position === this.size) {
      return this.insertAtEnd(data);
    }
    
    const newNode = new ListNode(data);
    let current = this.head;
    
    // Move to position - 1
    for (let i = 0; i < position - 1; i++) {
      current = current.next;
    }
    
    newNode.next = current.next;
    current.next = newNode;
    this.size++;
    return this;
  }
  
  // Delete first node
  deleteFirst() {
    if (this.isEmpty()) {
      return null;
    }
    
    const deletedData = this.head.data;
    this.head = this.head.next;
    this.size--;
    return deletedData;
  }
  
  // Delete last node
  deleteLast() {
    if (this.isEmpty()) {
      return null;
    }
    
    if (this.size === 1) {
      const deletedData = this.head.data;
      this.head = null;
      this.size--;
      return deletedData;
    }
    
    let current = this.head;
    while (current.next.next !== null) {
      current = current.next;
    }
    
    const deletedData = current.next.data;
    current.next = null;
    this.size--;
    return deletedData;
  }
  
  // Delete at specific position
  deleteAtPosition(position) {
    if (position < 0 || position >= this.size) {
      throw new Error("Invalid position");
    }
    
    if (position === 0) {
      return this.deleteFirst();
    }
    
    if (position === this.size - 1) {
      return this.deleteLast();
    }
    
    let current = this.head;
    for (let i = 0; i < position - 1; i++) {
      current = current.next;
    }
    
    const deletedData = current.next.data;
    current.next = current.next.next;
    this.size--;
    return deletedData;
  }
  
  // Search for an element
  search(data) {
    let current = this.head;
    let position = 0;
    
    while (current !== null) {
      if (current.data === data) {
        return position;
      }
      current = current.next;
      position++;
    }
    
    return -1; // Not found
  }
  
  // Get element at position
  getAtPosition(position) {
    if (position < 0 || position >= this.size) {
      throw new Error("Invalid position");
    }
    
    let current = this.head;
    for (let i = 0; i < position; i++) {
      current = current.next;
    }
    
    return current.data;
  }
  
  // Update element at position
  updateAtPosition(data, position) {
    if (position < 0 || position >= this.size) {
      throw new Error("Invalid position");
    }
    
    let current = this.head;
    for (let i = 0; i < position; i++) {
      current = current.next;
    }
    
    const oldData = current.data;
    current.data = data;
    return oldData;
  }
  
  // Convert to array
  toArray() {
    const result = [];
    let current = this.head;
    
    while (current !== null) {
      result.push(current.data);
      current = current.next;
    }
    
    return result;
  }
  
  // Print list
  print() {
    return this.toArray().join(' -> ');
  }
  
  // Clear the list
  clear() {
    this.head = null;
    this.size = 0;
  }
  
  // Reverse the list
  reverse() {
    let prev = null;
    let current = this.head;
    
    while (current !== null) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    
    this.head = prev;
    return this;
  }
}

// Usage examples
const list = new SimpleLinkedList();

console.log("=== Creating and manipulating a linked list ===");
list.insertAtEnd(1).insertAtEnd(2).insertAtEnd(3);
console.log("Initial list:", list.print()); // "1 -> 2 -> 3"

list.insertAtBeginning(0);
console.log("After inserting 0 at beginning:", list.print()); // "0 -> 1 -> 2 -> 3"

list.insertAtPosition(1.5, 2);
console.log("After inserting 1.5 at position 2:", list.print()); // "0 -> 1 -> 1.5 -> 2 -> 3"

console.log("Size:", list.getSize()); // 5
console.log("Element at position 2:", list.getAtPosition(2)); // 1.5
console.log("Search for 2:", list.search(2)); // 3

list.deleteFirst();
console.log("After deleting first:", list.print()); // "1 -> 1.5 -> 2 -> 3"

list.deleteLast();
console.log("After deleting last:", list.print()); // "1 -> 1.5 -> 2"

list.deleteAtPosition(1);
console.log("After deleting at position 1:", list.print()); // "1 -> 2"

console.log("Reversed list:", list.reverse().print()); // "2 -> 1"`}
        explanation="Implement a class with head pointer and size counter. Include methods for insertion, deletion, searching, and traversal. Time: O(1) for head operations, O(n) for tail operations."
      />

      <ProblemBlock
        title="4. What are the applications of a Linked List?"
        difficulty="Easy"
        description="Explore real-world applications and use cases of linked lists."
        solution={`// Applications of Linked Lists

// 1. Implementation of Stack
class StackUsingLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  
  push(data) {
    const newNode = new ListNode(data);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }
  
  pop() {
    if (this.isEmpty()) {
      return null;
    }
    
    const data = this.head.data;
    this.head = this.head.next;
    this.size--;
    return data;
  }
  
  peek() {
    return this.isEmpty() ? null : this.head.data;
  }
  
  isEmpty() {
    return this.head === null;
  }
  
  getSize() {
    return this.size;
  }
}

// 2. Implementation of Queue
class QueueUsingLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  
  enqueue(data) {
    const newNode = new ListNode(data);
    
    if (this.isEmpty()) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }
  
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    
    const data = this.head.data;
    this.head = this.head.next;
    
    if (this.head === null) {
      this.tail = null;
    }
    
    this.size--;
    return data;
  }
  
  front() {
    return this.isEmpty() ? null : this.head.data;
  }
  
  isEmpty() {
    return this.head === null;
  }
  
  getSize() {
    return this.size;
  }
}

// 3. LRU Cache Implementation
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
    this.head = new ListNode(null);
    this.tail = new ListNode(null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }
  
  addNode(node) {
    node.prev = this.head;
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;
  }
  
  removeNode(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }
  
  moveToHead(node) {
    this.removeNode(node);
    this.addNode(node);
  }
  
  popTail() {
    const lastNode = this.tail.prev;
    this.removeNode(lastNode);
    return lastNode;
  }
  
  get(key) {
    const node = this.cache.get(key);
    
    if (node) {
      this.moveToHead(node);
      return node.value;
    }
    
    return -1;
  }
  
  put(key, value) {
    const node = this.cache.get(key);
    
    if (node) {
      node.value = value;
      this.moveToHead(node);
    } else {
      const newNode = new ListNode(key);
      newNode.value = value;
      
      if (this.cache.size >= this.capacity) {
        const tail = this.popTail();
        this.cache.delete(tail.data);
      }
      
      this.addNode(newNode);
      this.cache.set(key, newNode);
    }
  }
}

// 4. Music Playlist
class MusicPlaylist {
  constructor() {
    this.head = null;
    this.current = null;
    this.size = 0;
  }
  
  addSong(title, artist) {
    const newNode = new ListNode({ title, artist });
    
    if (this.isEmpty()) {
      this.head = this.current = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }
  
  playNext() {
    if (this.current && this.current.next) {
      this.current = this.current.next;
      return this.current.data;
    }
    return null;
  }
  
  playPrevious() {
    // For singly linked list, we need to traverse from head
    if (this.current === this.head) {
      return null;
    }
    
    let prev = this.head;
    while (prev.next !== this.current) {
      prev = prev.next;
    }
    
    this.current = prev;
    return this.current.data;
  }
  
  getCurrentSong() {
    return this.current ? this.current.data : null;
  }
  
  isEmpty() {
    return this.head === null;
  }
}

// 5. Undo/Redo Operations
class UndoRedoManager {
  constructor() {
    this.history = new SimpleLinkedList();
    this.currentPosition = 0;
  }
  
  performAction(action) {
    // Remove any actions after current position
    while (this.history.getSize() > this.currentPosition + 1) {
      this.history.deleteLast();
    }
    
    this.history.insertAtEnd(action);
    this.currentPosition = this.history.getSize() - 1;
  }
  
  undo() {
    if (this.currentPosition > 0) {
      this.currentPosition--;
      return this.history.getAtPosition(this.currentPosition);
    }
    return null;
  }
  
  redo() {
    if (this.currentPosition < this.history.getSize() - 1) {
      this.currentPosition++;
      return this.history.getAtPosition(this.currentPosition);
    }
    return null;
  }
}

// 6. Polynomial Representation
class PolynomialTerm {
  constructor(coefficient, exponent) {
    this.coefficient = coefficient;
    this.exponent = exponent;
    this.next = null;
  }
}

class Polynomial {
  constructor() {
    this.head = null;
  }
  
  addTerm(coefficient, exponent) {
    const newTerm = new PolynomialTerm(coefficient, exponent);
    
    if (this.head === null || this.head.exponent < exponent) {
      newTerm.next = this.head;
      this.head = newTerm;
      return;
    }
    
    let current = this.head;
    while (current.next !== null && current.next.exponent > exponent) {
      current = current.next;
    }
    
    newTerm.next = current.next;
    current.next = newTerm;
  }
  
  evaluate(x) {
    let result = 0;
    let current = this.head;
    
    while (current !== null) {
      result += current.coefficient * Math.pow(x, current.exponent);
      current = current.next;
    }
    
    return result;
  }
  
  display() {
    let current = this.head;
    let expression = "";
    
    while (current !== null) {
      if (current.coefficient > 0 && expression !== "") {
        expression += " + ";
      } else if (current.coefficient < 0) {
        expression += " - ";
      }
      
      expression += Math.abs(current.coefficient);
      
      if (current.exponent > 0) {
        expression += "x";
        if (current.exponent > 1) {
          expression += "^" + current.exponent;
        }
      }
      
      current = current.next;
    }
    
    return expression;
  }
}

// Usage examples
console.log("=== Stack Implementation ===");
const stack = new StackUsingLinkedList();
stack.push(1).push(2).push(3);
console.log("Popped:", stack.pop()); // 3
console.log("Peek:", stack.peek()); // 2

console.log("\\n=== Queue Implementation ===");
const queue = new QueueUsingLinkedList();
queue.enqueue(1).enqueue(2).enqueue(3);
console.log("Dequeued:", queue.dequeue()); // 1
console.log("Front:", queue.front()); // 2

console.log("\\n=== Music Playlist ===");
const playlist = new MusicPlaylist();
playlist.addSong("Song 1", "Artist 1");
playlist.addSong("Song 2", "Artist 2");
console.log("Current song:", playlist.getCurrentSong());
console.log("Next song:", playlist.playNext());

console.log("\\n=== Polynomial ===");
const poly = new Polynomial();
poly.addTerm(3, 2); // 3x^2
poly.addTerm(2, 1); // 2x
poly.addTerm(1, 0); // 1
console.log("Polynomial:", poly.display()); // "3x^2 + 2x + 1"
console.log("Value at x=2:", poly.evaluate(2)); // 17`}
        explanation="Linked lists are used in stacks, queues, LRU cache, playlists, undo/redo systems, and polynomial representation due to their dynamic size and efficient insertion/deletion."
      />
    </div>
  );
}

// Operations Section
function OperationsSection() {
  return (
    <div className="space-y-8">
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Basic Linked List Operations
        </h2>
        <p className="text-gray-300 mb-6">
          Insertion, deletion, and searching operations on linked lists.
        </p>
      </div>

      <ProblemBlock
        title="5. How do you insert a node at the beginning of a Singly Linked List?"
        difficulty="Easy"
        description="Insert a new node at the head of a singly linked list."
        solution={`// Insert Node at Beginning of Singly Linked List

function insertAtBeginning(head, data) {
  const newNode = new ListNode(data);
  newNode.next = head;
  return newNode; // New head
}

// Insert at beginning with detailed steps
function insertAtBeginningDetailed(head, data) {
  console.log(\`Inserting \${data} at the beginning of the list\`);
  
  // Create new node
  const newNode = new ListNode(data);
  console.log(\`Created new node with data: \${newNode.data}\`);
  
  // Point new node to current head
  newNode.next = head;
  console.log(\`New node points to: \${head ? head.data : 'null'}\`);
  
  // Return new node as new head
  console.log(\`New head is: \${newNode.data}\`);
  return newNode;
}

// Insert multiple elements at beginning
function insertMultipleAtBeginning(head, elements) {
  let newHead = head;
  
  for (const element of elements) {
    newHead = insertAtBeginning(newHead, element);
  }
  
  return newHead;
}

// Insert at beginning with validation
function insertAtBeginningWithValidation(head, data) {
  if (data === null || data === undefined) {
    throw new Error("Cannot insert null or undefined data");
  }
  
  const newNode = new ListNode(data);
  newNode.next = head;
  
  return newNode;
}

// Insert at beginning and return both head and size
function insertAtBeginningWithSize(head, data, currentSize = 0) {
  const newNode = new ListNode(data);
  newNode.next = head;
  
  return {
    head: newNode,
    size: currentSize + 1
  };
}

// Test cases
let head = null;

console.log("=== Inserting at Beginning ===");
head = insertAtBeginning(head, 3);
console.log("After inserting 3:", printList(head)); // "3"

head = insertAtBeginning(head, 2);
console.log("After inserting 2:", printList(head)); // "2 -> 3"

head = insertAtBeginning(head, 1);
console.log("After inserting 1:", printList(head)); // "1 -> 2 -> 3"

console.log("\\n=== Inserting Multiple Elements ===");
head = insertMultipleAtBeginning(head, [0, -1]);
console.log("After inserting [0, -1]:", printList(head)); // "-1 -> 0 -> 1 -> 2 -> 3"

console.log("\\n=== Detailed Insertion ===");
const newHead = insertAtBeginningDetailed(head, 4);
console.log("Final list:", printList(newHead));

// Helper function to print list
function printList(head) {
  const result = [];
  let current = head;
  
  while (current !== null) {
    result.push(current.data);
    current = current.next;
  }
  
  return result.join(' -> ');
}

// Helper ListNode class
function ListNode(data) {
  this.data = data;
  this.next = null;
}`}
        explanation="Create new node, point its next to current head, return new node as head. Time: O(1), Space: O(1)."
      />

      <ProblemBlock
        title="6. How do you insert a node at the end of a Singly Linked List?"
        difficulty="Easy"
        description="Insert a new node at the tail of a singly linked list."
        solution={`// Insert Node at End of Singly Linked List

function insertAtEnd(head, data) {
  const newNode = new ListNode(data);
  
  // If list is empty, new node becomes head
  if (head === null) {
    return newNode;
  }
  
  // Traverse to the last node
  let current = head;
  while (current.next !== null) {
    current = current.next;
  }
  
  // Insert new node after last node
  current.next = newNode;
  return head;
}

// Insert at end with detailed steps
function insertAtEndDetailed(head, data) {
  console.log(\`Inserting \${data} at the end of the list\`);
  
  const newNode = new ListNode(data);
  
  if (head === null) {
    console.log("List is empty, new node becomes head");
    return newNode;
  }
  
  let current = head;
  let position = 0;
  
  console.log(\`Traversing from head: \${head.data}\`);
  
  // Traverse to the last node
  while (current.next !== null) {
    current = current.next;
    position++;
    console.log(\`At position \${position}: \${current.data}\`);
  }
  
  console.log(\`Reached last node: \${current.data}\`);
  console.log(\`Inserting new node after: \${current.data}\`);
  
  current.next = newNode;
  return head;
}

// Insert at end using tail pointer (optimized)
function insertAtEndWithTail(head, tail, data) {
  const newNode = new ListNode(data);
  
  if (head === null) {
    return { head: newNode, tail: newNode };
  }
  
  tail.next = newNode;
  return { head, tail: newNode };
}

// Insert multiple elements at end
function insertMultipleAtEnd(head, elements) {
  let currentHead = head;
  
  for (const element of elements) {
    currentHead = insertAtEnd(currentHead, element);
  }
  
  return currentHead;
}

// Insert at end with size tracking
function insertAtEndWithSize(head, data, currentSize = 0) {
  const newNode = new ListNode(data);
  
  if (head === null) {
    return {
      head: newNode,
      size: 1
    };
  }
  
  let current = head;
  while (current.next !== null) {
    current = current.next;
  }
  
  current.next = newNode;
  return {
    head: head,
    size: currentSize + 1
  };
}

// Insert at end and return both head and tail
function insertAtEndReturnBoth(head, tail, data) {
  const newNode = new ListNode(data);
  
  if (head === null) {
    return { head: newNode, tail: newNode };
  }
  
  tail.next = newNode;
  return { head, tail: newNode };
}

// Test cases
let head = null;

console.log("=== Inserting at End ===");
head = insertAtEnd(head, 1);
console.log("After inserting 1:", printList(head)); // "1"

head = insertAtEnd(head, 2);
console.log("After inserting 2:", printList(head)); // "1 -> 2"

head = insertAtEnd(head, 3);
console.log("After inserting 3:", printList(head)); // "1 -> 2 -> 3"

console.log("\\n=== Inserting Multiple Elements ===");
head = insertMultipleAtEnd(head, [4, 5]);
console.log("After inserting [4, 5]:", printList(head)); // "1 -> 2 -> 3 -> 4 -> 5"

console.log("\\n=== Detailed Insertion ===");
const newHead = insertAtEndDetailed(head, 6);
console.log("Final list:", printList(newHead));

console.log("\\n=== Using Tail Pointer ===");
let headWithTail = null;
let tail = null;

const result1 = insertAtEndWithTail(headWithTail, tail, 10);
headWithTail = result1.head;
tail = result1.tail;

const result2 = insertAtEndWithTail(headWithTail, tail, 20);
headWithTail = result2.head;
tail = result2.tail;

console.log("List with tail pointer:", printList(headWithTail)); // "10 -> 20"
console.log("Tail data:", tail.data); // 20

// Helper functions
function printList(head) {
  const result = [];
  let current = head;
  
  while (current !== null) {
    result.push(current.data);
    current = current.next;
  }
  
  return result.join(' -> ');
}

function ListNode(data) {
  this.data = data;
  this.next = null;
}`}
        explanation="If list is empty, new node becomes head. Otherwise, traverse to last node and link new node. Time: O(n), Space: O(1)."
      />

      <ProblemBlock
        title="7. How do you insert a node at a given position in a Singly Linked List?"
        difficulty="Medium"
        description="Insert a new node at a specific position in a singly linked list."
        solution={`// Insert Node at Given Position in Singly Linked List

function insertAtPosition(head, data, position) {
  const newNode = new ListNode(data);
  
  // Handle edge cases
  if (position < 0) {
    throw new Error("Position cannot be negative");
  }
  
  // Insert at beginning (position 0)
  if (position === 0) {
    newNode.next = head;
    return newNode;
  }
  
  // If list is empty and position > 0
  if (head === null && position > 0) {
    throw new Error("Cannot insert at position " + position + " in empty list");
  }
  
  let current = head;
  let currentPosition = 0;
  
  // Traverse to position - 1
  while (current !== null && currentPosition < position - 1) {
    current = current.next;
    currentPosition++;
  }
  
  // Check if position is beyond list length
  if (current === null) {
    throw new Error("Position " + position + " is beyond list length");
  }
  
  // Insert new node
  newNode.next = current.next;
  current.next = newNode;
  
  return head;
}

// Insert at position with detailed steps
function insertAtPositionDetailed(head, data, position) {
  console.log(\`Inserting \${data} at position \${position}\`);
  
  const newNode = new ListNode(data);
  
  if (position < 0) {
    throw new Error("Position cannot be negative");
  }
  
  if (position === 0) {
    console.log("Inserting at beginning");
    newNode.next = head;
    return newNode;
  }
  
  if (head === null && position > 0) {
    throw new Error("Cannot insert at position " + position + " in empty list");
  }
  
  let current = head;
  let currentPosition = 0;
  
  console.log(\`Starting traversal from head: \${head.data}\`);
  
  // Traverse to position - 1
  while (current !== null && currentPosition < position - 1) {
    current = current.next;
    currentPosition++;
    console.log(\`At position \${currentPosition}: \${current ? current.data : 'null'}\`);
  }
  
  if (current === null) {
    throw new Error("Position " + position + " is beyond list length");
  }
  
  console.log(\`Reached position \${currentPosition}, inserting after: \${current.data}\`);
  console.log(\`New node will point to: \${current.next ? current.next.data : 'null'}\`);
  
  newNode.next = current.next;
  current.next = newNode;
  
  return head;
}

// Insert at position with validation and size tracking
function insertAtPositionWithValidation(head, data, position, currentSize = 0) {
  if (position < 0 || position > currentSize) {
    throw new Error(\`Invalid position \${position}. Must be between 0 and \${currentSize}\`);
  }
  
  const newNode = new ListNode(data);
  
  if (position === 0) {
    newNode.next = head;
    return { head: newNode, size: currentSize + 1 };
  }
  
  let current = head;
  for (let i = 0; i < position - 1; i++) {
    current = current.next;
  }
  
  newNode.next = current.next;
  current.next = newNode;
  
  return { head, size: currentSize + 1 };
}

// Insert at position with bounds checking
function insertAtPositionSafe(head, data, position) {
  const newNode = new ListNode(data);
  
  // Calculate list length
  let length = 0;
  let temp = head;
  while (temp !== null) {
    length++;
    temp = temp.next;
  }
  
  // Validate position
  if (position < 0 || position > length) {
    throw new Error(\`Position \${position} is out of bounds. Valid range: 0 to \${length}\`);
  }
  
  if (position === 0) {
    newNode.next = head;
    return newNode;
  }
  
  let current = head;
  for (let i = 0; i < position - 1; i++) {
    current = current.next;
  }
  
  newNode.next = current.next;
  current.next = newNode;
  
  return head;
}

// Insert multiple elements at different positions
function insertMultipleAtPositions(head, insertions) {
  // Sort insertions by position in descending order to avoid index shifting
  insertions.sort((a, b) => b.position - a.position);
  
  let currentHead = head;
  
  for (const insertion of insertions) {
    currentHead = insertAtPosition(currentHead, insertion.data, insertion.position);
  }
  
  return currentHead;
}

// Test cases
let head = null;

console.log("=== Creating initial list ===");
head = insertAtEnd(head, 1);
head = insertAtEnd(head, 2);
head = insertAtEnd(head, 3);
console.log("Initial list:", printList(head)); // "1 -> 2 -> 3"

console.log("\\n=== Inserting at different positions ===");
head = insertAtPosition(head, 0, 0); // Insert at beginning
console.log("After inserting 0 at position 0:", printList(head)); // "0 -> 1 -> 2 -> 3"

head = insertAtPosition(head, 1.5, 2); // Insert in middle
console.log("After inserting 1.5 at position 2:", printList(head)); // "0 -> 1 -> 1.5 -> 2 -> 3"

head = insertAtPosition(head, 4, 5); // Insert at end
console.log("After inserting 4 at position 5:", printList(head)); // "0 -> 1 -> 1.5 -> 2 -> 3 -> 4"

console.log("\\n=== Detailed insertion ===");
const newHead = insertAtPositionDetailed(head, 2.5, 4);
console.log("Final list:", printList(newHead));

console.log("\\n=== Multiple insertions ===");
const insertions = [
  { data: 'A', position: 1 },
  { data: 'B', position: 3 },
  { data: 'C', position: 0 }
];
const multiHead = insertMultipleAtPositions(head, insertions);
console.log("After multiple insertions:", printList(multiHead));

console.log("\\n=== Error handling ===");
try {
  insertAtPosition(head, 99, -1); // Invalid position
} catch (error) {
  console.log("Error:", error.message);
}

// Helper functions
function insertAtEnd(head, data) {
  const newNode = new ListNode(data);
  if (head === null) return newNode;
  
  let current = head;
  while (current.next !== null) {
    current = current.next;
  }
  current.next = newNode;
  return head;
}

function printList(head) {
  const result = [];
  let current = head;
  while (current !== null) {
    result.push(current.data);
    current = current.next;
  }
  return result.join(' -> ');
}

function ListNode(data) {
  this.data = data;
  this.next = null;
}`}
        explanation="Handle edge cases (position 0, empty list, invalid position). Traverse to position-1, insert new node. Time: O(n), Space: O(1)."
      />

      <ProblemBlock
        title="8. Search in a Linked List (Iterative and Recursive)"
        difficulty="Easy"
        description="Search for an element in a linked list using both iterative and recursive approaches."
        solution={`// Search in a Linked List (Iterative and Recursive)

// Iterative Search
function searchIterative(head, target) {
  let current = head;
  let position = 0;
  
  while (current !== null) {
    if (current.data === target) {
      return position;
    }
    current = current.next;
    position++;
  }
  
  return -1; // Not found
}

// Recursive Search
function searchRecursive(head, target, position = 0) {
  // Base case: end of list
  if (head === null) {
    return -1;
  }
  
  // Base case: found the target
  if (head.data === target) {
    return position;
  }
  
  // Recursive case: search in rest of list
  return searchRecursive(head.next, target, position + 1);
}

// Search with detailed steps (Iterative)
function searchIterativeDetailed(head, target) {
  console.log(\`Searching for \${target} in the list\`);
  
  let current = head;
  let position = 0;
  
  while (current !== null) {
    console.log(\`Checking position \${position}: \${current.data}\`);
    
    if (current.data === target) {
      console.log(\`✓ Found \${target} at position \${position}\`);
      return position;
    }
    
    current = current.next;
    position++;
  }
  
  console.log(\`✗ \${target} not found in the list\`);
  return -1;
}

// Search with detailed steps (Recursive)
function searchRecursiveDetailed(head, target, position = 0) {
  const indent = "  ".repeat(position);
  
  if (head === null) {
    console.log(\`\${indent}Base case: end of list reached\`);
    return -1;
  }
  
  console.log(\`\${indent}Checking position \${position}: \${head.data}\`);
  
  if (head.data === target) {
    console.log(\`\${indent}✓ Found \${target} at position \${position}\`);
    return position;
  }
  
  console.log(\`\${indent}Not found here, searching recursively...\`);
  return searchRecursiveDetailed(head.next, target, position + 1);
}

// Search and return node (not just position)
function searchNodeIterative(head, target) {
  let current = head;
  
  while (current !== null) {
    if (current.data === target) {
      return current;
    }
    current = current.next;
  }
  
  return null;
}

function searchNodeRecursive(head, target) {
  if (head === null) {
    return null;
  }
  
  if (head.data === target) {
    return head;
  }
  
  return searchNodeRecursive(head.next, target);
}

// Search all occurrences
function searchAllOccurrences(head, target) {
  const positions = [];
  let current = head;
  let position = 0;
  
  while (current !== null) {
    if (current.data === target) {
      positions.push(position);
    }
    current = current.next;
    position++;
  }
  
  return positions;
}

// Search with custom comparison function
function searchWithComparator(head, target, comparator) {
  let current = head;
  let position = 0;
  
  while (current !== null) {
    if (comparator(current.data, target)) {
      return position;
    }
    current = current.next;
    position++;
  }
  
  return -1;
}

// Search for multiple targets
function searchMultiple(head, targets) {
  const results = {};
  
  for (const target of targets) {
    results[target] = searchIterative(head, target);
  }
  
  return results;
}

// Search with early termination condition
function searchUntil(head, condition) {
  let current = head;
  let position = 0;
  
  while (current !== null && !condition(current.data)) {
    current = current.next;
    position++;
  }
  
  return current !== null ? position : -1;
}

// Performance comparison
function compareSearchMethods(head, target) {
  console.log(\`Comparing search methods for \${target}\`);
  
  const start1 = performance.now();
  const iterativeResult = searchIterative(head, target);
  const iterativeTime = performance.now() - start1;
  
  const start2 = performance.now();
  const recursiveResult = searchRecursive(head, target);
  const recursiveTime = performance.now() - start2;
  
  console.log(\`Iterative: Position \${iterativeResult}, Time: \${iterativeTime.toFixed(2)}ms\`);
  console.log(\`Recursive: Position \${recursiveResult}, Time: \${recursiveTime.toFixed(2)}ms\`);
  
  return {
    iterative: { result: iterativeResult, time: iterativeTime },
    recursive: { result: recursiveResult, time: recursiveTime }
  };
}

// Test cases
const head = createList([1, 2, 3, 2, 4, 2, 5]);

console.log("=== Basic Search ===");
console.log("List:", printList(head));
console.log("Search for 3 (iterative):", searchIterative(head, 3)); // 2
console.log("Search for 3 (recursive):", searchRecursive(head, 3)); // 2
console.log("Search for 6 (not found):", searchIterative(head, 6)); // -1

console.log("\\n=== Detailed Search ===");
console.log("\\nIterative search for 2:");
searchIterativeDetailed(head, 2);

console.log("\\nRecursive search for 4:");
searchRecursiveDetailed(head, 4);

console.log("\\n=== Advanced Search ===");
console.log("All occurrences of 2:", searchAllOccurrences(head, 2)); // [1, 3, 5]
console.log("Search multiple targets:", searchMultiple(head, [1, 3, 6])); // {1: 0, 3: 2, 6: -1}

console.log("\\n=== Custom Search ===");
const evenSearch = searchWithComparator(head, null, (data, target) => data % 2 === 0);
console.log("First even number at position:", evenSearch);

console.log("\\n=== Performance Comparison ===");
compareSearchMethods(head, 4);

// Helper functions
function createList(arr) {
  if (arr.length === 0) return null;
  
  const head = new ListNode(arr[0]);
  let current = head;
  
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  
  return head;
}

function printList(head) {
  const result = [];
  let current = head;
  while (current !== null) {
    result.push(current.data);
    current = current.next;
  }
  return result.join(' -> ');
}

function ListNode(data) {
  this.data = data;
  this.next = null;
}`}
        explanation="Iterative: traverse with pointer, return position when found. Recursive: check current node, recurse on rest. Time: O(n), Space: O(1) iterative, O(n) recursive."
      />
    </div>
  );
}

// Advanced Section (continuing with more problems from images)
function AdvancedSection() {
  return (
    <div className="space-y-8">
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Advanced Linked List Problems
        </h2>
        <p className="text-gray-300 mb-6">
          Complex linked list operations including deletion, reversal, and loop
          detection.
        </p>
      </div>

      <ProblemBlock
        title="9. Delete First Node of Singly Linked List"
        difficulty="Easy"
        description="Remove the first node (head) from a singly linked list."
        solution={`// Delete First Node of Singly Linked List

function deleteFirstNode(head) {
  // Handle empty list
  if (head === null) {
    return null;
  }
  
  // Return the next node as new head
  return head.next;
}

// Delete first node with detailed steps
function deleteFirstNodeDetailed(head) {
  console.log("Deleting first node of the list");
  
  if (head === null) {
    console.log("List is empty, nothing to delete");
    return null;
  }
  
  console.log(\`Current head: \${head.data}\`);
  console.log(\`Head points to: \${head.next ? head.next.data : 'null'}\`);
  
  const newHead = head.next;
  
  if (newHead === null) {
    console.log("List will become empty after deletion");
  } else {
    console.log(\`New head: \${newHead.data}\`);
  }
  
  return newHead;
}

// Delete first node and return deleted data
function deleteFirstNodeWithData(head) {
  if (head === null) {
    return { head: null, deletedData: null };
  }
  
  const deletedData = head.data;
  const newHead = head.next;
  
  return { head: newHead, deletedData };
}

// Delete first node with size tracking
function deleteFirstNodeWithSize(head, currentSize = 0) {
  if (head === null) {
    return { head: null, size: 0, deletedData: null };
  }
  
  const deletedData = head.data;
  const newHead = head.next;
  
  return { 
    head: newHead, 
    size: Math.max(0, currentSize - 1), 
    deletedData 
  };
}

// Delete multiple first nodes
function deleteMultipleFirstNodes(head, count) {
  let currentHead = head;
  
  for (let i = 0; i < count && currentHead !== null; i++) {
    currentHead = deleteFirstNode(currentHead);
  }
  
  return currentHead;
}

// Delete first node with validation
function deleteFirstNodeSafe(head) {
  if (head === null) {
    throw new Error("Cannot delete from empty list");
  }
  
  return head.next;
}

// Delete first node and update tail pointer
function deleteFirstNodeWithTail(head, tail) {
  if (head === null) {
    return { head: null, tail: null };
  }
  
  if (head === tail) {
    // Only one node in list
    return { head: null, tail: null };
  }
  
  return { head: head.next, tail };
}

// Test cases
let head = createList([1, 2, 3, 4, 5]);

console.log("=== Deleting First Node ===");
console.log("Original list:", printList(head)); // "1 -> 2 -> 3 -> 4 -> 5"

head = deleteFirstNode(head);
console.log("After deleting first:", printList(head)); // "2 -> 3 -> 4 -> 5"

head = deleteFirstNode(head);
console.log("After deleting first again:", printList(head)); // "3 -> 4 -> 5"

console.log("\\n=== Detailed Deletion ===");
const newHead = deleteFirstNodeDetailed(head);
console.log("Final list:", printList(newHead));

console.log("\\n=== Deletion with Data Return ===");
const result = deleteFirstNodeWithData(newHead);
console.log("Deleted data:", result.deletedData);
console.log("Remaining list:", printList(result.head));

console.log("\\n=== Multiple Deletions ===");
let multiHead = createList([10, 20, 30, 40, 50]);
console.log("Original:", printList(multiHead));
multiHead = deleteMultipleFirstNodes(multiHead, 3);
console.log("After deleting first 3:", printList(multiHead));

console.log("\\n=== Edge Cases ===");
console.log("Delete from single node list:");
let singleNode = createList([99]);
console.log("Before:", printList(singleNode));
singleNode = deleteFirstNode(singleNode);
console.log("After:", printList(singleNode)); // Empty

console.log("Delete from empty list:");
let emptyList = null;
emptyList = deleteFirstNode(emptyList);
console.log("Result:", printList(emptyList)); // Empty

// Helper functions
function createList(arr) {
  if (arr.length === 0) return null;
  
  const head = new ListNode(arr[0]);
  let current = head;
  
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  
  return head;
}

function printList(head) {
  const result = [];
  let current = head;
  while (current !== null) {
    result.push(current.data);
    current = current.next;
  }
  return result.join(' -> ');
}

function ListNode(data) {
  this.data = data;
  this.next = null;
}`}
        explanation="Simply return head.next as new head. Handle empty list case. Time: O(1), Space: O(1)."
      />

      <ProblemBlock
        title="10. Delete Last Node of Singly Linked List"
        difficulty="Medium"
        description="Remove the last node (tail) from a singly linked list."
        solution={`// Delete Last Node of Singly Linked List

function deleteLastNode(head) {
  // Handle empty list
  if (head === null) {
    return null;
  }
  
  // Handle single node list
  if (head.next === null) {
    return null;
  }
  
  // Find the second-to-last node
  let current = head;
  while (current.next.next !== null) {
    current = current.next;
  }
  
  // Remove the last node
  current.next = null;
  
  return head;
}

// Delete last node with detailed steps
function deleteLastNodeDetailed(head) {
  console.log("Deleting last node of the list");
  
  if (head === null) {
    console.log("List is empty, nothing to delete");
    return null;
  }
  
  if (head.next === null) {
    console.log("Only one node in list, deleting it");
    return null;
  }
  
  let current = head;
  let position = 0;
  
  console.log(\`Starting traversal from head: \${head.data}\`);
  
  // Find second-to-last node
  while (current.next.next !== null) {
    current = current.next;
    position++;
    console.log(\`At position \${position}: \${current.data}\`);
  }
  
  console.log(\`Found second-to-last node: \${current.data}\`);
  console.log(\`Last node to delete: \${current.next.data}\`);
  
  // Remove last node
  current.next = null;
  console.log("Last node deleted");
  
  return head;
}

// Delete last node and return deleted data
function deleteLastNodeWithData(head) {
  if (head === null) {
    return { head: null, deletedData: null };
  }
  
  if (head.next === null) {
    const deletedData = head.data;
    return { head: null, deletedData };
  }
  
  let current = head;
  while (current.next.next !== null) {
    current = current.next;
  }
  
  const deletedData = current.next.data;
  current.next = null;
  
  return { head, deletedData };
}

// Delete last node with size tracking
function deleteLastNodeWithSize(head, currentSize = 0) {
  if (head === null) {
    return { head: null, size: 0, deletedData: null };
  }
  
  if (head.next === null) {
    const deletedData = head.data;
    return { head: null, size: 0, deletedData };
  }
  
  let current = head;
  while (current.next.next !== null) {
    current = current.next;
  }
  
  const deletedData = current.next.data;
  current.next = null;
  
  return { 
    head, 
    size: Math.max(0, currentSize - 1), 
    deletedData 
  };
}

// Delete multiple last nodes
function deleteMultipleLastNodes(head, count) {
  let currentHead = head;
  
  for (let i = 0; i < count && currentHead !== null; i++) {
    currentHead = deleteLastNode(currentHead);
  }
  
  return currentHead;
}

// Delete last node using two pointers
function deleteLastNodeTwoPointers(head) {
  if (head === null || head.next === null) {
    return null;
  }
  
  let slow = head;
  let fast = head.next;
  
  while (fast.next !== null) {
    slow = slow.next;
    fast = fast.next;
  }
  
  slow.next = null;
  return head;
}

// Delete last node with tail pointer (optimized)
function deleteLastNodeWithTail(head, tail) {
  if (head === null) {
    return { head: null, tail: null };
  }
  
  if (head === tail) {
    // Only one node
    return { head: null, tail: null };
  }
  
  // Find second-to-last node
  let current = head;
  while (current.next !== tail) {
    current = current.next;
  }
  
  current.next = null;
  return { head, tail: current };
}

// Test cases
let head = createList([1, 2, 3, 4, 5]);

console.log("=== Deleting Last Node ===");
console.log("Original list:", printList(head)); // "1 -> 2 -> 3 -> 4 -> 5"

head = deleteLastNode(head);
console.log("After deleting last:", printList(head)); // "1 -> 2 -> 3 -> 4"

head = deleteLastNode(head);
console.log("After deleting last again:", printList(head)); // "1 -> 2 -> 3"

console.log("\\n=== Detailed Deletion ===");
const newHead = deleteLastNodeDetailed(head);
console.log("Final list:", printList(newHead));

console.log("\\n=== Deletion with Data Return ===");
const result = deleteLastNodeWithData(newHead);
console.log("Deleted data:", result.deletedData);
console.log("Remaining list:", printList(result.head));

console.log("\\n=== Multiple Deletions ===");
let multiHead = createList([10, 20, 30, 40, 50]);
console.log("Original:", printList(multiHead));
multiHead = deleteMultipleLastNodes(multiHead, 3);
console.log("After deleting last 3:", printList(multiHead));

console.log("\\n=== Two Pointers Approach ===");
let twoPtrHead = createList([100, 200, 300, 400]);
console.log("Before:", printList(twoPtrHead));
twoPtrHead = deleteLastNodeTwoPointers(twoPtrHead);
console.log("After:", printList(twoPtrHead));

console.log("\\n=== Edge Cases ===");
console.log("Delete from single node list:");
let singleNode = createList([99]);
console.log("Before:", printList(singleNode));
singleNode = deleteLastNode(singleNode);
console.log("After:", printList(singleNode)); // Empty

console.log("Delete from empty list:");
let emptyList = null;
emptyList = deleteLastNode(emptyList);
console.log("Result:", printList(emptyList)); // Empty

// Helper functions
function createList(arr) {
  if (arr.length === 0) return null;
  
  const head = new ListNode(arr[0]);
  let current = head;
  
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  
  return head;
}

function printList(head) {
  const result = [];
  let current = head;
  while (current !== null) {
    result.push(current.data);
    current = current.next;
  }
  return result.join(' -> ');
}

function ListNode(data) {
  this.data = data;
  this.next = null;
}`}
        explanation="Find second-to-last node, set its next to null. Handle single node and empty list cases. Time: O(n), Space: O(1)."
      />

      <ProblemBlock
        title="11. Singly Vs Doubly Linked List"
        difficulty="Easy"
        description="Compare singly and doubly linked lists, their advantages and disadvantages."
        solution={`// Singly Vs Doubly Linked List

// Singly Linked List Node
class SinglyListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Doubly Linked List Node
class DoublyListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

// Singly Linked List Implementation
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  
  insertAtBeginning(data) {
    const newNode = new SinglyListNode(data);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }
  
  insertAtEnd(data) {
    const newNode = new SinglyListNode(data);
    
    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }
  
  deleteAtBeginning() {
    if (this.isEmpty()) return null;
    
    const data = this.head.data;
    this.head = this.head.next;
    this.size--;
    return data;
  }
  
  deleteAtEnd() {
    if (this.isEmpty()) return null;
    
    if (this.size === 1) {
      const data = this.head.data;
      this.head = null;
      this.size--;
      return data;
    }
    
    let current = this.head;
    while (current.next.next !== null) {
      current = current.next;
    }
    
    const data = current.next.data;
    current.next = null;
    this.size--;
    return data;
  }
  
  isEmpty() {
    return this.head === null;
  }
  
  print() {
    const result = [];
    let current = this.head;
    while (current !== null) {
      result.push(current.data);
      current = current.next;
    }
    return result.join(' -> ');
  }
}

// Doubly Linked List Implementation
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  
  insertAtBeginning(data) {
    const newNode = new DoublyListNode(data);
    
    if (this.isEmpty()) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.size++;
  }
  
  insertAtEnd(data) {
    const newNode = new DoublyListNode(data);
    
    if (this.isEmpty()) {
      this.head = this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }
  
  deleteAtBeginning() {
    if (this.isEmpty()) return null;
    
    const data = this.head.data;
    
    if (this.size === 1) {
      this.head = this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    
    this.size--;
    return data;
  }
  
  deleteAtEnd() {
    if (this.isEmpty()) return null;
    
    const data = this.tail.data;
    
    if (this.size === 1) {
      this.head = this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    
    this.size--;
    return data;
  }
  
  isEmpty() {
    return this.head === null;
  }
  
  printForward() {
    const result = [];
    let current = this.head;
    while (current !== null) {
      result.push(current.data);
      current = current.next;
    }
    return result.join(' -> ');
  }
  
  printBackward() {
    const result = [];
    let current = this.tail;
    while (current !== null) {
      result.push(current.data);
      current = current.prev;
    }
    return result.join(' <- ');
  }
}

// Comparison and Analysis
function compareLinkedListTypes() {
  console.log("=== Singly vs Doubly Linked List Comparison ===");
  
  console.log("\\n📊 Memory Usage:");
  console.log("Singly: 1 pointer per node (8 bytes on 64-bit)");
  console.log("Doubly: 2 pointers per node (16 bytes on 64-bit)");
  console.log("Memory overhead: Doubly uses ~2x more memory");
  
  console.log("\\n⚡ Performance Comparison:");
  
  // Test insertion at beginning
  const sll = new SinglyLinkedList();
  const dll = new DoublyLinkedList();
  
  const start1 = performance.now();
  for (let i = 0; i < 1000; i++) {
    sll.insertAtBeginning(i);
  }
  const sllTime = performance.now() - start1;
  
  const start2 = performance.now();
  for (let i = 0; i < 1000; i++) {
    dll.insertAtBeginning(i);
  }
  const dllTime = performance.now() - start2;
  
  console.log(\`Insert at beginning (1000 elements):\`);
  console.log(\`Singly: \${sllTime.toFixed(2)}ms\`);
  console.log(\`Doubly: \${dllTime.toFixed(2)}ms\`);
  
  console.log("\\n🔧 Operations Complexity:");
  console.log("\\nSingly Linked List:");
  console.log("• Insert at beginning: O(1)");
  console.log("• Insert at end: O(n)");
  console.log("• Delete at beginning: O(1)");
  console.log("• Delete at end: O(n)");
  console.log("• Delete given node: O(n)");
  console.log("• Reverse traversal: O(n²) or O(n) with stack");
  
  console.log("\\nDoubly Linked List:");
  console.log("• Insert at beginning: O(1)");
  console.log("• Insert at end: O(1) with tail pointer");
  console.log("• Delete at beginning: O(1)");
  console.log("• Delete at end: O(1) with tail pointer");
  console.log("• Delete given node: O(1)");
  console.log("• Reverse traversal: O(n)");
  
  console.log("\\n✅ Advantages:");
  console.log("\\nSingly Linked List:");
  console.log("• Less memory usage");
  console.log("• Simpler implementation");
  console.log("• Good for forward-only traversal");
  console.log("• Better cache performance (fewer pointers)");
  
  console.log("\\nDoubly Linked List:");
  console.log("• Bidirectional traversal");
  console.log("• O(1) deletion of given node");
  console.log("• O(1) insertion/deletion at both ends");
  console.log("• Better for certain algorithms (LRU cache)");
  
  console.log("\\n❌ Disadvantages:");
  console.log("\\nSingly Linked List:");
  console.log("• Cannot traverse backwards");
  console.log("• O(n) deletion of given node");
  console.log("• Need to traverse for many operations");
  
  console.log("\\nDoubly Linked List:");
  console.log("• More memory usage");
  console.log("• More complex implementation");
  console.log("• Need to maintain two pointers");
  console.log("• Potential for more bugs");
  
  console.log("\\n🎯 When to Use:");
  console.log("\\nUse Singly Linked List when:");
  console.log("• Memory is a constraint");
  console.log("• Only forward traversal needed");
  console.log("• Simple implementation required");
  console.log("• Implementing stacks");
  
  console.log("\\nUse Doubly Linked List when:");
  console.log("• Bidirectional traversal needed");
  console.log("• Frequent deletion of arbitrary nodes");
  console.log("• Implementing deques or LRU cache");
  console.log("• Need O(1) operations at both ends");
}

// Demonstration
function demonstrateBothTypes() {
  console.log("\\n=== Demonstration ===");
  
  // Singly Linked List
  console.log("\\n🔗 Singly Linked List:");
  const sll = new SinglyLinkedList();
  sll.insertAtEnd(1).insertAtEnd(2).insertAtEnd(3);
  console.log("Forward:", sll.print());
  
  // Doubly Linked List
  console.log("\\n🔗 Doubly Linked List:");
  const dll = new DoublyLinkedList();
  dll.insertAtEnd(1).insertAtEnd(2).insertAtEnd(3);
  console.log("Forward:", dll.printForward());
  console.log("Backward:", dll.printBackward());
  
  // Deletion comparison
  console.log("\\n🗑️ Deletion at end:");
  console.log("Singly (O(n)):", sll.deleteAtEnd());
  console.log("Doubly (O(1)):", dll.deleteAtEnd());
  
  console.log("\\nFinal states:");
  console.log("Singly:", sll.print());
  console.log("Doubly forward:", dll.printForward());
  console.log("Doubly backward:", dll.printBackward());
}

// Run comparisons
compareLinkedListTypes();
demonstrateBothTypes();`}
        explanation="Singly: 1 pointer per node, O(n) for many operations. Doubly: 2 pointers per node, O(1) for deletion of given node, bidirectional traversal. Choose based on memory constraints and operation requirements."
      />

      <ProblemBlock
        title="12. Insert at Begin of Doubly Linked List"
        difficulty="Easy"
        description="Insert a new node at the beginning of a doubly linked list."
        solution={`// Insert at Begin of Doubly Linked List

function insertAtBeginDoubly(head, tail, data) {
  const newNode = new DoublyListNode(data);
  
  if (head === null) {
    // Empty list - new node becomes both head and tail
    return { head: newNode, tail: newNode };
  }
  
  // Link new node to current head
  newNode.next = head;
  head.prev = newNode;
  
  // Return new node as head
  return { head: newNode, tail };
}

// Insert at begin with detailed steps
function insertAtBeginDoublyDetailed(head, tail, data) {
  console.log(\`Inserting \${data} at beginning of doubly linked list\`);
  
  const newNode = new DoublyListNode(data);
  console.log(\`Created new node with data: \${newNode.data}\`);
  
  if (head === null) {
    console.log("List is empty, new node becomes head and tail");
    return { head: newNode, tail: newNode };
  }
  
  console.log(\`Current head: \${head.data}\`);
  console.log(\`Linking new node to current head\`);
  
  // Link new node to current head
  newNode.next = head;
  head.prev = newNode;
  
  console.log(\`New node (\${newNode.data}) -> Head (\${head.data})\`);
  console.log(\`Head (\${head.data}) <- New node (\${newNode.data})\`);
  console.log(\`New head: \${newNode.data}\`);
  
  return { head: newNode, tail };
}

// Insert multiple elements at beginning
function insertMultipleAtBeginDoubly(head, tail, elements) {
  let currentHead = head;
  let currentTail = tail;
  
  for (const element of elements) {
    const result = insertAtBeginDoubly(currentHead, currentTail, element);
    currentHead = result.head;
    currentTail = result.tail;
  }
  
  return { head: currentHead, tail: currentTail };
}

// Test cases
let head = null;
let tail = null;

console.log("=== Inserting at Beginning of Doubly Linked List ===");
const result1 = insertAtBeginDoubly(head, tail, 3);
head = result1.head;
tail = result1.tail;
console.log("After inserting 3:", printDoublyForward(head), "|", printDoublyBackward(tail));

const result2 = insertAtBeginDoubly(head, tail, 2);
head = result2.head;
tail = result2.tail;
console.log("After inserting 2:", printDoublyForward(head), "|", printDoublyBackward(tail));

const result3 = insertAtBeginDoubly(head, tail, 1);
head = result3.head;
tail = result3.tail;
console.log("After inserting 1:", printDoublyForward(head), "|", printDoublyBackward(tail));

console.log("\\n=== Detailed Insertion ===");
const result4 = insertAtBeginDoublyDetailed(head, tail, 0);
console.log("Final forward:", printDoublyForward(result4.head));
console.log("Final backward:", printDoublyBackward(result4.tail));

// Helper functions
function DoublyListNode(data) {
  this.data = data;
  this.next = null;
  this.prev = null;
}

function printDoublyForward(head) {
  const result = [];
  let current = head;
  while (current !== null) {
    result.push(current.data);
    current = current.next;
  }
  return result.join(' -> ');
}

function printDoublyBackward(tail) {
  const result = [];
  let current = tail;
  while (current !== null) {
    result.push(current.data);
    current = current.prev;
  }
  return result.join(' <- ');
}`}
        explanation="Create new node, link it to current head, update head's prev pointer, return new node as head. Time: O(1), Space: O(1)."
      />

      <ProblemBlock
        title="13. Insert at End Doubly Linked List"
        difficulty="Easy"
        description="Insert a new node at the end of a doubly linked list."
        solution={`// Insert at End Doubly Linked List

function insertAtEndDoubly(head, tail, data) {
  const newNode = new DoublyListNode(data);
  
  if (head === null) {
    // Empty list - new node becomes both head and tail
    return { head: newNode, tail: newNode };
  }
  
  // Link current tail to new node
  tail.next = newNode;
  newNode.prev = tail;
  
  // Return new node as tail
  return { head, tail: newNode };
}

// Insert at end with detailed steps
function insertAtEndDoublyDetailed(head, tail, data) {
  console.log(\`Inserting \${data} at end of doubly linked list\`);
  
  const newNode = new DoublyListNode(data);
  console.log(\`Created new node with data: \${newNode.data}\`);
  
  if (head === null) {
    console.log("List is empty, new node becomes head and tail");
    return { head: newNode, tail: newNode };
  }
  
  console.log(\`Current tail: \${tail.data}\`);
  console.log(\`Linking current tail to new node\`);
  
  // Link current tail to new node
  tail.next = newNode;
  newNode.prev = tail;
  
  console.log(\`Tail (\${tail.data}) -> New node (\${newNode.data})\`);
  console.log(\`New node (\${newNode.data}) <- Tail (\${tail.data})\`);
  console.log(\`New tail: \${newNode.data}\`);
  
  return { head, tail: newNode };
}

// Insert multiple elements at end
function insertMultipleAtEndDoubly(head, tail, elements) {
  let currentHead = head;
  let currentTail = tail;
  
  for (const element of elements) {
    const result = insertAtEndDoubly(currentHead, currentTail, element);
    currentHead = result.head;
    currentTail = result.tail;
  }
  
  return { head: currentHead, tail: currentTail };
}

// Test cases
let head = null;
let tail = null;

console.log("=== Inserting at End of Doubly Linked List ===");
const result1 = insertAtEndDoubly(head, tail, 1);
head = result1.head;
tail = result1.tail;
console.log("After inserting 1:", printDoublyForward(head), "|", printDoublyBackward(tail));

const result2 = insertAtEndDoubly(head, tail, 2);
head = result2.head;
tail = result2.tail;
console.log("After inserting 2:", printDoublyForward(head), "|", printDoublyBackward(tail));

const result3 = insertAtEndDoubly(head, tail, 3);
head = result3.head;
tail = result3.tail;
console.log("After inserting 3:", printDoublyForward(head), "|", printDoublyBackward(tail));

console.log("\\n=== Detailed Insertion ===");
const result4 = insertAtEndDoublyDetailed(head, tail, 4);
console.log("Final forward:", printDoublyForward(result4.head));
console.log("Final backward:", printDoublyBackward(result4.tail));

console.log("\\n=== Multiple Insertions ===");
const result5 = insertMultipleAtEndDoubly(result4.head, result4.tail, [5, 6, 7]);
console.log("After multiple insertions:");
console.log("Forward:", printDoublyForward(result5.head));
console.log("Backward:", printDoublyBackward(result5.tail));

// Helper functions
function DoublyListNode(data) {
  this.data = data;
  this.next = null;
  this.prev = null;
}

function printDoublyForward(head) {
  const result = [];
  let current = head;
  while (current !== null) {
    result.push(current.data);
    current = current.next;
  }
  return result.join(' -> ');
}

function printDoublyBackward(tail) {
  const result = [];
  let current = tail;
  while (current !== null) {
    result.push(current.data);
    current = current.prev;
  }
  return result.join(' <- ');
}`}
        explanation="Create new node, link current tail to it, set new node's prev to current tail, return new node as tail. Time: O(1), Space: O(1)."
      />

      <ProblemBlock
        title="14. Reverse a Doubly Linked List"
        difficulty="Medium"
        description="Reverse a doubly linked list by swapping next and prev pointers."
        solution={`// Reverse a Doubly Linked List

function reverseDoublyLinkedList(head, tail) {
  if (head === null || head === tail) {
    return { head, tail };
  }
  
  let current = head;
  
  while (current !== null) {
    // Swap next and prev pointers
    const temp = current.next;
    current.next = current.prev;
    current.prev = temp;
    
    // Move to next node (which was previous)
    current = temp;
  }
  
  // Swap head and tail
  return { head: tail, tail: head };
}

// Reverse with detailed steps
function reverseDoublyLinkedListDetailed(head, tail) {
  console.log("Reversing doubly linked list");
  console.log("Original forward:", printDoublyForward(head));
  console.log("Original backward:", printDoublyBackward(tail));
  
  if (head === null || head === tail) {
    console.log("List is empty or has only one node, no reversal needed");
    return { head, tail };
  }
  
  let current = head;
  let step = 1;
  
  while (current !== null) {
    console.log(\`\\nStep \${step}: Processing node \${current.data}\`);
    console.log(\`Before swap: next=\${current.next ? current.next.data : 'null'}, prev=\${current.prev ? current.prev.data : 'null'}\`);
    
    // Swap next and prev pointers
    const temp = current.next;
    current.next = current.prev;
    current.prev = temp;
    
    console.log(\`After swap: next=\${current.next ? current.next.data : 'null'}, prev=\${current.prev ? current.prev.data : 'null'}\`);
    
    // Move to next node (which was previous)
    current = temp;
    step++;
  }
  
  console.log("\\nSwapping head and tail");
  console.log(\`New head: \${tail.data}, New tail: \${head.data}\`);
  
  return { head: tail, tail: head };
}

// Reverse using recursion
function reverseDoublyLinkedListRecursive(head, tail) {
  if (head === null || head === tail) {
    return { head, tail };
  }
  
  function reverseNode(node) {
    if (node === null) return;
    
    // Swap next and prev
    const temp = node.next;
    node.next = node.prev;
    node.prev = temp;
    
    // Recursively reverse the rest
    reverseNode(temp);
  }
  
  reverseNode(head);
  return { head: tail, tail: head };
}

// Reverse and return only head (tail can be found by traversal)
function reverseDoublyLinkedListHeadOnly(head) {
  if (head === null) return null;
  
  let current = head;
  
  while (current !== null) {
    const temp = current.next;
    current.next = current.prev;
    current.prev = temp;
    current = temp;
  }
  
  // Find new tail by traversing from new head
  let newTail = head;
  while (newTail.next !== null) {
    newTail = newTail.next;
  }
  
  return { head: current, tail: newTail };
}

// Test cases
let head = null;
let tail = null;

// Create a doubly linked list
const elements = [1, 2, 3, 4, 5];
for (const element of elements) {
  const result = insertAtEndDoubly(head, tail, element);
  head = result.head;
  tail = result.tail;
}

console.log("=== Reversing Doubly Linked List ===");
console.log("Original list:");
console.log("Forward:", printDoublyForward(head));
console.log("Backward:", printDoublyBackward(tail));

const reversed = reverseDoublyLinkedList(head, tail);
console.log("\\nAfter reversal:");
console.log("Forward:", printDoublyForward(reversed.head));
console.log("Backward:", printDoublyBackward(reversed.tail));

console.log("\\n=== Detailed Reversal ===");
const detailedReversed = reverseDoublyLinkedListDetailed(reversed.head, reversed.tail);

console.log("\\n=== Recursive Reversal ===");
const recursiveReversed = reverseDoublyLinkedListRecursive(detailedReversed.head, detailedReversed.tail);
console.log("Recursive reversal:");
console.log("Forward:", printDoublyForward(recursiveReversed.head));
console.log("Backward:", printDoublyBackward(recursiveReversed.tail));

// Helper functions
function DoublyListNode(data) {
  this.data = data;
  this.next = null;
  this.prev = null;
}

function insertAtEndDoubly(head, tail, data) {
  const newNode = new DoublyListNode(data);
  if (head === null) {
    return { head: newNode, tail: newNode };
  }
  tail.next = newNode;
  newNode.prev = tail;
  return { head, tail: newNode };
}

function printDoublyForward(head) {
  const result = [];
  let current = head;
  while (current !== null) {
    result.push(current.data);
    current = current.next;
  }
  return result.join(' -> ');
}

function printDoublyBackward(tail) {
  const result = [];
  let current = tail;
  while (current !== null) {
    result.push(current.data);
    current = current.prev;
  }
  return result.join(' <- ');
}`}
        explanation="Swap next and prev pointers for each node, then swap head and tail. Time: O(n), Space: O(1)."
      />

      <ProblemBlock
        title="15. Delete Head of a Doubly Linked List"
        difficulty="Easy"
        description="Remove the first node (head) from a doubly linked list."
        solution={`// Delete Head of a Doubly Linked List

function deleteHeadDoubly(head, tail) {
  if (head === null) {
    return { head: null, tail: null };
  }
  
  if (head === tail) {
    // Only one node in list
    return { head: null, tail: null };
  }
  
  // Update the new head's prev pointer
  head.next.prev = null;
  
  // Return new head
  return { head: head.next, tail };
}

// Delete head with detailed steps
function deleteHeadDoublyDetailed(head, tail) {
  console.log("Deleting head of doubly linked list");
  
  if (head === null) {
    console.log("List is empty, nothing to delete");
    return { head: null, tail: null };
  }
  
  console.log(\`Current head: \${head.data}\`);
  
  if (head === tail) {
    console.log("Only one node in list, deleting it");
    return { head: null, tail: null };
  }
  
  console.log(\`Head points to: \${head.next.data}\`);
  console.log(\`Setting \${head.next.data}'s prev to null\`);
  
  // Update the new head's prev pointer
  head.next.prev = null;
  
  console.log(\`New head: \${head.next.data}\`);
  
  return { head: head.next, tail };
}

// Delete head and return deleted data
function deleteHeadDoublyWithData(head, tail) {
  if (head === null) {
    return { head: null, tail: null, deletedData: null };
  }
  
  const deletedData = head.data;
  
  if (head === tail) {
    return { head: null, tail: null, deletedData };
  }
  
  head.next.prev = null;
  return { head: head.next, tail, deletedData };
}

// Delete multiple heads
function deleteMultipleHeadsDoubly(head, tail, count) {
  let currentHead = head;
  let currentTail = tail;
  
  for (let i = 0; i < count && currentHead !== null; i++) {
    const result = deleteHeadDoubly(currentHead, currentTail);
    currentHead = result.head;
    currentTail = result.tail;
  }
  
  return { head: currentHead, tail: currentTail };
}

// Test cases
let head = null;
let tail = null;

// Create a doubly linked list
const elements = [1, 2, 3, 4, 5];
for (const element of elements) {
  const result = insertAtEndDoubly(head, tail, element);
  head = result.head;
  tail = result.tail;
}

console.log("=== Deleting Head of Doubly Linked List ===");
console.log("Original list:");
console.log("Forward:", printDoublyForward(head));
console.log("Backward:", printDoublyBackward(tail));

const result1 = deleteHeadDoubly(head, tail);
head = result1.head;
tail = result1.tail;
console.log("\\nAfter deleting head:");
console.log("Forward:", printDoublyForward(head));
console.log("Backward:", printDoublyBackward(tail));

const result2 = deleteHeadDoubly(head, tail);
head = result2.head;
tail = result2.tail;
console.log("\\nAfter deleting head again:");
console.log("Forward:", printDoublyForward(head));
console.log("Backward:", printDoublyBackward(tail));

console.log("\\n=== Detailed Deletion ===");
const result3 = deleteHeadDoublyDetailed(head, tail);
console.log("Final list:");
console.log("Forward:", printDoublyForward(result3.head));
console.log("Backward:", printDoublyBackward(result3.tail));

console.log("\\n=== Deletion with Data Return ===");
const result4 = deleteHeadDoublyWithData(result3.head, result3.tail);
console.log("Deleted data:", result4.deletedData);
console.log("Remaining list:");
console.log("Forward:", printDoublyForward(result4.head));
console.log("Backward:", printDoublyBackward(result4.tail));

console.log("\\n=== Edge Cases ===");
console.log("Delete from single node list:");
let singleHead = null;
let singleTail = null;
const singleResult = insertAtEndDoubly(singleHead, singleTail, 99);
singleHead = singleResult.head;
singleTail = singleResult.tail;
console.log("Before:", printDoublyForward(singleHead));
const singleDelete = deleteHeadDoubly(singleHead, singleTail);
console.log("After:", printDoublyForward(singleDelete.head));

console.log("Delete from empty list:");
const emptyDelete = deleteHeadDoubly(null, null);
console.log("Result:", printDoublyForward(emptyDelete.head));

// Helper functions
function DoublyListNode(data) {
  this.data = data;
  this.next = null;
  this.prev = null;
}

function insertAtEndDoubly(head, tail, data) {
  const newNode = new DoublyListNode(data);
  if (head === null) {
    return { head: newNode, tail: newNode };
  }
  tail.next = newNode;
  newNode.prev = tail;
  return { head, tail: newNode };
}

function printDoublyForward(head) {
  const result = [];
  let current = head;
  while (current !== null) {
    result.push(current.data);
    current = current.next;
  }
  return result.join(' -> ');
}

function printDoublyBackward(tail) {
  const result = [];
  let current = tail;
  while (current !== null) {
    result.push(current.data);
    current = current.prev;
  }
  return result.join(' <- ');
}`}
        explanation="Update new head's prev pointer to null, return head.next as new head. Handle single node and empty list cases. Time: O(1), Space: O(1)."
      />

      <ProblemBlock
        title="16. Delete Last of a Doubly Linked List"
        difficulty="Easy"
        description="Remove the last node (tail) from a doubly linked list."
        solution={`// Delete Last of a Doubly Linked List

function deleteLastDoubly(head, tail) {
  if (head === null) {
    return { head: null, tail: null };
  }
  
  if (head === tail) {
    // Only one node in list
    return { head: null, tail: null };
  }
  
  // Update the new tail's next pointer
  tail.prev.next = null;
  
  // Return new tail
  return { head, tail: tail.prev };
}

// Delete last with detailed steps
function deleteLastDoublyDetailed(head, tail) {
  console.log("Deleting last node of doubly linked list");
  
  if (head === null) {
    console.log("List is empty, nothing to delete");
    return { head: null, tail: null };
  }
  
  console.log(\`Current tail: \${tail.data}\`);
  
  if (head === tail) {
    console.log("Only one node in list, deleting it");
    return { head: null, tail: null };
  }
  
  console.log(\`Tail points back to: \${tail.prev.data}\`);
  console.log(\`Setting \${tail.prev.data}'s next to null\`);
  
  // Update the new tail's next pointer
  tail.prev.next = null;
  
  console.log(\`New tail: \${tail.prev.data}\`);
  
  return { head, tail: tail.prev };
}

// Delete last and return deleted data
function deleteLastDoublyWithData(head, tail) {
  if (head === null) {
    return { head: null, tail: null, deletedData: null };
  }
  
  const deletedData = tail.data;
  
  if (head === tail) {
    return { head: null, tail: null, deletedData };
  }
  
  tail.prev.next = null;
  return { head, tail: tail.prev, deletedData };
}

// Delete multiple last nodes
function deleteMultipleLastDoubly(head, tail, count) {
  let currentHead = head;
  let currentTail = tail;
  
  for (let i = 0; i < count && currentHead !== null; i++) {
    const result = deleteLastDoubly(currentHead, currentTail);
    currentHead = result.head;
    currentTail = result.tail;
  }
  
  return { head: currentHead, tail: currentTail };
}

// Test cases
let head = null;
let tail = null;

// Create a doubly linked list
const elements = [1, 2, 3, 4, 5];
for (const element of elements) {
  const result = insertAtEndDoubly(head, tail, element);
  head = result.head;
  tail = result.tail;
}

console.log("=== Deleting Last of Doubly Linked List ===");
console.log("Original list:");
console.log("Forward:", printDoublyForward(head));
console.log("Backward:", printDoublyBackward(tail));

const result1 = deleteLastDoubly(head, tail);
head = result1.head;
tail = result1.tail;
console.log("\\nAfter deleting last:");
console.log("Forward:", printDoublyForward(head));
console.log("Backward:", printDoublyBackward(tail));

const result2 = deleteLastDoubly(head, tail);
head = result2.head;
tail = result2.tail;
console.log("\\nAfter deleting last again:");
console.log("Forward:", printDoublyForward(head));
console.log("Backward:", printDoublyBackward(tail));

console.log("\\n=== Detailed Deletion ===");
const result3 = deleteLastDoublyDetailed(head, tail);
console.log("Final list:");
console.log("Forward:", printDoublyForward(result3.head));
console.log("Backward:", printDoublyBackward(result3.tail));

console.log("\\n=== Deletion with Data Return ===");
const result4 = deleteLastDoublyWithData(result3.head, result3.tail);
console.log("Deleted data:", result4.deletedData);
console.log("Remaining list:");
console.log("Forward:", printDoublyForward(result4.head));
console.log("Backward:", printDoublyBackward(result4.tail));

console.log("\\n=== Multiple Deletions ===");
let multiHead = null;
let multiTail = null;
const multiElements = [10, 20, 30, 40, 50];
for (const element of multiElements) {
  const result = insertAtEndDoubly(multiHead, multiTail, element);
  multiHead = result.head;
  multiTail = result.tail;
}

console.log("Original:", printDoublyForward(multiHead));
const multiResult = deleteMultipleLastDoubly(multiHead, multiTail, 3);
console.log("After deleting last 3:", printDoublyForward(multiResult.head));

console.log("\\n=== Edge Cases ===");
console.log("Delete from single node list:");
let singleHead = null;
let singleTail = null;
const singleResult = insertAtEndDoubly(singleHead, singleTail, 99);
singleHead = singleResult.head;
singleTail = singleResult.tail;
console.log("Before:", printDoublyForward(singleHead));
const singleDelete = deleteLastDoubly(singleHead, singleTail);
console.log("After:", printDoublyForward(singleDelete.head));

console.log("Delete from empty list:");
const emptyDelete = deleteLastDoubly(null, null);
console.log("Result:", printDoublyForward(emptyDelete.head));

// Helper functions
function DoublyListNode(data) {
  this.data = data;
  this.next = null;
  this.prev = null;
}

function insertAtEndDoubly(head, tail, data) {
  const newNode = new DoublyListNode(data);
  if (head === null) {
    return { head: newNode, tail: newNode };
  }
  tail.next = newNode;
  newNode.prev = tail;
  return { head, tail: newNode };
}

function printDoublyForward(head) {
  const result = [];
  let current = head;
  while (current !== null) {
    result.push(current.data);
    current = current.next;
  }
  return result.join(' -> ');
}

function printDoublyBackward(tail) {
  const result = [];
  let current = tail;
  while (current !== null) {
    result.push(current.data);
    current = current.prev;
  }
  return result.join(' <- ');
}`}
        explanation="Update new tail's next pointer to null, return tail.prev as new tail. Handle single node and empty list cases. Time: O(1), Space: O(1)."
      />
    </div>
  );
}

// Circular Section
function CircularSection() {
  return (
    <div className="space-y-8">
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Circular Linked Lists
        </h2>
        <p className="text-gray-300 mb-6">
          Circular linked lists where the last node points back to the first
          node.
        </p>
      </div>

      <ProblemBlock
        title="17. Circular Linked List (Advantages & Disadvantages)"
        difficulty="Easy"
        description="Understanding circular linked lists, their advantages and disadvantages."
        solution={`// Circular Linked List (Advantages & Disadvantages)

// Circular Linked List Node
class CircularListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Circular Linked List Implementation
class CircularLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  
  // Insert at beginning
  insertAtBeginning(data) {
    const newNode = new CircularListNode(data);
    
    if (this.head === null) {
      // First node - point to itself
      this.head = newNode;
      newNode.next = this.head;
    } else {
      // Find last node
      let current = this.head;
      while (current.next !== this.head) {
        current = current.next;
      }
      
      // Insert new node
      newNode.next = this.head;
      this.head = newNode;
      current.next = this.head; // Update last node's next
    }
    this.size++;
  }
  
  // Insert at end
  insertAtEnd(data) {
    const newNode = new CircularListNode(data);
    
    if (this.head === null) {
      this.head = newNode;
      newNode.next = this.head;
    } else {
      // Find last node
      let current = this.head;
      while (current.next !== this.head) {
        current = current.next;
      }
      
      // Insert at end
      current.next = newNode;
      newNode.next = this.head;
    }
    this.size++;
  }
  
  // Traversal
  traverse() {
    if (this.head === null) {
      console.log("Empty list");
      return;
    }
    
    let current = this.head;
    do {
      console.log(current.data);
      current = current.next;
    } while (current !== this.head);
  }
  
  // Get all elements as array
  toArray() {
    if (this.head === null) return [];
    
    const result = [];
    let current = this.head;
    do {
      result.push(current.data);
      current = current.next;
    } while (current !== this.head);
    
    return result;
  }
  
  // Search
  search(data) {
    if (this.head === null) return false;
    
    let current = this.head;
    do {
      if (current.data === data) return true;
      current = current.next;
    } while (current !== this.head);
    
    return false;
  }
  
  // Delete node
  delete(data) {
    if (this.head === null) return false;
    
    let current = this.head;
    let prev = null;
    
    // Find the node to delete
    do {
      if (current.data === data) {
        if (current === this.head && current.next === this.head) {
          // Only one node
          this.head = null;
        } else if (current === this.head) {
          // Deleting head - find last node
          let last = this.head;
          while (last.next !== this.head) {
            last = last.next;
          }
          this.head = this.head.next;
          last.next = this.head;
        } else {
          // Deleting middle or last node
          prev.next = current.next;
        }
        this.size--;
        return true;
      }
      prev = current;
      current = current.next;
    } while (current !== this.head);
    
    return false;
  }
  
  isEmpty() {
    return this.head === null;
  }
  
  getSize() {
    return this.size;
  }
}

// Advantages and Disadvantages Analysis
function analyzeCircularLinkedList() {
  console.log("=== Circular Linked List Analysis ===");
  
  console.log("\\n✅ Advantages:");
  console.log("• Round-robin scheduling: Perfect for round-robin algorithms");
  console.log("• Circular buffers: Efficient for implementing circular buffers");
  console.log("• Music playlists: Natural for repeating playlists");
  console.log("• No null pointers: Last node always points somewhere");
  console.log("• Efficient rotation: Can rotate list in O(1) time");
  console.log("• Memory efficiency: No need for special end-of-list handling");
  
  console.log("\\n❌ Disadvantages:");
  console.log("• Infinite loops: Easy to create infinite loops during traversal");
  console.log("• Complex deletion: Need to handle circular references carefully");
  console.log("• No natural end: Can't easily determine list boundaries");
  console.log("• Memory leaks: Circular references can prevent garbage collection");
  console.log("• Debugging difficulty: Harder to debug due to circular nature");
  console.log("• Insertion complexity: More complex insertion logic");
  
  console.log("\\n🎯 When to Use:");
  console.log("• Round-robin scheduling algorithms");
  console.log("• Circular buffers for streaming data");
  console.log("• Music/video playlists with repeat functionality");
  console.log("• Game development (circular maps, rotating elements)");
  console.log("• Operating system algorithms (CPU scheduling)");
  
  console.log("\\n⚠️ When NOT to Use:");
  console.log("• When you need clear list boundaries");
  console.log("• For simple linear data structures");
  console.log("• When debugging is a priority");
  console.log("• For beginners learning linked lists");
  console.log("• When memory management is critical");
}

// Performance comparison
function compareCircularVsLinear() {
  console.log("\\n=== Performance Comparison ===");
  
  const circular = new CircularLinkedList();
  const linear = new SinglyLinkedList();
  
  // Insert test
  const elements = [1, 2, 3, 4, 5];
  
  console.log("Insertion performance:");
  const start1 = performance.now();
  elements.forEach(el => circular.insertAtEnd(el));
  const circularTime = performance.now() - start1;
  
  const start2 = performance.now();
  elements.forEach(el => linear.insertAtEnd(el));
  const linearTime = performance.now() - start2;
  
  console.log(\`Circular: \${circularTime.toFixed(2)}ms\`);
  console.log(\`Linear: \${linearTime.toFixed(2)}ms\`);
  
  console.log("\\nSearch performance:");
  const start3 = performance.now();
  circular.search(5);
  const circularSearchTime = performance.now() - start3;
  
  const start4 = performance.now();
  linear.search(5);
  const linearSearchTime = performance.now() - start4;
  
  console.log(\`Circular search: \${circularSearchTime.toFixed(2)}ms\`);
  console.log(\`Linear search: \${linearSearchTime.toFixed(2)}ms\`);
  
  console.log("\\nTraversal:");
  console.log("Circular:", circular.toArray());
  console.log("Linear:", linear.toArray());
}

// Demonstration
function demonstrateCircularLinkedList() {
  console.log("\\n=== Circular Linked List Demonstration ===");
  
  const circular = new CircularLinkedList();
  
  console.log("\\n1. Inserting elements:");
  [10, 20, 30, 40].forEach(el => {
    circular.insertAtEnd(el);
    console.log(\`After inserting \${el}: [\${circular.toArray().join(', ')}]\`);
  });
  
  console.log("\\n2. Traversing (showing circular nature):");
  circular.traverse();
  
  console.log("\\n3. Searching:");
  console.log("Search 30:", circular.search(30));
  console.log("Search 50:", circular.search(50));
  
  console.log("\\n4. Deleting:");
  console.log("Delete 20:", circular.delete(20));
  console.log("After deletion:", circular.toArray());
  
  console.log("\\n5. Inserting at beginning:");
  circular.insertAtBeginning(5);
  console.log("After inserting 5 at beginning:", circular.toArray());
}

// Run all analyses
analyzeCircularLinkedList();
compareCircularVsLinear();
demonstrateCircularLinkedList();

// Helper SinglyLinkedList class for comparison
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  
  insertAtEnd(data) {
    const newNode = new ListNode(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }
  
  search(data) {
    let current = this.head;
    while (current !== null) {
      if (current.data === data) return true;
      current = current.next;
    }
    return false;
  }
  
  toArray() {
    const result = [];
    let current = this.head;
    while (current !== null) {
      result.push(current.data);
      current = current.next;
    }
    return result;
  }
}

function ListNode(data) {
  this.data = data;
  this.next = null;
}`}
        explanation="Circular linked lists have the last node pointing to the first. Advantages: round-robin scheduling, no null pointers. Disadvantages: infinite loop risk, complex deletion. Time: O(n) for most operations."
      />

      <ProblemBlock
        title="18. Circular Linked List Traversal"
        difficulty="Easy"
        description="Traverse a circular linked list safely without infinite loops."
        solution={`// Circular Linked List Traversal

function traverseCircularLinkedList(head) {
  if (head === null) {
    console.log("Empty circular list");
    return [];
  }
  
  const result = [];
  let current = head;
  
  // Use do-while to ensure we visit at least one node
  do {
    result.push(current.data);
    current = current.next;
  } while (current !== head);
  
  return result;
}

// Traversal with detailed steps
function traverseCircularLinkedListDetailed(head) {
  console.log("Traversing circular linked list");
  
  if (head === null) {
    console.log("List is empty");
    return [];
  }
  
  const result = [];
  let current = head;
  let step = 1;
  
  console.log(\`Starting traversal from head: \${head.data}\`);
  
  do {
    console.log(\`Step \${step}: Visiting node \${current.data}\`);
    result.push(current.data);
    current = current.next;
    step++;
  } while (current !== head);
  
  console.log(\`Completed full circle. Back at head: \${current.data}\`);
  console.log(\`Traversal result: [\${result.join(', ')}]\`);
  
  return result;
}

// Traversal with custom action
function traverseCircularWithAction(head, action) {
  if (head === null) return;
  
  let current = head;
  let position = 0;
  
  do {
    action(current.data, position);
    current = current.next;
    position++;
  } while (current !== head);
}

// Traversal with early termination
function traverseCircularUntil(head, condition) {
  if (head === null) return [];
  
  const result = [];
  let current = head;
  
  do {
    if (condition(current.data)) {
      break;
    }
    result.push(current.data);
    current = current.next;
  } while (current !== head);
  
  return result;
}

// Count nodes in circular list
function countCircularNodes(head) {
  if (head === null) return 0;
  
  let count = 0;
  let current = head;
  
  do {
    count++;
    current = current.next;
  } while (current !== head);
  
  return count;
}

// Find maximum in circular list
function findMaxCircular(head) {
  if (head === null) return null;
  
  let max = head.data;
  let current = head.next;
  
  while (current !== head) {
    if (current.data > max) {
      max = current.data;
    }
    current = current.next;
  }
  
  return max;
}

// Sum all elements in circular list
function sumCircularList(head) {
  if (head === null) return 0;
  
  let sum = 0;
  let current = head;
  
  do {
    sum += current.data;
    current = current.next;
  } while (current !== head);
  
  return sum;
}

// Traversal with position tracking
function traverseCircularWithPositions(head) {
  if (head === null) {
    console.log("Empty circular list");
    return [];
  }
  
  const result = [];
  let current = head;
  let position = 0;
  
  console.log("Circular list traversal with positions:");
  
  do {
    console.log(\`Position \${position}: \${current.data}\`);
    result.push({ data: current.data, position });
    current = current.next;
    position++;
  } while (current !== head);
  
  return result;
}

// Safe traversal with limit (prevent infinite loops)
function traverseCircularSafe(head, maxSteps = 1000) {
  if (head === null) return [];
  
  const result = [];
  let current = head;
  let steps = 0;
  
  do {
    result.push(current.data);
    current = current.next;
    steps++;
    
    if (steps > maxSteps) {
      console.log("Warning: Maximum steps reached, breaking to prevent infinite loop");
      break;
    }
  } while (current !== head);
  
  return result;
}

// Test cases
function testCircularTraversal() {
  console.log("=== Testing Circular Linked List Traversal ===");
  
  // Create a circular linked list
  const node1 = new CircularListNode(1);
  const node2 = new CircularListNode(2);
  const node3 = new CircularListNode(3);
  const node4 = new CircularListNode(4);
  
  node1.next = node2;
  node2.next = node3;
  node3.next = node4;
  node4.next = node1; // Make it circular
  
  console.log("\\n1. Basic traversal:");
  const result1 = traverseCircularLinkedList(node1);
  console.log("Result:", result1);
  
  console.log("\\n2. Detailed traversal:");
  const result2 = traverseCircularLinkedListDetailed(node1);
  
  console.log("\\n3. Traversal with custom action:");
  traverseCircularWithAction(node1, (data, pos) => {
    console.log(\`Element at position \${pos}: \${data * 2}\`);
  });
  
  console.log("\\n4. Count nodes:");
  console.log("Node count:", countCircularNodes(node1));
  
  console.log("\\n5. Find maximum:");
  console.log("Maximum value:", findMaxCircular(node1));
  
  console.log("\\n6. Sum all elements:");
  console.log("Sum:", sumCircularList(node1));
  
  console.log("\\n7. Traversal with positions:");
  traverseCircularWithPositions(node1);
  
  console.log("\\n8. Safe traversal with limit:");
  const safeResult = traverseCircularSafe(node1, 10);
  console.log("Safe traversal result:", safeResult);
  
  console.log("\\n9. Traversal with early termination:");
  const earlyResult = traverseCircularUntil(node1, (data) => data === 3);
  console.log("Traversal until 3:", earlyResult);
  
  console.log("\\n10. Empty list traversal:");
  traverseCircularLinkedList(null);
}

// Helper class
function CircularListNode(data) {
  this.data = data;
  this.next = null;
}

// Run tests
testCircularTraversal();`}
        explanation="Use do-while loop to traverse circular list. Start from head, visit each node, continue until back to head. Always check for empty list first. Time: O(n), Space: O(1)."
      />

      <ProblemBlock
        title="19. Insert at Begin of Circular Linked List"
        difficulty="Medium"
        description="Insert a new node at the beginning of a circular linked list."
        solution={`// Insert at Begin of Circular Linked List

function insertAtBeginCircular(head, data) {
  const newNode = new CircularListNode(data);
  
  if (head === null) {
    // Empty list - new node points to itself
    newNode.next = newNode;
    return newNode;
  }
  
  // Find the last node
  let last = head;
  while (last.next !== head) {
    last = last.next;
  }
  
  // Insert new node at beginning
  newNode.next = head;
  last.next = newNode; // Update last node's next
  
  return newNode; // Return new head
}

// Insert at begin with detailed steps
function insertAtBeginCircularDetailed(head, data) {
  console.log(\`Inserting \${data} at beginning of circular linked list\`);
  
  const newNode = new CircularListNode(data);
  console.log(\`Created new node with data: \${newNode.data}\`);
  
  if (head === null) {
    console.log("List is empty, new node points to itself");
    newNode.next = newNode;
    return newNode;
  }
  
  console.log(\`Current head: \${head.data}\`);
  console.log("Finding last node...");
  
  // Find the last node
  let last = head;
  let steps = 0;
  while (last.next !== head) {
    last = last.next;
    steps++;
    console.log(\`Step \${steps}: Current last node: \${last.data}\`);
  }
  
  console.log(\`Found last node: \${last.data}\`);
  console.log(\`Linking new node (\${newNode.data}) to current head (\${head.data})\`);
  
  // Insert new node at beginning
  newNode.next = head;
  console.log(\`Updating last node (\${last.data}) to point to new head (\${newNode.data})\`);
  last.next = newNode;
  
  console.log(\`New head: \${newNode.data}\`);
  return newNode;
}

// Insert multiple elements at beginning
function insertMultipleAtBeginCircular(head, elements) {
  let currentHead = head;
  
  for (const element of elements) {
    currentHead = insertAtBeginCircular(currentHead, element);
  }
  
  return currentHead;
}

// Insert at begin and return both head and size
function insertAtBeginCircularWithSize(head, data, currentSize = 0) {
  const newNode = new CircularListNode(data);
  
  if (head === null) {
    newNode.next = newNode;
    return { head: newNode, size: 1 };
  }
  
  let last = head;
  while (last.next !== head) {
    last = last.next;
  }
  
  newNode.next = head;
  last.next = newNode;
  
  return { head: newNode, size: currentSize + 1 };
}

// Insert at begin with validation
function insertAtBeginCircularSafe(head, data) {
  if (data === null || data === undefined) {
    throw new Error("Cannot insert null or undefined data");
  }
  
  return insertAtBeginCircular(head, data);
}

// Test cases
function testInsertAtBeginCircular() {
  console.log("=== Testing Insert at Begin of Circular Linked List ===");
  
  let head = null;
  
  console.log("\\n1. Inserting into empty list:");
  head = insertAtBeginCircular(head, 3);
  console.log("After inserting 3:", traverseCircularLinkedList(head));
  
  console.log("\\n2. Inserting into non-empty list:");
  head = insertAtBeginCircular(head, 2);
  console.log("After inserting 2:", traverseCircularLinkedList(head));
  
  head = insertAtBeginCircular(head, 1);
  console.log("After inserting 1:", traverseCircularLinkedList(head));
  
  console.log("\\n3. Detailed insertion:");
  head = insertAtBeginCircularDetailed(head, 0);
  console.log("Final result:", traverseCircularLinkedList(head));
  
  console.log("\\n4. Multiple insertions:");
  head = insertMultipleAtBeginCircular(head, [-1, -2]);
  console.log("After multiple insertions:", traverseCircularLinkedList(head));
  
  console.log("\\n5. Insertion with size tracking:");
  const result = insertAtBeginCircularWithSize(head, -3, 6);
  console.log("New head:", result.head.data);
  console.log("Size:", result.size);
  console.log("List:", traverseCircularLinkedList(result.head));
  
  console.log("\\n6. Edge cases:");
  console.log("Inserting null (should throw error):");
  try {
    insertAtBeginCircularSafe(head, null);
  } catch (error) {
    console.log("Error caught:", error.message);
  }
  
  console.log("\\n7. Performance test:");
  const start = performance.now();
  let perfHead = null;
  for (let i = 0; i < 1000; i++) {
    perfHead = insertAtBeginCircular(perfHead, i);
  }
  const end = performance.now();
  console.log(\`Inserted 1000 elements in \${(end - start).toFixed(2)}ms\`);
  console.log("Final size:", countCircularNodes(perfHead));
}

// Helper functions
function CircularListNode(data) {
  this.data = data;
  this.next = null;
}

function traverseCircularLinkedList(head) {
  if (head === null) return [];
  
  const result = [];
  let current = head;
  do {
    result.push(current.data);
    current = current.next;
  } while (current !== head);
  
  return result;
}

function countCircularNodes(head) {
  if (head === null) return 0;
  
  let count = 0;
  let current = head;
  do {
    count++;
    current = current.next;
  } while (current !== head);
  
  return count;
}

// Run tests
testInsertAtBeginCircular();`}
        explanation="Find last node, link new node to current head, update last node's next to new node. Handle empty list case. Time: O(n) to find last node, Space: O(1)."
      />

      <ProblemBlock
        title="20. Insert at the end of Circular Linked List"
        difficulty="Easy"
        description="Insert a new node at the end of a circular linked list."
        solution={`// Insert at the end of Circular Linked List

function insertAtEndCircular(head, data) {
  const newNode = new CircularListNode(data);
  
  if (head === null) {
    // Empty list - new node points to itself
    newNode.next = newNode;
    return newNode;
  }
  
  // Find the last node
  let last = head;
  while (last.next !== head) {
    last = last.next;
  }
  
  // Insert new node at end
  last.next = newNode;
  newNode.next = head; // Make it circular
  
  return head; // Head remains the same
}

// Insert at end with detailed steps
function insertAtEndCircularDetailed(head, data) {
  console.log(\`Inserting \${data} at end of circular linked list\`);
  
  const newNode = new CircularListNode(data);
  console.log(\`Created new node with data: \${newNode.data}\`);
  
  if (head === null) {
    console.log("List is empty, new node points to itself");
    newNode.next = newNode;
    return newNode;
  }
  
  console.log(\`Current head: \${head.data}\`);
  console.log("Finding last node...");
  
  // Find the last node
  let last = head;
  let steps = 0;
  while (last.next !== head) {
    last = last.next;
    steps++;
    console.log(\`Step \${steps}: Current last node: \${last.data}\`);
  }
  
  console.log(\`Found last node: \${last.data}\`);
  console.log(\`Linking last node (\${last.data}) to new node (\${newNode.data})\`);
  console.log(\`Linking new node (\${newNode.data}) back to head (\${head.data})\`);
  
  // Insert new node at end
  last.next = newNode;
  newNode.next = head;
  
  console.log(\`New last node: \${newNode.data}\`);
  return head;
}

// Insert multiple elements at end
function insertMultipleAtEndCircular(head, elements) {
  let currentHead = head;
  
  for (const element of elements) {
    currentHead = insertAtEndCircular(currentHead, element);
  }
  
  return currentHead;
}

// Insert at end and return both head and tail
function insertAtEndCircularWithTail(head, data) {
  const newNode = new CircularListNode(data);
  
  if (head === null) {
    newNode.next = newNode;
    return { head: newNode, tail: newNode };
  }
  
  let last = head;
  while (last.next !== head) {
    last = last.next;
  }
  
  last.next = newNode;
  newNode.next = head;
  
  return { head, tail: newNode };
}

// Insert at end with size tracking
function insertAtEndCircularWithSize(head, data, currentSize = 0) {
  const newNode = new CircularListNode(data);
  
  if (head === null) {
    newNode.next = newNode;
    return { head: newNode, size: 1 };
  }
  
  let last = head;
  while (last.next !== head) {
    last = last.next;
  }
  
  last.next = newNode;
  newNode.next = head;
  
  return { head, size: currentSize + 1 };
}

// Test cases
function testInsertAtEndCircular() {
  console.log("=== Testing Insert at End of Circular Linked List ===");
  
  let head = null;
  
  console.log("\\n1. Inserting into empty list:");
  head = insertAtEndCircular(head, 1);
  console.log("After inserting 1:", traverseCircularLinkedList(head));
  
  console.log("\\n2. Inserting into non-empty list:");
  head = insertAtEndCircular(head, 2);
  console.log("After inserting 2:", traverseCircularLinkedList(head));
  
  head = insertAtEndCircular(head, 3);
  console.log("After inserting 3:", traverseCircularLinkedList(head));
  
  console.log("\\n3. Detailed insertion:");
  head = insertAtEndCircularDetailed(head, 4);
  console.log("Final result:", traverseCircularLinkedList(head));
  
  console.log("\\n4. Multiple insertions:");
  head = insertMultipleAtEndCircular(head, [5, 6, 7]);
  console.log("After multiple insertions:", traverseCircularLinkedList(head));
  
  console.log("\\n5. Insertion with tail tracking:");
  const result = insertAtEndCircularWithTail(head, 8);
  console.log("Head:", result.head.data);
  console.log("Tail:", result.tail.data);
  console.log("List:", traverseCircularLinkedList(result.head));
  
  console.log("\\n6. Insertion with size tracking:");
  const sizeResult = insertAtEndCircularWithSize(head, 9, 8);
  console.log("Size:", sizeResult.size);
  console.log("List:", traverseCircularLinkedList(sizeResult.head));
  
  console.log("\\n7. Performance test:");
  const start = performance.now();
  let perfHead = null;
  for (let i = 0; i < 1000; i++) {
    perfHead = insertAtEndCircular(perfHead, i);
  }
  const end = performance.now();
  console.log(\`Inserted 1000 elements in \${(end - start).toFixed(2)}ms\`);
  console.log("Final size:", countCircularNodes(perfHead));
  
  console.log("\\n8. Verification of circular property:");
  let current = head;
  let steps = 0;
  const maxSteps = countCircularNodes(head) + 1;
  
  console.log("Traversing twice the list size to verify circularity:");
  do {
    console.log(\`Step \${steps}: \${current.data}\`);
    current = current.next;
    steps++;
  } while (current !== head && steps < maxSteps);
  
  if (steps === maxSteps) {
    console.log("✓ Successfully completed circular traversal");
  }
}

// Helper functions
function CircularListNode(data) {
  this.data = data;
  this.next = null;
}

function traverseCircularLinkedList(head) {
  if (head === null) return [];
  
  const result = [];
  let current = head;
  do {
    result.push(current.data);
    current = current.next;
  } while (current !== head);
  
  return result;
}

function countCircularNodes(head) {
  if (head === null) return 0;
  
  let count = 0;
  let current = head;
  do {
    count++;
    current = current.next;
  } while (current !== head);
  
  return count;
}

// Run tests
testInsertAtEndCircular();`}
        explanation="Find last node, link it to new node, link new node back to head. Handle empty list case. Time: O(n) to find last node, Space: O(1)."
      />

      <ProblemBlock
        title="21. Delete Head of Circular Linked List"
        difficulty="Medium"
        description="Remove the first node (head) from a circular linked list."
        solution={`// Delete Head of Circular Linked List

function deleteHeadCircular(head) {
  if (head === null) {
    return null;
  }
  
  if (head.next === head) {
    // Only one node in list
    return null;
  }
  
  // Find the last node
  let last = head;
  while (last.next !== head) {
    last = last.next;
  }
  
  // Update last node's next to point to new head
  last.next = head.next;
  
  // Return new head
  return head.next;
}

// Delete head with detailed steps
function deleteHeadCircularDetailed(head) {
  console.log("Deleting head of circular linked list");
  
  if (head === null) {
    console.log("List is empty, nothing to delete");
    return null;
  }
  
  console.log(\`Current head: \${head.data}\`);
  
  if (head.next === head) {
    console.log("Only one node in list, deleting it");
    return null;
  }
  
  console.log("Finding last node...");
  let last = head;
  let steps = 0;
  while (last.next !== head) {
    last = last.next;
    steps++;
    console.log(\`Step \${steps}: Current last node: \${last.data}\`);
  }
  
  console.log(\`Found last node: \${last.data}\`);
  console.log(\`New head will be: \${head.next.data}\`);
  console.log(\`Updating last node (\${last.data}) to point to new head (\${head.next.data})\`);
  
  // Update last node's next to point to new head
  last.next = head.next;
  
  console.log(\`Head deleted. New head: \${head.next.data}\`);
  return head.next;
}

// Delete head and return deleted data
function deleteHeadCircularWithData(head) {
  if (head === null) {
    return { head: null, deletedData: null };
  }
  
  const deletedData = head.data;
  
  if (head.next === head) {
    return { head: null, deletedData };
  }
  
  let last = head;
  while (last.next !== head) {
    last = last.next;
  }
  
  last.next = head.next;
  return { head: head.next, deletedData };
}

// Delete multiple heads
function deleteMultipleHeadsCircular(head, count) {
  let currentHead = head;
  
  for (let i = 0; i < count && currentHead !== null; i++) {
    currentHead = deleteHeadCircular(currentHead);
  }
  
  return currentHead;
}

// Delete head with size tracking
function deleteHeadCircularWithSize(head, currentSize = 0) {
  if (head === null) {
    return { head: null, size: 0, deletedData: null };
  }
  
  const deletedData = head.data;
  
  if (head.next === head) {
    return { head: null, size: 0, deletedData };
  }
  
  let last = head;
  while (last.next !== head) {
    last = last.next;
  }
  
  last.next = head.next;
  return { 
    head: head.next, 
    size: Math.max(0, currentSize - 1), 
    deletedData 
  };
}

// Test cases
function testDeleteHeadCircular() {
  console.log("=== Testing Delete Head of Circular Linked List ===");
  
  // Create a circular linked list
  let head = null;
  [1, 2, 3, 4, 5].forEach(el => {
    head = insertAtEndCircular(head, el);
  });
  
  console.log("\\n1. Original list:");
  console.log("List:", traverseCircularLinkedList(head));
  
  console.log("\\n2. Deleting head:");
  head = deleteHeadCircular(head);
  console.log("After deleting head:", traverseCircularLinkedList(head));
  
  console.log("\\n3. Deleting head again:");
  head = deleteHeadCircular(head);
  console.log("After deleting head again:", traverseCircularLinkedList(head));
  
  console.log("\\n4. Detailed deletion:");
  head = deleteHeadCircularDetailed(head);
  console.log("Final list:", traverseCircularLinkedList(head));
  
  console.log("\\n5. Deletion with data return:");
  const result = deleteHeadCircularWithData(head);
  console.log("Deleted data:", result.deletedData);
  console.log("Remaining list:", traverseCircularLinkedList(result.head));
  head = result.head;
  
  console.log("\\n6. Multiple deletions:");
  head = deleteMultipleHeadsCircular(head, 2);
  console.log("After deleting 2 heads:", traverseCircularLinkedList(head));
  
  console.log("\\n7. Edge cases:");
  console.log("Delete from single node list:");
  let singleHead = insertAtEndCircular(null, 99);
  console.log("Before:", traverseCircularLinkedList(singleHead));
  singleHead = deleteHeadCircular(singleHead);
  console.log("After:", traverseCircularLinkedList(singleHead));
  
  console.log("Delete from empty list:");
  let emptyHead = deleteHeadCircular(null);
  console.log("Result:", traverseCircularLinkedList(emptyHead));
  
  console.log("\\n8. Performance test:");
  let perfHead = null;
  for (let i = 0; i < 100; i++) {
    perfHead = insertAtEndCircular(perfHead, i);
  }
  
  const start = performance.now();
  for (let i = 0; i < 50; i++) {
    perfHead = deleteHeadCircular(perfHead);
  }
  const end = performance.now();
  console.log(\`Deleted 50 heads in \${(end - start).toFixed(2)}ms\`);
  console.log("Remaining size:", countCircularNodes(perfHead));
}

// Helper functions
function CircularListNode(data) {
  this.data = data;
  this.next = null;
}

function insertAtEndCircular(head, data) {
  const newNode = new CircularListNode(data);
  
  if (head === null) {
    newNode.next = newNode;
    return newNode;
  }
  
  let last = head;
  while (last.next !== head) {
    last = last.next;
  }
  
  last.next = newNode;
  newNode.next = head;
  
  return head;
}

function traverseCircularLinkedList(head) {
  if (head === null) return [];
  
  const result = [];
  let current = head;
  do {
    result.push(current.data);
    current = current.next;
  } while (current !== head);
  
  return result;
}

function countCircularNodes(head) {
  if (head === null) return 0;
  
  let count = 0;
  let current = head;
  do {
    count++;
    current = current.next;
  } while (current !== head);
  
  return count;
}

// Run tests
testDeleteHeadCircular();`}
        explanation="Find last node, update its next to point to head.next, return head.next as new head. Handle single node and empty list cases. Time: O(n), Space: O(1)."
      />

      <ProblemBlock
        title="22. Delete Kth of a Circular Linked List"
        difficulty="Medium"
        description="Delete the kth node from a circular linked list."
        solution={`// Delete Kth of a Circular Linked List

function deleteKthCircular(head, k) {
  if (head === null) {
    return null;
  }
  
  if (k <= 0) {
    throw new Error("Invalid position k");
  }
  
  if (k === 1) {
    return deleteHeadCircular(head);
  }
  
  let current = head;
  let prev = null;
  let position = 1;
  
  // Find the kth node
  do {
    if (position === k) {
      // Found the kth node
      if (prev === null) {
        // This shouldn't happen for k > 1, but handle it
        return deleteHeadCircular(head);
      }
      
      // Delete the kth node
      prev.next = current.next;
      return head;
    }
    
    prev = current;
    current = current.next;
    position++;
  } while (current !== head);
  
  throw new Error(\`Position \${k} is beyond list length\`);
}

// Delete kth with detailed steps
function deleteKthCircularDetailed(head, k) {
  console.log(\`Deleting \${k}th node from circular linked list\`);
  
  if (head === null) {
    console.log("List is empty, nothing to delete");
    return null;
  }
  
  if (k <= 0) {
    throw new Error("Invalid position k");
  }
  
  if (k === 1) {
    console.log("Deleting first node (head)");
    return deleteHeadCircular(head);
  }
  
  let current = head;
  let prev = null;
  let position = 1;
  
  console.log(\`Starting search for \${k}th node\`);
  
  // Find the kth node
  do {
    console.log(\`Position \${position}: \${current.data}\`);
    
    if (position === k) {
      console.log(\`Found \${k}th node: \${current.data}\`);
      console.log(\`Previous node: \${prev ? prev.data : 'null'}\`);
      console.log(\`Next node: \${current.next.data}\`);
      
      // Delete the kth node
      prev.next = current.next;
      console.log(\`Deleted \${k}th node. List updated.\`);
      return head;
    }
    
    prev = current;
    current = current.next;
    position++;
  } while (current !== head);
  
  throw new Error(\`Position \${k} is beyond list length\`);
}

// Delete kth and return deleted data
function deleteKthCircularWithData(head, k) {
  if (head === null) {
    return { head: null, deletedData: null };
  }
  
  if (k <= 0) {
    throw new Error("Invalid position k");
  }
  
  if (k === 1) {
    const result = deleteHeadCircularWithData(head);
    return result;
  }
  
  let current = head;
  let prev = null;
  let position = 1;
  
  do {
    if (position === k) {
      const deletedData = current.data;
      prev.next = current.next;
      return { head, deletedData };
    }
    
    prev = current;
    current = current.next;
    position++;
  } while (current !== head);
  
  throw new Error(\`Position \${k} is beyond list length\`);
}

// Delete multiple kth positions
function deleteMultipleKthCircular(head, positions) {
  let currentHead = head;
  
  // Sort positions in descending order to avoid index shifting
  positions.sort((a, b) => b - a);
  
  for (const k of positions) {
    currentHead = deleteKthCircular(currentHead, k);
  }
  
  return currentHead;
}

// Delete kth with size tracking
function deleteKthCircularWithSize(head, k, currentSize = 0) {
  if (head === null) {
    return { head: null, size: 0, deletedData: null };
  }
  
  if (k <= 0 || k > currentSize) {
    throw new Error(\`Invalid position \${k}. Must be between 1 and \${currentSize}\`);
  }
  
  if (k === 1) {
    const result = deleteHeadCircularWithSize(head, currentSize);
    return result;
  }
  
  let current = head;
  let prev = null;
  let position = 1;
  
  do {
    if (position === k) {
      const deletedData = current.data;
      prev.next = current.next;
      return { 
        head, 
        size: Math.max(0, currentSize - 1), 
        deletedData 
      };
    }
    
    prev = current;
    current = current.next;
    position++;
  } while (current !== head);
  
  throw new Error(\`Position \${k} is beyond list length\`);
}

// Test cases
function testDeleteKthCircular() {
  console.log("=== Testing Delete Kth of Circular Linked List ===");
  
  // Create a circular linked list
  let head = null;
  [10, 20, 30, 40, 50].forEach(el => {
    head = insertAtEndCircular(head, el);
  });
  
  console.log("\\n1. Original list:");
  console.log("List:", traverseCircularLinkedList(head));
  
  console.log("\\n2. Deleting 3rd node:");
  head = deleteKthCircular(head, 3);
  console.log("After deleting 3rd:", traverseCircularLinkedList(head));
  
  console.log("\\n3. Deleting 1st node (head):");
  head = deleteKthCircular(head, 1);
  console.log("After deleting 1st:", traverseCircularLinkedList(head));
  
  console.log("\\n4. Detailed deletion of 2nd node:");
  head = deleteKthCircularDetailed(head, 2);
  console.log("Final list:", traverseCircularLinkedList(head));
  
  console.log("\\n5. Deletion with data return:");
  const result = deleteKthCircularWithData(head, 1);
  console.log("Deleted data:", result.deletedData);
  console.log("Remaining list:", traverseCircularLinkedList(result.head));
  head = result.head;
  
  console.log("\\n6. Multiple deletions:");
  head = deleteMultipleKthCircular(head, [2, 1]);
  console.log("After deleting positions [2, 1]:", traverseCircularLinkedList(head));
  
  console.log("\\n7. Edge cases:");
  console.log("Delete from single node list:");
  let singleHead = insertAtEndCircular(null, 99);
  console.log("Before:", traverseCircularLinkedList(singleHead));
  singleHead = deleteKthCircular(singleHead, 1);
  console.log("After:", traverseCircularLinkedList(singleHead));
  
  console.log("Invalid position (0):");
  try {
    deleteKthCircular(head, 0);
  } catch (error) {
    console.log("Error caught:", error.message);
  }
  
  console.log("Position beyond list length:");
  try {
    deleteKthCircular(head, 10);
  } catch (error) {
    console.log("Error caught:", error.message);
  }
  
  console.log("\\n8. Performance test:");
  let perfHead = null;
  for (let i = 0; i < 100; i++) {
    perfHead = insertAtEndCircular(perfHead, i);
  }
  
  const start = performance.now();
  for (let i = 0; i < 50; i++) {
    perfHead = deleteKthCircular(perfHead, 1); // Always delete first
  }
  const end = performance.now();
  console.log(\`Deleted 50 nodes in \${(end - start).toFixed(2)}ms\`);
  console.log("Remaining size:", countCircularNodes(perfHead));
}

// Helper functions
function CircularListNode(data) {
  this.data = data;
  this.next = null;
}

function insertAtEndCircular(head, data) {
  const newNode = new CircularListNode(data);
  
  if (head === null) {
    newNode.next = newNode;
    return newNode;
  }
  
  let last = head;
  while (last.next !== head) {
    last = last.next;
  }
  
  last.next = newNode;
  newNode.next = head;
  
  return head;
}

function deleteHeadCircular(head) {
  if (head === null || head.next === head) {
    return null;
  }
  
  let last = head;
  while (last.next !== head) {
    last = last.next;
  }
  
  last.next = head.next;
  return head.next;
}

function deleteHeadCircularWithData(head) {
  if (head === null) {
    return { head: null, deletedData: null };
  }
  
  const deletedData = head.data;
  
  if (head.next === head) {
    return { head: null, deletedData };
  }
  
  let last = head;
  while (last.next !== head) {
    last = last.next;
  }
  
  last.next = head.next;
  return { head: head.next, deletedData };
}

function deleteHeadCircularWithSize(head, currentSize = 0) {
  if (head === null) {
    return { head: null, size: 0, deletedData: null };
  }
  
  const deletedData = head.data;
  
  if (head.next === head) {
    return { head: null, size: 0, deletedData };
  }
  
  let last = head;
  while (last.next !== head) {
    last = last.next;
  }
  
  last.next = head.next;
  return { 
    head: head.next, 
    size: Math.max(0, currentSize - 1), 
    deletedData 
  };
}

function traverseCircularLinkedList(head) {
  if (head === null) return [];
  
  const result = [];
  let current = head;
  do {
    result.push(current.data);
    current = current.next;
  } while (current !== head);
  
  return result;
}

function countCircularNodes(head) {
  if (head === null) return 0;
  
  let count = 0;
  let current = head;
  do {
    count++;
    current = current.next;
  } while (current !== head);
  
  return count;
}

// Run tests
testDeleteKthCircular();`}
        explanation="Find kth node by traversing, delete it by linking previous to next. Handle edge cases: k=1 (head), k beyond list length, empty list. Time: O(n), Space: O(1)."
      />

      <ProblemBlock
        title="23. Circular Doubly Linked List"
        difficulty="Hard"
        description="Implement and understand circular doubly linked lists."
        solution={`// Circular Doubly Linked List

// Circular Doubly Linked List Node
class CircularDoublyListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

// Circular Doubly Linked List Implementation
class CircularDoublyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  
  // Insert at beginning
  insertAtBeginning(data) {
    const newNode = new CircularDoublyListNode(data);
    
    if (this.head === null) {
      // Empty list - new node points to itself in both directions
      newNode.next = newNode;
      newNode.prev = newNode;
      this.head = newNode;
    } else {
      // Find last node
      const last = this.head.prev;
      
      // Insert new node at beginning
      newNode.next = this.head;
      newNode.prev = last;
      
      this.head.prev = newNode;
      last.next = newNode;
      
      this.head = newNode;
    }
    this.size++;
  }
  
  // Insert at end
  insertAtEnd(data) {
    const newNode = new CircularDoublyListNode(data);
    
    if (this.head === null) {
      // Empty list
      newNode.next = newNode;
      newNode.prev = newNode;
      this.head = newNode;
    } else {
      // Find last node
      const last = this.head.prev;
      
      // Insert new node at end
      newNode.next = this.head;
      newNode.prev = last;
      
      last.next = newNode;
      this.head.prev = newNode;
    }
    this.size++;
  }
  
  // Delete head
  deleteHead() {
    if (this.head === null) {
      return null;
    }
    
    if (this.size === 1) {
      // Only one node
      this.head = null;
      this.size--;
      return null;
    }
    
    const last = this.head.prev;
    const newHead = this.head.next;
    
    // Update links
    last.next = newHead;
    newHead.prev = last;
    
    this.head = newHead;
    this.size--;
    
    return this.head;
  }
  
  // Delete last
  deleteLast() {
    if (this.head === null) {
      return null;
    }
    
    if (this.size === 1) {
      // Only one node
      this.head = null;
      this.size--;
      return null;
    }
    
    const last = this.head.prev;
    const newLast = last.prev;
    
    // Update links
    newLast.next = this.head;
    this.head.prev = newLast;
    
    this.size--;
    
    return this.head;
  }
  
  // Traverse forward
  traverseForward() {
    if (this.head === null) {
      console.log("Empty list");
      return [];
    }
    
    const result = [];
    let current = this.head;
    
    do {
      result.push(current.data);
      current = current.next;
    } while (current !== this.head);
    
    return result;
  }
  
  // Traverse backward
  traverseBackward() {
    if (this.head === null) {
      console.log("Empty list");
      return [];
    }
    
    const result = [];
    let current = this.head.prev; // Start from last node
    
    do {
      result.push(current.data);
      current = current.prev;
    } while (current !== this.head.prev);
    
    return result;
  }
  
  // Search
  search(data) {
    if (this.head === null) return false;
    
    let current = this.head;
    do {
      if (current.data === data) return true;
      current = current.next;
    } while (current !== this.head);
    
    return false;
  }
  
  // Get size
  getSize() {
    return this.size;
  }
  
  // Check if empty
  isEmpty() {
    return this.head === null;
  }
  
  // Print list
  printForward() {
    return this.traverseForward().join(' <-> ');
  }
  
  printBackward() {
    return this.traverseBackward().join(' <-> ');
  }
}

// Advantages and Analysis
function analyzeCircularDoublyLinkedList() {
  console.log("=== Circular Doubly Linked List Analysis ===");
  
  console.log("\\n✅ Advantages:");
  console.log("• O(1) insertion/deletion at both ends");
  console.log("• O(1) deletion of any given node");
  console.log("• Bidirectional traversal in O(n)");
  console.log("• No null pointer issues");
  console.log("• Perfect for circular buffers");
  console.log("• Efficient rotation operations");
  
  console.log("\\n❌ Disadvantages:");
  console.log("• More memory overhead (2 pointers per node)");
  console.log("• Complex implementation and maintenance");
  console.log("• Higher risk of bugs due to circular references");
  console.log("• Difficult to debug");
  console.log("• Potential memory leaks");
  
  console.log("\\n🎯 When to Use:");
  console.log("• Advanced circular buffers");
  console.log("• Complex scheduling algorithms");
  console.log("• Game development (circular maps)");
  console.log("• Operating system algorithms");
  console.log("• Advanced data structures");
  
  console.log("\\n📊 Time Complexity:");
  console.log("• Insert at beginning: O(1)");
  console.log("• Insert at end: O(1)");
  console.log("• Delete head: O(1)");
  console.log("• Delete last: O(1)");
  console.log("• Delete given node: O(1)");
  console.log("• Search: O(n)");
  console.log("• Traversal: O(n)");
}

// Demonstration
function demonstrateCircularDoublyLinkedList() {
  console.log("\\n=== Circular Doubly Linked List Demonstration ===");
  
  const cdll = new CircularDoublyLinkedList();
  
  console.log("\\n1. Inserting elements at end:");
  [1, 2, 3, 4, 5].forEach(el => {
    cdll.insertAtEnd(el);
    console.log(\`After inserting \${el}: [\${cdll.printForward()}]\`);
  });
  
  console.log("\\n2. Inserting elements at beginning:");
  cdll.insertAtBeginning(0);
  console.log(\`After inserting 0 at beginning: [\${cdll.printForward()}]\`);
  
  console.log("\\n3. Forward traversal:");
  console.log("Forward:", cdll.traverseForward());
  
  console.log("\\n4. Backward traversal:");
  console.log("Backward:", cdll.traverseBackward());
  
  console.log("\\n5. Deleting head:");
  cdll.deleteHead();
  console.log(\`After deleting head: [\${cdll.printForward()}]\`);
  
  console.log("\\n6. Deleting last:");
  cdll.deleteLast();
  console.log(\`After deleting last: [\${cdll.printBackward()}]\`);
  
  console.log("\\n7. Searching:");
  console.log("Search 3:", cdll.search(3));
  console.log("Search 10:", cdll.search(10));
  
  console.log("\\n8. Size and empty check:");
  console.log("Size:", cdll.getSize());
  console.log("Is empty:", cdll.isEmpty());
  
  console.log("\\n9. Performance test:");
  const start = performance.now();
  const perfCdll = new CircularDoublyLinkedList();
  for (let i = 0; i < 1000; i++) {
    perfCdll.insertAtEnd(i);
  }
  for (let i = 0; i < 500; i++) {
    perfCdll.deleteHead();
  }
  const end = performance.now();
  console.log(\`Inserted 1000 and deleted 500 elements in \${(end - start).toFixed(2)}ms\`);
  console.log("Final size:", perfCdll.getSize());
}

// Comparison with other list types
function compareListTypes() {
  console.log("\\n=== Comparison of List Types ===");
  
  const cdll = new CircularDoublyLinkedList();
  const dll = new DoublyLinkedList();
  const sll = new SinglyLinkedList();
  const cll = new CircularLinkedList();
  
  const elements = [1, 2, 3, 4, 5];
  
  // Insert test
  console.log("\\nInsertion at end performance:");
  const start1 = performance.now();
  elements.forEach(el => cdll.insertAtEnd(el));
  const cdllTime = performance.now() - start1;
  
  const start2 = performance.now();
  elements.forEach(el => dll.insertAtEnd(el));
  const dllTime = performance.now() - start2;
  
  const start3 = performance.now();
  elements.forEach(el => sll.insertAtEnd(el));
  const sllTime = performance.now() - start3;
  
  const start4 = performance.now();
  elements.forEach(el => cll.insertAtEnd(el));
  const cllTime = performance.now() - start4;
  
  console.log(\`Circular Doubly: \${cdllTime.toFixed(2)}ms\`);
  console.log(\`Doubly: \${dllTime.toFixed(2)}ms\`);
  console.log(\`Singly: \${sllTime.toFixed(2)}ms\`);
  console.log(\`Circular: \${cllTime.toFixed(2)}ms\`);
  
  console.log("\\nMemory usage per node:");
  console.log("Circular Doubly: 2 pointers (16 bytes)");
  console.log("Doubly: 2 pointers (16 bytes)");
  console.log("Singly: 1 pointer (8 bytes)");
  console.log("Circular: 1 pointer (8 bytes)");
}

// Run all analyses
analyzeCircularDoublyLinkedList();
demonstrateCircularDoublyLinkedList();
compareListTypes();

// Helper classes for comparison
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  
  insertAtEnd(data) {
    const newNode = new DoublyListNode(data);
    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  
  insertAtEnd(data) {
    const newNode = new SinglyListNode(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  
  insertAtEnd(data) {
    const newNode = new CircularListNode(data);
    if (this.head === null) {
      newNode.next = newNode;
      this.head = newNode;
    } else {
      let last = this.head;
      while (last.next !== this.head) {
        last = last.next;
      }
      last.next = newNode;
      newNode.next = this.head;
    }
    this.size++;
  }
}

function DoublyListNode(data) {
  this.data = data;
  this.next = null;
  this.prev = null;
}

function SinglyListNode(data) {
  this.data = data;
  this.next = null;
}

function CircularListNode(data) {
  this.data = data;
  this.next = null;
}`}
        explanation="Circular doubly linked list has both next and prev pointers, with last node's next pointing to head and head's prev pointing to last. Offers O(1) operations at both ends and bidirectional traversal."
      />
    </div>
  );
}

// Reversal Section
function ReversalSection() {
  return (
    <div className="space-y-8">
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Reversal & Advanced Operations
        </h2>
        <p className="text-gray-300 mb-6">
          Advanced linked list operations including reversal, sorted insertion,
          and finding specific nodes.
        </p>
      </div>

      <ProblemBlock
        title="24. Sorted Insert in a Singly Linked List"
        difficulty="Medium"
        description="Insert a node in a sorted singly linked list while maintaining the sorted order."
        solution={`// Sorted Insert in a Singly Linked List

function sortedInsert(head, data) {
  const newNode = new ListNode(data);
  
  // If list is empty or new node should be inserted at beginning
  if (head === null || head.data >= data) {
    newNode.next = head;
    return newNode;
  }
  
  // Find the correct position to insert
  let current = head;
  while (current.next !== null && current.next.data < data) {
    current = current.next;
  }
  
  // Insert the new node
  newNode.next = current.next;
  current.next = newNode;
  
  return head;
}

// Test cases
let head = null;
[5, 3, 8, 1, 9].forEach(data => {
  head = sortedInsert(head, data);
});
console.log("Sorted list:", printList(head));`}
        explanation="Traverse until finding correct position where current.next.data >= data, then insert. Time: O(n), Space: O(1)."
      />

      <ProblemBlock
        title="25. Middle of linked list"
        difficulty="Easy"
        description="Find the middle node of a linked list using two pointers."
        solution={`// Middle of linked list (Two Pointer Technique)

function findMiddle(head) {
  if (head === null) return null;
  
  let slow = head;
  let fast = head;
  
  // Move fast pointer 2 steps, slow pointer 1 step
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  
  return slow;
}

// Test cases
const head = createList([1, 2, 3, 4, 5]);
console.log("Middle node:", findMiddle(head).data); // 3`}
        explanation="Use slow and fast pointers. Fast moves 2 steps, slow moves 1 step. When fast reaches end, slow is at middle. Time: O(n), Space: O(1)."
      />

      <ProblemBlock
        title="26. Nth Node from end of Linked List"
        difficulty="Medium"
        description="Find the nth node from the end of a linked list."
        solution={`// Nth Node from end of Linked List

function nthFromEnd(head, n) {
  if (head === null || n <= 0) return null;
  
  let first = head;
  let second = head;
  
  // Move first pointer n steps ahead
  for (let i = 0; i < n; i++) {
    if (first === null) return null; // n > list length
    first = first.next;
  }
  
  // Move both pointers until first reaches end
  while (first !== null) {
    first = first.next;
    second = second.next;
  }
  
  return second;
}

// Test cases
const head = createList([1, 2, 3, 4, 5]);
console.log("2nd from end:", nthFromEnd(head, 2).data); // 4`}
        explanation="Use two pointers. Move first pointer n steps ahead, then move both until first reaches end. Time: O(n), Space: O(1)."
      />

      <ProblemBlock
        title="27. Reverse a linked list iterative"
        difficulty="Medium"
        description="Reverse a linked list using iterative approach."
        solution={`// Reverse a linked list iterative

function reverseIterative(head) {
  let prev = null;
  let current = head;
  
  while (current !== null) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  
  return prev;
}

// Test cases
const head = createList([1, 2, 3, 4, 5]);
console.log("Original:", printList(head));
console.log("Reversed:", printList(reverseIterative(head)));`}
        explanation="Use three pointers: prev, current, next. Iteratively reverse links. Time: O(n), Space: O(1)."
      />

      <ProblemBlock
        title="28. Recursive reverse a linked list"
        difficulty="Hard"
        description="Reverse a linked list using recursive approach."
        solution={`// Recursive reverse a linked list

function reverseRecursive(head) {
  // Base case
  if (head === null || head.next === null) {
    return head;
  }
  
  // Recursive case
  const newHead = reverseRecursive(head.next);
  head.next.next = head;
  head.next = null;
  
  return newHead;
}

// Test cases
const head = createList([1, 2, 3, 4, 5]);
console.log("Original:", printList(head));
console.log("Recursive reverse:", printList(reverseRecursive(head)));`}
        explanation="Recursively reverse rest of list, then fix current node's links. Time: O(n), Space: O(n) for call stack."
      />

      <ProblemBlock
        title="29. Remove duplicates from a sorted Singly Linked List"
        difficulty="Easy"
        description="Remove duplicate nodes from a sorted linked list."
        solution={`// Remove duplicates from a sorted Singly Linked List

function removeDuplicates(head) {
  if (head === null) return null;
  
  let current = head;
  
  while (current !== null && current.next !== null) {
    if (current.data === current.next.data) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  
  return head;
}

// Test cases
const head = createList([1, 1, 2, 3, 3, 4]);
console.log("Original:", printList(head));
console.log("After removing duplicates:", printList(removeDuplicates(head)));`}
        explanation="Compare current node with next node. If same, skip next node. Otherwise move forward. Time: O(n), Space: O(1)."
      />

      <ProblemBlock
        title="30. Reverse a linked list in groups of size k"
        difficulty="Hard"
        description="Reverse every k nodes in a linked list."
        solution={`// Reverse a linked list in groups of size k

function reverseInGroups(head, k) {
  if (head === null || k <= 1) return head;
  
  let current = head;
  let prev = null;
  let next = null;
  let count = 0;
  
  // Reverse first k nodes
  while (current !== null && count < k) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
    count++;
  }
  
  // Recursively reverse remaining groups
  if (next !== null) {
    head.next = reverseInGroups(next, k);
  }
  
  return prev;
}

// Test cases
const head = createList([1, 2, 3, 4, 5, 6, 7, 8]);
console.log("Original:", printList(head));
console.log("Reversed in groups of 3:", printList(reverseInGroups(head, 3)));`}
        explanation="Reverse first k nodes iteratively, then recursively reverse remaining groups. Time: O(n), Space: O(n/k) for recursion."
      />
    </div>
  );
}

// Detection Section
function DetectionSection() {
  return (
    <div className="space-y-8">
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Loop Detection & Removal
        </h2>
        <p className="text-gray-300 mb-6">
          Detect and remove loops in linked lists using Floyd&apos;s cycle
          detection algorithm.
        </p>
      </div>

      <ProblemBlock
        title="31. Detect loop"
        difficulty="Medium"
        description="Detect if a linked list has a loop using Floyd's cycle detection algorithm."
        solution={`// Detect loop using Floyd's cycle detection

function detectLoop(head) {
  if (head === null || head.next === null) return false;
  
  let slow = head;
  let fast = head;
  
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    
    if (slow === fast) {
      return true;
    }
  }
  
  return false;
}

// Test cases
const head = createList([1, 2, 3, 4, 5]);
// Create a loop
head.next.next.next.next.next = head.next;
console.log("Has loop:", detectLoop(head)); // true`}
        explanation="Use Floyd's cycle detection: slow moves 1 step, fast moves 2 steps. If they meet, there's a loop. Time: O(n), Space: O(1)."
      />

      <ProblemBlock
        title="32. Detect loop using Floyd cycle detection"
        difficulty="Medium"
        description="Detailed implementation of Floyd's cycle detection algorithm."
        solution={`// Floyd's cycle detection with detailed explanation

function floydCycleDetection(head) {
  console.log("Starting Floyd's cycle detection");
  
  if (head === null || head.next === null) {
    console.log("List is empty or has only one node - no loop possible");
    return false;
  }
  
  let slow = head;
  let fast = head;
  let step = 0;
  
  console.log("Initial positions: slow =", slow.data, "fast =", fast.data);
  
  while (fast !== null && fast.next !== null) {
    step++;
    slow = slow.next;
    fast = fast.next.next;
    
    console.log(\`Step \${step}: slow = \${slow.data}, fast = \${fast ? fast.data : 'null'}\`);
    
    if (slow === fast) {
      console.log("✓ Cycle detected! Slow and fast pointers met at:", slow.data);
      return true;
    }
  }
  
  console.log("No cycle found - fast pointer reached end");
  return false;
}

// Test with loop
const head = createList([1, 2, 3, 4, 5]);
head.next.next.next.next.next = head.next; // Create loop
floydCycleDetection(head);`}
        explanation="Floyd's algorithm: tortoise and hare approach. If there's a cycle, fast pointer will eventually catch up to slow pointer."
      />

      <ProblemBlock
        title="33. Detect and remove loop in linked list"
        difficulty="Hard"
        description="Detect a loop and remove it from the linked list."
        solution={`// Detect and remove loop in linked list

function detectAndRemoveLoop(head) {
  if (head === null || head.next === null) return head;
  
  // Step 1: Detect loop using Floyd's algorithm
  let slow = head;
  let fast = head;
  
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    
    if (slow === fast) {
      break; // Loop detected
    }
  }
  
  // No loop found
  if (slow !== fast) return head;
  
  // Step 2: Find the start of the loop
  slow = head;
  while (slow.next !== fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  
  // Step 3: Remove the loop
  fast.next = null;
  
  return head;
}

// Test cases
const head = createList([1, 2, 3, 4, 5]);
head.next.next.next.next.next = head.next; // Create loop
console.log("Loop removed:", detectAndRemoveLoop(head));`}
        explanation="1) Detect loop with Floyd's algorithm 2) Find loop start by moving one pointer to head 3) Remove loop by setting last node's next to null. Time: O(n), Space: O(1)."
      />
    </div>
  );
}

// Final Section
function FinalSection() {
  return (
    <div className="space-y-8">
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Advanced Linked List Problems
        </h2>
        <p className="text-gray-300 mb-6">
          Complex linked list problems including node deletion, segregation,
          intersection, and cloning.
        </p>
      </div>

      <ProblemBlock
        title="34. Delete node with only pointer given to it"
        difficulty="Medium"
        description="Delete a node when only a pointer to that node is given."
        solution={`// Delete node with only pointer given to it

function deleteNode(node) {
  if (node === null || node.next === null) {
    throw new Error("Cannot delete last node with this method");
  }
  
  // Copy data from next node to current node
  node.data = node.next.data;
  
  // Delete the next node
  node.next = node.next.next;
}

// Test cases
const head = createList([1, 2, 3, 4, 5]);
const nodeToDelete = head.next.next; // Node with value 3
console.log("Before deletion:", printList(head));
deleteNode(nodeToDelete);
console.log("After deletion:", printList(head));`}
        explanation="Copy data from next node to current node, then delete next node. Cannot delete last node with this method. Time: O(1), Space: O(1)."
      />

      <ProblemBlock
        title="35. Segregate Even and Odd Nodes in a Linked List"
        difficulty="Medium"
        description="Separate even and odd nodes in a linked list."
        solution={`// Segregate Even and Odd Nodes in a Linked List

function segregateEvenOdd(head) {
  if (head === null) return null;
  
  let evenStart = null;
  let evenEnd = null;
  let oddStart = null;
  let oddEnd = null;
  
  let current = head;
  
  while (current !== null) {
    if (current.data % 2 === 0) {
      // Even node
      if (evenStart === null) {
        evenStart = evenEnd = current;
      } else {
        evenEnd.next = current;
        evenEnd = current;
      }
    } else {
      // Odd node
      if (oddStart === null) {
        oddStart = oddEnd = current;
      } else {
        oddEnd.next = current;
        oddEnd = current;
      }
    }
    current = current.next;
  }
  
  // Connect even list to odd list
  if (evenStart === null) return oddStart;
  if (oddStart === null) return evenStart;
  
  evenEnd.next = oddStart;
  oddEnd.next = null;
  
  return evenStart;
}

// Test cases
const head = createList([1, 2, 3, 4, 5, 6]);
console.log("Original:", printList(head));
console.log("Segregated:", printList(segregateEvenOdd(head)));`}
        explanation="Create separate lists for even and odd nodes, then connect them. Time: O(n), Space: O(1)."
      />

      <ProblemBlock
        title="36. Intersection Point of two linked list"
        difficulty="Medium"
        description="Find the intersection point of two linked lists."
        solution={`// Intersection Point of two linked list

function getIntersectionNode(headA, headB) {
  if (headA === null || headB === null) return null;
  
  let a = headA;
  let b = headB;
  
  // When one list ends, switch to the other list
  while (a !== b) {
    a = a === null ? headB : a.next;
    b = b === null ? headA : b.next;
  }
  
  return a;
}

// Test cases
const common = createList([8, 4, 5]);
const list1 = createList([4, 1]);
const list2 = createList([5, 6, 1]);
list1.next.next = common;
list2.next.next.next = common;
console.log("Intersection node:", getIntersectionNode(list1, list2).data);`}
        explanation="Use two pointers, when one reaches end switch to other list. They'll meet at intersection point. Time: O(m+n), Space: O(1)."
      />

      <ProblemBlock
        title="37. Pairwise Swap Nodes of a Linked List"
        difficulty="Medium"
        description="Swap every two adjacent nodes in a linked list."
        solution={`// Pairwise Swap Nodes of a Linked List

function pairwiseSwap(head) {
  if (head === null || head.next === null) return head;
  
  // Dummy node to simplify edge cases
  const dummy = new ListNode(0);
  dummy.next = head;
  
  let prev = dummy;
  let current = head;
  
  while (current !== null && current.next !== null) {
    const next = current.next;
    const nextNext = next.next;
    
    // Swap current and next
    prev.next = next;
    next.next = current;
    current.next = nextNext;
    
    // Move pointers
    prev = current;
    current = nextNext;
  }
  
  return dummy.next;
}

// Test cases
const head = createList([1, 2, 3, 4, 5]);
console.log("Original:", printList(head));
console.log("Pairwise swapped:", printList(pairwiseSwap(head)));`}
        explanation="Use dummy node to handle edge cases. Swap pairs iteratively by updating pointers. Time: O(n), Space: O(1)."
      />

      <ProblemBlock
        title="38. Clone a linked list with Random Pointer"
        difficulty="Hard"
        description="Clone a linked list where each node has a random pointer."
        solution={`// Clone a linked list with Random Pointer

class RandomListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.random = null;
  }
}

function cloneRandomList(head) {
  if (head === null) return null;
  
  const map = new Map();
  
  // First pass: create all nodes and store mapping
  let current = head;
  while (current !== null) {
    map.set(current, new RandomListNode(current.data));
    current = current.next;
  }
  
  // Second pass: set next and random pointers
  current = head;
  while (current !== null) {
    const cloned = map.get(current);
    cloned.next = map.get(current.next) || null;
    cloned.random = map.get(current.random) || null;
    current = current.next;
  }
  
  return map.get(head);
}

// Test cases
const node1 = new RandomListNode(1);
const node2 = new RandomListNode(2);
const node3 = new RandomListNode(3);
node1.next = node2;
node2.next = node3;
node1.random = node3;
node2.random = node1;
node3.random = node2;

console.log("Original list cloned with random pointers");`}
        explanation="Use hash map to store original-to-clone mapping. Two passes: first create nodes, second set pointers. Time: O(n), Space: O(n)."
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

// Helper functions for the solutions
function ListNode(data) {
  this.data = data;
  this.next = null;
}

function createList(arr) {
  if (arr.length === 0) return null;

  const head = new ListNode(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }

  return head;
}

function printList(head) {
  const result = [];
  let current = head;
  while (current !== null) {
    result.push(current.data);
    current = current.next;
  }
  return result.join(" -> ");
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
        className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors mb-4"
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
