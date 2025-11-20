"use client";
import Link from "next/link";
import { useState } from "react";

export default function Strings() {
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
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Strings & Pattern Matching Mastery
          </h1>
          <p className="text-gray-400 mt-2">
            String Manipulation, Pattern Searching & Advanced String Algorithms
          </p>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-gray-800/50 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-2 overflow-x-auto">
            {[
              { id: "fundamentals", label: "📚 Fundamentals" },
              { id: "basic-problems", label: "🔤 Basic Problems" },
              { id: "pattern-searching", label: "🔍 Pattern Searching" },
              { id: "advanced-problems", label: "🚀 Advanced Problems" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 font-semibold whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? "text-cyan-400 border-b-2 border-cyan-400"
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
        {activeTab === "pattern-searching" && <PatternSearchingSection />}
        {activeTab === "advanced-problems" && <AdvancedProblemsSection />}
      </main>
    </div>
  );
}

// Fundamentals Section
function FundamentalsSection() {
  return (
    <div className="space-y-8">
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          String Fundamentals
        </h2>
        <p className="text-gray-300 text-lg mb-6">
          Understanding strings as sequences of characters and common string
          operations.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-cyan-900/20 border border-cyan-500/30 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-cyan-200 mb-3">
              Key Concepts:
            </h3>
            <ul className="space-y-2 text-cyan-100">
              <li>
                • <strong>Character Encoding:</strong> ASCII, Unicode
              </li>
              <li>
                • <strong>String Operations:</strong> Concatenation, comparison
              </li>
              <li>
                • <strong>Substring vs Subsequence:</strong> Different concepts
              </li>
              <li>
                • <strong>Pattern Matching:</strong> Finding patterns in text
              </li>
            </ul>
          </div>

          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-blue-200 mb-3">
              Common Operations:
            </h3>
            <ul className="space-y-2 text-blue-100">
              <li>
                • <strong>Searching:</strong> Find patterns, substrings
              </li>
              <li>
                • <strong>Manipulation:</strong> Reverse, rotate, transform
              </li>
              <li>
                • <strong>Analysis:</strong> Palindrome, anagram checks
              </li>
              <li>
                • <strong>Optimization:</strong> Efficient algorithms
              </li>
            </ul>
          </div>
        </div>

        <TheoryBlock title="String Operations in JavaScript">
          <CodeBlock
            code={{
              JavaScript: `// String Operations in JavaScript

// Basic string operations
const str = "Hello World";

// Length
console.log(str.length); // 11

// Character access
console.log(str[0]); // 'H'
console.log(str.charAt(0)); // 'H'

// Substring operations
console.log(str.substring(0, 5)); // "Hello"
console.log(str.slice(0, 5)); // "Hello"

// String methods
console.log(str.toLowerCase()); // "hello world"
console.log(str.toUpperCase()); // "HELLO WORLD"
console.log(str.trim()); // Remove whitespace

// String manipulation
const reversed = str.split('').reverse().join('');
console.log(reversed); // "dlroW olleH"

// Pattern searching
console.log(str.includes("World")); // true
console.log(str.indexOf("World")); // 6
console.log(str.startsWith("Hello")); // true
console.log(str.endsWith("World")); // true

// Regular expressions
const regex = /\\d+/g; // Find all numbers
const text = "abc123def456";
console.log(text.match(regex)); // ["123", "456"]

// String comparison
console.log("apple" < "banana"); // true (lexicographic)
console.log("A" < "a"); // true (ASCII comparison)`,
              Java: `// String Operations in Java

public class StringOperations {
    public static void main(String[] args) {
        // Basic string operations
        String str = "Hello World";
        
        // Length
        System.out.println(str.length()); // 11
        
        // Character access
        System.out.println(str.charAt(0)); // 'H'
        
        // Substring operations
        System.out.println(str.substring(0, 5)); // "Hello"
        
        // String methods
        System.out.println(str.toLowerCase()); // "hello world"
        System.out.println(str.toUpperCase()); // "HELLO WORLD"
        System.out.println(str.trim()); // Remove whitespace
        
        // String manipulation
        StringBuilder reversed = new StringBuilder(str);
        reversed.reverse();
        System.out.println(reversed.toString()); // "dlroW olleH"
        
        // Pattern searching
        System.out.println(str.contains("World")); // true
        System.out.println(str.indexOf("World")); // 6
        System.out.println(str.startsWith("Hello")); // true
        System.out.println(str.endsWith("World")); // true
        
        // Regular expressions
        String text = "abc123def456";
        java.util.regex.Pattern pattern = java.util.regex.Pattern.compile("\\\\d+");
        java.util.regex.Matcher matcher = pattern.matcher(text);
        while (matcher.find()) {
            System.out.println(matcher.group()); // "123", "456"
        }
        
        // String comparison
        System.out.println("apple".compareTo("banana") < 0); // true (lexicographic)
        System.out.println("A".compareTo("a") < 0); // true (ASCII comparison)
    }
}`,
            }}
          />
        </TheoryBlock>
      </div>
    </div>
  );
}

// Basic Problems Section (First Image)
function BasicProblemsSection() {
  return (
    <div className="space-y-8">
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Basic String Problems
        </h2>
        <p className="text-gray-300 mb-6">
          Fundamental string problems involving palindrome checks, subsequences,
          and character analysis.
        </p>
      </div>

      <ProblemBlock
        title="1. Palindrome Check"
        difficulty="Easy"
        description="Check if a string is a palindrome (reads the same forwards and backwards)."
        solutions={{
          JavaScript: `// Palindrome Check

function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
  let left = 0;
  let right = cleaned.length - 1;
  
  while (left < right) {
    if (cleaned[left] !== cleaned[right]) {
      return false;
    }
    left++;
    right--;
  }
  
  return true;
}

// Find longest palindromic substring
function longestPalindrome(str) {
  let maxLength = 1;
  let start = 0;
  
  for (let i = 0; i < str.length; i++) {
    // Check for odd length palindromes
    let left = i, right = i;
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      if (right - left + 1 > maxLength) {
        start = left;
        maxLength = right - left + 1;
      }
      left--;
      right++;
    }
    
    // Check for even length palindromes
    left = i; right = i + 1;
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      if (right - left + 1 > maxLength) {
        start = left;
        maxLength = right - left + 1;
      }
      left--;
      right++;
    }
  }
  
  return str.substring(start, start + maxLength);
}

// Test cases
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("A man a plan a canal Panama")); // true
console.log(isPalindrome("hello")); // false
console.log(longestPalindrome("babad")); // "bab" or "aba"`,
          Java: `public class Palindrome {
    public static boolean isPalindrome(String str) {
        // Remove non-alphanumeric characters and convert to lowercase
        String cleaned = str.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();
        
        int left = 0;
        int right = cleaned.length() - 1;
        
        while (left < right) {
            if (cleaned.charAt(left) != cleaned.charAt(right)) {
                return false;
            }
            left++;
            right--;
        }
        
        return true;
    }
    
    // Find longest palindromic substring
    public static String longestPalindrome(String str) {
        int maxLength = 1;
        int start = 0;
        
        for (int i = 0; i < str.length(); i++) {
            // Check for odd length palindromes
            int left = i, right = i;
            while (left >= 0 && right < str.length() && 
                   str.charAt(left) == str.charAt(right)) {
                if (right - left + 1 > maxLength) {
                    start = left;
                    maxLength = right - left + 1;
                }
                left--;
                right++;
            }
            
            // Check for even length palindromes
            left = i;
            right = i + 1;
            while (left >= 0 && right < str.length() && 
                   str.charAt(left) == str.charAt(right)) {
                if (right - left + 1 > maxLength) {
                    start = left;
                    maxLength = right - left + 1;
                }
                left--;
                right++;
            }
        }
        
        return str.substring(start, start + maxLength);
    }
    
    public static void main(String[] args) {
        System.out.println(isPalindrome("racecar")); // true
        System.out.println(isPalindrome("A man a plan a canal Panama")); // true
        System.out.println(isPalindrome("hello")); // false
        System.out.println(longestPalindrome("babad")); // "bab" or "aba"
    }
}`,
        }}
        explanation="Use two pointers from both ends, skipping non-alphanumeric characters. Time: O(n), Space: O(1)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Check if string reads same forwards and backwards",
                "Ignore case and non-alphanumeric characters?",
                "Single character is palindrome",
                "Input: String, Output: Boolean",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: ["palindrome", "reverse", "two pointers", "symmetric"],
              details: [
                "Keywords: 'palindrome', 'same forwards backwards' → Two pointers",
                "Pattern: Compare characters from both ends",
                "This is a 'two pointers' problem",
                "Similar to: Valid palindrome, longest palindrome",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "String: Input is already a string",
                "Two pointers: left and right",
                "O(1) space if in-place",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Two Pointers from Ends",
                "  - Clean string (remove non-alphanumeric, lowercase)",
                "  - left = 0, right = n-1",
                "  - While left < right:",
                "    - If str[left] != str[right]: return false",
                "    - left++, right--",
                "  - Return true",
                "  - Time: O(n), Space: O(1)",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • Empty string: Return true",
                "  • Single character: Return true",
                "  • All same characters: Return true",
                "",
                "Optimization:",
                "  • Single pass: O(n) time",
                "  • O(1) space if in-place",
                "  • Skip non-alphanumeric characters",
                "",
                "Implementation:",
                "  1. Clean string (optional)",
                "  2. left = 0, right = n-1",
                "  3. While left < right:",
                "     - If str[left] != str[right]: return false",
                "     - left++, right--",
                "  4. Return true",
              ],
            },
          ],
          pattern: "Two Pointers (Opposite Ends)",
          complexity: {
            time: "O(n) - Single pass through string",
            space: "O(1) - Only two pointers",
          },
        }}
      />

      <ProblemBlock
        title="2. Check if a String is Subsequence of Other"
        difficulty="Easy"
        description="Check if string s is a subsequence of string t (characters in order but not necessarily consecutive)."
        solutions={{
          JavaScript: `// Check if String is Subsequence of Other

function isSubsequence(s, t) {
  let sIndex = 0;
  let tIndex = 0;
  
  while (sIndex < s.length && tIndex < t.length) {
    if (s[sIndex] === t[tIndex]) {
      sIndex++;
    }
    tIndex++;
  }
  
  return sIndex === s.length;
}

// Find longest common subsequence
function longestCommonSubsequence(text1, text2) {
  const m = text1.length;
  const n = text2.length;
  const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));
  
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  
  return dp[m][n];
}

// Test cases
console.log(isSubsequence("ace", "abcde")); // true
console.log(isSubsequence("axc", "ahbgdc")); // false
console.log(longestCommonSubsequence("abcde", "ace")); // 3`,
          Java: `public class Subsequence {
    public static boolean isSubsequence(String s, String t) {
        int sIndex = 0;
        int tIndex = 0;
        
        while (sIndex < s.length() && tIndex < t.length()) {
            if (s.charAt(sIndex) == t.charAt(tIndex)) {
                sIndex++;
            }
            tIndex++;
        }
        
        return sIndex == s.length();
    }
    
    // Find longest common subsequence
    public static int longestCommonSubsequence(String text1, String text2) {
        int m = text1.length();
        int n = text2.length();
        int[][] dp = new int[m + 1][n + 1];
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (text1.charAt(i - 1) == text2.charAt(j - 1)) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                } else {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }
        
        return dp[m][n];
    }
    
    public static void main(String[] args) {
        System.out.println(isSubsequence("ace", "abcde")); // true
        System.out.println(isSubsequence("axc", "ahbgdc")); // false
        System.out.println(longestCommonSubsequence("abcde", "ace")); // 3
    }
}`,
        }}
        explanation="Use two pointers, advance both when characters match, only advance target pointer otherwise. Time: O(n), Space: O(1)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Check if string s is subsequence of string t",
                "Subsequence: characters in order, not necessarily consecutive",
                "All characters of s must appear in t in order",
                "Input: Two strings s and t, Output: Boolean",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: ["subsequence", "order", "two pointers", "greedy"],
              details: [
                "Keywords: 'subsequence', 'in order' → Two pointers",
                "Pattern: Match characters in order → Greedy approach",
                "This is a 'two pointers' problem",
                "Similar to: Longest common subsequence, subsequence matching",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Two pointers: sIndex and tIndex",
                "O(1) space",
                "No additional data structures needed",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Two Pointers Greedy",
                "  - sIndex = 0, tIndex = 0",
                "  - While sIndex < s.length and tIndex < t.length:",
                "    - If s[sIndex] == t[tIndex]: sIndex++",
                "    - tIndex++",
                "  - Return sIndex == s.length",
                "  - Time: O(n), Space: O(1)",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • s is empty: Return true",
                "  • t is empty: Return false",
                "  • s longer than t: Return false",
                "",
                "Optimization:",
                "  • Single pass: O(n) time",
                "  • O(1) space",
                "  • Greedy: Match first occurrence",
                "",
                "Implementation:",
                "  1. sIndex = 0, tIndex = 0",
                "  2. While sIndex < s.length and tIndex < t.length:",
                "     - If s[sIndex] == t[tIndex]: sIndex++",
                "     - tIndex++",
                "  3. Return sIndex == s.length",
              ],
            },
          ],
          pattern: "Two Pointers (Greedy Matching)",
          complexity: {
            time: "O(n) - Single pass through both strings",
            space: "O(1) - Only two pointers",
          },
        }}
      />

      <ProblemBlock
        title="3. Check for Anagram"
        difficulty="Easy"
        description="Check if two strings are anagrams (contain same characters with same frequencies)."
        solutions={{
          JavaScript: `// Check for Anagram

function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  
  const charCount = {};
  
  // Count characters in first string
  for (const char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  
  // Decrease count for characters in second string
  for (const char of t) {
    if (!charCount[char]) return false;
    charCount[char]--;
  }
  
  return true;
}

// Group anagrams
function groupAnagrams(strs) {
  const groups = new Map();
  
  for (const str of strs) {
    const key = str.split('').sort().join('');
    if (!groups.has(key)) {
      groups.set(key, []);
    }
    groups.get(key).push(str);
  }
  
  return Array.from(groups.values());
}

// Test cases
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("rat", "car")); // false
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"])); 
// [["eat","tea","ate"],["tan","nat"],["bat"]]`,
          Java: `import java.util.*;

public class Anagram {
    public static boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) return false;
        
        Map<Character, Integer> charCount = new HashMap<>();
        
        // Count characters in first string
        for (char c : s.toCharArray()) {
            charCount.put(c, charCount.getOrDefault(c, 0) + 1);
        }
        
        // Decrease count for characters in second string
        for (char c : t.toCharArray()) {
            if (!charCount.containsKey(c) || charCount.get(c) == 0) {
                return false;
            }
            charCount.put(c, charCount.get(c) - 1);
        }
        
        return true;
    }
    
    // Group anagrams
    public static List<List<String>> groupAnagrams(String[] strs) {
        Map<String, List<String>> groups = new HashMap<>();
        
        for (String str : strs) {
            char[] chars = str.toCharArray();
            Arrays.sort(chars);
            String key = new String(chars);
            
            groups.putIfAbsent(key, new ArrayList<>());
            groups.get(key).add(str);
        }
        
        return new ArrayList<>(groups.values());
    }
    
    public static void main(String[] args) {
        System.out.println(isAnagram("listen", "silent")); // true
        System.out.println(isAnagram("rat", "car")); // false
        System.out.println(groupAnagrams(new String[]{"eat","tea","tan","ate","nat","bat"})); 
        // [[eat, tea, ate], [tan, nat], [bat]]
    }
}`,
        }}
        explanation="Count character frequencies in both strings. They're anagrams if all counts match. Time: O(n), Space: O(1) for fixed alphabet size."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Check if two strings are anagrams",
                "Anagram: same characters with same frequencies",
                "Order doesn't matter",
                "Input: Two strings, Output: Boolean",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: ["anagram", "frequency", "count", "hash map"],
              details: [
                "Keywords: 'anagram', 'same characters' → Frequency counting",
                "Pattern: Same character frequencies → Use hash map",
                "This is a 'frequency counting' problem",
                "Similar to: Character frequency, string comparison",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Map/Array: To count character frequencies",
                "O(1) space for fixed alphabet (26 or 256)",
                "Hash map: Fast O(1) updates",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Frequency Counting",
                "  - If lengths differ: return false",
                "  - Count characters in first string",
                "  - Decrease count for characters in second string",
                "  - If any count != 0: return false",
                "  - Time: O(n), Space: O(1)",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • Different lengths: Return false",
                "  • Empty strings: Return true",
                "  • Same strings: Return true",
                "",
                "Optimization:",
                "  • Single pass: O(n) time",
                "  • O(1) space for fixed alphabet",
                "  • Early termination if lengths differ",
                "",
                "Implementation:",
                "  1. If s.length != t.length: return false",
                "  2. Count characters in s",
                "  3. For each char in t:",
                "     - Decrease count",
                "     - If count < 0: return false",
                "  4. Return true",
              ],
            },
          ],
          pattern: "Hash Map (Frequency Counting)",
          complexity: {
            time: "O(n) - Single pass through both strings",
            space: "O(1) - Fixed alphabet size",
          },
        }}
      />

      <ProblemBlock
        title="4. Leftmost Repeating Character"
        difficulty="Easy"
        description="Find the first character that repeats in a string."
        solutions={{
          JavaScript: `// Leftmost Repeating Character

function leftmostRepeatingChar(str) {
  const charCount = {};
  
  // Count all characters
  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  
  // Find first character with count > 1
  for (const char of str) {
    if (charCount[char] > 1) {
      return char;
    }
  }
  
  return null; // No repeating character
}

// Find index of leftmost repeating character
function leftmostRepeatingCharIndex(str) {
  const charCount = {};
  
  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  
  for (let i = 0; i < str.length; i++) {
    if (charCount[str[i]] > 1) {
      return i;
    }
  }
  
  return -1;
}

// Test cases
console.log(leftmostRepeatingChar("geeksforgeeks")); // 'g'
console.log(leftmostRepeatingCharIndex("geeksforgeeks")); // 0`,
          Java: `import java.util.*;

public class LeftmostRepeating {
    public static Character leftmostRepeatingChar(String str) {
        Map<Character, Integer> charCount = new HashMap<>();
        
        // Count all characters
        for (char c : str.toCharArray()) {
            charCount.put(c, charCount.getOrDefault(c, 0) + 1);
        }
        
        // Find first character with count > 1
        for (char c : str.toCharArray()) {
            if (charCount.get(c) > 1) {
                return c;
            }
        }
        
        return null; // No repeating character
    }
    
    // Find index of leftmost repeating character
    public static int leftmostRepeatingCharIndex(String str) {
        Map<Character, Integer> charCount = new HashMap<>();
        
        for (char c : str.toCharArray()) {
            charCount.put(c, charCount.getOrDefault(c, 0) + 1);
        }
        
        for (int i = 0; i < str.length(); i++) {
            if (charCount.get(str.charAt(i)) > 1) {
                return i;
            }
        }
        
        return -1;
    }
    
    public static void main(String[] args) {
        System.out.println(leftmostRepeatingChar("geeksforgeeks")); // 'g'
        System.out.println(leftmostRepeatingCharIndex("geeksforgeeks")); // 0
    }
}`,
        }}
        explanation="Count character frequencies, then find first character with count > 1. Time: O(n), Space: O(1) for fixed alphabet."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Find first character that repeats in string",
                "Leftmost = first occurrence from left",
                "Character must appear at least twice",
                "Input: String, Output: Character or index",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: [
                "repeating",
                "leftmost",
                "first",
                "frequency",
                "hash map",
              ],
              details: [
                "Keywords: 'repeating', 'leftmost' → Frequency counting + left-to-right scan",
                "Pattern: Count frequencies → Find first with count > 1",
                "This is a 'frequency counting' problem",
                "Similar to: Non-repeating character, character frequency",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Map/Array: To count character frequencies",
                "O(1) space for fixed alphabet",
                "Hash map: Fast O(1) updates",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Frequency Counting + Linear Scan",
                "  - Count all character frequencies",
                "  - Scan string left to right",
                "  - Return first character with count > 1",
                "  - Time: O(n), Space: O(1)",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • No repeating character: Return null",
                "  • All characters repeat: Return first character",
                "  • Single character: Return that character",
                "",
                "Optimization:",
                "  • Two passes: O(n) time",
                "  • O(1) space for fixed alphabet",
                "  • Simple frequency counting",
                "",
                "Implementation:",
                "  1. Count all character frequencies",
                "  2. For each character in string (left to right):",
                "     - If count[char] > 1: return char",
                "  3. Return null",
              ],
            },
          ],
          pattern: "Hash Map (Frequency Counting)",
          complexity: {
            time: "O(n) - Two passes through string",
            space: "O(1) - Fixed alphabet size",
          },
        }}
      />

      <ProblemBlock
        title="5. Leftmost Non-repeating Element"
        difficulty="Easy"
        description="Find the first character that doesn't repeat in a string."
        solutions={{
          JavaScript: `// Leftmost Non-repeating Element

function leftmostNonRepeatingChar(str) {
  const charCount = {};
  
  // Count all characters
  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  
  // Find first character with count === 1
  for (const char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }
  
  return null; // No non-repeating character
}

// Find index of leftmost non-repeating character
function leftmostNonRepeatingCharIndex(str) {
  const charCount = {};
  
  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  
  for (let i = 0; i < str.length; i++) {
    if (charCount[str[i]] === 1) {
      return i;
    }
  }
  
  return -1;
}

// Test cases
console.log(leftmostNonRepeatingChar("geeksforgeeks")); // 'f'
console.log(leftmostNonRepeatingCharIndex("geeksforgeeks")); // 5`,
          Java: `import java.util.*;

public class LeftmostNonRepeating {
    public static Character leftmostNonRepeatingChar(String str) {
        Map<Character, Integer> charCount = new HashMap<>();
        
        // Count all characters
        for (char c : str.toCharArray()) {
            charCount.put(c, charCount.getOrDefault(c, 0) + 1);
        }
        
        // Find first character with count === 1
        for (char c : str.toCharArray()) {
            if (charCount.get(c) == 1) {
                return c;
            }
        }
        
        return null; // No non-repeating character
    }
    
    // Find index of leftmost non-repeating character
    public static int leftmostNonRepeatingCharIndex(String str) {
        Map<Character, Integer> charCount = new HashMap<>();
        
        for (char c : str.toCharArray()) {
            charCount.put(c, charCount.getOrDefault(c, 0) + 1);
        }
        
        for (int i = 0; i < str.length(); i++) {
            if (charCount.get(str.charAt(i)) == 1) {
                return i;
            }
        }
        
        return -1;
    }
    
    public static void main(String[] args) {
        System.out.println(leftmostNonRepeatingChar("geeksforgeeks")); // 'f'
        System.out.println(leftmostNonRepeatingCharIndex("geeksforgeeks")); // 5
    }
}`,
        }}
        explanation="Count character frequencies, then find first character with count === 1. Time: O(n), Space: O(1) for fixed alphabet."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Find first character that doesn't repeat in string",
                "Leftmost = first occurrence from left",
                "Character must appear exactly once",
                "Input: String, Output: Character or index",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: [
                "non-repeating",
                "leftmost",
                "unique",
                "frequency",
                "hash map",
              ],
              details: [
                "Keywords: 'non-repeating', 'leftmost' → Frequency counting + left-to-right scan",
                "Pattern: Count frequencies → Find first with count == 1",
                "This is a 'frequency counting' problem",
                "Similar to: Repeating character, character frequency",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Map/Array: To count character frequencies",
                "O(1) space for fixed alphabet",
                "Hash map: Fast O(1) updates",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Frequency Counting + Linear Scan",
                "  - Count all character frequencies",
                "  - Scan string left to right",
                "  - Return first character with count == 1",
                "  - Time: O(n), Space: O(1)",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • No non-repeating character: Return null",
                "  • All characters unique: Return first character",
                "  • Single character: Return that character",
                "",
                "Optimization:",
                "  • Two passes: O(n) time",
                "  • O(1) space for fixed alphabet",
                "  • Simple frequency counting",
                "",
                "Implementation:",
                "  1. Count all character frequencies",
                "  2. For each character in string (left to right):",
                "     - If count[char] == 1: return char",
                "  3. Return null",
              ],
            },
          ],
          pattern: "Hash Map (Frequency Counting)",
          complexity: {
            time: "O(n) - Two passes through string",
            space: "O(1) - Fixed alphabet size",
          },
        }}
      />

      <ProblemBlock
        title="6. Reverse Words in a String"
        difficulty="Medium"
        description="Reverse the order of words in a string while preserving whitespace."
        solutions={{
          JavaScript: `// Reverse Words in a String

function reverseWords(str) {
  // Split by whitespace, reverse array, join back
  return str.trim().split(/\\s+/).reverse().join(' ');
}

// Manual approach without built-in methods
function reverseWordsManual(str) {
  const words = [];
  let currentWord = '';
  
  // Extract words
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      if (currentWord.length > 0) {
        words.push(currentWord);
        currentWord = '';
      }
    } else {
      currentWord += str[i];
    }
  }
  
  if (currentWord.length > 0) {
    words.push(currentWord);
  }
  
  // Reverse words
  let result = '';
  for (let i = words.length - 1; i >= 0; i--) {
    result += words[i];
    if (i > 0) result += ' ';
  }
  
  return result;
}

// Test cases
console.log(reverseWords("the sky is blue")); // "blue is sky the"
console.log(reverseWordsManual("  hello world  ")); // "world hello"`,
          Java: `import java.util.*;

public class ReverseWords {
    public static String reverseWords(String str) {
        // Split by whitespace, reverse array, join back
        String[] words = str.trim().split("\\\\s+");
        Collections.reverse(Arrays.asList(words));
        return String.join(" ", words);
    }
    
    // Manual approach
    public static String reverseWordsManual(String str) {
        List<String> words = new ArrayList<>();
        StringBuilder currentWord = new StringBuilder();
        
        // Extract words
        for (int i = 0; i < str.length(); i++) {
            if (str.charAt(i) == ' ') {
                if (currentWord.length() > 0) {
                    words.add(currentWord.toString());
                    currentWord.setLength(0);
                }
            } else {
                currentWord.append(str.charAt(i));
            }
        }
        
        if (currentWord.length() > 0) {
            words.add(currentWord.toString());
        }
        
        // Reverse words
        Collections.reverse(words);
        return String.join(" ", words);
    }
    
    public static void main(String[] args) {
        System.out.println(reverseWords("the sky is blue")); // "blue is sky the"
        System.out.println(reverseWordsManual("  hello world  ")); // "world hello"
    }
}`,
        }}
        explanation="Split string into words, reverse array, join back. Time: O(n), Space: O(n). For in-place: reverse entire string, then reverse each word."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Reverse order of words in string",
                "Preserve whitespace between words",
                "Words are separated by spaces",
                "Input: String, Output: Reversed words string",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: [
                "reverse",
                "words",
                "split",
                "join",
                "string manipulation",
              ],
              details: [
                "Keywords: 'reverse words' → Split, reverse, join",
                "Pattern: Split into words → Reverse array → Join",
                "This is a 'string manipulation' problem",
                "Similar to: Reverse string, word problems",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Array: To store words after splitting",
                "O(n) space for word array",
                "String: For result",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Split + Reverse + Join",
                "  - Split string into words (by whitespace)",
                "  - Reverse word array",
                "  - Join words with space",
                "  - Time: O(n), Space: O(n)",
                "",
                "Alternative: In-place reverse (reverse string, then reverse each word)",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • Multiple spaces: Handle appropriately",
                "  • Leading/trailing spaces: Trim",
                "  • Single word: Return as is",
                "",
                "Optimization:",
                "  • Simple approach: O(n) time",
                "  • O(n) space for word array",
                "  • In-place possible but more complex",
                "",
                "Implementation:",
                "  1. Trim string",
                "  2. Split by whitespace (regex: /\\s+/)",
                "  3. Reverse word array",
                "  4. Join with space",
                "  5. Return result",
              ],
            },
          ],
          pattern: "String Manipulation (Split + Reverse)",
          complexity: {
            time: "O(n) - Single pass through string",
            space: "O(n) - Word array storage",
          },
        }}
      />
    </div>
  );
}

