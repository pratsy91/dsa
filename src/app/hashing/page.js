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
            code={{
              JavaScript: `// Hash Table Implementation with Chaining

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
console.log(hashTable.has('banana')); // true`,
              Java: `import java.util.ArrayList;
import java.util.List;

class HashTable {
    private int size;
    private List<List<Entry>> table;
    
    private static class Entry {
        String key;
        Integer value;
        
        Entry(String key, Integer value) {
            this.key = key;
            this.value = value;
        }
    }
    
    public HashTable(int size) {
        this.size = size;
        this.table = new ArrayList<>();
        for (int i = 0; i < size; i++) {
            this.table.add(new ArrayList<>());
        }
    }
    
    public HashTable() {
        this(10);
    }
    
    // Hash function
    private int hash(String key) {
        int hash = 0;
        for (int i = 0; i < key.length(); i++) {
            hash = (hash + key.charAt(i)) % this.size;
        }
        return hash;
    }
    
    // Insert key-value pair
    public void set(String key, Integer value) {
        int index = hash(key);
        List<Entry> bucket = table.get(index);
        
        // Check if key already exists
        for (Entry entry : bucket) {
            if (entry.key.equals(key)) {
                entry.value = value; // Update existing
                return;
            }
        }
        
        // Add new key-value pair
        bucket.add(new Entry(key, value));
    }
    
    // Get value by key
    public Integer get(String key) {
        int index = hash(key);
        List<Entry> bucket = table.get(index);
        
        for (Entry entry : bucket) {
            if (entry.key.equals(key)) {
                return entry.value;
            }
        }
        
        return null; // Key not found
    }
    
    // Delete key-value pair
    public boolean delete(String key) {
        int index = hash(key);
        List<Entry> bucket = table.get(index);
        
        for (int i = 0; i < bucket.size(); i++) {
            if (bucket.get(i).key.equals(key)) {
                bucket.remove(i);
                return true;
            }
        }
        
        return false; // Key not found
    }
    
    // Check if key exists
    public boolean has(String key) {
        return get(key) != null;
    }
    
    public static void main(String[] args) {
        HashTable hashTable = new HashTable();
        hashTable.set("apple", 5);
        hashTable.set("banana", 3);
        System.out.println(hashTable.get("apple")); // 5
        System.out.println(hashTable.has("banana")); // true
    }
}`,
            }}
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
        solutions={{
          JavaScript: `// Count Distinct Elements

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

// Test cases
const arr = [1, 2, 3, 4, 1, 2, 3, 5, 6, 7, 1, 2];
console.log(countDistinctElements(arr)); // 7
console.log(countDistinctElementsMap(arr)); // 7
console.log(countDistinctElementsObject(arr)); // 7
console.log(countDistinctWithFrequency(arr)); // { distinctCount: 7, frequencies: {...} }`,
          Java: `import java.util.*;

public class CountDistinct {
    // Using HashSet (built-in hash table)
    public static int countDistinctElements(int[] arr) {
        Set<Integer> distinctSet = new HashSet<>();
        for (int element : arr) {
            distinctSet.add(element);
        }
        return distinctSet.size();
    }
    
    // Using HashMap for more control
    public static int countDistinctElementsMap(int[] arr) {
        Map<Integer, Integer> countMap = new HashMap<>();
        
        for (int element : arr) {
            countMap.put(element, countMap.getOrDefault(element, 0) + 1);
        }
        
        return countMap.size();
    }
    
    // Count distinct elements with frequency
    public static Map<String, Object> countDistinctWithFrequency(int[] arr) {
        Map<Integer, Integer> frequencyMap = new HashMap<>();
        
        for (int element : arr) {
            frequencyMap.put(element, frequencyMap.getOrDefault(element, 0) + 1);
        }
        
        Map<String, Object> result = new HashMap<>();
        result.put("distinctCount", frequencyMap.size());
        result.put("frequencies", frequencyMap);
        return result;
    }
    
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 1, 2, 3, 5, 6, 7, 1, 2};
        System.out.println(countDistinctElements(arr)); // 7
        System.out.println(countDistinctElementsMap(arr)); // 7
        System.out.println(countDistinctWithFrequency(arr)); 
        // {distinctCount=7, frequencies={1=3, 2=3, 3=2, 4=1, 5=1, 6=1, 7=1}}
    }
}`,
        }}
        explanation="Use Set or Map to store unique elements. Set automatically handles duplicates. Time: O(n), Space: O(n)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Count number of distinct (unique) elements in array",
                "Elements can repeat multiple times",
                "Need to count only unique values",
                "Input: Array, Output: Count of distinct elements",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: ["distinct", "unique", "count", "hash", "set"],
              details: [
                "Keywords: 'distinct', 'unique' → Hash set or map",
                "Pattern: Remove duplicates → Use hash set",
                "This is a 'distinct elements counting' problem",
                "Similar to: Frequency counting, duplicate removal",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Set: To store unique elements (O(n) space)",
                "Map: Alternative if need frequency info",
                "Hash table: Fast O(1) lookup and insertion",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Hash Set",
                "  - Create empty set",
                "  - Add all elements to set (duplicates auto-removed)",
                "  - Return set.size",
                "  - Time: O(n), Space: O(n)",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • Empty array: Return 0",
                "  • All same elements: Return 1",
                "  • All distinct: Return n",
                "",
                "Optimization:",
                "  • Single pass: O(n) time",
                "  • O(n) space for set",
                "  • Set automatically handles duplicates",
                "",
                "Implementation:",
                "  1. Create empty Set",
                "  2. For each element in array:",
                "     - Add to set",
                "  3. Return set.size",
              ],
            },
          ],
          pattern: "Hash Set (Distinct Elements)",
          complexity: {
            time: "O(n) - Single pass through array",
            space: "O(n) - Hash set storage",
          },
        }}
      />

      <ProblemBlock
        title="2. Frequencies of Array Elements"
        difficulty="Easy"
        description="Find the frequency of each element in an array."
        solutions={{
          JavaScript: `// Frequencies of Array Elements

function findFrequencies(arr) {
  const frequencyMap = new Map();
  
  // Count frequencies
  for (const element of arr) {
    frequencyMap.set(element, (frequencyMap.get(element) || 0) + 1);
  }
  
  return frequencyMap;
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
console.log(findMostFrequent(arr)); // { element: 1, frequency: 3 }
console.log(findElementsWithFrequency(arr, 2)); // [2, 3]`,
          Java: `import java.util.*;

public class Frequencies {
    public static Map<Integer, Integer> findFrequencies(int[] arr) {
        Map<Integer, Integer> frequencyMap = new HashMap<>();
        
        // Count frequencies
        for (int element : arr) {
            frequencyMap.put(element, frequencyMap.getOrDefault(element, 0) + 1);
        }
        
        return frequencyMap;
    }
    
    // Find most frequent element
    public static Map<String, Integer> findMostFrequent(int[] arr) {
        Map<Integer, Integer> frequencies = findFrequencies(arr);
        int maxFreq = 0;
        Integer mostFrequent = null;
        
        for (Map.Entry<Integer, Integer> entry : frequencies.entrySet()) {
            if (entry.getValue() > maxFreq) {
                maxFreq = entry.getValue();
                mostFrequent = entry.getKey();
            }
        }
        
        Map<String, Integer> result = new HashMap<>();
        result.put("element", mostFrequent);
        result.put("frequency", maxFreq);
        return result;
    }
    
    // Find all elements with given frequency
    public static List<Integer> findElementsWithFrequency(int[] arr, int targetFreq) {
        Map<Integer, Integer> frequencies = findFrequencies(arr);
        List<Integer> result = new ArrayList<>();
        
        for (Map.Entry<Integer, Integer> entry : frequencies.entrySet()) {
            if (entry.getValue() == targetFreq) {
                result.add(entry.getKey());
            }
        }
        
        return result;
    }
    
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 1, 2, 3, 5, 6, 7, 1, 2};
        System.out.println(findFrequencies(arr)); 
        // {1=3, 2=3, 3=2, 4=1, 5=1, 6=1, 7=1}
        System.out.println(findMostFrequent(arr)); // {element=1, frequency=3}
        System.out.println(findElementsWithFrequency(arr, 2)); // [2, 3]
    }
}`,
        }}
        explanation="Use Map or object to count occurrences of each element. Time: O(n), Space: O(n)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Find frequency (count) of each element in array",
                "Count how many times each element appears",
                "Return frequency map",
                "Input: Array, Output: Map of element → frequency",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: ["frequency", "count", "occurrences", "hash map"],
              details: [
                "Keywords: 'frequency', 'count occurrences' → Hash map",
                "Pattern: Count occurrences → Use map to track counts",
                "This is a 'frequency counting' problem",
                "Similar to: Distinct elements, counting sort",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Map/HashMap: To store element → frequency mapping",
                "O(n) space for map",
                "Fast O(1) lookup and update",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Hash Map Frequency Counting",
                "  - Create empty map",
                "  - For each element:",
                "    - Increment count in map",
                "  - Return map",
                "  - Time: O(n), Space: O(n)",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • Empty array: Return empty map",
                "  • All same elements: Single entry with count n",
                "  • All distinct: n entries with count 1 each",
                "",
                "Optimization:",
                "  • Single pass: O(n) time",
                "  • O(n) space for map",
                "  • Efficient O(1) updates",
                "",
                "Implementation:",
                "  1. Create empty Map",
                "  2. For each element in array:",
                "     - map.set(element, (map.get(element) || 0) + 1)",
                "  3. Return map",
              ],
            },
          ],
          pattern: "Hash Map (Frequency Counting)",
          complexity: {
            time: "O(n) - Single pass through array",
            space: "O(n) - Hash map storage",
          },
        }}
      />

      <ProblemBlock
        title="3. Intersection of Two Unsorted Arrays"
        difficulty="Easy"
        description="Find the intersection (common elements) of two unsorted arrays."
        solutions={{
          JavaScript: `// Intersection of Two Unsorted Arrays

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

// Test cases
const arr1 = [1, 2, 3, 4, 5, 2, 3];
const arr2 = [3, 4, 5, 6, 7, 3];
console.log(intersectionOfArrays(arr1, arr2)); // [3, 4, 5]
console.log(intersectionWithCount(arr1, arr2)); // [3, 3, 4, 5]`,
          Java: `import java.util.*;

public class Intersection {
    public static List<Integer> intersectionOfArrays(int[] arr1, int[] arr2) {
        Set<Integer> set1 = new HashSet<>();
        for (int element : arr1) {
            set1.add(element);
        }
        
        Set<Integer> intersection = new HashSet<>();
        for (int element : arr2) {
            if (set1.contains(element)) {
                intersection.add(element);
            }
        }
        
        return new ArrayList<>(intersection);
    }
    
    // Intersection with frequency count
    public static List<Integer> intersectionWithCount(int[] arr1, int[] arr2) {
        Map<Integer, Integer> count1 = new HashMap<>();
        Map<Integer, Integer> count2 = new HashMap<>();
        
        // Count frequencies in both arrays
        for (int element : arr1) {
            count1.put(element, count1.getOrDefault(element, 0) + 1);
        }
        
        for (int element : arr2) {
            count2.put(element, count2.getOrDefault(element, 0) + 1);
        }
        
        // Find common elements with minimum frequency
        List<Integer> result = new ArrayList<>();
        for (Map.Entry<Integer, Integer> entry : count1.entrySet()) {
            int element = entry.getKey();
            int freq1 = entry.getValue();
            
            if (count2.containsKey(element)) {
                int freq2 = count2.get(element);
                int minFreq = Math.min(freq1, freq2);
                
                // Add element minFreq times
                for (int i = 0; i < minFreq; i++) {
                    result.add(element);
                }
            }
        }
        
        return result;
    }
    
    public static void main(String[] args) {
        int[] arr1 = {1, 2, 3, 4, 5, 2, 3};
        int[] arr2 = {3, 4, 5, 6, 7, 3};
        System.out.println(intersectionOfArrays(arr1, arr2)); // [3, 4, 5]
        System.out.println(intersectionWithCount(arr1, arr2)); // [3, 3, 4, 5]
    }
}`,
        }}
        explanation="Use Set for unique intersection or Map for frequency-aware intersection. Time: O(m+n), Space: O(min(m,n))."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Find intersection (common elements) of two unsorted arrays",
                "Elements present in both arrays",
                "Handle duplicates? Unique or with frequency?",
                "Input: Two arrays, Output: Intersection array",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: ["intersection", "common", "unsorted", "hash set"],
              details: [
                "Keywords: 'intersection', 'common elements' → Hash set",
                "Pattern: Find common elements → Use set for lookup",
                "This is a 'set intersection' problem",
                "Similar to: Union of arrays, common elements",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Set: To store elements of first array (O(m) space)",
                "Result set: To store intersection (O(min(m,n)) space)",
                "Hash set: Fast O(1) lookup",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Hash Set Intersection",
                "  - Add all elements of arr1 to set",
                "  - For each element in arr2:",
                "    - If element in set: add to result",
                "  - Time: O(m+n), Space: O(min(m,n))",
                "",
                "Alternative: Use Map for frequency-aware intersection",
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
                "  • O(m+n) time - single pass",
                "  • O(min(m,n)) space",
                "  • Efficient set lookup",
                "",
                "Implementation:",
                "  1. Create set from arr1",
                "  2. result = []",
                "  3. For each element in arr2:",
                "     - If element in set: add to result",
                "  4. Return result",
              ],
            },
          ],
          pattern: "Hash Set Intersection",
          complexity: {
            time: "O(m+n) - Single pass through both arrays",
            space: "O(min(m,n)) - Set and result",
          },
        }}
      />

      <ProblemBlock
        title="4. Union of Two Unsorted Arrays"
        difficulty="Easy"
        description="Find the union (all unique elements) of two unsorted arrays."
        solutions={{
          JavaScript: `// Union of Two Unsorted Arrays

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

// Test cases
const arr1 = [1, 2, 3, 4, 5, 2, 3];
const arr2 = [3, 4, 5, 6, 7, 3];
console.log(unionOfArrays(arr1, arr2)); // [1, 2, 3, 4, 5, 6, 7]
console.log(unionPreservingOrder(arr1, arr2)); // [1, 2, 3, 4, 5, 6, 7]`,
          Java: `import java.util.*;

public class Union {
    public static List<Integer> unionOfArrays(int[] arr1, int[] arr2) {
        Set<Integer> unionSet = new HashSet<>();
        
        // Add all elements from both arrays
        for (int element : arr1) {
            unionSet.add(element);
        }
        
        for (int element : arr2) {
            unionSet.add(element);
        }
        
        return new ArrayList<>(unionSet);
    }
    
    // Union preserving order (first occurrence)
    public static List<Integer> unionPreservingOrder(int[] arr1, int[] arr2) {
        Set<Integer> seen = new HashSet<>();
        List<Integer> result = new ArrayList<>();
        
        // Add elements from first array
        for (int element : arr1) {
            if (!seen.contains(element)) {
                result.add(element);
                seen.add(element);
            }
        }
        
        // Add elements from second array
        for (int element : arr2) {
            if (!seen.contains(element)) {
                result.add(element);
                seen.add(element);
            }
        }
        
        return result;
    }
    
    public static void main(String[] args) {
        int[] arr1 = {1, 2, 3, 4, 5, 2, 3};
        int[] arr2 = {3, 4, 5, 6, 7, 3};
        System.out.println(unionOfArrays(arr1, arr2)); // [1, 2, 3, 4, 5, 6, 7]
        System.out.println(unionPreservingOrder(arr1, arr2)); // [1, 2, 3, 4, 5, 6, 7]
    }
}`,
        }}
        explanation="Use Set to automatically handle duplicates. Union contains all unique elements from both arrays. Time: O(m+n), Space: O(m+n)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Find union (all unique elements) of two unsorted arrays",
                "Elements from both arrays, no duplicates",
                "Order may or may not matter",
                "Input: Two arrays, Output: Union array",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: ["union", "unique", "unsorted", "hash set"],
              details: [
                "Keywords: 'union', 'unique elements' → Hash set",
                "Pattern: Combine arrays → Use set to remove duplicates",
                "This is a 'set union' problem",
                "Similar to: Intersection of arrays, distinct elements",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Set: To store unique elements from both arrays",
                "O(m+n) space for set",
                "Hash set: Fast O(1) insertion",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Hash Set Union",
                "  - Create empty set",
                "  - Add all elements from arr1",
                "  - Add all elements from arr2",
                "  - Set automatically handles duplicates",
                "  - Time: O(m+n), Space: O(m+n)",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • Empty arrays: Return empty",
                "  • All same elements: Return single element",
                "  • No common elements: Return all from both",
                "",
                "Optimization:",
                "  • O(m+n) time - single pass",
                "  • O(m+n) space for set",
                "  • Set automatically handles duplicates",
                "",
                "Implementation:",
                "  1. Create empty Set",
                "  2. Add all elements from arr1",
                "  3. Add all elements from arr2",
                "  4. Return Array.from(set)",
              ],
            },
          ],
          pattern: "Hash Set Union",
          complexity: {
            time: "O(m+n) - Single pass through both arrays",
            space: "O(m+n) - Hash set storage",
          },
        }}
      />

      <ProblemBlock
        title="5. Pair with Given Sum in Unsorted Array"
        difficulty="Easy"
        description="Find a pair of elements in an unsorted array that sum to a given target value."
        solutions={{
          JavaScript: `// Pair with Given Sum in Unsorted Array

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

// Test cases
const arr = [1, 4, 45, 6, 10, 8];
const target = 16;
console.log(findPairWithSum(arr, target)); // [10, 6]
console.log(findAllPairsWithSum(arr, target)); // [[10, 6]]
console.log(findPairWithIndices(arr, target)); // [4, 3] (indices of 10 and 6)`,
          Java: `import java.util.*;

public class PairWithSum {
    public static int[] findPairWithSum(int[] arr, int target) {
        Set<Integer> seen = new HashSet<>();
        
        for (int num : arr) {
            int complement = target - num;
            
            if (seen.contains(complement)) {
                return new int[]{complement, num};
            }
            
            seen.add(num);
        }
        
        return null; // No pair found
    }
    
    // Find all pairs with given sum
    public static List<int[]> findAllPairsWithSum(int[] arr, int target) {
        Map<Integer, Integer> seen = new HashMap<>(); // Store frequency
        List<int[]> pairs = new ArrayList<>();
        
        for (int num : arr) {
            int complement = target - num;
            int complementCount = seen.getOrDefault(complement, 0);
            
            if (complementCount > 0) {
                pairs.add(new int[]{complement, num});
                seen.put(complement, complementCount - 1);
            } else {
                seen.put(num, seen.getOrDefault(num, 0) + 1);
            }
        }
        
        return pairs;
    }
    
    // Find pair with indices
    public static int[] findPairWithIndices(int[] arr, int target) {
        Map<Integer, Integer> seen = new HashMap<>();
        
        for (int i = 0; i < arr.length; i++) {
            int num = arr[i];
            int complement = target - num;
            
            if (seen.containsKey(complement)) {
                return new int[]{seen.get(complement), i};
            }
            
            seen.put(num, i);
        }
        
        return null;
    }
    
    public static void main(String[] args) {
        int[] arr = {1, 4, 45, 6, 10, 8};
        int target = 16;
        System.out.println(Arrays.toString(findPairWithSum(arr, target))); // [10, 6]
        System.out.println(findAllPairsWithSum(arr, target)); // [[10, 6]]
        System.out.println(Arrays.toString(findPairWithIndices(arr, target))); // [4, 3]
    }
}`,
        }}
        explanation="Use Set to store seen elements. For each element, check if complement (target - element) exists in set. Time: O(n), Space: O(n)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Find pair of elements that sum to target",
                "Array is unsorted",
                "Return pair or indices?",
                "Input: Array, target sum, Output: Pair or indices",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: ["pair", "sum", "target", "complement", "hash set"],
              details: [
                "Keywords: 'pair with sum', 'target' → Two sum problem",
                "Pattern: For each element, check if complement exists",
                "This is a 'two sum' problem",
                "Similar to: Three sum, four sum",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Set: To store seen elements (O(n) space)",
                "Map: If need indices (O(n) space)",
                "Hash table: Fast O(1) lookup",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Hash Set/Map with Complement",
                "  - For each element:",
                "    - Calculate complement = target - element",
                "    - If complement in set: return pair",
                "    - Add element to set",
                "  - Time: O(n), Space: O(n)",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • No pair found: Return null",
                "  • Duplicate elements: Handle appropriately",
                "  • Same element twice: Check if 2*element == target",
                "",
                "Optimization:",
                "  • Single pass: O(n) time",
                "  • O(n) space for set",
                "  • Better than O(n²) brute force",
                "",
                "Implementation:",
                "  1. Create empty Set",
                "  2. For each element in array:",
                "     - complement = target - element",
                "     - If complement in set: return [complement, element]",
                "     - Add element to set",
                "  3. Return null",
              ],
            },
          ],
          pattern: "Hash Set (Two Sum)",
          complexity: {
            time: "O(n) - Single pass through array",
            space: "O(n) - Hash set storage",
          },
        }}
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
        solutions={{
          JavaScript: `// Subarray with Zero Sum

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
console.log(countSubarraysWithZeroSum(arr1)); // 1`,
          Java: `import java.util.*;

public class SubarrayZeroSum {
    public static boolean hasSubarrayWithZeroSum(int[] arr) {
        Set<Integer> prefixSumSet = new HashSet<>();
        int prefixSum = 0;
        
        for (int num : arr) {
            prefixSum += num;
            
            // If prefix sum is 0 or already seen, subarray with zero sum exists
            if (prefixSum == 0 || prefixSumSet.contains(prefixSum)) {
                return true;
            }
            
            prefixSumSet.add(prefixSum);
        }
        
        return false;
    }
    
    // Find first subarray with zero sum
    public static int[] findFirstSubarrayWithZeroSum(int[] arr) {
        Map<Integer, Integer> prefixSumMap = new HashMap<>();
        prefixSumMap.put(0, -1);
        int prefixSum = 0;
        
        for (int i = 0; i < arr.length; i++) {
            prefixSum += arr[i];
            
            if (prefixSumMap.containsKey(prefixSum)) {
                int startIndex = prefixSumMap.get(prefixSum) + 1;
                return new int[]{startIndex, i};
            }
            
            prefixSumMap.put(prefixSum, i);
        }
        
        return null;
    }
    
    // Count number of subarrays with zero sum
    public static int countSubarraysWithZeroSum(int[] arr) {
        Map<Integer, Integer> prefixSumCount = new HashMap<>();
        prefixSumCount.put(0, 1); // Empty subarray
        int prefixSum = 0;
        int count = 0;
        
        for (int num : arr) {
            prefixSum += num;
            count += prefixSumCount.getOrDefault(prefixSum, 0);
            prefixSumCount.put(prefixSum, prefixSumCount.getOrDefault(prefixSum, 0) + 1);
        }
        
        return count;
    }
    
    public static void main(String[] args) {
        int[] arr1 = {4, 2, -3, 1, 6};
        int[] arr2 = {4, 2, 0, 1, 6};
        int[] arr3 = {-3, 2, 3, 1, 6};
        
        System.out.println(hasSubarrayWithZeroSum(arr1)); // true
        System.out.println(hasSubarrayWithZeroSum(arr2)); // true
        System.out.println(hasSubarrayWithZeroSum(arr3)); // false
        System.out.println(Arrays.toString(findFirstSubarrayWithZeroSum(arr1))); // [1, 3]
        System.out.println(countSubarraysWithZeroSum(arr1)); // 1
    }
}`,
        }}
        explanation="Use prefix sum technique. If same prefix sum appears twice, subarray between them has zero sum. Time: O(n), Space: O(n)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Check if subarray with zero sum exists",
                "Subarray is contiguous elements",
                "Sum of subarray elements = 0",
                "Input: Array, Output: Boolean or subarray indices",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: ["subarray", "zero sum", "prefix sum", "hash map"],
              details: [
                "Keywords: 'subarray', 'zero sum' → Prefix sum + hash map",
                "Pattern: If prefix sum repeats → Subarray with zero sum",
                "This is a 'prefix sum with hashing' problem",
                "Similar to: Subarray with given sum, longest subarray",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Set/Map: To store prefix sums",
                "O(n) space for prefix sum storage",
                "Hash table: Fast O(1) lookup",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Prefix Sum + Hash Set",
                "  - Calculate prefix sum as we traverse",
                "  - If prefix sum == 0 or already in set: return true",
                "  - Add prefix sum to set",
                "  - Time: O(n), Space: O(n)",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • First element is 0: Return true",
                "  • Prefix sum becomes 0: Return true",
                "  • No zero sum subarray: Return false",
                "",
                "Optimization:",
                "  • Single pass: O(n) time",
                "  • O(n) space for set",
                "  • Key insight: Repeating prefix sum = zero sum subarray",
                "",
                "Implementation:",
                "  1. prefixSum = 0, set = new Set()",
                "  2. For each element:",
                "     - prefixSum += element",
                "     - If prefixSum == 0 or in set: return true",
                "     - Add prefixSum to set",
                "  3. Return false",
              ],
            },
          ],
          pattern: "Prefix Sum + Hash Set (Zero Sum)",
          complexity: {
            time: "O(n) - Single pass through array",
            space: "O(n) - Hash set storage",
          },
        }}
      />

      <ProblemBlock
        title="7. Subarray with Given Sum"
        difficulty="Medium"
        description="Find a subarray with sum equal to a given target value."
        solutions={{
          JavaScript: `// Subarray with Given Sum

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

// Test cases
const arr = [1, 4, 20, 3, 10, 5];
const target = 33;
console.log(findSubarrayWithSum(arr, target)); // { start: 2, end: 4, subarray: [20, 3, 10], sum: 33 }
console.log(countSubarraysWithSum(arr, target)); // 1`,
          Java: `import java.util.*;

public class SubarrayWithSum {
    public static int[] findSubarrayWithSum(int[] arr, int target) {
        Map<Integer, Integer> prefixSumMap = new HashMap<>();
        prefixSumMap.put(0, -1); // Empty subarray has sum 0
        int prefixSum = 0;
        
        for (int i = 0; i < arr.length; i++) {
            prefixSum += arr[i];
            
            // Check if (prefixSum - target) exists
            if (prefixSumMap.containsKey(prefixSum - target)) {
                int startIndex = prefixSumMap.get(prefixSum - target) + 1;
                return new int[]{startIndex, i};
            }
            
            prefixSumMap.put(prefixSum, i);
        }
        
        return null;
    }
    
    // Count subarrays with given sum
    public static int countSubarraysWithSum(int[] arr, int target) {
        Map<Integer, Integer> prefixSumCount = new HashMap<>();
        prefixSumCount.put(0, 1);
        int prefixSum = 0;
        int count = 0;
        
        for (int num : arr) {
            prefixSum += num;
            count += prefixSumCount.getOrDefault(prefixSum - target, 0);
            prefixSumCount.put(prefixSum, prefixSumCount.getOrDefault(prefixSum, 0) + 1);
        }
        
        return count;
    }
    
    public static void main(String[] args) {
        int[] arr = {1, 4, 20, 3, 10, 5};
        int target = 33;
        System.out.println(Arrays.toString(findSubarrayWithSum(arr, target))); // [2, 4]
        System.out.println(countSubarraysWithSum(arr, target)); // 1
    }
}`,
        }}
        explanation="Use prefix sum technique. For each prefix sum, check if (prefixSum - target) exists. If yes, subarray between those indices has sum = target. Time: O(n), Space: O(n)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Find subarray with sum equal to target",
                "Subarray is contiguous elements",
                "Return subarray or indices",
                "Input: Array, target sum, Output: Subarray indices",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: ["subarray", "given sum", "prefix sum", "hash map"],
              details: [
                "Keywords: 'subarray', 'given sum' → Prefix sum + hash map",
                "Pattern: prefixSum - target in map → Subarray found",
                "This is a 'prefix sum with hashing' problem",
                "Similar to: Zero sum subarray, longest subarray",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Map: To store prefix sum → index mapping",
                "O(n) space for prefix sum map",
                "Hash map: Fast O(1) lookup",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Prefix Sum + Hash Map",
                "  - Initialize map with {0: -1} (empty subarray)",
                "  - Calculate prefix sum",
                "  - If (prefixSum - target) in map: subarray found",
                "  - Store prefixSum → index in map",
                "  - Time: O(n), Space: O(n)",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • No subarray found: Return null",
                "  • Entire array sums to target: Return [0, n-1]",
                "  • Single element equals target: Return [i, i]",
                "",
                "Optimization:",
                "  • Single pass: O(n) time",
                "  • O(n) space for map",
                "  • Key insight: prefixSum[i] - prefixSum[j] = target",
                "",
                "Implementation:",
                "  1. map = {0: -1}, prefixSum = 0",
                "  2. For i = 0 to n-1:",
                "     - prefixSum += arr[i]",
                "     - If (prefixSum - target) in map:",
                "       * Return [map.get(prefixSum - target) + 1, i]",
                "     - map.set(prefixSum, i)",
                "  3. Return null",
              ],
            },
          ],
          pattern: "Prefix Sum + Hash Map (Subarray Sum)",
          complexity: {
            time: "O(n) - Single pass through array",
            space: "O(n) - Hash map storage",
          },
        }}
      />

      <ProblemBlock
        title="8. Longest Subarray with Given Sum"
        difficulty="Medium"
        description="Find the longest subarray with sum equal to a given target value."
        solutions={{
          JavaScript: `// Longest Subarray with Given Sum

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

// Test cases
const arr = [5, 6, -5, 5, 3, 5, 3, -2, 0];
const target = 8;
console.log(findLongestSubarrayWithSum(arr, target)); 
// { start: 2, end: 5, subarray: [-5, 5, 3, 5], length: 4, sum: 8 }
console.log(longestSubarrayLengthWithSum(arr, target)); // 4`,
          Java: `import java.util.*;

public class LongestSubarrayWithSum {
    public static int[] findLongestSubarrayWithSum(int[] arr, int target) {
        Map<Integer, Integer> prefixSumMap = new HashMap<>();
        prefixSumMap.put(0, -1); // Empty subarray
        int prefixSum = 0;
        int maxLength = 0;
        int[] longestSubarray = null;
        
        for (int i = 0; i < arr.length; i++) {
            prefixSum += arr[i];
            
            // Check if (prefixSum - target) exists
            if (prefixSumMap.containsKey(prefixSum - target)) {
                int startIndex = prefixSumMap.get(prefixSum - target);
                int currentLength = i - startIndex;
                
                if (currentLength > maxLength) {
                    maxLength = currentLength;
                    longestSubarray = new int[]{startIndex + 1, i};
                }
            }
            
            // Only store first occurrence of each prefix sum for longest subarray
            if (!prefixSumMap.containsKey(prefixSum)) {
                prefixSumMap.put(prefixSum, i);
            }
        }
        
        return longestSubarray;
    }
    
    // Find length of longest subarray with given sum
    public static int longestSubarrayLengthWithSum(int[] arr, int target) {
        Map<Integer, Integer> prefixSumMap = new HashMap<>();
        prefixSumMap.put(0, -1);
        int prefixSum = 0;
        int maxLength = 0;
        
        for (int i = 0; i < arr.length; i++) {
            prefixSum += arr[i];
            
            if (prefixSumMap.containsKey(prefixSum - target)) {
                int startIndex = prefixSumMap.get(prefixSum - target);
                maxLength = Math.max(maxLength, i - startIndex);
            }
            
            if (!prefixSumMap.containsKey(prefixSum)) {
                prefixSumMap.put(prefixSum, i);
            }
        }
        
        return maxLength;
    }
    
    public static void main(String[] args) {
        int[] arr = {5, 6, -5, 5, 3, 5, 3, -2, 0};
        int target = 8;
        System.out.println(Arrays.toString(findLongestSubarrayWithSum(arr, target))); 
        // [2, 5]
        System.out.println(longestSubarrayLengthWithSum(arr, target)); // 4
    }
}`,
        }}
        explanation="Use prefix sum with Map storing first occurrence of each sum. For longest subarray, only store first occurrence. Time: O(n), Space: O(n)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Find longest subarray with sum equal to target",
                "Subarray is contiguous elements",
                "Return length or subarray indices",
                "Input: Array, target sum, Output: Longest subarray length or indices",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: [
                "longest",
                "subarray",
                "given sum",
                "prefix sum",
                "hash map",
              ],
              details: [
                "Keywords: 'longest subarray', 'given sum' → Prefix sum + hash map",
                "Pattern: prefixSum - target in map → Track longest length",
                "This is a 'prefix sum with hashing' problem",
                "Similar to: Subarray with given sum, zero sum subarray",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Map: To store prefix sum → first occurrence index",
                "O(n) space for prefix sum map",
                "Hash map: Fast O(1) lookup",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Prefix Sum + Hash Map (First Occurrence)",
                "  - Initialize map with {0: -1}",
                "  - Calculate prefix sum",
                "  - If (prefixSum - target) in map:",
                "    * Update maxLength = max(maxLength, i - map.get(prefixSum - target))",
                "  - Only store first occurrence of each prefix sum",
                "  - Time: O(n), Space: O(n)",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • No subarray found: Return 0",
                "  • Entire array sums to target: Return n",
                "",
                "Optimization:",
                "  • Single pass: O(n) time",
                "  • O(n) space for map",
                "  • Key: Store first occurrence for longest subarray",
                "",
                "Implementation:",
                "  1. map = {0: -1}, prefixSum = 0, maxLength = 0",
                "  2. For i = 0 to n-1:",
                "     - prefixSum += arr[i]",
                "     - If (prefixSum - target) in map:",
                "       * maxLength = max(maxLength, i - map.get(prefixSum - target))",
                "     - If prefixSum not in map: map.set(prefixSum, i)",
                "  3. Return maxLength",
              ],
            },
          ],
          pattern: "Prefix Sum + Hash Map (Longest Subarray)",
          complexity: {
            time: "O(n) - Single pass through array",
            space: "O(n) - Hash map storage",
          },
        }}
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
        solutions={{
          JavaScript: `// Longest Subarray with Equal Number of 0s and 1s

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

// Test cases
const arr1 = [0, 1, 0, 1, 0, 1, 1, 0];
console.log(longestSubarrayWithEqual01(arr1)); 
// { start: 0, end: 7, subarray: [0, 1, 0, 1, 0, 1, 1, 0], length: 8 }
console.log(countSubarraysWithEqual01(arr1)); // 8`,
          Java: `import java.util.*;

public class LongestSubarrayEqual01 {
    public static int[] longestSubarrayWithEqual01(int[] arr) {
        // Replace 0s with -1 to make sum = 0 for equal 0s and 1s
        int[] modifiedArr = new int[arr.length];
        for (int i = 0; i < arr.length; i++) {
            modifiedArr[i] = arr[i] == 0 ? -1 : 1;
        }
        
        Map<Integer, Integer> prefixSumMap = new HashMap<>();
        prefixSumMap.put(0, -1); // Empty subarray
        int prefixSum = 0;
        int maxLength = 0;
        int[] longestSubarray = null;
        
        for (int i = 0; i < modifiedArr.length; i++) {
            prefixSum += modifiedArr[i];
            
            if (prefixSumMap.containsKey(prefixSum)) {
                int startIndex = prefixSumMap.get(prefixSum);
                int currentLength = i - startIndex;
                
                if (currentLength > maxLength) {
                    maxLength = currentLength;
                    longestSubarray = new int[]{startIndex + 1, i};
                }
            } else {
                prefixSumMap.put(prefixSum, i);
            }
        }
        
        return longestSubarray;
    }
    
    // Count subarrays with equal 0s and 1s
    public static int countSubarraysWithEqual01(int[] arr) {
        int[] modifiedArr = new int[arr.length];
        for (int i = 0; i < arr.length; i++) {
            modifiedArr[i] = arr[i] == 0 ? -1 : 1;
        }
        
        Map<Integer, Integer> prefixSumCount = new HashMap<>();
        prefixSumCount.put(0, 1);
        int prefixSum = 0;
        int count = 0;
        
        for (int num : modifiedArr) {
            prefixSum += num;
            count += prefixSumCount.getOrDefault(prefixSum, 0);
            prefixSumCount.put(prefixSum, prefixSumCount.getOrDefault(prefixSum, 0) + 1);
        }
        
        return count;
    }
    
    public static void main(String[] args) {
        int[] arr1 = {0, 1, 0, 1, 0, 1, 1, 0};
        System.out.println(Arrays.toString(longestSubarrayWithEqual01(arr1))); 
        // [0, 7]
        System.out.println(countSubarraysWithEqual01(arr1)); // 8
    }
}`,
        }}
        explanation="Replace 0s with -1, then find longest subarray with sum 0. Equal 0s and 1s means sum = 0. Time: O(n), Space: O(n)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Find longest subarray with equal number of 0s and 1s",
                "Array contains only 0s and 1s",
                "Count of 0s = Count of 1s",
                "Input: Binary array, Output: Longest subarray length or indices",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: ["equal", "0s and 1s", "transform", "prefix sum"],
              details: [
                "Keywords: 'equal 0s and 1s' → Transform to zero sum problem",
                "Pattern: Replace 0 with -1 → Equal 0s and 1s = sum 0",
                "This is a 'problem transformation' problem",
                "Similar to: Zero sum subarray, longest subarray",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Array: Transform 0s to -1s",
                "Map: To store prefix sum → first occurrence",
                "O(n) space",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Transform + Prefix Sum",
                "  - Replace 0 with -1, 1 with 1",
                "  - Find longest subarray with sum 0",
                "  - Use prefix sum + hash map",
                "  - Time: O(n), Space: O(n)",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • No equal subarray: Return 0",
                "  • Entire array has equal 0s and 1s: Return n",
                "",
                "Optimization:",
                "  • Transform problem: 0s and 1s → zero sum",
                "  • Single pass: O(n) time",
                "  • O(n) space for map",
                "",
                "Implementation:",
                "  1. Transform: 0 → -1, 1 → 1",
                "  2. Find longest subarray with sum 0",
                "  3. Use prefix sum + hash map",
                "  4. Return maxLength",
              ],
            },
          ],
          pattern: "Problem Transformation + Prefix Sum",
          complexity: {
            time: "O(n) - Single pass through array",
            space: "O(n) - Hash map storage",
          },
        }}
      />

      <ProblemBlock
        title="10. Longest Common Span with Same Sum in Two Binary Arrays"
        difficulty="Medium"
        description="Find the longest common span with same sum in two binary arrays."
        solutions={{
          JavaScript: `// Longest Common Span with Same Sum in Two Binary Arrays

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
console.log(countCommonSpans(arr1, arr2)); // 2`,
          Java: `import java.util.*;

public class LongestCommonSpan {
    public static int[] longestCommonSpan(int[] arr1, int[] arr2) {
        if (arr1.length != arr2.length) {
            throw new IllegalArgumentException("Arrays must have same length");
        }
        
        // Create difference array
        int[] diff = new int[arr1.length];
        for (int i = 0; i < arr1.length; i++) {
            diff[i] = arr1[i] - arr2[i];
        }
        
        // Find longest subarray with sum 0
        Map<Integer, Integer> prefixSumMap = new HashMap<>();
        prefixSumMap.put(0, -1);
        int prefixSum = 0;
        int maxLength = 0;
        int[] longestSpan = null;
        
        for (int i = 0; i < diff.length; i++) {
            prefixSum += diff[i];
            
            if (prefixSumMap.containsKey(prefixSum)) {
                int startIndex = prefixSumMap.get(prefixSum);
                int currentLength = i - startIndex;
                
                if (currentLength > maxLength) {
                    maxLength = currentLength;
                    longestSpan = new int[]{startIndex + 1, i};
                }
            } else {
                prefixSumMap.put(prefixSum, i);
            }
        }
        
        return longestSpan;
    }
    
    // Count common spans with same sum
    public static int countCommonSpans(int[] arr1, int[] arr2) {
        int[] diff = new int[arr1.length];
        for (int i = 0; i < arr1.length; i++) {
            diff[i] = arr1[i] - arr2[i];
        }
        
        Map<Integer, Integer> prefixSumCount = new HashMap<>();
        prefixSumCount.put(0, 1);
        int prefixSum = 0;
        int count = 0;
        
        for (int num : diff) {
            prefixSum += num;
            count += prefixSumCount.getOrDefault(prefixSum, 0);
            prefixSumCount.put(prefixSum, prefixSumCount.getOrDefault(prefixSum, 0) + 1);
        }
        
        return count;
    }
    
    public static void main(String[] args) {
        int[] arr1 = {0, 1, 0, 1, 1, 1, 1};
        int[] arr2 = {1, 1, 1, 1, 1, 0, 1};
        System.out.println(Arrays.toString(longestCommonSpan(arr1, arr2))); 
        // [1, 6]
        System.out.println(countCommonSpans(arr1, arr2)); // 2
    }
}`,
        }}
        explanation="Create difference array (arr1[i] - arr2[i]), then find longest subarray with sum 0. Time: O(n), Space: O(n)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Find longest common span with same sum in two arrays",
                "Span is contiguous subarray with same indices",
                "Sum of arr1[i..j] = Sum of arr2[i..j]",
                "Input: Two arrays, Output: Longest span length or indices",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: ["common span", "same sum", "difference", "prefix sum"],
              details: [
                "Keywords: 'common span', 'same sum' → Difference array",
                "Pattern: Create difference array → Find zero sum subarray",
                "This is a 'problem transformation' problem",
                "Similar to: Zero sum subarray, longest subarray",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Array: Create difference array",
                "Map: To store prefix sum → first occurrence",
                "O(n) space",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Difference Array + Prefix Sum",
                "  - Create diff[i] = arr1[i] - arr2[i]",
                "  - Find longest subarray with sum 0 in diff",
                "  - Use prefix sum + hash map",
                "  - Time: O(n), Space: O(n)",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • Arrays have different lengths: Handle error",
                "  • No common span: Return 0",
                "",
                "Optimization:",
                "  • Transform: Common sum → Zero sum",
                "  • Single pass: O(n) time",
                "  • O(n) space for map",
                "",
                "Implementation:",
                "  1. Create diff[i] = arr1[i] - arr2[i]",
                "  2. Find longest subarray with sum 0 in diff",
                "  3. Use prefix sum + hash map",
                "  4. Return maxLength",
              ],
            },
          ],
          pattern: "Difference Array + Prefix Sum",
          complexity: {
            time: "O(n) - Single pass through array",
            space: "O(n) - Hash map storage",
          },
        }}
      />

      <ProblemBlock
        title="11. Longest Consecutive Subsequence"
        difficulty="Hard"
        description="Find the length of the longest consecutive subsequence in an unsorted array."
        solutions={{
          JavaScript: `// Longest Consecutive Subsequence

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

// Test cases
const arr1 = [100, 4, 200, 1, 3, 2];
const arr2 = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
console.log(longestConsecutiveSubsequence(arr1)); // 4 (1, 2, 3, 4)
console.log(longestConsecutiveSubsequence(arr2)); // 9 (0, 1, 2, 3, 4, 5, 6, 7, 8)
console.log(findLongestConsecutiveSubsequence(arr1)); 
// { sequence: [1, 2, 3, 4], length: 4, start: 1, end: 4 }`,
          Java: `import java.util.*;

public class LongestConsecutive {
    public static int longestConsecutiveSubsequence(int[] arr) {
        if (arr.length == 0) return 0;
        
        Set<Integer> numSet = new HashSet<>();
        for (int num : arr) {
            numSet.add(num);
        }
        
        int maxLength = 0;
        
        for (int num : numSet) {
            // Only start counting from the beginning of a sequence
            if (!numSet.contains(num - 1)) {
                int currentNum = num;
                int currentLength = 1;
                
                // Count consecutive numbers
                while (numSet.contains(currentNum + 1)) {
                    currentNum++;
                    currentLength++;
                }
                
                maxLength = Math.max(maxLength, currentLength);
            }
        }
        
        return maxLength;
    }
    
    // Find the actual longest consecutive subsequence
    public static List<Integer> findLongestConsecutiveSubsequence(int[] arr) {
        if (arr.length == 0) return null;
        
        Set<Integer> numSet = new HashSet<>();
        for (int num : arr) {
            numSet.add(num);
        }
        
        int maxLength = 0;
        List<Integer> longestSequence = null;
        
        for (int num : numSet) {
            if (!numSet.contains(num - 1)) {
                int currentNum = num;
                int currentLength = 1;
                List<Integer> sequence = new ArrayList<>();
                sequence.add(num);
                
                while (numSet.contains(currentNum + 1)) {
                    currentNum++;
                    currentLength++;
                    sequence.add(currentNum);
                }
                
                if (currentLength > maxLength) {
                    maxLength = currentLength;
                    longestSequence = sequence;
                }
            }
        }
        
        return longestSequence;
    }
    
    public static void main(String[] args) {
        int[] arr1 = {100, 4, 200, 1, 3, 2};
        int[] arr2 = {0, 3, 7, 2, 5, 8, 4, 6, 0, 1};
        System.out.println(longestConsecutiveSubsequence(arr1)); // 4
        System.out.println(longestConsecutiveSubsequence(arr2)); // 9
        System.out.println(findLongestConsecutiveSubsequence(arr1)); 
        // [1, 2, 3, 4]
    }
}`,
        }}
        explanation="Use Set to store all numbers. For each number, if (num-1) doesn't exist, it's start of sequence. Count consecutive numbers. Time: O(n), Space: O(n)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Find longest consecutive subsequence",
                "Subsequence doesn't need to be contiguous",
                "Elements must be consecutive integers",
                "Input: Array, Output: Length of longest consecutive sequence",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: ["consecutive", "subsequence", "hash set", "sequence"],
              details: [
                "Keywords: 'consecutive subsequence' → Hash set + sequence detection",
                "Pattern: Find sequence start → Count consecutive numbers",
                "This is a 'sequence detection' problem",
                "Similar to: Longest increasing subsequence, sequence problems",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Set: To store all numbers (O(n) space)",
                "Hash set: Fast O(1) lookup",
                "O(n) space",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Hash Set + Sequence Detection",
                "  - Add all numbers to set",
                "  - For each number:",
                "    - If (num - 1) not in set: it's sequence start",
                "    - Count consecutive numbers from start",
                "  - Track maximum length",
                "  - Time: O(n), Space: O(n)",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • No consecutive sequence: Return 1",
                "  • All consecutive: Return n",
                "  • Duplicate elements: Handle with set",
                "",
                "Optimization:",
                "  • Only check sequence starts: O(n) time",
                "  • O(n) space for set",
                "  • Key: Only start counting from sequence beginning",
                "",
                "Implementation:",
                "  1. Add all numbers to set",
                "  2. maxLength = 0",
                "  3. For each number in set:",
                "     - If (num - 1) not in set:",
                "       * Count consecutive numbers from num",
                "       * maxLength = max(maxLength, count)",
                "  4. Return maxLength",
              ],
            },
          ],
          pattern: "Hash Set + Sequence Detection",
          complexity: {
            time: "O(n) - Each element visited at most twice",
            space: "O(n) - Hash set storage",
          },
        }}
      />

      <ProblemBlock
        title="12. Count Distinct Elements In Every Window"
        difficulty="Medium"
        description="Count distinct elements in every window of size k in an array."
        solutions={{
          JavaScript: `// Count Distinct Elements In Every Window

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

// Find maximum distinct elements in any window
function maxDistinctInAnyWindow(arr, k) {
  const distinctCounts = countDistinctInEveryWindowOptimized(arr, k);
  return Math.max(...distinctCounts);
}

// Test cases
const arr = [1, 2, 1, 3, 4, 2, 3];
const k = 4;
console.log(countDistinctInEveryWindowOptimized(arr, k)); // [3, 4, 4, 3]
console.log(maxDistinctInAnyWindow(arr, k)); // 4`,
          Java: `import java.util.*;

public class CountDistinctInWindow {
    // Optimized solution using sliding window
    public static List<Integer> countDistinctInEveryWindowOptimized(int[] arr, int k) {
        int n = arr.length;
        List<Integer> result = new ArrayList<>();
        Map<Integer, Integer> windowMap = new HashMap<>();
        
        // Initialize first window
        for (int i = 0; i < k; i++) {
            windowMap.put(arr[i], windowMap.getOrDefault(arr[i], 0) + 1);
        }
        result.add(windowMap.size());
        
        // Slide the window
        for (int i = k; i < n; i++) {
            // Remove element going out of window
            int outgoingElement = arr[i - k];
            windowMap.put(outgoingElement, windowMap.get(outgoingElement) - 1);
            
            if (windowMap.get(outgoingElement) == 0) {
                windowMap.remove(outgoingElement);
            }
            
            // Add new element to window
            int incomingElement = arr[i];
            windowMap.put(incomingElement, windowMap.getOrDefault(incomingElement, 0) + 1);
            
            result.add(windowMap.size());
        }
        
        return result;
    }
    
    // Find maximum distinct elements in any window
    public static int maxDistinctInAnyWindow(int[] arr, int k) {
        List<Integer> distinctCounts = countDistinctInEveryWindowOptimized(arr, k);
        return Collections.max(distinctCounts);
    }
    
    public static void main(String[] args) {
        int[] arr = {1, 2, 1, 3, 4, 2, 3};
        int k = 4;
        System.out.println(countDistinctInEveryWindowOptimized(arr, k)); // [3, 4, 4, 3]
        System.out.println(maxDistinctInAnyWindow(arr, k)); // 4
    }
}`,
        }}
        explanation="Use sliding window technique with Map to track element frequencies. Remove outgoing element, add incoming element, track distinct count. Time: O(n), Space: O(k)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Count distinct elements in every window of size k",
                "Sliding window of size k",
                "Count distinct elements in each window",
                "Input: Array, window size k, Output: Array of distinct counts",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: ["sliding window", "distinct", "frequency", "hash map"],
              details: [
                "Keywords: 'sliding window', 'distinct' → Sliding window + hash map",
                "Pattern: Maintain window → Update frequency map",
                "This is a 'sliding window' problem",
                "Similar to: Window problems, frequency tracking",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Map: To track element frequencies in window",
                "O(k) space for frequency map",
                "Hash map: Fast O(1) updates",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Sliding Window + Hash Map",
                "  - Initialize window [0, k-1]",
                "  - Build frequency map for first window",
                "  - For each new window:",
                "    - Remove leftmost element (decrease frequency)",
                "    - Add rightmost element (increase frequency)",
                "    - Count distinct (map.size)",
                "  - Time: O(n), Space: O(k)",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • k > n: Return empty array",
                "  • k == 1: Each element is distinct",
                "  • All same elements: All windows have 1 distinct",
                "",
                "Optimization:",
                "  • Single pass: O(n) time",
                "  • O(k) space for frequency map",
                "  • Efficient window updates",
                "",
                "Implementation:",
                "  1. Build frequency map for first window",
                "  2. result = [map.size]",
                "  3. For i = k to n-1:",
                "     - Remove arr[i-k] from map",
                "     - Add arr[i] to map",
                "     - result.push(map.size)",
                "  4. Return result",
              ],
            },
          ],
          pattern: "Sliding Window + Hash Map",
          complexity: {
            time: "O(n) - Single pass through array",
            space: "O(k) - Frequency map for window",
          },
        }}
      />

      <ProblemBlock
        title="13. More than n/k Occurrences"
        difficulty="Medium"
        description="Find all elements that appear more than n/k times in an array."
        solutions={{
          JavaScript: `// More than n/k Occurrences

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

// Test cases
const arr1 = [3, 1, 2, 2, 1, 2, 3, 3];
const arr2 = [1, 1, 2, 3, 5, 5, 5, 5, 5, 5, 6];
console.log(findElementsMoreThanNByK(arr1, 4)); // [{ element: 2, count: 3 }, { element: 3, count: 3 }]
console.log(findMajorityElement(arr2)); // 5
console.log(findElementsMoreThanNByKOptimized(arr1, 4)); // [{ element: 2, count: 3 }, { element: 3, count: 3 }]`,
          Java: `import java.util.*;

public class MoreThanNByK {
    public static List<Map.Entry<Integer, Integer>> findElementsMoreThanNByK(int[] arr, int k) {
        int n = arr.length;
        int threshold = n / k;
        Map<Integer, Integer> frequencyMap = new HashMap<>();
        
        // Count frequencies
        for (int element : arr) {
            frequencyMap.put(element, frequencyMap.getOrDefault(element, 0) + 1);
        }
        
        // Find elements with frequency > threshold
        List<Map.Entry<Integer, Integer>> result = new ArrayList<>();
        for (Map.Entry<Integer, Integer> entry : frequencyMap.entrySet()) {
            if (entry.getValue() > threshold) {
                result.add(entry);
            }
        }
        
        return result;
    }
    
    // Boyer-Moore Majority Vote Algorithm (for k=2)
    public static Integer findMajorityElement(int[] arr) {
        Integer candidate = null;
        int count = 0;
        
        // Find candidate
        for (int num : arr) {
            if (count == 0) {
                candidate = num;
                count = 1;
            } else if (candidate == num) {
                count++;
            } else {
                count--;
            }
        }
        
        // Verify candidate
        count = 0;
        for (int num : arr) {
            if (num == candidate) {
                count++;
            }
        }
        
        return count > arr.length / 2 ? candidate : null;
    }
    
    // Generalized Boyer-Moore for k > 2
    public static List<Map.Entry<Integer, Integer>> findElementsMoreThanNByKOptimized(int[] arr, int k) {
        int n = arr.length;
        int threshold = n / k;
        Map<Integer, Integer> candidates = new HashMap<>();
        
        // First pass: find candidates
        for (int num : arr) {
            if (candidates.containsKey(num)) {
                candidates.put(num, candidates.get(num) + 1);
            } else if (candidates.size() < k - 1) {
                candidates.put(num, 1);
            } else {
                // Decrease count for all candidates
                Iterator<Map.Entry<Integer, Integer>> it = candidates.entrySet().iterator();
                while (it.hasNext()) {
                    Map.Entry<Integer, Integer> entry = it.next();
                    int newValue = entry.getValue() - 1;
                    if (newValue == 0) {
                        it.remove();
                    } else {
                        entry.setValue(newValue);
                    }
                }
            }
        }
        
        // Second pass: verify candidates
        List<Map.Entry<Integer, Integer>> result = new ArrayList<>();
        for (int candidate : candidates.keySet()) {
            int count = 0;
            for (int num : arr) {
                if (num == candidate) {
                    count++;
                }
            }
            
            if (count > threshold) {
                result.add(new AbstractMap.SimpleEntry<>(candidate, count));
            }
        }
        
        return result;
    }
    
    public static void main(String[] args) {
        int[] arr1 = {3, 1, 2, 2, 1, 2, 3, 3};
        int[] arr2 = {1, 1, 2, 3, 5, 5, 5, 5, 5, 5, 6};
        System.out.println(findElementsMoreThanNByK(arr1, 4)); 
        // [2=3, 3=3]
        System.out.println(findMajorityElement(arr2)); // 5
        System.out.println(findElementsMoreThanNByKOptimized(arr1, 4)); 
        // [2=3, 3=3]
    }
}`,
        }}
        explanation="Use Boyer-Moore majority vote algorithm for k=2, or generalized version for k>2. First pass finds candidates, second pass verifies. Time: O(nk), Space: O(k)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Find all elements appearing more than n/k times",
                "At most k-1 such elements can exist",
                "Need efficient solution (not O(n²))",
                "Input: Array, k, Output: Elements with frequency > n/k",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: [
                "more than n/k",
                "occurrences",
                "majority",
                "boyer-moore",
              ],
              details: [
                "Keywords: 'more than n/k', 'occurrences' → Boyer-Moore algorithm",
                "Pattern: At most k-1 candidates → Two-pass algorithm",
                "This is a 'majority element' problem",
                "Similar to: Majority element, frequency analysis",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Map: To store candidate frequencies (O(k) space)",
                "Frequency map: To verify candidates (O(n) space)",
                "O(k) space for candidates",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Boyer-Moore Majority Vote (Generalized)",
                "  - First pass: Find at most k-1 candidates",
                "    * Maintain k-1 candidates with counts",
                "    * Decrease all counts when new element",
                "  - Second pass: Verify candidates",
                "  - Time: O(nk), Space: O(k)",
                "",
                "Alternative: Count all frequencies - O(n) time, O(n) space",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • No elements > n/k: Return empty",
                "  • k = 2: Use standard Boyer-Moore",
                "  • All same elements: Return that element",
                "",
                "Optimization:",
                "  • Two-pass: O(nk) time",
                "  • O(k) space for candidates",
                "  • Key insight: At most k-1 candidates",
                "",
                "Implementation:",
                "  1. First pass: Find candidates",
                "     - Maintain map of at most k-1 candidates",
                "     - Decrease all when new element",
                "  2. Second pass: Verify candidates",
                "     - Count frequency of each candidate",
                "     - Return those with frequency > n/k",
              ],
            },
          ],
          pattern: "Boyer-Moore Majority Vote (Generalized)",
          complexity: {
            time: "O(nk) - Two passes through array",
            space: "O(k) - Candidate map",
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
