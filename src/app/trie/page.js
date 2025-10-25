"use client";

import { useState } from "react";

export default function TriePage() {
  const [activeSection, setActiveSection] = useState("introduction");

  const sections = [
    { id: "introduction", title: "Introduction", icon: "📚" },
    { id: "representation", title: "Representation", icon: "🏗️" },
    { id: "operations", title: "Operations", icon: "⚙️" },
    { id: "applications", title: "Applications", icon: "🎯" },
    { id: "advanced", title: "Advanced", icon: "⚡" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Trie Data Structure Mastery
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Master Trie data structure: Introduction, Representation, Search,
            Insert, Delete, and Advanced Applications
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeSection === section.id
                  ? "bg-green-600 text-white shadow-lg"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              <span className="mr-2">{section.icon}</span>
              {section.title}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto">
          {activeSection === "introduction" && <IntroductionSection />}
          {activeSection === "representation" && <RepresentationSection />}
          {activeSection === "operations" && <OperationsSection />}
          {activeSection === "applications" && <ApplicationsSection />}
          {activeSection === "advanced" && <AdvancedSection />}
        </div>
      </div>
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

  return (
    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <div className="flex items-center gap-3">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
              difficulty === "Easy"
                ? "bg-green-500/20 text-green-300"
                : difficulty === "Medium"
                ? "bg-yellow-500/20 text-yellow-300"
                : "bg-red-500/20 text-red-300"
            }`}
          >
            {difficulty}
          </span>
          <button
            onClick={() => setShowSolution(!showSolution)}
            className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-sm font-semibold transition-colors"
          >
            {showSolution ? "Hide Solution" : "Show Solution"}
          </button>
        </div>
      </div>

      <p className="text-gray-300 mb-4">{description}</p>

      {showSolution && (
        <div className="space-y-4">
          <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
            <pre className="text-green-400 text-sm">
              <code>{solution}</code>
            </pre>
          </div>
          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
            <h4 className="text-blue-200 font-semibold mb-2">Explanation:</h4>
            <p className="text-blue-100 text-sm">{explanation}</p>
          </div>
        </div>
      )}
    </div>
  );
}

function IntroductionSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-white mb-6">
        Trie Data Structure Introduction
      </h2>

      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h3 className="text-2xl font-bold text-white mb-4">What is a Trie?</h3>
        <p className="text-gray-300 mb-4">
          A Trie (pronounced "try") is a tree-like data structure that is used
          to store a collection of strings. It's also known as a prefix tree or
          digital tree. The name "Trie" comes from the word "retrieval."
        </p>

        <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
          <h4 className="text-xl font-semibold text-green-200 mb-3">
            Key Characteristics:
          </h4>
          <ul className="space-y-2 text-green-100">
            <li>
              • <strong>Tree Structure:</strong> Each node represents a
              character
            </li>
            <li>
              • <strong>Root to Leaf Paths:</strong> Each path from root to leaf
              represents a string
            </li>
            <li>
              • <strong>Prefix Sharing:</strong> Common prefixes are shared
              among strings
            </li>
            <li>
              • <strong>Efficient Search:</strong> O(m) time complexity for
              search, insert, delete
            </li>
            <li>
              • <strong>Space Efficient:</strong> For strings with common
              prefixes
            </li>
          </ul>
        </div>

        <div className="mt-6 bg-gray-700 rounded-lg p-4">
          <h4 className="text-lg font-semibold text-white mb-3">
            Trie vs Other Data Structures:
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-600">
                  <th className="text-left py-2 text-white">Aspect</th>
                  <th className="text-left py-2 text-white">Trie</th>
                  <th className="text-left py-2 text-white">Hash Table</th>
                  <th className="text-left py-2 text-white">
                    Binary Search Tree
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-700">
                  <td className="py-2 text-gray-300">Search Time</td>
                  <td className="py-2 text-green-400">O(m)</td>
                  <td className="py-2 text-green-400">O(1) average</td>
                  <td className="py-2 text-yellow-400">O(log n)</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-2 text-gray-300">Prefix Search</td>
                  <td className="py-2 text-green-400">Excellent</td>
                  <td className="py-2 text-red-400">Poor</td>
                  <td className="py-2 text-yellow-400">Moderate</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-2 text-gray-300">Space Usage</td>
                  <td className="py-2 text-yellow-400">
                    O(ALPHABET_SIZE × N × M)
                  </td>
                  <td className="py-2 text-green-400">O(N × M)</td>
                  <td className="py-2 text-green-400">O(N × M)</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-2 text-gray-300">Use Case</td>
                  <td className="py-2 text-blue-400">
                    String operations, autocomplete
                  </td>
                  <td className="py-2 text-blue-400">
                    General key-value storage
                  </td>
                  <td className="py-2 text-blue-400">
                    Sorted data, range queries
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <ProblemBlock
        title="Trie Data Structure (Introduction)"
        difficulty="Easy"
        description="Basic implementation of Trie data structure with node definition and fundamental concepts."
        solution={`// Trie Data Structure - Introduction

class TrieNode {
  constructor() {
    this.children = {}; // Map of character to child nodes
    this.isEndOfWord = false; // Marks end of a word
    this.count = 0; // Count of words ending at this node
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
    console.log("Trie initialized with root node");
  }

  // Insert a word into the trie
  insert(word) {
    console.log("\\n=== Inserting word: '" + word + "' ===");
    
    let current = this.root;
    console.log("Starting from root node");
    
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      console.log("\\nProcessing character: '" + char + "' (position " + i + ")");
      
      // If character doesn't exist, create new node
      if (!current.children[char]) {
        current.children[char] = new TrieNode();
        console.log("  Created new node for character '" + char + "'");
      } else {
        console.log("  Found existing node for character '" + char + "'");
      }
      
      // Move to child node
      current = current.children[char];
      console.log("  Moved to child node");
    }
    
    // Mark end of word
    current.isEndOfWord = true;
    current.count++;
    console.log("  Marked end of word. Count: " + current.count);
  }

  // Search for a word in the trie
  search(word) {
    console.log("\\n=== Searching for word: '" + word + "' ===");
    
    let current = this.root;
    console.log("Starting from root node");
    
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      console.log("\\nProcessing character: '" + char + "' (position " + i + ")");
      
      if (!current.children[char]) {
        console.log("  Character '" + char + "' not found, word doesn't exist");
        return false;
      }
      
      current = current.children[char];
      console.log("  Found character '" + char + "', moved to child node");
    }
    
    const found = current.isEndOfWord;
    console.log("  Reached end of path. isEndOfWord: " + found);
    return found;
  }

  // Check if any word starts with given prefix
  startsWith(prefix) {
    console.log("\\n=== Checking prefix: '" + prefix + "' ===");
    
    let current = this.root;
    console.log("Starting from root node");
    
    for (let i = 0; i < prefix.length; i++) {
      const char = prefix[i];
      console.log("\\nProcessing character: '" + char + "' (position " + i + ")");
      
      if (!current.children[char]) {
        console.log("  Character '" + char + "' not found, prefix doesn't exist");
        return false;
      }
      
      current = current.children[char];
      console.log("  Found character '" + char + "', moved to child node");
    }
    
    console.log("  Prefix found");
    return true;
  }

  // Print all words in the trie
  printAllWords() {
    console.log("\\n=== Printing all words in trie ===");
    const words = [];
    this._printAllWordsHelper(this.root, "", words);
    console.log("All words: " + words.join(", "));
    return words;
  }

  _printAllWordsHelper(node, currentWord, words) {
    if (node.isEndOfWord) {
      words.push(currentWord);
      console.log("  Found word: '" + currentWord + "'");
    }
    
    for (const [char, childNode] of Object.entries(node.children)) {
      this._printAllWordsHelper(childNode, currentWord + char, words);
    }
  }
}

// Test the Trie
console.log("=== Testing Trie Data Structure ===");
const trie = new Trie();

// Insert words
trie.insert("cat");
trie.insert("car");
trie.insert("card");
trie.insert("care");
trie.insert("careful");
trie.insert("carefully");

// Search words
console.log("\\n=== Testing Search ===");
console.log("Search 'cat':", trie.search("cat"));
console.log("Search 'car':", trie.search("car"));
console.log("Search 'care':", trie.search("care"));
console.log("Search 'careful':", trie.search("careful"));
console.log("Search 'carefully':", trie.search("carefully"));
console.log("Search 'carpet':", trie.search("carpet"));

// Test prefix search
console.log("\\n=== Testing Prefix Search ===");
console.log("Starts with 'ca':", trie.startsWith("ca"));
console.log("Starts with 'car':", trie.startsWith("car"));
console.log("Starts with 'care':", trie.startsWith("care"));
console.log("Starts with 'xyz':", trie.startsWith("xyz"));

// Print all words
trie.printAllWords();`}
        explanation="Trie is a tree-like data structure where each node represents a character. The root to leaf path represents a complete word. Common prefixes are shared, making it efficient for string operations."
      />
    </div>
  );
}

function RepresentationSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-white mb-6">
        Trie Representation, Search and Insert
      </h2>

      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h3 className="text-2xl font-bold text-white mb-4">
          Trie Node Representation
        </h3>
        <p className="text-gray-300 mb-4">A Trie node typically contains:</p>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
          <li>
            <strong>Children:</strong> Array or hash map of child nodes (one for
            each possible character)
          </li>
          <li>
            <strong>isEndOfWord:</strong> Boolean flag indicating if this node
            represents end of a word
          </li>
          <li>
            <strong>Additional Data:</strong> Can store frequency, meaning, or
            other metadata
          </li>
        </ul>

        <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
          <h4 className="text-xl font-semibold text-blue-200 mb-3">
            Memory Representation:
          </h4>
          <div className="bg-gray-900 rounded-lg p-4">
            <pre className="text-green-400 text-sm">
              {`// Array-based representation (for fixed alphabet)
class TrieNode {
  constructor() {
    this.children = new Array(26).fill(null); // For lowercase a-z
    this.isEndOfWord = false;
  }
}

// Hash map-based representation (for any characters)
class TrieNode {
  constructor() {
    this.children = {}; // Map of character to child nodes
    this.isEndOfWord = false;
  }
}`}
            </pre>
          </div>
        </div>
      </div>

      <ProblemBlock
        title="Trie (Representation, Search and Insert)"
        difficulty="Medium"
        description="Complete implementation of Trie with detailed representation, search, and insert operations."
        solution={`// Trie - Complete Implementation with Representation, Search and Insert

class TrieNode {
  constructor() {
    this.children = {}; // Hash map for children
    this.isEndOfWord = false; // End of word marker
    this.frequency = 0; // Frequency of word ending at this node
    this.prefixCount = 0; // Count of words with this prefix
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
    this.totalWords = 0;
    console.log("Trie initialized with root node");
  }

  // Insert a word into the trie
  insert(word) {
    console.log("\\n=== Inserting word: '" + word + "' ===");
    
    if (!word || word.length === 0) {
      console.log("Empty word, cannot insert");
      return false;
    }
    
    let current = this.root;
    console.log("Starting from root node");
    
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      console.log("\\nProcessing character: '" + char + "' (position " + i + ")");
      
      // If character doesn't exist, create new node
      if (!current.children[char]) {
        current.children[char] = new TrieNode();
        console.log("  Created new node for character '" + char + "'");
      } else {
        console.log("  Found existing node for character '" + char + "'");
      }
      
      // Move to child node and increment prefix count
      current = current.children[char];
      current.prefixCount++;
      console.log("  Moved to child node, prefix count: " + current.prefixCount);
    }
    
    // Mark end of word and update frequency
    if (!current.isEndOfWord) {
      this.totalWords++;
      console.log("  New word added, total words: " + this.totalWords);
    }
    
    current.isEndOfWord = true;
    current.frequency++;
    console.log("  Marked end of word, frequency: " + current.frequency);
    
    return true;
  }

  // Search for a word in the trie
  search(word) {
    console.log("\\n=== Searching for word: '" + word + "' ===");
    
    if (!word || word.length === 0) {
      console.log("Empty word, not found");
      return false;
    }
    
    let current = this.root;
    console.log("Starting from root node");
    
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      console.log("\\nProcessing character: '" + char + "' (position " + i + ")");
      
      if (!current.children[char]) {
        console.log("  Character '" + char + "' not found, word doesn't exist");
        return false;
      }
      
      current = current.children[char];
      console.log("  Found character '" + char + "', moved to child node");
    }
    
    const found = current.isEndOfWord;
    console.log("  Reached end of path. isEndOfWord: " + found);
    if (found) {
      console.log("  Word frequency: " + current.frequency);
    }
    return found;
  }

  // Check if any word starts with given prefix
  startsWith(prefix) {
    console.log("\\n=== Checking prefix: '" + prefix + "' ===");
    
    if (!prefix || prefix.length === 0) {
      console.log("Empty prefix, all words start with empty string");
      return true;
    }
    
    let current = this.root;
    console.log("Starting from root node");
    
    for (let i = 0; i < prefix.length; i++) {
      const char = prefix[i];
      console.log("\\nProcessing character: '" + char + "' (position " + i + ")");
      
      if (!current.children[char]) {
        console.log("  Character '" + char + "' not found, prefix doesn't exist");
        return false;
      }
      
      current = current.children[char];
      console.log("  Found character '" + char + "', moved to child node");
    }
    
    console.log("  Prefix found, words with this prefix: " + current.prefixCount);
    return true;
  }

  // Get all words with given prefix
  getWordsWithPrefix(prefix) {
    console.log("\\n=== Getting words with prefix: '" + prefix + "' ===");
    
    let current = this.root;
    
    // Navigate to prefix node
    for (const char of prefix) {
      if (!current.children[char]) {
        console.log("Prefix not found");
        return [];
      }
      current = current.children[char];
    }
    
    // Collect all words from this node
    const words = [];
    this._collectWords(current, prefix, words);
    console.log("Words with prefix '" + prefix + "': " + words.join(", "));
    return words;
  }

  _collectWords(node, currentWord, words) {
    if (node.isEndOfWord) {
      words.push(currentWord);
      console.log("  Found word: '" + currentWord + "' (frequency: " + node.frequency + ")");
    }
    
    for (const [char, childNode] of Object.entries(node.children)) {
      this._collectWords(childNode, currentWord + char, words);
    }
  }

  // Get word frequency
  getWordFrequency(word) {
    console.log("\\n=== Getting frequency for word: '" + word + "' ===");
    
    let current = this.root;
    
    for (const char of word) {
      if (!current.children[char]) {
        console.log("Word not found, frequency: 0");
        return 0;
      }
      current = current.children[char];
    }
    
    if (current.isEndOfWord) {
      console.log("Word found, frequency: " + current.frequency);
      return current.frequency;
    } else {
      console.log("Word not found, frequency: 0");
      return 0;
    }
  }

  // Get total number of words
  getTotalWords() {
    console.log("Total words in trie: " + this.totalWords);
    return this.totalWords;
  }

  // Print trie structure (for debugging)
  printTrieStructure() {
    console.log("\\n=== Trie Structure ===");
    this._printTrieHelper(this.root, "", 0);
  }

  _printTrieHelper(node, prefix, level) {
    const indent = "  ".repeat(level);
    
    if (node.isEndOfWord) {
      console.log(indent + "[" + prefix + "] (END, freq: " + node.frequency + ", prefixCount: " + node.prefixCount + ")");
    } else {
      console.log(indent + "[" + prefix + "] (prefixCount: " + node.prefixCount + ")");
    }
    
    for (const [char, childNode] of Object.entries(node.children)) {
      this._printTrieHelper(childNode, prefix + char, level + 1);
    }
  }
}