// Pattern Searching Section
function PatternSearchingSection() {
  return (
    <div className="space-y-8">
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Pattern Searching Algorithms
        </h2>
        <p className="text-gray-300 mb-6">
          Advanced pattern matching algorithms including Naive, Improved Naive,
          Rabin-Karp, and KMP.
        </p>
      </div>

      <ProblemBlock
        title="7. Overview of Pattern Searching"
        difficulty="Easy"
        description="Introduction to pattern searching algorithms and their complexities."
        solutions={{
          JavaScript: `// Overview of Pattern Searching Algorithms

// Pattern searching is the problem of finding all occurrences of a pattern
// in a text string. Here are the main algorithms:

/*
1. Naive Algorithm
   - Time: O(n*m) where n=text length, m=pattern length
   - Space: O(1)
   - Simple but inefficient for large inputs

2. Improved Naive Algorithm (for distinct characters)
   - Time: O(n) when pattern has all distinct characters
   - Space: O(1)
   - Optimized version of naive approach

3. Rabin-Karp Algorithm
   - Time: O(n+m) average, O(n*m) worst case
   - Space: O(1)
   - Uses rolling hash technique

4. KMP (Knuth-Morris-Pratt) Algorithm
   - Time: O(n+m)
   - Space: O(m)
   - Uses preprocessing to avoid unnecessary comparisons

5. Z Algorithm
   - Time: O(n+m)
   - Space: O(n+m)
   - Uses Z-array for pattern matching
*/

// Pattern searching utilities
function calculateHash(str, base = 256, mod = 1000000007) {
  let hash = 0;
  for (const char of str) {
    hash = (hash * base + char.charCodeAt(0)) % mod;
  }
  return hash;
}

// Test different algorithms
function testPatternSearching() {
  const text = "ABABDABACDABABCABAB";
  const pattern = "ABABCABAB";
  
  console.log("Text:", text);
  console.log("Pattern:", pattern);
  console.log("\\nAlgorithm Comparison:");
  
  return { text, pattern };
}

// Usage
testPatternSearching();`,
          Java: `// Overview of Pattern Searching Algorithms

public class PatternSearchingOverview {
    /*
     * Pattern searching is the problem of finding all occurrences of a pattern
     * in a text string. Here are the main algorithms:
     *
     * 1. Naive Algorithm
     *    - Time: O(n*m) where n=text length, m=pattern length
     *    - Space: O(1)
     *    - Simple but inefficient for large inputs
     *
     * 2. Improved Naive Algorithm (for distinct characters)
     *    - Time: O(n) when pattern has all distinct characters
     *    - Space: O(1)
     *    - Optimized version of naive approach
     *
     * 3. Rabin-Karp Algorithm
     *    - Time: O(n+m) average, O(n*m) worst case
     *    - Space: O(1)
     *    - Uses rolling hash technique
     *
     * 4. KMP (Knuth-Morris-Pratt) Algorithm
     *    - Time: O(n+m)
     *    - Space: O(m)
     *    - Uses preprocessing to avoid unnecessary comparisons
     *
     * 5. Z Algorithm
     *    - Time: O(n+m)
     *    - Space: O(n+m)
     *    - Uses Z-array for pattern matching
     */
    
    // Pattern searching utilities
    public static long calculateHash(String str, int base, long mod) {
        long hash = 0;
        for (char c : str.toCharArray()) {
            hash = (hash * base + c) % mod;
        }
        return hash;
    }
    
    public static void main(String[] args) {
        String text = "ABABDABACDABABCABAB";
        String pattern = "ABABCABAB";
        
        System.out.println("Text: " + text);
        System.out.println("Pattern: " + pattern);
        System.out.println("\\nAlgorithm Comparison:");
    }
}`,
        }}
        explanation="Pattern searching involves finding all occurrences of a pattern in text. Different algorithms offer various time/space trade-offs."
      />

      <ProblemBlock
        title="8. Naive Pattern Searching"
        difficulty="Easy"
        description="Simple pattern searching algorithm that checks every position."
        solutions={{
          JavaScript: `// Naive Pattern Searching

function naiveSearch(text, pattern) {
  const n = text.length;
  const m = pattern.length;
  const results = [];
  
  // Check every possible starting position
  for (let i = 0; i <= n - m; i++) {
    let j = 0;
    
    // Check if pattern matches starting at position i
    while (j < m && text[i + j] === pattern[j]) {
      j++;
    }
    
    // If entire pattern matched
    if (j === m) {
      results.push(i);
    }
  }
  
  return results;
}

// Optimized naive search for patterns with distinct characters
function improvedNaiveSearch(text, pattern) {
  const n = text.length;
  const m = pattern.length;
  const results = [];
  
  // Check if pattern has all distinct characters
  const hasDistinctChars = new Set(pattern).size === pattern.length;
  
  if (!hasDistinctChars) {
    return naiveSearch(text, pattern);
  }
  
  let i = 0;
  while (i <= n - m) {
    let j = 0;
    
    while (j < m && text[i + j] === pattern[j]) {
      j++;
    }
    
    if (j === m) {
      results.push(i);
      i += j; // Skip j characters
    } else {
      i += Math.max(1, j);
    }
  }
  
  return results;
}

// Test cases
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
console.log(naiveSearch(text, pattern)); // [10]
console.log(improvedNaiveSearch("ABCDEFGH", "BCD")); // [1]`,
          Java: `public class NaiveSearch {
    public static List<Integer> naiveSearch(String text, String pattern) {
        int n = text.length();
        int m = pattern.length();
        List<Integer> results = new ArrayList<>();
        
        // Check every possible starting position
        for (int i = 0; i <= n - m; i++) {
            int j = 0;
            
            // Check if pattern matches starting at position i
            while (j < m && text.charAt(i + j) == pattern.charAt(j)) {
                j++;
            }
            
            // If entire pattern matched
            if (j == m) {
                results.add(i);
            }
        }
        
        return results;
    }
    
    // Optimized naive search for patterns with distinct characters
    public static List<Integer> improvedNaiveSearch(String text, String pattern) {
        int n = text.length();
        int m = pattern.length();
        List<Integer> results = new ArrayList<>();
        
        // Check if pattern has all distinct characters
        Set<Character> charSet = new HashSet<>();
        for (char c : pattern.toCharArray()) {
            charSet.add(c);
        }
        boolean hasDistinctChars = charSet.size() == pattern.length();
        
        if (!hasDistinctChars) {
            return naiveSearch(text, pattern);
        }
        
        int i = 0;
        while (i <= n - m) {
            int j = 0;
            
            while (j < m && text.charAt(i + j) == pattern.charAt(j)) {
                j++;
            }
            
            if (j == m) {
                results.add(i);
                i += j; // Skip j characters
            } else {
                i += Math.max(1, j);
            }
        }
        
        return results;
    }
    
    public static void main(String[] args) {
        String text = "ABABDABACDABABCABAB";
        String pattern = "ABABCABAB";
        System.out.println(naiveSearch(text, pattern)); // [10]
        System.out.println(improvedNaiveSearch("ABCDEFGH", "BCD")); // [1]
    }
}`,
        }}
        explanation="Check every possible starting position in text. For each position, compare characters until mismatch or complete match. Time: O(n*m), Space: O(1)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Find all occurrences of pattern in text",
                "Pattern is substring to search for",
                "Return all starting indices",
                "Input: Text string, pattern string, Output: Array of indices",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: [
                "pattern",
                "search",
                "substring",
                "naive",
                "brute force",
              ],
              details: [
                "Keywords: 'pattern search', 'find occurrences' → Sliding window",
                "Pattern: Check every possible starting position",
                "This is a 'pattern matching' problem",
                "Similar to: String search, substring search",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "String: Input is already strings",
                "Array: To store result indices",
                "O(1) space if just counting",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Naive Pattern Search",
                "  - For i = 0 to n-m:",
                "    - Compare pattern with text[i..i+m-1]",
                "    - If match: add i to results",
                "  - Time: O(n*m), Space: O(1)",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • Pattern longer than text: Return empty",
                "  • Pattern empty: Return all indices",
                "  • No match: Return empty array",
                "",
                "Optimization:",
                "  • Simple but O(n*m) time",
                "  • O(1) space",
                "  • Better algorithms: KMP, Rabin-Karp",
                "",
                "Implementation:",
                "  1. For i = 0 to n-m:",
                "     - j = 0",
                "     - While j < m and text[i+j] == pattern[j]: j++",
                "     - If j == m: add i to results",
                "  2. Return results",
              ],
            },
          ],
          pattern: "Sliding Window (Naive Pattern Search)",
          complexity: {
            time: "O(n*m) - Check each position",
            space: "O(1) - Only variables",
          },
        }}
      />
    </div>
  );
}

