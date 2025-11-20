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

function CodeBlock({ code, defaultLanguage = "JavaScript" }) {
  const isMultiLanguage = typeof code === "object" && code !== null;
  const languageKeys = isMultiLanguage ? Object.keys(code) : [];
  const [activeLanguage, setActiveLanguage] = useState(
    isMultiLanguage ? languageKeys[0] : defaultLanguage
  );
  const displayedCode = isMultiLanguage ? code[activeLanguage] : code;

  return (
    <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
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
      <pre className="text-green-400 text-sm">
        <code>{displayedCode}</code>
      </pre>
    </div>
  );
}

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

      {showSolution && codeData && (
        <div>
          {/* Tabs */}
          {approach && (
            <div className="flex gap-2 mb-4 border-b border-gray-700">
              <button
                onClick={() => setActiveTab("solution")}
                className={`px-4 py-2 font-semibold transition-colors ${
                  activeTab === "solution"
                    ? "text-green-400 border-b-2 border-green-400"
                    : "text-gray-400 hover:text-gray-300"
                }`}
              >
                Solution
              </button>
              <button
                onClick={() => setActiveTab("approach")}
                className={`px-4 py-2 font-semibold transition-colors ${
                  activeTab === "approach"
                    ? "text-green-400 border-b-2 border-green-400"
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
              <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                <h4 className="text-blue-200 font-semibold mb-2">
                  Explanation:
                </h4>
                <p className="text-blue-100 text-sm">{explanation}</p>
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

function IntroductionSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-white mb-6">
        Trie Data Structure Introduction
      </h2>

      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h3 className="text-2xl font-bold text-white mb-4">What is a Trie?</h3>
        <p className="text-gray-300 mb-4">
          A Trie (pronounced &quot;try&quot;) is a tree-like data structure that
          is used to store a collection of strings. It&apos;s also known as a
          prefix tree or digital tree. The name &quot;Trie&quot; comes from the
          word &quot;retrieval.&quot;
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
        solutions={{
          JavaScript: `// Trie Data Structure - Introduction

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
trie.printAllWords();`,
          Java: `// Trie Data Structure - Introduction

import java.util.*;

class TrieNode {
    Map<Character, TrieNode> children;
    boolean isEndOfWord;
    int count;
    
    TrieNode() {
        children = new HashMap<>();
        isEndOfWord = false;
        count = 0;
    }
}

class Trie {
    private TrieNode root;
    
    Trie() {
        root = new TrieNode();
        System.out.println("Trie initialized with root node");
    }
    
    // Insert a word into the trie
    public void insert(String word) {
        System.out.println("\\n=== Inserting word: '" + word + "' ===");
        
        TrieNode current = root;
        System.out.println("Starting from root node");
        
        for (int i = 0; i < word.length(); i++) {
            char ch = word.charAt(i);
            System.out.println("\\nProcessing character: '" + ch + "' (position " + i + ")");
            
            // If character doesn't exist, create new node
            if (!current.children.containsKey(ch)) {
                current.children.put(ch, new TrieNode());
                System.out.println("  Created new node for character '" + ch + "'");
            } else {
                System.out.println("  Found existing node for character '" + ch + "'");
            }
            
            // Move to child node
            current = current.children.get(ch);
            System.out.println("  Moved to child node");
        }
        
        // Mark end of word
        current.isEndOfWord = true;
        current.count++;
        System.out.println("  Marked end of word. Count: " + current.count);
    }
    
    // Search for a word in the trie
    public boolean search(String word) {
        System.out.println("\\n=== Searching for word: '" + word + "' ===");
        
        TrieNode current = root;
        System.out.println("Starting from root node");
        
        for (int i = 0; i < word.length(); i++) {
            char ch = word.charAt(i);
            System.out.println("\\nProcessing character: '" + ch + "' (position " + i + ")");
            
            if (!current.children.containsKey(ch)) {
                System.out.println("  Character '" + ch + "' not found, word doesn't exist");
                return false;
            }
            
            current = current.children.get(ch);
            System.out.println("  Found character '" + ch + "', moved to child node");
        }
        
        boolean found = current.isEndOfWord;
        System.out.println("  Reached end of path. isEndOfWord: " + found);
        return found;
    }
    
    // Check if any word starts with given prefix
    public boolean startsWith(String prefix) {
        System.out.println("\\n=== Checking prefix: '" + prefix + "' ===");
        
        TrieNode current = root;
        System.out.println("Starting from root node");
        
        for (int i = 0; i < prefix.length(); i++) {
            char ch = prefix.charAt(i);
            System.out.println("\\nProcessing character: '" + ch + "' (position " + i + ")");
            
            if (!current.children.containsKey(ch)) {
                System.out.println("  Character '" + ch + "' not found, prefix doesn't exist");
                return false;
            }
            
            current = current.children.get(ch);
            System.out.println("  Found character '" + ch + "', moved to child node");
        }
        
        System.out.println("  Prefix found");
        return true;
    }
    
    // Print all words in the trie
    public List<String> printAllWords() {
        System.out.println("\\n=== Printing all words in trie ===");
        List<String> words = new ArrayList<>();
        printAllWordsHelper(root, "", words);
        System.out.println("All words: " + String.join(", ", words));
        return words;
    }
    
    private void printAllWordsHelper(TrieNode node, String currentWord, List<String> words) {
        if (node.isEndOfWord) {
            words.add(currentWord);
            System.out.println("  Found word: '" + currentWord + "'");
        }
        
        for (Map.Entry<Character, TrieNode> entry : node.children.entrySet()) {
            printAllWordsHelper(entry.getValue(), currentWord + entry.getKey(), words);
        }
    }
}

// Test the Trie
public class TrieTest {
    public static void main(String[] args) {
        System.out.println("=== Testing Trie Data Structure ===");
        Trie trie = new Trie();
        
        // Insert words
        trie.insert("cat");
        trie.insert("car");
        trie.insert("card");
        trie.insert("care");
        trie.insert("careful");
        trie.insert("carefully");
        
        // Search words
        System.out.println("\\n=== Testing Search ===");
        System.out.println("Search 'cat': " + trie.search("cat"));
        System.out.println("Search 'car': " + trie.search("car"));
        System.out.println("Search 'care': " + trie.search("care"));
        System.out.println("Search 'careful': " + trie.search("careful"));
        System.out.println("Search 'carefully': " + trie.search("carefully"));
        System.out.println("Search 'carpet': " + trie.search("carpet"));
        
        // Test prefix search
        System.out.println("\\n=== Testing Prefix Search ===");
        System.out.println("Starts with 'ca': " + trie.startsWith("ca"));
        System.out.println("Starts with 'car': " + trie.startsWith("car"));
        System.out.println("Starts with 'care': " + trie.startsWith("care"));
        System.out.println("Starts with 'xyz': " + trie.startsWith("xyz"));
        
        // Print all words
        trie.printAllWords();
    }
}`,
        }}
        explanation="Trie is a tree-like data structure where each node represents a character. The root to leaf path represents a complete word. Common prefixes are shared, making it efficient for string operations."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Implement basic Trie data structure with insert, search, and startsWith operations. Trie stores strings efficiently by sharing common prefixes.",
              details: [
                "Each node represents a character",
                "Root to leaf path represents a complete word",
                "Common prefixes are shared among words",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Tree structure: root node, each node has children (characters). Insert: traverse/create path. Search: traverse path, check end marker.",
              keywords: [
                "trie",
                "prefix tree",
                "tree structure",
                "string operations",
              ],
              details: [
                "Node structure: children map/array, isEndOfWord flag",
                "Operations: insert, search, startsWith",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "TrieNode class with children (map or array of size 26 for lowercase letters) and isEndOfWord boolean. Root node to start.",
              details: [
                "Map representation: flexible, supports any characters",
                "Array representation: fixed size, faster for lowercase letters",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Insert: traverse path character by character, create nodes if missing, mark last node as end. Search: traverse path, return true if path exists and last node is end. StartsWith: traverse path, return true if path exists.",
              details: [
                "Insert: O(m) where m is word length",
                "Search: O(m) where m is word length",
                "StartsWith: O(m) where m is prefix length",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Time O(m) for all operations where m is word/prefix length. Space O(ALPHABET_SIZE × N × M) where N is number of words, M is average length. Can optimize space with compressed tries.",
              details: [
                "Efficient for prefix matching and autocomplete",
                "Space efficient when strings share common prefixes",
              ],
            },
          ],
          pattern: "Trie Data Structure",
          complexity: {
            time: "O(m) per operation",
            space: "O(ALPHABET_SIZE × N × M)",
          },
        }}
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
          <CodeBlock
            code={{
              JavaScript: `// Array-based representation (for fixed alphabet)
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
}`,
              Java: `// Array-based representation (for fixed alphabet)
class TrieNode {
    TrieNode[] children;
    boolean isEndOfWord;
    
    TrieNode() {
        children = new TrieNode[26]; // For lowercase a-z
        isEndOfWord = false;
    }
}

// Hash map-based representation (for any characters)
import java.util.*;

class TrieNode {
    Map<Character, TrieNode> children;
    boolean isEndOfWord;
    
    TrieNode() {
        children = new HashMap<>();
        isEndOfWord = false;
    }
}`,
            }}
          />
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
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Implement complete Trie with advanced features: frequency tracking, prefix counting, word retrieval, and comprehensive operations.",
              details: [
                "Track frequency of each word",
                "Count words with given prefix",
                "Retrieve all words with prefix",
                "Support multiple operations efficiently",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Enhanced TrieNode with frequency and prefixCount fields. Operations: insert (update counts), search (return frequency), getWordsWithPrefix (DFS from prefix node).",
              keywords: [
                "trie",
                "frequency tracking",
                "prefix counting",
                "DFS traversal",
              ],
              details: [
                "Node structure: children, isEndOfWord, frequency, prefixCount",
                "Insert: increment frequency and prefixCount",
                "Prefix search: navigate to prefix node, collect all words",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "TrieNode with Map<Character, TrieNode> children, boolean isEndOfWord, int frequency, int prefixCount. Root node to start.",
              details: [
                "Map representation for flexible character support",
                "Additional fields for enhanced functionality",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Insert: traverse path, increment prefixCount at each node, increment frequency at end node. GetWordsWithPrefix: navigate to prefix node, DFS to collect all words. GetPrefixCount: navigate to prefix node, return prefixCount.",
              details: [
                "Insert: O(m) time, update counts at each level",
                "Prefix operations: O(m) to navigate + O(k) to collect words",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Time O(m) for insert/search, O(m + k) for prefix operations where k is number of words with prefix. Space O(ALPHABET_SIZE × N × M). Enhanced features add minimal overhead.",
              details: [
                "Frequency tracking enables ranking and suggestions",
                "Prefix counting enables efficient autocomplete",
              ],
            },
          ],
          pattern: "Enhanced Trie with Frequency Tracking",
          complexity: {
            time: "O(m) for basic ops, O(m + k) for prefix ops",
            space: "O(ALPHABET_SIZE × N × M)",
          },
        }}
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
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Delete a word from Trie. Must be careful not to remove nodes that are part of other words. Only delete nodes that are not needed.",
              details: [
                "Example: delete 'help' from trie containing 'help' and 'helping'",
                "Should not delete nodes shared with 'helping'",
                "Only delete nodes unique to 'help'",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recursive deletion: traverse to word end, mark as not end, recursively delete nodes from leaf to root. Only delete if node has no children and is not end of another word.",
              keywords: [
                "trie deletion",
                "recursive",
                "backtracking",
                "node cleanup",
              ],
              details: [
                "Bottom-up deletion: delete from leaf to root",
                "Check conditions before deleting each node",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Recursive helper function. Check if word exists first, then delete recursively.",
              details: [
                "Base case: reached end of word",
                "Recursive case: delete child, then check if current node can be deleted",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "If word doesn't exist, return false. Traverse to end of word. Mark end node as not end. Recursively: if current node has no children and is not end, delete it and return true. Otherwise return false.",
              details: [
                "Delete from leaf to root (post-order)",
                "Only delete if node is not needed by other words",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Time O(m) where m is word length. Space O(m) for recursion stack. Can optimize to iterative with stack to avoid recursion overhead.",
              details: [
                "Efficient deletion maintains trie structure",
                "Iterative version uses O(1) space",
              ],
            },
          ],
          pattern: "Trie Deletion (Recursive)",
          complexity: {
            time: "O(m)",
            space: "O(m) recursive, O(1) iterative",
          },
        }}
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
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Count distinct rows in binary matrix. Each row is a sequence of 0s and 1s. Need to identify unique rows efficiently.",
              details: [
                "Example: matrix with rows [1,0,1], [1,0,1], [0,1,0] → 2 distinct rows",
                "Treat each row as a string of bits",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Treat each row as a string (0s and 1s). Insert rows into Trie. If row already exists, it's duplicate. Count distinct rows.",
              keywords: [
                "trie",
                "binary matrix",
                "distinct rows",
                "string matching",
              ],
              details: [
                "Each row is a string of characters '0' and '1'",
                "Trie efficiently checks if row exists",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Trie with nodes having children for '0' and '1'. Mark end of row with isEndOfRow flag. Counter for distinct rows.",
              details: [
                "Binary trie: only two children per node",
                "Track if row is new or duplicate",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "For each row: traverse/create path in Trie bit by bit. If row ends at existing node, it's duplicate. If new path created, increment distinct count. Mark end of row.",
              details: [
                "Insert each row into Trie",
                "Count only rows that create new paths",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Time O(m×n) - process each element once. Space O(m×n) for Trie. More space-efficient than storing all rows when many duplicates exist.",
              details: [
                "Trie shares common prefixes, saving space",
                "Alternative: use Set with row strings for simpler code",
              ],
            },
          ],
          pattern: "Trie for Distinctness Checking",
          complexity: {
            time: "O(m×n)",
            space: "O(m×n)",
          },
        }}
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
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Find all words from dictionary that exist in 2D grid. Words can be formed by moving horizontally/vertically to adjacent cells. Each cell can be used only once per word.",
              details: [
                "Example: grid with 'a','b','c', dictionary=['abc','abd']",
                "Words can be found in any direction",
                "Each cell can be used once per word",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Build Trie from dictionary words. For each cell in grid, DFS to explore all paths. Use Trie to check if current path is valid prefix. Early termination when no valid path exists.",
              keywords: ["trie", "DFS", "backtracking", "2D grid search"],
              details: [
                "Trie enables early pruning of invalid paths",
                "DFS explores all possible paths from each cell",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Trie built from dictionary. Visited matrix to track used cells. DFS with backtracking.",
              details: [
                "Trie: efficient prefix checking",
                "Visited array: mark cells used in current path",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Build Trie from dictionary. For each cell: DFS starting from that cell. In DFS: if current path forms word, add to result. If Trie path doesn't exist, backtrack. Mark cell as visited, explore 4 directions, unmark cell.",
              details: [
                "Trie allows early termination",
                "Backtracking: mark/unmark cells",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Time O(m×n×4^L) worst case where L is max word length. Space O(W×L) for Trie, O(m×n) for visited. Trie optimization: remove found words from Trie to avoid duplicates.",
              details: [
                "Trie significantly reduces search space",
                "Early termination improves practical performance",
              ],
            },
          ],
          pattern: "Trie + DFS (2D Grid Search)",
          complexity: {
            time: "O(m×n×4^L)",
            space: "O(W×L)",
          },
        }}
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
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Find longest common prefix among all strings. Prefix is shared by all strings from the beginning.",
              details: [
                "Example: ['flower','flow','flight'] → 'fl'",
                "If no common prefix, return empty string",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Insert all strings into Trie. Traverse from root, following common path. Stop when node has multiple children (divergence) or end of word marker.",
              keywords: [
                "trie",
                "common prefix",
                "prefix matching",
                "string comparison",
              ],
              details: [
                "Common prefix = shared path from root",
                "Divergence = multiple children or end of word",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Trie with all strings inserted. Traverse from root, track path length, stop at divergence.",
              details: [
                "Trie naturally shares common prefixes",
                "Track current path to build result",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Insert all strings into Trie. Start at root. While current node has exactly one child and is not end of word: move to child, append character to prefix. Return prefix when node has multiple children or is end of word.",
              details: [
                "Single child = common character",
                "Multiple children = divergence, prefix ends",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Time O(S) where S is sum of all characters (insert all strings). Space O(S) for Trie. Alternative: compare strings directly O(N×M) where N is number of strings, M is min length.",
              details: [
                "Trie approach is efficient for many strings",
                "Direct comparison is simpler for few strings",
              ],
            },
          ],
          pattern: "Trie for Common Prefix",
          complexity: {
            time: "O(S)",
            space: "O(S)",
          },
        }}
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
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Implement auto-complete system: given user input prefix, suggest top words that start with prefix. Rank suggestions by frequency (popularity).",
              details: [
                "Example: input 'hel' → suggest ['hello','help','helping']",
                "Suggestions sorted by frequency (most popular first)",
                "Support learning: update frequency when word is selected",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Trie stores words with frequency. For prefix: navigate to prefix node, DFS to collect all words from that node, sort by frequency, return top k.",
              keywords: [
                "trie",
                "autocomplete",
                "frequency ranking",
                "prefix search",
              ],
              details: [
                "Store frequency in TrieNode",
                "Navigate to prefix, then collect words",
                "Sort and return top suggestions",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Trie with frequency in each node. AutoComplete class that maintains current input and provides suggestions.",
              details: [
                "TrieNode: children, isEndOfWord, frequency",
                "AutoComplete: trie, currentInput string",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Insert words with initial frequency. For suggestions: navigate to prefix node, DFS from that node to collect all words with frequencies, sort by frequency descending, return top k. For learning: when word selected, increment its frequency in Trie.",
              details: [
                "Navigate: O(m) where m is prefix length",
                "Collect: O(k) where k is words with prefix",
                "Sort: O(k log k)",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Time O(m + k log k) for suggestions where m is prefix length, k is candidates. Space O(W×L) for Trie. Can optimize with caching frequently accessed prefixes.",
              details: [
                "Efficient for real-time autocomplete",
                "Learning feature improves suggestions over time",
              ],
            },
          ],
          pattern: "Trie for Autocomplete",
          complexity: {
            time: "O(m + k log k)",
            space: "O(W×L)",
          },
        }}
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
