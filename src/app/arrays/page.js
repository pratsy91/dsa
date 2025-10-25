"use client";
import Link from "next/link";
import { useState } from "react";

export default function Arrays() {
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
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
            Arrays & Strings Mastery
          </h1>
          <p className="text-gray-400 mt-2">
            Foundation of Programming - Contiguous Memory & Character Sequences
          </p>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-gray-800/50 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-2 overflow-x-auto">
            {[
              { id: "fundamentals", label: "📚 Fundamentals" },
              { id: "basic-problems", label: "🔰 Basic Problems" },
              { id: "intermediate", label: "⚡ Intermediate Problems" },
              { id: "patterns", label: "🎯 Advanced Patterns" },
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
        {activeTab === "basic-problems" && <BasicProblemsSection />}
        {activeTab === "intermediate" && <IntermediateProblemsSection />}
        {activeTab === "patterns" && <AdvancedPatternsSection />}
      </main>
    </div>
  );
}

// Fundamentals Section
function FundamentalsSection() {
  return (
    <div className="space-y-8">
      {/* What are Arrays */}
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">What are Arrays?</h2>
        <p className="text-gray-300 text-lg mb-6">
          Arrays are collections of elements stored at contiguous memory
          locations. They are the most fundamental data structure in
          programming.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-orange-200 mb-3">
              Key Characteristics:
            </h3>
            <ul className="space-y-2 text-orange-100">
              <li>
                • <strong>Contiguous Memory:</strong> Elements stored next to
                each other
              </li>
              <li>
                • <strong>Indexed Access:</strong> Direct access via index
                (O(1))
              </li>
              <li>
                • <strong>Fixed/Dynamic Size:</strong> Depending on language
              </li>
              <li>
                • <strong>Homogeneous:</strong> Same data type elements
              </li>
            </ul>
          </div>

          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-blue-200 mb-3">
              Basic Operations:
            </h3>
            <ul className="space-y-2 text-blue-100">
              <li>
                • <strong>Access:</strong> arr[i] - O(1)
              </li>
              <li>
                • <strong>Search:</strong> Linear search - O(n)
              </li>
              <li>
                • <strong>Insertion:</strong> End O(1), Middle O(n)
              </li>
              <li>
                • <strong>Deletion:</strong> End O(1), Middle O(n)
              </li>
            </ul>
          </div>
        </div>

        <TheoryBlock title="Array Declaration & Initialization">
          <CodeBlock
            code={`// Different ways to create arrays in JavaScript
const arr1 = [1, 2, 3, 4, 5];                    // Literal
const arr2 = new Array(5);                       // Size specified
const arr3 = new Array(1, 2, 3, 4, 5);          // With elements
const arr4 = Array.from({length: 5}, (_, i) => i + 1); // From constructor

// Common operations
console.log(arr1[0]);           // Access: 1
console.log(arr1.length);       // Length: 5
arr1.push(6);                   // Add to end: [1,2,3,4,5,6]
arr1.pop();                     // Remove from end: [1,2,3,4,5]
arr1.unshift(0);                // Add to start: [0,1,2,3,4,5]
arr1.shift();                   // Remove from start: [1,2,3,4,5]`}
          />
        </TheoryBlock>
      </div>

      {/* Memory Layout */}
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Memory Layout & Access
        </h2>
        <p className="text-gray-300 mb-6">
          Understanding how arrays are stored in memory helps optimize your code
          and understand time complexities.
        </p>

        <TheoryBlock title="Memory Representation">
          <CodeBlock
            code={`// Array: [10, 20, 30, 40, 50]
// Memory layout (simplified):
//
// Address:  1000  1004  1008  1012  1016
// Index:      0     1     2     3     4
// Value:     10    20    30    40    50
//
// To access arr[2]:
// Address = Base Address + (Index × Element Size)
// Address = 1000 + (2 × 4) = 1008
// Value = 30

// This is why array access is O(1) - direct memory calculation!
// No need to traverse like in linked lists.`}
          />
        </TheoryBlock>

        <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-6 mt-6">
          <h3 className="text-xl font-semibold text-green-200 mb-3">
            💡 Key Insight:
          </h3>
          <p className="text-green-100">
            Arrays provide <strong>O(1) random access</strong> because the
            memory address of any element can be calculated directly using the
            formula: <code>base_address + index × element_size</code>
          </p>
        </div>
      </div>

      {/* Common Patterns Preview */}
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Essential Array Patterns
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-3">
              🔍 Two Pointers
            </h3>
            <p className="text-gray-300 text-sm mb-3">
              Use two pointers moving from different ends or same direction.
            </p>
            <ul className="text-gray-400 text-xs space-y-1">
              <li>• Find pair with sum</li>
              <li>• Remove duplicates</li>
              <li>• Container with most water</li>
            </ul>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-3">
              🪟 Sliding Window
            </h3>
            <p className="text-gray-300 text-sm mb-3">
              Maintain a window of elements and slide it across the array.
            </p>
            <ul className="text-gray-400 text-xs space-y-1">
              <li>• Maximum subarray sum</li>
              <li>• Longest substring</li>
              <li>• Average of subarrays</li>
            </ul>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-3">
              📊 Prefix Sums
            </h3>
            <p className="text-gray-300 text-sm mb-3">
              Pre-compute sums to answer range queries in O(1).
            </p>
            <ul className="text-gray-400 text-xs space-y-1">
              <li>• Range sum queries</li>
              <li>• Equilibrium point</li>
              <li>• Subarray with given sum</li>
            </ul>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-3">
              ⚡ Kadane's Algorithm
            </h3>
            <p className="text-gray-300 text-sm mb-3">
              Find maximum sum subarray in O(n) time.
            </p>
            <ul className="text-gray-400 text-xs space-y-1">
              <li>• Maximum subarray sum</li>
              <li>• Maximum circular sum</li>
              <li>• Maximum product subarray</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// Basic Problems Section (from first image)
function BasicProblemsSection() {
  return (
    <div className="space-y-8">
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Basic Array Problems
        </h2>
        <p className="text-gray-300 mb-6">
          These fundamental problems build the foundation for more complex array
          algorithms. Master these patterns!
        </p>
      </div>

      <ProblemBlock
        title="1. Largest Element in an Array"
        difficulty="Easy"
        description="Find the largest element in an array."
        solution={`// Method 1: Linear search
function findLargest(arr) {
  if (arr.length === 0) return -1;
  
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// Method 2: Using Math.max (JavaScript specific)
function findLargestBuiltIn(arr) {
  return Math.max(...arr);
}

// Method 3: Using reduce
function findLargestReduce(arr) {
  return arr.reduce((max, current) => current > max ? current : max, arr[0]);
}

console.log(findLargest([3, 7, 2, 9, 1]));  // 9
console.log(findLargest([5, 5, 5, 5]));     // 5`}
        explanation="Time: O(n), Space: O(1). We need to check every element at least once to find the maximum."
      />

      <ProblemBlock
        title="2. Second Largest Element in Array"
        difficulty="Easy"
        description="Find the second largest element in an array."
        solution={`function findSecondLargest(arr) {
  if (arr.length < 2) return -1;
  
  let largest = Math.max(arr[0], arr[1]);
  let secondLargest = Math.min(arr[0], arr[1]);
  
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }
  
  return secondLargest;
}

// Alternative: Sort and return second element
function findSecondLargestSort(arr) {
  if (arr.length < 2) return -1;
  
  const sorted = [...arr].sort((a, b) => b - a);
  return sorted[1];
}

console.log(findSecondLargest([3, 7, 2, 9, 1]));  // 7
console.log(findSecondLargest([9, 9, 8, 7]));     // 8`}
        explanation="Track both largest and second largest. Update both when a new largest is found. Time: O(n), Space: O(1)."
      />

      <ProblemBlock
        title="3. Check if an Array is Sorted"
        difficulty="Easy"
        description="Check if array is sorted in ascending order."
        solution={`function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}

// For descending order
function isSortedDescending(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      return false;
    }
  }
  return true;
}

// Generic function
function isSorted(arr, ascending = true) {
  for (let i = 1; i < arr.length; i++) {
    if (ascending && arr[i] < arr[i - 1]) return false;
    if (!ascending && arr[i] > arr[i - 1]) return false;
  }
  return true;
}

console.log(isSorted([1, 2, 3, 4, 5]));     // true
console.log(isSorted([1, 3, 2, 4, 5]));     // false
console.log(isSorted([5, 4, 3, 2, 1]));     // false (ascending check)`}
        explanation="Compare each element with its predecessor. If any element is smaller than previous, array is not sorted. Time: O(n), Space: O(1)."
      />

      <ProblemBlock
        title="4. Reverse an Array"
        difficulty="Easy"
        description="Reverse the elements of an array in-place."
        solution={`function reverseArray(arr) {
  let start = 0;
  let end = arr.length - 1;
  
  while (start < end) {
    // Swap elements
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
  return arr;
}

// Alternative: Using built-in method (creates new array)
function reverseArrayNew(arr) {
  return [...arr].reverse();
}

// Recursive approach
function reverseArrayRecursive(arr, start = 0, end = arr.length - 1) {
  if (start >= end) return arr;
  
  [arr[start], arr[end]] = [arr[end], arr[start]];
  return reverseArrayRecursive(arr, start + 1, end - 1);
}

console.log(reverseArray([1, 2, 3, 4, 5]));  // [5, 4, 3, 2, 1]
console.log(reverseArray([1, 2, 3, 4]));     // [4, 3, 2, 1]`}
        explanation="Use two pointers from start and end, swap elements and move pointers inward. Time: O(n), Space: O(1)."
      />

      <ProblemBlock
        title="5. Remove Duplicates from Sorted Array"
        difficulty="Easy"
        description="Remove duplicates from a sorted array in-place and return new length."
        solution={`function removeDuplicates(arr) {
  if (arr.length === 0) return 0;
  
  let writeIndex = 1;
  
  for (let readIndex = 1; readIndex < arr.length; readIndex++) {
    if (arr[readIndex] !== arr[readIndex - 1]) {
      arr[writeIndex] = arr[readIndex];
      writeIndex++;
    }
  }
  
  return writeIndex;
}

// For unsorted array
function removeDuplicatesUnsorted(arr) {
  const seen = new Set();
  let writeIndex = 0;
  
  for (let readIndex = 0; readIndex < arr.length; readIndex++) {
    if (!seen.has(arr[readIndex])) {
      seen.add(arr[readIndex]);
      arr[writeIndex] = arr[readIndex];
      writeIndex++;
    }
  }
  
  return writeIndex;
}

const arr = [1, 1, 2, 2, 3, 4, 4, 5];
const newLength = removeDuplicates(arr);
console.log(newLength);           // 5
console.log(arr.slice(0, newLength)); // [1, 2, 3, 4, 5]`}
        explanation="Use two pointers: read pointer scans array, write pointer tracks position for next unique element. Time: O(n), Space: O(1)."
      />

      <ProblemBlock
        title="6. Move Zeros to End"
        difficulty="Easy"
        description="Move all zeros to the end while maintaining relative order of non-zero elements."
        solution={`function moveZeroes(arr) {
  let writeIndex = 0;
  
  // Move all non-zero elements to the front
  for (let readIndex = 0; readIndex < arr.length; readIndex++) {
    if (arr[readIndex] !== 0) {
      arr[writeIndex] = arr[readIndex];
      writeIndex++;
    }
  }
  
  // Fill remaining positions with zeros
  while (writeIndex < arr.length) {
    arr[writeIndex] = 0;
    writeIndex++;
  }
  
  return arr;
}

// Alternative: One-pass approach
function moveZeroesOnePass(arr) {
  let left = 0;
  
  for (let right = 0; right < arr.length; right++) {
    if (arr[right] !== 0) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
    }
  }
  
  return arr;
}

console.log(moveZeroes([0, 1, 0, 3, 12]));     // [1, 3, 12, 0, 0]
console.log(moveZeroes([0, 0, 1]));            // [1, 0, 0]`}
        explanation="Two-pass: First pass moves non-zeros to front, second pass fills remaining with zeros. Time: O(n), Space: O(1)."
      />

      <ProblemBlock
        title="7. Left Rotate Array by One"
        difficulty="Easy"
        description="Rotate array to the left by one position."
        solution={`function leftRotateByOne(arr) {
  if (arr.length <= 1) return arr;
  
  const first = arr[0];
  
  // Shift all elements to the left
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  
  // Place first element at the end
  arr[arr.length - 1] = first;
  
  return arr;
}

// Using array methods
function leftRotateByOneBuiltIn(arr) {
  if (arr.length <= 1) return arr;
  
  const first = arr.shift();
  arr.push(first);
  return arr;
}

console.log(leftRotateByOne([1, 2, 3, 4, 5]));  // [2, 3, 4, 5, 1]
console.log(leftRotateByOne([5]));              // [5]`}
        explanation="Store first element, shift all elements left by one position, place stored element at end. Time: O(n), Space: O(1)."
      />

      <ProblemBlock
        title="8. Left Rotate Array by D Places"
        difficulty="Medium"
        description="Rotate array to the left by D positions efficiently."
        solution={`function leftRotateByD(arr, d) {
  const n = arr.length;
  d = d % n; // Handle cases where d > n
  
  if (d === 0) return arr;
  
  // Method 1: Reverse approach (Most efficient)
  reverseArray(arr, 0, d - 1);      // Reverse first d elements
  reverseArray(arr, d, n - 1);      // Reverse remaining elements
  reverseArray(arr, 0, n - 1);      // Reverse entire array
  
  return arr;
}

// Helper function for reversal
function reverseArray(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}

// Alternative: Using extra space
function leftRotateByDExtraSpace(arr, d) {
  const n = arr.length;
  d = d % n;
  
  const temp = arr.slice(0, d);
  
  // Shift elements
  for (let i = 0; i < n - d; i++) {
    arr[i] = arr[i + d];
  }
  
  // Place rotated elements
  for (let i = 0; i < d; i++) {
    arr[n - d + i] = temp[i];
  }
  
  return arr;
}

console.log(leftRotateByD([1, 2, 3, 4, 5, 6, 7], 3)); // [4, 5, 6, 7, 1, 2, 3]
console.log(leftRotateByD([1, 2, 3, 4, 5], 2));       // [3, 4, 5, 1, 2]`}
        explanation="Reverse approach: Reverse first d elements, reverse remaining elements, then reverse entire array. Time: O(n), Space: O(1)."
      />
    </div>
  );
}

// Intermediate Problems Section (from second image)
function IntermediateProblemsSection() {
  return (
    <div className="space-y-8">
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Intermediate Array Problems
        </h2>
        <p className="text-gray-300 mb-6">
          These problems require understanding of advanced patterns like two
          pointers, sliding window, and mathematical insights.
        </p>
      </div>

      <ProblemBlock
        title="9. Leaders in an Array"
        difficulty="Medium"
        description="An element is a leader if it is greater than all elements to its right. Find all leaders."
        solution={`function findLeaders(arr) {
  const leaders = [];
  let maxFromRight = arr[arr.length - 1];
  
  // Last element is always a leader
  leaders.push(maxFromRight);
  
  // Traverse from right to left
  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] > maxFromRight) {
      maxFromRight = arr[i];
      leaders.unshift(arr[i]); // Add to beginning
    }
  }
  
  return leaders;
}

// Alternative: Store indices instead of values
function findLeaderIndices(arr) {
  const leaderIndices = [];
  let maxFromRight = arr[arr.length - 1];
  
  leaderIndices.push(arr.length - 1);
  
  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] > maxFromRight) {
      maxFromRight = arr[i];
      leaderIndices.unshift(i);
    }
  }
  
  return leaderIndices;
}

console.log(findLeaders([16, 17, 4, 3, 5, 2])); // [17, 5, 2]
console.log(findLeaders([1, 2, 3, 4, 0]));      // [4, 0]`}
        explanation="Traverse from right to left, keep track of maximum so far. If current element > max, it's a leader. Time: O(n), Space: O(1)."
      />

      <ProblemBlock
        title="10. Maximum Difference Problem with Order"
        difficulty="Easy"
        description="Find maximum difference between two elements where larger element appears after smaller element."
        solution={`function maxDifference(arr) {
  if (arr.length < 2) return -1;
  
  let minElement = arr[0];
  let maxDiff = arr[1] - arr[0];
  
  for (let i = 1; i < arr.length; i++) {
    // Update max difference
    if (arr[i] - minElement > maxDiff) {
      maxDiff = arr[i] - minElement;
    }
    
    // Update minimum element
    if (arr[i] < minElement) {
      minElement = arr[i];
    }
  }
  
  return maxDiff > 0 ? maxDiff : -1;
}

// Return indices of elements
function maxDifferenceWithIndices(arr) {
  if (arr.length < 2) return { diff: -1, buyIndex: -1, sellIndex: -1 };
  
  let minElement = arr[0];
  let minIndex = 0;
  let maxDiff = arr[1] - arr[0];
  let buyIndex = 0;
  let sellIndex = 1;
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - minElement > maxDiff) {
      maxDiff = arr[i] - minElement;
      buyIndex = minIndex;
      sellIndex = i;
    }
    
    if (arr[i] < minElement) {
      minElement = arr[i];
      minIndex = i;
    }
  }
  
  return maxDiff > 0 ? { diff: maxDiff, buyIndex, sellIndex } : { diff: -1, buyIndex: -1, sellIndex: -1 };
}

console.log(maxDifference([2, 3, 10, 6, 4, 8, 1])); // 8 (10 - 2)
console.log(maxDifference([7, 9, 5, 6, 3, 2]));     // 2 (9 - 7)`}
        explanation="Keep track of minimum element seen so far. For each element, calculate difference and update maximum. Time: O(n), Space: O(1)."
      />

      <ProblemBlock
        title="11. Frequencies in a Sorted Array"
        difficulty="Easy"
        description="Print frequencies of all elements in a sorted array."
        solution={`function printFrequencies(arr) {
  if (arr.length === 0) return;
  
  let current = arr[0];
  let count = 1;
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === current) {
      count++;
    } else {
      console.log(\`\${current}: \${count}\`);
      current = arr[i];
      count = 1;
    }
  }
  
  // Print last element frequency
  console.log(\`\${current}: \${count}\`);
}

// Return frequencies as object
function getFrequencies(arr) {
  const frequencies = {};
  
  for (const element of arr) {
    frequencies[element] = (frequencies[element] || 0) + 1;
  }
  
  return frequencies;
}

// For sorted array (optimized)
function getFrequenciesSorted(arr) {
  const frequencies = {};
  let current = arr[0];
  let count = 1;
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === current) {
      count++;
    } else {
      frequencies[current] = count;
      current = arr[i];
      count = 1;
    }
  }
  
  frequencies[current] = count;
  return frequencies;
}

console.log(getFrequenciesSorted([1, 1, 1, 2, 3, 3, 5, 5, 5, 5])); 
// { 1: 3, 2: 1, 3: 2, 5: 4 }`}
        explanation="For sorted array, count consecutive occurrences. For unsorted, use hash map. Time: O(n), Space: O(1) for sorted, O(n) for unsorted."
      />

      <ProblemBlock
        title="12. Stock Buy and Sell Problem (Part 1)"
        difficulty="Easy"
        description="Find maximum profit from buying and selling stock once."
        solution={`function maxProfitSingleTransaction(prices) {
  if (prices.length < 2) return 0;
  
  let minPrice = prices[0];
  let maxProfit = 0;
  
  for (let i = 1; i < prices.length; i++) {
    // Update minimum price seen so far
    minPrice = Math.min(minPrice, prices[i]);
    
    // Calculate profit if sold today
    const profitToday = prices[i] - minPrice;
    
    // Update maximum profit
    maxProfit = Math.max(maxProfit, profitToday);
  }
  
  return maxProfit;
}

// Return buy and sell days
function maxProfitWithDays(prices) {
  if (prices.length < 2) return { profit: 0, buyDay: -1, sellDay: -1 };
  
  let minPrice = prices[0];
  let minPriceDay = 0;
  let maxProfit = 0;
  let buyDay = 0;
  let sellDay = 0;
  
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
      minPriceDay = i;
    }
    
    const profitToday = prices[i] - minPrice;
    if (profitToday > maxProfit) {
      maxProfit = profitToday;
      buyDay = minPriceDay;
      sellDay = i;
    }
  }
  
  return { profit: maxProfit, buyDay, sellDay };
}

console.log(maxProfitSingleTransaction([7, 1, 5, 3, 6, 4])); // 5 (buy at 1, sell at 6)
console.log(maxProfitSingleTransaction([7, 6, 4, 3, 1]));   // 0 (no profit possible)`}
        explanation="Keep track of minimum price seen so far. For each day, calculate profit if sold that day. Time: O(n), Space: O(1)."
      />

      <ProblemBlock
        title="13. Stock Buy and Sell Problem (Part 2)"
        difficulty="Medium"
        description="Find maximum profit from buying and selling stock multiple times (no limit on transactions)."
        solution={`function maxProfitMultipleTransactions(prices) {
  let maxProfit = 0;
  
  for (let i = 1; i < prices.length; i++) {
    // If price increases, add the difference to profit
    if (prices[i] > prices[i - 1]) {
      maxProfit += prices[i] - prices[i - 1];
    }
  }
  
  return maxProfit;
}

// Alternative: Peak and valley approach
function maxProfitPeakValley(prices) {
  let i = 0;
  let valley = prices[0];
  let peak = prices[0];
  let maxProfit = 0;
  
  while (i < prices.length - 1) {
    // Find valley (local minimum)
    while (i < prices.length - 1 && prices[i] >= prices[i + 1]) {
      i++;
    }
    valley = prices[i];
    
    // Find peak (local maximum)
    while (i < prices.length - 1 && prices[i] <= prices[i + 1]) {
      i++;
    }
    peak = prices[i];
    
    maxProfit += peak - valley;
  }
  
  return maxProfit;
}

// With transaction details
function maxProfitWithTransactions(prices) {
  const transactions = [];
  let i = 0;
  
  while (i < prices.length - 1) {
    // Find buy point (valley)
    while (i < prices.length - 1 && prices[i] >= prices[i + 1]) {
      i++;
    }
    const buyDay = i;
    const buyPrice = prices[i];
    
    // Find sell point (peak)
    while (i < prices.length - 1 && prices[i] <= prices[i + 1]) {
      i++;
    }
    const sellDay = i;
    const sellPrice = prices[i];
    
    if (sellPrice > buyPrice) {
      transactions.push({ buyDay, sellDay, profit: sellPrice - buyPrice });
    }
  }
  
  return transactions;
}

console.log(maxProfitMultipleTransactions([7, 1, 5, 3, 6, 4])); // 7 (buy 1 sell 5, buy 3 sell 6)
console.log(maxProfitMultipleTransactions([1, 2, 3, 4, 5]));    // 4 (buy 1 sell 5)`}
        explanation="Sum all positive differences between consecutive days. If price goes up, we make profit. Time: O(n), Space: O(1)."
      />

      <ProblemBlock
        title="14. Trapping Rain Water"
        difficulty="Hard"
        description="Calculate trapped rainwater between bars of different heights."
        solution={`function trapRainWater(height) {
  if (height.length < 3) return 0;
  
  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let water = 0;
  
  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= leftMax) {
        leftMax = height[left];
      } else {
        water += leftMax - height[left];
      }
      left++;
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right];
      } else {
        water += rightMax - height[right];
      }
      right--;
    }
  }
  
  return water;
}

// Alternative: Pre-compute arrays
function trapRainWaterPrecompute(height) {
  const n = height.length;
  if (n < 3) return 0;
  
  const leftMax = new Array(n);
  const rightMax = new Array(n);
  
  // Compute left max array
  leftMax[0] = height[0];
  for (let i = 1; i < n; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i]);
  }
  
  // Compute right max array
  rightMax[n - 1] = height[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i]);
  }
  
  // Calculate trapped water
  let water = 0;
  for (let i = 0; i < n; i++) {
    water += Math.min(leftMax[i], rightMax[i]) - height[i];
  }
  
  return water;
}

console.log(trapRainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6
console.log(trapRainWater([4, 2, 0, 3, 2, 5]));                    // 9`}
        explanation="Two pointers approach: Track max height from left and right. Water at position = min(leftMax, rightMax) - height[i]. Time: O(n), Space: O(1)."
      />

      <ProblemBlock
        title="15. Maximum Consecutive 1s"
        difficulty="Easy"
        description="Find the maximum number of consecutive 1s in a binary array."
        solution={`function findMaxConsecutiveOnes(nums) {
  let maxCount = 0;
  let currentCount = 0;
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      currentCount++;
      maxCount = Math.max(maxCount, currentCount);
    } else {
      currentCount = 0;
    }
  }
  
  return maxCount;
}

// Return start and end indices of longest sequence
function findMaxConsecutiveOnesWithIndices(nums) {
  let maxCount = 0;
  let currentCount = 0;
  let maxStart = 0;
  let maxEnd = 0;
  let currentStart = 0;
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      if (currentCount === 0) {
        currentStart = i;
      }
      currentCount++;
      
      if (currentCount > maxCount) {
        maxCount = currentCount;
        maxStart = currentStart;
        maxEnd = i;
      }
    } else {
      currentCount = 0;
    }
  }
  
  return { count: maxCount, start: maxStart, end: maxEnd };
}

// For any value (not just 1s)
function findMaxConsecutive(nums, target) {
  let maxCount = 0;
  let currentCount = 0;
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      currentCount++;
      maxCount = Math.max(maxCount, currentCount);
    } else {
      currentCount = 0;
    }
  }
  
  return maxCount;
}

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));        // 3
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]));        // 2`}
        explanation="Keep track of current consecutive count and maximum seen so far. Reset count when 0 is encountered. Time: O(n), Space: O(1)."
      />

      <ProblemBlock
        title="16. Maximum Subarray Sum (Kadane's Algorithm)"
        difficulty="Medium"
        description="Find the maximum sum of contiguous subarray."
        solution={`function maxSubArraySum(nums) {
  let maxSoFar = nums[0];
  let maxEndingHere = nums[0];
  
  for (let i = 1; i < nums.length; i++) {
    // Either extend previous subarray or start new one
    maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }
  
  return maxSoFar;
}

// Return subarray indices
function maxSubArraySumWithIndices(nums) {
  let maxSoFar = nums[0];
  let maxEndingHere = nums[0];
  let start = 0;
  let end = 0;
  let tempStart = 0;
  
  for (let i = 1; i < nums.length; i++) {
    if (maxEndingHere < 0) {
      maxEndingHere = nums[i];
      tempStart = i;
    } else {
      maxEndingHere += nums[i];
    }
    
    if (maxEndingHere > maxSoFar) {
      maxSoFar = maxEndingHere;
      start = tempStart;
      end = i;
    }
  }
  
  return { sum: maxSoFar, start, end, subarray: nums.slice(start, end + 1) };
}

// Handle all negative numbers
function maxSubArraySumAllNegative(nums) {
  let maxSoFar = nums[0];
  let maxEndingHere = nums[0];
  
  for (let i = 1; i < nums.length; i++) {
    maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }
  
  return maxSoFar;
}

console.log(maxSubArraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6 (subarray: [4, -1, 2, 1])
console.log(maxSubArraySum([1, 2, 3, -2, 5]));                // 9 (subarray: [1, 2, 3, -2, 5])`}
        explanation="Kadane's Algorithm: For each position, decide whether to extend previous subarray or start new one. Time: O(n), Space: O(1)."
      />
    </div>
  );
}

// Advanced Patterns Section
function AdvancedPatternsSection() {
  return (
    <div className="space-y-8">
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Advanced Array Patterns
        </h2>
        <p className="text-gray-300 mb-6">
          Master these powerful patterns to solve complex array problems
          efficiently.
        </p>
      </div>

      <ProblemBlock
        title="17. Longest Even Odd Subarray"
        difficulty="Easy"
        description="Find the longest subarray with alternating even-odd elements."
        solution={`function longestEvenOddSubarray(arr) {
  if (arr.length === 0) return 0;
  
  let maxLength = 1;
  let currentLength = 1;
  
  for (let i = 1; i < arr.length; i++) {
    // Check if current and previous have different parity
    if ((arr[i] % 2 === 0 && arr[i - 1] % 2 !== 0) || 
        (arr[i] % 2 !== 0 && arr[i - 1] % 2 === 0)) {
      currentLength++;
      maxLength = Math.max(maxLength, currentLength);
    } else {
      currentLength = 1;
    }
  }
  
  return maxLength;
}

// Return the actual subarray
function longestEvenOddSubarrayWithElements(arr) {
  if (arr.length === 0) return { length: 0, subarray: [] };
  
  let maxLength = 1;
  let currentLength = 1;
  let maxStart = 0;
  let currentStart = 0;
  
  for (let i = 1; i < arr.length; i++) {
    if ((arr[i] % 2 === 0 && arr[i - 1] % 2 !== 0) || 
        (arr[i] % 2 !== 0 && arr[i - 1] % 2 === 0)) {
      currentLength++;
      if (currentLength > maxLength) {
        maxLength = currentLength;
        maxStart = currentStart;
      }
    } else {
      currentLength = 1;
      currentStart = i;
    }
  }
  
  return {
    length: maxLength,
    subarray: arr.slice(maxStart, maxStart + maxLength)
  };
}

console.log(longestEvenOddSubarray([10, 12, 14, 7, 8]));     // 3 ([12, 14, 7])
console.log(longestEvenOddSubarray([7, 10, 13, 14]));        // 4 ([7, 10, 13, 14])`}
        explanation="Track current alternating sequence length. If parity changes, extend sequence; otherwise, start new sequence. Time: O(n), Space: O(1)."
      />

      <ProblemBlock
        title="18. Maximum Circular Sum Subarray"
        difficulty="Medium"
        description="Find maximum sum subarray considering circular nature (array wraps around)."
        solution={`function maxCircularSum(arr) {
  const n = arr.length;
  if (n === 0) return 0;
  
  // Case 1: Maximum sum is in non-circular array (Kadane's algorithm)
  let maxKadane = kadane(arr);
  
  // Case 2: Maximum sum is circular (wraps around)
  let totalSum = 0;
  for (let i = 0; i < n; i++) {
    totalSum += arr[i];
    arr[i] = -arr[i]; // Invert array
  }
  
  // Maximum sum of inverted array = minimum sum of original array
  let maxInverted = kadane(arr);
  let maxCircular = totalSum + maxInverted;
  
  // Restore original array
  for (let i = 0; i < n; i++) {
    arr[i] = -arr[i];
  }
  
  // Return maximum of both cases
  return Math.max(maxKadane, maxCircular);
}

function kadane(arr) {
  let maxSoFar = arr[0];
  let maxEndingHere = arr[0];
  
  for (let i = 1; i < arr.length; i++) {
    maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }
  
  return maxSoFar;
}

// Alternative approach without modifying original array
function maxCircularSumNoModify(arr) {
  const n = arr.length;
  if (n === 0) return 0;
  
  // Case 1: Maximum sum is non-circular
  let maxKadane = kadane(arr);
  
  // Case 2: Maximum sum is circular
  let totalSum = arr.reduce((sum, num) => sum + num, 0);
  let invertedArr = arr.map(num => -num);
  let maxInverted = kadane(invertedArr);
  let maxCircular = totalSum + maxInverted;
  
  return Math.max(maxKadane, maxCircular);
}

console.log(maxCircularSum([8, -8, 9, -9, 10, -11, 12])); // 22
console.log(maxCircularSum([10, -3, -4, 7, 6, 5, -4, -1])); // 23`}
        explanation="Two cases: 1) Maximum sum is non-circular (use Kadane's), 2) Maximum sum wraps around (total - minimum sum). Time: O(n), Space: O(1)."
      />

      <ProblemBlock
        title="19. Majority Element"
        difficulty="Easy"
        description="Find element that appears more than n/2 times using Boyer-Moore Voting Algorithm."
        solution={`function majorityElement(nums) {
  let candidate = null;
  let count = 0;
  
  // Phase 1: Find candidate
  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += (num === candidate) ? 1 : -1;
  }
  
  // Phase 2: Verify candidate (if not guaranteed to exist)
  count = 0;
  for (let num of nums) {
    if (num === candidate) {
      count++;
    }
  }
  
  return count > nums.length / 2 ? candidate : -1;
}

// If majority element is guaranteed to exist
function majorityElementGuaranteed(nums) {
  let candidate = nums[0];
  let count = 1;
  
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === candidate) {
      count++;
    } else {
      count--;
      if (count === 0) {
        candidate = nums[i];
        count = 1;
      }
    }
  }
  
  return candidate;
}

// Alternative: Using hash map
function majorityElementHashMap(nums) {
  const frequency = {};
  const threshold = Math.floor(nums.length / 2);
  
  for (let num of nums) {
    frequency[num] = (frequency[num] || 0) + 1;
    if (frequency[num] > threshold) {
      return num;
    }
  }
  
  return -1;
}

console.log(majorityElement([3, 2, 3]));                    // 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));       // 2
console.log(majorityElement([1, 3, 3, 3, 2]));             // 3`}
        explanation="Boyer-Moore Voting: Maintain candidate and count. If count reaches 0, pick new candidate. Majority element survives this process. Time: O(n), Space: O(1)."
      />

      <ProblemBlock
        title="20. Minimum Consecutive Flips"
        difficulty="Easy"
        description="Find minimum flips to make all elements same (can flip either 0s or 1s)."
        solution={`function minFlips(arr) {
  const n = arr.length;
  
  // Count groups of 0s and 1s
  let zeroGroups = 0;
  let oneGroups = 0;
  
  if (arr[0] === 0) zeroGroups = 1;
  else oneGroups = 1;
  
  for (let i = 1; i < n; i++) {
    if (arr[i] !== arr[i - 1]) {
      if (arr[i] === 0) zeroGroups++;
      else oneGroups++;
    }
  }
  
  // Flip the group with fewer occurrences
  const target = zeroGroups < oneGroups ? 0 : 1;
  const flips = Math.min(zeroGroups, oneGroups);
  
  return { target, flips, flipGroups: getFlipGroups(arr, target) };
}

function getFlipGroups(arr, target) {
  const groups = [];
  let start = -1;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      if (start === -1) start = i;
    } else {
      if (start !== -1) {
        groups.push({ start, end: i - 1 });
        start = -1;
      }
    }
  }
  
  // Handle case where last element is target
  if (start !== -1) {
    groups.push({ start, end: arr.length - 1 });
  }
  
  return groups;
}

// Alternative: Direct approach
function minFlipsDirect(arr) {
  const n = arr.length;
  let flips = [];
  
  for (let i = 1; i < n; i++) {
    if (arr[i] !== arr[i - 1]) {
      if (arr[i] !== arr[0]) {
        flips.push(\`From \${i} to \`);
      } else {
        flips[flips.length - 1] += i - 1;
      }
    }
  }
  
  if (arr[n - 1] !== arr[0]) {
    flips[flips.length - 1] += n - 1;
  }
  
  return flips;
}

console.log(minFlips([1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1])); 
// { target: 0, flips: 2, flipGroups: [{start: 1, end: 3}, {start: 5, end: 6}] }`}
        explanation="Count groups of consecutive 0s and 1s. Flip the group with fewer occurrences. Time: O(n), Space: O(1)."
      />

      <ProblemBlock
        title="21. Subarray with Given Sum"
        difficulty="Medium"
        description="Find subarray with given sum using sliding window technique."
        solution={`function subarrayWithSum(arr, targetSum) {
  let left = 0;
  let currentSum = 0;
  
  for (let right = 0; right < arr.length; right++) {
    currentSum += arr[right];
    
    // Shrink window from left if sum exceeds target
    while (currentSum > targetSum && left <= right) {
      currentSum -= arr[left];
      left++;
    }
    
    // Check if we found the target sum
    if (currentSum === targetSum) {
      return { start: left, end: right, subarray: arr.slice(left, right + 1) };
    }
  }
  
  return { start: -1, end: -1, subarray: [] };
}

// For arrays with negative numbers (use hash map)
function subarrayWithSumNegative(arr, targetSum) {
  const sumMap = new Map();
  let currentSum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];
    
    if (currentSum === targetSum) {
      return { start: 0, end: i, subarray: arr.slice(0, i + 1) };
    }
    
    if (sumMap.has(currentSum - targetSum)) {
      const start = sumMap.get(currentSum - targetSum) + 1;
      return { start, end: i, subarray: arr.slice(start, i + 1) };
    }
    
    sumMap.set(currentSum, i);
  }
  
  return { start: -1, end: -1, subarray: [] };
}

// Find all subarrays with given sum
function findAllSubarraysWithSum(arr, targetSum) {
  const sumMap = new Map();
  const result = [];
  let currentSum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];
    
    if (currentSum === targetSum) {
      result.push({ start: 0, end: i, subarray: arr.slice(0, i + 1) });
    }
    
    if (sumMap.has(currentSum - targetSum)) {
      const indices = sumMap.get(currentSum - targetSum);
      for (const start of indices) {
        result.push({ start: start + 1, end: i, subarray: arr.slice(start + 1, i + 1) });
      }
    }
    
    if (!sumMap.has(currentSum)) {
      sumMap.set(currentSum, []);
    }
    sumMap.get(currentSum).push(i);
  }
  
  return result;
}

console.log(subarrayWithSum([1, 4, 20, 3, 10, 5], 33)); // {start: 2, end: 4, subarray: [20, 3, 10]}
console.log(subarrayWithSum([1, 2, 3, 7, 5], 12));      // {start: 1, end: 4, subarray: [2, 3, 7]}`}
        explanation="Sliding window: Expand right pointer, shrink left if sum exceeds target. For negative numbers, use prefix sum with hash map. Time: O(n), Space: O(1) for positive, O(n) for negative."
      />

      <ProblemBlock
        title="22. Equilibrium Point"
        difficulty="Easy"
        description="Find equilibrium point where sum of elements before equals sum of elements after."
        solution={`function equilibriumPoint(arr) {
  const n = arr.length;
  if (n === 0) return -1;
  if (n === 1) return 0;
  
  // Calculate total sum
  let totalSum = arr.reduce((sum, num) => sum + num, 0);
  
  let leftSum = 0;
  
  for (let i = 0; i < n; i++) {
    // Calculate right sum
    const rightSum = totalSum - leftSum - arr[i];
    
    if (leftSum === rightSum) {
      return i;
    }
    
    leftSum += arr[i];
  }
  
  return -1;
}

// Using prefix sum arrays
function equilibriumPointPrefixSum(arr) {
  const n = arr.length;
  if (n === 0) return -1;
  
  const prefixSum = new Array(n);
  prefixSum[0] = arr[0];
  
  // Calculate prefix sum
  for (let i = 1; i < n; i++) {
    prefixSum[i] = prefixSum[i - 1] + arr[i];
  }
  
  const totalSum = prefixSum[n - 1];
  
  for (let i = 0; i < n; i++) {
    const leftSum = i === 0 ? 0 : prefixSum[i - 1];
    const rightSum = totalSum - prefixSum[i];
    
    if (leftSum === rightSum) {
      return i;
    }
  }
  
  return -1;
}

// Find all equilibrium points
function findAllEquilibriumPoints(arr) {
  const n = arr.length;
  if (n === 0) return [];
  
  const totalSum = arr.reduce((sum, num) => sum + num, 0);
  const equilibriumPoints = [];
  let leftSum = 0;
  
  for (let i = 0; i < n; i++) {
    const rightSum = totalSum - leftSum - arr[i];
    
    if (leftSum === rightSum) {
      equilibriumPoints.push(i);
    }
    
    leftSum += arr[i];
  }
  
  return equilibriumPoints;
}

console.log(equilibriumPoint([1, 3, 5, 2, 2]));      // 2 (index where left sum = right sum)
console.log(equilibriumPoint([1, 2, 3]));            // -1 (no equilibrium point)`}
        explanation="For each position, calculate left and right sums. If equal, it's an equilibrium point. Time: O(n), Space: O(1)."
      />

      <ProblemBlock
        title="23. Maximum Appearing Element"
        difficulty="Easy"
        description="Find the element that appears most frequently in an array."
        solution={`function findMaxAppearingElement(arr) {
  if (arr.length === 0) return null;
  
  const frequency = {};
  let maxCount = 0;
  let maxElement = arr[0];
  
  for (let num of arr) {
    frequency[num] = (frequency[num] || 0) + 1;
    
    if (frequency[num] > maxCount) {
      maxCount = frequency[num];
      maxElement = num;
    }
  }
  
  return { element: maxElement, count: maxCount };
}

// For sorted array (optimized)
function findMaxAppearingElementSorted(arr) {
  if (arr.length === 0) return null;
  
  let currentElement = arr[0];
  let currentCount = 1;
  let maxElement = arr[0];
  let maxCount = 1;
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === currentElement) {
      currentCount++;
    } else {
      if (currentCount > maxCount) {
        maxCount = currentCount;
        maxElement = currentElement;
      }
      currentElement = arr[i];
      currentCount = 1;
    }
  }
  
  // Check last element
  if (currentCount > maxCount) {
    maxCount = currentCount;
    maxElement = currentElement;
  }
  
  return { element: maxElement, count: maxCount };
}

// Find all elements with maximum frequency
function findAllMaxAppearingElements(arr) {
  const frequency = {};
  let maxCount = 0;
  
  // Count frequencies
  for (let num of arr) {
    frequency[num] = (frequency[num] || 0) + 1;
    maxCount = Math.max(maxCount, frequency[num]);
  }
  
  // Find all elements with maximum frequency
  const maxElements = [];
  for (let [element, count] of Object.entries(frequency)) {
    if (count === maxCount) {
      maxElements.push({ element: parseInt(element), count });
    }
  }
  
  return maxElements;
}

console.log(findMaxAppearingElement([1, 3, 2, 1, 3, 1, 4])); // {element: 1, count: 3}
console.log(findMaxAppearingElement([5, 5, 5, 2, 2, 1]));    // {element: 5, count: 3}`}
        explanation="Use hash map to count frequencies. Track element with maximum count. For sorted arrays, count consecutive occurrences. Time: O(n), Space: O(n)."
      />
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
        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors mb-4"
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
