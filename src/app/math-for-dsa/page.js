"use client";
import Link from "next/link";
import { useState } from "react";

export default function MathForDSA() {
  const [activeTab, setActiveTab] = useState("overview");

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
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Math for DSA
          </h1>
          <p className="text-gray-400 mt-2">
            Master Essential Mathematical Concepts for Interviews
          </p>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-gray-800/50 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-2 overflow-x-auto">
            {[
              { id: "overview", label: "📚 Overview" },
              { id: "number-theory", label: "🔢 Number Theory" },
              { id: "bit-manipulation", label: "⚡ Bit Manipulation" },
              { id: "combinatorics", label: "🎲 Combinatorics" },
              { id: "powers", label: "📈 Powers & Logs" },
              { id: "patterns", label: "🔄 Patterns" },
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
        {/* Overview Tab */}
        {activeTab === "overview" && <OverviewSection />}

        {/* Number Theory Tab */}
        {activeTab === "number-theory" && <NumberTheorySection />}

        {/* Bit Manipulation Tab */}
        {activeTab === "bit-manipulation" && <BitManipulationSection />}

        {/* Combinatorics Tab */}
        {activeTab === "combinatorics" && <CombinatoricsSection />}

        {/* Powers & Logs Tab */}
        {activeTab === "powers" && <PowersSection />}

        {/* Patterns Tab */}
        {activeTab === "patterns" && <PatternsSection />}
      </main>
    </div>
  );
}

// Overview Section
function OverviewSection() {
  return (
    <div className="space-y-8">
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Why Math Matters in DSA?
        </h2>
        <p className="text-gray-300 text-lg mb-4">
          Mathematical concepts form the foundation of many DSA problems.
          Understanding these patterns helps you:
        </p>
        <ul className="space-y-3 text-gray-300">
          <li className="flex items-start gap-3">
            <span className="text-green-400 text-xl">✓</span>
            <span>
              <strong>Optimize solutions:</strong> Convert O(n) to O(log n)
              using math tricks
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 text-xl">✓</span>
            <span>
              <strong>Recognize patterns:</strong> Identify when to use specific
              algorithms
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-400 text-xl">✓</span>
            <span>
              <strong>Solve faster:</strong> Many problems have mathematical
              shortcuts
            </span>
          </li>
        </ul>
      </div>

      {/* Topics Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        <TopicCard
          icon="🔢"
          title="Number Theory"
          topics={[
            "Prime Numbers",
            "GCD/LCM",
            "Modular Arithmetic",
            "Divisibility",
          ]}
          color="from-blue-500 to-cyan-500"
        />
        <TopicCard
          icon="⚡"
          title="Bit Manipulation"
          topics={[
            "AND, OR, XOR",
            "Bit Masking",
            "Power of 2",
            "Count Set Bits",
          ]}
          color="from-yellow-500 to-orange-500"
        />
        <TopicCard
          icon="🎲"
          title="Combinatorics"
          topics={["Permutations", "Combinations", "Factorials", "Counting"]}
          color="from-green-500 to-emerald-500"
        />
        <TopicCard
          icon="📈"
          title="Powers & Logarithms"
          topics={[
            "Fast Exponentiation",
            "Log Properties",
            "Square Roots",
            "Binary Search Math",
          ]}
          color="from-purple-500 to-pink-500"
        />
      </div>
    </div>
  );
}

function TopicCard({ icon, title, topics, color }) {
  return (
    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-4xl">{icon}</span>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      <ul className="space-y-2">
        {topics.map((topic, i) => (
          <li key={i} className="text-gray-300 text-sm flex items-center gap-2">
            <span
              className={`w-2 h-2 rounded-full bg-gradient-to-r ${color}`}
            ></span>
            {topic}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Number Theory Section
function NumberTheorySection() {
  return (
    <div className="space-y-8">
      {/* Prime Numbers */}
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">Prime Numbers</h2>
        <p className="text-gray-300 mb-6">
          A prime number is a natural number greater than 1 that has no positive
          divisors other than 1 and itself.
        </p>

        <TheoryBlock title="Check if a Number is Prime - O(√n)">
          <CodeBlock
            code={`function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  
  // Check for divisors up to √n
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(17));  // true
console.log(isPrime(15));  // false`}
          />
          <p className="text-gray-400 mt-3">
            <strong>Why i * i ≤ n?</strong> If n has a divisor greater than √n,
            it must also have a divisor less than √n.
          </p>
        </TheoryBlock>

        <TheoryBlock title="Sieve of Eratosthenes - Find All Primes Up to N">
          <CodeBlock
            code={`function sieveOfEratosthenes(n) {
  const isPrime = new Array(n + 1).fill(true);
  isPrime[0] = isPrime[1] = false;
  
  for (let i = 2; i * i <= n; i++) {
    if (isPrime[i]) {
      // Mark all multiples of i as non-prime
      for (let j = i * i; j <= n; j += i) {
        isPrime[j] = false;
      }
    }
  }
  
  // Collect all primes
  const primes = [];
  for (let i = 2; i <= n; i++) {
    if (isPrime[i]) primes.push(i);
  }
  return primes;
}

console.log(sieveOfEratosthenes(30));
// [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]`}
          />
          <ComplexityBadge time="O(n log log n)" space="O(n)" />
        </TheoryBlock>

        <ProblemBlock
          title="Problem: Count Primes (LeetCode #204)"
          difficulty="Medium"
          description="Count the number of prime numbers less than n."
          solution={`function countPrimes(n) {
  if (n <= 2) return 0;
  
  const isPrime = new Array(n).fill(true);
  isPrime[0] = isPrime[1] = false;
  
  for (let i = 2; i * i < n; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j < n; j += i) {
        isPrime[j] = false;
      }
    }
  }
  
  // Count primes
  return isPrime.filter(p => p).length;
}

console.log(countPrimes(10));  // 4 (primes: 2, 3, 5, 7)
console.log(countPrimes(20));  // 8`}
          explanation="Use Sieve of Eratosthenes to mark all non-primes, then count remaining primes."
        />
      </div>

      {/* GCD and LCM */}
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">GCD & LCM</h2>
        <p className="text-gray-300 mb-6">
          <strong>GCD (Greatest Common Divisor):</strong> Largest number that
          divides both numbers.
          <br />
          <strong>LCM (Least Common Multiple):</strong> Smallest number
          divisible by both numbers.
        </p>

        <TheoryBlock title="Euclidean Algorithm for GCD">
          <CodeBlock
            code={`// Recursive approach
function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

// Iterative approach
function gcdIterative(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

console.log(gcd(48, 18));  // 6
console.log(gcd(100, 35)); // 5`}
          />
          <ComplexityBadge time="O(log(min(a,b)))" space="O(1)" />
        </TheoryBlock>

        <TheoryBlock title="Calculate LCM using GCD">
          <CodeBlock
            code={`function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

console.log(lcm(12, 18));  // 36
console.log(lcm(4, 6));    // 12

// Formula: LCM(a, b) = (a × b) / GCD(a, b)`}
          />
        </TheoryBlock>

        <ProblemBlock
          title="Problem: Find GCD of Array"
          difficulty="Easy"
          description="Find the GCD of all numbers in an array."
          solution={`function gcd(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

function findGCD(arr) {
  return arr.reduce((acc, num) => gcd(acc, num));
}

console.log(findGCD([12, 18, 24]));  // 6
console.log(findGCD([15, 25, 30]));  // 5`}
          explanation="Use reduce to apply GCD operation across all array elements. GCD is associative: GCD(a, b, c) = GCD(GCD(a, b), c)"
        />
      </div>

      {/* Modular Arithmetic */}
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Modular Arithmetic
        </h2>
        <p className="text-gray-300 mb-6">
          Used when dealing with large numbers. Common in problems asking for
          "result modulo 10^9 + 7".
        </p>

        <TheoryBlock title="Modular Properties">
          <CodeBlock
            code={`const MOD = 1e9 + 7;

// Addition: (a + b) % m = ((a % m) + (b % m)) % m
function modAdd(a, b) {
  return ((a % MOD) + (b % MOD)) % MOD;
}

// Multiplication: (a * b) % m = ((a % m) * (b % m)) % m
function modMul(a, b) {
  return ((a % MOD) * (b % MOD)) % MOD;
}

// Subtraction: (a - b) % m = ((a % m) - (b % m) + m) % m
function modSub(a, b) {
  return ((a % MOD) - (b % MOD) + MOD) % MOD;
}

console.log(modAdd(1000000000, 1000000000));
console.log(modMul(1000000, 1000000));`}
          />
        </TheoryBlock>

        <ProblemBlock
          title="Problem: Power of Numbers (Fast Exponentiation)"
          difficulty="Medium"
          description="Calculate (x^n) % MOD efficiently."
          solution={`function powerMod(x, n, mod = 1e9 + 7) {
  if (n === 0) return 1;
  
  let result = 1;
  x = x % mod;
  
  while (n > 0) {
    // If n is odd, multiply x with result
    if (n % 2 === 1) {
      result = (result * x) % mod;
    }
    
    // n must be even now
    n = Math.floor(n / 2);
    x = (x * x) % mod;
  }
  
  return result;
}

console.log(powerMod(2, 10));      // 1024
console.log(powerMod(3, 1000000)); // Fast even for huge n!`}
          explanation="Binary exponentiation reduces O(n) to O(log n) by squaring base and halving exponent."
        />
      </div>
    </div>
  );
}

// Bit Manipulation Section
function BitManipulationSection() {
  return (
    <div className="space-y-8">
      {/* Basics */}
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Bit Manipulation Basics
        </h2>

        <TheoryBlock title="Common Bit Operations">
          <CodeBlock
            code={`// AND (&) - Both bits must be 1
console.log(5 & 3);    // 1  (0101 & 0011 = 0001)

// OR (|) - At least one bit is 1
console.log(5 | 3);    // 7  (0101 | 0011 = 0111)

// XOR (^) - Bits are different
console.log(5 ^ 3);    // 6  (0101 ^ 0011 = 0110)

// NOT (~) - Flip all bits
console.log(~5);       // -6 (inverts all bits)

// Left Shift (<<) - Multiply by 2^n
console.log(5 << 1);   // 10 (0101 << 1 = 1010)
console.log(5 << 2);   // 20 (multiply by 4)

// Right Shift (>>) - Divide by 2^n
console.log(20 >> 1);  // 10 (divide by 2)
console.log(20 >> 2);  // 5  (divide by 4)`}
          />
        </TheoryBlock>

        <TheoryBlock title="Essential Bit Tricks">
          <CodeBlock
            code={`// Check if number is even or odd
function isEven(n) {
  return (n & 1) === 0;
}

// Check if number is power of 2
function isPowerOfTwo(n) {
  return n > 0 && (n & (n - 1)) === 0;
}

// Get i-th bit (0-indexed from right)
function getBit(n, i) {
  return (n >> i) & 1;
}

// Set i-th bit to 1
function setBit(n, i) {
  return n | (1 << i);
}

// Clear i-th bit (set to 0)
function clearBit(n, i) {
  return n & ~(1 << i);
}

// Toggle i-th bit
function toggleBit(n, i) {
  return n ^ (1 << i);
}

console.log(isPowerOfTwo(16));  // true
console.log(isPowerOfTwo(18));  // false
console.log(getBit(10, 1));     // 1 (1010, 2nd bit is 1)
console.log(setBit(10, 0));     // 11 (set rightmost bit)`}
          />
        </TheoryBlock>

        <ProblemBlock
          title="Problem: Single Number (LeetCode #136)"
          difficulty="Easy"
          description="Every element appears twice except one. Find that single one using O(n) time and O(1) space."
          solution={`function singleNumber(nums) {
  let result = 0;
  for (let num of nums) {
    result ^= num;  // XOR
  }
  return result;
}

console.log(singleNumber([2, 2, 1]));        // 1
console.log(singleNumber([4, 1, 2, 1, 2]));  // 4

/* Why XOR works:
 * - a ^ a = 0 (same numbers cancel out)
 * - a ^ 0 = a (XOR with 0 gives original)
 * - XOR is commutative and associative
 * So: 2 ^ 2 ^ 1 = 0 ^ 1 = 1
 */`}
          explanation="XOR has the property that a ^ a = 0 and a ^ 0 = a. All pairs cancel out, leaving only the single number."
        />
      </div>

      {/* Count Set Bits */}
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Count Set Bits (1s in Binary)
        </h2>

        <TheoryBlock title="Brian Kernighan's Algorithm">
          <CodeBlock
            code={`function countSetBits(n) {
  let count = 0;
  while (n > 0) {
    n = n & (n - 1);  // Remove rightmost set bit
    count++;
  }
  return count;
}

console.log(countSetBits(13));  // 3 (1101 has three 1s)
console.log(countSetBits(15));  // 4 (1111 has four 1s)

/* How it works:
 * n = 1101 (13)
 * n-1 = 1100
 * n & (n-1) = 1100 (removed rightmost 1)
 * 
 * n = 1100
 * n-1 = 1011
 * n & (n-1) = 1000 (removed rightmost 1)
 * 
 * Continues until n = 0
 */`}
          />
          <ComplexityBadge time="O(number of set bits)" space="O(1)" />
        </TheoryBlock>

        <ProblemBlock
          title="Problem: Hamming Distance (LeetCode #461)"
          difficulty="Easy"
          description="Find the number of positions where bits differ between two numbers."
          solution={`function hammingDistance(x, y) {
  let xor = x ^ y;  // XOR gives 1 where bits differ
  let count = 0;
  
  // Count set bits in XOR result
  while (xor > 0) {
    xor = xor & (xor - 1);
    count++;
  }
  
  return count;
}

console.log(hammingDistance(1, 4));  // 2
// 1 = 0001
// 4 = 0100
// XOR = 0101 (2 bits are different)`}
          explanation="XOR gives 1 where bits differ. Count the number of 1s in the XOR result."
        />
      </div>

      {/* Bit Masking */}
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Bit Masking for Subsets
        </h2>

        <ProblemBlock
          title="Problem: Generate All Subsets (Power Set)"
          difficulty="Medium"
          description="Generate all possible subsets of an array using bit manipulation."
          solution={`function subsets(nums) {
  const result = [];
  const n = nums.length;
  const totalSubsets = 1 << n;  // 2^n subsets
  
  for (let i = 0; i < totalSubsets; i++) {
    const subset = [];
    for (let j = 0; j < n; j++) {
      // Check if j-th bit is set in i
      if ((i >> j) & 1) {
        subset.push(nums[j]);
      }
    }
    result.push(subset);
  }
  
  return result;
}

console.log(subsets([1, 2, 3]));
/* Output:
[
  [],
  [1],
  [2],
  [1,2],
  [3],
  [1,3],
  [2,3],
  [1,2,3]
]
*/`}
          explanation="For n elements, there are 2^n subsets. Use bits 0 to 2^n-1 to represent each subset. If bit j is set, include nums[j]."
        />

        <ProblemBlock
          title="Problem: Sum of XOR of All Pairs"
          difficulty="Hard"
          description="Find sum of (arr[i] XOR arr[j]) for all pairs i < j."
          solution={`function sumOfXORPairs(arr) {
  const n = arr.length;
  let sum = 0;
  
  // For each bit position
  for (let bit = 0; bit < 32; bit++) {
    let count1 = 0;
    
    // Count numbers with this bit set
    for (let num of arr) {
      if ((num >> bit) & 1) {
        count1++;
      }
    }
    
    // XOR is 1 when bits differ
    // count1 numbers have bit=1, (n-count1) have bit=0
    // Pairs with different bits: count1 * (n - count1)
    const pairsWithBitSet = count1 * (n - count1);
    sum += pairsWithBitSet * (1 << bit);
  }
  
  return sum;
}

console.log(sumOfXORPairs([1, 2, 3]));
// (1^2) + (1^3) + (2^3) = 3 + 2 + 1 = 6`}
          explanation="For each bit position, count how many numbers have that bit set. XOR contributes when bits differ, so multiply count1 * count0 * bit_value."
        />
      </div>
    </div>
  );
}

// Combinatorics Section
function CombinatoricsSection() {
  return (
    <div className="space-y-8">
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Permutations & Combinations
        </h2>

        <TheoryBlock title="Factorials">
          <CodeBlock
            code={`// Iterative factorial
function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Recursive factorial
function factorialRecursive(n) {
  if (n <= 1) return 1;
  return n * factorialRecursive(n - 1);
}

console.log(factorial(5));  // 120
console.log(factorial(0));  // 1 (by definition)`}
          />
        </TheoryBlock>

        <TheoryBlock title="Permutations - Order Matters">
          <CodeBlock
            code={`// P(n, r) = n! / (n-r)!
function permutations(n, r) {
  if (r > n) return 0;
  let result = 1;
  for (let i = 0; i < r; i++) {
    result *= (n - i);
  }
  return result;
}

// Total permutations of n items
console.log(permutations(5, 5));  // 120 (5!)
// Choose and arrange 3 from 5
console.log(permutations(5, 3));  // 60`}
          />
        </TheoryBlock>

        <TheoryBlock title="Combinations - Order Doesn't Matter">
          <CodeBlock
            code={`// C(n, r) = n! / (r! * (n-r)!)
function combinations(n, r) {
  if (r > n) return 0;
  if (r === 0 || r === n) return 1;
  
  // Use smaller r for efficiency
  r = Math.min(r, n - r);
  
  let result = 1;
  for (let i = 0; i < r; i++) {
    result *= (n - i);
    result /= (i + 1);
  }
  return result;
}

console.log(combinations(5, 2));  // 10
console.log(combinations(5, 3));  // 10
// C(n, r) = C(n, n-r)`}
          />
        </TheoryBlock>

        <ProblemBlock
          title="Problem: Pascal's Triangle (LeetCode #118)"
          difficulty="Easy"
          description="Generate first n rows of Pascal's triangle where each number is sum of two numbers above it."
          solution={`function generatePascalTriangle(numRows) {
  const triangle = [];
  
  for (let i = 0; i < numRows; i++) {
    const row = new Array(i + 1).fill(1);
    
    for (let j = 1; j < i; j++) {
      row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
    }
    
    triangle.push(row);
  }
  
  return triangle;
}

console.log(generatePascalTriangle(5));
/* Output:
[
  [1],
  [1,1],
  [1,2,1],
  [1,3,3,1],
  [1,4,6,4,1]
]
Note: Each value is C(row, col)
*/`}
          explanation="Each number is C(n,k) where n is row and k is position. Use dynamic programming: triangle[i][j] = triangle[i-1][j-1] + triangle[i-1][j]"
        />
      </div>

      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Counting Problems
        </h2>

        <ProblemBlock
          title="Problem: Unique Paths (LeetCode #62)"
          difficulty="Medium"
          description="Robot at top-left corner of m×n grid. Can only move right or down. How many unique paths to bottom-right?"
          solution={`// Mathematical approach using combinations
function uniquePaths(m, n) {
  // Need (m-1) down moves and (n-1) right moves
  // Total moves = m + n - 2
  // Choose (m-1) positions for down moves from total
  // Answer: C(m+n-2, m-1)
  
  const totalMoves = m + n - 2;
  const downMoves = m - 1;
  
  let result = 1;
  for (let i = 0; i < downMoves; i++) {
    result *= (totalMoves - i);
    result /= (i + 1);
  }
  
  return result;
}

console.log(uniquePaths(3, 7));  // 28
console.log(uniquePaths(3, 3));  // 6`}
          explanation="This is a combinations problem. Total (m+n-2) moves needed, choose (m-1) down moves: C(m+n-2, m-1)"
        />

        <ProblemBlock
          title="Problem: Climbing Stairs (LeetCode #70)"
          difficulty="Easy"
          description="You can climb 1 or 2 steps at a time. How many ways to reach top of n steps?"
          solution={`// This is actually Fibonacci sequence!
function climbStairs(n) {
  if (n <= 2) return n;
  
  let prev2 = 1;  // ways to reach step 1
  let prev1 = 2;  // ways to reach step 2
  
  for (let i = 3; i <= n; i++) {
    const current = prev1 + prev2;
    prev2 = prev1;
    prev1 = current;
  }
  
  return prev1;
}

console.log(climbStairs(5));  // 8
// Ways: 1+1+1+1+1, 1+1+1+2, 1+1+2+1, 1+2+1+1, 
//       2+1+1+1, 1+2+2, 2+1+2, 2+2+1`}
          explanation="To reach step n, you can come from (n-1) or (n-2). So f(n) = f(n-1) + f(n-2), which is Fibonacci!"
        />
      </div>
    </div>
  );
}

// Powers Section
function PowersSection() {
  return (
    <div className="space-y-8">
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Fast Exponentiation
        </h2>

        <TheoryBlock title="Binary Exponentiation - O(log n)">
          <CodeBlock
            code={`function power(x, n) {
  if (n === 0) return 1;
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  
  let result = 1;
  while (n > 0) {
    if (n % 2 === 1) {
      result *= x;
    }
    x *= x;
    n = Math.floor(n / 2);
  }
  
  return result;
}

console.log(power(2, 10));   // 1024
console.log(power(2, -2));   // 0.25
console.log(power(3, 4));    // 81`}
          />
          <ComplexityBadge time="O(log n)" space="O(1)" />
        </TheoryBlock>

        <ProblemBlock
          title="Problem: Power of Two (LeetCode #231)"
          difficulty="Easy"
          description="Determine if an integer is a power of two."
          solution={`// Bit manipulation approach - O(1)
function isPowerOfTwo(n) {
  // Power of 2 has only one bit set
  // n & (n-1) removes the rightmost bit
  return n > 0 && (n & (n - 1)) === 0;
}

// Alternative: Check if only one bit is set
function isPowerOfTwoAlt(n) {
  if (n <= 0) return false;
  
  // Count set bits
  let count = 0;
  while (n > 0) {
    count += n & 1;
    n >>= 1;
  }
  return count === 1;
}

console.log(isPowerOfTwo(16));  // true (10000)
console.log(isPowerOfTwo(18));  // false (10010)`}
          explanation="Powers of 2 have exactly one bit set in binary. Use n & (n-1) which clears the rightmost bit - result is 0 only for powers of 2."
        />

        <ProblemBlock
          title="Problem: Power of Three (LeetCode #326)"
          difficulty="Easy"
          description="Determine if an integer is a power of three without loops/recursion."
          solution={`// Mathematical approach
function isPowerOfThree(n) {
  // Maximum power of 3 in 32-bit integer is 3^19 = 1162261467
  // If n is power of 3, then (3^19) % n === 0
  return n > 0 && 1162261467 % n === 0;
}

// Alternative: Using logarithms
function isPowerOfThreeAlt(n) {
  if (n <= 0) return false;
  const logValue = Math.log10(n) / Math.log10(3);
  return Math.abs(logValue - Math.round(logValue)) < 1e-10;
}

console.log(isPowerOfThree(27));  // true
console.log(isPowerOfThree(28));  // false`}
          explanation="Since 3 is prime, any power of 3 will divide the maximum power of 3 (3^19 for 32-bit int)."
        />
      </div>

      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Square Roots & Perfect Squares
        </h2>

        <ProblemBlock
          title="Problem: Valid Perfect Square (LeetCode #367)"
          difficulty="Easy"
          description="Determine if a number is a perfect square without using sqrt()."
          solution={`// Binary search approach
function isPerfectSquare(num) {
  if (num < 2) return true;
  
  let left = 2;
  let right = Math.floor(num / 2);
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const square = mid * mid;
    
    if (square === num) return true;
    if (square < num) left = mid + 1;
    else right = mid - 1;
  }
  
  return false;
}

// Mathematical approach using odd numbers
// Perfect squares are sum of first n odd numbers
// 1 = 1
// 4 = 1 + 3
// 9 = 1 + 3 + 5
function isPerfectSquareOdd(num) {
  let i = 1;
  while (num > 0) {
    num -= i;
    i += 2;
  }
  return num === 0;
}

console.log(isPerfectSquare(16));  // true
console.log(isPerfectSquare(14));  // false`}
          explanation="Use binary search to find if any number squared equals num. Alternatively, use the fact that n² = 1+3+5+...+(2n-1)"
        />

        <ProblemBlock
          title="Problem: Integer Square Root (LeetCode #69)"
          difficulty="Easy"
          description="Find square root of x rounded down to nearest integer."
          solution={`function mySqrt(x) {
  if (x < 2) return x;
  
  let left = 1;
  let right = Math.floor(x / 2);
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const square = mid * mid;
    
    if (square === x) return mid;
    if (square < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return right;  // Return floor value
}

console.log(mySqrt(8));   // 2
console.log(mySqrt(16));  // 4
console.log(mySqrt(17));  // 4`}
          explanation="Binary search between 1 and x/2. When loop ends, 'right' contains the floor of square root."
        />
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
          Arithmetic & Geometric Progressions
        </h2>

        <TheoryBlock title="Sum Formulas">
          <CodeBlock
            code={`// Sum of first n natural numbers: n(n+1)/2
function sumFirstN(n) {
  return (n * (n + 1)) / 2;
}

// Sum of squares: n(n+1)(2n+1)/6
function sumOfSquares(n) {
  return (n * (n + 1) * (2 * n + 1)) / 6;
}

// Sum of cubes: [n(n+1)/2]^2
function sumOfCubes(n) {
  const s = sumFirstN(n);
  return s * s;
}

// Sum of arithmetic progression
function sumAP(first, last, n) {
  return (n * (first + last)) / 2;
}

// Sum of geometric progression
function sumGP(a, r, n) {
  if (r === 1) return a * n;
  return a * (Math.pow(r, n) - 1) / (r - 1);
}

console.log(sumFirstN(100));      // 5050
console.log(sumOfSquares(5));     // 55
console.log(sumAP(1, 100, 100));  // 5050`}
          />
        </TheoryBlock>

        <ProblemBlock
          title="Problem: Missing Number (LeetCode #268)"
          difficulty="Easy"
          description="Array contains n distinct numbers from 0 to n. Find the missing number."
          solution={`// Math approach using sum formula
function missingNumber(nums) {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}

// XOR approach
function missingNumberXOR(nums) {
  let xor = nums.length;  // Start with n
  
  for (let i = 0; i < nums.length; i++) {
    xor ^= i ^ nums[i];
  }
  
  return xor;
}

console.log(missingNumber([3, 0, 1]));     // 2
console.log(missingNumber([0, 1]));        // 2
console.log(missingNumber([9,6,4,2,3,5,7,0,1]));  // 8`}
          explanation="Sum of 0 to n is n(n+1)/2. Subtract actual sum to get missing number. XOR also works since a^a=0."
        />
      </div>

      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Array Math Patterns
        </h2>

        <ProblemBlock
          title="Problem: Product Except Self (LeetCode #238)"
          difficulty="Medium"
          description="Return array where output[i] equals product of all elements except nums[i]. No division allowed."
          solution={`function productExceptSelf(nums) {
  const n = nums.length;
  const result = new Array(n);
  
  // Calculate left products
  result[0] = 1;
  for (let i = 1; i < n; i++) {
    result[i] = result[i - 1] * nums[i - 1];
  }
  
  // Calculate right products and multiply
  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= rightProduct;
    rightProduct *= nums[i];
  }
  
  return result;
}

console.log(productExceptSelf([1, 2, 3, 4]));
// [24, 12, 8, 6]
// 24 = 2*3*4, 12 = 1*3*4, 8 = 1*2*4, 6 = 1*2*3`}
          explanation="Two pass: first calculate left products, then multiply with right products going backward. O(n) time, O(1) extra space."
        />

        <ProblemBlock
          title="Problem: Maximum Product Subarray (LeetCode #152)"
          difficulty="Medium"
          description="Find contiguous subarray with largest product."
          solution={`function maxProduct(nums) {
  let maxProd = nums[0];
  let minProd = nums[0];  // Track min for negative numbers
  let result = nums[0];
  
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    
    // If negative, swap max and min
    if (num < 0) {
      [maxProd, minProd] = [minProd, maxProd];
    }
    
    // Update max and min products
    maxProd = Math.max(num, maxProd * num);
    minProd = Math.min(num, minProd * num);
    
    result = Math.max(result, maxProd);
  }
  
  return result;
}

console.log(maxProduct([2, 3, -2, 4]));     // 6
console.log(maxProduct([-2, 0, -1]));       // 0
console.log(maxProduct([-2, 3, -4]));       // 24`}
          explanation="Track both max and min products. When encountering negative number, min becomes max and vice versa."
        />

        <ProblemBlock
          title="Problem: Majority Element (LeetCode #169)"
          difficulty="Easy"
          description="Find element appearing more than n/2 times. (Boyer-Moore Voting)"
          solution={`function majorityElement(nums) {
  let candidate = null;
  let count = 0;
  
  // Find candidate
  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += (num === candidate) ? 1 : -1;
  }
  
  return candidate;
}

console.log(majorityElement([3, 2, 3]));        // 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));  // 2

/* Boyer-Moore Voting Algorithm:
 * Majority element appears > n/2 times
 * If we cancel out each occurrence with different element,
 * majority element will still remain
 */`}
          explanation="Boyer-Moore algorithm: maintain a candidate and count. If count is 0, pick new candidate. Increment for same, decrement for different."
        />
      </div>

      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Mathematical Tricks
        </h2>

        <ProblemBlock
          title="Problem: Reverse Integer (LeetCode #7)"
          difficulty="Medium"
          description="Reverse digits of a 32-bit signed integer. Return 0 if overflows."
          solution={`function reverse(x) {
  const INT_MAX = 2147483647;   // 2^31 - 1
  const INT_MIN = -2147483648;  // -2^31
  
  let result = 0;
  let num = Math.abs(x);
  
  while (num > 0) {
    const digit = num % 10;
    num = Math.floor(num / 10);
    
    // Check overflow before multiplying
    if (result > Math.floor(INT_MAX / 10) || 
        (result === Math.floor(INT_MAX / 10) && digit > 7)) {
      return 0;
    }
    
    result = result * 10 + digit;
  }
  
  return x < 0 ? -result : result;
}

console.log(reverse(123));    // 321
console.log(reverse(-123));   // -321
console.log(reverse(120));    // 21`}
          explanation="Extract digits using mod 10, build reversed number. Check overflow before each multiplication."
        />

        <ProblemBlock
          title="Problem: Palindrome Number (LeetCode #9)"
          difficulty="Easy"
          description="Determine if integer is palindrome without converting to string."
          solution={`function isPalindrome(x) {
  // Negative numbers are not palindromes
  // Numbers ending in 0 are not palindromes (except 0 itself)
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }
  
  let reversed = 0;
  let original = x;
  
  // Reverse half the number
  while (x > reversed) {
    reversed = reversed * 10 + x % 10;
    x = Math.floor(x / 10);
  }
  
  // For even length: x === reversed
  // For odd length: x === Math.floor(reversed / 10)
  return x === reversed || x === Math.floor(reversed / 10);
}

console.log(isPalindrome(121));    // true
console.log(isPalindrome(12321));  // true
console.log(isPalindrome(-121));   // false
console.log(isPalindrome(10));     // false`}
          explanation="Only reverse half the number. Compare with original half. Handle odd/even lengths."
        />
      </div>
    </div>
  );
}

// Helper Components
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
        className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors mb-4"
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
