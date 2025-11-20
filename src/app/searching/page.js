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
            code={{
              JavaScript: `// Linear Search - O(n) time, O(1) space
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
console.log(binarySearch(arr, 4));  // -1`,
              Java: `// Linear Search - O(n) time, O(1) space
public class LinearSearch {
    public static int linearSearch(int[] arr, int target) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == target) {
                return i; // Return index if found
            }
        }
        return -1; // Return -1 if not found
    }
    
    public static void main(String[] args) {
        int[] arr = {1, 3, 5, 7, 9, 11, 13, 15};
        System.out.println(linearSearch(arr, 7));  // 3
        System.out.println(linearSearch(arr, 4));   // -1
    }
}

// Binary Search - O(log n) time, O(1) space
public class BinarySearch {
    public static int binarySearch(int[] arr, int target) {
        int left = 0;
        int right = arr.length - 1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2; // Avoid overflow
            
            if (arr[mid] == target) {
                return mid; // Found!
            } else if (arr[mid] < target) {
                left = mid + 1; // Search right half
            } else {
                right = mid - 1; // Search left half
            }
        }
        
        return -1; // Not found
    }
    
    public static void main(String[] args) {
        int[] arr = {1, 3, 5, 7, 9, 11, 13, 15};
        System.out.println(binarySearch(arr, 7));  // 3
        System.out.println(binarySearch(arr, 4));  // -1
    }
}`,
            }}
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
        solutions={{
          JavaScript: `function firstOccurrence(arr, target) {
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
console.log(firstOccurrence([2, 2, 2, 2, 2], 2));       // 0`,
          Java: `public class FirstOccurrence {
    // Find first occurrence of target
    public static int firstOccurrence(int[] arr, int target) {
        int left = 0;
        int right = arr.length - 1;
        int result = -1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (arr[mid] == target) {
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
    public static int firstOccurrenceBoundary(int[] arr, int target) {
        int left = 0;
        int right = arr.length; // Note: right is exclusive
        
        while (left < right) {
            int mid = left + (right - left) / 2;
            
            if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid; // Keep searching left
            }
        }
        
        return (left < arr.length && arr[left] == target) ? left : -1;
    }
    
    public static void main(String[] args) {
        System.out.println(firstOccurrence(new int[]{1, 2, 2, 2, 3, 4, 5}, 2)); // 1
        System.out.println(firstOccurrence(new int[]{1, 2, 3, 4, 5}, 6));       // -1
        System.out.println(firstOccurrence(new int[]{2, 2, 2, 2, 2}, 2));       // 0
    }
}`,
        }}
        explanation="Modified binary search: when target is found, continue searching left half to find first occurrence. Time: O(log n), Space: O(1)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Find first occurrence of target in sorted array with duplicates",
                "Array is sorted, so duplicates are adjacent",
                "What if target not found? Return -1",
                "What if no duplicates? Return index of target",
                "Input: Sorted array with duplicates, target, Output: Index of first occurrence",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: [
                "first occurrence",
                "sorted",
                "duplicates",
                "binary search",
              ],
              details: [
                "Keywords: 'first occurrence', 'sorted' → Modified binary search",
                "Pattern: Binary search with continuation → Don't stop at first match",
                "This is a 'modified binary search' problem",
                "Similar to: Last occurrence, count occurrences, search range",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Array: Input is already an array",
                "Variables: left, right, mid, result",
                "No additional data structures needed",
                "O(1) space solution possible",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Modified binary search",
                "  - When target found, store result and continue searching left",
                "  - Update result whenever target is found",
                "  - Continue until search space exhausted",
                "  - Time: O(log n), Space: O(1)",
                "",
                "Key Insight: Don't return immediately when found, search left for earlier occurrence",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • Target not found: Return -1",
                "  • Single occurrence: Return that index",
                "  • All elements are target: Return 0",
                "",
                "Optimization:",
                "  • Binary search: O(log n) time",
                "  • Constant space: O(1)",
                "  • Continue searching left after finding target",
                "",
                "Implementation:",
                "  1. Initialize left=0, right=n-1, result=-1",
                "  2. While left <= right:",
                "     - mid = (left + right) / 2",
                "     - If arr[mid] == target:",
                "       * result = mid, right = mid - 1 (search left)",
                "     - Else if arr[mid] < target: left = mid + 1",
                "     - Else: right = mid - 1",
                "  3. Return result",
              ],
            },
          ],
          pattern: "Modified Binary Search (First Occurrence)",
          complexity: {
            time: "O(log n) - Binary search with continuation",
            space: "O(1) - Only variables used",
          },
        }}
      />

      <ProblemBlock
        title="2. Index of Last Occurrence in Sorted Array"
        difficulty="Medium"
        description="Find the index of the last occurrence of a target element in a sorted array with duplicates."
        solutions={{
          JavaScript: `function lastOccurrence(arr, target) {
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
console.log(lastOccurrence([2, 2, 2, 2, 2], 2));       // 4`,
          Java: `public class LastOccurrence {
    // Find last occurrence of target
    public static int lastOccurrence(int[] arr, int target) {
        int left = 0;
        int right = arr.length - 1;
        int result = -1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (arr[mid] == target) {
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
    public static int lastOccurrenceBoundary(int[] arr, int target) {
        int left = 0;
        int right = arr.length;
        
        while (left < right) {
            int mid = left + (right - left) / 2;
            
            if (arr[mid] <= target) {
                left = mid + 1; // Keep searching right
            } else {
                right = mid;
            }
        }
        
        return (left > 0 && arr[left - 1] == target) ? left - 1 : -1;
    }
    
    public static void main(String[] args) {
        System.out.println(lastOccurrence(new int[]{1, 2, 2, 2, 3, 4, 5}, 2)); // 3
        System.out.println(lastOccurrence(new int[]{1, 2, 3, 4, 5}, 6));       // -1
        System.out.println(lastOccurrence(new int[]{2, 2, 2, 2, 2}, 2));       // 4
    }
}`,
        }}
        explanation="Modified binary search: when target is found, continue searching right half to find last occurrence. Time: O(log n), Space: O(1)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Find last occurrence of target in sorted array with duplicates",
                "Array is sorted, so duplicates are adjacent",
                "What if target not found? Return -1",
                "What if no duplicates? Return index of target",
                "Input: Sorted array with duplicates, target, Output: Index of last occurrence",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: [
                "last occurrence",
                "sorted",
                "duplicates",
                "binary search",
              ],
              details: [
                "Keywords: 'last occurrence', 'sorted' → Modified binary search",
                "Pattern: Binary search with continuation → Don't stop at first match",
                "This is a 'modified binary search' problem",
                "Similar to: First occurrence, count occurrences, search range",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Array: Input is already an array",
                "Variables: left, right, mid, result",
                "No additional data structures needed",
                "O(1) space solution possible",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Modified binary search",
                "  - When target found, store result and continue searching right",
                "  - Update result whenever target is found",
                "  - Continue until search space exhausted",
                "  - Time: O(log n), Space: O(1)",
                "",
                "Key Insight: Don't return immediately when found, search right for later occurrence",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • Target not found: Return -1",
                "  • Single occurrence: Return that index",
                "  • All elements are target: Return n-1",
                "",
                "Optimization:",
                "  • Binary search: O(log n) time",
                "  • Constant space: O(1)",
                "  • Continue searching right after finding target",
                "",
                "Implementation:",
                "  1. Initialize left=0, right=n-1, result=-1",
                "  2. While left <= right:",
                "     - mid = (left + right) / 2",
                "     - If arr[mid] == target:",
                "       * result = mid, left = mid + 1 (search right)",
                "     - Else if arr[mid] < target: left = mid + 1",
                "     - Else: right = mid - 1",
                "  3. Return result",
              ],
            },
          ],
          pattern: "Modified Binary Search (Last Occurrence)",
          complexity: {
            time: "O(log n) - Binary search with continuation",
            space: "O(1) - Only variables used",
          },
        }}
      />

      <ProblemBlock
        title="3. Count Occurrences in Sorted Array"
        difficulty="Easy"
        description="Count the number of occurrences of a target element in a sorted array with duplicates."
        solutions={{
          JavaScript: `function countOccurrences(arr, target) {
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
console.log(countOccurrences([2, 2, 2, 2, 2], 2));       // 5`,
          Java: `public class CountOccurrences {
    // Count occurrences using first and last occurrence
    public static int countOccurrences(int[] arr, int target) {
        int first = firstOccurrence(arr, target);
        int last = lastOccurrence(arr, target);
        
        if (first == -1) {
            return 0; // Target not found
        }
        
        return last - first + 1;
    }
    
    // Helper functions (from previous problems)
    private static int firstOccurrence(int[] arr, int target) {
        int left = 0;
        int right = arr.length - 1;
        int result = -1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (arr[mid] == target) {
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
    
    private static int lastOccurrence(int[] arr, int target) {
        int left = 0;
        int right = arr.length - 1;
        int result = -1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (arr[mid] == target) {
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
    public static int countOccurrencesDirect(int[] arr, int target) {
        int left = 0;
        int right = arr.length - 1;
        int count = 0;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (arr[mid] == target) {
                count++;
                
                // Count left occurrences
                int leftIdx = mid - 1;
                while (leftIdx >= 0 && arr[leftIdx] == target) {
                    count++;
                    leftIdx--;
                }
                
                // Count right occurrences
                int rightIdx = mid + 1;
                while (rightIdx < arr.length && arr[rightIdx] == target) {
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
    
    public static void main(String[] args) {
        System.out.println(countOccurrences(new int[]{1, 2, 2, 2, 3, 4, 5}, 2)); // 3
        System.out.println(countOccurrences(new int[]{1, 2, 3, 4, 5}, 6));       // 0
        System.out.println(countOccurrences(new int[]{2, 2, 2, 2, 2}, 2));       // 5
    }
}`,
        }}
        explanation="Use first and last occurrence functions to calculate count. Count = last - first + 1. Time: O(log n), Space: O(1)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Count occurrences of target in sorted array with duplicates",
                "Array is sorted, so all occurrences are consecutive",
                "What if target not found? Return 0",
                "Can reuse first and last occurrence functions",
                "Input: Sorted array with duplicates, target, Output: Count",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: [
                "count",
                "occurrences",
                "sorted",
                "duplicates",
                "binary search",
              ],
              details: [
                "Keywords: 'count occurrences', 'sorted' → Use first and last occurrence",
                "Pattern: Composition of two binary searches → Reuse existing functions",
                "This is a 'composition of binary searches' problem",
                "Similar to: Search range, find duplicates count",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Array: Input is already an array",
                "Reuse firstOccurrence and lastOccurrence functions",
                "No additional data structures needed",
                "O(1) space solution possible",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Composition approach",
                "  - Find first occurrence using binary search",
                "  - Find last occurrence using binary search",
                "  - Count = last - first + 1 (if found)",
                "  - Time: O(log n) + O(log n) = O(log n), Space: O(1)",
                "",
                "Alternative: Direct count (O(n) worst case if many duplicates)",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • Target not found: Return 0",
                "  • Single occurrence: Return 1",
                "  • All elements are target: Return n",
                "",
                "Optimization:",
                "  • Reuse binary search functions: O(log n) time",
                "  • Constant space: O(1)",
                "  • Formula: count = last - first + 1",
                "",
                "Implementation:",
                "  1. first = firstOccurrence(arr, target)",
                "  2. If first == -1, return 0",
                "  3. last = lastOccurrence(arr, target)",
                "  4. Return last - first + 1",
              ],
            },
          ],
          pattern: "Composition of Binary Searches",
          complexity: {
            time: "O(log n) - Two binary searches",
            space: "O(1) - Only variables used",
          },
        }}
      />

      <ProblemBlock
        title="4. Count 1s in a Sorted Binary Array"
        difficulty="Easy"
        description="Count the number of 1s in a sorted binary array where all 0s come before all 1s."
        solutions={{
          JavaScript: `function countOnes(arr) {
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
console.log(countOnes([0, 1, 1, 1, 1]));       // 4`,
          Java: `public class CountOnes {
    // Count 1s in sorted binary array
    public static int countOnes(int[] arr) {
        int left = 0;
        int right = arr.length - 1;
        int firstOne = -1;
        
        // Find first occurrence of 1
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (arr[mid] == 1) {
                firstOne = mid;
                right = mid - 1; // Continue searching left for first 1
            } else {
                left = mid + 1;
            }
        }
        
        if (firstOne == -1) {
            return 0; // No 1s found
        }
        
        return arr.length - firstOne;
    }
    
    // Alternative approach using boundary binary search
    public static int countOnesBoundary(int[] arr) {
        int left = 0;
        int right = arr.length;
        
        // Find leftmost 1
        while (left < right) {
            int mid = left + (right - left) / 2;
            
            if (arr[mid] < 1) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        
        return arr.length - left;
    }
    
    // More efficient: count zeros instead
    public static int countOnesByZeros(int[] arr) {
        int left = 0;
        int right = arr.length - 1;
        int lastZero = -1;
        
        // Find last occurrence of 0
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (arr[mid] == 0) {
                lastZero = mid;
                left = mid + 1; // Continue searching right for last 0
            } else {
                right = mid - 1;
            }
        }
        
        return arr.length - (lastZero + 1);
    }
    
    public static void main(String[] args) {
        System.out.println(countOnes(new int[]{0, 0, 0, 1, 1, 1, 1})); // 4
        System.out.println(countOnes(new int[]{0, 0, 0, 0, 0}));       // 0
        System.out.println(countOnes(new int[]{1, 1, 1, 1, 1}));       // 5
        System.out.println(countOnes(new int[]{0, 1, 1, 1, 1}));       // 4
    }
}`,
        }}
        explanation="Find first occurrence of 1, then count = array.length - firstOneIndex. Time: O(log n), Space: O(1)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Count number of 1s in sorted binary array",
                "Array is sorted: all 0s come before all 1s",
                "Find first occurrence of 1, then count = n - firstOneIndex",
                "What if no 1s? Return 0",
                "What if all 1s? Return n",
                "Input: Sorted binary array, Output: Count of 1s",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: ["count", "1s", "sorted", "binary", "first occurrence"],
              details: [
                "Keywords: 'count 1s', 'sorted binary' → Find first occurrence of 1",
                "Pattern: Binary search for boundary → Find transition point",
                "This is a 'boundary binary search' problem",
                "Similar to: First occurrence, search insert position",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Array: Input is already an array",
                "Variables: left, right, mid, firstOne",
                "No additional data structures needed",
                "O(1) space solution possible",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Binary search for first occurrence of 1",
                "  - Find first index where arr[i] == 1",
                "  - Count = n - firstOneIndex",
                "  - Time: O(log n), Space: O(1)",
                "",
                "Alternative: Count zeros instead (find last occurrence of 0)",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • No 1s: Return 0",
                "  • All 1s: Return n",
                "  • All 0s: Return 0",
                "",
                "Optimization:",
                "  • Binary search: O(log n) time",
                "  • Constant space: O(1)",
                "  • Find boundary efficiently",
                "",
                "Implementation:",
                "  1. Find first occurrence of 1 using binary search",
                "  2. If not found, return 0",
                "  3. Return arr.length - firstOneIndex",
              ],
            },
          ],
          pattern: "Boundary Binary Search",
          complexity: {
            time: "O(log n) - Binary search for boundary",
            space: "O(1) - Only variables used",
          },
        }}
      />

      <ProblemBlock
        title="5. Square Root of a Number"
        difficulty="Medium"
        description="Find the square root of a non-negative integer using binary search."
        solutions={{
          JavaScript: `function squareRoot(n) {
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
console.log(squareRoot(1));    // 1`,
          Java: `public class SquareRoot {
    // Find square root using binary search
    public static int squareRoot(int n) {
        if (n < 0) return -1; // Invalid input
        if (n == 0 || n == 1) return n;
        
        int left = 1;
        int right = n;
        int result = 0;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (mid * mid == n) {
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
    public static double squareRootPrecise(int n, int precision) {
        if (n < 0) return -1;
        if (n == 0) return 0;
        
        // Find integer part
        int left = 1;
        int right = n;
        int result = 0;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (mid * mid == n) {
                return mid;
            } else if (mid * mid < n) {
                result = mid;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        // Find decimal part
        double decimal = 0.1;
        double finalResult = result;
        
        for (int i = 0; i < precision; i++) {
            while ((finalResult + decimal) * (finalResult + decimal) <= n) {
                finalResult += decimal;
            }
            decimal /= 10;
        }
        
        return Math.round(finalResult * Math.pow(10, precision)) / Math.pow(10, precision);
    }
    
    // Newton's method for square root (alternative)
    public static int squareRootNewton(int n) {
        if (n < 0) return -1;
        if (n == 0) return 0;
        
        double x = n;
        double y = (x + n / x) / 2;
        
        while (Math.abs(x - y) >= 0.00001) {
            x = y;
            y = (x + n / x) / 2;
        }
        
        return (int) Math.floor(x);
    }
    
    public static void main(String[] args) {
        System.out.println(squareRoot(4));    // 2
        System.out.println(squareRoot(8));    // 2
        System.out.println(squareRoot(16));   // 4
        System.out.println(squareRoot(0));    // 0
        System.out.println(squareRoot(1));    // 1
    }
}`,
        }}
        explanation="Binary search on possible square root values. For each mid, check if mid*mid equals target. Time: O(log n), Space: O(1)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Find square root of non-negative integer",
                "Return floor of square root (integer part)",
                "What if n is 0 or 1? Return n",
                "What if n is perfect square? Return exact root",
                "Input: Non-negative integer n, Output: Floor of square root",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: ["square root", "binary search", "floor", "integer"],
              details: [
                "Keywords: 'square root', 'floor' → Binary search on answer space",
                "Pattern: Binary search on answer → Search in range [1, n]",
                "This is a 'binary search on answer space' problem",
                "Similar to: Nth root, find peak, search in rotated array",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Variables: left, right, mid, result",
                "No array needed, just search in integer range",
                "O(1) space solution possible",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Binary search on answer space",
                "  - Search range: left = 1, right = n",
                "  - For each mid, check if mid*mid <= n",
                "  - If yes, store result and search right",
                "  - If no, search left",
                "  - Time: O(log n), Space: O(1)",
                "",
                "Alternative: Newton's method (faster convergence)",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • n = 0: Return 0",
                "  • n = 1: Return 1",
                "  • Perfect square: Return exact root",
                "  • Large n: Handle overflow (use mid*mid carefully)",
                "",
                "Optimization:",
                "  • Binary search: O(log n) time",
                "  • Constant space: O(1)",
                "  • Avoid overflow: Use mid <= n/mid instead of mid*mid <= n",
                "",
                "Implementation:",
                "  1. If n < 2, return n",
                "  2. left = 1, right = n, result = 0",
                "  3. While left <= right:",
                "     - mid = (left + right) / 2",
                "     - If mid*mid <= n: result = mid, left = mid + 1",
                "     - Else: right = mid - 1",
                "  4. Return result",
              ],
            },
          ],
          pattern: "Binary Search on Answer Space",
          complexity: {
            time: "O(log n) - Binary search on range [1, n]",
            space: "O(1) - Only variables used",
          },
        }}
      />

      <ProblemBlock
        title="6. Search in Infinite Sized Array"
        difficulty="Medium"
        description="Search for an element in an infinite sorted array where we can't use array.length."
        solutions={{
          JavaScript: `function searchInfinite(arr, target) {
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
console.log(searchInfinite(infiniteArr, 5));  // -1`,
          Java: `public class SearchInfinite {
    // Search in infinite array using exponential search
    public static int searchInfinite(int[] arr, int target) {
        int left = 0;
        int right = 1;
        
        // First, find the range where target might exist
        while (right < arr.length && arr[right] < target) {
            left = right;
            right = right * 2; // Exponential search
        }
        
        // Ensure right doesn't exceed array bounds
        right = Math.min(right, arr.length - 1);
        
        // Now perform binary search in the found range
        return binarySearchInRange(arr, target, left, right);
    }
    
    private static int binarySearchInRange(int[] arr, int target, int left, int right) {
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (arr[mid] == target) {
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
    public static int searchInfiniteSafe(int[] arr, int target) {
        int left = 0;
        int right = 1;
        
        // Find bounds safely
        while (right < arr.length && arr[right] < target) {
            left = right;
            right = right * 2;
        }
        
        // Ensure right doesn't exceed array bounds
        if (right >= arr.length) {
            right = arr.length - 1;
        }
        
        // Binary search in the safe range
        return binarySearchInRange(arr, target, left, right);
    }
    
    public static void main(String[] args) {
        // Simulated infinite array
        int[] infiniteArr = {0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20};
        System.out.println(searchInfinite(infiniteArr, 8));  // 4
        System.out.println(searchInfinite(infiniteArr, 14)); // 7
        System.out.println(searchInfinite(infiniteArr, 5));  // -1
    }
}`,
        }}
        explanation="First find the range using exponential search (double the right boundary), then perform binary search in that range. Time: O(log n), Space: O(1)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Search in infinite sorted array (can't use array.length)",
                "Array is sorted and infinite (or very large)",
                "Need to find bounds first, then search",
                "What if target not found? Return -1",
                "Input: Infinite sorted array, target, Output: Index or -1",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: [
                "infinite",
                "sorted",
                "exponential search",
                "binary search",
              ],
              details: [
                "Keywords: 'infinite', 'sorted' → Exponential search + binary search",
                "Pattern: Two-phase search → Find bounds, then binary search",
                "This is an 'exponential search' problem",
                "Similar to: Unbounded binary search, search in stream",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Array: Input is already an array (infinite)",
                "Variables: left, right for bounds",
                "No additional data structures needed",
                "O(1) space solution possible",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Exponential search + Binary search",
                "  Phase 1: Find bounds",
                "    - Start with left=0, right=1",
                "    - Double right until arr[right] >= target",
                "    - Time: O(log n) where n is position of target",
                "  Phase 2: Binary search",
                "    - Search in range [left, right]",
                "    - Time: O(log n)",
                "  Total: O(log n), Space: O(1)",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • Target at beginning: Found quickly",
                "  • Target very far: Exponential search finds bounds",
                "  • Target not found: Return -1 after binary search",
                "",
                "Optimization:",
                "  • Exponential search: O(log n) to find bounds",
                "  • Binary search: O(log n) to find target",
                "  • Total: O(log n) time, O(1) space",
                "",
                "Implementation:",
                "  1. left = 0, right = 1",
                "  2. While arr[right] < target:",
                "     - left = right, right = right * 2",
                "  3. Binary search in [left, right]",
                "  4. Return result",
              ],
            },
          ],
          pattern: "Exponential Search + Binary Search",
          complexity: {
            time: "O(log n) - Exponential search + binary search",
            space: "O(1) - Only variables used",
          },
        }}
      />

      <ProblemBlock
        title="7. Search in Sorted Rotated Array"
        difficulty="Medium"
        description="Search for an element in a sorted array that has been rotated at some pivot point."
        solutions={{
          JavaScript: `function searchRotated(arr, target) {
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
console.log(searchRotated([1, 3], 3));                // 1`,
          Java: `public class SearchRotated {
    // Search in rotated sorted array
    public static int searchRotated(int[] arr, int target) {
        int left = 0;
        int right = arr.length - 1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (arr[mid] == target) {
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
    public static int searchRotatedTwoPass(int[] arr, int target) {
        int pivot = findPivot(arr);
        
        if (pivot == -1) {
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
    
    private static int findPivot(int[] arr) {
        int left = 0;
        int right = arr.length - 1;
        
        while (left < right) {
            int mid = left + (right - left) / 2;
            
            if (arr[mid] > arr[right]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        
        return left;
    }
    
    private static int binarySearch(int[] arr, int target, int left, int right) {
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (arr[mid] == target) {
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
    public static int searchRotatedWithDuplicates(int[] arr, int target) {
        int left = 0;
        int right = arr.length - 1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (arr[mid] == target) {
                return mid;
            }
            
            // Skip duplicates
            if (arr[left] == arr[mid] && arr[mid] == arr[right]) {
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
    
    public static void main(String[] args) {
        System.out.println(searchRotated(new int[]{4, 5, 6, 7, 0, 1, 2}, 0)); // 4
        System.out.println(searchRotated(new int[]{4, 5, 6, 7, 0, 1, 2}, 3)); // -1
        System.out.println(searchRotated(new int[]{1}, 0));                   // -1
        System.out.println(searchRotated(new int[]{1, 3}, 3));                // 1
    }
}`,
        }}
        explanation="Modified binary search: determine which half is sorted, then search in the appropriate half based on target value. Time: O(log n), Space: O(1)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Search in sorted rotated array",
                "Array was sorted, then rotated at some pivot",
                "One half is always sorted",
                "What if target not found? Return -1",
                "Input: Rotated sorted array, target, Output: Index or -1",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: ["rotated", "sorted", "pivot", "binary search"],
              details: [
                "Keywords: 'rotated', 'sorted' → Modified binary search",
                "Pattern: Binary search with sorted half detection → Check which half is sorted",
                "This is a 'modified binary search' problem",
                "Similar to: Find minimum in rotated array, search in rotated array II",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Array: Input is already an array",
                "Variables: left, right, mid",
                "No additional data structures needed",
                "O(1) space solution possible",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Modified binary search",
                "  - Check which half is sorted (left or right)",
                "  - If left half sorted:",
                "    * If target in [left, mid]: search left, else search right",
                "  - If right half sorted:",
                "    * If target in [mid, right]: search right, else search left",
                "  - Time: O(log n), Space: O(1)",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • Not rotated: Normal binary search",
                "  • Target at pivot: Found in either half",
                "  • Target not found: Return -1",
                "  • Duplicates: May need linear search in worst case",
                "",
                "Optimization:",
                "  • Binary search: O(log n) time",
                "  • Constant space: O(1)",
                "  • Identify sorted half efficiently",
                "",
                "Implementation:",
                "  1. left = 0, right = n-1",
                "  2. While left <= right:",
                "     - mid = (left + right) / 2",
                "     - If arr[mid] == target: return mid",
                "     - If arr[left] <= arr[mid]: (left half sorted)",
                "       * If target in [arr[left], arr[mid]]: right = mid - 1",
                "       * Else: left = mid + 1",
                "     - Else: (right half sorted)",
                "       * If target in [arr[mid], arr[right]]: left = mid + 1",
                "       * Else: right = mid - 1",
                "  3. Return -1",
              ],
            },
          ],
          pattern: "Modified Binary Search (Rotated Array)",
          complexity: {
            time: "O(log n) - Binary search with sorted half detection",
            space: "O(1) - Only variables used",
          },
        }}
      />

      <ProblemBlock
        title="8. Find a Peak Element"
        difficulty="Medium"
        description="Find a peak element in an array where a peak is greater than or equal to its neighbors."
        solutions={{
          JavaScript: `function findPeakElement(arr) {
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
    let rightNeighbor = (i < arr.length - 1) ? arr[i + 1] : -Infinity;
    
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
console.log(findPeakElement([5, 4, 3, 2, 1]));        // 0 (first element)`,
          Java: `import java.util.*;

public class FindPeakElement {
    // Find peak element using binary search
    public static int findPeakElement(int[] arr) {
        int left = 0;
        int right = arr.length - 1;
        
        while (left < right) {
            int mid = left + (right - left) / 2;
            
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
    public static int findPeakElementBoth(int[] arr) {
        int left = 0;
        int right = arr.length - 1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            // Check if mid is a peak
            int leftNeighbor = (mid > 0) ? arr[mid - 1] : Integer.MIN_VALUE;
            int rightNeighbor = (mid < arr.length - 1) ? arr[mid + 1] : Integer.MIN_VALUE;
            
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
    public static List<Integer> findAllPeaks(int[] arr) {
        List<Integer> peaks = new ArrayList<>();
        
        for (int i = 0; i < arr.length; i++) {
            int leftNeighbor = (i > 0) ? arr[i - 1] : Integer.MIN_VALUE;
            int rightNeighbor = (i < arr.length - 1) ? arr[i + 1] : Integer.MIN_VALUE;
            
            if (arr[i] >= leftNeighbor && arr[i] >= rightNeighbor) {
                peaks.add(i);
            }
        }
        
        return peaks;
    }
    
    // Find global maximum (guaranteed peak)
    public static int findGlobalMaximum(int[] arr) {
        int maxIndex = 0;
        
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] > arr[maxIndex]) {
                maxIndex = i;
            }
        }
        
        return maxIndex;
    }
    
    public static void main(String[] args) {
        System.out.println(findPeakElement(new int[]{1, 2, 3, 1}));           // 2
        System.out.println(findPeakElement(new int[]{1, 2, 1, 3, 5, 6, 4}));  // 5
        System.out.println(findPeakElement(new int[]{1, 2, 3, 4, 5}));        // 4
        System.out.println(findPeakElement(new int[]{5, 4, 3, 2, 1}));        // 0
    }
}`,
        }}
        explanation="Binary search approach: compare middle element with its right neighbor to determine which half contains a peak. Time: O(log n), Space: O(1)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Find a peak element (greater than or equal to neighbors)",
                "Array may be unsorted",
                "Peak guaranteed to exist",
                "Boundary elements: compare with one neighbor only",
                "Input: Array, Output: Index of peak element",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: ["peak", "neighbors", "binary search", "unsorted"],
              details: [
                "Keywords: 'peak', 'neighbors' → Binary search on unsorted array",
                "Pattern: Binary search on answer space → Compare with neighbors",
                "This is a 'binary search on unsorted array' problem",
                "Similar to: Find local maximum, mountain peak",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Array: Input is already an array",
                "Variables: left, right, mid",
                "No additional data structures needed",
                "O(1) space solution possible",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Binary search with neighbor comparison",
                "  - Compare arr[mid] with arr[mid+1]",
                "  - If arr[mid] > arr[mid+1]: peak in left half (including mid)",
                "  - Else: peak in right half",
                "  - Time: O(log n), Space: O(1)",
                "",
                "Key Insight: Always move towards the larger neighbor",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • Single element: Return 0",
                "  • All increasing: Return last index",
                "  • All decreasing: Return first index",
                "",
                "Optimization:",
                "  • Binary search: O(log n) time",
                "  • Constant space: O(1)",
                "  • Compare with right neighbor only",
                "",
                "Implementation:",
                "  1. left = 0, right = n-1",
                "  2. While left < right:",
                "     - mid = (left + right) / 2",
                "     - If arr[mid] > arr[mid+1]:",
                "       * right = mid (peak in left)",
                "     - Else:",
                "       * left = mid + 1 (peak in right)",
                "  3. Return left",
              ],
            },
          ],
          pattern: "Binary Search on Unsorted Array (Peak Finding)",
          complexity: {
            time: "O(log n) - Binary search with neighbor comparison",
            space: "O(1) - Only variables used",
          },
        }}
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
        solutions={{
          JavaScript: `// Find pair with given sum in sorted array
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
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49`,
          Java: `import java.util.*;

public class TwoPointers {
    // Find pair with given sum in sorted array
    public static int[] twoSumSorted(int[] arr, int target) {
        int left = 0;
        int right = arr.length - 1;
        
        while (left < right) {
            int sum = arr[left] + arr[right];
            
            if (sum == target) {
                return new int[]{left, right}; // Found pair
            } else if (sum < target) {
                left++; // Need larger sum
            } else {
                right--; // Need smaller sum
            }
        }
        
        return new int[]{-1, -1}; // No pair found
    }
    
    // Remove duplicates from sorted array
    public static int removeDuplicatesTwoPointers(int[] arr) {
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
    
    // Move zeros to end
    public static void moveZeros(int[] arr) {
        int writeIndex = 0;
        
        // Move non-zero elements to front
        for (int readIndex = 0; readIndex < arr.length; readIndex++) {
            if (arr[readIndex] != 0) {
                arr[writeIndex] = arr[readIndex];
                writeIndex++;
            }
        }
        
        // Fill remaining with zeros
        while (writeIndex < arr.length) {
            arr[writeIndex] = 0;
            writeIndex++;
        }
    }
    
    // Container with most water
    public static int maxArea(int[] height) {
        int left = 0;
        int right = height.length - 1;
        int maxWater = 0;
        
        while (left < right) {
            int width = right - left;
            int minHeight = Math.min(height[left], height[right]);
            int currentArea = width * minHeight;
            
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
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(twoSumSorted(new int[]{2, 7, 11, 15}, 9))); // [0, 1]
        System.out.println(maxArea(new int[]{1, 8, 6, 2, 5, 4, 8, 3, 7})); // 49
    }
}`,
        }}
        explanation="Two pointers technique uses two indices moving from different ends or same direction to solve problems in O(n) time. Essential for sorted array problems."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Use two pointers technique for various search problems",
                "Two pointers can move from opposite ends or same direction",
                "Common applications: Two sum, remove duplicates, container with most water",
                "Input: Sorted array, Output: Varies by problem",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: [
                "two pointers",
                "sorted",
                "opposite ends",
                "same direction",
              ],
              details: [
                "Keywords: 'two pointers', 'sorted' → Two pointers technique",
                "Pattern: Two indices moving → Opposite ends or same direction",
                "This is a 'two pointers' problem",
                "Similar to: Sliding window, partition problems",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Array: Input is already an array",
                "Two pointers: left and right indices",
                "No additional data structures needed",
                "O(1) space solution possible",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Two pointers",
                "  Opposite ends:",
                "    - left = 0, right = n-1",
                "    - Move based on condition",
                "  Same direction:",
                "    - slow and fast pointers",
                "    - Move at different speeds",
                "  Time: O(n), Space: O(1)",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • Empty array: Handle appropriately",
                "  • Single element: Return that element",
                "  • No solution: Return appropriate value",
                "",
                "Optimization:",
                "  • Single pass: O(n) time",
                "  • Constant space: O(1)",
                "  • Leverage sorted property",
                "",
                "Implementation (Two Sum):",
                "  1. left = 0, right = n-1",
                "  2. While left < right:",
                "     - sum = arr[left] + arr[right]",
                "     - If sum == target: return [left, right]",
                "     - Else if sum < target: left++",
                "     - Else: right--",
                "  3. Return not found",
              ],
            },
          ],
          pattern: "Two Pointers Technique",
          complexity: {
            time: "O(n) - Single pass with two pointers",
            space: "O(1) - Only two pointers used",
          },
        }}
      />

      <ProblemBlock
        title="10. Triplet in Sorted Array"
        difficulty="Medium"
        description="Find if there exists a triplet in a sorted array that adds up to a given target sum."
        solutions={{
          JavaScript: `function findTriplet(arr, target) {
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
console.log(threeSumClosest([-1, 2, 1, -4], 1)); // 2`,
          Java: `import java.util.*;

public class TripletInSortedArray {
    // Find triplet in sorted array
    public static int[] findTriplet(int[] arr, int target) {
        // Fix one element and use two pointers for remaining
        for (int i = 0; i < arr.length - 2; i++) {
            int left = i + 1;
            int right = arr.length - 1;
            
            while (left < right) {
                int sum = arr[i] + arr[left] + arr[right];
                
                if (sum == target) {
                    return new int[]{i, left, right}; // Found triplet
                } else if (sum < target) {
                    left++; // Need larger sum
                } else {
                    right--; // Need smaller sum
                }
            }
        }
        
        return new int[]{-1, -1, -1}; // No triplet found
    }
    
    // Find all unique triplets that sum to zero
    public static List<List<Integer>> threeSum(int[] nums) {
        Arrays.sort(nums);
        List<List<Integer>> result = new ArrayList<>();
        
        for (int i = 0; i < nums.length - 2; i++) {
            // Skip duplicates for first element
            if (i > 0 && nums[i] == nums[i - 1]) continue;
            
            int left = i + 1;
            int right = nums.length - 1;
            
            while (left < right) {
                int sum = nums[i] + nums[left] + nums[right];
                
                if (sum == 0) {
                    result.add(Arrays.asList(nums[i], nums[left], nums[right]));
                    
                    // Skip duplicates for second and third elements
                    while (left < right && nums[left] == nums[left + 1]) left++;
                    while (left < right && nums[right] == nums[right - 1]) right--;
                    
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
    public static int threeSumClosest(int[] nums, int target) {
        Arrays.sort(nums);
        int closestSum = nums[0] + nums[1] + nums[2];
        
        for (int i = 0; i < nums.length - 2; i++) {
            int left = i + 1;
            int right = nums.length - 1;
            
            while (left < right) {
                int sum = nums[i] + nums[left] + nums[right];
                
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
    public static int countTriplets(int[] arr, int target) {
        Arrays.sort(arr);
        int count = 0;
        
        for (int i = 0; i < arr.length - 2; i++) {
            int left = i + 1;
            int right = arr.length - 1;
            
            while (left < right) {
                int sum = arr[i] + arr[left] + arr[right];
                
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
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(findTriplet(new int[]{1, 2, 3, 4, 5}, 9)));
        System.out.println(threeSum(new int[]{-1, 0, 1, 2, -1, -4}));
        System.out.println(threeSumClosest(new int[]{-1, 2, 1, -4}, 1)); // 2
    }
}`,
        }}
        explanation="Fix one element, then use two pointers for remaining elements. Sort array first for efficient two-pointer technique. Time: O(n²), Space: O(1)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Find triplet that sums to target in sorted array",
                "Can fix one element, then use two pointers for remaining",
                "What if no triplet? Return false or empty",
                "Can array have duplicates? Handle appropriately",
                "Input: Sorted array, target, Output: Triplet or boolean",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: ["triplet", "sum", "target", "two pointers", "sorted"],
              details: [
                "Keywords: 'triplet', 'sum', 'sorted' → Fix one, use two pointers",
                "Pattern: Reduce to two sum → Fix first element, solve two sum",
                "This is a 'reduction to two pointers' problem",
                "Similar to: Three sum, four sum, k-sum",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Array: Input is already an array",
                "Sort array first if not sorted",
                "Two pointers: left and right",
                "O(1) space solution possible",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Fix one element + two pointers",
                "  - Sort array if not sorted",
                "  - For each i from 0 to n-3:",
                "    * Fix arr[i]",
                "    * Use two pointers on arr[i+1..n-1]",
                "    * Find two elements that sum to target - arr[i]",
                "  - Time: O(n²), Space: O(1)",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • Array length < 3: Return false",
                "  • No triplet: Return false",
                "  • Duplicates: Skip duplicates to avoid duplicates in result",
                "",
                "Optimization:",
                "  • Sort first: O(n log n)",
                "  • Two pointers: O(n²) total",
                "  • Skip duplicates efficiently",
                "",
                "Implementation:",
                "  1. Sort array",
                "  2. For i from 0 to n-3:",
                "     - left = i+1, right = n-1",
                "     - While left < right:",
                "       * sum = arr[i] + arr[left] + arr[right]",
                "       * If sum == target: return [i, left, right]",
                "       * Else if sum < target: left++",
                "       * Else: right--",
                "  3. Return not found",
              ],
            },
          ],
          pattern: "Reduction to Two Pointers (Fix One Element)",
          complexity: {
            time: "O(n²) - Fix one element, two pointers for rest",
            space: "O(1) - Only variables used",
          },
        }}
      />

      <ProblemBlock
        title="11. Median of Two Sorted Arrays"
        difficulty="Hard"
        description="Find the median of two sorted arrays of different sizes efficiently."
        solutions={{
          JavaScript: `function findMedianSortedArrays(nums1, nums2) {
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
console.log(findMedianSortedArrays([0, 0], [0, 0])); // 0.0`,
          Java: `public class MedianOfTwoSortedArrays {
    // Find median using binary search
    public static double findMedianSortedArrays(int[] nums1, int[] nums2) {
        // Ensure nums1 is the smaller array
        if (nums1.length > nums2.length) {
            int[] temp = nums1;
            nums1 = nums2;
            nums2 = temp;
        }
        
        int m = nums1.length;
        int n = nums2.length;
        int left = 0;
        int right = m;
        
        while (left <= right) {
            int partitionX = left + (right - left) / 2;
            int partitionY = (m + n + 1) / 2 - partitionX;
            
            // Handle edge cases
            int maxLeftX = (partitionX == 0) ? Integer.MIN_VALUE : nums1[partitionX - 1];
            int minRightX = (partitionX == m) ? Integer.MAX_VALUE : nums1[partitionX];
            
            int maxLeftY = (partitionY == 0) ? Integer.MIN_VALUE : nums2[partitionY - 1];
            int minRightY = (partitionY == n) ? Integer.MAX_VALUE : nums2[partitionY];
            
            if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
                // Found correct partition
                if ((m + n) % 2 == 0) {
                    return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2.0;
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
    public static double findMedianSortedArraysMerge(int[] nums1, int[] nums2) {
        int[] merged = new int[nums1.length + nums2.length];
        int i = 0, j = 0, k = 0;
        
        // Merge arrays
        while (i < nums1.length && j < nums2.length) {
            if (nums1[i] <= nums2[j]) {
                merged[k++] = nums1[i++];
            } else {
                merged[k++] = nums2[j++];
            }
        }
        
        // Add remaining elements
        while (i < nums1.length) merged[k++] = nums1[i++];
        while (j < nums2.length) merged[k++] = nums2[j++];
        
        // Find median
        int n = merged.length;
        if (n % 2 == 0) {
            return (merged[n / 2 - 1] + merged[n / 2]) / 2.0;
        } else {
            return merged[n / 2];
        }
    }
    
    public static void main(String[] args) {
        System.out.println(findMedianSortedArrays(new int[]{1, 3}, new int[]{2})); // 2.0
        System.out.println(findMedianSortedArrays(new int[]{1, 2}, new int[]{3, 4})); // 2.5
        System.out.println(findMedianSortedArrays(new int[]{0, 0}, new int[]{0, 0})); // 0.0
    }
}`,
        }}
        explanation="Binary search on smaller array to find correct partition. Ensure left elements are less than right elements across both arrays. Time: O(log(min(m,n))), Space: O(1)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Find median of two sorted arrays",
                "Median = middle element(s) of merged sorted array",
                "If total length even: average of two middle elements",
                "If total length odd: middle element",
                "Input: Two sorted arrays, Output: Median value",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: [
                "median",
                "sorted arrays",
                "partition",
                "binary search",
              ],
              details: [
                "Keywords: 'median', 'sorted arrays' → Binary search on partition",
                "Pattern: Partition binary search → Find correct partition point",
                "This is a 'binary search on partition' problem",
                "Similar to: Kth element in two sorted arrays, merge sorted arrays",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Two arrays: Input arrays",
                "Variables: partition points, left/right elements",
                "No additional data structures needed",
                "O(1) space solution possible",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Binary search on partition",
                "  - Binary search on smaller array",
                "  - Partition both arrays such that:",
                "    * Left elements <= Right elements",
                "    * Total left elements = total right elements (or +1)",
                "  - Calculate median from partition",
                "  - Time: O(log(min(m,n))), Space: O(1)",
                "",
                "Alternative: Merge and find median (O(m+n) time, O(m+n) space)",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • One array empty: Return median of other",
                "  • Both arrays same size: Handle partition",
                "  • Even total length: Average of two middle",
                "  • Odd total length: Middle element",
                "",
                "Optimization:",
                "  • Binary search on smaller: O(log(min(m,n)))",
                "  • Constant space: O(1)",
                "  • Find partition efficiently",
                "",
                "Implementation:",
                "  1. Ensure nums1 is smaller array",
                "  2. Binary search on nums1 partition:",
                "     - partitionX = (left + right) / 2",
                "     - partitionY = (m + n + 1) / 2 - partitionX",
                "     - Check if partition is valid",
                "  3. Calculate median from valid partition",
              ],
            },
          ],
          pattern: "Binary Search on Partition",
          complexity: {
            time: "O(log(min(m,n))) - Binary search on smaller array",
            space: "O(1) - Only variables used",
          },
        }}
      />

      <ProblemBlock
        title="12. Repeating Elements Part 1"
        difficulty="Easy"
        description="Find the first repeating element in an array where elements can repeat."
        solutions={{
          JavaScript: `function firstRepeatingElement(arr) {
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
console.log(firstRepeatingElement([1, 1, 2, 2, 3]));       // 0 (first 1 repeats)`,
          Java: `import java.util.*;

public class RepeatingElements {
    // Find first repeating element
    public static int firstRepeatingElement(int[] arr) {
        Map<Integer, Integer> elementCount = new HashMap<>();
        int minIndex = -1;
        
        // Count occurrences and track first occurrence
        for (int i = 0; i < arr.length; i++) {
            if (elementCount.containsKey(arr[i])) {
                // Element seen before
                if (minIndex == -1 || elementCount.get(arr[i]) < minIndex) {
                    minIndex = elementCount.get(arr[i]);
                }
            } else {
                // First occurrence
                elementCount.put(arr[i], i);
            }
        }
        
        return minIndex;
    }
    
    // Alternative: Use Set to track seen elements
    public static int firstRepeatingElementSet(int[] arr) {
        Set<Integer> seen = new HashSet<>();
        
        for (int i = 0; i < arr.length; i++) {
            if (seen.contains(arr[i])) {
                return i; // First repeating element found
            }
            seen.add(arr[i]);
        }
        
        return -1; // No repeating element
    }
    
    // Find first repeating element with frequency count
    public static int firstRepeatingWithFrequency(int[] arr) {
        Map<Integer, Integer> frequency = new HashMap<>();
        Map<Integer, Integer> firstOccurrence = new HashMap<>();
        
        // Build frequency map and track first occurrence
        for (int i = 0; i < arr.length; i++) {
            frequency.put(arr[i], frequency.getOrDefault(arr[i], 0) + 1);
            
            if (!firstOccurrence.containsKey(arr[i])) {
                firstOccurrence.put(arr[i], i);
            }
        }
        
        // Find element with frequency > 1 and smallest first occurrence
        int result = -1;
        int minIndex = arr.length;
        
        for (Map.Entry<Integer, Integer> entry : frequency.entrySet()) {
            if (entry.getValue() > 1 && firstOccurrence.get(entry.getKey()) < minIndex) {
                minIndex = firstOccurrence.get(entry.getKey());
                result = entry.getKey();
            }
        }
        
        return result;
    }
    
    // Find all repeating elements
    public static List<Integer> findAllRepeatingElements(int[] arr) {
        Map<Integer, Integer> frequency = new HashMap<>();
        List<Integer> repeating = new ArrayList<>();
        
        // Count frequencies
        for (int element : arr) {
            frequency.put(element, frequency.getOrDefault(element, 0) + 1);
        }
        
        // Find repeating elements
        for (Map.Entry<Integer, Integer> entry : frequency.entrySet()) {
            if (entry.getValue() > 1) {
                repeating.add(entry.getKey());
            }
        }
        
        return repeating;
    }
    
    public static void main(String[] args) {
        System.out.println(firstRepeatingElement(new int[]{1, 5, 3, 4, 3, 5, 6})); // 1
        System.out.println(firstRepeatingElement(new int[]{1, 2, 3, 4}));          // -1
        System.out.println(firstRepeatingElement(new int[]{1, 1, 2, 2, 3}));       // 0
    }
}`,
        }}
        explanation="Use hash map to track first occurrence of each element. When element repeats, compare with current minimum index. Time: O(n), Space: O(n)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Find first repeating element in array",
                "First repeating = element that appears again after first occurrence",
                "What if no repeating? Return -1",
                "Return index of first occurrence of repeating element",
                "Input: Array, Output: Index of first repeating element",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: ["first repeating", "hash map", "frequency", "track"],
              details: [
                "Keywords: 'first repeating', 'track' → Hash map for frequency",
                "Pattern: Frequency tracking → Track first occurrence, detect repeat",
                "This is a 'frequency tracking' problem",
                "Similar to: First unique, majority element, duplicates",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Array: Input is already an array",
                "Hash Map: Track first occurrence index of each element",
                "Variable: Track minimum index of repeating element",
                "O(n) space for hash map",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Hash map tracking",
                "  - For each element:",
                "    * If seen before: update minIndex if earlier",
                "    * Else: store first occurrence index",
                "  - Time: O(n), Space: O(n)",
                "",
                "Alternative: Use Set (but loses first occurrence info)",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • No repeating: Return -1",
                "  • All unique: Return -1",
                "  • All same: Return 0",
                "",
                "Optimization:",
                "  • Single pass: O(n) time",
                "  • Hash map: O(n) space",
                "  • Track minimum index efficiently",
                "",
                "Implementation:",
                "  1. firstOccurrence = {}, minIndex = -1",
                "  2. Loop i from 0 to n-1:",
                "     - If arr[i] in firstOccurrence:",
                "       * minIndex = min(minIndex, firstOccurrence[arr[i]])",
                "     - Else:",
                "       * firstOccurrence[arr[i]] = i",
                "  3. Return minIndex",
              ],
            },
          ],
          pattern: "Frequency Tracking with Hash Map",
          complexity: {
            time: "O(n) - Single pass through array",
            space: "O(n) - Hash map for tracking",
          },
        }}
      />

      <ProblemBlock
        title="13. Repeating Elements Part 2"
        difficulty="Medium"
        description="Find the only repeating element in an array where all elements from 1 to n-1 appear once and one element appears twice."
        solutions={{
          JavaScript: `function findOnlyRepeating(arr) {
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
console.log(findOnlyRepeating([2, 1, 2]));       // 2`,
          Java: `import java.util.*;

public class RepeatingElementsPart2 {
    // Find only repeating element using mathematical approach
    public static int findOnlyRepeating(int[] arr) {
        // Mathematical approach: sum of array - sum of 1 to n-1
        int n = arr.length;
        int actualSum = 0;
        for (int num : arr) {
            actualSum += num;
        }
        int expectedSum = (n * (n - 1)) / 2; // Sum of 1 to n-1
        
        return actualSum - expectedSum;
    }
    
    // Alternative: Using XOR
    public static int findOnlyRepeatingXOR(int[] arr) {
        int xor = 0;
        int n = arr.length;
        
        // XOR all elements in array
        for (int element : arr) {
            xor ^= element;
        }
        
        // XOR with numbers 1 to n-1
        for (int i = 1; i < n; i++) {
            xor ^= i;
        }
        
        return xor; // Result will be the repeating element
    }
    
    // Using hash map approach
    public static int findOnlyRepeatingHash(int[] arr) {
        Set<Integer> seen = new HashSet<>();
        
        for (int element : arr) {
            if (seen.contains(element)) {
                return element; // Found repeating element
            }
            seen.add(element);
        }
        
        return -1; // Should not reach here
    }
    
    // Using Floyd's cycle detection algorithm
    public static int findOnlyRepeatingFloyd(int[] arr) {
        // Treat array as linked list where arr[i] points to arr[arr[i]]
        int slow = arr[0];
        int fast = arr[0];
        
        // Find intersection point in cycle
        do {
            slow = arr[slow];
            fast = arr[arr[fast]];
        } while (slow != fast);
        
        // Find start of cycle (repeating element)
        slow = arr[0];
        while (slow != fast) {
            slow = arr[slow];
            fast = arr[fast];
        }
        
        return slow;
    }
    
    // Find missing and repeating elements
    public static class Result {
        int missing;
        int repeating;
        
        Result(int missing, int repeating) {
            this.missing = missing;
            this.repeating = repeating;
        }
    }
    
    public static Result findMissingAndRepeating(int[] arr) {
        int n = arr.length;
        long actualSum = 0;
        long actualSumSquares = 0;
        
        for (int num : arr) {
            actualSum += num;
            actualSumSquares += (long) num * num;
        }
        
        long expectedSum = (long) n * (n + 1) / 2;
        long expectedSumSquares = (long) n * (n + 1) * (2 * n + 1) / 6;
        
        long sumDiff = actualSum - expectedSum;
        long sumSquaresDiff = actualSumSquares - expectedSumSquares;
        
        int repeating = (int) (sumDiff + sumSquaresDiff / sumDiff) / 2;
        int missing = (int) (repeating - sumDiff);
        
        return new Result(missing, repeating);
    }
    
    public static void main(String[] args) {
        System.out.println(findOnlyRepeating(new int[]{1, 3, 2, 3, 4})); // 3
        System.out.println(findOnlyRepeating(new int[]{1, 2, 3, 4, 4})); // 4
        System.out.println(findOnlyRepeating(new int[]{2, 1, 2}));       // 2
    }
}`,
        }}
        explanation="Mathematical approach: difference between actual sum and expected sum gives the repeating element. Time: O(n), Space: O(1)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Find only repeating element in array",
                "Array contains 1 to n-1, each once, plus one duplicate",
                "Only one element repeats",
                "What if no repeating? Not possible by problem definition",
                "Input: Array with one duplicate, Output: Repeating element",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: [
                "only repeating",
                "duplicate",
                "sum",
                "XOR",
                "mathematical",
              ],
              details: [
                "Keywords: 'only repeating', 'duplicate' → Mathematical or XOR approach",
                "Pattern: Sum difference → Actual sum - expected sum = duplicate",
                "This is a 'mathematical approach' problem",
                "Similar to: Missing number, find duplicate, cycle detection",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Array: Input is already an array",
                "Variables: actualSum, expectedSum",
                "No additional data structures needed",
                "O(1) space solution possible",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Option 1: Mathematical (Sum difference)",
                "  - actualSum = sum of array",
                "  - expectedSum = sum of 1 to n-1 = n*(n-1)/2",
                "  - repeating = actualSum - expectedSum",
                "  - Time: O(n), Space: O(1)",
                "",
                "Option 2: XOR approach",
                "  - XOR all elements with 1 to n-1",
                "  - Result is repeating element",
                "  - Time: O(n), Space: O(1)",
                "",
                "Best Choice: Option 1 - Simpler to understand",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • Array length n: Elements are 1 to n-1 + one duplicate",
                "  • All elements distinct except one: Handle correctly",
                "",
                "Optimization:",
                "  • Single pass: O(n) time",
                "  • Constant space: O(1)",
                "  • Mathematical formula: O(1) calculation",
                "",
                "Implementation:",
                "  1. actualSum = sum of all elements",
                "  2. n = arr.length",
                "  3. expectedSum = n * (n - 1) / 2",
                "  4. Return actualSum - expectedSum",
              ],
            },
          ],
          pattern: "Mathematical Approach (Sum Difference)",
          complexity: {
            time: "O(n) - Calculate sum of array",
            space: "O(1) - Only variables used",
          },
        }}
      />

      <ProblemBlock
        title="14. Allocate Minimum Pages (Naive Method)"
        difficulty="Medium"
        description="Allocate minimum number of pages to students such that maximum pages allocated to any student is minimized."
        solutions={{
          JavaScript: `function allocatePagesNaive(pages, students) {
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
console.log(allocatePagesNaive([10, 20, 30, 40], 2)); // 60`,
          Java: `import java.util.*;

public class AllocateMinimumPagesNaive {
    // Naive recursive approach
    public static int allocatePagesNaive(int[] pages, int students) {
        if (students > pages.length) {
            return -1; // More students than books
        }
        
        if (students == 1) {
            int sum = 0;
            for (int page : pages) {
                sum += page;
            }
            return sum;
        }
        
        if (pages.length == 1) {
            return pages[0];
        }
        
        // Try all possible ways to divide books
        int[] minPages = {Integer.MAX_VALUE};
        tryAllocation(pages, students, 0, 0, 0, 0, minPages);
        return minPages[0] == Integer.MAX_VALUE ? -1 : minPages[0];
    }
    
    private static void tryAllocation(int[] pages, int students, int bookIndex, 
                                     int studentIndex, int currentMax, int currentSum, int[] minPages) {
        if (bookIndex == pages.length) {
            if (studentIndex == students) {
                minPages[0] = Math.min(minPages[0], currentMax);
            }
            return;
        }
        
        if (studentIndex == students) {
            return; // No more students available
        }
        
        // Allocate current book to current student
        int newSum = currentSum + pages[bookIndex];
        int newMax = Math.max(currentMax, newSum);
        tryAllocation(pages, students, bookIndex + 1, studentIndex, newMax, newSum, minPages);
        
        // Allocate current book to next student (if not first book)
        if (bookIndex > 0) {
            tryAllocation(pages, students, bookIndex + 1, studentIndex + 1, 
                         Math.max(currentMax, pages[bookIndex]), pages[bookIndex], minPages);
        }
    }
    
    // Recursive approach with memoization
    public static int allocatePagesRecursive(int[] pages, int students) {
        if (students > pages.length) return -1;
        if (students == 1) {
            int sum = 0;
            for (int page : pages) sum += page;
            return sum;
        }
        if (pages.length == 1) return pages[0];
        
        Map<String, Integer> memo = new HashMap<>();
        return dp(pages, students, 0, students, memo);
    }
    
    private static int dp(int[] pages, int totalStudents, int bookIndex, 
                         int remainingStudents, Map<String, Integer> memo) {
        String key = bookIndex + "-" + remainingStudents;
        
        if (memo.containsKey(key)) {
            return memo.get(key);
        }
        
        if (remainingStudents == 1) {
            int sum = 0;
            for (int i = bookIndex; i < pages.length; i++) {
                sum += pages[i];
            }
            memo.put(key, sum);
            return sum;
        }
        
        int minPages = Integer.MAX_VALUE;
        int currentSum = 0;
        
        for (int i = bookIndex; i < pages.length - remainingStudents + 1; i++) {
            currentSum += pages[i];
            int remainingPages = dp(pages, totalStudents, i + 1, remainingStudents - 1, memo);
            int maxPages = Math.max(currentSum, remainingPages);
            minPages = Math.min(minPages, maxPages);
        }
        
        memo.put(key, minPages);
        return minPages;
    }
    
    public static void main(String[] args) {
        System.out.println(allocatePagesNaive(new int[]{12, 34, 67, 90}, 2)); // 113
        System.out.println(allocatePagesNaive(new int[]{15, 17, 20}, 2));     // 32
        System.out.println(allocatePagesNaive(new int[]{10, 20, 30, 40}, 2)); // 60
    }
}`,
        }}
        explanation="Naive recursive approach tries all possible ways to divide books among students. Exponential time complexity. Time: O(2^n), Space: O(n)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Allocate pages to students such that max pages per student is minimized",
                "All books must be allocated",
                "Books must be allocated in order (can't rearrange)",
                "What if students > books? Invalid",
                "Input: Array of pages, number of students, Output: Minimum max pages",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: [
                "allocate",
                "minimum",
                "maximum",
                "optimization",
                "recursive",
              ],
              details: [
                "Keywords: 'allocate', 'minimum maximum' → Optimization problem",
                "Pattern: Try all partitions → Recursive with memoization",
                "This is a 'recursive partition' problem",
                "Similar to: Partition array, split array, divide and conquer",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Array: Input is already an array",
                "Memoization: Cache results to avoid recomputation",
                "Recursive call stack: O(n) space",
                "O(n) space for memoization",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Recursive with memoization",
                "  - Try all possible ways to partition books",
                "  - For each partition:",
                "    * Calculate max pages for current student",
                "    * Recursively solve for remaining books and students",
                "    * Take minimum of all possibilities",
                "  - Time: O(2^n) naive, O(n²*k) with memoization",
                "  - Space: O(n*k) for memoization",
                "",
                "Note: This is naive approach, binary search is better",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • students > books: Return -1",
                "  • students == 1: Return sum of all pages",
                "  • students == books: Return max page",
                "",
                "Optimization:",
                "  • Memoization: Avoid recomputation",
                "  • Early termination: If current max > best, skip",
                "  • Pruning: Skip invalid partitions",
                "",
                "Implementation:",
                "  1. Base cases: students > books, students == 1",
                "  2. Try all partitions:",
                "     - For each possible split point:",
                "       * Calculate pages for current student",
                "       * Recursively solve for remaining",
                "       * Take minimum",
                "  3. Return minimum",
              ],
            },
          ],
          pattern: "Recursive Partition with Memoization",
          complexity: {
            time: "O(2^n) naive, O(n²*k) with memoization",
            space: "O(n*k) - Memoization table",
          },
        }}
      />

      <ProblemBlock
        title="15. Allocate Minimum Pages (Binary Search)"
        difficulty="Medium"
        description="Efficiently allocate minimum number of pages using binary search on the answer space."
        solutions={{
          JavaScript: `function allocatePagesBinarySearch(pages, students) {
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
console.log(getOptimalAllocation([12, 34, 67, 90], 2)); // {minPages: 113, allocation: [[12, 34], [67, 90]]}`,
          Java: `import java.util.*;

public class AllocateMinimumPagesBinarySearch {
    // Allocate pages using binary search
    public static int allocatePagesBinarySearch(int[] pages, int students) {
        if (students > pages.length) return -1;
        
        // Binary search on the answer space
        int left = Arrays.stream(pages).max().orElse(0); // Minimum possible answer
        int right = Arrays.stream(pages).sum(); // Maximum possible answer
        int result = -1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (isValidAllocation(pages, students, mid)) {
                result = mid;
                right = mid - 1; // Try to minimize the answer
            } else {
                left = mid + 1; // Need more pages
            }
        }
        
        return result;
    }
    
    private static boolean isValidAllocation(int[] pages, int students, int maxPages) {
        int studentCount = 1;
        int currentSum = 0;
        
        for (int page : pages) {
            if (currentSum + page > maxPages) {
                studentCount++;
                currentSum = page;
                
                if (studentCount > students) {
                    return false; // Cannot allocate within given pages
                }
            } else {
                currentSum += page;
            }
        }
        
        return true;
    }
    
    // Alternative: Find minimum pages needed
    public static int allocatePagesOptimal(int[] pages, int students) {
        if (students > pages.length) return -1;
        
        int totalPages = Arrays.stream(pages).sum();
        int maxPages = Arrays.stream(pages).max().orElse(0);
        
        int left = maxPages;
        int right = totalPages;
        
        while (left < right) {
            int mid = left + (right - left) / 2;
            
            if (canAllocate(pages, students, mid)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        
        return left;
    }
    
    private static boolean canAllocate(int[] pages, int students, int maxPagesPerStudent) {
        int studentsUsed = 1;
        int currentPages = 0;
        
        for (int pageCount : pages) {
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
    public static class AllocationResult {
        int minPages;
        List<List<Integer>> allocation;
        
        AllocationResult(int minPages, List<List<Integer>> allocation) {
            this.minPages = minPages;
            this.allocation = allocation;
        }
    }
    
    public static AllocationResult getOptimalAllocation(int[] pages, int students) {
        int minPages = allocatePagesBinarySearch(pages, students);
        List<List<Integer>> allocation = new ArrayList<>();
        int currentSum = 0;
        List<Integer> currentStudent = new ArrayList<>();
        
        for (int pageCount : pages) {
            if (currentSum + pageCount <= minPages) {
                currentSum += pageCount;
                currentStudent.add(pageCount);
            } else {
                allocation.add(new ArrayList<>(currentStudent));
                currentStudent = new ArrayList<>();
                currentStudent.add(pageCount);
                currentSum = pageCount;
            }
        }
        
        if (!currentStudent.isEmpty()) {
            allocation.add(currentStudent);
        }
        
        return new AllocationResult(minPages, allocation);
    }
    
    public static void main(String[] args) {
        System.out.println(allocatePagesBinarySearch(new int[]{12, 34, 67, 90}, 2)); // 113
        System.out.println(allocatePagesBinarySearch(new int[]{15, 17, 20}, 2));     // 32
        System.out.println(allocatePagesBinarySearch(new int[]{10, 20, 30, 40}, 2)); // 60
    }
}`,
        }}
        explanation="Binary search on answer space: check if allocation is possible with given maximum pages per student. Time: O(n * log(sum)), Space: O(1)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Allocate pages to students such that max pages per student is minimized",
                "All books must be allocated",
                "Books must be allocated in order",
                "What if students > books? Invalid",
                "Input: Array of pages, number of students, Output: Minimum max pages",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: [
                "allocate",
                "minimum",
                "maximum",
                "binary search",
                "answer space",
              ],
              details: [
                "Keywords: 'allocate', 'minimum maximum' → Binary search on answer",
                "Pattern: Binary search on answer space → Check if allocation possible",
                "This is a 'binary search on answer space' problem",
                "Similar to: Split array largest sum, capacity to ship packages",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Array: Input is already an array",
                "Variables: left, right, mid for binary search",
                "No additional data structures needed",
                "O(1) space solution possible",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Binary search on answer space",
                "  - Search range: left = max(pages), right = sum(pages)",
                "  - For each mid, check if allocation possible:",
                "    * Greedily allocate pages to students",
                "    * If can allocate with <= students: valid",
                "  - If valid: try smaller (right = mid - 1)",
                "  - If invalid: need more (left = mid + 1)",
                "  - Time: O(n * log(sum)), Space: O(1)",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • students > books: Return -1",
                "  • students == 1: Return sum of all pages",
                "  • students == books: Return max page",
                "",
                "Optimization:",
                "  • Binary search: O(log(sum)) iterations",
                "  • Validation: O(n) per iteration",
                "  • Total: O(n * log(sum)) time, O(1) space",
                "",
                "Implementation:",
                "  1. left = max(pages), right = sum(pages)",
                "  2. While left <= right:",
                "     - mid = (left + right) / 2",
                "     - If canAllocate(pages, students, mid):",
                "       * result = mid, right = mid - 1",
                "     - Else: left = mid + 1",
                "  3. Return result",
              ],
            },
          ],
          pattern: "Binary Search on Answer Space",
          complexity: {
            time: "O(n * log(sum)) - Binary search with validation",
            space: "O(1) - Only variables used",
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
                  ? "bg-indigo-500 text-white"
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
        className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors mb-4"
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
                    ? "text-indigo-400 border-b-2 border-indigo-400"
                    : "text-gray-400 hover:text-gray-300"
                }`}
              >
                Solution
              </button>
              <button
                onClick={() => setActiveTab("approach")}
                className={`px-4 py-2 font-semibold transition-colors ${
                  activeTab === "approach"
                    ? "text-indigo-400 border-b-2 border-indigo-400"
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
