"use client";
import Link from "next/link";
import { useState } from "react";

export default function BST() {
  const [activeTab, setActiveTab] = useState("fundamentals");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <header className="border-b border-gray-700 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link
            href="/"
            className="text-yellow-400 hover:text-yellow-300 mb-2 inline-block"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Binary Search Trees Mastery
          </h1>
          <p className="text-gray-400 mt-2">
            BST Operations, Self-Balancing Trees & Advanced Algorithms
          </p>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-gray-800/50 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-2 overflow-x-auto">
            {[
              { id: "fundamentals", label: "📚 Fundamentals" },
              { id: "operations", label: "⚙️ BST Operations" },
              { id: "advanced", label: "🚀 Advanced Problems" },
              { id: "balancing", label: "⚖️ Self-Balancing" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 font-semibold whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? "text-yellow-400 border-b-2 border-yellow-400"
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
        {activeTab === "operations" && <OperationsSection />}
        {activeTab === "advanced" && <AdvancedSection />}
        {activeTab === "balancing" && <BalancingSection />}
      </main>
    </div>
  );
}

// Fundamentals Section
function FundamentalsSection() {
  return (
    <div className="space-y-8">
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">BST Fundamentals</h2>
        <p className="text-gray-300 text-lg mb-6">
          Understanding Binary Search Trees and their fundamental properties.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-yellow-200 mb-3">
              BST Properties:
            </h3>
            <ul className="space-y-2 text-yellow-100">
              <li>
                • <strong>Left &lt; Parent &lt; Right</strong>
              </li>
              <li>
                • <strong>Inorder traversal</strong> gives sorted sequence
              </li>
              <li>
                • <strong>No duplicate values</strong> (typically)
              </li>
              <li>
                • <strong>Search time:</strong> O(log n) average, O(n) worst
              </li>
              <li>
                • <strong>Height:</strong> O(log n) average, O(n) worst
              </li>
            </ul>
          </div>

          <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-orange-200 mb-3">
              Key Operations:
            </h3>
            <ul className="space-y-2 text-orange-100">
              <li>
                • <strong>Search:</strong> Find element
              </li>
              <li>
                • <strong>Insert:</strong> Add new element
              </li>
              <li>
                • <strong>Delete:</strong> Remove element
              </li>
              <li>
                • <strong>Floor:</strong> Largest ≤ key
              </li>
              <li>
                • <strong>Ceil:</strong> Smallest ≥ key
              </li>
            </ul>
          </div>
        </div>

        <TheoryBlock title="BST Node Implementation">
          <CodeBlock
            code={{
              JavaScript: `// BST Node Implementation

class BSTNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// Binary Search Tree Implementation
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  
  // Search for a value
  search(data) {
    return this.searchHelper(this.root, data);
  }
  
  searchHelper(node, data) {
    if (node === null || node.data === data) {
      return node;
    }
    
    if (data < node.data) {
      return this.searchHelper(node.left, data);
    } else {
      return this.searchHelper(node.right, data);
    }
  }
  
  // Insert a value
  insert(data) {
    this.root = this.insertHelper(this.root, data);
  }
  
  insertHelper(node, data) {
    if (node === null) {
      return new BSTNode(data);
    }
    
    if (data < node.data) {
      node.left = this.insertHelper(node.left, data);
    } else if (data > node.data) {
      node.right = this.insertHelper(node.right, data);
    }
    
    return node;
  }
  
  // Inorder traversal (gives sorted order)
  inorder() {
    const result = [];
    this.inorderHelper(this.root, result);
    return result;
  }
  
  inorderHelper(node, result) {
    if (node === null) return;
    
    this.inorderHelper(node.left, result);
    result.push(node.data);
    this.inorderHelper(node.right, result);
  }
  
  // Get minimum value
  getMin() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }
  
  // Get maximum value
  getMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }
}

// Usage example
const bst = new BinarySearchTree();
bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(20);
bst.insert(40);
bst.insert(60);
bst.insert(80);

console.log("Inorder traversal:", bst.inorder()); // [20, 30, 40, 50, 60, 70, 80]
console.log("Search 40:", bst.search(40) ? "Found" : "Not found");
console.log("Min value:", bst.getMin()); // 20
console.log("Max value:", bst.getMax()); // 80`,
              Java: `// BST Node Implementation

class BSTNode {
    int data;
    BSTNode left;
    BSTNode right;
    
    BSTNode(int data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// Binary Search Tree Implementation
class BinarySearchTree {
    BSTNode root;
    
    public BinarySearchTree() {
        this.root = null;
    }
    
    // Search for a value
    public BSTNode search(int data) {
        return searchHelper(root, data);
    }
    
    private BSTNode searchHelper(BSTNode node, int data) {
        if (node == null || node.data == data) {
            return node;
        }
        
        if (data < node.data) {
            return searchHelper(node.left, data);
        } else {
            return searchHelper(node.right, data);
        }
    }
    
    // Insert a value
    public void insert(int data) {
        root = insertHelper(root, data);
    }
    
    private BSTNode insertHelper(BSTNode node, int data) {
        if (node == null) {
            return new BSTNode(data);
        }
        
        if (data < node.data) {
            node.left = insertHelper(node.left, data);
        } else if (data > node.data) {
            node.right = insertHelper(node.right, data);
        }
        
        return node;
    }
    
    // Inorder traversal (gives sorted order)
    public List<Integer> inorder() {
        List<Integer> result = new ArrayList<>();
        inorderHelper(root, result);
        return result;
    }
    
    private void inorderHelper(BSTNode node, List<Integer> result) {
        if (node == null) return;
        
        inorderHelper(node.left, result);
        result.add(node.data);
        inorderHelper(node.right, result);
    }
    
    // Get minimum value
    public int getMin() {
        BSTNode current = root;
        while (current.left != null) {
            current = current.left;
        }
        return current.data;
    }
    
    // Get maximum value
    public int getMax() {
        BSTNode current = root;
        while (current.right != null) {
            current = current.right;
        }
        return current.data;
    }
    
    public static void main(String[] args) {
        BinarySearchTree bst = new BinarySearchTree();
        bst.insert(50);
        bst.insert(30);
        bst.insert(70);
        bst.insert(20);
        bst.insert(40);
        bst.insert(60);
        bst.insert(80);
        
        System.out.println("Inorder traversal: " + bst.inorder()); // [20, 30, 40, 50, 60, 70, 80]
        System.out.println("Search 40: " + (bst.search(40) != null ? "Found" : "Not found"));
        System.out.println("Min value: " + bst.getMin()); // 20
        System.out.println("Max value: " + bst.getMax()); // 80
    }
}`,
            }}
          />
        </TheoryBlock>
      </div>

      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Applications of BST
        </h2>
        <p className="text-gray-300 mb-6">
          Real-world applications where BSTs are commonly used.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-3">
              🔍 Search Operations
            </h3>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>• Database indexing</li>
              <li>• Symbol tables</li>
              <li>• File system directories</li>
            </ul>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-3">
              📊 Sorting & Ordering
            </h3>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>• Inorder traversal sorting</li>
              <li>• Priority queues</li>
              <li>• Range queries</li>
            </ul>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-3">
              🎯 Advanced Data Structures
            </h3>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>• AVL trees</li>
              <li>• Red-Black trees</li>
              <li>• B-trees</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// Operations Section
function OperationsSection() {
  return (
    <div className="space-y-8">
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">BST Operations</h2>
        <p className="text-gray-300 mb-6">
          Core BST operations including insert, delete, search, floor, and ceil.
        </p>
      </div>

      <ProblemBlock
        title="1. Insert in BST"
        difficulty="Easy"
        description="Insert a new node into a Binary Search Tree while maintaining BST properties."
        solutions={{
          JavaScript: `// Insert in BST

// Recursive approach
function insertBST(root, data) {
  if (root === null) {
    return new BSTNode(data);
  }
  
  if (data < root.data) {
    root.left = insertBST(root.left, data);
  } else if (data > root.data) {
    root.right = insertBST(root.right, data);
  }
  
  return root;
}

// Iterative approach
function insertBSTIterative(root, data) {
  const newNode = new BSTNode(data);
  
  if (root === null) {
    return newNode;
  }
  
  let current = root;
  let parent = null;
  
  while (current !== null) {
    parent = current;
    if (data < current.data) {
      current = current.left;
    } else if (data > current.data) {
      current = current.right;
    } else {
      // Duplicate value, return original root
      return root;
    }
  }
  
  if (data < parent.data) {
    parent.left = newNode;
  } else {
    parent.right = newNode;
  }
  
  return root;
}

// Test cases
function createTestBST() {
  let root = null;
  const values = [50, 30, 70, 20, 40, 60, 80];
  
  for (const value of values) {
    root = insertBST(root, value);
  }
  
  return root;
}

const bst = createTestBST();

console.log("=== Testing BST Insert ===");
console.log("BST created with values: [50, 30, 70, 20, 40, 60, 80]");

// Verify with inorder traversal
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

console.log("Inorder traversal:", inorderTraversal(bst)); // [20, 30, 40, 50, 60, 70, 80]`,
          Java: `class BSTNode {
    int data;
    BSTNode left;
    BSTNode right;
    
    BSTNode(int data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

public class InsertBST {
    // Recursive approach
    public static BSTNode insertBST(BSTNode root, int data) {
        if (root == null) {
            return new BSTNode(data);
        }
        
        if (data < root.data) {
            root.left = insertBST(root.left, data);
        } else if (data > root.data) {
            root.right = insertBST(root.right, data);
        }
        
        return root;
    }
    
    // Iterative approach
    public static BSTNode insertBSTIterative(BSTNode root, int data) {
        BSTNode newNode = new BSTNode(data);
        
        if (root == null) {
            return newNode;
        }
        
        BSTNode current = root;
        BSTNode parent = null;
        
        while (current != null) {
            parent = current;
            if (data < current.data) {
                current = current.left;
            } else if (data > current.data) {
                current = current.right;
            } else {
                // Duplicate value, return original root
                return root;
            }
        }
        
        if (data < parent.data) {
            parent.left = newNode;
        } else {
            parent.right = newNode;
        }
        
        return root;
    }
    
    public static void main(String[] args) {
        BSTNode root = null;
        int[] values = {50, 30, 70, 20, 40, 60, 80};
        
        for (int value : values) {
            root = insertBST(root, value);
        }
        
        System.out.println("BST created successfully");
    }
}`,
        }}
        explanation="Insert maintains BST property: left < parent < right. Recursive: O(h) time, O(h) space. Iterative: O(h) time, O(1) space. Duplicate values typically not inserted."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Add a new key while preserving the BST invariant (left subtree keys < node < right subtree keys).",
              details: [
                "Clarify how to handle duplicates (ignore, count frequency, or place consistently)",
                "We only touch the path from root to insertion point",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Binary search traversal: compare key, branch left/right until we find a null slot.",
              keywords: [
                "binary search",
                "BST traversal",
                "recursion",
                "iteration",
              ],
              details: [
                "Traversal order mirrors binary search on sorted array",
                "Work proportional to tree height h",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Use either recursion (implicit stack) or iterative pointer walk with parent tracking.",
              details: [
                "Recursive version is concise but uses O(h) stack",
                "Iterative version keeps explicit `parent` and `current` pointers",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Traverse from root: go left if key < node, right otherwise; insert when hitting null.",
              details: [
                "If root null → new node becomes root",
                "When exiting loop, attach new node as left or right child of parent",
                "Return root so caller keeps tree handle",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Guard against skewed trees and duplicates; consider iterative version for stack-heavy inputs.",
              details: [
                "For skewed data, iterative avoids recursion depth issues",
                "Encapsulate node creation to keep code DRY",
              ],
            },
          ],
          pattern: "BST Insert via Directed Search",
          complexity: {
            time: "O(h) (avg O(log n), worst O(n))",
            space: "O(h) recursion / O(1) iterative",
          },
        }}
      />

      <ProblemBlock
        title="2. Delete in BST"
        difficulty="Medium"
        description="Delete a node from BST while maintaining BST properties."
        solutions={{
          JavaScript: `// Delete in BST

function deleteBST(root, data) {
  if (root === null) return root;
  
  if (data < root.data) {
    root.left = deleteBST(root.left, data);
  } else if (data > root.data) {
    root.right = deleteBST(root.right, data);
  } else {
    // Node to be deleted found
    
    // Case 1: No children (leaf node)
    if (root.left === null && root.right === null) {
      return null;
    }
    
    // Case 2: One child
    if (root.left === null) {
      return root.right;
    }
    if (root.right === null) {
      return root.left;
    }
    
    // Case 3: Two children
    // Find inorder successor (smallest in right subtree)
    const successor = findMin(root.right);
    root.data = successor.data;
    root.right = deleteBST(root.right, successor.data);
  }
  
  return root;
}

function findMin(node) {
  while (node.left !== null) {
    node = node.left;
  }
  return node;
}

// Alternative approach with detailed explanation
function deleteBSTDetailed(root, data) {
  console.log(\`Deleting \${data} from BST\`);
  
  function deleteHelper(node, data, depth) {
    if (node === null) {
      console.log(\`\${'  '.repeat(depth)}Node not found\`);
      return null;
    }
    
    console.log(\`\${'  '.repeat(depth)}Processing node \${node.data}\`);
    
    if (data < node.data) {
      console.log(\`\${'  '.repeat(depth)}Going left\`);
      node.left = deleteHelper(node.left, data, depth + 1);
    } else if (data > node.data) {
      console.log(\`\${'  '.repeat(depth)}Going right\`);
      node.right = deleteHelper(node.right, data, depth + 1);
    } else {
      console.log(\`\${'  '.repeat(depth)}Found node to delete: \${node.data}\`);
      
      // Case 1: No children
      if (node.left === null && node.right === null) {
        console.log(\`\${'  '.repeat(depth)}Case 1: Leaf node, deleting\`);
        return null;
      }
      
      // Case 2: One child
      if (node.left === null) {
        console.log(\`\${'  '.repeat(depth)}Case 2a: Only right child, replacing with right child\`);
        return node.right;
      }
      if (node.right === null) {
        console.log(\`\${'  '.repeat(depth)}Case 2b: Only left child, replacing with left child\`);
        return node.left;
      }
      
      // Case 3: Two children
      console.log(\`\${'  '.repeat(depth)}Case 3: Two children, finding successor\`);
      const successor = findMin(node.right);
      console.log(\`\${'  '.repeat(depth)}Successor: \${successor.data}\`);
      
      node.data = successor.data;
      node.right = deleteHelper(node.right, successor.data, depth + 1);
    }
    
    return node;
  }
  
  return deleteHelper(root, data, 0);
}

// Test cases
function createTestBST() {
  let root = null;
  const values = [50, 30, 70, 20, 40, 60, 80, 10, 25, 35, 45];
  
  for (const value of values) {
    root = insertBST(root, value);
  }
  
  return root;
}

function insertBST(root, data) {
  if (root === null) {
    return new BSTNode(data);
  }
  
  if (data < root.data) {
    root.left = insertBST(root.left, data);
  } else if (data > root.data) {
    root.right = insertBST(root.right, data);
  }
  
  return root;
}

const bst = createTestBST();

console.log("=== Testing BST Delete ===");
console.log("Original BST inorder:", inorderTraversal(bst));

// Delete leaf node
let newRoot = deleteBST(bst, 10);
console.log("After deleting 10 (leaf):", inorderTraversal(newRoot));

// Delete node with one child
newRoot = deleteBST(newRoot, 20);
console.log("After deleting 20 (one child):", inorderTraversal(newRoot));

// Delete node with two children
newRoot = deleteBST(newRoot, 30);
console.log("After deleting 30 (two children):", inorderTraversal(newRoot));

console.log("\\n=== Detailed Delete Process ===");
deleteBSTDetailed(createTestBST(), 30);`,
          Java: `public class DeleteBST {
    public static BSTNode deleteBST(BSTNode root, int data) {
        if (root == null) return root;
        
        if (data < root.data) {
            root.left = deleteBST(root.left, data);
        } else if (data > root.data) {
            root.right = deleteBST(root.right, data);
        } else {
            // Node to be deleted found
            
            // Case 1: No children (leaf node)
            if (root.left == null && root.right == null) {
                return null;
            }
            
            // Case 2: One child
            if (root.left == null) {
                return root.right;
            }
            if (root.right == null) {
                return root.left;
            }
            
            // Case 3: Two children
            // Find inorder successor (smallest in right subtree)
            BSTNode successor = findMin(root.right);
            root.data = successor.data;
            root.right = deleteBST(root.right, successor.data);
        }
        
        return root;
    }
    
    private static BSTNode findMin(BSTNode node) {
        while (node.left != null) {
            node = node.left;
        }
        return node;
    }
    
    public static void main(String[] args) {
        BSTNode root = new BSTNode(50);
        root.left = new BSTNode(30);
        root.right = new BSTNode(70);
        root.left.left = new BSTNode(20);
        root.left.right = new BSTNode(40);
        
        root = deleteBST(root, 30);
        System.out.println("Node deleted successfully");
    }
}`,
        }}
        explanation="Delete maintains BST property. Three cases: no children (delete), one child (replace), two children (replace with successor). Time: O(h), Space: O(h)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Remove a key while keeping inorder order. Deletion has three structural cases.",
              details: [
                "Case 1: leaf node → just remove",
                "Case 2: one child → replace node by its child",
                "Case 3: two children → replace with inorder successor/predecessor then delete duplicate",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Binary search down the tree to find target, then restructure locally according to case.",
              keywords: [
                "BST delete",
                "successor",
                "binary search",
                "recursion",
              ],
              details: [
                "Case 3 typically uses inorder successor (min of right subtree)",
                "All work confined to search path + local fix",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Recursive helper returning (possibly new) subtree root; iterative works too but recursion keeps code compact.",
              details: [
                "Need helper to find minimum in right subtree",
                "Return updated node pointer to reconnect parents",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Traverse to node, apply removal logic based on child count.",
              details: [
                "Search path: if key < node.val go left, else go right",
                "After deletion, return node so parent pointers update",
                "Case 3 steps: find successor, copy value, recursively delete successor node",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Handle duplicates and ensure helper functions (minValueNode) are O(h).",
              details: [
                "Consider using predecessor when right subtree null but left exists",
                "Iterative delete uses parent pointers but more edge cases; recursion clearer",
              ],
            },
          ],
          pattern: "BST Deletion with Successor Replacement",
          complexity: {
            time: "O(h)",
            space: "O(h) recursion / O(1) iterative",
          },
        }}
      />

      <ProblemBlock
        title="3. Floor in BST"
        difficulty="Medium"
        description="Find the floor value (largest value ≤ given key) in a BST."
        solutions={{
          JavaScript: `// Floor in BST

// Recursive approach
function floorBST(root, key) {
  if (root === null) return null;
  
  if (root.data === key) {
    return root.data;
  }
  
  if (root.data > key) {
    return floorBST(root.left, key);
  }
  
  const floorValue = floorBST(root.right, key);
  return floorValue !== null ? floorValue : root.data;
}

// Iterative approach
function floorBSTIterative(root, key) {
  let floor = null;
  let current = root;
  
  while (current !== null) {
    if (current.data === key) {
      return current.data;
    }
    
    if (current.data < key) {
      floor = current.data;
      current = current.right;
    } else {
      current = current.left;
    }
  }
  
  return floor;
}

// Alternative approach with detailed explanation
function floorBSTDetailed(root, key) {
  console.log(\`Finding floor of \${key} in BST\`);
  
  function floorHelper(node, key, depth) {
    if (node === null) {
      console.log(\`\${'  '.repeat(depth)}Null node, returning null\`);
      return null;
    }
    
    console.log(\`\${'  '.repeat(depth)}Processing node \${node.data}\`);
    
    if (node.data === key) {
      console.log(\`\${'  '.repeat(depth)}Found exact match: \${node.data}\`);
      return node.data;
    }
    
    if (node.data > key) {
      console.log(\`\${'  '.repeat(depth)}Node \${node.data} > key \${key}, going left\`);
      return floorHelper(node.left, key, depth + 1);
    }
    
    console.log(\`\${'  '.repeat(depth)}Node \${node.data} < key \${key}, checking right subtree\`);
    const floorValue = floorHelper(node.right, key, depth + 1);
    
    if (floorValue !== null) {
      console.log(\`\${'  '.repeat(depth)}Found floor in right subtree: \${floorValue}\`);
      return floorValue;
    } else {
      console.log(\`\${'  '.repeat(depth)}No floor in right subtree, using current node: \${node.data}\`);
      return node.data;
    }
  }
  
  return floorHelper(root, key, 0);
}

// Test cases
function createTestBST() {
  let root = null;
  const values = [50, 30, 70, 20, 40, 60, 80, 10, 25, 35, 45];
  
  for (const value of values) {
    root = insertBST(root, value);
  }
  
  return root;
}

function insertBST(root, data) {
  if (root === null) {
    return new BSTNode(data);
  }
  
  if (data < root.data) {
    root.left = insertBST(root.left, data);
  } else if (data > root.data) {
    root.right = insertBST(root.right, data);
  }
  
  return root;
}

const bst = createTestBST();

console.log("=== Testing Floor in BST ===");
console.log("BST inorder:", inorderTraversal(bst));

const testKeys = [15, 25, 35, 45, 55, 65, 75, 85];
for (const key of testKeys) {
  const floor = floorBST(bst, key);
  console.log(\`Floor of \${key}: \${floor}\`);
}

console.log("\\n=== Detailed Floor Calculation ===");
floorBSTDetailed(bst, 35);`,
          Java: `public class FloorBST {
    // Recursive approach
    public static Integer floorBST(BSTNode root, int key) {
        if (root == null) return null;
        
        if (root.data == key) {
            return root.data;
        }
        
        if (root.data > key) {
            return floorBST(root.left, key);
        }
        
        Integer floorValue = floorBST(root.right, key);
        return floorValue != null ? floorValue : root.data;
    }
    
    // Iterative approach
    public static Integer floorBSTIterative(BSTNode root, int key) {
        Integer floor = null;
        BSTNode current = root;
        
        while (current != null) {
            if (current.data == key) {
                return current.data;
            }
            
            if (current.data < key) {
                floor = current.data;
                current = current.right;
            } else {
                current = current.left;
            }
        }
        
        return floor;
    }
    
    public static void main(String[] args) {
        BSTNode root = new BSTNode(50);
        root.left = new BSTNode(30);
        root.right = new BSTNode(70);
        root.left.left = new BSTNode(20);
        root.left.right = new BSTNode(40);
        
        System.out.println("Floor of 35: " + floorBST(root, 35)); // 30
        System.out.println("Floor of 25: " + floorBSTIterative(root, 25)); // 20
    }
}`,
        }}
        explanation="Floor is largest value ≤ key. If current node = key, return it. If current < key, check right subtree. If current > key, check left subtree. Time: O(h), Space: O(h)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Return the greatest key ≤ target. If no such key exists (target < min), return null.",
              details: [
                "BST nodes unique; floor defined relative to numeric ordering",
                "Need to explore only one path down the tree",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Binary search with running candidate: every time we move right we store current node as potential floor.",
              keywords: ["binary search", "floor", "candidate tracking"],
              details: [
                "If node.val == target → immediate answer",
                "If node.val > target → floor must lie in left subtree",
                "If node.val < target → node becomes candidate, move right to find closer value",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Iterative pointer walk easiest (store `floorNode`). Recursion works too but uses call stack.",
              details: [
                "Maintain `result` variable updated whenever we go right",
                "Return `result` after traversal completes",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Traverse from root comparing with target and updating candidate.",
              details: [
                "Initialize `result = null`",
                "While node not null: if node.val == key break; if > key go left; else set result=node and go right",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Stop early when equality found; iterative version avoids recursion overhead.",
              details: [
                "For repeated queries, augment nodes with subtree min/max to accelerate range queries",
              ],
            },
          ],
          pattern: "BST Floor via Candidate Tracking",
          complexity: {
            time: "O(h)",
            space: "O(1) iterative / O(h) recursive",
          },
        }}
      />

      <ProblemBlock
        title="4. Ceil in BST"
        difficulty="Medium"
        description="Find the ceil value (smallest value ≥ given key) in a BST."
        solutions={{
          JavaScript: `// Ceil in BST

// Recursive approach
function ceilBST(root, key) {
  if (root === null) return null;
  
  if (root.data === key) {
    return root.data;
  }
  
  if (root.data < key) {
    return ceilBST(root.right, key);
  }
  
  const ceilValue = ceilBST(root.left, key);
  return ceilValue !== null ? ceilValue : root.data;
}

// Iterative approach
function ceilBSTIterative(root, key) {
  let ceil = null;
  let current = root;
  
  while (current !== null) {
    if (current.data === key) {
      return current.data;
    }
    
    if (current.data > key) {
      ceil = current.data;
      current = current.left;
    } else {
      current = current.right;
    }
  }
  
  return ceil;
}

// Alternative approach with detailed explanation
function ceilBSTDetailed(root, key) {
  console.log(\`Finding ceil of \${key} in BST\`);
  
  function ceilHelper(node, key, depth) {
    if (node === null) {
      console.log(\`\${'  '.repeat(depth)}Null node, returning null\`);
      return null;
    }
    
    console.log(\`\${'  '.repeat(depth)}Processing node \${node.data}\`);
    
    if (node.data === key) {
      console.log(\`\${'  '.repeat(depth)}Found exact match: \${node.data}\`);
      return node.data;
    }
    
    if (node.data < key) {
      console.log(\`\${'  '.repeat(depth)}Node \${node.data} < key \${key}, going right\`);
      return ceilHelper(node.right, key, depth + 1);
    }
    
    console.log(\`\${'  '.repeat(depth)}Node \${node.data} > key \${key}, checking left subtree\`);
    const ceilValue = ceilHelper(node.left, key, depth + 1);
    
    if (ceilValue !== null) {
      console.log(\`\${'  '.repeat(depth)}Found ceil in left subtree: \${ceilValue}\`);
      return ceilValue;
    } else {
      console.log(\`\${'  '.repeat(depth)}No ceil in left subtree, using current node: \${node.data}\`);
      return node.data;
    }
  }
  
  return ceilHelper(root, key, 0);
}

// Test cases
function createTestBST() {
  let root = null;
  const values = [50, 30, 70, 20, 40, 60, 80, 10, 25, 35, 45];
  
  for (const value of values) {
    root = insertBST(root, value);
  }
  
  return root;
}

function insertBST(root, data) {
  if (root === null) {
    return new BSTNode(data);
  }
  
  if (data < root.data) {
    root.left = insertBST(root.left, data);
  } else if (data > root.data) {
    root.right = insertBST(root.right, data);
  }
  
  return root;
}

const bst = createTestBST();

console.log("=== Testing Ceil in BST ===");
console.log("BST inorder:", inorderTraversal(bst));

const testKeys = [15, 25, 35, 45, 55, 65, 75, 85];
for (const key of testKeys) {
  const ceil = ceilBST(bst, key);
  console.log(\`Ceil of \${key}: \${ceil}\`);
}

console.log("\\n=== Detailed Ceil Calculation ===");
ceilBSTDetailed(bst, 35);`,
          Java: `public class CeilBST {
    // Recursive approach
    public static Integer ceilBST(BSTNode root, int key) {
        if (root == null) return null;
        
        if (root.data == key) {
            return root.data;
        }
        
        if (root.data < key) {
            return ceilBST(root.right, key);
        }
        
        Integer ceilValue = ceilBST(root.left, key);
        return ceilValue != null ? ceilValue : root.data;
    }
    
    // Iterative approach
    public static Integer ceilBSTIterative(BSTNode root, int key) {
        Integer ceil = null;
        BSTNode current = root;
        
        while (current != null) {
            if (current.data == key) {
                return current.data;
            }
            
            if (current.data > key) {
                ceil = current.data;
                current = current.left;
            } else {
                current = current.right;
            }
        }
        
        return ceil;
    }
    
    public static void main(String[] args) {
        BSTNode root = new BSTNode(50);
        root.left = new BSTNode(30);
        root.right = new BSTNode(70);
        root.left.left = new BSTNode(20);
        root.left.right = new BSTNode(40);
        
        System.out.println("Ceil of 35: " + ceilBST(root, 35)); // 40
        System.out.println("Ceil of 25: " + ceilBSTIterative(root, 25)); // 30
    }
}`,
        }}
        explanation="Ceil is smallest value ≥ key. If current node = key, return it. If current > key, check left subtree. If current < key, check right subtree. Time: O(h), Space: O(h)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Find smallest key ≥ target; if target exceeds max key, return null.",
              details: ["BST ordering lets us prune search to one path"],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Mirror of floor logic: keep candidate whenever moving left from a node greater than target.",
              keywords: ["binary search", "ceil", "candidate tracking"],
              details: [
                "If node.val == key → direct answer",
                "If node.val < key → must search right",
                "If node.val > key → record candidate and move left for smaller candidate",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Iterative traversal storing `ceilNode`; recursion also fine.",
              details: [
                "While loop with `current` pointer keeps additional space O(1)",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description: "Traverse from root while updating candidate.",
              details: [
                "Initialize `result = null`",
                "While node != null: compare and move accordingly as above",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Break early on equality and ensure duplicates handled consistently.",
              details: ["Wrap logic into helper to reuse for repeated queries"],
            },
          ],
          pattern: "BST Ceil via Candidate Tracking",
          complexity: {
            time: "O(h)",
            space: "O(1) iterative / O(h) recursive",
          },
        }}
      />

      <ProblemBlock
        title="5. Find Kth Smallest in BST"
        difficulty="Medium"
        description="Find the kth smallest element in a BST using inorder traversal."
        solutions={{
          JavaScript: `// Find Kth Smallest in BST

// Approach 1: Inorder traversal with counter
function kthSmallest(root, k) {
  let count = 0;
  let result = null;
  
  function inorder(node) {
    if (node === null) return;
    
    inorder(node.left);
    count++;
    if (count === k) {
      result = node.data;
      return;
    }
    inorder(node.right);
  }
  
  inorder(root);
  return result;
}

// Approach 2: Inorder traversal with array
function kthSmallestArray(root, k) {
  const result = [];
  
  function inorder(node) {
    if (node === null) return;
    
    inorder(node.left);
    result.push(node.data);
    inorder(node.right);
  }
  
  inorder(root);
  return result[k - 1];
}

// Approach 3: Morris traversal (O(1) space)
function kthSmallestMorris(root, k) {
  let count = 0;
  let current = root;
  
  while (current !== null) {
    if (current.left === null) {
      count++;
      if (count === k) {
        return current.data;
      }
      current = current.right;
    } else {
      // Find inorder predecessor
      let predecessor = current.left;
      while (predecessor.right !== null && predecessor.right !== current) {
        predecessor = predecessor.right;
      }
      
      if (predecessor.right === null) {
        predecessor.right = current;
        current = current.left;
      } else {
        predecessor.right = null;
        count++;
        if (count === k) {
          return current.data;
        }
        current = current.right;
      }
    }
  }
  
  return null;
}

// Alternative approach with detailed explanation
function kthSmallestDetailed(root, k) {
  console.log(\`Finding \${k}th smallest element in BST\`);
  
  let count = 0;
  let result = null;
  
  function inorderDetailed(node, depth) {
    if (node === null) {
      console.log(\`\${'  '.repeat(depth)}Null node\`);
      return;
    }
    
    console.log(\`\${'  '.repeat(depth)}Processing node \${node.data}\`);
    
    console.log(\`\${'  '.repeat(depth)}Going left\`);
    inorderDetailed(node.left, depth + 1);
    
    count++;
    console.log(\`\${'  '.repeat(depth)}Count: \${count}, Node: \${node.data}\`);
    
    if (count === k) {
      result = node.data;
      console.log(\`\${'  '.repeat(depth)}Found \${k}th smallest: \${node.data}\`);
      return;
    }
    
    console.log(\`\${'  '.repeat(depth)}Going right\`);
    inorderDetailed(node.right, depth + 1);
  }
  
  inorderDetailed(root, 0);
  return result;
}

// Test cases
function createTestBST() {
  let root = null;
  const values = [50, 30, 70, 20, 40, 60, 80, 10, 25, 35, 45];
  
  for (const value of values) {
    root = insertBST(root, value);
  }
  
  return root;
}

function insertBST(root, data) {
  if (root === null) {
    return new BSTNode(data);
  }
  
  if (data < root.data) {
    root.left = insertBST(root.left, data);
  } else if (data > root.data) {
    root.right = insertBST(root.right, data);
  }
  
  return root;
}

const bst = createTestBST();

console.log("=== Testing Kth Smallest in BST ===");
console.log("BST inorder:", inorderTraversal(bst));

for (let k = 1; k <= 5; k++) {
  console.log(\`\${k}th smallest: \${kthSmallest(bst, k)}\`);
}

console.log("\\n=== Detailed Kth Smallest Calculation ===");
kthSmallestDetailed(bst, 3);`,
          Java: `public class KthSmallestBST {
    // Inorder traversal with counter
    public static Integer kthSmallest(BSTNode root, int k) {
        int[] count = {0};
        int[] result = {0};
        
        kthSmallestHelper(root, k, count, result);
        return count[0] >= k ? result[0] : null;
    }
    
    private static void kthSmallestHelper(BSTNode node, int k, int[] count, int[] result) {
        if (node == null) return;
        
        kthSmallestHelper(node.left, k, count, result);
        count[0]++;
        if (count[0] == k) {
            result[0] = node.data;
            return;
        }
        kthSmallestHelper(node.right, k, count, result);
    }
    
    // Inorder traversal with array
    public static Integer kthSmallestArray(BSTNode root, int k) {
        List<Integer> result = new ArrayList<>();
        inorder(root, result);
        return k <= result.size() ? result.get(k - 1) : null;
    }
    
    private static void inorder(BSTNode node, List<Integer> result) {
        if (node == null) return;
        inorder(node.left, result);
        result.add(node.data);
        inorder(node.right, result);
    }
    
    public static void main(String[] args) {
        BSTNode root = new BSTNode(50);
        root.left = new BSTNode(30);
        root.right = new BSTNode(70);
        root.left.left = new BSTNode(20);
        root.left.right = new BSTNode(40);
        
        System.out.println("3rd smallest: " + kthSmallest(root, 3)); // 40
        System.out.println("2nd smallest: " + kthSmallestArray(root, 2)); // 30
    }
}`,
        }}
        explanation="Kth smallest found using inorder traversal. Counter approach: O(n) time, O(h) space. Array approach: O(n) time, O(n) space. Morris traversal: O(n) time, O(1) space."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "In BST, inorder traversal yields sorted order, so kth smallest is (k-1)th inorder visit.",
              details: [
                "k is 1-indexed; ensure k ≤ node count",
                "Decide whether to return value or node reference",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Use inorder traversal with counter to stop once kth element is reached.",
              keywords: [
                "inorder",
                "kth order statistic",
                "stack",
                "Morris traversal",
              ],
              details: [
                "Iterative stack approach avoids storing full traversal",
                "Morris traversal gives O(1) extra space if allowed",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Use explicit stack (iterative) or recursion with shared counter; advanced solution uses two stacks for dual iterators.",
              details: [
                "Stack stores path to current node (size up to tree height)",
                "Counter decrements each time we pop node",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Perform inorder traversal stopping once counter hits zero.",
              details: [
                "Initialize stack and current=root",
                "Push all left children, pop, decrement k, traverse right subtree",
                "Return node when k == 0",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Guard against invalid k and consider augmented BST storing subtree sizes for O(log n) queries.",
              details: [
                "Augmented nodes allow `order-statistics tree` operations",
                "If tree undergoes many queries, maintain subtree counts during insert/delete",
              ],
            },
          ],
          pattern: "Inorder Order-Statistic on BST",
          complexity: {
            time: "O(h + k) ≈ O(n) worst",
            space: "O(h) (O(1) with Morris traversal)",
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
          Advanced BST Problems
        </h2>
        <p className="text-gray-300 mb-6">
          Advanced BST problems including validation, fixing, and complex
          algorithms.
        </p>
      </div>

      <ProblemBlock
        title="6. Check for BST"
        difficulty="Medium"
        description="Check if a binary tree is a valid Binary Search Tree."
        solutions={{
          JavaScript: `// Check for BST

// Approach 1: Using inorder traversal
function isBSTInorder(root) {
  const inorder = [];
  
  function inorderTraversal(node) {
    if (node === null) return;
    inorderTraversal(node.left);
    inorder.push(node.data);
    inorderTraversal(node.right);
  }
  
  inorderTraversal(root);
  
  // Check if inorder is sorted
  for (let i = 1; i < inorder.length; i++) {
    if (inorder[i] <= inorder[i - 1]) {
      return false;
    }
  }
  
  return true;
}

// Approach 2: Using min/max bounds
function isBSTBounds(root) {
  return isBSTHelper(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
}

function isBSTHelper(node, min, max) {
  if (node === null) return true;
  
  if (node.data <= min || node.data >= max) {
    return false;
  }
  
  return isBSTHelper(node.left, min, node.data) && 
         isBSTHelper(node.right, node.data, max);
}

// Approach 3: Using previous node in inorder
function isBSTPrevious(root) {
  let prev = null;
  
  function inorderCheck(node) {
    if (node === null) return true;
    
    if (!inorderCheck(node.left)) return false;
    
    if (prev !== null && node.data <= prev.data) {
      return false;
    }
    
    prev = node;
    return inorderCheck(node.right);
  }
  
  return inorderCheck(root);
}

// Alternative approach with detailed explanation
function isBSTDetailed(root) {
  console.log("Checking if binary tree is a valid BST");
  
  function isBSTHelperDetailed(node, min, max, depth) {
    if (node === null) {
      console.log(\`\${'  '.repeat(depth)}Null node, valid BST\`);
      return true;
    }
    
    console.log(\`\${'  '.repeat(depth)}Checking node \${node.data} with bounds [\${min}, \${max}]\`);
    
    if (node.data <= min || node.data >= max) {
      console.log(\`\${'  '.repeat(depth)}Node \${node.data} violates bounds [\${min}, \${max}]\`);
      return false;
    }
    
    console.log(\`\${'  '.repeat(depth)}Node \${node.data} is within bounds, checking subtrees\`);
    
    const leftValid = isBSTHelperDetailed(node.left, min, node.data, depth + 1);
    const rightValid = isBSTHelperDetailed(node.right, node.data, max, depth + 1);
    
    const isValid = leftValid && rightValid;
    console.log(\`\${'  '.repeat(depth)}Node \${node.data}: left valid = \${leftValid}, right valid = \${rightValid}, overall = \${isValid}\`);
    
    return isValid;
  }
  
  return isBSTHelperDetailed(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, 0);
}

// Test cases
function createValidBST() {
  const root = new BSTNode(50);
  root.left = new BSTNode(30);
  root.right = new BSTNode(70);
  root.left.left = new BSTNode(20);
  root.left.right = new BSTNode(40);
  root.right.left = new BSTNode(60);
  root.right.right = new BSTNode(80);
  return root;
}

function createInvalidBST() {
  const root = new BSTNode(50);
  root.left = new BSTNode(30);
  root.right = new BSTNode(70);
  root.left.left = new BSTNode(20);
  root.left.right = new BSTNode(60); // Invalid: 60 > 50
  root.right.left = new BSTNode(40);
  root.right.right = new BSTNode(80);
  return root;
}

const validBST = createValidBST();
const invalidBST = createInvalidBST();

console.log("=== Testing BST Validation ===");
console.log("Valid BST (inorder):", isBSTInorder(validBST)); // true
console.log("Valid BST (bounds):", isBSTBounds(validBST)); // true
console.log("Valid BST (previous):", isBSTPrevious(validBST)); // true

console.log("Invalid BST (inorder):", isBSTInorder(invalidBST)); // false
console.log("Invalid BST (bounds):", isBSTBounds(invalidBST)); // false
console.log("Invalid BST (previous):", isBSTPrevious(invalidBST)); // false

console.log("\\n=== Detailed BST Validation ===");
isBSTDetailed(validBST);`,
          Java: `public class CheckBST {
    // Using min/max bounds
    public static boolean isBSTBounds(BSTNode root) {
        return isBSTHelper(root, Long.MIN_VALUE, Long.MAX_VALUE);
    }
    
    private static boolean isBSTHelper(BSTNode node, long min, long max) {
        if (node == null) return true;
        
        if (node.data <= min || node.data >= max) {
            return false;
        }
        
        return isBSTHelper(node.left, min, node.data) && 
               isBSTHelper(node.right, node.data, max);
    }
    
    // Using previous node in inorder
    static BSTNode prev = null;
    
    public static boolean isBSTPrevious(BSTNode root) {
        prev = null;
        return inorderCheck(root);
    }
    
    private static boolean inorderCheck(BSTNode node) {
        if (node == null) return true;
        
        if (!inorderCheck(node.left)) return false;
        
        if (prev != null && node.data <= prev.data) {
            return false;
        }
        
        prev = node;
        return inorderCheck(node.right);
    }
    
    public static void main(String[] args) {
        BSTNode root = new BSTNode(50);
        root.left = new BSTNode(30);
        root.right = new BSTNode(70);
        root.left.left = new BSTNode(20);
        root.left.right = new BSTNode(40);
        
        System.out.println("Is BST: " + isBSTBounds(root)); // true
        System.out.println("Is BST (prev): " + isBSTPrevious(root)); // true
    }
}`,
        }}
        explanation="BST validation: left < parent < right. Inorder approach: check if sorted. Bounds approach: pass min/max bounds. Previous approach: track previous node in inorder. Time: O(n), Space: O(h)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Verify tree satisfies BST ordering everywhere: all nodes in left subtree < root < all nodes in right subtree.",
              details: [
                "Decide whether duplicates allowed (if so, consistent rule e.g., duplicates go right)",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Either check inorder traversal is strictly increasing or perform DFS carrying allowable value ranges.",
              keywords: ["inorder", "min/max constraints", "validation"],
              details: [
                "Inorder gives sorted order if BST valid",
                "Bounds DFS ensures each node lies within allowable interval",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Recursive helper with parameters (node, min, max) or iterative inorder with stack storing previous value.",
              details: [
                "Use `long` bounds to avoid overflow when node values near extremes",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Traverse entire tree ensuring ordering holds at each node.",
              details: [
                "Bounds method: pass down allowable min/max and return false on violation",
                "Inorder method: track previous visited value, fail if current <= previous",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Short-circuit immediately once violation detected; handle duplicates per requirement.",
              details: [
                "For large trees, iterative inorder avoids recursion depth issues",
                "If tree frequently mutated, consider storing subtree min/max but still verify full tree when requested",
              ],
            },
          ],
          pattern: "BST Validation via Inorder or Range Constraints",
          complexity: {
            time: "O(n)",
            space: "O(h)",
          },
        }}
      />

      <ProblemBlock
        title="7. Fix BST with Two Nodes Swapped"
        difficulty="Hard"
        description="Fix a BST where exactly two nodes have been swapped."
        solutions={{
          JavaScript: `// Fix BST with Two Nodes Swapped

// Approach 1: Using inorder traversal
function fixBSTInorder(root) {
  const inorder = [];
  
  function inorderTraversal(node) {
    if (node === null) return;
    inorderTraversal(node.left);
    inorder.push(node);
    inorderTraversal(node.right);
  }
  
  inorderTraversal(root);
  
  // Find the two swapped nodes
  let first = null, second = null;
  
  for (let i = 0; i < inorder.length - 1; i++) {
    if (inorder[i].data > inorder[i + 1].data) {
      if (first === null) {
        first = inorder[i];
        second = inorder[i + 1];
      } else {
        second = inorder[i + 1];
        break;
      }
    }
  }
  
  // Swap the values
  if (first && second) {
    const temp = first.data;
    first.data = second.data;
    second.data = temp;
  }
  
  return root;
}

// Approach 2: Using three pointers
function fixBSTPointers(root) {
  let first = null, second = null, prev = null;
  
  function inorderTraversal(node) {
    if (node === null) return;
    
    inorderTraversal(node.left);
    
    if (prev !== null && prev.data > node.data) {
      if (first === null) {
        first = prev;
        second = node;
      } else {
        second = node;
      }
    }
    
    prev = node;
    inorderTraversal(node.right);
  }
  
  inorderTraversal(root);
  
  // Swap the values
  if (first && second) {
    const temp = first.data;
    first.data = second.data;
    second.data = temp;
  }
  
  return root;
}

// Alternative approach with detailed explanation
function fixBSTDetailed(root) {
  console.log("Fixing BST with two swapped nodes");
  
  let first = null, second = null, prev = null;
  
  function inorderDetailed(node, depth) {
    if (node === null) {
      console.log(\`\${'  '.repeat(depth)}Null node\`);
      return;
    }
    
    console.log(\`\${'  '.repeat(depth)}Processing node \${node.data}\`);
    
    console.log(\`\${'  '.repeat(depth)}Going left\`);
    inorderDetailed(node.left, depth + 1);
    
    if (prev !== null) {
      console.log(\`\${'  '.repeat(depth)}Comparing \${prev.data} with \${node.data}\`);
      
      if (prev.data > node.data) {
        console.log(\`\${'  '.repeat(depth)}Violation found: \${prev.data} > \${node.data}\`);
        
        if (first === null) {
          first = prev;
          second = node;
          console.log(\`\${'  '.repeat(depth)}First violation: \${first.data} and \${second.data}\`);
        } else {
          second = node;
          console.log(\`\${'  '.repeat(depth)}Second violation: updating second to \${second.data}\`);
        }
      }
    }
    
    prev = node;
    console.log(\`\${'  '.repeat(depth)}Updated prev to \${prev.data}\`);
    
    console.log(\`\${'  '.repeat(depth)}Going right\`);
    inorderDetailed(node.right, depth + 1);
  }
  
  inorderDetailed(root, 0);
  
  if (first && second) {
    console.log(\`\\nSwapping \${first.data} and \${second.data}\`);
    const temp = first.data;
    first.data = second.data;
    second.data = temp;
    console.log(\`After swap: \${first.data} and \${second.data}\`);
  } else {
    console.log("No violations found, BST is already valid");
  }
  
  return root;
}

// Test cases
function createSwappedBST() {
  const root = new BSTNode(50);
  root.left = new BSTNode(30);
  root.right = new BSTNode(70);
  root.left.left = new BSTNode(20);
  root.left.right = new BSTNode(40);
  root.right.left = new BSTNode(60);
  root.right.right = new BSTNode(80);
  
  // Swap two nodes
  root.left.data = 40;  // Should be 30
  root.left.right.data = 30;  // Should be 40
  
  return root;
}

const swappedBST = createSwappedBST();

console.log("=== Testing BST Fix ===");
console.log("Original BST inorder:", inorderTraversal(swappedBST));

const fixedBST = fixBSTInorder(swappedBST);
console.log("Fixed BST inorder:", inorderTraversal(fixedBST));

console.log("\\n=== Detailed BST Fix Process ===");
fixBSTDetailed(createSwappedBST());`,
          Java: `public class FixBST {
    // Using three pointers
    public static void fixBSTPointers(BSTNode root) {
        BSTNode[] first = {null};
        BSTNode[] second = {null};
        BSTNode[] prev = {null};
        
        inorderTraversal(root, first, second, prev);
        
        // Swap values
        if (first[0] != null && second[0] != null) {
            int temp = first[0].data;
            first[0].data = second[0].data;
            second[0].data = temp;
        }
    }
    
    private static void inorderTraversal(BSTNode node, BSTNode[] first, 
                                        BSTNode[] second, BSTNode[] prev) {
        if (node == null) return;
        
        inorderTraversal(node.left, first, second, prev);
        
        if (prev[0] != null && prev[0].data > node.data) {
            if (first[0] == null) {
                first[0] = prev[0];
                second[0] = node;
            } else {
                second[0] = node;
            }
        }
        
        prev[0] = node;
        inorderTraversal(node.right, first, second, prev);
    }
    
    public static void main(String[] args) {
        BSTNode root = new BSTNode(50);
        root.left = new BSTNode(30);
        root.right = new BSTNode(70);
        root.left.left = new BSTNode(20);
        root.left.right = new BSTNode(60); // Swapped with 40
        
        fixBSTPointers(root);
        System.out.println("BST fixed successfully");
    }
}`,
        }}
        explanation="Fix BST by finding two swapped nodes in inorder traversal. First violation: previous > current. Second violation: update second node. Swap values of found nodes. Time: O(n), Space: O(h)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Exactly two nodes in BST swapped; recover original BST without changing structure.",
              details: [
                "Swapped nodes may be adjacent or far apart in inorder sequence",
                "Goal: swap values back with O(1) extra space if possible",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Inorder traversal of BST should be sorted; swapped nodes create inversions.",
              keywords: ["inorder", "inversion detection", "Morris traversal"],
              details: [
                "First inversion identifies first misplaced node",
                "Second inversion identifies second misplaced node",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Use inorder traversal with pointers `first`, `middle`, `last`, and `prev`.",
              details: [
                "Recursive or Morris inorder both work (Morris gives O(1) extra space)",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Traverse inorder, detect inversions, then swap offending node values.",
              details: [
                "If only one inversion → swapped nodes adjacent (first & middle)",
                "If two inversions → swapped nodes separated (first & last)",
                "After traversal, swap identified values",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Morris traversal avoids recursion; ensure `prev` initialized to -∞ or null.",
              details: [
                "Reset helper pointers before reuse",
                "Do not change tree shape—swap data only",
              ],
            },
          ],
          pattern: "Inorder Inversion Detection to Fix Swapped Nodes",
          complexity: {
            time: "O(n)",
            space: "O(h) recursion / O(1) Morris",
          },
        }}
      />

      <ProblemBlock
        title="8. Ceiling on left side in an array"
        difficulty="Medium"
        description="Find ceiling of each element on the left side of the array using BST."
        solutions={{
          JavaScript: `// Ceiling on left side in an array

// Approach 1: Using BST
function ceilingOnLeftSide(arr) {
  const result = new Array(arr.length);
  result[0] = -1; // No element to the left of first element
  
  const bst = new BinarySearchTree();
  bst.insert(arr[0]);
  
  for (let i = 1; i < arr.length; i++) {
    const ceil = bst.ceil(arr[i]);
    result[i] = ceil !== null ? ceil : -1;
    bst.insert(arr[i]);
  }
  
  return result;
}

// Approach 2: Using TreeSet (simulated with sorted array)
function ceilingOnLeftSideArray(arr) {
  const result = new Array(arr.length);
  result[0] = -1;
  
  const sorted = [arr[0]];
  
  for (let i = 1; i < arr.length; i++) {
    const ceil = findCeilInSorted(sorted, arr[i]);
    result[i] = ceil;
    
    // Insert current element in sorted order
    insertInSorted(sorted, arr[i]);
  }
  
  return result;
}

function findCeilInSorted(sorted, key) {
  let left = 0, right = sorted.length - 1;
  let ceil = -1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (sorted[mid] >= key) {
      ceil = sorted[mid];
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  
  return ceil;
}

function insertInSorted(sorted, value) {
  let left = 0, right = sorted.length - 1;
  let insertPos = sorted.length;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (sorted[mid] >= value) {
      insertPos = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  
  sorted.splice(insertPos, 0, value);
}

// Approach 3: Using stack (efficient)
function ceilingOnLeftSideStack(arr) {
  const result = new Array(arr.length);
  const stack = [];
  
  for (let i = 0; i < arr.length; i++) {
    // Remove elements smaller than current
    while (stack.length > 0 && stack[stack.length - 1] < arr[i]) {
      stack.pop();
    }
    
    // If stack is empty, no ceiling
    if (stack.length === 0) {
      result[i] = -1;
    } else {
      result[i] = stack[stack.length - 1];
    }
    
    // Add current element to stack
    stack.push(arr[i]);
  }
  
  return result;
}

// Test cases
const arr1 = [2, 8, 30, 15, 25, 12];
const arr2 = [30, 20, 10];
const arr3 = [10, 20, 30, 40];

console.log("=== Testing Ceiling on Left Side ===");
console.log("Array:", arr1);
console.log("BST approach:", ceilingOnLeftSide(arr1));
console.log("Array approach:", ceilingOnLeftSideArray(arr1));
console.log("Stack approach:", ceilingOnLeftSideStack(arr1));

console.log("\\nArray:", arr2);
console.log("Stack approach:", ceilingOnLeftSideStack(arr2));

console.log("\\nArray:", arr3);
console.log("Stack approach:", ceilingOnLeftSideStack(arr3));`,
          Java: `import java.util.*;

public class CeilingOnLeftSide {
    // Using TreeSet (BST-based)
    public static List<Integer> ceilingOnLeftSide(int[] arr) {
        List<Integer> result = new ArrayList<>();
        result.add(-1); // First element has no ceiling
        
        TreeSet<Integer> set = new TreeSet<>();
        set.add(arr[0]);
        
        for (int i = 1; i < arr.length; i++) {
            Integer ceil = set.ceiling(arr[i]);
            result.add(ceil != null ? ceil : -1);
            set.add(arr[i]);
        }
        
        return result;
    }
    
    // Using stack approach
    public static List<Integer> ceilingOnLeftSideStack(int[] arr) {
        List<Integer> result = new ArrayList<>();
        Stack<Integer> stack = new Stack<>();
        
        for (int i = 0; i < arr.length; i++) {
            // Remove elements smaller than current
            while (!stack.isEmpty() && stack.peek() < arr[i]) {
                stack.pop();
            }
            
            // If stack is empty, no ceiling
            if (stack.isEmpty()) {
                result.add(-1);
            } else {
                result.add(stack.peek());
            }
            
            // Add current element to stack
            stack.push(arr[i]);
        }
        
        return result;
    }
    
    public static void main(String[] args) {
        int[] arr = {2, 8, 30, 15, 25, 12};
        System.out.println("Result: " + ceilingOnLeftSide(arr)); // [-1, -1, -1, 30, 30, 25]
    }
}`,
        }}
        explanation="Find ceiling of each element on left side. BST approach: insert elements and find ceil. Stack approach: maintain decreasing stack. Time: O(n log n) for BST, O(n) for stack, Space: O(n)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "For each index i, report smallest element among arr[0..i-1] that is ≥ arr[i]; return -1 if none.",
              details: [
                "Need streaming processing from left to right",
                "Numbers can repeat; treat equality as valid ceil",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "We need ordered access to previously seen items—balanced BST or TreeSet supports predecessor/ceil queries.",
              keywords: ["ordered set", "TreeSet", "ceil query", "sweep"],
              details: [
                "Alternative stack trick works for positive numbers but BST is general",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Use self-balancing BST (TreeSet, std::set) or binary indexed tree if values bounded.",
              details: [
                "Data structure stores prior elements; supports `lower_bound`/`ceil` lookup",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Iterate through array, querying DS before inserting current value.",
              details: [
                "For each value x: query ceil = smallest ≥ x in DS; store result (or -1)",
                "Insert x into DS for future queries",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "If library TreeSet unavailable, build your own BST or use ordered map.",
              details: [
                "Overall complexity O(n log n) due to log n per insert/query",
                "For limited value range, coordinate compression + Fenwick gives O(log M)",
              ],
            },
          ],
          pattern: "Streaming Ceil Queries with Balanced BST",
          complexity: {
            time: "O(n log n)",
            space: "O(n)",
          },
        }}
      />

      <ProblemBlock
        title="9. Vertical Sum in a Binary Tree"
        difficulty="Medium"
        description="Find the vertical sum of nodes at each vertical line in a binary tree."
        solutions={{
          JavaScript: `// Vertical Sum in a Binary Tree

// Approach 1: Using hash map
function verticalSum(root) {
  const map = new Map();
  
  function verticalSumHelper(node, hd) {
    if (node === null) return;
    
    // Add current node's value to the horizontal distance
    map.set(hd, (map.get(hd) || 0) + node.data);
    
    // Process left subtree
    verticalSumHelper(node.left, hd - 1);
    
    // Process right subtree
    verticalSumHelper(node.right, hd + 1);
  }
  
  verticalSumHelper(root, 0);
  
  // Convert map to array and sort by horizontal distance
  const result = Array.from(map.entries())
    .sort((a, b) => a[0] - b[0])
    .map(entry => entry[1]);
  
  return result;
}

// Approach 2: Using level order traversal
function verticalSumLevelOrder(root) {
  if (root === null) return [];
  
  const map = new Map();
  const queue = [{ node: root, hd: 0 }];
  
  while (queue.length > 0) {
    const { node, hd } = queue.shift();
    
    // Add current node's value to the horizontal distance
    map.set(hd, (map.get(hd) || 0) + node.data);
    
    // Add children to queue
    if (node.left !== null) {
      queue.push({ node: node.left, hd: hd - 1 });
    }
    if (node.right !== null) {
      queue.push({ node: node.right, hd: hd + 1 });
    }
  }
  
  // Convert map to array and sort by horizontal distance
  const result = Array.from(map.entries())
    .sort((a, b) => a[0] - b[0])
    .map(entry => entry[1]);
  
  return result;
}

// Alternative approach with detailed explanation
function verticalSumDetailed(root) {
  console.log("Finding vertical sum of binary tree");
  
  const map = new Map();
  
  function verticalSumHelper(node, hd, depth) {
    if (node === null) {
      console.log(\`\${'  '.repeat(depth)}Null node at hd \${hd}\`);
      return;
    }
    
    console.log(\`\${'  '.repeat(depth)}Processing node \${node.data} at hd \${hd}\`);
    
    const currentSum = map.get(hd) || 0;
    const newSum = currentSum + node.data;
    map.set(hd, newSum);
    console.log(\`\${'  '.repeat(depth)}Updated sum for hd \${hd}: \${currentSum} + \${node.data} = \${newSum}\`);
    
    console.log(\`\${'  '.repeat(depth)}Going left (hd = \${hd - 1})\`);
    verticalSumHelper(node.left, hd - 1, depth + 1);
    
    console.log(\`\${'  '.repeat(depth)}Going right (hd = \${hd + 1})\`);
    verticalSumHelper(node.right, hd + 1, depth + 1);
  }
  
  verticalSumHelper(root, 0, 0);
  
  console.log("\\nFinal map:", map);
  
  const result = Array.from(map.entries())
    .sort((a, b) => a[0] - b[0])
    .map(entry => entry[1]);
  
  console.log("Vertical sums:", result);
  return result;
}

// Test cases
function createTestTree() {
  const root = new BSTNode(1);
  root.left = new BSTNode(2);
  root.right = new BSTNode(3);
  root.left.left = new BSTNode(4);
  root.left.right = new BSTNode(5);
  root.right.left = new BSTNode(6);
  root.right.right = new BSTNode(7);
  return root;
}

const tree = createTestTree();

console.log("=== Testing Vertical Sum ===");
console.log("Recursive approach:", verticalSum(tree));
console.log("Level order approach:", verticalSumLevelOrder(tree));

console.log("\\n=== Detailed Vertical Sum Calculation ===");
verticalSumDetailed(tree);`,
          Java: `import java.util.*;

public class VerticalSum {
    // Using hash map
    public static List<Integer> verticalSum(BSTNode root) {
        Map<Integer, Integer> map = new HashMap<>();
        verticalSumHelper(root, 0, map);
        
        // Sort by horizontal distance
        List<Integer> result = new ArrayList<>();
        List<Integer> sortedKeys = new ArrayList<>(map.keySet());
        Collections.sort(sortedKeys);
        
        for (int key : sortedKeys) {
            result.add(map.get(key));
        }
        
        return result;
    }
    
    private static void verticalSumHelper(BSTNode node, int hd, Map<Integer, Integer> map) {
        if (node == null) return;
        
        map.put(hd, map.getOrDefault(hd, 0) + node.data);
        
        verticalSumHelper(node.left, hd - 1, map);
        verticalSumHelper(node.right, hd + 1, map);
    }
    
    public static void main(String[] args) {
        BSTNode root = new BSTNode(1);
        root.left = new BSTNode(2);
        root.right = new BSTNode(3);
        root.left.left = new BSTNode(4);
        root.left.right = new BSTNode(5);
        
        System.out.println("Vertical sum: " + verticalSum(root)); // [4, 2, 9, 3]
    }
}`,
        }}
        explanation="Vertical sum: sum of nodes at same horizontal distance. Use hash map to store sums by horizontal distance. Process left subtree with hd-1, right with hd+1. Time: O(n), Space: O(n)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Compute sum of nodes column-by-column when tree viewed top-down (same horizontal distance).",
              details: [
                "Need to report sums ordered by horizontal distance from left to right",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Use DFS/BFS with horizontal distance (hd) offset: left child hd-1, right child hd+1.",
              keywords: [
                "horizontal distance",
                "map aggregation",
                "tree traversal",
              ],
              details: ["Accumulate sums in hash map keyed by hd"],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "HashMap/TreeMap from hd → sum; BFS queue or DFS recursion for traversal.",
              details: [
                "TreeMap automatically sorts by hd; hash map + min/max hd works too",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description: "Traverse entire tree updating sums.",
              details: [
                "Initialize map, push root with hd=0",
                "For each node: map[hd] += node.val; enqueue children with hd±1",
                "After traversal, iterate hd from min to max to produce ordered sums",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Use BFS if you need natural ordering later; DFS yields same sums but requires sorting keys at end.",
              details: [
                "Store minHd/maxHd to avoid sorting when using array output",
                "Time/space O(n) because each node visited once",
              ],
            },
          ],
          pattern: "Tree Traversal with Horizontal Distance Aggregation",
          complexity: {
            time: "O(n)",
            space: "O(n)",
          },
        }}
      />

      <ProblemBlock
        title="10. Vertical Traversal of Binary Tree"
        difficulty="Hard"
        description="Print nodes in vertical order (top to bottom, left to right)."
        solutions={{
          JavaScript: `// Vertical Traversal of Binary Tree

// Approach 1: Using hash map with sorting
function verticalTraversal(root) {
  const map = new Map();
  
  function verticalTraversalHelper(node, hd, vd) {
    if (node === null) return;
    
    if (!map.has(hd)) {
      map.set(hd, []);
    }
    
    map.get(hd).push({ data: node.data, vd });
    
    verticalTraversalHelper(node.left, hd - 1, vd + 1);
    verticalTraversalHelper(node.right, hd + 1, vd + 1);
  }
  
  verticalTraversalHelper(root, 0, 0);
  
  // Sort by horizontal distance, then by vertical distance
  const result = [];
  const sortedHD = Array.from(map.keys()).sort((a, b) => a - b);
  
  for (const hd of sortedHD) {
    const nodes = map.get(hd);
    nodes.sort((a, b) => a.vd - b.vd);
    result.push(nodes.map(node => node.data));
  }
  
  return result;
}

// Approach 2: Using level order traversal
function verticalTraversalLevelOrder(root) {
  if (root === null) return [];
  
  const map = new Map();
  const queue = [{ node: root, hd: 0, vd: 0 }];
  
  while (queue.length > 0) {
    const { node, hd, vd } = queue.shift();
    
    if (!map.has(hd)) {
      map.set(hd, []);
    }
    
    map.get(hd).push({ data: node.data, vd });
    
    if (node.left !== null) {
      queue.push({ node: node.left, hd: hd - 1, vd: vd + 1 });
    }
    if (node.right !== null) {
      queue.push({ node: node.right, hd: hd + 1, vd: vd + 1 });
    }
  }
  
  // Sort by horizontal distance, then by vertical distance
  const result = [];
  const sortedHD = Array.from(map.keys()).sort((a, b) => a - b);
  
  for (const hd of sortedHD) {
    const nodes = map.get(hd);
    nodes.sort((a, b) => a.vd - b.vd);
    result.push(nodes.map(node => node.data));
  }
  
  return result;
}

// Alternative approach with detailed explanation
function verticalTraversalDetailed(root) {
  console.log("Vertical traversal of binary tree");
  
  const map = new Map();
  
  function verticalTraversalHelper(node, hd, vd, depth) {
    if (node === null) {
      console.log(\`\${'  '.repeat(depth)}Null node at hd \${hd}, vd \${vd}\`);
      return;
    }
    
    console.log(\`\${'  '.repeat(depth)}Processing node \${node.data} at hd \${hd}, vd \${vd}\`);
    
    if (!map.has(hd)) {
      map.set(hd, []);
    }
    
    map.get(hd).push({ data: node.data, vd });
    console.log(\`\${'  '.repeat(depth)}Added to map: hd \${hd} -> [\${map.get(hd).map(n => n.data).join(', ')}]\`);
    
    console.log(\`\${'  '.repeat(depth)}Going left (hd = \${hd - 1}, vd = \${vd + 1})\`);
    verticalTraversalHelper(node.left, hd - 1, vd + 1, depth + 1);
    
    console.log(\`\${'  '.repeat(depth)}Going right (hd = \${hd + 1}, vd = \${vd + 1})\`);
    verticalTraversalHelper(node.right, hd + 1, vd + 1, depth + 1);
  }
  
  verticalTraversalHelper(root, 0, 0, 0);
  
  console.log("\\nFinal map:", map);
  
  const result = [];
  const sortedHD = Array.from(map.keys()).sort((a, b) => a - b);
  
  for (const hd of sortedHD) {
    const nodes = map.get(hd);
    nodes.sort((a, b) => a.vd - b.vd);
    result.push(nodes.map(node => node.data));
  }
  
  console.log("Vertical traversal result:", result);
  return result;
}

// Test cases
function createTestTree() {
  const root = new BSTNode(1);
  root.left = new BSTNode(2);
  root.right = new BSTNode(3);
  root.left.left = new BSTNode(4);
  root.left.right = new BSTNode(5);
  root.right.left = new BSTNode(6);
  root.right.right = new BSTNode(7);
  return root;
}

const tree = createTestTree();

console.log("=== Testing Vertical Traversal ===");
console.log("Recursive approach:", verticalTraversal(tree));
console.log("Level order approach:", verticalTraversalLevelOrder(tree));

console.log("\\n=== Detailed Vertical Traversal ===");
verticalTraversalDetailed(tree);`,
          Java: `import java.util.*;

class NodeInfo {
    int data;
    int vd;
    
    NodeInfo(int data, int vd) {
        this.data = data;
        this.vd = vd;
    }
}

public class VerticalTraversal {
    public static List<List<Integer>> verticalTraversal(BSTNode root) {
        Map<Integer, List<NodeInfo>> map = new HashMap<>();
        verticalTraversalHelper(root, 0, 0, map);
        
        // Sort by horizontal distance, then by vertical distance
        List<List<Integer>> result = new ArrayList<>();
        List<Integer> sortedKeys = new ArrayList<>(map.keySet());
        Collections.sort(sortedKeys);
        
        for (int hd : sortedKeys) {
            List<NodeInfo> nodes = map.get(hd);
            nodes.sort((a, b) -> Integer.compare(a.vd, b.vd));
            List<Integer> level = new ArrayList<>();
            for (NodeInfo node : nodes) {
                level.add(node.data);
            }
            result.add(level);
        }
        
        return result;
    }
    
    private static void verticalTraversalHelper(BSTNode node, int hd, int vd, 
                                                 Map<Integer, List<NodeInfo>> map) {
        if (node == null) return;
        
        map.computeIfAbsent(hd, k -> new ArrayList<>()).add(new NodeInfo(node.data, vd));
        
        verticalTraversalHelper(node.left, hd - 1, vd + 1, map);
        verticalTraversalHelper(node.right, hd + 1, vd + 1, map);
    }
    
    public static void main(String[] args) {
        BSTNode root = new BSTNode(1);
        root.left = new BSTNode(2);
        root.right = new BSTNode(3);
        root.left.left = new BSTNode(4);
        root.left.right = new BSTNode(5);
        
        System.out.println("Vertical traversal: " + verticalTraversal(root));
    }
}`,
        }}
        explanation="Vertical traversal: nodes at same horizontal distance, sorted by vertical distance. Use hash map with hd and vd. Sort by hd first, then by vd. Time: O(n log n), Space: O(n)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Return nodes column-wise; for same column/horizontal distance, order by depth (top to bottom) and often by value.",
              details: [
                "Confirm ordering for nodes sharing hd and depth (LeetCode 987 sorts by value)",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Need 2-D coordinates: horizontal distance (hd) and level/depth (vd).",
              keywords: [
                "BFS with coordinates",
                "priority ordering",
                "vertical traversal",
              ],
              details: [
                "Traverse tree capturing (hd, depth, value) triples",
                "Sort primarily by hd, secondarily by depth, optionally by value",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Use BFS queue storing node with hd & depth, plus a map hd → list of (depth,value).",
              details: ["After traversal, sort inner lists by depth/value"],
            },
            {
              title: "Step 4: Select Algorithm",
              description: "Perform BFS starting at hd=0, depth=0.",
              details: [
                "Enqueue root (0,0); for each node record tuple; push left with hd-1 depth+1, right with hd+1 depth+1",
                "After BFS, iterate hd keys in ascending order and sort lists by depth/value before output",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "TreeMap keeps hd sorted; min/max hd counters also work.",
              details: [
                "Sorting each hd bucket costs O(k log k); overall O(n log n)",
                "For streaming output, use priority queue to maintain ordering per hd",
              ],
            },
          ],
          pattern: "BFS with (Horizontal Distance, Depth) Sorting",
          complexity: {
            time: "O(n log n)",
            space: "O(n)",
          },
        }}
      />

      <ProblemBlock
        title="11. Top View of Binary Tree"
        difficulty="Medium"
        description="Print the top view of a binary tree (first node at each horizontal distance)."
        solutions={{
          JavaScript: `// Top View of Binary Tree

// Approach 1: Using hash map
function topView(root) {
  const map = new Map();
  
  function topViewHelper(node, hd, vd) {
    if (node === null) return;
    
    if (!map.has(hd) || map.get(hd).vd > vd) {
      map.set(hd, { data: node.data, vd });
    }
    
    topViewHelper(node.left, hd - 1, vd + 1);
    topViewHelper(node.right, hd + 1, vd + 1);
  }
  
  topViewHelper(root, 0, 0);
  
  // Sort by horizontal distance
  const result = Array.from(map.entries())
    .sort((a, b) => a[0] - b[0])
    .map(entry => entry[1].data);
  
  return result;
}

// Approach 2: Using level order traversal
function topViewLevelOrder(root) {
  if (root === null) return [];
  
  const map = new Map();
  const queue = [{ node: root, hd: 0, vd: 0 }];
  
  while (queue.length > 0) {
    const { node, hd, vd } = queue.shift();
    
    if (!map.has(hd)) {
      map.set(hd, { data: node.data, vd });
    }
    
    if (node.left !== null) {
      queue.push({ node: node.left, hd: hd - 1, vd: vd + 1 });
    }
    if (node.right !== null) {
      queue.push({ node: node.right, hd: hd + 1, vd: vd + 1 });
    }
  }
  
  // Sort by horizontal distance
  const result = Array.from(map.entries())
    .sort((a, b) => a[0] - b[0])
    .map(entry => entry[1].data);
  
  return result;
}

// Alternative approach with detailed explanation
function topViewDetailed(root) {
  console.log("Top view of binary tree");
  
  const map = new Map();
  
  function topViewHelper(node, hd, vd, depth) {
    if (node === null) {
      console.log(\`\${'  '.repeat(depth)}Null node at hd \${hd}, vd \${vd}\`);
      return;
    }
    
    console.log(\`\${'  '.repeat(depth)}Processing node \${node.data} at hd \${hd}, vd \${vd}\`);
    
    if (!map.has(hd)) {
      map.set(hd, { data: node.data, vd });
      console.log(\`\${'  '.repeat(depth)}First node at hd \${hd}: \${node.data}\`);
    } else {
      const existing = map.get(hd);
      if (existing.vd > vd) {
        map.set(hd, { data: node.data, vd });
        console.log(\`\${'  '.repeat(depth)}Updated node at hd \${hd}: \${existing.data} -> \${node.data}\`);
      } else {
        console.log(\`\${'  '.repeat(depth)}Node \${node.data} at vd \${vd} is deeper than existing \${existing.data} at vd \${existing.vd}\`);
      }
    }
    
    console.log(\`\${'  '.repeat(depth)}Going left (hd = \${hd - 1}, vd = \${vd + 1})\`);
    topViewHelper(node.left, hd - 1, vd + 1, depth + 1);
    
    console.log(\`\${'  '.repeat(depth)}Going right (hd = \${hd + 1}, vd = \${vd + 1})\`);
    topViewHelper(node.right, hd + 1, vd + 1, depth + 1);
  }
  
  topViewHelper(root, 0, 0, 0);
  
  console.log("\\nFinal map:", map);
  
  const result = Array.from(map.entries())
    .sort((a, b) => a[0] - b[0])
    .map(entry => entry[1].data);
  
  console.log("Top view result:", result);
  return result;
}

// Test cases
function createTestTree() {
  const root = new BSTNode(1);
  root.left = new BSTNode(2);
  root.right = new BSTNode(3);
  root.left.left = new BSTNode(4);
  root.left.right = new BSTNode(5);
  root.right.left = new BSTNode(6);
  root.right.right = new BSTNode(7);
  return root;
}

const tree = createTestTree();

console.log("=== Testing Top View ===");
console.log("Recursive approach:", topView(tree));
console.log("Level order approach:", topViewLevelOrder(tree));

console.log("\\n=== Detailed Top View ===");
topViewDetailed(tree);`,
          Java: `import java.util.*;

class NodeVD {
    int data;
    int vd;
    
    NodeVD(int data, int vd) {
        this.data = data;
        this.vd = vd;
    }
}

public class TopView {
    public static List<Integer> topView(BSTNode root) {
        Map<Integer, NodeVD> map = new HashMap<>();
        topViewHelper(root, 0, 0, map);
        
        // Sort by horizontal distance
        List<Integer> result = new ArrayList<>();
        List<Integer> sortedKeys = new ArrayList<>(map.keySet());
        Collections.sort(sortedKeys);
        
        for (int hd : sortedKeys) {
            result.add(map.get(hd).data);
        }
        
        return result;
    }
    
    private static void topViewHelper(BSTNode node, int hd, int vd, Map<Integer, NodeVD> map) {
        if (node == null) return;
        
        if (!map.containsKey(hd) || map.get(hd).vd > vd) {
            map.put(hd, new NodeVD(node.data, vd));
        }
        
        topViewHelper(node.left, hd - 1, vd + 1, map);
        topViewHelper(node.right, hd + 1, vd + 1, map);
    }
    
    public static void main(String[] args) {
        BSTNode root = new BSTNode(1);
        root.left = new BSTNode(2);
        root.right = new BSTNode(3);
        root.left.left = new BSTNode(4);
        root.left.right = new BSTNode(5);
        
        System.out.println("Top view: " + topView(root)); // [4, 2, 1, 3]
    }
}`,
        }}
        explanation="Top view: first node at each horizontal distance. Use hash map to store node with minimum vertical distance for each horizontal distance. Time: O(n), Space: O(n)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Top view = nodes visible when looking from above: first node encountered for each horizontal distance scanning from top.",
              details: [
                "Need to output columns sorted by hd",
                "If two nodes share hd & depth, whichever encountered first (BFS) wins",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Use BFS to traverse level by level while tracking hd; first visit per hd is top view.",
              keywords: ["BFS", "horizontal distance", "top view"],
              details: [
                "Left child hd-1, right child hd+1",
                "Use hash map hd → node value (only set once)",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Queue holding (node, hd). Map/TreeMap tracks earliest node per hd.",
              details: [
                "TreeMap automatically sorts by hd; else record min/max hd to order output",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Perform BFS storing hd, capturing first occurrence per hd.",
              details: [
                "Enqueue root (hd=0)",
                "Pop nodes; if hd not yet recorded, store node val",
                "Push children with updated hd",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "BFS ensures we see higher levels before deeper nodes; no need to track depth explicitly.",
              details: [
                "After traversal, iterate hd from min to max to output view",
              ],
            },
          ],
          pattern: "BFS Top View via First-Encounter Map",
          complexity: {
            time: "O(n)",
            space: "O(n)",
          },
        }}
      />

      <ProblemBlock
        title="12. Bottom View of Binary Tree"
        difficulty="Medium"
        description="Print the bottom view of a binary tree (last node at each horizontal distance)."
        solutions={{
          JavaScript: `// Bottom View of Binary Tree

// Approach 1: Using hash map
function bottomView(root) {
  const map = new Map();
  
  function bottomViewHelper(node, hd, vd) {
    if (node === null) return;
    
    if (!map.has(hd) || map.get(hd).vd <= vd) {
      map.set(hd, { data: node.data, vd });
    }
    
    bottomViewHelper(node.left, hd - 1, vd + 1);
    bottomViewHelper(node.right, hd + 1, vd + 1);
  }
  
  bottomViewHelper(root, 0, 0);
  
  // Sort by horizontal distance
  const result = Array.from(map.entries())
    .sort((a, b) => a[0] - b[0])
    .map(entry => entry[1].data);
  
  return result;
}

// Approach 2: Using level order traversal
function bottomViewLevelOrder(root) {
  if (root === null) return [];
  
  const map = new Map();
  const queue = [{ node: root, hd: 0, vd: 0 }];
  
  while (queue.length > 0) {
    const { node, hd, vd } = queue.shift();
    
    // Always update for bottom view (last node wins)
    map.set(hd, { data: node.data, vd });
    
    if (node.left !== null) {
      queue.push({ node: node.left, hd: hd - 1, vd: vd + 1 });
    }
    if (node.right !== null) {
      queue.push({ node: node.right, hd: hd + 1, vd: vd + 1 });
    }
  }
  
  // Sort by horizontal distance
  const result = Array.from(map.entries())
    .sort((a, b) => a[0] - b[0])
    .map(entry => entry[1].data);
  
  return result;
}

// Alternative approach with detailed explanation
function bottomViewDetailed(root) {
  console.log("Bottom view of binary tree");
  
  const map = new Map();
  
  function bottomViewHelper(node, hd, vd, depth) {
    if (node === null) {
      console.log(\`\${'  '.repeat(depth)}Null node at hd \${hd}, vd \${vd}\`);
      return;
    }
    
    console.log(\`\${'  '.repeat(depth)}Processing node \${node.data} at hd \${hd}, vd \${vd}\`);
    
    if (!map.has(hd)) {
      map.set(hd, { data: node.data, vd });
      console.log(\`\${'  '.repeat(depth)}First node at hd \${hd}: \${node.data}\`);
    } else {
      const existing = map.get(hd);
      if (existing.vd <= vd) {
        map.set(hd, { data: node.data, vd });
        console.log(\`\${'  '.repeat(depth)}Updated node at hd \${hd}: \${existing.data} -> \${node.data}\`);
      } else {
        console.log(\`\${'  '.repeat(depth)}Node \${node.data} at vd \${vd} is higher than existing \${existing.data} at vd \${existing.vd}\`);
      }
    }
    
    console.log(\`\${'  '.repeat(depth)}Going left (hd = \${hd - 1}, vd = \${vd + 1})\`);
    bottomViewHelper(node.left, hd - 1, vd + 1, depth + 1);
    
    console.log(\`\${'  '.repeat(depth)}Going right (hd = \${hd + 1}, vd = \${vd + 1})\`);
    bottomViewHelper(node.right, hd + 1, vd + 1, depth + 1);
  }
  
  bottomViewHelper(root, 0, 0, 0);
  
  console.log("\\nFinal map:", map);
  
  const result = Array.from(map.entries())
    .sort((a, b) => a[0] - b[0])
    .map(entry => entry[1].data);
  
  console.log("Bottom view result:", result);
  return result;
}

// Test cases
function createTestTree() {
  const root = new BSTNode(1);
  root.left = new BSTNode(2);
  root.right = new BSTNode(3);
  root.left.left = new BSTNode(4);
  root.left.right = new BSTNode(5);
  root.right.left = new BSTNode(6);
  root.right.right = new BSTNode(7);
  return root;
}

const tree = createTestTree();

console.log("=== Testing Bottom View ===");
console.log("Recursive approach:", bottomView(tree));
console.log("Level order approach:", bottomViewLevelOrder(tree));

console.log("\\n=== Detailed Bottom View ===");
bottomViewDetailed(tree);`,
          Java: `import java.util.*;

public class BottomView {
    public static List<Integer> bottomView(BSTNode root) {
        Map<Integer, NodeVD> map = new HashMap<>();
        bottomViewHelper(root, 0, 0, map);
        
        // Sort by horizontal distance
        List<Integer> result = new ArrayList<>();
        List<Integer> sortedKeys = new ArrayList<>(map.keySet());
        Collections.sort(sortedKeys);
        
        for (int hd : sortedKeys) {
            result.add(map.get(hd).data);
        }
        
        return result;
    }
    
    private static void bottomViewHelper(BSTNode node, int hd, int vd, Map<Integer, NodeVD> map) {
        if (node == null) return;
        
        // Always update for bottom view (last node wins)
        if (!map.containsKey(hd) || map.get(hd).vd <= vd) {
            map.put(hd, new NodeVD(node.data, vd));
        }
        
        bottomViewHelper(node.left, hd - 1, vd + 1, map);
        bottomViewHelper(node.right, hd + 1, vd + 1, map);
    }
    
    public static void main(String[] args) {
        BSTNode root = new BSTNode(1);
        root.left = new BSTNode(2);
        root.right = new BSTNode(3);
        root.left.left = new BSTNode(4);
        root.left.right = new BSTNode(5);
        
        System.out.println("Bottom view: " + bottomView(root)); // [4, 2, 5, 3]
    }
}`,
        }}
        explanation="Bottom view: last node at each horizontal distance. Use hash map to store node with maximum vertical distance for each horizontal distance. Time: O(n), Space: O(n)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Bottom view shows nodes visible from bottom: deepest node for each horizontal distance.",
              details: [
                "Need BFS or DFS capturing depth; deeper nodes override shallower ones at same hd",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Traverse tree while tracking hd and depth; store latest/deepest value seen for each hd.",
              keywords: ["BFS", "horizontal distance", "bottom view"],
              details: [
                "BFS naturally processes shallower levels first, but we overwrite map entry so deeper nodes remain",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Use queue storing (node, hd). Map hd → node value (optionally store depth).",
              details: [
                "If using DFS, store pair (value, depth) and update only when depth greater",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "BFS: enqueue root hd=0; for each popped node set map[hd]=value (overwriting), enqueue children.",
              details: [
                "At end, map contains deepest node encountered for each hd",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description: "Output keys sorted by hd for left-to-right order.",
              details: [
                "If using DFS, track vertical depth to decide when to overwrite",
              ],
            },
          ],
          pattern: "BFS Bottom View via Overwrite Map",
          complexity: {
            time: "O(n)",
            space: "O(n)",
          },
        }}
      />

      <ProblemBlock
        title="13. Pair Sum with given BST"
        difficulty="Medium"
        description="Find if there exists a pair of nodes in BST that sum to a given value."
        solutions={{
          JavaScript: `// Pair Sum with given BST

// Approach 1: Using inorder traversal and two pointers
function pairSumBST(root, target) {
  const inorder = [];
  
  function inorderTraversal(node) {
    if (node === null) return;
    inorderTraversal(node.left);
    inorder.push(node.data);
    inorderTraversal(node.right);
  }
  
  inorderTraversal(root);
  
  // Two pointer approach
  let left = 0, right = inorder.length - 1;
  
  while (left < right) {
    const sum = inorder[left] + inorder[right];
    
    if (sum === target) {
      return [inorder[left], inorder[right]];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  
  return null;
}

// Approach 2: Using hash set
function pairSumBSTHash(root, target) {
  const set = new Set();
  
  function findPair(node) {
    if (node === null) return false;
    
    if (set.has(target - node.data)) {
      return true;
    }
    
    set.add(node.data);
    
    return findPair(node.left) || findPair(node.right);
  }
  
  return findPair(root);
}

// Approach 3: Using two stacks (iterative)
function pairSumBSTStacks(root, target) {
  const leftStack = [];
  const rightStack = [];
  
  let leftCurrent = root;
  let rightCurrent = root;
  
  // Initialize left stack (smallest elements)
  while (leftCurrent !== null) {
    leftStack.push(leftCurrent);
    leftCurrent = leftCurrent.left;
  }
  
  // Initialize right stack (largest elements)
  while (rightCurrent !== null) {
    rightStack.push(rightCurrent);
    rightCurrent = rightCurrent.right;
  }
  
  while (leftStack.length > 0 && rightStack.length > 0) {
    const leftNode = leftStack[leftStack.length - 1];
    const rightNode = rightStack[rightStack.length - 1];
    
    if (leftNode === rightNode) break;
    
    const sum = leftNode.data + rightNode.data;
    
    if (sum === target) {
      return [leftNode.data, rightNode.data];
    } else if (sum < target) {
      // Move left pointer to next larger element
      leftCurrent = leftNode.right;
      leftStack.pop();
      while (leftCurrent !== null) {
        leftStack.push(leftCurrent);
        leftCurrent = leftCurrent.left;
      }
    } else {
      // Move right pointer to next smaller element
      rightCurrent = rightNode.left;
      rightStack.pop();
      while (rightCurrent !== null) {
        rightStack.push(rightCurrent);
        rightCurrent = rightCurrent.right;
      }
    }
  }
  
  return null;
}

// Alternative approach with detailed explanation
function pairSumBSTDetailed(root, target) {
  console.log(\`Finding pair sum \${target} in BST\`);
  
  const inorder = [];
  
  function inorderTraversal(node) {
    if (node === null) return;
    inorderTraversal(node.left);
    inorder.push(node.data);
    inorderTraversal(node.right);
  }
  
  inorderTraversal(root);
  console.log("Inorder traversal:", inorder);
  
  let left = 0, right = inorder.length - 1;
  console.log(\`Initial pointers: left = \${left}, right = \${right}\`);
  
  while (left < right) {
    const sum = inorder[left] + inorder[right];
    console.log(\`Checking \${inorder[left]} + \${inorder[right]} = \${sum}\`);
    
    if (sum === target) {
      console.log(\`Found pair: \${inorder[left]} + \${inorder[right]} = \${target}\`);
      return [inorder[left], inorder[right]];
    } else if (sum < target) {
      console.log(\`Sum \${sum} < target \${target}, moving left pointer\`);
      left++;
    } else {
      console.log(\`Sum \${sum} > target \${target}, moving right pointer\`);
      right--;
    }
  }
  
  console.log("No pair found");
  return null;
}

// Test cases
function createTestBST() {
  let root = null;
  const values = [50, 30, 70, 20, 40, 60, 80, 10, 25, 35, 45];
  
  for (const value of values) {
    root = insertBST(root, value);
  }
  
  return root;
}

function insertBST(root, data) {
  if (root === null) {
    return new BSTNode(data);
  }
  
  if (data < root.data) {
    root.left = insertBST(root.left, data);
  } else if (data > root.data) {
    root.right = insertBST(root.right, data);
  }
  
  return root;
}

const bst = createTestBST();

console.log("=== Testing Pair Sum in BST ===");
console.log("BST inorder:", inorderTraversal(bst));

const testTargets = [60, 80, 100, 120];
for (const target of testTargets) {
  console.log(\`\\nTarget: \${target}\`);
  console.log("Two pointers:", pairSumBST(bst, target));
  console.log("Hash set:", pairSumBSTHash(bst, target));
  console.log("Two stacks:", pairSumBSTStacks(bst, target));
}

console.log("\\n=== Detailed Pair Sum Calculation ===");
pairSumBSTDetailed(bst, 80);`,
          Java: `import java.util.*;

public class PairSumBST {
    // Using inorder traversal and two pointers
    public static int[] pairSumBST(BSTNode root, int target) {
        List<Integer> inorder = new ArrayList<>();
        inorderTraversal(root, inorder);
        
        // Two pointer approach
        int left = 0, right = inorder.size() - 1;
        
        while (left < right) {
            int sum = inorder.get(left) + inorder.get(right);
            
            if (sum == target) {
                return new int[]{inorder.get(left), inorder.get(right)};
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
        
        return null;
    }
    
    private static void inorderTraversal(BSTNode node, List<Integer> result) {
        if (node == null) return;
        inorderTraversal(node.left, result);
        result.add(node.data);
        inorderTraversal(node.right, result);
    }
    
    // Using hash set
    public static boolean pairSumBSTHash(BSTNode root, int target) {
        Set<Integer> set = new HashSet<>();
        return findPair(root, target, set);
    }
    
    private static boolean findPair(BSTNode node, int target, Set<Integer> set) {
        if (node == null) return false;
        
        if (set.contains(target - node.data)) {
            return true;
        }
        
        set.add(node.data);
        
        return findPair(node.left, target, set) || findPair(node.right, target, set);
    }
    
    public static void main(String[] args) {
        BSTNode root = new BSTNode(50);
        root.left = new BSTNode(30);
        root.right = new BSTNode(70);
        root.left.left = new BSTNode(20);
        root.left.right = new BSTNode(40);
        
        int[] pair = pairSumBST(root, 80);
        System.out.println("Pair sum 80: " + (pair != null ? pair[0] + ", " + pair[1] : "Not found"));
        System.out.println("Has pair: " + pairSumBSTHash(root, 80)); // true
    }
}`,
        }}
        explanation="Find pair sum using inorder traversal + two pointers. Left pointer starts from smallest, right from largest. Move pointers based on sum comparison. Time: O(n), Space: O(n)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Given BST root and target sum, determine if two nodes add to target (optionally return pair).",
              details: ["Values unique; ensure we don’t reuse same node twice"],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Convert BST to sorted sequence (inorder) then run two-pointer sum search.",
              keywords: ["two pointer", "inorder", "BST iterators"],
              details: [
                "BST provides natural sorted order",
                "Alternative hash-set approach stores complements during traversal",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Either store full inorder array (O(n) space) or use two stacks to simulate forward/backward iterators.",
              details: [
                "Two-stack approach maintains O(h) space",
                "HashSet approach uses O(n) space but single traversal",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Perform inorder traversal building sorted array, then run two pointers `i` and `j`.",
              details: [
                "If arr[i] + arr[j] == target → return pair",
                "If sum < target → ++i; else --j",
                "Stop when i >= j",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "For strict memory limits use iterative predecessor/successor generators instead of full array.",
              details: [
                "Hash-set DFS variant returns as soon as complement seen",
              ],
            },
          ],
          pattern: "Inorder Two-Pointer Pair Search",
          complexity: {
            time: "O(n)",
            space: "O(n) array / O(h) two-stack",
          },
        }}
      />
    </div>
  );
}

// Balancing Section
function BalancingSection() {
  return (
    <div className="space-y-8">
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Self-Balancing BSTs
        </h2>
        <p className="text-gray-300 mb-6">
          Self-balancing BSTs including AVL trees and Red-Black trees.
        </p>
      </div>

      <ProblemBlock
        title="9. AVL Tree"
        difficulty="Hard"
        description="Implement AVL tree with rotations to maintain balance."
        solutions={{
          JavaScript: `// AVL Tree Implementation

class AVLNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.height = 1;
  }
}

class AVLTree {
  constructor() {
    this.root = null;
  }
  
  // Get height of node
  getHeight(node) {
    if (node === null) return 0;
    return node.height;
  }
  
  // Get balance factor
  getBalance(node) {
    if (node === null) return 0;
    return this.getHeight(node.left) - this.getHeight(node.right);
  }
  
  // Update height
  updateHeight(node) {
    if (node === null) return;
    node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
  }
  
  // Right rotation
  rightRotate(y) {
    const x = y.left;
    const T2 = x.right;
    
    // Perform rotation
    x.right = y;
    y.left = T2;
    
    // Update heights
    this.updateHeight(y);
    this.updateHeight(x);
    
    return x;
  }
  
  // Left rotation
  leftRotate(x) {
    const y = x.right;
    const T2 = y.left;
    
    // Perform rotation
    y.left = x;
    x.right = T2;
    
    // Update heights
    this.updateHeight(x);
    this.updateHeight(y);
    
    return y;
  }
  
  // Insert node
  insert(data) {
    this.root = this.insertHelper(this.root, data);
  }
  
  insertHelper(node, data) {
    // 1. Perform normal BST insertion
    if (node === null) {
      return new AVLNode(data);
    }
    
    if (data < node.data) {
      node.left = this.insertHelper(node.left, data);
    } else if (data > node.data) {
      node.right = this.insertHelper(node.right, data);
    } else {
      return node; // Duplicate values not allowed
    }
    
    // 2. Update height
    this.updateHeight(node);
    
    // 3. Get balance factor
    const balance = this.getBalance(node);
    
    // 4. If unbalanced, perform rotations
    
    // Left Left Case
    if (balance > 1 && data < node.left.data) {
      return this.rightRotate(node);
    }
    
    // Right Right Case
    if (balance < -1 && data > node.right.data) {
      return this.leftRotate(node);
    }
    
    // Left Right Case
    if (balance > 1 && data > node.left.data) {
      node.left = this.leftRotate(node.left);
      return this.rightRotate(node);
    }
    
    // Right Left Case
    if (balance < -1 && data < node.right.data) {
      node.right = this.rightRotate(node.right);
      return this.leftRotate(node);
    }
    
    return node;
  }
  
  // Delete node
  delete(data) {
    this.root = this.deleteHelper(this.root, data);
  }
  
  deleteHelper(node, data) {
    // 1. Perform normal BST deletion
    if (node === null) return node;
    
    if (data < node.data) {
      node.left = this.deleteHelper(node.left, data);
    } else if (data > node.data) {
      node.right = this.deleteHelper(node.right, data);
    } else {
      // Node to be deleted found
      
      // Case 1: No children
      if (node.left === null && node.right === null) {
        return null;
      }
      
      // Case 2: One child
      if (node.left === null) {
        return node.right;
      }
      if (node.right === null) {
        return node.left;
      }
      
      // Case 3: Two children
      const successor = this.findMin(node.right);
      node.data = successor.data;
      node.right = this.deleteHelper(node.right, successor.data);
    }
    
    // 2. Update height
    this.updateHeight(node);
    
    // 3. Get balance factor
    const balance = this.getBalance(node);
    
    // 4. If unbalanced, perform rotations
    
    // Left Left Case
    if (balance > 1 && this.getBalance(node.left) >= 0) {
      return this.rightRotate(node);
    }
    
    // Right Right Case
    if (balance < -1 && this.getBalance(node.right) <= 0) {
      return this.leftRotate(node);
    }
    
    // Left Right Case
    if (balance > 1 && this.getBalance(node.left) < 0) {
      node.left = this.leftRotate(node.left);
      return this.rightRotate(node);
    }
    
    // Right Left Case
    if (balance < -1 && this.getBalance(node.right) > 0) {
      node.right = this.rightRotate(node.right);
      return this.leftRotate(node);
    }
    
    return node;
  }
  
  findMin(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }
  
  // Inorder traversal
  inorder() {
    const result = [];
    this.inorderHelper(this.root, result);
    return result;
  }
  
  inorderHelper(node, result) {
    if (node === null) return;
    
    this.inorderHelper(node.left, result);
    result.push(node.data);
    this.inorderHelper(node.right, result);
  }
  
  // Check if tree is balanced
  isBalanced() {
    return this.checkBalance(this.root) !== -1;
  }
  
  checkBalance(node) {
    if (node === null) return 0;
    
    const leftHeight = this.checkBalance(node.left);
    if (leftHeight === -1) return -1;
    
    const rightHeight = this.checkBalance(node.right);
    if (rightHeight === -1) return -1;
    
    if (Math.abs(leftHeight - rightHeight) > 1) return -1;
    
    return 1 + Math.max(leftHeight, rightHeight);
  }
}

// Test cases
const avl = new AVLTree();

console.log("=== Testing AVL Tree ===");
const values = [50, 30, 70, 20, 40, 60, 80, 10, 25, 35, 45];

for (const value of values) {
  avl.insert(value);
  console.log(\`After inserting \${value}: [\${avl.inorder().join(', ')}]\`);
  console.log(\`Is balanced: \${avl.isBalanced()}\`);
}

console.log("\\nFinal AVL tree inorder:", avl.inorder());
console.log("Is balanced:", avl.isBalanced());`,
          Java: `class AVLNode {
    int data;
    AVLNode left;
    AVLNode right;
    int height;
    
    AVLNode(int data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

public class AVLTree {
    AVLNode root;
    
    private int getHeight(AVLNode node) {
        return node == null ? 0 : node.height;
    }
    
    private int getBalance(AVLNode node) {
        if (node == null) return 0;
        return getHeight(node.left) - getHeight(node.right);
    }
    
    private void updateHeight(AVLNode node) {
        if (node != null) {
            node.height = 1 + Math.max(getHeight(node.left), getHeight(node.right));
        }
    }
    
    // Right rotation
    private AVLNode rightRotate(AVLNode y) {
        AVLNode x = y.left;
        AVLNode T2 = x.right;
        
        x.right = y;
        y.left = T2;
        
        updateHeight(y);
        updateHeight(x);
        
        return x;
    }
    
    // Left rotation
    private AVLNode leftRotate(AVLNode x) {
        AVLNode y = x.right;
        AVLNode T2 = y.left;
        
        y.left = x;
        x.right = T2;
        
        updateHeight(x);
        updateHeight(y);
        
        return y;
    }
    
    // Insert node
    public void insert(int data) {
        root = insertHelper(root, data);
    }
    
    private AVLNode insertHelper(AVLNode node, int data) {
        if (node == null) {
            return new AVLNode(data);
        }
        
        if (data < node.data) {
            node.left = insertHelper(node.left, data);
        } else if (data > node.data) {
            node.right = insertHelper(node.right, data);
        } else {
            return node; // Duplicate values not allowed
        }
        
        updateHeight(node);
        
        int balance = getBalance(node);
        
        // Left Left Case
        if (balance > 1 && data < node.left.data) {
            return rightRotate(node);
        }
        
        // Right Right Case
        if (balance < -1 && data > node.right.data) {
            return leftRotate(node);
        }
        
        // Left Right Case
        if (balance > 1 && data > node.left.data) {
            node.left = leftRotate(node.left);
            return rightRotate(node);
        }
        
        // Right Left Case
        if (balance < -1 && data < node.right.data) {
            node.right = rightRotate(node.right);
            return leftRotate(node);
        }
        
        return node;
    }
    
    public static void main(String[] args) {
        AVLTree avl = new AVLTree();
        int[] values = {50, 30, 70, 20, 40, 60, 80};
        
        for (int value : values) {
            avl.insert(value);
        }
        
        System.out.println("AVL tree created successfully");
    }
}`,
        }}
        explanation="AVL tree maintains balance using rotations. Balance factor = left height - right height. Rotations: LL, RR, LR, RL. Time: O(log n) for all operations, Space: O(n)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "AVL tree is a self-balancing BST keeping balance factor (left height − right height) ∈ {−1,0,1}. After each insert/delete we rebalance.",
              details: [
                "Rotations restore balance when factor becomes ±2",
                "Need to update node heights after structural changes",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Violations fall into four cases determined by path of insertion/deletion: LL, RR, LR, RL.",
              keywords: [
                "balance factor",
                "rotations",
                "LL/RR/LR/RL",
                "height updates",
              ],
              details: [
                "LL: heavy on left-left → right rotation",
                "RR: heavy on right-right → left rotation",
                "LR: heavy on left-right → left rotate child then right rotate",
                "RL: heavy on right-left → right rotate child then left rotate",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Node stores `data`, pointers, and `height`. Helper methods compute height and balance factor.",
              details: [
                "Height initialized to 1 for leaf nodes",
                "Utility functions `getHeight`, `getBalance`, `updateHeight` keep code clean",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Insert/delete like BST, then unwind recursion updating height and performing rotations when balance factor out of range.",
              details: [
                "After normal BST insertion, update height of ancestor node",
                "Check balance factor; perform appropriate rotation case",
                "Deletion similar: remove node, update heights, rebalance while unwinding",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Ensure rotations update heights in correct order and return new subtree root.",
              details: [
                "Write rotation helpers returning new roots",
                "All operations remain O(log n) because height stays O(log n)",
              ],
            },
          ],
          pattern: "Self-Balancing BST via AVL Rotations",
          complexity: {
            time: "O(log n) per insert/delete/search",
            space: "O(n) total, O(h) recursion stack",
          },
        }}
      />

      <ProblemBlock
        title="10. Red-Black Tree"
        difficulty="Hard"
        description="Implement Red-Black tree with color properties and rotations."
        solutions={{
          JavaScript: `// Red-Black Tree Implementation

class RBNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.parent = null;
    this.color = 'RED'; // 'RED' or 'BLACK'
  }
}

class RedBlackTree {
  constructor() {
    this.nullNode = new RBNode(null);
    this.nullNode.color = 'BLACK';
    this.root = this.nullNode;
  }
  
  // Left rotation
  leftRotate(x) {
    const y = x.right;
    x.right = y.left;
    
    if (y.left !== this.nullNode) {
      y.left.parent = x;
    }
    
    y.parent = x.parent;
    
    if (x.parent === this.nullNode) {
      this.root = y;
    } else if (x === x.parent.left) {
      x.parent.left = y;
    } else {
      x.parent.right = y;
    }
    
    y.left = x;
    x.parent = y;
  }
  
  // Right rotation
  rightRotate(x) {
    const y = x.left;
    x.left = y.right;
    
    if (y.right !== this.nullNode) {
      y.right.parent = x;
    }
    
    y.parent = x.parent;
    
    if (x.parent === this.nullNode) {
      this.root = y;
    } else if (x === x.parent.right) {
      x.parent.right = y;
    } else {
      x.parent.left = y;
    }
    
    y.right = x;
    x.parent = y;
  }
  
  // Insert node
  insert(data) {
    const newNode = new RBNode(data);
    newNode.left = this.nullNode;
    newNode.right = this.nullNode;
    
    let y = this.nullNode;
    let x = this.root;
    
    // Find insertion point
    while (x !== this.nullNode) {
      y = x;
      if (newNode.data < x.data) {
        x = x.left;
      } else {
        x = x.right;
      }
    }
    
    newNode.parent = y;
    
    if (y === this.nullNode) {
      this.root = newNode;
    } else if (newNode.data < y.data) {
      y.left = newNode;
    } else {
      y.right = newNode;
    }
    
    // Fix Red-Black properties
    this.insertFixup(newNode);
  }
  
  // Fix Red-Black properties after insertion
  insertFixup(z) {
    while (z.parent.color === 'RED') {
      if (z.parent === z.parent.parent.left) {
        const y = z.parent.parent.right;
        
        if (y.color === 'RED') {
          // Case 1: Uncle is red
          z.parent.color = 'BLACK';
          y.color = 'BLACK';
          z.parent.parent.color = 'RED';
          z = z.parent.parent;
        } else {
          if (z === z.parent.right) {
            // Case 2: Uncle is black and z is right child
            z = z.parent;
            this.leftRotate(z);
          }
          // Case 3: Uncle is black and z is left child
          z.parent.color = 'BLACK';
          z.parent.parent.color = 'RED';
          this.rightRotate(z.parent.parent);
        }
      } else {
        const y = z.parent.parent.left;
        
        if (y.color === 'RED') {
          // Case 1: Uncle is red
          z.parent.color = 'BLACK';
          y.color = 'BLACK';
          z.parent.parent.color = 'RED';
          z = z.parent.parent;
        } else {
          if (z === z.parent.left) {
            // Case 2: Uncle is black and z is left child
            z = z.parent;
            this.rightRotate(z);
          }
          // Case 3: Uncle is black and z is right child
          z.parent.color = 'BLACK';
          z.parent.parent.color = 'RED';
          this.leftRotate(z.parent.parent);
        }
      }
    }
    
    this.root.color = 'BLACK';
  }
  
  // Inorder traversal
  inorder() {
    const result = [];
    this.inorderHelper(this.root, result);
    return result;
  }
  
  inorderHelper(node, result) {
    if (node === this.nullNode) return;
    
    this.inorderHelper(node.left, result);
    result.push(node.data);
    this.inorderHelper(node.right, result);
  }
  
  // Search for a value
  search(data) {
    let current = this.root;
    
    while (current !== this.nullNode) {
      if (data === current.data) {
        return current;
      } else if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    
    return null;
  }
  
  // Get height
  getHeight() {
    return this.heightHelper(this.root);
  }
  
  heightHelper(node) {
    if (node === this.nullNode) return 0;
    
    const leftHeight = this.heightHelper(node.left);
    const rightHeight = this.heightHelper(node.right);
    
    return 1 + Math.max(leftHeight, rightHeight);
  }
  
  // Check Red-Black properties
  checkRBProperties() {
    return this.checkRBHelper(this.root);
  }
  
  checkRBHelper(node) {
    if (node === this.nullNode) return true;
    
    // Property 1: Root is black
    if (node === this.root && node.color !== 'BLACK') {
      console.log("Property 1 violated: Root is not black");
      return false;
    }
    
    // Property 2: Red nodes have black children
    if (node.color === 'RED') {
      if (node.left.color !== 'BLACK' || node.right.color !== 'BLACK') {
        console.log("Property 2 violated: Red node has red child");
        return false;
      }
    }
    
    // Property 3: All paths from root to leaves have same number of black nodes
    const leftBlackHeight = this.getBlackHeight(node.left);
    const rightBlackHeight = this.getBlackHeight(node.right);
    
    if (leftBlackHeight !== rightBlackHeight) {
      console.log("Property 3 violated: Different black heights");
      return false;
    }
    
    return this.checkRBHelper(node.left) && this.checkRBHelper(node.right);
  }
  
  getBlackHeight(node) {
    if (node === this.nullNode) return 0;
    
    const leftBlackHeight = this.getBlackHeight(node.left);
    const rightBlackHeight = this.getBlackHeight(node.right);
    
    if (leftBlackHeight !== rightBlackHeight) {
      return -1; // Invalid
    }
    
    return leftBlackHeight + (node.color === 'BLACK' ? 1 : 0);
  }
}

// Test cases
const rbTree = new RedBlackTree();

console.log("=== Testing Red-Black Tree ===");
const values = [50, 30, 70, 20, 40, 60, 80, 10, 25, 35, 45];

for (const value of values) {
  rbTree.insert(value);
  console.log(\`After inserting \${value}: [\${rbTree.inorder().join(', ')}]\`);
  console.log(\`Height: \${rbTree.getHeight()}\`);
  console.log(\`RB Properties: \${rbTree.checkRBProperties()}\`);
}

console.log("\\nFinal RB tree inorder:", rbTree.inorder());
console.log("Final height:", rbTree.getHeight());
console.log("RB Properties valid:", rbTree.checkRBProperties());`,
          Java: `enum Color {
    RED, BLACK
}

class RBNode {
    int data;
    RBNode left;
    RBNode right;
    RBNode parent;
    Color color;
    
    RBNode(int data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.parent = null;
        this.color = Color.RED;
    }
}

public class RedBlackTree {
    RBNode root;
    RBNode nullNode;
    
    public RedBlackTree() {
        nullNode = new RBNode(0);
        nullNode.color = Color.BLACK;
        root = nullNode;
    }
    
    // Left rotation
    private void leftRotate(RBNode x) {
        RBNode y = x.right;
        x.right = y.left;
        
        if (y.left != nullNode) {
            y.left.parent = x;
        }
        
        y.parent = x.parent;
        
        if (x.parent == nullNode) {
            root = y;
        } else if (x == x.parent.left) {
            x.parent.left = y;
        } else {
            x.parent.right = y;
        }
        
        y.left = x;
        x.parent = y;
    }
    
    // Right rotation
    private void rightRotate(RBNode x) {
        RBNode y = x.left;
        x.left = y.right;
        
        if (y.right != nullNode) {
            y.right.parent = x;
        }
        
        y.parent = x.parent;
        
        if (x.parent == nullNode) {
            root = y;
        } else if (x == x.parent.right) {
            x.parent.right = y;
        } else {
            x.parent.left = y;
        }
        
        y.right = x;
        x.parent = y;
    }
    
    // Insert node
    public void insert(int data) {
        RBNode newNode = new RBNode(data);
        newNode.left = nullNode;
        newNode.right = nullNode;
        
        RBNode y = nullNode;
        RBNode x = root;
        
        while (x != nullNode) {
            y = x;
            if (newNode.data < x.data) {
                x = x.left;
            } else {
                x = x.right;
            }
        }
        
        newNode.parent = y;
        
        if (y == nullNode) {
            root = newNode;
        } else if (newNode.data < y.data) {
            y.left = newNode;
        } else {
            y.right = newNode;
        }
        
        insertFixup(newNode);
    }
    
    // Fix Red-Black properties after insertion
    private void insertFixup(RBNode z) {
        while (z.parent.color == Color.RED) {
            if (z.parent == z.parent.parent.left) {
                RBNode y = z.parent.parent.right;
                
                if (y.color == Color.RED) {
                    // Case 1: Uncle is red
                    z.parent.color = Color.BLACK;
                    y.color = Color.BLACK;
                    z.parent.parent.color = Color.RED;
                    z = z.parent.parent;
                } else {
                    if (z == z.parent.right) {
                        // Case 2: Uncle is black and z is right child
                        z = z.parent;
                        leftRotate(z);
                    }
                    // Case 3: Uncle is black and z is left child
                    z.parent.color = Color.BLACK;
                    z.parent.parent.color = Color.RED;
                    rightRotate(z.parent.parent);
                }
            } else {
                RBNode y = z.parent.parent.left;
                
                if (y.color == Color.RED) {
                    // Case 1: Uncle is red
                    z.parent.color = Color.BLACK;
                    y.color = Color.BLACK;
                    z.parent.parent.color = Color.RED;
                    z = z.parent.parent;
                } else {
                    if (z == z.parent.left) {
                        // Case 2: Uncle is black and z is left child
                        z = z.parent;
                        rightRotate(z);
                    }
                    // Case 3: Uncle is black and z is right child
                    z.parent.color = Color.BLACK;
                    z.parent.parent.color = Color.RED;
                    leftRotate(z.parent.parent);
                }
            }
        }
        
        root.color = Color.BLACK;
    }
    
    public static void main(String[] args) {
        RedBlackTree rbTree = new RedBlackTree();
        int[] values = {50, 30, 70, 20, 40, 60, 80};
        
        for (int value : values) {
            rbTree.insert(value);
        }
        
        System.out.println("Red-Black tree created successfully");
    }
}`,
        }}
        explanation="Red-Black tree maintains balance using color properties and rotations. Properties: root is black, red nodes have black children, all paths have same black height. Time: O(log n) for all operations, Space: O(n)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Red-Black Tree is a BST with coloring rules guaranteeing O(log n) height. Must maintain five properties (root black, leaves null/black, red nodes have black children, etc.).",
              details: [
                "Insertions color new node red, then fix violations",
                "Deletions more complex: may require double-black fix-up",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Tree maintains near-balance via recoloring and rotations based on parent/uncle colors.",
              keywords: [
                "color flip",
                "uncle cases",
                "double black",
                "rotations",
              ],
              details: [
                "Insertion fix cases: uncle red → recolor; uncle black plus triangle/line cases → rotate + recolor",
                "Deletion fix handles double-black node using sibling cases",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Node stores color flag plus standard BST pointers; sentinel NIL nodes simplify logic.",
              details: [
                "Use enums/booleans for color (RED/BLACK)",
                "Keep parent pointer to simplify upward adjustments",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Insert like BST, color node red, then run fix-up while parent red.",
              details: [
                "Case analysis based on uncle color and node orientation (LL/LR/RL/RR)",
                "Rotations identical to AVL but paired with recoloring",
                "Deletion fix-up uses sibling color and children's colors to decide recolor/rotate",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Factor rotation and recolor logic into helpers, and leverage NIL sentinel to avoid null checks.",
              details: [
                "Verify invariants via assertions in debug builds",
                "Operations remain O(log n) because black-height stays balanced",
              ],
            },
          ],
          pattern: "Balanced BST via Red-Black Properties and Rotations",
          complexity: {
            time: "O(log n) per operation",
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
        className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors mb-4"
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
                    ? "text-yellow-400 border-b-2 border-yellow-400"
                    : "text-gray-400 hover:text-gray-300"
                }`}
              >
                Solution
              </button>
              <button
                onClick={() => setActiveTab("approach")}
                className={`px-4 py-2 font-semibold transition-colors ${
                  activeTab === "approach"
                    ? "text-yellow-400 border-b-2 border-yellow-400"
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
              <div className="bg-yellow-900/30 border border-yellow-500/30 rounded-lg p-4">
                <p className="text-yellow-200">
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
      <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 rounded-xl p-6 border border-yellow-500/30">
        <h3 className="text-2xl font-bold text-white mb-2">
          🎯 Problem Solving Approach
        </h3>
        <p className="text-gray-300 text-sm">
          Applying the systematic 5-step framework for this BST problem
        </p>
      </div>

      {approach.steps?.map((step, index) => (
        <div
          key={index}
          className="bg-gray-800 rounded-lg p-5 border border-gray-700"
        >
          <div className="flex items-start gap-4">
            <div className="bg-yellow-500 text-gray-900 rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
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
                        <span className="text-yellow-400 mt-1">•</span>
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
                      className="px-2 py-1 bg-yellow-500/20 text-yellow-200 rounded text-xs"
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
        <div className="bg-orange-900/30 border border-orange-500/30 rounded-lg p-4">
          <h4 className="text-lg font-semibold text-orange-200 mb-2">
            🎨 Pattern Identified
          </h4>
          <p className="text-gray-300">{approach.pattern}</p>
        </div>
      )}
    </div>
  );
}
