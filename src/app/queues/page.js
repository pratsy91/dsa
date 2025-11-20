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
            code={{
              JavaScript: `// Queue Implementation using Array

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
  getFront() {
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
console.log(queue.getFront()); // 10
console.log(queue.dequeue()); // 10
console.log(queue.display()); // "Queue: 20 30"`,
              Java: `import java.util.*;

// Queue Implementation using ArrayList
class Queue {
    private List<Integer> items;
    private int front;
    private int rear;
    
    public Queue() {
        this.items = new ArrayList<>();
        this.front = 0;
        this.rear = -1;
    }
    
    // Add element to rear of queue
    public void enqueue(int element) {
        this.rear++;
        if (rear < items.size()) {
            items.set(rear, element);
        } else {
            items.add(element);
        }
    }
    
    // Remove element from front of queue
    public int dequeue() {
        if (isEmpty()) {
            throw new RuntimeException("Queue Underflow");
        }
        int element = items.get(front);
        front++;
        
        // Reset when queue becomes empty
        if (front > rear) {
            front = 0;
            rear = -1;
        }
        
        return element;
    }
    
    // Peek at front element without removing
    public int getFront() {
        if (isEmpty()) {
            throw new RuntimeException("Queue is empty");
        }
        return items.get(front);
    }
    
    // Check if queue is empty
    public boolean isEmpty() {
        return front > rear;
    }
    
    // Get size of queue
    public int size() {
        return isEmpty() ? 0 : rear - front + 1;
    }
    
    // Display queue contents
    public void display() {
        if (isEmpty()) {
            System.out.println("Queue is empty");
            return;
        }
        System.out.print("Queue: ");
        for (int i = front; i <= rear; i++) {
            System.out.print(items.get(i) + " ");
        }
        System.out.println();
    }
    
    public static void main(String[] args) {
        Queue queue = new Queue();
        queue.enqueue(10);
        queue.enqueue(20);
        queue.enqueue(30);
        queue.display(); // "Queue: 10 20 30"
        System.out.println("Front: " + queue.getFront()); // 10
        System.out.println("Dequeued: " + queue.dequeue()); // 10
        queue.display(); // "Queue: 20 30"
    }
}`,
            }}
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
        solutions={{
          JavaScript: `// Basic Queue Operations

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
  
  // Check if queue is empty
  isEmpty() {
    return this.front > this.rear;
  }
  
  // Get size of queue
  size() {
    return this.isEmpty() ? 0 : this.rear - this.front + 1;
  }
}

// Test cases
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log("Front:", queue.getFront()); // 10
console.log("Size:", queue.size()); // 3
queue.dequeue();
console.log("Size:", queue.size()); // 2`,
          Java: `import java.util.*;

public class BasicQueue {
    private List<Integer> items;
    private int front;
    private int rear;
    
    public BasicQueue() {
        this.items = new ArrayList<>();
        this.front = 0;
        this.rear = -1;
    }
    
    // Add element to rear
    public void enqueue(int element) {
        rear++;
        if (rear < items.size()) {
            items.set(rear, element);
        } else {
            items.add(element);
        }
        System.out.println("Enqueued: " + element);
    }
    
    // Remove element from front
    public Integer dequeue() {
        if (isEmpty()) {
            System.out.println("Queue Underflow");
            return null;
        }
        
        int element = items.get(front);
        front++;
        
        // Reset when queue becomes empty
        if (front > rear) {
            front = 0;
            rear = -1;
        }
        
        System.out.println("Dequeued: " + element);
        return element;
    }
    
    // Get front element without removing
    public Integer getFront() {
        if (isEmpty()) {
            System.out.println("Queue is empty");
            return null;
        }
        return items.get(front);
    }
    
    // Check if queue is empty
    public boolean isEmpty() {
        return front > rear;
    }
    
    // Get size of queue
    public int size() {
        return isEmpty() ? 0 : rear - front + 1;
    }
    
    public static void main(String[] args) {
        BasicQueue queue = new BasicQueue();
        queue.enqueue(10);
        queue.enqueue(20);
        queue.enqueue(30);
        System.out.println("Front: " + queue.getFront()); // 10
        System.out.println("Size: " + queue.size()); // 3
        queue.dequeue();
        System.out.println("Size: " + queue.size()); // 2
    }
}`,
        }}
        explanation="Implement queue using array with front and rear pointers. Enqueue adds to rear, dequeue removes from front. Reset pointers when queue becomes empty. Time: O(1) for all operations, Space: O(n)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Implement a FIFO container supporting enqueue, dequeue, front, size, and emptiness queries.",
              details: [
                "Use contiguous memory so operations stay O(1)",
                "Clarify whether queue must grow dynamically or has fixed capacity",
                "Reset indices when queue becomes empty to avoid overflow",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Array-based queue with two moving pointers is the canonical solution.",
              keywords: ["queue", "front pointer", "rear pointer", "FIFO"],
              details: [
                "front points to next element to remove",
                "rear points to last inserted element",
                "Queue is empty when front > rear",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description: "Use an array/list plus two integers (front, rear).",
              details: [
                "Array stores elements in arrival order",
                "front and rear track boundaries",
                "Optional dynamic resizing if you need unbounded queue",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description: "Implement each operation in constant time.",
              details: [
                "enqueue(x): ++rear, arr[rear] = x",
                "dequeue(): return arr[front++] and reset pointers when empty",
                "front(): return arr[front] if queue not empty",
                "size(): rear - front + 1 when queue not empty",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Handle underflow/overflow and keep code simple for consumers.",
              details: [
                "Guard against dequeue() on empty queue",
                "Reset front=0, rear=-1 when queue drains to reuse array from start",
                "Add helper methods (isEmpty, display) for debugging",
              ],
            },
          ],
          pattern: "Linear Array Queue with Front/Rear Pointers",
          complexity: {
            time: "O(1) per operation (amortized)",
            space: "O(n)",
          },
        }}
      />

      <ProblemBlock
        title="2. Circular Queue Implementation"
        difficulty="Medium"
        description="Implement a circular queue with fixed size that efficiently uses space."
        solutions={{
          JavaScript: `// Circular Queue Implementation

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
    
    return element;
  }
  
  // Get front element
  getFront() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.front];
  }
}

// Test cases
const cq = new CircularQueue(5);
cq.enqueue(10);
cq.enqueue(20);
cq.enqueue(30);
console.log("Front:", cq.getFront()); // 10
cq.dequeue();
console.log("Front:", cq.getFront()); // 20`,
          Java: `public class CircularQueue {
    private int size;
    private int[] items;
    private int front;
    private int rear;
    
    public CircularQueue(int size) {
        this.size = size;
        this.items = new int[size];
        this.front = -1;
        this.rear = -1;
    }
    
    // Check if queue is full
    public boolean isFull() {
        return (rear + 1) % size == front;
    }
    
    // Check if queue is empty
    public boolean isEmpty() {
        return front == -1;
    }
    
    // Add element to rear
    public boolean enqueue(int element) {
        if (isFull()) {
            System.out.println("Queue is full");
            return false;
        }
        
        if (isEmpty()) {
            front = 0;
        }
        
        rear = (rear + 1) % size;
        items[rear] = element;
        return true;
    }
    
    // Remove element from front
    public Integer dequeue() {
        if (isEmpty()) {
            System.out.println("Queue is empty");
            return null;
        }
        
        int element = items[front];
        
        if (front == rear) {
            // Only one element
            front = -1;
            rear = -1;
        } else {
            front = (front + 1) % size;
        }
        
        return element;
    }
    
    // Get front element
    public Integer getFront() {
        if (isEmpty()) {
            return null;
        }
        return items[front];
    }
    
    public static void main(String[] args) {
        CircularQueue cq = new CircularQueue(5);
        cq.enqueue(10);
        cq.enqueue(20);
        cq.enqueue(30);
        System.out.println("Front: " + cq.getFront()); // 10
        cq.dequeue();
        System.out.println("Front: " + cq.getFront()); // 20
    }
}`,
        }}
        explanation="Use modulo arithmetic for circular behavior. Front and rear wrap around using (index + 1) % size. Check full condition: (rear + 1) % size === front. Time: O(1) for all operations, Space: O(n)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Need fixed-size queue that reuses freed slots instead of shifting elements.",
              details: [
                "Indices must wrap around once they reach array end",
                "Define full vs empty conditions precisely",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Circular buffer pattern using modulo arithmetic for wrap-around.",
              keywords: [
                "circular queue",
                "ring buffer",
                "modulo",
                "wrap around",
              ],
              details: [
                "front and rear advance mod size",
                "Queue full when advancing rear would collide with front",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description: "Fixed-length array and two integer pointers.",
              details: [
                "front = index of current head (-1 when empty)",
                "rear = index of last inserted",
                "All updates happen modulo size",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description: "Implement enqueue/dequeue using wrap logic.",
              details: [
                "enqueue: if full return error; if empty set front=0; rear = (rear+1)%size; arr[rear]=x",
                "dequeue: if empty error; save arr[front]; if single element reset to -1, else front = (front+1)%size",
                "isFull: (rear+1)%size === front; isEmpty: front === -1",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Keep helper methods for readability and consider using count if that simplifies checks.",
              details: [
                "Optional size counter removes ambiguity between full/empty",
                "Wrap pointer arithmetic in utility functions",
                "Great for buffering, scheduling, rate limiting",
              ],
            },
          ],
          pattern: "Circular Buffer Queue",
          complexity: {
            time: "O(1) per operation",
            space: "O(n)",
          },
        }}
      />

      <ProblemBlock
        title="3. Priority Queue Implementation"
        difficulty="Medium"
        description="Implement a priority queue where elements are served based on their priority."
        solutions={{
          JavaScript: `// Priority Queue Implementation

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
}`,
          Java: `import java.util.*;

public class PriorityQueue {
    private List<QueueElement> items;
    
    private static class QueueElement {
        String element;
        int priority;
        
        QueueElement(String element, int priority) {
            this.element = element;
            this.priority = priority;
        }
    }
    
    public PriorityQueue() {
        this.items = new ArrayList<>();
    }
    
    // Queue element with priority
    public void enqueue(String element, int priority) {
        QueueElement queueElement = new QueueElement(element, priority);
        boolean added = false;
        
        // Find correct position based on priority
        for (int i = 0; i < items.size(); i++) {
            if (queueElement.priority < items.get(i).priority) {
                items.add(i, queueElement);
                added = true;
                break;
            }
        }
        
        // If not added, add to end
        if (!added) {
            items.add(queueElement);
        }
    }
    
    // Remove highest priority element
    public String dequeue() {
        if (isEmpty()) {
            return null;
        }
        return items.remove(0).element;
    }
    
    // Get highest priority element
    public String front() {
        if (isEmpty()) {
            return null;
        }
        return items.get(0).element;
    }
    
    public boolean isEmpty() {
        return items.isEmpty();
    }
    
    public static void main(String[] args) {
        PriorityQueue pq = new PriorityQueue();
        pq.enqueue("Task A", 3);
        pq.enqueue("Task B", 1);
        pq.enqueue("Task C", 2);
        System.out.println(pq.dequeue()); // Task B
        System.out.println(pq.dequeue()); // Task C
    }
}`,
        }}
        explanation="Maintain elements in priority order. Lower numbers = higher priority. Use array insertion or heap for efficient implementation. Time: O(n) for array, O(log n) for heap, Space: O(n)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Queue orders elements by priority rather than arrival. Decide min-heap vs max-heap convention.",
              details: [
                "Clarify whether lower number means higher priority",
                "Operations: insert with priority, remove / peek highest priority, size/isEmpty",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Priority queues map naturally to heaps; sorted arrays/lists are alternatives with different trade-offs.",
              keywords: [
                "priority queue",
                "heap",
                "ordered insertion",
                "scheduling",
              ],
              details: [
                "Array+insertion is simple but O(n) per enqueue",
                "Binary heap maintains order in O(log n)",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Pick between dynamic array with insertion or binary heap based on performance needs.",
              details: [
                "items[] + splice keeps queue sorted (good for small N)",
                "heap[] with heapifyUp/Down for scalable solution",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description: "Implement core operations with chosen DS.",
              details: [
                "enqueue: insert in correct position (array) or push + heapifyUp (heap)",
                "dequeue/front: remove / peek first element (array[0] or heap[0], then heapifyDown)",
                "isEmpty/size just inspect array length",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Abstract comparison logic and support both min/max flavors.",
              details: [
                "Use comparator function to switch ordering easily",
                "Avoid resorting entire array on every enqueue—only local adjustments",
                "Document complexity so callers understand trade-offs",
              ],
            },
          ],
          pattern: "Priority Scheduling via Ordered Structure / Heap",
          complexity: {
            time: "O(n) insert for ordered array, O(log n) insert/remove for heap",
            space: "O(n)",
          },
        }}
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
        solutions={{
          JavaScript: `// Implementing Stack using Queue

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
stack2.display(); // Stack (top to bottom): [20, 10]`,
          Java: `import java.util.*;

public class StackUsingQueue {
    private Queue<Integer> q1;
    private Queue<Integer> q2;
    
    public StackUsingQueue() {
        this.q1 = new LinkedList<>();
        this.q2 = new LinkedList<>();
    }
    
    // Push element to stack
    public void push(int element) {
        q1.offer(element);
    }
    
    // Pop element from stack
    public Integer pop() {
        if (q1.isEmpty()) {
            return null;
        }
        
        // Move all elements except last from q1 to q2
        while (q1.size() > 1) {
            q2.offer(q1.poll());
        }
        
        // Get the last element (top of stack)
        int element = q1.poll();
        
        // Swap q1 and q2
        Queue<Integer> temp = q1;
        q1 = q2;
        q2 = temp;
        
        return element;
    }
    
    // Get top element without removing
    public Integer top() {
        if (q1.isEmpty()) {
            return null;
        }
        
        // Move all elements except last from q1 to q2
        while (q1.size() > 1) {
            q2.offer(q1.poll());
        }
        
        int element = q1.peek();
        
        // Move element back to q1
        q2.offer(q1.poll());
        
        // Swap q1 and q2
        Queue<Integer> temp = q1;
        q1 = q2;
        q2 = temp;
        
        return element;
    }
    
    public boolean isEmpty() {
        return q1.isEmpty();
    }
    
    public static void main(String[] args) {
        StackUsingQueue stack = new StackUsingQueue();
        stack.push(10);
        stack.push(20);
        stack.push(30);
        System.out.println("Top: " + stack.top()); // 30
        System.out.println("Pop: " + stack.pop()); // 30
        System.out.println("Top: " + stack.top()); // 20
    }
}`,
        }}
        explanation="Use two queues: move all elements except last from q1 to q2, pop last element, swap queues. For single queue: rotate queue after each push to maintain stack order. Time: O(n) for push, O(1) for pop, Space: O(n)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Build a LIFO stack API using only queue operations (enqueue/dequeue).",
              details: [
                "Decide which operation (push or pop) can be O(n)",
                "Need top(), size(), isEmpty() as well",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Simulate stack order by rotating queues so the newest element appears at the front.",
              keywords: [
                "simulate stack",
                "two queues",
                "single queue rotation",
                "LIFO via FIFO",
              ],
              details: [
                "Two-queue method: transfer all but last to auxiliary queue to pop",
                "Single-queue method: after each push, rotate queue size-1 times",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Use either two standard queues or one queue plus rotation.",
              details: [
                "q1 holds current elements in stack order",
                "q2 (if used) is temporary for moving items",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description: "Pick trade-off between push vs pop cost.",
              details: [
                "Two-queue pop-heavy: push O(1), pop O(n) by moving elements",
                "Single-queue push-heavy: push O(n) via rotation, pop O(1)",
                "top() uses same idea as pop but reinserts element",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Encapsulate queue swaps/rotations and guard edge cases.",
              details: [
                "Check emptiness before pop/top",
                "Reuse helper to move n-1 elements between queues",
                "Document complexity trade-offs for interview discussion",
              ],
            },
          ],
          pattern: "Queue Rotation to Emulate Stack Order",
          complexity: {
            time: "Either push O(n)/pop O(1) (single queue) or push O(1)/pop O(n) (two queues)",
            space: "O(n)",
          },
        }}
      />

      <ProblemBlock
        title="5. Reversing a Queue"
        difficulty="Medium"
        description="Reverse a queue using only queue operations and a stack."
        solutions={{
          JavaScript: `// Reversing a Queue

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
reverseQueueDetailed(queue3);`,
          Java: `import java.util.*;

public class ReverseQueue {
    // Using stack
    public static void reverseQueue(Queue<Integer> queue) {
        Stack<Integer> stack = new Stack<>();
        
        // Push all elements from queue to stack
        while (!queue.isEmpty()) {
            stack.push(queue.poll());
        }
        
        // Pop all elements from stack back to queue
        while (!stack.isEmpty()) {
            queue.offer(stack.pop());
        }
    }
    
    // Using recursion
    public static void reverseQueueRecursive(Queue<Integer> queue) {
        if (queue.isEmpty()) {
            return;
        }
        
        // Remove front element
        int element = queue.poll();
        
        // Recursively reverse remaining queue
        reverseQueueRecursive(queue);
        
        // Add element to rear
        queue.offer(element);
    }
    
    public static void main(String[] args) {
        Queue<Integer> queue = new LinkedList<>();
        queue.offer(1);
        queue.offer(2);
        queue.offer(3);
        queue.offer(4);
        queue.offer(5);
        
        System.out.println("Original: " + queue); // [1, 2, 3, 4, 5]
        reverseQueue(queue);
        System.out.println("Reversed: " + queue); // [5, 4, 3, 2, 1]
    }
}`,
        }}
        explanation="Use stack as intermediate storage: dequeue all elements to stack, then pop from stack back to queue. Recursive approach: dequeue one element, reverse remaining queue, enqueue element. Time: O(n), Space: O(n)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Reverse the order of all elements in a queue using permitted auxiliary structures.",
              details: [
                "Allowed tools: stack or recursion (call stack acts as stack)",
                "Need to preserve queue API—no random access",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Reversal is naturally solved by stack/recursion because they invert order.",
              keywords: ["queue reversal", "stack helper", "recursion"],
              details: [
                "Dequeue all items into stack to reverse order",
                "Or recursively remove one element and enqueue after reversing rest",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Use auxiliary stack (iterative) or call stack (recursive).",
              details: [
                "Stack ensures O(n) extra space but iterative logic is simple",
                "Recursion avoids explicit stack but uses implicit O(n) call stack",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description: "Implement iterative (stack) method.",
              details: [
                "While queue not empty → push dequeue() onto stack",
                "While stack not empty → enqueue stack.pop()",
                "Queue now reversed because stack reversed order twice",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Encapsulate helper queue class methods and consider streaming constraints.",
              details: [
                "For recursion ensure base case when queue empty",
                "If queue is linked-list based, operations stay O(1)",
                "Time complexity remains O(n); space O(n) due to stack",
              ],
            },
          ],
          pattern: "Reverse via Stack / Recursive Backtracking",
          complexity: {
            time: "O(n)",
            space: "O(n)",
          },
        }}
      />

      <ProblemBlock
        title="6. Generate Numbers with Given Digits"
        difficulty="Medium"
        description="Generate numbers using only given digits in sorted order using queue."
        solutions={{
          JavaScript: `// Generate Numbers with Given Digits

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
console.log("Result:", result5.slice(0, 20)); // First 20 even numbers`,
          Java: `import java.util.*;

public class GenerateNumbersWithDigits {
    public static List<Integer> generateNumbersWithDigits(int[] digits, int n) {
        Queue<Integer> queue = new LinkedList<>();
        List<Integer> result = new ArrayList<>();
        
        // Add all single-digit numbers to queue
        for (int digit : digits) {
            queue.offer(digit);
        }
        
        int count = 0;
        
        while (!queue.isEmpty() && count < n) {
            int current = queue.poll();
            result.add(current);
            count++;
            
            // Generate numbers by appending each digit
            for (int digit : digits) {
                int newNumber = current * 10 + digit;
                queue.offer(newNumber);
            }
        }
        
        return result;
    }
    
    public static void main(String[] args) {
        int[] digits1 = {1, 2, 3};
        List<Integer> result = generateNumbersWithDigits(digits1, 10);
        System.out.println("First 10 numbers: " + result); 
        // [1, 2, 3, 11, 12, 13, 21, 22, 23, 31]
    }
}`,
        }}
        explanation="Use BFS approach with queue. Start with single digits, for each number append all possible digits to generate next level. Maintains sorted order naturally. Time: O(n), Space: O(n)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Generate the first n numbers whose digits belong to a given set (e.g., {5,6}).",
              details: [
                "Numbers must appear in increasing order by construction, not sorting later",
                "Stop once n numbers generated (or until max value reached)",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Breadth-first traversal (BFS) of a conceptual tree where each node appends allowed digits.",
              keywords: ["BFS", "digit generation", "queue", "level order"],
              details: [
                "Queue ensures we expand shorter numbers before longer ones",
                "Each level corresponds to numbers with same number of digits",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Queue storing generated numbers awaiting expansion.",
              details: [
                "Initialize with all single-digit seeds",
                "For each number dequeued, append each digit and enqueue new numbers",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description: "Standard BFS loop until we collect n results.",
              details: [
                "while queue not empty and result length < n:",
                "  current = dequeue; push to result",
                "  for digit in digits: enqueue current*10 + digit",
                "Optionally guard against overflow / upper bounds",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description: "Handle digit ordering and duplicates cleanly.",
              details: [
                "Sort digits to guarantee lexicographic order",
                "Use numbers or strings depending on requirement (avoid integer overflow if digits large)",
                "Reuse same logic to generate until maxValue by breaking when newNumber>limit",
              ],
            },
          ],
          pattern: "BFS Number Generation via Queue",
          complexity: {
            time: "O(n)",
            space: "O(n)",
          },
        }}
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
        solutions={{
          JavaScript: `// Queue using Linked List

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
console.log("Is empty:", queue.isEmpty()); // true`,
          Java: `class QueueNode {
    int data;
    QueueNode next;
    
    QueueNode(int data) {
        this.data = data;
        this.next = null;
    }
}

public class QueueLinkedList {
    private QueueNode front;
    private QueueNode rear;
    private int size;
    
    public QueueLinkedList() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }
    
    // Add element to rear
    public void enqueue(int element) {
        QueueNode newNode = new QueueNode(element);
        
        if (rear == null) {
            // First element
            front = rear = newNode;
        } else {
            rear.next = newNode;
            rear = newNode;
        }
        
        size++;
    }
    
    // Remove element from front
    public Integer dequeue() {
        if (isEmpty()) {
            return null;
        }
        
        int element = front.data;
        front = front.next;
        
        // If queue becomes empty
        if (front == null) {
            rear = null;
        }
        
        size--;
        return element;
    }
    
    // Get front element
    public Integer getFront() {
        if (isEmpty()) {
            return null;
        }
        return front.data;
    }
    
    // Get rear element
    public Integer getRear() {
        if (isEmpty()) {
            return null;
        }
        return rear.data;
    }
    
    public boolean isEmpty() {
        return front == null;
    }
    
    public int getSize() {
        return size;
    }
    
    public static void main(String[] args) {
        QueueLinkedList queue = new QueueLinkedList();
        queue.enqueue(10);
        queue.enqueue(20);
        queue.enqueue(30);
        System.out.println("Front: " + queue.getFront()); // 10
        System.out.println("Rear: " + queue.getRear()); // 30
        System.out.println("Dequeued: " + queue.dequeue()); // 10
        System.out.println("Front: " + queue.getFront()); // 20
    }
}`,
        }}
        explanation="Use two pointers: front and rear. Enqueue adds to rear, dequeue removes from front. Dynamic size, no memory waste. Time: O(1) for all operations, Space: O(n)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Implement queue with dynamic size and O(1) operations using linked list nodes.",
              details: [
                "Need enqueue, dequeue, front/rear peek, size/isEmpty",
                "Optional operations: display, clear",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Linked list queue uses two pointers (front & rear) referencing first/last nodes.",
              keywords: ["linked list queue", "front pointer", "rear pointer"],
              details: [
                "Enqueue attaches new node to rear.next and updates rear",
                "Dequeue removes node at front and advances pointer",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Node structure with data + next pointer; queue keeps `front`, `rear`, and optionally `size`.",
              details: [
                "When queue empty both front and rear should be null",
                "size counter simplifies metrics",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description: "Implement each operation in constant time.",
              details: [
                "enqueue(x): create node; if empty front=rear=new node else rear.next=new node then rear=new node",
                "dequeue(): if empty return; store front.data; front=front.next; if front null set rear null",
                "getFront/getRear just read pointers",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description: "Handle memory management and convenience helpers.",
              details: [
                "Reset front/rear when queue cleared",
                "Display by traversing nodes (O(n) debug only)",
                "Linked list avoids wasted capacity and suits unpredictable workloads",
              ],
            },
          ],
          pattern: "Linked List Based Queue",
          complexity: {
            time: "O(1) enqueue/dequeue",
            space: "O(n)",
          },
        }}
      />

      <ProblemBlock
        title="8. Deque (Double-ended Queue)"
        difficulty="Medium"
        description="Implement a deque that allows insertion and deletion at both ends."
        solutions={{
          JavaScript: `// Deque (Double-ended Queue) Implementation

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
cDeque.display(); // Circular Deque: 1 2`,
          Java: `import java.util.*;

public class Deque {
    private List<Integer> items;
    private int front;
    private int rear;
    
    public Deque() {
        this.items = new ArrayList<>();
        this.front = 0;
        this.rear = -1;
    }
    
    // Add element to front
    public void addFront(int element) {
        if (front > 0) {
            front--;
            if (front < items.size()) {
                items.set(front, element);
            } else {
                items.add(0, element);
            }
        } else {
            items.add(0, element);
            rear++;
        }
    }
    
    // Add element to rear
    public void addRear(int element) {
        rear++;
        if (rear < items.size()) {
            items.set(rear, element);
        } else {
            items.add(element);
        }
    }
    
    // Remove element from front
    public Integer removeFront() {
        if (isEmpty()) {
            return null;
        }
        
        int element = items.get(front);
        front++;
        
        // Reset if empty
        if (front > rear) {
            front = 0;
            rear = -1;
        }
        
        return element;
    }
    
    // Remove element from rear
    public Integer removeRear() {
        if (isEmpty()) {
            return null;
        }
        
        int element = items.get(rear);
        rear--;
        
        // Reset if empty
        if (front > rear) {
            front = 0;
            rear = -1;
        }
        
        return element;
    }
    
    // Get front element
    public Integer getFront() {
        if (isEmpty()) {
            return null;
        }
        return items.get(front);
    }
    
    // Get rear element
    public Integer getRear() {
        if (isEmpty()) {
            return null;
        }
        return items.get(rear);
    }
    
    public boolean isEmpty() {
        return front > rear;
    }
    
    public static void main(String[] args) {
        Deque deque = new Deque();
        deque.addRear(10);
        deque.addRear(20);
        deque.addFront(5);
        System.out.println("Front: " + deque.getFront()); // 5
        System.out.println("Rear: " + deque.getRear()); // 20
        deque.removeFront();
        System.out.println("Front: " + deque.getFront()); // 10
    }
}`,
        }}
        explanation="Deque allows insertion/deletion at both ends. Use array with front/rear pointers or circular array for efficiency. Time: O(1) for all operations, Space: O(n)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Deque supports insertion/removal at both front and rear. Need add/remove/peek on both sides plus size/isEmpty.",
              details: [
                "Clarify whether capacity is fixed or dynamic",
                "Operations should be O(1)",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Circular array or linked list with two pointers works well for deques.",
              keywords: [
                "deque",
                "double-ended queue",
                "circular buffer",
                "front/rear operations",
              ],
              details: [
                "Using array requires wrap-around arithmetic",
                "Linked list alternative uses head/tail pointers",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Use circular array for predictable capacity or doubly linked list for dynamic sizing.",
              details: [
                "Maintain front/rear indices and optionally size counter",
                "Check for overflow and underflow separately",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Implement add/remove on both ends using pointer arithmetic.",
              details: [
                "addFront: decrement front (with wrap), write value",
                "addRear: increment rear (with wrap), write value",
                "removeFront/removeRear adjust pointers and return values",
                "isEmpty when size==0; isFull when size==capacity",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Expose helper methods and guard states for easier reuse.",
              details: [
                "Provide getFront/getRear for peeking",
                "Ensure consistent reset when deque becomes empty",
                "For shifting-array version, consider using linked list to avoid O(n) shifts",
              ],
            },
          ],
          pattern: "Circular Buffer Deque",
          complexity: {
            time: "O(1) per operation",
            space: "O(n)",
          },
        }}
      />

      <ProblemBlock
        title="9. Queue Applications in Real-world"
        difficulty="Easy"
        description="Common real-world applications of queues and their implementations."
        solutions={{
          JavaScript: `// Queue Applications in Real-world

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
callCenter.assignAgent("Agent1"); // VIP Caller`,
          Java: `import java.util.*;

// Queue Applications in Real-world

// 1. Task Scheduler
class TaskScheduler {
    private Queue<String> taskQueue;
    private PriorityQueue<Task> priorityQueue;
    
    private static class Task implements Comparable<Task> {
        String task;
        int priority;
        
        Task(String task, int priority) {
            this.task = task;
            this.priority = priority;
        }
        
        @Override
        public int compareTo(Task other) {
            return Integer.compare(other.priority, this.priority);
        }
    }
    
    public TaskScheduler() {
        this.taskQueue = new LinkedList<>();
        this.priorityQueue = new PriorityQueue<>();
    }
    
    public void addTask(String task, int priority) {
        if (priority > 0) {
            priorityQueue.offer(new Task(task, priority));
        } else {
            taskQueue.offer(task);
        }
    }
    
    public String executeNext() {
        if (!priorityQueue.isEmpty()) {
            return priorityQueue.poll().task;
        } else if (!taskQueue.isEmpty()) {
            return taskQueue.poll();
        }
        return null;
    }
}

// 2. BFS (Breadth-First Search) using Queue
class BFS {
    public static List<String> bfs(Map<String, List<String>> graph, String start) {
        Set<String> visited = new HashSet<>();
        Queue<String> queue = new LinkedList<>();
        List<String> result = new ArrayList<>();
        
        visited.add(start);
        queue.offer(start);
        
        while (!queue.isEmpty()) {
            String current = queue.poll();
            result.add(current);
            
            for (String neighbor : graph.getOrDefault(current, new ArrayList<>())) {
                if (!visited.contains(neighbor)) {
                    visited.add(neighbor);
                    queue.offer(neighbor);
                }
            }
        }
        
        return result;
    }
}

public class QueueApplications {
    public static void main(String[] args) {
        // Test Task Scheduler
        TaskScheduler scheduler = new TaskScheduler();
        scheduler.addTask("Backup database", 0);
        scheduler.addTask("Critical update", 10);
        scheduler.addTask("Send email", 0);
        System.out.println("Executed: " + scheduler.executeNext()); // Critical update
        
        // Test BFS
        Map<String, List<String>> graph = new HashMap<>();
        graph.put("A", Arrays.asList("B", "C"));
        graph.put("B", Arrays.asList("D", "E"));
        graph.put("C", Arrays.asList("F"));
        
        List<String> bfsResult = BFS.bfs(graph, "A");
        System.out.println("BFS traversal: " + bfsResult); // [A, B, C, D, E, F]
    }
}`,
        }}
        explanation="Queues are used in task scheduling, print spooling, BFS traversal, call centers, and many other real-world applications where FIFO processing is required. Time: O(1) for enqueue/dequeue, Space: O(n)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Identify the workflow: producers add work items, consumers handle them in arrival order (possibly with priorities).",
              details: [
                "Examples: CPU scheduling, customer support, printer jobs, message brokers",
                "Clarify throughput/latency requirements and fairness constraints",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "All these scenarios share the producer-consumer decoupling pattern.",
              keywords: [
                "producer-consumer",
                "load leveling",
                "task scheduling",
                "FIFO fairness",
              ],
              details: [
                "Queues buffer bursts and smooth processing",
                "Variants: simple FIFO, priority queues, delay queues, multi-level feedback queues",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description: "Pick queue flavor that matches the domain needs.",
              details: [
                "Array/circular buffer for embedded/real-time systems",
                "Linked list or persistent store for unbounded messaging",
                "Heap-based priority queue when urgency differs per job",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Model enqueue/dequeue semantics for each application type.",
              details: [
                "Task scheduler: push jobs with priority metadata, pop highest priority first",
                "Print spooler: maintain FIFO but allow expedited jobs",
                "BFS traversal: enqueue neighbors as we explore graph layers",
                "Call center: split between VIP and regular queues, assign agents accordingly",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description: "Add observability, persistence, and scaling hooks.",
              details: [
                "Expose queue depth, wait time, throughput metrics",
                "Persist jobs to disk or distributed log for reliability",
                "Shard or prioritize queues to meet SLAs",
              ],
            },
          ],
          pattern: "Producer-Consumer Decoupling with FIFO/Priority Queues",
          complexity: {
            time: "Typically O(1) enqueue/dequeue; depends on priority strategy",
            space: "O(number of queued items)",
          },
        }}
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

