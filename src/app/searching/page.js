"use client";
import Link from "next/link";
import { useState } from "react";

export default function Searching() {
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
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-blue-500 bg-clip-text text-transparent">
            Searching Algorithms Mastery
          </h1>
          <p className="text-gray-400 mt-2">
            Binary Search, Linear Search & Advanced Search Techniques
          </p>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-gray-800/50 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-2 overflow-x-auto">
            {[
              { id: "fundamentals", label: "📚 Fundamentals" },
              { id: "binary-search", label: "🔍 Binary Search Problems" },
              { id: "advanced", label: "⚡ Advanced Search Problems" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 font-semibold whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? "text-indigo-400 border-b-2 border-indigo-400"
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
        {activeTab === "binary-search" && <BinarySearchSection />}
        {activeTab === "advanced" && <AdvancedSearchSection />}
      </main>
    </div>
  );
}

// Fundamentals Section
function FundamentalsSection() {
  return (
    <div className="space-y-8">
      {/* What are Searching Algorithms */}
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          What are Searching Algorithms?
        </h2>
        <p className="text-gray-300 text-lg mb-6">
          Searching algorithms are methods to find a specific element or value
          within a data structure. They are fundamental to computer science and
          essential for efficient problem-solving.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-indigo-900/20 border border-indigo-500/30 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-indigo-200 mb-3">
              Key Characteristics:
            </h3>
            <ul className="space-y-2 text-indigo-100">
              <li>
                • <strong>Linear Search:</strong> O(n) time, works on any array
              </li>
              <li>
                • <strong>Binary Search:</strong> O(log n) time, requires sorted
                array
              </li>
              <li>
                • <strong>Space Complexity:</strong> Usually O(1) for iterative
                approaches
              </li>
              <li>
                • <strong>Divide & Conquer:</strong> Binary search uses this
                principle
              </li>
            </ul>
          </div>

          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-blue-200 mb-3">
              Common Applications:
            </h3>
            <ul className="space-y-2 text-blue-100">
              <li>
                • <strong>Database Queries:</strong> Finding records efficiently
              </li>
              <li>
                • <strong>File Systems:</strong> Locating files and directories
              </li>
              <li>
                • <strong>Web Search:</strong> Finding relevant web pages
              </li>
              <li>
                • <strong>Game AI:</strong> Pathfinding and decision making
              </li>
            </ul>
          </div>
        </div>

        <TheoryBlock title="Linear Search vs Binary Search">
          <CodeBlock
            code={`// Linear Search - O(n) time, O(1) space
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Return index if found
    }
  }
  return -1; // Return -1 if not found
}

// Binary Search - O(log n) time, O(1) space
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
      return mid; // Found!
    } else if (arr[mid] < target) {
      left = mid + 1; // Search right half
    } else {
      right = mid - 1; // Search left half
    }
  }
  
  return -1; // Not found
}

// Example usage
const arr = [1, 3, 5, 7, 9, 11, 13, 15];
console.log(linearSearch(arr, 7));  // 3
console.log(binarySearch(arr, 7));  // 3
console.log(binarySearch(arr, 4));  // -1`}
          />
        </TheoryBlock>
      </div>

      {/* Binary Search Variations */}
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Binary Search Variations
        </h2>
        <p className="text-gray-300 mb-6">
          Binary search has several variations for different use cases.
          Understanding these patterns is crucial for solving complex problems.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-3">
              🔍 Standard Binary Search
            </h3>
            <p className="text-gray-300 text-sm mb-3">
              Find exact target value in sorted array.
            </p>
            <ul className="text-gray-400 text-xs space-y-1">
              <li>• Returns index if found</li>
              <li>• Returns -1 if not found</li>
              <li>• Works on any sorted array</li>
            </ul>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-3">
              🎯 First/Last Occurrence
            </h3>
            <p className="text-gray-300 text-sm mb-3">
              Find first or last occurrence of target in array with duplicates.
            </p>
            <ul className="text-gray-400 text-xs space-y-1">
              <li>• Modifies binary search logic</li>
              <li>• Continues searching after finding target</li>
              <li>• Essential for range queries</li>
            </ul>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-3">
              📊 Search Insert Position
            </h3>
            <p className="text-gray-300 text-sm mb-3">
              Find position where target should be inserted to maintain sorted
              order.
            </p>
            <ul className="text-gray-400 text-xs space-y-1">
              <li>• Returns insertion index</li>
              <li>• Useful for maintaining sorted arrays</li>
              <li>• Handles edge cases elegantly</li>
            </ul>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-3">
              🏔️ Peak Finding
            </h3>
            <p className="text-gray-300 text-sm mb-3">
              Find a peak element in an unsorted array.
            </p>
            <ul className="text-gray-400 text-xs space-y-1">
              <li>• Uses binary search on unsorted array</li>
              <li>• Compares with neighbors</li>
              <li>• Guaranteed to find a peak</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Time & Space Complexity */}
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Time & Space Complexity Analysis
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-red-900/30 border border-red-500/30 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-red-200 mb-3">
              Linear Search
            </h3>
            <ul className="space-y-2 text-red-100 text-sm">
              <li>
                <strong>Time:</strong> O(n) - worst case
              </li>
              <li>
                <strong>Space:</strong> O(1) - iterative
              </li>
              <li>
                <strong>Best Case:</strong> O(1) - element at start
              </li>
              <li>
                <strong>Average:</strong> O(n/2) ≈ O(n)
              </li>
            </ul>
          </div>

          <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-200 mb-3">
              Binary Search
            </h3>
            <ul className="space-y-2 text-green-100 text-sm">
              <li>
                <strong>Time:</strong> O(log n) - worst case
              </li>
              <li>
                <strong>Space:</strong> O(1) - iterative
              </li>
              <li>
                <strong>Best Case:</strong> O(1) - element at middle
              </li>
              <li>
                <strong>Average:</strong> O(log n)
              </li>
            </ul>
          </div>

          <div className="bg-yellow-900/30 border border-yellow-500/30 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-yellow-200 mb-3">
              When to Use
            </h3>
            <ul className="space-y-2 text-yellow-100 text-sm">
              <li>
                <strong>Linear:</strong> Unsorted arrays
              </li>
              <li>
                <strong>Binary:</strong> Sorted arrays
              </li>
              <li>
                <strong>Hybrid:</strong> Partially sorted
              </li>
              <li>
                <strong>Special:</strong> Infinite arrays
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// Binary Search Problems Section (from first image)
function BinarySearchSection() {
  return (
    <div className="space-y-8">
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Binary Search Problems
        </h2>
        <p className="text-gray-300 mb-6">
          Master binary search through these essential problems. Each problem
          builds upon the previous one, teaching you different variations and
          applications of binary search.
        </p>
      </div>

      <ProblemBlock
        title="1. Index of First Occurrence in Sorted Array"
        difficulty="Medium"
        description="Find the index of the first occurrence of a target element in a sorted array with duplicates."
        solution={`function firstOccurrence(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let result = -1;
  
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
      result = mid; // Store potential result
      right = mid - 1; // Continue searching left for first occurrence
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return result;
}

// Alternative approach using binary search boundaries
function firstOccurrenceBoundary(arr, target) {
  let left = 0;
  let right = arr.length; // Note: right is exclusive
  
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid; // Keep searching left
    }
  }
  
  return (left < arr.length && arr[left] === target) ? left : -1;
}

// Test cases
console.log(firstOccurrence([1, 2, 2, 2, 3, 4, 5], 2)); // 1
console.log(firstOccurrence([1, 2, 3, 4, 5], 6));       // -1
console.log(firstOccurrence([2, 2, 2, 2, 2], 2));       // 0`}
        explanation="Modified binary search: when target is found, continue searching left half to find first occurrence. Time: O(log n), Space: O(1)."
      />

      <ProblemBlock
        title="2. Index of Last Occurrence in Sorted Array"
        difficulty="Medium"
        description="Find the index of the last occurrence of a target element in a sorted array with duplicates."
        solution={`function lastOccurrence(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let result = -1;
  
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
      result = mid; // Store potential result
      left = mid + 1; // Continue searching right for last occurrence
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return result;
}

// Alternative approach using binary search boundaries
function lastOccurrenceBoundary(arr, target) {
  let left = 0;
  let right = arr.length;
  
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    
    if (arr[mid] <= target) {
      left = mid + 1; // Keep searching right
    } else {
      right = mid;
    }
  }
  
  return (left > 0 && arr[left - 1] === target) ? left - 1 : -1;
}

// Test cases
console.log(lastOccurrence([1, 2, 2, 2, 3, 4, 5], 2)); // 3
console.log(lastOccurrence([1, 2, 3, 4, 5], 6));       // -1
console.log(lastOccurrence([2, 2, 2, 2, 2], 2));       // 4`}
        explanation="Modified binary search: when target is found, continue searching right half to find last occurrence. Time: O(log n), Space: O(1)."
      />

      <ProblemBlock
        title="3. Count Occurrences in Sorted Array"
        difficulty="Easy"
        description="Count the number of occurrences of a target element in a sorted array with duplicates."
        solution={`function countOccurrences(arr, target) {
  const first = firstOccurrence(arr, target);
  const last = lastOccurrence(arr, target);
  
  if (first === -1) {
    return 0; // Target not found
  }
  
  return last - first + 1;
}

// Helper functions (from previous problems)
function firstOccurrence(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let result = -1;
  
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
      result = mid;
      right = mid - 1;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return result;
}

function lastOccurrence(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let result = -1;
  
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
      result = mid;
      left = mid + 1;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return result;
}

// Alternative: Direct count using binary search
function countOccurrencesDirect(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let count = 0;
  
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
      count++;
      
      // Count left occurrences
      let leftIdx = mid - 1;
      while (leftIdx >= 0 && arr[leftIdx] === target) {
        count++;
        leftIdx--;
      }
      
      // Count right occurrences
      let rightIdx = mid + 1;
      while (rightIdx < arr.length && arr[rightIdx] === target) {
        count++;
        rightIdx++;
      }
      
      return count;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return count;
}

// Test cases
console.log(countOccurrences([1, 2, 2, 2, 3, 4, 5], 2)); // 3
console.log(countOccurrences([1, 2, 3, 4, 5], 6));       // 0
console.log(countOccurrences([2, 2, 2, 2, 2], 2));       // 5`}
        explanation="Use first and last occurrence functions to calculate count. Count = last - first + 1. Time: O(log n), Space: O(1)."
      />

      <ProblemBlock
        title="4. Count 1s in a Sorted Binary Array"
        difficulty="Easy"
        description="Count the number of 1s in a sorted binary array where all 0s come before all 1s."
        solution={`function countOnes(arr) {
  let left = 0;
  let right = arr.length - 1;
  let firstOne = -1;
  
  // Find first occurrence of 1
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === 1) {
      firstOne = mid;
      right = mid - 1; // Continue searching left for first 1
    } else {
      left = mid + 1;
    }
  }
  
  if (firstOne === -1) {
    return 0; // No 1s found
  }
  
  return arr.length - firstOne;
}

// Alternative approach using boundary binary search
function countOnesBoundary(arr) {
  let left = 0;
  let right = arr.length;
  
  // Find leftmost 1
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    
    if (arr[mid] < 1) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  
  return arr.length - left;
}

// More efficient: count zeros instead
function countOnesByZeros(arr) {
  let left = 0;
  let right = arr.length - 1;
  let lastZero = -1;
  
  // Find last occurrence of 0
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === 0) {
      lastZero = mid;
      left = mid + 1; // Continue searching right for last 0
    } else {
      right = mid - 1;
    }
  }
  
  return arr.length - (lastZero + 1);
}

// Test cases
console.log(countOnes([0, 0, 0, 1, 1, 1, 1])); // 4
console.log(countOnes([0, 0, 0, 0, 0]));       // 0
console.log(countOnes([1, 1, 1, 1, 1]));       // 5
console.log(countOnes([0, 1, 1, 1, 1]));       // 4`}
        explanation="Find first occurrence of 1, then count = array.length - firstOneIndex. Time: O(log n), Space: O(1)."
      />

      <ProblemBlock
        title="5. Square Root of a Number"
        difficulty="Medium"
        description="Find the square root of a non-negative integer using binary search."
        solution={`function squareRoot(n) {
  if (n < 0) return -1; // Invalid input
  if (n === 0 || n === 1) return n;
  
  let left = 1;
  let right = n;
  let result = 0;
  
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    
    if (mid * mid === n) {
      return mid; // Perfect square
    } else if (mid * mid < n) {
      result = mid; // Store potential result
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return result; // Return floor of square root
}

// Find square root with decimal precision
function squareRootPrecise(n, precision = 5) {
  if (n < 0) return -1;
  if (n === 0) return 0;
  
  // Find integer part
  let left = 1;
  let right = n;
  let result = 0;
  
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    
    if (mid * mid === n) {
      return mid;
    } else if (mid * mid < n) {
      result = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  // Find decimal part
  let decimal = 0.1;
  let finalResult = result;
  
  for (let i = 0; i < precision; i++) {
    while ((finalResult + decimal) * (finalResult + decimal) <= n) {
      finalResult += decimal;
    }
    decimal /= 10;
  }
  
  return Math.round(finalResult * Math.pow(10, precision)) / Math.pow(10, precision);
}

// Newton's method for square root (alternative)
function squareRootNewton(n) {
  if (n < 0) return -1;
  if (n === 0) return 0;
  
  let x = n;
  let y = (x + n / x) / 2;
  
  while (Math.abs(x - y) >= 0.00001) {
    x = y;
    y = (x + n / x) / 2;
  }
  
  return Math.floor(x);
}

// Test cases
console.log(squareRoot(4));    // 2
console.log(squareRoot(8));    // 2 (floor of sqrt(8) = 2.82...)
console.log(squareRoot(16));   // 4
console.log(squareRoot(0));    // 0
console.log(squareRoot(1));    // 1`}
        explanation="Binary search on possible square root values. For each mid, check if mid*mid equals target. Time: O(log n), Space: O(1)."
      />

      <ProblemBlock
        title="6. Search in Infinite Sized Array"
        difficulty="Medium"
        description="Search for an element in an infinite sorted array where we can't use array.length."
        solution={`function searchInfinite(arr, target) {
  let left = 0;
  let right = 1;
  
  // First, find the range where target might exist
  while (arr[right] < target) {
    left = right;
    right = right * 2; // Exponential search
  }
  
  // Now perform binary search in the found range
  return binarySearchInRange(arr, target, left, right);
}

function binarySearchInRange(arr, target, left, right) {
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return -1;
}

// Alternative approach with bounds checking
function searchInfiniteSafe(arr, target) {
  let left = 0;
  let right = 1;
  
  // Find bounds safely
  while (true) {
    try {
      if (arr[right] >= target) {
        break; // Found upper bound
      }
      left = right;
      right = right * 2;
    } catch (e) {
      // Array index out of bounds - we've gone too far
      right = right / 2;
      break;
    }
  }
  
  // Binary search in the safe range
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    
    try {
      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    } catch (e) {
      // Handle out of bounds
      right = mid - 1;
    }
  }
  
  return -1;
}

// Simulate infinite array for testing
function createInfiniteArray() {
  let arr = [];
  for (let i = 0; i < 1000; i++) {
    arr[i] = i * 2; // Even numbers: [0, 2, 4, 6, 8, ...]
  }
  
  // Simulate infinite array behavior
  return {
    get: function(index) {
      return arr[index] || undefined;
    }
  };
}

// Test cases (simulated)
const infiniteArr = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]; // Simulating infinite
console.log(searchInfinite(infiniteArr, 8));  // 4
console.log(searchInfinite(infiniteArr, 14)); // 7
console.log(searchInfinite(infiniteArr, 5));  // -1`}
        explanation="First find the range using exponential search (double the right boundary), then perform binary search in that range. Time: O(log n), Space: O(1)."
      />

      <ProblemBlock
        title="7. Search in Sorted Rotated Array"
        difficulty="Medium"
        description="Search for an element in a sorted array that has been rotated at some pivot point."
        solution={`function searchRotated(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
      return mid;
    }
    
    // Check which half is sorted
    if (arr[left] <= arr[mid]) {
      // Left half is sorted
      if (target >= arr[left] && target < arr[mid]) {
        right = mid - 1; // Search in left half
      } else {
        left = mid + 1; // Search in right half
      }
    } else {
      // Right half is sorted
      if (target > arr[mid] && target <= arr[right]) {
        left = mid + 1; // Search in right half
      } else {
        right = mid - 1; // Search in left half
      }
    }
  }
  
  return -1;
}

// Find pivot point first, then search
function searchRotatedTwoPass(arr, target) {
  const pivot = findPivot(arr);
  
  if (pivot === -1) {
    // Array is not rotated, perform normal binary search
    return binarySearch(arr, target, 0, arr.length - 1);
  }
  
  // Search in appropriate half
  if (target >= arr[0] && target <= arr[pivot]) {
    return binarySearch(arr, target, 0, pivot);
  } else {
    return binarySearch(arr, target, pivot + 1, arr.length - 1);
  }
}

function findPivot(arr) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    
    if (arr[mid] > arr[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  
  return left;
}

function binarySearch(arr, target, left, right) {
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return -1;
}

// Handle duplicates in rotated array
function searchRotatedWithDuplicates(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
      return mid;
    }
    
    // Skip duplicates
    if (arr[left] === arr[mid] && arr[mid] === arr[right]) {
      left++;
      right--;
    } else if (arr[left] <= arr[mid]) {
      // Left half is sorted
      if (target >= arr[left] && target < arr[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      // Right half is sorted
      if (target > arr[mid] && target <= arr[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  
  return -1;
}

// Test cases
console.log(searchRotated([4, 5, 6, 7, 0, 1, 2], 0)); // 4
console.log(searchRotated([4, 5, 6, 7, 0, 1, 2], 3)); // -1
console.log(searchRotated([1], 0));                   // -1
console.log(searchRotated([1, 3], 3));                // 1`}
        explanation="Modified binary search: determine which half is sorted, then search in the appropriate half based on target value. Time: O(log n), Space: O(1)."
      />

      <ProblemBlock
        title="8. Find a Peak Element"
        difficulty="Medium"
        description="Find a peak element in an array where a peak is greater than or equal to its neighbors."
        solution={`function findPeakElement(arr) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    
    // Compare with right neighbor
    if (arr[mid] > arr[mid + 1]) {
      // Peak is in left half (including mid)
      right = mid;
    } else {
      // Peak is in right half
      left = mid + 1;
    }
  }
  
  return left; // left and right converge to peak
}

// Alternative approach comparing with both neighbors
function findPeakElementBoth(arr) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    
    // Check if mid is a peak
    let leftNeighbor = (mid > 0) ? arr[mid - 1] : -Infinity;
    let rightNeighbor = (mid < arr.length - 1) ? arr[mid + 1] : -Infinity;
    
    if (arr[mid] >= leftNeighbor && arr[mid] >= rightNeighbor) {
      return mid; // Found peak
    } else if (leftNeighbor > arr[mid]) {
      right = mid - 1; // Peak is in left half
    } else {
      left = mid + 1; // Peak is in right half
    }
  }
  
  return -1;
}

// Find all peak elements
function findAllPeaks(arr) {
  const peaks = [];
  
  for (let i = 0; i < arr.length; i++) {
    let leftNeighbor = (i > 0) ? arr[i - 1] : -Infinity;
    let rightNeighbor = (i < arr.length - 1) ? arr[mid + 1] : -Infinity;
    
    if (arr[i] >= leftNeighbor && arr[i] >= rightNeighbor) {
      peaks.push(i);
    }
  }
  
  return peaks;
}

// Find global maximum (guaranteed peak)
function findGlobalMaximum(arr) {
  let maxIndex = 0;
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[maxIndex]) {
      maxIndex = i;
    }
  }
  
  return maxIndex;
}

// Test cases
console.log(findPeakElement([1, 2, 3, 1]));           // 2 (index of 3)
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4]));  // 5 (index of 6)
console.log(findPeakElement([1, 2, 3, 4, 5]));        // 4 (last element)
console.log(findPeakElement([5, 4, 3, 2, 1]));        // 0 (first element)`}
        explanation="Binary search approach: compare middle element with its right neighbor to determine which half contains a peak. Time: O(log n), Space: O(1)."
      />
    </div>
  );
}

// Advanced Search Problems Section (from second image)
function AdvancedSearchSection() {
  return (
    <div className="space-y-8">
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Advanced Search Problems
        </h2>
        <p className="text-gray-300 mb-6">
          These advanced problems combine multiple search techniques and require
          deeper understanding of algorithm design principles.
        </p>
      </div>

      <ProblemBlock
        title="9. Two Pointers Approach"
        difficulty="Easy"
        description="Use two pointers technique to solve various search and array manipulation problems efficiently."
        solution={`// Find pair with given sum in sorted array
function twoSumSorted(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left < right) {
    let sum = arr[left] + arr[right];
    
    if (sum === target) {
      return [left, right]; // Found pair
    } else if (sum < target) {
      left++; // Need larger sum
    } else {
      right--; // Need smaller sum
    }
  }
  
  return [-1, -1]; // No pair found
}

// Remove duplicates from sorted array
function removeDuplicatesTwoPointers(arr) {
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

// Move zeros to end
function moveZeros(arr) {
  let writeIndex = 0;
  
  // Move non-zero elements to front
  for (let readIndex = 0; readIndex < arr.length; readIndex++) {
    if (arr[readIndex] !== 0) {
      arr[writeIndex] = arr[readIndex];
      writeIndex++;
    }
  }
  
  // Fill remaining with zeros
  while (writeIndex < arr.length) {
    arr[writeIndex] = 0;
    writeIndex++;
  }
  
  return arr;
}

// Container with most water
function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let maxWater = 0;
  
  while (left < right) {
    let width = right - left;
    let minHeight = Math.min(height[left], height[right]);
    let currentArea = width * minHeight;
    
    maxWater = Math.max(maxWater, currentArea);
    
    // Move pointer with smaller height
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  
  return maxWater;
}

// Test cases
console.log(twoSumSorted([2, 7, 11, 15], 9)); // [0, 1]
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49`}
        explanation="Two pointers technique uses two indices moving from different ends or same direction to solve problems in O(n) time. Essential for sorted array problems."
      />

      <ProblemBlock
        title="10. Triplet in Sorted Array"
        difficulty="Medium"
        description="Find if there exists a triplet in a sorted array that adds up to a given target sum."
        solution={`function findTriplet(arr, target) {
  // Fix one element and use two pointers for remaining
  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;
    
    while (left < right) {
      let sum = arr[i] + arr[left] + arr[right];
      
      if (sum === target) {
        return [i, left, right]; // Found triplet
      } else if (sum < target) {
        left++; // Need larger sum
      } else {
        right--; // Need smaller sum
      }
    }
  }
  
  return [-1, -1, -1]; // No triplet found
}

// Find all unique triplets that sum to zero
function threeSum(nums) {
  nums.sort((a, b) => a - b);
  const result = [];
  
  for (let i = 0; i < nums.length - 2; i++) {
    // Skip duplicates for first element
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    
    let left = i + 1;
    let right = nums.length - 1;
    
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        
        // Skip duplicates for second and third elements
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  
  return result;
}

// Find triplet with sum closest to target
function threeSumClosest(nums, target) {
  nums.sort((a, b) => a - b);
  let closestSum = nums[0] + nums[1] + nums[2];
  
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      
      if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        closestSum = sum;
      }
      
      if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      } else {
        return sum; // Exact match
      }
    }
  }
  
  return closestSum;
}

// Count triplets with sum less than target
function countTriplets(arr, target) {
  arr.sort((a, b) => a - b);
  let count = 0;
  
  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;
    
    while (left < right) {
      let sum = arr[i] + arr[left] + arr[right];
      
      if (sum < target) {
        // All elements from left+1 to right will also satisfy
        count += right - left;
        left++;
      } else {
        right--;
      }
    }
  }
  
  return count;
}

// Test cases
console.log(findTriplet([1, 2, 3, 4, 5], 9)); // [0, 1, 4] (1+2+5=8, closest to 9)
console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1, -1, 2], [-1, 0, 1]]
console.log(threeSumClosest([-1, 2, 1, -4], 1)); // 2`}
        explanation="Fix one element, then use two pointers for remaining elements. Sort array first for efficient two-pointer technique. Time: O(n²), Space: O(1)."
      />

      <ProblemBlock
        title="11. Median of Two Sorted Arrays"
        difficulty="Hard"
        description="Find the median of two sorted arrays of different sizes efficiently."
        solution={`function findMedianSortedArrays(nums1, nums2) {
  // Ensure nums1 is the smaller array
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }
  
  const m = nums1.length;
  const n = nums2.length;
  let left = 0;
  let right = m;
  
  while (left <= right) {
    const partitionX = Math.floor((left + right) / 2);
    const partitionY = Math.floor((m + n + 1) / 2) - partitionX;
    
    // Handle edge cases
    const maxLeftX = partitionX === 0 ? -Infinity : nums1[partitionX - 1];
    const minRightX = partitionX === m ? Infinity : nums1[partitionX];
    
    const maxLeftY = partitionY === 0 ? -Infinity : nums2[partitionY - 1];
    const minRightY = partitionY === n ? Infinity : nums2[partitionY];
    
    if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
      // Found correct partition
      if ((m + n) % 2 === 0) {
        return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
      } else {
        return Math.max(maxLeftX, maxLeftY);
      }
    } else if (maxLeftX > minRightY) {
      // Go left in nums1
      right = partitionX - 1;
    } else {
      // Go right in nums1
      left = partitionX + 1;
    }
  }
  
  return -1; // Should never reach here
}

// Simpler approach: Merge and find median
function findMedianSortedArraysMerge(nums1, nums2) {
  const merged = [];
  let i = 0, j = 0;
  
  // Merge arrays
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] <= nums2[j]) {
      merged.push(nums1[i++]);
    } else {
      merged.push(nums2[j++]);
    }
  }
  
  // Add remaining elements
  while (i < nums1.length) merged.push(nums1[i++]);
  while (j < nums2.length) merged.push(nums2[j++]);
  
  // Find median
  const n = merged.length;
  if (n % 2 === 0) {
    return (merged[n / 2 - 1] + merged[n / 2]) / 2;
  } else {
    return merged[Math.floor(n / 2)];
  }
}

// Binary search approach with better space complexity
function findMedianSortedArraysOptimal(nums1, nums2) {
  const m = nums1.length;
  const n = nums2.length;
  
  // Ensure nums1 is smaller
  if (m > n) {
    [nums1, nums2] = [nums2, nums1];
  }
  
  let left = 0;
  let right = nums1.length;
  
  while (left <= right) {
    const partition1 = Math.floor((left + right) / 2);
    const partition2 = Math.floor((m + n + 1) / 2) - partition1;
    
    const maxLeft1 = partition1 === 0 ? -Infinity : nums1[partition1 - 1];
    const minRight1 = partition1 === m ? Infinity : nums1[partition1];
    
    const maxLeft2 = partition2 === 0 ? -Infinity : nums2[partition2 - 1];
    const minRight2 = partition2 === n ? Infinity : nums2[partition2];
    
    if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
      if ((m + n) % 2 === 0) {
        return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;
      } else {
        return Math.max(maxLeft1, maxLeft2);
      }
    } else if (maxLeft1 > minRight2) {
      right = partition1 - 1;
    } else {
      left = partition1 + 1;
    }
  }
  
  return -1;
}

// Test cases
console.log(findMedianSortedArrays([1, 3], [2])); // 2.0
console.log(findMedianSortedArrays([1, 2], [3, 4])); // 2.5
console.log(findMedianSortedArrays([0, 0], [0, 0])); // 0.0`}
        explanation="Binary search on smaller array to find correct partition. Ensure left elements are less than right elements across both arrays. Time: O(log(min(m,n))), Space: O(1)."
      />

      <ProblemBlock
        title="12. Repeating Elements Part 1"
        difficulty="Easy"
        description="Find the first repeating element in an array where elements can repeat."
        solution={`function firstRepeatingElement(arr) {
  const elementCount = {};
  let minIndex = -1;
  
  // Count occurrences and track first occurrence
  for (let i = 0; i < arr.length; i++) {
    if (elementCount[arr[i]] !== undefined) {
      // Element seen before
      if (minIndex === -1 || elementCount[arr[i]] < minIndex) {
        minIndex = elementCount[arr[i]];
      }
    } else {
      // First occurrence
      elementCount[arr[i]] = i;
    }
  }
  
  return minIndex;
}

// Alternative: Use Set to track seen elements
function firstRepeatingElementSet(arr) {
  const seen = new Set();
  
  for (let i = 0; i < arr.length; i++) {
    if (seen.has(arr[i])) {
      return i; // First repeating element found
    }
    seen.add(arr[i]);
  }
  
  return -1; // No repeating element
}

// Find first repeating element with frequency count
function firstRepeatingWithFrequency(arr) {
  const frequency = {};
  const firstOccurrence = {};
  
  // Build frequency map and track first occurrence
  for (let i = 0; i < arr.length; i++) {
    frequency[arr[i]] = (frequency[arr[i]] || 0) + 1;
    
    if (firstOccurrence[arr[i]] === undefined) {
      firstOccurrence[arr[i]] = i;
    }
  }
  
  // Find element with frequency > 1 and smallest first occurrence
  let result = -1;
  let minIndex = arr.length;
  
  for (const [element, count] of Object.entries(frequency)) {
    if (count > 1 && firstOccurrence[element] < minIndex) {
      minIndex = firstOccurrence[element];
      result = parseInt(element);
    }
  }
  
  return result;
}

// Find all repeating elements
function findAllRepeatingElements(arr) {
  const frequency = {};
  const repeating = [];
  
  // Count frequencies
  for (const element of arr) {
    frequency[element] = (frequency[element] || 0) + 1;
  }
  
  // Find repeating elements
  for (const [element, count] of Object.entries(frequency)) {
    if (count > 1) {
      repeating.push(parseInt(element));
    }
  }
  
  return repeating;
}

// Test cases
console.log(firstRepeatingElement([1, 5, 3, 4, 3, 5, 6])); // 1 (index of first repeating element 5)
console.log(firstRepeatingElement([1, 2, 3, 4]));          // -1 (no repeating)
console.log(firstRepeatingElement([1, 1, 2, 2, 3]));       // 0 (first 1 repeats)`}
        explanation="Use hash map to track first occurrence of each element. When element repeats, compare with current minimum index. Time: O(n), Space: O(n)."
      />

      <ProblemBlock
        title="13. Repeating Elements Part 2"
        difficulty="Medium"
        description="Find the only repeating element in an array where all elements from 1 to n-1 appear once and one element appears twice."
        solution={`function findOnlyRepeating(arr) {
  // Mathematical approach: sum of array - sum of 1 to n-1
  const n = arr.length;
  const actualSum = arr.reduce((sum, num) => sum + num, 0);
  const expectedSum = (n * (n - 1)) / 2; // Sum of 1 to n-1
  
  return actualSum - expectedSum;
}

// Alternative: Using XOR
function findOnlyRepeatingXOR(arr) {
  let xor = 0;
  const n = arr.length;
  
  // XOR all elements in array
  for (const element of arr) {
    xor ^= element;
  }
  
  // XOR with numbers 1 to n-1
  for (let i = 1; i < n; i++) {
    xor ^= i;
  }
  
  return xor; // Result will be the repeating element
}

// Using hash map approach
function findOnlyRepeatingHash(arr) {
  const seen = new Set();
  
  for (const element of arr) {
    if (seen.has(element)) {
      return element; // Found repeating element
    }
    seen.add(element);
  }
  
  return -1; // Should not reach here
}

// Using Floyd's cycle detection algorithm
function findOnlyRepeatingFloyd(arr) {
  // Treat array as linked list where arr[i] points to arr[arr[i]]
  let slow = arr[0];
  let fast = arr[0];
  
  // Find intersection point in cycle
  do {
    slow = arr[slow];
    fast = arr[arr[fast]];
  } while (slow !== fast);
  
  // Find start of cycle (repeating element)
  slow = arr[0];
  while (slow !== fast) {
    slow = arr[slow];
    fast = arr[fast];
  }
  
  return slow;
}

// Find missing and repeating elements
function findMissingAndRepeating(arr) {
  const n = arr.length;
  const actualSum = arr.reduce((sum, num) => sum + num, 0);
  const actualSumSquares = arr.reduce((sum, num) => sum + num * num, 0);
  
  const expectedSum = (n * (n + 1)) / 2;
  const expectedSumSquares = (n * (n + 1) * (2 * n + 1)) / 6;
  
  const sumDiff = actualSum - expectedSum;
  const sumSquaresDiff = actualSumSquares - expectedSumSquares;
  
  const repeating = (sumDiff + sumSquaresDiff / sumDiff) / 2;
  const missing = repeating - sumDiff;
  
  return { missing, repeating };
}

// Test cases
console.log(findOnlyRepeating([1, 3, 2, 3, 4])); // 3
console.log(findOnlyRepeating([1, 2, 3, 4, 4])); // 4
console.log(findOnlyRepeating([2, 1, 2]));       // 2`}
        explanation="Mathematical approach: difference between actual sum and expected sum gives the repeating element. Time: O(n), Space: O(1)."
      />

      <ProblemBlock
        title="14. Allocate Minimum Pages (Naive Method)"
        difficulty="Medium"
        description="Allocate minimum number of pages to students such that maximum pages allocated to any student is minimized."
        solution={`function allocatePagesNaive(pages, students) {
  if (students > pages.length) {
    return -1; // More students than books
  }
  
  if (students === 1) {
    return pages.reduce((sum, page) => sum + page, 0);
  }
  
  if (pages.length === 1) {
    return pages[0];
  }
  
  // Try all possible ways to divide books
  let minPages = Infinity;
  
  function tryAllocation(bookIndex, studentIndex, currentMax, currentSum) {
    if (bookIndex === pages.length) {
      if (studentIndex === students) {
        minPages = Math.min(minPages, currentMax);
      }
      return;
    }
    
    if (studentIndex === students) {
      return; // No more students available
    }
    
    // Allocate current book to current student
    const newSum = currentSum + pages[bookIndex];
    const newMax = Math.max(currentMax, newSum);
    tryAllocation(bookIndex + 1, studentIndex, newMax, newSum);
    
    // Allocate current book to next student (if not first book)
    if (bookIndex > 0) {
      tryAllocation(bookIndex + 1, studentIndex + 1, Math.max(currentMax, pages[bookIndex]), pages[bookIndex]);
    }
  }
  
  tryAllocation(0, 0, 0, 0);
  return minPages === Infinity ? -1 : minPages;
}

// Recursive approach with memoization
function allocatePagesRecursive(pages, students) {
  if (students > pages.length) return -1;
  if (students === 1) return pages.reduce((sum, page) => sum + page, 0);
  if (pages.length === 1) return pages[0];
  
  const memo = new Map();
  
  function dp(bookIndex, remainingStudents) {
    const key = \`\${bookIndex}-\${remainingStudents}\`;
    
    if (memo.has(key)) {
      return memo.get(key);
    }
    
    if (remainingStudents === 1) {
      const sum = pages.slice(bookIndex).reduce((sum, page) => sum + page, 0);
      memo.set(key, sum);
      return sum;
    }
    
    let minPages = Infinity;
    let currentSum = 0;
    
    for (let i = bookIndex; i < pages.length - remainingStudents + 1; i++) {
      currentSum += pages[i];
      const remainingPages = dp(i + 1, remainingStudents - 1);
      const maxPages = Math.max(currentSum, remainingPages);
      minPages = Math.min(minPages, maxPages);
    }
    
    memo.set(key, minPages);
    return minPages;
  }
  
  return dp(0, students);
}

// Test cases
console.log(allocatePagesNaive([12, 34, 67, 90], 2)); // 113
console.log(allocatePagesNaive([15, 17, 20], 2));     // 32
console.log(allocatePagesNaive([10, 20, 30, 40], 2)); // 60`}
        explanation="Naive recursive approach tries all possible ways to divide books among students. Exponential time complexity. Time: O(2^n), Space: O(n)."
      />

      <ProblemBlock
        title="15. Allocate Minimum Pages (Binary Search)"
        difficulty="Medium"
        description="Efficiently allocate minimum number of pages using binary search on the answer space."
        solution={`function allocatePagesBinarySearch(pages, students) {
  if (students > pages.length) return -1;
  
  // Binary search on the answer space
  let left = Math.max(...pages); // Minimum possible answer
  let right = pages.reduce((sum, page) => sum + page, 0); // Maximum possible answer
  let result = -1;
  
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    
    if (isValidAllocation(pages, students, mid)) {
      result = mid;
      right = mid - 1; // Try to minimize the answer
    } else {
      left = mid + 1; // Need more pages
    }
  }
  
  return result;
}

function isValidAllocation(pages, students, maxPages) {
  let studentCount = 1;
  let currentSum = 0;
  
  for (let i = 0; i < pages.length; i++) {
    if (currentSum + pages[i] > maxPages) {
      studentCount++;
      currentSum = pages[i];
      
      if (studentCount > students) {
        return false; // Cannot allocate within given pages
      }
    } else {
      currentSum += pages[i];
    }
  }
  
  return true;
}

// Alternative: Find minimum pages needed
function allocatePagesOptimal(pages, students) {
  if (students > pages.length) return -1;
  
  const totalPages = pages.reduce((sum, page) => sum + page, 0);
  const maxPages = Math.max(...pages);
  
  let left = maxPages;
  let right = totalPages;
  
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    
    if (canAllocate(pages, students, mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  
  return left;
}

function canAllocate(pages, students, maxPagesPerStudent) {
  let studentsUsed = 1;
  let currentPages = 0;
  
  for (const pageCount of pages) {
    if (currentPages + pageCount <= maxPagesPerStudent) {
      currentPages += pageCount;
    } else {
      studentsUsed++;
      currentPages = pageCount;
      
      if (studentsUsed > students) {
        return false;
      }
    }
  }
  
  return true;
}

// Get the actual allocation
function getOptimalAllocation(pages, students) {
  const minPages = allocatePagesBinarySearch(pages, students);
  const allocation = [];
  let currentSum = 0;
  let currentStudent = [];
  
  for (const pageCount of pages) {
    if (currentSum + pageCount <= minPages) {
      currentSum += pageCount;
      currentStudent.push(pageCount);
    } else {
      allocation.push([...currentStudent]);
      currentStudent = [pageCount];
      currentSum = pageCount;
    }
  }
  
  if (currentStudent.length > 0) {
    allocation.push(currentStudent);
  }
  
  return { minPages, allocation };
}

// Test cases
console.log(allocatePagesBinarySearch([12, 34, 67, 90], 2)); // 113
console.log(allocatePagesBinarySearch([15, 17, 20], 2));     // 32
console.log(allocatePagesBinarySearch([10, 20, 30, 40], 2)); // 60
console.log(getOptimalAllocation([12, 34, 67, 90], 2)); // {minPages: 113, allocation: [[12, 34], [67, 90]]}`}
        explanation="Binary search on answer space: check if allocation is possible with given maximum pages per student. Time: O(n * log(sum)), Space: O(1)."
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
        className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors mb-4"
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
