"use client";
import Link from "next/link";
import { useState } from "react";

export default function Stacks() {
  const [activeTab, setActiveTab] = useState("fundamentals");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <header className="border-b border-gray-700 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link
            href="/"
            className="text-orange-400 hover:text-orange-300 mb-2 inline-block"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
            Stacks Mastery
          </h1>
          <p className="text-gray-400 mt-2">
            LIFO Data Structure, Expression Evaluation & Advanced Problems
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
              { id: "expressions", label: "🔤 Expression Evaluation" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 font-semibold whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? "text-orange-400 border-b-2 border-orange-400"
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
        {activeTab === "expressions" && <ExpressionsSection />}
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
          Stack Fundamentals
        </h2>
        <p className="text-gray-300 text-lg mb-6">
          Understanding stacks as LIFO (Last In, First Out) data structures and
          their core operations.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-orange-200 mb-3">
              Key Concepts:
            </h3>
            <ul className="space-y-2 text-orange-100">
              <li>
                • <strong>LIFO:</strong> Last In, First Out principle
              </li>
              <li>
                • <strong>Top:</strong> Only accessible element
              </li>
              <li>
                • <strong>Push:</strong> Add element to top
              </li>
              <li>
                • <strong>Pop:</strong> Remove element from top
              </li>
            </ul>
          </div>

          <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-red-200 mb-3">
              Operations:
            </h3>
            <ul className="space-y-2 text-red-100">
              <li>
                • <strong>push(x):</strong> Add x to top
              </li>
              <li>
                • <strong>pop():</strong> Remove top element
              </li>
              <li>
                • <strong>peek():</strong> View top element
              </li>
              <li>
                • <strong>isEmpty():</strong> Check if empty
              </li>
            </ul>
          </div>
        </div>

        <TheoryBlock title="Stack Implementation in JavaScript">
          <CodeBlock
            code={`// Stack Implementation using Array

class Stack {
  constructor() {
    this.items = [];
    this.top = -1;
  }
  
  // Push element to top of stack
  push(element) {
    this.top++;
    this.items[this.top] = element;
  }
  
  // Pop element from top of stack
  pop() {
    if (this.isEmpty()) {
      return "Stack Underflow";
    }
    const element = this.items[this.top];
    this.top--;
    return element;
  }
  
  // Peek at top element without removing
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.top];
  }
  
  // Check if stack is empty
  isEmpty() {
    return this.top === -1;
  }
  
  // Get size of stack
  size() {
    return this.top + 1;
  }
  
  // Display stack contents
  display() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    let result = "Stack: ";
    for (let i = 0; i <= this.top; i++) {
      result += this.items[i] + " ";
    }
    return result;
  }
}

// Usage example
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.display()); // "Stack: 10 20 30"
console.log(stack.peek()); // 30
console.log(stack.pop()); // 30
console.log(stack.display()); // "Stack: 10 20"`}
          />
        </TheoryBlock>
      </div>

      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Applications of Stacks
        </h2>
        <p className="text-gray-300 mb-6">
          Real-world applications where stacks are commonly used.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-3">
              🔄 Expression Evaluation
            </h3>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>• Infix to Postfix conversion</li>
              <li>• Postfix evaluation</li>
              <li>• Balanced parentheses</li>
            </ul>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-3">
              🎯 Algorithm Problems
            </h3>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>• Stock span problem</li>
              <li>• Next greater element</li>
              <li>• Histogram area</li>
            </ul>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-3">
              💻 System Operations
            </h3>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>• Function call stack</li>
              <li>• Undo operations</li>
              <li>• Browser history</li>
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
          Basic Stack Problems
        </h2>
        <p className="text-gray-300 mb-6">
          Fundamental stack problems including balanced parentheses and multiple
          stack implementations.
        </p>
      </div>

      <ProblemBlock
        title="1. Balanced Parenthesis"
        difficulty="Easy"
        description="Check if a given string of parentheses is balanced using a stack."
        solution={`// Balanced Parenthesis

function isBalanced(str) {
  const stack = [];
  const opening = ['(', '[', '{'];
  const closing = [')', ']', '}'];
  
  for (let char of str) {
    if (opening.includes(char)) {
      stack.push(char);
    } else if (closing.includes(char)) {
      if (stack.length === 0) {
        return false;
      }
      
      const lastOpening = stack.pop();
      const openingIndex = opening.indexOf(lastOpening);
      const closingIndex = closing.indexOf(char);
      
      if (openingIndex !== closingIndex) {
        return false;
      }
    }
  }
  
  return stack.length === 0;
}

// Alternative implementation with map
function isBalancedMap(str) {
  const stack = [];
  const map = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  
  for (let char of str) {
    if (char in map) {
      stack.push(char);
    } else if (Object.values(map).includes(char)) {
      if (stack.length === 0) {
        return false;
      }
      
      const lastOpening = stack.pop();
      if (map[lastOpening] !== char) {
        return false;
      }
    }
  }
  
  return stack.length === 0;
}

// Test cases
console.log(isBalanced("()")); // true
console.log(isBalanced("()[]{}")); // true
console.log(isBalanced("(]")); // false
console.log(isBalanced("([)]")); // false
console.log(isBalanced("{[]}")); // true
console.log(isBalanced("")); // true
console.log(isBalanced("(((")); // false`}
        explanation="Use stack to track opening brackets. For each closing bracket, check if it matches the most recent opening bracket. Time: O(n), Space: O(n)."
      />

      <ProblemBlock
        title="2. Implement two Stacks in an Array"
        difficulty="Medium"
        description="Implement two stacks using a single array efficiently."
        solution={`// Implement two Stacks in an Array

class TwoStacks {
  constructor(size) {
    this.arr = new Array(size);
    this.top1 = -1;
    this.top2 = size;
    this.size = size;
  }
  
  // Push to first stack
  push1(x) {
    if (this.top1 < this.top2 - 1) {
      this.top1++;
      this.arr[this.top1] = x;
      return true;
    } else {
      console.log("Stack Overflow");
      return false;
    }
  }
  
  // Push to second stack
  push2(x) {
    if (this.top1 < this.top2 - 1) {
      this.top2--;
      this.arr[this.top2] = x;
      return true;
    } else {
      console.log("Stack Overflow");
      return false;
    }
  }
  
  // Pop from first stack
  pop1() {
    if (this.top1 >= 0) {
      const x = this.arr[this.top1];
      this.top1--;
      return x;
    } else {
      console.log("Stack Underflow");
      return -1;
    }
  }
  
  // Pop from second stack
  pop2() {
    if (this.top2 < this.size) {
      const x = this.arr[this.top2];
      this.top2++;
      return x;
    } else {
      console.log("Stack Underflow");
      return -1;
    }
  }
  
  // Peek first stack
  peek1() {
    if (this.top1 >= 0) {
      return this.arr[this.top1];
    }
    return -1;
  }
  
  // Peek second stack
  peek2() {
    if (this.top2 < this.size) {
      return this.arr[this.top2];
    }
    return -1;
  }
  
  // Check if first stack is empty
  isEmpty1() {
    return this.top1 === -1;
  }
  
  // Check if second stack is empty
  isEmpty2() {
    return this.top2 === this.size;
  }
  
  // Display both stacks
  display() {
    console.log("Stack 1:", this.arr.slice(0, this.top1 + 1));
    console.log("Stack 2:", this.arr.slice(this.top2));
  }
}

// Test cases
const twoStacks = new TwoStacks(5);

console.log("=== Testing Two Stacks in Array ===");
twoStacks.push1(1);
twoStacks.push1(2);
twoStacks.push2(3);
twoStacks.push2(4);
twoStacks.display();

console.log("Pop from stack 1:", twoStacks.pop1()); // 2
console.log("Pop from stack 2:", twoStacks.pop2()); // 4
twoStacks.display();

console.log("Peek stack 1:", twoStacks.peek1()); // 1
console.log("Peek stack 2:", twoStacks.peek2()); // 3`}
        explanation="Use two pointers: top1 starts from left (-1), top2 starts from right (size). Push towards center, pop away from center. Time: O(1) for all operations, Space: O(n)."
      />

      <ProblemBlock
        title="3. Implement K Stacks in an Array"
        difficulty="Hard"
        description="Implement K stacks using a single array efficiently."
        solution={`// Implement K Stacks in an Array

class KStacks {
  constructor(k, n) {
    this.k = k; // Number of stacks
    this.n = n; // Size of array
    this.arr = new Array(n); // Array to store elements
    this.top = new Array(k).fill(-1); // Top of each stack
    this.next = new Array(n); // Next available slot
    this.free = 0; // Index of first free slot
    
    // Initialize next array
    for (let i = 0; i < n - 1; i++) {
      this.next[i] = i + 1;
    }
    this.next[n - 1] = -1; // -1 indicates end of free list
  }
  
  // Check if stack is full
  isFull() {
    return this.free === -1;
  }
  
  // Check if stack is empty
  isEmpty(sn) {
    return this.top[sn] === -1;
  }
  
  // Push element to stack
  push(item, sn) {
    if (this.isFull()) {
      console.log("Stack Overflow");
      return false;
    }
    
    const i = this.free; // Store index of first free slot
    this.free = this.next[i]; // Update index of free slot
    
    this.arr[i] = item; // Put the item in array
    this.next[i] = this.top[sn]; // Link previous top of stack
    this.top[sn] = i; // Update top of stack
    
    return true;
  }
  
  // Pop element from stack
  pop(sn) {
    if (this.isEmpty(sn)) {
      console.log("Stack Underflow");
      return -1;
    }
    
    const i = this.top[sn]; // Find index of top item
    this.top[sn] = this.next[i]; // Change top to store next of previous top
    
    this.next[i] = this.free; // Attach previous top to beginning of free list
    this.free = i; // Make the index free
    
    return this.arr[i]; // Return previous top item
  }
  
  // Peek at top of stack
  peek(sn) {
    if (this.isEmpty(sn)) {
      console.log("Stack is empty");
      return -1;
    }
    return this.arr[this.top[sn]];
  }
  
  // Display all stacks
  display() {
    for (let i = 0; i < this.k; i++) {
      console.log(\`Stack \${i}:\`, this.getStackElements(i));
    }
  }
  
  // Get elements of a specific stack
  getStackElements(sn) {
    const elements = [];
    let current = this.top[sn];
    
    while (current !== -1) {
      elements.unshift(this.arr[current]);
      current = this.next[current];
    }
    
    return elements;
  }
}

// Test cases
const kStacks = new KStacks(3, 10);

console.log("=== Testing K Stacks in Array ===");
kStacks.push(15, 2);
kStacks.push(45, 2);
kStacks.push(17, 1);
kStacks.push(49, 1);
kStacks.push(39, 1);
kStacks.push(11, 0);
kStacks.push(9, 0);
kStacks.push(7, 0);
kStacks.display();

console.log("Popped element from stack 2:", kStacks.pop(2)); // 45
console.log("Popped element from stack 1:", kStacks.pop(1)); // 39
console.log("Popped element from stack 0:", kStacks.pop(0)); // 7
kStacks.display();`}
        explanation="Use auxiliary arrays: 'top' for each stack's top, 'next' for next available slot, and 'free' for first free slot. Time: O(1) for all operations, Space: O(n)."
      />

      <ProblemBlock
        title="4. Stock Span Problem"
        difficulty="Medium"
        description="Calculate the span of stock prices where span is the maximum number of consecutive days for which the price was less than or equal to today's price."
        solution={`// Stock Span Problem

function stockSpan(prices) {
  const n = prices.length;
  const span = new Array(n);
  const stack = []; // Stack to store indices
  
  // Span of first day is always 1
  span[0] = 1;
  stack.push(0);
  
  for (let i = 1; i < n; i++) {
    // Pop elements from stack while stack is not empty
    // and top of stack is smaller than price[i]
    while (stack.length > 0 && prices[stack[stack.length - 1]] <= prices[i]) {
      stack.pop();
    }
    
    // If stack becomes empty, then price[i] is greater than all previous prices
    // Else price[i] is greater than elements after top of stack
    span[i] = stack.length === 0 ? i + 1 : i - stack[stack.length - 1];
    
    // Push this element to stack
    stack.push(i);
  }
  
  return span;
}

// Alternative implementation with detailed explanation
function stockSpanDetailed(prices) {
  const n = prices.length;
  const span = new Array(n);
  const stack = [];
  
  console.log("Calculating stock span for prices:", prices);
  
  for (let i = 0; i < n; i++) {
    console.log(\`\\nProcessing day \${i} with price \${prices[i]}\`);
    
    // Initialize span as 1 (at least the current day)
    span[i] = 1;
    
    // Pop elements from stack while stack is not empty
    // and top of stack is smaller than or equal to price[i]
    while (stack.length > 0 && prices[stack[stack.length - 1]] <= prices[i]) {
      const poppedIndex = stack.pop();
      console.log(\`Popped index \${poppedIndex} (price: \${prices[poppedIndex]})\`);
    }
    
    // Calculate span
    if (stack.length === 0) {
      span[i] = i + 1; // All previous days
      console.log(\`Stack empty, span = \${i + 1}\`);
    } else {
      span[i] = i - stack[stack.length - 1];
      console.log(\`Top of stack: index \${stack[stack.length - 1]}, span = \${span[i]}\`);
    }
    
    // Push current index to stack
    stack.push(i);
    console.log(\`Pushed index \${i} to stack\`);
    console.log(\`Current span: \${span[i]}\`);
  }
  
  return span;
}

// Test cases
const prices1 = [100, 80, 60, 70, 60, 75, 85];
console.log("Stock prices:", prices1);
console.log("Stock span:", stockSpan(prices1)); // [1, 1, 1, 2, 1, 4, 6]

const prices2 = [10, 4, 5, 90, 120, 80];
console.log("\\nStock prices:", prices2);
console.log("Stock span:", stockSpan(prices2)); // [1, 1, 2, 4, 5, 1]

console.log("\\n=== Detailed Calculation ===");
stockSpanDetailed([100, 80, 60, 70, 60, 75, 85]);`}
        explanation="Use stack to store indices of previous days. For each day, pop days with prices <= current price, then calculate span. Time: O(n), Space: O(n)."
      />

      <ProblemBlock
        title="5. Previous Greater Element"
        difficulty="Medium"
        description="Find the previous greater element for each element in an array."
        solution={`// Previous Greater Element

function previousGreater(arr) {
  const n = arr.length;
  const result = new Array(n);
  const stack = [];
  
  // Initialize result array
  for (let i = 0; i < n; i++) {
    result[i] = -1; // -1 indicates no previous greater element
  }
  
  for (let i = 0; i < n; i++) {
    // Pop elements from stack while stack is not empty
    // and top of stack is smaller than or equal to current element
    while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
      stack.pop();
    }
    
    // If stack is not empty, the top element is the previous greater
    if (stack.length > 0) {
      result[i] = stack[stack.length - 1];
    }
    
    // Push current element to stack
    stack.push(arr[i]);
  }
  
  return result;
}

// Alternative implementation with detailed explanation
function previousGreaterDetailed(arr) {
  const n = arr.length;
  const result = new Array(n).fill(-1);
  const stack = [];
  
  console.log("Finding previous greater elements for:", arr);
  
  for (let i = 0; i < n; i++) {
    console.log(\`\\nProcessing element \${arr[i]} at index \${i}\`);
    console.log("Current stack:", stack);
    
    // Pop elements smaller than or equal to current element
    while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
      const popped = stack.pop();
      console.log(\`Popped \${popped} (smaller than or equal to \${arr[i]})\`);
    }
    
    // Set previous greater element
    if (stack.length > 0) {
      result[i] = stack[stack.length - 1];
      console.log(\`Previous greater element: \${result[i]}\`);
    } else {
      console.log("No previous greater element");
    }
    
    // Push current element
    stack.push(arr[i]);
    console.log(\`Pushed \${arr[i]} to stack\`);
  }
  
  return result;
}

// Test cases
const arr1 = [4, 10, 5, 8, 20, 15, 21];
console.log("Array:", arr1);
console.log("Previous greater elements:", previousGreater(arr1)); // [-1, -1, 10, 10, -1, 20, -1]

const arr2 = [5, 15, 10, 8, 6, 12, 9];
console.log("\\nArray:", arr2);
console.log("Previous greater elements:", previousGreater(arr2)); // [-1, -1, 15, 10, 8, -1, 12]

console.log("\\n=== Detailed Calculation ===");
previousGreaterDetailed([4, 10, 5, 8, 20, 15, 21]);`}
        explanation="Use stack to maintain decreasing sequence. For each element, pop smaller elements, then the top is the previous greater element. Time: O(n), Space: O(n)."
      />

      <ProblemBlock
        title="6. Next Greater Element"
        difficulty="Medium"
        description="Find the next greater element for each element in an array."
        solution={`// Next Greater Element

function nextGreater(arr) {
  const n = arr.length;
  const result = new Array(n);
  const stack = [];
  
  // Initialize result array
  for (let i = 0; i < n; i++) {
    result[i] = -1; // -1 indicates no next greater element
  }
  
  for (let i = 0; i < n; i++) {
    // Pop elements from stack while stack is not empty
    // and top of stack is smaller than current element
    while (stack.length > 0 && arr[stack[stack.length - 1]] < arr[i]) {
      const index = stack.pop();
      result[index] = arr[i];
    }
    
    // Push current index to stack
    stack.push(i);
  }
  
  return result;
}

// Alternative implementation with detailed explanation
function nextGreaterDetailed(arr) {
  const n = arr.length;
  const result = new Array(n).fill(-1);
  const stack = [];
  
  console.log("Finding next greater elements for:", arr);
  
  for (let i = 0; i < n; i++) {
    console.log(\`\\nProcessing element \${arr[i]} at index \${i}\`);
    console.log("Current stack (indices):", stack);
    
    // Pop indices from stack where corresponding elements are smaller
    while (stack.length > 0 && arr[stack[stack.length - 1]] < arr[i]) {
      const index = stack.pop();
      result[index] = arr[i];
      console.log(\`Set next greater for index \${index} (value \${arr[index]}) = \${arr[i]}\`);
    }
    
    // Push current index
    stack.push(i);
    console.log(\`Pushed index \${i} to stack\`);
  }
  
  console.log("\\nFinal result:", result);
  return result;
}

// Test cases
const arr1 = [4, 5, 2, 25];
console.log("Array:", arr1);
console.log("Next greater elements:", nextGreater(arr1)); // [5, 25, 25, -1]

const arr2 = [13, 7, 6, 12];
console.log("\\nArray:", arr2);
console.log("Next greater elements:", nextGreater(arr2)); // [-1, 12, 12, -1]

console.log("\\n=== Detailed Calculation ===");
nextGreaterDetailed([4, 5, 2, 25]);`}
        explanation="Use stack to store indices. For each element, pop indices with smaller values and set their next greater element. Time: O(n), Space: O(n)."
      />

      <ProblemBlock
        title="7. Largest Rectangular Area in a Histogram"
        difficulty="Hard"
        description="Find the largest rectangular area that can be formed in a histogram."
        solution={`// Largest Rectangular Area in a Histogram

function largestRectangleArea(heights) {
  const n = heights.length;
  const stack = [];
  let maxArea = 0;
  
  for (let i = 0; i <= n; i++) {
    // Use i === n to process remaining bars in stack
    const h = i === n ? 0 : heights[i];
    
    // Pop bars from stack while current bar is shorter
    while (stack.length > 0 && heights[stack[stack.length - 1]] > h) {
      const height = heights[stack.pop()];
      const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
      const area = height * width;
      maxArea = Math.max(maxArea, area);
    }
    
    // Push current index to stack
    stack.push(i);
  }
  
  return maxArea;
}

// Alternative implementation with detailed explanation
function largestRectangleAreaDetailed(heights) {
  const n = heights.length;
  const stack = [];
  let maxArea = 0;
  
  console.log("Finding largest rectangular area in histogram:", heights);
  
  for (let i = 0; i <= n; i++) {
    const h = i === n ? 0 : heights[i];
    console.log(\`\\nProcessing bar at index \${i} with height \${h}\`);
    console.log("Current stack (indices):", stack);
    
    // Pop bars from stack while current bar is shorter
    while (stack.length > 0 && heights[stack[stack.length - 1]] > h) {
      const poppedIndex = stack.pop();
      const height = heights[poppedIndex];
      const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
      const area = height * width;
      
      console.log(\`Popped bar at index \${poppedIndex} with height \${height}\`);
      console.log(\`Width: \${width}, Area: \${area}\`);
      
      maxArea = Math.max(maxArea, area);
      console.log(\`Max area so far: \${maxArea}\`);
    }
    
    // Push current index to stack
    if (i < n) {
      stack.push(i);
      console.log(\`Pushed index \${i} to stack\`);
    }
  }
  
  console.log(\`\\nFinal maximum area: \${maxArea}\`);
  return maxArea;
}

// Test cases
const heights1 = [2, 1, 5, 6, 2, 3];
console.log("Histogram heights:", heights1);
console.log("Largest rectangular area:", largestRectangleArea(heights1)); // 10

const heights2 = [6, 2, 5, 4, 5, 1, 6];
console.log("\\nHistogram heights:", heights2);
console.log("Largest rectangular area:", largestRectangleArea(heights2)); // 12

console.log("\\n=== Detailed Calculation ===");
largestRectangleAreaDetailed([2, 1, 5, 6, 2, 3]);`}
        explanation="Use stack to store indices of increasing heights. For each bar, pop taller bars and calculate area with popped bar as height. Time: O(n), Space: O(n)."
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
          Advanced Stack Problems
        </h2>
        <p className="text-gray-300 mb-6">
          Advanced stack problems including O(1) minimum operations and space
          optimization.
        </p>
      </div>

      <ProblemBlock
        title="8. Stack with getMin() in O(1)"
        difficulty="Medium"
        description="Design a stack that supports push, pop, top, and retrieving the minimum element in constant time."
        solution={`// Stack with getMin() in O(1) - Using Auxiliary Stack

class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = []; // Auxiliary stack to store minimums
  }
  
  push(val) {
    this.stack.push(val);
    
    // If minStack is empty or val is smaller than current minimum
    if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
      this.minStack.push(val);
    }
  }
  
  pop() {
    if (this.stack.length === 0) {
      return "Stack is empty";
    }
    
    const val = this.stack.pop();
    
    // If popped element is the current minimum, remove it from minStack
    if (val === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
    
    return val;
  }
  
  top() {
    if (this.stack.length === 0) {
      return "Stack is empty";
    }
    return this.stack[this.stack.length - 1];
  }
  
  getMin() {
    if (this.minStack.length === 0) {
      return "Stack is empty";
    }
    return this.minStack[this.minStack.length - 1];
  }
  
  isEmpty() {
    return this.stack.length === 0;
  }
  
  size() {
    return this.stack.length;
  }
  
  display() {
    console.log("Stack:", this.stack);
    console.log("Min stack:", this.minStack);
    console.log("Current minimum:", this.getMin());
  }
}

// Test cases
const minStack = new MinStack();

console.log("=== Testing MinStack with Auxiliary Stack ===");
minStack.push(3);
minStack.push(5);
minStack.push(2);
minStack.push(1);
minStack.display(); // Min: 1

console.log("\\nPopped:", minStack.pop()); // 1
minStack.display(); // Min: 2

console.log("\\nPopped:", minStack.pop()); // 2
minStack.display(); // Min: 3

console.log("\\nPopped:", minStack.pop()); // 5
minStack.display(); // Min: 3`}
        explanation="Use auxiliary stack to store minimums. Push to minStack when value <= current minimum. Pop from minStack when popped value equals current minimum. Time: O(1) for all operations, Space: O(n)."
      />

      <ProblemBlock
        title="9. Design a Stack with getMin() in O(1) Space"
        difficulty="Hard"
        description="Design a stack that supports push, pop, top, and retrieving the minimum element in constant time using O(1) extra space."
        solution={`// Stack with getMin() in O(1) Space - Using Mathematical Approach

class MinStackSpaceOptimized {
  constructor() {
    this.stack = [];
    this.min = null;
  }
  
  push(val) {
    if (this.stack.length === 0) {
      this.stack.push(val);
      this.min = val;
    } else if (val >= this.min) {
      this.stack.push(val);
    } else {
      // Store 2*val - min instead of val
      this.stack.push(2 * val - this.min);
      this.min = val;
    }
  }
  
  pop() {
    if (this.stack.length === 0) {
      return "Stack is empty";
    }
    
    const top = this.stack.pop();
    
    if (top >= this.min) {
      return top;
    } else {
      // Retrieve original value and update min
      const originalVal = this.min;
      this.min = 2 * this.min - top;
      return originalVal;
    }
  }
  
  top() {
    if (this.stack.length === 0) {
      return "Stack is empty";
    }
    
    const top = this.stack[this.stack.length - 1];
    
    if (top >= this.min) {
      return top;
    } else {
      return this.min;
    }
  }
  
  getMin() {
    if (this.stack.length === 0) {
      return "Stack is empty";
    }
    return this.min;
  }
  
  isEmpty() {
    return this.stack.length === 0;
  }
  
  size() {
    return this.stack.length;
  }
  
  display() {
    console.log("Stack:", this.stack);
    console.log("Current minimum:", this.getMin());
    console.log("Top element:", this.top());
  }
}

// Alternative implementation with detailed explanation
class MinStackDetailed {
  constructor() {
    this.stack = [];
    this.min = null;
  }
  
  push(val) {
    console.log(\`\\nPushing \${val}\`);
    
    if (this.stack.length === 0) {
      console.log("First element, setting as minimum");
      this.stack.push(val);
      this.min = val;
    } else if (val >= this.min) {
      console.log(\`\${val} >= current min (\${this.min}), pushing directly\`);
      this.stack.push(val);
    } else {
      console.log(\`\${val} < current min (\${this.min}), storing 2*val - min = \${2 * val - this.min}\`);
      this.stack.push(2 * val - this.min);
      this.min = val;
    }
    
    this.display();
  }
  
  pop() {
    if (this.stack.length === 0) {
      return "Stack is empty";
    }
    
    const top = this.stack.pop();
    console.log(\`\\nPopping. Top element: \${top}\`);
    
    if (top >= this.min) {
      console.log(\`\${top} >= current min (\${this.min}), returning \${top}\`);
      return top;
    } else {
      const originalVal = this.min;
      this.min = 2 * this.min - top;
      console.log(\`\${top} < current min, original value was \${originalVal}\`);
      console.log(\`New min: \${this.min}\`);
      return originalVal;
    }
  }
  
  getMin() {
    return this.min;
  }
  
  display() {
    console.log("Stack:", this.stack);
    console.log("Min:", this.min);
  }
}

// Test cases
const minStack = new MinStackSpaceOptimized();

console.log("=== Testing MinStack with O(1) Space ===");
minStack.push(3);
minStack.push(5);
minStack.push(2);
minStack.push(1);
minStack.display();

console.log("\\nPopped:", minStack.pop());
minStack.display();

console.log("\\nPopped:", minStack.pop());
minStack.display();

console.log("\\n=== Detailed Example ===");
const detailedStack = new MinStackDetailed();
detailedStack.push(3);
detailedStack.push(5);
detailedStack.push(2);
detailedStack.push(1);
detailedStack.pop();
detailedStack.pop();`}
        explanation="Store 2*val - min instead of val when val < min. When popping, if top < min, original value was min and new min = 2*min - top. Time: O(1) for all operations, Space: O(1) extra space."
      />
    </div>
  );
}