// Test the complete Trie implementation
console.log("=== Testing Complete Trie Implementation ===");
const trie = new Trie();

// Insert words
console.log("\\n--- Inserting Words ---");
trie.insert("hello");
trie.insert("hell");
trie.insert("he");
trie.insert("help");
trie.insert("helps");
trie.insert("helping");
trie.insert("world");
trie.insert("word");
trie.insert("words");

// Print trie structure
trie.printTrieStructure();

// Test search
console.log("\\n--- Testing Search ---");
console.log("Search 'hello':", trie.search("hello"));
console.log("Search 'hell':", trie.search("hell"));
console.log("Search 'he':", trie.search("he"));
console.log("Search 'help':", trie.search("help"));
console.log("Search 'world':", trie.search("world"));
console.log("Search 'xyz':", trie.search("xyz"));

// Test prefix search
console.log("\\n--- Testing Prefix Search ---");
console.log("Starts with 'he':", trie.startsWith("he"));
console.log("Starts with 'hel':", trie.startsWith("hel"));
console.log("Starts with 'wor':", trie.startsWith("wor"));
console.log("Starts with 'xyz':", trie.startsWith("xyz"));

// Test prefix words
console.log("\\n--- Testing Prefix Words ---");
trie.getWordsWithPrefix("he");
trie.getWordsWithPrefix("hel");
trie.getWordsWithPrefix("wor");

