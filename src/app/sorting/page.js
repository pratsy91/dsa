"use client";
import Link from "next/link";
import { useState } from "react";

export default function Sorting() {
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
          <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
            Sorting Algorithms Mastery
          </h1>
          <p className="text-gray-400 mt-2">
            Bubble, Selection, Insertion, Merge, Quick, Heap & Special Sorts
          </p>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-gray-800/50 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-2 overflow-x-auto">
            {[
              { id: "fundamentals", label: "📚 Fundamentals" },
              { id: "basic-sorts", label: "🔢 Basic Sorting" },
              { id: "merge-sort", label: "🔀 Merge Sort" },
              { id: "quick-sort", label: "⚡ QuickSort" },
              { id: "advanced-sorts", label: "🎯 Advanced Sorting" },
              { id: "special-sorts", label: "🌟 Special Sorts" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 font-semibold whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? "text-emerald-400 border-b-2 border-emerald-400"
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
        {activeTab === "basic-sorts" && <BasicSortingSection />}
        {activeTab === "merge-sort" && <MergeSortSection />}
        {activeTab === "quick-sort" && <QuickSortSection />}
        {activeTab === "advanced-sorts" && <AdvancedSortingSection />}
        {activeTab === "special-sorts" && <SpecialSortingSection />}
      </main>
    </div>
  );
}

// Fundamentals Section
function FundamentalsSection() {
  return (
    <div className="space-y-8">
      {/* What are Sorting Algorithms */}
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          What are Sorting Algorithms?
        </h2>
        <p className="text-gray-300 text-lg mb-6">
          Sorting algorithms are methods to arrange elements of a list in a
          particular order (ascending or descending). They are fundamental to
          computer science and essential for efficient data processing.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-emerald-200 mb-3">
              Key Characteristics:
            </h3>
            <ul className="space-y-2 text-emerald-100">
              <li>
                • <strong>Comparison-based:</strong> Compare elements to
                determine order
              </li>
              <li>
                • <strong>Stable vs Unstable:</strong> Preserve relative order
                of equal elements
              </li>
              <li>
                • <strong>In-place vs Out-of-place:</strong> Memory usage
                requirements
              </li>
              <li>
                • <strong>Adaptive:</strong> Performance depends on input data
              </li>
            </ul>
          </div>

          <div className="bg-teal-900/20 border border-teal-500/30 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-teal-200 mb-3">
              Common Applications:
            </h3>
            <ul className="space-y-2 text-teal-100">
              <li>
                • <strong>Database Systems:</strong> Indexing and query
                optimization
              </li>
              <li>
                • <strong>Operating Systems:</strong> Process scheduling and
                memory management
              </li>
              <li>
                • <strong>Search Engines:</strong> Ranking and relevance
                algorithms
              </li>
              <li>
                • <strong>Graphics:</strong> Z-buffer algorithms and rendering
              </li>
            </ul>
          </div>
        </div>

        <TheoryBlock title="Sorting Algorithm Comparison">
          <CodeBlock
            code={`// Time & Space Complexity Comparison

// Basic Sorting Algorithms:
// Bubble Sort:    O(n²) time, O(1) space, Stable, Not adaptive
// Selection Sort: O(n²) time, O(1) space, Not stable, Not adaptive  
// Insertion Sort: O(n²) time, O(1) space, Stable, Adaptive

// Efficient Sorting Algorithms:
// Merge Sort:     O(n log n) time, O(n) space, Stable, Not adaptive
// QuickSort:      O(n log n) time, O(log n) space, Not stable, Adaptive
// Heap Sort:      O(n log n) time, O(1) space, Not stable, Not adaptive

// Special Purpose Algorithms:
// Counting Sort:  O(n+k) time, O(k) space, Stable, Not comparison-based
// Radix Sort:     O(d(n+k)) time, O(n+k) space, Stable, Not comparison-based
// Bucket Sort:    O(n+k) time, O(n) space, Stable, Distribution-based

// When to use which:
// - Small arrays (< 50): Insertion Sort
// - General purpose: QuickSort or Merge Sort
// - Stable sorting needed: Merge Sort
// - Memory constrained: Heap Sort
// - Integer data with small range: Counting/Radix Sort`}
          />
        </TheoryBlock>
      </div>

      {/* Sorting Algorithm Categories */}
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Sorting Algorithm Categories
        </h2>
        <p className="text-gray-300 mb-6">
          Sorting algorithms can be categorized based on their approach,
          complexity, and characteristics.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-3">
              🔢 Basic Sorts
            </h3>
            <p className="text-gray-300 text-sm mb-3">
              Simple algorithms with O(n²) complexity.
            </p>
            <ul className="text-gray-400 text-xs space-y-1">
              <li>• Bubble Sort</li>
              <li>• Selection Sort</li>
              <li>• Insertion Sort</li>
            </ul>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-3">
              ⚡ Efficient Sorts
            </h3>
            <p className="text-gray-300 text-sm mb-3">
              Advanced algorithms with O(n log n) complexity.
            </p>
            <ul className="text-gray-400 text-xs space-y-1">
              <li>• Merge Sort</li>
              <li>• QuickSort</li>
              <li>• Heap Sort</li>
            </ul>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-3">
              🌟 Special Sorts
            </h3>
            <p className="text-gray-300 text-sm mb-3">
              Non-comparison based algorithms.
            </p>
            <ul className="text-gray-400 text-xs space-y-1">
              <li>• Counting Sort</li>
              <li>• Radix Sort</li>
              <li>• Bucket Sort</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// Basic Sorting Section (from first image)
function BasicSortingSection() {
  return (
    <div className="space-y-8">
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Basic Sorting Algorithms
        </h2>
        <p className="text-gray-300 mb-6">
          These fundamental sorting algorithms help build understanding of
          sorting concepts, though they have O(n²) time complexity.
        </p>
      </div>

      <ProblemBlock
        title="1. Bubble Sort"
        difficulty="Easy"
        description="Sort an array by repeatedly swapping adjacent elements if they are in wrong order."
        solution={`function bubbleSort(arr) {
  const n = arr.length;
  
  // Outer loop for passes
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    
    // Inner loop for comparisons
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    
    // If no swapping occurred, array is sorted
    if (!swapped) break;
  }
  
  return arr;
}

// Optimized version with early termination
function bubbleSortOptimized(arr) {
  const n = arr.length;
  let swapped = true;
  
  while (swapped) {
    swapped = false;
    
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  }
  
  return arr;
}

// Recursive version
function bubbleSortRecursive(arr, n = arr.length) {
  if (n <= 1) return arr;
  
  // One pass of bubble sort
  for (let i = 0; i < n - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
  }
  
  // Recursively sort remaining elements
  return bubbleSortRecursive(arr, n - 1);
}

// Test cases
console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90])); // [11, 12, 22, 25, 34, 64, 90]
console.log(bubbleSort([5, 2, 8, 1, 9]));              // [1, 2, 5, 8, 9]`}
        explanation="Bubble Sort works by repeatedly stepping through the list, comparing adjacent elements and swapping them if they are in wrong order. Time: O(n²), Space: O(1), Stable: Yes."
      />

      <ProblemBlock
        title="2. Selection Sort"
        difficulty="Easy"
        description="Sort an array by repeatedly finding the minimum element and placing it at the beginning."
        solution={`function selectionSort(arr) {
  const n = arr.length;
  
  // Move boundary of unsorted subarray
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    
    // Find minimum element in unsorted array
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    
    // Swap the minimum element with first element
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  
  return arr;
}

// Selection sort with separate min/max selection
function selectionSortMinMax(arr) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left < right) {
    let minIndex = left;
    let maxIndex = right;
    
    // Find minimum and maximum in current range
    for (let i = left; i <= right; i++) {
      if (arr[i] < arr[minIndex]) minIndex = i;
      if (arr[i] > arr[maxIndex]) maxIndex = i;
    }
    
    // Place minimum at left and maximum at right
    [arr[left], arr[minIndex]] = [arr[minIndex], arr[left]];
    
    // If max was at left, it's now at minIndex
    if (maxIndex === left) maxIndex = minIndex;
    [arr[right], arr[maxIndex]] = [arr[maxIndex], arr[right]];
    
    left++;
    right--;
  }
  
  return arr;
}

// Test cases
console.log(selectionSort([64, 25, 12, 22, 11])); // [11, 12, 22, 25, 64]
console.log(selectionSort([5, 2, 8, 1, 9]));      // [1, 2, 5, 8, 9]`}
        explanation="Selection Sort divides the array into sorted and unsorted parts, repeatedly selecting the minimum element from unsorted part. Time: O(n²), Space: O(1), Stable: No."
      />

      <ProblemBlock
        title="3. Insertion Sort"
        difficulty="Easy"
        description="Sort an array by building a sorted portion one element at a time."
        solution={`function insertionSort(arr) {
  const n = arr.length;
  
  // Start from second element (index 1)
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;
    
    // Move elements greater than key one position ahead
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    
    // Insert key at correct position
    arr[j + 1] = key;
  }
  
  return arr;
}

// Binary insertion sort (optimized)
function binaryInsertionSort(arr) {
  const n = arr.length;
  
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let left = 0;
    let right = i - 1;
    
    // Find position to insert using binary search
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] < key) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    
    // Shift elements and insert
    for (let j = i; j > left; j--) {
      arr[j] = arr[j - 1];
    }
    arr[left] = key;
  }
  
  return arr;
}

// Recursive insertion sort
function insertionSortRecursive(arr, n = arr.length) {
  if (n <= 1) return arr;
  
  // Sort first n-1 elements
  insertionSortRecursive(arr, n - 1);
  
  // Insert last element at correct position
  let key = arr[n - 1];
  let j = n - 2;
  
  while (j >= 0 && arr[j] > key) {
    arr[j + 1] = arr[j];
    j--;
  }
  
  arr[j + 1] = key;
  return arr;
}

// Test cases
console.log(insertionSort([12, 11, 13, 5, 6])); // [5, 6, 11, 12, 13]
console.log(insertionSort([64, 34, 25, 12, 22, 11, 90])); // [11, 12, 22, 25, 34, 64, 90]`}
        explanation="Insertion Sort builds the sorted array one element at a time, placing each new element in its correct position. Time: O(n²), Space: O(1), Stable: Yes, Adaptive: Yes."
      />

      <ProblemBlock
        title="4. Merge Sort Introduction"
        difficulty="Medium"
        description="Understand the divide and conquer approach used in Merge Sort."
        solution={`// Merge Sort follows Divide and Conquer paradigm:
// 1. Divide: Break the array into two halves
// 2. Conquer: Recursively sort both halves
// 3. Combine: Merge the sorted halves

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr; // Base case: single element is already sorted
  }
  
  // Divide: Split array into two halves
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  
  // Conquer: Recursively sort both halves
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);
  
  // Combine: Merge sorted halves
  return merge(sortedLeft, sortedRight);
}

// In-place merge sort (more space efficient)
function mergeSortInPlace(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const mid = Math.floor((left + right) / 2);
    
    // Recursively sort both halves
    mergeSortInPlace(arr, left, mid);
    mergeSortInPlace(arr, mid + 1, right);
    
    // Merge the sorted halves
    mergeInPlace(arr, left, mid, right);
  }
  
  return arr;
}

// Key characteristics of Merge Sort:
// - Time Complexity: O(n log n) in all cases
// - Space Complexity: O(n) for auxiliary array
// - Stable: Yes (preserves relative order)
// - Adaptive: No (performance doesn't depend on input)
// - Comparison-based: Yes

// Test cases
console.log(mergeSort([38, 27, 43, 3, 9, 82, 10])); // [3, 9, 10, 27, 38, 43, 82]
console.log(mergeSort([5, 2, 8, 1, 9]));            // [1, 2, 5, 8, 9]`}
        explanation="Merge Sort uses divide and conquer: recursively divide array into halves, sort each half, then merge them back. Time: O(n log n), Space: O(n), Stable: Yes."
      />

      <ProblemBlock
        title="5. Merge Two Sorted Arrays"
        difficulty="Easy"
        description="Merge two sorted arrays into a single sorted array efficiently."
        solution={`function mergeTwoSortedArrays(arr1, arr2) {
  const merged = [];
  let i = 0, j = 0;
  
  // Compare elements from both arrays
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      merged.push(arr1[i++]);
    } else {
      merged.push(arr2[j++]);
    }
  }
  
  // Add remaining elements from arr1
  while (i < arr1.length) {
    merged.push(arr1[i++]);
  }
  
  // Add remaining elements from arr2
  while (j < arr2.length) {
    merged.push(arr2[j++]);
  }
  
  return merged;
}

// Merge function used in Merge Sort
function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  
  // Compare and merge elements
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] <= right[rightIndex]) {
      result.push(left[leftIndex++]);
    } else {
      result.push(right[rightIndex++]);
    }
  }
  
  // Add remaining elements
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// In-place merge (more space efficient)
function mergeInPlace(arr, left, mid, right) {
  const leftArr = arr.slice(left, mid + 1);
  const rightArr = arr.slice(mid + 1, right + 1);
  
  let i = 0, j = 0, k = left;
  
  // Merge elements back into original array
  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] <= rightArr[j]) {
      arr[k++] = leftArr[i++];
    } else {
      arr[k++] = rightArr[j++];
    }
  }
  
  // Copy remaining elements
  while (i < leftArr.length) arr[k++] = leftArr[i++];
  while (j < rightArr.length) arr[k++] = rightArr[j++];
}

// Test cases
console.log(mergeTwoSortedArrays([1, 3, 5, 7], [2, 4, 6, 8])); // [1, 2, 3, 4, 5, 6, 7, 8]
console.log(mergeTwoSortedArrays([1, 2, 3], [4, 5, 6]));       // [1, 2, 3, 4, 5, 6]`}
        explanation="Two-pointer technique: compare elements from both arrays and add smaller one to result. Time: O(m+n), Space: O(m+n), where m and n are array lengths."
      />

      <ProblemBlock
        title="6. Merge Function of Merge Sort"
        difficulty="Medium"
        description="Implement the core merge function that combines two sorted subarrays."
        solution={`function mergeFunction(arr, left, mid, right) {
  // Create temporary arrays for left and right subarrays
  const leftSize = mid - left + 1;
  const rightSize = right - mid;
  
  const leftArr = new Array(leftSize);
  const rightArr = new Array(rightSize);
  
  // Copy data to temporary arrays
  for (let i = 0; i < leftSize; i++) {
    leftArr[i] = arr[left + i];
  }
  for (let j = 0; j < rightSize; j++) {
    rightArr[j] = arr[mid + 1 + j];
  }
  
  // Merge the temporary arrays back into arr[left..right]
  let i = 0, j = 0, k = left;
  
  while (i < leftSize && j < rightSize) {
    if (leftArr[i] <= rightArr[j]) {
      arr[k] = leftArr[i];
      i++;
    } else {
      arr[k] = rightArr[j];
      j++;
    }
    k++;
  }
  
  // Copy remaining elements of leftArr[]
  while (i < leftSize) {
    arr[k] = leftArr[i];
    i++;
    k++;
  }
  
  // Copy remaining elements of rightArr[]
  while (j < rightSize) {
    arr[k] = rightArr[j];
    j++;
    k++;
  }
}

// Alternative implementation using slice
function mergeFunctionSlice(arr, left, mid, right) {
  const leftArr = arr.slice(left, mid + 1);
  const rightArr = arr.slice(mid + 1, right + 1);
  
  let i = 0, j = 0, k = left;
  
  // Merge while both arrays have elements
  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] <= rightArr[j]) {
      arr[k++] = leftArr[i++];
    } else {
      arr[k++] = rightArr[j++];
    }
  }
  
  // Copy remaining elements
  while (i < leftArr.length) arr[k++] = leftArr[i++];
  while (j < rightArr.length) arr[k++] = rightArr[j++];
}

// Test the merge function
function testMergeFunction() {
  const arr = [12, 11, 13, 5, 6, 7];
  console.log("Original:", arr);
  
  mergeFunction(arr, 0, 2, 5); // Merge arr[0..2] and arr[3..5]
  console.log("After merge:", arr); // [5, 6, 7, 11, 12, 13]
}

testMergeFunction();`}
        explanation="The merge function is the core of Merge Sort. It takes two sorted subarrays and combines them into a single sorted array. Time: O(n), Space: O(n)."
      />

      <ProblemBlock
        title="7. Merge Sorting Algorithm"
        difficulty="Medium"
        description="Complete implementation of the Merge Sort algorithm using divide and conquer."
        solution={`function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr; // Base case: single element or empty array
  }
  
  // Divide: Split array into two halves
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  
  // Conquer: Recursively sort both halves
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);
  
  // Combine: Merge sorted halves
  return merge(sortedLeft, sortedRight);
}

// Helper function to merge two sorted arrays
function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  
  // Compare elements from both arrays
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] <= right[rightIndex]) {
      result.push(left[leftIndex++]);
    } else {
      result.push(right[rightIndex++]);
    }
  }
  
  // Add remaining elements
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// In-place version (more space efficient)
function mergeSortInPlace(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const mid = Math.floor((left + right) / 2);
    
    // Recursively sort both halves
    mergeSortInPlace(arr, left, mid);
    mergeSortInPlace(arr, mid + 1, right);
    
    // Merge the sorted halves
    mergeInPlace(arr, left, mid, right);
  }
  
  return arr;
}

function mergeInPlace(arr, left, mid, right) {
  const leftArr = arr.slice(left, mid + 1);
  const rightArr = arr.slice(mid + 1, right + 1);
  
  let i = 0, j = 0, k = left;
  
  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] <= rightArr[j]) {
      arr[k++] = leftArr[i++];
    } else {
      arr[k++] = rightArr[j++];
    }
  }
  
  while (i < leftArr.length) arr[k++] = leftArr[i++];
  while (j < rightArr.length) arr[k++] = rightArr[j++];
}

// Iterative version (bottom-up approach)
function mergeSortIterative(arr) {
  const n = arr.length;
  
  // Start with subarrays of size 1, then merge subarrays of size 2, 4, 8, etc.
  for (let size = 1; size < n; size *= 2) {
    for (let left = 0; left < n - 1; left += 2 * size) {
      const mid = Math.min(left + size - 1, n - 1);
      const right = Math.min(left + 2 * size - 1, n - 1);
      
      mergeInPlace(arr, left, mid, right);
    }
  }
  
  return arr;
}

// Test cases
console.log(mergeSort([38, 27, 43, 3, 9, 82, 10])); // [3, 9, 10, 27, 38, 43, 82]
console.log(mergeSort([64, 34, 25, 12, 22, 11, 90])); // [11, 12, 22, 25, 34, 64, 90]
console.log(mergeSort([5, 2, 8, 1, 9])); // [1, 2, 5, 8, 9]`}
        explanation="Complete Merge Sort implementation using divide and conquer. Recursively divides array, sorts subarrays, then merges them. Time: O(n log n), Space: O(n), Stable: Yes."
      />
    </div>
  );
}

// Merge Sort Section (from second image)
function MergeSortSection() {
  return (
    <div className="space-y-8">
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Merge Sort Problems
        </h2>
        <p className="text-gray-300 mb-6">
          Advanced problems using Merge Sort and its variations, including
          analysis and array operations.
        </p>
      </div>

      <ProblemBlock
        title="8. Merge Sort Analysis"
        difficulty="Medium"
        description="Analyze the time and space complexity of Merge Sort algorithm."
        solution={`// Time Complexity Analysis of Merge Sort

function mergeSortAnalysis(arr) {
  const n = arr.length;
  
  // Time Complexity: O(n log n)
  // - Divide: O(1) - splitting array
  // - Conquer: 2T(n/2) - recursive calls on half arrays
  // - Combine: O(n) - merging two sorted arrays
  
  // Space Complexity: O(n)
  // - Recursion stack: O(log n)
  // - Temporary arrays: O(n)
  
  if (n <= 1) return arr;
  
  const mid = Math.floor(n / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  
  return merge(mergeSortAnalysis(left), mergeSortAnalysis(right));
}

// Detailed complexity breakdown:
/*
Recursion Tree Analysis:
Level 0: n elements, 1 call
Level 1: n/2 elements, 2 calls  
Level 2: n/4 elements, 4 calls
...
Level log n: 1 element, n calls

At each level: O(n) work for merging
Total levels: log n
Total work: O(n) × O(log n) = O(n log n)

Space Analysis:
- Maximum recursion depth: log n
- Space per level: O(n) for temporary arrays
- Total space: O(n)
*/

// Comparison with other sorting algorithms:
/*
Algorithm    | Best Case | Average Case | Worst Case | Space | Stable
-------------|-----------|--------------|------------|-------|--------
Bubble Sort  | O(n)      | O(n²)        | O(n²)      | O(1)  | Yes
Selection    | O(n²)     | O(n²)        | O(n²)      | O(1)  | No
Insertion    | O(n)      | O(n²)        | O(n²)      | O(1)  | Yes
Merge Sort   | O(n log n)| O(n log n)   | O(n log n) | O(n)  | Yes
QuickSort    | O(n log n)| O(n log n)   | O(n²)      | O(log n)| No
Heap Sort    | O(n log n)| O(n log n)   | O(n log n) | O(1)  | No
*/

function merge(left, right) {
  const result = [];
  let i = 0, j = 0;
  
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }
  
  return result.concat(left.slice(i)).concat(right.slice(j));
}

// Test cases
console.log(mergeSortAnalysis([38, 27, 43, 3, 9, 82, 10])); // [3, 9, 10, 27, 38, 43, 82]`}
        explanation="Merge Sort has consistent O(n log n) time complexity in all cases due to its divide and conquer approach. Space complexity is O(n) due to temporary arrays."
      />

      <ProblemBlock
        title="9. Intersection of Two Sorted Arrays"
        difficulty="Easy"
        description="Find the intersection (common elements) of two sorted arrays efficiently."
        solution={`function intersectionOfSortedArrays(arr1, arr2) {
  const intersection = [];
  let i = 0, j = 0;
  
  // Use two pointers technique
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] === arr2[j]) {
      // Avoid duplicates
      if (intersection.length === 0 || intersection[intersection.length - 1] !== arr1[i]) {
        intersection.push(arr1[i]);
      }
      i++;
      j++;
    } else if (arr1[i] < arr2[j]) {
      i++;
    } else {
      j++;
    }
  }
  
  return intersection;
}

// Alternative: Using Set for unsorted arrays
function intersectionWithSet(arr1, arr2) {
  const set1 = new Set(arr1);
  const intersection = [];
  
  for (const num of arr2) {
    if (set1.has(num)) {
      intersection.push(num);
      set1.delete(num); // Avoid duplicates
    }
  }
  
  return intersection;
}

// Find intersection with frequency count
function intersectionWithCount(arr1, arr2) {
  const count1 = {};
  const count2 = {};
  
  // Count frequencies in both arrays
  for (const num of arr1) {
    count1[num] = (count1[num] || 0) + 1;
  }
  for (const num of arr2) {
    count2[num] = (count2[num] || 0) + 1;
  }
  
  const intersection = [];
  for (const num in count1) {
    if (count2[num]) {
      const minCount = Math.min(count1[num], count2[num]);
      for (let i = 0; i < minCount; i++) {
        intersection.push(parseInt(num));
      }
    }
  }
  
  return intersection;
}

// Test cases
console.log(intersectionOfSortedArrays([1, 2, 2, 3, 4], [2, 2, 4, 5])); // [2, 4]
console.log(intersectionOfSortedArrays([1, 3, 5, 7], [2, 4, 6, 8]));     // []`}
        explanation="Two pointers technique: compare elements from both arrays, add to result if equal, move pointer with smaller element. Time: O(m+n), Space: O(1)."
      />

      <ProblemBlock
        title="10. Union of Two Sorted Arrays"
        difficulty="Easy"
        description="Find the union (all unique elements) of two sorted arrays efficiently."
        solution={`function unionOfSortedArrays(arr1, arr2) {
  const union = [];
  let i = 0, j = 0;
  
  // Use two pointers technique
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      if (union.length === 0 || union[union.length - 1] !== arr1[i]) {
        union.push(arr1[i]);
      }
      i++;
    } else if (arr1[i] > arr2[j]) {
      if (union.length === 0 || union[union.length - 1] !== arr2[j]) {
        union.push(arr2[j]);
      }
      j++;
    } else {
      // Elements are equal
      if (union.length === 0 || union[union.length - 1] !== arr1[i]) {
        union.push(arr1[i]);
      }
      i++;
      j++;
    }
  }
  
  // Add remaining elements from arr1
  while (i < arr1.length) {
    if (union.length === 0 || union[union.length - 1] !== arr1[i]) {
      union.push(arr1[i]);
    }
    i++;
  }
  
  // Add remaining elements from arr2
  while (j < arr2.length) {
    if (union.length === 0 || union[union.length - 1] !== arr2[j]) {
      union.push(arr2[j]);
    }
    j++;
  }
  
  return union;
}

// Alternative: Using Set for unsorted arrays
function unionWithSet(arr1, arr2) {
  const unionSet = new Set();
  
  for (const num of arr1) {
    unionSet.add(num);
  }
  for (const num of arr2) {
    unionSet.add(num);
  }
  
  return Array.from(unionSet).sort((a, b) => a - b);
}

// Union with frequency count
function unionWithCount(arr1, arr2) {
  const count = {};
  
  // Count all elements from both arrays
  for (const num of arr1) {
    count[num] = (count[num] || 0) + 1;
  }
  for (const num of arr2) {
    count[num] = (count[num] || 0) + 1;
  }
  
  // Extract all unique elements
  return Object.keys(count).map(Number).sort((a, b) => a - b);
}

// Test cases
console.log(unionOfSortedArrays([1, 2, 2, 3, 4], [2, 2, 4, 5])); // [1, 2, 3, 4, 5]
console.log(unionOfSortedArrays([1, 3, 5, 7], [2, 4, 6, 8]));     // [1, 2, 3, 4, 5, 6, 7, 8]`}
        explanation="Two pointers technique: add smaller element to result, handle duplicates by checking last added element. Time: O(m+n), Space: O(1)."
      />

      <ProblemBlock
        title="11. Count Inversions in Array"
        difficulty="Hard"
        description="Count the number of inversions in an array using Merge Sort technique."
        solution={`function countInversions(arr) {
  return mergeSortAndCount(arr, 0, arr.length - 1);
}

function mergeSortAndCount(arr, left, right) {
  let invCount = 0;
  
  if (left < right) {
    const mid = Math.floor((left + right) / 2);
    
    // Count inversions in left half
    invCount += mergeSortAndCount(arr, left, mid);
    
    // Count inversions in right half
    invCount += mergeSortAndCount(arr, mid + 1, right);
    
    // Count inversions during merge
    invCount += mergeAndCount(arr, left, mid, right);
  }
  
  return invCount;
}

function mergeAndCount(arr, left, mid, right) {
  const leftArr = arr.slice(left, mid + 1);
  const rightArr = arr.slice(mid + 1, right + 1);
  
  let i = 0, j = 0, k = left;
  let invCount = 0;
  
  // Merge and count inversions
  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] <= rightArr[j]) {
      arr[k++] = leftArr[i++];
    } else {
      arr[k++] = rightArr[j++];
      // All remaining elements in leftArr are greater than rightArr[j]
      invCount += leftArr.length - i;
    }
  }
  
  // Copy remaining elements
  while (i < leftArr.length) arr[k++] = leftArr[i++];
  while (j < rightArr.length) arr[k++] = rightArr[j++];
  
  return invCount;
}

// Brute force approach for comparison
function countInversionsBruteForce(arr) {
  let invCount = 0;
  
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        invCount++;
      }
    }
  }
  
  return invCount;
}

// Count inversions without modifying original array
function countInversionsNonDestructive(arr) {
  const temp = [...arr];
  return mergeSortAndCountNonDestructive(temp, 0, temp.length - 1);
}

function mergeSortAndCountNonDestructive(arr, left, right) {
  let invCount = 0;
  
  if (left < right) {
    const mid = Math.floor((left + right) / 2);
    invCount += mergeSortAndCountNonDestructive(arr, left, mid);
    invCount += mergeSortAndCountNonDestructive(arr, mid + 1, right);
    invCount += mergeAndCountNonDestructive(arr, left, mid, right);
  }
  
  return invCount;
}

function mergeAndCountNonDestructive(arr, left, mid, right) {
  const leftArr = arr.slice(left, mid + 1);
  const rightArr = arr.slice(mid + 1, right + 1);
  
  let i = 0, j = 0, k = left;
  let invCount = 0;
  
  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] <= rightArr[j]) {
      arr[k++] = leftArr[i++];
    } else {
      arr[k++] = rightArr[j++];
      invCount += leftArr.length - i;
    }
  }
  
  while (i < leftArr.length) arr[k++] = leftArr[i++];
  while (j < rightArr.length) arr[k++] = rightArr[j++];
  
  return invCount;
}

// Test cases
console.log(countInversions([2, 4, 1, 3, 5])); // 3 inversions: (2,1), (4,1), (4,3)
console.log(countInversions([2, 3, 4, 5, 6])); // 0 inversions (sorted)
console.log(countInversions([5, 4, 3, 2, 1])); // 10 inversions (reverse sorted)`}
        explanation="Use Merge Sort approach: count inversions during merge step. When element from right array is smaller, all remaining left elements form inversions. Time: O(n log n), Space: O(n)."
      />

      <ProblemBlock
        title="12. Naive Partition"
        difficulty="Easy"
        description="Implement a naive partition algorithm for QuickSort that separates elements around a pivot."
        solution={`function naivePartition(arr, low, high, pivotIndex) {
  const pivot = arr[pivotIndex];
  const temp = [];
  
  // Add all elements less than pivot
  for (let i = low; i <= high; i++) {
    if (arr[i] < pivot) {
      temp.push(arr[i]);
    }
  }
  
  // Add all elements equal to pivot
  for (let i = low; i <= high; i++) {
    if (arr[i] === pivot) {
      temp.push(arr[i]);
    }
  }
  
  // Add all elements greater than pivot
  for (let i = low; i <= high; i++) {
    if (arr[i] > pivot) {
      temp.push(arr[i]);
    }
  }
  
  // Copy back to original array
  for (let i = low; i <= high; i++) {
    arr[i] = temp[i - low];
  }
  
  // Find pivot's final position
  for (let i = low; i <= high; i++) {
    if (arr[i] === pivot) {
      return i;
    }
  }
  
  return low;
}

// Alternative naive partition implementation
function naivePartitionAlternative(arr, low, high) {
  const pivot = arr[high]; // Use last element as pivot
  const temp = [];
  let pivotPos = low;
  
  // Copy elements less than pivot
  for (let i = low; i < high; i++) {
    if (arr[i] < pivot) {
      temp.push(arr[i]);
    }
  }
  
  // Add pivot
  temp.push(pivot);
  const pivotIndex = temp.length - 1 + low;
  
  // Copy elements greater than or equal to pivot
  for (let i = low; i < high; i++) {
    if (arr[i] >= pivot) {
      temp.push(arr[i]);
    }
  }
  
  // Copy back to original array
  for (let i = 0; i < temp.length; i++) {
    arr[low + i] = temp[i];
  }
  
  return pivotIndex;
}

// Test naive partition
function testNaivePartition() {
  const arr = [3, 8, 6, 12, 10, 7];
  console.log("Original:", arr);
  
  const pivotIndex = naivePartition(arr, 0, arr.length - 1, 5); // pivot = 7
  console.log("After partition:", arr);
  console.log("Pivot index:", pivotIndex);
}

testNaivePartition();`}
        explanation="Naive partition creates a temporary array, copies elements in order (less than pivot, equal to pivot, greater than pivot), then copies back. Time: O(n), Space: O(n)."
      />

      <ProblemBlock
        title="13. Lomuto Partition"
        difficulty="Medium"
        description="Implement Lomuto partition scheme for QuickSort - an efficient in-place partitioning algorithm."
        solution={`function lomutoPartition(arr, low, high) {
  const pivot = arr[high]; // Choose last element as pivot
  let i = low - 1; // Index of smaller element
  
  for (let j = low; j < high; j++) {
    // If current element is smaller than or equal to pivot
    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
    }
  }
  
  // Place pivot in correct position
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  
  return i + 1; // Return pivot index
}

// Lomuto partition with custom pivot selection
function lomutoPartitionCustomPivot(arr, low, high, pivotIndex) {
  // Move pivot to end
  [arr[pivotIndex], arr[high]] = [arr[high], arr[pivotIndex]];
  
  return lomutoPartition(arr, low, high);
}

// Lomuto partition for 3-way partitioning (Dutch National Flag)
function lomutoPartitionThreeWay(arr, low, high) {
  const pivot = arr[high];
  let i = low - 1; // Index for elements less than pivot
  let j = low;     // Index for current element
  let k = high;    // Index for elements greater than pivot
  
  while (j < k) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j++;
    } else if (arr[j] > pivot) {
      k--;
      [arr[j], arr[k]] = [arr[k], arr[j]];
    } else {
      j++; // Element equals pivot
    }
  }
  
  // Place pivot in correct position
  [arr[j], arr[high]] = [arr[high], arr[j]];
  
  return { lessThanPivot: i + 1, equalToPivot: j };
}

// Test Lomuto partition
function testLomutoPartition() {
  const arr = [10, 7, 8, 9, 1, 5];
  console.log("Original:", arr);
  
  const pivotIndex = lomutoPartition(arr, 0, arr.length - 1);
  console.log("After Lomuto partition:", arr);
  console.log("Pivot index:", pivotIndex);
  
  // Verify partition
  const pivot = arr[pivotIndex];
  for (let i = 0; i < pivotIndex; i++) {
    if (arr[i] > pivot) console.log("Error: Element greater than pivot on left");
  }
  for (let i = pivotIndex + 1; i < arr.length; i++) {
    if (arr[i] < pivot) console.log("Error: Element less than pivot on right");
  }
}

testLomutoPartition();`}
        explanation="Lomuto partition maintains two regions: elements ≤ pivot and elements > pivot. Uses single pass with two pointers. Time: O(n), Space: O(1)."
      />

      <ProblemBlock
        title="14. Hoare Partition"
        difficulty="Medium"
        description="Implement Hoare partition scheme - another efficient partitioning algorithm for QuickSort."
        solution={`function hoarePartition(arr, low, high) {
  const pivot = arr[low]; // Choose first element as pivot
  let i = low - 1; // Index from left
  let j = high + 1; // Index from right
  
  while (true) {
    // Move i to the right while elements are less than pivot
    do {
      i++;
    } while (arr[i] < pivot);
    
    // Move j to the left while elements are greater than pivot
    do {
      j--;
    } while (arr[j] > pivot);
    
    // If pointers have crossed, partition is complete
    if (i >= j) {
      return j;
    }
    
    // Swap elements at i and j
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

// Hoare partition with custom pivot selection
function hoarePartitionCustomPivot(arr, low, high, pivotIndex) {
  // Move pivot to beginning
  [arr[pivotIndex], arr[low]] = [arr[low], arr[pivotIndex]];
  
  return hoarePartition(arr, low, high);
}

// Hoare partition with median-of-three pivot selection
function hoarePartitionMedianOfThree(arr, low, high) {
  const mid = Math.floor((low + high) / 2);
  
  // Find median of first, middle, and last elements
  if (arr[mid] < arr[low]) [arr[low], arr[mid]] = [arr[mid], arr[low]];
  if (arr[high] < arr[low]) [arr[low], arr[high]] = [arr[high], arr[low]];
  if (arr[high] < arr[mid]) [arr[mid], arr[high]] = [arr[high], arr[mid]];
  
  // Use median as pivot
  [arr[mid], arr[low]] = [arr[low], arr[mid]];
  
  return hoarePartition(arr, low, high);
}

// Test Hoare partition
function testHoarePartition() {
  const arr = [8, 4, 7, 9, 3, 10, 5];
  console.log("Original:", arr);
  
  const partitionIndex = hoarePartition(arr, 0, arr.length - 1);
  console.log("After Hoare partition:", arr);
  console.log("Partition index:", partitionIndex);
  
  // Verify partition
  const pivot = arr[0]; // Pivot is at beginning
  for (let i = 0; i <= partitionIndex; i++) {
    if (arr[i] > pivot) console.log("Error: Element greater than pivot on left");
  }
  for (let i = partitionIndex + 1; i < arr.length; i++) {
    if (arr[i] < pivot) console.log("Error: Element less than pivot on right");
  }
}

testHoarePartition();`}
        explanation="Hoare partition uses two pointers moving towards each other from opposite ends. Stops when pointers cross. Time: O(n), Space: O(1). More efficient than Lomuto."
      />

      <ProblemBlock
        title="15. Quick Sort Introduction"
        difficulty="Medium"
        description="Introduction to QuickSort algorithm and its divide-and-conquer approach."
        solution={`// QuickSort Introduction
// QuickSort is a divide-and-conquer algorithm that works by selecting a 'pivot' element
// and partitioning the array around the pivot, then recursively sorting the subarrays.

function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    // Partition the array and get pivot index
    const pivotIndex = lomutoPartition(arr, low, high);
    
    // Recursively sort elements before and after partition
    quickSort(arr, low, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, high);
  }
  
  return arr;
}

// Helper function for Lomuto partition
function lomutoPartition(arr, low, high) {
  const pivot = arr[high];
  let i = low - 1;
  
  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}

// QuickSort with Hoare partition
function quickSortHoare(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    const partitionIndex = hoarePartition(arr, low, high);
    
    // Note: In Hoare partition, pivot is not necessarily at partitionIndex
    quickSortHoare(arr, low, partitionIndex);
    quickSortHoare(arr, partitionIndex + 1, high);
  }
  
  return arr;
}

function hoarePartition(arr, low, high) {
  const pivot = arr[low];
  let i = low - 1;
  let j = high + 1;
  
  while (true) {
    do {
      i++;
    } while (arr[i] < pivot);
    
    do {
      j--;
    } while (arr[j] > pivot);
    
    if (i >= j) {
      return j;
    }
    
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

// QuickSort characteristics:
/*
Time Complexity:
- Best Case: O(n log n) - when pivot divides array into equal halves
- Average Case: O(n log n) - balanced partitioning
- Worst Case: O(n²) - when pivot is always smallest or largest element

Space Complexity: O(log n) - recursion stack depth

Advantages:
- In-place sorting (with some implementations)
- Cache-friendly
- Good average performance

Disadvantages:
- Worst-case O(n²) time complexity
- Not stable
- Performance depends on pivot selection
*/

// Test cases
console.log(quickSort([64, 34, 25, 12, 22, 11, 90])); // [11, 12, 22, 25, 34, 64, 90]
console.log(quickSort([5, 2, 8, 1, 9]));              // [1, 2, 5, 8, 9]`}
        explanation="QuickSort uses divide-and-conquer: select pivot, partition array around pivot, recursively sort subarrays. Time: O(n log n) average, O(n²) worst case. Space: O(log n)."
      />
    </div>
  );
}

// QuickSort Section (from third image)
function QuickSortSection() {
  return (
    <div className="space-y-8">
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          QuickSort Problems
        </h2>
        <p className="text-gray-300 mb-6">
          Advanced QuickSort implementations and optimizations.
        </p>
      </div>

      <ProblemBlock
        title="16. QuickSort using Lomuto Partition"
        difficulty="Medium"
        description="Complete implementation of QuickSort using Lomuto partition scheme."
        solution={`function quickSortLomuto(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    // Partition the array using Lomuto partition
    const pivotIndex = lomutoPartition(arr, low, high);
    
    // Recursively sort elements before and after partition
    quickSortLomuto(arr, low, pivotIndex - 1);
    quickSortLomuto(arr, pivotIndex + 1, high);
  }
  
  return arr;
}

function lomutoPartition(arr, low, high) {
  const pivot = arr[high]; // Choose last element as pivot
  let i = low - 1; // Index of smaller element
  
  for (let j = low; j < high; j++) {
    // If current element is smaller than or equal to pivot
    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
    }
  }
  
  // Place pivot in correct position
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  
  return i + 1; // Return pivot index
}

// Optimized version with better pivot selection
function quickSortLomutoOptimized(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    // Use median-of-three for better pivot selection
    const pivotIndex = medianOfThree(arr, low, high);
    
    // Move pivot to end
    [arr[pivotIndex], arr[high]] = [arr[high], arr[pivotIndex]];
    
    const partitionIndex = lomutoPartition(arr, low, high);
    
    quickSortLomutoOptimized(arr, low, partitionIndex - 1);
    quickSortLomutoOptimized(arr, partitionIndex + 1, high);
  }
  
  return arr;
}

function medianOfThree(arr, low, high) {
  const mid = Math.floor((low + high) / 2);
  
  // Sort the three elements
  if (arr[mid] < arr[low]) [arr[low], arr[mid]] = [arr[mid], arr[low]];
  if (arr[high] < arr[low]) [arr[low], arr[high]] = [arr[high], arr[low]];
  if (arr[high] < arr[mid]) [arr[mid], arr[high]] = [arr[high], arr[mid]];
  
  return mid; // Return median element
}

// Test cases
console.log(quickSortLomuto([64, 34, 25, 12, 22, 11, 90])); // [11, 12, 22, 25, 34, 64, 90]
console.log(quickSortLomuto([5, 2, 8, 1, 9]));              // [1, 2, 5, 8, 9]`}
        explanation="QuickSort with Lomuto partition: select pivot, partition array around pivot, recursively sort subarrays. Lomuto partition places pivot at correct position. Time: O(n log n) average, O(n²) worst case."
      />

      <ProblemBlock
        title="17. QuickSort using Hoare Partition"
        difficulty="Medium"
        description="Complete implementation of QuickSort using Hoare partition scheme."
        solution={`function quickSortHoare(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    // Partition the array using Hoare partition
    const partitionIndex = hoarePartition(arr, low, high);
    
    // Recursively sort elements before and after partition
    quickSortHoare(arr, low, partitionIndex);
    quickSortHoare(arr, partitionIndex + 1, high);
  }
  
  return arr;
}

function hoarePartition(arr, low, high) {
  const pivot = arr[low]; // Choose first element as pivot
  let i = low - 1; // Index from left
  let j = high + 1; // Index from right
  
  while (true) {
    // Move i to the right while elements are less than pivot
    do {
      i++;
    } while (arr[i] < pivot);
    
    // Move j to the left while elements are greater than pivot
    do {
      j--;
    } while (arr[j] > pivot);
    
    // If pointers have crossed, partition is complete
    if (i >= j) {
      return j;
    }
    
    // Swap elements at i and j
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

// Hoare partition with random pivot selection
function quickSortHoareRandom(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    // Choose random pivot
    const randomIndex = Math.floor(Math.random() * (high - low + 1)) + low;
    [arr[low], arr[randomIndex]] = [arr[randomIndex], arr[low]];
    
    const partitionIndex = hoarePartition(arr, low, high);
    
    quickSortHoareRandom(arr, low, partitionIndex);
    quickSortHoareRandom(arr, partitionIndex + 1, high);
  }
  
  return arr;
}

// Test cases
console.log(quickSortHoare([64, 34, 25, 12, 22, 11, 90])); // [11, 12, 22, 25, 34, 64, 90]
console.log(quickSortHoare([5, 2, 8, 1, 9]));              // [1, 2, 5, 8, 9]`}
        explanation="QuickSort with Hoare partition: uses two pointers moving towards each other. More efficient than Lomuto as it performs fewer swaps. Time: O(n log n) average, O(n²) worst case."
      />

      <ProblemBlock
        title="18. QuickSort Analysis"
        difficulty="Hard"
        description="Detailed analysis of QuickSort time complexity in different scenarios."
        solution={`// QuickSort Time Complexity Analysis

function quickSortAnalysis(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    const pivotIndex = lomutoPartition(arr, low, high);
    
    // Recursive calls
    quickSortAnalysis(arr, low, pivotIndex - 1);
    quickSortAnalysis(arr, pivotIndex + 1, high);
  }
  
  return arr;
}

// Time Complexity Analysis:
/*
Best Case: O(n log n)
- Occurs when pivot always divides array into equal halves
- Recurrence relation: T(n) = 2T(n/2) + O(n)
- Solution: T(n) = O(n log n)

Average Case: O(n log n)
- Occurs when pivot divides array in any constant ratio
- Expected partitioning is balanced
- Analysis involves probability and expected values

Worst Case: O(n²)
- Occurs when pivot is always smallest or largest element
- Recurrence relation: T(n) = T(n-1) + O(n)
- Solution: T(n) = O(n²)
- Example: already sorted array with last element as pivot

Space Complexity: O(log n) - recursion stack depth
*/

// Comparison of different pivot selection strategies:
function analyzePivotSelection(arr) {
  const strategies = {
    'Last Element': () => arr[arr.length - 1],
    'First Element': () => arr[0],
    'Middle Element': () => arr[Math.floor(arr.length / 2)],
    'Random Element': () => arr[Math.floor(Math.random() * arr.length)],
    'Median of Three': () => {
      const first = arr[0];
      const middle = arr[Math.floor(arr.length / 2)];
      const last = arr[arr.length - 1];
      return [first, middle, last].sort((a, b) => a - b)[1];
    }
  };
  
  return strategies;
}

// Performance comparison function
function compareQuickSortPerformance(arr) {
  const results = {};
  
  // Test different pivot strategies
  const strategies = analyzePivotSelection(arr);
  
  for (const [strategy, pivotFn] of Object.entries(strategies)) {
    const testArr = [...arr];
    const startTime = performance.now();
    
    // Simulate QuickSort with this pivot strategy
    quickSortWithStrategy(testArr, pivotFn);
    
    const endTime = performance.now();
    results[strategy] = endTime - startTime;
  }
  
  return results;
}

function quickSortWithStrategy(arr, pivotSelector) {
  // Implementation would depend on strategy
  return quickSortAnalysis(arr);
}

function lomutoPartition(arr, low, high) {
  const pivot = arr[high];
  let i = low - 1;
  
  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}

// Test cases
console.log(quickSortAnalysis([38, 27, 43, 3, 9, 82, 10])); // [3, 9, 10, 27, 38, 43, 82]`}
        explanation="QuickSort analysis: Best case O(n log n) with balanced partitions, average case O(n log n), worst case O(n²) with unbalanced partitions. Space complexity O(log n) for recursion stack."
      />

      <ProblemBlock
        title="19. Space Analysis of QuickSort"
        difficulty="Medium"
        description="Analyze the space complexity of QuickSort algorithm and optimization techniques."
        solution={`// Space Complexity Analysis of QuickSort

function quickSortSpaceAnalysis(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    const pivotIndex = lomutoPartition(arr, low, high);
    
    // Recursive calls - each adds to call stack
    quickSortSpaceAnalysis(arr, low, pivotIndex - 1);
    quickSortSpaceAnalysis(arr, pivotIndex + 1, high);
  }
  
  return arr;
}

// Space Complexity Analysis:
/*
Recursion Stack Space: O(log n) in average case, O(n) in worst case

Average Case: O(log n)
- Balanced partitioning results in log n levels of recursion
- Each level uses constant space for local variables
- Total space: O(log n)

Worst Case: O(n)
- Unbalanced partitioning (e.g., sorted array)
- Results in n levels of recursion
- Total space: O(n)

Auxiliary Space: O(1) - only for partitioning variables
*/

// Space-optimized QuickSort (iterative)
function quickSortIterative(arr) {
  const stack = [];
  let low = 0;
  let high = arr.length - 1;
  
  // Push initial values
  stack.push({ low, high });
  
  while (stack.length > 0) {
    const { low: currentLow, high: currentHigh } = stack.pop();
    
    if (currentLow < currentHigh) {
      const pivotIndex = lomutoPartition(arr, currentLow, currentHigh);
      
      // Push left and right subarrays to stack
      stack.push({ low: currentLow, high: pivotIndex - 1 });
      stack.push({ low: pivotIndex + 1, high: currentHigh });
    }
  }
  
  return arr;
}

// Tail recursion optimization
function quickSortTailRecursive(arr, low = 0, high = arr.length - 1) {
  while (low < high) {
    const pivotIndex = lomutoPartition(arr, low, high);
    
    // Always recurse on smaller partition first
    if (pivotIndex - low < high - pivotIndex) {
      quickSortTailRecursive(arr, low, pivotIndex - 1);
      low = pivotIndex + 1; // Tail recursion elimination
    } else {
      quickSortTailRecursive(arr, pivotIndex + 1, high);
      high = pivotIndex - 1; // Tail recursion elimination
    }
  }
  
  return arr;
}

// Space complexity comparison
function compareSpaceComplexity() {
  const algorithms = {
    'Recursive QuickSort': 'O(log n) average, O(n) worst',
    'Iterative QuickSort': 'O(log n) average, O(n) worst',
    'Tail Recursive QuickSort': 'O(log n)',
    'Merge Sort': 'O(n)',
    'Heap Sort': 'O(1)',
    'Insertion Sort': 'O(1)'
  };
  
  return algorithms;
}

function lomutoPartition(arr, low, high) {
  const pivot = arr[high];
  let i = low - 1;
  
  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}

// Test cases
console.log(quickSortSpaceAnalysis([64, 34, 25, 12, 22, 11, 90])); // [11, 12, 22, 25, 34, 64, 90]
console.log(quickSortIterative([5, 2, 8, 1, 9]));                  // [1, 2, 5, 8, 9]`}
        explanation="Space complexity: O(log n) average case (balanced partitions), O(n) worst case (unbalanced partitions). Can be optimized with iterative approach or tail recursion elimination."
      />

      <ProblemBlock
        title="20. Choice of Pivot and Worst Case"
        difficulty="Medium"
        description="Understand how pivot selection affects QuickSort performance and avoid worst-case scenarios."
        solution={`// Pivot Selection Strategies and Worst Case Analysis

// Strategy 1: Always choose last element (worst case for sorted arrays)
function quickSortLastPivot(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    const pivotIndex = lomutoPartition(arr, low, high);
    quickSortLastPivot(arr, low, pivotIndex - 1);
    quickSortLastPivot(arr, pivotIndex + 1, high);
  }
  return arr;
}

// Strategy 2: Always choose first element (worst case for reverse sorted)
function quickSortFirstPivot(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    // Move first element to end
    [arr[low], arr[high]] = [arr[high], arr[low]];
    const pivotIndex = lomutoPartition(arr, low, high);
    quickSortFirstPivot(arr, low, pivotIndex - 1);
    quickSortFirstPivot(arr, pivotIndex + 1, high);
  }
  return arr;
}

// Strategy 3: Random pivot (reduces worst case probability)
function quickSortRandomPivot(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    // Choose random pivot
    const randomIndex = Math.floor(Math.random() * (high - low + 1)) + low;
    [arr[randomIndex], arr[high]] = [arr[high], arr[randomIndex]];
    
    const pivotIndex = lomutoPartition(arr, low, high);
    quickSortRandomPivot(arr, low, pivotIndex - 1);
    quickSortRandomPivot(arr, pivotIndex + 1, high);
  }
  return arr;
}

// Strategy 4: Median of three (good balance)
function quickSortMedianOfThree(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    const pivotIndex = medianOfThreePivot(arr, low, high);
    [arr[pivotIndex], arr[high]] = [arr[high], arr[pivotIndex]];
    
    const partitionIndex = lomutoPartition(arr, low, high);
    quickSortMedianOfThree(arr, low, partitionIndex - 1);
    quickSortMedianOfThree(arr, partitionIndex + 1, high);
  }
  return arr;
}

function medianOfThreePivot(arr, low, high) {
  const mid = Math.floor((low + high) / 2);
  
  // Find median of first, middle, and last elements
  if (arr[mid] < arr[low]) [arr[low], arr[mid]] = [arr[mid], arr[low]];
  if (arr[high] < arr[low]) [arr[low], arr[high]] = [arr[high], arr[low]];
  if (arr[high] < arr[mid]) [arr[mid], arr[high]] = [arr[high], arr[mid]];
  
  return mid; // Return index of median element
}

// Worst Case Scenarios:
function demonstrateWorstCases() {
  // Worst case for last element pivot
  const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log("Sorted array with last element pivot:", sortedArray);
  
  // Worst case for first element pivot  
  const reverseSorted = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  console.log("Reverse sorted array with first element pivot:", reverseSorted);
  
  // Worst case for middle element pivot
  const alternating = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];
  console.log("Alternating array with middle element pivot:", alternating);
}

// Pivot selection analysis
function analyzePivotSelection(arr) {
  const n = arr.length;
  
  // Calculate comparisons for different pivot strategies
  const strategies = {
    'Last Element': n * (n - 1) / 2, // Worst case
    'First Element': n * (n - 1) / 2, // Worst case
    'Random Element': n * Math.log2(n), // Expected case
    'Median of Three': n * Math.log2(n) // Good case
  };
  
  return strategies;
}

function lomutoPartition(arr, low, high) {
  const pivot = arr[high];
  let i = low - 1;
  
  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}

// Test cases
console.log(quickSortMedianOfThree([64, 34, 25, 12, 22, 11, 90])); // [11, 12, 22, 25, 34, 64, 90]
demonstrateWorstCases();`}
        explanation="Pivot selection greatly affects performance. Last/first element can cause O(n²) worst case. Random pivot and median-of-three reduce worst case probability. Best strategy depends on data characteristics."
      />

      <ProblemBlock
        title="21. Tail Call Elimination in QuickSort"
        difficulty="Hard"
        description="Optimize QuickSort by eliminating tail recursion to reduce space complexity."
        solution={`// Tail Call Elimination in QuickSort

// Standard recursive QuickSort (can cause stack overflow)
function quickSortStandard(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    const pivotIndex = lomutoPartition(arr, low, high);
    
    quickSortStandard(arr, low, pivotIndex - 1);
    quickSortStandard(arr, pivotIndex + 1, high);
  }
  
  return arr;
}

// Tail recursion optimized QuickSort
function quickSortTailOptimized(arr, low = 0, high = arr.length - 1) {
  while (low < high) {
    const pivotIndex = lomutoPartition(arr, low, high);
    
    // Always recurse on smaller partition first
    if (pivotIndex - low < high - pivotIndex) {
      quickSortTailOptimized(arr, low, pivotIndex - 1);
      low = pivotIndex + 1; // Tail recursion elimination
    } else {
      quickSortTailOptimized(arr, pivotIndex + 1, high);
      high = pivotIndex - 1; // Tail recursion elimination
    }
  }
  
  return arr;
}

// Completely iterative QuickSort (no recursion)
function quickSortIterative(arr) {
  const stack = [];
  let low = 0;
  let high = arr.length - 1;
  
  stack.push({ low, high });
  
  while (stack.length > 0) {
    const { low: currentLow, high: currentHigh } = stack.pop();
    
    if (currentLow < currentHigh) {
      const pivotIndex = lomutoPartition(arr, currentLow, currentHigh);
      
      // Push partitions to stack (smaller partition first)
      if (pivotIndex - currentLow < currentHigh - pivotIndex) {
        stack.push({ low: pivotIndex + 1, high: currentHigh });
        stack.push({ low: currentLow, high: pivotIndex - 1 });
      } else {
        stack.push({ low: currentLow, high: pivotIndex - 1 });
        stack.push({ low: pivotIndex + 1, high: currentHigh });
      }
    }
  }
  
  return arr;
}

// Hybrid approach: Use insertion sort for small subarrays
function quickSortHybrid(arr, low = 0, high = arr.length - 1, threshold = 10) {
  while (low < high) {
    // Use insertion sort for small arrays
    if (high - low < threshold) {
      insertionSort(arr, low, high);
      break;
    }
    
    const pivotIndex = lomutoPartition(arr, low, high);
    
    // Tail recursion elimination
    if (pivotIndex - low < high - pivotIndex) {
      quickSortHybrid(arr, low, pivotIndex - 1, threshold);
      low = pivotIndex + 1;
    } else {
      quickSortHybrid(arr, pivotIndex + 1, high, threshold);
      high = pivotIndex - 1;
    }
  }
  
  return arr;
}

// Insertion sort for small arrays
function insertionSort(arr, low, high) {
  for (let i = low + 1; i <= high; i++) {
    let key = arr[i];
    let j = i - 1;
    
    while (j >= low && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    
    arr[j + 1] = key;
  }
}

// Space complexity comparison
function compareSpaceComplexity() {
  return {
    'Standard Recursive': 'O(log n) average, O(n) worst',
    'Tail Optimized': 'O(log n)',
    'Iterative': 'O(log n)',
    'Hybrid': 'O(log n)'
  };
}

// Performance test
function performanceTest() {
  const testArray = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000));
  
  const algorithms = [
    { name: 'Standard', fn: quickSortStandard },
    { name: 'Tail Optimized', fn: quickSortTailOptimized },
    { name: 'Iterative', fn: quickSortIterative },
    { name: 'Hybrid', fn: quickSortHybrid }
  ];
  
  algorithms.forEach(algorithm => {
    const arr = [...testArray];
    const start = performance.now();
    algorithm.fn(arr);
    const end = performance.now();
    console.log(\`\${algorithm.name}: \${(end - start).toFixed(2)}ms\`);
  });
}

function lomutoPartition(arr, low, high) {
  const pivot = arr[high];
  let i = low - 1;
  
  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}

// Test cases
console.log(quickSortTailOptimized([64, 34, 25, 12, 22, 11, 90])); // [11, 12, 22, 25, 34, 64, 90]
console.log(quickSortIterative([5, 2, 8, 1, 9]));                  // [1, 2, 5, 8, 9]`}
        explanation="Tail call elimination reduces space complexity from O(n) to O(log n) by always recursing on smaller partition first. Iterative version eliminates recursion completely using explicit stack."
      />

      <ProblemBlock
        title="22. Kth Smallest Element"
        difficulty="Medium"
        description="Find the kth smallest element in an array using QuickSelect algorithm (modified QuickSort)."
        solution={`// Find Kth Smallest Element using QuickSelect

function findKthSmallest(arr, k) {
  if (k < 1 || k > arr.length) {
    throw new Error('Invalid k value');
  }
  
  // QuickSelect finds kth smallest in O(n) average time
  return quickSelect(arr, 0, arr.length - 1, k - 1); // Convert to 0-based index
}

function quickSelect(arr, low, high, k) {
  if (low === high) {
    return arr[low]; // Base case: single element
  }
  
  // Partition the array
  const pivotIndex = lomutoPartition(arr, low, high);
  
  if (k === pivotIndex) {
    return arr[pivotIndex]; // Found the kth element
  } else if (k < pivotIndex) {
    // Search in left partition
    return quickSelect(arr, low, pivotIndex - 1, k);
  } else {
    // Search in right partition
    return quickSelect(arr, pivotIndex + 1, high, k);
  }
}

// Alternative: Using median-of-medians for guaranteed O(n) time
function findKthSmallestOptimized(arr, k) {
  if (k < 1 || k > arr.length) {
    throw new Error('Invalid k value');
  }
  
  return quickSelectOptimized(arr, 0, arr.length - 1, k - 1);
}

function quickSelectOptimized(arr, low, high, k) {
  if (high - low < 5) {
    // Use insertion sort for small arrays
    insertionSort(arr, low, high);
    return arr[low + k];
  }
  
  // Divide array into groups of 5 and find median of medians
  const median = findMedianOfMedians(arr, low, high);
  
  // Partition around median of medians
  const pivotIndex = partitionAroundPivot(arr, low, high, median);
  
  if (k === pivotIndex - low) {
    return arr[pivotIndex];
  } else if (k < pivotIndex - low) {
    return quickSelectOptimized(arr, low, pivotIndex - 1, k);
  } else {
    return quickSelectOptimized(arr, pivotIndex + 1, high, k - (pivotIndex - low + 1));
  }
}

function findMedianOfMedians(arr, low, high) {
  const n = high - low + 1;
  const medians = [];
  
  // Find median of each group of 5
  for (let i = low; i <= high; i += 5) {
    const groupEnd = Math.min(i + 4, high);
    const groupMedian = findMedian(arr, i, groupEnd);
    medians.push(groupMedian);
  }
  
  // Find median of medians
  if (medians.length === 1) {
    return medians[0];
  }
  
  return quickSelectOptimized(medians, 0, medians.length - 1, Math.floor(medians.length / 2));
}

function findMedian(arr, low, high) {
  insertionSort(arr, low, high);
  const mid = Math.floor((low + high) / 2);
  return arr[mid];
}

function partitionAroundPivot(arr, low, high, pivot) {
  // Find pivot index and move it to end
  let pivotIndex = low;
  for (let i = low; i <= high; i++) {
    if (arr[i] === pivot) {
      pivotIndex = i;
      break;
    }
  }
  
  [arr[pivotIndex], arr[high]] = [arr[high], arr[pivotIndex]];
  
  // Partition using Lomuto scheme
  let i = low - 1;
  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}

// Find kth largest element
function findKthLargest(arr, k) {
  return findKthSmallest(arr, arr.length - k + 1);
}

// Find median (middle element)
function findMedian(arr) {
  const n = arr.length;
  if (n % 2 === 1) {
    return findKthSmallest(arr, Math.floor(n / 2) + 1);
  } else {
    const mid1 = findKthSmallest(arr, n / 2);
    const mid2 = findKthSmallest(arr, n / 2 + 1);
    return (mid1 + mid2) / 2;
  }
}

function lomutoPartition(arr, low, high) {
  const pivot = arr[high];
  let i = low - 1;
  
  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}

function insertionSort(arr, low, high) {
  for (let i = low + 1; i <= high; i++) {
    let key = arr[i];
    let j = i - 1;
    
    while (j >= low && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    
    arr[j + 1] = key;
  }
}

// Test cases
const arr = [7, 10, 4, 3, 20, 15];
console.log(findKthSmallest(arr, 3)); // 7 (3rd smallest)
console.log(findKthLargest(arr, 2));  // 15 (2nd largest)
console.log(findMedian([1, 2, 3, 4, 5])); // 3`}
        explanation="QuickSelect algorithm: partition array around pivot, recursively search in appropriate partition. Time: O(n) average, O(n²) worst case. Space: O(log n)."
      />

      <ProblemBlock
        title="23. Minimum Difference in Array"
        difficulty="Easy"
        description="Find the minimum difference between any two elements in an array."
        solution={`// Find Minimum Difference in Array

function findMinimumDifference(arr) {
  if (arr.length < 2) {
    return 0; // Not enough elements
  }
  
  // Sort the array first
  const sorted = [...arr].sort((a, b) => a - b);
  
  let minDiff = Infinity;
  
  // Compare adjacent elements
  for (let i = 1; i < sorted.length; i++) {
    const diff = sorted[i] - sorted[i - 1];
    minDiff = Math.min(minDiff, diff);
  }
  
  return minDiff;
}

// Alternative: Find minimum difference without sorting (less efficient)
function findMinimumDifferenceBruteForce(arr) {
  if (arr.length < 2) {
    return 0;
  }
  
  let minDiff = Infinity;
  
  // Compare every pair of elements
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const diff = Math.abs(arr[i] - arr[j]);
      minDiff = Math.min(minDiff, diff);
    }
  }
  
  return minDiff;
}

// Find all pairs with minimum difference
function findAllPairsWithMinDifference(arr) {
  if (arr.length < 2) {
    return [];
  }
  
  const sorted = [...arr].sort((a, b) => a - b);
  const minDiff = findMinimumDifference(sorted);
  const pairs = [];
  
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] - sorted[i - 1] === minDiff) {
      pairs.push([sorted[i - 1], sorted[i]]);
    }
  }
  
  return pairs;
}

// Find minimum difference in circular array
function findMinimumDifferenceCircular(arr) {
  if (arr.length < 2) {
    return 0;
  }
  
  const sorted = [...arr].sort((a, b) => a - b);
  let minDiff = Infinity;
  
  // Check adjacent elements
  for (let i = 1; i < sorted.length; i++) {
    minDiff = Math.min(minDiff, sorted[i] - sorted[i - 1]);
  }
  
  // Check circular difference (last and first)
  minDiff = Math.min(minDiff, sorted[0] + (360 - sorted[sorted.length - 1]));
  
  return minDiff;
}

// Find minimum difference between elements in different arrays
function findMinimumDifferenceTwoArrays(arr1, arr2) {
  if (arr1.length === 0 || arr2.length === 0) {
    return Infinity;
  }
  
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  
  let i = 0, j = 0;
  let minDiff = Infinity;
  
  while (i < arr1.length && j < arr2.length) {
    const diff = Math.abs(arr1[i] - arr2[j]);
    minDiff = Math.min(minDiff, diff);
    
    if (arr1[i] < arr2[j]) {
      i++;
    } else {
      j++;
    }
  }
  
  return minDiff;
}

// Find minimum difference with constraints
function findMinimumDifferenceWithConstraints(arr, maxDiff) {
  if (arr.length < 2) {
    return 0;
  }
  
  const sorted = [...arr].sort((a, b) => a - b);
  let minDiff = Infinity;
  
  for (let i = 1; i < sorted.length; i++) {
    const diff = sorted[i] - sorted[i - 1];
    if (diff <= maxDiff) {
      minDiff = Math.min(minDiff, diff);
    }
  }
  
  return minDiff === Infinity ? -1 : minDiff;
}

// Test cases
console.log(findMinimumDifference([1, 5, 3, 19, 18, 25])); // 1 (between 18 and 19)
console.log(findMinimumDifference([30, 5, 20, 9]));       // 4 (between 5 and 9)
console.log(findAllPairsWithMinDifference([1, 5, 3, 19, 18, 25])); // [[18, 19]]`}
        explanation="Sort array first, then find minimum difference between adjacent elements. Time: O(n log n) for sorting, Space: O(1). Brute force approach is O(n²) but doesn't require sorting."
      />
    </div>
  );
}

// Advanced Sorting Section (from fourth image)
function AdvancedSortingSection() {
  return (
    <div className="space-y-8">
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Advanced Sorting Problems
        </h2>
        <p className="text-gray-300 mb-6">
          Special sorting algorithms and complex sorting problems.
        </p>
      </div>

      <ProblemBlock
        title="24. Chocolate Distribution Problem"
        difficulty="Medium"
        description="Distribute chocolate packets among students such that the difference between maximum and minimum is minimum."
        solution={`// Chocolate Distribution Problem

function chocolateDistribution(packets, students) {
  if (students === 0 || packets.length === 0) {
    return 0;
  }
  
  if (packets.length < students) {
    return -1; // Not enough packets
  }
  
  // Sort the packets
  packets.sort((a, b) => a - b);
  
  let minDiff = Infinity;
  
  // Find minimum difference by checking all possible windows
  for (let i = 0; i <= packets.length - students; i++) {
    const diff = packets[i + students - 1] - packets[i];
    minDiff = Math.min(minDiff, diff);
  }
  
  return minDiff;
}

// Alternative approach using sliding window
function chocolateDistributionSlidingWindow(packets, students) {
  if (students === 0 || packets.length === 0) {
    return 0;
  }
  
  if (packets.length < students) {
    return -1;
  }
  
  packets.sort((a, b) => a - b);
  
  let minDiff = packets[students - 1] - packets[0];
  
  for (let i = 1; i <= packets.length - students; i++) {
    const currentDiff = packets[i + students - 1] - packets[i];
    minDiff = Math.min(minDiff, currentDiff);
  }
  
  return minDiff;
}

// Find the actual packets to distribute
function findChocolatePackets(packets, students) {
  if (students === 0 || packets.length === 0 || packets.length < students) {
    return [];
  }
  
  packets.sort((a, b) => a - b);
  
  let minDiff = Infinity;
  let resultIndex = 0;
  
  for (let i = 0; i <= packets.length - students; i++) {
    const diff = packets[i + students - 1] - packets[i];
    if (diff < minDiff) {
      minDiff = diff;
      resultIndex = i;
    }
  }
  
  return packets.slice(resultIndex, resultIndex + students);
}

// Test cases
console.log(chocolateDistribution([7, 3, 2, 4, 9, 12, 56], 3)); // 2 (packets: 2, 3, 4)
console.log(chocolateDistribution([3, 4, 1, 9, 56, 7, 9, 12], 5)); // 6 (packets: 3, 4, 7, 9, 9)
console.log(findChocolatePackets([7, 3, 2, 4, 9, 12, 56], 3)); // [2, 3, 4]`}
        explanation="Sort packets first, then use sliding window to find minimum difference between maximum and minimum in any window of size 'students'. Time: O(n log n), Space: O(1)."
      />

      <ProblemBlock
        title="25. Sort Array with Two Types of Elements"
        difficulty="Easy"
        description="Sort an array containing only two types of elements (e.g., 0s and 1s, or negatives and positives)."
        solution={`// Sort Array with Two Types of Elements

// Sort array of 0s and 1s (Dutch National Flag problem simplified)
function sortTwoTypes(arr) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left < right) {
    // Move left pointer until we find 1
    while (left < right && arr[left] === 0) {
      left++;
    }
    
    // Move right pointer until we find 0
    while (left < right && arr[right] === 1) {
      right--;
    }
    
    // Swap if pointers haven't crossed
    if (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }
  
  return arr;
}

// Sort negatives and positives
function sortNegativesAndPositives(arr) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left < right) {
    // Move left pointer until we find positive
    while (left < right && arr[left] < 0) {
      left++;
    }
    
    // Move right pointer until we find negative
    while (left < right && arr[right] >= 0) {
      right--;
    }
    
    // Swap if pointers haven't crossed
    if (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }
  
  return arr;
}

// Sort even and odd numbers
function sortEvenAndOdd(arr) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left < right) {
    // Move left pointer until we find odd
    while (left < right && arr[left] % 2 === 0) {
      left++;
    }
    
    // Move right pointer until we find even
    while (left < right && arr[right] % 2 === 1) {
      right--;
    }
    
    // Swap if pointers haven't crossed
    if (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }
  
  return arr;
}

// Alternative: Count and fill approach
function sortTwoTypesCount(arr) {
  let count0 = 0;
  
  // Count 0s
  for (const num of arr) {
    if (num === 0) count0++;
  }
  
  // Fill first count0 positions with 0s, rest with 1s
  for (let i = 0; i < count0; i++) {
    arr[i] = 0;
  }
  for (let i = count0; i < arr.length; i++) {
    arr[i] = 1;
  }
  
  return arr;
}

// Sort with custom comparator
function sortTwoTypesCustom(arr, isTypeA) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left < right) {
    while (left < right && isTypeA(arr[left])) {
      left++;
    }
    
    while (left < right && !isTypeA(arr[right])) {
      right--;
    }
    
    if (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }
  
  return arr;
}

// Test cases
console.log(sortTwoTypes([0, 1, 0, 1, 1, 0, 0, 1])); // [0, 0, 0, 0, 1, 1, 1, 1]
console.log(sortNegativesAndPositives([-1, 2, -3, 4, 5, 6, -7, 8, 9])); // [-1, -7, -3, 4, 5, 6, 2, 8, 9]
console.log(sortEvenAndOdd([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [2, 4, 6, 8, 5, 7, 3, 1, 9]`}
        explanation="Use two pointers approach: move left pointer to find second type, right pointer to find first type, then swap. Time: O(n), Space: O(1). Alternative: count elements and fill."
      />

      <ProblemBlock
        title="26. Sort Array with Three Types of Elements"
        difficulty="Medium"
        description="Sort an array containing three types of elements using Dutch National Flag algorithm."
        solution={`// Sort Array with Three Types of Elements (Dutch National Flag Problem)

function sortThreeTypes(arr) {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;
  
  while (mid <= high) {
    if (arr[mid] === 0) {
      // Swap with low and move both pointers
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      low++;
      mid++;
    } else if (arr[mid] === 1) {
      // Just move mid pointer
      mid++;
    } else { // arr[mid] === 2
      // Swap with high and move high pointer
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
      // Don't move mid pointer, need to check swapped element
    }
  }
  
  return arr;
}

// Sort negatives, zeros, and positives
function sortNegativesZerosPositives(arr) {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;
  
  while (mid <= high) {
    if (arr[mid] < 0) {
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      low++;
      mid++;
    } else if (arr[mid] === 0) {
      mid++;
    } else { // arr[mid] > 0
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    }
  }
  
  return arr;
}

// Sort small, medium, large numbers
function sortSmallMediumLarge(arr, lowVal, highVal) {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;
  
  while (mid <= high) {
    if (arr[mid] < lowVal) {
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      low++;
      mid++;
    } else if (arr[mid] > highVal) {
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    } else {
      mid++;
    }
  }
  
  return arr;
}

// Alternative: Count and fill approach
function sortThreeTypesCount(arr) {
  let count0 = 0, count1 = 0, count2 = 0;
  
  // Count each type
  for (const num of arr) {
    if (num === 0) count0++;
    else if (num === 1) count1++;
    else count2++;
  }
  
  // Fill array with counts
  let index = 0;
  while (count0 > 0) {
    arr[index++] = 0;
    count0--;
  }
  while (count1 > 0) {
    arr[index++] = 1;
    count1--;
  }
  while (count2 > 0) {
    arr[index++] = 2;
    count2--;
  }
  
  return arr;
}

// Generic three-way partitioning
function threeWayPartition(arr, lowVal, highVal) {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;
  
  while (mid <= high) {
    if (arr[mid] < lowVal) {
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      low++;
      mid++;
    } else if (arr[mid] > highVal) {
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    } else {
      mid++;
    }
  }
  
  return arr;
}

// Test cases
console.log(sortThreeTypes([0, 1, 2, 0, 1, 2])); // [0, 0, 1, 1, 2, 2]
console.log(sortNegativesZerosPositives([-1, 0, 1, -2, 0, 2])); // [-1, -2, 0, 0, 1, 2]
console.log(sortSmallMediumLarge([1, 14, 5, 20, 4, 2, 54, 20, 87, 98, 3, 1, 32], 14, 20));`}
        explanation="Dutch National Flag algorithm: use three pointers (low, mid, high). Move elements based on their value: 0s to left, 1s stay in middle, 2s to right. Time: O(n), Space: O(1)."
      />

      <ProblemBlock
        title="27. Merge Overlapping Intervals"
        difficulty="Medium"
        description="Given a collection of intervals, merge all overlapping intervals."
        solution={`// Merge Overlapping Intervals

function mergeIntervals(intervals) {
  if (intervals.length <= 1) {
    return intervals;
  }
  
  // Sort intervals by start time
  intervals.sort((a, b) => a[0] - b[0]);
  
  const merged = [intervals[0]];
  
  for (let i = 1; i < intervals.length; i++) {
    const current = intervals[i];
    const lastMerged = merged[merged.length - 1];
    
    // If current interval overlaps with last merged interval
    if (current[0] <= lastMerged[1]) {
      // Merge intervals by updating the end time
      lastMerged[1] = Math.max(lastMerged[1], current[1]);
    } else {
      // No overlap, add current interval
      merged.push(current);
    }
  }
  
  return merged;
}

// Alternative: Using stack approach
function mergeIntervalsStack(intervals) {
  if (intervals.length <= 1) {
    return intervals;
  }
  
  intervals.sort((a, b) => a[0] - b[0]);
  const stack = [intervals[0]];
  
  for (let i = 1; i < intervals.length; i++) {
    const current = intervals[i];
    const top = stack[stack.length - 1];
    
    if (current[0] <= top[1]) {
      // Merge intervals
      stack[stack.length - 1] = [top[0], Math.max(top[1], current[1])];
    } else {
      stack.push(current);
    }
  }
  
  return stack;
}

// Find all overlapping intervals with a given interval
function findOverlappingIntervals(intervals, target) {
  const overlapping = [];
  
  for (const interval of intervals) {
    // Check if intervals overlap
    if (interval[0] <= target[1] && interval[1] >= target[0]) {
      overlapping.push(interval);
    }
  }
  
  return overlapping;
}

// Find non-overlapping intervals (maximum number)
function findNonOverlappingIntervals(intervals) {
  if (intervals.length <= 1) {
    return intervals;
  }
  
  // Sort by end time
  intervals.sort((a, b) => a[1] - b[1]);
  
  const result = [intervals[0]];
  let lastEnd = intervals[0][1];
  
  for (let i = 1; i < intervals.length; i++) {
    const current = intervals[i];
    
    // If current interval doesn't overlap with last selected
    if (current[0] >= lastEnd) {
      result.push(current);
      lastEnd = current[1];
    }
  }
  
  return result;
}

// Insert new interval into sorted intervals
function insertInterval(intervals, newInterval) {
  const result = [];
  let i = 0;
  
  // Add all intervals that come before new interval
  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i]);
    i++;
  }
  
  // Merge overlapping intervals
  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    newInterval = [
      Math.min(newInterval[0], intervals[i][0]),
      Math.max(newInterval[1], intervals[i][1])
    ];
    i++;
  }
  
  result.push(newInterval);
  
  // Add remaining intervals
  while (i < intervals.length) {
    result.push(intervals[i]);
    i++;
  }
  
  return result;
}

// Test cases
console.log(mergeIntervals([[1,3],[2,6],[8,10],[15,18]])); // [[1,6],[8,10],[15,18]]
console.log(mergeIntervals([[1,4],[4,5]])); // [[1,5]]
console.log(insertInterval([[1,3],[6,9]], [2,5])); // [[1,5],[6,9]]`}
        explanation="Sort intervals by start time, then iterate and merge overlapping ones. Two intervals overlap if start of one is <= end of previous. Time: O(n log n), Space: O(1)."
      />

      <ProblemBlock
        title="28. Meeting the Maximum Guests"
        difficulty="Medium"
        description="Find the maximum number of guests that can be met at any point in time given arrival and departure times."
        solution={`// Meeting the Maximum Guests

function maxGuests(arrival, departure) {
  if (arrival.length !== departure.length || arrival.length === 0) {
    return 0;
  }
  
  // Sort both arrays
  arrival.sort((a, b) => a - b);
  departure.sort((a, b) => a - b);
  
  let maxGuests = 0;
  let currentGuests = 0;
  let i = 0, j = 0;
  
  // Process all events in sorted order
  while (i < arrival.length && j < departure.length) {
    // If next event is arrival
    if (arrival[i] <= departure[j]) {
      currentGuests++;
      maxGuests = Math.max(maxGuests, currentGuests);
      i++;
    } else {
      // Next event is departure
      currentGuests--;
      j++;
    }
  }
  
  return maxGuests;
}

// Find the time when maximum guests are present
function maxGuestsWithTime(arrival, departure) {
  if (arrival.length !== departure.length || arrival.length === 0) {
    return { maxGuests: 0, time: 0 };
  }
  
  arrival.sort((a, b) => a - b);
  departure.sort((a, b) => a - b);
  
  let maxGuests = 0;
  let currentGuests = 0;
  let maxTime = 0;
  let i = 0, j = 0;
  
  while (i < arrival.length && j < departure.length) {
    if (arrival[i] <= departure[j]) {
      currentGuests++;
      if (currentGuests > maxGuests) {
        maxGuests = currentGuests;
        maxTime = arrival[i];
      }
      i++;
    } else {
      currentGuests--;
      j++;
    }
  }
  
  return { maxGuests, time: maxTime };
}

// Alternative: Using events array
function maxGuestsEvents(arrival, departure) {
  if (arrival.length !== departure.length || arrival.length === 0) {
    return 0;
  }
  
  const events = [];
  
  // Create events
  for (let i = 0; i < arrival.length; i++) {
    events.push({ time: arrival[i], type: 'arrival' });
    events.push({ time: departure[i], type: 'departure' });
  }
  
  // Sort events by time
  events.sort((a, b) => {
    if (a.time === b.time) {
      // If times are equal, process departures first
      return a.type === 'departure' ? -1 : 1;
    }
    return a.time - b.time;
  });
  
  let maxGuests = 0;
  let currentGuests = 0;
  
  for (const event of events) {
    if (event.type === 'arrival') {
      currentGuests++;
      maxGuests = Math.max(maxGuests, currentGuests);
    } else {
      currentGuests--;
    }
  }
  
  return maxGuests;
}

// Find all time intervals with maximum guests
function maxGuestsIntervals(arrival, departure) {
  if (arrival.length !== departure.length || arrival.length === 0) {
    return [];
  }
  
  const events = [];
  
  for (let i = 0; i < arrival.length; i++) {
    events.push({ time: arrival[i], type: 'arrival' });
    events.push({ time: departure[i], type: 'departure' });
  }
  
  events.sort((a, b) => {
    if (a.time === b.time) {
      return a.type === 'departure' ? -1 : 1;
    }
    return a.time - b.time;
  });
  
  let maxGuests = 0;
  let currentGuests = 0;
  const intervals = [];
  let intervalStart = null;
  
  for (const event of events) {
    if (event.type === 'arrival') {
      currentGuests++;
      if (currentGuests > maxGuests) {
        maxGuests = currentGuests;
        intervals.length = 0; // Clear previous intervals
        intervalStart = event.time;
      } else if (currentGuests === maxGuests) {
        intervalStart = event.time;
      }
    } else {
      if (currentGuests === maxGuests && intervalStart !== null) {
        intervals.push([intervalStart, event.time]);
        intervalStart = null;
      }
      currentGuests--;
    }
  }
  
  return { maxGuests, intervals };
}

// Test cases
const arrival = [1, 2, 10, 5, 5];
const departure = [4, 5, 12, 9, 12];
console.log(maxGuests(arrival, departure)); // 3 (at time 5)
console.log(maxGuestsWithTime([...arrival], [...departure])); // { maxGuests: 3, time: 5 }
console.log(maxGuestsIntervals([...arrival], [...departure]));`}
        explanation="Sort arrival and departure times, use two pointers to process events. When arrival <= departure, increment count; otherwise decrement. Track maximum count. Time: O(n log n), Space: O(1)."
      />

      <ProblemBlock
        title="29. Cycle Sort"
        difficulty="Hard"
        description="Implement Cycle Sort algorithm - an in-place sorting algorithm that minimizes the number of writes."
        solution={`// Cycle Sort Algorithm

function cycleSort(arr) {
  const n = arr.length;
  let writes = 0;
  
  // Process each element
  for (let cycleStart = 0; cycleStart < n - 1; cycleStart++) {
    let item = arr[cycleStart];
    let pos = cycleStart;
    
    // Find position to place the item
    for (let i = cycleStart + 1; i < n; i++) {
      if (arr[i] < item) {
        pos++;
      }
    }
    
    // If item is already in correct position, continue
    if (pos === cycleStart) {
      continue;
    }
    
    // Handle duplicates
    while (item === arr[pos]) {
      pos++;
    }
    
    // Place item in correct position
    if (pos !== cycleStart) {
      [item, arr[pos]] = [arr[pos], item];
      writes++;
    }
    
    // Continue the cycle
    while (pos !== cycleStart) {
      pos = cycleStart;
      
      // Find position for current item
      for (let i = cycleStart + 1; i < n; i++) {
        if (arr[i] < item) {
          pos++;
        }
      }
      
      // Handle duplicates
      while (item === arr[pos]) {
        pos++;
      }
      
      // Place item in correct position
      if (item !== arr[pos]) {
        [item, arr[pos]] = [arr[pos], item];
        writes++;
      }
    }
  }
  
  return { sortedArray: arr, writes };
}

// Cycle sort with duplicate handling
function cycleSortWithDuplicates(arr) {
  const n = arr.length;
  let writes = 0;
  
  for (let cycleStart = 0; cycleStart < n - 1; cycleStart++) {
    let item = arr[cycleStart];
    let pos = cycleStart;
    
    // Count smaller elements
    for (let i = cycleStart + 1; i < n; i++) {
      if (arr[i] < item) {
        pos++;
      }
    }
    
    if (pos === cycleStart) {
      continue;
    }
    
    // Skip duplicates
    while (item === arr[pos]) {
      pos++;
    }
    
    if (pos !== cycleStart) {
      [item, arr[pos]] = [arr[pos], item];
      writes++;
    }
    
    // Rotate the rest of the cycle
    while (pos !== cycleStart) {
      pos = cycleStart;
      
      for (let i = cycleStart + 1; i < n; i++) {
        if (arr[i] < item) {
          pos++;
        }
      }
      
      while (item === arr[pos]) {
        pos++;
      }
      
      if (item !== arr[pos]) {
        [item, arr[pos]] = [arr[pos], item];
        writes++;
      }
    }
  }
  
  return { sortedArray: arr, writes };
}

// Find minimum number of swaps using cycle sort concept
function minSwapsToSort(arr) {
  const n = arr.length;
  const visited = new Array(n).fill(false);
  let swaps = 0;
  
  // Create array of pairs (value, original index)
  const pairs = arr.map((value, index) => ({ value, index }));
  
  // Sort by value
  pairs.sort((a, b) => a.value - b.value);
  
  for (let i = 0; i < n; i++) {
    if (visited[i] || pairs[i].index === i) {
      continue;
    }
    
    let cycleSize = 0;
    let j = i;
    
    while (!visited[j]) {
      visited[j] = true;
      j = pairs[j].index;
      cycleSize++;
    }
    
    if (cycleSize > 0) {
      swaps += cycleSize - 1;
    }
  }
  
  return swaps;
}

// Cycle sort for array with range [0, n-1]
function cycleSortRange(arr) {
  const n = arr.length;
  let writes = 0;
  
  for (let i = 0; i < n - 1; i++) {
    // Find correct position for arr[i]
    let pos = 0;
    for (let j = 0; j < n; j++) {
      if (arr[j] < arr[i]) {
        pos++;
      }
    }
    
    // Skip if already in correct position
    if (pos === i) {
      continue;
    }
    
    // Skip duplicates
    while (arr[pos] === arr[i]) {
      pos++;
    }
    
    // Swap
    if (pos !== i) {
      [arr[i], arr[pos]] = [arr[pos], arr[i]];
      writes++;
    }
    
    // Continue cycle
    while (pos !== i) {
      pos = 0;
      
      for (let j = 0; j < n; j++) {
        if (arr[j] < arr[pos]) {
          pos++;
        }
      }
      
      while (arr[pos] === arr[i]) {
        pos++;
      }
      
      if (arr[pos] !== arr[i]) {
        [arr[i], arr[pos]] = [arr[pos], arr[i]];
        writes++;
      }
    }
  }
  
  return { sortedArray: arr, writes };
}

// Test cases
const arr1 = [4, 3, 2, 1];
console.log(cycleSort([...arr1])); // { sortedArray: [1, 2, 3, 4], writes: 4 }

const arr2 = [1, 8, 3, 9, 10, 10, 2, 4];
console.log(cycleSortWithDuplicates([...arr2])); // { sortedArray: [1, 2, 3, 4, 8, 9, 10, 10], writes: 7 }

console.log(minSwapsToSort([4, 3, 2, 1])); // 2`}
        explanation="Cycle Sort minimizes writes by placing each element in its correct position in cycles. Time: O(n²), Space: O(1). Optimal for minimizing write operations, especially useful for flash memory."
      />

      <ProblemBlock
        title="30. Heap Sort"
        difficulty="Medium"
        description="Implement Heap Sort algorithm using binary heap data structure."
        solution={`// Heap Sort Algorithm

function heapSort(arr) {
  const n = arr.length;
  
  // Build max heap (rearrange array)
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }
  
  // Extract elements from heap one by one
  for (let i = n - 1; i > 0; i--) {
    // Move current root to end
    [arr[0], arr[i]] = [arr[i], arr[0]];
    
    // Call heapify on reduced heap
    heapify(arr, i, 0);
  }
  
  return arr;
}

// Heapify function to maintain heap property
function heapify(arr, n, i) {
  let largest = i; // Initialize largest as root
  let left = 2 * i + 1; // Left child
  let right = 2 * i + 2; // Right child
  
  // If left child is larger than root
  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }
  
  // If right child is larger than largest so far
  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }
  
  // If largest is not root
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    
    // Recursively heapify the affected sub-tree
    heapify(arr, n, largest);
  }
}

// Iterative heapify function
function heapifyIterative(arr, n, i) {
  while (true) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    
    if (left < n && arr[left] > arr[largest]) {
      largest = left;
    }
    
    if (right < n && arr[right] > arr[largest]) {
      largest = right;
    }
    
    if (largest === i) {
      break;
    }
    
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    i = largest;
  }
}

// Min heap sort (ascending order)
function minHeapSort(arr) {
  const n = arr.length;
  
  // Build min heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    minHeapify(arr, n, i);
  }
  
  // Extract elements
  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    minHeapify(arr, i, 0);
  }
  
  return arr;
}

function minHeapify(arr, n, i) {
  let smallest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  
  if (left < n && arr[left] < arr[smallest]) {
    smallest = left;
  }
  
  if (right < n && arr[right] < arr[smallest]) {
    smallest = right;
  }
  
  if (smallest !== i) {
    [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
    minHeapify(arr, n, smallest);
  }
}

// Heap sort with custom comparator
function heapSortCustom(arr, compare = (a, b) => a - b) {
  const n = arr.length;
  
  // Build heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapifyCustom(arr, n, i, compare);
  }
  
  // Extract elements
  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapifyCustom(arr, i, 0, compare);
  }
  
  return arr;
}

function heapifyCustom(arr, n, i, compare) {
  let target = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  
  if (left < n && compare(arr[left], arr[target]) > 0) {
    target = left;
  }
  
  if (right < n && compare(arr[right], arr[target]) > 0) {
    target = right;
  }
  
  if (target !== i) {
    [arr[i], arr[target]] = [arr[target], arr[i]];
    heapifyCustom(arr, n, target, compare);
  }
}

// Test cases
console.log(heapSort([64, 34, 25, 12, 22, 11, 90])); // [11, 12, 22, 25, 34, 64, 90]
console.log(minHeapSort([64, 34, 25, 12, 22, 11, 90])); // [11, 12, 22, 25, 34, 64, 90]
console.log(heapSortCustom([64, 34, 25, 12, 22, 11, 90], (a, b) => b - a)); // [90, 64, 34, 25, 22, 12, 11]`}
        explanation="Heap Sort: build max heap, then repeatedly extract maximum element. Time: O(n log n) in all cases, Space: O(1). Unstable but guarantees O(n log n) performance."
      />

      <ProblemBlock
        title="31. Counting Sort"
        difficulty="Easy"
        description="Implement Counting Sort algorithm for non-negative integers with limited range."
        solution={`// Counting Sort Algorithm

function countingSort(arr) {
  if (arr.length === 0) return arr;
  
  // Find maximum element
  const max = Math.max(...arr);
  
  // Create count array
  const count = new Array(max + 1).fill(0);
  
  // Count occurrences of each element
  for (const num of arr) {
    count[num]++;
  }
  
  // Modify count array to store positions
  for (let i = 1; i <= max; i++) {
    count[i] += count[i - 1];
  }
  
  // Build output array
  const output = new Array(arr.length);
  
  for (let i = arr.length - 1; i >= 0; i--) {
    output[count[arr[i]] - 1] = arr[i];
    count[arr[i]]--;
  }
  
  return output;
}

// Simplified counting sort (modifies original array)
function countingSortInPlace(arr) {
  if (arr.length === 0) return arr;
  
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const range = max - min + 1;
  
  const count = new Array(range).fill(0);
  
  // Count occurrences
  for (const num of arr) {
    count[num - min]++;
  }
  
  // Reconstruct array
  let index = 0;
  for (let i = 0; i < range; i++) {
    while (count[i] > 0) {
      arr[index++] = i + min;
      count[i]--;
    }
  }
  
  return arr;
}

// Counting sort for negative numbers
function countingSortNegative(arr) {
  if (arr.length === 0) return arr;
  
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const range = max - min + 1;
  
  const count = new Array(range).fill(0);
  
  // Count occurrences
  for (const num of arr) {
    count[num - min]++;
  }
  
  // Build output array
  const output = new Array(arr.length);
  let index = 0;
  
  for (let i = 0; i < range; i++) {
    while (count[i] > 0) {
      output[index++] = i + min;
      count[i]--;
    }
  }
  
  return output;
}

// Counting sort with frequency count
function countingSortWithFrequency(arr) {
  if (arr.length === 0) return { sortedArray: [], frequency: {} };
  
  const max = Math.max(...arr);
  const frequency = {};
  
  // Count frequencies
  for (const num of arr) {
    frequency[num] = (frequency[num] || 0) + 1;
  }
  
  // Build sorted array
  const sortedArray = [];
  for (let i = 0; i <= max; i++) {
    if (frequency[i]) {
      for (let j = 0; j < frequency[i]; j++) {
        sortedArray.push(i);
      }
    }
  }
  
  return { sortedArray, frequency };
}

// Radix sort using counting sort as subroutine
function radixSort(arr) {
  const max = Math.max(...arr);
  
  // Do counting sort for every digit
  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    countingSortByDigit(arr, exp);
  }
  
  return arr;
}

function countingSortByDigit(arr, exp) {
  const n = arr.length;
  const output = new Array(n);
  const count = new Array(10).fill(0);
  
  // Count occurrences of each digit
  for (let i = 0; i < n; i++) {
    count[Math.floor(arr[i] / exp) % 10]++;
  }
  
  // Modify count array
  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }
  
  // Build output array
  for (let i = n - 1; i >= 0; i--) {
    const digit = Math.floor(arr[i] / exp) % 10;
    output[count[digit] - 1] = arr[i];
    count[digit]--;
  }
  
  // Copy output back to original array
  for (let i = 0; i < n; i++) {
    arr[i] = output[i];
  }
}

// Test cases
console.log(countingSort([4, 2, 2, 8, 3, 3, 1])); // [1, 2, 2, 3, 3, 4, 8]
console.log(countingSortNegative([-5, -10, 0, -3, 8, 5, -1])); // [-10, -5, -3, -1, 0, 5, 8]
console.log(countingSortWithFrequency([4, 2, 2, 8, 3, 3, 1])); // { sortedArray: [1, 2, 2, 3, 3, 4, 8], frequency: {...} }`}
        explanation="Counting Sort: count frequency of each element, then reconstruct sorted array. Time: O(n+k) where k is range of input, Space: O(k). Only works for non-negative integers with limited range."
      />
    </div>
  );
}

// Special Sorting Section (from fifth image)
function SpecialSortingSection() {
  return (
    <div className="space-y-8">
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Special Sorting Algorithms
        </h2>
        <p className="text-gray-300 mb-6">
          Non-comparison based sorting algorithms for specific data types.
        </p>
      </div>

      <ProblemBlock
        title="32. Radix Sort"
        difficulty="Medium"
        description="Implement Radix Sort algorithm - a non-comparison based sorting algorithm that sorts numbers digit by digit."
        solution={`// Radix Sort Algorithm

function radixSort(arr) {
  if (arr.length === 0) return arr;
  
  // Find maximum number to determine number of digits
  const max = Math.max(...arr);
  
  // Do counting sort for every digit
  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    countingSortByDigit(arr, exp);
  }
  
  return arr;
}

function countingSortByDigit(arr, exp) {
  const n = arr.length;
  const output = new Array(n);
  const count = new Array(10).fill(0);
  
  // Count occurrences of each digit
  for (let i = 0; i < n; i++) {
    count[Math.floor(arr[i] / exp) % 10]++;
  }
  
  // Modify count array to store positions
  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }
  
  // Build output array
  for (let i = n - 1; i >= 0; i--) {
    const digit = Math.floor(arr[i] / exp) % 10;
    output[count[digit] - 1] = arr[i];
    count[digit]--;
  }
  
  // Copy output back to original array
  for (let i = 0; i < n; i++) {
    arr[i] = output[i];
  }
}

// Radix sort for negative numbers
function radixSortNegative(arr) {
  if (arr.length === 0) return arr;
  
  // Separate positive and negative numbers
  const positive = arr.filter(x => x >= 0);
  const negative = arr.filter(x => x < 0).map(x => -x); // Make negative numbers positive
  
  // Sort both arrays
  radixSort(positive);
  radixSort(negative);
  
  // Combine: negative numbers (reversed) + positive numbers
  const result = [];
  
  // Add negative numbers in reverse order (largest absolute value first)
  for (let i = negative.length - 1; i >= 0; i--) {
    result.push(-negative[i]);
  }
  
  // Add positive numbers
  result.push(...positive);
  
  return result;
}

// Radix sort for strings
function radixSortStrings(arr) {
  if (arr.length === 0) return arr;
  
  // Find maximum length
  const maxLength = Math.max(...arr.map(str => str.length));
  
  // Pad strings with null characters to make them same length
  const padded = arr.map(str => str.padEnd(maxLength, '\\0'));
  
  // Sort from least significant character to most significant
  for (let pos = maxLength - 1; pos >= 0; pos--) {
    countingSortByChar(padded, pos);
  }
  
  // Remove padding and return
  return padded.map(str => str.replace(/\\0/g, ''));
}

function countingSortByChar(arr, pos) {
  const n = arr.length;
  const output = new Array(n);
  const count = new Array(256).fill(0); // ASCII range
  
  // Count occurrences of each character at position pos
  for (let i = 0; i < n; i++) {
    const charCode = arr[i].charCodeAt(pos);
    count[charCode]++;
  }
  
  // Modify count array
  for (let i = 1; i < 256; i++) {
    count[i] += count[i - 1];
  }
  
  // Build output array
  for (let i = n - 1; i >= 0; i--) {
    const charCode = arr[i].charCodeAt(pos);
    output[count[charCode] - 1] = arr[i];
    count[charCode]--;
  }
  
  // Copy output back to original array
  for (let i = 0; i < n; i++) {
    arr[i] = output[i];
  }
}

// MSD (Most Significant Digit) Radix Sort
function msdRadixSort(arr) {
  if (arr.length === 0) return arr;
  
  const max = Math.max(...arr);
  const maxDigits = Math.floor(Math.log10(max)) + 1;
  
  return msdRadixSortHelper(arr, 0, arr.length - 1, maxDigits - 1);
}

function msdRadixSortHelper(arr, left, right, digitPos) {
  if (left >= right || digitPos < 0) return;
  
  // Partition array by digit at digitPos
  const partition = partitionByDigit(arr, left, right, digitPos);
  
  // Recursively sort each partition
  msdRadixSortHelper(arr, left, partition - 1, digitPos - 1);
  msdRadixSortHelper(arr, partition, right, digitPos - 1);
}

function partitionByDigit(arr, left, right, digitPos) {
  const digit = Math.floor(arr[right] / Math.pow(10, digitPos)) % 10;
  let i = left - 1;
  
  for (let j = left; j < right; j++) {
    const currentDigit = Math.floor(arr[j] / Math.pow(10, digitPos)) % 10;
    if (currentDigit < digit) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  
  [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
  return i + 1;
}

// Test cases
console.log(radixSort([170, 45, 75, 90, 2, 802, 24, 66])); // [2, 24, 45, 66, 75, 90, 170, 802]
console.log(radixSortNegative([-5, -10, 0, -3, 8, 5, -1])); // [-10, -5, -3, -1, 0, 5, 8]
console.log(radixSortStrings(['apple', 'banana', 'cherry', 'date'])); // ['apple', 'banana', 'cherry', 'date']`}
        explanation="Radix Sort sorts numbers digit by digit from least significant to most significant. Uses counting sort as subroutine for each digit. Time: O(d(n+k)) where d is number of digits, Space: O(n+k)."
      />

      <ProblemBlock
        title="33. Bucket Sort"
        difficulty="Medium"
        description="Implement Bucket Sort algorithm - a distribution-based sorting algorithm that works well for uniformly distributed data."
        solution={`// Bucket Sort Algorithm

function bucketSort(arr, bucketCount = 10) {
  if (arr.length === 0) return arr;
  
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const range = max - min;
  
  // Create buckets
  const buckets = Array.from({ length: bucketCount }, () => []);
  
  // Distribute elements into buckets
  for (const num of arr) {
    const bucketIndex = Math.floor(((num - min) / range) * (bucketCount - 1));
    buckets[bucketIndex].push(num);
  }
  
  // Sort individual buckets (using insertion sort)
  for (const bucket of buckets) {
    insertionSort(bucket);
  }
  
  // Concatenate all buckets
  const result = [];
  for (const bucket of buckets) {
    result.push(...bucket);
  }
  
  return result;
}

// Bucket sort for floating point numbers in range [0, 1)
function bucketSortFloat(arr) {
  if (arr.length === 0) return arr;
  
  const n = arr.length;
  const buckets = Array.from({ length: n }, () => []);
  
  // Distribute elements into buckets
  for (const num of arr) {
    const bucketIndex = Math.floor(n * num);
    buckets[bucketIndex].push(num);
  }
  
  // Sort individual buckets
  for (const bucket of buckets) {
    insertionSort(bucket);
  }
  
  // Concatenate all buckets
  const result = [];
  for (const bucket of buckets) {
    result.push(...bucket);
  }
  
  return result;
}

// Bucket sort with custom hash function
function bucketSortCustom(arr, hashFunction, bucketCount = 10) {
  if (arr.length === 0) return arr;
  
  const buckets = Array.from({ length: bucketCount }, () => []);
  
  // Distribute elements using custom hash function
  for (const item of arr) {
    const bucketIndex = hashFunction(item) % bucketCount;
    buckets[bucketIndex].push(item);
  }
  
  // Sort individual buckets
  for (const bucket of buckets) {
    bucket.sort((a, b) => a - b);
  }
  
  // Concatenate all buckets
  const result = [];
  for (const bucket of buckets) {
    result.push(...bucket);
  }
  
  return result;
}

// Bucket sort for strings (by first character)
function bucketSortStrings(arr) {
  if (arr.length === 0) return arr;
  
  const buckets = Array.from({ length: 26 }, () => []); // 26 letters
  
  // Distribute strings into buckets based on first character
  for (const str of arr) {
    const bucketIndex = str.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0);
    if (bucketIndex >= 0 && bucketIndex < 26) {
      buckets[bucketIndex].push(str);
    }
  }
  
  // Sort individual buckets
  for (const bucket of buckets) {
    bucket.sort();
  }
  
  // Concatenate all buckets
  const result = [];
  for (const bucket of buckets) {
    result.push(...bucket);
  }
  
  return result;
}

// Bucket sort with variable bucket sizes
function bucketSortVariable(arr) {
  if (arr.length === 0) return arr;
  
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const range = max - min;
  const bucketCount = Math.floor(Math.sqrt(arr.length));
  
  if (bucketCount === 0) {
    // If array is too small, use insertion sort
    return insertionSort([...arr]);
  }
  
  const bucketSize = range / bucketCount;
  const buckets = Array.from({ length: bucketCount }, () => []);
  
  // Distribute elements into buckets
  for (const num of arr) {
    const bucketIndex = Math.min(Math.floor((num - min) / bucketSize), bucketCount - 1);
    buckets[bucketIndex].push(num);
  }
  
  // Sort individual buckets
  for (const bucket of buckets) {
    insertionSort(bucket);
  }
  
  // Concatenate all buckets
  const result = [];
  for (const bucket of buckets) {
    result.push(...bucket);
  }
  
  return result;
}

// Helper function: Insertion sort
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    
    arr[j + 1] = key;
  }
  
  return arr;
}

// Bucket sort with performance analysis
function bucketSortWithAnalysis(arr, bucketCount = 10) {
  const startTime = performance.now();
  
  const sorted = bucketSort(arr, bucketCount);
  
  const endTime = performance.now();
  
  return {
    sortedArray: sorted,
    executionTime: endTime - startTime,
    bucketCount,
    comparisons: arr.length * Math.log2(arr.length) // Approximate
  };
}

// Test cases
console.log(bucketSort([0.897, 0.565, 0.656, 0.1234, 0.665, 0.3434])); // [0.1234, 0.3434, 0.565, 0.656, 0.665, 0.897]
console.log(bucketSortFloat([0.897, 0.565, 0.656, 0.1234, 0.665, 0.3434])); // [0.1234, 0.3434, 0.565, 0.656, 0.665, 0.897]
console.log(bucketSortStrings(['apple', 'banana', 'cherry', 'date', 'elderberry'])); // ['apple', 'banana', 'cherry', 'date', 'elderberry']`}
        explanation="Bucket Sort distributes elements into buckets based on their values, sorts each bucket individually, then concatenates results. Time: O(n+k) average case, O(n²) worst case, Space: O(n+k)."
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
        className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors mb-4"
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
