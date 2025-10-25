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
            code={`// String Operations in JavaScript

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
console.log(str.substr(0, 5)); // "Hello" (deprecated)

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
console.log("A" < "a"); // true (ASCII comparison)`}
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
        solution={`// Palindrome Check

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

// Recursive palindrome check
function isPalindromeRecursive(str, left = 0, right = str.length - 1) {
  if (left >= right) return true;
  if (str[left].toLowerCase() !== str[right].toLowerCase()) return false;
  return isPalindromeRecursive(str, left + 1, right - 1);
}

// Using built-in methods
function isPalindromeBuiltIn(str) {
  const cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return cleaned === cleaned.split('').reverse().join('');
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

// Count palindromic substrings
function countPalindromicSubstrings(str) {
  let count = 0;
  
  for (let i = 0; i < str.length; i++) {
    // Count odd length palindromes
    let left = i, right = i;
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      count++;
      left--;
      right++;
    }
    
    // Count even length palindromes
    left = i; right = i + 1;
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      count++;
      left--;
      right++;
    }
  }
  
  return count;
}

// Test cases
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("A man a plan a canal Panama")); // true
console.log(isPalindrome("hello")); // false
console.log(longestPalindrome("babad")); // "bab" or "aba"
console.log(countPalindromicSubstrings("abc")); // 3`}
        explanation="Use two pointers from both ends, skipping non-alphanumeric characters. Time: O(n), Space: O(1)."
      />

      <ProblemBlock
        title="2. Check if a String is Subsequence of Other"
        difficulty="Easy"
        description="Check if string s is a subsequence of string t (characters in order but not necessarily consecutive)."
        solution={`// Check if String is Subsequence of Other

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

// Recursive approach
function isSubsequenceRecursive(s, t, sIndex = 0, tIndex = 0) {
  if (sIndex === s.length) return true;
  if (tIndex === t.length) return false;
  
  if (s[sIndex] === t[tIndex]) {
    return isSubsequenceRecursive(s, t, sIndex + 1, tIndex + 1);
  }
  
  return isSubsequenceRecursive(s, t, sIndex, tIndex + 1);
}

// Find all subsequences of a string
function findAllSubsequences(str) {
  const result = [];
  
  function generateSubsequences(index, current) {
    if (index === str.length) {
      if (current.length > 0) {
        result.push(current);
      }
      return;
    }
    
    // Include current character
    generateSubsequences(index + 1, current + str[index]);
    
    // Exclude current character
    generateSubsequences(index + 1, current);
  }
  
  generateSubsequences(0, "");
  return result;
}

// Count subsequences
function countSubsequences(s, t) {
  const m = s.length;
  const n = t.length;
  const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));
  
  // Empty string is subsequence of any string
  for (let j = 0; j <= n; j++) {
    dp[0][j] = 1;
  }
  
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s[i - 1] === t[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + dp[i][j - 1];
      } else {
        dp[i][j] = dp[i][j - 1];
      }
    }
  }
  
  return dp[m][n];
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
console.log(countSubsequences("abc", "ahbgdc")); // 3`}
        explanation="Use two pointers, advance both when characters match, only advance target pointer otherwise. Time: O(n), Space: O(1)."
      />

      <ProblemBlock
        title="3. Check for Anagram"
        difficulty="Easy"
        description="Check if two strings are anagrams (contain same characters with same frequencies)."
        solution={`// Check for Anagram

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

// Using sorting
function isAnagramSorting(s, t) {
  if (s.length !== t.length) return false;
  
  const sortedS = s.split('').sort().join('');
  const sortedT = t.split('').sort().join('');
  
  return sortedS === sortedT;
}

// Using Map
function isAnagramMap(s, t) {
  if (s.length !== t.length) return false;
  
  const map = new Map();
  
  for (const char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  
  for (const char of t) {
    if (!map.has(char) || map.get(char) === 0) return false;
    map.set(char, map.get(char) - 1);
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

// Find all anagrams of a string in another string
function findAnagrams(s, p) {
  const result = [];
  const pLen = p.length;
  const sLen = s.length;
  
  if (pLen > sLen) return result;
  
  const pCount = {};
  const windowCount = {};
  
  // Initialize counts
  for (let i = 0; i < pLen; i++) {
    pCount[p[i]] = (pCount[p[i]] || 0) + 1;
    windowCount[s[i]] = (windowCount[s[i]] || 0) + 1;
  }
  
  // Check first window
  if (isEqual(pCount, windowCount)) {
    result.push(0);
  }
  
  // Slide window
  for (let i = pLen; i < sLen; i++) {
    // Add new character
    windowCount[s[i]] = (windowCount[s[i]] || 0) + 1;
    
    // Remove old character
    windowCount[s[i - pLen]]--;
    if (windowCount[s[i - pLen]] === 0) {
      delete windowCount[s[i - pLen]];
    }
    
    // Check if current window is anagram
    if (isEqual(pCount, windowCount)) {
      result.push(i - pLen + 1);
    }
  }
  
  return result;
}

function isEqual(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  
  if (keys1.length !== keys2.length) return false;
  
  for (const key of keys1) {
    if (obj1[key] !== obj2[key]) return false;
  }
  
  return true;
}

// Test cases
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("rat", "car")); // false
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"])); 
// [["eat","tea","ate"],["tan","nat"],["bat"]]`}
        explanation="Count character frequencies in both strings. They're anagrams if all counts match. Time: O(n), Space: O(1) for fixed alphabet size."
      />

      <ProblemBlock
        title="4. Leftmost Repeating Character"
        difficulty="Easy"
        description="Find the first character that repeats in a string."
        solution={`// Leftmost Repeating Character

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

// One pass solution
function leftmostRepeatingCharOnePass(str) {
  const seen = new Set();
  
  for (const char of str) {
    if (seen.has(char)) {
      return char;
    }
    seen.add(char);
  }
  
  return null;
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

// Find all repeating characters with their first occurrence
function findAllRepeatingChars(str) {
  const charCount = {};
  const firstOccurrence = {};
  
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    charCount[char] = (charCount[char] || 0) + 1;
    
    if (!firstOccurrence.hasOwnProperty(char)) {
      firstOccurrence[char] = i;
    }
  }
  
  const repeatingChars = [];
  for (const char in charCount) {
    if (charCount[char] > 1) {
      repeatingChars.push({
        char: char,
        count: charCount[char],
        firstIndex: firstOccurrence[char]
      });
    }
  }
  
  return repeatingChars.sort((a, b) => a.firstIndex - b.firstIndex);
}

// Test cases
console.log(leftmostRepeatingChar("geeksforgeeks")); // 'g'
console.log(leftmostRepeatingCharIndex("geeksforgeeks")); // 0
console.log(findAllRepeatingChars("geeksforgeeks"));`}
        explanation="Count character frequencies, then find first character with count > 1. Time: O(n), Space: O(1) for fixed alphabet."
      />

      <ProblemBlock
        title="5. Leftmost Non-repeating Element"
        difficulty="Easy"
        description="Find the first character that doesn't repeat in a string."
        solution={`// Leftmost Non-repeating Element

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

// Using indexOf and lastIndexOf
function leftmostNonRepeatingCharIndexOf(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return i;
    }
  }
  return -1;
}

// Find all non-repeating characters
function findAllNonRepeatingChars(str) {
  const charCount = {};
  
  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  
  const nonRepeating = [];
  for (let i = 0; i < str.length; i++) {
    if (charCount[str[i]] === 1) {
      nonRepeating.push({
        char: str[i],
        index: i
      });
    }
  }
  
  return nonRepeating;
}

// Test cases
console.log(leftmostNonRepeatingChar("geeksforgeeks")); // 'f'
console.log(leftmostNonRepeatingCharIndex("geeksforgeeks")); // 5
console.log(findAllNonRepeatingChars("geeksforgeeks"));`}
        explanation="Count character frequencies, then find first character with count === 1. Time: O(n), Space: O(1) for fixed alphabet."
      />

      <ProblemBlock
        title="6. Reverse Words in a String"
        difficulty="Medium"
        description="Reverse the order of words in a string while preserving whitespace."
        solution={`// Reverse Words in a String

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

// In-place reversal (for character array)
function reverseWordsInPlace(chars) {
  // Reverse entire array
  reverseArray(chars, 0, chars.length - 1);
  
  // Reverse each word
  let start = 0;
  for (let i = 0; i <= chars.length; i++) {
    if (i === chars.length || chars[i] === ' ') {
      reverseArray(chars, start, i - 1);
      start = i + 1;
    }
  }
  
  return chars;
}

function reverseArray(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}

// Reverse words while preserving multiple spaces
function reverseWordsPreserveSpaces(str) {
  const result = [];
  const words = str.split(/(\\s+)/); // Split but keep delimiters
  
  for (let i = words.length - 1; i >= 0; i--) {
    result.push(words[i]);
  }
  
  return result.join('');
}

// Test cases
console.log(reverseWords("the sky is blue")); // "blue is sky the"
console.log(reverseWordsManual("  hello world  ")); // "world hello"
console.log(reverseWordsInPlace("the sky is blue".split(''))); // ["b","l","u","e"," ","i","s"," ","s","k","y"," ","t","h","e"]`}
        explanation="Split string into words, reverse array, join back. Time: O(n), Space: O(n). For in-place: reverse entire string, then reverse each word."
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
        solution={`// Overview of Pattern Searching Algorithms

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

// Basic pattern searching interface
function searchPattern(text, pattern) {
  const algorithms = {
    naive: naiveSearch,
    improved: improvedNaiveSearch,
    rabinKarp: rabinKarpSearch,
    kmp: kmpSearch
  };
  
  return {
    results: algorithms,
    comparison: compareAlgorithms(text, pattern)
  };
}

// Compare different algorithms
function compareAlgorithms(text, pattern) {
  const results = {};
  
  // Naive
  const start1 = performance.now();
  results.naive = naiveSearch(text, pattern);
  results.naiveTime = performance.now() - start1;
  
  // Improved Naive
  const start2 = performance.now();
  results.improved = improvedNaiveSearch(text, pattern);
  results.improvedTime = performance.now() - start2;
  
  // Rabin-Karp
  const start3 = performance.now();
  results.rabinKarp = rabinKarpSearch(text, pattern);
  results.rabinKarpTime = performance.now() - start3;
  
  // KMP
  const start4 = performance.now();
  results.kmp = kmpSearch(text, pattern);
  results.kmpTime = performance.now() - start4;
  
  return results;
}

// Pattern searching utilities
function preprocessPattern(pattern) {
  return {
    length: pattern.length,
    hash: calculateHash(pattern),
    lps: computeLPS(pattern) // For KMP
  };
}

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
  
  const comparison = compareAlgorithms(text, pattern);
  console.log("Results:", comparison);
  
  return comparison;
}

// Usage
testPatternSearching();`}
        explanation="Pattern searching involves finding all occurrences of a pattern in text. Different algorithms offer various time/space trade-offs."
      />

      <ProblemBlock
        title="8. Naive Pattern Searching"
        difficulty="Easy"
        description="Simple pattern searching algorithm that checks every position."
        solution={`// Naive Pattern Searching

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

// Naive search with detailed steps
function naiveSearchWithSteps(text, pattern) {
  console.log(\`Searching for "\${pattern}" in "\${text}"\`);
  
  const n = text.length;
  const m = pattern.length;
  const results = [];
  
  for (let i = 0; i <= n - m; i++) {
    console.log(\`\\nChecking position \${i}:\`);
    
    let j = 0;
    let match = true;
    
    while (j < m && text[i + j] === pattern[j]) {
      console.log(\`  \${text[i + j]} === \${pattern[j]} ✓\`);
      j++;
    }
    
    if (j < m) {
      console.log(\`  \${text[i + j]} !== \${pattern[j]} ✗\`);
      match = false;
    }
    
    if (match) {
      console.log(\`  Pattern found at position \${i}\`);
      results.push(i);
    }
  }
  
  console.log(\`\\nTotal matches found: \${results.length}\`);
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
    console.log("Pattern doesn't have distinct characters, using regular naive search");
    return naiveSearch(text, pattern);
  }
  
  console.log("Using improved naive search for distinct character pattern");
  
  let i = 0;
  while (i <= n - m) {
    let j = 0;
    
    while (j < m && text[i + j] === pattern[j]) {
      j++;
    }
    
    if (j === m) {
      results.push(i);
      // Since all characters are distinct, we can skip j characters
      i += j;
    } else {
      // If characters don't match, we can skip j characters
      i += Math.max(1, j);
    }
  }
  
  return results;
}

// Case-insensitive naive search
function naiveSearchCaseInsensitive(text, pattern) {
  const lowerText = text.toLowerCase();
  const lowerPattern = pattern.toLowerCase();
  
  return naiveSearch(lowerText, lowerPattern);
}

// Find all overlapping occurrences
function naiveSearchOverlapping(text, pattern) {
  const n = text.length;
  const m = pattern.length;
  const results = [];
  
  for (let i = 0; i <= n - m; i++) {
    let j = 0;
    
    while (j < m && text[i + j] === pattern[j]) {
      j++;
    }
    
    if (j === m) {
      results.push({
        position: i,
        substring: text.substring(i, i + m)
      });
    }
  }
  
  return results;
}

// Pattern searching with wildcard support
function naiveSearchWithWildcard(text, pattern) {
  const n = text.length;
  const m = pattern.length;
  const results = [];
  
  for (let i = 0; i <= n - m; i++) {
    let j = 0;
    let match = true;
    
    while (j < m && match) {
      if (pattern[j] === '?' || text[i + j] === pattern[j]) {
        j++;
      } else {
        match = false;
      }
    }
    
    if (match && j === m) {
      results.push(i);
    }
  }
  
  return results;
}

// Test cases
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";

console.log(naiveSearch(text, pattern)); // [10]
console.log(improvedNaiveSearch("ABCDEFGH", "BCD")); // [1]
console.log(naiveSearchCaseInsensitive("Hello World", "hello")); // [0]
console.log(naiveSearchWithWildcard("Hello World", "He?lo")); // [0]`}
        explanation="Check every possible starting position in text. For each position, compare characters until mismatch or complete match. Time: O(n*m), Space: O(1)."
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
        solution={`// Improved Naive Pattern Searching for Distinct Characters

function improvedNaiveSearchDistinct(text, pattern) {
  const n = text.length;
  const m = pattern.length;
  const results = [];
  
  // Check if pattern has all distinct characters
  const charSet = new Set(pattern);
  if (charSet.size !== m) {
    console.log("Pattern doesn't have distinct characters, using regular naive search");
    return naiveSearch(text, pattern);
  }
  
  console.log("Pattern has distinct characters, using improved algorithm");
  
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

// Detailed version with explanation
function improvedNaiveSearchDetailed(text, pattern) {
  console.log(\`Improved Naive Search for "\${pattern}" in "\${text}"\`);
  
  const n = text.length;
  const m = pattern.length;
  const results = [];
  
  // Verify distinct characters
  const charSet = new Set(pattern);
  if (charSet.size !== m) {
    console.log("Pattern has repeated characters, falling back to naive search");
    return naiveSearch(text, pattern);
  }
  
  console.log("Pattern has distinct characters - optimization possible");
  
  let i = 0;
  let comparisons = 0;
  
  while (i <= n - m) {
    console.log(\`\\nChecking at position \${i}:\`);
    
    let j = 0;
    while (j < m && text[i + j] === pattern[j]) {
      console.log(\`  \${text[i + j]} === \${pattern[j]} ✓\`);
      j++;
      comparisons++;
    }
    
    if (j === m) {
      console.log(\`  Pattern found at position \${i}\`);
      results.push(i);
      console.log(\`  Skipping \${m} positions (all distinct)\`);
      i += m;
    } else if (j === 0) {
      console.log(\`  No match, moving 1 position\`);
      i++;
      comparisons++;
    } else {
      console.log(\`  Partial match of length \${j}, skipping \${j} positions\`);
      i += j;
      comparisons += j;
    }
  }
  
  console.log(\`\\nTotal comparisons: \${comparisons}\`);
  console.log(\`Matches found: \${results.length}\`);
  
  return results;
}

// Comparison with regular naive search
function compareNaiveAlgorithms(text, pattern) {
  console.log("Comparing Naive vs Improved Naive Search:");
  
  const start1 = performance.now();
  const naiveResults = naiveSearch(text, pattern);
  const naiveTime = performance.now() - start1;
  
  const start2 = performance.now();
  const improvedResults = improvedNaiveSearchDistinct(text, pattern);
  const improvedTime = performance.now() - start2;
  
  console.log(\`\\nNaive Search:\`);
  console.log(\`  Results: [\${naiveResults.join(', ')}]\`);
  console.log(\`  Time: \${naiveTime.toFixed(2)}ms\`);
  
  console.log(\`\\nImproved Naive Search:\`);
  console.log(\`  Results: [\${improvedResults.join(', ')}]\`);
  console.log(\`  Time: \${improvedTime.toFixed(2)}ms\`);
  
  return {
    naive: { results: naiveResults, time: naiveTime },
    improved: { results: improvedResults, time: improvedTime }
  };
}

// Test cases
const text1 = "ABCDEFGHIJKLMNOP";
const pattern1 = "BCD"; // Distinct characters

const text2 = "ABABDABACDABABCABAB";
const pattern2 = "ABABCABAB"; // Repeated characters

console.log(improvedNaiveSearchDistinct(text1, pattern1)); // [1]
console.log(improvedNaiveSearchDistinct(text2, pattern2)); // Falls back to naive
console.log(compareNaiveAlgorithms(text1, pattern1));`}
        explanation="When pattern has distinct characters, after a mismatch at position j, we can skip j positions instead of 1. Time: O(n) for distinct patterns, O(n*m) otherwise."
      />

      <ProblemBlock
        title="10. Rabin Karp Algorithm"
        difficulty="Medium"
        description="Pattern searching using rolling hash technique."
        solution={`// Rabin Karp Algorithm

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

// Rabin Karp with detailed steps
function rabinKarpSearchDetailed(text, pattern, base = 256, mod = 1000000007) {
  console.log(\`Rabin Karp Search for "\${pattern}" in "\${text}"\`);
  
  const n = text.length;
  const m = pattern.length;
  const results = [];
  
  if (m === 0 || m > n) {
    console.log("Invalid pattern length");
    return results;
  }
  
  console.log(\`Text length: \${n}, Pattern length: \${m}\`);
  console.log(\`Base: \${base}, Mod: \${mod}\`);
  
  let patternHash = 0;
  let textHash = 0;
  let h = 1;
  
  // Calculate h = base^(m-1) % mod
  for (let i = 0; i < m - 1; i++) {
    h = (h * base) % mod;
  }
  console.log(\`h = base^(m-1) % mod = \${h}\`);
  
  // Calculate initial hashes
  for (let i = 0; i < m; i++) {
    patternHash = (patternHash * base + pattern.charCodeAt(i)) % mod;
    textHash = (textHash * base + text.charCodeAt(i)) % mod;
  }
  
  console.log(\`Pattern hash: \${patternHash}\`);
  console.log(\`Initial text hash: \${textHash}\`);
  
  // Slide the pattern
  for (let i = 0; i <= n - m; i++) {
    console.log(\`\\nWindow at position \${i}: "\${text.substring(i, i + m)}"\`);
    console.log(\`Text hash: \${textHash}, Pattern hash: \${patternHash}\`);
    
    if (patternHash === textHash) {
      console.log("Hash match! Verifying characters...");
      
      let j = 0;
      while (j < m && text[i + j] === pattern[j]) {
        j++;
      }
      
      if (j === m) {
        console.log(\`Pattern found at position \${i}\`);
        results.push(i);
      } else {
        console.log("Hash collision - no actual match");
      }
    } else {
      console.log("Hash mismatch");
    }
    
    // Calculate next window hash
    if (i < n - m) {
      const oldChar = text.charCodeAt(i);
      const newChar = text.charCodeAt(i + m);
      
      textHash = (base * (textHash - oldChar * h) + newChar) % mod;
      
      if (textHash < 0) {
        textHash += mod;
      }
      
      console.log(\`Next hash: \${textHash}\`);
    }
  }
  
  console.log(\`\\nTotal matches found: \${results.length}\`);
  return results;
}

// Multiple pattern search using Rabin Karp
function rabinKarpMultiplePatterns(text, patterns, base = 256, mod = 1000000007) {
  const results = {};
  
  for (const pattern of patterns) {
    results[pattern] = rabinKarpSearch(text, pattern, base, mod);
  }
  
  return results;
}

// Rabin Karp with different hash functions
function rabinKarpWithCustomHash(text, pattern, hashFunction) {
  const n = text.length;
  const m = pattern.length;
  const results = [];
  
  if (m === 0 || m > n) return results;
  
  const patternHash = hashFunction(pattern);
  let textHash = hashFunction(text.substring(0, m));
  
  if (patternHash === textHash && text.substring(0, m) === pattern) {
    results.push(0);
  }
  
  for (let i = 1; i <= n - m; i++) {
    textHash = hashFunction(text.substring(i, i + m));
    
    if (patternHash === textHash) {
      if (text.substring(i, i + m) === pattern) {
        results.push(i);
      }
    }
  }
  
  return results;
}

// Simple hash function
function simpleHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = hash * 31 + str.charCodeAt(i);
  }
  return hash;
}

// Test cases
const text = "GEEKS FOR GEEKS";
const pattern = "GEEK";

console.log(rabinKarpSearch(text, pattern)); // [0, 10]
console.log(rabinKarpSearchDetailed(text, pattern));
console.log(rabinKarpMultiplePatterns(text, ["GEEK", "FOR"]));
console.log(rabinKarpWithCustomHash(text, pattern, simpleHash));`}
        explanation="Use rolling hash to compare pattern with text windows. Calculate hash for pattern, then slide window and update hash in O(1). Time: O(n+m) average, O(n*m) worst case."
      />

      <ProblemBlock
        title="11. KMP Algorithm (Part 1: Constructing LPS Array)"
        difficulty="Hard"
        description="Build the Longest Proper Prefix which is also Suffix (LPS) array for KMP algorithm."
        solution={`// KMP Algorithm - Part 1: Constructing LPS Array

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

// LPS construction with detailed explanation
function computeLPSDetailed(pattern) {
  console.log(\`Computing LPS array for pattern: "\${pattern}"\`);
  
  const m = pattern.length;
  const lps = new Array(m);
  lps[0] = 0;
  
  let len = 0;
  let i = 1;
  
  console.log(\`\\nLPS[0] = 0 (always)\`);
  
  while (i < m) {
    console.log(\`\\nProcessing position \${i} (character '\${pattern[i]}'):\`);
    console.log(\`Current len = \${len}, comparing pattern[\${i}] with pattern[\${len}]\`);
    
    if (pattern[i] === pattern[len]) {
      len++;
      lps[i] = len;
      console.log(\`Match! pattern[\${i}] === pattern[\${len-1}], len = \${len}, LPS[\${i}] = \${len}\`);
      i++;
    } else {
      if (len !== 0) {
        console.log(\`No match, but len > 0. Setting len = LPS[\${len-1}] = \${lps[len-1]}\`);
        len = lps[len - 1];
        // Don't increment i
      } else {
        console.log(\`No match and len = 0. LPS[\${i}] = 0\`);
        lps[i] = 0;
        i++;
      }
    }
  }
  
  console.log(\`\\nFinal LPS array: [\${lps.join(', ')}]\`);
  return lps;
}

// Alternative LPS construction (more intuitive)
function computeLPSAlternative(pattern) {
  const m = pattern.length;
  const lps = new Array(m).fill(0);
  
  for (let i = 1; i < m; i++) {
    // Find longest proper prefix that is also a suffix
    let j = lps[i - 1];
    
    while (j > 0 && pattern[i] !== pattern[j]) {
      j = lps[j - 1];
    }
    
    if (pattern[i] === pattern[j]) {
      j++;
    }
    
    lps[i] = j;
  }
  
  return lps;
}

// Visualize LPS array
function visualizeLPS(pattern) {
  console.log(\`Visualizing LPS array for: "\${pattern}"\`);
  
  const lps = computeLPS(pattern);
  
  for (let i = 0; i < pattern.length; i++) {
    const prefix = pattern.substring(0, lps[i]);
    const suffix = pattern.substring(i - lps[i] + 1, i + 1);
    
    console.log(\`Position \${i}: '\${pattern[i]}' -> LPS[\${i}] = \${lps[i]}\`);
    if (lps[i] > 0) {
      console.log(\`  Longest prefix: "\${prefix}"\`);
      console.log(\`  Longest suffix: "\${suffix}"\`);
    }
  }
  
  return lps;
}

// Check if LPS array is correct
function verifyLPS(pattern, lps) {
  console.log(\`Verifying LPS array for: "\${pattern}"\`);
  
  for (let i = 0; i < pattern.length; i++) {
    const expected = findLongestProperPrefixSuffix(pattern.substring(0, i + 1));
    console.log(\`Position \${i}: Expected = \${expected}, Got = \${lps[i]}\`);
    
    if (expected !== lps[i]) {
      console.log(\`❌ Mismatch at position \${i}\`);
      return false;
    }
  }
  
  console.log(\`✅ LPS array is correct\`);
  return true;
}

function findLongestProperPrefixSuffix(str) {
  const n = str.length;
  for (let len = n - 1; len > 0; len--) {
    const prefix = str.substring(0, len);
    const suffix = str.substring(n - len);
    if (prefix === suffix) {
      return len;
    }
  }
  return 0;
}

// Test cases
const patterns = ["AAAA", "ABCDE", "AABAACAABAA", "AAACAAAAAC"];

patterns.forEach(pattern => {
  console.log(\`\\n=== Pattern: "\${pattern}" ===\`);
  const lps = computeLPS(pattern);
  console.log(\`LPS: [\${lps.join(', ')}]\`);
  verifyLPS(pattern, lps);
});`}
        explanation="LPS[i] stores the length of the longest proper prefix of pattern[0..i] that is also a suffix. Use two pointers: one for pattern, one for current match length."
      />

      <ProblemBlock
        title="12. KMP Algorithm (Part 2: Complete Algorithm)"
        difficulty="Hard"
        description="Complete KMP algorithm using the LPS array for pattern searching."
        solution={`// KMP Algorithm - Part 2: Complete Algorithm

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

// KMP with detailed steps
function kmpSearchDetailed(text, pattern) {
  console.log(\`KMP Search for "\${pattern}" in "\${text}"\`);
  
  const n = text.length;
  const m = pattern.length;
  const results = [];
  
  if (m === 0) {
    console.log("Empty pattern");
    return results;
  }
  
  // Compute LPS array
  console.log(\`\\nStep 1: Computing LPS array\`);
  const lps = computeLPS(pattern);
  console.log(\`LPS: [\${lps.join(', ')}]\`);
  
  let i = 0; // Text index
  let j = 0; // Pattern index
  let comparisons = 0;
  
  console.log(\`\\nStep 2: Pattern matching\`);
  
  while (i < n) {
    console.log(\`\\nText[\${i}] = '\${text[i]}', Pattern[\${j}] = '\${pattern[j]}'\`);
    
    if (pattern[j] === text[i]) {
      console.log(\`Match! Moving both pointers\`);
      i++;
      j++;
      comparisons++;
      
      if (j === m) {
        console.log(\`🎉 Pattern found at position \${i - j}\`);
        results.push(i - j);
        console.log(\`Resetting j to LPS[\${j-1}] = \${lps[j-1]}\`);
        j = lps[j - 1];
      }
    } else {
      console.log(\`Mismatch\`);
      comparisons++;
      
      if (j !== 0) {
        console.log(\`j > 0, resetting j to LPS[\${j-1}] = \${lps[j-1]}\`);
        j = lps[j - 1];
        // Don't increment i
      } else {
        console.log(\`j = 0, moving text pointer\`);
        i++;
      }
    }
  }
  
  console.log(\`\\nTotal comparisons: \${comparisons}\`);
  console.log(\`Matches found: \${results.length}\`);
  
  return results;
}

// KMP for multiple patterns
function kmpSearchMultiple(text, patterns) {
  const results = {};
  
  for (const pattern of patterns) {
    results[pattern] = kmpSearch(text, pattern);
  }
  
  return results;
}

// KMP with preprocessing optimization
function kmpSearchOptimized(text, pattern) {
  const n = text.length;
  const m = pattern.length;
  const results = [];
  
  if (m === 0) return results;
  
  // Precompute LPS array
  const lps = computeLPS(pattern);
  
  let i = 0;
  let j = 0;
  
  while (i < n) {
    while (j > 0 && pattern[j] !== text[i]) {
      j = lps[j - 1];
    }
    
    if (pattern[j] === text[i]) {
      j++;
    }
    
    if (j === m) {
      results.push(i - j + 1);
      j = lps[j - 1];
    }
    
    i++;
  }
  
  return results;
}

// Compare KMP with other algorithms
function comparePatternSearching(text, pattern) {
  console.log(\`Comparing pattern searching algorithms for "\${pattern}" in "\${text}"\`);
  
  // Naive
  const start1 = performance.now();
  const naiveResults = naiveSearch(text, pattern);
  const naiveTime = performance.now() - start1;
  
  // Rabin Karp
  const start2 = performance.now();
  const rabinResults = rabinKarpSearch(text, pattern);
  const rabinTime = performance.now() - start2;
  
  // KMP
  const start3 = performance.now();
  const kmpResults = kmpSearch(text, pattern);
  const kmpTime = performance.now() - start3;
  
  console.log(\`\\nResults:\`);
  console.log(\`Naive: [\${naiveResults.join(', ')}] - \${naiveTime.toFixed(2)}ms\`);
  console.log(\`Rabin-Karp: [\${rabinResults.join(', ')}] - \${rabinTime.toFixed(2)}ms\`);
  console.log(\`KMP: [\${kmpResults.join(', ')}] - \${kmpTime.toFixed(2)}ms\`);
  
  return {
    naive: { results: naiveResults, time: naiveTime },
    rabinKarp: { results: rabinResults, time: rabinTime },
    kmp: { results: kmpResults, time: kmpTime }
  };
}

// Test cases
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";

console.log(kmpSearch(text, pattern)); // [10]
console.log(kmpSearchDetailed(text, pattern));
console.log(comparePatternSearching(text, pattern));`}
        explanation="Use LPS array to avoid redundant comparisons. When mismatch occurs, reset pattern pointer using LPS value. Time: O(n+m), Space: O(m)."
      />

      <ProblemBlock
        title="13. Check if Strings are Rotations"
        difficulty="Easy"
        description="Check if one string is a rotation of another string."
        solution={`// Check if Strings are Rotations

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

// Alternative approach using indexOf
function areRotationsIndexOf(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  
  const concatenated = str1 + str1;
  return concatenated.indexOf(str2) !== -1;
}

// Find all rotations of a string
function findAllRotations(str) {
  const rotations = [];
  const n = str.length;
  
  for (let i = 0; i < n; i++) {
    const rotation = str.substring(i) + str.substring(0, i);
    rotations.push(rotation);
  }
  
  return rotations;
}

// Find minimum rotations to get lexicographically smallest string
function findMinRotations(str) {
  const n = str.length;
  let minRotation = str;
  let minIndex = 0;
  
  for (let i = 1; i < n; i++) {
    const rotation = str.substring(i) + str.substring(0, i);
    if (rotation < minRotation) {
      minRotation = rotation;
      minIndex = i;
    }
  }
  
  return { rotation: minRotation, index: minIndex };
}

// Check if strings are rotations with detailed steps
function areRotationsDetailed(str1, str2) {
  console.log(\`Checking if "\${str1}" and "\${str2}" are rotations\`);
  
  if (str1.length !== str2.length) {
    console.log(\`Lengths don't match: \${str1.length} vs \${str2.length}\`);
    return false;
  }
  
  console.log(\`Lengths match: \${str1.length}\`);
  
  const concatenated = str1 + str1;
  console.log(\`Concatenated string: "\${concatenated}"\`);
  
  const isRotation = concatenated.includes(str2);
  console.log(\`"\${str2}" is substring of concatenated string: \${isRotation}\`);
  
  if (isRotation) {
    const index = concatenated.indexOf(str2);
    console.log(\`Found at index \${index} in concatenated string\`);
  }
  
  return isRotation;
}

// Find rotation angle between two strings
function findRotationAngle(str1, str2) {
  if (!areRotations(str1, str2)) {
    return -1; // Not rotations
  }
  
  const n = str1.length;
  const concatenated = str1 + str1;
  const index = concatenated.indexOf(str2);
  
  return index; // Number of positions to rotate str1 to get str2
}

// Test cases
const str1 = "ABCD";
const str2 = "CDAB";
const str3 = "ACBD";

console.log(areRotations(str1, str2)); // true
console.log(areRotations(str1, str3)); // false
console.log(findAllRotations("ABCD")); // ["ABCD", "BCDA", "CDAB", "DABC"]
console.log(findMinRotations("BCDA")); // { rotation: "ABCD", index: 3 }
console.log(areRotationsDetailed(str1, str2));`}
        explanation="Concatenate first string with itself, then check if second string is a substring. Time: O(n), Space: O(n)."
      />

      <ProblemBlock
        title="14. Anagram Search"
        difficulty="Medium"
        description="Find all anagrams of a pattern in a text string."
        solution={`// Anagram Search

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

// Anagram search with detailed steps
function anagramSearchDetailed(text, pattern) {
  console.log(\`Searching for anagrams of "\${pattern}" in "\${text}"\`);
  
  const textLen = text.length;
  const patternLen = pattern.length;
  const result = [];
  
  if (patternLen > textLen) {
    console.log("Pattern longer than text");
    return result;
  }
  
  // Count pattern characters
  const patternCount = {};
  for (const char of pattern) {
    patternCount[char] = (patternCount[char] || 0) + 1;
  }
  console.log(\`Pattern character count:\`, patternCount);
  
  // Initialize window
  const windowCount = {};
  for (let i = 0; i < patternLen; i++) {
    windowCount[text[i]] = (windowCount[text[i]] || 0) + 1;
  }
  console.log(\`Initial window "\${text.substring(0, patternLen)}" count:\`, windowCount);
  
  if (isEqual(patternCount, windowCount)) {
    console.log(\`✅ Anagram found at position 0\`);
    result.push(0);
  }
  
  // Slide window
  for (let i = patternLen; i < textLen; i++) {
    const newChar = text[i];
    const oldChar = text[i - patternLen];
    
    console.log(\`\\nSliding window: removing '\${oldChar}', adding '\${newChar}'\`);
    
    // Add new character
    windowCount[newChar] = (windowCount[newChar] || 0) + 1;
    
    // Remove old character
    windowCount[oldChar]--;
    if (windowCount[oldChar] === 0) {
      delete windowCount[oldChar];
    }
    
    console.log(\`Window "\${text.substring(i - patternLen + 1, i + 1)}" count:\`, windowCount);
    
    if (isEqual(patternCount, windowCount)) {
      const pos = i - patternLen + 1;
      console.log(\`✅ Anagram found at position \${pos}\`);
      result.push(pos);
    }
  }
  
  console.log(\`\\nTotal anagrams found: \${result.length}\`);
  return result;
}

// Find all anagrams with their substrings
function anagramSearchWithSubstrings(text, pattern) {
  const result = [];
  const textLen = text.length;
  const patternLen = pattern.length;
  
  if (patternLen > textLen) return result;
  
  const patternCount = {};
  for (const char of pattern) {
    patternCount[char] = (patternCount[char] || 0) + 1;
  }
  
  const windowCount = {};
  for (let i = 0; i < patternLen; i++) {
    windowCount[text[i]] = (windowCount[text[i]] || 0) + 1;
  }
  
  if (isEqual(patternCount, windowCount)) {
    result.push({
      position: 0,
      substring: text.substring(0, patternLen)
    });
  }
  
  for (let i = patternLen; i < textLen; i++) {
    windowCount[text[i]] = (windowCount[text[i]] || 0) + 1;
    windowCount[text[i - patternLen]]--;
    
    if (windowCount[text[i - patternLen]] === 0) {
      delete windowCount[text[i - patternLen]];
    }
    
    if (isEqual(patternCount, windowCount)) {
      const pos = i - patternLen + 1;
      result.push({
        position: pos,
        substring: text.substring(pos, pos + patternLen)
      });
    }
  }
  
  return result;
}

// Test cases
const text = "BACDGABCDA";
const pattern = "ABCD";

console.log(anagramSearch(text, pattern)); // [0, 5, 6]
console.log(anagramSearchDetailed(text, pattern));
console.log(anagramSearchWithSubstrings(text, pattern));`}
        explanation="Use sliding window technique. Count characters in pattern, then slide window in text and maintain character count. Time: O(n), Space: O(1) for fixed alphabet."
      />

      <ProblemBlock
        title="15. Lexicographic Rank of a String"
        difficulty="Hard"
        description="Find the lexicographic rank of a string among all its permutations."
        solution={`// Lexicographic Rank of a String

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

// Lexicographic rank with detailed steps
function lexicographicRankDetailed(str) {
  console.log(\`Finding lexicographic rank of "\${str}"\`);
  
  const n = str.length;
  let rank = 1;
  
  // Precompute factorials
  const fact = new Array(n + 1);
  fact[0] = 1;
  for (let i = 1; i <= n; i++) {
    fact[i] = fact[i - 1] * i;
  }
  
  console.log(\`Factorials: [\${fact.join(', ')}]\`);
  
  // Count frequency of each character
  const count = new Array(256).fill(0);
  for (let i = 0; i < n; i++) {
    count[str.charCodeAt(i)]++;
  }
  
  console.log(\`Character frequencies initialized\`);
  
  // Process each character
  for (let i = 0; i < n; i++) {
    const currentChar = str[i];
    const charCode = str.charCodeAt(i);
    
    console.log(\`\\nProcessing position \${i}: '\${currentChar}'\`);
    
    // Count smaller characters
    let smaller = 0;
    for (let j = 0; j < charCode; j++) {
      smaller += count[j];
    }
    
    console.log(\`Characters smaller than '\${currentChar}': \${smaller}\`);
    console.log(\`Remaining positions: \${n - 1 - i}\`);
    console.log(\`Factorial of remaining positions: \${fact[n - 1 - i]}\`);
    
    const permutations = smaller * fact[n - 1 - i];
    console.log(\`Permutations with smaller characters: \${permutations}\`);
    
    rank += permutations;
    console.log(\`Current rank: \${rank}\`);
    
    // Decrease count of current character
    count[charCode]--;
    console.log(\`Updated count for '\${currentChar}': \${count[charCode]}\`);
  }
  
  console.log(\`\\nFinal lexicographic rank: \${rank}\`);
  return rank;
}

// Find string at given lexicographic rank
function stringAtRank(chars, rank) {
  const n = chars.length;
  const sortedChars = [...chars].sort();
  
  // Precompute factorials
  const fact = new Array(n + 1);
  fact[0] = 1;
  for (let i = 1; i <= n; i++) {
    fact[i] = fact[i - 1] * i;
  }
  
  let result = "";
  let remaining = rank - 1; // Convert to 0-based
  
  for (let i = 0; i < n; i++) {
    const permutations = fact[n - 1 - i];
    const index = Math.floor(remaining / permutations);
    
    result += sortedChars[index];
    sortedChars.splice(index, 1);
    remaining %= permutations;
  }
  
  return result;
}

// Find all permutations in lexicographic order
function allPermutationsLexicographic(str) {
  const chars = str.split('').sort();
  const n = chars.length;
  const fact = new Array(n + 1);
  fact[0] = 1;
  
  for (let i = 1; i <= n; i++) {
    fact[i] = fact[i - 1] * i;
  }
  
  const totalPermutations = fact[n];
  const permutations = [];
  
  for (let rank = 1; rank <= totalPermutations; rank++) {
    permutations.push(stringAtRank([...chars], rank));
  }
  
  return permutations;
}

// Test cases
const str1 = "STRING";
const str2 = "ABC";

console.log(lexicographicRank(str1)); // 598
console.log(lexicographicRankDetailed(str2)); // Detailed steps for "ABC"
console.log(stringAtRank(["A", "B", "C"], 6)); // "CBA"
console.log(allPermutationsLexicographic("ABC")); // All 6 permutations`}
        explanation="For each position, count characters smaller than current character on the right, multiply by factorial of remaining positions. Time: O(n), Space: O(1)."
      />

      <ProblemBlock
        title="16. Longest Substring with Distinct Characters"
        difficulty="Medium"
        description="Find the length of the longest substring with all distinct characters."
        solution={`// Longest Substring with Distinct Characters

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

// Find the actual longest distinct substring
function findLongestDistinctSubstring(str) {
  const n = str.length;
  let maxLength = 0;
  let maxStart = 0;
  let left = 0;
  const charSet = new Set();
  
  for (let right = 0; right < n; right++) {
    while (charSet.has(str[right])) {
      charSet.delete(str[left]);
      left++;
    }
    
    charSet.add(str[right]);
    
    if (right - left + 1 > maxLength) {
      maxLength = right - left + 1;
      maxStart = left;
    }
  }
  
  return {
    substring: str.substring(maxStart, maxStart + maxLength),
    length: maxLength,
    start: maxStart,
    end: maxStart + maxLength - 1
  };
}

// Using sliding window with character count
function longestDistinctSubstringCount(str) {
  const n = str.length;
  let maxLength = 0;
  let left = 0;
  const charCount = {};
  
  for (let right = 0; right < n; right++) {
    charCount[str[right]] = (charCount[str[right]] || 0) + 1;
    
    // Shrink window if we have duplicate characters
    while (charCount[str[right]] > 1) {
      charCount[str[left]]--;
      left++;
    }
    
    maxLength = Math.max(maxLength, right - left + 1);
  }
  
  return maxLength;
}

// Find all distinct substrings of maximum length
function findAllLongestDistinctSubstrings(str) {
  const n = str.length;
  let maxLength = 0;
  const result = [];
  let left = 0;
  const charSet = new Set();
  
  for (let right = 0; right < n; right++) {
    while (charSet.has(str[right])) {
      charSet.delete(str[left]);
      left++;
    }
    
    charSet.add(str[right]);
    
    const currentLength = right - left + 1;
    
    if (currentLength > maxLength) {
      maxLength = currentLength;
      result.length = 0; // Clear previous results
      result.push({
        substring: str.substring(left, right + 1),
        start: left,
        end: right,
        length: currentLength
      });
    } else if (currentLength === maxLength) {
      result.push({
        substring: str.substring(left, right + 1),
        start: left,
        end: right,
        length: currentLength
      });
    }
  }
  
  return result;
}

// Detailed version with step-by-step explanation
function longestDistinctSubstringDetailed(str) {
  console.log(\`Finding longest substring with distinct characters in "\${str}"\`);
  
  const n = str.length;
  let maxLength = 0;
  let left = 0;
  const charSet = new Set();
  
  for (let right = 0; right < n; right++) {
    console.log(\`\\nProcessing character '\${str[right]}' at position \${right}\`);
    
    // Handle duplicates
    while (charSet.has(str[right])) {
      console.log(\`  Character '\${str[right]}' already exists, removing '\${str[left]}' from left\`);
      charSet.delete(str[left]);
      left++;
    }
    
    // Add current character
    charSet.add(str[right]);
    console.log(\`  Added '\${str[right]}', current set: [\${Array.from(charSet).join(', ')}]\`);
    
    // Update maximum
    const currentLength = right - left + 1;
    console.log(\`  Current window: "\${str.substring(left, right + 1)}" (length: \${currentLength})\`);
    
    if (currentLength > maxLength) {
      maxLength = currentLength;
      console.log(\`  New maximum length: \${maxLength}\`);
    }
  }
  
  console.log(\`\\nFinal result: \${maxLength}\`);
  return maxLength;
}

// Test cases
const str1 = "abcabcbb";
const str2 = "bbbbb";
const str3 = "pwwkew";

console.log(longestDistinctSubstring(str1)); // 3
console.log(findLongestDistinctSubstring(str1)); // { substring: "abc", length: 3, start: 0, end: 2 }
console.log(findAllLongestDistinctSubstrings(str1)); // All substrings of length 3
console.log(longestDistinctSubstringDetailed(str1));`}
        explanation="Use sliding window technique with Set to track characters. Expand right pointer, shrink left when duplicate found. Time: O(n), Space: O(min(m,n)) where m is charset size."
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
        className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors mb-4"
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
