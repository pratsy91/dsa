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
            code={{
              JavaScript: `// Classic example: Countdown
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
// Output: 5, 4, 3, 2, 1, Done!`,
              Java: `public class Countdown {
    // Classic example: Countdown
    public static void countdown(int n) {
        // Base case: stop when n reaches 0
        if (n <= 0) {
            System.out.println("Done!");
            return;
        }
        
        System.out.println(n);
        
        // Recursive case: call with smaller value
        countdown(n - 1);
    }
    
    public static void main(String[] args) {
        countdown(5);
        // Output: 5, 4, 3, 2, 1, Done!
    }
}`,
            }}
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
            code={{
              JavaScript: `function factorial(n) {
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
 */`,
              Java: `public class Factorial {
    public static int factorial(int n) {
        if (n <= 1) return 1;
        return n * factorial(n - 1);
    }
    
    public static void main(String[] args) {
        System.out.println(factorial(4));  // 24
        
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
         */
    }
}`,
            }}
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
            code={{
              JavaScript: `// Factorial - Recursive
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
// Space: Recursive O(n) stack, Iterative O(1)`,
              Java: `public class FactorialComparison {
    // Factorial - Recursive
    public static long factorialRecursive(int n) {
        if (n <= 1) return 1;
        return n * factorialRecursive(n - 1);
    }
    
    // Factorial - Iterative
    public static long factorialIterative(int n) {
        long result = 1;
        for (int i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
    
    public static void main(String[] args) {
        System.out.println(factorialRecursive(5));  // 120
        System.out.println(factorialIterative(5));  // 120
        
        // Time: Both O(n)
        // Space: Recursive O(n) stack, Iterative O(1)
    }
}`,
            }}
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
            code={{
              JavaScript: `// Function calls itself directly
function directRecursion(n) {
  if (n <= 0) return;
  console.log(n);
  directRecursion(n - 1);  // Calls itself
}`,
              Java: `public class DirectRecursion {
    // Function calls itself directly
    public static void directRecursion(int n) {
        if (n <= 0) return;
        System.out.println(n);
        directRecursion(n - 1);  // Calls itself
    }
    
    public static void main(String[] args) {
        directRecursion(5);
    }
}`,
            }}
          />
        </TheoryBlock>

        <TheoryBlock title="2. Indirect Recursion">
          <CodeBlock
            code={{
              JavaScript: `// Functions call each other in a cycle
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

functionA(5);`,
              Java: `public class IndirectRecursion {
    // Functions call each other in a cycle
    public static void functionA(int n) {
        if (n <= 0) return;
        System.out.println("A: " + n);
        functionB(n - 1);  // Calls B
    }
    
    public static void functionB(int n) {
        if (n <= 0) return;
        System.out.println("B: " + n);
        functionA(n - 1);  // Calls A
    }
    
    public static void main(String[] args) {
        functionA(5);
    }
}`,
            }}
          />
        </TheoryBlock>

        <TheoryBlock title="3. Tail Recursion">
          <CodeBlock
            code={{
              JavaScript: `// Recursive call is the last operation
function tailRecursiveSum(n, accumulator = 0) {
  if (n <= 0) return accumulator;
  return tailRecursiveSum(n - 1, accumulator + n);  // Last operation
}

console.log(tailRecursiveSum(5));  // 15

// Some compilers optimize tail recursion to iteration (Tail Call Optimization)`,
              Java: `public class TailRecursion {
    // Recursive call is the last operation
    public static int tailRecursiveSum(int n, int accumulator) {
        if (n <= 0) return accumulator;
        return tailRecursiveSum(n - 1, accumulator + n);  // Last operation
    }
    
    public static int tailRecursiveSum(int n) {
        return tailRecursiveSum(n, 0);
    }
    
    public static void main(String[] args) {
        System.out.println(tailRecursiveSum(5));  // 15
        
        // Note: Java doesn't optimize tail recursion, but the pattern is still useful
    }
}`,
            }}
          />
        </TheoryBlock>

        <TheoryBlock title="4. Tree Recursion (Multiple Recursive Calls)">
          <CodeBlock
            code={{
              JavaScript: `// Function calls itself multiple times
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
 */`,
              Java: `public class TreeRecursion {
    // Function calls itself multiple times
    public static int fibonacci(int n) {
        if (n <= 1) return n;
        return fibonacci(n - 1) + fibonacci(n - 2);  // Two calls!
    }
    
    public static void main(String[] args) {
        System.out.println(fibonacci(4));  // 3
        
        /* Call tree for fibonacci(4):
         *                 fib(4)
         *               /        \\
         *           fib(3)        fib(2)
         *          /     \\        /    \\
         *      fib(2)  fib(1)  fib(1) fib(0)
         *     /    \\
         * fib(1) fib(0)
         */
    }
}`,
            }}
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
            code={{
              JavaScript: `// Sum of array elements
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
}`,
              Java: `public class LinearRecursion {
    // Sum of array elements
    public static int sumArray(int[] arr, int index) {
        // Base case: reached end of array
        if (index >= arr.length) return 0;
        
        // Current element + sum of rest
        return arr[index] + sumArray(arr, index + 1);
    }
    
    public static int sumArray(int[] arr) {
        return sumArray(arr, 0);
    }
    
    // Alternative: process from end
    public static int sumArrayReverse(int[] arr, int start) {
        if (start >= arr.length) return 0;
        return arr[start] + sumArrayReverse(arr, start + 1);
    }
    
    public static void main(String[] args) {
        System.out.println(sumArray(new int[]{1, 2, 3, 4, 5}));  // 15
    }
}`,
            }}
          />
        </TheoryBlock>

        <TheoryBlock title="Pattern 2: Divide and Conquer">
          <CodeBlock
            code={{
              JavaScript: `// Binary Search - Recursive
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

console.log(binarySearch([1, 3, 5, 7, 9, 11], 7));  // 3`,
              Java: `public class DivideAndConquer {
    // Binary Search - Recursive
    public static int binarySearch(int[] arr, int target, int left, int right) {
        // Base case: not found
        if (left > right) return -1;
        
        int mid = left + (right - left) / 2;
        
        // Base case: found
        if (arr[mid] == target) return mid;
        
        // Divide: search in one half
        if (arr[mid] > target) {
            return binarySearch(arr, target, left, mid - 1);  // Left half
        } else {
            return binarySearch(arr, target, mid + 1, right);  // Right half
        }
    }
    
    public static int binarySearch(int[] arr, int target) {
        return binarySearch(arr, target, 0, arr.length - 1);
    }
    
    public static void main(String[] args) {
        System.out.println(binarySearch(new int[]{1, 3, 5, 7, 9, 11}, 7));  // 3
    }
}`,
            }}
          />
          <ComplexityBadge time="O(log n)" space="O(log n)" />
        </TheoryBlock>

        <TheoryBlock title="Pattern 3: Multiple Recursion (Tree Recursion)">
          <CodeBlock
            code={{
              JavaScript: `// Fibonacci with memoization
function fibonacciMemo(n, memo = {}) {
  if (n <= 1) return n;
  if (memo[n]) return memo[n];
  
  memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
  return memo[n];
}

console.log(fibonacciMemo(50));  // Fast even for large n!

// Without memo: O(2^n) - exponential
// With memo: O(n) - linear`,
              Java: `import java.util.HashMap;
import java.util.Map;

public class MultipleRecursion {
    // Fibonacci with memoization
    public static long fibonacciMemo(int n, Map<Integer, Long> memo) {
        if (n <= 1) return n;
        if (memo.containsKey(n)) return memo.get(n);
        
        long result = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
        memo.put(n, result);
        return result;
    }
    
    public static long fibonacciMemo(int n) {
        return fibonacciMemo(n, new HashMap<>());
    }
    
    public static void main(String[] args) {
        System.out.println(fibonacciMemo(50));  // Fast even for large n!
        
        // Without memo: O(2^n) - exponential
        // With memo: O(n) - linear
    }
}`,
            }}
          />
        </TheoryBlock>

        <TheoryBlock title="Pattern 4: Helper Function Pattern">
          <CodeBlock
            code={{
              JavaScript: `// Reverse a string using helper function
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

console.log(reverseString("hello"));  // "olleh"`,
              Java: `public class HelperFunction {
    // Reverse a string using helper function
    public static String reverseString(String str) {
        // Main function provides clean interface
        return helper(str, str.length() - 1, "");
    }
    
    private static String helper(String str, int index, String result) {
        // Base case
        if (index < 0) return result;
        
        // Add current char and recurse
        return helper(str, index - 1, result + str.charAt(index));
    }
    
    public static void main(String[] args) {
        System.out.println(reverseString("hello"));  // "olleh"
    }
}`,
            }}
          />
        </TheoryBlock>

        <TheoryBlock title="Pattern 5: Build Up / Build Down">
          <CodeBlock
            code={{
              JavaScript: `// Print numbers in different orders
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
printUp(3);    // 1, 2, 3`,
              Java: `public class BuildUpDown {
    // Print numbers in different orders
    public static void printDown(int n) {
        if (n <= 0) return;
        System.out.println(n);        // Print BEFORE recursive call
        printDown(n - 1);
    }
    
    public static void printUp(int n) {
        if (n <= 0) return;
        printUp(n - 1);
        System.out.println(n);        // Print AFTER recursive call
    }
    
    public static void main(String[] args) {
        printDown(3);  // 3, 2, 1
        printUp(3);    // 1, 2, 3
    }
}`,
            }}
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
        solutions={{
          JavaScript: `// Recursive approach with optimization
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
console.log(myPow(3, 4));    // 81`,
          Java: `public class Power {
    // Recursive approach with optimization
    public static double myPow(double x, int n) {
        // Handle negative exponents
        if (n < 0) {
            x = 1 / x;
            n = -n;
        }
        
        return powerHelper(x, n);
    }
    
    private static double powerHelper(double x, int n) {
        // Base cases
        if (n == 0) return 1;
        if (n == 1) return x;
        
        // If n is even: x^n = (x^(n/2))^2
        // If n is odd: x^n = x * x^(n-1)
        
        if (n % 2 == 0) {
            double half = powerHelper(x, n / 2);
            return half * half;  // Square the result
        } else {
            return x * powerHelper(x, n - 1);
        }
    }
    
    public static void main(String[] args) {
        System.out.println(myPow(2, 10));   // 1024.0
        System.out.println(myPow(2, -2));   // 0.25
        System.out.println(myPow(3, 4));    // 81.0
    }
}`,
        }}
        explanation="Use divide and conquer: For even n, calculate x^(n/2) once and square it. This reduces O(n) to O(log n)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Calculate x raised to power n. Handle negative exponents. Need efficient recursive solution.",
              details: [
                "Example: 2^10 = 1024",
                "Handle negative: 2^-2 = 1/4",
                "Need O(log n) solution",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Divide and conquer: if n is even, x^n = (x^(n/2))^2. If odd, x^n = x * x^(n-1). Recursively compute smaller powers.",
              keywords: [
                "divide and conquer",
                "binary exponentiation",
                "recursion",
                "optimization",
              ],
              details: [
                "Even: square half power",
                "Odd: multiply by x and recurse",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Recursive function with base cases. Handle negative exponents by converting to positive.",
              details: [
                "Base cases: n=0 → 1, n=1 → x",
                "Helper function for recursion",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "If n < 0, convert: x = 1/x, n = -n. Base: if n==0 return 1, if n==1 return x. If n even: return power(x, n/2)^2. If odd: return x * power(x, n-1).",
              details: [
                "Recursive: O(log n) depth",
                "Each step: O(1) operations",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Time O(log n) - exponential reduction. Space O(log n) for recursion stack. Much better than O(n) naive approach.",
              details: [
                "Optimal recursive solution",
                "Essential for large exponents",
              ],
            },
          ],
          pattern: "Divide and Conquer (Binary Exponentiation)",
          complexity: {
            time: "O(log n)",
            space: "O(log n)",
          },
        }}
      />

      <ProblemBlock
        title="Problem: Reverse Linked List (Recursive)"
        difficulty="Medium"
        description="Reverse a singly linked list using recursion."
        solutions={{
          JavaScript: `function ListNode(val, next = null) {
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
 */`,
          Java: `public class ListNode {
    int val;
    ListNode next;
    
    ListNode() {}
    ListNode(int val) { this.val = val; }
    ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}

public class ReverseLinkedList {
    public ListNode reverseList(ListNode head) {
        // Base cases
        if (head == null || head.next == null) {
            return head;
        }
        
        // Reverse the rest of the list
        ListNode newHead = reverseList(head.next);
        
        // Make next node point back to current
        head.next.next = head;
        head.next = null;  // Current becomes tail
        
        return newHead;
    }
    
    // Example: 1 -> 2 -> 3 -> 4 -> 5
    // Result:  5 -> 4 -> 3 -> 2 -> 1
}`,
        }}
        explanation="Recursively reverse the rest, then make the next node point back to current. Each call handles one reversal link."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Reverse singly linked list using recursion. Each node's next pointer should point to previous node.",
              details: [
                "Example: 1→2→3→null → 3→2→1→null",
                "Must reverse in-place",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recursive reversal: reverse rest of list first, then make next node point to current. Base case: empty list or single node.",
              keywords: [
                "linked list",
                "recursion",
                "reversal",
                "pointer manipulation",
              ],
              details: [
                "Reverse rest first: recursive call",
                "Then reverse current link: pointer update",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Linked list nodes. Recursive function that returns new head of reversed list.",
              details: [
                "Base case: head == null or head.next == null",
                "Return new head from recursion",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Base: if head == null or head.next == null, return head. Recursive: newHead = reverse(head.next). head.next.next = head, head.next = null. Return newHead.",
              details: [
                "Recursive: reverse rest first",
                "Then: reverse current link",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Time O(n) - visit each node once. Space O(n) for recursion stack. Elegant recursive solution.",
              details: [
                "Optimal recursive approach",
                "More elegant than iterative",
              ],
            },
          ],
          pattern: "Recursive Linked List Reversal",
          complexity: {
            time: "O(n)",
            space: "O(n)",
          },
        }}
      />

      <ProblemBlock
        title="Problem: Tower of Hanoi"
        difficulty="Hard"
        description="Move n disks from source rod to destination rod using auxiliary rod. Larger disk cannot be on top of smaller disk."
        solutions={{
          JavaScript: `function towerOfHanoi(n, source = 'A', destination = 'C', auxiliary = 'B') {
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
*/`,
          Java: `public class TowerOfHanoi {
    public static int towerOfHanoi(int n, char source, char destination, char auxiliary) {
        // Base case: only one disk
        if (n == 1) {
            System.out.println("Move disk 1 from " + source + " to " + destination);
            return 1;  // One move
        }
        
        int moves = 0;
        
        // Step 1: Move n-1 disks from source to auxiliary (using destination)
        moves += towerOfHanoi(n - 1, source, auxiliary, destination);
        
        // Step 2: Move the largest disk from source to destination
        System.out.println("Move disk " + n + " from " + source + " to " + destination);
        moves += 1;
        
        // Step 3: Move n-1 disks from auxiliary to destination (using source)
        moves += towerOfHanoi(n - 1, auxiliary, destination, source);
        
        return moves;
    }
    
    public static int towerOfHanoi(int n) {
        return towerOfHanoi(n, 'A', 'C', 'B');
    }
    
    public static void main(String[] args) {
        System.out.println("Total moves: " + towerOfHanoi(3));
        // Formula: 2^n - 1 moves
    }
}`,
        }}
        explanation="Break into 3 steps: 1) Move n-1 disks to auxiliary, 2) Move largest to destination, 3) Move n-1 disks from auxiliary to destination. Classic divide and conquer."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Tower of Hanoi: move n disks from source to destination using auxiliary rod. Rules: move one disk at a time, larger disk cannot be on smaller.",
              details: [
                "Example: 3 disks requires 7 moves",
                "Classic recursive problem",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Divide and conquer: move n-1 disks to auxiliary, move largest to destination, move n-1 disks from auxiliary to destination. Recursively solve subproblems.",
              keywords: [
                "tower of hanoi",
                "divide and conquer",
                "recursion",
                "classic problem",
              ],
              details: ["Break into 3 steps", "Recursive: solve for n-1 disks"],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Recursive function with parameters: n (number of disks), source, destination, auxiliary rods.",
              details: [
                "Base case: n == 1, move directly",
                "Recursive: solve for n-1",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Base: if n == 1, move disk from source to destination. Recursive: hanoi(n-1, source, auxiliary, destination), move disk from source to destination, hanoi(n-1, auxiliary, destination, source).",
              details: [
                "Step 1: move n-1 to auxiliary",
                "Step 2: move largest to destination",
                "Step 3: move n-1 to destination",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Time O(2^n) - exponential (optimal for this problem). Space O(n) for recursion stack. Classic recursive problem demonstrating divide and conquer.",
              details: [
                "Optimal solution for Tower of Hanoi",
                "Demonstrates recursive thinking",
              ],
            },
          ],
          pattern: "Divide and Conquer (Tower of Hanoi)",
          complexity: {
            time: "O(2^n)",
            space: "O(n)",
          },
        }}
      />

      <ProblemBlock
        title="Problem: Generate Parentheses (LeetCode #22)"
        difficulty="Medium"
        description="Generate all combinations of n pairs of well-formed parentheses."
        solutions={{
          JavaScript: `function generateParenthesis(n) {
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
 */`,
          Java: `import java.util.ArrayList;
import java.util.List;

public class GenerateParentheses {
    public List<String> generateParenthesis(int n) {
        List<String> result = new ArrayList<>();
        backtrack(result, "", 0, 0, n);
        return result;
    }
    
    private void backtrack(List<String> result, String current, int open, int close, int n) {
        // Base case: complete parentheses
        if (current.length() == 2 * n) {
            result.add(current);
            return;
        }
        
        // Add opening parenthesis if we can
        if (open < n) {
            backtrack(result, current + "(", open + 1, close, n);
        }
        
        // Add closing parenthesis if valid
        if (close < open) {
            backtrack(result, current + ")", open, close + 1, n);
        }
    }
    
    public static void main(String[] args) {
        GenerateParentheses solver = new GenerateParentheses();
        System.out.println(solver.generateParenthesis(3));
        // ["((()))", "(()())", "(())()", "()(())", "()()()"]
    }
}`,
        }}
        explanation="Use backtracking: add '(' if we haven't used all n, add ')' if close < open (maintains validity). Build all valid combinations."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Generate all valid parentheses combinations with n pairs. Valid: every opening has matching closing, properly nested.",
              details: [
                "Example: n=2 → ['(())','()()']",
                "Must be valid parentheses",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Backtracking: at each step, can add '(' if open < n, or ')' if close < open. Build string recursively, backtrack when complete or invalid.",
              keywords: [
                "backtracking",
                "recursion",
                "parentheses",
                "generation",
              ],
              details: [
                "Two choices at each step: add '(' or ')'",
                "Constraint: close < open for validity",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "String builder to construct current combination. Result array to store valid combinations.",
              details: [
                "String: build current combination",
                "Array: store all results",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Base: if open == n and close == n, add current to result. Recursive: if open < n, add '(', recurse, backtrack. If close < open, add ')', recurse, backtrack.",
              details: [
                "Backtrack: remove last character",
                "Try all valid combinations",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Time O(4^n/√n) - Catalan number. Space O(n) for recursion stack and string. Optimal backtracking solution.",
              details: [
                "Optimal for generating all combinations",
                "Backtracking is key technique",
              ],
            },
          ],
          pattern: "Backtracking (Parentheses Generation)",
          complexity: {
            time: "O(4^n/√n)",
            space: "O(n)",
          },
        }}
      />

      <ProblemBlock
        title="Problem: Subsets (LeetCode #78)"
        difficulty="Medium"
        description="Generate all possible subsets (power set) of a given array."
        solutions={{
          JavaScript: `function subsets(nums) {
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
 */`,
          Java: `import java.util.ArrayList;
import java.util.List;

public class Subsets {
    public List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        backtrack(result, new ArrayList<>(), nums, 0);
        return result;
    }
    
    private void backtrack(List<List<Integer>> result, List<Integer> current, int[] nums, int index) {
        // Base case: processed all elements
        if (index == nums.length) {
            result.add(new ArrayList<>(current));  // Add copy of current subset
            return;
        }
        
        // Choice 1: Don't include current element
        backtrack(result, current, nums, index + 1);
        
        // Choice 2: Include current element
        current.add(nums[index]);
        backtrack(result, current, nums, index + 1);
        current.remove(current.size() - 1);  // Backtrack
    }
    
    public static void main(String[] args) {
        Subsets solver = new Subsets();
        System.out.println(solver.subsets(new int[]{1, 2, 3}));
    }
}`,
        }}
        explanation="For each element, make two choices: include it or exclude it. Recursively build all combinations."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Generate all possible subsets of array. For n elements, there are 2^n subsets (including empty set).",
              details: [
                "Example: [1,2] → [[],[1],[2],[1,2]]",
                "Each element: include or exclude",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Backtracking: for each element, make two choices - include or exclude. Recursively process remaining elements. Build subset incrementally.",
              keywords: ["backtracking", "subsets", "power set", "recursion"],
              details: [
                "Two choices per element",
                "Build subset: include or skip",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "List to build current subset. Result array to store all subsets.",
              details: ["Current subset: list", "All subsets: array of lists"],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Base: if index == n, add current subset to result. Recursive: include nums[index], recurse with index+1, backtrack (remove), skip nums[index], recurse with index+1.",
              details: [
                "Include: add to subset, recurse, backtrack",
                "Exclude: skip, recurse",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Time O(n × 2^n) - generate 2^n subsets, each takes O(n). Space O(n) for recursion stack. Optimal backtracking solution.",
              details: [
                "Optimal for generating all subsets",
                "Backtracking is natural approach",
              ],
            },
          ],
          pattern: "Backtracking (Subsets Generation)",
          complexity: {
            time: "O(n × 2^n)",
            space: "O(n)",
          },
        }}
      />

      <ProblemBlock
        title="Problem: Letter Combinations of Phone Number (LeetCode #17)"
        difficulty="Medium"
        description="Given a digit string, return all possible letter combinations. 2='abc', 3='def', etc."
        solutions={{
          JavaScript: `function letterCombinations(digits) {
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
// 3 * 3 * 3 = 27 combinations`,
          Java: `import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class LetterCombinations {
    public List<String> letterCombinations(String digits) {
        if (digits.length() == 0) return new ArrayList<>();
        
        Map<Character, String> digitMap = new HashMap<>();
        digitMap.put('2', "abc");
        digitMap.put('3', "def");
        digitMap.put('4', "ghi");
        digitMap.put('5', "jkl");
        digitMap.put('6', "mno");
        digitMap.put('7', "pqrs");
        digitMap.put('8', "tuv");
        digitMap.put('9', "wxyz");
        
        List<String> result = new ArrayList<>();
        backtrack(result, digitMap, digits, 0, "");
        return result;
    }
    
    private void backtrack(List<String> result, Map<Character, String> digitMap, 
                          String digits, int index, String current) {
        // Base case: built complete combination
        if (index == digits.length()) {
            result.add(current);
            return;
        }
        
        // Get letters for current digit
        String letters = digitMap.get(digits.charAt(index));
        
        // Try each letter
        for (char letter : letters.toCharArray()) {
            backtrack(result, digitMap, digits, index + 1, current + letter);
        }
    }
    
    public static void main(String[] args) {
        LetterCombinations solver = new LetterCombinations();
        System.out.println(solver.letterCombinations("23"));
        // ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
    }
}`,
        }}
        explanation="For each digit, try all its letters. Use backtracking to build all combinations by recursively processing each position."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Generate all letter combinations from phone number digits. Each digit maps to letters (2→abc, 3→def, etc.).",
              details: [
                "Example: '23' → ['ad','ae','af','bd','be','bf','cd','ce','cf']",
                "Cartesian product of letter sets",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Backtracking: for each digit, try all its letters. Recursively process next digit. Build combination string incrementally.",
              keywords: [
                "backtracking",
                "letter combinations",
                "phone number",
                "recursion",
              ],
              details: [
                "Try all letters for current digit",
                "Recurse for next digit",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Map digits to letters. String builder for current combination. Result array for all combinations.",
              details: [
                "Digit map: 2→'abc', 3→'def', etc.",
                "String: build current combination",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Base: if index == digits.length, add current to result. Recursive: for each letter in map[digits[index]]: add letter, recurse with index+1, backtrack (remove letter).",
              details: [
                "Try all letters: for each digit",
                "Backtrack: remove last letter",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Time O(4^n × n) where n is digits length, 4 is max letters per digit. Space O(n) for recursion stack. Optimal backtracking solution.",
              details: [
                "Optimal for generating combinations",
                "Backtracking handles all cases",
              ],
            },
          ],
          pattern: "Backtracking (Letter Combinations)",
          complexity: {
            time: "O(4^n × n)",
            space: "O(n)",
          },
        }}
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
          possibilities by making choices, and &quot;backtrack&quot; (undo) bad
          choices.
        </p>

        <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold text-blue-200 mb-3">
            Backtracking Template:
          </h3>
          <CodeBlock
            code={{
              JavaScript: `function backtrack(state, choices) {
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
}`,
              Java: `public class BacktrackTemplate {
    public void backtrack(List<Object> state, List<Object> choices) {
        // Base case: found solution or dead end
        if (isComplete(state)) {
            processResult(state);
            return;
        }
        
        // Try each possible choice
        for (Object choice : choices) {
            // Make choice
            state.add(choice);
            
            // Recurse
            backtrack(state, getRemainingChoices(choices, choice));
            
            // Undo choice (backtrack)
            state.remove(state.size() - 1);
        }
    }
    
    private boolean isComplete(List<Object> state) {
        // Implementation
        return false;
    }
    
    private void processResult(List<Object> state) {
        // Implementation
    }
    
    private List<Object> getRemainingChoices(List<Object> choices, Object choice) {
        // Implementation
        return new ArrayList<>();
    }
}`,
            }}
          />
        </div>
      </div>

      <ProblemBlock
        title="Problem: Permutations (LeetCode #46)"
        difficulty="Medium"
        description="Generate all possible permutations of an array."
        solutions={{
          JavaScript: `function permute(nums) {
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
*/`,
          Java: `import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Permutations {
    public List<List<Integer>> permute(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        List<Integer> current = new ArrayList<>();
        List<Integer> remaining = new ArrayList<>();
        for (int num : nums) {
            remaining.add(num);
        }
        backtrack(result, current, remaining);
        return result;
    }
    
    private void backtrack(List<List<Integer>> result, List<Integer> current, List<Integer> remaining) {
        // Base case: no more numbers to add
        if (remaining.isEmpty()) {
            result.add(new ArrayList<>(current));
            return;
        }
        
        // Try each remaining number
        for (int i = 0; i < remaining.size(); i++) {
            // Choose
            int num = remaining.get(i);
            current.add(num);
            remaining.remove(i);
            
            // Recurse
            backtrack(result, current, remaining);
            
            // Unchoose (backtrack)
            current.remove(current.size() - 1);
            remaining.add(i, num);
        }
    }
    
    public static void main(String[] args) {
        Permutations solver = new Permutations();
        System.out.println(solver.permute(new int[]{1, 2, 3}));
    }
}`,
        }}
        explanation="Try each number as first, then recursively permute the rest. Backtrack by removing choice. Total: n! permutations."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Generate all permutations of array. Permutation: arrangement of all elements in different orders.",
              details: [
                "Example: [1,2,3] → [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]",
                "Total: n! permutations",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Backtracking: try each element as first, recursively permute remaining elements. Swap elements to try different positions, backtrack to restore.",
              keywords: [
                "backtracking",
                "permutations",
                "recursion",
                "swapping",
              ],
              details: [
                "Try each element: as first position",
                "Recurse: permute remaining",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Array to store current permutation. Result array for all permutations. Can swap in-place or use visited array.",
              details: [
                "In-place: swap elements",
                "Visited: track used elements",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Base: if index == n, add current permutation to result. Recursive: for i from index to n-1: swap(nums[index], nums[i]), recurse with index+1, backtrack (swap back).",
              details: [
                "Swap: try element at current position",
                "Backtrack: restore original order",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Time O(n! × n) - n! permutations, each takes O(n). Space O(n) for recursion stack. Optimal backtracking solution.",
              details: [
                "Optimal for generating all permutations",
                "Backtracking is natural approach",
              ],
            },
          ],
          pattern: "Backtracking (Permutations)",
          complexity: {
            time: "O(n! × n)",
            space: "O(n)",
          },
        }}
      />

      <ProblemBlock
        title="Problem: N-Queens (LeetCode #51)"
        difficulty="Hard"
        description="Place n queens on n×n chessboard such that no two queens attack each other."
        solutions={{
          JavaScript: `function solveNQueens(n) {
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
*/`,
          Java: `import java.util.ArrayList;
import java.util.List;

public class NQueens {
    public List<List<String>> solveNQueens(int n) {
        List<List<String>> result = new ArrayList<>();
        char[][] board = new char[n][n];
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                board[i][j] = '.';
            }
        }
        backtrack(result, board, 0, n);
        return result;
    }
    
    private boolean isValid(char[][] board, int row, int col, int n) {
        // Check column
        for (int i = 0; i < row; i++) {
            if (board[i][col] == 'Q') return false;
        }
        
        // Check diagonal (top-left)
        for (int i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] == 'Q') return false;
        }
        
        // Check diagonal (top-right)
        for (int i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (board[i][j] == 'Q') return false;
        }
        
        return true;
    }
    
    private void backtrack(List<List<String>> result, char[][] board, int row, int n) {
        // Base case: placed all queens
        if (row == n) {
            List<String> solution = new ArrayList<>();
            for (char[] r : board) {
                solution.add(new String(r));
            }
            result.add(solution);
            return;
        }
        
        // Try placing queen in each column
        for (int col = 0; col < n; col++) {
            if (isValid(board, row, col, n)) {
                // Place queen
                board[row][col] = 'Q';
                
                // Recurse to next row
                backtrack(result, board, row + 1, n);
                
                // Remove queen (backtrack)
                board[row][col] = '.';
            }
        }
    }
    
    public static void main(String[] args) {
        NQueens solver = new NQueens();
        System.out.println(solver.solveNQueens(4));
    }
}`,
        }}
        explanation="Try placing queen in each column of current row. Check if valid (no conflicts). Backtrack if no valid placement found."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Place n queens on n×n chessboard such that no two queens attack each other. Queens attack: same row, column, or diagonal.",
              details: [
                "Example: n=4 → 2 solutions",
                "Classic backtracking problem",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Backtracking: place queen in each column of current row, check if valid (no conflicts with previous queens), recurse for next row, backtrack if no valid placement.",
              keywords: [
                "backtracking",
                "n-queens",
                "recursion",
                "constraint satisfaction",
              ],
              details: [
                "Try each column: for current row",
                "Check validity: no conflicts",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Array to store queen positions (column per row). Helper function to check validity (row, column, diagonal conflicts).",
              details: [
                "Positions: array[row] = column",
                "Validity check: O(n) per placement",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Base: if row == n, add current board to result. Recursive: for col from 0 to n-1: if valid(row, col), place queen, recurse with row+1, backtrack (remove queen).",
              details: [
                "Try each column: for current row",
                "Backtrack: remove invalid placement",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Time O(n!) worst case - try all placements. Space O(n) for recursion stack and positions. Can optimize validity check with sets.",
              details: [
                "Optimal backtracking solution",
                "Classic constraint satisfaction problem",
              ],
            },
          ],
          pattern: "Backtracking (N-Queens)",
          complexity: {
            time: "O(n!)",
            space: "O(n)",
          },
        }}
      />

      <ProblemBlock
        title="Problem: Word Search (LeetCode #79)"
        difficulty="Medium"
        description="Given a 2D board and word, find if word exists in grid (can move up/down/left/right)."
        solutions={{
          JavaScript: `function exist(board, word) {
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
console.log(exist(board, "ABCB"));    // false`,
          Java: `public class WordSearch {
    public boolean exist(char[][] board, String word) {
        int rows = board.length;
        int cols = board[0].length;
        
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                if (backtrack(board, word, i, j, 0, rows, cols)) {
                    return true;
                }
            }
        }
        
        return false;
    }
    
    private boolean backtrack(char[][] board, String word, int row, int col, 
                             int index, int rows, int cols) {
        // Base case: found complete word
        if (index == word.length()) return true;
        
        // Check bounds
        if (row < 0 || row >= rows || col < 0 || col >= cols) {
            return false;
        }
        
        // Check if current cell matches
        if (board[row][col] != word.charAt(index)) return false;
        
        // Mark as visited
        char temp = board[row][col];
        board[row][col] = '#';
        
        // Explore all 4 directions
        boolean found = (
            backtrack(board, word, row + 1, col, index + 1, rows, cols) ||
            backtrack(board, word, row - 1, col, index + 1, rows, cols) ||
            backtrack(board, word, row, col + 1, index + 1, rows, cols) ||
            backtrack(board, word, row, col - 1, index + 1, rows, cols)
        );
        
        // Unmark (backtrack)
        board[row][col] = temp;
        
        return found;
    }
    
    public static void main(String[] args) {
        WordSearch solver = new WordSearch();
        char[][] board = {
            {'A','B','C','E'},
            {'S','F','C','S'},
            {'A','D','E','E'}
        };
        System.out.println(solver.exist(board, "ABCCED"));  // true
        System.out.println(solver.exist(board, "SEE"));     // true
        System.out.println(solver.exist(board, "ABCB"));    // false
    }
}`,
        }}
        explanation="DFS with backtracking. Mark cells as visited, explore 4 directions, backtrack by unmarking. Try from every cell as starting point."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Find if word exists in 2D grid. Word can be formed by moving horizontally/vertically to adjacent cells. Each cell can be used once per word.",
              details: [
                "Example: grid with 'ABCE', word='ABCCED' → true",
                "DFS with backtracking",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "DFS with backtracking: start from each cell, recursively explore 4 directions, mark cell as visited, check if current path forms word, backtrack by unmarking.",
              keywords: ["DFS", "backtracking", "2D grid", "word search"],
              details: [
                "Explore 4 directions: up, down, left, right",
                "Backtrack: unmark visited cell",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "2D grid for board. Visited matrix or modify board in-place. Recursive DFS function.",
              details: [
                "Visited: track used cells",
                "In-place: mark/unmark cells",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "For each cell: DFS starting from that cell. In DFS: if index == word.length, return true. If out of bounds or visited or doesn't match, return false. Mark visited, explore 4 directions, unmark visited, return result.",
              details: [
                "DFS: explore all paths",
                "Backtrack: unmark when returning",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Time O(m×n×4^L) where L is word length. Space O(L) for recursion stack. Backtracking is essential for correctness.",
              details: [
                "Optimal backtracking solution",
                "Essential for word search problems",
              ],
            },
          ],
          pattern: "DFS with Backtracking (Word Search)",
          complexity: {
            time: "O(m×n×4^L)",
            space: "O(L)",
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
          Advanced Recursion Techniques
        </h2>

        <TheoryBlock title="Memoization (Top-Down DP)">
          <CodeBlock
            code={{
              JavaScript: `// Fibonacci with memoization
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
// With memo: O(n) linear`,
              Java: `import java.util.HashMap;
import java.util.Map;

public class Memoization {
    // Fibonacci with memoization
    private Map<Integer, Long> cache = new HashMap<>();
    
    public long fibMemo(int n) {
        if (n <= 1) return n;
        
        if (cache.containsKey(n)) {
            return cache.get(n);
        }
        
        long result = fibMemo(n - 1) + fibMemo(n - 2);
        cache.put(n, result);
        return result;
    }
    
    public static void main(String[] args) {
        Memoization solver = new Memoization();
        System.out.println(solver.fibMemo(100));  // Fast!
        
        // Without memo: O(2^n) exponential
        // With memo: O(n) linear
    }
}`,
            }}
          />
        </TheoryBlock>
      </div>

      <ProblemBlock
        title="Problem: Decode Ways (LeetCode #91)"
        difficulty="Medium"
        description="A='1', B='2'..Z='26'. Count ways to decode a digit string."
        solutions={{
          JavaScript: `function numDecodings(s) {
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
console.log(numDecodings("06"));    // 0 (invalid)`,
          Java: `import java.util.HashMap;
import java.util.Map;

public class DecodeWays {
    private Map<Integer, Integer> memo = new HashMap<>();
    
    public int numDecodings(String s) {
        return decode(s, 0);
    }
    
    private int decode(String s, int index) {
        // Base cases
        if (index == s.length()) return 1;
        if (s.charAt(index) == '0') return 0;
        
        // Check memo
        if (memo.containsKey(index)) {
            return memo.get(index);
        }
        
        // Option 1: Decode single digit
        int ways = decode(s, index + 1);
        
        // Option 2: Decode two digits (if valid)
        if (index + 1 < s.length()) {
            int twoDigit = Integer.parseInt(s.substring(index, index + 2));
            if (twoDigit <= 26) {
                ways += decode(s, index + 2);
            }
        }
        
        memo.put(index, ways);
        return ways;
    }
    
    public static void main(String[] args) {
        DecodeWays solver = new DecodeWays();
        System.out.println(solver.numDecodings("12"));    // 2 ("AB" or "L")
        System.out.println(solver.numDecodings("226"));    // 3 ("BZ", "VF", "BBF")
        System.out.println(solver.numDecodings("06"));     // 0 (invalid)
    }
}`,
        }}
        explanation="At each position, try decoding 1 or 2 digits if valid. Use memoization to avoid recalculating same subproblems. Classic DP problem."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Count ways to decode string. 'A'=1, 'B'=2, ..., 'Z'=26. Single digit (1-9) or two digits (10-26) can be decoded.",
              details: [
                "Example: '12' → 2 ways (AB or L)",
                "Overlapping subproblems",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recursion with memoization: at each position, try decoding 1 digit (if 1-9) or 2 digits (if 10-26). Memoize results to avoid recalculating.",
              keywords: [
                "memoization",
                "dynamic programming",
                "recursion",
                "decoding",
              ],
              details: [
                "Two choices: decode 1 or 2 digits",
                "Memoization: cache results",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Memo map to cache results for each index. Recursive function with memoization.",
              details: ["Memo: index → count", "Cache: avoid recalculation"],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Base: if index == s.length, return 1. If s[index]=='0', return 0. If memo[index] exists, return it. Count = 0. If valid 1-digit, count += decode(index+1). If valid 2-digit, count += decode(index+2). Memoize and return count.",
              details: ["Try 1-digit: if valid", "Try 2-digit: if valid"],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Time O(n) - each index calculated once. Space O(n) for memo and recursion stack. Memoization converts O(2^n) to O(n).",
              details: ["Optimal with memoization", "Essential optimization"],
            },
          ],
          pattern: "Memoization (Decode Ways)",
          complexity: {
            time: "O(n)",
            space: "O(n)",
          },
        }}
      />

      <ProblemBlock
        title="Problem: Longest Valid Parentheses (LeetCode #32)"
        difficulty="Hard"
        description="Find length of longest valid (well-formed) parentheses substring."
        solutions={{
          JavaScript: `function longestValidParentheses(s) {
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
console.log(longestValidParentheses(""));        // 0`,
          Java: `import java.util.HashMap;
import java.util.Map;
import java.util.Stack;

public class LongestValidParentheses {
    private int maxLen = 0;
    private Map<Integer, Integer> memo = new HashMap<>();
    
    public int longestValidParentheses(String s) {
        for (int i = 0; i < s.length(); i++) {
            helper(s, i);
        }
        return maxLen;
    }
    
    private int helper(String s, int index) {
        if (index >= s.length()) return 0;
        if (memo.containsKey(index)) {
            return memo.get(index);
        }
        
        int len = 0;
        
        if (s.charAt(index) == '(') {
            int balance = 1;
            int i = index + 1;
            
            while (i < s.length() && balance > 0) {
                balance += s.charAt(i) == '(' ? 1 : -1;
                i++;
            }
            
            if (balance == 0) {
                len = i - index + helper(s, i);
            }
        }
        
        memo.put(index, len);
        maxLen = Math.max(maxLen, len);
        return len;
    }
    
    // Alternative: Stack-based solution
    public int longestValidParenthesesStack(String s) {
        int maxLen = 0;
        Stack<Integer> stack = new Stack<>();
        stack.push(-1);
        
        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == '(') {
                stack.push(i);
            } else {
                stack.pop();
                if (stack.isEmpty()) {
                    stack.push(i);
                } else {
                    maxLen = Math.max(maxLen, i - stack.peek());
                }
            }
        }
        
        return maxLen;
    }
    
    public static void main(String[] args) {
        LongestValidParentheses solver = new LongestValidParentheses();
        System.out.println(solver.longestValidParentheses("(()"));     // 2
        System.out.println(solver.longestValidParentheses(")()())"));  // 4
        System.out.println(solver.longestValidParentheses(""));        // 0
    }
}`,
        }}
        explanation="Track matching parentheses using recursion with memoization or stack. For each '(', find matching ')' and continue recursively."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Find length of longest valid parentheses substring. Valid: properly matched and nested parentheses.",
              details: [
                "Example: '(()' → 2, ')()())' → 4",
                "Find longest valid substring",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recursive with memoization: for each '(', find matching ')' and recursively process remaining. Track longest valid length. Alternative: use stack or DP.",
              keywords: ["parentheses", "memoization", "recursion", "matching"],
              details: [
                "Find matching: for each '('",
                "Recurse: process remaining",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Memo map to cache results. Recursive function. Alternative: stack or DP array.",
              details: [
                "Memo: index → longest length",
                "Stack: track positions",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Recursive: for each index, if s[index]=='(': find matching ')', if found: length = 2 + recurse(index+1), update max. Memoize results. Alternative: stack-based or DP approach.",
              details: [
                "Find matching: balance count",
                "Recurse: continue after match",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Time O(n²) recursive, O(n) with DP/stack. Space O(n) for memo/stack. DP or stack approach is more efficient.",
              details: [
                "DP/stack: optimal O(n) solution",
                "Recursive: demonstrates concept",
              ],
            },
          ],
          pattern: "Memoization/DP (Longest Valid Parentheses)",
          complexity: {
            time: "O(n)",
            space: "O(n)",
          },
        }}
      />

      <ProblemBlock
        title="Problem: Regular Expression Matching (LeetCode #10)"
        difficulty="Hard"
        description="Implement regex matching with '.' (any char) and '*' (zero or more of preceding element)."
        solutions={{
          JavaScript: `function isMatch(s, p) {
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
 */`,
          Java: `import java.util.HashMap;
import java.util.Map;

public class RegularExpressionMatching {
    private Map<String, Boolean> memo = new HashMap<>();
    
    public boolean isMatch(String s, String p) {
        return dp(s, p, 0, 0);
    }
    
    private boolean dp(String s, String p, int i, int j) {
        // Create unique key for memoization
        String key = i + "," + j;
        if (memo.containsKey(key)) {
            return memo.get(key);
        }
        
        // Base case: reached end of pattern
        if (j == p.length()) {
            return i == s.length();
        }
        
        // Check if current characters match
        boolean firstMatch = (
            i < s.length() &&
            (s.charAt(i) == p.charAt(j) || p.charAt(j) == '.')
        );
        
        // Handle '*' (zero or more of preceding element)
        if (j + 1 < p.length() && p.charAt(j + 1) == '*') {
            // Option 1: Use '*' as zero occurrences (skip pattern[j] and '*')
            // Option 2: Use '*' as one or more (match current and continue)
            boolean result = (
                dp(s, p, i, j + 2) ||  // Zero occurrences
                (firstMatch && dp(s, p, i + 1, j))  // One or more
            );
            memo.put(key, result);
            return result;
        } else {
            // No '*', must match current char and continue
            boolean result = firstMatch && dp(s, p, i + 1, j + 1);
            memo.put(key, result);
            return result;
        }
    }
    
    public static void main(String[] args) {
        RegularExpressionMatching solver = new RegularExpressionMatching();
        System.out.println(solver.isMatch("aa", "a"));       // false
        System.out.println(solver.isMatch("aa", "a*"));      // true
        System.out.println(solver.isMatch("ab", ".*"));      // true
        System.out.println(solver.isMatch("aab", "c*a*b"));  // true
        
        /* Explanation:
         * "c*a*b" matches "aab":
         * c* = zero c's
         * a* = two a's
         * b = one b
         */
    }
}`,
        }}
        explanation="Use recursion with memoization. For '*', try two options: use zero occurrences or match one and continue. Handle '.' as wildcard."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Match string with pattern. '.' matches any single character. '*' matches zero or more of preceding element. Full string must match.",
              details: [
                "Example: 'aa' matches 'a*'",
                "Complex pattern matching",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recursion with memoization: match character by character. For '*': try zero occurrences or match one and continue. For '.': match any character. Memoize to avoid recalculation.",
              keywords: [
                "regex matching",
                "memoization",
                "recursion",
                "wildcard",
              ],
              details: [
                "Two choices for '*': zero or one+",
                "Memoization: cache results",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Memo map: (i, j) → boolean (matches or not). Recursive function with two pointers.",
              details: [
                "Memo: (sIndex, pIndex) → result",
                "Two pointers: string and pattern",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Base: if pIndex == pattern.length, return sIndex == string.length. If memo exists, return it. If pattern[pIndex+1]=='*': try zero (recurse(i, j+2)) or one+ (if match, recurse(i+1, j)). Else if match: recurse(i+1, j+1). Memoize and return.",
              details: ["Handle '*': two options", "Handle '.': matches any"],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Time O(m×n) with memoization where m, n are string and pattern lengths. Space O(m×n) for memo. Without memo: O(2^(m+n)).",
              details: ["Optimal with memoization", "Essential for efficiency"],
            },
          ],
          pattern: "Memoization (Regex Matching)",
          complexity: {
            time: "O(m×n)",
            space: "O(m×n)",
          },
        }}
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

