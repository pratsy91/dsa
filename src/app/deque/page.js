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
            code={{
              JavaScript: `// Deque Implementation using Array

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
  }
  
  // Add element to rear
  addRear(element) {
    this.rear++;
    this.items[this.rear] = element;
  }
  
  // Remove element from front
  removeFront() {
    if (this.isEmpty()) {
      return null;
    }
    
    const element = this.items[this.front];
    this.front++;
    
    // Reset if empty
    if (this.front > this.rear) {
      this.front = 0;
      this.rear = -1;
    }
    
    return element;
  }
  
  // Remove element from rear
  removeRear() {
    if (this.isEmpty()) {
      return null;
    }
    
    const element = this.items[this.rear];
    this.rear--;
    
    // Reset if empty
    if (this.front > this.rear) {
      this.front = 0;
      this.rear = -1;
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
  
  // Get rear element
  getRear() {
    if (this.isEmpty()) {
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
}

// Usage example
const deque = new Deque();
deque.addRear(10);
deque.addRear(20);
deque.addFront(5);
console.log("Front:", deque.getFront()); // 5
console.log("Rear:", deque.getRear()); // 20
deque.removeFront();
console.log("Front:", deque.getFront()); // 10`,
              Java: `import java.util.*;

// Deque Implementation using ArrayList
class Deque {
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
            // Shift all elements to make room
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
    
    // Check if empty
    public boolean isEmpty() {
        return front > rear;
    }
    
    // Get size
    public int size() {
        return isEmpty() ? 0 : rear - front + 1;
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
        solutions={{
          JavaScript: `// Basic Deque Operations

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
console.log("Is empty:", deque.isEmpty()); // true`,
          Java: `import java.util.*;

public class BasicDeque {
    private List<Integer> items;
    private int front;
    private int rear;
    
    public BasicDeque() {
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
        if (front > rear) {
            front = 0;
            rear = -1;
        }
        return element;
    }
    
    public Integer getFront() {
        return isEmpty() ? null : items.get(front);
    }
    
    public Integer getRear() {
        return isEmpty() ? null : items.get(rear);
    }
    
    public boolean isEmpty() {
        return front > rear;
    }
    
    public int size() {
        return isEmpty() ? 0 : rear - front + 1;
    }
    
    public static void main(String[] args) {
        BasicDeque deque = new BasicDeque();
        deque.addRear(10);
        deque.addRear(20);
        deque.addFront(5);
        System.out.println("Front: " + deque.getFront()); // 5
        System.out.println("Rear: " + deque.getRear()); // 20
        System.out.println("Size: " + deque.size()); // 3
    }
}`,
        }}
        explanation="Implement deque using array with front and rear pointers. AddFront shifts elements or moves front pointer. AddRear increments rear pointer. Time: O(1) for addRear, O(n) for addFront, Space: O(n)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Support insertion/removal at both ends plus peek/isEmpty/size using a contiguous buffer.",
              details: [
                "Array-based deque is simplest but addFront may require shifting",
                "Ensure state resets when deque becomes empty",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Deque is a generalization of stack/queue where both ends act as entry/exit points.",
              keywords: [
                "double-ended",
                "front pointer",
                "rear pointer",
                "array deque",
              ],
              details: [
                "Keeping front/rear indices and adjusting them per operation",
                "Potential optimization: convert to circular array later",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Dynamic array plus two indices to represent active range.",
              details: [
                "front index points to first element",
                "rear index to last",
                "Array stores elements sequentially from front..rear",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description: "Implement operations using pointer arithmetic.",
              details: [
                "addFront: if front>0, decrement front; else shift entire range to right, update rear",
                "addRear: ++rear; assign value",
                "removeFront: return arr[front++] and reset when front>rear",
                "removeRear: return arr[rear--] and reset when empty",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Guard underflow and note O(n) shifts when front==0.",
              details: [
                "Use helper to reset front=0,rear=-1 when deque empties",
                "For production, prefer circular array/doubly linked list to avoid shifts",
                "All other operations remain O(1)",
              ],
            },
          ],
          pattern: "Array-Based Double-Ended Queue",
          complexity: {
            time: "O(1) amortized (O(n) worst-case addFront when shifting)",
            space: "O(n)",
          },
        }}
      />

      <ProblemBlock
        title="2. Circular Deque Implementation"
        difficulty="Medium"
        description="Implement a circular deque with fixed size that efficiently uses space."
        solutions={{
          JavaScript: `// Circular Deque Implementation

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
cDeque.display(); // Circular Deque: 7 5 1 2 6`,
          Java: `public class CircularDeque {
    private int capacity;
    private int[] items;
    private int front;
    private int rear;
    private int size;
    
    public CircularDeque(int capacity) {
        this.capacity = capacity;
        this.items = new int[capacity];
        this.front = 0;
        this.rear = 0;
        this.size = 0;
    }
    
    public boolean isFull() {
        return size == capacity;
    }
    
    public boolean addFront(int element) {
        if (isFull()) {
            return false;
        }
        if (isEmpty()) {
            items[front] = element;
        } else {
            front = (front - 1 + capacity) % capacity;
            items[front] = element;
        }
        size++;
        return true;
    }
    
    public boolean addRear(int element) {
        if (isFull()) {
            return false;
        }
        items[rear] = element;
        rear = (rear + 1) % capacity;
        size++;
        return true;
    }
    
    public Integer removeFront() {
        if (isEmpty()) {
            return null;
        }
        int element = items[front];
        front = (front + 1) % capacity;
        size--;
        return element;
    }
    
    public Integer removeRear() {
        if (isEmpty()) {
            return null;
        }
        rear = (rear - 1 + capacity) % capacity;
        int element = items[rear];
        size--;
        return element;
    }
    
    public Integer getFront() {
        return isEmpty() ? null : items[front];
    }
    
    public Integer getRear() {
        if (isEmpty()) {
            return null;
        }
        int rearIndex = (rear - 1 + capacity) % capacity;
        return items[rearIndex];
    }
    
    public boolean isEmpty() {
        return size == 0;
    }
    
    public int getSize() {
        return size;
    }
    
    public static void main(String[] args) {
        CircularDeque cDeque = new CircularDeque(5);
        cDeque.addFront(1);
        cDeque.addRear(2);
        cDeque.addFront(3);
        System.out.println("Front: " + cDeque.getFront()); // 3
        System.out.println("Rear: " + cDeque.getRear()); // 2
    }
}`,
        }}
        explanation="Use circular array with modulo arithmetic. Front and rear wrap around using (index ± 1) % capacity. Check full condition: size === capacity. Time: O(1) for all operations, Space: O(n)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "We need a fixed-capacity deque where both ends can grow/shrink without shifting elements.",
              details: [
                "Define what should happen when structure is full or empty",
                "Clarify APIs: add/remove front & rear, peek, size checks",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "A circular buffer lets front/rear wrap around the array, reusing freed slots.",
              keywords: [
                "circular buffer",
                "mod arithmetic",
                "wrap-around",
                "front/rear pointers",
              ],
              details: [
                "Maintain `front`, `rear`, and `size` so we know when deque is full",
                "Indices advance with `(index ± 1 + capacity) % capacity`",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Use a fixed-size array plus three integers (`front`, `rear`, `size`).",
              details: [
                "Array holds values",
                "`front` points to current first element",
                "`rear` is next insertion position at the back",
                "`size` distinguishes full vs empty when `front == rear`",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Implement each operation with constant-time pointer updates.",
              details: [
                "addFront: decrement front circularly, place value, ++size",
                "addRear: place value at rear, increment rear modulo capacity",
                "removeFront/removeRear: adjust pointers, decrement size, return element",
                "Getters read from `front` or `(rear-1)` modulo capacity",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Guard edge cases (full/empty) and keep operations symmetric.",
              details: [
                "Check `size === capacity` before inserts; check `size === 0` before removals",
                "Expose helper to compute previous index `(idx-1+cap)%cap`",
                "Thoroughly test wrap-around transitions (front passing through 0)",
              ],
            },
          ],
          pattern: "Circular Deque via Fixed-Length Ring Buffer",
          complexity: {
            time: "O(1) per operation",
            space: "O(n)",
          },
        }}
      />

      <ProblemBlock
        title="3. Deque using Linked List"
        difficulty="Medium"
        description="Implement deque using doubly linked list for efficient operations at both ends."
        solutions={{
          JavaScript: `// Deque using Doubly Linked List

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
console.log("Is empty:", deque.isEmpty()); // true`,
          Java: `class DequeNode {
    int data;
    DequeNode next;
    DequeNode prev;
    
    DequeNode(int data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

public class DequeLinkedList {
    private DequeNode front;
    private DequeNode rear;
    private int size;
    
    public DequeLinkedList() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }
    
    public void addFront(int element) {
        DequeNode newNode = new DequeNode(element);
        if (isEmpty()) {
            front = rear = newNode;
        } else {
            newNode.next = front;
            front.prev = newNode;
            front = newNode;
        }
        size++;
    }
    
    public void addRear(int element) {
        DequeNode newNode = new DequeNode(element);
        if (isEmpty()) {
            front = rear = newNode;
        } else {
            newNode.prev = rear;
            rear.next = newNode;
            rear = newNode;
        }
        size++;
    }
    
    public Integer removeFront() {
        if (isEmpty()) {
            return null;
        }
        int element = front.data;
        if (front == rear) {
            front = rear = null;
        } else {
            front = front.next;
            front.prev = null;
        }
        size--;
        return element;
    }
    
    public Integer removeRear() {
        if (isEmpty()) {
            return null;
        }
        int element = rear.data;
        if (front == rear) {
            front = rear = null;
        } else {
            rear = rear.prev;
            rear.next = null;
        }
        size--;
        return element;
    }
    
    public Integer getFront() {
        return isEmpty() ? null : front.data;
    }
    
    public Integer getRear() {
        return isEmpty() ? null : rear.data;
    }
    
    public boolean isEmpty() {
        return front == null;
    }
    
    public int getSize() {
        return size;
    }
    
    public static void main(String[] args) {
        DequeLinkedList deque = new DequeLinkedList();
        deque.addRear(10);
        deque.addRear(20);
        deque.addFront(5);
        System.out.println("Front: " + deque.getFront()); // 5
        System.out.println("Rear: " + deque.getRear()); // 20
    }
}`,
        }}
        explanation="Use doubly linked list with front and rear pointers. Each node has prev and next pointers. AddFront/AddRear update pointers accordingly. Time: O(1) for all operations, Space: O(n)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Build a deque that can grow without a preset capacity and supports constant-time updates at both ends.",
              details: [
                "Operations must handle empty deque gracefully",
                "Need front/back insertion, removal, and peek APIs",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "A doubly linked list naturally supports O(1) insertion/removal at both ends via head/tail pointers.",
              keywords: [
                "doubly linked list",
                "head/tail",
                "prev/next pointers",
                "dynamic deque",
              ],
              details: [
                "Nodes link both directions so we can detach either end without traversing",
                "Front/back operations become pointer rewires",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Define `DequeNode { value, prev, next }` and maintain `front`, `rear`, and `size` fields.",
              details: [
                "`front` points to first node, `rear` to last",
                "Size counter enables O(1) length queries",
                "No array resizing required",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description: "Implement each method by adjusting node links.",
              details: [
                "addFront: create node, set `node.next = front`, update `front.prev`, move front pointer",
                "addRear: link after current rear and update pointer",
                "removeFront/removeRear: detach node, update neighbor pointer, manage single-node case",
                "Peek operations read `front.value`/`rear.value`",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description: "Handle edge cases and consider helper routines.",
              details: [
                "When deque becomes empty, set both pointers to null",
                "Encapsulate node creation/deletion to avoid duplicated code",
                "Optional sentinel nodes can simplify pointer manipulation",
              ],
            },
          ],
          pattern: "Deque via Doubly Linked List",
          complexity: {
            time: "O(1) per operation",
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
        solutions={{
          JavaScript: `// Design a Data Structure with Min and Max

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
optimizedDeque.display();`,
          Java: `import java.util.*;

public class MinMaxDeque {
    private Deque<Integer> deque;
    private Deque<Integer> minDeque;
    private Deque<Integer> maxDeque;
    
    public MinMaxDeque() {
        this.deque = new LinkedList<>();
        this.minDeque = new LinkedList<>();
        this.maxDeque = new LinkedList<>();
    }
    
    public void insert(int element) {
        deque.offerLast(element);
        
        // Maintain min deque (increasing order)
        while (!minDeque.isEmpty() && minDeque.peekLast() > element) {
            minDeque.pollLast();
        }
        minDeque.offerLast(element);
        
        // Maintain max deque (decreasing order)
        while (!maxDeque.isEmpty() && maxDeque.peekLast() < element) {
            maxDeque.pollLast();
        }
        maxDeque.offerLast(element);
    }
    
    public Integer getMin() {
        return deque.isEmpty() ? null : minDeque.peekFirst();
    }
    
    public Integer getMax() {
        return deque.isEmpty() ? null : maxDeque.peekFirst();
    }
    
    public boolean isEmpty() {
        return deque.isEmpty();
    }
    
    public static void main(String[] args) {
        MinMaxDeque mmDeque = new MinMaxDeque();
        mmDeque.insert(5);
        mmDeque.insert(3);
        mmDeque.insert(8);
        mmDeque.insert(1);
        System.out.println("Min: " + mmDeque.getMin()); // 1
        System.out.println("Max: " + mmDeque.getMax()); // 8
    }
}`,
        }}
        explanation="Use auxiliary deques to maintain min and max elements. Min deque stays increasing, max deque decreasing. Time: O(1) amortized per operation, Space: O(n)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Design a deque that can return both minimum and maximum in O(1) alongside normal add/remove operations.",
              details: [
                "Need to support insertions/removals at ends and queries getMin()/getMax() quickly",
                "Elements may repeat; structure must handle duplicates",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Use monotonic deques to track candidate mins and maxes as elements flow in/out.",
              keywords: [
                "monotonic deque",
                "min/max maintenance",
                "auxiliary structures",
              ],
              details: [
                "Maintain two deques: one nondecreasing (for mins) and one nonincreasing (for maxes)",
                "Pop from back while violating order to keep only useful candidates",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Primary deque for actual values + two helper deques for min/max.",
              details: [
                "Each helper stores values (or indices) in monotonic order",
                "When base deque removes a value equal to helper’s head, remove it there too",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Define how inserts and deletes update all structures.",
              details: [
                "On insert: push value to base deque, then adjust min/max deques (pop smaller/greater tails before appending)",
                "On removeFront/removeRear: pop from base and sync helpers by removing matching head/tail",
                "getMin/getMax read helper fronts",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Ensure amortized O(1) by popping each element at most once.",
              details: [
                "Carefully handle duplicates by checking equality when removing",
                "Consider storing indices instead of values if you also need to support random deletions",
                "Write tests covering alternating inserts/removals to verify invariants",
              ],
            },
          ],
          pattern: "Min/Max Monotonic Deques",
          complexity: {
            time: "O(1) amortized per operation",
            space: "O(n)",
          },
        }}
      />

      <ProblemBlock
        title="5. Maximums of all subarrays of size k"
        difficulty="Hard"
        description="Find the maximum element in every subarray of size k using deque."
        solutions={{
          JavaScript: `// Maximums of all subarrays of size k

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
maxOfSubarraysDetailed([1, 3, -1, -3, 5, 3, 6, 7], 3);`,
          Java: `import java.util.*;

public class MaxOfSubarrays {
    public static List<Integer> maxOfSubarrays(int[] arr, int k) {
        List<Integer> result = new ArrayList<>();
        Deque<Integer> deque = new LinkedList<>(); // Store indices
        
        // Process first window
        for (int i = 0; i < k; i++) {
            // Remove elements smaller than current element
            while (!deque.isEmpty() && arr[deque.peekLast()] <= arr[i]) {
                deque.pollLast();
            }
            deque.offerLast(i);
        }
        
        // Process remaining windows
        for (int i = k; i < arr.length; i++) {
            // Add maximum of previous window
            result.add(arr[deque.peekFirst()]);
            
            // Remove elements outside current window
            while (!deque.isEmpty() && deque.peekFirst() <= i - k) {
                deque.pollFirst();
            }
            
            // Remove elements smaller than current element
            while (!deque.isEmpty() && arr[deque.peekLast()] <= arr[i]) {
                deque.pollLast();
            }
            
            deque.offerLast(i);
        }
        
        // Add maximum of last window
        result.add(arr[deque.peekFirst()]);
        
        return result;
    }
    
    public static void main(String[] args) {
        int[] arr = {1, 3, -1, -3, 5, 3, 6, 7};
        int k = 3;
        List<Integer> result = maxOfSubarrays(arr, k);
        System.out.println("Result: " + result); // [3, 3, 5, 5, 6, 7]
    }
}`,
        }}
        explanation="Use deque to store indices of elements in decreasing order. Remove elements outside the window and smaller than current element. Front of deque holds the current max. Time: O(n), Space: O(k)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Given an array and window size k, output the maximum for every contiguous subarray of length k.",
              details: [
                "Brute force would be O(n·k); need linear-time solution",
                "Window slides one step at a time",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Sliding-window optimization using a monotonic deque to keep potential maxima.",
              keywords: ["sliding window", "monotonic deque", "window maximum"],
              details: [
                "Maintain indices in decreasing order of values",
                "Front of deque always corresponds to current maximum",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description: "Use a deque storing indices rather than values.",
              details: [
                "Indices help detect when an element falls out of the window",
                "Deque length never exceeds k",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description: "Process array in one pass while updating deque.",
              details: [
                "For each index i:",
                "  - Remove indices from front if they are < i-k+1 (outside window)",
                "  - Pop from back while arr[back] ≤ arr[i] to keep deque decreasing",
                "  - Push i to back",
                "  - Starting from i ≥ k-1, record arr[deque[0]] as current max",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Ensure amortized O(1) operations and handle corner cases.",
              details: [
                "Each index enters/exits deque at most once → O(n) total",
                "Consider edge cases k=1 or k>n",
                "Return list of maxima with length n-k+1",
              ],
            },
          ],
          pattern: "Monotonic Deque for Window Maximum",
          complexity: {
            time: "O(n)",
            space: "O(k)",
          },
        }}
      />

      <ProblemBlock
        title="6. First Circular Tour"
        difficulty="Hard"
        description="Find the first petrol pump from where a truck can complete a circular tour using deque."
        solutions={{
          JavaScript: `// First Circular Tour

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
firstCircularTourDetailed([4, 6, 7, 4], [6, 5, 3, 5]);`,
          Java: `public class FirstCircularTour {
    public static int firstCircularTour(int[] petrol, int[] distance) {
        int n = petrol.length;
        int start = 0;
        int end = 1;
        int currentPetrol = petrol[start] - distance[start];
        
        while (start != end || currentPetrol < 0) {
            // If current petrol is negative, we can't reach next station
            while (currentPetrol < 0 && start != end) {
                currentPetrol -= petrol[start] - distance[start];
                start = (start + 1) % n;
                
                // If we've tried all stations
                if (start == 0) {
                    return -1;
                }
            }
            
            // Add current station
            currentPetrol += petrol[end] - distance[end];
            end = (end + 1) % n;
        }
        
        return start;
    }
    
    public static void main(String[] args) {
        int[] petrol = {4, 6, 7, 4};
        int[] distance = {6, 5, 3, 5};
        System.out.println("Result: " + firstCircularTour(petrol, distance)); // 1
    }
}`,
        }}
        explanation="Use two pointers: start and end. Track current petrol balance; when it drops below zero, move start forward and reset balance. If start wraps to 0 without success, no solution exists. Time: O(n), Space: O(1)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Given petrol and distance arrays, find first station index from which a truck can complete the circle exactly once.",
              details: [
                "`petrol[i]` liters available, `distance[i]` needed to next station",
                "We need total petrol ≥ total distance, else answer is -1",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "This is a circular array / greedy problem; a simple two-pointer sweep suffices.",
              keywords: [
                "circular tour",
                "two-pointer",
                "greedy",
                "running balance",
              ],
              details: [
                "Move `end` forward accumulating (petrol-distance)",
                "If balance falls negative, shift `start` past the failing station",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Use indices `start`, `end`, and an integer `currentPetrol` to track net fuel in tank.",
              details: [
                "Optionally maintain a deque of candidate stations for debug/visualization, but indices suffice",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description: "Greedy sweep around the circle once.",
              details: [
                "Initialize `start = 0`, `end = 1`, `current = petrol[0]-dist[0]`",
                "While `start != end` or `current < 0`: if current < 0, subtract start’s net petrol and advance start",
                "Otherwise add next station (advance end, add petrol[end]-dist[end])",
                "If start wraps to 0 after adjustment, no solution → return -1",
                "When loop ends, `start` is the answer",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Verify feasibility first (sum of petrol ≥ sum of distance).",
              details: [
                "Avoid infinite loops by stopping when start returns to origin",
                "Handle edge cases like single station, zero capacity",
                "Time O(n) because each station is visited at most twice",
              ],
            },
          ],
          pattern: "Circular Two-Pointer/Gready Tour",
          complexity: {
            time: "O(n)",
            space: "O(1)",
          },
        }}
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
        solutions={{
          JavaScript: `// Sliding Window Minimum

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
console.log("Result:", minOfSubarrays(arr1, k1)); // [-1, -3, -3, -3, 3, 3]`,
          Java: `import java.util.*;

public class SlidingWindowMinimum {
    public static List<Integer> minOfSubarrays(int[] arr, int k) {
        List<Integer> result = new ArrayList<>();
        Deque<Integer> deque = new LinkedList<>(); // Store indices
        
        // Process first window
        for (int i = 0; i < k; i++) {
            // Remove elements greater than current element
            while (!deque.isEmpty() && arr[deque.peekLast()] >= arr[i]) {
                deque.pollLast();
            }
            deque.offerLast(i);
        }
        
        // Process remaining windows
        for (int i = k; i < arr.length; i++) {
            // Add minimum of previous window
            result.add(arr[deque.peekFirst()]);
            
            // Remove elements outside current window
            while (!deque.isEmpty() && deque.peekFirst() <= i - k) {
                deque.pollFirst();
            }
            
            // Remove elements greater than current element
            while (!deque.isEmpty() && arr[deque.peekLast()] >= arr[i]) {
                deque.pollLast();
            }
            
            deque.offerLast(i);
        }
        
        // Add minimum of last window
        result.add(arr[deque.peekFirst()]);
        
        return result;
    }
    
    public static void main(String[] args) {
        int[] arr = {1, 3, -1, -3, 5, 3, 6, 7};
        int k = 3;
        List<Integer> result = minOfSubarrays(arr, k);
        System.out.println("Result: " + result); // [-1, -3, -3, -3, 3, 3]
    }
}`,
        }}
        explanation="Use deque to store indices of elements in increasing order. Remove elements outside window and greater than current element. Front of deque always contains index of minimum element. Time: O(n), Space: O(k)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Compute minima for every contiguous subarray of size k in linear time.",
              details: [
                "Window slides one step per iteration",
                "Need output of length n - k + 1",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Use a monotonic deque storing indices such that values are increasing from front to back.",
              keywords: ["sliding window", "monotonic deque", "window minimum"],
              details: [
                "Front keeps smallest value index for current window",
                "Drop indices of larger elements since they can’t become future minima",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Deque (double-ended queue) containing indices, not raw values.",
              details: [
                "Indices allow O(1) eviction when falling out of window (i - k)",
                "Deque size bounded by k",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description: "Single pass maintaining invariants.",
              details: [
                "For each index i:",
                "  • Remove deque[0] if it’s outside window",
                "  • Pop from back while arr[back] ≥ arr[i]",
                "  • Push i",
                "  • When i ≥ k-1, append arr[deque[0]] to result",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Mirror the window-maximum solution but reverse comparisons.",
              details: [
                "Each index enters/exits deque once → O(n)",
                "Edge cases: k == 1 (return original array), k > n (invalid/empty)",
                "Optional: reuse same helper for max/min by parameterizing comparator",
              ],
            },
          ],
          pattern: "Monotonic Deque for Sliding-Window Minimum",
          complexity: {
            time: "O(n)",
            space: "O(k)",
          },
        }}
      />

      <ProblemBlock
        title="8. Deque in BFS"
        difficulty="Medium"
        description="Use deque for efficient BFS traversal with level-by-level processing."
        solutions={{
          JavaScript: `// Deque in BFS

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
console.log("BFS traversal:", bfsWithDeque(graph, 'A'));`,
          Java: `import java.util.*;

public class BFSWithDeque {
    public static List<String> bfsWithDeque(Map<String, List<String>> graph, String start) {
        Set<String> visited = new HashSet<>();
        Deque<String> deque = new LinkedList<>();
        List<String> result = new ArrayList<>();
        
        visited.add(start);
        deque.offerLast(start);
        
        while (!deque.isEmpty()) {
            String current = deque.pollFirst();
            result.add(current);
            
            for (String neighbor : graph.getOrDefault(current, new ArrayList<>())) {
                if (!visited.contains(neighbor)) {
                    visited.add(neighbor);
                    deque.offerLast(neighbor);
                }
            }
        }
        
        return result;
    }
    
    public static void main(String[] args) {
        Map<String, List<String>> graph = new HashMap<>();
        graph.put("A", Arrays.asList("B", "C"));
        graph.put("B", Arrays.asList("A", "D", "E"));
        graph.put("C", Arrays.asList("A", "F"));
        
        List<String> result = bfsWithDeque(graph, "A");
        System.out.println("BFS traversal: " + result); // [A, B, C, D, E, F]
    }
}`,
        }}
        explanation="Use deque for FIFO processing in BFS. Add neighbors to rear, process from front. Maintains level-by-level traversal order. Time: O(V + E), Space: O(V)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Perform breadth-first traversal on a graph/tree starting from a given node.",
              details: [
                "Need to visit neighbors layer by layer",
                "Track visited nodes to avoid repetition in graphs",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Classic BFS uses FIFO queue semantics; deque provides the same behavior with additional flexibility.",
              keywords: ["BFS", "queue", "level order", "visited set"],
              details: [
                "Process node, then enqueue its unvisited neighbors",
                "Deque pop from front / push to rear replicates queue behavior",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description: "Use a deque plus a visited set (or boolean array).",
              details: [
                "Deque enables O(1) push/pop at both ends",
                "Visited structure prevents cycles",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description: "Standard BFS loop.",
              details: [
                "Initialize: mark start visited, enqueue it",
                "While deque not empty: dequeue front node, record result, enqueue all unvisited neighbors",
                "For trees: optionally capture level size to produce level-order lists",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Keep interfaces generic so BFS works for graphs or binary trees.",
              details: [
                "For graphs, adjacency list representation is typical",
                "For 0-1 BFS or bidirectional searches, deque allows adding to front/back with priority",
                "Complexity O(V+E); ensure data structures sized accordingly",
              ],
            },
          ],
          pattern: "Breadth-First Traversal via Deque",
          complexity: {
            time: "O(V + E)",
            space: "O(V)",
          },
        }}
      />

      <ProblemBlock
        title="9. Deque in Palindrome Checking"
        difficulty="Easy"
        description="Use deque to check if a string is a palindrome efficiently."
        solutions={{
          JavaScript: `// Deque in Palindrome Checking

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
console.log(\`"\${str3}" is palindrome:\`, isPalindromeDeque(str3)); // true`,
          Java: `import java.util.*;

public class PalindromeDeque {
    public static boolean isPalindromeDeque(String str) {
        Deque<Character> deque = new LinkedList<>();
        
        // Add all characters to deque
        for (char c : str.toLowerCase().toCharArray()) {
            if (Character.isLetterOrDigit(c)) {
                deque.offerLast(c);
            }
        }
        
        // Check palindrome by comparing front and rear
        while (deque.size() > 1) {
            if (!deque.pollFirst().equals(deque.pollLast())) {
                return false;
            }
        }
        
        return true;
    }
    
    public static void main(String[] args) {
        String str1 = "A man a plan a canal Panama";
        String str2 = "race a car";
        String str3 = "level";
        
        System.out.println("\"" + str1 + "\" is palindrome: " + isPalindromeDeque(str1)); // true
        System.out.println("\"" + str2 + "\" is palindrome: " + isPalindromeDeque(str2)); // false
        System.out.println("\"" + str3 + "\" is palindrome: " + isPalindromeDeque(str3)); // true
    }
}`,
        }}
        explanation="Use deque to store normalized characters, then compare front and rear elements while they match. Time: O(n), Space: O(n)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Determine whether a string is a palindrome when considering only alphanumeric characters (case-insensitive).",
              details: [
                "Clarify if punctuation/spacing should be ignored",
                "Decide whether to treat uppercase/lowercase as equal",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Compare symmetric characters from both ends simultaneously.",
              keywords: [
                "palindrome",
                "two-pointer",
                "deque",
                "front/rear comparison",
              ],
              details: [
                "Deque models the string with easy front and back removals",
                "Equivalent to two-pointer scan but shows deque utility",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Use a deque to store normalized characters in order.",
              details: [
                "Preprocess string: lowercase + filter alphanumerics",
                "Push characters to deque (or build array then treat as deque)",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Repeatedly pop from front and rear, comparing characters.",
              details: [
                "While deque length > 1:",
                "  • left = deque.shift(), right = deque.pop()",
                "  • If left !== right → not palindrome",
                "Return true when loop completes",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Edge cases: empty string or single char should return true.",
              details: [
                "Two-pointer string indices can replace explicit deque for O(1) space",
                "For streaming scenarios, deque operations highlight symmetric consumption",
              ],
            },
          ],
          pattern: "Two-End Comparison via Deque",
          complexity: {
            time: "O(n)",
            space: "O(n) (O(1) if using direct pointers)",
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
        className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors mb-4"
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

          {activeTab === "solution" && (
        <div className="space-y-4">
          <CodeBlock code={codeData} defaultLanguage="JavaScript" />
          <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-4">
            <p className="text-purple-200">
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
      <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-xl p-6 border border-purple-500/30">
        <h3 className="text-2xl font-bold text-white mb-2">
          🎯 Problem Solving Approach
        </h3>
        <p className="text-gray-300 text-sm">
          Applying the systematic 5-step framework to master this deque problem
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
        <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-4">
          <h4 className="text-lg font-semibold text-blue-200 mb-2">
            🎨 Pattern Identified
          </h4>
          <p className="text-gray-300">{approach.pattern}</p>
        </div>
      )}
    </div>
  );
}