// Advanced Problems Section (Second Image)
function AdvancedProblemsSection() {
  return (
    <div className="space-y-8">
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Advanced String Problems
        </h2>
        <p className="text-gray-300 mb-6">
          Complex string algorithms including advanced pattern matching, string
          rotations, and optimization problems.
        </p>
      </div>

      <ProblemBlock
        title="9. Improved Naive Pattern Searching for Distinct Characters"
        difficulty="Easy"
        description="Optimized naive search when pattern has all distinct characters."
        solutions={{
          JavaScript: `// Improved Naive Pattern Searching for Distinct Characters

function improvedNaiveSearchDistinct(text, pattern) {
  const n = text.length;
  const m = pattern.length;
  const results = [];
  
  // Check if pattern has all distinct characters
  const charSet = new Set(pattern);
  if (charSet.size !== m) {
    return naiveSearch(text, pattern);
  }
  
  let i = 0;
  while (i <= n - m) {
    let j = 0;
    
    // Compare characters
    while (j < m && text[i + j] === pattern[j]) {
      j++;
    }
    
    if (j === m) {
      results.push(i);
      // Since all characters are distinct, we can skip the entire pattern length
      i += m;
    } else if (j === 0) {
      // No match at all, move one position
      i++;
    } else {
      // Partial match, we can skip j positions
      i += j;
    }
  }
  
  return results;
}

// Test cases
const text1 = "ABCDEFGHIJKLMNOP";
const pattern1 = "BCD"; // Distinct characters
console.log(improvedNaiveSearchDistinct(text1, pattern1)); // [1]`,
          Java: `import java.util.*;

public class ImprovedNaiveSearch {
    public static List<Integer> improvedNaiveSearchDistinct(String text, String pattern) {
        int n = text.length();
        int m = pattern.length();
        List<Integer> results = new ArrayList<>();
        
        // Check if pattern has all distinct characters
        Set<Character> charSet = new HashSet<>();
        for (char c : pattern.toCharArray()) {
            charSet.add(c);
        }
        if (charSet.size() != m) {
            return naiveSearch(text, pattern);
        }
        
        int i = 0;
        while (i <= n - m) {
            int j = 0;
            
            // Compare characters
            while (j < m && text.charAt(i + j) == pattern.charAt(j)) {
                j++;
            }
            
            if (j == m) {
                results.add(i);
                // Since all characters are distinct, we can skip the entire pattern length
                i += m;
            } else if (j == 0) {
                // No match at all, move one position
                i++;
            } else {
                // Partial match, we can skip j positions
                i += j;
            }
        }
        
        return results;
    }
    
    // Helper method for naive search
    private static List<Integer> naiveSearch(String text, String pattern) {
        int n = text.length();
        int m = pattern.length();
        List<Integer> results = new ArrayList<>();
        
        for (int i = 0; i <= n - m; i++) {
            int j = 0;
            while (j < m && text.charAt(i + j) == pattern.charAt(j)) {
                j++;
            }
            if (j == m) {
                results.add(i);
            }
        }
        
        return results;
    }
    
    public static void main(String[] args) {
        String text1 = "ABCDEFGHIJKLMNOP";
        String pattern1 = "BCD"; // Distinct characters
        System.out.println(improvedNaiveSearchDistinct(text1, pattern1)); // [1]
    }
}`,
        }}
        explanation="When pattern has distinct characters, after a mismatch at position j, we can skip j positions instead of 1. Time: O(n) for distinct patterns, O(n*m) otherwise."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Optimized naive search when pattern has distinct characters",
                "All characters in pattern are unique",
                "Can skip more positions on mismatch",
                "Input: Text, pattern, Output: Array of indices",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: ["distinct", "optimized", "skip", "pattern search"],
              details: [
                "Keywords: 'distinct characters', 'optimized' → Skip optimization",
                "Pattern: Distinct chars → Can skip more positions",
                "This is an 'optimized pattern search' problem",
                "Similar to: Naive search, pattern matching",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "String: Input is already strings",
                "Set: To check if pattern has distinct characters",
                "O(1) space",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Improved Naive with Skipping",
                "  - Check if pattern has distinct characters",
                "  - If match: skip entire pattern length",
                "  - If partial match: skip j positions",
                "  - Time: O(n) for distinct, O(n*m) otherwise",
                "  - Space: O(1)",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • Pattern not distinct: Fall back to naive",
                "  • Pattern longer than text: Return empty",
                "",
                "Optimization:",
                "  • O(n) time when distinct",
                "  • Skip entire pattern on match",
                "  • Skip j positions on partial match",
                "",
                "Implementation:",
                "  1. Check if pattern has distinct characters",
                "  2. For i = 0 to n-m:",
                "     - Compare pattern with text[i..i+m-1]",
                "     - If match: i += m",
                "     - Else if partial match: i += j",
                "     - Else: i++",
                "  3. Return results",
              ],
            },
          ],
          pattern: "Optimized Sliding Window (Distinct Characters)",
          complexity: {
            time: "O(n) when distinct, O(n*m) otherwise",
            space: "O(1) - Only variables",
          },
        }}
      />

      <ProblemBlock
        title="10. Rabin Karp Algorithm"
        difficulty="Medium"
        description="Pattern searching using rolling hash technique."
        solutions={{
          JavaScript: `// Rabin Karp Algorithm

function rabinKarpSearch(text, pattern, base = 256, mod = 1000000007) {
  const n = text.length;
  const m = pattern.length;
  const results = [];
  
  if (m === 0 || m > n) return results;
  
  // Calculate hash of pattern and first window of text
  let patternHash = 0;
  let textHash = 0;
  let h = 1;
  
  // Calculate h = base^(m-1) % mod
  for (let i = 0; i < m - 1; i++) {
    h = (h * base) % mod;
  }
  
  // Calculate initial hashes
  for (let i = 0; i < m; i++) {
    patternHash = (patternHash * base + pattern.charCodeAt(i)) % mod;
    textHash = (textHash * base + text.charCodeAt(i)) % mod;
  }
  
  // Slide the pattern over text
  for (let i = 0; i <= n - m; i++) {
    // Check if current window hash matches pattern hash
    if (patternHash === textHash) {
      // Verify actual characters (handle hash collisions)
      let j = 0;
      while (j < m && text[i + j] === pattern[j]) {
        j++;
      }
      
      if (j === m) {
        results.push(i);
      }
    }
    
    // Calculate hash for next window
    if (i < n - m) {
      textHash = (base * (textHash - text.charCodeAt(i) * h) + text.charCodeAt(i + m)) % mod;
      
      // Handle negative hash values
      if (textHash < 0) {
        textHash += mod;
      }
    }
  }
  
  return results;
}

// Test cases
const text = "GEEKS FOR GEEKS";
const pattern = "GEEK";
console.log(rabinKarpSearch(text, pattern)); // [0, 10]`,
          Java: `public class RabinKarp {
    public static List<Integer> rabinKarpSearch(String text, String pattern, 
                                                  int base, long mod) {
        int n = text.length();
        int m = pattern.length();
        List<Integer> results = new ArrayList<>();
        
        if (m == 0 || m > n) return results;
        
        // Calculate hash of pattern and first window of text
        long patternHash = 0;
        long textHash = 0;
        long h = 1;
        
        // Calculate h = base^(m-1) % mod
        for (int i = 0; i < m - 1; i++) {
            h = (h * base) % mod;
        }
        
        // Calculate initial hashes
        for (int i = 0; i < m; i++) {
            patternHash = (patternHash * base + pattern.charAt(i)) % mod;
            textHash = (textHash * base + text.charAt(i)) % mod;
        }
        
        // Slide the pattern over text
        for (int i = 0; i <= n - m; i++) {
            // Check if current window hash matches pattern hash
            if (patternHash == textHash) {
                // Verify actual characters (handle hash collisions)
                int j = 0;
                while (j < m && text.charAt(i + j) == pattern.charAt(j)) {
                    j++;
                }
                
                if (j == m) {
                    results.add(i);
                }
            }
            
            // Calculate hash for next window
            if (i < n - m) {
                textHash = (base * (textHash - text.charAt(i) * h) + 
                           text.charAt(i + m)) % mod;
                
                // Handle negative hash values
                if (textHash < 0) {
                    textHash += mod;
                }
            }
        }
        
        return results;
    }
    
    public static void main(String[] args) {
        String text = "GEEKS FOR GEEKS";
        String pattern = "GEEK";
        System.out.println(rabinKarpSearch(text, pattern, 256, 1000000007)); // [0, 10]
    }
}`,
        }}
        explanation="Use rolling hash to compare pattern with text windows. Calculate hash for pattern, then slide window and update hash in O(1). Time: O(n+m) average, O(n*m) worst case."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Find pattern in text using rolling hash",
                "Use hash values for quick comparison",
                "Verify actual characters on hash match",
                "Input: Text, pattern, Output: Array of indices",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: [
                "rabin-karp",
                "rolling hash",
                "hash",
                "pattern search",
              ],
              details: [
                "Keywords: 'rabin-karp', 'rolling hash' → Hash-based search",
                "Pattern: Compute hash → Compare → Verify",
                "This is a 'hash-based pattern search' problem",
                "Similar to: KMP, pattern matching",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Variables: For hash values and calculations",
                "O(1) space",
                "Modulo arithmetic for large numbers",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Rolling Hash",
                "  - Calculate pattern hash",
                "  - Calculate first window hash",
                "  - For each window:",
                "    - If hash matches: verify characters",
                "    - Update hash for next window (rolling)",
                "  - Time: O(n+m) average, O(n*m) worst",
                "  - Space: O(1)",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • Hash collision: Verify actual characters",
                "  • Pattern longer than text: Return empty",
                "",
                "Optimization:",
                "  • O(n+m) average time",
                "  • O(1) space",
                "  • Rolling hash: O(1) per window update",
                "",
                "Implementation:",
                "  1. Calculate pattern hash",
                "  2. Calculate first window hash",
                "  3. For i = 0 to n-m:",
                "     - If hash matches: verify characters",
                "     - Update hash: (base * (hash - text[i] * h) + text[i+m]) % mod",
                "  4. Return results",
              ],
            },
          ],
          pattern: "Rolling Hash (Rabin-Karp)",
          complexity: {
            time: "O(n+m) average, O(n*m) worst case",
            space: "O(1) - Only variables",
          },
        }}
      />

      <ProblemBlock
        title="11. KMP Algorithm (Part 1: Constructing LPS Array)"
        difficulty="Hard"
        description="Build the Longest Proper Prefix which is also Suffix (LPS) array for KMP algorithm."
        solutions={{
          JavaScript: `// KMP Algorithm - Part 1: Constructing LPS Array

function computeLPS(pattern) {
  const m = pattern.length;
  const lps = new Array(m);
  lps[0] = 0; // First element is always 0
  
  let len = 0; // Length of the longest prefix suffix
  let i = 1;
  
  while (i < m) {
    if (pattern[i] === pattern[len]) {
      len++;
      lps[i] = len;
      i++;
    } else {
      if (len !== 0) {
        // Don't increment i, try with shorter prefix
        len = lps[len - 1];
      } else {
        lps[i] = 0;
        i++;
      }
    }
  }
  
  return lps;
}

// Test cases
const patterns = ["AAAA", "ABCDE", "AABAACAABAA"];
patterns.forEach(pattern => {
  const lps = computeLPS(pattern);
  console.log(\`Pattern: "\${pattern}", LPS: [\${lps.join(', ')}]\`);
});`,
          Java: `public class KMPLPS {
    public static int[] computeLPS(String pattern) {
        int m = pattern.length();
        int[] lps = new int[m];
        lps[0] = 0; // First element is always 0
        
        int len = 0; // Length of the longest prefix suffix
        int i = 1;
        
        while (i < m) {
            if (pattern.charAt(i) == pattern.charAt(len)) {
                len++;
                lps[i] = len;
                i++;
            } else {
                if (len != 0) {
                    // Don't increment i, try with shorter prefix
                    len = lps[len - 1];
                } else {
                    lps[i] = 0;
                    i++;
                }
            }
        }
        
        return lps;
    }
    
    public static void main(String[] args) {
        String[] patterns = {"AAAA", "ABCDE", "AABAACAABAA"};
        for (String pattern : patterns) {
            int[] lps = computeLPS(pattern);
            System.out.print("Pattern: " + pattern + ", LPS: [");
            for (int i = 0; i < lps.length; i++) {
                System.out.print(lps[i]);
                if (i < lps.length - 1) System.out.print(", ");
            }
            System.out.println("]");
        }
    }
}`,
        }}
        explanation="LPS[i] stores the length of the longest proper prefix of pattern[0..i] that is also a suffix. Use two pointers: one for pattern, one for current match length."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Construct LPS (Longest Proper Prefix which is also Suffix) array",
                "LPS[i] = length of longest prefix-suffix for pattern[0..i]",
                "Used in KMP algorithm for pattern matching",
                "Input: Pattern string, Output: LPS array",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: ["lps", "prefix", "suffix", "kmp", "preprocessing"],
              details: [
                "Keywords: 'LPS', 'prefix suffix' → Preprocessing for KMP",
                "Pattern: Find longest prefix that is also suffix",
                "This is a 'string preprocessing' problem",
                "Similar to: KMP algorithm, pattern preprocessing",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Array: To store LPS values",
                "O(m) space for LPS array",
                "Two pointers: len and i",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Two Pointers for LPS",
                "  - lps[0] = 0, len = 0, i = 1",
                "  - While i < m:",
                "    - If pattern[i] == pattern[len]:",
                "      * len++, lps[i] = len, i++",
                "    - Else if len != 0:",
                "      * len = lps[len-1]",
                "    - Else:",
                "      * lps[i] = 0, i++",
                "  - Time: O(m), Space: O(m)",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • Empty pattern: Return empty array",
                "  • Single character: Return [0]",
                "",
                "Optimization:",
                "  • O(m) time - single pass",
                "  • O(m) space for LPS array",
                "  • Key: Reuse previous LPS values",
                "",
                "Implementation:",
                "  1. lps[0] = 0, len = 0, i = 1",
                "  2. While i < m:",
                "     - If pattern[i] == pattern[len]:",
                "       * len++, lps[i] = len, i++",
                "     - Else if len != 0:",
                "       * len = lps[len-1]",
                "     - Else:",
                "       * lps[i] = 0, i++",
                "  3. Return lps",
              ],
            },
          ],
          pattern: "String Preprocessing (LPS Array)",
          complexity: {
            time: "O(m) - Single pass through pattern",
            space: "O(m) - LPS array storage",
          },
        }}
      />

      <ProblemBlock
        title="12. KMP Algorithm (Part 2: Complete Algorithm)"
        difficulty="Hard"
        description="Complete KMP algorithm using the LPS array for pattern searching."
        solutions={{
          JavaScript: `// KMP Algorithm - Part 2: Complete Algorithm

function kmpSearch(text, pattern) {
  const n = text.length;
  const m = pattern.length;
  const results = [];
  
  if (m === 0) return results;
  
  // Compute LPS array
  const lps = computeLPS(pattern);
  
  let i = 0; // Index for text
  let j = 0; // Index for pattern
  
  while (i < n) {
    if (pattern[j] === text[i]) {
      i++;
      j++;
    }
    
    if (j === m) {
      // Pattern found
      results.push(i - j);
      j = lps[j - 1]; // Reset j using LPS array
    } else if (i < n && pattern[j] !== text[i]) {
      // Mismatch after j matches
      if (j !== 0) {
        j = lps[j - 1]; // Don't match lps[0..lps[j-1]] characters
      } else {
        i++; // Move to next character in text
      }
    }
  }
  
  return results;
}

// Test cases
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
console.log(kmpSearch(text, pattern)); // [10]`,
          Java: `public class KMP {
    public static int[] computeLPS(String pattern) {
        int m = pattern.length();
        int[] lps = new int[m];
        lps[0] = 0;
        int len = 0;
        int i = 1;
        
        while (i < m) {
            if (pattern.charAt(i) == pattern.charAt(len)) {
                len++;
                lps[i] = len;
                i++;
            } else {
                if (len != 0) {
                    len = lps[len - 1];
                } else {
                    lps[i] = 0;
                    i++;
                }
            }
        }
        return lps;
    }
    
    public static List<Integer> kmpSearch(String text, String pattern) {
        int n = text.length();
        int m = pattern.length();
        List<Integer> results = new ArrayList<>();
        
        if (m == 0) return results;
        
        // Compute LPS array
        int[] lps = computeLPS(pattern);
        
        int i = 0; // Index for text
        int j = 0; // Index for pattern
        
        while (i < n) {
            if (pattern.charAt(j) == text.charAt(i)) {
                i++;
                j++;
            }
            
            if (j == m) {
                // Pattern found
                results.add(i - j);
                j = lps[j - 1]; // Reset j using LPS array
            } else if (i < n && pattern.charAt(j) != text.charAt(i)) {
                // Mismatch after j matches
                if (j != 0) {
                    j = lps[j - 1];
                } else {
                    i++;
                }
            }
        }
        
        return results;
    }
    
    public static void main(String[] args) {
        String text = "ABABDABACDABABCABAB";
        String pattern = "ABABCABAB";
        System.out.println(kmpSearch(text, pattern)); // [10]
    }
}`,
        }}
        explanation="Use LPS array to avoid redundant comparisons. When mismatch occurs, reset pattern pointer using LPS value. Time: O(n+m), Space: O(m)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Find pattern in text using KMP algorithm",
                "Use LPS array to avoid redundant comparisons",
                "Most efficient pattern matching algorithm",
                "Input: Text, pattern, Output: Array of indices",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: ["kmp", "lps", "pattern search", "preprocessing"],
              details: [
                "Keywords: 'KMP', 'LPS' → Preprocessing-based search",
                "Pattern: Preprocess pattern → Use LPS for matching",
                "This is a 'KMP pattern search' problem",
                "Similar to: Rabin-Karp, pattern matching",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "LPS Array: Precomputed from pattern",
                "O(m) space for LPS array",
                "Two pointers: i (text), j (pattern)",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: KMP with LPS",
                "  - Precompute LPS array",
                "  - i = 0 (text), j = 0 (pattern)",
                "  - While i < n:",
                "    - If text[i] == pattern[j]: i++, j++",
                "    - If j == m: match found, j = lps[j-1]",
                "    - Else if mismatch: j = lps[j-1] or i++",
                "  - Time: O(n+m), Space: O(m)",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • Pattern empty: Return all indices",
                "  • Pattern longer than text: Return empty",
                "",
                "Optimization:",
                "  • O(n+m) time - optimal",
                "  • O(m) space for LPS",
                "  • No backtracking in text",
                "",
                "Implementation:",
                "  1. Compute LPS array",
                "  2. i = 0, j = 0",
                "  3. While i < n:",
                "     - If text[i] == pattern[j]: i++, j++",
                "     - If j == m: add (i-j) to results, j = lps[j-1]",
                "     - Else if j != 0: j = lps[j-1]",
                "     - Else: i++",
                "  4. Return results",
              ],
            },
          ],
          pattern: "KMP Algorithm (Preprocessing-Based)",
          complexity: {
            time: "O(n+m) - Optimal pattern matching",
            space: "O(m) - LPS array storage",
          },
        }}
      />

      <ProblemBlock
        title="13. Check if Strings are Rotations"
        difficulty="Easy"
        description="Check if one string is a rotation of another string."
        solutions={{
          JavaScript: `// Check if Strings are Rotations

function areRotations(str1, str2) {
  // Check if lengths are equal
  if (str1.length !== str2.length) {
    return false;
  }
  
  // Concatenate str1 with itself
  const concatenated = str1 + str1;
  
  // Check if str2 is a substring of concatenated str1
  return concatenated.includes(str2);
}

// Test cases
const str1 = "ABCD";
const str2 = "CDAB";
const str3 = "ACBD";
console.log(areRotations(str1, str2)); // true
console.log(areRotations(str1, str3)); // false`,
          Java: `public class StringRotations {
    public static boolean areRotations(String str1, String str2) {
        // Check if lengths are equal
        if (str1.length() != str2.length()) {
            return false;
        }
        
        // Concatenate str1 with itself
        String concatenated = str1 + str1;
        
        // Check if str2 is a substring of concatenated str1
        return concatenated.contains(str2);
    }
    
    public static void main(String[] args) {
        String str1 = "ABCD";
        String str2 = "CDAB";
        String str3 = "ACBD";
        System.out.println(areRotations(str1, str2)); // true
        System.out.println(areRotations(str1, str3)); // false
    }
}`,
        }}
        explanation="Concatenate first string with itself, then check if second string is a substring. Time: O(n), Space: O(n)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Check if one string is rotation of another",
                "Rotation: circular shift of characters",
                "Same length required",
                "Input: Two strings, Output: Boolean",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: ["rotation", "circular", "substring", "concatenate"],
              details: [
                "Keywords: 'rotation', 'circular' → Concatenation trick",
                "Pattern: Concatenate string with itself → Check substring",
                "This is a 'string transformation' problem",
                "Similar to: Substring search, string matching",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "String: Concatenate str1 with itself",
                "O(n) space for concatenated string",
                "Use substring search",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Concatenation + Substring Search",
                "  - If lengths differ: return false",
                "  - Concatenate str1 with itself",
                "  - Check if str2 is substring of concatenated",
                "  - Time: O(n), Space: O(n)",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • Different lengths: Return false",
                "  • Same strings: Return true",
                "  • Empty strings: Return true",
                "",
                "Optimization:",
                "  • O(n) time with substring search",
                "  • O(n) space for concatenation",
                "  • Key insight: Rotation = substring in doubled string",
                "",
                "Implementation:",
                "  1. If str1.length != str2.length: return false",
                "  2. concatenated = str1 + str1",
                "  3. Return concatenated.includes(str2)",
              ],
            },
          ],
          pattern: "String Transformation (Concatenation Trick)",
          complexity: {
            time: "O(n) - Substring search",
            space: "O(n) - Concatenated string",
          },
        }}
      />

      <ProblemBlock
        title="14. Anagram Search"
        difficulty="Medium"
        description="Find all anagrams of a pattern in a text string."
        solutions={{
          JavaScript: `// Anagram Search

function anagramSearch(text, pattern) {
  const textLen = text.length;
  const patternLen = pattern.length;
  const result = [];
  
  if (patternLen > textLen) return result;
  
  // Count characters in pattern
  const patternCount = {};
  for (const char of pattern) {
    patternCount[char] = (patternCount[char] || 0) + 1;
  }
  
  // Count characters in first window of text
  const windowCount = {};
  for (let i = 0; i < patternLen; i++) {
    windowCount[text[i]] = (windowCount[text[i]] || 0) + 1;
  }
  
  // Check if first window is anagram
  if (isEqual(patternCount, windowCount)) {
    result.push(0);
  }
  
  // Slide the window
  for (let i = patternLen; i < textLen; i++) {
    // Add new character
    windowCount[text[i]] = (windowCount[text[i]] || 0) + 1;
    
    // Remove old character
    windowCount[text[i - patternLen]]--;
    if (windowCount[text[i - patternLen]] === 0) {
      delete windowCount[text[i - patternLen]];
    }
    
    // Check if current window is anagram
    if (isEqual(patternCount, windowCount)) {
      result.push(i - patternLen + 1);
    }
  }
  
  return result;
}

// Helper function to compare character counts
function isEqual(count1, count2) {
  const keys1 = Object.keys(count1);
  const keys2 = Object.keys(count2);
  
  if (keys1.length !== keys2.length) return false;
  
  for (const key of keys1) {
    if (count1[key] !== count2[key]) return false;
  }
  
  return true;
}

// Test cases
const text = "BACDGABCDA";
const pattern = "ABCD";
console.log(anagramSearch(text, pattern)); // [0, 5, 6]`,
          Java: `import java.util.*;

public class AnagramSearch {
    public static List<Integer> anagramSearch(String text, String pattern) {
        int textLen = text.length();
        int patternLen = pattern.length();
        List<Integer> result = new ArrayList<>();
        
        if (patternLen > textLen) return result;
        
        // Count characters in pattern
        Map<Character, Integer> patternCount = new HashMap<>();
        for (char c : pattern.toCharArray()) {
            patternCount.put(c, patternCount.getOrDefault(c, 0) + 1);
        }
        
        // Count characters in first window of text
        Map<Character, Integer> windowCount = new HashMap<>();
        for (int i = 0; i < patternLen; i++) {
            windowCount.put(text.charAt(i), 
                          windowCount.getOrDefault(text.charAt(i), 0) + 1);
        }
        
        // Check if first window is anagram
        if (isEqual(patternCount, windowCount)) {
            result.add(0);
        }
        
        // Slide the window
        for (int i = patternLen; i < textLen; i++) {
            // Add new character
            windowCount.put(text.charAt(i), 
                          windowCount.getOrDefault(text.charAt(i), 0) + 1);
            
            // Remove old character
            char oldChar = text.charAt(i - patternLen);
            windowCount.put(oldChar, windowCount.get(oldChar) - 1);
            if (windowCount.get(oldChar) == 0) {
                windowCount.remove(oldChar);
            }
            
            // Check if current window is anagram
            if (isEqual(patternCount, windowCount)) {
                result.add(i - patternLen + 1);
            }
        }
        
        return result;
    }
    
    // Helper function to compare character counts
    private static boolean isEqual(Map<Character, Integer> count1, 
                                   Map<Character, Integer> count2) {
        if (count1.size() != count2.size()) return false;
        
        for (char key : count1.keySet()) {
            if (!count2.containsKey(key) || 
                !count1.get(key).equals(count2.get(key))) {
                return false;
            }
        }
        
        return true;
    }
    
    public static void main(String[] args) {
        String text = "BACDGABCDA";
        String pattern = "ABCD";
        System.out.println(anagramSearch(text, pattern)); // [0, 5, 6]
    }
}`,
        }}
        explanation="Use sliding window technique. Count characters in pattern, then slide window in text and maintain character count. Time: O(n), Space: O(1) for fixed alphabet."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Find all anagrams of pattern in text",
                "Anagram: same characters, different order",
                "Sliding window of pattern length",
                "Input: Text, pattern, Output: Array of starting indices",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: ["anagram", "sliding window", "frequency", "hash map"],
              details: [
                "Keywords: 'anagram search' → Sliding window + frequency",
                "Pattern: Compare character frequencies in window",
                "This is a 'sliding window' problem",
                "Similar to: Pattern search, frequency matching",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Map: To store pattern character frequencies",
                "Map: To store window character frequencies",
                "O(1) space for fixed alphabet",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Sliding Window + Frequency Matching",
                "  - Count pattern frequencies",
                "  - Initialize window [0, m-1]",
                "  - For each window:",
                "    - Count window frequencies",
                "    - If frequencies match: add index",
                "    - Slide window",
                "  - Time: O(n), Space: O(1)",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • Pattern longer than text: Return empty",
                "  • Pattern empty: Return all indices",
                "",
                "Optimization:",
                "  • O(n) time - single pass",
                "  • O(1) space for fixed alphabet",
                "  • Efficient frequency comparison",
                "",
                "Implementation:",
                "  1. Count pattern frequencies",
                "  2. For i = 0 to n-m:",
                "     - Count window[i..i+m-1] frequencies",
                "     - If frequencies match: add i",
                "  3. Return results",
              ],
            },
          ],
          pattern: "Sliding Window + Hash Map (Anagram Search)",
          complexity: {
            time: "O(n) - Single pass through text",
            space: "O(1) - Fixed alphabet size",
          },
        }}
      />

      <ProblemBlock
        title="15. Lexicographic Rank of a String"
        difficulty="Hard"
        description="Find the lexicographic rank of a string among all its permutations."
        solutions={{
          JavaScript: `// Lexicographic Rank of a String

function lexicographicRank(str) {
  const n = str.length;
  let rank = 1;
  
  // Calculate factorial for faster computation
  const fact = new Array(n + 1);
  fact[0] = 1;
  for (let i = 1; i <= n; i++) {
    fact[i] = fact[i - 1] * i;
  }
  
  // Count frequency of each character
  const count = new Array(256).fill(0);
  for (let i = 0; i < n; i++) {
    count[str.charCodeAt(i)]++;
  }
  
  // For each character, count smaller characters on right
  for (let i = 0; i < n; i++) {
    let smaller = 0;
    
    // Count characters smaller than current character
    for (let j = 0; j < str.charCodeAt(i); j++) {
      smaller += count[j];
    }
    
    // Add permutations possible with smaller characters
    rank += smaller * fact[n - 1 - i];
    
    // Decrease count of current character
    count[str.charCodeAt(i)]--;
  }
  
  return rank;
}

// Test cases
const str1 = "STRING";
const str2 = "ABC";
console.log(lexicographicRank(str1)); // 598
console.log(lexicographicRank(str2)); // 1`,
          Java: `public class LexicographicRank {
    public static int lexicographicRank(String str) {
        int n = str.length();
        int rank = 1;
        
        // Calculate factorial for faster computation
        long[] fact = new long[n + 1];
        fact[0] = 1;
        for (int i = 1; i <= n; i++) {
            fact[i] = fact[i - 1] * i;
        }
        
        // Count frequency of each character
        int[] count = new int[256];
        for (int i = 0; i < n; i++) {
            count[str.charAt(i)]++;
        }
        
        // For each character, count smaller characters on right
        for (int i = 0; i < n; i++) {
            int smaller = 0;
            
            // Count characters smaller than current character
            for (int j = 0; j < str.charAt(i); j++) {
                smaller += count[j];
            }
            
            // Add permutations possible with smaller characters
            rank += smaller * fact[n - 1 - i];
            
            // Decrease count of current character
            count[str.charAt(i)]--;
        }
        
        return rank;
    }
    
    public static void main(String[] args) {
        String str1 = "STRING";
        String str2 = "ABC";
        System.out.println(lexicographicRank(str1)); // 598
        System.out.println(lexicographicRank(str2)); // 1
    }
}`,
        }}
        explanation="For each position, count characters smaller than current character on the right, multiply by factorial of remaining positions. Time: O(n), Space: O(1)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Find lexicographic rank of string",
                "Rank = position in sorted list of all permutations",
                "All characters are distinct",
                "Input: String, Output: Rank (1-indexed)",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: [
                "lexicographic",
                "rank",
                "permutation",
                "factorial",
                "count",
              ],
              details: [
                "Keywords: 'lexicographic rank', 'permutation' → Counting permutations",
                "Pattern: Count smaller permutations → Use factorial",
                "This is a 'combinatorial counting' problem",
                "Similar to: Permutation problems, ranking",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Array: To count character frequencies",
                "Array: To store factorials",
                "O(1) space for fixed alphabet",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Permutation Counting",
                "  - Precompute factorials",
                "  - For each position i:",
                "    - Count characters smaller than str[i] on right",
                "    - rank += count * fact[n-1-i]",
                "    - Decrease count of str[i]",
                "  - Time: O(n), Space: O(1)",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • Single character: Return 1",
                "  • Already sorted: Return 1",
                "",
                "Optimization:",
                "  • O(n) time - single pass",
                "  • O(1) space for fixed alphabet",
                "  • Precompute factorials",
                "",
                "Implementation:",
                "  1. Precompute factorials",
                "  2. Count character frequencies",
                "  3. rank = 0",
                "  4. For i = 0 to n-1:",
                "     - Count smaller chars on right",
                "     - rank += count * fact[n-1-i]",
                "     - Decrease count[str[i]]",
                "  5. Return rank + 1",
              ],
            },
          ],
          pattern: "Combinatorial Counting (Permutation Rank)",
          complexity: {
            time: "O(n) - Single pass through string",
            space: "O(1) - Fixed alphabet size",
          },
        }}
      />

      <ProblemBlock
        title="16. Longest Substring with Distinct Characters"
        difficulty="Medium"
        description="Find the length of the longest substring with all distinct characters."
        solutions={{
          JavaScript: `// Longest Substring with Distinct Characters

function longestDistinctSubstring(str) {
  const n = str.length;
  let maxLength = 0;
  let left = 0;
  const charSet = new Set();
  
  for (let right = 0; right < n; right++) {
    // If character is already in set, remove from left until it's not
    while (charSet.has(str[right])) {
      charSet.delete(str[left]);
      left++;
    }
    
    // Add current character to set
    charSet.add(str[right]);
    
    // Update maximum length
    maxLength = Math.max(maxLength, right - left + 1);
  }
  
  return maxLength;
}

// Test cases
const str1 = "abcabcbb";
const str2 = "bbbbb";
const str3 = "pwwkew";
console.log(longestDistinctSubstring(str1)); // 3
console.log(longestDistinctSubstring(str2)); // 1
console.log(longestDistinctSubstring(str3)); // 3`,
          Java: `import java.util.*;

public class LongestDistinctSubstring {
    public static int longestDistinctSubstring(String str) {
        int n = str.length();
        int maxLength = 0;
        int left = 0;
        Set<Character> charSet = new HashSet<>();
        
        for (int right = 0; right < n; right++) {
            // If character is already in set, remove from left until it's not
            while (charSet.contains(str.charAt(right))) {
                charSet.remove(str.charAt(left));
                left++;
            }
            
            // Add current character to set
            charSet.add(str.charAt(right));
            
            // Update maximum length
            maxLength = Math.max(maxLength, right - left + 1);
        }
        
        return maxLength;
    }
    
    public static void main(String[] args) {
        String str1 = "abcabcbb";
        String str2 = "bbbbb";
        String str3 = "pwwkew";
        System.out.println(longestDistinctSubstring(str1)); // 3
        System.out.println(longestDistinctSubstring(str2)); // 1
        System.out.println(longestDistinctSubstring(str3)); // 3
    }
}`,
        }}
        explanation="Use sliding window technique with Set to track characters. Expand right pointer, shrink left when duplicate found. Time: O(n), Space: O(min(m,n)) where m is charset size."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Read the problem carefully and identify what is being asked.",
              details: [
                "Find longest substring with all distinct characters",
                "Substring is contiguous",
                "All characters must be unique",
                "Input: String, Output: Length of longest distinct substring",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recognize keywords and patterns that hint at the solution approach.",
              keywords: [
                "longest",
                "distinct",
                "substring",
                "sliding window",
                "set",
              ],
              details: [
                "Keywords: 'longest distinct substring' → Sliding window + set",
                "Pattern: Expand window → Shrink when duplicate",
                "This is a 'sliding window' problem",
                "Similar to: Longest substring problems, window problems",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Select appropriate data structure based on problem requirements.",
              details: [
                "Set: To track characters in current window",
                "O(min(m,n)) space for character set",
                "Two pointers: left and right",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Choose the algorithm that best fits the problem constraints.",
              details: [
                "Algorithm: Sliding Window with Set",
                "  - left = 0, right = 0",
                "  - While right < n:",
                "    - While str[right] in set: remove str[left], left++",
                "    - Add str[right] to set",
                "    - Update maxLength",
                "    - right++",
                "  - Time: O(n), Space: O(min(m,n))",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Write the solution and consider optimizations and edge cases.",
              details: [
                "Edge Cases:",
                "  • All distinct: Return n",
                "  • All same: Return 1",
                "  • Empty string: Return 0",
                "",
                "Optimization:",
                "  • O(n) time - each character visited at most twice",
                "  • O(min(m,n)) space for set",
                "  • Two pointers technique",
                "",
                "Implementation:",
                "  1. left = 0, maxLength = 0, set = new Set()",
                "  2. For right = 0 to n-1:",
                "     - While str[right] in set:",
                "       * Remove str[left] from set",
                "       * left++",
                "     - Add str[right] to set",
                "     - maxLength = max(maxLength, right - left + 1)",
                "  3. Return maxLength",
              ],
            },
          ],
          pattern: "Sliding Window + Hash Set (Longest Distinct)",
          complexity: {
            time: "O(n) - Each character visited at most twice",
            space: "O(min(m,n)) - Character set",
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
        className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors mb-4"
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
                    ? "text-cyan-400 border-b-2 border-cyan-400"
                    : "text-gray-400 hover:text-gray-300"
                }`}
              >
                Solution
              </button>
              <button
                onClick={() => setActiveTab("approach")}
                className={`px-4 py-2 font-semibold transition-colors ${
                  activeTab === "approach"
                    ? "text-cyan-400 border-b-2 border-cyan-400"
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
