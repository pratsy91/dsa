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
            code={{
              JavaScript: `// Tree Node Implementation

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
  
  // Get height
  getHeight() {
    return this.heightHelper(this.root);
  }
  
  heightHelper(node) {
    if (node === null) return 0;
    return Math.max(this.heightHelper(node.left), this.heightHelper(node.right)) + 1;
  }
  
  // Count nodes
  countNodes() {
    return this.countHelper(this.root);
  }
  
  countHelper(node) {
    if (node === null) return 0;
    return 1 + this.countHelper(node.left) + this.countHelper(node.right);
  }
}

// Usage example
const tree = new BinaryTree();
tree.insert(1);
tree.insert(2);
tree.insert(3);
console.log("Tree height:", tree.getHeight()); // 2
console.log("Node count:", tree.countNodes()); // 3`,
              Java: `// Tree Node Implementation

class TreeNode {
    int data;
    TreeNode left;
    TreeNode right;
    
    TreeNode(int data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// Binary Tree Implementation
class BinaryTree {
    TreeNode root;
    
    public BinaryTree() {
        this.root = null;
    }
    
    // Insert node (level order)
    public void insert(int data) {
        TreeNode newNode = new TreeNode(data);
        
        if (root == null) {
            root = newNode;
            return;
        }
        
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);
        
        while (!queue.isEmpty()) {
            TreeNode current = queue.poll();
            
            if (current.left == null) {
                current.left = newNode;
                return;
            } else if (current.right == null) {
                current.right = newNode;
                return;
            } else {
                queue.offer(current.left);
                queue.offer(current.right);
            }
        }
    }
    
    // Get height
    public int getHeight() {
        return heightHelper(root);
    }
    
    private int heightHelper(TreeNode node) {
        if (node == null) return 0;
        return Math.max(heightHelper(node.left), heightHelper(node.right)) + 1;
    }
    
    // Count nodes
    public int countNodes() {
        return countHelper(root);
    }
    
    private int countHelper(TreeNode node) {
        if (node == null) return 0;
        return 1 + countHelper(node.left) + countHelper(node.right);
    }
    
    public static void main(String[] args) {
        BinaryTree tree = new BinaryTree();
        tree.insert(1);
        tree.insert(2);
        tree.insert(3);
        System.out.println("Tree height: " + tree.getHeight()); // 2
        System.out.println("Node count: " + tree.countNodes()); // 3
    }
}`,
            }}
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
        solutions={{
          JavaScript: `// Implementation of Inorder Traversal

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
console.log("Morris:", inorderTraversalMorris(tree)); // [4, 2, 5, 1, 6, 3, 7]`,
          Java: `import java.util.*;

class TreeNode {
    int data;
    TreeNode left;
    TreeNode right;
    
    TreeNode(int data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

public class InorderTraversal {
    // Recursive implementation
    public static List<Integer> inorderTraversal(TreeNode root) {
        List<Integer> result = new ArrayList<>();
        inorder(root, result);
        return result;
    }
    
    private static void inorder(TreeNode node, List<Integer> result) {
        if (node == null) return;
        inorder(node.left, result);
        result.add(node.data);
        inorder(node.right, result);
    }
    
    // Iterative implementation using stack
    public static List<Integer> inorderTraversalIterative(TreeNode root) {
        List<Integer> result = new ArrayList<>();
        Stack<TreeNode> stack = new Stack<>();
        TreeNode current = root;
        
        while (current != null || !stack.isEmpty()) {
            // Go to leftmost node
            while (current != null) {
                stack.push(current);
                current = current.left;
            }
            
            // Process current node
            current = stack.pop();
            result.add(current.data);
            
            // Move to right subtree
            current = current.right;
        }
        
        return result;
    }
    
    public static void main(String[] args) {
        TreeNode root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.left = new TreeNode(4);
        root.left.right = new TreeNode(5);
        
        System.out.println("Recursive: " + inorderTraversal(root)); // [4, 2, 5, 1, 3]
        System.out.println("Iterative: " + inorderTraversalIterative(root)); // [4, 2, 5, 1, 3]
    }
}`,
        }}
        explanation="Inorder visits left subtree, then root, then right subtree. Recursive: O(n) time, O(h) space. Iterative: O(n) time, O(h) space. Morris: O(n) time, O(1) space."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Traverse the binary tree so nodes appear in sorted order for BSTs: left subtree → root → right subtree.",
              details: [
                "Handle empty tree (return []) and single-node trees",
                "Decide whether to return values, print, or accumulate",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "This is a DFS traversal with a strict Left-Root-Right ordering.",
              keywords: ["DFS", "inorder", "left-root-right", "traversal"],
              details: [
                "Recursive structure mirrors tree definition",
                "Iterative solution uses stack to simulate recursion",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Either use call stack (recursion) or explicit stack to remember nodes.",
              details: [
                "Stack stores ancestors while we descend left",
                "Result array/list collects values in-order",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description: "Depth-first traversal visiting nodes in L-R order.",
              details: [
                "Recursive: recurse left, process node, recurse right",
                "Iterative: push left nodes, pop, visit, move right",
                "Optional Morris: use threaded tree to achieve O(1) aux space",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Guard against null nodes and choose variant based on constraints.",
              details: [
                "Prefer iterative when recursion depth could exceed call stack",
                "Use Morris when interviewer asks for O(1) space",
                "Add tests covering skewed and balanced trees",
              ],
            },
          ],
          pattern: "DFS Inorder Traversal (Left → Root → Right)",
          complexity: {
            time: "O(n)",
            space: "O(h) recursion/stack, O(1) with Morris",
          },
        }}
      />

      <ProblemBlock
        title="2. Implementation of Preorder Traversal"
        difficulty="Easy"
        description="Implement preorder traversal (Root, Left, Right) of a binary tree."
        solutions={{
          JavaScript: `// Implementation of Preorder Traversal

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
console.log("Optimized:", preorderTraversalOptimized(tree)); // [1, 2, 4, 5, 3, 6, 7]`,
          Java: `import java.util.*;

public class PreorderTraversal {
    // Recursive implementation
    public static List<Integer> preorderTraversal(TreeNode root) {
        List<Integer> result = new ArrayList<>();
        preorder(root, result);
        return result;
    }
    
    private static void preorder(TreeNode node, List<Integer> result) {
        if (node == null) return;
        result.add(node.data);
        preorder(node.left, result);
        preorder(node.right, result);
    }
    
    // Iterative implementation using stack
    public static List<Integer> preorderTraversalIterative(TreeNode root) {
        if (root == null) return new ArrayList<>();
        
        List<Integer> result = new ArrayList<>();
        Stack<TreeNode> stack = new Stack<>();
        stack.push(root);
        
        while (!stack.isEmpty()) {
            TreeNode current = stack.pop();
            result.add(current.data);
            
            // Push right child first, then left
            if (current.right != null) {
                stack.push(current.right);
            }
            if (current.left != null) {
                stack.push(current.left);
            }
        }
        
        return result;
    }
    
    public static void main(String[] args) {
        TreeNode root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.left = new TreeNode(4);
        root.left.right = new TreeNode(5);
        
        System.out.println("Recursive: " + preorderTraversal(root)); // [1, 2, 4, 5, 3]
        System.out.println("Iterative: " + preorderTraversalIterative(root)); // [1, 2, 4, 5, 3]
    }
}`,
        }}
        explanation="Preorder visits root, then left subtree, then right subtree. Recursive: O(n) time, O(h) space. Iterative: O(n) time, O(h) space. Optimized: O(n) time, O(h) space."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Preorder order is Root → Left → Right. Commonly used to copy trees or serialize structure.",
              details: [
                "Return traversal as array/list",
                "Clarify behavior for null tree",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Depth-first traversal where node is processed before its subtrees.",
              keywords: ["preorder", "DFS", "root-first"],
              details: [
                "Recursive pattern: visit node, traverse left, traverse right",
                "Iterative uses stack pushing right child before left",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Use call stack (recursion) or explicit stack to manage nodes.",
              details: [
                "Stack ensures we backtrack up the tree",
                "Result container collects visit order",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description: "Implement DFS visiting node first.",
              details: [
                "Recursive: append current, recurse left, recurse right",
                "Iterative: pop node, process, push right then left",
                "Space-optimized variant traverses left spine, storing only right children",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Ensure stack order preserves left-before-right visits.",
              details: [
                "Guard against null root to avoid pushing undefined",
                "Use iterative version when recursion depth could overflow",
                "For serialization, pair preorder with null markers",
              ],
            },
          ],
          pattern: "DFS Preorder Traversal (Root → Left → Right)",
          complexity: {
            time: "O(n)",
            space: "O(h)",
          },
        }}
      />

      <ProblemBlock
        title="3. Implementation of Postorder Traversal"
        difficulty="Easy"
        description="Implement postorder traversal (Left, Right, Root) of a binary tree."
        solutions={{
          JavaScript: `// Implementation of Postorder Traversal

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
console.log("Single stack:", postorderTraversalSingleStack(tree)); // [4, 5, 2, 6, 7, 3, 1]`,
          Java: `import java.util.*;

public class PostorderTraversal {
    // Recursive implementation
    public static List<Integer> postorderTraversal(TreeNode root) {
        List<Integer> result = new ArrayList<>();
        postorder(root, result);
        return result;
    }
    
    private static void postorder(TreeNode node, List<Integer> result) {
        if (node == null) return;
        postorder(node.left, result);
        postorder(node.right, result);
        result.add(node.data);
    }
    
    // Iterative using two stacks
    public static List<Integer> postorderTraversalIterative(TreeNode root) {
        if (root == null) return new ArrayList<>();
        
        List<Integer> result = new ArrayList<>();
        Stack<TreeNode> stack1 = new Stack<>();
        Stack<TreeNode> stack2 = new Stack<>();
        stack1.push(root);
        
        while (!stack1.isEmpty()) {
            TreeNode current = stack1.pop();
            stack2.push(current);
            
            if (current.left != null) {
                stack1.push(current.left);
            }
            if (current.right != null) {
                stack1.push(current.right);
            }
        }
        
        while (!stack2.isEmpty()) {
            result.add(stack2.pop().data);
        }
        
        return result;
    }
    
    public static void main(String[] args) {
        TreeNode root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.left = new TreeNode(4);
        root.left.right = new TreeNode(5);
        
        System.out.println("Recursive: " + postorderTraversal(root)); // [4, 5, 2, 3, 1]
        System.out.println("Iterative: " + postorderTraversalIterative(root)); // [4, 5, 2, 3, 1]
    }
}`,
        }}
        explanation="Postorder visits left subtree, then right subtree, then root. Recursive: O(n) time, O(h) space. Two stacks: O(n) time, O(n) space. Single stack: O(n) time, O(h) space."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Postorder order is Left → Right → Root. Used for deleting/copying trees or evaluating expression trees.",
              details: [
                "Confirm whether output must be list or printed sequence",
                "Consider handling of null root",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Depth-first traversal where node is processed after its children.",
              keywords: ["postorder", "DFS", "two stacks", "left-right-root"],
              details: [
                "Recursive structure is straightforward",
                "Iterative options: two stacks or single stack with lastVisited pointer",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Use recursion (call stack) or explicit stacks to control the order.",
              details: [
                "Two-stack method pushes nodes from first to second stack reversing order",
                "Single stack + lastVisited ensures children processed before parent",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description: "Traverse children before root.",
              details: [
                "Recursive: traverse left, traverse right, visit node",
                "Two stacks: pop from stack1, push children, then pop stack2 for final order",
                "Single stack: peek node, go right only if not processed",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Pick variant matching memory constraints and interview expectations.",
              details: [
                "Two-stack method is simplest to reason about; single stack uses less memory",
                "Track last visited node to avoid reprocessing right subtrees",
                "Test on skewed trees to validate stack logic",
              ],
            },
          ],
          pattern: "DFS Postorder Traversal (Left → Right → Root)",
          complexity: {
            time: "O(n)",
            space: "O(h) recursion/single stack, O(n) two-stack",
          },
        }}
      />

      <ProblemBlock
        title="4. Level Order Traversal"
        difficulty="Medium"
        description="Implement level order traversal (breadth-first) of a binary tree using queue."
        solutions={{
          JavaScript: `// Level Order Traversal

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
levelOrderDetailed(tree);`,
          Java: `import java.util.*;

public class LevelOrderTraversal {
    // Basic level order traversal
    public static List<Integer> levelOrderTraversal(TreeNode root) {
        if (root == null) return new ArrayList<>();
        
        List<Integer> result = new ArrayList<>();
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);
        
        while (!queue.isEmpty()) {
            TreeNode current = queue.poll();
            result.add(current.data);
            
            if (current.left != null) {
                queue.offer(current.left);
            }
            if (current.right != null) {
                queue.offer(current.right);
            }
        }
        
        return result;
    }
    
    // Level order line by line
    public static List<List<Integer>> levelOrderLineByLine(TreeNode root) {
        if (root == null) return new ArrayList<>();
        
        List<List<Integer>> result = new ArrayList<>();
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);
        
        while (!queue.isEmpty()) {
            int levelSize = queue.size();
            List<Integer> currentLevel = new ArrayList<>();
            
            for (int i = 0; i < levelSize; i++) {
                TreeNode current = queue.poll();
                currentLevel.add(current.data);
                
                if (current.left != null) {
                    queue.offer(current.left);
                }
                if (current.right != null) {
                    queue.offer(current.right);
                }
            }
            
            result.add(currentLevel);
        }
        
        return result;
    }
    
    public static void main(String[] args) {
        TreeNode root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.left = new TreeNode(4);
        root.left.right = new TreeNode(5);
        
        System.out.println("Basic: " + levelOrderTraversal(root)); // [1, 2, 3, 4, 5]
        System.out.println("Line by line: " + levelOrderLineByLine(root)); // [[1], [2, 3], [4, 5]]
    }
}`,
        }}
        explanation="Level order uses BFS with queue. Process nodes level by level. Line by line: track level size. Reverse: use stack after BFS. Time: O(n), Space: O(w) where w is maximum width."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Visit nodes level by level (BFS). Output can be single list, list of levels, or reverse order.",
              details: [
                "Confirm whether to group nodes per level or flat order",
                "Handle empty tree (return [] or [])",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Classic BFS using a queue to process nodes in FIFO order.",
              keywords: ["BFS", "queue", "level order", "breadth-first"],
              details: [
                "Level boundaries tracked via queue size or sentinel",
                "Reverse order adds stack to flip output",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Use a queue to store nodes of the current frontier.",
              details: [
                "For level-by-level output, record `levelSize = queue.length` before processing",
                "Optional stack collects nodes for reverse traversal",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description: "Iteratively process queue until empty.",
              details: [
                "While queue not empty: pop node, append value, enqueue children",
                "Line-by-line: after processing `levelSize` nodes, push level array to result",
                "Reverse: push values to stack; pop later",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Avoid O(n²) queue.shift() cost by using pointer-based queue (linked list) in languages where necessary.",
              details: [
                "In JS, use `shift` on array or maintain head index",
                "Space complexity equals max width of tree",
                "Add tests for skewed trees and multi-level cases",
              ],
            },
          ],
          pattern: "Breadth-First Search (Level Order)",
          complexity: {
            time: "O(n)",
            space: "O(w) where w=tree width",
          },
        }}
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
        solutions={{
          JavaScript: `// Height of Binary Tree

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
heightDetailed(tree);`,
          Java: `import java.util.*;

public class HeightOfBinaryTree {
    // Recursive approach
    public static int heightOfBinaryTree(TreeNode root) {
        if (root == null) return 0;
        return Math.max(heightOfBinaryTree(root.left), heightOfBinaryTree(root.right)) + 1;
    }
    
    // Iterative approach using level order
    public static int heightIterative(TreeNode root) {
        if (root == null) return 0;
        
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);
        int height = 0;
        
        while (!queue.isEmpty()) {
            int levelSize = queue.size();
            height++;
            
            for (int i = 0; i < levelSize; i++) {
                TreeNode current = queue.poll();
                
                if (current.left != null) {
                    queue.offer(current.left);
                }
                if (current.right != null) {
                    queue.offer(current.right);
                }
            }
        }
        
        return height;
    }
    
    public static void main(String[] args) {
        TreeNode root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.left = new TreeNode(4);
        
        System.out.println("Recursive height: " + heightOfBinaryTree(root)); // 3
        System.out.println("Iterative height: " + heightIterative(root)); // 3
    }
}`,
        }}
        explanation="Height is maximum depth from root to leaf. Recursive: O(n) time, O(h) space. Iterative: O(n) time, O(w) space where w is maximum width."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Height = number of nodes/edges on longest path from root down to a leaf.",
              details: [
                "Clarify whether empty tree height is 0 or -1 (using nodes vs edges)",
                "Decide if you should return edge count or node count",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Divide-and-conquer on subtrees; result is 1 + max(leftHeight, rightHeight).",
              keywords: ["recursion", "divide and conquer", "depth", "DFS"],
              details: [
                "Each subtree height computed independently",
                "Alternative BFS counts levels using queue",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Use recursion (implicit stack) or queue for level-order traversal.",
              details: [
                "Recursive approach minimal extra storage",
                "Iterative BFS uses queue sized by tree width",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description: "Implement DFS or BFS depending on constraints.",
              details: [
                "DFS: if node null return 0; else return 1 + max(height(left), height(right))",
                "BFS: iterate level by level, increment height after processing each level",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Guard base cases and beware of stack depth on skewed trees.",
              details: [
                "Tail recursion elimination not necessary but iterative BFS avoids deep recursion",
                "Memoization helpful only in DAG-like structures (not typical trees)",
                "Add tests for skewed (linked-list) trees to ensure stack/queue handles them",
              ],
            },
          ],
          pattern: "Recursive Max of Subtree Heights / BFS Level Counting",
          complexity: {
            time: "O(n)",
            space: "O(h) recursion or O(w) BFS",
          },
        }}
      />

      <ProblemBlock
        title="6. Size of Binary Tree"
        difficulty="Easy"
        description="Count the total number of nodes in a binary tree."
        solutions={{
          JavaScript: `// Size of Binary Tree

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
sizeDetailed(tree);`,
          Java: `import java.util.*;

public class SizeOfBinaryTree {
    // Recursive approach
    public static int sizeOfBinaryTree(TreeNode root) {
        if (root == null) return 0;
        return 1 + sizeOfBinaryTree(root.left) + sizeOfBinaryTree(root.right);
    }
    
    // Iterative approach using level order
    public static int sizeIterative(TreeNode root) {
        if (root == null) return 0;
        
        int count = 0;
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);
        
        while (!queue.isEmpty()) {
            TreeNode current = queue.poll();
            count++;
            
            if (current.left != null) {
                queue.offer(current.left);
            }
            if (current.right != null) {
                queue.offer(current.right);
            }
        }
        
        return count;
    }
    
    // Count leaf nodes
    public static int countLeafNodes(TreeNode root) {
        if (root == null) return 0;
        if (root.left == null && root.right == null) return 1;
        return countLeafNodes(root.left) + countLeafNodes(root.right);
    }
    
    public static void main(String[] args) {
        TreeNode root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.left = new TreeNode(4);
        root.left.right = new TreeNode(5);
        
        System.out.println("Recursive size: " + sizeOfBinaryTree(root)); // 5
        System.out.println("Iterative size: " + sizeIterative(root)); // 5
        System.out.println("Leaf nodes: " + countLeafNodes(root)); // 3
    }
}`,
        }}
        explanation="Size is total number of nodes. Recursive: O(n) time, O(h) space. Iterative: O(n) time, O(w) space. Count leaf nodes: nodes with no children. Count internal nodes: nodes with at least one child."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Need to count every node (or subset like leaves/internal). For empty tree result is 0.",
              details: [
                "Confirm whether to count only unique nodes or also include metadata (e.g., only leaves)",
                "Clarify if tree can be extremely skewed (stack depth concerns)",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Divide-and-conquer: size(node) = size(left) + size(right) + 1.",
              keywords: ["recursion", "subtree aggregation", "DFS"],
              details: [
                "Same recurrence works for counting leaves/internal nodes with conditional logic",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Use recursion or an explicit queue/stack to visit every node once.",
              details: [
                "Recursive variant uses call stack",
                "Iterative BFS counts nodes while queueing children",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Traverse entire tree, aggregating counts as you unwind.",
              details: [
                "DFS: return 0 for null, otherwise 1 + left + right",
                "BFS: while queue not empty, pop node, ++count, enqueue children",
                "Leaf/Internal counts add condition before recursion returns",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Ensure traversal visits each node exactly once for O(n).",
              details: [
                "Avoid repeated queue.shift costs by using pointer queue structure",
                "For multiple metrics (size, leaves, internal), compute in single traversal if desired",
                "Use tail recursion or iterative version when tree height could exceed stack limits",
              ],
            },
          ],
          pattern: "Subtree Aggregation (1 + left + right)",
          complexity: {
            time: "O(n)",
            space: "O(h) recursion or O(w) BFS",
          },
        }}
      />

      <ProblemBlock
        title="7. Maximum in Binary Tree"
        difficulty="Easy"
        description="Find the maximum value in a binary tree."
        solutions={{
          JavaScript: `// Maximum in Binary Tree

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
maximumDetailed(tree);`,
          Java: `import java.util.*;

public class MaximumInBinaryTree {
    // Recursive approach
    public static int maximumInBinaryTree(TreeNode root) {
        if (root == null) return Integer.MIN_VALUE;
        return Math.max(root.data, Math.max(maximumInBinaryTree(root.left), maximumInBinaryTree(root.right)));
    }
    
    // Iterative approach using level order
    public static int maximumIterative(TreeNode root) {
        if (root == null) return Integer.MIN_VALUE;
        
        int max = Integer.MIN_VALUE;
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);
        
        while (!queue.isEmpty()) {
            TreeNode current = queue.poll();
            max = Math.max(max, current.data);
            
            if (current.left != null) {
                queue.offer(current.left);
            }
            if (current.right != null) {
                queue.offer(current.right);
            }
        }
        
        return max;
    }
    
    public static void main(String[] args) {
        TreeNode root = new TreeNode(10);
        root.left = new TreeNode(5);
        root.right = new TreeNode(15);
        root.left.left = new TreeNode(3);
        root.right.right = new TreeNode(20);
        
        System.out.println("Recursive max: " + maximumInBinaryTree(root)); // 20
        System.out.println("Iterative max: " + maximumIterative(root)); // 20
    }
}`,
        }}
        explanation="Maximum is largest value in tree. Recursive: O(n) time, O(h) space. Iterative: O(n) time, O(w) space. Can find both min and max in single traversal for efficiency."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Return the largest key stored in any node (tree not necessarily BST).",
              details: [
                "If tree is empty, define return value (often -∞ or null)",
                "Tree might contain negative numbers; pick sentinel accordingly",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Need to examine every node because structure is arbitrary → simple reduction across subtree values.",
              keywords: ["DFS", "aggregation", "max value"],
              details: [
                "Use postorder-style aggregation: max of current and child results",
                "BFS alternative updates running maximum",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Use recursion (call stack) or queue for level-order traversal.",
              details: [
                "Queue suits iterative BFS scanning every node",
                "For simultaneous min/max, return an object with both values",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description: "Traverse entire tree once, combining results.",
              details: [
                "Recursive: return `max(node.val, leftMax, rightMax)`",
                "Iterative BFS: while queue non-empty, update `max` and enqueue children",
                "Min+Max: compute both in same recursion to reuse work",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Guard sentinel values and minimize queue/stack overhead.",
              details: [
                "Use `-Infinity` / `Integer.MIN_VALUE` as base for empty nodes",
                "If nodes hold large numbers, ensure sentinel fits numeric range",
                "For repeated queries, consider caching results or augmenting nodes",
              ],
            },
          ],
          pattern: "Subtree Aggregation of Max Value",
          complexity: {
            time: "O(n)",
            space: "O(h) recursion or O(w) BFS",
          },
        }}
      />

      <ProblemBlock
        title="8. Print Left View of Binary Tree"
        difficulty="Medium"
        description="Print the left view of a binary tree (first node of each level)."
        solutions={{
          JavaScript: `// Print Left View of Binary Tree

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
console.log("Top view:", topView(tree)); // [8, 4, 2, 1, 3, 7]`,
          Java: `import java.util.*;

public class LeftViewOfBinaryTree {
    // Recursive approach using level tracking
    public static List<Integer> leftViewRecursive(TreeNode root) {
        List<Integer> result = new ArrayList<>();
        int[] maxLevel = {0};
        leftViewHelper(root, 1, maxLevel, result);
        return result;
    }
    
    private static void leftViewHelper(TreeNode node, int level, int[] maxLevel, List<Integer> result) {
        if (node == null) return;
        
        if (maxLevel[0] < level) {
            result.add(node.data);
            maxLevel[0] = level;
        }
        
        leftViewHelper(node.left, level + 1, maxLevel, result);
        leftViewHelper(node.right, level + 1, maxLevel, result);
    }
    
    // Iterative approach using level order
    public static List<Integer> leftViewIterative(TreeNode root) {
        if (root == null) return new ArrayList<>();
        
        List<Integer> result = new ArrayList<>();
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);
        
        while (!queue.isEmpty()) {
            int levelSize = queue.size();
            result.add(queue.peek().data);
            
            for (int i = 0; i < levelSize; i++) {
                TreeNode current = queue.poll();
                
                if (current.left != null) {
                    queue.offer(current.left);
                }
                if (current.right != null) {
                    queue.offer(current.right);
                }
            }
        }
        
        return result;
    }
    
    public static void main(String[] args) {
        TreeNode root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.left = new TreeNode(4);
        root.left.right = new TreeNode(5);
        
        System.out.println("Left view: " + leftViewRecursive(root)); // [1, 2, 4]
        System.out.println("Left view (iterative): " + leftViewIterative(root)); // [1, 2, 4]
    }
}`,
        }}
        explanation="Left view shows first node of each level. Use level tracking or level order traversal. Right view: process right subtree first. Top view: use horizontal distance. Time: O(n), Space: O(h)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Left view = nodes visible from left side → first node encountered at every depth.",
              details: [
                "For empty tree return []",
                "Clarify if root counts as level 0 or 1 (consistent with other problems)",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Treat as level-order problem: capture first node per level (BFS) or track max level reached during DFS.",
              keywords: [
                "tree view",
                "level order",
                "DFS with level tracking",
                "leftmost nodes",
              ],
              details: [
                "Recursive solution visits left subtree before right and records earliest node",
                "Iterative BFS uses queue and records first node popped each level",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Either maintain queue for BFS or use recursion with `maxLevel` reference.",
              details: [
                "Queue ensures level-by-level processing",
                "For DFS, a mutable container (object/int array) tracks deepest level printed",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description: "Implement either DFS or BFS approach.",
              details: [
                "DFS: pass current level, if `level > maxLevel` push node then update max",
                "Process left child before right so first visit is leftmost",
                "BFS: for each level, before processing nodes push queue[0].data to result",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Extend same pattern to right view/top view by changing traversal order or storing horizontal distance.",
              details: [
                "Right view: visit right subtree first or read last node per level",
                "Top view: BFS with horizontal distance map storing first occurrence",
                "Complexities stay linear since each node visited once",
              ],
            },
          ],
          pattern: "Level-Order/DFS with Level Tracking for Tree Views",
          complexity: {
            time: "O(n)",
            space: "O(h) recursion or O(w) BFS",
          },
        }}
      />

      <ProblemBlock
        title="9. Print Nodes at K Distance"
        difficulty="Medium"
        description="Print all nodes at distance k from the root."
        solutions={{
          JavaScript: `// Print Nodes at K Distance

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
console.log("Nodes at distance 1 from node 2:", nodesAtKDistanceFromNode(tree, 2, 1)); // [4, 5, 1]`,
          Java: `import java.util.*;

public class NodesAtKDistance {
    // Recursive approach
    public static List<Integer> nodesAtKDistance(TreeNode root, int k) {
        List<Integer> result = new ArrayList<>();
        printKDistance(root, k, result);
        return result;
    }
    
    private static void printKDistance(TreeNode node, int distance, List<Integer> result) {
        if (node == null) return;
        
        if (distance == 0) {
            result.add(node.data);
            return;
        }
        
        printKDistance(node.left, distance - 1, result);
        printKDistance(node.right, distance - 1, result);
    }
    
    // Iterative approach using level order
    public static List<Integer> nodesAtKDistanceIterative(TreeNode root, int k) {
        if (root == null) return new ArrayList<>();
        
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);
        int level = 0;
        
        while (!queue.isEmpty()) {
            int levelSize = queue.size();
            
            if (level == k) {
                List<Integer> result = new ArrayList<>();
                for (TreeNode node : queue) {
                    result.add(node.data);
                }
                return result;
            }
            
            for (int i = 0; i < levelSize; i++) {
                TreeNode current = queue.poll();
                
                if (current.left != null) {
                    queue.offer(current.left);
                }
                if (current.right != null) {
                    queue.offer(current.right);
                }
            }
            
            level++;
        }
        
        return new ArrayList<>();
    }
    
    public static void main(String[] args) {
        TreeNode root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.left = new TreeNode(4);
        root.left.right = new TreeNode(5);
        
        System.out.println("Nodes at distance 1: " + nodesAtKDistance(root, 1)); // [2, 3]
        System.out.println("Nodes at distance 2: " + nodesAtKDistanceIterative(root, 2)); // [4, 5]
    }
}`,
        }}
        explanation="Print nodes at distance k from root. Recursive: O(n) time, O(h) space. Iterative: O(n) time, O(w) space. From specific node: find target first, then print nodes at distance k."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Distance counted in edges from root (or given node). Need all nodes exactly k edges away.",
              details: [
                "If k == 0 → return root",
                "Handle k greater than tree height (result empty)",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Equivalent to exploring tree level by level until reaching depth k, or recursively reducing k.",
              keywords: [
                "level order",
                "DFS depth tracking",
                "distance-k nodes",
              ],
              details: [
                "DFS: subtract 1 from k as you go deeper",
                "BFS: track current level and stop when level == k",
                "For arbitrary target node, need upward edges → recursion returning distances",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Use recursion for root-based query, queue for BFS, plus optional parent pointers for target-based queries.",
              details: [
                "Queue stores nodes per level",
                "For general target, recursion returns distance to target and reuses helper for opposite subtree",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description: "Implement both root-based and target-based logic.",
              details: [
                "Root-based DFS: when k==0 push value; else recurse with k-1",
                "BFS: iterate until level==k then return queue contents",
                "Target-based: locate target, print downwards, propagate distance up and explore other branch with remaining distance",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Avoid repeated scans by combining search + distance calculations in one recursion.",
              details: [
                "Return -1 when target not in subtree to prune search",
                "For very deep trees prefer iterative BFS to avoid recursion depth issues",
                "If queries repeated, precompute parent pointers to run BFS from target",
              ],
            },
          ],
          pattern: "Depth-Limited Traversal / BFS by Level",
          complexity: {
            time: "O(n)",
            space: "O(h) recursion or O(w) BFS",
          },
        }}
      />

      <ProblemBlock
        title="10. Children Sum Property"
        difficulty="Medium"
        description="Check if a binary tree satisfies the children sum property (parent = sum of children)."
        solutions={{
          JavaScript: `// Children Sum Property

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
console.log("After conversion:", childrenSumProperty(tree3));`,
          Java: `public class ChildrenSumProperty {
    // Check if tree satisfies children sum property
    public static boolean childrenSumProperty(TreeNode root) {
        if (root == null) return true;
        
        // If leaf node, it satisfies the property
        if (root.left == null && root.right == null) {
            return true;
        }
        
        int sum = 0;
        if (root.left != null) {
            sum += root.left.data;
        }
        if (root.right != null) {
            sum += root.right.data;
        }
        
        return (root.data == sum) && 
               childrenSumProperty(root.left) && 
               childrenSumProperty(root.right);
    }
    
    // Convert tree to satisfy children sum property
    public static void convertToChildrenSum(TreeNode root) {
        if (root == null) return;
        
        if (root.left == null && root.right == null) {
            return;
        }
        
        convertToChildrenSum(root.left);
        convertToChildrenSum(root.right);
        
        int sum = 0;
        if (root.left != null) {
            sum += root.left.data;
        }
        if (root.right != null) {
            sum += root.right.data;
        }
        
        if (sum > root.data) {
            root.data = sum;
        } else if (sum < root.data) {
            int diff = root.data - sum;
            if (root.left != null) {
                root.left.data += diff;
            } else if (root.right != null) {
                root.right.data += diff;
            }
        }
    }
    
    public static void main(String[] args) {
        TreeNode root = new TreeNode(10);
        root.left = new TreeNode(8);
        root.right = new TreeNode(2);
        root.left.left = new TreeNode(3);
        root.left.right = new TreeNode(5);
        
        System.out.println("Satisfies property: " + childrenSumProperty(root)); // true
    }
}`,
        }}
        explanation="Children sum property: parent = sum of children. Check recursively for all nodes. Convert tree: update parent if sum > parent, update children if sum < parent. Time: O(n), Space: O(h)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Children Sum Property (CSP): for every non-leaf node, node.value = sum(left.value + right.value).",
              details: [
                "Leaf nodes automatically satisfy property",
                "Null children contribute 0 to the sum",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recursive validation: check current node, then recurse into left/right subtrees.",
              keywords: [
                "tree property check",
                "post-order validation",
                "value constraints",
              ],
              details: [
                "Need to inspect node after gathering child values",
                "Conversion variant adjusts subtree values bottom-up",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Use recursion (post-order) since child sums needed before validating parent.",
              details: [
                "Implicit call stack depth equals tree height",
                "For conversion, in-place updates propagate upwards",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Post-order traversal returning boolean (for check) or mutating nodes (for convert).",
              details: [
                "Check: compute child sum, compare with node value, recurse on children",
                "Convert: adjust child values if sum < node, or raise node value if sum > node",
                "Optional BFS approach (less natural) also works but requires storing parents",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description: "Ensure updates don’t break downstream computation.",
              details: [
                "When increasing child value, propagate adjustment down the subtree to maintain CSP",
                "Guard against negative values if they’re allowed",
                "Time remains O(n) because each node visited constant times",
              ],
            },
          ],
          pattern: "Post-order Validation / Adjustment of Node Constraints",
          complexity: {
            time: "O(n)",
            space: "O(h)",
          },
        }}
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
        solutions={{
          JavaScript: `// Check for Balanced Binary Tree

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
isBalancedDetailed(balancedTree);`,
          Java: `public class BalancedBinaryTree {
    // Optimized approach - O(n) time
    public static boolean isBalanced(TreeNode root) {
        return checkHeight(root) != -1;
    }
    
    private static int checkHeight(TreeNode node) {
        if (node == null) return 0;
        
        int leftHeight = checkHeight(node.left);
        if (leftHeight == -1) return -1;
        
        int rightHeight = checkHeight(node.right);
        if (rightHeight == -1) return -1;
        
        if (Math.abs(leftHeight - rightHeight) > 1) {
            return -1;
        }
        
        return 1 + Math.max(leftHeight, rightHeight);
    }
    
    public static void main(String[] args) {
        TreeNode root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.left = new TreeNode(4);
        
        System.out.println("Is balanced: " + isBalanced(root)); // true
    }
}`,
        }}
        explanation="Balanced tree: height difference between left and right subtrees ≤ 1. Naive: O(n²) time, O(h) space. Optimized: O(n) time, O(h) space. Return -1 for unbalanced, height for balanced."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Balanced (height-balanced) means every node’s left/right heights differ by at most 1.",
              details: [
                "Clarify whether single-node/empty tree counts as balanced (yes)",
                "Height measured in nodes or edges—consistent difference check works either way",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Requires height info of subtrees plus validity of subtrees: classic post-order calculation.",
              keywords: [
                "height-balanced",
                "post-order",
                "DFS with early exit",
              ],
              details: [
                "Naive approach recomputes heights repeatedly → O(n²)",
                "Optimized approach propagates height upward and sentinel for imbalance",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Recursion with return value carrying both height and status (or sentinel -1).",
              details: [
                "Call stack depth equals tree height",
                "Alternatively, explicit stack can mimic post-order traversal",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Perform post-order traversal computing heights as you unwind.",
              details: [
                "Recursive helper returns height if balanced, else -1",
                "At each node: compute leftHeight/rightHeight, if either -1 propagate failure",
                "If |left-right|>1, return -1; else return 1+max(left,right)",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Ensure early exit when unbalanced subtree found to keep runtime linear.",
              details: [
                "Use short-circuiting to avoid exploring right subtree when left already unbalanced",
                "For iterative version, use stack storing state (node, processed flag, heights)",
                "Test with balanced and highly skewed trees",
              ],
            },
          ],
          pattern: "Post-order Height Computation with Sentinel",
          complexity: {
            time: "O(n)",
            space: "O(h)",
          },
        }}
      />

      <ProblemBlock
        title="12. Diameter of a Binary Tree"
        difficulty="Medium"
        description="Find the diameter of a binary tree (longest path between any two nodes)."
        solutions={{
          JavaScript: `// Diameter of a Binary Tree

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
diameterDetailed(tree);`,
          Java: `public class DiameterOfBinaryTree {
    // Optimized approach - O(n) time
    static int maxDiameter = 0;
    
    public static int diameter(TreeNode root) {
        maxDiameter = 0;
        height(root);
        return maxDiameter;
    }
    
    private static int height(TreeNode node) {
        if (node == null) return 0;
        
        int leftHeight = height(node.left);
        int rightHeight = height(node.right);
        
        maxDiameter = Math.max(maxDiameter, 1 + leftHeight + rightHeight);
        
        return 1 + Math.max(leftHeight, rightHeight);
    }
    
    public static void main(String[] args) {
        TreeNode root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.left = new TreeNode(4);
        root.left.right = new TreeNode(5);
        
        System.out.println("Diameter: " + diameter(root)); // 4
    }
}`,
        }}
        explanation="Diameter is longest path between any two nodes. Naive: O(n²) time, O(h) space. Optimized: O(n) time, O(h) space. Calculate height and diameter simultaneously to avoid redundant calculations."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Diameter = number of nodes (or edges) on longest path between any two nodes (not necessarily through root).",
              details: [
                "Clarify whether answer should be in nodes or edges (common conversion: nodes-1 = edges)",
                "Need to return length and optionally actual path",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Longest path either lies entirely in left/right subtree or passes through current node (left height + right height + 1).",
              keywords: ["post-order", "height accumulation", "global maximum"],
              details: [
                "We need heights of subtrees to evaluate candidate diameter at each node",
                "Naive solution recomputes heights per node → O(n²)",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Use recursion returning height while updating a shared/global diameter.",
              details: [
                "Global variable or reference stores best diameter so far",
                "Optional structure stores path endpoints",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description: "Perform single DFS computing heights bottom-up.",
              details: [
                "height(node) = 1 + max(leftHeight, rightHeight)",
                "Update `maxDiameter = max(maxDiameter, 1 + leftHeight + rightHeight)`",
                "Return height to parent; final diameter stored globally",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Ensure height helper returns 0 for null nodes and avoids repeated traversals.",
              details: [
                "If edges requested, subtract 1 before returning",
                "To retrieve actual path, capture deepest nodes per side when updating diameter",
                "Time stays linear because each node visited once",
              ],
            },
          ],
          pattern: "Post-order Height Computation with Global Diameter",
          complexity: {
            time: "O(n)",
            space: "O(h)",
          },
        }}
      />

      <ProblemBlock
        title="13. LCA of Binary Tree (Part 1 & 2)"
        difficulty="Medium"
        description="Find the Lowest Common Ancestor (LCA) of two nodes in a binary tree."
        solutions={{
          JavaScript: `// LCA of Binary Tree

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
lcaDetailed(tree, node4, node5);`,
          Java: `public class LCAOfBinaryTree {
    // Basic approach - O(n) time
    public static TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        if (root == null || root == p || root == q) {
            return root;
        }
        
        TreeNode left = lowestCommonAncestor(root.left, p, q);
        TreeNode right = lowestCommonAncestor(root.right, p, q);
        
        if (left != null && right != null) {
            return root;
        }
        
        return left != null ? left : right;
    }
    
    public static void main(String[] args) {
        TreeNode root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.left = new TreeNode(4);
        root.left.right = new TreeNode(5);
        
        TreeNode node4 = root.left.left;
        TreeNode node5 = root.left.right;
        
        TreeNode lca = lowestCommonAncestor(root, node4, node5);
        System.out.println("LCA of 4 and 5: " + lca.data); // 2
    }
}`,
        }}
        explanation="LCA is lowest common ancestor of two nodes. Basic approach: return node if found, return root if both subtrees found. Path approach: find paths and find common ancestor. Time: O(n), Space: O(h)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Given two nodes p and q in a binary tree (not necessarily BST), return their lowest common ancestor (deepest shared ancestor).",
              details: [
                "Assume both nodes exist? If not, confirm behavior",
                "Tree can be non-binary search, so no ordering assumptions",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Use divide-and-conquer: if p/q found in left/right subtrees, current node is LCA.",
              keywords: ["post-order", "divide and conquer", "ancestor search"],
              details: [
                "Base case when node equals p or q",
                "If both recursive calls yield non-null, current is LCA",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Recursive DFS is most natural; alternative uses parent pointers/hash maps.",
              details: [
                "Recursion returns pointer to ancestor or null",
                "Path-based method stores vectors of nodes to compare later",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Implement single-pass DFS or path comparison depending on requirements.",
              details: [
                "Recursive DFS: return node if matches p/q; propagate results upward",
                "Path method: gather root→p and root→q lists, then scan for first divergence",
                "Parent-hash approach: build parent map and climb upward from one node marking visited ancestors",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Favor single-pass DFS for O(n) time/O(h) space; extend to distance or path if needed.",
              details: [
                "Ensure recursion stops early once LCA identified to avoid extra work",
                "For repeated queries, precompute parents + depths and use binary lifting",
                "When nodes may be absent, propagate flags to indicate presence",
              ],
            },
          ],
          pattern: "Divide-and-Conquer LCA in Binary Tree",
          complexity: {
            time: "O(n)",
            space: "O(h)",
          },
        }}
      />

      <ProblemBlock
        title="14. Construct Binary Tree from Inorder and Preorder"
        difficulty="Hard"
        description="Construct a binary tree from inorder and preorder traversal sequences."
        solutions={{
          JavaScript: `// Construct Binary Tree from Inorder and Preorder

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
buildTreeDetailed(preorder, inorder);`,
          Java: `import java.util.*;

public class ConstructBinaryTree {
    // Construct tree from inorder and preorder
    public static TreeNode buildTreeFromInorderPreorder(int[] preorder, int[] inorder) {
        Map<Integer, Integer> inorderMap = new HashMap<>();
        
        // Create map for O(1) lookup
        for (int i = 0; i < inorder.length; i++) {
            inorderMap.put(inorder[i], i);
        }
        
        int[] preIndex = {0};
        
        return buildTree(preorder, inorder, inorderMap, 0, inorder.length - 1, preIndex);
    }
    
    private static TreeNode buildTree(int[] preorder, int[] inorder, Map<Integer, Integer> inorderMap,
                                     int inStart, int inEnd, int[] preIndex) {
        if (inStart > inEnd) return null;
        
        // Create root from preorder
        int rootValue = preorder[preIndex[0]++];
        TreeNode root = new TreeNode(rootValue);
        
        // Find root index in inorder
        int rootIndex = inorderMap.get(rootValue);
        
        // Build left and right subtrees
        root.left = buildTree(preorder, inorder, inorderMap, inStart, rootIndex - 1, preIndex);
        root.right = buildTree(preorder, inorder, inorderMap, rootIndex + 1, inEnd, preIndex);
        
        return root;
    }
    
    public static void main(String[] args) {
        int[] preorder = {3, 9, 20, 15, 7};
        int[] inorder = {9, 3, 15, 20, 7};
        
        TreeNode root = buildTreeFromInorderPreorder(preorder, inorder);
        System.out.println("Tree constructed successfully");
    }
}`,
        }}
        explanation="Construct tree from inorder and preorder. Use preorder to find root, inorder to find left/right subtrees. Create map for O(1) lookup. Time: O(n), Space: O(n)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Given inorder + preorder sequences (unique elements assumed), reconstruct original binary tree.",
              details: [
                "If duplicates exist, need extra info (indices); default assumption is unique values",
                "Ensure traversal arrays are same length and contain same elements",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Preorder gives root order, inorder splits tree into left/right partitions.",
              keywords: [
                "divide and conquer",
                "preorder root",
                "inorder partition",
              ],
              details: [
                "First preorder element is current root",
                "Locate root in inorder to determine subtree boundaries",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Use recursion with indices. Hash map stores inorder value → index for O(1) partition lookup.",
              details: [
                "Maintain global/preIndex pointer into preorder array",
                "No need to slice arrays; use start/end indices for speed",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Recursive build(inStart, inEnd): pick root from preorder, split inorder, recurse left then right.",
              details: [
                "Base case: inStart > inEnd → null",
                "After constructing left subtree, recurse for right subtree using partition indices",
                "For inorder+postorder, build right subtree first because root chosen from postorder end",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Watch indices carefully and avoid repeated map lookups where possible.",
              details: [
                "Use `Map` for fast index retrieval; fallback is O(n) search leading to O(n²)",
                "PreIndex should be closure/outer variable to maintain state across recursive calls",
                "Validate by re-traversing built tree to compare sequences",
              ],
            },
          ],
          pattern: "Divide-and-Conquer Tree Reconstruction",
          complexity: {
            time: "O(n)",
            space: "O(n) for recursion + hash map",
          },
        }}
      />

      <ProblemBlock
        title="15. Serialize and Deserialize a Binary Tree"
        difficulty="Hard"
        description="Serialize a binary tree to string and deserialize it back to tree."
        solutions={{
          JavaScript: `// Serialize and Deserialize a Binary Tree

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
console.log("Level order deserialized root:", deserializedLevel?.data);`,
          Java: `import java.util.*;

public class SerializeDeserializeBinaryTree {
    // Serialize using preorder traversal
    public static String serialize(TreeNode root) {
        List<String> result = new ArrayList<>();
        preorder(root, result);
        return String.join(",", result);
    }
    
    private static void preorder(TreeNode node, List<String> result) {
        if (node == null) {
            result.add("null");
            return;
        }
        
        result.add(String.valueOf(node.data));
        preorder(node.left, result);
        preorder(node.right, result);
    }
    
    // Deserialize from preorder string
    public static TreeNode deserialize(String data) {
        String[] values = data.split(",");
        int[] index = {0};
        return buildTree(values, index);
    }
    
    private static TreeNode buildTree(String[] values, int[] index) {
        if (index[0] >= values.length || values[index[0]].equals("null")) {
            index[0]++;
            return null;
        }
        
        TreeNode node = new TreeNode(Integer.parseInt(values[index[0]++]));
        node.left = buildTree(values, index);
        node.right = buildTree(values, index);
        
        return node;
    }
    
    public static void main(String[] args) {
        TreeNode root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.right.left = new TreeNode(4);
        root.right.right = new TreeNode(5);
        
        String serialized = serialize(root);
        System.out.println("Serialized: " + serialized);
        
        TreeNode deserialized = deserialize(serialized);
        System.out.println("Deserialized root: " + deserialized.data);
    }
}`,
        }}
        explanation="Serialize tree to string, deserialize back to tree. Preorder: use 'null' for missing nodes. Level order: serialize level by level. Time: O(n), Space: O(n)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Need bijective conversion between tree structure and string/array representation.",
              details: [
                "Serialization must encode null children to reconstruct shape",
                "Decide traversal order (preorder vs level order) and delimiter format",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Use traversal plus sentinel tokens for nulls to encode structure.",
              keywords: ["serialization", "preorder", "BFS", "null markers"],
              details: [
                "Preorder naturally recreates tree when combined with null markers",
                "Level order approach treats tree like arrays with placeholders",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Serialize: string builder / array of tokens. Deserialize: queue or recursion with index pointer.",
              details: [
                "Preorder-based deserialize uses index pointer into token array",
                "Level-order deserialize uses queue tracking parents while attaching children",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Implement serialization + deserialization pair consistently.",
              details: [
                "Serialize preorder: append value, then left, then right; add 'null' for missing nodes",
                "Deserialize preorder: read token; if 'null' return null; otherwise create node and recursively build children",
                "Level-order pair: BFS with queue, writing 'null' when encountering missing child; reverse logic while deserializing",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Ensure deterministic output and handle whitespace/formatting carefully.",
              details: [
                "Use delimiter (comma) and consistent parsing via split",
                "For large trees, prefer streaming builder to avoid repeated string concatenation",
                "Security: validate tokens before parsing ints",
              ],
            },
          ],
          pattern: "Traversal with Null Markers for Tree Serialization",
          complexity: {
            time: "O(n)",
            space: "O(n)",
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
        className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors mb-4"
      >
        {showSolution ? "Hide Solution" : "Show Solution"}
      </button>

      {showSolution && codeData && (
        <div>
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

          {activeTab === "solution" && (
            <div className="space-y-4">
              <CodeBlock code={codeData} defaultLanguage="JavaScript" />
              <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-4">
                <p className="text-green-200">
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

function ApproachTab({ approach }) {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-500/30">
        <h3 className="text-2xl font-bold text-white mb-2">
          🎯 Problem Solving Approach
        </h3>
        <p className="text-gray-300 text-sm">
          Applying the systematic 5-step framework for this tree problem
        </p>
      </div>

      {approach.steps?.map((step, index) => (
        <div
          key={index}
          className="bg-gray-800 rounded-lg p-5 border border-gray-700"
        >
          <div className="flex items-start gap-4">
            <div className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
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
                        <span className="text-green-400 mt-1">•</span>
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
                      className="px-2 py-1 bg-green-500/20 text-green-200 rounded text-xs"
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
        <div className="bg-emerald-900/30 border border-emerald-500/30 rounded-lg p-4">
          <h4 className="text-lg font-semibold text-emerald-200 mb-2">
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
        <div className="bg-teal-900/30 border border-teal-500/30 rounded-lg p-4">
          <h4 className="text-lg font-semibold text-teal-200 mb-2">
            🎨 Pattern Identified
          </h4>
          <p className="text-gray-300">{approach.pattern}</p>
        </div>
      )}
    </div>
  );
}
