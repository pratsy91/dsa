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
            code={{
              JavaScript: `function isPrime(n) {
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
console.log(isPrime(15));  // false`,
              Java: `public class PrimeChecker {
    public static boolean isPrime(int n) {
        if (n <= 1) return false;
        if (n <= 3) return true;
        if (n % 2 == 0 || n % 3 == 0) return false;
        
        // Check for divisors up to √n
        for (int i = 5; i * i <= n; i += 6) {
            if (n % i == 0 || n % (i + 2) == 0) {
                return false;
            }
        }
        return true;
    }
    
    public static void main(String[] args) {
        System.out.println(isPrime(17));  // true
        System.out.println(isPrime(15));  // false
    }
}`,
            }}
          />
          <p className="text-gray-400 mt-3">
            <strong>Why i * i ≤ n?</strong> If n has a divisor greater than √n,
            it must also have a divisor less than √n.
          </p>
        </TheoryBlock>

        <TheoryBlock title="Sieve of Eratosthenes - Find All Primes Up to N">
          <CodeBlock
            code={{
              JavaScript: `function sieveOfEratosthenes(n) {
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
// [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]`,
              Java: `import java.util.ArrayList;
import java.util.List;

public class SieveOfEratosthenes {
    public static List<Integer> sieveOfEratosthenes(int n) {
        boolean[] isPrime = new boolean[n + 1];
        for (int i = 2; i <= n; i++) {
            isPrime[i] = true;
        }
        
        for (int i = 2; i * i <= n; i++) {
            if (isPrime[i]) {
                // Mark all multiples of i as non-prime
                for (int j = i * i; j <= n; j += i) {
                    isPrime[j] = false;
                }
            }
        }
        
        // Collect all primes
        List<Integer> primes = new ArrayList<>();
        for (int i = 2; i <= n; i++) {
            if (isPrime[i]) {
                primes.add(i);
            }
        }
        return primes;
    }
    
    public static void main(String[] args) {
        System.out.println(sieveOfEratosthenes(30));
        // [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
    }
}`,
            }}
          />
          <ComplexityBadge time="O(n log log n)" space="O(n)" />
        </TheoryBlock>

        <ProblemBlock
          title="Problem: Count Primes (LeetCode #204)"
          difficulty="Medium"
          description="Count the number of prime numbers less than n."
          solutions={{
            JavaScript: `function countPrimes(n) {
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
console.log(countPrimes(20));  // 8`,
            Java: `import java.util.Arrays;

public class MathUtils {
    public int countPrimes(int n) {
        if (n <= 2) {
            return 0;
        }

        boolean[] isPrime = new boolean[n];
        Arrays.fill(isPrime, true);
        isPrime[0] = false;
        isPrime[1] = false;

        for (int i = 2; i * i < n; i++) {
            if (isPrime[i]) {
                for (int j = i * i; j < n; j += i) {
                    isPrime[j] = false;
                }
            }
        }

        int count = 0;
        for (boolean prime : isPrime) {
            if (prime) {
                count++;
            }
        }

        return count;
    }

    public static void main(String[] args) {
        MathUtils utils = new MathUtils();
        System.out.println(utils.countPrimes(10));  // 4
        System.out.println(utils.countPrimes(20));  // 8
    }
}`,
          }}
          explanation="Use Sieve of Eratosthenes to mark all non-primes, then count remaining primes."
          approach={{
            steps: [
              {
                title: "Step 1: Understand & Clarify",
                description:
                  "Count number of prime numbers less than n. Prime: number > 1 with no divisors other than 1 and itself.",
                details: [
                  "Example: n=10 → 4 primes (2,3,5,7)",
                  "Need efficient algorithm for large n",
                ],
              },
              {
                title: "Step 2: Identify Pattern",
                description:
                  "Sieve of Eratosthenes: mark all multiples of primes as non-prime. Start from 2, mark all multiples, move to next unmarked number.",
                keywords: [
                  "sieve of eratosthenes",
                  "prime numbers",
                  "number theory",
                  "optimization",
                ],
                details: [
                  "Mark multiples: efficient way to find non-primes",
                  "Only need to check up to √n",
                ],
              },
              {
                title: "Step 3: Choose Data Structure",
                description:
                  "Boolean array isPrime[n] where isPrime[i] = true if i is prime. Initialize all to true, mark non-primes as false.",
                details: [
                  "Array: O(n) space",
                  "Boolean flags: efficient marking",
                ],
              },
              {
                title: "Step 4: Select Algorithm",
                description:
                  "Initialize isPrime[0..n-1] = true, isPrime[0]=isPrime[1]=false. For i from 2 to √n: if isPrime[i], mark all multiples j=i*i, i*i+i, ... as false. Count true values.",
                details: [
                  "Outer loop: O(√n)",
                  "Inner loop: mark multiples efficiently",
                ],
              },
              {
                title: "Step 5: Implement & Optimize",
                description:
                  "Time O(n log log n) - harmonic series. Space O(n). Much better than O(n√n) naive approach.",
                details: [
                  "Sieve is optimal for counting primes",
                  "Can optimize space with bit manipulation",
                ],
              },
            ],
            pattern: "Sieve of Eratosthenes",
            complexity: {
              time: "O(n log log n)",
              space: "O(n)",
            },
          }}
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
            code={{
              JavaScript: `// Recursive approach
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
console.log(gcd(100, 35)); // 5`,
              Java: `public class GCD {
    // Recursive approach
    public static int gcd(int a, int b) {
        if (b == 0) return a;
        return gcd(b, a % b);
    }
    
    // Iterative approach
    public static int gcdIterative(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
    
    public static void main(String[] args) {
        System.out.println(gcd(48, 18));      // 6
        System.out.println(gcd(100, 35));     // 5
        System.out.println(gcdIterative(48, 18));  // 6
    }
}`,
            }}
          />
          <ComplexityBadge time="O(log(min(a,b)))" space="O(1)" />
        </TheoryBlock>

        <TheoryBlock title="Calculate LCM using GCD">
          <CodeBlock
            code={{
              JavaScript: `function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

console.log(lcm(12, 18));  // 36
console.log(lcm(4, 6));    // 12

// Formula: LCM(a, b) = (a × b) / GCD(a, b)`,
              Java: `public class LCM {
    public static int gcd(int a, int b) {
        if (b == 0) return a;
        return gcd(b, a % b);
    }
    
    public static int lcm(int a, int b) {
        return (a * b) / gcd(a, b);
    }
    
    public static void main(String[] args) {
        System.out.println(lcm(12, 18));  // 36
        System.out.println(lcm(4, 6));    // 12
        // Formula: LCM(a, b) = (a × b) / GCD(a, b)
    }
}`,
            }}
          />
        </TheoryBlock>

        <ProblemBlock
          title="Problem: Find GCD of Array"
          difficulty="Easy"
          description="Find the GCD of all numbers in an array."
          solutions={{
            JavaScript: `function gcd(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

function findGCD(arr) {
  return arr.reduce((acc, num) => gcd(acc, num));
}

console.log(findGCD([12, 18, 24]));  // 6
console.log(findGCD([15, 25, 30]));  // 5`,
            Java: `public class GCDUtil {
    private int gcd(int a, int b) {
        a = Math.abs(a);
        b = Math.abs(b);

        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }

        return a;
    }

    public int findGCD(int[] nums) {
        int result = nums[0];
        for (int i = 1; i < nums.length; i++) {
            result = gcd(result, nums[i]);
        }
        return result;
    }

    public static void main(String[] args) {
        GCDUtil util = new GCDUtil();
        System.out.println(util.findGCD(new int[]{12, 18, 24}));  // 6
        System.out.println(util.findGCD(new int[]{15, 25, 30}));  // 5
    }
}`,
          }}
          explanation="Use reduce to apply GCD operation across all array elements. GCD is associative: GCD(a, b, c) = GCD(GCD(a, b), c)"
          approach={{
            steps: [
              {
                title: "Step 1: Understand & Clarify",
                description:
                  "Find GCD of all numbers in array. GCD is largest number that divides all numbers.",
                details: [
                  "Example: [12,18,24] → GCD = 6",
                  "GCD is associative: GCD(a,b,c) = GCD(GCD(a,b),c)",
                ],
              },
              {
                title: "Step 2: Identify Pattern",
                description:
                  "Apply GCD operation sequentially. Start with first number, then GCD with each subsequent number.",
                keywords: [
                  "GCD",
                  "euclidean algorithm",
                  "associative property",
                  "reduce",
                ],
                details: [
                  "GCD is associative: can apply sequentially",
                  "Use reduce to apply GCD across array",
                ],
              },
              {
                title: "Step 3: Choose Data Structure",
                description:
                  "Array of numbers. Use reduce function or iterative approach.",
                details: [
                  "Array: input numbers",
                  "Reduce: functional approach",
                ],
              },
              {
                title: "Step 4: Select Algorithm",
                description:
                  "Initialize result = nums[0]. For each number from index 1: result = gcd(result, nums[i]). Return result.",
                details: [
                  "Sequential GCD: O(n) operations",
                  "Each GCD: O(log(min(a,b)))",
                ],
              },
              {
                title: "Step 5: Implement & Optimize",
                description:
                  "Time O(n log(min)) where min is minimum number. Space O(1). Efficient using Euclidean algorithm.",
                details: [
                  "Efficient sequential application",
                  "Can use reduce for cleaner code",
                ],
              },
            ],
            pattern: "GCD (Associative Property)",
            complexity: {
              time: "O(n log(min))",
              space: "O(1)",
            },
          }}
        />
      </div>

      {/* Modular Arithmetic */}
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Modular Arithmetic
        </h2>
        <p className="text-gray-300 mb-6">
          Used when dealing with large numbers. Common in problems asking for
          &quot;result modulo 10^9 + 7&quot;.
        </p>

        <TheoryBlock title="Modular Properties">
          <CodeBlock
            code={{
              JavaScript: `const MOD = 1e9 + 7;

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
console.log(modMul(1000000, 1000000));`,
              Java: `public class ModularArithmetic {
    private static final long MOD = 1_000_000_007;
    
    // Addition: (a + b) % m = ((a % m) + (b % m)) % m
    public static long modAdd(long a, long b) {
        return ((a % MOD) + (b % MOD)) % MOD;
    }
    
    // Multiplication: (a * b) % m = ((a % m) * (b % m)) % m
    public static long modMul(long a, long b) {
        return ((a % MOD) * (b % MOD)) % MOD;
    }
    
    // Subtraction: (a - b) % m = ((a % m) - (b % m) + m) % m
    public static long modSub(long a, long b) {
        return ((a % MOD) - (b % MOD) + MOD) % MOD;
    }
    
    public static void main(String[] args) {
        System.out.println(modAdd(1_000_000_000, 1_000_000_000));
        System.out.println(modMul(1_000_000, 1_000_000));
    }
}`,
            }}
          />
        </TheoryBlock>

        <ProblemBlock
          title="Problem: Power of Numbers (Fast Exponentiation)"
          difficulty="Medium"
          description="Calculate (x^n) % MOD efficiently."
          solutions={{
            JavaScript: `function powerMod(x, n, mod = 1e9 + 7) {
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
console.log(powerMod(3, 1000000)); // Fast even for huge n!`,
            Java: `public class ModularExponentiation {
    private static final long MOD = 1_000_000_007L;

    public long powerMod(long x, long n) {
        return powerMod(x, n, MOD);
    }

    public long powerMod(long x, long n, long mod) {
        if (mod == 1) {
            return 0;
        }

        long result = 1;
        x %= mod;

        while (n > 0) {
            if ((n & 1L) == 1L) {
                result = (result * x) % mod;
            }

            x = (x * x) % mod;
            n >>= 1;
        }

        return result;
    }

    public static void main(String[] args) {
        ModularExponentiation solver = new ModularExponentiation();
        System.out.println(solver.powerMod(2, 10));        // 1024
        System.out.println(solver.powerMod(3, 1_000_000)); // Fast even for huge n!
    }
}`,
          }}
          explanation="Binary exponentiation reduces O(n) to O(log n) by squaring base and halving exponent."
          approach={{
            steps: [
              {
                title: "Step 1: Understand & Clarify",
                description:
                  "Calculate x^n mod MOD efficiently. Naive approach O(n) is too slow for large n.",
                details: ["Example: 2^100 mod MOD", "Need O(log n) approach"],
              },
              {
                title: "Step 2: Identify Pattern",
                description:
                  "Binary exponentiation: if n is even, x^n = (x^(n/2))^2. If odd, x^n = x * (x^(n-1)). Recursively compute.",
                keywords: [
                  "binary exponentiation",
                  "fast power",
                  "divide and conquer",
                  "modular arithmetic",
                ],
                details: [
                  "Divide exponent by 2: O(log n) steps",
                  "Square base: efficient computation",
                ],
              },
              {
                title: "Step 3: Choose Data Structure",
                description:
                  "Recursive or iterative approach. Use MOD constant for modular arithmetic.",
                details: [
                  "Recursive: cleaner code",
                  "Iterative: no stack overhead",
                ],
              },
              {
                title: "Step 4: Select Algorithm",
                description:
                  "If n==0, return 1. If n is even, return (x^(n/2))^2 mod MOD. If odd, return x * (x^(n-1)) mod MOD. Use modular multiplication.",
                details: [
                  "Recursive: O(log n) depth",
                  "Each step: O(1) operations",
                ],
              },
              {
                title: "Step 5: Implement & Optimize",
                description:
                  "Time O(log n) - exponential reduction. Space O(log n) recursive, O(1) iterative. Essential for large exponents.",
                details: [
                  "Dramatically faster than O(n)",
                  "Used in many mathematical problems",
                ],
              },
            ],
            pattern: "Binary Exponentiation (Fast Power)",
            complexity: {
              time: "O(log n)",
              space: "O(log n) recursive, O(1) iterative",
            },
          }}
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
            code={{
              JavaScript: `// AND (&) - Both bits must be 1
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
console.log(20 >> 2);  // 5  (divide by 4)`,
              Java: `public class BitOperations {
    public static void main(String[] args) {
        // AND (&) - Both bits must be 1
        System.out.println(5 & 3);    // 1  (0101 & 0011 = 0001)
        
        // OR (|) - At least one bit is 1
        System.out.println(5 | 3);    // 7  (0101 | 0011 = 0111)
        
        // XOR (^) - Bits are different
        System.out.println(5 ^ 3);    // 6  (0101 ^ 0011 = 0110)
        
        // NOT (~) - Flip all bits
        System.out.println(~5);       // -6 (inverts all bits)
        
        // Left Shift (<<) - Multiply by 2^n
        System.out.println(5 << 1);   // 10 (0101 << 1 = 1010)
        System.out.println(5 << 2);   // 20 (multiply by 4)
        
        // Right Shift (>>) - Divide by 2^n
        System.out.println(20 >> 1);  // 10 (divide by 2)
        System.out.println(20 >> 2);  // 5  (divide by 4)
    }
}`,
            }}
          />
        </TheoryBlock>

        <TheoryBlock title="Essential Bit Tricks">
          <CodeBlock
            code={{
              JavaScript: `// Check if number is even or odd
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
console.log(setBit(10, 0));     // 11 (set rightmost bit)`,
              Java: `public class BitTricks {
    // Check if number is even or odd
    public static boolean isEven(int n) {
        return (n & 1) == 0;
    }
    
    // Check if number is power of 2
    public static boolean isPowerOfTwo(int n) {
        return n > 0 && (n & (n - 1)) == 0;
    }
    
    // Get i-th bit (0-indexed from right)
    public static int getBit(int n, int i) {
        return (n >> i) & 1;
    }
    
    // Set i-th bit to 1
    public static int setBit(int n, int i) {
        return n | (1 << i);
    }
    
    // Clear i-th bit (set to 0)
    public static int clearBit(int n, int i) {
        return n & ~(1 << i);
    }
    
    // Toggle i-th bit
    public static int toggleBit(int n, int i) {
        return n ^ (1 << i);
    }
    
    public static void main(String[] args) {
        System.out.println(isPowerOfTwo(16));  // true
        System.out.println(isPowerOfTwo(18));  // false
        System.out.println(getBit(10, 1));     // 1 (1010, 2nd bit is 1)
        System.out.println(setBit(10, 0));     // 11 (set rightmost bit)
    }
}`,
            }}
          />
        </TheoryBlock>

        <ProblemBlock
          title="Problem: Single Number (LeetCode #136)"
          difficulty="Easy"
          description="Every element appears twice except one. Find that single one using O(n) time and O(1) space."
          solutions={{
            JavaScript: `function singleNumber(nums) {
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
 */`,
            Java: `public class SingleNumber {
    public int singleNumber(int[] nums) {
        int result = 0;
        for (int num : nums) {
            result ^= num;
        }
        return result;
    }

    public static void main(String[] args) {
        SingleNumber solver = new SingleNumber();
        System.out.println(solver.singleNumber(new int[]{2, 2, 1}));        // 1
        System.out.println(solver.singleNumber(new int[]{4, 1, 2, 1, 2}));  // 4
    }
}`,
          }}
          explanation="XOR has the property that a ^ a = 0 and a ^ 0 = a. All pairs cancel out, leaving only the single number."
          approach={{
            steps: [
              {
                title: "Step 1: Understand & Clarify",
                description:
                  "Find single number that appears once, all others appear twice. Need O(n) time, O(1) space.",
                details: [
                  "Example: [2,2,1] → 1",
                  "Cannot use hash map (O(n) space)",
                ],
              },
              {
                title: "Step 2: Identify Pattern",
                description:
                  "XOR property: a^a=0, a^0=a. XOR all numbers: pairs cancel out (a^a=0), single number remains (0^a=a).",
                keywords: [
                  "XOR",
                  "bit manipulation",
                  "cancellation property",
                  "constant space",
                ],
                details: [
                  "XOR: commutative and associative",
                  "Pairs cancel: efficient solution",
                ],
              },
              {
                title: "Step 3: Choose Data Structure",
                description:
                  "Single variable to accumulate XOR result. No extra data structures needed.",
                details: [
                  "O(1) space: just one variable",
                  "XOR operation: O(1) time",
                ],
              },
              {
                title: "Step 4: Select Algorithm",
                description:
                  "Initialize result = 0. For each number in array: result ^= num. Return result.",
                details: [
                  "Single pass: O(n) time",
                  "XOR each number: O(1) per number",
                ],
              },
              {
                title: "Step 5: Implement & Optimize",
                description:
                  "Time O(n) - single pass. Space O(1) - constant. Optimal solution using XOR property.",
                details: [
                  "Optimal time and space",
                  "Elegant mathematical solution",
                ],
              },
            ],
            pattern: "XOR (Cancellation Property)",
            complexity: {
              time: "O(n)",
              space: "O(1)",
            },
          }}
        />
      </div>

      {/* Count Set Bits */}
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Count Set Bits (1s in Binary)
        </h2>

        <TheoryBlock title="Brian Kernighan's Algorithm">
          <CodeBlock
            code={{
              JavaScript: `function countSetBits(n) {
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
 */`,
              Java: `public class CountSetBits {
    public static int countSetBits(int n) {
        int count = 0;
        while (n > 0) {
            n = n & (n - 1);  // Remove rightmost set bit
            count++;
        }
        return count;
    }
    
    public static void main(String[] args) {
        System.out.println(countSetBits(13));  // 3 (1101 has three 1s)
        System.out.println(countSetBits(15));  // 4 (1111 has four 1s)
        
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
         */
    }
}`,
            }}
          />
          <ComplexityBadge time="O(number of set bits)" space="O(1)" />
        </TheoryBlock>

        <ProblemBlock
          title="Problem: Hamming Distance (LeetCode #461)"
          difficulty="Easy"
          description="Find the number of positions where bits differ between two numbers."
          solutions={{
            JavaScript: `function hammingDistance(x, y) {
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
// XOR = 0101 (2 bits are different)`,
            Java: `public class HammingDistance {
    public int hammingDistance(int x, int y) {
        int xor = x ^ y;
        int count = 0;

        while (xor != 0) {
            xor &= (xor - 1);
            count++;
        }

        return count;
    }

    public static void main(String[] args) {
        HammingDistance solver = new HammingDistance();
        System.out.println(solver.hammingDistance(1, 4));  // 2
    }
}`,
          }}
          explanation="XOR gives 1 where bits differ. Count the number of 1s in the XOR result."
          approach={{
            steps: [
              {
                title: "Step 1: Understand & Clarify",
                description:
                  "Hamming distance: number of positions where bits differ between two numbers.",
                details: [
                  "Example: x=1 (01), y=4 (100) → distance = 2",
                  "Count differing bit positions",
                ],
              },
              {
                title: "Step 2: Identify Pattern",
                description:
                  "XOR gives 1 where bits differ. Count set bits in XOR result using Brian Kernighan's algorithm.",
                keywords: [
                  "XOR",
                  "hamming distance",
                  "bit counting",
                  "brian kernighan",
                ],
                details: [
                  "XOR: identifies differing bits",
                  "Count set bits: efficient algorithm",
                ],
              },
              {
                title: "Step 3: Choose Data Structure",
                description:
                  "XOR result and counter. Use Brian Kernighan's algorithm to count set bits.",
                details: [
                  "XOR: O(1) operation",
                  "Bit counting: O(k) where k is set bits",
                ],
              },
              {
                title: "Step 4: Select Algorithm",
                description:
                  "Compute xor = x ^ y. Count set bits: while xor > 0, xor = xor & (xor-1), count++. Return count.",
                details: [
                  "XOR: O(1) time",
                  "Count bits: O(k) where k is number of set bits",
                ],
              },
              {
                title: "Step 5: Implement & Optimize",
                description:
                  "Time O(k) where k is number of differing bits. Space O(1). Optimal using XOR and bit counting.",
                details: [
                  "Efficient bit manipulation",
                  "Better than checking each bit position",
                ],
              },
            ],
            pattern: "XOR + Bit Counting",
            complexity: {
              time: "O(k) where k is number of set bits",
              space: "O(1)",
            },
          }}
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
          solutions={{
            JavaScript: `function subsets(nums) {
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
*/`,
            Java: `import java.util.ArrayList;
import java.util.List;

public class SubsetsGenerator {
    public List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        int n = nums.length;
        int totalSubsets = 1 << n;

        for (int mask = 0; mask < totalSubsets; mask++) {
            List<Integer> subset = new ArrayList<>();
            for (int i = 0; i < n; i++) {
                if ((mask & (1 << i)) != 0) {
                    subset.add(nums[i]);
                }
            }
            result.add(subset);
        }

        return result;
    }

    public static void main(String[] args) {
        SubsetsGenerator generator = new SubsetsGenerator();
        System.out.println(generator.subsets(new int[]{1, 2, 3}));
    }
}`,
          }}
          explanation="For n elements, there are 2^n subsets. Use bits 0 to 2^n-1 to represent each subset. If bit j is set, include nums[j]."
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
                  "Bit masking: each number 0 to 2^n-1 represents a subset. Bit i set means include element i. Generate all masks.",
                keywords: [
                  "bit masking",
                  "power set",
                  "subsets",
                  "combinatorics",
                ],
                details: [
                  "2^n subsets: one per bit pattern",
                  "Bit i: include/exclude element i",
                ],
              },
              {
                title: "Step 3: Choose Data Structure",
                description:
                  "Array to store results. Loop through all masks from 0 to 2^n-1.",
                details: [
                  "Result array: store all subsets",
                  "Mask: integer representing subset",
                ],
              },
              {
                title: "Step 4: Select Algorithm",
                description:
                  "For mask from 0 to 2^n-1: create subset. For each bit i: if mask & (1<<i), include nums[i]. Add subset to result.",
                details: [
                  "Outer loop: O(2^n) masks",
                  "Inner loop: O(n) to check bits",
                ],
              },
              {
                title: "Step 5: Implement & Optimize",
                description:
                  "Time O(n × 2^n) - generate 2^n subsets, each takes O(n). Space O(n × 2^n) for output. Optimal for generating all subsets.",
                details: [
                  "Optimal for power set generation",
                  "Elegant bit manipulation approach",
                ],
              },
            ],
            pattern: "Bit Masking (Power Set)",
            complexity: {
              time: "O(n × 2^n)",
              space: "O(n × 2^n)",
            },
          }}
        />

        <ProblemBlock
          title="Problem: Sum of XOR of All Pairs"
          difficulty="Hard"
          description="Find sum of (arr[i] XOR arr[j]) for all pairs i < j."
          solutions={{
            JavaScript: `function sumOfXORPairs(arr) {
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
// (1^2) + (1^3) + (2^3) = 3 + 2 + 1 = 6`,
            Java: `public class XorPairsSum {
    public long sumOfXORPairs(int[] arr) {
        long sum = 0;
        int n = arr.length;

        for (int bit = 0; bit < 32; bit++) {
            int count1 = 0;
            for (int num : arr) {
                if (((num >> bit) & 1) == 1) {
                    count1++;
                }
            }

            long count0 = n - count1;
            long pairsWithBitSet = (long) count1 * count0;
            sum += pairsWithBitSet << bit;
        }

        return sum;
    }

    public static void main(String[] args) {
        XorPairsSum solver = new XorPairsSum();
        System.out.println(solver.sumOfXORPairs(new int[]{1, 2, 3}));  // 6
    }
}`,
          }}
          explanation="For each bit position, count how many numbers have that bit set. XOR contributes when bits differ, so multiply count1 * count0 * bit_value."
          approach={{
            steps: [
              {
                title: "Step 1: Understand & Clarify",
                description:
                  "Find sum of XOR of all pairs. For each pair (i,j), compute nums[i] XOR nums[j] and sum all results.",
                details: [
                  "Example: [1,2,3] → (1^2)+(1^3)+(2^3) = 3+2+1 = 6",
                  "Need efficient approach for large arrays",
                ],
              },
              {
                title: "Step 2: Identify Pattern",
                description:
                  "Bit-wise analysis: for each bit position, count numbers with bit set (count1) and unset (count0). XOR contributes 2^bit when bits differ: count1 × count0 × 2^bit.",
                keywords: [
                  "XOR",
                  "bit manipulation",
                  "bit-wise analysis",
                  "combinatorics",
                ],
                details: [
                  "Process each bit independently",
                  "Count contributions per bit position",
                ],
              },
              {
                title: "Step 3: Choose Data Structure",
                description:
                  "Count arrays for each bit position. Process bits from 0 to 31 (for 32-bit integers).",
                details: [
                  "Bit-wise processing: O(32) = O(1)",
                  "Count per bit: O(n) per bit",
                ],
              },
              {
                title: "Step 4: Select Algorithm",
                description:
                  "For each bit position: count numbers with bit set (count1), count0 = n - count1. Contribution = count1 × count0 × 2^bit. Sum all contributions.",
                details: [
                  "Process each bit: O(32) iterations",
                  "Count per bit: O(n) time",
                ],
              },
              {
                title: "Step 5: Implement & Optimize",
                description:
                  "Time O(32 × n) = O(n) - process 32 bits, each takes O(n). Space O(1). Much better than O(n²) naive approach.",
                details: [
                  "Optimal bit-wise approach",
                  "Efficient for large arrays",
                ],
              },
            ],
            pattern: "Bit-wise Analysis (XOR Pairs)",
            complexity: {
              time: "O(n)",
              space: "O(1)",
            },
          }}
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
            code={{
              JavaScript: `// Iterative factorial
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
console.log(factorial(0));  // 1 (by definition)`,
              Java: `public class Factorial {
    // Iterative factorial
    public static long factorial(int n) {
        long result = 1;
        for (int i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
    
    // Recursive factorial
    public static long factorialRecursive(int n) {
        if (n <= 1) return 1;
        return n * factorialRecursive(n - 1);
    }
    
    public static void main(String[] args) {
        System.out.println(factorial(5));  // 120
        System.out.println(factorial(0));  // 1 (by definition)
    }
}`,
            }}
          />
        </TheoryBlock>

        <TheoryBlock title="Permutations - Order Matters">
          <CodeBlock
            code={{
              JavaScript: `// P(n, r) = n! / (n-r)!
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
console.log(permutations(5, 3));  // 60`,
              Java: `public class Permutations {
    // P(n, r) = n! / (n-r)!
    public static long permutations(int n, int r) {
        if (r > n) return 0;
        long result = 1;
        for (int i = 0; i < r; i++) {
            result *= (n - i);
        }
        return result;
    }
    
    public static void main(String[] args) {
        // Total permutations of n items
        System.out.println(permutations(5, 5));  // 120 (5!)
        // Choose and arrange 3 from 5
        System.out.println(permutations(5, 3));  // 60
    }
}`,
            }}
          />
        </TheoryBlock>

        <TheoryBlock title="Combinations - Order Doesn't Matter">
          <CodeBlock
            code={{
              JavaScript: `// C(n, r) = n! / (r! * (n-r)!)
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
// C(n, r) = C(n, n-r)`,
              Java: `public class Combinations {
    // C(n, r) = n! / (r! * (n-r)!)
    public static long combinations(int n, int r) {
        if (r > n) return 0;
        if (r == 0 || r == n) return 1;
        
        // Use smaller r for efficiency
        r = Math.min(r, n - r);
        
        long result = 1;
        for (int i = 0; i < r; i++) {
            result *= (n - i);
            result /= (i + 1);
        }
        return result;
    }
    
    public static void main(String[] args) {
        System.out.println(combinations(5, 2));  // 10
        System.out.println(combinations(5, 3));  // 10
        // C(n, r) = C(n, n-r)
    }
}`,
            }}
          />
        </TheoryBlock>

        <ProblemBlock
          title="Problem: Pascal's Triangle (LeetCode #118)"
          difficulty="Easy"
          description="Generate first n rows of Pascal's triangle where each number is sum of two numbers above it."
          solutions={{
            JavaScript: `function generatePascalTriangle(numRows) {
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
*/`,
            Java: `import java.util.ArrayList;
import java.util.List;

public class PascalsTriangle {
    public List<List<Integer>> generate(int numRows) {
        List<List<Integer>> triangle = new ArrayList<>();

        for (int i = 0; i < numRows; i++) {
            List<Integer> row = new ArrayList<>();
            for (int j = 0; j <= i; j++) {
                if (j == 0 || j == i) {
                    row.add(1);
                } else {
                    int value = triangle.get(i - 1).get(j - 1) + triangle.get(i - 1).get(j);
                    row.add(value);
                }
            }
            triangle.add(row);
        }

        return triangle;
    }

    public static void main(String[] args) {
        PascalsTriangle pt = new PascalsTriangle();
        System.out.println(pt.generate(5));
    }
}`,
          }}
          explanation="Each number is C(n,k) where n is row and k is position. Use dynamic programming: triangle[i][j] = triangle[i-1][j-1] + triangle[i-1][j]"
          approach={{
            steps: [
              {
                title: "Step 1: Understand & Clarify",
                description:
                  "Generate Pascal's Triangle with numRows rows. Each number is sum of two numbers above it.",
                details: [
                  "Example: row 3 = [1,3,3,1]",
                  "First and last elements are always 1",
                ],
              },
              {
                title: "Step 2: Identify Pattern",
                description:
                  "DP: triangle[i][j] = triangle[i-1][j-1] + triangle[i-1][j]. First and last elements are 1. Each number is binomial coefficient C(i,j).",
                keywords: [
                  "pascal's triangle",
                  "dynamic programming",
                  "binomial coefficients",
                  "combinatorics",
                ],
                details: [
                  "DP relation: sum of two above",
                  "Binomial coefficient: C(n,k)",
                ],
              },
              {
                title: "Step 3: Choose Data Structure",
                description:
                  "2D array or list of lists. Each row has rowIndex+1 elements.",
                details: [
                  "2D structure: store triangle",
                  "Row i has i+1 elements",
                ],
              },
              {
                title: "Step 4: Select Algorithm",
                description:
                  "For row i from 0 to numRows-1: create row with i+1 elements. Set first and last to 1. For middle elements j: row[j] = triangle[i-1][j-1] + triangle[i-1][j].",
                details: [
                  "Build row by row: O(numRows²)",
                  "Each row: O(rowIndex) elements",
                ],
              },
              {
                title: "Step 5: Implement & Optimize",
                description:
                  "Time O(numRows²) - total elements. Space O(numRows²) for output. Can optimize space to O(numRows) by building row by row.",
                details: [
                  "Optimal for generating full triangle",
                  "Space can be optimized",
                ],
              },
            ],
            pattern: "Dynamic Programming (Pascal's Triangle)",
            complexity: {
              time: "O(numRows²)",
              space: "O(numRows²)",
            },
          }}
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
          solutions={{
            JavaScript: `// Mathematical approach using combinations
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
console.log(uniquePaths(3, 3));  // 6`,
            Java: `public class UniquePaths {
    public long uniquePaths(int m, int n) {
        int totalMoves = m + n - 2;
        int downMoves = m - 1;
        downMoves = Math.min(downMoves, totalMoves - downMoves);

        long result = 1;
        for (int i = 0; i < downMoves; i++) {
            result = result * (totalMoves - i) / (i + 1);
        }

        return result;
    }

    public static void main(String[] args) {
        UniquePaths solver = new UniquePaths();
        System.out.println(solver.uniquePaths(3, 7));  // 28
        System.out.println(solver.uniquePaths(3, 3));  // 6
    }
}`,
          }}
          explanation="This is a combinations problem. Total (m+n-2) moves needed, choose (m-1) down moves: C(m+n-2, m-1)"
          approach={{
            steps: [
              {
                title: "Step 1: Understand & Clarify",
                description:
                  "Count unique paths from top-left to bottom-right. Can only move right or down. No obstacles.",
                details: [
                  "Example: 3×7 grid → 28 paths",
                  "Must move right (n-1) times, down (m-1) times",
                ],
              },
              {
                title: "Step 2: Identify Pattern",
                description:
                  "Combinatorics: total moves = (m+n-2). Choose (m-1) down moves: C(m+n-2, m-1). Alternatively, DP: paths[i][j] = paths[i-1][j] + paths[i][j-1].",
                keywords: [
                  "combinatorics",
                  "binomial coefficient",
                  "dynamic programming",
                  "unique paths",
                ],
                details: [
                  "Mathematical: C(m+n-2, m-1)",
                  "DP: build paths incrementally",
                ],
              },
              {
                title: "Step 3: Choose Data Structure",
                description:
                  "DP: 2D array paths[m][n]. Math: calculate C(m+n-2, m-1) using formula.",
                details: ["DP: O(mn) space", "Math: O(1) space"],
              },
              {
                title: "Step 4: Select Algorithm",
                description:
                  "Math: return C(m+n-2, m-1) = (m+n-2)! / ((m-1)! × (n-1)!). DP: paths[0][j]=1, paths[i][0]=1. paths[i][j] = paths[i-1][j] + paths[i][j-1].",
                details: ["Math: O(min(m,n)) time", "DP: O(mn) time"],
              },
              {
                title: "Step 5: Implement & Optimize",
                description:
                  "Math: Time O(min(m,n)), Space O(1). DP: Time O(mn), Space O(mn). Math approach is optimal.",
                details: [
                  "Mathematical solution is optimal",
                  "DP is more intuitive",
                ],
              },
            ],
            pattern: "Combinatorics (Binomial Coefficient)",
            complexity: {
              time: "O(min(m,n))",
              space: "O(1)",
            },
          }}
        />

        <ProblemBlock
          title="Problem: Climbing Stairs (LeetCode #70)"
          difficulty="Easy"
          description="You can climb 1 or 2 steps at a time. How many ways to reach top of n steps?"
          solutions={{
            JavaScript: `// This is actually Fibonacci sequence!
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
//       2+1+1+1, 1+2+2, 2+1+2, 2+2+1`,
            Java: `public class ClimbingStairs {
    public int climbStairs(int n) {
        if (n <= 2) {
            return n;
        }

        int prev2 = 1;
        int prev1 = 2;

        for (int i = 3; i <= n; i++) {
            int current = prev1 + prev2;
            prev2 = prev1;
            prev1 = current;
        }

        return prev1;
    }

    public static void main(String[] args) {
        ClimbingStairs solver = new ClimbingStairs();
        System.out.println(solver.climbStairs(5));  // 8
    }
}`,
          }}
          explanation="To reach step n, you can come from (n-1) or (n-2). So f(n) = f(n-1) + f(n-2), which is Fibonacci!"
          approach={{
            steps: [
              {
                title: "Step 1: Understand & Clarify",
                description:
                  "Count ways to climb n steps. Can take 1 or 2 steps at a time.",
                details: [
                  "Example: n=3 → 3 ways (1+1+1, 1+2, 2+1)",
                  "Fibonacci sequence",
                ],
              },
              {
                title: "Step 2: Identify Pattern",
                description:
                  "To reach step n: come from step n-1 (1 step) or n-2 (2 steps). So f(n) = f(n-1) + f(n-2). This is Fibonacci sequence.",
                keywords: [
                  "fibonacci",
                  "dynamic programming",
                  "recurrence relation",
                  "combinatorics",
                ],
                details: [
                  "Recurrence: f(n) = f(n-1) + f(n-2)",
                  "Base cases: f(1)=1, f(2)=2",
                ],
              },
              {
                title: "Step 3: Choose Data Structure",
                description:
                  "DP: array dp[n+1] or three variables for space optimization.",
                details: ["Array: O(n) space", "Variables: O(1) space"],
              },
              {
                title: "Step 4: Select Algorithm",
                description:
                  "Base: if n<=2, return n. DP: dp[1]=1, dp[2]=2. For i from 3 to n: dp[i] = dp[i-1] + dp[i-2]. Return dp[n]. Space-optimized: use three variables.",
                details: [
                  "DP: O(n) time, O(n) space",
                  "Optimized: O(n) time, O(1) space",
                ],
              },
              {
                title: "Step 5: Implement & Optimize",
                description:
                  "Time O(n) - linear pass. Space O(1) with optimization. Can use matrix exponentiation for O(log n) time.",
                details: [
                  "Optimal linear solution",
                  "Matrix exponentiation for O(log n)",
                ],
              },
            ],
            pattern: "Fibonacci (Dynamic Programming)",
            complexity: {
              time: "O(n)",
              space: "O(1)",
            },
          }}
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
            code={{
              JavaScript: `function power(x, n) {
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
console.log(power(3, 4));    // 81`,
              Java: `public class Power {
    public static double power(double x, int n) {
        if (n == 0) return 1;
        if (n < 0) {
            x = 1 / x;
            n = -n;
        }
        
        double result = 1;
        while (n > 0) {
            if (n % 2 == 1) {
                result *= x;
            }
            x *= x;
            n /= 2;
        }
        
        return result;
    }
    
    public static void main(String[] args) {
        System.out.println(power(2, 10));   // 1024.0
        System.out.println(power(2, -2));   // 0.25
        System.out.println(power(3, 4));    // 81.0
    }
}`,
            }}
          />
          <ComplexityBadge time="O(log n)" space="O(1)" />
        </TheoryBlock>

        <ProblemBlock
          title="Problem: Power of Two (LeetCode #231)"
          difficulty="Easy"
          description="Determine if an integer is a power of two."
          solutions={{
            JavaScript: `// Bit manipulation approach - O(1)
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
console.log(isPowerOfTwo(18));  // false (10010)`,
            Java: `public class PowerOfTwo {
    public boolean isPowerOfTwo(int n) {
        return n > 0 && (n & (n - 1)) == 0;
    }

    public boolean isPowerOfTwoAlt(int n) {
        if (n <= 0) {
            return false;
        }

        int count = 0;
        int num = n;
        while (num > 0) {
            count += num & 1;
            num >>= 1;
        }
        return count == 1;
    }

    public static void main(String[] args) {
        PowerOfTwo checker = new PowerOfTwo();
        System.out.println(checker.isPowerOfTwo(16));  // true
        System.out.println(checker.isPowerOfTwo(18));  // false
    }
}`,
          }}
          explanation="Powers of 2 have exactly one bit set in binary. Use n & (n-1) which clears the rightmost bit - result is 0 only for powers of 2."
          approach={{
            steps: [
              {
                title: "Step 1: Understand & Clarify",
                description:
                  "Check if number is power of 2. Power of 2: 1, 2, 4, 8, 16, ...",
                details: [
                  "Example: 16 is power of 2, 18 is not",
                  "Need O(1) solution",
                ],
              },
              {
                title: "Step 2: Identify Pattern",
                description:
                  "Powers of 2 have exactly one bit set. n & (n-1) clears rightmost bit. For power of 2, result is 0 (only one bit).",
                keywords: [
                  "power of 2",
                  "bit manipulation",
                  "bit trick",
                  "constant time",
                ],
                details: [
                  "Single bit set: property of powers of 2",
                  "n & (n-1): clears rightmost bit",
                ],
              },
              {
                title: "Step 3: Choose Data Structure",
                description:
                  "Single integer check. No extra data structures needed.",
                details: [
                  "O(1) space: just bit operations",
                  "Bit manipulation: O(1) time",
                ],
              },
              {
                title: "Step 4: Select Algorithm",
                description:
                  "If n <= 0, return false. Return (n & (n-1)) === 0. This checks if exactly one bit is set.",
                details: [
                  "Single bit check: O(1) operation",
                  "Edge case: n must be positive",
                ],
              },
              {
                title: "Step 5: Implement & Optimize",
                description:
                  "Time O(1) - single bit operation. Space O(1). Optimal solution using bit manipulation.",
                details: [
                  "Optimal constant time solution",
                  "Elegant bit trick",
                ],
              },
            ],
            pattern: "Bit Manipulation (Power of 2)",
            complexity: {
              time: "O(1)",
              space: "O(1)",
            },
          }}
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
          approach={{
            steps: [
              {
                title: "Step 1: Understand & Clarify",
                description:
                  "Check if number is power of 3. Power of 3: 1, 3, 9, 27, 81, ...",
                details: [
                  "Example: 27 is power of 3, 18 is not",
                  "Need efficient solution",
                ],
              },
              {
                title: "Step 2: Identify Pattern",
                description:
                  "Since 3 is prime, if n is power of 3, it divides maximum power of 3 (3^19 for 32-bit). Alternatively, repeatedly divide by 3.",
                keywords: [
                  "power of 3",
                  "prime number",
                  "divisibility",
                  "mathematical property",
                ],
                details: [
                  "Prime property: unique factorization",
                  "Maximum power: 3^19 for 32-bit",
                ],
              },
              {
                title: "Step 3: Choose Data Structure",
                description:
                  "Single integer check. Use maximum power of 3 or iterative division.",
                details: [
                  "O(1) space: constant check",
                  "Iterative: O(log n) divisions",
                ],
              },
              {
                title: "Step 4: Select Algorithm",
                description:
                  "Method 1: return n > 0 && (3^19) % n == 0. Method 2: while n > 1 and n % 3 == 0, n /= 3. Return n == 1.",
                details: [
                  "Method 1: O(1) constant check",
                  "Method 2: O(log₃ n) divisions",
                ],
              },
              {
                title: "Step 5: Implement & Optimize",
                description:
                  "Time O(1) with maximum power check, O(log n) with division. Space O(1). Both are efficient.",
                details: [
                  "Constant time with prime property",
                  "Logarithmic with division",
                ],
              },
            ],
            pattern: "Mathematical Property (Power of Prime)",
            complexity: {
              time: "O(1) or O(log n)",
              space: "O(1)",
            },
          }}
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
          approach={{
            steps: [
              {
                title: "Step 1: Understand & Clarify",
                description:
                  "Check if number is perfect square. Perfect square: number that is square of integer.",
                details: [
                  "Example: 16 is perfect square (4²), 18 is not",
                  "Need efficient check",
                ],
              },
              {
                title: "Step 2: Identify Pattern",
                description:
                  "Binary search: search for integer x where x² = num. Range: 1 to num/2. Alternatively, sum odd numbers: 1+3+5+... = n².",
                keywords: [
                  "perfect square",
                  "binary search",
                  "mathematical property",
                  "square root",
                ],
                details: [
                  "Binary search: O(log n)",
                  "Odd sum: mathematical property",
                ],
              },
              {
                title: "Step 3: Choose Data Structure",
                description:
                  "Binary search: use left, right pointers. Odd sum: accumulate sum.",
                details: ["Binary search: O(1) space", "Odd sum: O(1) space"],
              },
              {
                title: "Step 4: Select Algorithm",
                description:
                  "Binary search: left=1, right=num/2. While left<=right: mid=(left+right)/2, if mid²==num return true, else if mid²<num left=mid+1, else right=mid-1. Return false.",
                details: [
                  "Binary search: O(log n) time",
                  "Check mid²: O(1) operation",
                ],
              },
              {
                title: "Step 5: Implement & Optimize",
                description:
                  "Time O(log n) - binary search. Space O(1). Efficient for large numbers.",
                details: [
                  "Optimal logarithmic solution",
                  "Better than O(√n) linear search",
                ],
              },
            ],
            pattern: "Binary Search (Perfect Square)",
            complexity: {
              time: "O(log n)",
              space: "O(1)",
            },
          }}
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
          approach={{
            steps: [
              {
                title: "Step 1: Understand & Clarify",
                description:
                  "Find integer square root of x (floor of √x). Cannot use built-in sqrt function.",
                details: [
                  "Example: x=8 → 2 (since 2²=4, 3²=9)",
                  "Return largest integer whose square ≤ x",
                ],
              },
              {
                title: "Step 2: Identify Pattern",
                description:
                  "Binary search: search for largest integer mid where mid² ≤ x. Range: 1 to x/2 (or x for safety).",
                keywords: [
                  "square root",
                  "binary search",
                  "floor function",
                  "integer sqrt",
                ],
                details: [
                  "Binary search: find largest valid mid",
                  "Check mid² ≤ x",
                ],
              },
              {
                title: "Step 3: Choose Data Structure",
                description:
                  "Binary search with left, right pointers. Track result.",
                details: [
                  "O(1) space: just pointers",
                  "Binary search: O(log n) time",
                ],
              },
              {
                title: "Step 4: Select Algorithm",
                description:
                  "If x < 2, return x. left=1, right=x/2. While left<=right: mid=(left+right)/2, if mid²<=x: result=mid, left=mid+1, else right=mid-1. Return result.",
                details: [
                  "Binary search: O(log x) time",
                  "Find largest valid mid",
                ],
              },
              {
                title: "Step 5: Implement & Optimize",
                description:
                  "Time O(log x) - binary search. Space O(1). Optimal solution without using sqrt function.",
                details: [
                  "Optimal logarithmic solution",
                  "Efficient for large numbers",
                ],
              },
            ],
            pattern: "Binary Search (Integer Square Root)",
            complexity: {
              time: "O(log x)",
              space: "O(1)",
            },
          }}
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
            code={{
              JavaScript: `// Sum of first n natural numbers: n(n+1)/2
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
console.log(sumAP(1, 100, 100));  // 5050`,
              Java: `public class SumFormulas {
    // Sum of first n natural numbers: n(n+1)/2
    public static long sumFirstN(int n) {
        return (long) n * (n + 1) / 2;
    }
    
    // Sum of squares: n(n+1)(2n+1)/6
    public static long sumOfSquares(int n) {
        return (long) n * (n + 1) * (2 * n + 1) / 6;
    }
    
    // Sum of cubes: [n(n+1)/2]^2
    public static long sumOfCubes(int n) {
        long s = sumFirstN(n);
        return s * s;
    }
    
    // Sum of arithmetic progression
    public static long sumAP(int first, int last, int n) {
        return (long) n * (first + last) / 2;
    }
    
    // Sum of geometric progression
    public static double sumGP(double a, double r, int n) {
        if (r == 1) return a * n;
        return a * (Math.pow(r, n) - 1) / (r - 1);
    }
    
    public static void main(String[] args) {
        System.out.println(sumFirstN(100));      // 5050
        System.out.println(sumOfSquares(5));     // 55
        System.out.println(sumAP(1, 100, 100));  // 5050
    }
}`,
            }}
          />
        </TheoryBlock>

        <ProblemBlock
          title="Problem: Missing Number (LeetCode #268)"
          difficulty="Easy"
          description="Array contains n distinct numbers from 0 to n. Find the missing number."
          solutions={{
            JavaScript: `// Math approach using sum formula
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
console.log(missingNumber([9,6,4,2,3,5,7,0,1]));  // 8`,
            Java: `public class MissingNumber {
    // Math approach using sum formula
    public int missingNumber(int[] nums) {
        int n = nums.length;
        int expectedSum = n * (n + 1) / 2;
        int actualSum = 0;
        for (int num : nums) {
            actualSum += num;
        }
        return expectedSum - actualSum;
    }
    
    // XOR approach
    public int missingNumberXOR(int[] nums) {
        int xor = nums.length;  // Start with n
        
        for (int i = 0; i < nums.length; i++) {
            xor ^= i ^ nums[i];
        }
        
        return xor;
    }
    
    public static void main(String[] args) {
        MissingNumber solver = new MissingNumber();
        System.out.println(solver.missingNumber(new int[]{3, 0, 1}));     // 2
        System.out.println(solver.missingNumber(new int[]{0, 1}));        // 2
        System.out.println(solver.missingNumber(new int[]{9,6,4,2,3,5,7,0,1}));  // 8
    }
}`,
          }}
          explanation="Sum of 0 to n is n(n+1)/2. Subtract actual sum to get missing number. XOR also works since a^a=0."
          approach={{
            steps: [
              {
                title: "Step 1: Understand & Clarify",
                description:
                  "Find missing number in array containing n distinct numbers in range [0, n]. One number is missing.",
                details: [
                  "Example: [3,0,1] → missing 2",
                  "Array has n elements, range is [0, n]",
                ],
              },
              {
                title: "Step 2: Identify Pattern",
                description:
                  "Mathematical: sum of 0 to n is n(n+1)/2. Missing = expected_sum - actual_sum. XOR: XOR all numbers 0 to n, XOR with array, result is missing.",
                keywords: [
                  "missing number",
                  "sum formula",
                  "XOR",
                  "mathematical property",
                ],
                details: [
                  "Sum approach: simple and efficient",
                  "XOR approach: no overflow risk",
                ],
              },
              {
                title: "Step 3: Choose Data Structure",
                description:
                  "Sum: calculate expected and actual sums. XOR: accumulate XOR result.",
                details: [
                  "O(1) space: just variables",
                  "Single pass: O(n) time",
                ],
              },
              {
                title: "Step 4: Select Algorithm",
                description:
                  "Sum: expected = n*(n+1)/2, actual = sum(nums), return expected - actual. XOR: result = 0, for i from 0 to n: result ^= i, for num in nums: result ^= num, return result.",
                details: [
                  "Sum: O(n) time, risk of overflow",
                  "XOR: O(n) time, no overflow",
                ],
              },
              {
                title: "Step 5: Implement & Optimize",
                description:
                  "Time O(n) - single pass. Space O(1). XOR approach avoids overflow, sum approach is simpler.",
                details: [
                  "Both approaches are optimal",
                  "XOR is safer for large numbers",
                ],
              },
            ],
            pattern: "Mathematical Formula (Sum/XOR)",
            complexity: {
              time: "O(n)",
              space: "O(1)",
            },
          }}
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
          solutions={{
            JavaScript: `function productExceptSelf(nums) {
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
// 24 = 2*3*4, 12 = 1*3*4, 8 = 1*2*4, 6 = 1*2*3`,
            Java: `public class ProductExceptSelf {
    public int[] productExceptSelf(int[] nums) {
        int n = nums.length;
        int[] result = new int[n];
        
        // Calculate left products
        result[0] = 1;
        for (int i = 1; i < n; i++) {
            result[i] = result[i - 1] * nums[i - 1];
        }
        
        // Calculate right products and multiply
        int rightProduct = 1;
        for (int i = n - 1; i >= 0; i--) {
            result[i] *= rightProduct;
            rightProduct *= nums[i];
        }
        
        return result;
    }
    
    public static void main(String[] args) {
        ProductExceptSelf solver = new ProductExceptSelf();
        int[] result = solver.productExceptSelf(new int[]{1, 2, 3, 4});
        // [24, 12, 8, 6]
        // 24 = 2*3*4, 12 = 1*3*4, 8 = 1*2*4, 6 = 1*2*3
    }
}`,
          }}
          explanation="Two pass: first calculate left products, then multiply with right products going backward. O(n) time, O(1) extra space."
          approach={{
            steps: [
              {
                title: "Step 1: Understand & Clarify",
                description:
                  "Return array where result[i] = product of all elements except nums[i]. Cannot use division. O(n) time, O(1) extra space.",
                details: [
                  "Example: [1,2,3,4] → [24,12,8,6]",
                  "Cannot use division (zero handling)",
                ],
              },
              {
                title: "Step 2: Identify Pattern",
                description:
                  "Two-pass: first pass calculate left products (products of all elements to left). Second pass multiply with right products (going backward).",
                keywords: [
                  "prefix product",
                  "suffix product",
                  "two pass",
                  "array manipulation",
                ],
                details: ["Left products: prefix", "Right products: suffix"],
              },
              {
                title: "Step 3: Choose Data Structure",
                description:
                  "Result array. Use result array to store left products, then multiply with right products.",
                details: ["O(n) space for output", "O(1) extra space"],
              },
              {
                title: "Step 4: Select Algorithm",
                description:
                  "Pass 1: result[0]=1, for i from 1 to n-1: result[i] = result[i-1] * nums[i-1]. Pass 2: right=1, for i from n-1 to 0: result[i] *= right, right *= nums[i].",
                details: [
                  "Pass 1: calculate left products",
                  "Pass 2: multiply with right products",
                ],
              },
              {
                title: "Step 5: Implement & Optimize",
                description:
                  "Time O(n) - two passes. Space O(1) extra (output space doesn't count). Optimal solution without division.",
                details: [
                  "Optimal time and space",
                  "Elegant two-pass approach",
                ],
              },
            ],
            pattern: "Prefix/Suffix Product (Two Pass)",
            complexity: {
              time: "O(n)",
              space: "O(1) extra",
            },
          }}
        />

        <ProblemBlock
          title="Problem: Maximum Product Subarray (LeetCode #152)"
          difficulty="Medium"
          description="Find contiguous subarray with largest product."
          solutions={{
            JavaScript: `function maxProduct(nums) {
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
console.log(maxProduct([-2, 3, -4]));       // 24`,
            Java: `public class MaxProductSubarray {
    public int maxProduct(int[] nums) {
        int maxProd = nums[0];
        int minProd = nums[0];  // Track min for negative numbers
        int result = nums[0];
        
        for (int i = 1; i < nums.length; i++) {
            int num = nums[i];
            
            // If negative, swap max and min
            if (num < 0) {
                int temp = maxProd;
                maxProd = minProd;
                minProd = temp;
            }
            
            // Update max and min products
            maxProd = Math.max(num, maxProd * num);
            minProd = Math.min(num, minProd * num);
            
            result = Math.max(result, maxProd);
        }
        
        return result;
    }
    
    public static void main(String[] args) {
        MaxProductSubarray solver = new MaxProductSubarray();
        System.out.println(solver.maxProduct(new int[]{2, 3, -2, 4}));     // 6
        System.out.println(solver.maxProduct(new int[]{-2, 0, -1}));       // 0
        System.out.println(solver.maxProduct(new int[]{-2, 3, -4}));       // 24
    }
}`,
          }}
          explanation="Track both max and min products. When encountering negative number, min becomes max and vice versa."
          approach={{
            steps: [
              {
                title: "Step 1: Understand & Clarify",
                description:
                  "Find maximum product of contiguous subarray. Array may contain negative numbers.",
                details: [
                  "Example: [2,3,-2,4] → 6 (subarray [2,3])",
                  "Negative numbers can flip sign",
                ],
              },
              {
                title: "Step 2: Identify Pattern",
                description:
                  "Track both max and min products ending at current position. When encountering negative number, swap max and min (negative flips sign).",
                keywords: [
                  "maximum product",
                  "dynamic programming",
                  "negative numbers",
                  "sign flip",
                ],
                details: [
                  "Max product: can come from max or min",
                  "Negative: flips max and min",
                ],
              },
              {
                title: "Step 3: Choose Data Structure",
                description:
                  "Two variables: maxProd and minProd. Track global maximum.",
                details: [
                  "O(1) space: just variables",
                  "Single pass: O(n) time",
                ],
              },
              {
                title: "Step 4: Select Algorithm",
                description:
                  "Initialize maxProd=minProd=result=nums[0]. For i from 1 to n-1: if nums[i] < 0, swap maxProd and minProd. maxProd = max(nums[i], maxProd*nums[i]), minProd = min(nums[i], minProd*nums[i]), result = max(result, maxProd).",
                details: [
                  "Handle negative: swap max and min",
                  "Update max and min: consider current or extend",
                ],
              },
              {
                title: "Step 5: Implement & Optimize",
                description:
                  "Time O(n) - single pass. Space O(1). Optimal solution handling negative numbers correctly.",
                details: [
                  "Optimal linear solution",
                  "Correctly handles negative numbers",
                ],
              },
            ],
            pattern: "Dynamic Programming (Max/Min Product)",
            complexity: {
              time: "O(n)",
              space: "O(1)",
            },
          }}
        />

        <ProblemBlock
          title="Problem: Majority Element (LeetCode #169)"
          difficulty="Easy"
          description="Find element appearing more than n/2 times. (Boyer-Moore Voting)"
          solutions={{
            JavaScript: `function majorityElement(nums) {
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
 */`,
            Java: `public class MajorityElement {
    public int majorityElement(int[] nums) {
        Integer candidate = null;
        int count = 0;
        
        // Find candidate
        for (int num : nums) {
            if (count == 0) {
                candidate = num;
            }
            count += (num == candidate) ? 1 : -1;
        }
        
        return candidate;
    }
    
    public static void main(String[] args) {
        MajorityElement solver = new MajorityElement();
        System.out.println(solver.majorityElement(new int[]{3, 2, 3}));        // 3
        System.out.println(solver.majorityElement(new int[]{2, 2, 1, 1, 1, 2, 2}));  // 2
        
        /* Boyer-Moore Voting Algorithm:
         * Majority element appears > n/2 times
         * If we cancel out each occurrence with different element,
         * majority element will still remain
         */
    }
}`,
          }}
          explanation="Boyer-Moore algorithm: maintain a candidate and count. If count is 0, pick new candidate. Increment for same, decrement for different."
          approach={{
            steps: [
              {
                title: "Step 1: Understand & Clarify",
                description:
                  "Find majority element (appears more than n/2 times). Guaranteed to exist.",
                details: [
                  "Example: [3,2,3] → 3",
                  "Majority appears > n/2 times",
                ],
              },
              {
                title: "Step 2: Identify Pattern",
                description:
                  "Boyer-Moore Voting: maintain candidate and count. If count is 0, pick new candidate. Increment for same candidate, decrement for different. Final candidate is majority.",
                keywords: [
                  "boyer-moore",
                  "voting algorithm",
                  "majority element",
                  "cancellation",
                ],
                details: [
                  "Voting: pairs cancel out",
                  "Majority survives cancellation",
                ],
              },
              {
                title: "Step 3: Choose Data Structure",
                description:
                  "Two variables: candidate and count. No extra data structures needed.",
                details: [
                  "O(1) space: just variables",
                  "Single pass: O(n) time",
                ],
              },
              {
                title: "Step 4: Select Algorithm",
                description:
                  "Initialize candidate=nums[0], count=1. For i from 1 to n-1: if count==0, candidate=nums[i], count=1. Else if nums[i]==candidate, count++. Else count--. Return candidate.",
                details: ["Single pass: O(n) time", "Voting: pairs cancel out"],
              },
              {
                title: "Step 5: Implement & Optimize",
                description:
                  "Time O(n) - single pass. Space O(1). Optimal solution using voting algorithm.",
                details: ["Optimal time and space", "Elegant voting approach"],
              },
            ],
            pattern: "Boyer-Moore Voting Algorithm",
            complexity: {
              time: "O(n)",
              space: "O(1)",
            },
          }}
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
          solutions={{
            JavaScript: `function reverse(x) {
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
console.log(reverse(120));    // 21`,
            Java: `public class ReverseInteger {
    public int reverse(int x) {
        final int INT_MAX = 2147483647;   // 2^31 - 1
        final int INT_MIN = -2147483648;  // -2^31
        
        int result = 0;
        int num = Math.abs(x);
        
        while (num > 0) {
            int digit = num % 10;
            num /= 10;
            
            // Check overflow before multiplying
            if (result > INT_MAX / 10 || 
                (result == INT_MAX / 10 && digit > 7)) {
                return 0;
            }
            
            result = result * 10 + digit;
        }
        
        return x < 0 ? -result : result;
    }
    
    public static void main(String[] args) {
        ReverseInteger solver = new ReverseInteger();
        System.out.println(solver.reverse(123));    // 321
        System.out.println(solver.reverse(-123));   // -321
        System.out.println(solver.reverse(120));    // 21
    }
}`,
          }}
          explanation="Extract digits using mod 10, build reversed number. Check overflow before each multiplication."
          approach={{
            steps: [
              {
                title: "Step 1: Understand & Clarify",
                description:
                  "Reverse digits of integer. Handle negative numbers and overflow (32-bit integer range).",
                details: [
                  "Example: 123 → 321, -123 → -321",
                  "If overflow, return 0",
                ],
              },
              {
                title: "Step 2: Identify Pattern",
                description:
                  "Extract digits using mod 10, build reversed number by multiplying by 10 and adding digit. Check overflow before multiplication.",
                keywords: [
                  "digit extraction",
                  "number reversal",
                  "overflow handling",
                  "modulo arithmetic",
                ],
                details: [
                  "Extract: x % 10",
                  "Build: reversed = reversed * 10 + digit",
                ],
              },
              {
                title: "Step 3: Choose Data Structure",
                description:
                  "Single variable for reversed number. Handle sign separately.",
                details: [
                  "O(1) space: just variables",
                  "Process digits: O(log₁₀ n) iterations",
                ],
              },
              {
                title: "Step 4: Select Algorithm",
                description:
                  "Handle sign: if x < 0, sign = -1, x = -x. reversed = 0. While x > 0: digit = x % 10, check overflow: if reversed > INT_MAX/10 or (reversed == INT_MAX/10 and digit > 7), return 0. reversed = reversed * 10 + digit, x /= 10. Return sign * reversed.",
                details: [
                  "Extract digits: O(log₁₀ n) time",
                  "Overflow check: before multiplication",
                ],
              },
              {
                title: "Step 5: Implement & Optimize",
                description:
                  "Time O(log₁₀ n) - number of digits. Space O(1). Optimal solution with overflow handling.",
                details: [
                  "Optimal logarithmic solution",
                  "Correct overflow handling",
                ],
              },
            ],
            pattern: "Digit Manipulation (Number Reversal)",
            complexity: {
              time: "O(log₁₀ n)",
              space: "O(1)",
            },
          }}
        />

        <ProblemBlock
          title="Problem: Palindrome Number (LeetCode #9)"
          difficulty="Easy"
          description="Determine if integer is palindrome without converting to string."
          solutions={{
            JavaScript: `function isPalindrome(x) {
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
console.log(isPalindrome(10));     // false`,
            Java: `public class PalindromeNumber {
    public boolean isPalindrome(int x) {
        // Negative numbers are not palindromes
        // Numbers ending in 0 are not palindromes (except 0 itself)
        if (x < 0 || (x % 10 == 0 && x != 0)) {
            return false;
        }
        
        int reversed = 0;
        
        // Reverse half the number
        while (x > reversed) {
            reversed = reversed * 10 + x % 10;
            x /= 10;
        }
        
        // For even length: x == reversed
        // For odd length: x == reversed / 10
        return x == reversed || x == reversed / 10;
    }
    
    public static void main(String[] args) {
        PalindromeNumber solver = new PalindromeNumber();
        System.out.println(solver.isPalindrome(121));    // true
        System.out.println(solver.isPalindrome(12321));  // true
        System.out.println(solver.isPalindrome(-121));   // false
        System.out.println(solver.isPalindrome(10));     // false
    }
}`,
          }}
          explanation="Only reverse half the number. Compare with original half. Handle odd/even lengths."
          approach={{
            steps: [
              {
                title: "Step 1: Understand & Clarify",
                description:
                  "Check if integer is palindrome. Palindrome reads same forwards and backwards.",
                details: [
                  "Example: 121 is palindrome, 123 is not",
                  "Negative numbers are not palindromes",
                ],
              },
              {
                title: "Step 2: Identify Pattern",
                description:
                  "Reverse only half the number. Compare reversed half with original half. For even length: compare directly. For odd length: ignore middle digit.",
                keywords: [
                  "palindrome",
                  "number reversal",
                  "digit comparison",
                  "optimization",
                ],
                details: [
                  "Reverse half: avoid full reversal",
                  "Compare halves: efficient check",
                ],
              },
              {
                title: "Step 3: Choose Data Structure",
                description:
                  "Two variables: original (decreasing) and reversed (increasing). Process until reversed >= original.",
                details: [
                  "O(1) space: just variables",
                  "Process half digits: O(log₁₀ n/2)",
                ],
              },
              {
                title: "Step 4: Select Algorithm",
                description:
                  "If x < 0 or (x != 0 and x % 10 == 0), return false. reversed = 0. While x > reversed: reversed = reversed * 10 + x % 10, x /= 10. Return x == reversed || x == reversed/10 (handle odd length).",
                details: [
                  "Reverse half: O(log₁₀ n/2) time",
                  "Compare: O(1) time",
                ],
              },
              {
                title: "Step 5: Implement & Optimize",
                description:
                  "Time O(log₁₀ n) - half the digits. Space O(1). Optimal solution without converting to string.",
                details: [
                  "Optimal logarithmic solution",
                  "No string conversion needed",
                ],
              },
            ],
            pattern: "Half Reversal (Palindrome Check)",
            complexity: {
              time: "O(log₁₀ n)",
              space: "O(1)",
            },
          }}
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
                  ? "bg-purple-500 text-white"
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
        className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors mb-4"
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

          {/* Tab Content */}
          {activeTab === "solution" && (
            <div>
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
