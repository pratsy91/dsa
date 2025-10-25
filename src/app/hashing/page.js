"use client";
import Link from "next/link";
import { useState } from "react";

export default function Hashing() {
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
            Hashing & Hash Tables Mastery
          </h1>
          <p className="text-gray-400 mt-2">
            Hash Tables, Frequency Count, Subarray Problems & Advanced Hashing
          </p>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-gray-800/50 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-2 overflow-x-auto">
            {[
              { id: "fundamentals", label: "📚 Fundamentals" },
              { id: "basic-hashing", label: "🔑 Basic Hashing" },
              { id: "subarray-problems", label: "📊 Subarray Problems" },
              { id: "advanced-hashing", label: "🚀 Advanced Hashing" },
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
        {activeTab === "basic-hashing" && <BasicHashingSection />}
        {activeTab === "subarray-problems" && <SubarrayProblemsSection />}
        {activeTab === "advanced-hashing" && <AdvancedHashingSection />}
      </main>
    </div>
  );
}

// Fundamentals Section
function FundamentalsSection() {
  return (
    <div className="space-y-8">
      {/* What is Hashing */}
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">What is Hashing?</h2>
        <p className="text-gray-300 text-lg mb-6">
          Hashing is a technique that maps data of arbitrary size to fixed-size
          values using a hash function. Hash tables use hashing to provide fast
          average-case performance for insertion, deletion, and lookup
          operations.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-orange-200 mb-3">
              Key Concepts:
            </h3>
            <ul className="space-y-2 text-orange-100">
              <li>
                • <strong>Hash Function:</strong> Maps keys to array indices
              </li>
              <li>
                • <strong>Hash Table:</strong> Array-based data structure
              </li>
              <li>
                • <strong>Collision:</strong> When two keys hash to same index
              </li>
              <li>
                • <strong>Load Factor:</strong> Ratio of elements to table size
              </li>
            </ul>
          </div>

          <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-red-200 mb-3">
              Common Applications:
            </h3>
            <ul className="space-y-2 text-red-100">
              <li>
                • <strong>Frequency Counting:</strong> Count occurrences
              </li>
              <li>
                • <strong>Set Operations:</strong> Union, intersection
              </li>
              <li>
                • <strong>Subarray Problems:</strong> Prefix sum optimization
              </li>
              <li>
                • <strong>Caching:</strong> Fast data retrieval
              </li>
            </ul>
          </div>
        </div>

        <TheoryBlock title="Hash Table Implementation & Collision Handling">
          <CodeBlock
            code={`// Hash Table Implementation with Chaining

class HashTable {
  constructor(size = 10) {
    this.size = size;
    this.table = Array(size).fill(null).map(() => []);
  }
  
  // Hash function
  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i)) % this.size;
    }
    return hash;
  }
  
  // Insert key-value pair
  set(key, value) {
    const index = this.hash(key);
    const bucket = this.table[index];
    
    // Check if key already exists
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value; // Update existing
        return;
      }
    }
    
    // Add new key-value pair
    bucket.push([key, value]);
  }
  
  // Get value by key
  get(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket[i][1];
      }
    }
    
    return undefined; // Key not found
  }
  
  // Delete key-value pair
  delete(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        return true;
      }
    }
    
    return false; // Key not found
  }
  
  // Check if key exists
  has(key) {
    return this.get(key) !== undefined;
  }
}

// Usage example
const hashTable = new HashTable();
hashTable.set('apple', 5);
hashTable.set('banana', 3);
console.log(hashTable.get('apple')); // 5
console.log(hashTable.has('banana')); // true`}
          />
        </TheoryBlock>
      </div>

      {/* Hash Functions */}
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Hash Functions & Collision Handling
        </h2>
        <p className="text-gray-300 mb-6">
          Different hash functions and collision resolution techniques for
          optimal performance.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-3">
              🔢 Hash Functions
            </h3>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>• Division Method</li>
              <li>• Multiplication Method</li>
              <li>• Universal Hashing</li>
              <li>• Cryptographic Hash</li>
            </ul>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-3">
              ⚡ Collision Resolution
            </h3>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>• Chaining (Linked Lists)</li>
              <li>• Open Addressing</li>
              <li>• Linear Probing</li>
              <li>• Quadratic Probing</li>
            </ul>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-3">
              📊 Performance
            </h3>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>• Average: O(1)</li>
              <li>• Worst Case: O(n)</li>
              <li>• Space: O(n)</li>
              <li>• Load Factor: α ≤ 0.75</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// Basic Hashing Section (First Image Problems)
function BasicHashingSection() {
  return (
    <div className="space-y-8">
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Basic Hashing Problems
        </h2>
        <p className="text-gray-300 mb-6">
          Fundamental hashing problems involving counting, frequency analysis,
          and set operations.
        </p>
      </div>

      <ProblemBlock
        title="1. Count Distinct Elements"
        difficulty="Easy"
        description="Count the number of distinct elements in an array."
        solution={`// Count Distinct Elements

function countDistinctElements(arr) {
  // Using Set (built-in hash table)
  const distinctSet = new Set(arr);
  return distinctSet.size;
}

// Using Map for more control
function countDistinctElementsMap(arr) {
  const countMap = new Map();
  
  for (const element of arr) {
    countMap.set(element, (countMap.get(element) || 0) + 1);
  }
  
  return countMap.size;
}

// Using object as hash table
function countDistinctElementsObject(arr) {
  const distinctObj = {};
  
  for (const element of arr) {
    distinctObj[element] = true;
  }
  
  return Object.keys(distinctObj).length;
}

// Count distinct elements with frequency
function countDistinctWithFrequency(arr) {
  const frequencyMap = new Map();
  
  for (const element of arr) {
    frequencyMap.set(element, (frequencyMap.get(element) || 0) + 1);
  }
  
  return {
    distinctCount: frequencyMap.size,
    frequencies: Object.fromEntries(frequencyMap)
  };
}

// Count distinct elements in subarrays
function countDistinctInSubarrays(arr, k) {
  const results = [];
  const n = arr.length;
  
  for (let i = 0; i <= n - k; i++) {
    const subarray = arr.slice(i, i + k);
    const distinctCount = countDistinctElements(subarray);
    results.push(distinctCount);
  }
  
  return results;
}

// Test cases
const arr = [1, 2, 3, 4, 1, 2, 3, 5, 6, 7, 1, 2];
console.log(countDistinctElements(arr)); // 7
console.log(countDistinctElementsMap(arr)); // 7
console.log(countDistinctElementsObject(arr)); // 7
console.log(countDistinctWithFrequency(arr)); // { distinctCount: 7, frequencies: {...} }
console.log(countDistinctInSubarrays(arr, 4)); // [4, 4, 4, 4, 4, 4, 4, 4, 4]`}
        explanation="Use Set or Map to store unique elements. Set automatically handles duplicates. Time: O(n), Space: O(n)."
      />

      <ProblemBlock
        title="2. Frequencies of Array Elements"
        difficulty="Easy"
        description="Find the frequency of each element in an array."
        solution={`// Frequencies of Array Elements

function findFrequencies(arr) {
  const frequencyMap = new Map();
  
  // Count frequencies
  for (const element of arr) {
    frequencyMap.set(element, (frequencyMap.get(element) || 0) + 1);
  }
  
  return frequencyMap;
}

// Using object
function findFrequenciesObject(arr) {
  const frequencies = {};
  
  for (const element of arr) {
    frequencies[element] = (frequencies[element] || 0) + 1;
  }
  
  return frequencies;
}

// Frequencies with sorted output
function findFrequenciesSorted(arr) {
  const frequencyMap = findFrequencies(arr);
  
  // Sort by element value
  const sortedEntries = Array.from(frequencyMap.entries())
    .sort((a, b) => a[0] - b[0]);
  
  return sortedEntries;
}

// Frequencies sorted by frequency
function findFrequenciesByCount(arr) {
  const frequencyMap = findFrequencies(arr);
  
  // Sort by frequency (descending)
  const sortedEntries = Array.from(frequencyMap.entries())
    .sort((a, b) => b[1] - a[1]);
  
  return sortedEntries;
}

// Print frequencies in a formatted way
function printFrequencies(arr) {
  const frequencies = findFrequencies(arr);
  
  console.log("Element Frequencies:");
  for (const [element, count] of frequencies) {
    console.log(\`\${element}: \${count}\`);
  }
  
  return frequencies;
}

// Find most frequent element
function findMostFrequent(arr) {
  const frequencies = findFrequencies(arr);
  let maxFreq = 0;
  let mostFrequent = null;
  
  for (const [element, count] of frequencies) {
    if (count > maxFreq) {
      maxFreq = count;
      mostFrequent = element;
    }
  }
  
  return { element: mostFrequent, frequency: maxFreq };
}

// Find all elements with given frequency
function findElementsWithFrequency(arr, targetFreq) {
  const frequencies = findFrequencies(arr);
  const result = [];
  
  for (const [element, count] of frequencies) {
    if (count === targetFreq) {
      result.push(element);
    }
  }
  
  return result;
}

// Test cases
const arr = [1, 2, 3, 4, 1, 2, 3, 5, 6, 7, 1, 2];
console.log(findFrequencies(arr)); // Map with frequencies
console.log(findFrequenciesObject(arr)); // Object with frequencies
console.log(findFrequenciesSorted(arr)); // Sorted by element
console.log(findFrequenciesByCount(arr)); // Sorted by frequency
console.log(findMostFrequent(arr)); // { element: 1, frequency: 3 }
console.log(findElementsWithFrequency(arr, 2)); // [2, 3]`}
        explanation="Use Map or object to count occurrences of each element. Time: O(n), Space: O(n)."
      />

      <ProblemBlock
        title="3. Intersection of Two Unsorted Arrays"
        difficulty="Easy"
        description="Find the intersection (common elements) of two unsorted arrays."
        solution={`// Intersection of Two Unsorted Arrays

function intersectionOfArrays(arr1, arr2) {
  const set1 = new Set(arr1);
  const intersection = new Set();
  
  for (const element of arr2) {
    if (set1.has(element)) {
      intersection.add(element);
    }
  }
  
  return Array.from(intersection);
}

// Intersection with frequency count
function intersectionWithCount(arr1, arr2) {
  const count1 = new Map();
  const count2 = new Map();
  
  // Count frequencies in both arrays
  for (const element of arr1) {
    count1.set(element, (count1.get(element) || 0) + 1);
  }
  
  for (const element of arr2) {
    count2.set(element, (count2.get(element) || 0) + 1);
  }
  
  // Find common elements with minimum frequency
  const result = [];
  for (const [element, freq1] of count1) {
    if (count2.has(element)) {
      const freq2 = count2.get(element);
      const minFreq = Math.min(freq1, freq2);
      
      // Add element minFreq times
      for (let i = 0; i < minFreq; i++) {
        result.push(element);
      }
    }
  }
  
  return result;
}

// Intersection using Map
function intersectionUsingMap(arr1, arr2) {
  const map = new Map();
  const result = [];
  
  // Store elements from first array
  for (const element of arr1) {
    map.set(element, (map.get(element) || 0) + 1);
  }
  
  // Check elements from second array
  for (const element of arr2) {
    if (map.has(element) && map.get(element) > 0) {
      result.push(element);
      map.set(element, map.get(element) - 1);
    }
  }
  
  return result;
}

// Intersection of multiple arrays
function intersectionOfMultipleArrays(arrays) {
  if (arrays.length === 0) return [];
  if (arrays.length === 1) return [...new Set(arrays[0])];
  
  let result = new Set(arrays[0]);
  
  for (let i = 1; i < arrays.length; i++) {
    const currentSet = new Set(arrays[i]);
    result = new Set([...result].filter(x => currentSet.has(x)));
  }
  
  return Array.from(result);
}

// Intersection with custom comparator
function intersectionWithComparator(arr1, arr2, compareFn) {
  const result = [];
  
  for (const elem1 of arr1) {
    for (const elem2 of arr2) {
      if (compareFn(elem1, elem2)) {
        result.push(elem1);
        break;
      }
    }
  }
  
  return result;
}

// Test cases
const arr1 = [1, 2, 3, 4, 5, 2, 3];
const arr2 = [3, 4, 5, 6, 7, 3];
const arr3 = [3, 5, 7, 8, 9];

console.log(intersectionOfArrays(arr1, arr2)); // [3, 4, 5]
console.log(intersectionWithCount(arr1, arr2)); // [3, 3, 4, 5]
console.log(intersectionUsingMap(arr1, arr2)); // [3, 4, 5, 3]
console.log(intersectionOfMultipleArrays([arr1, arr2, arr3])); // [3, 5]
console.log(intersectionWithComparator(arr1, arr2, (a, b) => a === b)); // [3, 4, 5, 2, 3]`}
        explanation="Use Set for unique intersection or Map for frequency-aware intersection. Time: O(m+n), Space: O(min(m,n))."
      />

      <ProblemBlock
        title="4. Union of Two Unsorted Arrays"
        difficulty="Easy"
        description="Find the union (all unique elements) of two unsorted arrays."
        solution={`// Union of Two Unsorted Arrays

function unionOfArrays(arr1, arr2) {
  const unionSet = new Set();
  
  // Add all elements from both arrays
  for (const element of arr1) {
    unionSet.add(element);
  }
  
  for (const element of arr2) {
    unionSet.add(element);
  }
  
  return Array.from(unionSet);
}

// Union using spread operator
function unionOfArraysSpread(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}

// Union with frequency count
function unionWithCount(arr1, arr2) {
  const count = new Map();
  
  // Count frequencies in both arrays
  for (const element of arr1) {
    count.set(element, (count.get(element) || 0) + 1);
  }
  
  for (const element of arr2) {
    count.set(element, (count.get(element) || 0) + 1);
  }
  
  return Object.fromEntries(count);
}

// Union preserving order (first occurrence)
function unionPreservingOrder(arr1, arr2) {
  const seen = new Set();
  const result = [];
  
  // Add elements from first array
  for (const element of arr1) {
    if (!seen.has(element)) {
      result.push(element);
      seen.add(element);
    }
  }
  
  // Add elements from second array
  for (const element of arr2) {
    if (!seen.has(element)) {
      result.push(element);
      seen.add(element);
    }
  }
  
  return result;
}

// Union of multiple arrays
function unionOfMultipleArrays(arrays) {
  const unionSet = new Set();
  
  for (const array of arrays) {
    for (const element of array) {
      unionSet.add(element);
    }
  }
  
  return Array.from(unionSet);
}

// Union with custom merge function
function unionWithMerge(arr1, arr2, mergeFn) {
  const map = new Map();
  
  // Process first array
  for (const element of arr1) {
    map.set(element, element);
  }
  
  // Process second array with merge function
  for (const element of arr2) {
    if (map.has(element)) {
      map.set(element, mergeFn(map.get(element), element));
    } else {
      map.set(element, element);
    }
  }
  
  return Array.from(map.values());
}

// Union with size information
function unionWithInfo(arr1, arr2) {
  const unionSet = new Set();
  
  for (const element of arr1) {
    unionSet.add(element);
  }
  
  for (const element of arr2) {
    unionSet.add(element);
  }
  
  return {
    union: Array.from(unionSet),
    size: unionSet.size,
    arr1Size: arr1.length,
    arr2Size: arr2.length,
    commonElements: intersectionOfArrays(arr1, arr2).length
  };
}

// Test cases
const arr1 = [1, 2, 3, 4, 5, 2, 3];
const arr2 = [3, 4, 5, 6, 7, 3];

console.log(unionOfArrays(arr1, arr2)); // [1, 2, 3, 4, 5, 6, 7]
console.log(unionOfArraysSpread(arr1, arr2)); // [1, 2, 3, 4, 5, 6, 7]
console.log(unionWithCount(arr1, arr2)); // {1: 1, 2: 1, 3: 3, 4: 1, 5: 1, 6: 1, 7: 1}
console.log(unionPreservingOrder(arr1, arr2)); // [1, 2, 3, 4, 5, 6, 7]
console.log(unionOfMultipleArrays([arr1, arr2, [8, 9, 10]])); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(unionWithInfo(arr1, arr2));`}
        explanation="Use Set to automatically handle duplicates. Union contains all unique elements from both arrays. Time: O(m+n), Space: O(m+n)."
      />

      <ProblemBlock
        title="5. Pair with Given Sum in Unsorted Array"
        difficulty="Easy"
        description="Find a pair of elements in an unsorted array that sum to a given target value."
        solution={`// Pair with Given Sum in Unsorted Array

function findPairWithSum(arr, target) {
  const seen = new Set();
  
  for (const num of arr) {
    const complement = target - num;
    
    if (seen.has(complement)) {
      return [complement, num];
    }
    
    seen.add(num);
  }
  
  return null; // No pair found
}

// Find all pairs with given sum
function findAllPairsWithSum(arr, target) {
  const seen = new Map(); // Store frequency
  const pairs = [];
  
  for (const num of arr) {
    const complement = target - num;
    const complementCount = seen.get(complement) || 0;
    
    if (complementCount > 0) {
      pairs.push([complement, num]);
      seen.set(complement, complementCount - 1);
    } else {
      seen.set(num, (seen.get(num) || 0) + 1);
    }
  }
  
  return pairs;
}

// Find pair with indices
function findPairWithIndices(arr, target) {
  const seen = new Map();
  
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    const complement = target - num;
    
    if (seen.has(complement)) {
      return [seen.get(complement), i];
    }
    
    seen.set(num, i);
  }
  
  return null;
}

// Find all pairs with indices
function findAllPairsWithIndices(arr, target) {
  const seen = new Map();
  const pairs = [];
  
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    const complement = target - num;
    
    if (seen.has(complement)) {
      const complementIndex = seen.get(complement);
      pairs.push([complementIndex, i]);
    }
    
    seen.set(num, i);
  }
  
  return pairs;
}

// Check if pair exists (boolean)
function hasPairWithSum(arr, target) {
  const seen = new Set();
  
  for (const num of arr) {
    if (seen.has(target - num)) {
      return true;
    }
    seen.add(num);
  }
  
  return false;
}

// Find pair closest to target
function findPairClosestToTarget(arr, target) {
  const seen = new Set();
  let closestPair = null;
  let minDiff = Infinity;
  
  for (const num of arr) {
    const complement = target - num;
    
    if (seen.has(complement)) {
      return [complement, num]; // Exact match
    }
    
    // Check all seen numbers for closest match
    for (const seenNum of seen) {
      const sum = num + seenNum;
      const diff = Math.abs(sum - target);
      
      if (diff < minDiff) {
        minDiff = diff;
        closestPair = [seenNum, num];
      }
    }
    
    seen.add(num);
  }
  
  return closestPair;
}

// Two-pointer approach for sorted array (for comparison)
function findPairTwoPointers(arr, target) {
  const sorted = [...arr].sort((a, b) => a - b);
  let left = 0;
  let right = sorted.length - 1;
  
  while (left < right) {
    const sum = sorted[left] + sorted[right];
    
    if (sum === target) {
      return [sorted[left], sorted[right]];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  
  return null;
}

// Test cases
const arr = [1, 4, 45, 6, 10, 8];
const target = 16;

console.log(findPairWithSum(arr, target)); // [10, 6]
console.log(findAllPairsWithSum(arr, target)); // [[10, 6]]
console.log(findPairWithIndices(arr, target)); // [4, 3] (indices of 10 and 6)
console.log(findAllPairsWithIndices(arr, target)); // [[4, 3]]
console.log(hasPairWithSum(arr, target)); // true
console.log(findPairClosestToTarget(arr, 15)); // [6, 8] (sum = 14, closest to 15)`}
        explanation="Use Set to store seen elements. For each element, check if complement (target - element) exists in set. Time: O(n), Space: O(n)."
      />
    </div>
  );
}

// Subarray Problems Section
function SubarrayProblemsSection() {
  return (
    <div className="space-y-8">
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Subarray Problems
        </h2>
        <p className="text-gray-300 mb-6">
          Problems involving subarrays and prefix sum techniques with hashing.
        </p>
      </div>

      <ProblemBlock
        title="6. Subarray with Zero Sum"
        difficulty="Medium"
        description="Check if there exists a subarray with sum equal to zero."
        solution={`// Subarray with Zero Sum

function hasSubarrayWithZeroSum(arr) {
  const prefixSumSet = new Set();
  let prefixSum = 0;
  
  for (const num of arr) {
    prefixSum += num;
    
    // If prefix sum is 0 or already seen, subarray with zero sum exists
    if (prefixSum === 0 || prefixSumSet.has(prefixSum)) {
      return true;
    }
    
    prefixSumSet.add(prefixSum);
  }
  
  return false;
}

// Find all subarrays with zero sum
function findAllSubarraysWithZeroSum(arr) {
  const prefixSumMap = new Map();
  prefixSumMap.set(0, [-1]); // Empty subarray has sum 0
  const result = [];
  let prefixSum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    prefixSum += arr[i];
    
    if (prefixSumMap.has(prefixSum)) {
      // Found subarray with zero sum
      const startIndices = prefixSumMap.get(prefixSum);
      for (const startIndex of startIndices) {
        result.push({
          start: startIndex + 1,
          end: i,
          subarray: arr.slice(startIndex + 1, i + 1)
        });
      }
    }
    
    // Add current prefix sum to map
    if (!prefixSumMap.has(prefixSum)) {
      prefixSumMap.set(prefixSum, []);
    }
    prefixSumMap.get(prefixSum).push(i);
  }
  
  return result;
}

// Find first subarray with zero sum
function findFirstSubarrayWithZeroSum(arr) {
  const prefixSumMap = new Map();
  prefixSumMap.set(0, -1);
  let prefixSum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    prefixSum += arr[i];
    
    if (prefixSumMap.has(prefixSum)) {
      const startIndex = prefixSumMap.get(prefixSum) + 1;
      return {
        start: startIndex,
        end: i,
        subarray: arr.slice(startIndex, i + 1)
      };
    }
    
    prefixSumMap.set(prefixSum, i);
  }
  
  return null;
}

// Check if subarray with zero sum exists (optimized)
function hasZeroSumSubarray(arr) {
  const seen = new Set([0]); // Include 0 for empty subarray
  let sum = 0;
  
  for (const num of arr) {
    sum += num;
    if (seen.has(sum)) {
      return true;
    }
    seen.add(sum);
  }
  
  return false;
}

// Count number of subarrays with zero sum
function countSubarraysWithZeroSum(arr) {
  const prefixSumCount = new Map();
  prefixSumCount.set(0, 1); // Empty subarray
  let prefixSum = 0;
  let count = 0;
  
  for (const num of arr) {
    prefixSum += num;
    count += prefixSumCount.get(prefixSum) || 0;
    prefixSumCount.set(prefixSum, (prefixSumCount.get(prefixSum) || 0) + 1);
  }
  
  return count;
}

// Test cases
const arr1 = [4, 2, -3, 1, 6];
const arr2 = [4, 2, 0, 1, 6];
const arr3 = [-3, 2, 3, 1, 6];

console.log(hasSubarrayWithZeroSum(arr1)); // true (2, -3, 1)
console.log(hasSubarrayWithZeroSum(arr2)); // true (0)
console.log(hasSubarrayWithZeroSum(arr3)); // false

console.log(findFirstSubarrayWithZeroSum(arr1)); // { start: 1, end: 3, subarray: [2, -3, 1] }
console.log(countSubarraysWithZeroSum(arr1)); // 1`}
        explanation="Use prefix sum technique. If same prefix sum appears twice, subarray between them has zero sum. Time: O(n), Space: O(n)."
      />

      <ProblemBlock
        title="7. Subarray with Given Sum"
        difficulty="Medium"
        description="Find a subarray with sum equal to a given target value."
        solution={`// Subarray with Given Sum

function findSubarrayWithSum(arr, target) {
  const prefixSumMap = new Map();
  prefixSumMap.set(0, -1); // Empty subarray has sum 0
  let prefixSum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    prefixSum += arr[i];
    
    // Check if (prefixSum - target) exists
    if (prefixSumMap.has(prefixSum - target)) {
      const startIndex = prefixSumMap.get(prefixSum - target) + 1;
      return {
        start: startIndex,
        end: i,
        subarray: arr.slice(startIndex, i + 1),
        sum: target
      };
    }
    
    prefixSumMap.set(prefixSum, i);
  }
  
  return null;
}

// Find all subarrays with given sum
function findAllSubarraysWithSum(arr, target) {
  const prefixSumMap = new Map();
  prefixSumMap.set(0, [-1]); // Empty subarray
  const result = [];
  let prefixSum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    prefixSum += arr[i];
    
    // Check if (prefixSum - target) exists
    if (prefixSumMap.has(prefixSum - target)) {
      const startIndices = prefixSumMap.get(prefixSum - target);
      for (const startIndex of startIndices) {
        result.push({
          start: startIndex + 1,
          end: i,
          subarray: arr.slice(startIndex + 1, i + 1),
          sum: target
        });
      }
    }
    
    // Add current prefix sum
    if (!prefixSumMap.has(prefixSum)) {
      prefixSumMap.set(prefixSum, []);
    }
    prefixSumMap.get(prefixSum).push(i);
  }
  
  return result;
}

// Check if subarray with given sum exists
function hasSubarrayWithSum(arr, target) {
  const seen = new Set([0]);
  let sum = 0;
  
  for (const num of arr) {
    sum += num;
    if (seen.has(sum - target)) {
      return true;
    }
    seen.add(sum);
  }
  
  return false;
}

// Count subarrays with given sum
function countSubarraysWithSum(arr, target) {
  const prefixSumCount = new Map();
  prefixSumCount.set(0, 1);
  let prefixSum = 0;
  let count = 0;
  
  for (const num of arr) {
    prefixSum += num;
    count += prefixSumCount.get(prefixSum - target) || 0;
    prefixSumCount.set(prefixSum, (prefixSumCount.get(prefixSum) || 0) + 1);
  }
  
  return count;
}

// Find subarray with sum closest to target
function findSubarrayClosestToSum(arr, target) {
  const prefixSumMap = new Map();
  prefixSumMap.set(0, -1);
  let prefixSum = 0;
  let closestSubarray = null;
  let minDiff = Infinity;
  
  for (let i = 0; i < arr.length; i++) {
    prefixSum += arr[i];
    
    // Check all previous prefix sums
    for (const [prevSum, prevIndex] of prefixSumMap) {
      const currentSum = prefixSum - prevSum;
      const diff = Math.abs(currentSum - target);
      
      if (diff < minDiff) {
        minDiff = diff;
        closestSubarray = {
          start: prevIndex + 1,
          end: i,
          subarray: arr.slice(prevIndex + 1, i + 1),
          sum: currentSum,
          diff: diff
        };
      }
    }
    
    prefixSumMap.set(prefixSum, i);
  }
  
  return closestSubarray;
}

// Two-pointer approach for positive numbers
function findSubarrayWithSumTwoPointers(arr, target) {
  let left = 0;
  let currentSum = 0;
  
  for (let right = 0; right < arr.length; right++) {
    currentSum += arr[right];
    
    while (currentSum > target && left <= right) {
      currentSum -= arr[left];
      left++;
    }
    
    if (currentSum === target) {
      return {
        start: left,
        end: right,
        subarray: arr.slice(left, right + 1),
        sum: target
      };
    }
  }
  
  return null;
}

// Test cases
const arr = [1, 4, 20, 3, 10, 5];
const target = 33;

console.log(findSubarrayWithSum(arr, target)); // { start: 2, end: 4, subarray: [20, 3, 10], sum: 33 }
console.log(findAllSubarraysWithSum(arr, target)); // [{ start: 2, end: 4, subarray: [20, 3, 10], sum: 33 }]
console.log(hasSubarrayWithSum(arr, target)); // true
console.log(countSubarraysWithSum(arr, target)); // 1
console.log(findSubarrayClosestToSum(arr, 35)); // { start: 2, end: 4, subarray: [20, 3, 10], sum: 33, diff: 2 }
console.log(findSubarrayWithSumTwoPointers(arr, target)); // { start: 2, end: 4, subarray: [20, 3, 10], sum: 33 }`}
        explanation="Use prefix sum technique. For each prefix sum, check if (prefixSum - target) exists. If yes, subarray between those indices has sum = target. Time: O(n), Space: O(n)."
      />

      <ProblemBlock
        title="8. Longest Subarray with Given Sum"
        difficulty="Medium"
        description="Find the longest subarray with sum equal to a given target value."
        solution={`// Longest Subarray with Given Sum

function findLongestSubarrayWithSum(arr, target) {
  const prefixSumMap = new Map();
  prefixSumMap.set(0, -1); // Empty subarray
  let prefixSum = 0;
  let maxLength = 0;
  let longestSubarray = null;
  
  for (let i = 0; i < arr.length; i++) {
    prefixSum += arr[i];
    
    // Check if (prefixSum - target) exists
    if (prefixSumMap.has(prefixSum - target)) {
      const startIndex = prefixSumMap.get(prefixSum - target);
      const currentLength = i - startIndex;
      
      if (currentLength > maxLength) {
        maxLength = currentLength;
        longestSubarray = {
          start: startIndex + 1,
          end: i,
          subarray: arr.slice(startIndex + 1, i + 1),
          length: currentLength,
          sum: target
        };
      }
    }
    
    // Only store first occurrence of each prefix sum for longest subarray
    if (!prefixSumMap.has(prefixSum)) {
      prefixSumMap.set(prefixSum, i);
    }
  }
  
  return longestSubarray;
}

// Find length of longest subarray with given sum
function longestSubarrayLengthWithSum(arr, target) {
  const prefixSumMap = new Map();
  prefixSumMap.set(0, -1);
  let prefixSum = 0;
  let maxLength = 0;
  
  for (let i = 0; i < arr.length; i++) {
    prefixSum += arr[i];
    
    if (prefixSumMap.has(prefixSum - target)) {
      const startIndex = prefixSumMap.get(prefixSum - target);
      maxLength = Math.max(maxLength, i - startIndex);
    }
    
    if (!prefixSumMap.has(prefixSum)) {
      prefixSumMap.set(prefixSum, i);
    }
  }
  
  return maxLength;
}

// Find longest subarray with sum equal to 0
function findLongestSubarrayWithZeroSum(arr) {
  return findLongestSubarrayWithSum(arr, 0);
}

// Find longest subarray with sum at most target
function findLongestSubarrayWithSumAtMost(arr, target) {
  const prefixSum = [];
  prefixSum[0] = 0;
  
  for (let i = 0; i < arr.length; i++) {
    prefixSum[i + 1] = prefixSum[i] + arr[i];
  }
  
  let maxLength = 0;
  let longestSubarray = null;
  
  // Use two pointers to find longest subarray
  for (let i = 0; i < prefixSum.length; i++) {
    for (let j = i + 1; j < prefixSum.length; j++) {
      const sum = prefixSum[j] - prefixSum[i];
      
      if (sum <= target) {
        const currentLength = j - i;
        if (currentLength > maxLength) {
          maxLength = currentLength;
          longestSubarray = {
            start: i,
            end: j - 1,
            subarray: arr.slice(i, j),
            length: currentLength,
            sum: sum
          };
        }
      }
    }
  }
  
  return longestSubarray;
}

// Find longest subarray with even sum
function findLongestSubarrayWithEvenSum(arr) {
  const prefixSumMap = new Map();
  prefixSumMap.set(0, -1);
  let prefixSum = 0;
  let maxLength = 0;
  
  for (let i = 0; i < arr.length; i++) {
    prefixSum += arr[i];
    
    // For even sum, we need even prefix sum
    if (prefixSum % 2 === 0) {
      if (prefixSumMap.has(0)) {
        maxLength = Math.max(maxLength, i - prefixSumMap.get(0));
      }
    } else {
      if (prefixSumMap.has(1)) {
        maxLength = Math.max(maxLength, i - prefixSumMap.get(1));
      }
    }
    
    if (!prefixSumMap.has(prefixSum % 2)) {
      prefixSumMap.set(prefixSum % 2, i);
    }
  }
  
  return maxLength;
}

// Two-pointer approach for positive numbers
function longestSubarrayWithSumTwoPointers(arr, target) {
  let left = 0;
  let currentSum = 0;
  let maxLength = 0;
  let longestSubarray = null;
  
  for (let right = 0; right < arr.length; right++) {
    currentSum += arr[right];
    
    while (currentSum > target && left <= right) {
      currentSum -= arr[left];
      left++;
    }
    
    if (currentSum === target) {
      const currentLength = right - left + 1;
      if (currentLength > maxLength) {
        maxLength = currentLength;
        longestSubarray = {
          start: left,
          end: right,
          subarray: arr.slice(left, right + 1),
          length: currentLength,
          sum: target
        };
      }
    }
  }
  
  return longestSubarray;
}

// Test cases
const arr = [5, 6, -5, 5, 3, 5, 3, -2, 0];
const target = 8;

console.log(findLongestSubarrayWithSum(arr, target)); 
// { start: 2, end: 5, subarray: [-5, 5, 3, 5], length: 4, sum: 8 }

console.log(longestSubarrayLengthWithSum(arr, target)); // 4
console.log(findLongestSubarrayWithZeroSum([1, 0, 3])); // { start: 1, end: 1, subarray: [0], length: 1, sum: 0 }
console.log(findLongestSubarrayWithEvenSum([1, 2, 3, 4, 5])); // 4`}
        explanation="Use prefix sum with Map storing first occurrence of each sum. For longest subarray, only store first occurrence. Time: O(n), Space: O(n)."
      />
    </div>
  );
}

// Advanced Hashing Section (Second Image Problems)
function AdvancedHashingSection() {
  return (
    <div className="space-y-8">
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Advanced Hashing Problems
        </h2>
        <p className="text-gray-300 mb-6">
          Complex hashing problems involving sliding windows, consecutive
          sequences, and frequency analysis.
        </p>
      </div>

      <ProblemBlock
        title="9. Longest Subarray with Equal Number of 0s and 1s"
        difficulty="Medium"
        description="Find the longest subarray that contains equal number of 0s and 1s."
        solution={`// Longest Subarray with Equal Number of 0s and 1s

function longestSubarrayWithEqual01(arr) {
  // Replace 0s with -1 to make sum = 0 for equal 0s and 1s
  const modifiedArr = arr.map(x => x === 0 ? -1 : 1);
  
  const prefixSumMap = new Map();
  prefixSumMap.set(0, -1); // Empty subarray
  let prefixSum = 0;
  let maxLength = 0;
  let longestSubarray = null;
  
  for (let i = 0; i < modifiedArr.length; i++) {
    prefixSum += modifiedArr[i];
    
    if (prefixSumMap.has(prefixSum)) {
      const startIndex = prefixSumMap.get(prefixSum);
      const currentLength = i - startIndex;
      
      if (currentLength > maxLength) {
        maxLength = currentLength;
        longestSubarray = {
          start: startIndex + 1,
          end: i,
          subarray: arr.slice(startIndex + 1, i + 1),
          length: currentLength
        };
      }
    } else {
      prefixSumMap.set(prefixSum, i);
    }
  }
  
  return longestSubarray;
}

// Count subarrays with equal 0s and 1s
function countSubarraysWithEqual01(arr) {
  const modifiedArr = arr.map(x => x === 0 ? -1 : 1);
  const prefixSumCount = new Map();
  prefixSumCount.set(0, 1);
  let prefixSum = 0;
  let count = 0;
  
  for (const num of modifiedArr) {
    prefixSum += num;
    count += prefixSumCount.get(prefixSum) || 0;
    prefixSumCount.set(prefixSum, (prefixSumCount.get(prefixSum) || 0) + 1);
  }
  
  return count;
}

// Find all subarrays with equal 0s and 1s
function findAllSubarraysWithEqual01(arr) {
  const modifiedArr = arr.map(x => x === 0 ? -1 : 1);
  const prefixSumMap = new Map();
  prefixSumMap.set(0, [-1]);
  const result = [];
  let prefixSum = 0;
  
  for (let i = 0; i < modifiedArr.length; i++) {
    prefixSum += modifiedArr[i];
    
    if (prefixSumMap.has(prefixSum)) {
      const startIndices = prefixSumMap.get(prefixSum);
      for (const startIndex of startIndices) {
        result.push({
          start: startIndex + 1,
          end: i,
          subarray: arr.slice(startIndex + 1, i + 1)
        });
      }
    }
    
    if (!prefixSumMap.has(prefixSum)) {
      prefixSumMap.set(prefixSum, []);
    }
    prefixSumMap.get(prefixSum).push(i);
  }
  
  return result;
}

// Find longest subarray with equal number of 0s, 1s, and 2s
function longestSubarrayWithEqual012(arr) {
  // Count differences between frequencies
  const prefixSumMap = new Map();
  prefixSumMap.set("0,0", -1);
  let count0 = 0, count1 = 0, count2 = 0;
  let maxLength = 0;
  let longestSubarray = null;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) count0++;
    else if (arr[i] === 1) count1++;
    else count2++;
    
    // Use differences to find equal counts
    const key = \`\${count1 - count0},\${count2 - count1}\`;
    
    if (prefixSumMap.has(key)) {
      const startIndex = prefixSumMap.get(key);
      const currentLength = i - startIndex;
      
      if (currentLength > maxLength) {
        maxLength = currentLength;
        longestSubarray = {
          start: startIndex + 1,
          end: i,
          subarray: arr.slice(startIndex + 1, i + 1),
          length: currentLength
        };
      }
    } else {
      prefixSumMap.set(key, i);
    }
  }
  
  return longestSubarray;
}

// Test cases
const arr1 = [0, 1, 0, 1, 0, 1, 1, 0];
const arr2 = [0, 1, 0, 1, 1, 1, 1, 0, 0];
const arr3 = [0, 1, 2, 0, 1, 2];

console.log(longestSubarrayWithEqual01(arr1)); 
// { start: 0, end: 7, subarray: [0, 1, 0, 1, 0, 1, 1, 0], length: 8 }

console.log(countSubarraysWithEqual01(arr1)); // 8
console.log(findAllSubarraysWithEqual01(arr1)); // Multiple subarrays
console.log(longestSubarrayWithEqual012(arr3)); // { start: 0, end: 5, subarray: [0, 1, 2, 0, 1, 2], length: 6 }`}
        explanation="Replace 0s with -1, then find longest subarray with sum 0. Equal 0s and 1s means sum = 0. Time: O(n), Space: O(n)."
      />

      <ProblemBlock
        title="10. Longest Common Span with Same Sum in Two Binary Arrays"
        difficulty="Medium"
        description="Find the longest common span with same sum in two binary arrays."
        solution={`// Longest Common Span with Same Sum in Two Binary Arrays

function longestCommonSpan(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    throw new Error("Arrays must have same length");
  }
  
  // Create difference array
  const diff = [];
  for (let i = 0; i < arr1.length; i++) {
    diff[i] = arr1[i] - arr2[i];
  }
  
  // Find longest subarray with sum 0
  const prefixSumMap = new Map();
  prefixSumMap.set(0, -1);
  let prefixSum = 0;
  let maxLength = 0;
  let longestSpan = null;
  
  for (let i = 0; i < diff.length; i++) {
    prefixSum += diff[i];
    
    if (prefixSumMap.has(prefixSum)) {
      const startIndex = prefixSumMap.get(prefixSum);
      const currentLength = i - startIndex;
      
      if (currentLength > maxLength) {
        maxLength = currentLength;
        longestSpan = {
          start: startIndex + 1,
          end: i,
          length: currentLength,
          arr1Subarray: arr1.slice(startIndex + 1, i + 1),
          arr2Subarray: arr2.slice(startIndex + 1, i + 1)
        };
      }
    } else {
      prefixSumMap.set(prefixSum, i);
    }
  }
  
  return longestSpan;
}

// Find all common spans with same sum
function findAllCommonSpans(arr1, arr2) {
  const diff = [];
  for (let i = 0; i < arr1.length; i++) {
    diff[i] = arr1[i] - arr2[i];
  }
  
  const prefixSumMap = new Map();
  prefixSumMap.set(0, [-1]);
  const result = [];
  let prefixSum = 0;
  
  for (let i = 0; i < diff.length; i++) {
    prefixSum += diff[i];
    
    if (prefixSumMap.has(prefixSum)) {
      const startIndices = prefixSumMap.get(prefixSum);
      for (const startIndex of startIndices) {
        result.push({
          start: startIndex + 1,
          end: i,
          length: i - startIndex,
          arr1Subarray: arr1.slice(startIndex + 1, i + 1),
          arr2Subarray: arr2.slice(startIndex + 1, i + 1)
        });
      }
    }
    
    if (!prefixSumMap.has(prefixSum)) {
      prefixSumMap.set(prefixSum, []);
    }
    prefixSumMap.get(prefixSum).push(i);
  }
  
  return result;
}

// Find longest common span with same sum (alternative approach)
function longestCommonSpanAlternative(arr1, arr2) {
  const n = arr1.length;
  let maxLength = 0;
  let longestSpan = null;
  
  // Check all possible spans
  for (let i = 0; i < n; i++) {
    let sum1 = 0, sum2 = 0;
    
    for (let j = i; j < n; j++) {
      sum1 += arr1[j];
      sum2 += arr2[j];
      
      if (sum1 === sum2 && (j - i + 1) > maxLength) {
        maxLength = j - i + 1;
        longestSpan = {
          start: i,
          end: j,
          length: maxLength,
          arr1Subarray: arr1.slice(i, j + 1),
          arr2Subarray: arr2.slice(i, j + 1)
        };
      }
    }
  }
  
  return longestSpan;
}

// Count common spans with same sum
function countCommonSpans(arr1, arr2) {
  const diff = [];
  for (let i = 0; i < arr1.length; i++) {
    diff[i] = arr1[i] - arr2[i];
  }
  
  const prefixSumCount = new Map();
  prefixSumCount.set(0, 1);
  let prefixSum = 0;
  let count = 0;
  
  for (const num of diff) {
    prefixSum += num;
    count += prefixSumCount.get(prefixSum) || 0;
    prefixSumCount.set(prefixSum, (prefixSumCount.get(prefixSum) || 0) + 1);
  }
  
  return count;
}

// Test cases
const arr1 = [0, 1, 0, 1, 1, 1, 1];
const arr2 = [1, 1, 1, 1, 1, 0, 1];

console.log(longestCommonSpan(arr1, arr2)); 
// { start: 1, end: 6, length: 6, arr1Subarray: [1, 0, 1, 1, 1, 1], arr2Subarray: [1, 1, 1, 1, 0, 1] }

console.log(countCommonSpans(arr1, arr2)); // 2
console.log(findAllCommonSpans(arr1, arr2)); // All spans with same sum`}
        explanation="Create difference array (arr1[i] - arr2[i]), then find longest subarray with sum 0. Time: O(n), Space: O(n)."
      />

      <ProblemBlock
        title="11. Longest Consecutive Subsequence"
        difficulty="Hard"
        description="Find the length of the longest consecutive subsequence in an unsorted array."
        solution={`// Longest Consecutive Subsequence

function longestConsecutiveSubsequence(arr) {
  if (arr.length === 0) return 0;
  
  const numSet = new Set(arr);
  let maxLength = 0;
  
  for (const num of numSet) {
    // Only start counting from the beginning of a sequence
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentLength = 1;
      
      // Count consecutive numbers
      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentLength++;
      }
      
      maxLength = Math.max(maxLength, currentLength);
    }
  }
  
  return maxLength;
}

// Find the actual longest consecutive subsequence
function findLongestConsecutiveSubsequence(arr) {
  if (arr.length === 0) return null;
  
  const numSet = new Set(arr);
  let maxLength = 0;
  let longestSequence = null;
  
  for (const num of numSet) {
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentLength = 1;
      const sequence = [num];
      
      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentLength++;
        sequence.push(currentNum);
      }
      
      if (currentLength > maxLength) {
        maxLength = currentLength;
        longestSequence = {
          sequence: sequence,
          length: currentLength,
          start: num,
          end: currentNum
        };
      }
    }
  }
  
  return longestSequence;
}

// Count all consecutive subsequences
function countConsecutiveSubsequences(arr) {
  const numSet = new Set(arr);
  let count = 0;
  
  for (const num of numSet) {
    if (!numSet.has(num - 1)) {
      count++;
    }
  }
  
  return count;
}

// Find all consecutive subsequences
function findAllConsecutiveSubsequences(arr) {
  const numSet = new Set(arr);
  const sequences = [];
  
  for (const num of numSet) {
    if (!numSet.has(num - 1)) {
      const sequence = [num];
      let currentNum = num;
      
      while (numSet.has(currentNum + 1)) {
        currentNum++;
        sequence.push(currentNum);
      }
      
      sequences.push({
        sequence: sequence,
        length: sequence.length,
        start: num,
        end: currentNum
      });
    }
  }
  
  return sequences.sort((a, b) => b.length - a.length);
}

// Longest consecutive subsequence with sorting (alternative)
function longestConsecutiveWithSorting(arr) {
  if (arr.length === 0) return 0;
  
  const sorted = [...new Set(arr)].sort((a, b) => a - b);
  let maxLength = 1;
  let currentLength = 1;
  
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] === sorted[i - 1] + 1) {
      currentLength++;
      maxLength = Math.max(maxLength, currentLength);
    } else {
      currentLength = 1;
    }
  }
  
  return maxLength;
}

// Longest consecutive subsequence with detailed steps
function longestConsecutiveWithSteps(arr) {
  console.log("Finding longest consecutive subsequence:");
  console.log("Input array:", arr);
  
  const numSet = new Set(arr);
  console.log("Unique elements:", Array.from(numSet));
  
  let maxLength = 0;
  let bestSequence = null;
  
  for (const num of numSet) {
    if (!numSet.has(num - 1)) {
      console.log(\`\\nStarting sequence from \${num}\`);
      let currentNum = num;
      let currentLength = 1;
      const sequence = [num];
      
      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentLength++;
        sequence.push(currentNum);
        console.log(\`  Added \${currentNum}, length now \${currentLength}\`);
      }
      
      console.log(\`Sequence: [\${sequence.join(', ')}], length: \${currentLength}\`);
      
      if (currentLength > maxLength) {
        maxLength = currentLength;
        bestSequence = sequence;
        console.log(\`  New longest sequence found!\`);
      }
    }
  }
  
  console.log(\`\\nResult: \${maxLength}\`);
  return { length: maxLength, sequence: bestSequence };
}

// Test cases
const arr1 = [100, 4, 200, 1, 3, 2];
const arr2 = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];

console.log(longestConsecutiveSubsequence(arr1)); // 4 (1, 2, 3, 4)
console.log(longestConsecutiveSubsequence(arr2)); // 9 (0, 1, 2, 3, 4, 5, 6, 7, 8)

console.log(findLongestConsecutiveSubsequence(arr1)); 
// { sequence: [1, 2, 3, 4], length: 4, start: 1, end: 4 }

console.log(countConsecutiveSubsequences(arr1)); // 3
console.log(findAllConsecutiveSubsequences(arr1)); // All sequences sorted by length
console.log(longestConsecutiveWithSorting(arr1)); // 4

longestConsecutiveWithSteps(arr1);`}
        explanation="Use Set to store all numbers. For each number, if (num-1) doesn't exist, it's start of sequence. Count consecutive numbers. Time: O(n), Space: O(n)."
      />

      <ProblemBlock
        title="12. Count Distinct Elements In Every Window"
        difficulty="Medium"
        description="Count distinct elements in every window of size k in an array."
        solution={`// Count Distinct Elements In Every Window

function countDistinctInEveryWindow(arr, k) {
  const n = arr.length;
  const result = [];
  
  for (let i = 0; i <= n - k; i++) {
    const window = arr.slice(i, i + k);
    const distinctCount = new Set(window).size;
    result.push(distinctCount);
  }
  
  return result;
}

// Optimized solution using sliding window
function countDistinctInEveryWindowOptimized(arr, k) {
  const n = arr.length;
  const result = [];
  const windowMap = new Map();
  
  // Initialize first window
  for (let i = 0; i < k; i++) {
    windowMap.set(arr[i], (windowMap.get(arr[i]) || 0) + 1);
  }
  result.push(windowMap.size);
  
  // Slide the window
  for (let i = k; i < n; i++) {
    // Remove element going out of window
    const outgoingElement = arr[i - k];
    windowMap.set(outgoingElement, windowMap.get(outgoingElement) - 1);
    
    if (windowMap.get(outgoingElement) === 0) {
      windowMap.delete(outgoingElement);
    }
    
    // Add new element to window
    const incomingElement = arr[i];
    windowMap.set(incomingElement, (windowMap.get(incomingElement) || 0) + 1);
    
    result.push(windowMap.size);
  }
  
  return result;
}

// Count distinct with detailed steps
function countDistinctInEveryWindowWithSteps(arr, k) {
  console.log(\`Counting distinct elements in windows of size \${k}:\`);
  console.log("Array:", arr);
  
  const n = arr.length;
  const result = [];
  const windowMap = new Map();
  
  // First window
  console.log(\`\\nWindow 1: [\${arr.slice(0, k).join(', ')}]\`);
  for (let i = 0; i < k; i++) {
    windowMap.set(arr[i], (windowMap.get(arr[i]) || 0) + 1);
  }
  result.push(windowMap.size);
  console.log(\`Distinct count: \${windowMap.size}\`);
  
  // Slide window
  for (let i = k; i < n; i++) {
    const windowStart = i - k + 1;
    const window = arr.slice(windowStart, i + 1);
    console.log(\`\\nWindow \${windowStart + 1}: [\${window.join(', ')}]\`);
    
    // Remove outgoing element
    const outgoingElement = arr[i - k];
    console.log(\`Removing: \${outgoingElement}\`);
    windowMap.set(outgoingElement, windowMap.get(outgoingElement) - 1);
    
    if (windowMap.get(outgoingElement) === 0) {
      windowMap.delete(outgoingElement);
      console.log(\`Element \${outgoingElement} completely removed\`);
    }
    
    // Add incoming element
    const incomingElement = arr[i];
    console.log(\`Adding: \${incomingElement}\`);
    windowMap.set(incomingElement, (windowMap.get(incomingElement) || 0) + 1);
    
    result.push(windowMap.size);
    console.log(\`Distinct count: \${windowMap.size}\`);
  }
  
  console.log(\`\\nResult: [\${result.join(', ')}]\`);
  return result;
}

// Find maximum distinct elements in any window
function maxDistinctInAnyWindow(arr, k) {
  const distinctCounts = countDistinctInEveryWindowOptimized(arr, k);
  return Math.max(...distinctCounts);
}

// Find window with maximum distinct elements
function findWindowWithMaxDistinct(arr, k) {
  const n = arr.length;
  let maxDistinct = 0;
  let bestWindow = null;
  const windowMap = new Map();
  
  // First window
  for (let i = 0; i < k; i++) {
    windowMap.set(arr[i], (windowMap.get(arr[i]) || 0) + 1);
  }
  maxDistinct = windowMap.size;
  bestWindow = { start: 0, end: k - 1, distinct: maxDistinct };
  
  // Slide window
  for (let i = k; i < n; i++) {
    // Remove outgoing element
    const outgoingElement = arr[i - k];
    windowMap.set(outgoingElement, windowMap.get(outgoingElement) - 1);
    
    if (windowMap.get(outgoingElement) === 0) {
      windowMap.delete(outgoingElement);
    }
    
    // Add incoming element
    const incomingElement = arr[i];
    windowMap.set(incomingElement, (windowMap.get(incomingElement) || 0) + 1);
    
    if (windowMap.size > maxDistinct) {
      maxDistinct = windowMap.size;
      bestWindow = { start: i - k + 1, end: i, distinct: maxDistinct };
    }
  }
  
  return bestWindow;
}

// Count distinct elements in overlapping windows
function countDistinctInOverlappingWindows(arr, k, overlap) {
  const result = [];
  const n = arr.length;
  
  for (let i = 0; i <= n - k; i += overlap) {
    const window = arr.slice(i, i + k);
    const distinctCount = new Set(window).size;
    result.push({
      start: i,
      end: i + k - 1,
      window: window,
      distinct: distinctCount
    });
  }
  
  return result;
}

// Test cases
const arr = [1, 2, 1, 3, 4, 2, 3];
const k = 4;

console.log(countDistinctInEveryWindow(arr, k)); // [3, 4, 4, 3]
console.log(countDistinctInEveryWindowOptimized(arr, k)); // [3, 4, 4, 3]
console.log(maxDistinctInAnyWindow(arr, k)); // 4
console.log(findWindowWithMaxDistinct(arr, k)); // { start: 1, end: 4, distinct: 4 }
console.log(countDistinctInOverlappingWindows(arr, k, 2)); // Overlapping windows

countDistinctInEveryWindowWithSteps(arr, k);`}
        explanation="Use sliding window technique with Map to track element frequencies. Remove outgoing element, add incoming element, track distinct count. Time: O(n), Space: O(k)."
      />

      <ProblemBlock
        title="13. More than n/k Occurrences"
        difficulty="Medium"
        description="Find all elements that appear more than n/k times in an array."
        solution={`// More than n/k Occurrences

function findElementsMoreThanNByK(arr, k) {
  const n = arr.length;
  const threshold = Math.floor(n / k);
  const frequencyMap = new Map();
  
  // Count frequencies
  for (const element of arr) {
    frequencyMap.set(element, (frequencyMap.get(element) || 0) + 1);
  }
  
  // Find elements with frequency > threshold
  const result = [];
  for (const [element, count] of frequencyMap) {
    if (count > threshold) {
      result.push({ element, count });
    }
  }
  
  return result;
}

// Boyer-Moore Majority Vote Algorithm (for k=2)
function findMajorityElement(arr) {
  let candidate = null;
  let count = 0;
  
  // Find candidate
  for (const num of arr) {
    if (count === 0) {
      candidate = num;
      count = 1;
    } else if (candidate === num) {
      count++;
    } else {
      count--;
    }
  }
  
  // Verify candidate
  count = 0;
  for (const num of arr) {
    if (num === candidate) {
      count++;
    }
  }
  
  return count > Math.floor(arr.length / 2) ? candidate : null;
}

// Generalized Boyer-Moore for k > 2
function findElementsMoreThanNByKOptimized(arr, k) {
  const n = arr.length;
  const threshold = Math.floor(n / k);
  const candidates = new Map();
  
  // First pass: find candidates
  for (const num of arr) {
    if (candidates.has(num)) {
      candidates.set(num, candidates.get(num) + 1);
    } else if (candidates.size < k - 1) {
      candidates.set(num, 1);
    } else {
      // Decrease count for all candidates
      for (const [key, value] of candidates) {
        candidates.set(key, value - 1);
        if (candidates.get(key) === 0) {
          candidates.delete(key);
        }
      }
    }
  }
  
  // Second pass: verify candidates
  const result = [];
  for (const [candidate, _] of candidates) {
    let count = 0;
    for (const num of arr) {
      if (num === candidate) {
        count++;
      }
    }
    
    if (count > threshold) {
      result.push({ element: candidate, count });
    }
  }
  
  return result;
}

// Find all elements with frequency >= n/k
function findElementsAtLeastNByK(arr, k) {
  const n = arr.length;
  const threshold = Math.floor(n / k);
  const frequencyMap = new Map();
  
  for (const element of arr) {
    frequencyMap.set(element, (frequencyMap.get(element) || 0) + 1);
  }
  
  const result = [];
  for (const [element, count] of frequencyMap) {
    if (count >= threshold) {
      result.push({ element, count });
    }
  }
  
  return result.sort((a, b) => b.count - a.count);
}

// Find elements with exactly n/k occurrences
function findElementsExactlyNByK(arr, k) {
  const n = arr.length;
  const target = Math.floor(n / k);
  const frequencyMap = new Map();
  
  for (const element of arr) {
    frequencyMap.set(element, (frequencyMap.get(element) || 0) + 1);
  }
  
  const result = [];
  for (const [element, count] of frequencyMap) {
    if (count === target) {
      result.push({ element, count });
    }
  }
  
  return result;
}

// Find top k most frequent elements
function findTopKFrequent(arr, k) {
  const frequencyMap = new Map();
  
  for (const element of arr) {
    frequencyMap.set(element, (frequencyMap.get(element) || 0) + 1);
  }
  
  // Sort by frequency
  const sorted = Array.from(frequencyMap.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, k);
  
  return sorted.map(([element, count]) => ({ element, count }));
}

// Test cases
const arr1 = [3, 1, 2, 2, 1, 2, 3, 3];
const arr2 = [1, 1, 2, 3, 5, 5, 5, 5, 5, 5, 6];
const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(findElementsMoreThanNByK(arr1, 4)); // [{ element: 2, count: 3 }, { element: 3, count: 3 }]
console.log(findMajorityElement(arr2)); // 5
console.log(findElementsMoreThanNByKOptimized(arr1, 4)); // [{ element: 2, count: 3 }, { element: 3, count: 3 }]
console.log(findElementsAtLeastNByK(arr1, 4)); // Elements with frequency >= 2
console.log(findTopKFrequent(arr1, 2)); // Top 2 most frequent elements`}
        explanation="Use Boyer-Moore majority vote algorithm for k=2, or generalized version for k>2. First pass finds candidates, second pass verifies. Time: O(nk), Space: O(k)."
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