function ApproachTab({ approach }) {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 rounded-xl p-6 border border-blue-500/30">
        <h3 className="text-2xl font-bold text-white mb-2">
          🎯 Problem Solving Approach
        </h3>
        <p className="text-gray-300 text-sm">
          Following the systematic 5-step framework to solve this problem
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
                      className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs"
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

      {showSolution && codeData && (
        <div>
          {/* Tabs */}
          {approach && (
            <div className="flex gap-2 mb-4 border-b border-gray-700">
              <button
                onClick={() => setActiveTab("solution")}
                className={`px-4 py-2 font-semibold transition-colors ${
                  activeTab === "solution"
                    ? "text-green-400 border-b-2 border-green-400"
                    : "text-gray-400 hover:text-gray-300"
                }`}
              >
                Solution
              </button>
              <button
                onClick={() => setActiveTab("approach")}
                className={`px-4 py-2 font-semibold transition-colors ${
                  activeTab === "approach"
                    ? "text-green-400 border-b-2 border-green-400"
                    : "text-gray-400 hover:text-gray-300"
                }`}
              >
                Approach
              </button>
            </div>
          )}

          {/* Tab Content */}
          {activeTab === "solution" && (
            <div>
              <CodeBlock code={codeData} defaultLanguage="JavaScript" />
              <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-4 mt-4">
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