function CodeBlock({ code, defaultLanguage = "JavaScript" }) {
  const isMultiLanguage = typeof code === "object" && code !== null;
  const languageKeys = isMultiLanguage ? Object.keys(code) : [];
  const [activeLanguage, setActiveLanguage] = useState(
    isMultiLanguage ? languageKeys[0] : defaultLanguage
  );
  const displayedCode = isMultiLanguage ? code[activeLanguage] : code;

  return (
    <div className="bg-gray-950 rounded-lg p-4 overflow-x-auto">
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
      <pre className="text-sm text-green-400">
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

      {showSolution && codeData && (
        <div>
          {approach && (
            <div className="flex gap-2 mb-4 border-b border-gray-700">
              <button
                onClick={() => setActiveTab("solution")}
                className={`px-4 py-2 font-semibold transition-colors ${
                  activeTab === "solution"
                    ? "text-blue-400 border-b-2 border-blue-400"
                    : "text-gray-400 hover:text-gray-300"
                }`}
              >
                Solution
              </button>
              <button
                onClick={() => setActiveTab("approach")}
                className={`px-4 py-2 font-semibold transition-colors ${
                  activeTab === "approach"
                    ? "text-blue-400 border-b-2 border-blue-400"
                    : "text-gray-400 hover:text-gray-300"
                }`}
              >
                Approach
              </button>
            </div>
          )}

          {activeTab === "solution" && (
        <div className="space-y-4">
          <CodeBlock code={codeData} defaultLanguage="JavaScript" />
          <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-4">
            <p className="text-blue-200">
              <strong>💡 Explanation:</strong>
              <br />
              {explanation}
            </p>
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
      <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-xl p-6 border border-blue-500/40">
        <h3 className="text-2xl font-bold text-white mb-2">
          🎯 Problem Solving Approach
        </h3>
        <p className="text-gray-300 text-sm">
          Applying the systematic 5-step framework to master this queue problem
        </p>
      </div>

      {approach.steps?.map((step, index) => (
        <div
          key={index}
          className="bg-gray-800 rounded-lg p-5 border border-gray-700"
        >
          <div className="flex items-start gap-4">
            <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
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
                        <span className="text-blue-400 mt-1">•</span>
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
                      className="px-2 py-1 bg-blue-500/20 text-blue-200 rounded text-xs"
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
