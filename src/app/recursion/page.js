"use client";
import Link from "next/link";
import { useState } from "react";

export default function Recursion() {
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
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">
            Recursion Mastery
          </h1>
          <p className="text-gray-400 mt-2">
            Master the Art of Recursive Thinking
          </p>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-gray-800/50 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-2 overflow-x-auto">
            {[
              { id: "fundamentals", label: "📚 Fundamentals" },
              { id: "patterns", label: "🎯 Common Patterns" },
              { id: "problems", label: "💡 Practice Problems" },
              { id: "backtracking", label: "🔙 Backtracking" },
              { id: "advanced", label: "🚀 Advanced" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 font-semibold whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? "text-green-400 border-b-2 border-green-400"
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
        {activeTab === "patterns" && <PatternsSection />}
        {activeTab === "problems" && <ProblemsSection />}
        {activeTab === "backtracking" && <BacktrackingSection />}
        {activeTab === "advanced" && <AdvancedSection />}
      </main>
    </div>
  );
}

// Fundamentals Section
function FundamentalsSection() {
  return (
    <div className="space-y-8">
      {/* What is Recursion */}
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          What is Recursion?
        </h2>
        <p className="text-gray-300 text-lg mb-4">
          Recursion is a programming technique where a function calls itself to
          solve a problem by breaking it down into smaller, similar subproblems.
        </p>

        <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold text-green-200 mb-3">
            Key Components:
          </h3>
          <ul className="space-y-2 text-green-100">
            <li className="flex items-start gap-3">
              <span>1.</span>
              <span>
                <strong>Base Case:</strong> The stopping condition that prevents
                infinite recursion
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span>2.</span>
              <span>
                <strong>Recursive Case:</strong> The function calling itself
                with a simpler/smaller input
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span>3.</span>
              <span>
                <strong>Progress:</strong> Each recursive call must move towards
                the base case
              </span>
            </li>
          </ul>
        </div>

        <TheoryBlock title="Simple Recursion Example">
          <CodeBlock
            code={`// Classic example: Countdown
function countdown(n) {
  // Base case: stop when n reaches 0
  if (n <= 0) {
    console.log("Done!");
    return;
  }
  
  console.log(n);
  
  // Recursive case: call with smaller value
  countdown(n - 1);
}

countdown(5);
// Output: 5, 4, 3, 2, 1, Done!`}
          />
        </TheoryBlock>
      </div>

      {/* Call Stack Visualization */}
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Understanding the Call Stack
        </h2>
        <p className="text-gray-300 mb-6">
          Every recursive call is added to the call stack. When a base case is
          reached, calls are resolved in reverse order (LIFO - Last In, First
          Out).
        </p>

        <TheoryBlock title="Call Stack Visualization">
          <CodeBlock
            code={`function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

factorial(4);

/* Call Stack Visualization:
 * 
 * Call 1: factorial(4) → waits for factorial(3)
 *   ↓
 * Call 2: factorial(3) → waits for factorial(2)
 *   ↓
 * Call 3: factorial(2) → waits for factorial(1)
 *   ↓
 * Call 4: factorial(1) → returns 1 (BASE CASE!)
 *   ↑
 * Call 3: returns 2 * 1 = 2
 *   ↑
 * Call 2: returns 3 * 2 = 6
 *   ↑
 * Call 1: returns 4 * 6 = 24
 * 
 * Final Result: 24
 */`}
          />
        </TheoryBlock>

        <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6 mt-6">
          <h3 className="text-lg font-semibold text-yellow-400 mb-2">
            ⚠️ Stack Overflow Warning
          </h3>
          <p className="text-gray-300">
            Too many recursive calls without reaching a base case causes{" "}
            <strong>stack overflow</strong>. Each call uses memory on the call
            stack. Space complexity = O(recursion depth).
          </p>
        </div>
      </div>

      {/* Recursion vs Iteration */}
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Recursion vs Iteration
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-400 mb-3">
              ✅ When to Use Recursion
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Tree/graph traversal</li>
              <li>• Divide and conquer problems</li>
              <li>• Backtracking problems</li>
              <li>• Problems with recursive structure</li>
              <li>• Code clarity over performance</li>
            </ul>
          </div>

          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-blue-400 mb-3">
              ✅ When to Use Iteration
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Simple loops (arrays, ranges)</li>
              <li>• Performance critical code</li>
              <li>• Limited stack space</li>
              <li>• Tail-recursive patterns</li>
              <li>• Memory constraints</li>
            </ul>
          </div>
        </div>

        <TheoryBlock title="Same Problem: Both Ways">
          <CodeBlock
            code={`// Factorial - Recursive
function factorialRecursive(n) {
  if (n <= 1) return 1;
  return n * factorialRecursive(n - 1);
}

// Factorial - Iterative
function factorialIterative(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorialRecursive(5));  // 120
console.log(factorialIterative(5));  // 120

// Time: Both O(n)
// Space: Recursive O(n) stack, Iterative O(1)`}
          />
        </TheoryBlock>
      </div>

      {/* Types of Recursion */}
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Types of Recursion
        </h2>

        <TheoryBlock title="1. Direct Recursion">
          <CodeBlock
            code={`// Function calls itself directly
function directRecursion(n) {
  if (n <= 0) return;
  console.log(n);
  directRecursion(n - 1);  // Calls itself
}`}
          />
        </TheoryBlock>

        <TheoryBlock title="2. Indirect Recursion">
          <CodeBlock
            code={`// Functions call each other in a cycle
function functionA(n) {
  if (n <= 0) return;
  console.log("A:", n);
  functionB(n - 1);  // Calls B
}

function functionB(n) {
  if (n <= 0) return;
  console.log("B:", n);
  functionA(n - 1);  // Calls A
}

functionA(5);`}
          />
        </TheoryBlock>

        <TheoryBlock title="3. Tail Recursion">
          <CodeBlock
            code={`// Recursive call is the last operation
function tailRecursiveSum(n, accumulator = 0) {
  if (n <= 0) return accumulator;
  return tailRecursiveSum(n - 1, accumulator + n);  // Last operation
}

console.log(tailRecursiveSum(5));  // 15

// Some compilers optimize tail recursion to iteration (Tail Call Optimization)`}
          />
        </TheoryBlock>

        <TheoryBlock title="4. Tree Recursion (Multiple Recursive Calls)">
          <CodeBlock
            code={`// Function calls itself multiple times
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);  // Two calls!
}

/* Call tree for fibonacci(4):
 *                 fib(4)
 *               /        \\
 *           fib(3)        fib(2)
 *          /     \\        /    \\
 *      fib(2)  fib(1)  fib(1) fib(0)
 *     /    \\
 * fib(1) fib(0)
 */`}
          />
        </TheoryBlock>
      </div>
    </div>
  );
}

// Patterns Section
function PatternsSection() {
  return (
    <div className="space-y-8">
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Common Recursion Patterns
        </h2>

        <TheoryBlock title="Pattern 1: Linear Recursion (Single Call)">
          <CodeBlock
            code={`// Sum of array elements
function sumArray(arr, index = 0) {
  // Base case: reached end of array
  if (index >= arr.length) return 0;
  
  // Current element + sum of rest
  return arr[index] + sumArray(arr, index + 1);
}

console.log(sumArray([1, 2, 3, 4, 5]));  // 15

// Alternative: process from end
function sumArrayReverse(arr) {
  if (arr.length === 0) return 0;
  return arr[0] + sumArrayReverse(arr.slice(1));
}`}
          />
        </TheoryBlock>

        <TheoryBlock title="Pattern 2: Divide and Conquer">
          <CodeBlock
            code={`// Binary Search - Recursive
function binarySearch(arr, target, left = 0, right = arr.length - 1) {
  // Base case: not found
  if (left > right) return -1;
  
  const mid = Math.floor((left + right) / 2);
  
  // Base case: found
  if (arr[mid] === target) return mid;
  
  // Divide: search in one half
  if (arr[mid] > target) {
    return binarySearch(arr, target, left, mid - 1);  // Left half
  } else {
    return binarySearch(arr, target, mid + 1, right);  // Right half
  }
}

console.log(binarySearch([1, 3, 5, 7, 9, 11], 7));  // 3`}
          />
          <ComplexityBadge time="O(log n)" space="O(log n)" />
        </TheoryBlock>

        <TheoryBlock title="Pattern 3: Multiple Recursion (Tree Recursion)">
          <CodeBlock
            code={`// Fibonacci with memoization
function fibonacciMemo(n, memo = {}) {
  if (n <= 1) return n;
  if (memo[n]) return memo[n];
  
  memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
  return memo[n];
}

console.log(fibonacciMemo(50));  // Fast even for large n!

// Without memo: O(2^n) - exponential
// With memo: O(n) - linear`}
          />
        </TheoryBlock>

        <TheoryBlock title="Pattern 4: Helper Function Pattern">
          <CodeBlock
            code={`// Reverse a string using helper function
function reverseString(str) {
  // Main function provides clean interface
  
  function helper(index, result) {
    // Base case
    if (index < 0) return result;
    
    // Add current char and recurse
    return helper(index - 1, result + str[index]);
  }
  
  return helper(str.length - 1, '');
}

console.log(reverseString("hello"));  // "olleh"`}
          />
        </TheoryBlock>

        <TheoryBlock title="Pattern 5: Build Up / Build Down">
          <CodeBlock
            code={`// Print numbers in different orders
function printDown(n) {
  if (n <= 0) return;
  console.log(n);        // Print BEFORE recursive call
  printDown(n - 1);
}

function printUp(n) {
  if (n <= 0) return;
  printUp(n - 1);
  console.log(n);        // Print AFTER recursive call
}

printDown(3);  // 3, 2, 1
printUp(3);    // 1, 2, 3`}
          />
        </TheoryBlock>
      </div>
    </div>
  );
}

// Problems Section
function ProblemsSection() {
  return (
    <div className="space-y-8">
      <ProblemBlock
        title="Problem: Power(x, n)"
        difficulty="Medium"
        description="Calculate x raised to power n. Implement pow(x, n)."
        solution={`// Recursive approach with optimization
function myPow(x, n) {
  // Handle negative exponents
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  
  return powerHelper(x, n);
}

function powerHelper(x, n) {
  // Base cases
  if (n === 0) return 1;
  if (n === 1) return x;
  
  // If n is even: x^n = (x^(n/2))^2
  // If n is odd: x^n = x * x^(n-1)
  
  if (n % 2 === 0) {
    const half = powerHelper(x, n / 2);
    return half * half;  // Square the result
  } else {
    return x * powerHelper(x, n - 1);
  }
}

console.log(myPow(2, 10));   // 1024
console.log(myPow(2, -2));   // 0.25
console.log(myPow(3, 4));    // 81`}
        explanation="Use divide and conquer: For even n, calculate x^(n/2) once and square it. This reduces O(n) to O(log n)."
      />

      <ProblemBlock
        title="Problem: Reverse Linked List (Recursive)"
        difficulty="Medium"
        description="Reverse a singly linked list using recursion."
        solution={`function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

function reverseList(head) {
  // Base cases
  if (head === null || head.next === null) {
    return head;
  }
  
  // Reverse the rest of the list
  const newHead = reverseList(head.next);
  
  // Make next node point back to current
  head.next.next = head;
  head.next = null;  // Current becomes tail
  
  return newHead;
}

// Example: 1 -> 2 -> 3 -> 4 -> 5
// Result:  5 -> 4 -> 3 -> 2 -> 1

/* Visualization:
 * reverseList(1):
 *   reverseList(2):
 *     reverseList(3):
 *       reverseList(4):
 *         reverseList(5): return 5 (base case)
 *       4.next.next = 4 → 5.next = 4
 *       4.next = null
 *       return 5
 *     3.next.next = 3 → 4.next = 3
 *     3.next = null
 *     return 5
 *   2.next.next = 2 → 3.next = 2
 *   2.next = null
 *   return 5
 * 1.next.next = 1 → 2.next = 1
 * 1.next = null
 * return 5
 */`}
        explanation="Recursively reverse the rest, then make the next node point back to current. Each call handles one reversal link."
      />

      <ProblemBlock
        title="Problem: Tower of Hanoi"
        difficulty="Hard"
        description="Move n disks from source rod to destination rod using auxiliary rod. Larger disk cannot be on top of smaller disk."
        solution={`function towerOfHanoi(n, source = 'A', destination = 'C', auxiliary = 'B') {
  // Base case: only one disk
  if (n === 1) {
    console.log(\`Move disk 1 from \${source} to \${destination}\`);
    return 1;  // One move
  }
  
  let moves = 0;
  
  // Step 1: Move n-1 disks from source to auxiliary (using destination)
  moves += towerOfHanoi(n - 1, source, auxiliary, destination);
  
  // Step 2: Move the largest disk from source to destination
  console.log(\`Move disk \${n} from \${source} to \${destination}\`);
  moves += 1;
  
  // Step 3: Move n-1 disks from auxiliary to destination (using source)
  moves += towerOfHanoi(n - 1, auxiliary, destination, source);
  
  return moves;
}

console.log("Total moves:", towerOfHanoi(3));

/* Output for n=3:
Move disk 1 from A to C
Move disk 2 from A to B
Move disk 1 from C to B
Move disk 3 from A to C
Move disk 1 from B to A
Move disk 2 from B to C
Move disk 1 from A to C
Total moves: 7

Formula: 2^n - 1 moves
*/`}
        explanation="Break into 3 steps: 1) Move n-1 disks to auxiliary, 2) Move largest to destination, 3) Move n-1 disks from auxiliary to destination. Classic divide and conquer."
      />

      <ProblemBlock
        title="Problem: Generate Parentheses (LeetCode #22)"
        difficulty="Medium"
        description="Generate all combinations of n pairs of well-formed parentheses."
        solution={`function generateParenthesis(n) {
  const result = [];
  
  function backtrack(current, open, close) {
    // Base case: complete parentheses
    if (current.length === 2 * n) {
      result.push(current);
      return;
    }
    
    // Add opening parenthesis if we can
    if (open < n) {
      backtrack(current + '(', open + 1, close);
    }
    
    // Add closing parenthesis if valid
    if (close < open) {
      backtrack(current + ')', open, close + 1);
    }
  }
  
  backtrack('', 0, 0);
  return result;
}

console.log(generateParenthesis(3));
// ["((()))", "(()())", "(())()", "()(())", "()()()"]

/* Decision Tree for n=2:
 *                    ""
 *                    ↓ (
 *                   "("
 *                 /     \\
 *             ((        ()
 *             ↓         ↓
 *            (()       ()(
 *            ↓         ↓
 *           (())      ()()
 */`}
        explanation="Use backtracking: add '(' if we haven't used all n, add ')' if close < open (maintains validity). Build all valid combinations."
      />

      <ProblemBlock
        title="Problem: Subsets (LeetCode #78)"
        difficulty="Medium"
        description="Generate all possible subsets (power set) of a given array."
        solution={`function subsets(nums) {
  const result = [];
  
  function backtrack(index, current) {
    // Base case: processed all elements
    if (index === nums.length) {
      result.push([...current]);  // Add copy of current subset
      return;
    }
    
    // Choice 1: Don't include current element
    backtrack(index + 1, current);
    
    // Choice 2: Include current element
    current.push(nums[index]);
    backtrack(index + 1, current);
    current.pop();  // Backtrack
  }
  
  backtrack(0, []);
  return result;
}

console.log(subsets([1, 2, 3]));
/* Output:
[
  [],
  [3],
  [2],
  [2, 3],
  [1],
  [1, 3],
  [1, 2],
  [1, 2, 3]
]
*/

/* Decision Tree:
 *                []
 *            /        \\
 *          []          [1]
 *        /   \\       /    \\
 *      []    [2]   [1]   [1,2]
 *     / \\   / \\   / \\   / \\
 *   [] [3][2][2,3][1][1,3][1,2][1,2,3]
 */`}
        explanation="For each element, make two choices: include it or exclude it. Recursively build all combinations."
      />

      <ProblemBlock
        title="Problem: Letter Combinations of Phone Number (LeetCode #17)"
        difficulty="Medium"
        description="Given a digit string, return all possible letter combinations. 2='abc', 3='def', etc."
        solution={`function letterCombinations(digits) {
  if (digits.length === 0) return [];
  
  const digitMap = {
    '2': 'abc', '3': 'def', '4': 'ghi',
    '5': 'jkl', '6': 'mno', '7': 'pqrs',
    '8': 'tuv', '9': 'wxyz'
  };
  
  const result = [];
  
  function backtrack(index, current) {
    // Base case: built complete combination
    if (index === digits.length) {
      result.push(current);
      return;
    }
    
    // Get letters for current digit
    const letters = digitMap[digits[index]];
    
    // Try each letter
    for (let letter of letters) {
      backtrack(index + 1, current + letter);
    }
  }
  
  backtrack(0, '');
  return result;
}

console.log(letterCombinations("23"));
// ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]

console.log(letterCombinations("234"));
// 3 * 3 * 3 = 27 combinations`}
        explanation="For each digit, try all its letters. Use backtracking to build all combinations by recursively processing each position."
      />
    </div>
  );
}

// Backtracking Section
function BacktrackingSection() {
  return (
    <div className="space-y-8">
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">Backtracking</h2>
        <p className="text-gray-300 text-lg mb-6">
          Backtracking is a refined recursion technique where we explore all
          possibilities by making choices, and "backtrack" (undo) bad choices.
        </p>

        <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold text-blue-200 mb-3">
            Backtracking Template:
          </h3>
          <CodeBlock
            code={`function backtrack(state, choices) {
  // Base case: found solution or dead end
  if (isComplete(state)) {
    processResult(state);
    return;
  }
  
  // Try each possible choice
  for (let choice of choices) {
    // Make choice
    state.add(choice);
    
    // Recurse
    backtrack(state, remainingChoices);
    
    // Undo choice (backtrack)
    state.remove(choice);
  }
}`}
          />
        </div>
      </div>

      <ProblemBlock
        title="Problem: Permutations (LeetCode #46)"
        difficulty="Medium"
        description="Generate all possible permutations of an array."
        solution={`function permute(nums) {
  const result = [];
  
  function backtrack(current, remaining) {
    // Base case: no more numbers to add
    if (remaining.length === 0) {
      result.push([...current]);
      return;
    }
    
    // Try each remaining number
    for (let i = 0; i < remaining.length; i++) {
      // Choose
      current.push(remaining[i]);
      
      // Recurse with rest of numbers
      const newRemaining = remaining.slice(0, i).concat(remaining.slice(i + 1));
      backtrack(current, newRemaining);
      
      // Unchoose (backtrack)
      current.pop();
    }
  }
  
  backtrack([], nums);
  return result;
}

console.log(permute([1, 2, 3]));
/* Output:
[
  [1, 2, 3],
  [1, 3, 2],
  [2, 1, 3],
  [2, 3, 1],
  [3, 1, 2],
  [3, 2, 1]
]
*/`}
        explanation="Try each number as first, then recursively permute the rest. Backtrack by removing choice. Total: n! permutations."
      />

      <ProblemBlock
        title="Problem: N-Queens (LeetCode #51)"
        difficulty="Hard"
        description="Place n queens on n×n chessboard such that no two queens attack each other."
        solution={`function solveNQueens(n) {
  const result = [];
  const board = Array(n).fill().map(() => Array(n).fill('.'));
  
  function isValid(row, col) {
    // Check column
    for (let i = 0; i < row; i++) {
      if (board[i][col] === 'Q') return false;
    }
    
    // Check diagonal (top-left)
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === 'Q') return false;
    }
    
    // Check diagonal (top-right)
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (board[i][j] === 'Q') return false;
    }
    
    return true;
  }
  
  function backtrack(row) {
    // Base case: placed all queens
    if (row === n) {
      result.push(board.map(r => r.join('')));
      return;
    }
    
    // Try placing queen in each column
    for (let col = 0; col < n; col++) {
      if (isValid(row, col)) {
        // Place queen
        board[row][col] = 'Q';
        
        // Recurse to next row
        backtrack(row + 1);
        
        // Remove queen (backtrack)
        board[row][col] = '.';
      }
    }
  }
  
  backtrack(0);
  return result;
}

console.log(solveNQueens(4));
/* Output: 2 solutions for 4x4 board
[
  [".Q..",
   "...Q",
   "Q...",
   "..Q."],
   
  ["..Q.",
   "Q...",
   "...Q",
   ".Q.."]
]
*/`}
        explanation="Try placing queen in each column of current row. Check if valid (no conflicts). Backtrack if no valid placement found."
      />

      <ProblemBlock
        title="Problem: Word Search (LeetCode #79)"
        difficulty="Medium"
        description="Given a 2D board and word, find if word exists in grid (can move up/down/left/right)."
        solution={`function exist(board, word) {
  const rows = board.length;
  const cols = board[0].length;
  
  function backtrack(row, col, index) {
    // Base case: found complete word
    if (index === word.length) return true;
    
    // Check bounds
    if (row < 0 || row >= rows || col < 0 || col >= cols) {
      return false;
    }
    
    // Check if current cell matches
    if (board[row][col] !== word[index]) return false;
    
    // Mark as visited
    const temp = board[row][col];
    board[row][col] = '#';
    
    // Explore all 4 directions
    const found = (
      backtrack(row + 1, col, index + 1) ||
      backtrack(row - 1, col, index + 1) ||
      backtrack(row, col + 1, index + 1) ||
      backtrack(row, col - 1, index + 1)
    );
    
    // Unmark (backtrack)
    board[row][col] = temp;
    
    return found;
  }
  
  // Try starting from each cell
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (backtrack(i, j, 0)) return true;
    }
  }
  
  return false;
}

const board = [
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
];

console.log(exist(board, "ABCCED"));  // true
console.log(exist(board, "SEE"));     // true
console.log(exist(board, "ABCB"));    // false`}
        explanation="DFS with backtracking. Mark cells as visited, explore 4 directions, backtrack by unmarking. Try from every cell as starting point."
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
          Advanced Recursion Techniques
        </h2>

        <TheoryBlock title="Memoization (Top-Down DP)">
          <CodeBlock
            code={`// Fibonacci with memoization
const fibMemo = (function() {
  const cache = {};
  
  return function fib(n) {
    if (n <= 1) return n;
    
    if (cache[n]) return cache[n];
    
    cache[n] = fib(n - 1) + fib(n - 2);
    return cache[n];
  };
})();

console.log(fibMemo(100));  // Fast!

// Without memo: O(2^n) exponential
// With memo: O(n) linear`}
          />
        </TheoryBlock>
      </div>

      <ProblemBlock
        title="Problem: Decode Ways (LeetCode #91)"
        difficulty="Medium"
        description="A='1', B='2'..Z='26'. Count ways to decode a digit string."
        solution={`function numDecodings(s) {
  const memo = {};
  
  function decode(index) {
    // Base cases
    if (index === s.length) return 1;
    if (s[index] === '0') return 0;
    
    // Check memo
    if (memo[index] !== undefined) return memo[index];
    
    // Option 1: Decode single digit
    let ways = decode(index + 1);
    
    // Option 2: Decode two digits (if valid)
    if (index + 1 < s.length) {
      const twoDigit = parseInt(s.substring(index, index + 2));
      if (twoDigit <= 26) {
        ways += decode(index + 2);
      }
    }
    
    memo[index] = ways;
    return ways;
  }
  
  return decode(0);
}

console.log(numDecodings("12"));    // 2 ("AB" or "L")
console.log(numDecodings("226"));   // 3 ("BZ", "VF", "BBF")
console.log(numDecodings("06"));    // 0 (invalid)`}
        explanation="At each position, try decoding 1 or 2 digits if valid. Use memoization to avoid recalculating same subproblems. Classic DP problem."
      />

      <ProblemBlock
        title="Problem: Longest Valid Parentheses (LeetCode #32)"
        difficulty="Hard"
        description="Find length of longest valid (well-formed) parentheses substring."
        solution={`function longestValidParentheses(s) {
  let maxLen = 0;
  const memo = new Array(s.length).fill(-1);
  
  function helper(index) {
    if (index >= s.length) return 0;
    if (memo[index] !== -1) return memo[index];
    
    let len = 0;
    
    if (s[index] === '(') {
      let balance = 1;
      let i = index + 1;
      
      while (i < s.length && balance > 0) {
        balance += s[i] === '(' ? 1 : -1;
        i++;
      }
      
      if (balance === 0) {
        len = i - index + helper(i);
      }
    }
    
    memo[index] = len;
    maxLen = Math.max(maxLen, len);
    return len;
  }
  
  for (let i = 0; i < s.length; i++) {
    helper(i);
  }
  
  return maxLen;
}

// Alternative: Stack-based solution
function longestValidParenthesesStack(s) {
  let maxLen = 0;
  const stack = [-1];
  
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i);
    } else {
      stack.pop();
      if (stack.length === 0) {
        stack.push(i);
      } else {
        maxLen = Math.max(maxLen, i - stack[stack.length - 1]);
      }
    }
  }
  
  return maxLen;
}

console.log(longestValidParentheses("(()"));     // 2
console.log(longestValidParentheses(")()())"));  // 4
console.log(longestValidParentheses(""));        // 0`}
        explanation="Track matching parentheses using recursion with memoization or stack. For each '(', find matching ')' and continue recursively."
      />

      <ProblemBlock
        title="Problem: Regular Expression Matching (LeetCode #10)"
        difficulty="Hard"
        description="Implement regex matching with '.' (any char) and '*' (zero or more of preceding element)."
        solution={`function isMatch(s, p) {
  const memo = {};
  
  function dp(i, j) {
    // Create unique key for memoization
    const key = \`\${i},\${j}\`;
    if (memo[key] !== undefined) return memo[key];
    
    // Base case: reached end of pattern
    if (j === p.length) {
      return i === s.length;
    }
    
    // Check if current characters match
    const firstMatch = (
      i < s.length &&
      (s[i] === p[j] || p[j] === '.')
    );
    
    // Handle '*' (zero or more of preceding element)
    if (j + 1 < p.length && p[j + 1] === '*') {
      // Option 1: Use '*' as zero occurrences (skip pattern[j] and '*')
      // Option 2: Use '*' as one or more (match current and continue)
      memo[key] = (
        dp(i, j + 2) ||  // Zero occurrences
        (firstMatch && dp(i + 1, j))  // One or more
      );
    } else {
      // No '*', must match current char and continue
      memo[key] = firstMatch && dp(i + 1, j + 1);
    }
    
    return memo[key];
  }
  
  return dp(0, 0);
}

console.log(isMatch("aa", "a"));       // false
console.log(isMatch("aa", "a*"));      // true
console.log(isMatch("ab", ".*"));      // true
console.log(isMatch("aab", "c*a*b"));  // true

/* Explanation:
 * "c*a*b" matches "aab":
 * c* = zero c's
 * a* = two a's
 * b = one b
 */`}
        explanation="Use recursion with memoization. For '*', try two options: use zero occurrences or match one and continue. Handle '.' as wildcard."
      />
    </div>
  );
}

// Helper Components (same as before)
function TheoryBlock({ title, children }) {
  return (
    <div className="bg-gray-900 rounded-lg p-6 border border-gray-700 mb-6">
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

function ComplexityBadge({ time, space }) {
  return (
    <div className="flex gap-3 mt-3">
      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded text-sm font-semibold">
        Time: {time}
      </span>
      <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded text-sm font-semibold">
        Space: {space}
      </span>
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
    <div className="bg-gray-900 rounded-lg p-6 border border-gray-700 mb-6">
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
        className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors mb-4"
      >
        {showSolution ? "Hide Solution" : "Show Solution"}
      </button>

      {showSolution && (
        <div>
          <div className="bg-gray-950 rounded-lg p-4 overflow-x-auto mb-4">
            <pre className="text-sm text-green-400">
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
