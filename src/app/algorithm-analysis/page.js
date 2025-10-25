"use client";
import Link from "next/link";
import { useState } from "react";

const complexityLevels = [
  {
    name: "O(1)",
    label: "Constant",
    color: "text-green-400",
    bgColor: "bg-green-500/20",
    description: "Best - Same time regardless of input size",
    examples: ["Array access", "Hash table lookup", "Push/Pop stack"],
  },
  {
    name: "O(log n)",
    label: "Logarithmic",
    color: "text-blue-400",
    bgColor: "bg-blue-500/20",
    description: "Great - Divides problem in half each step",
    examples: ["Binary search", "Balanced tree operations"],
  },
  {
    name: "O(n)",
    label: "Linear",
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/20",
    description: "Good - Grows proportionally with input",
    examples: ["Linear search", "Loop through array", "Find min/max"],
  },
  {
    name: "O(n log n)",
    label: "Linearithmic",
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/20",
    description: "Acceptable - Most efficient sorting algorithms",
    examples: ["Merge sort", "Quick sort", "Heap sort"],
  },
  {
    name: "O(n²)",
    label: "Quadratic",
    color: "text-orange-400",
    bgColor: "bg-orange-500/20",
    description: "Slow - Nested loops over input",
    examples: ["Bubble sort", "Nested loops", "Compare all pairs"],
  },
  {
    name: "O(2ⁿ)",
    label: "Exponential",
    color: "text-red-400",
    bgColor: "bg-red-500/20",
    description: "Very Slow - Doubles with each addition",
    examples: ["Recursive fibonacci", "Subsets generation"],
  },
  {
    name: "O(n!)",
    label: "Factorial",
    color: "text-red-600",
    bgColor: "bg-red-600/20",
    description: "Extremely Slow - Avoid if possible!",
    examples: ["Permutations", "Traveling salesman (brute force)"],
  },
];

const codeExamples = [
  {
    title: "O(1) - Constant Time",
    complexity: "O(1)",
    description: "Operations that take the same time regardless of input size",
    code: `function getFirstElement(arr) {
  return arr[0];  // Always 1 operation
}

function updateValue(obj, key, value) {
  obj[key] = value;  // Hash table lookup: O(1)
  return obj;
}`,
    explanation:
      "These operations always take the same time, whether the array has 10 or 10 million elements.",
  },
  {
    title: "O(n) - Linear Time",
    complexity: "O(n)",
    description: "Time grows proportionally with input size",
    code: `function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {  // Loop n times
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}`,
    explanation:
      "We must check every element once. If array doubles in size, time doubles too.",
  },
  {
    title: "O(n²) - Quadratic Time",
    complexity: "O(n²)",
    description: "Time grows with the square of input size",
    code: `function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {        // n times
    for (let j = 0; j < arr.length - i - 1; j++) {  // n times
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}`,
    explanation:
      "Nested loops: outer loop runs n times, inner loop runs n times. Total: n × n = n²",
  },
  {
    title: "O(log n) - Logarithmic Time",
    complexity: "O(log n)",
    description: "Time grows slowly as we divide the problem",
    code: `function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}`,
    explanation:
      "We eliminate half the remaining elements each step. Array of 1000 → only ~10 steps needed!",
  },
];

const spaceExamples = [
  {
    title: "O(1) - Constant Space",
    code: `function sum(arr) {
  let total = 0;  // Only 1 variable
  for (let num of arr) {
    total += num;
  }
  return total;
}`,
    explanation: "Uses only a few variables regardless of input size",
  },
  {
    title: "O(n) - Linear Space",
    code: `function doubleArray(arr) {
  let result = [];  // New array of size n
  for (let num of arr) {
    result.push(num * 2);
  }
  return result;
}`,
    explanation: "Creates new array proportional to input size",
  },
  {
    title: "O(n) - Recursive Stack Space",
    code: `function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);  // n recursive calls
}`,
    explanation:
      "Each recursive call adds to the call stack. Space = depth of recursion",
  },
];