// Test frequency
console.log("\\n--- Testing Frequency ---");
trie.getWordFrequency("hello");
trie.getWordFrequency("help");
trie.getWordFrequency("xyz");

// Test total words
trie.getTotalWords();`}
        explanation="Complete Trie implementation with hash map representation, detailed logging for each operation, frequency tracking, prefix counting, and comprehensive search functionality."
      />
    </div>
  );
}

function OperationsSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-white mb-6">Trie Operations</h2>

      <ProblemBlock
        title="Trie Delete"
        difficulty="Medium"
        description="Implement deletion operation in Trie data structure with proper cleanup of unused nodes."
        solution={`// Trie Delete Operation

class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
    this.frequency = 0;
    this.prefixCount = 0;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
    this.totalWords = 0;
  }

  // Insert a word into the trie
  insert(word) {
    if (!word || word.length === 0) return false;
    
    let current = this.root;
    
    for (const char of word) {
      if (!current.children[char]) {
        current.children[char] = new TrieNode();
      }
      current = current.children[char];
      current.prefixCount++;
    }
    
    if (!current.isEndOfWord) {
      this.totalWords++;
    }
    
    current.isEndOfWord = true;
    current.frequency++;
    return true;
  }

  // Search for a word in the trie
  search(word) {
    if (!word || word.length === 0) return false;
    
    let current = this.root;
    
    for (const char of word) {
      if (!current.children[char]) {
        return false;
      }
      current = current.children[char];
    }
    
    return current.isEndOfWord;
  }

  // Delete a word from the trie
  delete(word) {
    console.log("\\n=== Deleting word: '" + word + "' ===");
    
    if (!word || word.length === 0) {
      console.log("Empty word, cannot delete");
      return false;
    }
    
    // First check if word exists
    if (!this.search(word)) {
      console.log("Word '" + word + "' not found in trie");
      return false;
    }
    
    console.log("Word '" + word + "' found, proceeding with deletion");
    
    // Delete the word
    const deleted = this._deleteHelper(this.root, word, 0);
    
    if (deleted) {
      this.totalWords--;
      console.log("Word '" + word + "' deleted successfully");
      console.log("Total words remaining: " + this.totalWords);
    }
    
    return deleted;
  }

  // Helper method for deletion
  _deleteHelper(node, word, index) {
    console.log("\\n  _deleteHelper called with word: '" + word + "', index: " + index);
    
    // Base case: reached end of word
    if (index === word.length) {
      console.log("  Reached end of word");
      
      if (!node.isEndOfWord) {
        console.log("  Word not found (not end of word)");
        return false;
      }
      
      // Decrease frequency
      node.frequency--;
      console.log("  Decreased frequency to: " + node.frequency);
      
      // If frequency becomes 0, mark as not end of word
      if (node.frequency === 0) {
        node.isEndOfWord = false;
        console.log("  Marked as not end of word");
      }
      
      // Return true if this node can be deleted (no children and not end of word)
      const canDelete = Object.keys(node.children).length === 0 && !node.isEndOfWord;
      console.log("  Can delete this node: " + canDelete);
      return canDelete;
    }
    
    const char = word[index];
    console.log("  Processing character: '" + char + "'");
    
    if (!node.children[char]) {
      console.log("  Character '" + char + "' not found, word doesn't exist");
      return false;
    }
    
    // Recursively delete from child
    const shouldDeleteChild = this._deleteHelper(node.children[char], word, index + 1);
    console.log("  Should delete child '" + char + "': " + shouldDeleteChild);
    
    if (shouldDeleteChild) {
      // Delete the child node
      delete node.children[char];
      console.log("  Deleted child node for character '" + char + "'");
    }
    
    // Decrease prefix count
    node.prefixCount--;
    console.log("  Decreased prefix count to: " + node.prefixCount);
    
    // Return true if this node can be deleted (no children and not end of word)
    const canDelete = Object.keys(node.children).length === 0 && !node.isEndOfWord;
    console.log("  Can delete this node: " + canDelete);
    return canDelete;
  }

  // Delete all words with given prefix
  deleteWordsWithPrefix(prefix) {
    console.log("\\n=== Deleting all words with prefix: '" + prefix + "' ===");
    
    if (!prefix || prefix.length === 0) {
      console.log("Empty prefix, cannot delete all words");
      return false;
    }
    
    let current = this.root;
    
    // Navigate to prefix node
    for (let i = 0; i < prefix.length; i++) {
      const char = prefix[i];
      console.log("\\nProcessing character: '" + char + "' (position " + i + ")");
      
      if (!current.children[char]) {
        console.log("  Prefix '" + prefix + "' not found");
        return false;
      }
      
      current = current.children[char];
      console.log("  Found character '" + char + "', moved to child node");
    }
    
    // Count words to be deleted
    const wordsToDelete = this._countWordsFromNode(current);
    console.log("  Found " + wordsToDelete + " words with prefix '" + prefix + "'");
    
    // Delete the entire subtree
    const parent = this._findParentOfPrefix(prefix);
    if (parent) {
      const lastChar = prefix[prefix.length - 1];
      delete parent.children[lastChar];
      console.log("  Deleted entire subtree for prefix '" + prefix + "'");
      this.totalWords -= wordsToDelete;
      console.log("  Total words remaining: " + this.totalWords);
      return true;
    }
    
    return false;
  }

  // Count words from a given node
  _countWordsFromNode(node) {
    let count = 0;
    
    if (node.isEndOfWord) {
      count += node.frequency;
    }
    
    for (const child of Object.values(node.children)) {
      count += this._countWordsFromNode(child);
    }
    
    return count;
  }

  // Find parent of prefix
  _findParentOfPrefix(prefix) {
    if (prefix.length <= 1) return null;
    
    let current = this.root;
    
    for (let i = 0; i < prefix.length - 1; i++) {
      const char = prefix[i];
      if (!current.children[char]) return null;
      current = current.children[char];
    }
    
    return current;
  }

  // Print all words in the trie
  printAllWords() {
    console.log("\\n=== All words in trie ===");
    const words = [];
    this._printAllWordsHelper(this.root, "", words);
    console.log("Words: " + words.join(", "));
    return words;
  }

  _printAllWordsHelper(node, currentWord, words) {
    if (node.isEndOfWord) {
      for (let i = 0; i < node.frequency; i++) {
        words.push(currentWord);
      }
    }
    
    for (const [char, childNode] of Object.entries(node.children)) {
      this._printAllWordsHelper(childNode, currentWord + char, words);
    }
  }

  // Print trie structure
  printTrieStructure() {
    console.log("\\n=== Trie Structure ===");
    this._printTrieHelper(this.root, "", 0);
  }

  _printTrieHelper(node, prefix, level) {
    const indent = "  ".repeat(level);
    
    if (node.isEndOfWord) {
      console.log(indent + "[" + prefix + "] (END, freq: " + node.frequency + ", prefixCount: " + node.prefixCount + ")");
    } else {
      console.log(indent + "[" + prefix + "] (prefixCount: " + node.prefixCount + ")");
    }
    
    for (const [char, childNode] of Object.entries(node.children)) {
      this._printTrieHelper(childNode, prefix + char, level + 1);
    }
  }
}

