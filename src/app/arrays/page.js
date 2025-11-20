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
            code={{
              JavaScript: `// Different ways to create arrays in JavaScript
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
arr1.shift();                   // Remove from start: [1,2,3,4,5]`,
              Java: `import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class ArrayBasics {
    public static void main(String[] args) {
        // Different ways to create arrays in Java
        int[] arr1 = {1, 2, 3, 4, 5};                    // Literal
        int[] arr2 = new int[5];                        // Size specified
        int[] arr3 = new int[]{1, 2, 3, 4, 5};          // With elements
        
        // Using ArrayList (dynamic size)
        List<Integer> arrList = new ArrayList<>();
        arrList.add(1);
        arrList.add(2);
        arrList.add(3);
        
        // Common operations
        System.out.println(arr1[0]);           // Access: 1
        System.out.println(arr1.length);       // Length: 5
        
        // For ArrayList
        arrList.add(6);                        // Add to end
        arrList.remove(arrList.size() - 1);    // Remove from end
        arrList.add(0, 0);                     // Add to start
        arrList.remove(0);                     // Remove from start
    }
}`,
            }}
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
              ⚡ Kadane&apos;s Algorithm
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
        solutions={{
          JavaScript: `// Method 1: Linear search
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
console.log(findLargest([5, 5, 5, 5]));     // 5`,
          Java: `public class LargestElement {
    // Method 1: Linear search
    public static int findLargest(int[] arr) {
        if (arr.length == 0) return -1;
        
        int max = arr[0];
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        return max;
    }
    
    // Method 2: Using Collections.max (for List)
    public static int findLargestList(List<Integer> list) {
        return Collections.max(list);
    }
    
    // Method 3: Using Stream API
    public static int findLargestStream(int[] arr) {
        return Arrays.stream(arr).max().orElse(-1);
    }
    
    public static void main(String[] args) {
        System.out.println(findLargest(new int[]{3, 7, 2, 9, 1}));  // 9
        System.out.println(findLargest(new int[]{5, 5, 5, 5}));     // 5
    }
}`,
        }}
        explanation="Time: O(n), Space: O(1). We need to check every element at least once to find the maximum."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "We need to find the largest (maximum) element in an array",
                "What if array is empty? Return -1 or throw error?",
                "What if all elements are same? Return that element",
                "Input: Array of integers, Output: Largest integer",
                "Can array contain negative numbers? Yes, handle all integers",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: ["largest", "maximum", "find", "compare"],
              details: [
                "Keywords: 'largest', 'maximum' → Need to compare all elements",
                "Pattern: Finding extremum (max/min) → Linear scan required",
                "This is a 'search and compare' problem",
                "Similar to: Finding minimum, finding kth largest",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Array: Input is already an array, no conversion needed",
                "Single variable: Need to track 'max' value",
                "No need for additional data structures",
                "Simple variable is sufficient for O(1) space",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Option 1: Linear scan (Optimal)",
                "  - Initialize max with first element",
                "  - Compare each element with max, update if larger",
                "  - Time: O(n), Space: O(1)",
                "",
                "Option 2: Built-in functions (Language specific)",
                "  - Math.max(...arr) in JavaScript",
                "  - Collections.max() in Java",
                "  - Time: O(n), Space: O(1) but may have overhead",
                "",
                "Best Choice: Option 1 - Simple, clear, optimal",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • Empty array: Return -1 or handle appropriately",
                "  • Single element: Return that element",
                "  • All same elements: Return that element",
                "",
                "Optimization:",
                "  • Single pass through array - O(n) time",
                "  • Only one variable needed - O(1) space",
                "  • Start from index 1 (not 0) to avoid redundant comparison",
                "",
                "Implementation:",
                "  1. Check if array is empty, return -1",
                "  2. Initialize max = arr[0]",
                "  3. Loop from i=1 to n-1:",
                "     - If arr[i] > max, update max = arr[i]",
                "  4. Return max",
              ],
            },
          ],
          pattern: "Linear Scan with Comparison",
          complexity: {
            time: "O(n) - Must check every element",
            space: "O(1) - Only one variable used",
          },
        }}
      />

      <ProblemBlock
        title="2. Second Largest Element in Array"
        difficulty="Easy"
        description="Find the second largest element in an array."
        solutions={{
          JavaScript: `function findSecondLargest(arr) {
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
console.log(findSecondLargest([9, 9, 8, 7]));     // 8`,
          Java: `import java.util.Arrays;

public class SecondLargest {
    public static int findSecondLargest(int[] arr) {
        if (arr.length < 2) return -1;
        
        int largest = Math.max(arr[0], arr[1]);
        int secondLargest = Math.min(arr[0], arr[1]);
        
        for (int i = 2; i < arr.length; i++) {
            if (arr[i] > largest) {
                secondLargest = largest;
                largest = arr[i];
            } else if (arr[i] > secondLargest && arr[i] != largest) {
                secondLargest = arr[i];
            }
        }
        
        return secondLargest;
    }
    
    // Alternative: Sort and return second element
    public static int findSecondLargestSort(int[] arr) {
        if (arr.length < 2) return -1;
        
        int[] sorted = arr.clone();
        Arrays.sort(sorted);
        return sorted[sorted.length - 2];
    }
    
    public static void main(String[] args) {
        System.out.println(findSecondLargest(new int[]{3, 7, 2, 9, 1}));  // 7
        System.out.println(findSecondLargest(new int[]{9, 9, 8, 7}));     // 8
    }
}`,
        }}
        explanation="Track both largest and second largest. Update both when a new largest is found. Time: O(n), Space: O(1)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "We need to find the second largest element in an array",
                "What if array has less than 2 elements? Return -1 or handle edge case",
                "What if all elements are same? Return that element or -1?",
                "What if there are duplicates? We want distinct second largest",
                "Input: Array of integers, Output: Second largest integer",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: ["largest", "second", "maximum", "track", "compare"],
              details: [
                "Keywords: 'second largest', 'maximum' → Need to track top 2 elements",
                "Pattern: Finding kth largest/smallest → Can use sorting or tracking",
                "This is a 'tracking' problem - maintain state of largest and second largest",
                "Similar to: Finding largest element, but need to track second as well",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Array: Input is already an array, no need to convert",
                "Two variables: Need to track 'largest' and 'secondLargest'",
                "No need for hash map, set, or other complex structures",
                "Simple variables are sufficient for O(1) space solution",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Option 1: Linear scan with tracking (Optimal)",
                "  - Initialize largest and secondLargest from first two elements",
                "  - For each remaining element, update both if needed",
                "  - Time: O(n), Space: O(1)",
                "",
                "Option 2: Sort and pick second element (Simpler but slower)",
                "  - Sort array in descending order",
                "  - Return element at index 1",
                "  - Time: O(n log n), Space: O(1) or O(n) depending on sort",
                "",
                "Best Choice: Option 1 - Single pass, optimal time and space",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases to Handle:",
                "  • Array length < 2: Return -1",
                "  • All elements same: Return that element (or -1 based on requirement)",
                "  • Duplicates: Check arr[i] !== largest to avoid duplicates",
                "",
                "Optimization:",
                "  • Single pass through array - O(n) time",
                "  • Only two variables needed - O(1) space",
                "  • No need to sort entire array",
                "",
                "Implementation Strategy:",
                "  1. Initialize largest and secondLargest from first 2 elements",
                "  2. For each element from index 2:",
                "     - If element > largest: Update both",
                "     - Else if element > secondLargest and ≠ largest: Update secondLargest",
                "  3. Return secondLargest",
              ],
            },
          ],
          pattern: "Linear Scan with State Tracking",
          complexity: {
            time: "O(n) - Single pass through array",
            space: "O(1) - Only two variables used",
          },
        }}
      />

      <ProblemBlock
        title="3. Check if an Array is Sorted"
        difficulty="Easy"
        description="Check if array is sorted in ascending order."
        solutions={{
          JavaScript: `function isSorted(arr) {
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
console.log(isSorted([5, 4, 3, 2, 1]));     // false (ascending check)`,
          Java: `public class CheckSorted {
    // Check if array is sorted in ascending order
    public static boolean isSorted(int[] arr) {
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] < arr[i - 1]) {
                return false;
            }
        }
        return true;
    }
    
    // For descending order
    public static boolean isSortedDescending(int[] arr) {
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] > arr[i - 1]) {
                return false;
            }
        }
        return true;
    }
    
    // Generic function
    public static boolean isSorted(int[] arr, boolean ascending) {
        for (int i = 1; i < arr.length; i++) {
            if (ascending && arr[i] < arr[i - 1]) return false;
            if (!ascending && arr[i] > arr[i - 1]) return false;
        }
        return true;
    }
    
    public static void main(String[] args) {
        System.out.println(isSorted(new int[]{1, 2, 3, 4, 5}));     // true
        System.out.println(isSorted(new int[]{1, 3, 2, 4, 5}));     // false
        System.out.println(isSorted(new int[]{5, 4, 3, 2, 1}));     // false (ascending check)
    }
}`,
        }}
        explanation="Compare each element with its predecessor. If any element is smaller than previous, array is not sorted. Time: O(n), Space: O(1)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "We need to check if array is sorted in ascending order",
                "What if array is empty? Return true (empty is considered sorted)",
                "What if array has 1 element? Return true",
                "What if array has duplicates? [1,1,2,2] is sorted",
                "Input: Array, Output: Boolean (true if sorted)",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: ["sorted", "ascending", "order", "check", "compare"],
              details: [
                "Keywords: 'sorted', 'ascending' → Need to verify order",
                "Pattern: Validation problem → Check property holds for all pairs",
                "This is a 'linear validation' problem",
                "Similar to: Check if array is palindrome, check if monotonic",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Array: Input is already an array, no conversion needed",
                "No additional data structures required",
                "Just need to compare adjacent elements",
                "O(1) space solution possible",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Linear scan with early termination",
                "  - Start from index 1 (compare with previous)",
                "  - If any element violates order, return false immediately",
                "  - If all elements pass, return true",
                "  - Time: O(n) worst case, O(1) best case (if first violation)",
                "  - Space: O(1)",
                "",
                "Alternative: Could sort and compare, but O(n log n) - inefficient",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • Empty array: Return true",
                "  • Single element: Return true",
                "  • All same elements: Return true (sorted)",
                "  • Already sorted: Return true",
                "",
                "Optimization:",
                "  • Early termination: Return false as soon as violation found",
                "  • Single pass: O(n) time, O(1) space",
                "  • Start from index 1 (not 0) to compare with previous",
                "",
                "Implementation:",
                "  1. Loop from i=1 to n-1",
                "  2. If arr[i] < arr[i-1], return false",
                "  3. If loop completes, return true",
              ],
            },
          ],
          pattern: "Linear Validation with Early Termination",
          complexity: {
            time: "O(n) - Check all adjacent pairs, O(1) best case",
            space: "O(1) - No extra space needed",
          },
        }}
      />

      <ProblemBlock
        title="4. Reverse an Array"
        difficulty="Easy"
        description="Reverse the elements of an array in-place."
        solutions={{
          JavaScript: `function reverseArray(arr) {
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
console.log(reverseArray([1, 2, 3, 4]));     // [4, 3, 2, 1]`,
          Java: `import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class ReverseArray {
    // Reverse array in-place
    public static void reverseArray(int[] arr) {
        int start = 0;
        int end = arr.length - 1;
        
        while (start < end) {
            // Swap elements
            int temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }
    
    // Alternative: Using Collections.reverse (for List)
    public static void reverseList(List<Integer> list) {
        Collections.reverse(list);
    }
    
    // Recursive approach
    public static void reverseArrayRecursive(int[] arr, int start, int end) {
        if (start >= end) return;
        
        // Swap elements
        int temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        
        reverseArrayRecursive(arr, start + 1, end - 1);
    }
    
    public static void main(String[] args) {
        int[] arr1 = {1, 2, 3, 4, 5};
        reverseArray(arr1);
        System.out.println(Arrays.toString(arr1));  // [5, 4, 3, 2, 1]
        
        int[] arr2 = {1, 2, 3, 4};
        reverseArray(arr2);
        System.out.println(Arrays.toString(arr2));  // [4, 3, 2, 1]
    }
}`,
        }}
        explanation="Use two pointers from start and end, swap elements and move pointers inward. Time: O(n), Space: O(1)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "We need to reverse array elements in-place (modify original array)",
                "Can we use extra array? No, must be in-place",
                "What if array is empty or has 1 element? No change needed",
                "Input: Array, Output: Reversed array (same array modified)",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: ["reverse", "swap", "in-place", "two pointers"],
              details: [
                "Keywords: 'reverse', 'in-place' → Two pointers pattern",
                "Pattern: Symmetric operation → Swap elements from both ends",
                "This is a 'two pointers (opposite ends)' problem",
                "Similar to: Palindrome check, container with most water",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Array: Input is already an array, modify in-place",
                "Two pointers: 'start' and 'end' indices",
                "No additional data structures needed",
                "O(1) space solution possible",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Two pointers from opposite ends",
                "  - Initialize start=0, end=n-1",
                "  - While start < end:",
                "    * Swap arr[start] and arr[end]",
                "    * Increment start, decrement end",
                "  - Time: O(n/2) = O(n), Space: O(1)",
                "",
                "Alternative: Recursive approach (same logic, but uses call stack)",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • Empty array: No operation needed",
                "  • Single element: No operation needed",
                "  • Even length: Swap all pairs",
                "  • Odd length: Middle element stays in place",
                "",
                "Optimization:",
                "  • Only need to iterate n/2 times (not n)",
                "  • In-place: O(1) space",
                "  • Single pass: O(n) time",
                "",
                "Implementation:",
                "  1. Initialize start=0, end=arr.length-1",
                "  2. While start < end:",
                "     - Swap arr[start] and arr[end]",
                "     - start++, end--",
                "  3. Return arr",
              ],
            },
          ],
          pattern: "Two Pointers (Opposite Ends)",
          complexity: {
            time: "O(n) - Iterate through half the array",
            space: "O(1) - Only two pointers used",
          },
        }}
      />

      <ProblemBlock
        title="5. Remove Duplicates from Sorted Array"
        difficulty="Easy"
        description="Remove duplicates from a sorted array in-place and return new length."
        solutions={{
          JavaScript: `function removeDuplicates(arr) {
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
console.log(arr.slice(0, newLength)); // [1, 2, 3, 4, 5]`,
          Java: `import java.util.*;

public class RemoveDuplicates {
    // Remove duplicates from sorted array
    public static int removeDuplicates(int[] arr) {
        if (arr.length == 0) return 0;
        
        int writeIndex = 1;
        
        for (int readIndex = 1; readIndex < arr.length; readIndex++) {
            if (arr[readIndex] != arr[readIndex - 1]) {
                arr[writeIndex] = arr[readIndex];
                writeIndex++;
            }
        }
        
        return writeIndex;
    }
    
    // For unsorted array
    public static int removeDuplicatesUnsorted(int[] arr) {
        Set<Integer> seen = new HashSet<>();
        int writeIndex = 0;
        
        for (int readIndex = 0; readIndex < arr.length; readIndex++) {
            if (!seen.contains(arr[readIndex])) {
                seen.add(arr[readIndex]);
                arr[writeIndex] = arr[readIndex];
                writeIndex++;
            }
        }
        
        return writeIndex;
    }
    
    public static void main(String[] args) {
        int[] arr = {1, 1, 2, 2, 3, 4, 4, 5};
        int newLength = removeDuplicates(arr);
        System.out.println(newLength);           // 5
        System.out.println(Arrays.toString(Arrays.copyOf(arr, newLength))); // [1, 2, 3, 4, 5]
    }
}`,
        }}
        explanation="Use two pointers: read pointer scans array, write pointer tracks position for next unique element. Time: O(n), Space: O(1)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Remove duplicates from sorted array in-place",
                "Return new length (not the array itself)",
                "Array is already sorted, so duplicates are adjacent",
                "What if array is empty? Return 0",
                "Input: Sorted array, Output: New length (unique elements at start)",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: [
                "remove",
                "duplicates",
                "sorted",
                "in-place",
                "two pointers",
              ],
              details: [
                "Keywords: 'remove duplicates', 'sorted', 'in-place' → Two pointers",
                "Pattern: In-place modification → Fast and slow pointers",
                "This is a 'two pointers (same direction)' problem",
                "Similar to: Move zeros, remove element, partition array",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Array: Input is already an array, modify in-place",
                "Two pointers: 'writeIndex' (slow) and 'readIndex' (fast)",
                "No additional data structures needed",
                "O(1) space solution possible",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Two pointers (fast and slow)",
                "  - writeIndex tracks position for next unique element",
                "  - readIndex scans through array",
                "  - If arr[readIndex] != arr[readIndex-1], it's unique",
                "  - Copy to arr[writeIndex] and increment writeIndex",
                "  - Time: O(n), Space: O(1)",
                "",
                "Alternative: Use Set (but requires O(n) space and loses order)",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • Empty array: Return 0",
                "  • All unique: Return n",
                "  • All same: Return 1",
                "",
                "Optimization:",
                "  • Single pass: O(n) time",
                "  • In-place: O(1) space",
                "  • Leverage sorted property: duplicates are adjacent",
                "",
                "Implementation:",
                "  1. If empty, return 0",
                "  2. writeIndex = 1 (first element is always unique)",
                "  3. Loop readIndex from 1 to n-1:",
                "     - If arr[readIndex] != arr[readIndex-1]:",
                "       * arr[writeIndex] = arr[readIndex]",
                "       * writeIndex++",
                "  4. Return writeIndex",
              ],
            },
          ],
          pattern: "Two Pointers (Fast & Slow)",
          complexity: {
            time: "O(n) - Single pass through array",
            space: "O(1) - Only two pointers used",
          },
        }}
      />

      <ProblemBlock
        title="6. Move Zeros to End"
        difficulty="Easy"
        description="Move all zeros to the end while maintaining relative order of non-zero elements."
        solutions={{
          JavaScript: `function moveZeroes(arr) {
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
console.log(moveZeroes([0, 0, 1]));            // [1, 0, 0]`,
          Java: `import java.util.Arrays;

public class MoveZeros {
    // Two-pass approach
    public static void moveZeroes(int[] arr) {
        int writeIndex = 0;
        
        // Move all non-zero elements to the front
        for (int readIndex = 0; readIndex < arr.length; readIndex++) {
            if (arr[readIndex] != 0) {
                arr[writeIndex] = arr[readIndex];
                writeIndex++;
            }
        }
        
        // Fill remaining positions with zeros
        while (writeIndex < arr.length) {
            arr[writeIndex] = 0;
            writeIndex++;
        }
    }
    
    // Alternative: One-pass approach
    public static void moveZeroesOnePass(int[] arr) {
        int left = 0;
        
        for (int right = 0; right < arr.length; right++) {
            if (arr[right] != 0) {
                // Swap
                int temp = arr[left];
                arr[left] = arr[right];
                arr[right] = temp;
                left++;
            }
        }
    }
    
    public static void main(String[] args) {
        int[] arr1 = {0, 1, 0, 3, 12};
        moveZeroes(arr1);
        System.out.println(Arrays.toString(arr1));     // [1, 3, 12, 0, 0]
        
        int[] arr2 = {0, 0, 1};
        moveZeroesOnePass(arr2);
        System.out.println(Arrays.toString(arr2));     // [1, 0, 0]
    }
}`,
        }}
        explanation="Two-pass: First pass moves non-zeros to front, second pass fills remaining with zeros. Time: O(n), Space: O(1)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Move all zeros to the end of array",
                "Maintain relative order of non-zero elements",
                "Must be in-place (modify original array)",
                "What if no zeros? Array stays same",
                "Input: Array, Output: Array with zeros at end",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: ["move", "zeros", "end", "in-place", "two pointers"],
              details: [
                "Keywords: 'move', 'zeros', 'in-place' → Two pointers pattern",
                "Pattern: Partition problem → Separate zeros and non-zeros",
                "This is a 'two pointers (fast & slow)' problem",
                "Similar to: Remove duplicates, remove element, partition array",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Array: Input is already an array, modify in-place",
                "Two pointers: 'writeIndex' (slow) and 'readIndex' (fast)",
                "No additional data structures needed",
                "O(1) space solution possible",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Option 1: Two-pass approach (Clearer)",
                "  - First pass: Move all non-zeros to front",
                "  - Second pass: Fill remaining with zeros",
                "  - Time: O(n), Space: O(1)",
                "",
                "Option 2: One-pass with swapping (More efficient)",
                "  - Use two pointers, swap non-zero with left pointer",
                "  - Time: O(n), Space: O(1)",
                "",
                "Best Choice: Option 2 - Single pass, fewer operations",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • Empty array: No operation",
                "  • No zeros: Array unchanged",
                "  • All zeros: Array unchanged (already at end)",
                "",
                "Optimization:",
                "  • Single pass: O(n) time",
                "  • In-place: O(1) space",
                "  • Minimize swaps: Only swap when needed",
                "",
                "Implementation (One-pass):",
                "  1. left = 0 (position for next non-zero)",
                "  2. Loop right from 0 to n-1:",
                "     - If arr[right] != 0:",
                "       * Swap arr[left] and arr[right]",
                "       * left++",
                "  3. Return arr",
              ],
            },
          ],
          pattern: "Two Pointers (Fast & Slow) / Partition",
          complexity: {
            time: "O(n) - Single pass through array",
            space: "O(1) - Only two pointers used",
          },
        }}
      />

      <ProblemBlock
        title="7. Left Rotate Array by One"
        difficulty="Easy"
        description="Rotate array to the left by one position."
        solutions={{
          JavaScript: `function leftRotateByOne(arr) {
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
console.log(leftRotateByOne([5]));              // [5]`,
          Java: `import java.util.Arrays;
import java.util.ArrayList;
import java.util.List;

public class LeftRotateByOne {
    // Rotate array to the left by one position
    public static void leftRotateByOne(int[] arr) {
        if (arr.length <= 1) return;
        
        int first = arr[0];
        
        // Shift all elements to the left
        for (int i = 0; i < arr.length - 1; i++) {
            arr[i] = arr[i + 1];
        }
        
        // Place first element at the end
        arr[arr.length - 1] = first;
    }
    
    // Using ArrayList (similar to JavaScript array methods)
    public static List<Integer> leftRotateByOneList(List<Integer> list) {
        if (list.size() <= 1) return list;
        
        int first = list.remove(0);
        list.add(first);
        return list;
    }
    
    public static void main(String[] args) {
        int[] arr1 = {1, 2, 3, 4, 5};
        leftRotateByOne(arr1);
        System.out.println(Arrays.toString(arr1));  // [2, 3, 4, 5, 1]
        
        int[] arr2 = {5};
        leftRotateByOne(arr2);
        System.out.println(Arrays.toString(arr2));  // [5]
    }
}`,
        }}
        explanation="Store first element, shift all elements left by one position, place stored element at end. Time: O(n), Space: O(1)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Rotate array left by one position",
                "[1,2,3,4,5] → [2,3,4,5,1]",
                "First element moves to end",
                "Must be in-place",
                "Input: Array, Output: Rotated array",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: ["rotate", "left", "shift", "circular"],
              details: [
                "Keywords: 'rotate', 'left' → Shift elements",
                "Pattern: Circular shift → Store first, shift rest, place at end",
                "This is a 'linear shift' problem",
                "Similar to: Right rotate, rotate by D places",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Array: Input is already an array, modify in-place",
                "Single variable: Store first element temporarily",
                "No additional data structures needed",
                "O(1) space solution possible",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Store and shift",
                "  - Store first element in temp",
                "  - Shift all elements from index 1 to n-1 left by one",
                "  - Place temp at last position",
                "  - Time: O(n), Space: O(1)",
                "",
                "Alternative: Use array methods (shift/push) but may be slower",
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
                "  • Single pass: O(n) time",
                "  • In-place: O(1) space",
                "  • Only one temp variable needed",
                "",
                "Implementation:",
                "  1. If length <= 1, return arr",
                "  2. Store first = arr[0]",
                "  3. Loop i from 0 to n-2: arr[i] = arr[i+1]",
                "  4. arr[n-1] = first",
                "  5. Return arr",
              ],
            },
          ],
          pattern: "Linear Shift / Circular Rotation",
          complexity: {
            time: "O(n) - Shift all elements",
            space: "O(1) - Only one temp variable",
          },
        }}
      />

      <ProblemBlock
        title="8. Left Rotate Array by D Places"
        difficulty="Medium"
        description="Rotate array to the left by D positions efficiently."
        solutions={{
          JavaScript: `function leftRotateByD(arr, d) {
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
console.log(leftRotateByD([1, 2, 3, 4, 5], 2));       // [3, 4, 5, 1, 2]`,
          Java: `import java.util.Arrays;

public class LeftRotateByD {
    // Reverse approach (Most efficient)
    public static void leftRotateByD(int[] arr, int d) {
        int n = arr.length;
        d = d % n; // Handle cases where d > n
        
        if (d == 0) return;
        
        // Reverse first d elements
        reverseArray(arr, 0, d - 1);
        // Reverse remaining elements
        reverseArray(arr, d, n - 1);
        // Reverse entire array
        reverseArray(arr, 0, n - 1);
    }
    
    // Helper function for reversal
    private static void reverseArray(int[] arr, int start, int end) {
        while (start < end) {
            int temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }
    
    // Alternative: Using extra space
    public static void leftRotateByDExtraSpace(int[] arr, int d) {
        int n = arr.length;
        d = d % n;
        
        int[] temp = Arrays.copyOf(arr, d);
        
        // Shift elements
        for (int i = 0; i < n - d; i++) {
            arr[i] = arr[i + d];
        }
        
        // Place rotated elements
        for (int i = 0; i < d; i++) {
            arr[n - d + i] = temp[i];
        }
    }
    
    public static void main(String[] args) {
        int[] arr1 = {1, 2, 3, 4, 5, 6, 7};
        leftRotateByD(arr1, 3);
        System.out.println(Arrays.toString(arr1)); // [4, 5, 6, 7, 1, 2, 3]
        
        int[] arr2 = {1, 2, 3, 4, 5};
        leftRotateByD(arr2, 2);
        System.out.println(Arrays.toString(arr2)); // [3, 4, 5, 1, 2]
    }
}`,
        }}
        explanation="Reverse approach: Reverse first d elements, reverse remaining elements, then reverse entire array. Time: O(n), Space: O(1)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Rotate array left by D positions",
                "[1,2,3,4,5] rotated by 2 → [3,4,5,1,2]",
                "Must be efficient (O(n) time, O(1) space)",
                "What if D > n? Use D % n (circular rotation)",
                "Input: Array and D, Output: Rotated array",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: ["rotate", "D places", "efficient", "reverse"],
              details: [
                "Keywords: 'rotate', 'efficient' → Need optimal algorithm",
                "Pattern: Array rotation → Reverse technique (Juggling algorithm)",
                "This is an 'array manipulation with reverse' problem",
                "Similar to: Right rotate, circular array problems",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Array: Input is already an array, modify in-place",
                "No additional data structures needed",
                "O(1) space solution possible with reverse technique",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Option 1: Reverse technique (Optimal)",
                "  - Reverse first D elements",
                "  - Reverse remaining (n-D) elements",
                "  - Reverse entire array",
                "  - Time: O(n), Space: O(1)",
                "",
                "Option 2: Extra space (Simpler but uses O(d) space)",
                "  - Store first D elements",
                "  - Shift remaining elements",
                "  - Place stored elements at end",
                "  - Time: O(n), Space: O(d)",
                "",
                "Best Choice: Option 1 - Optimal space complexity",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • D = 0: No rotation needed",
                "  • D >= n: Use D % n (circular)",
                "  • D = n: Array unchanged",
                "",
                "Optimization:",
                "  • Reverse technique: O(n) time, O(1) space",
                "  • Handle D > n with modulo",
                "  • Three reverse operations total",
                "",
                "Implementation:",
                "  1. d = d % n (handle d > n)",
                "  2. Reverse arr[0..d-1]",
                "  3. Reverse arr[d..n-1]",
                "  4. Reverse arr[0..n-1]",
                "  5. Return arr",
              ],
            },
          ],
          pattern: "Reverse Technique / Array Rotation",
          complexity: {
            time: "O(n) - Three reverse operations",
            space: "O(1) - Only temporary variables",
          },
        }}
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
        solutions={{
          JavaScript: `function findLeaders(arr) {
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
console.log(findLeaders([1, 2, 3, 4, 0]));      // [4, 0]`,
          Java: `import java.util.*;

public class LeadersInArray {
    // Find all leaders
    public static List<Integer> findLeaders(int[] arr) {
        List<Integer> leaders = new ArrayList<>();
        int maxFromRight = arr[arr.length - 1];
        
        // Last element is always a leader
        leaders.add(maxFromRight);
        
        // Traverse from right to left
        for (int i = arr.length - 2; i >= 0; i--) {
            if (arr[i] > maxFromRight) {
                maxFromRight = arr[i];
                leaders.add(0, arr[i]); // Add to beginning
            }
        }
        
        return leaders;
    }
    
    // Alternative: Store indices instead of values
    public static List<Integer> findLeaderIndices(int[] arr) {
        List<Integer> leaderIndices = new ArrayList<>();
        int maxFromRight = arr[arr.length - 1];
        
        leaderIndices.add(arr.length - 1);
        
        for (int i = arr.length - 2; i >= 0; i--) {
            if (arr[i] > maxFromRight) {
                maxFromRight = arr[i];
                leaderIndices.add(0, i);
            }
        }
        
        return leaderIndices;
    }
    
    public static void main(String[] args) {
        System.out.println(findLeaders(new int[]{16, 17, 4, 3, 5, 2})); // [17, 5, 2]
        System.out.println(findLeaders(new int[]{1, 2, 3, 4, 0}));      // [4, 0]
    }
}`,
        }}
        explanation="Traverse from right to left, keep track of maximum so far. If current element > max, it's a leader. Time: O(n), Space: O(1)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Leader = element greater than all elements to its right",
                "Last element is always a leader",
                "Need to find all leaders in array",
                "Input: Array, Output: Array of leaders",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: ["leader", "greater than", "right", "traverse"],
              details: [
                "Keywords: 'greater than all to right' → Traverse from right",
                "Pattern: Right-to-left scan with max tracking",
                "This is a 'reverse traversal with state' problem",
                "Similar to: Next greater element, stock span",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Array: Input is already an array",
                "Variable: Track maxFromRight",
                "Result array: Store leaders",
                "O(n) space for result (worst case all are leaders)",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Traverse from right to left",
                "  - Start from last element (always leader)",
                "  - Track maximum seen so far",
                "  - If current > maxFromRight, it's a leader",
                "  - Update maxFromRight",
                "  - Time: O(n), Space: O(1) excluding result",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • Empty array: Return empty",
                "  • Single element: Return that element",
                "  • All same: Return all elements",
                "",
                "Optimization:",
                "  • Single pass from right: O(n) time",
                "  • Track max efficiently: O(1) extra space",
                "  • Add leaders to front of result array",
                "",
                "Implementation:",
                "  1. Initialize maxFromRight = arr[n-1], leaders = [arr[n-1]]",
                "  2. Loop i from n-2 to 0:",
                "     - If arr[i] > maxFromRight:",
                "       * Add arr[i] to leaders (front)",
                "       * maxFromRight = arr[i]",
                "  3. Return leaders",
              ],
            },
          ],
          pattern: "Reverse Traversal with State Tracking",
          complexity: {
            time: "O(n) - Single pass from right",
            space: "O(1) excluding result array",
          },
        }}
      />

      <ProblemBlock
        title="10. Maximum Difference Problem with Order"
        difficulty="Easy"
        description="Find maximum difference between two elements where larger element appears after smaller element."
        solutions={{
          JavaScript: `function maxDifference(arr) {
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
console.log(maxDifference([7, 9, 5, 6, 3, 2]));     // 2 (9 - 7)`,
          Java: `public class MaxDifference {
    // Find maximum difference
    public static int maxDifference(int[] arr) {
        if (arr.length < 2) return -1;
        
        int minElement = arr[0];
        int maxDiff = arr[1] - arr[0];
        
        for (int i = 1; i < arr.length; i++) {
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
    public static Result maxDifferenceWithIndices(int[] arr) {
        if (arr.length < 2) return new Result(-1, -1, -1);
        
        int minElement = arr[0];
        int minIndex = 0;
        int maxDiff = arr[1] - arr[0];
        int buyIndex = 0;
        int sellIndex = 1;
        
        for (int i = 1; i < arr.length; i++) {
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
        
        return maxDiff > 0 ? new Result(maxDiff, buyIndex, sellIndex) : new Result(-1, -1, -1);
    }
    
    static class Result {
        int diff, buyIndex, sellIndex;
        Result(int diff, int buyIndex, int sellIndex) {
            this.diff = diff;
            this.buyIndex = buyIndex;
            this.sellIndex = sellIndex;
        }
    }
    
    public static void main(String[] args) {
        System.out.println(maxDifference(new int[]{2, 3, 10, 6, 4, 8, 1})); // 8 (10 - 2)
        System.out.println(maxDifference(new int[]{7, 9, 5, 6, 3, 2}));     // 2 (9 - 7)
    }
}`,
        }}
        explanation="Keep track of minimum element seen so far. For each element, calculate difference and update maximum. Time: O(n), Space: O(1)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Find max difference where larger element comes after smaller",
                "This is like 'buy low, sell high' stock problem",
                "Must maintain order (can't rearrange)",
                "What if array is decreasing? Return -1 or 0?",
                "Input: Array, Output: Maximum difference",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: ["maximum", "difference", "order", "track", "minimum"],
              details: [
                "Keywords: 'maximum difference', 'order' → Track min so far",
                "Pattern: Stock buy-sell problem → Track minimum, calculate profit",
                "This is a 'single pass with state tracking' problem",
                "Similar to: Stock buy sell, best time to buy and sell",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Array: Input is already an array",
                "Two variables: minElement and maxDiff",
                "No additional data structures needed",
                "O(1) space solution possible",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Track minimum and calculate difference",
                "  - Initialize minElement = arr[0]",
                "  - For each element, calculate diff = arr[i] - minElement",
                "  - Update maxDiff if diff is larger",
                "  - Update minElement if arr[i] is smaller",
                "  - Time: O(n), Space: O(1)",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • Array length < 2: Return -1",
                "  • Decreasing array: Return -1 or 0",
                "  • All same elements: Return 0",
                "",
                "Optimization:",
                "  • Single pass: O(n) time",
                "  • Constant space: O(1)",
                "  • Track minimum efficiently",
                "",
                "Implementation:",
                "  1. If length < 2, return -1",
                "  2. minElement = arr[0], maxDiff = arr[1] - arr[0]",
                "  3. Loop i from 1 to n-1:",
                "     - maxDiff = max(maxDiff, arr[i] - minElement)",
                "     - minElement = min(minElement, arr[i])",
                "  4. Return maxDiff > 0 ? maxDiff : -1",
              ],
            },
          ],
          pattern: "Single Pass with State Tracking (Stock Pattern)",
          complexity: {
            time: "O(n) - Single pass through array",
            space: "O(1) - Only two variables used",
          },
        }}
      />

      <ProblemBlock
        title="11. Frequencies in a Sorted Array"
        difficulty="Easy"
        description="Print frequencies of all elements in a sorted array."
        solutions={{
          JavaScript: `function printFrequencies(arr) {
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
// { 1: 3, 2: 1, 3: 2, 5: 4 }`,
          Java: `import java.util.*;

public class Frequencies {
    // Print frequencies in sorted array
    public static void printFrequencies(int[] arr) {
        if (arr.length == 0) return;
        
        int current = arr[0];
        int count = 1;
        
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] == current) {
                count++;
            } else {
                System.out.println(current + ": " + count);
                current = arr[i];
                count = 1;
            }
        }
        
        // Print last element frequency
        System.out.println(current + ": " + count);
    }
    
    // Return frequencies as Map
    public static Map<Integer, Integer> getFrequencies(int[] arr) {
        Map<Integer, Integer> frequencies = new HashMap<>();
        
        for (int element : arr) {
            frequencies.put(element, frequencies.getOrDefault(element, 0) + 1);
        }
        
        return frequencies;
    }
    
    // For sorted array (optimized)
    public static Map<Integer, Integer> getFrequenciesSorted(int[] arr) {
        Map<Integer, Integer> frequencies = new HashMap<>();
        
        if (arr.length == 0) return frequencies;
        
        int current = arr[0];
        int count = 1;
        
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] == current) {
                count++;
            } else {
                frequencies.put(current, count);
                current = arr[i];
                count = 1;
            }
        }
        
        frequencies.put(current, count);
        return frequencies;
    }
    
    public static void main(String[] args) {
        Map<Integer, Integer> result = getFrequenciesSorted(new int[]{1, 1, 1, 2, 3, 3, 5, 5, 5, 5});
        System.out.println(result); // {1=3, 2=1, 3=2, 5=4}
    }
}`,
        }}
        explanation="For sorted array, count consecutive occurrences. For unsorted, use hash map. Time: O(n), Space: O(1) for sorted, O(n) for unsorted."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Count frequency of each element in sorted array",
                "Array is sorted, so duplicates are adjacent",
                "Print or return frequencies",
                "Input: Sorted array, Output: Frequencies map/object",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: ["frequency", "count", "sorted", "consecutive"],
              details: [
                "Keywords: 'frequency', 'sorted' → Count consecutive occurrences",
                "Pattern: Group consecutive elements → Linear scan with counting",
                "This is a 'grouping consecutive elements' problem",
                "Similar to: Remove duplicates, compress string",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Array: Input is already an array",
                "Hash Map: Store frequencies (for unsorted)",
                "Variables: current element and count (for sorted)",
                "O(1) space for sorted, O(n) for unsorted",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "For Sorted Array (Optimal):",
                "  - Count consecutive occurrences",
                "  - When element changes, record frequency",
                "  - Time: O(n), Space: O(1)",
                "",
                "For Unsorted Array:",
                "  - Use hash map to count all occurrences",
                "  - Time: O(n), Space: O(n)",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • Empty array: Return empty",
                "  • All unique: Each frequency = 1",
                "  • All same: Single frequency = n",
                "",
                "Optimization:",
                "  • Leverage sorted property: O(1) space",
                "  • Single pass: O(n) time",
                "  • Count consecutive groups efficiently",
                "",
                "Implementation (Sorted):",
                "  1. If empty, return",
                "  2. current = arr[0], count = 1",
                "  3. Loop i from 1 to n-1:",
                "     - If arr[i] == current: count++",
                "     - Else: Print current:count, current=arr[i], count=1",
                "  4. Print last element frequency",
              ],
            },
          ],
          pattern: "Consecutive Grouping / Frequency Counting",
          complexity: {
            time: "O(n) - Single pass through array",
            space: "O(1) for sorted, O(n) for unsorted",
          },
        }}
      />

      <ProblemBlock
        title="12. Stock Buy and Sell Problem (Part 1)"
        difficulty="Easy"
        description="Find maximum profit from buying and selling stock once."
        solutions={{
          JavaScript: `function maxProfitSingleTransaction(prices) {
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
console.log(maxProfitSingleTransaction([7, 6, 4, 3, 1]));   // 0 (no profit possible)`,
          Java: `public class StockBuySell1 {
    // Find maximum profit from single transaction
    public static int maxProfitSingleTransaction(int[] prices) {
        if (prices.length < 2) return 0;
        
        int minPrice = prices[0];
        int maxProfit = 0;
        
        for (int i = 1; i < prices.length; i++) {
            // Update minimum price seen so far
            minPrice = Math.min(minPrice, prices[i]);
            
            // Calculate profit if sold today
            int profitToday = prices[i] - minPrice;
            
            // Update maximum profit
            maxProfit = Math.max(maxProfit, profitToday);
        }
        
        return maxProfit;
    }
    
    // Return buy and sell days
    public static Result maxProfitWithDays(int[] prices) {
        if (prices.length < 2) return new Result(0, -1, -1);
        
        int minPrice = prices[0];
        int minPriceDay = 0;
        int maxProfit = 0;
        int buyDay = 0;
        int sellDay = 0;
        
        for (int i = 1; i < prices.length; i++) {
            if (prices[i] < minPrice) {
                minPrice = prices[i];
                minPriceDay = i;
            }
            
            int profitToday = prices[i] - minPrice;
            if (profitToday > maxProfit) {
                maxProfit = profitToday;
                buyDay = minPriceDay;
                sellDay = i;
            }
        }
        
        return new Result(maxProfit, buyDay, sellDay);
    }
    
    static class Result {
        int profit, buyDay, sellDay;
        Result(int profit, int buyDay, int sellDay) {
            this.profit = profit;
            this.buyDay = buyDay;
            this.sellDay = sellDay;
        }
    }
    
    public static void main(String[] args) {
        System.out.println(maxProfitSingleTransaction(new int[]{7, 1, 5, 3, 6, 4})); // 5
        System.out.println(maxProfitSingleTransaction(new int[]{7, 6, 4, 3, 1}));   // 0
    }
}`,
        }}
        explanation="Keep track of minimum price seen so far. For each day, calculate profit if sold that day. Time: O(n), Space: O(1)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Buy stock on one day, sell on later day",
                "Maximize profit (sell price - buy price)",
                "Can only make one transaction",
                "What if no profit possible? Return 0",
                "Input: Array of prices, Output: Maximum profit",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: [
                "stock",
                "buy",
                "sell",
                "profit",
                "maximum",
                "minimum",
              ],
              details: [
                "Keywords: 'buy', 'sell', 'profit' → Track min price, calculate profit",
                "Pattern: Stock problem → Track minimum, maximize difference",
                "This is identical to 'Maximum Difference Problem'",
                "Similar to: Maximum difference, best time to buy and sell",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Array: Input is already an array",
                "Two variables: minPrice and maxProfit",
                "No additional data structures needed",
                "O(1) space solution possible",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Track minimum price and calculate profit",
                "  - Initialize minPrice = prices[0]",
                "  - For each day, calculate profit = prices[i] - minPrice",
                "  - Update maxProfit if profit is larger",
                "  - Update minPrice if prices[i] is smaller",
                "  - Time: O(n), Space: O(1)",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • Array length < 2: Return 0",
                "  • Decreasing prices: Return 0",
                "  • All same prices: Return 0",
                "",
                "Optimization:",
                "  • Single pass: O(n) time",
                "  • Constant space: O(1)",
                "  • Track minimum efficiently",
                "",
                "Implementation:",
                "  1. If length < 2, return 0",
                "  2. minPrice = prices[0], maxProfit = 0",
                "  3. Loop i from 1 to n-1:",
                "     - maxProfit = max(maxProfit, prices[i] - minPrice)",
                "     - minPrice = min(minPrice, prices[i])",
                "  4. Return maxProfit",
              ],
            },
          ],
          pattern: "Single Pass with State Tracking (Stock Pattern)",
          complexity: {
            time: "O(n) - Single pass through array",
            space: "O(1) - Only two variables used",
          },
        }}
      />

      <ProblemBlock
        title="13. Stock Buy and Sell Problem (Part 2)"
        difficulty="Medium"
        description="Find maximum profit from buying and selling stock multiple times (no limit on transactions)."
        solutions={{
          JavaScript: `function maxProfitMultipleTransactions(prices) {
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
console.log(maxProfitMultipleTransactions([1, 2, 3, 4, 5]));    // 4 (buy 1 sell 5)`,
          Java: `import java.util.*;

public class StockBuySell2 {
    // Find maximum profit from multiple transactions
    public static int maxProfitMultipleTransactions(int[] prices) {
        int maxProfit = 0;
        
        for (int i = 1; i < prices.length; i++) {
            // If price increases, add the difference to profit
            if (prices[i] > prices[i - 1]) {
                maxProfit += prices[i] - prices[i - 1];
            }
        }
        
        return maxProfit;
    }
    
    // Alternative: Peak and valley approach
    public static int maxProfitPeakValley(int[] prices) {
        int i = 0;
        int valley = prices[0];
        int peak = prices[0];
        int maxProfit = 0;
        
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
    static class Transaction {
        int buyDay, sellDay, profit;
        Transaction(int buyDay, int sellDay, int profit) {
            this.buyDay = buyDay;
            this.sellDay = sellDay;
            this.profit = profit;
        }
    }
    
    public static List<Transaction> maxProfitWithTransactions(int[] prices) {
        List<Transaction> transactions = new ArrayList<>();
        int i = 0;
        
        while (i < prices.length - 1) {
            // Find buy point (valley)
            while (i < prices.length - 1 && prices[i] >= prices[i + 1]) {
                i++;
            }
            int buyDay = i;
            int buyPrice = prices[i];
            
            // Find sell point (peak)
            while (i < prices.length - 1 && prices[i] <= prices[i + 1]) {
                i++;
            }
            int sellDay = i;
            int sellPrice = prices[i];
            
            if (sellPrice > buyPrice) {
                transactions.add(new Transaction(buyDay, sellDay, sellPrice - buyPrice));
            }
        }
        
        return transactions;
    }
    
    public static void main(String[] args) {
        System.out.println(maxProfitMultipleTransactions(new int[]{7, 1, 5, 3, 6, 4})); // 7
        System.out.println(maxProfitMultipleTransactions(new int[]{1, 2, 3, 4, 5}));    // 4
    }
}`,
        }}
        explanation="Sum all positive differences between consecutive days. If price goes up, we make profit. Time: O(n), Space: O(1)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Can buy and sell multiple times",
                "No limit on number of transactions",
                "Maximize total profit",
                "Can buy and sell on same day? Usually no, but check",
                "Input: Array of prices, Output: Maximum profit",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: ["multiple", "transactions", "profit", "greedy"],
              details: [
                "Keywords: 'multiple transactions' → Greedy approach",
                "Pattern: Greedy → Capture every price increase",
                "This is a 'greedy' problem",
                "Similar to: Activity selection, interval scheduling",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Array: Input is already an array",
                "Single variable: Track total profit",
                "No additional data structures needed",
                "O(1) space solution possible",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Greedy - capture all increases",
                "  - Sum all positive differences between consecutive days",
                "  - If prices[i] > prices[i-1], add difference to profit",
                "  - Time: O(n), Space: O(1)",
                "",
                "Alternative: Peak and valley approach (same complexity)",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • Array length < 2: Return 0",
                "  • Decreasing prices: Return 0",
                "  • All same prices: Return 0",
                "",
                "Optimization:",
                "  • Single pass: O(n) time",
                "  • Constant space: O(1)",
                "  • Greedy captures all profit opportunities",
                "",
                "Implementation:",
                "  1. maxProfit = 0",
                "  2. Loop i from 1 to n-1:",
                "     - If prices[i] > prices[i-1]:",
                "       * maxProfit += prices[i] - prices[i-1]",
                "  3. Return maxProfit",
              ],
            },
          ],
          pattern: "Greedy Algorithm",
          complexity: {
            time: "O(n) - Single pass through array",
            space: "O(1) - Only one variable used",
          },
        }}
      />

      <ProblemBlock
        title="14. Trapping Rain Water"
        difficulty="Hard"
        description="Calculate trapped rainwater between bars of different heights."
        solutions={{
          JavaScript: `function trapRainWater(height) {
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
console.log(trapRainWater([4, 2, 0, 3, 2, 5]));                    // 9`,
          Java: `public class TrappingRainWater {
    // Two pointers approach
    public static int trapRainWater(int[] height) {
        if (height.length < 3) return 0;
        
        int left = 0;
        int right = height.length - 1;
        int leftMax = 0;
        int rightMax = 0;
        int water = 0;
        
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
    public static int trapRainWaterPrecompute(int[] height) {
        int n = height.length;
        if (n < 3) return 0;
        
        int[] leftMax = new int[n];
        int[] rightMax = new int[n];
        
        // Compute left max array
        leftMax[0] = height[0];
        for (int i = 1; i < n; i++) {
            leftMax[i] = Math.max(leftMax[i - 1], height[i]);
        }
        
        // Compute right max array
        rightMax[n - 1] = height[n - 1];
        for (int i = n - 2; i >= 0; i--) {
            rightMax[i] = Math.max(rightMax[i + 1], height[i]);
        }
        
        // Calculate trapped water
        int water = 0;
        for (int i = 0; i < n; i++) {
            water += Math.min(leftMax[i], rightMax[i]) - height[i];
        }
        
        return water;
    }
    
    public static void main(String[] args) {
        System.out.println(trapRainWater(new int[]{0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1})); // 6
        System.out.println(trapRainWater(new int[]{4, 2, 0, 3, 2, 5}));                    // 9
    }
}`,
        }}
        explanation="Two pointers approach: Track max height from left and right. Water at position = min(leftMax, rightMax) - height[i]. Time: O(n), Space: O(1)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Calculate trapped rainwater between bars",
                "Water trapped = min(leftMax, rightMax) - height[i]",
                "Water can only be trapped if there are bars on both sides",
                "What if array length < 3? Return 0 (need at least 3 bars)",
                "Input: Array of heights, Output: Total trapped water",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: [
                "trapping",
                "water",
                "height",
                "left",
                "right",
                "maximum",
              ],
              details: [
                "Keywords: 'trapping', 'left', 'right', 'maximum' → Two pointers",
                "Pattern: Need max from both sides → Two pointers or precompute",
                "This is a 'two pointers with state tracking' problem",
                "Similar to: Container with most water, largest rectangle",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Array: Input is already an array",
                "Option 1: Two pointers (optimal space)",
                "Option 2: Precompute leftMax and rightMax arrays (clearer logic)",
                "O(1) space with two pointers, O(n) with precompute",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Option 1: Two pointers (Optimal)",
                "  - Track leftMax and rightMax as we move",
                "  - Move pointer with smaller max",
                "  - Time: O(n), Space: O(1)",
                "",
                "Option 2: Precompute arrays (Clearer)",
                "  - Build leftMax and rightMax arrays",
                "  - Calculate water for each position",
                "  - Time: O(n), Space: O(n)",
                "",
                "Best Choice: Option 1 - Optimal space complexity",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • Array length < 3: Return 0",
                "  • All increasing: No water trapped",
                "  • All decreasing: No water trapped",
                "",
                "Optimization:",
                "  • Two pointers: O(n) time, O(1) space",
                "  • Move smaller pointer to maximize potential",
                "  • Calculate water on the fly",
                "",
                "Implementation (Two pointers):",
                "  1. If length < 3, return 0",
                "  2. left=0, right=n-1, leftMax=0, rightMax=0, water=0",
                "  3. While left < right:",
                "     - If height[left] < height[right]:",
                "       * If height[left] >= leftMax: leftMax = height[left]",
                "       * Else: water += leftMax - height[left]",
                "       * left++",
                "     - Else: (similar for right)",
                "  4. Return water",
              ],
            },
          ],
          pattern: "Two Pointers with State Tracking",
          complexity: {
            time: "O(n) - Single pass with two pointers",
            space: "O(1) - Only variables used",
          },
        }}
      />

      <ProblemBlock
        title="15. Maximum Consecutive 1s"
        difficulty="Easy"
        description="Find the maximum number of consecutive 1s in a binary array."
        solutions={{
          JavaScript: `function findMaxConsecutiveOnes(nums) {
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
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]));        // 2`,
          Java: `public class MaxConsecutiveOnes {
    // Find maximum consecutive 1s
    public static int findMaxConsecutiveOnes(int[] nums) {
        int maxCount = 0;
        int currentCount = 0;
        
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] == 1) {
                currentCount++;
                maxCount = Math.max(maxCount, currentCount);
            } else {
                currentCount = 0;
            }
        }
        
        return maxCount;
    }
    
    // Return start and end indices of longest sequence
    public static Result findMaxConsecutiveOnesWithIndices(int[] nums) {
        int maxCount = 0;
        int currentCount = 0;
        int maxStart = 0;
        int maxEnd = 0;
        int currentStart = 0;
        
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] == 1) {
                if (currentCount == 0) {
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
        
        return new Result(maxCount, maxStart, maxEnd);
    }
    
    // For any value (not just 1s)
    public static int findMaxConsecutive(int[] nums, int target) {
        int maxCount = 0;
        int currentCount = 0;
        
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] == target) {
                currentCount++;
                maxCount = Math.max(maxCount, currentCount);
            } else {
                currentCount = 0;
            }
        }
        
        return maxCount;
    }
    
    static class Result {
        int count, start, end;
        Result(int count, int start, int end) {
            this.count = count;
            this.start = start;
            this.end = end;
        }
    }
    
    public static void main(String[] args) {
        System.out.println(findMaxConsecutiveOnes(new int[]{1, 1, 0, 1, 1, 1}));        // 3
        System.out.println(findMaxConsecutiveOnes(new int[]{1, 0, 1, 1, 0, 1}));        // 2
    }
}`,
        }}
        explanation="Keep track of current consecutive count and maximum seen so far. Reset count when 0 is encountered. Time: O(n), Space: O(1)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Find maximum consecutive 1s in binary array",
                "Array contains only 0s and 1s",
                "Consecutive means adjacent 1s",
                "What if no 1s? Return 0",
                "Input: Binary array, Output: Maximum count",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: ["consecutive", "maximum", "count", "reset"],
              details: [
                "Keywords: 'consecutive', 'maximum' → Track current and max",
                "Pattern: Sliding window / state tracking → Count and reset",
                "This is a 'state tracking with reset' problem",
                "Similar to: Longest substring, maximum consecutive zeros",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Array: Input is already an array",
                "Two variables: currentCount and maxCount",
                "No additional data structures needed",
                "O(1) space solution possible",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Linear scan with state tracking",
                "  - Track current consecutive count",
                "  - Track maximum count seen so far",
                "  - Reset count when 0 encountered",
                "  - Time: O(n), Space: O(1)",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • Empty array: Return 0",
                "  • No 1s: Return 0",
                "  • All 1s: Return n",
                "  • All 0s: Return 0",
                "",
                "Optimization:",
                "  • Single pass: O(n) time",
                "  • Constant space: O(1)",
                "  • Update max on the fly",
                "",
                "Implementation:",
                "  1. maxCount = 0, currentCount = 0",
                "  2. Loop i from 0 to n-1:",
                "     - If nums[i] == 1:",
                "       * currentCount++",
                "       * maxCount = max(maxCount, currentCount)",
                "     - Else: currentCount = 0",
                "  3. Return maxCount",
              ],
            },
          ],
          pattern: "State Tracking with Reset",
          complexity: {
            time: "O(n) - Single pass through array",
            space: "O(1) - Only two variables used",
          },
        }}
      />

      <ProblemBlock
        title="16. Maximum Subarray Sum (Kadane's Algorithm)"
        difficulty="Medium"
        description="Find the maximum sum of contiguous subarray."
        solutions={{
          JavaScript: `function maxSubArraySum(nums) {
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
console.log(maxSubArraySum([1, 2, 3, -2, 5]));                // 9 (subarray: [1, 2, 3, -2, 5])`,
          Java: `import java.util.Arrays;

public class KadanesAlgorithm {
    // Find maximum subarray sum
    public static int maxSubArraySum(int[] nums) {
        int maxSoFar = nums[0];
        int maxEndingHere = nums[0];
        
        for (int i = 1; i < nums.length; i++) {
            // Either extend previous subarray or start new one
            maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
            maxSoFar = Math.max(maxSoFar, maxEndingHere);
        }
        
        return maxSoFar;
    }
    
    // Return subarray indices
    public static Result maxSubArraySumWithIndices(int[] nums) {
        int maxSoFar = nums[0];
        int maxEndingHere = nums[0];
        int start = 0;
        int end = 0;
        int tempStart = 0;
        
        for (int i = 1; i < nums.length; i++) {
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
        
        return new Result(maxSoFar, start, end, Arrays.copyOfRange(nums, start, end + 1));
    }
    
    // Handle all negative numbers
    public static int maxSubArraySumAllNegative(int[] nums) {
        int maxSoFar = nums[0];
        int maxEndingHere = nums[0];
        
        for (int i = 1; i < nums.length; i++) {
            maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
            maxSoFar = Math.max(maxSoFar, maxEndingHere);
        }
        
        return maxSoFar;
    }
    
    static class Result {
        int sum, start, end;
        int[] subarray;
        Result(int sum, int start, int end, int[] subarray) {
            this.sum = sum;
            this.start = start;
            this.end = end;
            this.subarray = subarray;
        }
    }
    
    public static void main(String[] args) {
        System.out.println(maxSubArraySum(new int[]{-2, 1, -3, 4, -1, 2, 1, -5, 4})); // 6
        System.out.println(maxSubArraySum(new int[]{1, 2, 3, -2, 5}));                // 9
    }
}`,
        }}
        explanation="Kadane's Algorithm: For each position, decide whether to extend previous subarray or start new one. Time: O(n), Space: O(1)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Find maximum sum of contiguous subarray",
                "Subarray must be contiguous (consecutive elements)",
                "Can contain negative numbers",
                "What if all negative? Return least negative (or 0)?",
                "Input: Array (may contain negatives), Output: Maximum sum",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: ["maximum", "subarray", "sum", "contiguous", "Kadane"],
              details: [
                "Keywords: 'maximum subarray sum', 'contiguous' → Kadane's algorithm",
                "Pattern: Dynamic programming / greedy → Extend or restart",
                "This is a 'Kadane's algorithm' problem",
                "Similar to: Maximum product subarray, longest increasing subsequence",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Array: Input is already an array",
                "Two variables: maxSoFar and maxEndingHere",
                "No additional data structures needed",
                "O(1) space solution possible",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Kadane's Algorithm",
                "  - For each position, decide: extend or restart?",
                "  - maxEndingHere = max(nums[i], maxEndingHere + nums[i])",
                "  - maxSoFar = max(maxSoFar, maxEndingHere)",
                "  - Time: O(n), Space: O(1)",
                "",
                "Key Insight: If maxEndingHere becomes negative, restart from current",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • Empty array: Return 0 or -infinity",
                "  • All negative: Return maximum (least negative)",
                "  • Single element: Return that element",
                "",
                "Optimization:",
                "  • Single pass: O(n) time",
                "  • Constant space: O(1)",
                "  • Greedy decision at each step",
                "",
                "Implementation:",
                "  1. maxSoFar = nums[0], maxEndingHere = nums[0]",
                "  2. Loop i from 1 to n-1:",
                "     - maxEndingHere = max(nums[i], maxEndingHere + nums[i])",
                "     - maxSoFar = max(maxSoFar, maxEndingHere)",
                "  3. Return maxSoFar",
              ],
            },
          ],
          pattern: "Kadane's Algorithm (Dynamic Programming / Greedy)",
          complexity: {
            time: "O(n) - Single pass through array",
            space: "O(1) - Only two variables used",
          },
        }}
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
        solutions={{
          JavaScript: `function longestEvenOddSubarray(arr) {
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
console.log(longestEvenOddSubarray([7, 10, 13, 14]));        // 4 ([7, 10, 13, 14])`,
          Java: `import java.util.Arrays;

public class LongestEvenOddSubarray {
    // Find longest even-odd subarray
    public static int longestEvenOddSubarray(int[] arr) {
        if (arr.length == 0) return 0;
        
        int maxLength = 1;
        int currentLength = 1;
        
        for (int i = 1; i < arr.length; i++) {
            // Check if current and previous have different parity
            if ((arr[i] % 2 == 0 && arr[i - 1] % 2 != 0) || 
                (arr[i] % 2 != 0 && arr[i - 1] % 2 == 0)) {
                currentLength++;
                maxLength = Math.max(maxLength, currentLength);
            } else {
                currentLength = 1;
            }
        }
        
        return maxLength;
    }
    
    // Return the actual subarray
    public static Result longestEvenOddSubarrayWithElements(int[] arr) {
        if (arr.length == 0) return new Result(0, new int[0]);
        
        int maxLength = 1;
        int currentLength = 1;
        int maxStart = 0;
        int currentStart = 0;
        
        for (int i = 1; i < arr.length; i++) {
            if ((arr[i] % 2 == 0 && arr[i - 1] % 2 != 0) || 
                (arr[i] % 2 != 0 && arr[i - 1] % 2 == 0)) {
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
        
        return new Result(maxLength, Arrays.copyOfRange(arr, maxStart, maxStart + maxLength));
    }
    
    static class Result {
        int length;
        int[] subarray;
        Result(int length, int[] subarray) {
            this.length = length;
            this.subarray = subarray;
        }
    }
    
    public static void main(String[] args) {
        System.out.println(longestEvenOddSubarray(new int[]{10, 12, 14, 7, 8}));     // 3
        System.out.println(longestEvenOddSubarray(new int[]{7, 10, 13, 14}));        // 4
    }
}`,
        }}
        explanation="Track current alternating sequence length. If parity changes, extend sequence; otherwise, start new sequence. Time: O(n), Space: O(1)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Find longest subarray with alternating even-odd pattern",
                "Even followed by odd, or odd followed by even",
                "Subarray must be contiguous",
                "What if no alternating? Return 1 (single element)",
                "Input: Array, Output: Length of longest alternating subarray",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: ["longest", "alternating", "even", "odd", "subarray"],
              details: [
                "Keywords: 'alternating', 'even-odd' → Check parity changes",
                "Pattern: Consecutive grouping → Track sequence length",
                "This is a 'state tracking with reset' problem",
                "Similar to: Maximum consecutive 1s, longest substring",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Array: Input is already an array",
                "Two variables: currentLength and maxLength",
                "No additional data structures needed",
                "O(1) space solution possible",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Linear scan with state tracking",
                "  - Check if current and previous have different parity",
                "  - If yes, extend sequence (currentLength++)",
                "  - If no, reset sequence (currentLength = 1)",
                "  - Update maxLength",
                "  - Time: O(n), Space: O(1)",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • Empty array: Return 0",
                "  • Single element: Return 1",
                "  • All same parity: Return 1",
                "",
                "Optimization:",
                "  • Single pass: O(n) time",
                "  • Constant space: O(1)",
                "  • Check parity efficiently with modulo",
                "",
                "Implementation:",
                "  1. If empty, return 0",
                "  2. maxLength = 1, currentLength = 1",
                "  3. Loop i from 1 to n-1:",
                "     - If (arr[i] % 2 != arr[i-1] % 2):",
                "       * currentLength++",
                "       * maxLength = max(maxLength, currentLength)",
                "     - Else: currentLength = 1",
                "  4. Return maxLength",
              ],
            },
          ],
          pattern: "State Tracking with Reset (Alternating Pattern)",
          complexity: {
            time: "O(n) - Single pass through array",
            space: "O(1) - Only two variables used",
          },
        }}
      />

      <ProblemBlock
        title="18. Maximum Circular Sum Subarray"
        difficulty="Medium"
        description="Find maximum sum subarray considering circular nature (array wraps around)."
        solutions={{
          JavaScript: `function maxCircularSum(arr) {
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
console.log(maxCircularSum([10, -3, -4, 7, 6, 5, -4, -1])); // 23`,
          Java: `public class MaxCircularSum {
    // Find maximum circular sum subarray
    public static int maxCircularSum(int[] arr) {
        int n = arr.length;
        if (n == 0) return 0;
        
        // Case 1: Maximum sum is in non-circular array (Kadane's algorithm)
        int maxKadane = kadane(arr);
        
        // Case 2: Maximum sum is circular (wraps around)
        int totalSum = 0;
        int[] inverted = new int[n];
        for (int i = 0; i < n; i++) {
            totalSum += arr[i];
            inverted[i] = -arr[i]; // Invert array
        }
        
        // Maximum sum of inverted array = minimum sum of original array
        int maxInverted = kadane(inverted);
        int maxCircular = totalSum + maxInverted;
        
        // Return maximum of both cases
        return Math.max(maxKadane, maxCircular);
    }
    
    // Kadane's algorithm helper
    private static int kadane(int[] arr) {
        int maxSoFar = arr[0];
        int maxEndingHere = arr[0];
        
        for (int i = 1; i < arr.length; i++) {
            maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
            maxSoFar = Math.max(maxSoFar, maxEndingHere);
        }
        
        return maxSoFar;
    }
    
    // Alternative approach without modifying original array
    public static int maxCircularSumNoModify(int[] arr) {
        int n = arr.length;
        if (n == 0) return 0;
        
        // Case 1: Maximum sum is non-circular
        int maxKadane = kadane(arr);
        
        // Case 2: Maximum sum is circular
        int totalSum = 0;
        int[] invertedArr = new int[n];
        for (int i = 0; i < n; i++) {
            totalSum += arr[i];
            invertedArr[i] = -arr[i];
        }
        int maxInverted = kadane(invertedArr);
        int maxCircular = totalSum + maxInverted;
        
        return Math.max(maxKadane, maxCircular);
    }
    
    public static void main(String[] args) {
        System.out.println(maxCircularSum(new int[]{8, -8, 9, -9, 10, -11, 12})); // 22
        System.out.println(maxCircularSum(new int[]{10, -3, -4, 7, 6, 5, -4, -1})); // 23
    }
}`,
        }}
        explanation="Two cases: 1) Maximum sum is non-circular (use Kadane's), 2) Maximum sum wraps around (total - minimum sum). Time: O(n), Space: O(1)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Find maximum subarray sum in circular array",
                "Array wraps around (circular)",
                "Subarray can wrap from end to beginning",
                "Two cases: non-circular and circular",
                "Input: Array, Output: Maximum circular sum",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: ["circular", "maximum", "subarray", "wrap", "Kadane"],
              details: [
                "Keywords: 'circular', 'wrap around' → Two cases to consider",
                "Pattern: Kadane's + transformation → Max of two cases",
                "This is a 'problem transformation' problem",
                "Similar to: Maximum subarray sum, circular array problems",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Array: Input is already an array",
                "Variables: For Kadane's algorithm",
                "No additional data structures needed",
                "O(1) space solution possible",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Two cases approach",
                "  Case 1: Non-circular (normal Kadane's)",
                "  Case 2: Circular (total - minimum subarray sum)",
                "  - Invert array, find max sum (gives min sum of original)",
                "  - Circular sum = total - min sum",
                "  - Return max(case1, case2)",
                "  - Time: O(n), Space: O(1)",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • All negative: Return maximum element",
                "  • All positive: Return total sum",
                "",
                "Optimization:",
                "  • Reuse Kadane's algorithm",
                "  • Calculate total sum in one pass",
                "  • O(n) time, O(1) space",
                "",
                "Implementation:",
                "  1. Case 1: maxKadane = kadane(arr)",
                "  2. totalSum = sum of all elements",
                "  3. Case 2: inverted = -arr, maxInverted = kadane(inverted)",
                "  4. maxCircular = totalSum + maxInverted",
                "  5. Return max(maxKadane, maxCircular)",
              ],
            },
          ],
          pattern: "Problem Transformation (Kadane's + Circular)",
          complexity: {
            time: "O(n) - Two passes (Kadane's twice)",
            space: "O(1) - Only variables used",
          },
        }}
      />

      <ProblemBlock
        title="19. Majority Element"
        difficulty="Easy"
        description="Find element that appears more than n/2 times using Boyer-Moore Voting Algorithm."
        solutions={{
          JavaScript: `function majorityElement(nums) {
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
console.log(majorityElement([1, 3, 3, 3, 2]));             // 3`,
          Java: `import java.util.*;

public class MajorityElement {
    // Boyer-Moore Voting Algorithm
    public static int majorityElement(int[] nums) {
        Integer candidate = null;
        int count = 0;
        
        // Phase 1: Find candidate
        for (int num : nums) {
            if (count == 0) {
                candidate = num;
            }
            count += (num == candidate) ? 1 : -1;
        }
        
        // Phase 2: Verify candidate (if not guaranteed to exist)
        count = 0;
        for (int num : nums) {
            if (num == candidate) {
                count++;
            }
        }
        
        return count > nums.length / 2 ? candidate : -1;
    }
    
    // If majority element is guaranteed to exist
    public static int majorityElementGuaranteed(int[] nums) {
        int candidate = nums[0];
        int count = 1;
        
        for (int i = 1; i < nums.length; i++) {
            if (nums[i] == candidate) {
                count++;
            } else {
                count--;
                if (count == 0) {
                    candidate = nums[i];
                    count = 1;
                }
            }
        }
        
        return candidate;
    }
    
    // Alternative: Using hash map
    public static int majorityElementHashMap(int[] nums) {
        Map<Integer, Integer> frequency = new HashMap<>();
        int threshold = nums.length / 2;
        
        for (int num : nums) {
            frequency.put(num, frequency.getOrDefault(num, 0) + 1);
            if (frequency.get(num) > threshold) {
                return num;
            }
        }
        
        return -1;
    }
    
    public static void main(String[] args) {
        System.out.println(majorityElement(new int[]{3, 2, 3}));                    // 3
        System.out.println(majorityElement(new int[]{2, 2, 1, 1, 1, 2, 2}));       // 2
        System.out.println(majorityElement(new int[]{1, 3, 3, 3, 2}));             // 3
    }
}`,
        }}
        explanation="Boyer-Moore Voting: Maintain candidate and count. If count reaches 0, pick new candidate. Majority element survives this process. Time: O(n), Space: O(1)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Find element appearing more than n/2 times",
                "Majority element is guaranteed to exist",
                "Can we use O(n) space? Yes, but optimal is O(1)",
                "Input: Array, Output: Majority element",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: ["majority", "more than n/2", "voting", "Boyer-Moore"],
              details: [
                "Keywords: 'majority', 'more than n/2' → Boyer-Moore Voting",
                "Pattern: Voting algorithm → Cancel out non-majority elements",
                "This is a 'Boyer-Moore Voting Algorithm' problem",
                "Similar to: Majority element II, element appearing n/3 times",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Array: Input is already an array",
                "Two variables: candidate and count",
                "No additional data structures needed",
                "O(1) space solution possible",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Option 1: Boyer-Moore Voting (Optimal)",
                "  - Phase 1: Find candidate",
                "  - Phase 2: Verify candidate (if not guaranteed)",
                "  - Time: O(n), Space: O(1)",
                "",
                "Option 2: Hash Map (Simpler but O(n) space)",
                "  - Count frequencies, find element with count > n/2",
                "  - Time: O(n), Space: O(n)",
                "",
                "Best Choice: Option 1 - Optimal space complexity",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • Single element: Return that element",
                "  • All same: Return that element",
                "",
                "Optimization:",
                "  • Two passes: O(n) time",
                "  • Constant space: O(1)",
                "  • Voting algorithm cancels out pairs",
                "",
                "Implementation:",
                "  Phase 1 (Find candidate):",
                "  1. candidate = null, count = 0",
                "  2. Loop through array:",
                "     - If count == 0: candidate = nums[i]",
                "     - count += (nums[i] == candidate) ? 1 : -1",
                "  Phase 2 (Verify):",
                "  3. Count occurrences of candidate",
                "  4. Return candidate if count > n/2",
              ],
            },
          ],
          pattern: "Boyer-Moore Voting Algorithm",
          complexity: {
            time: "O(n) - Two passes through array",
            space: "O(1) - Only two variables used",
          },
        }}
      />

      <ProblemBlock
        title="20. Minimum Consecutive Flips"
        difficulty="Easy"
        description="Find minimum flips to make all elements same (can flip either 0s or 1s)."
        solutions={{
          JavaScript: `function minFlips(arr) {
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
// { target: 0, flips: 2, flipGroups: [{start: 1, end: 3}, {start: 5, end: 6}] }`,
          Java: `import java.util.*;

public class MinConsecutiveFlips {
    // Find minimum flips
    public static Result minFlips(int[] arr) {
        int n = arr.length;
        
        // Count groups of 0s and 1s
        int zeroGroups = 0;
        int oneGroups = 0;
        
        if (arr[0] == 0) zeroGroups = 1;
        else oneGroups = 1;
        
        for (int i = 1; i < n; i++) {
            if (arr[i] != arr[i - 1]) {
                if (arr[i] == 0) zeroGroups++;
                else oneGroups++;
            }
        }
        
        // Flip the group with fewer occurrences
        int target = zeroGroups < oneGroups ? 0 : 1;
        int flips = Math.min(zeroGroups, oneGroups);
        
        return new Result(target, flips, getFlipGroups(arr, target));
    }
    
    private static List<Group> getFlipGroups(int[] arr, int target) {
        List<Group> groups = new ArrayList<>();
        int start = -1;
        
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == target) {
                if (start == -1) start = i;
            } else {
                if (start != -1) {
                    groups.add(new Group(start, i - 1));
                    start = -1;
                }
            }
        }
        
        // Handle case where last element is target
        if (start != -1) {
            groups.add(new Group(start, arr.length - 1));
        }
        
        return groups;
    }
    
    static class Result {
        int target, flips;
        List<Group> flipGroups;
        Result(int target, int flips, List<Group> flipGroups) {
            this.target = target;
            this.flips = flips;
            this.flipGroups = flipGroups;
        }
    }
    
    static class Group {
        int start, end;
        Group(int start, int end) {
            this.start = start;
            this.end = end;
        }
    }
    
    public static void main(String[] args) {
        Result result = minFlips(new int[]{1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1});
        System.out.println("Target: " + result.target + ", Flips: " + result.flips);
    }
}`,
        }}
        explanation="Count groups of consecutive 0s and 1s. Flip the group with fewer occurrences. Time: O(n), Space: O(1)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Make all elements same by flipping consecutive groups",
                "Can flip either all 0s or all 1s",
                "Find minimum number of flips needed",
                "Input: Binary array, Output: Minimum flips and which groups to flip",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: ["minimum", "flips", "consecutive", "groups"],
              details: [
                "Keywords: 'minimum flips', 'consecutive' → Count groups",
                "Pattern: Grouping consecutive elements → Count groups, flip fewer",
                "This is a 'grouping and optimization' problem",
                "Similar to: Remove duplicates, compress string",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Array: Input is already an array",
                "Two counters: zeroGroups and oneGroups",
                "No additional data structures needed",
                "O(1) space solution possible",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Count groups and flip fewer",
                "  - Count groups of consecutive 0s and 1s",
                "  - Flip the group with fewer occurrences",
                "  - Time: O(n), Space: O(1)",
                "",
                "Key Insight: First and last groups are same type, so difference is at most 1",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • All same: Return 0 flips",
                "  • Alternating: Return n/2 flips",
                "",
                "Optimization:",
                "  • Single pass: O(n) time",
                "  • Constant space: O(1)",
                "  • Count groups efficiently",
                "",
                "Implementation:",
                "  1. Count groups of 0s and 1s",
                "  2. target = (zeroGroups < oneGroups) ? 0 : 1",
                "  3. Find all groups of target type",
                "  4. Return flip groups",
              ],
            },
          ],
          pattern: "Grouping and Optimization",
          complexity: {
            time: "O(n) - Single pass to count groups",
            space: "O(1) - Only counters used",
          },
        }}
      />

      <ProblemBlock
        title="21. Subarray with Given Sum"
        difficulty="Medium"
        description="Find subarray with given sum using sliding window technique."
        solutions={{
          JavaScript: `function subarrayWithSum(arr, targetSum) {
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
console.log(subarrayWithSum([1, 2, 3, 7, 5], 12));      // {start: 1, end: 4, subarray: [2, 3, 7]}`,
          Java: `import java.util.*;
import java.util.Arrays;

public class SubarrayWithSum {
    // Sliding window approach for positive numbers
    public static Result subarrayWithSum(int[] arr, int targetSum) {
        int left = 0;
        int currentSum = 0;
        
        for (int right = 0; right < arr.length; right++) {
            currentSum += arr[right];
            
            // Shrink window from left if sum exceeds target
            while (currentSum > targetSum && left <= right) {
                currentSum -= arr[left];
                left++;
            }
            
            // Check if we found the target sum
            if (currentSum == targetSum) {
                return new Result(left, right, Arrays.copyOfRange(arr, left, right + 1));
            }
        }
        
        return new Result(-1, -1, new int[0]);
    }
    
    // For arrays with negative numbers (use hash map)
    public static Result subarrayWithSumNegative(int[] arr, int targetSum) {
        Map<Integer, Integer> sumMap = new HashMap<>();
        int currentSum = 0;
        
        for (int i = 0; i < arr.length; i++) {
            currentSum += arr[i];
            
            if (currentSum == targetSum) {
                return new Result(0, i, Arrays.copyOfRange(arr, 0, i + 1));
            }
            
            if (sumMap.containsKey(currentSum - targetSum)) {
                int start = sumMap.get(currentSum - targetSum) + 1;
                return new Result(start, i, Arrays.copyOfRange(arr, start, i + 1));
            }
            
            sumMap.put(currentSum, i);
        }
        
        return new Result(-1, -1, new int[0]);
    }
    
    static class Result {
        int start, end;
        int[] subarray;
        Result(int start, int end, int[] subarray) {
            this.start = start;
            this.end = end;
            this.subarray = subarray;
        }
    }
    
    public static void main(String[] args) {
        Result result1 = subarrayWithSum(new int[]{1, 4, 20, 3, 10, 5}, 33);
        System.out.println("Start: " + result1.start + ", End: " + result1.end);
        
        Result result2 = subarrayWithSum(new int[]{1, 2, 3, 7, 5}, 12);
        System.out.println("Start: " + result2.start + ", End: " + result2.end);
    }
}`,
        }}
        explanation="Sliding window: Expand right pointer, shrink left if sum exceeds target. For negative numbers, use prefix sum with hash map. Time: O(n), Space: O(1) for positive, O(n) for negative."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Find subarray with given sum",
                "Subarray must be contiguous",
                "Can array contain negative numbers? Check constraints",
                "Return indices or subarray itself?",
                "Input: Array and target sum, Output: Subarray or indices",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: [
                "subarray",
                "sum",
                "target",
                "sliding window",
                "prefix sum",
              ],
              details: [
                "Keywords: 'subarray', 'sum', 'target' → Sliding window or prefix sum",
                "Pattern: Subarray sum → Sliding window (positive) or prefix sum (negative)",
                "This is a 'sliding window' or 'prefix sum' problem",
                "Similar to: Minimum window substring, longest substring",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Array: Input is already an array",
                "For positive numbers: Two pointers",
                "For negative numbers: Hash map (prefix sum)",
                "O(1) space for positive, O(n) for negative",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "For Positive Numbers: Sliding Window",
                "  - Expand right pointer, add to sum",
                "  - Shrink left pointer if sum > target",
                "  - Time: O(n), Space: O(1)",
                "",
                "For Negative Numbers: Prefix Sum + Hash Map",
                "  - Calculate prefix sum",
                "  - Check if (prefixSum - target) exists in map",
                "  - Time: O(n), Space: O(n)",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • No subarray with sum: Return empty",
                "  • Single element equals target: Return that",
                "  • Entire array sum equals target: Return entire array",
                "",
                "Optimization:",
                "  • Sliding window: O(n) time, O(1) space (positive)",
                "  • Prefix sum: O(n) time, O(n) space (negative)",
                "  • Early termination when found",
                "",
                "Implementation (Positive):",
                "  1. left = 0, currentSum = 0",
                "  2. Loop right from 0 to n-1:",
                "     - currentSum += arr[right]",
                "     - While currentSum > target: currentSum -= arr[left], left++",
                "     - If currentSum == target: Return [left, right]",
                "  3. Return not found",
              ],
            },
          ],
          pattern: "Sliding Window / Prefix Sum with Hash Map",
          complexity: {
            time: "O(n) - Single pass through array",
            space: "O(1) for positive, O(n) for negative",
          },
        }}
      />

      <ProblemBlock
        title="22. Equilibrium Point"
        difficulty="Easy"
        description="Find equilibrium point where sum of elements before equals sum of elements after."
        solutions={{
          JavaScript: `function equilibriumPoint(arr) {
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
console.log(equilibriumPoint([1, 2, 3]));            // -1 (no equilibrium point)`,
          Java: `import java.util.*;

public class EquilibriumPoint {
    // Find equilibrium point
    public static int equilibriumPoint(int[] arr) {
        int n = arr.length;
        if (n == 0) return -1;
        if (n == 1) return 0;
        
        // Calculate total sum
        int totalSum = 0;
        for (int num : arr) {
            totalSum += num;
        }
        
        int leftSum = 0;
        
        for (int i = 0; i < n; i++) {
            // Calculate right sum
            int rightSum = totalSum - leftSum - arr[i];
            
            if (leftSum == rightSum) {
                return i;
            }
            
            leftSum += arr[i];
        }
        
        return -1;
    }
    
    // Using prefix sum arrays
    public static int equilibriumPointPrefixSum(int[] arr) {
        int n = arr.length;
        if (n == 0) return -1;
        
        int[] prefixSum = new int[n];
        prefixSum[0] = arr[0];
        
        // Calculate prefix sum
        for (int i = 1; i < n; i++) {
            prefixSum[i] = prefixSum[i - 1] + arr[i];
        }
        
        int totalSum = prefixSum[n - 1];
        
        for (int i = 0; i < n; i++) {
            int leftSum = i == 0 ? 0 : prefixSum[i - 1];
            int rightSum = totalSum - prefixSum[i];
            
            if (leftSum == rightSum) {
                return i;
            }
        }
        
        return -1;
    }
    
    // Find all equilibrium points
    public static List<Integer> findAllEquilibriumPoints(int[] arr) {
        int n = arr.length;
        if (n == 0) return new ArrayList<>();
        
        int totalSum = 0;
        for (int num : arr) {
            totalSum += num;
        }
        
        List<Integer> equilibriumPoints = new ArrayList<>();
        int leftSum = 0;
        
        for (int i = 0; i < n; i++) {
            int rightSum = totalSum - leftSum - arr[i];
            
            if (leftSum == rightSum) {
                equilibriumPoints.add(i);
            }
            
            leftSum += arr[i];
        }
        
        return equilibriumPoints;
    }
    
    public static void main(String[] args) {
        System.out.println(equilibriumPoint(new int[]{1, 3, 5, 2, 2}));      // 2
        System.out.println(equilibriumPoint(new int[]{1, 2, 3}));            // -1
    }
}`,
        }}
        explanation="For each position, calculate left and right sums. If equal, it's an equilibrium point. Time: O(n), Space: O(1)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Equilibrium point = left sum == right sum",
                "Element at equilibrium point is not included in either sum",
                "Can there be multiple equilibrium points? Yes",
                "What if no equilibrium? Return -1",
                "Input: Array, Output: Index of equilibrium point",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: ["equilibrium", "left sum", "right sum", "equal"],
              details: [
                "Keywords: 'equilibrium', 'left sum', 'right sum' → Prefix sum",
                "Pattern: Balance point → Calculate left and right sums",
                "This is a 'prefix sum' problem",
                "Similar to: Subarray sum, range sum queries",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Array: Input is already an array",
                "Variables: totalSum and leftSum",
                "No additional data structures needed",
                "O(1) space solution possible",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Calculate total sum, then check each position",
                "  - Calculate total sum of array",
                "  - For each position i:",
                "    * leftSum = sum of arr[0..i-1]",
                "    * rightSum = totalSum - leftSum - arr[i]",
                "    * If leftSum == rightSum, return i",
                "  - Time: O(n), Space: O(1)",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • Empty array: Return -1",
                "  • Single element: Return 0 (left and right are 0)",
                "  • No equilibrium: Return -1",
                "",
                "Optimization:",
                "  • Calculate total sum once: O(n)",
                "  • Track leftSum incrementally: O(1) per position",
                "  • Total: O(n) time, O(1) space",
                "",
                "Implementation:",
                "  1. Calculate totalSum",
                "  2. leftSum = 0",
                "  3. Loop i from 0 to n-1:",
                "     - rightSum = totalSum - leftSum - arr[i]",
                "     - If leftSum == rightSum: return i",
                "     - leftSum += arr[i]",
                "  4. Return -1",
              ],
            },
          ],
          pattern: "Prefix Sum / Balance Point",
          complexity: {
            time: "O(n) - Calculate sum + single pass",
            space: "O(1) - Only variables used",
          },
        }}
      />

      <ProblemBlock
        title="23. Maximum Appearing Element"
        difficulty="Easy"
        description="Find the element that appears most frequently in an array."
        solutions={{
          JavaScript: `function findMaxAppearingElement(arr) {
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
console.log(findMaxAppearingElement([5, 5, 5, 2, 2, 1]));    // {element: 5, count: 3}`,
          Java: `import java.util.*;

public class MaxAppearingElement {
    // Find element that appears most frequently
    public static Result findMaxAppearingElement(int[] arr) {
        if (arr.length == 0) return null;
        
        Map<Integer, Integer> frequency = new HashMap<>();
        int maxCount = 0;
        int maxElement = arr[0];
        
        for (int num : arr) {
            frequency.put(num, frequency.getOrDefault(num, 0) + 1);
            
            if (frequency.get(num) > maxCount) {
                maxCount = frequency.get(num);
                maxElement = num;
            }
        }
        
        return new Result(maxElement, maxCount);
    }
    
    // For sorted array (optimized)
    public static Result findMaxAppearingElementSorted(int[] arr) {
        if (arr.length == 0) return null;
        
        int currentElement = arr[0];
        int currentCount = 1;
        int maxElement = arr[0];
        int maxCount = 1;
        
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] == currentElement) {
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
        
        return new Result(maxElement, maxCount);
    }
    
    // Find all elements with maximum frequency
    public static List<Result> findAllMaxAppearingElements(int[] arr) {
        Map<Integer, Integer> frequency = new HashMap<>();
        int maxCount = 0;
        
        // Count frequencies
        for (int num : arr) {
            frequency.put(num, frequency.getOrDefault(num, 0) + 1);
            maxCount = Math.max(maxCount, frequency.get(num));
        }
        
        // Find all elements with maximum frequency
        List<Result> maxElements = new ArrayList<>();
        for (Map.Entry<Integer, Integer> entry : frequency.entrySet()) {
            if (entry.getValue() == maxCount) {
                maxElements.add(new Result(entry.getKey(), entry.getValue()));
            }
        }
        
        return maxElements;
    }
    
    static class Result {
        int element, count;
        Result(int element, int count) {
            this.element = element;
            this.count = count;
        }
    }
    
    public static void main(String[] args) {
        Result result1 = findMaxAppearingElement(new int[]{1, 3, 2, 1, 3, 1, 4});
        System.out.println("Element: " + result1.element + ", Count: " + result1.count); // 1, 3
        
        Result result2 = findMaxAppearingElement(new int[]{5, 5, 5, 2, 2, 1});
        System.out.println("Element: " + result2.element + ", Count: " + result2.count); // 5, 3
    }
}`,
        }}
        explanation="Use hash map to count frequencies. Track element with maximum count. For sorted arrays, count consecutive occurrences. Time: O(n), Space: O(n)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Find element that appears most frequently",
                "What if multiple elements have same max frequency? Return all or one?",
                "Is array sorted? If yes, can optimize",
                "Input: Array, Output: Element with maximum frequency",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: ["maximum", "appearing", "frequency", "count", "most"],
              details: [
                "Keywords: 'maximum appearing', 'frequency' → Count frequencies",
                "Pattern: Frequency counting → Hash map or consecutive counting",
                "This is a 'frequency counting' problem",
                "Similar to: Frequencies in sorted array, majority element",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "For Unsorted: Hash Map (frequency counter)",
                "For Sorted: Variables (current element and count)",
                "O(n) space for unsorted, O(1) for sorted",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "For Unsorted Array:",
                "  - Use hash map to count all frequencies",
                "  - Track element with maximum count",
                "  - Time: O(n), Space: O(n)",
                "",
                "For Sorted Array (Optimized):",
                "  - Count consecutive occurrences",
                "  - Track element with maximum count",
                "  - Time: O(n), Space: O(1)",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • Empty array: Return null",
                "  • All unique: Return first element",
                "  • All same: Return that element",
                "",
                "Optimization:",
                "  • Hash map: O(n) time, O(n) space (unsorted)",
                "  • Consecutive counting: O(n) time, O(1) space (sorted)",
                "  • Track max on the fly",
                "",
                "Implementation (Unsorted):",
                "  1. frequency = {}, maxCount = 0, maxElement = arr[0]",
                "  2. Loop through array:",
                "     - frequency[arr[i]] = (frequency[arr[i]] || 0) + 1",
                "     - If frequency[arr[i]] > maxCount:",
                "       * maxCount = frequency[arr[i]]",
                "       * maxElement = arr[i]",
                "  3. Return maxElement",
              ],
            },
          ],
          pattern: "Frequency Counting (Hash Map / Consecutive Counting)",
          complexity: {
            time: "O(n) - Single pass through array",
            space: "O(n) for unsorted, O(1) for sorted",
          },
        }}
      />
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
                  ? "bg-orange-500 text-white"
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

      {showSolution && codeData && (
        <div>
          {/* Tabs */}
          {approach && (
            <div className="flex gap-2 mb-4 border-b border-gray-700">
              <button
                onClick={() => setActiveTab("solution")}
                className={`px-4 py-2 font-semibold transition-colors ${
                  activeTab === "solution"
                    ? "text-orange-400 border-b-2 border-orange-400"
                    : "text-gray-400 hover:text-gray-300"
                }`}
              >
                Solution
              </button>
              <button
                onClick={() => setActiveTab("approach")}
                className={`px-4 py-2 font-semibold transition-colors ${
                  activeTab === "approach"
                    ? "text-orange-400 border-b-2 border-orange-400"
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