// Expressions Section
function ExpressionsSection() {
  return (
    <div className="space-y-8">
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Expression Evaluation
        </h2>
        <p className="text-gray-300 mb-6">
          Convert infix expressions to prefix and evaluate prefix expressions
          using stacks.
        </p>
      </div>

      <ProblemBlock
        title="10. Infix to Prefix (Simple Solution)"
        difficulty="Medium"
        description="Convert infix expression to prefix notation using a simple two-stack approach."
        solution={`// Infix to Prefix (Simple Solution)

function infixToPrefixSimple(infix) {
  // Remove spaces and reverse the string
  const expression = infix.replace(/\s/g, '');
  const reversed = expression.split('').reverse().join('');
  
  const stack = [];
  const result = [];
  
  // Define precedence
  const precedence = {
    '^': 4,
    '*': 3,
    '/': 3,
    '+': 2,
    '-': 2,
    '(': 0,
    ')': 0
  };
  
  for (let char of reversed) {
    if (char.match(/[a-zA-Z0-9]/)) {
      // Operand
      result.push(char);
    } else if (char === ')') {
      // Right parenthesis
      stack.push(char);
    } else if (char === '(') {
      // Left parenthesis - pop until ')'
      while (stack.length > 0 && stack[stack.length - 1] !== ')') {
        result.push(stack.pop());
      }
      stack.pop(); // Remove ')'
    } else if (precedence[char]) {
      // Operator
      while (stack.length > 0 && 
             precedence[stack[stack.length - 1]] > precedence[char]) {
        result.push(stack.pop());
      }
      stack.push(char);
    }
  }
  
  // Pop remaining operators
  while (stack.length > 0) {
    result.push(stack.pop());
  }
  
  // Reverse result to get prefix
  return result.reverse().join('');
}

// Test cases
const infix1 = "A + B * C";
console.log("Infix:", infix1);
console.log("Prefix:", infixToPrefixSimple(infix1)); // "+A*BC"

const infix2 = "(A + B) * C";
console.log("\\nInfix:", infix2);
console.log("Prefix:", infixToPrefixSimple(infix2)); // "*+ABC"

const infix3 = "A + B * C - D / E";
console.log("\\nInfix:", infix3);
console.log("Prefix:", infixToPrefixSimple(infix3)); // "-+A*BC/DE"`}
        explanation="Reverse infix expression, process right to left, use stack for operators. Reverse result to get prefix. Time: O(n), Space: O(n)."
      />

      <ProblemBlock
        title="11. Infix to Prefix (Efficient Solution)"
        difficulty="Hard"
        description="Convert infix expression to prefix notation using an efficient single-pass algorithm."
        solution={`// Infix to Prefix (Efficient Solution)

function infixToPrefixEfficient(infix) {
  // Remove spaces
  const expression = infix.replace(/\s/g, '');
  
  const stack = [];
  const result = [];
  
  // Define precedence and associativity
  const precedence = {
    '^': 4,
    '*': 3,
    '/': 3,
    '+': 2,
    '-': 2
  };
  
  const associativity = {
    '^': 'right',
    '*': 'left',
    '/': 'left',
    '+': 'left',
    '-': 'left'
  };
  
  // Process from right to left
  for (let i = expression.length - 1; i >= 0; i--) {
    const char = expression[i];
    
    if (char.match(/[a-zA-Z0-9]/)) {
      // Operand
      result.push(char);
    } else if (char === ')') {
      // Right parenthesis
      stack.push(char);
    } else if (char === '(') {
      // Left parenthesis - pop until ')'
      while (stack.length > 0 && stack[stack.length - 1] !== ')') {
        result.push(stack.pop());
      }
      if (stack.length > 0) {
        stack.pop(); // Remove ')'
      }
    } else if (precedence[char]) {
      // Operator
      while (stack.length > 0 && 
             stack[stack.length - 1] !== ')' &&
             ((associativity[char] === 'left' && 
               precedence[stack[stack.length - 1]] >= precedence[char]) ||
              (associativity[char] === 'right' && 
               precedence[stack[stack.length - 1]] > precedence[char]))) {
        result.push(stack.pop());
      }
      stack.push(char);
    }
  }
  
  // Pop remaining operators
  while (stack.length > 0) {
    result.push(stack.pop());
  }
  
  // Reverse result to get prefix
  return result.reverse().join('');
}

// Alternative implementation with detailed steps
function infixToPrefixDetailed(infix) {
  console.log("Converting infix to prefix:", infix);
  
  const expression = infix.replace(/\s/g, '');
  const stack = [];
  const result = [];
  
  const precedence = {
    '^': 4,
    '*': 3,
    '/': 3,
    '+': 2,
    '-': 2
  };
  
  console.log("Processing from right to left...");
  
  for (let i = expression.length - 1; i >= 0; i--) {
    const char = expression[i];
    console.log(\`\\nProcessing character '\${char}' at position \${i}\`);
    
    if (char.match(/[a-zA-Z0-9]/)) {
      console.log("Operand - adding to result");
      result.push(char);
    } else if (char === ')') {
      console.log("Right parenthesis - pushing to stack");
      stack.push(char);
    } else if (char === '(') {
      console.log("Left parenthesis - popping until right parenthesis");
      while (stack.length > 0 && stack[stack.length - 1] !== ')') {
        const popped = stack.pop();
        console.log(\`Popped operator: \${popped}\`);
        result.push(popped);
      }
      if (stack.length > 0) {
        stack.pop(); // Remove ')'
        console.log("Removed right parenthesis from stack");
      }
    } else if (precedence[char]) {
      console.log(\`Operator \${char} with precedence \${precedence[char]}\`);
      
      while (stack.length > 0 && 
             stack[stack.length - 1] !== ')' &&
             precedence[stack[stack.length - 1]] >= precedence[char]) {
        const popped = stack.pop();
        console.log(\`Popped operator \${popped} (precedence: \${precedence[popped]})\`);
        result.push(popped);
      }
      
      console.log(\`Pushing operator \${char} to stack\`);
      stack.push(char);
    }
    
    console.log("Current stack:", stack);
    console.log("Current result:", result);
  }
  
  console.log("\\nPopping remaining operators from stack");
  while (stack.length > 0) {
    const popped = stack.pop();
    console.log(\`Popped: \${popped}\`);
    result.push(popped);
  }
  
  const prefix = result.reverse().join('');
  console.log(\`\\nFinal prefix expression: \${prefix}\`);
  return prefix;
}

// Test cases
const infix1 = "A + B * C";
console.log("=== Testing Infix to Prefix (Efficient) ===");
console.log("Infix:", infix1);
console.log("Prefix:", infixToPrefixEfficient(infix1));

const infix2 = "(A + B) * C";
console.log("\\nInfix:", infix2);
console.log("Prefix:", infixToPrefixEfficient(infix2));

const infix3 = "A ^ B ^ C";
console.log("\\nInfix:", infix3);
console.log("Prefix:", infixToPrefixEfficient(infix3));

console.log("\\n=== Detailed Example ===");
infixToPrefixDetailed("A + B * C");`}
        explanation="Process from right to left, handle associativity correctly. For right-associative operators (^), pop only higher precedence. For left-associative, pop >= precedence. Time: O(n), Space: O(n)."
      />

      <ProblemBlock
        title="12. Evaluation of Prefix"
        difficulty="Medium"
        description="Evaluate a prefix expression using a stack."
        solution={`// Evaluation of Prefix

function evaluatePrefix(prefix) {
  const stack = [];
  
  // Process from right to left
  for (let i = prefix.length - 1; i >= 0; i--) {
    const char = prefix[i];
    
    if (char.match(/[0-9]/)) {
      // Operand - push to stack
      stack.push(parseInt(char));
    } else if (['+', '-', '*', '/', '^'].includes(char)) {
      // Operator - pop two operands and evaluate
      if (stack.length < 2) {
        throw new Error("Invalid prefix expression");
      }
      
      const operand1 = stack.pop();
      const operand2 = stack.pop();
      let result;
      
      switch (char) {
        case '+':
          result = operand1 + operand2;
          break;
        case '-':
          result = operand1 - operand2;
          break;
        case '*':
          result = operand1 * operand2;
          break;
        case '/':
          if (operand2 === 0) {
            throw new Error("Division by zero");
          }
          result = Math.floor(operand1 / operand2);
          break;
        case '^':
          result = Math.pow(operand1, operand2);
          break;
      }
      
      stack.push(result);
    }
  }
  
  if (stack.length !== 1) {
    throw new Error("Invalid prefix expression");
  }
  
  return stack[0];
}

// Alternative implementation with detailed explanation
function evaluatePrefixDetailed(prefix) {
  console.log("Evaluating prefix expression:", prefix);
  
  const stack = [];
  
  console.log("Processing from right to left...");
  
  for (let i = prefix.length - 1; i >= 0; i--) {
    const char = prefix[i];
    console.log(\`\\nProcessing character '\${char}' at position \${i}\`);
    
    if (char.match(/[0-9]/)) {
      console.log("Operand - pushing to stack");
      stack.push(parseInt(char));
    } else if (['+', '-', '*', '/', '^'].includes(char)) {
      console.log(\`Operator \${char} - popping two operands\`);
      
      if (stack.length < 2) {
        throw new Error("Invalid prefix expression - not enough operands");
      }
      
      const operand1 = stack.pop();
      const operand2 = stack.pop();
      console.log(\`Operands: \${operand1}, \${operand2}\`);
      
      let result;
      switch (char) {
        case '+':
          result = operand1 + operand2;
          console.log(\`\${operand1} + \${operand2} = \${result}\`);
          break;
        case '-':
          result = operand1 - operand2;
          console.log(\`\${operand1} - \${operand2} = \${result}\`);
          break;
        case '*':
          result = operand1 * operand2;
          console.log(\`\${operand1} * \${operand2} = \${result}\`);
          break;
        case '/':
          if (operand2 === 0) {
            throw new Error("Division by zero");
          }
          result = Math.floor(operand1 / operand2);
          console.log(\`\${operand1} / \${operand2} = \${result}\`);
          break;
        case '^':
          result = Math.pow(operand1, operand2);
          console.log(\`\${operand1} ^ \${operand2} = \${result}\`);
          break;
      }
      
      console.log(\`Pushing result \${result} to stack\`);
      stack.push(result);
    }
    
    console.log("Current stack:", stack);
  }
  
  if (stack.length !== 1) {
    throw new Error("Invalid prefix expression - final stack should have exactly one element");
  }
  
  console.log(\`\\nFinal result: \${stack[0]}\`);
  return stack[0];
}

// Test cases
const prefix1 = "+*23*45";
console.log("=== Testing Prefix Evaluation ===");
console.log("Prefix:", prefix1);
console.log("Result:", evaluatePrefix(prefix1)); // 26

const prefix2 = "-+*23*45";
console.log("\\nPrefix:", prefix2);
console.log("Result:", evaluatePrefix(prefix2)); // 6

const prefix3 = "^23";
console.log("\\nPrefix:", prefix3);
console.log("Result:", evaluatePrefix(prefix3)); // 8

console.log("\\n=== Detailed Example ===");
evaluatePrefixDetailed("+*23*45");`}
        explanation="Process from right to left. For operands, push to stack. For operators, pop two operands, evaluate, push result. Final stack should have one element. Time: O(n), Space: O(n)."
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
        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors mb-4"
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
          <div className="bg-orange-900/30 border border-orange-500/30 rounded-lg p-4">
            <p className="text-orange-200">
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