// Test Trie Delete Operations
console.log("=== Testing Trie Delete Operations ===");
const trie = new Trie();

// Insert words
console.log("\\n--- Inserting Words ---");
trie.insert("hello");
trie.insert("hell");
trie.insert("he");
trie.insert("help");
trie.insert("helps");
trie.insert("helping");
trie.insert("world");
trie.insert("word");
trie.insert("words");

// Print initial structure
trie.printTrieStructure();
trie.printAllWords();

// Test individual word deletion
console.log("\\n--- Testing Individual Word Deletion ---");
trie.delete("help");
trie.printTrieStructure();
trie.printAllWords();

trie.delete("he");
trie.printTrieStructure();
trie.printAllWords();

// Test prefix deletion
console.log("\\n--- Testing Prefix Deletion ---");
trie.deleteWordsWithPrefix("hel");
trie.printTrieStructure();
trie.printAllWords();

// Test deletion of non-existent word
console.log("\\n--- Testing Non-existent Word Deletion ---");
trie.delete("xyz");
trie.printAllWords();`}
        explanation="Trie deletion requires careful handling to avoid removing nodes that are part of other words. The algorithm recursively deletes nodes only when they have no children and don't represent the end of another word."
      />
    </div>
  );
}

function ApplicationsSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-white mb-6">Trie Applications</h2>

      <ProblemBlock
        title="Count Distinct Rows in a Binary Matrix"
        difficulty="Medium"
        description="Count the number of distinct rows in a binary matrix using Trie data structure."
        solution={`// Count Distinct Rows in a Binary Matrix using Trie

