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
            code={{
              JavaScript: `// Stack Implementation using Array

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
console.log(stack.display()); // "Stack: 10 20"`,
              Java: `import java.util.*;

// Stack Implementation using ArrayList
class Stack {
    private List<Integer> items;
    private int top;
    
    public Stack() {
        this.items = new ArrayList<>();
        this.top = -1;
    }
    
    // Push element to top of stack
    public void push(int element) {
        this.top++;
        if (top < items.size()) {
            items.set(top, element);
        } else {
            items.add(element);
        }
    }
    
    // Pop element from top of stack
    public int pop() {
        if (isEmpty()) {
            throw new RuntimeException("Stack Underflow");
        }
        int element = items.get(top);
        top--;
        return element;
    }
    
    // Peek at top element without removing
    public int peek() {
        if (isEmpty()) {
            throw new RuntimeException("Stack is empty");
        }
        return items.get(top);
    }
    
    // Check if stack is empty
    public boolean isEmpty() {
        return top == -1;
    }
    
    // Get size of stack
    public int size() {
        return top + 1;
    }
    
    // Display stack contents
    public void display() {
        if (isEmpty()) {
            System.out.println("Stack is empty");
            return;
        }
        System.out.print("Stack: ");
        for (int i = 0; i <= top; i++) {
            System.out.print(items.get(i) + " ");
        }
        System.out.println();
    }
    
    public static void main(String[] args) {
        Stack stack = new Stack();
        stack.push(10);
        stack.push(20);
        stack.push(30);
        stack.display(); // "Stack: 10 20 30"
        System.out.println("Peek: " + stack.peek()); // 30
        System.out.println("Pop: " + stack.pop()); // 30
        stack.display(); // "Stack: 10 20"
    }
}`,
            }}
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
        solutions={{
          JavaScript: `// Balanced Parenthesis

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

// Test cases
console.log(isBalanced("()")); // true
console.log(isBalanced("()[]{}")); // true
console.log(isBalanced("(]")); // false
console.log(isBalanced("([)]")); // false
console.log(isBalanced("{[]}")); // true`,
          Java: `import java.util.*;

public class BalancedParenthesis {
    public static boolean isBalanced(String str) {
        Stack<Character> stack = new Stack<>();
        Map<Character, Character> map = new HashMap<>();
        map.put('(', ')');
        map.put('[', ']');
        map.put('{', '}');
        
        for (char c : str.toCharArray()) {
            if (map.containsKey(c)) {
                stack.push(c);
            } else if (map.containsValue(c)) {
                if (stack.isEmpty()) {
                    return false;
                }
                
                char lastOpening = stack.pop();
                if (map.get(lastOpening) != c) {
                    return false;
                }
            }
        }
        
        return stack.isEmpty();
    }
    
    public static void main(String[] args) {
        System.out.println(isBalanced("()")); // true
        System.out.println(isBalanced("()[]{}")); // true
        System.out.println(isBalanced("(]")); // false
        System.out.println(isBalanced("([)]")); // false
        System.out.println(isBalanced("{[]}")); // true
    }
}`,
        }}
        explanation="Use stack to track opening brackets. For each closing bracket, check if it matches the most recent opening bracket. Time: O(n), Space: O(n)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Ensure the string only needs to validate parentheses/brackets/braces.",
              details: [
                "Return true if every opening bracket has a matching closing bracket in order",
                "Return false on mismatch, premature closing, or leftovers",
                "Ignore other characters (if any) or clarify requirements",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Look for LIFO behavior: the last opening bracket must match the next closing one.",
              keywords: [
                "balanced",
                "stack",
                "matching pairs",
                "LIFO",
                "parentheses",
              ],
              details: [
                "This is the classic stack matching pattern",
                "Whenever we see a closing bracket we must compare with the most recent opening",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Use a stack (array/list) to store opening brackets and a map for pairs.",
              details: [
                "Stack push for '(', '[', '{'",
                "Hash/map to map opening → closing (or vice versa) for constant-time checks",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Iterate once through the string while synchronizing opening/closing brackets.",
              details: [
                "For each character:",
                "  • If opening → push to stack",
                "  • If closing → stack must be non-empty and top must match",
                "  • Otherwise return false",
                "At end stack must be empty",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Add early exits and handle edge cases to keep runtime linear.",
              details: [
                "Return false immediately on mismatch or empty stack on closing",
                "Skip non-bracket characters if requirement demands",
                "Space can be reduced if we only store chars (no additional data)",
              ],
            },
          ],
          pattern: "Stack-Based Bracket Matching",
          complexity: {
            time: "O(n)",
            space: "O(n) worst case (all openings)",
          },
        }}
      />

      <ProblemBlock
        title="2. Implement two Stacks in an Array"
        difficulty="Medium"
        description="Implement two stacks using a single array efficiently."
        solutions={{
          JavaScript: `// Implement two Stacks in an Array

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
}

// Test cases
const twoStacks = new TwoStacks(5);
twoStacks.push1(1);
twoStacks.push1(2);
twoStacks.push2(3);
twoStacks.push2(4);
console.log("Pop from stack 1:", twoStacks.pop1()); // 2
console.log("Pop from stack 2:", twoStacks.pop2()); // 4`,
          Java: `public class TwoStacks {
    private int[] arr;
    private int top1;
    private int top2;
    private int size;
    
    public TwoStacks(int size) {
        this.arr = new int[size];
        this.top1 = -1;
        this.top2 = size;
        this.size = size;
    }
    
    // Push to first stack
    public boolean push1(int x) {
        if (top1 < top2 - 1) {
            top1++;
            arr[top1] = x;
            return true;
        } else {
            System.out.println("Stack Overflow");
            return false;
        }
    }
    
    // Push to second stack
    public boolean push2(int x) {
        if (top1 < top2 - 1) {
            top2--;
            arr[top2] = x;
            return true;
        } else {
            System.out.println("Stack Overflow");
            return false;
        }
    }
    
    // Pop from first stack
    public int pop1() {
        if (top1 >= 0) {
            int x = arr[top1];
            top1--;
            return x;
        } else {
            System.out.println("Stack Underflow");
            return -1;
        }
    }
    
    // Pop from second stack
    public int pop2() {
        if (top2 < size) {
            int x = arr[top2];
            top2++;
            return x;
        } else {
            System.out.println("Stack Underflow");
            return -1;
        }
    }
    
    public static void main(String[] args) {
        TwoStacks twoStacks = new TwoStacks(5);
        twoStacks.push1(1);
        twoStacks.push1(2);
        twoStacks.push2(3);
        twoStacks.push2(4);
        System.out.println("Pop from stack 1: " + twoStacks.pop1()); // 2
        System.out.println("Pop from stack 2: " + twoStacks.pop2()); // 4
    }
}`,
        }}
        explanation="Use two pointers: top1 starts from left (-1), top2 starts from right (size). Push towards center, pop away from center. Time: O(1) for all operations, Space: O(n)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Implement two independent stacks inside one array without wasting space.",
              details: [
                "Stack1 grows from index 0 upward, Stack2 from end downward",
                "Need push/pop/peek/isEmpty with O(1) complexity",
                "Overflow occurs when the two stacks meet",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Space-optimization pattern where two stacks share a single buffer.",
              keywords: [
                "two stacks",
                "shared array",
                "double pointer",
                "space optimization",
              ],
              details: [
                "Maintain two tops moving toward each other",
                "Check overlap before every push",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description: "Single array plus two integer indices.",
              details: [
                "top1 initialized to -1",
                "top2 initialized to size",
                "Array stores data of both stacks",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Define push/pop for each stack relative to its pointer.",
              details: [
                "Push1: ++top1 then write value",
                "Push2: --top2 then write value",
                "Pop1: return arr[top1--], Pop2: return arr[top2++]",
                "Overflow when top1 + 1 == top2, underflow when pointer crosses bounds",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Wrap boundary checks and expose helper methods for clarity.",
              details: [
                "Encapsulate overflow/underflow checks in push/pop",
                "Add peek/isEmpty convenience helpers",
                "All operations remain O(1) time and O(1) extra space",
              ],
            },
          ],
          pattern: "Two-Pointer Shared Array Stacks",
          complexity: {
            time: "O(1) per push/pop",
            space: "O(n) array (no extra overhead)",
          },
        }}
      />

      <ProblemBlock
        title="3. Implement K Stacks in an Array"
        difficulty="Hard"
        description="Implement K stacks using a single array efficiently."
        solutions={{
          JavaScript: `// Implement K Stacks in an Array

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
  
  // Push element to stack
  push(item, sn) {
    if (this.free === -1) {
      console.log("Stack Overflow");
      return false;
    }
    
    const i = this.free;
    this.free = this.next[i];
    
    this.arr[i] = item;
    this.next[i] = this.top[sn];
    this.top[sn] = i;
    
    return true;
  }
  
  // Pop element from stack
  pop(sn) {
    if (this.top[sn] === -1) {
      console.log("Stack Underflow");
      return -1;
    }
    
    const i = this.top[sn];
    this.top[sn] = this.next[i];
    
    this.next[i] = this.free;
    this.free = i;
    
    return this.arr[i];
  }
}

// Test cases
const kStacks = new KStacks(3, 10);
kStacks.push(15, 2);
kStacks.push(45, 2);
kStacks.push(17, 1);
console.log("Popped from stack 2:", kStacks.pop(2)); // 45`,
          Java: `public class KStacks {
    private int k; // Number of stacks
    private int n; // Size of array
    private int[] arr; // Array to store elements
    private int[] top; // Top of each stack
    private int[] next; // Next available slot
    private int free; // Index of first free slot
    
    public KStacks(int k, int n) {
        this.k = k;
        this.n = n;
        this.arr = new int[n];
        this.top = new int[k];
        this.next = new int[n];
        this.free = 0;
        
        // Initialize top array
        for (int i = 0; i < k; i++) {
            top[i] = -1;
        }
        
        // Initialize next array
        for (int i = 0; i < n - 1; i++) {
            next[i] = i + 1;
        }
        next[n - 1] = -1; // -1 indicates end of free list
    }
    
    // Push element to stack
    public boolean push(int item, int sn) {
        if (free == -1) {
            System.out.println("Stack Overflow");
            return false;
        }
        
        int i = free;
        free = next[i];
        
        arr[i] = item;
        next[i] = top[sn];
        top[sn] = i;
        
        return true;
    }
    
    // Pop element from stack
    public int pop(int sn) {
        if (top[sn] == -1) {
            System.out.println("Stack Underflow");
            return -1;
        }
        
        int i = top[sn];
        top[sn] = next[i];
        
        next[i] = free;
        free = i;
        
        return arr[i];
    }
    
    public static void main(String[] args) {
        KStacks kStacks = new KStacks(3, 10);
        kStacks.push(15, 2);
        kStacks.push(45, 2);
        kStacks.push(17, 1);
        System.out.println("Popped from stack 2: " + kStacks.pop(2)); // 45
    }
}`,
        }}
        explanation="Use auxiliary arrays: 'top' for each stack's top, 'next' for next available slot, and 'free' for first free slot. Time: O(1) for all operations, Space: O(n)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Store K stacks inside one array with dynamic sharing of unused slots.",
              details: [
                "Each push/pop must be O(1)",
                "When a stack grows, it should take any available free slot",
                "Need to track free slots and each stack's top",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Use a free-list array to manage available indices and a top array per stack.",
              keywords: [
                "k stacks",
                "free list",
                "top array",
                "next array",
                "space efficiency",
              ],
              details: [
                "Maintain arrays: arr[n], top[k], next[n], plus 'free' pointer",
                "next[] acts like linked list for both stack links and free slots",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description: "Arrays and integer pointers only.",
              details: [
                "arr[] stores actual values",
                "top[i] stores index of top element for stack i",
                "next[] used for: next free slot (when index in free list) or previous element (when index belongs to stack)",
                "'free' points to first free index",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Model push/pop using the free list and stack-specific top pointers.",
              details: [
                "Push:",
                "  - If free == -1 → overflow",
                "  - Remove first free slot `i`",
                "  - arr[i] = value; next[i] = top[stackNo]; top[stackNo] = i",
                "Pop:",
                "  - Use top[stackNo] to get index i",
                "  - top[stackNo] = next[i]",
                "  - next[i] = free; free = i (return slot to free list)",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Encapsulate push/pop logic and guard against overflow/underflow.",
              details: [
                "Initialize next[] with 0..n-1 chain to represent free list",
                "Set all top[i] = -1 initially",
                "Complexity remains O(1) amortized per operation",
              ],
            },
          ],
          pattern: "Free-List Based Multi-Stack in Array",
          complexity: {
            time: "O(1) push/pop",
            space: "O(n) array + O(k+n) metadata",
          },
        }}
      />

      <ProblemBlock
        title="4. Stock Span Problem"
        difficulty="Medium"
        description="Calculate the span of stock prices where span is the maximum number of consecutive days for which the price was less than or equal to today's price."
        solutions={{
          JavaScript: `// Stock Span Problem

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

// Test cases
const prices1 = [100, 80, 60, 70, 60, 75, 85];
console.log("Stock span:", stockSpan(prices1)); // [1, 1, 1, 2, 1, 4, 6]`,
          Java: `import java.util.*;

public class StockSpan {
    public static int[] stockSpan(int[] prices) {
        int n = prices.length;
        int[] span = new int[n];
        Stack<Integer> stack = new Stack<>(); // Stack to store indices
        
        // Span of first day is always 1
        span[0] = 1;
        stack.push(0);
        
        for (int i = 1; i < n; i++) {
            // Pop elements from stack while stack is not empty
            // and top of stack is smaller than price[i]
            while (!stack.isEmpty() && prices[stack.peek()] <= prices[i]) {
                stack.pop();
            }
            
            // If stack becomes empty, then price[i] is greater than all previous prices
            // Else price[i] is greater than elements after top of stack
            span[i] = stack.isEmpty() ? i + 1 : i - stack.peek();
            
            // Push this element to stack
            stack.push(i);
        }
        
        return span;
    }
    
    public static void main(String[] args) {
        int[] prices1 = {100, 80, 60, 70, 60, 75, 85};
        int[] span = stockSpan(prices1);
        System.out.println("Stock span: " + Arrays.toString(span)); // [1, 1, 1, 2, 1, 4, 6]
    }
}`,
        }}
        explanation="Use stack to store indices of previous days. For each day, pop days with prices <= current price, then calculate span. Time: O(n), Space: O(n)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "For each price[i], compute number of consecutive previous days with price <= price[i].",
              details: [
                "Span[i] includes current day (at least 1)",
                "Need O(n) overall, not O(n²)",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Monotonic stack pattern storing indices of strictly decreasing prices.",
              keywords: [
                "stock span",
                "monotonic stack",
                "previous greater",
                "indices",
              ],
              details: [
                "When current price >= stack top price, pop until condition breaks",
                "Span = i - previousGreaterIndex (or i + 1 if none)",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Stack of indices (or prices) to maintain decreasing order.",
              details: [
                "Store indices to easily compute distance",
                "Allows O(1) access to previous greater day",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description: "Single pass updating spans via stack pops.",
              details: [
                "Iterate i from 0..n-1:",
                "  - While stack not empty and price[stackTop] <= price[i], pop",
                "  - span[i] = stack empty ? i + 1 : i - stackTop",
                "  - Push i",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description: "Handle empty stack and ensure amortized O(n) pops.",
              details: [
                "Each index pushed once and popped once → linear complexity",
                "Return spans array or print inline",
                "Works for large inputs (10⁵) since operations are O(1) amortized",
              ],
            },
          ],
          pattern: "Monotonic Decreasing Stack (Previous Greater)",
          complexity: {
            time: "O(n)",
            space: "O(n) for stack",
          },
        }}
      />

      <ProblemBlock
        title="5. Previous Greater Element"
        difficulty="Medium"
        description="Find the previous greater element for each element in an array."
        solutions={{
          JavaScript: `// Previous Greater Element

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

// Test cases
const arr1 = [4, 10, 5, 8, 20, 15, 21];
console.log("Previous greater elements:", previousGreater(arr1)); // [-1, -1, 10, 10, -1, 20, -1]`,
          Java: `import java.util.*;

public class PreviousGreater {
    public static int[] previousGreater(int[] arr) {
        int n = arr.length;
        int[] result = new int[n];
        Stack<Integer> stack = new Stack<>();
        
        // Initialize result array
        Arrays.fill(result, -1); // -1 indicates no previous greater element
        
        for (int i = 0; i < n; i++) {
            // Pop elements from stack while stack is not empty
            // and top of stack is smaller than or equal to current element
            while (!stack.isEmpty() && stack.peek() <= arr[i]) {
                stack.pop();
            }
            
            // If stack is not empty, the top element is the previous greater
            if (!stack.isEmpty()) {
                result[i] = stack.peek();
            }
            
            // Push current element to stack
            stack.push(arr[i]);
        }
        
        return result;
    }
    
    public static void main(String[] args) {
        int[] arr1 = {4, 10, 5, 8, 20, 15, 21};
        int[] result = previousGreater(arr1);
        System.out.println("Previous greater elements: " + Arrays.toString(result)); 
        // [-1, -1, 10, 10, -1, 20, -1]
    }
}`,
        }}
        explanation="Use stack to maintain decreasing sequence. For each element, pop smaller elements, then the top is the previous greater element. Time: O(n), Space: O(n)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "For each array element, find the closest greater element to its left.",
              details: [
                "Return -1 if no greater element exists on the left",
                "Need single-pass O(n) solution",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Monotonic stack storing potential previous greater candidates.",
              keywords: [
                "previous greater",
                "monotonic stack",
                "nearest greater to left",
              ],
              details: [
                "Maintain decreasing stack (top always greater than current)",
                "While stack top <= current, pop",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Use stack to store values (or indices) of potential PGEs.",
              details: [
                "Stack size up to n in worst-case increasing input",
                "Indices useful if you need positions; values enough if only value required",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description: "Linear scan updating result from stack top.",
              details: [
                "For each arr[i]:",
                "  - While stack not empty and stackTop <= arr[i], pop",
                "  - Result[i] = stack empty ? -1 : stackTop",
                "  - Push arr[i] (or index) to stack",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Ensure amortized O(n) by pushing/popping each element once.",
              details: [
                "Works for duplicates by deciding strict vs non-strict comparisons",
                "Optionally reuse structure for previous smaller/next greater problems",
              ],
            },
          ],
          pattern: "Monotonic Decreasing Stack (Previous Greater)",
          complexity: {
            time: "O(n)",
            space: "O(n)",
          },
        }}
      />

      <ProblemBlock
        title="6. Next Greater Element"
        difficulty="Medium"
        description="Find the next greater element for each element in an array."
        solutions={{
          JavaScript: `// Next Greater Element

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

// Test cases
const arr1 = [4, 5, 2, 25];
console.log("Next greater elements:", nextGreater(arr1)); // [5, 25, 25, -1]`,
          Java: `import java.util.*;

public class NextGreater {
    public static int[] nextGreater(int[] arr) {
        int n = arr.length;
        int[] result = new int[n];
        Stack<Integer> stack = new Stack<>();
        
        // Initialize result array
        Arrays.fill(result, -1); // -1 indicates no next greater element
        
        for (int i = 0; i < n; i++) {
            // Pop elements from stack while stack is not empty
            // and top of stack is smaller than current element
            while (!stack.isEmpty() && arr[stack.peek()] < arr[i]) {
                int index = stack.pop();
                result[index] = arr[i];
            }
            
            // Push current index to stack
            stack.push(i);
        }
        
        return result;
    }
    
    public static void main(String[] args) {
        int[] arr1 = {4, 5, 2, 25};
        int[] result = nextGreater(arr1);
        System.out.println("Next greater elements: " + Arrays.toString(result)); 
        // [5, 25, 25, -1]
    }
}`,
        }}
        explanation="Use stack to store indices. For each element, pop indices with smaller values and set their next greater element. Time: O(n), Space: O(n)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "For each element, find the first greater element to its right (or -1).",
              details: [
                "Need O(n) time solution",
                "Return array of NGEs with same length",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Another monotonic stack problem, but scanning from left to right and resolving pending elements.",
              keywords: [
                "next greater element",
                "monotonic stack",
                "pending indices",
              ],
              details: [
                "Keep stack of indices whose next greater hasn't been found",
                "When current value > stackTop value, pop and assign current as answer",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Stack storing indices to reference values and fill result array.",
              details: [
                "Indices allow direct writes into result array",
                "Stack stays decreasing by value",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description: "Single left-to-right pass with stack pops.",
              details: [
                "Initialize result array with -1",
                "Iterate i from 0..n-1:",
                "  - While stack not empty and arr[i] > arr[stackTop], set result[stackTop] = arr[i] and pop",
                "  - Push i",
                "Remaining indices keep -1",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Amortized linear time since each index pushed/popped once.",
              details: [
                "For circular versions, iterate twice (not needed here but mention)",
                "Encapsulate logic in helper for reuse (Next Greater to Left, etc.)",
              ],
            },
          ],
          pattern: "Monotonic Decreasing Stack (Next Greater)",
          complexity: {
            time: "O(n)",
            space: "O(n)",
          },
        }}
      />

      <ProblemBlock
        title="7. Largest Rectangular Area in a Histogram"
        difficulty="Hard"
        description="Find the largest rectangular area that can be formed in a histogram."
        solutions={{
          JavaScript: `// Largest Rectangular Area in a Histogram

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

// Test cases
const heights1 = [2, 1, 5, 6, 2, 3];
console.log("Largest rectangular area:", largestRectangleArea(heights1)); // 10`,
          Java: `import java.util.*;

public class LargestRectangleArea {
    public static int largestRectangleArea(int[] heights) {
        int n = heights.length;
        Stack<Integer> stack = new Stack<>();
        int maxArea = 0;
        
        for (int i = 0; i <= n; i++) {
            // Use i == n to process remaining bars in stack
            int h = (i == n) ? 0 : heights[i];
            
            // Pop bars from stack while current bar is shorter
            while (!stack.isEmpty() && heights[stack.peek()] > h) {
                int height = heights[stack.pop()];
                int width = stack.isEmpty() ? i : i - stack.peek() - 1;
                int area = height * width;
                maxArea = Math.max(maxArea, area);
            }
            
            // Push current index to stack
            stack.push(i);
        }
        
        return maxArea;
    }
    
    public static void main(String[] args) {
        int[] heights1 = {2, 1, 5, 6, 2, 3};
        System.out.println("Largest rectangular area: " + largestRectangleArea(heights1)); // 10
    }
}`,
        }}
        explanation="Use stack to store indices of increasing heights. For each bar, pop taller bars and calculate area with popped bar as height. Time: O(n), Space: O(n)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Given histogram heights, find maximum rectangular area under histogram.",
              details: [
                "Rectangle must be contiguous bars",
                "Need O(n) algorithm",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Use monotonic stack to find nearest smaller bar on left/right for each height.",
              keywords: [
                "histogram",
                "largest rectangle",
                "stack",
                "nearest smaller",
              ],
              details: [
                "Maintain indices of increasing heights",
                "When current bar shorter than stack top, pop and compute area",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description: "Stack of indices representing increasing heights.",
              details: [
                "Indices allow width computation (current index - previous smaller index - 1)",
                "Add sentinel zero at end to flush stack",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description: "Single pass with stack-managed pops.",
              details: [
                "Iterate i from 0..n (treat n as height 0):",
                "  - While stack not empty and height[current] < height[stackTop]:",
                "      h = height[stackTop], stack.pop()",
                "      width = stack empty ? i : i - stackTop - 1",
                "      maxArea = max(maxArea, h * width)",
                "  - Push current index",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description: "Handle sentinel logic and avoid off-by-one errors.",
              details: [
                "Append 0 to heights or run loop to n inclusive",
                "Use long/int64 if heights big",
                "Each index pushed/popped at most once → O(n)",
              ],
            },
          ],
          pattern: "Monotonic Stack for Nearest Smaller Elements",
          complexity: {
            time: "O(n)",
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
        solutions={{
          JavaScript: `// Stack with getMin() in O(1) - Using Auxiliary Stack

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
}

// Test cases
const minStack = new MinStack();
minStack.push(3);
minStack.push(5);
minStack.push(2);
minStack.push(1);
console.log("Min:", minStack.getMin()); // 1
console.log("Popped:", minStack.pop()); // 1
console.log("Min:", minStack.getMin()); // 2`,
          Java: `import java.util.*;

public class MinStack {
    private Stack<Integer> stack;
    private Stack<Integer> minStack; // Auxiliary stack to store minimums
    
    public MinStack() {
        this.stack = new Stack<>();
        this.minStack = new Stack<>();
    }
    
    public void push(int val) {
        stack.push(val);
        
        // If minStack is empty or val is smaller than current minimum
        if (minStack.isEmpty() || val <= minStack.peek()) {
            minStack.push(val);
        }
    }
    
    public int pop() {
        if (stack.isEmpty()) {
            throw new RuntimeException("Stack is empty");
        }
        
        int val = stack.pop();
        
        // If popped element is the current minimum, remove it from minStack
        if (val == minStack.peek()) {
            minStack.pop();
        }
        
        return val;
    }
    
    public int top() {
        if (stack.isEmpty()) {
            throw new RuntimeException("Stack is empty");
        }
        return stack.peek();
    }
    
    public int getMin() {
        if (minStack.isEmpty()) {
            throw new RuntimeException("Stack is empty");
        }
        return minStack.peek();
    }
    
    public static void main(String[] args) {
        MinStack minStack = new MinStack();
        minStack.push(3);
        minStack.push(5);
        minStack.push(2);
        minStack.push(1);
        System.out.println("Min: " + minStack.getMin()); // 1
        System.out.println("Popped: " + minStack.pop()); // 1
        System.out.println("Min: " + minStack.getMin()); // 2
    }
}`,
        }}
        explanation="Use auxiliary stack to store minimums. Push to minStack when value <= current minimum. Pop from minStack when popped value equals current minimum. Time: O(1) for all operations, Space: O(n)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Design a stack supporting push/pop/getMin in O(1) time using extra space.",
              details: [
                "Use secondary structure to remember minimums",
                "getMin() should not remove element",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Use two stacks: main stack for values, min stack tracking current minima.",
              keywords: ["min stack", "auxiliary stack", "two stacks"],
              details: [
                "When pushing new value <= current min, also push to min stack",
                "When popping, if popped value equals minStack top, pop both",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description: "Two stacks (arrays) maintained in sync.",
              details: [
                "mainStack for actual values",
                "minStack storing non-decreasing minima",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description: "Define push/pop/getMin using both stacks.",
              details: [
                "push(x): push to main; if minStack empty or x <= minStack.top push to minStack",
                "pop(): pop from main; if popped == minStack.top, pop minStack",
                "getMin(): return minStack.top",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Handle duplicates and empty stack scenarios gracefully.",
              details: [
                "Allow '=' in comparison to correctly track duplicate minima",
                "Ensure getMin throws/returns sentinel on empty stack",
              ],
            },
          ],
          pattern: "Dual Stack Minimum Tracking",
          complexity: {
            time: "O(1) per operation",
            space: "O(n) (stores extra minima)",
          },
        }}
      />

      <ProblemBlock
        title="9. Design a Stack with getMin() in O(1) Space"
        difficulty="Hard"
        description="Design a stack that supports push, pop, top, and retrieving the minimum element in constant time using O(1) extra space."
        solutions={{
          JavaScript: `// Stack with getMin() in O(1) Space - Using Mathematical Approach

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
}

// Test cases
const minStack = new MinStackSpaceOptimized();
minStack.push(3);
minStack.push(5);
minStack.push(2);
minStack.push(1);
console.log("Min:", minStack.getMin()); // 1
console.log("Popped:", minStack.pop()); // 1
console.log("Min:", minStack.getMin()); // 2`,
          Java: `public class MinStackSpaceOptimized {
    private java.util.Stack<Integer> stack;
    private Integer min;
    
    public MinStackSpaceOptimized() {
        this.stack = new java.util.Stack<>();
        this.min = null;
    }
    
    public void push(int val) {
        if (stack.isEmpty()) {
            stack.push(val);
            min = val;
        } else if (val >= min) {
            stack.push(val);
        } else {
            // Store 2*val - min instead of val
            stack.push(2 * val - min);
            min = val;
        }
    }
    
    public int pop() {
        if (stack.isEmpty()) {
            throw new RuntimeException("Stack is empty");
        }
        
        int top = stack.pop();
        
        if (top >= min) {
            return top;
        } else {
            // Retrieve original value and update min
            int originalVal = min;
            min = 2 * min - top;
            return originalVal;
        }
    }
    
    public int top() {
        if (stack.isEmpty()) {
            throw new RuntimeException("Stack is empty");
        }
        
        int top = stack.peek();
        
        if (top >= min) {
            return top;
        } else {
            return min;
        }
    }
    
    public int getMin() {
        if (stack.isEmpty()) {
            throw new RuntimeException("Stack is empty");
        }
        return min;
    }
    
    public static void main(String[] args) {
        MinStackSpaceOptimized minStack = new MinStackSpaceOptimized();
        minStack.push(3);
        minStack.push(5);
        minStack.push(2);
        minStack.push(1);
        System.out.println("Min: " + minStack.getMin()); // 1
        System.out.println("Popped: " + minStack.pop()); // 1
        System.out.println("Min: " + minStack.getMin()); // 2
    }
}`,
        }}
        explanation="Store 2*val - min instead of val when val < min. When popping, if top < min, original value was min and new min = 2*min - top. Time: O(1) for all operations, Space: O(1) extra space."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Same objective as previous problem but without auxiliary stack.",
              details: [
                "Need to track current minimum using arithmetic encoding",
                "Operations must remain O(1) and use O(1) extra space",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Technique: store encoded value when pushing a new minimum to reconstruct old minimum later.",
              keywords: [
                "encoded min",
                "2*val - min",
                "O(1) space",
                "stack tricks",
              ],
              details: [
                "If new value >= min → push normally",
                "If new value < min → push encoded value = 2*val - min, update min = val",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description: "Single stack plus variable currentMin.",
              details: [
                "Stack stores either real values or encoded placeholders",
                "currentMin caches minimum so far",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description: "Define push/pop/getMin using encoded trick.",
              details: [
                "push(x):",
                "  - if stack empty: push x, min=x",
                "  - else if x >= min: push x",
                "  - else push (2*x - min) and update min = x",
                "pop():",
                "  - if top >= min: normal pop",
                "  - else original value = min, new min = 2*min - top, then pop",
                "getMin(): return min",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description: "Handle overflow and negative numbers carefully.",
              details: [
                "Use long integers if values can overflow 32-bit during 2*min - top calculation",
                "Reset min when stack becomes empty",
                "Add helper to peek actual value (encoded entries represent min)",
              ],
            },
          ],
          pattern: "Single Stack Encoded Minimum",
          complexity: {
            time: "O(1) per operation",
            space: "O(1) extra (beyond stack itself)",
          },
        }}
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
        solutions={{
          JavaScript: `// Infix to Prefix (Simple Solution)

function infixToPrefixSimple(infix) {
  // Remove spaces and reverse the string
  const expression = infix.replace(/\\s/g, '');
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
console.log("Prefix:", infixToPrefixSimple(infix1)); // "+A*BC"`,
          Java: `import java.util.*;

public class InfixToPrefix {
    public static String infixToPrefixSimple(String infix) {
        // Remove spaces and reverse the string
        String expression = infix.replaceAll("\\\\s", "");
        String reversed = new StringBuilder(expression).reverse().toString();
        
        Stack<Character> stack = new Stack<>();
        List<Character> result = new ArrayList<>();
        
        // Define precedence
        Map<Character, Integer> precedence = new HashMap<>();
        precedence.put('^', 4);
        precedence.put('*', 3);
        precedence.put('/', 3);
        precedence.put('+', 2);
        precedence.put('-', 2);
        precedence.put('(', 0);
        precedence.put(')', 0);
        
        for (char c : reversed.toCharArray()) {
            if (Character.isLetterOrDigit(c)) {
                // Operand
                result.add(c);
            } else if (c == ')') {
                // Right parenthesis
                stack.push(c);
            } else if (c == '(') {
                // Left parenthesis - pop until ')'
                while (!stack.isEmpty() && stack.peek() != ')') {
                    result.add(stack.pop());
                }
                if (!stack.isEmpty()) {
                    stack.pop(); // Remove ')'
                }
            } else if (precedence.containsKey(c)) {
                // Operator
                while (!stack.isEmpty() && 
                       precedence.getOrDefault(stack.peek(), 0) > precedence.get(c)) {
                    result.add(stack.pop());
                }
                stack.push(c);
            }
        }
        
        // Pop remaining operators
        while (!stack.isEmpty()) {
            result.add(stack.pop());
        }
        
        // Reverse result to get prefix
        Collections.reverse(result);
        StringBuilder prefix = new StringBuilder();
        for (char c : result) {
            prefix.append(c);
        }
        return prefix.toString();
    }
    
    public static void main(String[] args) {
        String infix1 = "A + B * C";
        System.out.println("Prefix: " + infixToPrefixSimple(infix1)); // "+A*BC"
    }
}`,
        }}
        explanation="Reverse infix expression, process right to left, use stack for operators. Reverse result to get prefix. Time: O(n), Space: O(n)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Convert an infix expression (with parentheses and operators) into prefix notation.",
              details: [
                "Assume operands are single/multi-character? (clarify)",
                "Operators include + - * / ^ and parentheses",
                "Preserve operator precedence and associativity",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Standard approach: reverse infix, swap parentheses, use infix→postfix logic, then reverse output.",
              keywords: [
                "infix to prefix",
                "reverse + stack",
                "operator precedence",
                "associativity",
              ],
              details: [
                "Converting to prefix often reuses postfix algorithm with reversed input",
                "Stack stores operators; output built as string/array",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Stacks for operators and string builder/array for result.",
              details: [
                "Operator stack handles precedence/parentheses",
                "Use helper functions precedence(), isOperator()",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description: "Simple method via reversal.",
              details: [
                "Reverse infix string and swap '(' with ')'",
                "Run standard infix→postfix using operator stack",
                "Reverse the resulting postfix string to obtain prefix",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Handle associativity, parentheses, and operand tokens carefully.",
              details: [
                "Watch for right-associative '^' when comparing precedence",
                "Support multi-digit operands by buffering characters",
                "Strip spaces or keep them consistently",
              ],
            },
          ],
          pattern: "Reverse + Infix-to-Postfix Conversion",
          complexity: {
            time: "O(n)",
            space: "O(n)",
          },
        }}
      />

      <ProblemBlock
        title="11. Infix to Prefix (Efficient Solution)"
        difficulty="Hard"
        description="Convert infix expression to prefix notation using an efficient single-pass algorithm."
        solutions={{
          JavaScript: `// Infix to Prefix (Efficient Solution)

function infixToPrefixEfficient(infix) {
  // Remove spaces
  const expression = infix.replace(/\\s/g, '');
  
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

// Test cases
const infix1 = "A + B * C";
console.log("Prefix:", infixToPrefixEfficient(infix1)); // "+A*BC"`,
          Java: `import java.util.*;

public class InfixToPrefixEfficient {
    public static String infixToPrefixEfficient(String infix) {
        // Remove spaces
        String expression = infix.replaceAll("\\\\s", "");
        
        Stack<Character> stack = new Stack<>();
        List<Character> result = new ArrayList<>();
        
        // Define precedence and associativity
        Map<Character, Integer> precedence = new HashMap<>();
        precedence.put('^', 4);
        precedence.put('*', 3);
        precedence.put('/', 3);
        precedence.put('+', 2);
        precedence.put('-', 2);
        
        Map<Character, String> associativity = new HashMap<>();
        associativity.put('^', "right");
        associativity.put('*', "left");
        associativity.put('/', "left");
        associativity.put('+', "left");
        associativity.put('-', "left");
        
        // Process from right to left
        for (int i = expression.length() - 1; i >= 0; i--) {
            char c = expression.charAt(i);
            
            if (Character.isLetterOrDigit(c)) {
                // Operand
                result.add(c);
            } else if (c == ')') {
                // Right parenthesis
                stack.push(c);
            } else if (c == '(') {
                // Left parenthesis - pop until ')'
                while (!stack.isEmpty() && stack.peek() != ')') {
                    result.add(stack.pop());
                }
                if (!stack.isEmpty()) {
                    stack.pop(); // Remove ')'
                }
            } else if (precedence.containsKey(c)) {
                // Operator
                while (!stack.isEmpty() && 
                       stack.peek() != ')' &&
                       ((associativity.get(c).equals("left") && 
                         precedence.getOrDefault(stack.peek(), 0) >= precedence.get(c)) ||
                        (associativity.get(c).equals("right") && 
                         precedence.getOrDefault(stack.peek(), 0) > precedence.get(c)))) {
                    result.add(stack.pop());
                }
                stack.push(c);
            }
        }
        
        // Pop remaining operators
        while (!stack.isEmpty()) {
            result.add(stack.pop());
        }
        
        // Reverse result to get prefix
        Collections.reverse(result);
        StringBuilder prefix = new StringBuilder();
        for (char c : result) {
            prefix.append(c);
        }
        return prefix.toString();
    }
    
    public static void main(String[] args) {
        String infix1 = "A + B * C";
        System.out.println("Prefix: " + infixToPrefixEfficient(infix1)); // "+A*BC"
    }
}`,
        }}
        explanation="Process from right to left, handle associativity correctly. For right-associative operators (^), pop only higher precedence. For left-associative, pop >= precedence. Time: O(n), Space: O(n)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Efficient direct conversion from infix to prefix scanning right-to-left.",
              details: [
                "Avoid double reversal by processing characters from end",
                "Need to handle operator precedence + associativity precisely",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Use operator stack and operand stack (or build string) while scanning backwards.",
              keywords: [
                "infix to prefix",
                "right-to-left scan",
                "operator stack",
                "associativity",
              ],
              details: [
                "When encountering operand, append to output (eventually reverse)",
                "When encountering operator, compare precedence with stack top",
                "Right-associative '^' uses '>' comparison, left-associative uses '>='",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Single operator stack + output builder (array/stack).",
              details: [
                "Stack stores operators/parentheses encountered during backward scan",
                "Output can be appended and reversed at the end",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Direct right-to-left algorithm to avoid two reversals.",
              details: [
                "Scan from end to start:",
                "  - Operand → append to result",
                "  - ')' → push to operator stack",
                "  - '(' → pop until ')' encountered",
                "  - Operator → pop while precedence rules satisfied, then push",
                "Reverse result at end to produce prefix",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Ensure precedence table handles all operators and parentheses correctly.",
              details: [
                "Precedence function + associativity flag reused across conversions",
                "Trim whitespace, support multi-digit operands if needed",
                "Complexity remains linear since each token pushed/popped once",
              ],
            },
          ],
          pattern: "Right-to-Left Infix to Prefix Conversion",
          complexity: {
            time: "O(n)",
            space: "O(n) for stacks/result",
          },
        }}
      />

      <ProblemBlock
        title="12. Evaluation of Prefix"
        difficulty="Medium"
        description="Evaluate a prefix expression using a stack."
        solutions={{
          JavaScript: `// Evaluation of Prefix

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

// Test cases
const prefix1 = "+*23*45";
console.log("Result:", evaluatePrefix(prefix1)); // 26`,
          Java: `import java.util.*;

public class EvaluatePrefix {
    public static int evaluatePrefix(String prefix) {
        Stack<Integer> stack = new Stack<>();
        
        // Process from right to left
        for (int i = prefix.length() - 1; i >= 0; i--) {
            char c = prefix.charAt(i);
            
            if (Character.isDigit(c)) {
                // Operand - push to stack
                stack.push(Character.getNumericValue(c));
            } else if (c == '+' || c == '-' || c == '*' || c == '/' || c == '^') {
                // Operator - pop two operands and evaluate
                if (stack.size() < 2) {
                    throw new RuntimeException("Invalid prefix expression");
                }
                
                int operand1 = stack.pop();
                int operand2 = stack.pop();
                int result;
                
                switch (c) {
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
                        if (operand2 == 0) {
                            throw new RuntimeException("Division by zero");
                        }
                        result = operand1 / operand2;
                        break;
                    case '^':
                        result = (int) Math.pow(operand1, operand2);
                        break;
                    default:
                        throw new RuntimeException("Invalid operator");
                }
                
                stack.push(result);
            }
        }
        
        if (stack.size() != 1) {
            throw new RuntimeException("Invalid prefix expression");
        }
        
        return stack.pop();
    }
    
    public static void main(String[] args) {
        String prefix1 = "+*23*45";
        System.out.println("Result: " + evaluatePrefix(prefix1)); // 26
    }
}`,
        }}
        explanation="Process from right to left. For operands, push to stack. For operators, pop two operands, evaluate, push result. Final stack should have one element. Time: O(n), Space: O(n)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Evaluate prefix expression containing operators and operands.",
              details: [
                "Prefix means operators precede operands (Polish notation)",
                "Need to support +,-,*,/,^ (and optionally multi-digit numbers)",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Classic stack evaluation: read expression from right to left.",
              keywords: [
                "prefix evaluation",
                "stack",
                "reverse traversal",
                "operands",
              ],
              details: [
                "When encountering operand → push value",
                "When encountering operator → pop two values, apply op, push result",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description: "Single stack for intermediate numeric results.",
              details: [
                "Stack holds integers/doubles",
                "Optional helpers for parsing multi-digit numbers",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description: "Right-to-left traversal with stack operations.",
              details: [
                "Iterate i from end to start:",
                "  - If char is operand → parse number and push",
                "  - Else operator → pop op1, op2 (note order), compute, push result",
                "At end stack should contain single result",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Guard against invalid expressions and division by zero.",
              details: [
                "Ensure stack has at least two operands before applying operator",
                "Support whitespace separation or multi-digit tokens",
                "For exponentiation '^', watch precedence/associativity when chaining",
              ],
            },
          ],
          pattern: "Stack-Based Prefix Evaluation",
          complexity: {
            time: "O(n)",
            space: "O(n) (stack of operands)",
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
        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors mb-4"
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
                    ? "text-orange-400 border-b-2 border-orange-400"
                    : "text-gray-400 hover:text-gray-300"
                }`}
              >
                Solution
              </button>
              <button
                onClick={() => setActiveTab("approach")}
                className={`px-4 py-2 font-semibold transition-colors ${
                  activeTab === "approach"
                    ? "text-orange-400 border-b-2 border-orange-400"
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
              <div className="bg-orange-900/30 border border-orange-500/30 rounded-lg p-4">
                <p className="text-orange-200">
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
      <div className="bg-gradient-to-r from-orange-900/30 to-red-900/30 rounded-xl p-6 border border-orange-500/30">
        <h3 className="text-2xl font-bold text-white mb-2">
          🎯 Problem Solving Approach
        </h3>
        <p className="text-gray-300 text-sm">
          Following the systematic 5-step framework to solve this stack problem
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
                      className="px-2 py-1 bg-orange-500/20 text-orange-200 rounded text-xs"
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
