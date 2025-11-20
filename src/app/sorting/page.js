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
            code={{
              JavaScript: `// Time & Space Complexity Comparison

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
// - Integer data with small range: Counting/Radix Sort`,
              Java: `// Time & Space Complexity Comparison

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
// - Integer data with small range: Counting/Radix Sort`,
            }}
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
        solutions={{
          JavaScript: `function bubbleSort(arr) {
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
console.log(bubbleSort([5, 2, 8, 1, 9]));              // [1, 2, 5, 8, 9]`,
          Java: `import java.util.Arrays;

public class BubbleSort {
    public static void bubbleSort(int[] arr) {
        int n = arr.length;
        
        // Outer loop for passes
        for (int i = 0; i < n - 1; i++) {
            boolean swapped = false;
            
            // Inner loop for comparisons
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    // Swap elements
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    swapped = true;
                }
            }
            
            // If no swapping occurred, array is sorted
            if (!swapped) break;
        }
    }
    
    // Optimized version with early termination
    public static void bubbleSortOptimized(int[] arr) {
        int n = arr.length;
        boolean swapped = true;
        
        while (swapped) {
            swapped = false;
            
            for (int i = 0; i < n - 1; i++) {
                if (arr[i] > arr[i + 1]) {
                    int temp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = temp;
                    swapped = true;
                }
            }
        }
    }
    
    // Recursive version
    public static void bubbleSortRecursive(int[] arr, int n) {
        if (n <= 1) return;
        
        // One pass of bubble sort
        for (int i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                int temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
        
        // Recursively sort remaining elements
        bubbleSortRecursive(arr, n - 1);
    }
    
    public static void bubbleSortRecursive(int[] arr) {
        bubbleSortRecursive(arr, arr.length);
    }
    
    public static void main(String[] args) {
        int[] arr1 = {64, 34, 25, 12, 22, 11, 90};
        bubbleSort(arr1);
        System.out.println(Arrays.toString(arr1)); // [11, 12, 22, 25, 34, 64, 90]
        
        int[] arr2 = {5, 2, 8, 1, 9};
        bubbleSort(arr2);
        System.out.println(Arrays.toString(arr2)); // [1, 2, 5, 8, 9]
    }
}`,
        }}
        explanation="Bubble Sort works by repeatedly stepping through the list, comparing adjacent elements and swapping them if they are in wrong order. Time: O(n²), Space: O(1), Stable: Yes."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Sort array by repeatedly swapping adjacent elements",
                "Compare adjacent pairs and swap if out of order",
                "Largest elements 'bubble' to the end",
                "Can optimize with early termination",
                "Input: Unsorted array, Output: Sorted array",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: ["bubble", "swap", "adjacent", "comparison", "pass"],
              details: [
                "Keywords: 'bubble', 'swap adjacent' → Comparison-based sorting",
                "Pattern: Multiple passes → Each pass moves largest to end",
                "This is a 'comparison-based sorting' problem",
                "Similar to: Selection sort, insertion sort",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Array: Input is already an array, sort in-place",
                "Variables: swapped flag for optimization",
                "No additional data structures needed",
                "O(1) space solution possible",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Bubble Sort",
                "  - Outer loop: n-1 passes",
                "  - Inner loop: Compare adjacent elements",
                "  - Swap if out of order",
                "  - Early termination if no swaps (optimized)",
                "  - Time: O(n²) worst/average, O(n) best (optimized)",
                "  - Space: O(1), Stable: Yes",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • Empty array: Return as is",
                "  • Single element: Return as is",
                "  • Already sorted: O(n) with optimization",
                "",
                "Optimization:",
                "  • Early termination: Break if no swaps",
                "  • Reduce inner loop: n-i-1 comparisons per pass",
                "  • Best case: O(n) when sorted",
                "",
                "Implementation:",
                "  1. Outer loop: i from 0 to n-2",
                "  2. swapped = false",
                "  3. Inner loop: j from 0 to n-i-2:",
                "     - If arr[j] > arr[j+1]: swap, swapped = true",
                "  4. If !swapped: break (early termination)",
                "  5. Return arr",
              ],
            },
          ],
          pattern: "Comparison-Based Sorting (Multiple Passes)",
          complexity: {
            time: "O(n²) worst/average, O(n) best (optimized)",
            space: "O(1) - In-place sorting",
          },
        }}
      />

      <ProblemBlock
        title="2. Selection Sort"
        difficulty="Easy"
        description="Sort an array by repeatedly finding the minimum element and placing it at the beginning."
        solutions={{
          JavaScript: `function selectionSort(arr) {
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
console.log(selectionSort([5, 2, 8, 1, 9]));      // [1, 2, 5, 8, 9]`,
          Java: `import java.util.Arrays;

public class SelectionSort {
    public static void selectionSort(int[] arr) {
        int n = arr.length;
        
        // Move boundary of unsorted subarray
        for (int i = 0; i < n - 1; i++) {
            int minIndex = i;
            
            // Find minimum element in unsorted array
            for (int j = i + 1; j < n; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }
            
            // Swap the minimum element with first element
            if (minIndex != i) {
                int temp = arr[i];
                arr[i] = arr[minIndex];
                arr[minIndex] = temp;
            }
        }
    }
    
    // Selection sort with separate min/max selection
    public static void selectionSortMinMax(int[] arr) {
        int left = 0;
        int right = arr.length - 1;
        
        while (left < right) {
            int minIndex = left;
            int maxIndex = right;
            
            // Find minimum and maximum in current range
            for (int i = left; i <= right; i++) {
                if (arr[i] < arr[minIndex]) minIndex = i;
                if (arr[i] > arr[maxIndex]) maxIndex = i;
            }
            
            // Place minimum at left and maximum at right
            int temp = arr[left];
            arr[left] = arr[minIndex];
            arr[minIndex] = temp;
            
            // If max was at left, it's now at minIndex
            if (maxIndex == left) maxIndex = minIndex;
            temp = arr[right];
            arr[right] = arr[maxIndex];
            arr[maxIndex] = temp;
            
            left++;
            right--;
        }
    }
    
    public static void main(String[] args) {
        int[] arr1 = {64, 25, 12, 22, 11};
        selectionSort(arr1);
        System.out.println(Arrays.toString(arr1)); // [11, 12, 22, 25, 64]
        
        int[] arr2 = {5, 2, 8, 1, 9};
        selectionSort(arr2);
        System.out.println(Arrays.toString(arr2)); // [1, 2, 5, 8, 9]
    }
}`,
        }}
        explanation="Selection Sort divides the array into sorted and unsorted parts, repeatedly selecting the minimum element from unsorted part. Time: O(n²), Space: O(1), Stable: No."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Sort array by repeatedly finding minimum and placing at beginning",
                "Divide array into sorted and unsorted parts",
                "Select minimum from unsorted, swap with first unsorted",
                "Input: Unsorted array, Output: Sorted array",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: ["selection", "minimum", "swap", "unsorted", "sorted"],
              details: [
                "Keywords: 'selection', 'minimum' → Find and swap minimum",
                "Pattern: Divide and select → Separate sorted/unsorted regions",
                "This is a 'selection-based sorting' problem",
                "Similar to: Bubble sort, insertion sort",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Array: Input is already an array, sort in-place",
                "Variables: minIndex to track minimum",
                "No additional data structures needed",
                "O(1) space solution possible",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Selection Sort",
                "  - Outer loop: n-1 iterations",
                "  - Inner loop: Find minimum in unsorted part",
                "  - Swap minimum with first unsorted element",
                "  - Time: O(n²) always (no best case optimization)",
                "  - Space: O(1), Stable: No",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • Empty array: Return as is",
                "  • Single element: Return as is",
                "  • Already sorted: Still O(n²)",
                "",
                "Optimization:",
                "  • Can find min and max simultaneously (reduce passes)",
                "  • Always O(n²) - no early termination",
                "  • Fewer swaps than bubble sort",
                "",
                "Implementation:",
                "  1. Outer loop: i from 0 to n-2",
                "  2. minIndex = i",
                "  3. Inner loop: j from i+1 to n-1:",
                "     - If arr[j] < arr[minIndex]: minIndex = j",
                "  4. Swap arr[i] and arr[minIndex]",
                "  5. Return arr",
              ],
            },
          ],
          pattern: "Selection-Based Sorting",
          complexity: {
            time: "O(n²) - Always requires n² comparisons",
            space: "O(1) - In-place sorting",
          },
        }}
      />

      <ProblemBlock
        title="3. Insertion Sort"
        difficulty="Easy"
        description="Sort an array by building a sorted portion one element at a time."
        solutions={{
          JavaScript: `function insertionSort(arr) {
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
console.log(insertionSort([64, 34, 25, 12, 22, 11, 90])); // [11, 12, 22, 25, 34, 64, 90]`,
          Java: `import java.util.Arrays;

public class InsertionSort {
    public static void insertionSort(int[] arr) {
        int n = arr.length;
        
        // Start from second element (index 1)
        for (int i = 1; i < n; i++) {
            int key = arr[i];
            int j = i - 1;
            
            // Move elements greater than key one position ahead
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j--;
            }
            
            // Insert key at correct position
            arr[j + 1] = key;
        }
    }
    
    // Binary insertion sort (optimized)
    public static void binaryInsertionSort(int[] arr) {
        int n = arr.length;
        
        for (int i = 1; i < n; i++) {
            int key = arr[i];
            int left = 0;
            int right = i - 1;
            
            // Find position to insert using binary search
            while (left <= right) {
                int mid = left + (right - left) / 2;
                if (arr[mid] < key) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
            
            // Shift elements and insert
            for (int j = i; j > left; j--) {
                arr[j] = arr[j - 1];
            }
            arr[left] = key;
        }
    }
    
    // Recursive insertion sort
    public static void insertionSortRecursive(int[] arr, int n) {
        if (n <= 1) return;
        
        // Sort first n-1 elements
        insertionSortRecursive(arr, n - 1);
        
        // Insert last element at correct position
        int key = arr[n - 1];
        int j = n - 2;
        
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        
        arr[j + 1] = key;
    }
    
    public static void insertionSortRecursive(int[] arr) {
        insertionSortRecursive(arr, arr.length);
    }
    
    public static void main(String[] args) {
        int[] arr1 = {12, 11, 13, 5, 6};
        insertionSort(arr1);
        System.out.println(Arrays.toString(arr1)); // [5, 6, 11, 12, 13]
        
        int[] arr2 = {64, 34, 25, 12, 22, 11, 90};
        insertionSort(arr2);
        System.out.println(Arrays.toString(arr2)); // [11, 12, 22, 25, 34, 64, 90]
    }
}`,
        }}
        explanation="Insertion Sort builds the sorted array one element at a time, placing each new element in its correct position. Time: O(n²), Space: O(1), Stable: Yes, Adaptive: Yes."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Sort array by building sorted portion incrementally",
                "Start with first element (already sorted)",
                "Insert each subsequent element in correct position",
                "Good for small arrays or nearly sorted arrays",
                "Input: Unsorted array, Output: Sorted array",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: ["insertion", "sorted portion", "insert", "shift"],
              details: [
                "Keywords: 'insertion', 'sorted portion' → Build sorted array incrementally",
                "Pattern: Incremental building → Insert each element in sorted position",
                "This is an 'incremental sorting' problem",
                "Similar to: Bubble sort, selection sort",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Array: Input is already an array, sort in-place",
                "Variables: key to store current element",
                "No additional data structures needed",
                "O(1) space solution possible",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Insertion Sort",
                "  - Start from second element (index 1)",
                "  - For each element, shift larger elements right",
                "  - Insert element at correct position",
                "  - Time: O(n²) worst, O(n) best (nearly sorted)",
                "  - Space: O(1), Stable: Yes",
                "",
                "Optimization: Binary search to find insertion point (still O(n²) due to shifts)",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • Empty array: Return as is",
                "  • Single element: Return as is",
                "  • Already sorted: O(n) - best case",
                "",
                "Optimization:",
                "  • Best case: O(n) when nearly sorted",
                "  • Binary search: O(n log n) comparisons, but O(n²) shifts",
                "  • Efficient for small arrays",
                "",
                "Implementation:",
                "  1. Loop i from 1 to n-1:",
                "     - key = arr[i]",
                "     - j = i - 1",
                "     - While j >= 0 and arr[j] > key:",
                "       * arr[j+1] = arr[j], j--",
                "     - arr[j+1] = key",
                "  2. Return arr",
              ],
            },
          ],
          pattern: "Incremental Sorting (Insertion-Based)",
          complexity: {
            time: "O(n²) worst, O(n) best (nearly sorted)",
            space: "O(1) - In-place sorting",
          },
        }}
      />

      <ProblemBlock
        title="4. Merge Sort Introduction"
        difficulty="Medium"
        description="Understand the divide and conquer approach used in Merge Sort."
        solutions={{
          JavaScript: `// Merge Sort follows Divide and Conquer paradigm:
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
console.log(mergeSort([5, 2, 8, 1, 9]));            // [1, 2, 5, 8, 9]`,
          Java: `import java.util.Arrays;

public class MergeSort {
    // Merge Sort follows Divide and Conquer paradigm:
    // 1. Divide: Break the array into two halves
    // 2. Conquer: Recursively sort both halves
    // 3. Combine: Merge the sorted halves
    
    public static void mergeSort(int[] arr) {
        if (arr.length <= 1) {
            return; // Base case: single element is already sorted
        }
        
        // Divide: Split array into two halves
        int mid = arr.length / 2;
        int[] left = Arrays.copyOfRange(arr, 0, mid);
        int[] right = Arrays.copyOfRange(arr, mid, arr.length);
        
        // Conquer: Recursively sort both halves
        mergeSort(left);
        mergeSort(right);
        
        // Combine: Merge sorted halves
        merge(arr, left, right);
    }
    
    // Helper method to merge two sorted arrays
    private static void merge(int[] arr, int[] left, int[] right) {
        int i = 0, j = 0, k = 0;
        
        // Compare elements from both arrays
        while (i < left.length && j < right.length) {
            if (left[i] <= right[j]) {
                arr[k++] = left[i++];
            } else {
                arr[k++] = right[j++];
            }
        }
        
        // Copy remaining elements
        while (i < left.length) arr[k++] = left[i++];
        while (j < right.length) arr[k++] = right[j++];
    }
    
    // In-place merge sort (more space efficient)
    public static void mergeSortInPlace(int[] arr, int left, int right) {
        if (left < right) {
            int mid = left + (right - left) / 2;
            
            // Recursively sort both halves
            mergeSortInPlace(arr, left, mid);
            mergeSortInPlace(arr, mid + 1, right);
            
            // Merge the sorted halves
            mergeInPlace(arr, left, mid, right);
        }
    }
    
    public static void mergeSortInPlace(int[] arr) {
        mergeSortInPlace(arr, 0, arr.length - 1);
    }
    
    // Helper method for in-place merge
    private static void mergeInPlace(int[] arr, int left, int mid, int right) {
        int leftSize = mid - left + 1;
        int rightSize = right - mid;
        
        int[] leftArr = new int[leftSize];
        int[] rightArr = new int[rightSize];
        
        // Copy data to temporary arrays
        for (int i = 0; i < leftSize; i++) leftArr[i] = arr[left + i];
        for (int j = 0; j < rightSize; j++) rightArr[j] = arr[mid + 1 + j];
        
        // Merge the temporary arrays
        int i = 0, j = 0, k = left;
        while (i < leftSize && j < rightSize) {
            if (leftArr[i] <= rightArr[j]) {
                arr[k++] = leftArr[i++];
            } else {
                arr[k++] = rightArr[j++];
            }
        }
        
        // Copy remaining elements
        while (i < leftSize) arr[k++] = leftArr[i++];
        while (j < rightSize) arr[k++] = rightArr[j++];
    }
    
    // Key characteristics of Merge Sort:
    // - Time Complexity: O(n log n) in all cases
    // - Space Complexity: O(n) for auxiliary array
    // - Stable: Yes (preserves relative order)
    // - Adaptive: No (performance doesn't depend on input)
    // - Comparison-based: Yes
    
    public static void main(String[] args) {
        int[] arr1 = {38, 27, 43, 3, 9, 82, 10};
        mergeSort(arr1);
        System.out.println(Arrays.toString(arr1)); // [3, 9, 10, 27, 38, 43, 82]
        
        int[] arr2 = {5, 2, 8, 1, 9};
        mergeSort(arr2);
        System.out.println(Arrays.toString(arr2)); // [1, 2, 5, 8, 9]
    }
}`,
        }}
        explanation="Merge Sort uses divide and conquer: recursively divide array into halves, sort each half, then merge them back. Time: O(n log n), Space: O(n), Stable: Yes."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Sort array using divide and conquer approach",
                "Divide array into two halves recursively",
                "Conquer by sorting each half",
                "Combine by merging sorted halves",
                "Input: Unsorted array, Output: Sorted array",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: [
                "merge sort",
                "divide",
                "conquer",
                "recursive",
                "merge",
              ],
              details: [
                "Keywords: 'merge sort', 'divide and conquer' → Recursive sorting",
                "Pattern: Divide and conquer → Split, sort, merge",
                "This is a 'divide and conquer sorting' problem",
                "Similar to: Quick sort, binary search",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Array: Input is already an array",
                "Temporary array: For merging (O(n) space)",
                "Recursive call stack: O(log n) space",
                "Total: O(n) space",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Merge Sort",
                "  - Divide: Split array into two halves",
                "  - Conquer: Recursively sort both halves",
                "  - Combine: Merge sorted halves",
                "  - Time: O(n log n) always",
                "  - Space: O(n), Stable: Yes",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • Empty array: Return as is",
                "  • Single element: Return as is",
                "  • Already sorted: Still O(n log n)",
                "",
                "Optimization:",
                "  • Consistent O(n log n) time",
                "  • Stable sort (preserves order of equal elements)",
                "  • Can optimize space with in-place merge (complex)",
                "",
                "Implementation:",
                "  1. If array length <= 1: return",
                "  2. mid = n / 2",
                "  3. left = mergeSort(arr[0..mid])",
                "  4. right = mergeSort(arr[mid..n])",
                "  5. return merge(left, right)",
              ],
            },
          ],
          pattern: "Divide and Conquer Sorting",
          complexity: {
            time: "O(n log n) - Always requires n log n operations",
            space: "O(n) - Temporary array for merging",
          },
        }}
      />

      <ProblemBlock
        title="5. Merge Two Sorted Arrays"
        difficulty="Easy"
        description="Merge two sorted arrays into a single sorted array efficiently."
        solutions={{
          JavaScript: `function mergeTwoSortedArrays(arr1, arr2) {
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
console.log(mergeTwoSortedArrays([1, 2, 3], [4, 5, 6]));       // [1, 2, 3, 4, 5, 6]`,
          Java: `import java.util.Arrays;

public class MergeTwoSortedArrays {
    public static int[] mergeTwoSortedArrays(int[] arr1, int[] arr2) {
        int[] merged = new int[arr1.length + arr2.length];
        int i = 0, j = 0, k = 0;
        
        // Compare elements from both arrays
        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] <= arr2[j]) {
                merged[k++] = arr1[i++];
            } else {
                merged[k++] = arr2[j++];
            }
        }
        
        // Add remaining elements from arr1
        while (i < arr1.length) {
            merged[k++] = arr1[i++];
        }
        
        // Add remaining elements from arr2
        while (j < arr2.length) {
            merged[k++] = arr2[j++];
        }
        
        return merged;
    }
    
    // Merge function used in Merge Sort
    public static int[] merge(int[] left, int[] right) {
        int[] result = new int[left.length + right.length];
        int leftIndex = 0;
        int rightIndex = 0;
        int resultIndex = 0;
        
        // Compare and merge elements
        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] <= right[rightIndex]) {
                result[resultIndex++] = left[leftIndex++];
            } else {
                result[resultIndex++] = right[rightIndex++];
            }
        }
        
        // Add remaining elements
        while (leftIndex < left.length) {
            result[resultIndex++] = left[leftIndex++];
        }
        while (rightIndex < right.length) {
            result[resultIndex++] = right[rightIndex++];
        }
        
        return result;
    }
    
    // In-place merge (more space efficient)
    public static void mergeInPlace(int[] arr, int left, int mid, int right) {
        int leftSize = mid - left + 1;
        int rightSize = right - mid;
        
        int[] leftArr = new int[leftSize];
        int[] rightArr = new int[rightSize];
        
        // Copy data to temporary arrays
        for (int i = 0; i < leftSize; i++) {
            leftArr[i] = arr[left + i];
        }
        for (int j = 0; j < rightSize; j++) {
            rightArr[j] = arr[mid + 1 + j];
        }
        
        // Merge elements back into original array
        int i = 0, j = 0, k = left;
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
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(mergeTwoSortedArrays(new int[]{1, 3, 5, 7}, new int[]{2, 4, 6, 8}))); // [1, 2, 3, 4, 5, 6, 7, 8]
        System.out.println(Arrays.toString(mergeTwoSortedArrays(new int[]{1, 2, 3}, new int[]{4, 5, 6})));       // [1, 2, 3, 4, 5, 6]
    }
}`,
        }}
        explanation="Two-pointer technique: compare elements from both arrays and add smaller one to result. Time: O(m+n), Space: O(m+n), where m and n are array lengths."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Merge two sorted arrays into one sorted array",
                "Both input arrays are already sorted",
                "Result should be sorted",
                "Can have duplicates? Handle appropriately",
                "Input: Two sorted arrays, Output: Merged sorted array",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: ["merge", "sorted arrays", "two pointers", "combine"],
              details: [
                "Keywords: 'merge', 'sorted arrays' → Two pointers technique",
                "Pattern: Two pointers → Compare and merge from both arrays",
                "This is a 'two pointers merging' problem",
                "Similar to: Merge k sorted arrays, merge intervals",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Two arrays: Input arrays",
                "Result array: Store merged result",
                "Two pointers: i for arr1, j for arr2",
                "O(m+n) space for result array",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Two pointers merging",
                "  - Compare arr1[i] and arr2[j]",
                "  - Add smaller to result, advance pointer",
                "  - Add remaining elements from both arrays",
                "  - Time: O(m+n), Space: O(m+n)",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • One array empty: Return other array",
                "  • Both empty: Return empty array",
                "  • Duplicates: Handle with <= comparison",
                "",
                "Optimization:",
                "  • Single pass: O(m+n) time",
                "  • Linear space: O(m+n)",
                "  • Efficient two-pointer comparison",
                "",
                "Implementation:",
                "  1. i = 0, j = 0, result = []",
                "  2. While i < arr1.length and j < arr2.length:",
                "     - If arr1[i] <= arr2[j]: add arr1[i++], else add arr2[j++]",
                "  3. Add remaining from arr1",
                "  4. Add remaining from arr2",
                "  5. Return result",
              ],
            },
          ],
          pattern: "Two Pointers Merging",
          complexity: {
            time: "O(m+n) - Single pass through both arrays",
            space: "O(m+n) - Result array",
          },
        }}
      />

      <ProblemBlock
        title="6. Merge Function of Merge Sort"
        difficulty="Medium"
        description="Implement the core merge function that combines two sorted subarrays."
        solutions={{
          JavaScript: `function mergeFunction(arr, left, mid, right) {
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

testMergeFunction();`,
          Java: `public class MergeFunction {
    // Merge function to combine two sorted subarrays
    public static void mergeFunction(int[] arr, int left, int mid, int right) {
        // Create temporary arrays for left and right subarrays
        int leftSize = mid - left + 1;
        int rightSize = right - mid;
        
        int[] leftArr = new int[leftSize];
        int[] rightArr = new int[rightSize];
        
        // Copy data to temporary arrays
        for (int i = 0; i < leftSize; i++) {
            leftArr[i] = arr[left + i];
        }
        for (int j = 0; j < rightSize; j++) {
            rightArr[j] = arr[mid + 1 + j];
        }
        
        // Merge the temporary arrays back into arr[left..right]
        int i = 0, j = 0, k = left;
        
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
    
    // Alternative implementation using array copy
    public static void mergeFunctionSlice(int[] arr, int left, int mid, int right) {
        int leftSize = mid - left + 1;
        int rightSize = right - mid;
        
        int[] leftArr = new int[leftSize];
        int[] rightArr = new int[rightSize];
        
        // Copy subarrays
        System.arraycopy(arr, left, leftArr, 0, leftSize);
        System.arraycopy(arr, mid + 1, rightArr, 0, rightSize);
        
        int i = 0, j = 0, k = left;
        
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
    public static void testMergeFunction() {
        int[] arr = {12, 11, 13, 5, 6, 7};
        System.out.print("Original: ");
        java.util.Arrays.stream(arr).forEach(x -> System.out.print(x + " "));
        System.out.println();
        
        mergeFunction(arr, 0, 2, 5); // Merge arr[0..2] and arr[3..5]
        System.out.print("After merge: ");
        java.util.Arrays.stream(arr).forEach(x -> System.out.print(x + " "));
        System.out.println(); // [5, 6, 7, 11, 12, 13]
    }
    
    public static void main(String[] args) {
        testMergeFunction();
    }
}`,
        }}
        explanation="The merge function is the core of Merge Sort. It takes two sorted subarrays and combines them into a single sorted array. Time: O(n), Space: O(n)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Implement merge function that combines two sorted subarrays",
                "Function takes array, left, mid, right indices",
                "arr[left..mid] and arr[mid+1..right] are sorted",
                "Merge them into sorted arr[left..right]",
                "Input: Array with two sorted subarrays, Output: Merged sorted subarray",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: ["merge", "function", "subarrays", "sorted", "combine"],
              details: [
                "Keywords: 'merge function', 'subarrays' → Two pointers merging",
                "Pattern: Merge two sorted parts → Compare and combine",
                "This is a 'merging subarrays' problem",
                "Similar to: Merge two sorted arrays, merge intervals",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Array: Input is already an array",
                "Temporary arrays: For left and right subarrays",
                "Three pointers: i, j, k for merging",
                "O(n) space for temporary arrays",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Two pointers merging",
                "  - Copy left and right subarrays to temp arrays",
                "  - Compare elements from both temp arrays",
                "  - Merge back into original array",
                "  - Time: O(n), Space: O(n)",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • Single element: Already sorted",
                "  • Empty subarray: Handle appropriately",
                "",
                "Optimization:",
                "  • Linear time: O(n)",
                "  • Temporary arrays: O(n) space",
                "  • Can optimize to O(1) space (complex)",
                "",
                "Implementation:",
                "  1. Create temp arrays for left and right subarrays",
                "  2. Copy data to temp arrays",
                "  3. Merge: Compare and copy smaller element",
                "  4. Copy remaining elements",
                "  5. Return merged array",
              ],
            },
          ],
          pattern: "Two Pointers Merging (Subarrays)",
          complexity: {
            time: "O(n) - Merge n elements",
            space: "O(n) - Temporary arrays",
          },
        }}
      />

      <ProblemBlock
        title="7. Merge Sorting Algorithm"
        difficulty="Medium"
        description="Complete implementation of the Merge Sort algorithm using divide and conquer."
        solutions={{
          JavaScript: `function mergeSort(arr) {
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
console.log(mergeSort([5, 2, 8, 1, 9])); // [1, 2, 5, 8, 9]`,
          Java: `import java.util.Arrays;

public class MergeSort {
    public static void mergeSort(int[] arr) {
        if (arr.length <= 1) {
            return; // Base case: single element or empty array
        }
        
        mergeSort(arr, 0, arr.length - 1);
    }
    
    private static void mergeSort(int[] arr, int left, int right) {
        if (left < right) {
            int mid = left + (right - left) / 2;
            
            // Recursively sort both halves
            mergeSort(arr, left, mid);
            mergeSort(arr, mid + 1, right);
            
            // Merge the sorted halves
            merge(arr, left, mid, right);
        }
    }
    
    // Helper function to merge two sorted arrays
    private static void merge(int[] arr, int left, int mid, int right) {
        int[] leftArr = Arrays.copyOfRange(arr, left, mid + 1);
        int[] rightArr = Arrays.copyOfRange(arr, mid + 1, right + 1);
        
        int i = 0, j = 0, k = left;
        
        // Compare elements from both arrays
        while (i < leftArr.length && j < rightArr.length) {
            if (leftArr[i] <= rightArr[j]) {
                arr[k++] = leftArr[i++];
            } else {
                arr[k++] = rightArr[j++];
            }
        }
        
        // Add remaining elements
        while (i < leftArr.length) arr[k++] = leftArr[i++];
        while (j < rightArr.length) arr[k++] = rightArr[j++];
    }
    
    // Iterative version (bottom-up approach)
    public static void mergeSortIterative(int[] arr) {
        int n = arr.length;
        
        // Start with subarrays of size 1, then merge subarrays of size 2, 4, 8, etc.
        for (int size = 1; size < n; size *= 2) {
            for (int left = 0; left < n - 1; left += 2 * size) {
                int mid = Math.min(left + size - 1, n - 1);
                int right = Math.min(left + 2 * size - 1, n - 1);
                
                merge(arr, left, mid, right);
            }
        }
    }
    
    public static void main(String[] args) {
        int[] arr1 = {38, 27, 43, 3, 9, 82, 10};
        mergeSort(arr1);
        System.out.println(Arrays.toString(arr1)); // [3, 9, 10, 27, 38, 43, 82]
        
        int[] arr2 = {64, 34, 25, 12, 22, 11, 90};
        mergeSort(arr2);
        System.out.println(Arrays.toString(arr2)); // [11, 12, 22, 25, 34, 64, 90]
        
        int[] arr3 = {5, 2, 8, 1, 9};
        mergeSort(arr3);
        System.out.println(Arrays.toString(arr3)); // [1, 2, 5, 8, 9]
    }
}`,
        }}
        explanation="Complete Merge Sort implementation using divide and conquer. Recursively divides array, sorts subarrays, then merges them. Time: O(n log n), Space: O(n), Stable: Yes."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Complete Merge Sort implementation",
                "Sort array using divide and conquer",
                "Recursively divide, sort, and merge",
                "Input: Unsorted array, Output: Sorted array",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: [
                "merge sort",
                "divide",
                "conquer",
                "recursive",
                "complete",
              ],
              details: [
                "Keywords: 'merge sort', 'divide and conquer' → Recursive sorting",
                "Pattern: Divide and conquer → Split, sort recursively, merge",
                "This is a 'complete divide and conquer sorting' problem",
                "Similar to: Quick sort, binary search",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Array: Input is already an array",
                "Temporary array: For merging (O(n) space)",
                "Recursive call stack: O(log n) space",
                "Total: O(n) space",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Complete Merge Sort",
                "  - Base case: If length <= 1, return",
                "  - Divide: mid = n / 2",
                "  - Conquer: Recursively sort left and right",
                "  - Combine: Merge sorted halves",
                "  - Time: O(n log n), Space: O(n)",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • Empty array: Return as is",
                "  • Single element: Return as is",
                "",
                "Optimization:",
                "  • Consistent O(n log n) time",
                "  • Stable sort",
                "  • Can use iterative version to reduce stack space",
                "",
                "Implementation:",
                "  1. If arr.length <= 1: return arr",
                "  2. mid = Math.floor(arr.length / 2)",
                "  3. left = mergeSort(arr[0..mid])",
                "  4. right = mergeSort(arr[mid..n])",
                "  5. return merge(left, right)",
              ],
            },
          ],
          pattern: "Complete Divide and Conquer Sorting",
          complexity: {
            time: "O(n log n) - Always requires n log n operations",
            space: "O(n) - Temporary array for merging",
          },
        }}
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
        solutions={{
          JavaScript: `// Time Complexity Analysis of Merge Sort

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
console.log(mergeSortAnalysis([38, 27, 43, 3, 9, 82, 10])); // [3, 9, 10, 27, 38, 43, 82]`,
          Java: `import java.util.Arrays;

public class MergeSortAnalysis {
    // Time Complexity Analysis of Merge Sort
    
    public static int[] mergeSortAnalysis(int[] arr) {
        int n = arr.length;
        
        // Time Complexity: O(n log n)
        // - Divide: O(1) - splitting array
        // - Conquer: 2T(n/2) - recursive calls on half arrays
        // - Combine: O(n) - merging two sorted arrays
        
        // Space Complexity: O(n)
        // - Recursion stack: O(log n)
        // - Temporary arrays: O(n)
        
        if (n <= 1) return arr;
        
        int mid = n / 2;
        int[] left = Arrays.copyOfRange(arr, 0, mid);
        int[] right = Arrays.copyOfRange(arr, mid, n);
        
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
    
    private static int[] merge(int[] left, int[] right) {
        int[] result = new int[left.length + right.length];
        int i = 0, j = 0, k = 0;
        
        while (i < left.length && j < right.length) {
            if (left[i] <= right[j]) {
                result[k++] = left[i++];
            } else {
                result[k++] = right[j++];
            }
        }
        
        while (i < left.length) result[k++] = left[i++];
        while (j < right.length) result[k++] = right[j++];
        
        return result;
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(mergeSortAnalysis(new int[]{38, 27, 43, 3, 9, 82, 10}))); // [3, 9, 10, 27, 38, 43, 82]
    }
}`,
        }}
        explanation="Merge Sort has consistent O(n log n) time complexity in all cases due to its divide and conquer approach. Space complexity is O(n) due to temporary arrays."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Analyze Merge Sort complexity",
                "Understand time and space complexity",
                "Why O(n log n) time? Recurrence relation",
                "Why O(n) space? Temporary arrays",
                "Input: Understanding of algorithm, Output: Complexity analysis",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: [
                "analysis",
                "complexity",
                "recurrence",
                "divide",
                "conquer",
              ],
              details: [
                "Keywords: 'analysis', 'complexity' → Recurrence relation analysis",
                "Pattern: Divide and conquer → T(n) = 2T(n/2) + O(n)",
                "This is a 'complexity analysis' problem",
                "Similar to: Quick sort analysis, binary search analysis",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Mathematical analysis: Recurrence relation",
                "No data structures needed for analysis",
                "Understanding of algorithm structure",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Analysis: Recurrence relation",
                "  T(n) = 2T(n/2) + O(n)",
                "  Using Master Theorem: O(n log n)",
                "  Space: O(n) for temp arrays + O(log n) for stack",
                "  Total: O(n) space",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Key Points:",
                "  • Always O(n log n) - no worst case",
                "  • Stable sort",
                "  • Space: O(n) for temporary arrays",
                "",
                "Optimization:",
                "  • Can reduce space with in-place merge (complex)",
                "  • Iterative version reduces stack space",
                "",
                "Complexity:",
                "  Time: O(n log n) - Master Theorem",
                "  Space: O(n) - Temporary arrays",
              ],
            },
          ],
          pattern: "Complexity Analysis (Recurrence Relation)",
          complexity: {
            time: "O(n log n) - Always consistent",
            space: "O(n) - Temporary arrays",
          },
        }}
      />

      <ProblemBlock
        title="9. Intersection of Two Sorted Arrays"
        difficulty="Easy"
        description="Find the intersection (common elements) of two sorted arrays efficiently."
        solutions={{
          JavaScript: `function intersectionOfSortedArrays(arr1, arr2) {
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
console.log(intersectionOfSortedArrays([1, 3, 5, 7], [2, 4, 6, 8]));     // []`,
          Java: `import java.util.*;

public class IntersectionOfSortedArrays {
    public static List<Integer> intersectionOfSortedArrays(int[] arr1, int[] arr2) {
        List<Integer> intersection = new ArrayList<>();
        int i = 0, j = 0;
        
        // Use two pointers technique
        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] == arr2[j]) {
                // Avoid duplicates
                if (intersection.isEmpty() || intersection.get(intersection.size() - 1) != arr1[i]) {
                    intersection.add(arr1[i]);
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
    public static List<Integer> intersectionWithSet(int[] arr1, int[] arr2) {
        Set<Integer> set1 = new HashSet<>();
        for (int num : arr1) {
            set1.add(num);
        }
        
        List<Integer> intersection = new ArrayList<>();
        Set<Integer> added = new HashSet<>();
        
        for (int num : arr2) {
            if (set1.contains(num) && !added.contains(num)) {
                intersection.add(num);
                added.add(num); // Avoid duplicates
            }
        }
        
        return intersection;
    }
    
    // Find intersection with frequency count
    public static List<Integer> intersectionWithCount(int[] arr1, int[] arr2) {
        Map<Integer, Integer> count1 = new HashMap<>();
        Map<Integer, Integer> count2 = new HashMap<>();
        
        // Count frequencies in both arrays
        for (int num : arr1) {
            count1.put(num, count1.getOrDefault(num, 0) + 1);
        }
        for (int num : arr2) {
            count2.put(num, count2.getOrDefault(num, 0) + 1);
        }
        
        List<Integer> intersection = new ArrayList<>();
        for (Map.Entry<Integer, Integer> entry : count1.entrySet()) {
            if (count2.containsKey(entry.getKey())) {
                int minCount = Math.min(entry.getValue(), count2.get(entry.getKey()));
                for (int i = 0; i < minCount; i++) {
                    intersection.add(entry.getKey());
                }
            }
        }
        
        return intersection;
    }
    
    public static void main(String[] args) {
        System.out.println(intersectionOfSortedArrays(new int[]{1, 2, 2, 3, 4}, new int[]{2, 2, 4, 5})); // [2, 4]
        System.out.println(intersectionOfSortedArrays(new int[]{1, 3, 5, 7}, new int[]{2, 4, 6, 8}));     // []
    }
}`,
        }}
        explanation="Two pointers technique: compare elements from both arrays, add to result if equal, move pointer with smaller element. Time: O(m+n), Space: O(1)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Find intersection (common elements) of two sorted arrays",
                "Both arrays are already sorted",
                "Handle duplicates? Add once or all occurrences?",
                "Input: Two sorted arrays, Output: Intersection array",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: [
                "intersection",
                "sorted arrays",
                "two pointers",
                "common",
              ],
              details: [
                "Keywords: 'intersection', 'sorted arrays' → Two pointers technique",
                "Pattern: Two pointers → Compare and find common elements",
                "This is a 'two pointers intersection' problem",
                "Similar to: Union of sorted arrays, merge sorted arrays",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Two arrays: Input arrays",
                "Result array: Store intersection",
                "Two pointers: i for arr1, j for arr2",
                "O(1) space if no duplicates tracking needed",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Two pointers",
                "  - Compare arr1[i] and arr2[j]",
                "  - If equal: add to result, advance both",
                "  - If arr1[i] < arr2[j]: advance i",
                "  - If arr1[i] > arr2[j]: advance j",
                "  - Time: O(m+n), Space: O(1)",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • No intersection: Return empty array",
                "  • Duplicates: Handle appropriately",
                "  • One array empty: Return empty",
                "",
                "Optimization:",
                "  • Single pass: O(m+n) time",
                "  • O(1) space (excluding result)",
                "  • Efficient two-pointer comparison",
                "",
                "Implementation:",
                "  1. i = 0, j = 0, result = []",
                "  2. While i < arr1.length and j < arr2.length:",
                "     - If arr1[i] == arr2[j]: add to result, i++, j++",
                "     - Else if arr1[i] < arr2[j]: i++",
                "     - Else: j++",
                "  3. Return result",
              ],
            },
          ],
          pattern: "Two Pointers Intersection",
          complexity: {
            time: "O(m+n) - Single pass through both arrays",
            space: "O(1) - Excluding result array",
          },
        }}
      />

      <ProblemBlock
        title="10. Union of Two Sorted Arrays"
        difficulty="Easy"
        description="Find the union (all unique elements) of two sorted arrays efficiently."
        solutions={{
          JavaScript: `function unionOfSortedArrays(arr1, arr2) {
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
console.log(unionOfSortedArrays([1, 3, 5, 7], [2, 4, 6, 8]));     // [1, 2, 3, 4, 5, 6, 7, 8]`,
          Java: `import java.util.*;

public class UnionOfSortedArrays {
    public static List<Integer> unionOfSortedArrays(int[] arr1, int[] arr2) {
        List<Integer> union = new ArrayList<>();
        int i = 0, j = 0;
        
        // Use two pointers technique
        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] < arr2[j]) {
                if (union.isEmpty() || union.get(union.size() - 1) != arr1[i]) {
                    union.add(arr1[i]);
                }
                i++;
            } else if (arr1[i] > arr2[j]) {
                if (union.isEmpty() || union.get(union.size() - 1) != arr2[j]) {
                    union.add(arr2[j]);
                }
                j++;
            } else {
                // Elements are equal
                if (union.isEmpty() || union.get(union.size() - 1) != arr1[i]) {
                    union.add(arr1[i]);
                }
                i++;
                j++;
            }
        }
        
        // Add remaining elements from arr1
        while (i < arr1.length) {
            if (union.isEmpty() || union.get(union.size() - 1) != arr1[i]) {
                union.add(arr1[i]);
            }
            i++;
        }
        
        // Add remaining elements from arr2
        while (j < arr2.length) {
            if (union.isEmpty() || union.get(union.size() - 1) != arr2[j]) {
                union.add(arr2[j]);
            }
            j++;
        }
        
        return union;
    }
    
    // Alternative: Using Set for unsorted arrays
    public static List<Integer> unionWithSet(int[] arr1, int[] arr2) {
        Set<Integer> unionSet = new HashSet<>();
        
        for (int num : arr1) {
            unionSet.add(num);
        }
        for (int num : arr2) {
            unionSet.add(num);
        }
        
        List<Integer> result = new ArrayList<>(unionSet);
        Collections.sort(result);
        return result;
    }
    
    // Union with frequency count
    public static List<Integer> unionWithCount(int[] arr1, int[] arr2) {
        Set<Integer> unionSet = new HashSet<>();
        
        // Add all elements from both arrays
        for (int num : arr1) {
            unionSet.add(num);
        }
        for (int num : arr2) {
            unionSet.add(num);
        }
        
        // Extract all unique elements
        List<Integer> result = new ArrayList<>(unionSet);
        Collections.sort(result);
        return result;
    }
    
    public static void main(String[] args) {
        System.out.println(unionOfSortedArrays(new int[]{1, 2, 2, 3, 4}, new int[]{2, 2, 4, 5})); // [1, 2, 3, 4, 5]
        System.out.println(unionOfSortedArrays(new int[]{1, 3, 5, 7}, new int[]{2, 4, 6, 8}));     // [1, 2, 3, 4, 5, 6, 7, 8]
    }
}`,
        }}
        explanation="Two pointers technique: add smaller element to result, handle duplicates by checking last added element. Time: O(m+n), Space: O(1)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Find union (all unique elements) of two sorted arrays",
                "Both arrays are already sorted",
                "Handle duplicates? Add each element once",
                "Input: Two sorted arrays, Output: Union array (unique elements)",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: ["union", "sorted arrays", "two pointers", "unique"],
              details: [
                "Keywords: 'union', 'sorted arrays' → Two pointers technique",
                "Pattern: Two pointers → Merge and deduplicate",
                "This is a 'two pointers union' problem",
                "Similar to: Intersection of sorted arrays, merge sorted arrays",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Two arrays: Input arrays",
                "Result array: Store union",
                "Two pointers: i for arr1, j for arr2",
                "O(1) space (excluding result)",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Two pointers with deduplication",
                "  - Compare arr1[i] and arr2[j]",
                "  - Add smaller to result (if not duplicate)",
                "  - If equal: add once, advance both",
                "  - Time: O(m+n), Space: O(1)",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • Duplicates: Check last added element",
                "  • One array empty: Add all from other",
                "  • Both empty: Return empty",
                "",
                "Optimization:",
                "  • Single pass: O(m+n) time",
                "  • O(1) space (excluding result)",
                "  • Efficient deduplication",
                "",
                "Implementation:",
                "  1. i = 0, j = 0, result = []",
                "  2. While i < arr1.length and j < arr2.length:",
                "     - Add smaller (if not duplicate)",
                "     - If equal: add once, advance both",
                "  3. Add remaining from both arrays",
                "  4. Return result",
              ],
            },
          ],
          pattern: "Two Pointers Union with Deduplication",
          complexity: {
            time: "O(m+n) - Single pass through both arrays",
            space: "O(1) - Excluding result array",
          },
        }}
      />

      <ProblemBlock
        title="11. Count Inversions in Array"
        difficulty="Hard"
        description="Count the number of inversions in an array using Merge Sort technique."
        solutions={{
          JavaScript: `function countInversions(arr) {
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
console.log(countInversions([5, 4, 3, 2, 1])); // 10 inversions (reverse sorted)`,
          Java: `public class CountInversions {
    public static long countInversions(int[] arr) {
        int[] temp = arr.clone();
        return mergeSortAndCount(arr, temp, 0, arr.length - 1);
    }
    
    private static long mergeSortAndCount(int[] arr, int[] temp, int left, int right) {
        long invCount = 0;
        
        if (left < right) {
            int mid = left + (right - left) / 2;
            
            // Count inversions in left half
            invCount += mergeSortAndCount(arr, temp, left, mid);
            
            // Count inversions in right half
            invCount += mergeSortAndCount(arr, temp, mid + 1, right);
            
            // Count inversions during merge
            invCount += mergeAndCount(arr, temp, left, mid, right);
        }
        
        return invCount;
    }
    
    private static long mergeAndCount(int[] arr, int[] temp, int left, int mid, int right) {
        // Copy to temporary arrays
        System.arraycopy(arr, left, temp, left, right - left + 1);
        
        int i = left, j = mid + 1, k = left;
        long invCount = 0;
        
        // Merge and count inversions
        while (i <= mid && j <= right) {
            if (temp[i] <= temp[j]) {
                arr[k++] = temp[i++];
            } else {
                arr[k++] = temp[j++];
                // All remaining elements in left half are greater than temp[j]
                invCount += (mid - i + 1);
            }
        }
        
        // Copy remaining elements
        while (i <= mid) arr[k++] = temp[i++];
        while (j <= right) arr[k++] = temp[j++];
        
        return invCount;
    }
    
    // Brute force approach for comparison
    public static long countInversionsBruteForce(int[] arr) {
        long invCount = 0;
        
        for (int i = 0; i < arr.length - 1; i++) {
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[i] > arr[j]) {
                    invCount++;
                }
            }
        }
        
        return invCount;
    }
    
    // Count inversions without modifying original array
    public static long countInversionsNonDestructive(int[] arr) {
        int[] temp = arr.clone();
        return mergeSortAndCountNonDestructive(temp, 0, temp.length - 1);
    }
    
    private static long mergeSortAndCountNonDestructive(int[] arr, int left, int right) {
        long invCount = 0;
        
        if (left < right) {
            int mid = left + (right - left) / 2;
            invCount += mergeSortAndCountNonDestructive(arr, left, mid);
            invCount += mergeSortAndCountNonDestructive(arr, mid + 1, right);
            invCount += mergeAndCountNonDestructive(arr, left, mid, right);
        }
        
        return invCount;
    }
    
    private static long mergeAndCountNonDestructive(int[] arr, int left, int mid, int right) {
        int[] leftArr = new int[mid - left + 1];
        int[] rightArr = new int[right - mid];
        
        System.arraycopy(arr, left, leftArr, 0, leftArr.length);
        System.arraycopy(arr, mid + 1, rightArr, 0, rightArr.length);
        
        int i = 0, j = 0, k = left;
        long invCount = 0;
        
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
    
    public static void main(String[] args) {
        System.out.println(countInversions(new int[]{2, 4, 1, 3, 5})); // 3 inversions
        System.out.println(countInversions(new int[]{2, 3, 4, 5, 6})); // 0 inversions
        System.out.println(countInversions(new int[]{5, 4, 3, 2, 1})); // 10 inversions
    }
}`,
        }}
        explanation="Use Merge Sort approach: count inversions during merge step. When element from right array is smaller, all remaining left elements form inversions. Time: O(n log n), Space: O(n)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Count inversions: pairs (i, j) where i < j and arr[i] > arr[j]",
                "Inversion means elements are out of order",
                "Need efficient solution (not O(n²))",
                "Input: Array, Output: Count of inversions",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: [
                "inversions",
                "count",
                "merge sort",
                "divide",
                "conquer",
              ],
              details: [
                "Keywords: 'inversions', 'count' → Modified merge sort",
                "Pattern: Divide and conquer → Count during merge",
                "This is a 'counting with divide and conquer' problem",
                "Similar to: Merge sort, count smaller elements",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Array: Input is already an array",
                "Temporary arrays: For merging (O(n) space)",
                "Counter: To track inversion count",
                "O(n) space for temporary arrays",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Modified Merge Sort",
                "  - Divide: Split array into two halves",
                "  - Conquer: Recursively count inversions in both halves",
                "  - Combine: Count cross inversions during merge",
                "  - When right element < left element: all remaining left elements form inversions",
                "  - Time: O(n log n), Space: O(n)",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • Already sorted: 0 inversions",
                "  • Reverse sorted: n(n-1)/2 inversions",
                "",
                "Optimization:",
                "  • O(n log n) time - better than O(n²) brute force",
                "  • Count during merge - efficient",
                "",
                "Implementation:",
                "  1. Divide array into two halves",
                "  2. Recursively count inversions in both halves",
                "  3. During merge: if right[j] < left[i]:",
                "     - count += (mid - i + 1)",
                "  4. Return total count",
              ],
            },
          ],
          pattern: "Modified Merge Sort (Counting Inversions)",
          complexity: {
            time: "O(n log n) - Divide and conquer",
            space: "O(n) - Temporary arrays",
          },
        }}
      />

      <ProblemBlock
        title="12. Naive Partition"
        difficulty="Easy"
        description="Implement a naive partition algorithm for QuickSort that separates elements around a pivot."
        solutions={{
          JavaScript: `function naivePartition(arr, low, high, pivotIndex) {
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

testNaivePartition();`,
          Java: `import java.util.Arrays;

public class NaivePartition {
    public static int naivePartition(int[] arr, int low, int high, int pivotIndex) {
        int pivot = arr[pivotIndex];
        int[] temp = new int[high - low + 1];
        int tempIndex = 0;
        
        // Add all elements less than pivot
        for (int i = low; i <= high; i++) {
            if (arr[i] < pivot) {
                temp[tempIndex++] = arr[i];
            }
        }
        
        // Add all elements equal to pivot
        int pivotStart = tempIndex;
        for (int i = low; i <= high; i++) {
            if (arr[i] == pivot) {
                temp[tempIndex++] = arr[i];
            }
        }
        
        // Add all elements greater than pivot
        for (int i = low; i <= high; i++) {
            if (arr[i] > pivot) {
                temp[tempIndex++] = arr[i];
            }
        }
        
        // Copy back to original array
        for (int i = 0; i < temp.length; i++) {
            arr[low + i] = temp[i];
        }
        
        // Find pivot's final position
        return low + pivotStart;
    }
    
    // Alternative naive partition implementation
    public static int naivePartitionAlternative(int[] arr, int low, int high) {
        int pivot = arr[high]; // Use last element as pivot
        int[] temp = new int[high - low + 1];
        int tempIndex = 0;
        int pivotPos = low;
        
        // Copy elements less than pivot
        for (int i = low; i < high; i++) {
            if (arr[i] < pivot) {
                temp[tempIndex++] = arr[i];
            }
        }
        
        // Add pivot
        int pivotIndex = tempIndex;
        temp[tempIndex++] = pivot;
        
        // Copy elements greater than or equal to pivot
        for (int i = low; i < high; i++) {
            if (arr[i] >= pivot) {
                temp[tempIndex++] = arr[i];
            }
        }
        
        // Copy back to original array
        for (int i = 0; i < temp.length; i++) {
            arr[low + i] = temp[i];
        }
        
        return low + pivotIndex;
    }
    
    // Test naive partition
    public static void testNaivePartition() {
        int[] arr = {3, 8, 6, 12, 10, 7};
        System.out.println("Original: " + Arrays.toString(arr));
        
        int pivotIndex = naivePartition(arr, 0, arr.length - 1, 5); // pivot = 7
        System.out.println("After partition: " + Arrays.toString(arr));
        System.out.println("Pivot index: " + pivotIndex);
    }
    
    public static void main(String[] args) {
        testNaivePartition();
    }
}`,
        }}
        explanation="Naive partition creates a temporary array, copies elements in order (less than pivot, equal to pivot, greater than pivot), then copies back. Time: O(n), Space: O(n)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Partition array around a pivot element",
                "Elements < pivot on left, = pivot in middle, > pivot on right",
                "Naive approach uses extra space",
                "Input: Array, low, high, pivotIndex, Output: Partitioned array",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: ["partition", "pivot", "naive", "separate"],
              details: [
                "Keywords: 'partition', 'pivot' → Array partitioning",
                "Pattern: Three-way partition → Separate into three groups",
                "This is a 'partitioning' problem",
                "Similar to: Lomuto partition, Hoare partition",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Array: Input is already an array",
                "Temporary array: To store partitioned elements",
                "O(n) space for temporary array",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Naive Partition",
                "  - Create temporary array",
                "  - Copy elements < pivot",
                "  - Copy elements = pivot",
                "  - Copy elements > pivot",
                "  - Copy back to original array",
                "  - Time: O(n), Space: O(n)",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • All elements < pivot",
                "  • All elements > pivot",
                "  • All elements = pivot",
                "",
                "Optimization:",
                "  • Simple to understand",
                "  • O(n) time, but O(n) space",
                "  • Better: Lomuto or Hoare partition (O(1) space)",
                "",
                "Implementation:",
                "  1. Create temp array",
                "  2. Copy elements < pivot",
                "  3. Copy elements = pivot",
                "  4. Copy elements > pivot",
                "  5. Copy back to original array",
              ],
            },
          ],
          pattern: "Three-Way Partitioning (Naive)",
          complexity: {
            time: "O(n) - Single pass through array",
            space: "O(n) - Temporary array",
          },
        }}
      />

      <ProblemBlock
        title="13. Lomuto Partition"
        difficulty="Medium"
        description="Implement Lomuto partition scheme for QuickSort - an efficient in-place partitioning algorithm."
        solutions={{
          JavaScript: `function lomutoPartition(arr, low, high) {
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

testLomutoPartition();`,
          Java: `import java.util.Arrays;

public class LomutoPartition {
    public static int lomutoPartition(int[] arr, int low, int high) {
        int pivot = arr[high]; // Choose last element as pivot
        int i = low - 1; // Index of smaller element
        
        for (int j = low; j < high; j++) {
            // If current element is smaller than or equal to pivot
            if (arr[j] <= pivot) {
                i++;
                // Swap elements
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        
        // Place pivot in correct position
        int temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;
        
        return i + 1; // Return pivot index
    }
    
    // Lomuto partition with custom pivot selection
    public static int lomutoPartitionCustomPivot(int[] arr, int low, int high, int pivotIndex) {
        // Move pivot to end
        int temp = arr[pivotIndex];
        arr[pivotIndex] = arr[high];
        arr[high] = temp;
        
        return lomutoPartition(arr, low, high);
    }
    
    // Lomuto partition for 3-way partitioning (Dutch National Flag)
    public static class PartitionResult {
        int lessThanPivot;
        int equalToPivot;
        
        PartitionResult(int lessThanPivot, int equalToPivot) {
            this.lessThanPivot = lessThanPivot;
            this.equalToPivot = equalToPivot;
        }
    }
    
    public static PartitionResult lomutoPartitionThreeWay(int[] arr, int low, int high) {
        int pivot = arr[high];
        int i = low - 1; // Index for elements less than pivot
        int j = low;     // Index for current element
        int k = high;    // Index for elements greater than pivot
        
        while (j < k) {
            if (arr[j] < pivot) {
                i++;
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                j++;
            } else if (arr[j] > pivot) {
                k--;
                int temp = arr[j];
                arr[j] = arr[k];
                arr[k] = temp;
            } else {
                j++; // Element equals pivot
            }
        }
        
        // Place pivot in correct position
        int temp = arr[j];
        arr[j] = arr[high];
        arr[high] = temp;
        
        return new PartitionResult(i + 1, j);
    }
    
    // Test Lomuto partition
    public static void testLomutoPartition() {
        int[] arr = {10, 7, 8, 9, 1, 5};
        System.out.println("Original: " + Arrays.toString(arr));
        
        int pivotIndex = lomutoPartition(arr, 0, arr.length - 1);
        System.out.println("After Lomuto partition: " + Arrays.toString(arr));
        System.out.println("Pivot index: " + pivotIndex);
        
        // Verify partition
        int pivot = arr[pivotIndex];
        for (int i = 0; i < pivotIndex; i++) {
            if (arr[i] > pivot) {
                System.out.println("Error: Element greater than pivot on left");
            }
        }
        for (int i = pivotIndex + 1; i < arr.length; i++) {
            if (arr[i] < pivot) {
                System.out.println("Error: Element less than pivot on right");
            }
        }
    }
    
    public static void main(String[] args) {
        testLomutoPartition();
    }
}`,
        }}
        explanation="Lomuto partition maintains two regions: elements ≤ pivot and elements > pivot. Uses single pass with two pointers. Time: O(n), Space: O(1)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Partition array around pivot using Lomuto scheme",
                "Elements ≤ pivot on left, > pivot on right",
                "In-place partitioning (O(1) space)",
                "Pivot is last element",
                "Input: Array, low, high, Output: Partitioned array and pivot index",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: ["lomuto", "partition", "pivot", "in-place"],
              details: [
                "Keywords: 'lomuto partition', 'in-place' → Two-pointer partitioning",
                "Pattern: Two regions → Maintain ≤ pivot and > pivot regions",
                "This is an 'in-place partitioning' problem",
                "Similar to: Hoare partition, naive partition",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Array: Input is already an array",
                "Two pointers: i for ≤ pivot region, j for scanning",
                "O(1) space - in-place",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Lomuto Partition",
                "  - Pivot = arr[high]",
                "  - i = low - 1 (index for ≤ pivot region)",
                "  - For j from low to high-1:",
                "    - If arr[j] <= pivot: i++, swap arr[i] and arr[j]",
                "  - Swap arr[i+1] and arr[high]",
                "  - Return i+1 (pivot index)",
                "  - Time: O(n), Space: O(1)",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • All elements < pivot",
                "  • All elements > pivot",
                "  • All elements = pivot",
                "",
                "Optimization:",
                "  • O(1) space - in-place",
                "  • O(n) time - single pass",
                "  • Fewer swaps than naive partition",
                "",
                "Implementation:",
                "  1. pivot = arr[high], i = low - 1",
                "  2. For j = low to high-1:",
                "     - If arr[j] <= pivot: i++, swap arr[i] and arr[j]",
                "  3. Swap arr[i+1] and arr[high]",
                "  4. Return i+1",
              ],
            },
          ],
          pattern: "In-Place Partitioning (Lomuto Scheme)",
          complexity: {
            time: "O(n) - Single pass through array",
            space: "O(1) - In-place partitioning",
          },
        }}
      />

      <ProblemBlock
        title="14. Hoare Partition"
        difficulty="Medium"
        description="Implement Hoare partition scheme - another efficient partitioning algorithm for QuickSort."
        solutions={{
          JavaScript: `function hoarePartition(arr, low, high) {
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

testHoarePartition();`,
          Java: `import java.util.Arrays;

public class HoarePartition {
    public static int hoarePartition(int[] arr, int low, int high) {
        int pivot = arr[low]; // Choose first element as pivot
        int i = low - 1; // Index from left
        int j = high + 1; // Index from right
        
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
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    
    // Hoare partition with custom pivot selection
    public static int hoarePartitionCustomPivot(int[] arr, int low, int high, int pivotIndex) {
        // Move pivot to beginning
        int temp = arr[pivotIndex];
        arr[pivotIndex] = arr[low];
        arr[low] = temp;
        
        return hoarePartition(arr, low, high);
    }
    
    // Hoare partition with median-of-three pivot selection
    public static int hoarePartitionMedianOfThree(int[] arr, int low, int high) {
        int mid = low + (high - low) / 2;
        
        // Find median of first, middle, and last elements
        if (arr[mid] < arr[low]) {
            int temp = arr[low];
            arr[low] = arr[mid];
            arr[mid] = temp;
        }
        if (arr[high] < arr[low]) {
            int temp = arr[low];
            arr[low] = arr[high];
            arr[high] = temp;
        }
        if (arr[high] < arr[mid]) {
            int temp = arr[mid];
            arr[mid] = arr[high];
            arr[high] = temp;
        }
        
        // Use median as pivot
        int temp = arr[mid];
        arr[mid] = arr[low];
        arr[low] = temp;
        
        return hoarePartition(arr, low, high);
    }
    
    // Test Hoare partition
    public static void testHoarePartition() {
        int[] arr = {8, 4, 7, 9, 3, 10, 5};
        System.out.println("Original: " + Arrays.toString(arr));
        
        int partitionIndex = hoarePartition(arr, 0, arr.length - 1);
        System.out.println("After Hoare partition: " + Arrays.toString(arr));
        System.out.println("Partition index: " + partitionIndex);
        
        // Verify partition
        int pivot = arr[0]; // Pivot is at beginning
        for (int i = 0; i <= partitionIndex; i++) {
            if (arr[i] > pivot) {
                System.out.println("Error: Element greater than pivot on left");
            }
        }
        for (int i = partitionIndex + 1; i < arr.length; i++) {
            if (arr[i] < pivot) {
                System.out.println("Error: Element less than pivot on right");
            }
        }
    }
    
    public static void main(String[] args) {
        testHoarePartition();
    }
}`,
        }}
        explanation="Hoare partition uses two pointers moving towards each other from opposite ends. Stops when pointers cross. Time: O(n), Space: O(1). More efficient than Lomuto."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Partition array around pivot using Hoare scheme",
                "Two pointers move from opposite ends",
                "More efficient than Lomuto (fewer swaps)",
                "Pivot is first element",
                "Input: Array, low, high, Output: Partitioned array and partition index",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: ["hoare", "partition", "two pointers", "opposite ends"],
              details: [
                "Keywords: 'hoare partition', 'two pointers' → Opposite ends partitioning",
                "Pattern: Two pointers from ends → Move towards center",
                "This is an 'opposite ends partitioning' problem",
                "Similar to: Lomuto partition, two sum",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Array: Input is already an array",
                "Two pointers: i from left, j from right",
                "O(1) space - in-place",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Hoare Partition",
                "  - Pivot = arr[low]",
                "  - i = low, j = high + 1",
                "  - While true:",
                "    - Move i right while arr[i] < pivot",
                "    - Move j left while arr[j] > pivot",
                "    - If i >= j: return j",
                "    - Swap arr[i] and arr[j]",
                "  - Time: O(n), Space: O(1)",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • All elements < pivot",
                "  • All elements > pivot",
                "  • Pointers cross",
                "",
                "Optimization:",
                "  • O(1) space - in-place",
                "  • O(n) time - single pass",
                "  • Fewer swaps than Lomuto",
                "",
                "Implementation:",
                "  1. pivot = arr[low], i = low, j = high + 1",
                "  2. While true:",
                "     - Do i++ while arr[i] < pivot",
                "     - Do j-- while arr[j] > pivot",
                "     - If i >= j: return j",
                "     - Swap arr[i] and arr[j]",
              ],
            },
          ],
          pattern: "In-Place Partitioning (Hoare Scheme)",
          complexity: {
            time: "O(n) - Single pass through array",
            space: "O(1) - In-place partitioning",
          },
        }}
      />

      <ProblemBlock
        title="15. Quick Sort Introduction"
        difficulty="Medium"
        description="Introduction to QuickSort algorithm and its divide-and-conquer approach."
        solutions={{
          JavaScript: `// QuickSort Introduction
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
console.log(quickSort([5, 2, 8, 1, 9]));              // [1, 2, 5, 8, 9]`,
          Java: `import java.util.Arrays;

public class QuickSortIntroduction {
    // QuickSort Introduction
    // QuickSort is a divide-and-conquer algorithm that works by selecting a 'pivot' element
    // and partitioning the array around the pivot, then recursively sorting the subarrays.
    
    public static void quickSort(int[] arr, int low, int high) {
        if (low < high) {
            // Partition the array and get pivot index
            int pivotIndex = lomutoPartition(arr, low, high);
            
            // Recursively sort elements before and after partition
            quickSort(arr, low, pivotIndex - 1);
            quickSort(arr, pivotIndex + 1, high);
        }
    }
    
    public static void quickSort(int[] arr) {
        quickSort(arr, 0, arr.length - 1);
    }
    
    // Helper function for Lomuto partition
    private static int lomutoPartition(int[] arr, int low, int high) {
        int pivot = arr[high];
        int i = low - 1;
        
        for (int j = low; j < high; j++) {
            if (arr[j] <= pivot) {
                i++;
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        
        int temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;
        return i + 1;
    }
    
    // QuickSort with Hoare partition
    public static void quickSortHoare(int[] arr, int low, int high) {
        if (low < high) {
            int partitionIndex = hoarePartition(arr, low, high);
            
            // Note: In Hoare partition, pivot is not necessarily at partitionIndex
            quickSortHoare(arr, low, partitionIndex);
            quickSortHoare(arr, partitionIndex + 1, high);
        }
    }
    
    public static void quickSortHoare(int[] arr) {
        quickSortHoare(arr, 0, arr.length - 1);
    }
    
    private static int hoarePartition(int[] arr, int low, int high) {
        int pivot = arr[low];
        int i = low - 1;
        int j = high + 1;
        
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
            
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
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
    
    public static void main(String[] args) {
        int[] arr1 = {64, 34, 25, 12, 22, 11, 90};
        quickSort(arr1);
        System.out.println(Arrays.toString(arr1)); // [11, 12, 22, 25, 34, 64, 90]
        
        int[] arr2 = {5, 2, 8, 1, 9};
        quickSort(arr2);
        System.out.println(Arrays.toString(arr2)); // [1, 2, 5, 8, 9]
    }
}`,
        }}
        explanation="QuickSort uses divide-and-conquer: select pivot, partition array around pivot, recursively sort subarrays. Time: O(n log n) average, O(n²) worst case. Space: O(log n)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Sort array using QuickSort algorithm",
                "Divide and conquer: select pivot, partition, recurse",
                "Performance depends on pivot selection",
                "Input: Unsorted array, Output: Sorted array",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: [
                "quick sort",
                "divide",
                "conquer",
                "pivot",
                "partition",
              ],
              details: [
                "Keywords: 'quick sort', 'pivot', 'partition' → Divide and conquer sorting",
                "Pattern: Divide and conquer → Partition around pivot, recurse",
                "This is a 'divide and conquer sorting' problem",
                "Similar to: Merge sort, binary search",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Array: Input is already an array",
                "Recursive call stack: O(log n) space",
                "In-place sorting possible",
                "O(log n) space for recursion",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: QuickSort",
                "  - Select pivot element",
                "  - Partition array around pivot",
                "  - Recursively sort left and right subarrays",
                "  - Time: O(n log n) average, O(n²) worst",
                "  - Space: O(log n), Stable: No",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • Empty array: Return as is",
                "  • Single element: Return as is",
                "  • Already sorted: O(n²) worst case if pivot is last",
                "",
                "Optimization:",
                "  • Good pivot selection: Random or median-of-three",
                "  • Tail recursion elimination: Reduce space",
                "  • Hybrid approach: Use insertion sort for small arrays",
                "",
                "Implementation:",
                "  1. If low >= high: return",
                "  2. pivotIndex = partition(arr, low, high)",
                "  3. quickSort(arr, low, pivotIndex - 1)",
                "  4. quickSort(arr, pivotIndex + 1, high)",
              ],
            },
          ],
          pattern: "Divide and Conquer Sorting (QuickSort)",
          complexity: {
            time: "O(n log n) average, O(n²) worst case",
            space: "O(log n) - Recursion stack",
          },
        }}
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
        solutions={{
          JavaScript: `function quickSortLomuto(arr, low = 0, high = arr.length - 1) {
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
console.log(quickSortLomuto([5, 2, 8, 1, 9]));              // [1, 2, 5, 8, 9]`,
          Java: `import java.util.Arrays;

public class QuickSortLomuto {
    public static void quickSortLomuto(int[] arr, int low, int high) {
        if (low < high) {
            // Partition the array using Lomuto partition
            int pivotIndex = lomutoPartition(arr, low, high);
            
            // Recursively sort elements before and after partition
            quickSortLomuto(arr, low, pivotIndex - 1);
            quickSortLomuto(arr, pivotIndex + 1, high);
        }
    }
    
    public static void quickSortLomuto(int[] arr) {
        quickSortLomuto(arr, 0, arr.length - 1);
    }
    
    private static int lomutoPartition(int[] arr, int low, int high) {
        int pivot = arr[high]; // Choose last element as pivot
        int i = low - 1; // Index of smaller element
        
        for (int j = low; j < high; j++) {
            // If current element is smaller than or equal to pivot
            if (arr[j] <= pivot) {
                i++;
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        
        // Place pivot in correct position
        int temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;
        
        return i + 1; // Return pivot index
    }
    
    // Optimized version with median-of-three pivot selection
    public static void quickSortLomutoOptimized(int[] arr, int low, int high) {
        if (low < high) {
            // Use median-of-three for pivot selection
            int medianIndex = medianOfThree(arr, low, high);
            
            // Swap median with last element
            int temp = arr[medianIndex];
            arr[medianIndex] = arr[high];
            arr[high] = temp;
            
            // Partition
            int partitionIndex = lomutoPartition(arr, low, high);
            
            // Recursively sort
            quickSortLomutoOptimized(arr, low, partitionIndex - 1);
            quickSortLomutoOptimized(arr, partitionIndex + 1, high);
        }
    }
    
    public static void quickSortLomutoOptimized(int[] arr) {
        quickSortLomutoOptimized(arr, 0, arr.length - 1);
    }
    
    private static int medianOfThree(int[] arr, int low, int high) {
        int mid = low + (high - low) / 2;
        
        // Sort the three elements
        if (arr[mid] < arr[low]) {
            int temp = arr[low];
            arr[low] = arr[mid];
            arr[mid] = temp;
        }
        if (arr[high] < arr[low]) {
            int temp = arr[low];
            arr[low] = arr[high];
            arr[high] = temp;
        }
        if (arr[high] < arr[mid]) {
            int temp = arr[mid];
            arr[mid] = arr[high];
            arr[high] = temp;
        }
        
        return mid; // Return median element
    }
    
    public static void main(String[] args) {
        int[] arr1 = {64, 34, 25, 12, 22, 11, 90};
        quickSortLomuto(arr1);
        System.out.println(Arrays.toString(arr1)); // [11, 12, 22, 25, 34, 64, 90]
        
        int[] arr2 = {5, 2, 8, 1, 9};
        quickSortLomuto(arr2);
        System.out.println(Arrays.toString(arr2)); // [1, 2, 5, 8, 9]
    }
}`,
        }}
        explanation="QuickSort with Lomuto partition: select pivot, partition array around pivot, recursively sort subarrays. Lomuto partition places pivot at correct position. Time: O(n log n) average, O(n²) worst case."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Implement QuickSort using Lomuto partition scheme",
                "Lomuto partition places pivot at correct position",
                "Recursively sort left and right subarrays",
                "Input: Unsorted array, Output: Sorted array",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: [
                "quick sort",
                "lomuto",
                "partition",
                "divide",
                "conquer",
              ],
              details: [
                "Keywords: 'quick sort', 'lomuto partition' → Divide and conquer with Lomuto",
                "Pattern: Divide and conquer → Partition with Lomuto, recurse",
                "This is a 'QuickSort with Lomuto partition' problem",
                "Similar to: QuickSort with Hoare, merge sort",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Array: Input is already an array",
                "Recursive call stack: O(log n) space",
                "In-place sorting",
                "O(log n) space for recursion",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: QuickSort with Lomuto Partition",
                "  - Select pivot (usually last element)",
                "  - Use Lomuto partition to place pivot",
                "  - Recursively sort left and right subarrays",
                "  - Time: O(n log n) average, O(n²) worst",
                "  - Space: O(log n), Stable: No",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • Empty array: Return as is",
                "  • Single element: Return as is",
                "",
                "Optimization:",
                "  • Good pivot selection reduces worst case",
                "  • Tail recursion elimination",
                "",
                "Implementation:",
                "  1. If low >= high: return",
                "  2. pivotIndex = lomutoPartition(arr, low, high)",
                "  3. quickSort(arr, low, pivotIndex - 1)",
                "  4. quickSort(arr, pivotIndex + 1, high)",
              ],
            },
          ],
          pattern: "QuickSort with Lomuto Partition",
          complexity: {
            time: "O(n log n) average, O(n²) worst case",
            space: "O(log n) - Recursion stack",
          },
        }}
      />

      <ProblemBlock
        title="17. QuickSort using Hoare Partition"
        difficulty="Medium"
        description="Complete implementation of QuickSort using Hoare partition scheme."
        solutions={{
          JavaScript: `function quickSortHoare(arr, low = 0, high = arr.length - 1) {
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
console.log(quickSortHoare([5, 2, 8, 1, 9]));              // [1, 2, 5, 8, 9]`,
          Java: `import java.util.Arrays;

public class QuickSortHoare {
    public static void quickSortHoare(int[] arr, int low, int high) {
        if (low < high) {
            // Partition the array using Hoare partition
            int partitionIndex = hoarePartition(arr, low, high);
            
            // Recursively sort elements before and after partition
            quickSortHoare(arr, low, partitionIndex);
            quickSortHoare(arr, partitionIndex + 1, high);
        }
    }
    
    public static void quickSortHoare(int[] arr) {
        quickSortHoare(arr, 0, arr.length - 1);
    }
    
    private static int hoarePartition(int[] arr, int low, int high) {
        int pivot = arr[low]; // Choose first element as pivot
        int i = low - 1; // Index from left
        int j = high + 1; // Index from right
        
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
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    
    // Hoare partition with random pivot selection
    public static void quickSortHoareRandom(int[] arr, int low, int high) {
        if (low < high) {
            // Choose random pivot
            int randomIndex = low + (int)(Math.random() * (high - low + 1));
            int temp = arr[low];
            arr[low] = arr[randomIndex];
            arr[randomIndex] = temp;
            
            int partitionIndex = hoarePartition(arr, low, high);
            quickSortHoareRandom(arr, low, partitionIndex);
            quickSortHoareRandom(arr, partitionIndex + 1, high);
        }
    }
    
    public static void quickSortHoareRandom(int[] arr) {
        quickSortHoareRandom(arr, 0, arr.length - 1);
    }
    
    public static void main(String[] args) {
        int[] arr1 = {64, 34, 25, 12, 22, 11, 90};
        quickSortHoare(arr1);
        System.out.println(Arrays.toString(arr1)); // [11, 12, 22, 25, 34, 64, 90]
        
        int[] arr2 = {5, 2, 8, 1, 9};
        quickSortHoare(arr2);
        System.out.println(Arrays.toString(arr2)); // [1, 2, 5, 8, 9]
    }
}`,
        }}
        explanation="QuickSort with Hoare partition: uses two pointers moving towards each other. More efficient than Lomuto as it performs fewer swaps. Time: O(n log n) average, O(n²) worst case."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Implement QuickSort using Hoare partition scheme",
                "Hoare partition uses two pointers from opposite ends",
                "More efficient than Lomuto (fewer swaps)",
                "Input: Unsorted array, Output: Sorted array",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: ["quick sort", "hoare", "partition", "two pointers"],
              details: [
                "Keywords: 'quick sort', 'hoare partition' → Divide and conquer with Hoare",
                "Pattern: Divide and conquer → Partition with Hoare, recurse",
                "This is a 'QuickSort with Hoare partition' problem",
                "Similar to: QuickSort with Lomuto, merge sort",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Array: Input is already an array",
                "Recursive call stack: O(log n) space",
                "In-place sorting",
                "O(log n) space for recursion",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: QuickSort with Hoare Partition",
                "  - Select pivot (usually first element)",
                "  - Use Hoare partition (two pointers from ends)",
                "  - Recursively sort left and right subarrays",
                "  - Time: O(n log n) average, O(n²) worst",
                "  - Space: O(log n), Stable: No",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • Empty array: Return as is",
                "  • Single element: Return as is",
                "",
                "Optimization:",
                "  • Fewer swaps than Lomuto",
                "  • Good pivot selection reduces worst case",
                "  • Tail recursion elimination",
                "",
                "Implementation:",
                "  1. If low >= high: return",
                "  2. partitionIndex = hoarePartition(arr, low, high)",
                "  3. quickSort(arr, low, partitionIndex)",
                "  4. quickSort(arr, partitionIndex + 1, high)",
              ],
            },
          ],
          pattern: "QuickSort with Hoare Partition",
          complexity: {
            time: "O(n log n) average, O(n²) worst case",
            space: "O(log n) - Recursion stack",
          },
        }}
      />

      <ProblemBlock
        title="18. QuickSort Analysis"
        difficulty="Hard"
        description="Detailed analysis of QuickSort time complexity in different scenarios."
        solutions={{
          JavaScript: `// QuickSort Time Complexity Analysis

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
console.log(quickSortAnalysis([38, 27, 43, 3, 9, 82, 10])); // [3, 9, 10, 27, 38, 43, 82]`,
          Java: `import java.util.Arrays;

// QuickSort Time Complexity Analysis
public class QuickSortAnalysis {
    public static void quickSortAnalysis(int[] arr, int low, int high) {
        if (low < high) {
            int pivotIndex = lomutoPartition(arr, low, high);
            
            // Recursive calls
            quickSortAnalysis(arr, low, pivotIndex - 1);
            quickSortAnalysis(arr, pivotIndex + 1, high);
        }
    }
    
    public static void quickSortAnalysis(int[] arr) {
        quickSortAnalysis(arr, 0, arr.length - 1);
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
    
    private static int lomutoPartition(int[] arr, int low, int high) {
        int pivot = arr[high];
        int i = low - 1;
        
        for (int j = low; j < high; j++) {
            if (arr[j] <= pivot) {
                i++;
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        
        int temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;
        return i + 1;
    }
    
    public static void main(String[] args) {
        int[] arr = {38, 27, 43, 3, 9, 82, 10};
        quickSortAnalysis(arr);
        System.out.println(Arrays.toString(arr)); // [3, 9, 10, 27, 38, 43, 82]
    }
}`,
        }}
        explanation="QuickSort analysis: Best case O(n log n) with balanced partitions, average case O(n log n), worst case O(n²) with unbalanced partitions. Space complexity O(log n) for recursion stack."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Analyze QuickSort time complexity in different cases",
                "Understand best, average, and worst case scenarios",
                "Why O(n log n) vs O(n²)?",
                "Input: Understanding of algorithm, Output: Complexity analysis",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: [
                "analysis",
                "complexity",
                "recurrence",
                "best",
                "worst",
              ],
              details: [
                "Keywords: 'analysis', 'complexity' → Recurrence relation analysis",
                "Pattern: Divide and conquer → T(n) = T(k) + T(n-k-1) + O(n)",
                "This is a 'complexity analysis' problem",
                "Similar to: Merge sort analysis, binary search analysis",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Mathematical analysis: Recurrence relation",
                "No data structures needed for analysis",
                "Understanding of algorithm structure",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Analysis: Recurrence relation",
                "  Best: T(n) = 2T(n/2) + O(n) → O(n log n)",
                "  Average: T(n) = T(n/2) + T(n/2) + O(n) → O(n log n)",
                "  Worst: T(n) = T(n-1) + O(n) → O(n²)",
                "  Space: O(log n) average, O(n) worst",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Key Points:",
                "  • Best case: Balanced partitions → O(n log n)",
                "  • Average case: Random partitions → O(n log n)",
                "  • Worst case: Unbalanced partitions → O(n²)",
                "",
                "Optimization:",
                "  • Good pivot selection reduces worst case",
                "  • Random pivot: O(n log n) expected",
                "",
                "Complexity:",
                "  Time: O(n log n) average, O(n²) worst",
                "  Space: O(log n) average, O(n) worst",
              ],
            },
          ],
          pattern: "Complexity Analysis (Recurrence Relation)",
          complexity: {
            time: "O(n log n) average, O(n²) worst case",
            space: "O(log n) average, O(n) worst case",
          },
        }}
      />

      <ProblemBlock
        title="19. Space Analysis of QuickSort"
        difficulty="Medium"
        description="Analyze the space complexity of QuickSort algorithm and optimization techniques."
        solutions={{
          JavaScript: `// Space Complexity Analysis of QuickSort

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
console.log(quickSortIterative([5, 2, 8, 1, 9]));                  // [1, 2, 5, 8, 9]`,
          Java: `import java.util.Arrays;
import java.util.Stack;

// Space Complexity Analysis of QuickSort
public class QuickSortSpaceAnalysis {
    public static void quickSortSpaceAnalysis(int[] arr, int low, int high) {
        if (low < high) {
            int pivotIndex = lomutoPartition(arr, low, high);
            
            // Recursive calls - each adds to call stack
            quickSortSpaceAnalysis(arr, low, pivotIndex - 1);
            quickSortSpaceAnalysis(arr, pivotIndex + 1, high);
        }
    }
    
    public static void quickSortSpaceAnalysis(int[] arr) {
        quickSortSpaceAnalysis(arr, 0, arr.length - 1);
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
    
    private static int lomutoPartition(int[] arr, int low, int high) {
        int pivot = arr[high];
        int i = low - 1;
        
        for (int j = low; j < high; j++) {
            if (arr[j] <= pivot) {
                i++;
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        
        int temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;
        return i + 1;
    }
    
    // Space-optimized QuickSort (iterative)
    public static void quickSortIterative(int[] arr) {
        Stack<int[]> stack = new Stack<>();
        int low = 0;
        int high = arr.length - 1;
        
        // Push initial values
        stack.push(new int[]{low, high});
        
        while (!stack.isEmpty()) {
            int[] pair = stack.pop();
            int currentLow = pair[0];
            int currentHigh = pair[1];
            
            if (currentLow < currentHigh) {
                int pivotIndex = lomutoPartition(arr, currentLow, currentHigh);
                
                // Push left and right subarrays to stack
                stack.push(new int[]{currentLow, pivotIndex - 1});
                stack.push(new int[]{pivotIndex + 1, currentHigh});
            }
        }
    }
    
    // Tail recursion optimization
    public static void quickSortTailRecursive(int[] arr, int low, int high) {
        while (low < high) {
            int pivotIndex = lomutoPartition(arr, low, high);
            
            // Always recurse on smaller partition first
            if (pivotIndex - low < high - pivotIndex) {
                quickSortTailRecursive(arr, low, pivotIndex - 1);
                low = pivotIndex + 1; // Tail recursion elimination
            } else {
                quickSortTailRecursive(arr, pivotIndex + 1, high);
                high = pivotIndex - 1; // Tail recursion elimination
            }
        }
    }
    
    public static void quickSortTailRecursive(int[] arr) {
        quickSortTailRecursive(arr, 0, arr.length - 1);
    }
    
    public static void main(String[] args) {
        int[] arr1 = {64, 34, 25, 12, 22, 11, 90};
        quickSortIterative(arr1);
        System.out.println(Arrays.toString(arr1)); // [11, 12, 22, 25, 34, 64, 90]
        
        int[] arr2 = {5, 2, 8, 1, 9};
        quickSortIterative(arr2);
        System.out.println(Arrays.toString(arr2)); // [1, 2, 5, 8, 9]
    }
}`,
        }}
        explanation="Space complexity: O(log n) average case (balanced partitions), O(n) worst case (unbalanced partitions). Can be optimized with iterative approach or tail recursion elimination."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Analyze QuickSort space complexity",
                "Understand recursion stack space",
                "Why O(log n) vs O(n)?",
                "Input: Understanding of algorithm, Output: Space analysis",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: ["space", "complexity", "recursion", "stack"],
              details: [
                "Keywords: 'space complexity', 'recursion stack' → Stack depth analysis",
                "Pattern: Recursion depth → Depends on partition balance",
                "This is a 'space complexity analysis' problem",
                "Similar to: Merge sort space analysis, tree depth",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Recursion call stack: O(log n) to O(n) depth",
                "No additional data structures needed",
                "Understanding of recursion depth",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Analysis: Recursion stack depth",
                "  Average: Balanced partitions → log n levels → O(log n)",
                "  Worst: Unbalanced partitions → n levels → O(n)",
                "  Optimization: Tail recursion elimination → O(log n)",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Key Points:",
                "  • Average case: O(log n) stack depth",
                "  • Worst case: O(n) stack depth",
                "  • Can optimize with tail recursion elimination",
                "",
                "Optimization:",
                "  • Always recurse on smaller partition first",
                "  • Iterative version: Use explicit stack",
                "  • Reduces worst case to O(log n)",
                "",
                "Complexity:",
                "  Space: O(log n) average, O(n) worst",
                "  Optimized: O(log n) always",
              ],
            },
          ],
          pattern: "Space Complexity Analysis (Recursion Stack)",
          complexity: {
            time: "O(n log n) average, O(n²) worst case",
            space: "O(log n) average, O(n) worst case",
          },
        }}
      />

      <ProblemBlock
        title="20. Choice of Pivot and Worst Case"
        difficulty="Medium"
        description="Understand how pivot selection affects QuickSort performance and avoid worst-case scenarios."
        solutions={{
          JavaScript: `// Pivot Selection Strategies and Worst Case Analysis

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
demonstrateWorstCases();`,
          Java: `import java.util.Arrays;
import java.util.Random;

// Pivot Selection Strategies and Worst Case Analysis
public class PivotSelectionAnalysis {
    // Strategy 1: Always choose last element (worst case for sorted arrays)
    public static void quickSortLastPivot(int[] arr, int low, int high) {
        if (low < high) {
            int pivotIndex = lomutoPartition(arr, low, high);
            quickSortLastPivot(arr, low, pivotIndex - 1);
            quickSortLastPivot(arr, pivotIndex + 1, high);
        }
    }
    
    public static void quickSortLastPivot(int[] arr) {
        quickSortLastPivot(arr, 0, arr.length - 1);
    }
    
    // Strategy 2: Always choose first element (worst case for reverse sorted arrays)
    public static void quickSortFirstPivot(int[] arr, int low, int high) {
        if (low < high) {
            // Swap first element with last for Lomuto partition
            int temp = arr[low];
            arr[low] = arr[high];
            arr[high] = temp;
            
            int pivotIndex = lomutoPartition(arr, low, high);
            quickSortFirstPivot(arr, low, pivotIndex - 1);
            quickSortFirstPivot(arr, pivotIndex + 1, high);
        }
    }
    
    public static void quickSortFirstPivot(int[] arr) {
        quickSortFirstPivot(arr, 0, arr.length - 1);
    }
    
    // Strategy 3: Random pivot (reduces worst case probability)
    public static void quickSortRandomPivot(int[] arr, int low, int high) {
        if (low < high) {
            Random random = new Random();
            int randomIndex = low + random.nextInt(high - low + 1);
            
            // Swap random element with last for Lomuto partition
            int temp = arr[randomIndex];
            arr[randomIndex] = arr[high];
            arr[high] = temp;
            
            int pivotIndex = lomutoPartition(arr, low, high);
            quickSortRandomPivot(arr, low, pivotIndex - 1);
            quickSortRandomPivot(arr, pivotIndex + 1, high);
        }
    }
    
    public static void quickSortRandomPivot(int[] arr) {
        quickSortRandomPivot(arr, 0, arr.length - 1);
    }
    
    // Strategy 4: Median of three (good balance of performance and simplicity)
    public static void quickSortMedianOfThree(int[] arr, int low, int high) {
        if (low < high) {
            int medianIndex = medianOfThree(arr, low, high);
            
            // Swap median with last for Lomuto partition
            int temp = arr[medianIndex];
            arr[medianIndex] = arr[high];
            arr[high] = temp;
            
            int pivotIndex = lomutoPartition(arr, low, high);
            quickSortMedianOfThree(arr, low, pivotIndex - 1);
            quickSortMedianOfThree(arr, pivotIndex + 1, high);
        }
    }
    
    public static void quickSortMedianOfThree(int[] arr) {
        quickSortMedianOfThree(arr, 0, arr.length - 1);
    }
    
    private static int medianOfThree(int[] arr, int low, int high) {
        int mid = low + (high - low) / 2;
        
        // Sort first, middle, and last elements
        if (arr[mid] < arr[low]) {
            int temp = arr[low];
            arr[low] = arr[mid];
            arr[mid] = temp;
        }
        if (arr[high] < arr[low]) {
            int temp = arr[low];
            arr[low] = arr[high];
            arr[high] = temp;
        }
        if (arr[high] < arr[mid]) {
            int temp = arr[mid];
            arr[mid] = arr[high];
            arr[high] = temp;
        }
        
        return mid; // Return index of median
    }
    
    private static int lomutoPartition(int[] arr, int low, int high) {
        int pivot = arr[high];
        int i = low - 1;
        
        for (int j = low; j < high; j++) {
            if (arr[j] <= pivot) {
                i++;
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        
        int temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;
        return i + 1;
    }
    
    // Demonstrate worst cases
    public static void demonstrateWorstCases() {
        // Sorted array with last pivot = worst case
        int[] sorted = {1, 2, 3, 4, 5};
        System.out.println("Sorted array with last pivot: O(n²)");
        
        // Reverse sorted array with first pivot = worst case
        int[] reverse = {5, 4, 3, 2, 1};
        System.out.println("Reverse sorted array with first pivot: O(n²)");
        
        // Random pivot or median-of-three avoids worst case
        System.out.println("Random pivot or median-of-three: O(n log n) expected");
    }
    
    public static void main(String[] args) {
        int[] arr1 = {64, 34, 25, 12, 22, 11, 90};
        quickSortMedianOfThree(arr1);
        System.out.println(Arrays.toString(arr1)); // [11, 12, 22, 25, 34, 64, 90]
        
        demonstrateWorstCases();
    }
}`,
        }}
        explanation="Pivot selection greatly affects performance. Last/first element can cause O(n²) worst case. Random pivot and median-of-three reduce worst case probability. Best strategy depends on data characteristics."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Understand how pivot selection affects performance",
                "Why worst case O(n²) occurs",
                "Strategies to avoid worst case",
                "Input: Understanding of pivot selection, Output: Analysis",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: [
                "pivot",
                "selection",
                "worst case",
                "random",
                "median",
              ],
              details: [
                "Keywords: 'pivot selection', 'worst case' → Pivot strategy analysis",
                "Pattern: Pivot quality → Affects partition balance",
                "This is a 'pivot selection strategy' problem",
                "Similar to: QuickSelect, partition analysis",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Array: Input is already an array",
                "Pivot selection strategies: First, last, random, median",
                "No additional data structures needed",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Pivot Selection Strategies:",
                "  First/Last: O(n²) worst case (sorted arrays)",
                "  Random: O(n log n) expected",
                "  Median-of-three: Reduces worst case probability",
                "  Best: Depends on data characteristics",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Key Points:",
                "  • Bad pivot: Always smallest/largest → O(n²)",
                "  • Good pivot: Balanced partitions → O(n log n)",
                "  • Random pivot: O(n log n) expected",
                "",
                "Optimization:",
                "  • Random pivot: Avoids worst case",
                "  • Median-of-three: Better pivot selection",
                "  • Hybrid: Use insertion sort for small arrays",
                "",
                "Complexity:",
                "  Time: O(n log n) with good pivot, O(n²) with bad pivot",
              ],
            },
          ],
          pattern: "Pivot Selection Strategy",
          complexity: {
            time: "O(n log n) with good pivot, O(n²) with bad pivot",
            space: "O(log n) - Recursion stack",
          },
        }}
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
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Optimize QuickSort space complexity",
                "Eliminate tail recursion to reduce stack space",
                "Always recurse on smaller partition first",
                "Input: Understanding of tail recursion, Output: Optimized algorithm",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: ["tail", "recursion", "elimination", "optimization"],
              details: [
                "Keywords: 'tail recursion elimination', 'optimization' → Space optimization",
                "Pattern: Always recurse on smaller partition → Reduces stack depth",
                "This is a 'space optimization' problem",
                "Similar to: Iterative QuickSort, stack optimization",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Array: Input is already an array",
                "Recursion stack: Optimized to O(log n)",
                "Or explicit stack: For iterative version",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Tail Recursion Elimination",
                "  - Always recurse on smaller partition first",
                "  - Use loop for larger partition",
                "  - Reduces worst case from O(n) to O(log n)",
                "  - Or use iterative version with explicit stack",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Key Points:",
                "  • Always recurse on smaller partition",
                "  • Use loop for larger partition",
                "  • Reduces stack depth to O(log n)",
                "",
                "Optimization:",
                "  • Tail recursion elimination: O(log n) space",
                "  • Iterative version: Explicit stack",
                "  • Both achieve O(log n) space",
                "",
                "Complexity:",
                "  Time: O(n log n) average, O(n²) worst",
                "  Space: O(log n) - Optimized",
              ],
            },
          ],
          pattern: "Tail Recursion Elimination (Space Optimization)",
          complexity: {
            time: "O(n log n) average, O(n²) worst case",
            space: "O(log n) - Optimized with tail recursion elimination",
          },
        }}
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
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Find kth smallest element in unsorted array",
                "Don't need to sort entire array",
                "More efficient than sorting: O(n) vs O(n log n)",
                "Input: Array, k, Output: Kth smallest element",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: ["kth", "smallest", "quickselect", "partition"],
              details: [
                "Keywords: 'kth smallest', 'partition' → QuickSelect algorithm",
                "Pattern: Partition and recurse → Only search relevant partition",
                "This is a 'selection algorithm' problem",
                "Similar to: QuickSort, median finding",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Array: Input is already an array",
                "Recursive call stack: O(log n) space",
                "In-place algorithm",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: QuickSelect",
                "  - Partition array around pivot",
                "  - If pivot index == k-1: return pivot",
                "  - If pivot index > k-1: search left",
                "  - If pivot index < k-1: search right",
                "  - Time: O(n) average, O(n²) worst",
                "  - Space: O(log n)",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • k = 1: Minimum element",
                "  • k = n: Maximum element",
                "  • k out of range: Handle error",
                "",
                "Optimization:",
                "  • O(n) average time - better than O(n log n) sorting",
                "  • Only search relevant partition",
                "  • Random pivot: O(n) expected",
                "",
                "Implementation:",
                "  1. Partition array around pivot",
                "  2. If pivotIndex == k-1: return arr[pivotIndex]",
                "  3. If pivotIndex > k-1: search left",
                "  4. If pivotIndex < k-1: search right",
              ],
            },
          ],
          pattern: "QuickSelect (Selection Algorithm)",
          complexity: {
            time: "O(n) average, O(n²) worst case",
            space: "O(log n) - Recursion stack",
          },
        }}
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
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Find minimum difference between any two elements",
                "Difference = |arr[i] - arr[j]|",
                "Can be between adjacent or non-adjacent elements?",
                "Input: Array, Output: Minimum difference",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: ["minimum", "difference", "adjacent", "sort"],
              details: [
                "Keywords: 'minimum difference', 'adjacent' → Sorting + linear scan",
                "Pattern: Sort first → Minimum difference is between adjacent elements",
                "This is a 'sorting + linear scan' problem",
                "Similar to: Closest pair, minimum gap",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Array: Input is already an array",
                "Sort in-place: O(1) space",
                "No additional data structures needed",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Sort + Linear Scan",
                "  - Sort array: O(n log n)",
                "  - Find min difference between adjacent elements: O(n)",
                "  - Total: O(n log n) time, O(1) space",
                "",
                "Alternative: Brute force O(n²) - no sorting needed",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • Array with 2 elements: Return |arr[0] - arr[1]|",
                "  • Duplicate elements: Difference = 0",
                "",
                "Optimization:",
                "  • Sort first: O(n log n) + O(n) = O(n log n)",
                "  • Better than O(n²) brute force",
                "  • O(1) space if in-place sort",
                "",
                "Implementation:",
                "  1. Sort array",
                "  2. minDiff = Infinity",
                "  3. For i = 0 to n-2:",
                "     - diff = arr[i+1] - arr[i]",
                "     - minDiff = min(minDiff, diff)",
                "  4. Return minDiff",
              ],
            },
          ],
          pattern: "Sorting + Linear Scan",
          complexity: {
            time: "O(n log n) - Sorting dominates",
            space: "O(1) - In-place sorting",
          },
        }}
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
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Distribute chocolate packets among students",
                "Minimize difference between max and min packets given",
                "Each student gets exactly one packet",
                "Input: Array of packets, number of students, Output: Minimum difference",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: [
                "distribute",
                "minimum",
                "difference",
                "sliding window",
                "sort",
              ],
              details: [
                "Keywords: 'minimum difference', 'distribute' → Sliding window after sorting",
                "Pattern: Sort + sliding window → Find min difference in window",
                "This is a 'sliding window' problem",
                "Similar to: Minimum difference, closest pair",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Array: Input is already an array",
                "Sort in-place: O(1) space",
                "No additional data structures needed",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Sort + Sliding Window",
                "  - Sort packets: O(n log n)",
                "  - Sliding window of size 'students'",
                "  - Find min difference in each window: O(n)",
                "  - Total: O(n log n) time, O(1) space",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • Not enough packets: Return -1",
                "  • Zero students: Return 0",
                "  • Empty array: Return 0",
                "",
                "Optimization:",
                "  • Sort first: O(n log n)",
                "  • Sliding window: O(n)",
                "  • O(1) space if in-place sort",
                "",
                "Implementation:",
                "  1. Sort packets",
                "  2. minDiff = Infinity",
                "  3. For i = 0 to n-students:",
                "     - diff = packets[i+students-1] - packets[i]",
                "     - minDiff = min(minDiff, diff)",
                "  4. Return minDiff",
              ],
            },
          ],
          pattern: "Sorting + Sliding Window",
          complexity: {
            time: "O(n log n) - Sorting dominates",
            space: "O(1) - In-place sorting",
          },
        }}
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
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Sort array with two types of elements (0s and 1s, negatives and positives, etc.)",
                "All elements of first type should come before second type",
                "In-place sorting required",
                "Input: Array with two types, Output: Sorted array",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: ["two types", "two pointers", "partition", "swap"],
              details: [
                "Keywords: 'two types', 'sort' → Two pointers partitioning",
                "Pattern: Two pointers from ends → Swap elements of wrong type",
                "This is a 'two-way partitioning' problem",
                "Similar to: Dutch National Flag, partition",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Array: Input is already an array",
                "Two pointers: left and right",
                "O(1) space - in-place",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Two Pointers Partitioning",
                "  - left = 0, right = n-1",
                "  - While left < right:",
                "    - Move left until finds second type",
                "    - Move right until finds first type",
                "    - Swap if pointers haven't crossed",
                "  - Time: O(n), Space: O(1)",
                "",
                "Alternative: Count and fill - O(n) time, O(1) space",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • All same type: Already sorted",
                "  • Empty array: Return as is",
                "",
                "Optimization:",
                "  • Single pass: O(n) time",
                "  • O(1) space - in-place",
                "  • Count and fill: Also O(n) but simpler",
                "",
                "Implementation:",
                "  1. left = 0, right = n-1",
                "  2. While left < right:",
                "     - While arr[left] is first type: left++",
                "     - While arr[right] is second type: right--",
                "     - If left < right: swap, left++, right--",
                "  3. Return arr",
              ],
            },
          ],
          pattern: "Two Pointers Partitioning",
          complexity: {
            time: "O(n) - Single pass through array",
            space: "O(1) - In-place partitioning",
          },
        }}
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
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Sort array with three types of elements (0s, 1s, 2s, etc.)",
                "All 0s on left, 1s in middle, 2s on right",
                "In-place sorting required",
                "Input: Array with three types, Output: Sorted array",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: [
                "three types",
                "dutch national flag",
                "three pointers",
              ],
              details: [
                "Keywords: 'three types', 'dutch national flag' → Three pointers algorithm",
                "Pattern: Three pointers → Maintain three regions",
                "This is a 'three-way partitioning' problem",
                "Similar to: Two types sorting, partition",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Array: Input is already an array",
                "Three pointers: low, mid, high",
                "O(1) space - in-place",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Dutch National Flag (Three Pointers)",
                "  - low = 0, mid = 0, high = n-1",
                "  - While mid <= high:",
                "    - If arr[mid] == 0: swap with low, low++, mid++",
                "    - If arr[mid] == 1: mid++",
                "    - If arr[mid] == 2: swap with high, high--",
                "  - Time: O(n), Space: O(1)",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • All same type: Already sorted",
                "  • Empty array: Return as is",
                "",
                "Optimization:",
                "  • Single pass: O(n) time",
                "  • O(1) space - in-place",
                "  • Optimal for three-way partitioning",
                "",
                "Implementation:",
                "  1. low = 0, mid = 0, high = n-1",
                "  2. While mid <= high:",
                "     - If arr[mid] == 0: swap(arr[low], arr[mid]), low++, mid++",
                "     - Else if arr[mid] == 1: mid++",
                "     - Else: swap(arr[mid], arr[high]), high--",
                "  3. Return arr",
              ],
            },
          ],
          pattern: "Dutch National Flag (Three-Way Partitioning)",
          complexity: {
            time: "O(n) - Single pass through array",
            space: "O(1) - In-place partitioning",
          },
        }}
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
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Merge overlapping intervals",
                "Two intervals overlap if start of one <= end of previous",
                "Return merged intervals",
                "Input: Array of intervals, Output: Merged intervals",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: ["merge", "overlapping", "intervals", "sort"],
              details: [
                "Keywords: 'merge overlapping intervals', 'sort' → Sort + linear merge",
                "Pattern: Sort by start → Merge consecutive overlapping intervals",
                "This is a 'sorting + merging' problem",
                "Similar to: Merge intervals, insert interval",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Array: Input is already an array of intervals",
                "Result array: Store merged intervals",
                "O(1) space if in-place merge",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Sort + Linear Merge",
                "  - Sort intervals by start time: O(n log n)",
                "  - Iterate and merge overlapping: O(n)",
                "  - Total: O(n log n) time, O(1) space",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • No overlapping: Return all intervals",
                "  • All overlapping: Return single interval",
                "  • Empty array: Return empty",
                "",
                "Optimization:",
                "  • Sort first: O(n log n)",
                "  • Single pass merge: O(n)",
                "  • O(1) space if in-place",
                "",
                "Implementation:",
                "  1. Sort intervals by start time",
                "  2. result = [intervals[0]]",
                "  3. For i = 1 to n-1:",
                "     - If intervals[i][0] <= result[last][1]:",
                "       * Merge: result[last][1] = max(result[last][1], intervals[i][1])",
                "     - Else: result.push(intervals[i])",
                "  4. Return result",
              ],
            },
          ],
          pattern: "Sorting + Linear Merge",
          complexity: {
            time: "O(n log n) - Sorting dominates",
            space: "O(1) - Excluding result array",
          },
        }}
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
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Find maximum number of guests present at any time",
                "Given arrival and departure times",
                "Count guests at each time point",
                "Input: Arrival array, departure array, Output: Maximum guests",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: ["maximum", "guests", "events", "two pointers", "sort"],
              details: [
                "Keywords: 'maximum guests', 'arrival departure' → Event-based counting",
                "Pattern: Sort events → Process and count",
                "This is an 'event-based counting' problem",
                "Similar to: Merge intervals, meeting rooms",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Two arrays: Arrival and departure times",
                "Sort both arrays",
                "Two pointers: For arrival and departure",
                "O(1) space",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Sort + Two Pointers",
                "  - Sort arrival and departure: O(n log n)",
                "  - Two pointers: i for arrival, j for departure",
                "  - If arrival[i] <= departure[j]: count++, i++",
                "  - Else: count--, j++",
                "  - Track maximum count",
                "  - Time: O(n log n), Space: O(1)",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • No guests: Return 0",
                "  • All arrive before any depart: Count = n",
                "",
                "Optimization:",
                "  • Sort first: O(n log n)",
                "  • Single pass: O(n)",
                "  • O(1) space",
                "",
                "Implementation:",
                "  1. Sort arrival and departure arrays",
                "  2. i = 0, j = 0, count = 0, maxCount = 0",
                "  3. While i < n and j < n:",
                "     - If arrival[i] <= departure[j]: count++, i++",
                "     - Else: count--, j++",
                "     - maxCount = max(maxCount, count)",
                "  4. Return maxCount",
              ],
            },
          ],
          pattern: "Event-Based Counting (Two Pointers)",
          complexity: {
            time: "O(n log n) - Sorting dominates",
            space: "O(1) - In-place sorting",
          },
        }}
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
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Sort array using Cycle Sort",
                "Minimize number of write operations",
                "Each element placed in correct position in cycles",
                "Input: Unsorted array, Output: Sorted array",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: ["cycle sort", "minimize writes", "cycles", "position"],
              details: [
                "Keywords: 'cycle sort', 'minimize writes' → Cycle-based sorting",
                "Pattern: Find correct position → Place element in cycle",
                "This is a 'cycle-based sorting' problem",
                "Similar to: Selection sort, counting sort",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Array: Input is already an array",
                "Variables: To track position and cycles",
                "O(1) space - in-place",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Cycle Sort",
                "  - For each element, find its correct position",
                "  - Place element in cycle",
                "  - Continue until all elements in correct position",
                "  - Time: O(n²), Space: O(1)",
                "  - Optimal for minimizing writes",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • Already sorted: Still O(n²) but minimal writes",
                "  • Duplicate elements: Handle appropriately",
                "",
                "Optimization:",
                "  • Minimizes writes: Useful for flash memory",
                "  • O(n²) time but optimal writes",
                "  • In-place: O(1) space",
                "",
                "Implementation:",
                "  1. For cycleStart = 0 to n-2:",
                "     - item = arr[cycleStart]",
                "     - Find correct position (pos)",
                "     - If pos != cycleStart:",
                "       * Place item at pos, continue cycle",
                "  2. Return arr",
              ],
            },
          ],
          pattern: "Cycle-Based Sorting (Minimize Writes)",
          complexity: {
            time: "O(n²) - Find position for each element",
            space: "O(1) - In-place sorting",
          },
        }}
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
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Sort array using Heap Sort",
                "Build max heap, extract maximum repeatedly",
                "Guaranteed O(n log n) performance",
                "Input: Unsorted array, Output: Sorted array",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: ["heap sort", "max heap", "extract", "heapify"],
              details: [
                "Keywords: 'heap sort', 'max heap' → Heap-based sorting",
                "Pattern: Build heap → Extract maximum → Heapify",
                "This is a 'heap-based sorting' problem",
                "Similar to: Priority queue, heap operations",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Array: Input is already an array (used as heap)",
                "Heap operations: Build heap, extract max, heapify",
                "O(1) space - in-place",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Heap Sort",
                "  - Build max heap: O(n)",
                "  - For i = n-1 to 1:",
                "    - Swap root with arr[i]",
                "    - Heapify root: O(log n)",
                "  - Time: O(n log n), Space: O(1)",
                "  - Guaranteed O(n log n) in all cases",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • Already sorted: Still O(n log n)",
                "  • Reverse sorted: Still O(n log n)",
                "",
                "Optimization:",
                "  • Guaranteed O(n log n) - no worst case",
                "  • In-place: O(1) space",
                "  • Unstable but consistent performance",
                "",
                "Implementation:",
                "  1. Build max heap from array",
                "  2. For i = n-1 to 1:",
                "     - Swap arr[0] and arr[i]",
                "     - Heapify(arr, 0, i)",
                "  3. Return arr",
              ],
            },
          ],
          pattern: "Heap-Based Sorting",
          complexity: {
            time: "O(n log n) - Guaranteed in all cases",
            space: "O(1) - In-place sorting",
          },
        }}
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
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Sort array using Counting Sort",
                "Only works for non-negative integers with limited range",
                "Count frequency, then reconstruct",
                "Input: Array of integers, Output: Sorted array",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: ["counting sort", "frequency", "count", "range"],
              details: [
                "Keywords: 'counting sort', 'frequency' → Frequency-based sorting",
                "Pattern: Count frequencies → Reconstruct sorted array",
                "This is a 'frequency-based sorting' problem",
                "Similar to: Bucket sort, radix sort",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Array: Input is already an array",
                "Count array: To store frequencies (O(k) space)",
                "Result array: To store sorted elements",
                "O(k) space where k is range",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Counting Sort",
                "  - Find max element: O(n)",
                "  - Count frequencies: O(n)",
                "  - Convert to cumulative counts: O(k)",
                "  - Reconstruct sorted array: O(n)",
                "  - Time: O(n+k), Space: O(k)",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • Large range: Not efficient",
                "  • Negative numbers: Need offset",
                "",
                "Optimization:",
                "  • O(n+k) time - linear when k is small",
                "  • Stable sort",
                "  • Only for limited range integers",
                "",
                "Implementation:",
                "  1. Find max element",
                "  2. Create count array of size max+1",
                "  3. Count frequencies",
                "  4. Convert to cumulative counts",
                "  5. Reconstruct sorted array",
              ],
            },
          ],
          pattern: "Frequency-Based Sorting",
          complexity: {
            time: "O(n+k) - Where k is range of input",
            space: "O(k) - Count array",
          },
        }}
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
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Sort array using Radix Sort",
                "Sort digit by digit from LSD to MSD",
                "Uses counting sort as subroutine",
                "Input: Array of integers, Output: Sorted array",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: ["radix sort", "digit", "LSD", "MSD", "counting sort"],
              details: [
                "Keywords: 'radix sort', 'digit by digit' → Digit-based sorting",
                "Pattern: Sort by each digit → Use counting sort",
                "This is a 'digit-based sorting' problem",
                "Similar to: Counting sort, bucket sort",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Array: Input is already an array",
                "Count array: For counting sort (O(k) space)",
                "Result array: For storing sorted elements",
                "O(n+k) space",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Radix Sort",
                "  - Find max digits: O(n)",
                "  - For each digit (LSD to MSD):",
                "    - Apply counting sort on that digit",
                "  - Time: O(d(n+k)), Space: O(n+k)",
                "  - Where d is number of digits",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • Different number of digits: Pad with zeros",
                "  • Negative numbers: Handle separately",
                "",
                "Optimization:",
                "  • O(d(n+k)) time - linear when d is small",
                "  • Stable sort",
                "  • Good for integers with many digits",
                "",
                "Implementation:",
                "  1. Find max element to determine digits",
                "  2. For each digit position (LSD to MSD):",
                "     - Apply counting sort on that digit",
                "  3. Return sorted array",
              ],
            },
          ],
          pattern: "Digit-Based Sorting (Radix Sort)",
          complexity: {
            time: "O(d(n+k)) - Where d is number of digits",
            space: "O(n+k) - Counting sort space",
          },
        }}
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
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Sort array using Bucket Sort",
                "Distribute elements into buckets",
                "Sort each bucket, then concatenate",
                "Input: Array of numbers, Output: Sorted array",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: ["bucket sort", "buckets", "distribute", "concatenate"],
              details: [
                "Keywords: 'bucket sort', 'buckets' → Bucket-based sorting",
                "Pattern: Distribute → Sort buckets → Concatenate",
                "This is a 'bucket-based sorting' problem",
                "Similar to: Counting sort, radix sort",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Array: Input is already an array",
                "Buckets: Array of lists/arrays",
                "O(n+k) space for buckets",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Bucket Sort",
                "  - Create n buckets",
                "  - Distribute elements into buckets: O(n)",
                "  - Sort each bucket: O(n log n) average",
                "  - Concatenate buckets: O(n)",
                "  - Time: O(n+k) average, O(n²) worst, Space: O(n+k)",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • All elements in one bucket: O(n²) worst case",
                "  • Uniform distribution: O(n) average",
                "",
                "Optimization:",
                "  • O(n+k) average when uniformly distributed",
                "  • Good for floating point numbers",
                "  • Can use insertion sort for small buckets",
                "",
                "Implementation:",
                "  1. Create n empty buckets",
                "  2. Distribute elements into buckets",
                "  3. Sort each bucket individually",
                "  4. Concatenate all buckets",
                "  5. Return sorted array",
              ],
            },
          ],
          pattern: "Bucket-Based Sorting",
          complexity: {
            time: "O(n+k) average, O(n²) worst case",
            space: "O(n+k) - Buckets",
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
        className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors mb-4"
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
                    ? "text-emerald-400 border-b-2 border-emerald-400"
                    : "text-gray-400 hover:text-gray-300"
                }`}
              >
                Solution
              </button>
              <button
                onClick={() => setActiveTab("approach")}
                className={`px-4 py-2 font-semibold transition-colors ${
                  activeTab === "approach"
                    ? "text-emerald-400 border-b-2 border-emerald-400"
                    : "text-gray-400 hover:text-gray-300"
                }`}
              >
                Approach
              </button>
            </div>
          )}

          {/* Tab Content */}
          {activeTab === "solution" && (
        <div className="space-y-4">
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

// Approach Tab Component
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