class TrieNode {
  constructor() {
    this.children = {}; // For binary: 0 and 1
    this.isEndOfRow = false;
  }
}

class BinaryTrie {
  constructor() {
    this.root = new TrieNode();
    this.distinctRows = 0;
  }

  // Insert a binary row into the trie
  insertRow(row) {
    console.log("\\n=== Inserting binary row: [" + row.join(", ") + "] ===");
    
    let current = this.root;
    console.log("Starting from root node");
    
    for (let i = 0; i < row.length; i++) {
      const bit = row[i];
      console.log("\\nProcessing bit: " + bit + " (position " + i + ")");
      
      // If bit doesn't exist, create new node
      if (!current.children[bit]) {
        current.children[bit] = new TrieNode();
        console.log("  Created new node for bit " + bit);
      } else {
        console.log("  Found existing node for bit " + bit);
      }
      
      // Move to child node
      current = current.children[bit];
      console.log("  Moved to child node");
    }
    
    // Check if this row already exists
    if (!current.isEndOfRow) {
      current.isEndOfRow = true;
      this.distinctRows++;
      console.log("  New distinct row found! Total distinct rows: " + this.distinctRows);
    } else {
      console.log("  Row already exists, no change in count");
    }
    
    return current.isEndOfRow;
  }

  // Check if a row exists in the trie
  rowExists(row) {
    console.log("\\n=== Checking if row exists: [" + row.join(", ") + "] ===");
    
    let current = this.root;
    console.log("Starting from root node");
    
    for (let i = 0; i < row.length; i++) {
      const bit = row[i];
      console.log("\\nProcessing bit: " + bit + " (position " + i + ")");
      
      if (!current.children[bit]) {
        console.log("  Bit " + bit + " not found, row doesn't exist");
        return false;
      }
      
      current = current.children[bit];
      console.log("  Found bit " + bit + ", moved to child node");
    }
    
    const exists = current.isEndOfRow;
    console.log("  Reached end of path. Row exists: " + exists);
    return exists;
  }

  // Get count of distinct rows
  getDistinctRowCount() {
    console.log("Total distinct rows: " + this.distinctRows);
    return this.distinctRows;
  }

  // Print all distinct rows
  printAllDistinctRows() {
    console.log("\\n=== All distinct rows ===");
    const rows = [];
    this._printRowsHelper(this.root, [], rows);
    console.log("Distinct rows:");
    rows.forEach((row, index) => {
      console.log("  " + (index + 1) + ": [" + row.join(", ") + "]");
    });
    return rows;
  }

  _printRowsHelper(node, currentRow, rows) {
    if (node.isEndOfRow) {
      rows.push([...currentRow]);
    }
    
    for (const [bit, childNode] of Object.entries(node.children)) {
      currentRow.push(parseInt(bit));
      this._printRowsHelper(childNode, currentRow, rows);
      currentRow.pop();
    }
  }

  // Print trie structure
  printTrieStructure() {
    console.log("\\n=== Binary Trie Structure ===");
    this._printTrieHelper(this.root, [], 0);
  }

  _printTrieHelper(node, currentPath, level) {
    const indent = "  ".repeat(level);
    const pathStr = currentPath.length > 0 ? "[" + currentPath.join(", ") + "]" : "ROOT";
    
    if (node.isEndOfRow) {
      console.log(indent + pathStr + " (END)");
    } else {
      console.log(indent + pathStr);
    }
    
    for (const [bit, childNode] of Object.entries(node.children)) {
      currentPath.push(parseInt(bit));
      this._printTrieHelper(childNode, currentPath, level + 1);
      currentPath.pop();
    }
  }
}

// Function to count distinct rows in a binary matrix
function countDistinctRows(matrix) {
  console.log("=== Counting Distinct Rows in Binary Matrix ===");
  console.log("Matrix:");
  matrix.forEach((row, index) => {
    console.log("  Row " + index + ": [" + row.join(", ") + "]");
  });
  
  const trie = new BinaryTrie();
  
  console.log("\\n--- Processing each row ---");
  matrix.forEach((row, index) => {
    console.log("\\nProcessing row " + index + ": [" + row.join(", ") + "]");
    trie.insertRow(row);
  });
  
  console.log("\\n--- Final Results ---");
  trie.printTrieStructure();
  trie.printAllDistinctRows();
  
  const distinctCount = trie.getDistinctRowCount();
  console.log("\\nTotal distinct rows: " + distinctCount);
  
  return distinctCount;
}

// Alternative approach using Set (for comparison)
function countDistinctRowsSet(matrix) {
  console.log("\\n=== Alternative: Using Set ===");
  
  const rowSet = new Set();
  
  matrix.forEach((row, index) => {
    const rowString = row.join("");
    console.log("Row " + index + ": [" + row.join(", ") + "] -> String: '" + rowString + "'");
    rowSet.add(rowString);
  });
  
  console.log("Distinct rows (Set approach): " + rowSet.size);
  return rowSet.size;
}

// Test cases
console.log("=== Testing Count Distinct Rows ===");

// Test case 1
const matrix1 = [
  [1, 0, 0, 1, 0],
  [1, 1, 1, 1, 0],
  [1, 0, 0, 1, 0],
  [1, 1, 1, 1, 0],
  [0, 1, 1, 0, 1]
];

console.log("\\n--- Test Case 1 ---");
countDistinctRows(matrix1);
countDistinctRowsSet(matrix1);

// Test case 2
const matrix2 = [
  [1, 0, 0],
  [0, 1, 0],
  [1, 0, 0],
  [0, 1, 0],
  [1, 1, 0]
];

console.log("\\n--- Test Case 2 ---");
countDistinctRows(matrix2);
countDistinctRowsSet(matrix2);

