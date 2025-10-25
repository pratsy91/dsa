"use client";
import Link from "next/link";
import { useState } from "react";

export default function Trees() {
  const [activeTab, setActiveTab] = useState("fundamentals");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <header className="border-b border-gray-700 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link
            href="/"
            className="text-green-400 hover:text-green-300 mb-2 inline-block"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
            Trees Mastery
          </h1>
          <p className="text-gray-400 mt-2">
            Binary Trees, Traversals & Advanced Tree Algorithms
          </p>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-gray-800/50 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-2 overflow-x-auto">
            {[
              { id: "fundamentals", label: "📚 Fundamentals" },
              { id: "traversals", label: "🔄 Traversals" },
              { id: "basic", label: "⚙️ Basic Problems" },
              { id: "advanced", label: "🚀 Advanced Problems" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 font-semibold whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? "text-green-400 border-b-2 border-green-400"
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
        {activeTab === "traversals" && <TraversalsSection />}
        {activeTab === "basic" && <BasicSection />}
        {activeTab === "advanced" && <AdvancedSection />}
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
          Tree Fundamentals
        </h2>
        <p className="text-gray-300 text-lg mb-6">
          Understanding trees as hierarchical data structures and their
          fundamental concepts.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-200 mb-3">
              Key Concepts:
            </h3>
            <ul className="space-y-2 text-green-100">
              <li>
                • <strong>Node:</strong> Basic unit containing data
              </li>
              <li>
                • <strong>Root:</strong> Topmost node (no parent)
              </li>
              <li>
                • <strong>Leaf:</strong> Node with no children
              </li>
              <li>
                • <strong>Height:</strong> Longest path from root to leaf
              </li>
              <li>
                • <strong>Depth:</strong> Distance from root to node
              </li>
              <li>
                • <strong>Subtree:</strong> Tree formed by a node and
                descendants
              </li>
            </ul>
          </div>

          <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-emerald-200 mb-3">
              Binary Tree:
            </h3>
            <ul className="space-y-2 text-emerald-100">
              <li>
                • <strong>Left Child:</strong> Left subtree root
              </li>
              <li>
                • <strong>Right Child:</strong> Right subtree root
              </li>
              <li>
                • <strong>Complete:</strong> All levels filled except last
              </li>
              <li>
                • <strong>Full:</strong> Every node has 0 or 2 children
              </li>
              <li>
                • <strong>Perfect:</strong> All leaves at same level
              </li>
              <li>
                • <strong>Balanced:</strong> Height difference ≤ 1
              </li>
            </ul>
          </div>
        </div>

        <TheoryBlock title="Tree Node Implementation in JavaScript">
          <CodeBlock
            code={`// Tree Node Implementation

class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// Binary Tree Implementation
class BinaryTree {
  constructor() {
    this.root = null;
  }
  
  // Insert node
  insert(data) {
    const newNode = new TreeNode(data);
    
    if (this.root === null) {
      this.root = newNode;
      return;
    }
    
    // Level order insertion
    const queue = [this.root];
    
    while (queue.length > 0) {
      const current = queue.shift();
      
      if (current.left === null) {
        current.left = newNode;
        return;
      } else if (current.right === null) {
        current.right = newNode;
        return;
      } else {
        queue.push(current.left);
        queue.push(current.right);
      }
    }
  }
  
  // Search node
  search(data) {
    return this.searchHelper(this.root, data);
  }
  
  searchHelper(node, data) {
    if (node === null) return false;
    if (node.data === data) return true;
    
    return this.searchHelper(node.left, data) || 
           this.searchHelper(node.right, data);
  }
  
  // Get height
  getHeight() {
    return this.heightHelper(this.root);
  }
  
  heightHelper(node) {
    if (node === null) return 0;
    
    const leftHeight = this.heightHelper(node.left);
    const rightHeight = this.heightHelper(node.right);
    
    return Math.max(leftHeight, rightHeight) + 1;
  }
  
  // Count nodes
  countNodes() {
    return this.countHelper(this.root);
  }
  
  countHelper(node) {
    if (node === null) return 0;
    
    return 1 + this.countHelper(node.left) + this.countHelper(node.right);
  }
  
  // Check if empty
  isEmpty() {
    return this.root === null;
  }
}

// Usage example
const tree = new BinaryTree();
tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(5);

console.log("Tree height:", tree.getHeight()); // 3
console.log("Node count:", tree.countNodes()); // 5
console.log("Search 3:", tree.search(3)); // true`}
          />
        </TheoryBlock>
      </div>

      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Applications of Trees
        </h2>
        <p className="text-gray-300 mb-6">
          Real-world applications where trees are commonly used.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-3">
              💻 File Systems
            </h3>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>• Directory structure</li>
              <li>• File organization</li>
              <li>• Path navigation</li>
            </ul>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-3">
              🔍 Search & Sort
            </h3>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>• Binary search trees</li>
              <li>• Heap data structures</li>
              <li>• Trie for strings</li>
            </ul>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-3">
              🧮 Expression Parsing
            </h3>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>• Expression trees</li>
              <li>• Compiler design</li>
              <li>• Syntax analysis</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// Traversals Section
function TraversalsSection() {
  return (
    <div className="space-y-8">
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">Tree Traversals</h2>
        <p className="text-gray-300 mb-6">
          Different ways to visit all nodes in a tree systematically.
        </p>
      </div>

      <ProblemBlock
        title="1. Implementation of Inorder Traversal"
        difficulty="Easy"
        description="Implement inorder traversal (Left, Root, Right) of a binary tree."
        solution={`// Implementation of Inorder Traversal

// Recursive implementation
function inorderTraversal(root) {
  const result = [];
  
  function inorder(node) {
    if (node === null) return;
    
    inorder(node.left);   // Visit left subtree
    result.push(node.data); // Visit root
    inorder(node.right);  // Visit right subtree
  }
  
  inorder(root);
  return result;
}

// Iterative implementation using stack
function inorderTraversalIterative(root) {
  const result = [];
  const stack = [];
  let current = root;
  
  while (current !== null || stack.length > 0) {
    // Go to leftmost node
    while (current !== null) {
      stack.push(current);
      current = current.left;
    }
    
    // Process current node
    current = stack.pop();
    result.push(current.data);
    
    // Move to right subtree
    current = current.right;
  }
  
  return result;
}

// Morris traversal (O(1) space)
function inorderTraversalMorris(root) {
  const result = [];
  let current = root;
  
  while (current !== null) {
    if (current.left === null) {
      result.push(current.data);
      current = current.right;
    } else {
      // Find inorder predecessor
      let predecessor = current.left;
      while (predecessor.right !== null && predecessor.right !== current) {
        predecessor = predecessor.right;
      }
      
      if (predecessor.right === null) {
        // Create temporary link
        predecessor.right = current;
        current = current.left;
      } else {
        // Remove temporary link
        predecessor.right = null;
        result.push(current.data);
        current = current.right;
      }
    }
  }
  
  return result;
}

// Test cases
function createTestTree() {
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  root.right.left = new TreeNode(6);
  root.right.right = new TreeNode(7);
  return root;
}

const tree = createTestTree();

console.log("=== Testing Inorder Traversal ===");
console.log("Recursive:", inorderTraversal(tree)); // [4, 2, 5, 1, 6, 3, 7]
console.log("Iterative:", inorderTraversalIterative(tree)); // [4, 2, 5, 1, 6, 3, 7]
console.log("Morris:", inorderTraversalMorris(tree)); // [4, 2, 5, 1, 6, 3, 7]`}
        explanation="Inorder visits left subtree, then root, then right subtree. Recursive: O(n) time, O(h) space. Iterative: O(n) time, O(h) space. Morris: O(n) time, O(1) space."
      />

      <ProblemBlock
        title="2. Implementation of Preorder Traversal"
        difficulty="Easy"
        description="Implement preorder traversal (Root, Left, Right) of a binary tree."
        solution={`// Implementation of Preorder Traversal

// Recursive implementation
function preorderTraversal(root) {
  const result = [];
  
  function preorder(node) {
    if (node === null) return;
    
    result.push(node.data); // Visit root
    preorder(node.left);    // Visit left subtree
    preorder(node.right);   // Visit right subtree
  }
  
  preorder(root);
  return result;
}

// Iterative implementation using stack
function preorderTraversalIterative(root) {
  if (root === null) return [];
  
  const result = [];
  const stack = [root];
  
  while (stack.length > 0) {
    const current = stack.pop();
    result.push(current.data);
    
    // Push right child first, then left
    if (current.right !== null) {
      stack.push(current.right);
    }
    if (current.left !== null) {
      stack.push(current.left);
    }
  }
  
  return result;
}

// Space optimized iterative (right to left)
function preorderTraversalOptimized(root) {
  const result = [];
  const stack = [];
  let current = root;
  
  while (current !== null || stack.length > 0) {
    while (current !== null) {
      result.push(current.data);
      if (current.right !== null) {
        stack.push(current.right);
      }
      current = current.left;
    }
    
    if (stack.length > 0) {
      current = stack.pop();
    }
  }
  
  return result;
}

// Test cases
function createTestTree() {
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  root.right.left = new TreeNode(6);
  root.right.right = new TreeNode(7);
  return root;
}

const tree = createTestTree();

console.log("=== Testing Preorder Traversal ===");
console.log("Recursive:", preorderTraversal(tree)); // [1, 2, 4, 5, 3, 6, 7]
console.log("Iterative:", preorderTraversalIterative(tree)); // [1, 2, 4, 5, 3, 6, 7]
console.log("Optimized:", preorderTraversalOptimized(tree)); // [1, 2, 4, 5, 3, 6, 7]`}
        explanation="Preorder visits root, then left subtree, then right subtree. Recursive: O(n) time, O(h) space. Iterative: O(n) time, O(h) space. Optimized: O(n) time, O(h) space."
      />

      <ProblemBlock
        title="3. Implementation of Postorder Traversal"
        difficulty="Easy"
        description="Implement postorder traversal (Left, Right, Root) of a binary tree."
        solution={`// Implementation of Postorder Traversal

// Recursive implementation
function postorderTraversal(root) {
  const result = [];
  
  function postorder(node) {
    if (node === null) return;
    
    postorder(node.left);   // Visit left subtree
    postorder(node.right);  // Visit right subtree
    result.push(node.data); // Visit root
  }
  
  postorder(root);
  return result;
}

// Iterative implementation using two stacks
function postorderTraversalIterative(root) {
  if (root === null) return [];
  
  const result = [];
  const stack1 = [root];
  const stack2 = [];
  
  while (stack1.length > 0) {
    const current = stack1.pop();
    stack2.push(current);
    
    if (current.left !== null) {
      stack1.push(current.left);
    }
    if (current.right !== null) {
      stack1.push(current.right);
    }
  }
  
  while (stack2.length > 0) {
    result.push(stack2.pop().data);
  }
  
  return result;
}

// Iterative using single stack
function postorderTraversalSingleStack(root) {
  if (root === null) return [];
  
  const result = [];
  const stack = [];
  let current = root;
  let lastVisited = null;
  
  while (current !== null || stack.length > 0) {
    if (current !== null) {
      stack.push(current);
      current = current.left;
    } else {
      const peekNode = stack[stack.length - 1];
      
      if (peekNode.right !== null && lastVisited !== peekNode.right) {
        current = peekNode.right;
      } else {
        result.push(peekNode.data);
        lastVisited = stack.pop();
      }
    }
  }
  
  return result;
}

// Test cases
function createTestTree() {
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  root.right.left = new TreeNode(6);
  root.right.right = new TreeNode(7);
  return root;
}

const tree = createTestTree();

console.log("=== Testing Postorder Traversal ===");
console.log("Recursive:", postorderTraversal(tree)); // [4, 5, 2, 6, 7, 3, 1]
console.log("Two stacks:", postorderTraversalIterative(tree)); // [4, 5, 2, 6, 7, 3, 1]
console.log("Single stack:", postorderTraversalSingleStack(tree)); // [4, 5, 2, 6, 7, 3, 1]`}
        explanation="Postorder visits left subtree, then right subtree, then root. Recursive: O(n) time, O(h) space. Two stacks: O(n) time, O(n) space. Single stack: O(n) time, O(h) space."
      />

      <ProblemBlock
        title="4. Level Order Traversal"
        difficulty="Medium"
        description="Implement level order traversal (breadth-first) of a binary tree using queue."
        solution={`// Level Order Traversal

// Basic level order traversal
function levelOrderTraversal(root) {
  if (root === null) return [];
  
  const result = [];
  const queue = [root];
  
  while (queue.length > 0) {
    const current = queue.shift();
    result.push(current.data);
    
    if (current.left !== null) {
      queue.push(current.left);
    }
    if (current.right !== null) {
      queue.push(current.right);
    }
  }
  
  return result;
}

// Level order traversal line by line
function levelOrderLineByLine(root) {
  if (root === null) return [];
  
  const result = [];
  const queue = [root];
  
  while (queue.length > 0) {
    const levelSize = queue.length;
    const currentLevel = [];
    
    for (let i = 0; i < levelSize; i++) {
      const current = queue.shift();
      currentLevel.push(current.data);
      
      if (current.left !== null) {
        queue.push(current.left);
      }
      if (current.right !== null) {
        queue.push(current.right);
      }
    }
    
    result.push(currentLevel);
  }
  
  return result;
}

// Level order traversal with detailed output
function levelOrderDetailed(root) {
  if (root === null) {
    console.log("Tree is empty");
    return;
  }
  
  const queue = [root];
  let level = 0;
  
  while (queue.length > 0) {
    const levelSize = queue.length;
    console.log(\`Level \${level}:\`);
    
    for (let i = 0; i < levelSize; i++) {
      const current = queue.shift();
      console.log(\`  \${current.data}\`);
      
      if (current.left !== null) {
        queue.push(current.left);
      }
      if (current.right !== null) {
        queue.push(current.right);
      }
    }
    
    level++;
  }
}

// Reverse level order traversal
function reverseLevelOrder(root) {
  if (root === null) return [];
  
  const result = [];
  const queue = [root];
  const stack = [];
  
  while (queue.length > 0) {
    const current = queue.shift();
    stack.push(current.data);
    
    // Add right child first, then left
    if (current.right !== null) {
      queue.push(current.right);
    }
    if (current.left !== null) {
      queue.push(current.left);
    }
  }
  
  // Pop from stack to get reverse order
  while (stack.length > 0) {
    result.push(stack.pop());
  }
  
  return result;
}

// Test cases
function createTestTree() {
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  root.right.left = new TreeNode(6);
  root.right.right = new TreeNode(7);
  return root;
}

const tree = createTestTree();

console.log("=== Testing Level Order Traversal ===");
console.log("Basic:", levelOrderTraversal(tree)); // [1, 2, 3, 4, 5, 6, 7]
console.log("Line by line:", levelOrderLineByLine(tree)); // [[1], [2, 3], [4, 5, 6, 7]]
console.log("Reverse:", reverseLevelOrder(tree)); // [4, 5, 6, 7, 2, 3, 1]

console.log("\\n=== Detailed Level Order ===");
levelOrderDetailed(tree);`}
        explanation="Level order uses BFS with queue. Process nodes level by level. Line by line: track level size. Reverse: use stack after BFS. Time: O(n), Space: O(w) where w is maximum width."
      />
    </div>
  );
}

// Basic Section
function BasicSection() {
  return (
    <div className="space-y-8">
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Basic Tree Problems
        </h2>
        <p className="text-gray-300 mb-6">
          Fundamental tree problems including height, size, maximum, and view
          problems.
        </p>
      </div>

      <ProblemBlock
        title="5. Height of Binary Tree"
        difficulty="Easy"
        description="Find the height (maximum depth) of a binary tree."
        solution={`// Height of Binary Tree

// Recursive approach
function heightOfBinaryTree(root) {
  if (root === null) return 0;
  
  const leftHeight = heightOfBinaryTree(root.left);
  const rightHeight = heightOfBinaryTree(root.right);
  
  return Math.max(leftHeight, rightHeight) + 1;
}

// Iterative approach using level order
function heightIterative(root) {
  if (root === null) return 0;
  
  const queue = [root];
  let height = 0;
  
  while (queue.length > 0) {
    const levelSize = queue.length;
    height++;
    
    for (let i = 0; i < levelSize; i++) {
      const current = queue.shift();
      
      if (current.left !== null) {
        queue.push(current.left);
      }
      if (current.right !== null) {
        queue.push(current.right);
      }
    }
  }
  
  return height;
}

// Alternative recursive with detailed explanation
function heightDetailed(root) {
  console.log("Calculating height of binary tree");
  
  function heightHelper(node, depth) {
    if (node === null) {
      console.log(\`Leaf reached at depth \${depth}\`);
      return depth;
    }
    
    console.log(\`Processing node \${node.data} at depth \${depth}\`);
    
    const leftHeight = heightHelper(node.left, depth + 1);
    const rightHeight = heightHelper(node.right, depth + 1);
    
    const maxHeight = Math.max(leftHeight, rightHeight);
    console.log(\`Node \${node.data}: left height = \${leftHeight}, right height = \${rightHeight}, max = \${maxHeight}\`);
    
    return maxHeight;
  }
  
  return heightHelper(root, 0);
}

// Test cases
function createTestTree() {
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  root.right.left = new TreeNode(6);
  root.right.right = new TreeNode(7);
  root.left.left.left = new TreeNode(8);
  return root;
}

const tree = createTestTree();

console.log("=== Testing Height of Binary Tree ===");
console.log("Recursive height:", heightOfBinaryTree(tree)); // 4
console.log("Iterative height:", heightIterative(tree)); // 4

console.log("\\n=== Detailed Height Calculation ===");
heightDetailed(tree);`}
        explanation="Height is maximum depth from root to leaf. Recursive: O(n) time, O(h) space. Iterative: O(n) time, O(w) space where w is maximum width."
      />

      <ProblemBlock
        title="6. Size of Binary Tree"
        difficulty="Easy"
        description="Count the total number of nodes in a binary tree."
        solution={`// Size of Binary Tree

// Recursive approach
function sizeOfBinaryTree(root) {
  if (root === null) return 0;
  
  return 1 + sizeOfBinaryTree(root.left) + sizeOfBinaryTree(root.right);
}

// Iterative approach using level order
function sizeIterative(root) {
  if (root === null) return 0;
  
  let count = 0;
  const queue = [root];
  
  while (queue.length > 0) {
    const current = queue.shift();
    count++;
    
    if (current.left !== null) {
      queue.push(current.left);
    }
    if (current.right !== null) {
      queue.push(current.right);
    }
  }
  
  return count;
}

// Alternative recursive with detailed explanation
function sizeDetailed(root) {
  console.log("Calculating size of binary tree");
  
  function sizeHelper(node) {
    if (node === null) {
      console.log("Null node, returning 0");
      return 0;
    }
    
    console.log(\`Processing node \${node.data}\`);
    
    const leftSize = sizeHelper(node.left);
    const rightSize = sizeHelper(node.right);
    const totalSize = 1 + leftSize + rightSize;
    
    console.log(\`Node \${node.data}: left size = \${leftSize}, right size = \${rightSize}, total = \${totalSize}\`);
    
    return totalSize;
  }
  
  return sizeHelper(root);
}

// Count specific types of nodes
function countLeafNodes(root) {
  if (root === null) return 0;
  
  if (root.left === null && root.right === null) {
    return 1;
  }
  
  return countLeafNodes(root.left) + countLeafNodes(root.right);
}

function countInternalNodes(root) {
  if (root === null) return 0;
  
  if (root.left === null && root.right === null) {
    return 0;
  }
  
  return 1 + countInternalNodes(root.left) + countInternalNodes(root.right);
}

// Test cases
function createTestTree() {
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  root.right.left = new TreeNode(6);
  root.right.right = new TreeNode(7);
  return root;
}

const tree = createTestTree();

console.log("=== Testing Size of Binary Tree ===");
console.log("Recursive size:", sizeOfBinaryTree(tree)); // 7
console.log("Iterative size:", sizeIterative(tree)); // 7
console.log("Leaf nodes:", countLeafNodes(tree)); // 4
console.log("Internal nodes:", countInternalNodes(tree)); // 3

console.log("\\n=== Detailed Size Calculation ===");
sizeDetailed(tree);`}
        explanation="Size is total number of nodes. Recursive: O(n) time, O(h) space. Iterative: O(n) time, O(w) space. Count leaf nodes: nodes with no children. Count internal nodes: nodes with at least one child."
      />

      <ProblemBlock
        title="7. Maximum in Binary Tree"
        difficulty="Easy"
        description="Find the maximum value in a binary tree."
        solution={`// Maximum in Binary Tree

// Recursive approach
function maximumInBinaryTree(root) {
  if (root === null) return Number.MIN_SAFE_INTEGER;
  
  const leftMax = maximumInBinaryTree(root.left);
  const rightMax = maximumInBinaryTree(root.right);
  
  return Math.max(root.data, leftMax, rightMax);
}

// Iterative approach using level order
function maximumIterative(root) {
  if (root === null) return Number.MIN_SAFE_INTEGER;
  
  let max = Number.MIN_SAFE_INTEGER;
  const queue = [root];
  
  while (queue.length > 0) {
    const current = queue.shift();
    max = Math.max(max, current.data);
    
    if (current.left !== null) {
      queue.push(current.left);
    }
    if (current.right !== null) {
      queue.push(current.right);
    }
  }
  
  return max;
}

// Alternative recursive with detailed explanation
function maximumDetailed(root) {
  console.log("Finding maximum in binary tree");
  
  function maxHelper(node) {
    if (node === null) {
      console.log("Null node, returning minimum value");
      return Number.MIN_SAFE_INTEGER;
    }
    
    console.log(\`Processing node \${node.data}\`);
    
    const leftMax = maxHelper(node.left);
    const rightMax = maxHelper(node.right);
    const currentMax = Math.max(node.data, leftMax, rightMax);
    
    console.log(\`Node \${node.data}: left max = \${leftMax}, right max = \${rightMax}, current max = \${currentMax}\`);
    
    return currentMax;
  }
  
  return maxHelper(root);
}

// Find minimum as well
function minimumInBinaryTree(root) {
  if (root === null) return Number.MAX_SAFE_INTEGER;
  
  const leftMin = minimumInBinaryTree(root.left);
  const rightMin = minimumInBinaryTree(root.right);
  
  return Math.min(root.data, leftMin, rightMin);
}

// Find both min and max in single traversal
function findMinMax(root) {
  if (root === null) {
    return { min: Number.MAX_SAFE_INTEGER, max: Number.MIN_SAFE_INTEGER };
  }
  
  const leftResult = findMinMax(root.left);
  const rightResult = findMinMax(root.right);
  
  return {
    min: Math.min(root.data, leftResult.min, rightResult.min),
    max: Math.max(root.data, leftResult.max, rightResult.max)
  };
}

// Test cases
function createTestTree() {
  const root = new TreeNode(10);
  root.left = new TreeNode(5);
  root.right = new TreeNode(15);
  root.left.left = new TreeNode(3);
  root.left.right = new TreeNode(8);
  root.right.left = new TreeNode(12);
  root.right.right = new TreeNode(20);
  return root;
}

const tree = createTestTree();

console.log("=== Testing Maximum in Binary Tree ===");
console.log("Recursive max:", maximumInBinaryTree(tree)); // 20
console.log("Iterative max:", maximumIterative(tree)); // 20
console.log("Minimum:", minimumInBinaryTree(tree)); // 3
console.log("Min and Max:", findMinMax(tree)); // { min: 3, max: 20 }

console.log("\\n=== Detailed Maximum Calculation ===");
maximumDetailed(tree);`}
        explanation="Maximum is largest value in tree. Recursive: O(n) time, O(h) space. Iterative: O(n) time, O(w) space. Can find both min and max in single traversal for efficiency."
      />

      <ProblemBlock
        title="8. Print Left View of Binary Tree"
        difficulty="Medium"
        description="Print the left view of a binary tree (first node of each level)."
        solution={`// Print Left View of Binary Tree

// Recursive approach using level tracking
function leftViewRecursive(root) {
  const result = [];
  const maxLevel = { value: 0 };
  
  function leftViewHelper(node, level, maxLevel) {
    if (node === null) return;
    
    // If this is the first node of its level
    if (maxLevel.value < level) {
      result.push(node.data);
      maxLevel.value = level;
    }
    
    // Recur for left and right subtrees
    leftViewHelper(node.left, level + 1, maxLevel);
    leftViewHelper(node.right, level + 1, maxLevel);
  }
  
  leftViewHelper(root, 1, maxLevel);
  return result;
}

// Iterative approach using level order
function leftViewIterative(root) {
  if (root === null) return [];
  
  const result = [];
  const queue = [root];
  
  while (queue.length > 0) {
    const levelSize = queue.length;
    
    // Process first node of current level
    result.push(queue[0].data);
    
    // Process remaining nodes of current level
    for (let i = 0; i < levelSize; i++) {
      const current = queue.shift();
      
      if (current.left !== null) {
        queue.push(current.left);
      }
      if (current.right !== null) {
        queue.push(current.right);
      }
    }
  }
  
  return result;
}

// Right view of binary tree
function rightViewRecursive(root) {
  const result = [];
  const maxLevel = { value: 0 };
  
  function rightViewHelper(node, level, maxLevel) {
    if (node === null) return;
    
    // If this is the first node of its level
    if (maxLevel.value < level) {
      result.push(node.data);
      maxLevel.value = level;
    }
    
    // Recur for right and left subtrees (right first)
    rightViewHelper(node.right, level + 1, maxLevel);
    rightViewHelper(node.left, level + 1, maxLevel);
  }
  
  rightViewHelper(root, 1, maxLevel);
  return result;
}

// Top view of binary tree
function topView(root) {
  if (root === null) return [];
  
  const map = new Map();
  const queue = [{ node: root, hd: 0 }];
  
  while (queue.length > 0) {
    const { node, hd } = queue.shift();
    
    if (!map.has(hd)) {
      map.set(hd, node.data);
    }
    
    if (node.left !== null) {
      queue.push({ node: node.left, hd: hd - 1 });
    }
    if (node.right !== null) {
      queue.push({ node: node.right, hd: hd + 1 });
    }
  }
  
  // Sort by horizontal distance
  const sortedEntries = Array.from(map.entries()).sort((a, b) => a[0] - b[0]);
  return sortedEntries.map(entry => entry[1]);
}

// Test cases
function createTestTree() {
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  root.right.left = new TreeNode(6);
  root.right.right = new TreeNode(7);
  root.left.left.left = new TreeNode(8);
  return root;
}

const tree = createTestTree();

console.log("=== Testing Tree Views ===");
console.log("Left view:", leftViewRecursive(tree)); // [1, 2, 4, 8]
console.log("Left view (iterative):", leftViewIterative(tree)); // [1, 2, 4, 8]
console.log("Right view:", rightViewRecursive(tree)); // [1, 3, 7, 8]
console.log("Top view:", topView(tree)); // [8, 4, 2, 1, 3, 7]`}
        explanation="Left view shows first node of each level. Use level tracking or level order traversal. Right view: process right subtree first. Top view: use horizontal distance. Time: O(n), Space: O(h)."
      />

      <ProblemBlock
        title="9. Print Nodes at K Distance"
        difficulty="Medium"
        description="Print all nodes at distance k from the root."
        solution={`// Print Nodes at K Distance

// Recursive approach
function nodesAtKDistance(root, k) {
  const result = [];
  
  function printKDistance(node, distance) {
    if (node === null) return;
    
    if (distance === 0) {
      result.push(node.data);
      return;
    }
    
    printKDistance(node.left, distance - 1);
    printKDistance(node.right, distance - 1);
  }
  
  printKDistance(root, k);
  return result;
}

// Iterative approach using level order
function nodesAtKDistanceIterative(root, k) {
  if (root === null) return [];
  
  const queue = [root];
  let level = 0;
  
  while (queue.length > 0) {
    const levelSize = queue.length;
    
    if (level === k) {
      return queue.map(node => node.data);
    }
    
    for (let i = 0; i < levelSize; i++) {
      const current = queue.shift();
      
      if (current.left !== null) {
        queue.push(current.left);
      }
      if (current.right !== null) {
        queue.push(current.right);
      }
    }
    
    level++;
  }
  
  return [];
}

// Print nodes at distance k from a given node
function nodesAtKDistanceFromNode(root, target, k) {
  const result = [];
  
  function printKDistanceDown(node, distance) {
    if (node === null || distance < 0) return;
    
    if (distance === 0) {
      result.push(node.data);
      return;
    }
    
    printKDistanceDown(node.left, distance - 1);
    printKDistanceDown(node.right, distance - 1);
  }
  
  function findTarget(node, target, k) {
    if (node === null) return -1;
    
    if (node.data === target) {
      printKDistanceDown(node, k);
      return 0;
    }
    
    const leftDistance = findTarget(node.left, target, k);
    if (leftDistance !== -1) {
      if (leftDistance + 1 === k) {
        result.push(node.data);
      } else {
        printKDistanceDown(node.right, k - leftDistance - 2);
      }
      return leftDistance + 1;
    }
    
    const rightDistance = findTarget(node.right, target, k);
    if (rightDistance !== -1) {
      if (rightDistance + 1 === k) {
        result.push(node.data);
      } else {
        printKDistanceDown(node.left, k - rightDistance - 2);
      }
      return rightDistance + 1;
    }
    
    return -1;
  }
  
  findTarget(root, target, k);
  return result;
}

// Test cases
function createTestTree() {
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  root.right.left = new TreeNode(6);
  root.right.right = new TreeNode(7);
  root.left.left.left = new TreeNode(8);
  return root;
}

const tree = createTestTree();

console.log("=== Testing Nodes at K Distance ===");
console.log("Nodes at distance 0:", nodesAtKDistance(tree, 0)); // [1]
console.log("Nodes at distance 1:", nodesAtKDistance(tree, 1)); // [2, 3]
console.log("Nodes at distance 2:", nodesAtKDistance(tree, 2)); // [4, 5, 6, 7]
console.log("Nodes at distance 3:", nodesAtKDistance(tree, 3)); // [8]

console.log("\\nIterative approach:");
console.log("Nodes at distance 2:", nodesAtKDistanceIterative(tree, 2)); // [4, 5, 6, 7]

console.log("\\nFrom specific node:");
console.log("Nodes at distance 1 from node 2:", nodesAtKDistanceFromNode(tree, 2, 1)); // [4, 5, 1]`}
        explanation="Print nodes at distance k from root. Recursive: O(n) time, O(h) space. Iterative: O(n) time, O(w) space. From specific node: find target first, then print nodes at distance k."
      />

      <ProblemBlock
        title="10. Children Sum Property"
        difficulty="Medium"
        description="Check if a binary tree satisfies the children sum property (parent = sum of children)."
        solution={`// Children Sum Property

// Check if tree satisfies children sum property
function childrenSumProperty(root) {
  if (root === null) return true;
  
  // If leaf node, it satisfies the property
  if (root.left === null && root.right === null) {
    return true;
  }
  
  let sum = 0;
  if (root.left !== null) {
    sum += root.left.data;
  }
  if (root.right !== null) {
    sum += root.right.data;
  }
  
  return (root.data === sum) && 
         childrenSumProperty(root.left) && 
         childrenSumProperty(root.right);
}

// Convert tree to satisfy children sum property
function convertToChildrenSum(root) {
  if (root === null) return;
  
  // If leaf node, return
  if (root.left === null && root.right === null) {
    return;
  }
  
  // Convert left and right subtrees
  convertToChildrenSum(root.left);
  convertToChildrenSum(root.right);
  
  // Calculate sum of children
  let sum = 0;
  if (root.left !== null) {
    sum += root.left.data;
  }
  if (root.right !== null) {
    sum += root.right.data;
  }
  
  // If sum is greater than current node, update current node
  if (sum > root.data) {
    root.data = sum;
  } else if (sum < root.data) {
    // If sum is less, update children
    const diff = root.data - sum;
    if (root.left !== null) {
      root.left.data += diff;
    } else if (root.right !== null) {
      root.right.data += diff;
    }
  }
}

// Alternative approach with detailed explanation
function childrenSumPropertyDetailed(root) {
  console.log("Checking children sum property");
  
  function checkProperty(node) {
    if (node === null) {
      console.log("Null node, property satisfied");
      return true;
    }
    
    // If leaf node, it satisfies the property
    if (node.left === null && node.right === null) {
      console.log(\`Leaf node \${node.data}, property satisfied\`);
      return true;
    }
    
    let sum = 0;
    if (node.left !== null) {
      sum += node.left.data;
    }
    if (node.right !== null) {
      sum += node.right.data;
    }
    
    console.log(\`Node \${node.data}: left = \${node.left?.data || 0}, right = \${node.right?.data || 0}, sum = \${sum}\`);
    
    const propertySatisfied = node.data === sum;
    console.log(\`Property satisfied for node \${node.data}: \${propertySatisfied}\`);
    
    return propertySatisfied && 
           checkProperty(node.left) && 
           checkProperty(node.right);
  }
  
  return checkProperty(root);
}

// Test cases
function createTestTree1() {
  // Tree that satisfies children sum property
  const root = new TreeNode(10);
  root.left = new TreeNode(8);
  root.right = new TreeNode(2);
  root.left.left = new TreeNode(3);
  root.left.right = new TreeNode(5);
  root.right.left = new TreeNode(2);
  return root;
}

function createTestTree2() {
  // Tree that doesn't satisfy children sum property
  const root = new TreeNode(10);
  root.left = new TreeNode(8);
  root.right = new TreeNode(2);
  root.left.left = new TreeNode(3);
  root.left.right = new TreeNode(5);
  root.right.left = new TreeNode(1);
  return root;
}

const tree1 = createTestTree1();
const tree2 = createTestTree2();

console.log("=== Testing Children Sum Property ===");
console.log("Tree 1 satisfies property:", childrenSumProperty(tree1)); // true
console.log("Tree 2 satisfies property:", childrenSumProperty(tree2)); // false

console.log("\\n=== Detailed Property Check ===");
childrenSumPropertyDetailed(tree1);

console.log("\\n=== Converting Tree to Satisfy Property ===");
const tree3 = createTestTree2();
console.log("Before conversion:", childrenSumProperty(tree3));
convertToChildrenSum(tree3);
console.log("After conversion:", childrenSumProperty(tree3));`}
        explanation="Children sum property: parent = sum of children. Check recursively for all nodes. Convert tree: update parent if sum > parent, update children if sum < parent. Time: O(n), Space: O(h)."
      />
    </div>
  );
}

// Advanced Section
function AdvancedSection() {
  return (
    <div className="space-y-8">
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Advanced Tree Problems
        </h2>
        <p className="text-gray-300 mb-6">
          Advanced tree problems including balanced trees, construction, and
          complex algorithms.
        </p>
      </div>

      <ProblemBlock
        title="11. Check for Balanced Binary Tree"
        difficulty="Medium"
        description="Check if a binary tree is balanced (height difference between left and right subtrees ≤ 1)."
        solution={`// Check for Balanced Binary Tree

// Naive approach - O(n²) time
function isBalancedNaive(root) {
  if (root === null) return true;
  
  const leftHeight = height(root.left);
  const rightHeight = height(root.right);
  
  return Math.abs(leftHeight - rightHeight) <= 1 && 
         isBalancedNaive(root.left) && 
         isBalancedNaive(root.right);
}

function height(node) {
  if (node === null) return 0;
  return 1 + Math.max(height(node.left), height(node.right));
}

// Optimized approach - O(n) time
function isBalanced(root) {
  return checkHeight(root) !== -1;
}

function checkHeight(node) {
  if (node === null) return 0;
  
  const leftHeight = checkHeight(node.left);
  if (leftHeight === -1) return -1;
  
  const rightHeight = checkHeight(node.right);
  if (rightHeight === -1) return -1;
  
  if (Math.abs(leftHeight - rightHeight) > 1) {
    return -1;
  }
  
  return 1 + Math.max(leftHeight, rightHeight);
}

// Alternative approach with detailed explanation
function isBalancedDetailed(root) {
  console.log("Checking if binary tree is balanced");
  
  function checkHeightDetailed(node, depth) {
    if (node === null) {
      console.log(\`Null node at depth \${depth}, height = 0\`);
      return 0;
    }
    
    console.log(\`Checking node \${node.data} at depth \${depth}\`);
    
    const leftHeight = checkHeightDetailed(node.left, depth + 1);
    if (leftHeight === -1) {
      console.log(\`Left subtree of \${node.data} is unbalanced\`);
      return -1;
    }
    
    const rightHeight = checkHeightDetailed(node.right, depth + 1);
    if (rightHeight === -1) {
      console.log(\`Right subtree of \${node.data} is unbalanced\`);
      return -1;
    }
    
    const heightDiff = Math.abs(leftHeight - rightHeight);
    console.log(\`Node \${node.data}: left height = \${leftHeight}, right height = \${rightHeight}, diff = \${heightDiff}\`);
    
    if (heightDiff > 1) {
      console.log(\`Node \${node.data} is unbalanced (diff > 1)\`);
      return -1;
    }
    
    const currentHeight = 1 + Math.max(leftHeight, rightHeight);
    console.log(\`Node \${node.data} is balanced, height = \${currentHeight}\`);
    return currentHeight;
  }
  
  return checkHeightDetailed(root, 0) !== -1;
}

// Test cases
function createBalancedTree() {
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  root.right.left = new TreeNode(6);
  root.right.right = new TreeNode(7);
  return root;
}

function createUnbalancedTree() {
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.left.left = new TreeNode(3);
  root.left.left.left = new TreeNode(4);
  return root;
}

const balancedTree = createBalancedTree();
const unbalancedTree = createUnbalancedTree();

console.log("=== Testing Balanced Binary Tree ===");
console.log("Balanced tree (naive):", isBalancedNaive(balancedTree)); // true
console.log("Balanced tree (optimized):", isBalanced(balancedTree)); // true
console.log("Unbalanced tree (naive):", isBalancedNaive(unbalancedTree)); // false
console.log("Unbalanced tree (optimized):", isBalanced(unbalancedTree)); // false

console.log("\\n=== Detailed Balance Check ===");
isBalancedDetailed(balancedTree);`}
        explanation="Balanced tree: height difference between left and right subtrees ≤ 1. Naive: O(n²) time, O(h) space. Optimized: O(n) time, O(h) space. Return -1 for unbalanced, height for balanced."
      />

      <ProblemBlock
        title="12. Diameter of a Binary Tree"
        difficulty="Medium"
        description="Find the diameter of a binary tree (longest path between any two nodes)."
        solution={`// Diameter of a Binary Tree

// Naive approach - O(n²) time
function diameterNaive(root) {
  if (root === null) return 0;
  
  const leftHeight = height(root.left);
  const rightHeight = height(root.right);
  
  const leftDiameter = diameterNaive(root.left);
  const rightDiameter = diameterNaive(root.right);
  
  return Math.max(1 + leftHeight + rightHeight, leftDiameter, rightDiameter);
}

function height(node) {
  if (node === null) return 0;
  return 1 + Math.max(height(node.left), height(node.right));
}

// Optimized approach - O(n) time
function diameter(root) {
  let maxDiameter = 0;
  
  function height(node) {
    if (node === null) return 0;
    
    const leftHeight = height(node.left);
    const rightHeight = height(node.right);
    
    maxDiameter = Math.max(maxDiameter, 1 + leftHeight + rightHeight);
    
    return 1 + Math.max(leftHeight, rightHeight);
  }
  
  height(root);
  return maxDiameter;
}

// Alternative approach with detailed explanation
function diameterDetailed(root) {
  console.log("Finding diameter of binary tree");
  
  let maxDiameter = 0;
  
  function heightDetailed(node, depth) {
    if (node === null) {
      console.log(\`Null node at depth \${depth}, height = 0\`);
      return 0;
    }
    
    console.log(\`Processing node \${node.data} at depth \${depth}\`);
    
    const leftHeight = heightDetailed(node.left, depth + 1);
    const rightHeight = heightDetailed(node.right, depth + 1);
    
    const currentDiameter = 1 + leftHeight + rightHeight;
    console.log(\`Node \${node.data}: left height = \${leftHeight}, right height = \${rightHeight}, diameter = \${currentDiameter}\`);
    
    maxDiameter = Math.max(maxDiameter, currentDiameter);
    console.log(\`Current max diameter: \${maxDiameter}\`);
    
    const currentHeight = 1 + Math.max(leftHeight, rightHeight);
    console.log(\`Node \${node.data} height: \${currentHeight}\`);
    
    return currentHeight;
  }
  
  heightDetailed(root, 0);
  return maxDiameter;
}

// Find diameter path (actual nodes)
function diameterPath(root) {
  let maxDiameter = 0;
  let diameterPath = [];
  
  function height(node) {
    if (node === null) return 0;
    
    const leftHeight = height(node.left);
    const rightHeight = height(node.right);
    
    const currentDiameter = 1 + leftHeight + rightHeight;
    if (currentDiameter > maxDiameter) {
      maxDiameter = currentDiameter;
      diameterPath = findPath(node, leftHeight, rightHeight);
    }
    
    return 1 + Math.max(leftHeight, rightHeight);
  }
  
  function findPath(node, leftHeight, rightHeight) {
    const leftPath = findDeepestPath(node.left, leftHeight);
    const rightPath = findDeepestPath(node.right, rightHeight);
    
    return [...leftPath.reverse(), node.data, ...rightPath];
  }
  
  function findDeepestPath(node, targetDepth) {
    if (node === null || targetDepth === 0) return [];
    
    const leftPath = findDeepestPath(node.left, targetDepth - 1);
    if (leftPath.length > 0) {
      return [node.data, ...leftPath];
    }
    
    const rightPath = findDeepestPath(node.right, targetDepth - 1);
    if (rightPath.length > 0) {
      return [node.data, ...rightPath];
    }
    
    return [];
  }
  
  height(root);
  return { diameter: maxDiameter, path: diameterPath };
}

// Test cases
function createTestTree() {
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  root.right.left = new TreeNode(6);
  root.right.right = new TreeNode(7);
  root.left.left.left = new TreeNode(8);
  root.left.left.right = new TreeNode(9);
  return root;
}

const tree = createTestTree();

console.log("=== Testing Diameter of Binary Tree ===");
console.log("Diameter (naive):", diameterNaive(tree)); // 6
console.log("Diameter (optimized):", diameter(tree)); // 6
console.log("Diameter with path:", diameterPath(tree)); // { diameter: 6, path: [8, 4, 2, 1, 3, 7] }

console.log("\\n=== Detailed Diameter Calculation ===");
diameterDetailed(tree);`}
        explanation="Diameter is longest path between any two nodes. Naive: O(n²) time, O(h) space. Optimized: O(n) time, O(h) space. Calculate height and diameter simultaneously to avoid redundant calculations."
      />

      <ProblemBlock
        title="13. LCA of Binary Tree (Part 1 & 2)"
        difficulty="Medium"
        description="Find the Lowest Common Ancestor (LCA) of two nodes in a binary tree."
        solution={`// LCA of Binary Tree

// Basic approach - O(n) time
function lowestCommonAncestor(root, p, q) {
  if (root === null || root === p || root === q) {
    return root;
  }
  
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  
  if (left !== null && right !== null) {
    return root;
  }
  
  return left !== null ? left : right;
}

// Alternative approach with path finding
function lcaWithPath(root, p, q) {
  const path1 = findPath(root, p);
  const path2 = findPath(root, q);
  
  if (path1.length === 0 || path2.length === 0) {
    return null;
  }
  
  let i = 0;
  while (i < path1.length && i < path2.length && path1[i] === path2[i]) {
    i++;
  }
  
  return path1[i - 1];
}

function findPath(root, target) {
  const path = [];
  
  function findPathHelper(node, target, path) {
    if (node === null) return false;
    
    path.push(node);
    
    if (node === target) return true;
    
    if (findPathHelper(node.left, target, path) || 
        findPathHelper(node.right, target, path)) {
      return true;
    }
    
    path.pop();
    return false;
  }
  
  findPathHelper(root, target, path);
  return path;
}

// LCA with distance calculation
function lcaWithDistance(root, p, q) {
  let lca = null;
  
  function findLCA(node) {
    if (node === null) return false;
    
    const left = findLCA(node.left);
    const right = findLCA(node.right);
    
    const isCurrent = node === p || node === q;
    
    if ((left && right) || (isCurrent && (left || right))) {
      lca = node;
    }
    
    return left || right || isCurrent;
  }
  
  findLCA(root);
  return lca;
}

// LCA with detailed explanation
function lcaDetailed(root, p, q) {
  console.log(\`Finding LCA of \${p.data} and \${q.data}\`);
  
  function findLCADetailed(node, p, q, depth) {
    if (node === null) {
      console.log(\`Null node at depth \${depth}\`);
      return null;
    }
    
    console.log(\`Processing node \${node.data} at depth \${depth}\`);
    
    if (node === p) {
      console.log(\`Found node \${p.data}\`);
      return node;
    }
    
    if (node === q) {
      console.log(\`Found node \${q.data}\`);
      return node;
    }
    
    const left = findLCADetailed(node.left, p, q, depth + 1);
    const right = findLCADetailed(node.right, p, q, depth + 1);
    
    if (left !== null && right !== null) {
      console.log(\`LCA found at node \${node.data}\`);
      return node;
    }
    
    const result = left !== null ? left : right;
    console.log(\`Returning \${result ? result.data : 'null'} from node \${node.data}\`);
    return result;
  }
  
  return findLCADetailed(root, p, q, 0);
}

// Test cases
function createTestTree() {
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  root.right.left = new TreeNode(6);
  root.right.right = new TreeNode(7);
  return root;
}

const tree = createTestTree();
const node4 = tree.left.left;
const node5 = tree.left.right;
const node6 = tree.right.left;

console.log("=== Testing LCA of Binary Tree ===");
console.log("LCA of 4 and 5:", lowestCommonAncestor(tree, node4, node5)?.data); // 2
console.log("LCA of 4 and 6:", lowestCommonAncestor(tree, node4, node6)?.data); // 1
console.log("LCA with path:", lcaWithPath(tree, node4, node5)?.data); // 2

console.log("\\n=== Detailed LCA Calculation ===");
lcaDetailed(tree, node4, node5);`}
        explanation="LCA is lowest common ancestor of two nodes. Basic approach: return node if found, return root if both subtrees found. Path approach: find paths and find common ancestor. Time: O(n), Space: O(h)."
      />

      <ProblemBlock
        title="14. Construct Binary Tree from Inorder and Preorder"
        difficulty="Hard"
        description="Construct a binary tree from inorder and preorder traversal sequences."
        solution={`// Construct Binary Tree from Inorder and Preorder

function buildTreeFromInorderPreorder(preorder, inorder) {
  const inorderMap = new Map();
  
  // Create map for O(1) lookup
  for (let i = 0; i < inorder.length; i++) {
    inorderMap.set(inorder[i], i);
  }
  
  let preIndex = 0;
  
  function buildTree(inStart, inEnd) {
    if (inStart > inEnd) return null;
    
    // Create root from preorder
    const rootValue = preorder[preIndex++];
    const root = new TreeNode(rootValue);
    
    // Find root index in inorder
    const rootIndex = inorderMap.get(rootValue);
    
    // Build left and right subtrees
    root.left = buildTree(inStart, rootIndex - 1);
    root.right = buildTree(rootIndex + 1, inEnd);
    
    return root;
  }
  
  return buildTree(0, inorder.length - 1);
}

// Alternative approach with detailed explanation
function buildTreeDetailed(preorder, inorder) {
  console.log("Building tree from inorder and preorder");
  console.log("Preorder:", preorder);
  console.log("Inorder:", inorder);
  
  const inorderMap = new Map();
  for (let i = 0; i < inorder.length; i++) {
    inorderMap.set(inorder[i], i);
  }
  
  let preIndex = 0;
  
  function buildTreeDetailedHelper(inStart, inEnd, depth) {
    if (inStart > inEnd) {
      console.log(\`\${'  '.repeat(depth)}Null subtree\`);
      return null;
    }
    
    const rootValue = preorder[preIndex++];
    const root = new TreeNode(rootValue);
    console.log(\`\${'  '.repeat(depth)}Creating root: \${rootValue}\`);
    
    const rootIndex = inorderMap.get(rootValue);
    console.log(\`\${'  '.repeat(depth)}Root index in inorder: \${rootIndex}\`);
    
    console.log(\`\${'  '.repeat(depth)}Building left subtree: [\${inStart}, \${rootIndex - 1}]\`);
    root.left = buildTreeDetailedHelper(inStart, rootIndex - 1, depth + 1);
    
    console.log(\`\${'  '.repeat(depth)}Building right subtree: [\${rootIndex + 1}, \${inEnd}]\`);
    root.right = buildTreeDetailedHelper(rootIndex + 1, inEnd, depth + 1);
    
    return root;
  }
  
  return buildTreeDetailedHelper(0, inorder.length - 1, 0);
}

// Construct from inorder and postorder
function buildTreeFromInorderPostorder(inorder, postorder) {
  const inorderMap = new Map();
  
  for (let i = 0; i < inorder.length; i++) {
    inorderMap.set(inorder[i], i);
  }
  
  let postIndex = postorder.length - 1;
  
  function buildTree(inStart, inEnd) {
    if (inStart > inEnd) return null;
    
    const rootValue = postorder[postIndex--];
    const root = new TreeNode(rootValue);
    
    const rootIndex = inorderMap.get(rootValue);
    
    // Build right subtree first, then left
    root.right = buildTree(rootIndex + 1, inEnd);
    root.left = buildTree(inStart, rootIndex - 1);
    
    return root;
  }
  
  return buildTree(0, inorder.length - 1);
}

// Test cases
const preorder = [3, 9, 20, 15, 7];
const inorder = [9, 3, 15, 20, 7];

console.log("=== Testing Tree Construction ===");
const tree = buildTreeFromInorderPreorder(preorder, inorder);
console.log("Constructed tree from inorder and preorder");

// Verify by traversing
function inorderTraversal(root) {
  const result = [];
  
  function inorder(node) {
    if (node === null) return;
    inorder(node.left);
    result.push(node.data);
    inorder(node.right);
  }
  
  inorder(root);
  return result;
}

function preorderTraversal(root) {
  const result = [];
  
  function preorder(node) {
    if (node === null) return;
    result.push(node.data);
    preorder(node.left);
    preorder(node.right);
  }
  
  preorder(root);
  return result;
}

console.log("Inorder of constructed tree:", inorderTraversal(tree));
console.log("Preorder of constructed tree:", preorderTraversal(tree));

console.log("\\n=== Detailed Construction ===");
buildTreeDetailed(preorder, inorder);`}
        explanation="Construct tree from inorder and preorder. Use preorder to find root, inorder to find left/right subtrees. Create map for O(1) lookup. Time: O(n), Space: O(n)."
      />

      <ProblemBlock
        title="15. Serialize and Deserialize a Binary Tree"
        difficulty="Hard"
        description="Serialize a binary tree to string and deserialize it back to tree."
        solution={`// Serialize and Deserialize a Binary Tree

// Serialize using preorder traversal
function serialize(root) {
  const result = [];
  
  function preorder(node) {
    if (node === null) {
      result.push('null');
      return;
    }
    
    result.push(node.data.toString());
    preorder(node.left);
    preorder(node.right);
  }
  
  preorder(root);
  return result.join(',');
}

// Deserialize from preorder string
function deserialize(data) {
  const values = data.split(',');
  let index = 0;
  
  function buildTree() {
    if (index >= values.length || values[index] === 'null') {
      index++;
      return null;
    }
    
    const node = new TreeNode(parseInt(values[index++]));
    node.left = buildTree();
    node.right = buildTree();
    
    return node;
  }
  
  return buildTree();
}

// Alternative serialization using level order
function serializeLevelOrder(root) {
  if (root === null) return 'null';
  
  const result = [];
  const queue = [root];
  
  while (queue.length > 0) {
    const current = queue.shift();
    
    if (current === null) {
      result.push('null');
    } else {
      result.push(current.data.toString());
      queue.push(current.left);
      queue.push(current.right);
    }
  }
  
  return result.join(',');
}

function deserializeLevelOrder(data) {
  if (data === 'null') return null;
  
  const values = data.split(',');
  const root = new TreeNode(parseInt(values[0]));
  const queue = [root];
  
  let i = 1;
  while (queue.length > 0 && i < values.length) {
    const current = queue.shift();
    
    if (i < values.length && values[i] !== 'null') {
      current.left = new TreeNode(parseInt(values[i]));
      queue.push(current.left);
    }
    i++;
    
    if (i < values.length && values[i] !== 'null') {
      current.right = new TreeNode(parseInt(values[i]));
      queue.push(current.right);
    }
    i++;
  }
  
  return root;
}

// Test cases
function createTestTree() {
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.right.left = new TreeNode(4);
  root.right.right = new TreeNode(5);
  return root;
}

const tree = createTestTree();

console.log("=== Testing Serialize and Deserialize ===");
const serialized = serialize(tree);
console.log("Serialized:", serialized);

const deserialized = deserialize(serialized);
console.log("Deserialized tree root:", deserialized?.data);

// Verify by comparing traversals
function inorderTraversal(root) {
  const result = [];
  
  function inorder(node) {
    if (node === null) return;
    inorder(node.left);
    result.push(node.data);
    inorder(node.right);
  }
  
  inorder(root);
  return result;
}

console.log("Original inorder:", inorderTraversal(tree));
console.log("Deserialized inorder:", inorderTraversal(deserialized));

console.log("\\n=== Level Order Serialization ===");
const serializedLevel = serializeLevelOrder(tree);
console.log("Level order serialized:", serializedLevel);

const deserializedLevel = deserializeLevelOrder(serializedLevel);
console.log("Level order deserialized root:", deserializedLevel?.data);`}
        explanation="Serialize tree to string, deserialize back to tree. Preorder: use 'null' for missing nodes. Level order: serialize level by level. Time: O(n), Space: O(n)."
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
        className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors mb-4"
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
          <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-4">
            <p className="text-green-200">
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