export default function AlgorithmAnalysis() {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedExample, setSelectedExample] = useState(0);

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
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Algorithm Analysis
          </h1>
          <p className="text-gray-400 mt-2">
            Master Time & Space Complexity with Big O Notation
          </p>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-gray-800/50 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-2 overflow-x-auto">
            {[
              { id: "overview", label: "📚 Overview" },
              { id: "time", label: "⏱️ Time Complexity" },
              { id: "space", label: "💾 Space Complexity" },
              { id: "practice", label: "💡 Practice" },
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
        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* What is Big O */}
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <h2 className="text-3xl font-bold text-white mb-4">
                What is Big O Notation?
              </h2>
              <p className="text-gray-300 text-lg mb-4">
                Big O notation is a mathematical way to describe how the runtime
                or space requirements of an algorithm grow as the input size
                increases.
              </p>
              <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-6 mb-4">
                <p className="text-blue-200 text-lg">
                  <strong>Think of it like this:</strong> If you have a list of
                  10 items vs 1,000,000 items, how much longer will your
                  algorithm take?
                </p>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 text-xl">•</span>
                  <span>
                    <strong>Worst Case:</strong> Big O describes the worst-case
                    scenario
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 text-xl">•</span>
                  <span>
                    <strong>Drop Constants:</strong> O(2n) becomes O(n), O(n/2)
                    becomes O(n)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 text-xl">•</span>
                  <span>
                    <strong>Drop Lower Terms:</strong> O(n² + n) becomes O(n²)
                  </span>
                </li>
              </ul>
            </div>

            {/* Complexity Chart */}
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-6">
                Common Complexity Classes
              </h2>
              <div className="space-y-4">
                {complexityLevels.map((level, idx) => (
                  <div
                    key={idx}
                    className={`${level.bgColor} border border-gray-700 rounded-lg p-4`}
                  >
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`text-2xl font-bold ${level.color}`}>
                            {level.name}
                          </span>
                          <span className="text-gray-400 text-sm">
                            ({level.label})
                          </span>
                        </div>
                        <p className="text-gray-300 mb-2">
                          {level.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {level.examples.map((ex, i) => (
                            <span
                              key={i}
                              className="text-xs bg-gray-900/50 px-3 py-1 rounded-full text-gray-400"
                            >
                              {ex}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Growth Comparison */}
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-6">
                How Fast Do They Grow?
              </h2>
              <p className="text-gray-400 mb-6">
                Compare operations needed for different input sizes:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left text-gray-400 pb-3 pr-4">
                        Complexity
                      </th>
                      <th className="text-right text-gray-400 pb-3 px-4">
                        n = 10
                      </th>
                      <th className="text-right text-gray-400 pb-3 px-4">
                        n = 100
                      </th>
                      <th className="text-right text-gray-400 pb-3 px-4">
                        n = 1,000
                      </th>
                      <th className="text-right text-gray-400 pb-3 pl-4">
                        n = 10,000
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-gray-700/50">
                      <td className="py-3 pr-4 text-green-400 font-semibold">
                        O(1)
                      </td>
                      <td className="text-right py-3 px-4">1</td>
                      <td className="text-right py-3 px-4">1</td>
                      <td className="text-right py-3 px-4">1</td>
                      <td className="text-right py-3 pl-4">1</td>
                    </tr>
                    <tr className="border-b border-gray-700/50">
                      <td className="py-3 pr-4 text-blue-400 font-semibold">
                        O(log n)
                      </td>
                      <td className="text-right py-3 px-4">3</td>
                      <td className="text-right py-3 px-4">7</td>
                      <td className="text-right py-3 px-4">10</td>
                      <td className="text-right py-3 pl-4">13</td>
                    </tr>
                    <tr className="border-b border-gray-700/50">
                      <td className="py-3 pr-4 text-cyan-400 font-semibold">
                        O(n)
                      </td>
                      <td className="text-right py-3 px-4">10</td>
                      <td className="text-right py-3 px-4">100</td>
                      <td className="text-right py-3 px-4">1,000</td>
                      <td className="text-right py-3 pl-4">10,000</td>
                    </tr>
                    <tr className="border-b border-gray-700/50">
                      <td className="py-3 pr-4 text-yellow-400 font-semibold">
                        O(n log n)
                      </td>
                      <td className="text-right py-3 px-4">33</td>
                      <td className="text-right py-3 px-4">664</td>
                      <td className="text-right py-3 px-4">9,966</td>
                      <td className="text-right py-3 pl-4">132,877</td>
                    </tr>
                    <tr className="border-b border-gray-700/50">
                      <td className="py-3 pr-4 text-orange-400 font-semibold">
                        O(n²)
                      </td>
                      <td className="text-right py-3 px-4">100</td>
                      <td className="text-right py-3 px-4">10,000</td>
                      <td className="text-right py-3 px-4">1,000,000</td>
                      <td className="text-right py-3 pl-4">100,000,000</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 text-red-400 font-semibold">
                        O(2ⁿ)
                      </td>
                      <td className="text-right py-3 px-4">1,024</td>
                      <td className="text-right py-3 px-4">1.3×10³⁰</td>
                      <td className="text-right py-3 px-4 text-red-400">∞</td>
                      <td className="text-right py-3 pl-4 text-red-400">∞</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-500 text-xs mt-4">
                * ∞ means &quot;way too many to compute in reasonable time&quot;
              </p>
            </div>
          </div>
        )}

        {/* Time Complexity Tab */}
        {activeTab === "time" && (
          <div className="space-y-8">
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <h2 className="text-3xl font-bold text-white mb-4">
                Time Complexity
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                Time complexity measures how the number of operations grows as
                input size increases.
              </p>

              {/* Example Selector */}
              <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                {codeExamples.map((ex, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedExample(idx)}
                    className={`px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition-all ${
                      selectedExample === idx
                        ? "bg-blue-500 text-white"
                        : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                    }`}
                  >
                    {ex.complexity}
                  </button>
                ))}
              </div>

              {/* Selected Example */}
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {codeExamples[selectedExample].title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {codeExamples[selectedExample].description}
                </p>

                <div className="bg-gray-950 rounded-lg p-4 mb-4 overflow-x-auto">
                  <pre className="text-sm text-green-400">
                    <code>{codeExamples[selectedExample].code}</code>
                  </pre>
                </div>

                <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-4">
                  <p className="text-blue-200">
                    <strong>
                      💡 Why {codeExamples[selectedExample].complexity}?
                    </strong>
                    <br />
                    {codeExamples[selectedExample].explanation}
                  </p>
                </div>
              </div>
            </div>

            {/* Rules for Calculating */}
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-6">
                Rules for Calculating Time Complexity
              </h2>
              <div className="space-y-4">
                <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    1. Sequential Statements - Add Them
                  </h3>
                  <div className="bg-gray-950 rounded p-4 mb-3">
                    <pre className="text-sm text-green-400">
                      <code>{`let sum = 0;           // O(1)
for (let i = 0; i < n; i++) {  // O(n)
  sum += arr[i];
}
console.log(sum);      // O(1)

// Total: O(1) + O(n) + O(1) = O(n)`}</code>
                    </pre>
                  </div>
                </div>

                <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    2. Nested Loops - Multiply Them
                  </h3>
                  <div className="bg-gray-950 rounded p-4 mb-3">
                    <pre className="text-sm text-green-400">
                      <code>{`for (let i = 0; i < n; i++) {      // Runs n times
  for (let j = 0; j < n; j++) {    // Runs n times for each i
    console.log(i, j);
  }
}

// Total: n × n = O(n²)`}</code>
                    </pre>
                  </div>
                </div>

                <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    3. Drop Constants
                  </h3>
                  <div className="bg-gray-950 rounded p-4 mb-3">
                    <pre className="text-sm text-green-400">
                      <code>{`// Loop 1
for (let i = 0; i < n; i++) {  // O(n)
  console.log(i);
}
// Loop 2
for (let i = 0; i < n; i++) {  // O(n)
  console.log(i * 2);
}

// Total: O(n) + O(n) = O(2n) → O(n)
// We drop the constant 2`}</code>
                    </pre>
                  </div>
                </div>

                <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    4. Drop Non-Dominant Terms
                  </h3>
                  <div className="bg-gray-950 rounded p-4 mb-3">
                    <pre className="text-sm text-green-400">
                      <code>{`for (let i = 0; i < n; i++) {          // O(n)
  for (let j = 0; j < n; j++) {        // O(n²)
    console.log(i, j);
  }
}
for (let i = 0; i < n; i++) {          // O(n)
  console.log(i);
}

// Total: O(n²) + O(n) = O(n² + n) → O(n²)
// n² dominates n as n grows`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Space Complexity Tab */}
        {activeTab === "space" && (
          <div className="space-y-8">
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <h2 className="text-3xl font-bold text-white mb-4">
                Space Complexity
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                Space complexity measures how much memory an algorithm uses as
                input size increases.
              </p>

              <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-blue-200 mb-3">
                  Two Types of Space:
                </h3>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-3">
                    <span>1.</span>
                    <span>
                      <strong>Auxiliary Space:</strong> Extra space used by the
                      algorithm (arrays, variables, etc.)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span>2.</span>
                    <span>
                      <strong>Input Space:</strong> Space used by the input
                      itself
                    </span>
                  </li>
                </ul>
                <p className="mt-3 text-sm text-blue-300">
                  When we talk about space complexity, we usually mean{" "}
                  <strong>auxiliary space</strong>.
                </p>
              </div>

              {/* Space Examples */}
              <div className="space-y-6">
                {spaceExamples.map((ex, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-900 rounded-lg p-6 border border-gray-700"
                  >
                    <h3 className="text-xl font-bold text-white mb-3">
                      {ex.title}
                    </h3>
                    <div className="bg-gray-950 rounded p-4 mb-4">
                      <pre className="text-sm text-green-400">
                        <code>{ex.code}</code>
                      </pre>
                    </div>
                    <div className="bg-purple-900/30 border border-purple-500/30 rounded p-4">
                      <p className="text-purple-200">
                        <strong>💾 Space Analysis:</strong> {ex.explanation}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Common Pitfalls */}
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-6">
                ⚠️ Common Space Complexity Pitfalls
              </h2>
              <div className="space-y-4">
                <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-yellow-400 mb-2">
                    Recursion Uses Stack Space!
                  </h3>
                  <p className="text-gray-300 mb-3">
                    Each recursive call adds to the call stack. A function that
                    calls itself n times uses O(n) space.
                  </p>
                  <div className="bg-gray-950 rounded p-3">
                    <pre className="text-xs text-green-400">
                      <code>{`// This uses O(n) space due to call stack!
function recursiveSum(arr, index = 0) {
  if (index >= arr.length) return 0;
  return arr[index] + recursiveSum(arr, index + 1);
}`}</code>
                    </pre>
                  </div>
                </div>

                <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-yellow-400 mb-2">
                    Creating New Data Structures
                  </h3>
                  <p className="text-gray-300 mb-3">
                    Any time you create a new array, object, or data structure,
                    consider its size.
                  </p>
                  <div className="bg-gray-950 rounded p-3">
                    <pre className="text-xs text-green-400">
                      <code>{`// O(n) space - creating new array
function filterEven(arr) {
  return arr.filter(x => x % 2 === 0);  // New array!
}`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Practice Tab */}
        {activeTab === "practice" && (
          <div className="space-y-8">
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <h2 className="text-3xl font-bold text-white mb-4">
                Practice Problems
              </h2>
              <p className="text-gray-300 mb-6">
                Analyze the time and space complexity of these code snippets.
                Click &quot;Show Answer&quot; to check!
              </p>

              <PracticeProblem
                number={1}
                code={`function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}`}
                timeAnswer="O(n)"
                timeExplanation="Single loop through n elements"
                spaceAnswer="O(1)"
                spaceExplanation="Only using one variable (sum), constant space"
              />

              <PracticeProblem
                number={2}
                code={`function printPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}`}
                timeAnswer="O(n²)"
                timeExplanation="Nested loops: outer runs n times, inner runs up to n times"
                spaceAnswer="O(1)"
                spaceExplanation="No extra data structures created"
              />

              <PracticeProblem
                number={3}
                code={`function createCopy(arr) {
  let copy = [];
  for (let i = 0; i < arr.length; i++) {
    copy.push(arr[i]);
  }
  return copy;
}`}
                timeAnswer="O(n)"
                timeExplanation="Single loop through n elements"
                spaceAnswer="O(n)"
                spaceExplanation="Creating new array of size n"
              />

              <PracticeProblem
                number={4}
                code={`function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}`}
                timeAnswer="O(log n)"
                timeExplanation="Dividing search space in half each iteration"
                spaceAnswer="O(1)"
                spaceExplanation="Only using a few variables, no recursion"
              />

              <PracticeProblem
                number={5}
                code={`function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}`}
                timeAnswer="O(2ⁿ)"
                timeExplanation="Each call branches into two more calls, exponential growth"
                spaceAnswer="O(n)"
                spaceExplanation="Recursion depth is n (call stack)"
              />

              <PracticeProblem
                number={6}
                code={`function hasDuplicate(arr) {
  let seen = new Set();
  for (let num of arr) {
    if (seen.has(num)) return true;
    seen.add(num);
  }
  return false;
}`}
                timeAnswer="O(n)"
                timeExplanation="Single loop, Set operations are O(1)"
                spaceAnswer="O(n)"
                spaceExplanation="Set can store up to n elements in worst case"
              />
            </div>

            {/* Quick Tips */}
            <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-xl p-6 border border-green-500/30">
              <h3 className="text-xl font-bold text-white mb-4">
                🎯 Quick Analysis Tips
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-green-400">✓</span>
                  <span>
                    <strong>Single loop:</strong> O(n) time
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400">✓</span>
                  <span>
                    <strong>Nested loops:</strong> O(n²) time (or O(n × m) if
                    different sizes)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400">✓</span>
                  <span>
                    <strong>Dividing in half:</strong> O(log n) time
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400">✓</span>
                  <span>
                    <strong>Recursion depth:</strong> Often determines space
                    complexity
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400">✓</span>
                  <span>
                    <strong>New data structure:</strong> Consider its size for
                    space
                  </span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

// Practice Problem Component
function PracticeProblem({
  number,
  code,
  timeAnswer,
  timeExplanation,
  spaceAnswer,
  spaceExplanation,
}) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="bg-gray-900 rounded-lg p-6 border border-gray-700 mb-6">
      <h3 className="text-xl font-semibold text-white mb-4">
        Problem {number}
      </h3>
      <div className="bg-gray-950 rounded p-4 mb-4">
        <pre className="text-sm text-green-400 overflow-x-auto">
          <code>{code}</code>
        </pre>
      </div>

      <button
        onClick={() => setShowAnswer(!showAnswer)}
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors mb-4"
      >
        {showAnswer ? "Hide Answer" : "Show Answer"}
      </button>

      {showAnswer && (
        <div className="space-y-4 mt-4">
          <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">⏱️</span>
              <span className="font-bold text-white">
                Time Complexity:{" "}
                <span className="text-green-400">{timeAnswer}</span>
              </span>
            </div>
            <p className="text-gray-300">{timeExplanation}</p>
          </div>
          <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">💾</span>
              <span className="font-bold text-white">
                Space Complexity:{" "}
                <span className="text-purple-400">{spaceAnswer}</span>
              </span>
            </div>
            <p className="text-gray-300">{spaceExplanation}</p>
          </div>
        </div>
      )}
    </div>
  );
}