// Test case 3 - All rows are distinct
const matrix3 = [
  [1, 0, 1],
  [0, 1, 0],
  [1, 1, 0],
  [0, 0, 1]
];

console.log("\\n--- Test Case 3 ---");
countDistinctRows(matrix3);
countDistinctRowsSet(matrix3);`}
        explanation="Using Trie to count distinct rows in binary matrix: each row is treated as a string of 0s and 1s. Trie efficiently stores and checks for duplicate rows. Time: O(m×n), Space: O(m×n) where m=rows, n=columns."
      />

      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h3 className="text-2xl font-bold text-white mb-4">
          Common Trie Applications
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-lg font-semibold text-white mb-2">
              String Operations
            </h4>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li>• Autocomplete and word suggestions</li>
              <li>• Spell checker and dictionary</li>
              <li>• Prefix matching and search</li>
              <li>• Longest common prefix</li>
              <li>• Pattern matching</li>
            </ul>
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-lg font-semibold text-white mb-2">
              Data Processing
            </h4>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li>• IP routing tables</li>
              <li>• Phone number storage</li>
              <li>• DNA sequence analysis</li>
              <li>• Binary data processing</li>
              <li>• Compression algorithms</li>
            </ul>
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-lg font-semibold text-white mb-2">
              Search & Retrieval
            </h4>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li>• Search engine indexing</li>
              <li>• Database indexing</li>
              <li>• File system organization</li>
              <li>• Contact management</li>
              <li>• URL routing</li>
            </ul>
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-lg font-semibold text-white mb-2">
              Advanced Applications
            </h4>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li>• Suffix trees and arrays</li>
              <li>• Aho-Corasick algorithm</li>
              <li>• Burrows-Wheeler transform</li>
              <li>• Lempel-Ziv compression</li>
              <li>• Network packet filtering</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function AdvancedSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-white mb-6">
        Advanced Trie Problems
      </h2>

      <ProblemBlock
        title="Word Search in 2D Grid using Trie"
        difficulty="Hard"
        description="Find all words from a dictionary that can be formed in a 2D character grid using Trie for efficient search."
        solution={`// Word Search in 2D Grid using Trie

class TrieNode {
  constructor() {
    this.children = {};
    this.word = null; // Store the complete word at end nodes
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let current = this.root;
    
    for (const char of word) {
      if (!current.children[char]) {
        current.children[char] = new TrieNode();
      }
      current = current.children[char];
    }
    
    current.isEndOfWord = true;
    current.word = word;
  }
}

function findWords(board, words) {
  console.log("=== Word Search in 2D Grid using Trie ===");
  console.log("Board:");
  board.forEach((row, index) => {
    console.log("  " + index + ": [" + row.join(", ") + "]");
  });
  console.log("Words to find: " + words.join(", "));
  
  const trie = new Trie();
  
  // Insert all words into trie
  console.log("\\n--- Building Trie ---");
  words.forEach(word => {
    console.log("Inserting word: '" + word + "'");
    trie.insert(word);
  });
  
  const result = [];
  const rows = board.length;
  const cols = board[0].length;
  
  console.log("\\n--- Searching for words ---");
  
  // Try starting from each cell
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      console.log("\\nStarting search from cell (" + i + ", " + j + ") with character '" + board[i][j] + "'");
      dfs(board, i, j, trie.root, result, "", new Set());
    }
  }
  
  console.log("\\nFound words: " + result.join(", "));
  return result;
}

function dfs(board, row, col, node, result, currentWord, visited) {
  const rows = board.length;
  const cols = board[0].length;
  const key = row + "," + col;
  
  // Check bounds
  if (row < 0 || row >= rows || col < 0 || col >= cols) {
    console.log("  Out of bounds at (" + row + ", " + col + ")");
    return;
  }
  
  // Check if already visited
  if (visited.has(key)) {
    console.log("  Already visited (" + row + ", " + col + ")");
    return;
  }
  
  const char = board[row][col];
  console.log("  Processing character '" + char + "' at (" + row + ", " + col + ")");
  
  // Check if current character exists in trie
  if (!node.children[char]) {
    console.log("  Character '" + char + "' not found in trie path");
    return;
  }
  
  // Move to next node in trie
  const nextNode = node.children[char];
  const newWord = currentWord + char;
  
  console.log("  Character '" + char + "' found, new word: '" + newWord + "'");
  
  // Mark current cell as visited
  visited.add(key);
  
  // Check if we found a complete word
  if (nextNode.isEndOfWord && nextNode.word) {
    console.log("  ✓ Found complete word: '" + nextNode.word + "'");
    result.push(nextNode.word);
    // Mark as found to avoid duplicates
    nextNode.word = null;
  }
  
  // Explore all 4 directions
  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  
  for (const [dr, dc] of directions) {
    const newRow = row + dr;
    const newCol = col + dc;
    console.log("  Exploring direction (" + dr + ", " + dc + ") -> (" + newRow + ", " + newCol + ")");
    dfs(board, newRow, newCol, nextNode, result, newWord, visited);
  }
  
  // Backtrack: unmark current cell
  visited.delete(key);
  console.log("  Backtracking from (" + row + ", " + col + ")");
}

// Test cases
console.log("=== Testing Word Search with Trie ===");

// Test case 1
const board1 = [
  ['o', 'a', 'a', 'n'],
  ['e', 't', 'a', 'e'],
  ['i', 'h', 'k', 'r'],
  ['i', 'f', 'l', 'v']
];
const words1 = ["oath", "pea", "eat", "rain"];

console.log("\\n--- Test Case 1 ---");
findWords(board1, words1);

// Test case 2
const board2 = [
  ['a', 'b'],
  ['c', 'd']
];
const words2 = ["abcb"];

console.log("\\n--- Test Case 2 ---");
findWords(board2, words2);

// Test case 3
const board3 = [
  ['a', 'a']
];
const words3 = ["aaa"];

console.log("\\n--- Test Case 3 ---");
findWords(board3, words3);`}
        explanation="Word search using Trie: build trie from dictionary words, then use DFS to explore all paths in the grid. Trie allows early termination when no valid path exists. Time: O(m×n×4^L), Space: O(W×L) where W=words, L=max word length."
      />

      <ProblemBlock
        title="Longest Common Prefix using Trie"
        difficulty="Easy"
        description="Find the longest common prefix among a set of strings using Trie data structure."
        solution={`// Longest Common Prefix using Trie

class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
    this.childCount = 0; // Count of children
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let current = this.root;
    
    for (const char of word) {
      if (!current.children[char]) {
        current.children[char] = new TrieNode();
        current.childCount++;
      }
      current = current.children[char];
    }
    
    current.isEndOfWord = true;
  }

  findLongestCommonPrefix() {
    console.log("\\n=== Finding Longest Common Prefix ===");
    
    let current = this.root;
    let prefix = "";
    
    console.log("Starting from root node");
    
    // Traverse until we find a node with more than one child or end of word
    while (current.childCount === 1 && !current.isEndOfWord) {
      // Find the single child
      const char = Object.keys(current.children)[0];
      console.log("Found single child: '" + char + "'");
      
      prefix += char;
      current = current.children[char];
      console.log("Current prefix: '" + prefix + "'");
    }
    
    console.log("Longest common prefix: '" + prefix + "'");
    return prefix;
  }

  // Alternative: Find common prefix of specific strings
  findCommonPrefixOfStrings(strings) {
    console.log("\\n=== Finding Common Prefix of Specific Strings ===");
    console.log("Strings: " + strings.join(", "));
    
    if (strings.length === 0) return "";
    if (strings.length === 1) return strings[0];
    
    // Find minimum length
    const minLength = Math.min(...strings.map(s => s.length));
    console.log("Minimum length: " + minLength);
    
    let prefix = "";
    
    for (let i = 0; i < minLength; i++) {
      const char = strings[0][i];
      console.log("\\nChecking character '" + char + "' at position " + i);
      
      // Check if all strings have same character at position i
      let allSame = true;
      for (let j = 1; j < strings.length; j++) {
        if (strings[j][i] !== char) {
          console.log("  String " + j + " has different character '" + strings[j][i] + "'");
          allSame = false;
          break;
        }
      }
      
      if (allSame) {
        prefix += char;
        console.log("  All strings have '" + char + "', prefix: '" + prefix + "'");
      } else {
        console.log("  Characters differ, stopping at position " + i);
        break;
      }
    }
    
    console.log("Common prefix: '" + prefix + "'");
    return prefix;
  }

  // Print trie structure
  printTrieStructure() {
    console.log("\\n=== Trie Structure ===");
    this._printTrieHelper(this.root, "", 0);
  }

  _printTrieHelper(node, prefix, level) {
    const indent = "  ".repeat(level);
    const nodeInfo = node.isEndOfWord ? " (END)" : "";
    const childCount = " (children: " + node.childCount + ")";
    console.log(indent + "[" + prefix + "]" + nodeInfo + childCount);
    
    for (const [char, childNode] of Object.entries(node.children)) {
      this._printTrieHelper(childNode, prefix + char, level + 1);
    }
  }
}

// Function to find longest common prefix
function longestCommonPrefix(strings) {
  console.log("=== Longest Common Prefix ===");
  console.log("Input strings: " + strings.join(", "));
  
  if (strings.length === 0) return "";
  if (strings.length === 1) return strings[0];
  
  // Method 1: Using Trie
  console.log("\\n--- Method 1: Using Trie ---");
  const trie = new Trie();
  
  // Insert all strings into trie
  strings.forEach(str => {
    console.log("Inserting string: '" + str + "'");
    trie.insert(str);
  });
  
  trie.printTrieStructure();
  const trieResult = trie.findLongestCommonPrefix();
  
  // Method 2: Direct comparison
  console.log("\\n--- Method 2: Direct Comparison ---");
  const directResult = trie.findCommonPrefixOfStrings(strings);
  
  console.log("\\n--- Results ---");
  console.log("Trie method result: '" + trieResult + "'");
  console.log("Direct method result: '" + directResult + "'");
  
  return trieResult;
}

// Test cases
console.log("=== Testing Longest Common Prefix ===");

// Test case 1
const strings1 = ["flower", "flow", "flight"];
console.log("\\n--- Test Case 1 ---");
longestCommonPrefix(strings1);

// Test case 2
const strings2 = ["dog", "racecar", "car"];
console.log("\\n--- Test Case 2 ---");
longestCommonPrefix(strings2);

// Test case 3
const strings3 = ["interspecies", "interstellar", "interstate"];
console.log("\\n--- Test Case 3 ---");
longestCommonPrefix(strings3);

// Test case 4
const strings4 = ["throne", "throne"];
console.log("\\n--- Test Case 4 ---");
longestCommonPrefix(strings4);

// Test case 5
const strings5 = ["", "b"];
console.log("\\n--- Test Case 5 ---");
longestCommonPrefix(strings5);`}
        explanation="Longest common prefix using Trie: insert all strings, then traverse from root until we find a node with multiple children or end of word. Time: O(S) where S is sum of all characters, Space: O(S)."
      />

      <ProblemBlock
        title="Auto-complete System using Trie"
        difficulty="Medium"
        description="Implement an auto-complete system that suggests words based on user input using Trie data structure."
        solution={`// Auto-complete System using Trie

class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
    this.word = null;
    this.frequency = 0; // For ranking suggestions
  }
}

class AutoCompleteTrie {
  constructor() {
    this.root = new TrieNode();
  }

  // Insert word with frequency
  insert(word, frequency = 1) {
    let current = this.root;
    
    for (const char of word) {
      if (!current.children[char]) {
        current.children[char] = new TrieNode();
      }
      current = current.children[char];
    }
    
    current.isEndOfWord = true;
    current.word = word;
    current.frequency += frequency;
  }

  // Get suggestions for given prefix
  getSuggestions(prefix, maxSuggestions = 5) {
    console.log("\\n=== Getting suggestions for prefix: '" + prefix + "' ===");
    
    // Navigate to prefix node
    let current = this.root;
    
    for (const char of prefix) {
      if (!current.children[char]) {
        console.log("Prefix '" + prefix + "' not found");
        return [];
      }
      current = current.children[char];
    }
    
    // Collect all words with this prefix
    const suggestions = [];
    this._collectSuggestions(current, suggestions);
    
    // Sort by frequency (descending) and then alphabetically
    suggestions.sort((a, b) => {
      if (b.frequency !== a.frequency) {
        return b.frequency - a.frequency;
      }
      return a.word.localeCompare(b.word);
    });
    
    // Return top suggestions
    const result = suggestions.slice(0, maxSuggestions).map(s => s.word);
    console.log("Suggestions: " + result.join(", "));
    return result;
  }

  _collectSuggestions(node, suggestions) {
    if (node.isEndOfWord) {
      suggestions.push({
        word: node.word,
        frequency: node.frequency
      });
      console.log("  Found word: '" + node.word + "' (frequency: " + node.frequency + ")");
    }
    
    for (const [char, childNode] of Object.entries(node.children)) {
      this._collectSuggestions(childNode, suggestions);
    }
  }

  // Update word frequency (for learning)
  updateFrequency(word, increment = 1) {
    let current = this.root;
    
    for (const char of word) {
      if (!current.children[char]) {
        console.log("Word '" + word + "' not found for frequency update");
        return false;
      }
      current = current.children[char];
    }
    
    if (current.isEndOfWord) {
      current.frequency += increment;
      console.log("Updated frequency for '" + word + "' to " + current.frequency);
      return true;
    }
    
    return false;
  }

  // Get all words in trie
  getAllWords() {
    const words = [];
    this._collectSuggestions(this.root, words);
    return words.sort((a, b) => b.frequency - a.frequency);
  }

  // Print trie structure
  printTrieStructure() {
    console.log("\\n=== Auto-complete Trie Structure ===");
    this._printTrieHelper(this.root, "", 0);
  }

  _printTrieHelper(node, prefix, level) {
    const indent = "  ".repeat(level);
    const nodeInfo = node.isEndOfWord ? " (END, freq: " + node.frequency + ")" : "";
    console.log(indent + "[" + prefix + "]" + nodeInfo);
    
    for (const [char, childNode] of Object.entries(node.children)) {
      this._printTrieHelper(childNode, prefix + char, level + 1);
    }
  }
}

// Auto-complete system class
class AutoCompleteSystem {
  constructor() {
    this.trie = new AutoCompleteTrie();
    this.currentInput = "";
  }

  // Add words to the system
  addWords(words) {
    console.log("\\n=== Adding words to auto-complete system ===");
    words.forEach(({ word, frequency = 1 }) => {
      console.log("Adding word: '" + word + "' with frequency " + frequency);
      this.trie.insert(word, frequency);
    });
  }

  // Process user input
  input(char) {
    console.log("\\n=== Processing input: '" + char + "' ===");
    
    if (char === '#') {
      // End of input, update frequency
      if (this.currentInput.length > 0) {
        console.log("End of input, updating frequency for: '" + this.currentInput + "'");
        this.trie.updateFrequency(this.currentInput, 1);
        this.currentInput = "";
      }
      return [];
    }
    
    // Add character to current input
    this.currentInput += char;
    console.log("Current input: '" + this.currentInput + "'");
    
    // Get suggestions
    const suggestions = this.trie.getSuggestions(this.currentInput, 3);
    return suggestions;
  }

  // Get suggestions for current input
  getCurrentSuggestions() {
    if (this.currentInput.length === 0) return [];
    return this.trie.getSuggestions(this.currentInput, 5);
  }

  // Clear current input
  clearInput() {
    this.currentInput = "";
  }

  // Print all words in system
  printAllWords() {
    console.log("\\n=== All words in system ===");
    const words = this.trie.getAllWords();
    words.forEach((word, index) => {
      console.log("  " + (index + 1) + ": '" + word.word + "' (frequency: " + word.frequency + ")");
    });
  }
}

// Test the auto-complete system
console.log("=== Testing Auto-complete System ===");

const autoComplete = new AutoCompleteSystem();

// Add initial words with frequencies
const initialWords = [
  { word: "i", frequency: 5 },
  { word: "love", frequency: 3 },
  { word: "leetcode", frequency: 2 },
  { word: "i", frequency: 2 }, // This will increase frequency
  { word: "love", frequency: 2 },
  { word: "coding", frequency: 1 },
  { word: "i", frequency: 1 },
  { word: "love", frequency: 1 },
  { word: "you", frequency: 1 }
];

autoComplete.addWords(initialWords);
autoComplete.trie.printTrieStructure();

// Test input processing
console.log("\\n--- Testing Input Processing ---");

// Simulate user typing "i"
let suggestions = autoComplete.input('i');
console.log("Suggestions for 'i': " + suggestions.join(", "));

// Simulate user typing " "
suggestions = autoComplete.input(' ');
console.log("Suggestions for 'i ': " + suggestions.join(", "));

// Simulate user typing "l"
suggestions = autoComplete.input('l');
console.log("Suggestions for 'i l': " + suggestions.join(", "));

// Simulate user typing "o"
suggestions = autoComplete.input('o');
console.log("Suggestions for 'i lo': " + suggestions.join(", "));

// Simulate user typing "v"
suggestions = autoComplete.input('v');
console.log("Suggestions for 'i lov': " + suggestions.join(", "));

// Simulate user typing "e"
suggestions = autoComplete.input('e');
console.log("Suggestions for 'i love': " + suggestions.join(", "));

// Simulate user typing "#" (end of input)
suggestions = autoComplete.input('#');
console.log("End of input, suggestions: " + suggestions.join(", "));

// Print all words after learning
autoComplete.printAllWords();`}
        explanation="Auto-complete system using Trie: store words with frequencies, navigate to prefix node, collect all words from that node, sort by frequency and return top suggestions. Supports learning by updating frequencies."
      />

      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h3 className="text-2xl font-bold text-white mb-4">
          Trie Optimization Techniques
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold text-green-400 mb-3">
              Memory Optimization
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                • <strong>Compressed Trie:</strong> Merge single-child nodes
              </li>
              <li>
                • <strong>Array vs HashMap:</strong> Use arrays for fixed
                alphabets
              </li>
              <li>
                • <strong>Lazy Loading:</strong> Load nodes only when needed
              </li>
              <li>
                • <strong>Memory Pooling:</strong> Reuse node objects
              </li>
              <li>
                • <strong>Bit Packing:</strong> Store flags in single bits
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-blue-400 mb-3">
              Performance Optimization
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                • <strong>Caching:</strong> Cache frequent search results
              </li>
              <li>
                • <strong>Batch Operations:</strong> Process multiple operations
                together
              </li>
              <li>
                • <strong>Parallel Processing:</strong> Use multiple threads for
                large datasets
              </li>
              <li>
                • <strong>Indexing:</strong> Create secondary indexes for common
                queries
              </li>
              <li>
                • <strong>Lazy Evaluation:</strong> Defer expensive operations
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
