"use client";

import { useState } from "react";

export default function GraphPage() {
  const [activeSection, setActiveSection] = useState("fundamentals");

  const sections = [
    { id: "fundamentals", title: "Fundamentals", icon: "📚" },
    { id: "traversal", title: "Traversal", icon: "🔍" },
    { id: "shortest", title: "Shortest Paths", icon: "🛣️" },
    { id: "mst", title: "MST", icon: "🌳" },
    { id: "advanced", title: "Advanced", icon: "⚡" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Graphs & Graph Algorithms Mastery
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Master graph data structures, traversal algorithms, shortest paths,
            MST, and advanced graph algorithms
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
          {activeSection === "fundamentals" && <FundamentalsSection />}
          {activeSection === "traversal" && <TraversalSection />}
          {activeSection === "shortest" && <ShortestPathSection />}
          {activeSection === "mst" && <MSTSection />}
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

function FundamentalsSection() {
  return (
    <div className="space-y-8">
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Introduction to Graph
        </h2>
        <p className="text-gray-300 mb-6">
          A graph is a collection of vertices (nodes) connected by edges. Graphs
          are fundamental data structures used to model relationships and
          networks.
        </p>

        <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-green-200 mb-3">
            Graph Types:
          </h3>
          <ul className="space-y-2 text-green-100">
            <li>
              • <strong>Undirected Graph:</strong> Edges have no direction
            </li>
            <li>
              • <strong>Directed Graph (Digraph):</strong> Edges have direction
            </li>
            <li>
              • <strong>Weighted Graph:</strong> Edges have weights/costs
            </li>
            <li>
              • <strong>Unweighted Graph:</strong> All edges have equal weight
            </li>
            <li>
              • <strong>Connected Graph:</strong> Path exists between any two
              vertices
            </li>
            <li>
              • <strong>Disconnected Graph:</strong> Some vertices are not
              reachable
            </li>
          </ul>
        </div>
      </div>

      <ProblemBlock
        title="Graph Representation (Adjacency Matrix)"
        difficulty="Easy"
        description="Represent a graph using a 2D matrix where matrix[i][j] indicates if there's an edge between vertices i and j."
        solution={`// Graph Representation using Adjacency Matrix

class GraphMatrix {
  constructor(vertices) {
    this.vertices = vertices;
    this.matrix = Array(vertices).fill().map(() => Array(vertices).fill(0));
  }

  // Add edge between vertices u and v
  addEdge(u, v, weight = 1) {
    this.matrix[u][v] = weight;
    // For undirected graph, also add edge from v to u
    this.matrix[v][u] = weight;
  }

  // Remove edge between vertices u and v
  removeEdge(u, v) {
    this.matrix[u][v] = 0;
    this.matrix[v][u] = 0;
  }

  // Check if edge exists between u and v
  hasEdge(u, v) {
    return this.matrix[u][v] !== 0;
  }

  // Get weight of edge between u and v
  getWeight(u, v) {
    return this.matrix[u][v];
  }

  // Get all neighbors of vertex u
  getNeighbors(u) {
    const neighbors = [];
    for (let v = 0; v < this.vertices; v++) {
      if (this.matrix[u][v] !== 0) {
        neighbors.push({ vertex: v, weight: this.matrix[u][v] });
      }
    }
    return neighbors;
  }

  // Print the adjacency matrix
  print() {
    console.log("Adjacency Matrix:");
    console.log("  ", Array.from({length: this.vertices}, (_, i) => i).join("  "));
    this.matrix.forEach((row, i) => {
      console.log(i + " ", row.join("  "));
    });
  }
}

// Test the adjacency matrix representation
const graph = new GraphMatrix(4);
graph.addEdge(0, 1, 5);
graph.addEdge(0, 2, 3);
graph.addEdge(1, 2, 2);
graph.addEdge(2, 3, 1);

console.log("=== Adjacency Matrix Representation ===");
graph.print();
console.log("Neighbors of vertex 0:", graph.getNeighbors(0));
console.log("Edge from 0 to 1 exists:", graph.hasEdge(0, 1));
console.log("Weight of edge (0,1):", graph.getWeight(0, 1));`}
        explanation="Adjacency matrix uses O(V²) space. Checking edge existence is O(1), but finding all neighbors is O(V). Good for dense graphs."
      />

      <ProblemBlock
        title="Graph Representation (Adjacency List)"
        difficulty="Easy"
        description="Represent a graph using an array of lists where each list contains neighbors of a vertex."
        solution={`// Graph Representation using Adjacency List

class GraphList {
  constructor(vertices) {
    this.vertices = vertices;
    this.adjList = Array(vertices).fill().map(() => []);
  }

  // Add edge between vertices u and v
  addEdge(u, v, weight = 1) {
    this.adjList[u].push({ vertex: v, weight });
    // For undirected graph, also add edge from v to u
    this.adjList[v].push({ vertex: u, weight });
  }

  // Remove edge between vertices u and v
  removeEdge(u, v) {
    this.adjList[u] = this.adjList[u].filter(edge => edge.vertex !== v);
    this.adjList[v] = this.adjList[v].filter(edge => edge.vertex !== u);
  }

  // Check if edge exists between u and v
  hasEdge(u, v) {
    return this.adjList[u].some(edge => edge.vertex === v);
  }

  // Get weight of edge between u and v
  getWeight(u, v) {
    const edge = this.adjList[u].find(edge => edge.vertex === v);
    return edge ? edge.weight : 0;
  }

  // Get all neighbors of vertex u
  getNeighbors(u) {
    return this.adjList[u];
  }

  // Print the adjacency list
  print() {
    console.log("Adjacency List:");
    this.adjList.forEach((neighbors, vertex) => {
      const neighborStr = neighbors.map(n => \`\${n.vertex}(\${n.weight})\`).join(", ");
      console.log(\`\${vertex}: [\${neighborStr}]\`);
    });
  }
}

// Test the adjacency list representation
const graph = new GraphList(4);
graph.addEdge(0, 1, 5);
graph.addEdge(0, 2, 3);
graph.addEdge(1, 2, 2);
graph.addEdge(2, 3, 1);

console.log("=== Adjacency List Representation ===");
graph.print();
console.log("Neighbors of vertex 0:", graph.getNeighbors(0));
console.log("Edge from 0 to 1 exists:", graph.hasEdge(0, 1));
console.log("Weight of edge (0,1):", graph.getWeight(0, 1));`}
        explanation="Adjacency list uses O(V + E) space. Finding all neighbors is O(degree), checking edge existence is O(degree). Good for sparse graphs."
      />

      <ProblemBlock
        title="Adjacency Matrix and List Comparison"
        difficulty="Easy"
        description="Compare the time and space complexity of adjacency matrix vs adjacency list representations."
        solution={`// Comparison of Graph Representations

function compareRepresentations() {
  console.log("=== Graph Representation Comparison ===");
  
  const comparison = {
    "Space Complexity": {
      "Adjacency Matrix": "O(V²)",
      "Adjacency List": "O(V + E)"
    },
    "Add Edge": {
      "Adjacency Matrix": "O(1)",
      "Adjacency List": "O(1)"
    },
    "Remove Edge": {
      "Adjacency Matrix": "O(1)",
      "Adjacency List": "O(degree)"
    },
    "Check Edge": {
      "Adjacency Matrix": "O(1)",
      "Adjacency List": "O(degree)"
    },
    "Get Neighbors": {
      "Adjacency Matrix": "O(V)",
      "Adjacency List": "O(degree)"
    },
    "Best For": {
      "Adjacency Matrix": "Dense graphs, frequent edge queries",
      "Adjacency List": "Sparse graphs, graph traversal"
    }
  };

  console.log("\\nComparison Table:");
  console.log("Property".padEnd(20) + "Adjacency Matrix".padEnd(20) + "Adjacency List");
  console.log("-".repeat(60));
  
  Object.entries(comparison).forEach(([property, values]) => {
    console.log(
      property.padEnd(20) + 
      values["Adjacency Matrix"].padEnd(20) + 
      values["Adjacency List"]
    );
  });

  console.log("\\n=== When to Use Which? ===");
  console.log("\\nUse Adjacency Matrix when:");
  console.log("• Graph is dense (E ≈ V²)");
  console.log("• Need frequent edge existence checks");
  console.log("• Vertices are numbered 0 to V-1");
  console.log("• Memory is not a constraint");
  
  console.log("\\nUse Adjacency List when:");
  console.log("• Graph is sparse (E << V²)");
  console.log("• Need to traverse all neighbors frequently");
  console.log("• Memory is a constraint");
  console.log("• Vertices are not necessarily numbered");
  
  console.log("\\n=== Example Analysis ===");
  const V = 1000;
  const E1 = 100; // Sparse
  const E2 = 500000; // Dense
  
  console.log(\`\\nFor V = \${V} vertices:\`);
  console.log(\`Sparse graph (E = \${E1}):\`);
  console.log(\`  Matrix space: \${V * V} = \${V * V}\`);
  console.log(\`  List space: \${V + E1} = \${V + E1}\`);
  console.log(\`  List is \${Math.round((V * V) / (V + E1))}x more memory efficient\`);
  
  console.log(\`\\nDense graph (E = \${E2}):\`);
  console.log(\`  Matrix space: \${V * V} = \${V * V}\`);
  console.log(\`  List space: \${V + E2} = \${V + E2}\`);
  console.log(\`  Matrix is \${Math.round((V + E2) / (V * V))}x more memory efficient\`);
}

compareRepresentations();`}
        explanation="Matrix: O(V²) space, O(1) edge operations. List: O(V+E) space, O(degree) edge operations. Choose based on graph density and operation frequency."
      />
    </div>
  );
}

function TraversalSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-white mb-6">
        Graph Traversal Algorithms
      </h2>

      <ProblemBlock
        title="Breadth First Search (BFS)"
        difficulty="Medium"
        description="Traverse a graph level by level using a queue data structure."
        solution={`// Breadth First Search (BFS)

function bfs(graph, start) {
  const visited = new Set();
  const queue = [start];
  const result = [];
  
  visited.add(start);
  
  console.log(\`BFS starting from vertex \${start}\`);
  console.log(\`Initial queue: [\${queue.join(', ')}]\`);
  
  while (queue.length > 0) {
    const current = queue.shift();
    result.push(current);
    
    console.log(\`\\nProcessing vertex \${current}\`);
    console.log(\`Result so far: [\${result.join(', ')}]\`);
    
    // Visit all unvisited neighbors
    const neighbors = graph.getNeighbors(current);
    console.log(\`Neighbors of \${current}: [\${neighbors.map(n => n.vertex).join(', ')}]\`);
    
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor.vertex)) {
        visited.add(neighbor.vertex);
        queue.push(neighbor.vertex);
        console.log(\`  Added \${neighbor.vertex} to queue\`);
      } else {
        console.log(\`  \${neighbor.vertex} already visited\`);
      }
    }
    
    console.log(\`Updated queue: [\${queue.join(', ')}]\`);
  }
  
  console.log(\`\\nBFS traversal complete: [\${result.join(', ')}]\`);
  return result;
}

// BFS for disconnected graphs
function bfsDisconnected(graph) {
  const visited = new Set();
  const result = [];
  
  console.log("BFS for disconnected graph");
  
  for (let i = 0; i < graph.vertices; i++) {
    if (!visited.has(i)) {
      console.log(\`\\nStarting BFS from unvisited vertex \${i}\`);
      const component = bfsFromVertex(graph, i, visited);
      result.push(...component);
    }
  }
  
  console.log(\`\\nComplete BFS traversal: [\${result.join(', ')}]\`);
  return result;
}

function bfsFromVertex(graph, start, visited) {
  const queue = [start];
  const component = [];
  
  visited.add(start);
  
  while (queue.length > 0) {
    const current = queue.shift();
    component.push(current);
    
    const neighbors = graph.getNeighbors(current);
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor.vertex)) {
        visited.add(neighbor.vertex);
        queue.push(neighbor.vertex);
      }
    }
  }
  
  return component;
}

// Test BFS
const graph = new GraphList(6);
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
graph.addEdge(3, 5);

console.log("=== Testing BFS ===");
graph.print();
bfs(graph, 0);`}
        explanation="BFS uses queue to visit vertices level by level. Time: O(V + E), Space: O(V). Guarantees shortest path in unweighted graphs."
      />

      <ProblemBlock
        title="Applications of BFS"
        difficulty="Medium"
        description="Common applications of BFS including shortest path, level order traversal, and connectivity."
        solution={`// Applications of BFS

// 1. Shortest Path in Unweighted Graph
function shortestPathBFS(graph, start, end) {
  const visited = new Set();
  const queue = [{ vertex: start, path: [start] }];
  
  visited.add(start);
  
  console.log(\`Finding shortest path from \${start} to \${end}\`);
  
  while (queue.length > 0) {
    const { vertex: current, path } = queue.shift();
    
    console.log(\`\\nProcessing vertex \${current}, current path: [\${path.join(' -> ')}]\`);
    
    if (current === end) {
      console.log(\`Found shortest path: [\${path.join(' -> ')}]\`);
      console.log(\`Shortest distance: \${path.length - 1}\`);
      return path;
    }
    
    const neighbors = graph.getNeighbors(current);
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor.vertex)) {
        visited.add(neighbor.vertex);
        queue.push({ 
          vertex: neighbor.vertex, 
          path: [...path, neighbor.vertex] 
        });
        console.log(\`  Added \${neighbor.vertex} to queue with path: [\${[...path, neighbor.vertex].join(' -> ')}]\`);
      }
    }
  }
  
  console.log(\`No path found from \${start} to \${end}\`);
  return null;
}

// 2. Level Order Traversal
function levelOrderTraversal(graph, start) {
  const visited = new Set();
  const queue = [{ vertex: start, level: 0 }];
  const levels = [];
  
  visited.add(start);
  
  console.log(\`Level order traversal starting from \${start}\`);
  
  while (queue.length > 0) {
    const { vertex: current, level } = queue.shift();
    
    if (!levels[level]) {
      levels[level] = [];
    }
    levels[level].push(current);
    
    console.log(\`Level \${level}: \${current}\`);
    
    const neighbors = graph.getNeighbors(current);
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor.vertex)) {
        visited.add(neighbor.vertex);
        queue.push({ vertex: neighbor.vertex, level: level + 1 });
      }
    }
  }
  
  console.log(\`\\nLevel order result:\`);
  levels.forEach((level, index) => {
    console.log(\`Level \${index}: [\${level.join(', ')}]\`);
  });
  
  return levels;
}

// 3. Check if Graph is Connected
function isConnected(graph) {
  const visited = new Set();
  const queue = [0];
  
  visited.add(0);
  
  while (queue.length > 0) {
    const current = queue.shift();
    const neighbors = graph.getNeighbors(current);
    
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor.vertex)) {
        visited.add(neighbor.vertex);
        queue.push(neighbor.vertex);
      }
    }
  }
  
  const isConnected = visited.size === graph.vertices;
  console.log(\`Graph is \${isConnected ? 'connected' : 'disconnected'}\`);
  console.log(\`Visited \${visited.size} out of \${graph.vertices} vertices\`);
  
  return isConnected;
}

// Test applications
const graph = new GraphList(6);
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
graph.addEdge(3, 5);

console.log("=== Testing BFS Applications ===");
graph.print();

console.log("\\n=== Shortest Path ===");
shortestPathBFS(graph, 0, 5);

console.log("\\n=== Level Order Traversal ===");
levelOrderTraversal(graph, 0);

console.log("\\n=== Connectivity Check ===");
isConnected(graph);`}
        explanation="BFS applications: shortest path in unweighted graphs, level order traversal, connectivity checking, and more. All maintain O(V + E) time complexity."
      />

      <ProblemBlock
        title="Depth First Search (DFS)"
        difficulty="Medium"
        description="Traverse a graph by going as deep as possible before backtracking using recursion or stack."
        solution={`// Depth First Search (DFS)

// Recursive DFS
function dfsRecursive(graph, start, visited = new Set(), result = []) {
  visited.add(start);
  result.push(start);
  
  console.log(\`Visiting vertex \${start}\`);
  console.log(\`Current path: [\${result.join(' -> ')}]\`);
  
  const neighbors = graph.getNeighbors(start);
  console.log(\`Neighbors of \${start}: [\${neighbors.map(n => n.vertex).join(', ')}]\`);
  
  for (const neighbor of neighbors) {
    if (!visited.has(neighbor.vertex)) {
      console.log(\`  Going to unvisited neighbor \${neighbor.vertex}\`);
      dfsRecursive(graph, neighbor.vertex, visited, result);
    } else {
      console.log(\`  Neighbor \${neighbor.vertex} already visited\`);
    }
  }
  
  console.log(\`Backtracking from \${start}\`);
  return result;
}

// Iterative DFS using stack
function dfsIterative(graph, start) {
  const visited = new Set();
  const stack = [start];
  const result = [];
  
  console.log(\`DFS iterative starting from vertex \${start}\`);
  console.log(\`Initial stack: [\${stack.join(', ')}]\`);
  
  while (stack.length > 0) {
    const current = stack.pop();
    
    if (!visited.has(current)) {
      visited.add(current);
      result.push(current);
      
      console.log(\`\\nProcessing vertex \${current}\`);
      console.log(\`Result so far: [\${result.join(', ')}]\`);
      
      const neighbors = graph.getNeighbors(current);
      console.log(\`Neighbors of \${current}: [\${neighbors.map(n => n.vertex).join(', ')}]\`);
      
      // Add neighbors to stack in reverse order for consistent traversal
      for (let i = neighbors.length - 1; i >= 0; i--) {
        const neighbor = neighbors[i];
        if (!visited.has(neighbor.vertex)) {
          stack.push(neighbor.vertex);
          console.log(\`  Added \${neighbor.vertex} to stack\`);
        } else {
          console.log(\`  \${neighbor.vertex} already visited\`);
        }
      }
      
      console.log(\`Updated stack: [\${stack.join(', ')}]\`);
    }
  }
  
  console.log(\`\\nDFS traversal complete: [\${result.join(', ')}]\`);
  return result;
}

// DFS for disconnected graphs
function dfsDisconnected(graph) {
  const visited = new Set();
  const result = [];
  
  console.log("DFS for disconnected graph");
  
  for (let i = 0; i < graph.vertices; i++) {
    if (!visited.has(i)) {
      console.log(\`\\nStarting DFS from unvisited vertex \${i}\`);
      const component = [];
      dfsRecursive(graph, i, visited, component);
      result.push(...component);
    }
  }
  
  console.log(\`\\nComplete DFS traversal: [\${result.join(', ')}]\`);
  return result;
}

// Test DFS
const graph = new GraphList(6);
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
graph.addEdge(3, 5);

console.log("=== Testing DFS ===");
graph.print();

console.log("\\n=== Recursive DFS ===");
dfsRecursive(graph, 0);

console.log("\\n=== Iterative DFS ===");
dfsIterative(graph, 0);`}
        explanation="DFS uses recursion or stack to go deep before backtracking. Time: O(V + E), Space: O(V) for recursion stack. Good for finding paths and cycles."
      />

      <ProblemBlock
        title="Applications of DFS"
        difficulty="Medium"
        description="Common applications of DFS including path finding, cycle detection, and topological sorting."
        solution={`// Applications of DFS

// 1. Find Path between two vertices
function findPathDFS(graph, start, end, visited = new Set(), path = []) {
  visited.add(start);
  path.push(start);
  
  console.log(\`Exploring vertex \${start}, current path: [\${path.join(' -> ')}]\`);
  
  if (start === end) {
    console.log(\`Found path: [\${path.join(' -> ')}]\`);
    return [...path];
  }
  
  const neighbors = graph.getNeighbors(start);
  for (const neighbor of neighbors) {
    if (!visited.has(neighbor.vertex)) {
      const result = findPathDFS(graph, neighbor.vertex, end, visited, path);
      if (result) {
        return result;
      }
    }
  }
  
  // Backtrack
  path.pop();
  visited.delete(start);
  console.log(\`Backtracking from \${start}\`);
  return null;
}

// 2. Detect Cycle in Undirected Graph
function hasCycleUndirected(graph) {
  const visited = new Set();
  
  console.log("Detecting cycle in undirected graph");
  
  for (let i = 0; i < graph.vertices; i++) {
    if (!visited.has(i)) {
      if (hasCycleDFS(graph, i, -1, visited)) {
        console.log("Cycle detected!");
        return true;
      }
    }
  }
  
  console.log("No cycle found");
  return false;
}

function hasCycleDFS(graph, vertex, parent, visited) {
  visited.add(vertex);
  console.log(\`Visiting \${vertex}, parent: \${parent}\`);
  
  const neighbors = graph.getNeighbors(vertex);
  for (const neighbor of neighbors) {
    if (!visited.has(neighbor.vertex)) {
      if (hasCycleDFS(graph, neighbor.vertex, vertex, visited)) {
        return true;
      }
    } else if (neighbor.vertex !== parent) {
      console.log(\`Found back edge: \${vertex} -> \${neighbor.vertex}\`);
      return true;
    }
  }
  
  return false;
}

// 3. Count Connected Components
function countConnectedComponents(graph) {
  const visited = new Set();
  let components = 0;
  
  console.log("Counting connected components");
  
  for (let i = 0; i < graph.vertices; i++) {
    if (!visited.has(i)) {
      components++;
      console.log(\`\\nComponent \${components}: starting from vertex \${i}\`);
      dfsComponent(graph, i, visited);
    }
  }
  
  console.log(\`\\nTotal connected components: \${components}\`);
  return components;
}

function dfsComponent(graph, start, visited) {
  visited.add(start);
  console.log(\`  Visiting \${start}\`);
  
  const neighbors = graph.getNeighbors(start);
  for (const neighbor of neighbors) {
    if (!visited.has(neighbor.vertex)) {
      dfsComponent(graph, neighbor.vertex, visited);
    }
  }
}

// Test applications
const graph = new GraphList(6);
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
graph.addEdge(3, 5);

console.log("=== Testing DFS Applications ===");
graph.print();

console.log("\\n=== Find Path ===");
findPathDFS(graph, 0, 5);

console.log("\\n=== Cycle Detection ===");
hasCycleUndirected(graph);

console.log("\\n=== Count Components ===");
countConnectedComponents(graph);`}
        explanation="DFS applications: path finding, cycle detection, connected components, topological sorting. Uses recursion stack, good for exploring all possibilities."
      />
    </div>
  );
}

function ShortestPathSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-white mb-6">
        Shortest Path Algorithms
      </h2>

      <ProblemBlock
        title="Shortest Path in Unweighted Graph"
        difficulty="Easy"
        description="Find shortest path in unweighted graph using BFS."
        solution={`// Shortest Path in Unweighted Graph using BFS

function shortestPathUnweighted(graph, start, end) {
  const visited = new Set();
  const queue = [{ vertex: start, distance: 0, path: [start] }];
  const distances = new Array(graph.vertices).fill(Infinity);
  
  visited.add(start);
  distances[start] = 0;
  
  console.log(\`Finding shortest path from \${start} to \${end}\`);
  console.log(\`Initial distances: [\${distances.join(', ')}]\`);
  
  while (queue.length > 0) {
    const { vertex: current, distance, path } = queue.shift();
    
    console.log(\`\\nProcessing vertex \${current}, distance: \${distance}\`);
    console.log(\`Current path: [\${path.join(' -> ')}]\`);
    
    if (current === end) {
      console.log(\`\\nFound shortest path: [\${path.join(' -> ')}]\`);
      console.log(\`Shortest distance: \${distance}\`);
      return { path, distance };
    }
    
    const neighbors = graph.getNeighbors(current);
    console.log(\`Neighbors of \${current}: [\${neighbors.map(n => n.vertex).join(', ')}]\`);
    
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor.vertex)) {
        visited.add(neighbor.vertex);
        const newDistance = distance + 1;
        distances[neighbor.vertex] = newDistance;
        
        queue.push({
          vertex: neighbor.vertex,
          distance: newDistance,
          path: [...path, neighbor.vertex]
        });
        
        console.log(\`  Added \${neighbor.vertex} with distance \${newDistance}\`);
      } else {
        console.log(\`  \${neighbor.vertex} already visited\`);
      }
    }
    
    console.log(\`Updated distances: [\${distances.join(', ')}]\`);
  }
  
  console.log(\`No path found from \${start} to \${end}\`);
  return null;
}

// Find shortest distances to all vertices
function shortestDistancesUnweighted(graph, start) {
  const visited = new Set();
  const queue = [{ vertex: start, distance: 0 }];
  const distances = new Array(graph.vertices).fill(Infinity);
  
  visited.add(start);
  distances[start] = 0;
  
  console.log(\`Finding shortest distances from \${start} to all vertices\`);
  
  while (queue.length > 0) {
    const { vertex: current, distance } = queue.shift();
    
    console.log(\`\\nProcessing vertex \${current}, distance: \${distance}\`);
    
    const neighbors = graph.getNeighbors(current);
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor.vertex)) {
        visited.add(neighbor.vertex);
        const newDistance = distance + 1;
        distances[neighbor.vertex] = newDistance;
        
        queue.push({
          vertex: neighbor.vertex,
          distance: newDistance
        });
        
        console.log(\`  Distance to \${neighbor.vertex}: \${newDistance}\`);
      }
    }
  }
  
  console.log(\`\\nShortest distances from \${start}:\`);
  distances.forEach((dist, vertex) => {
    console.log(\`  \${start} -> \${vertex}: \${dist === Infinity ? '∞' : dist}\`);
  });
  
  return distances;
}

// Test shortest path
const graph = new GraphList(6);
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
graph.addEdge(3, 5);
graph.addEdge(4, 5);

console.log("=== Testing Shortest Path in Unweighted Graph ===");
graph.print();

console.log("\\n=== Shortest Path ===");
shortestPathUnweighted(graph, 0, 5);

console.log("\\n=== All Shortest Distances ===");
shortestDistancesUnweighted(graph, 0);`}
        explanation="BFS guarantees shortest path in unweighted graphs. Each level represents distance from source. Time: O(V + E), Space: O(V)."
      />

      <ProblemBlock
        title="Dijkstra's Shortest Path Algorithm"
        difficulty="Hard"
        description="Find shortest paths from source to all vertices in weighted graph using priority queue."
        solution={`// Dijkstra's Shortest Path Algorithm

function dijkstra(graph, start) {
  const distances = new Array(graph.vertices).fill(Infinity);
  const visited = new Set();
  const pq = [{ vertex: start, distance: 0 }];
  
  distances[start] = 0;
  
  console.log(\`Dijkstra's algorithm starting from vertex \${start}\`);
  console.log(\`Initial distances: [\${distances.join(', ')}]\`);
  
  while (pq.length > 0) {
    // Extract minimum distance vertex
    pq.sort((a, b) => a.distance - b.distance);
    const { vertex: current, distance } = pq.shift();
    
    if (visited.has(current)) continue;
    
    visited.add(current);
    console.log(\`\\nProcessing vertex \${current}, distance: \${distance}\`);
    
    const neighbors = graph.getNeighbors(current);
    console.log(\`Neighbors of \${current}: [\${neighbors.map(n => \`\${n.vertex}(\${n.weight})\`).join(', ')}]\`);
    
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor.vertex)) {
        const newDistance = distance + neighbor.weight;
        
        if (newDistance < distances[neighbor.vertex]) {
          distances[neighbor.vertex] = newDistance;
          pq.push({ vertex: neighbor.vertex, distance: newDistance });
          
          console.log(\`  Updated distance to \${neighbor.vertex}: \${newDistance}\`);
        } else {
          console.log(\`  Distance to \${neighbor.vertex} not improved: \${newDistance} >= \${distances[neighbor.vertex]}\`);
        }
      }
    }
    
    console.log(\`Updated distances: [\${distances.join(', ')}]\`);
    console.log(\`Priority queue: [\${pq.map(p => \`\${p.vertex}(\${p.distance})\`).join(', ')}]\`);
  }
  
  console.log(\`\\nFinal shortest distances from \${start}:\`);
  distances.forEach((dist, vertex) => {
    console.log(\`  \${start} -> \${vertex}: \${dist === Infinity ? '∞' : dist}\`);
  });
  
  return distances;
}

// Dijkstra with path reconstruction
function dijkstraWithPath(graph, start, end) {
  const distances = new Array(graph.vertices).fill(Infinity);
  const parent = new Array(graph.vertices).fill(-1);
  const visited = new Set();
  const pq = [{ vertex: start, distance: 0 }];
  
  distances[start] = 0;
  
  console.log(\`Dijkstra with path from \${start} to \${end}\`);
  
  while (pq.length > 0) {
    pq.sort((a, b) => a.distance - b.distance);
    const { vertex: current, distance } = pq.shift();
    
    if (visited.has(current)) continue;
    visited.add(current);
    
    if (current === end) break;
    
    const neighbors = graph.getNeighbors(current);
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor.vertex)) {
        const newDistance = distance + neighbor.weight;
        
        if (newDistance < distances[neighbor.vertex]) {
          distances[neighbor.vertex] = newDistance;
          parent[neighbor.vertex] = current;
          pq.push({ vertex: neighbor.vertex, distance: newDistance });
        }
      }
    }
  }
  
  // Reconstruct path
  const path = [];
  let current = end;
  while (current !== -1) {
    path.unshift(current);
    current = parent[current];
  }
  
  console.log(\`Shortest path from \${start} to \${end}: [\${path.join(' -> ')}]\`);
  console.log(\`Shortest distance: \${distances[end]}\`);
  
  return { path, distance: distances[end] };
}

// Test Dijkstra
const graph = new GraphList(6);
graph.addEdge(0, 1, 4);
graph.addEdge(0, 2, 2);
graph.addEdge(1, 2, 1);
graph.addEdge(1, 3, 5);
graph.addEdge(2, 3, 8);
graph.addEdge(2, 4, 10);
graph.addEdge(3, 4, 2);
graph.addEdge(3, 5, 6);
graph.addEdge(4, 5, 3);

console.log("=== Testing Dijkstra's Algorithm ===");
graph.print();

console.log("\\n=== Dijkstra All Distances ===");
dijkstra(graph, 0);

console.log("\\n=== Dijkstra with Path ===");
dijkstraWithPath(graph, 0, 5);`}
        explanation="Dijkstra's algorithm finds shortest paths in weighted graphs with non-negative weights. Uses priority queue to always process closest unvisited vertex. Time: O((V + E) log V), Space: O(V)."
      />

      <ProblemBlock
        title="Bellman-Ford Shortest Path Algorithm"
        difficulty="Hard"
        description="Find shortest paths in weighted graph that may have negative weights, detects negative cycles."
        solution={`// Bellman-Ford Shortest Path Algorithm

function bellmanFord(graph, start) {
  const distances = new Array(graph.vertices).fill(Infinity);
  const parent = new Array(graph.vertices).fill(-1);
  
  distances[start] = 0;
  
  console.log(\`Bellman-Ford algorithm starting from vertex \${start}\`);
  console.log(\`Initial distances: [\${distances.join(', ')}]\`);
  
  // Relax all edges V-1 times
  for (let i = 0; i < graph.vertices - 1; i++) {
    console.log(\`\\nIteration \${i + 1}:\`);
    let relaxed = false;
    
    for (let u = 0; u < graph.vertices; u++) {
      const neighbors = graph.getNeighbors(u);
      for (const neighbor of neighbors) {
        const v = neighbor.vertex;
        const weight = neighbor.weight;
        
        if (distances[u] !== Infinity && distances[u] + weight < distances[v]) {
          distances[v] = distances[u] + weight;
          parent[v] = u;
          relaxed = true;
          console.log(\`  Relaxed edge (\${u}, \${v}): distance[\${v}] = \${distances[v]}\`);
        }
      }
    }
    
    if (!relaxed) {
      console.log(\`  No relaxations in iteration \${i + 1}, algorithm converged\`);
      break;
    }
    
    console.log(\`  Distances after iteration \${i + 1}: [\${distances.join(', ')}]\`);
  }
  
  // Check for negative cycles
  console.log(\`\\nChecking for negative cycles:\`);
  let hasNegativeCycle = false;
  
  for (let u = 0; u < graph.vertices; u++) {
    const neighbors = graph.getNeighbors(u);
    for (const neighbor of neighbors) {
      const v = neighbor.vertex;
      const weight = neighbor.weight;
      
      if (distances[u] !== Infinity && distances[u] + weight < distances[v]) {
        console.log(\`  Negative cycle detected: edge (\${u}, \${v}) can still be relaxed\`);
        hasNegativeCycle = true;
        break;
      }
    }
    if (hasNegativeCycle) break;
  }
  
  if (hasNegativeCycle) {
    console.log(\`  Graph contains negative cycle\`);
  } else {
    console.log(\`  No negative cycle detected\`);
  }
  
  console.log(\`\\nFinal shortest distances from \${start}:\`);
  distances.forEach((dist, vertex) => {
    console.log(\`  \${start} -> \${vertex}: \${dist === Infinity ? '∞' : dist}\`);
  });
  
  return { distances, hasNegativeCycle, parent };
}

// Reconstruct path from Bellman-Ford
function reconstructPath(parent, start, end) {
  const path = [];
  let current = end;
  
  while (current !== -1) {
    path.unshift(current);
    current = parent[current];
  }
  
  if (path[0] !== start) {
    console.log(\`No path from \${start} to \${end}\`);
    return null;
  }
  
  console.log(\`Path from \${start} to \${end}: [\${path.join(' -> ')}]\`);
  return path;
}

// Test Bellman-Ford
const graph = new GraphList(5);
graph.addEdge(0, 1, -1);
graph.addEdge(0, 2, 4);
graph.addEdge(1, 2, 3);
graph.addEdge(1, 3, 2);
graph.addEdge(1, 4, 2);
graph.addEdge(3, 2, 5);
graph.addEdge(3, 1, 1);
graph.addEdge(4, 3, -3);

console.log("=== Testing Bellman-Ford Algorithm ===");
graph.print();

const result = bellmanFord(graph, 0);
if (!result.hasNegativeCycle) {
  console.log("\\n=== Path Reconstruction ===");
  reconstructPath(result.parent, 0, 4);
}`}
        explanation="Bellman-Ford handles negative weights and detects negative cycles. Relaxes all edges V-1 times. Time: O(VE), Space: O(V). Can detect negative cycles."
      />
    </div>
  );
}

function MSTSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-white mb-6">
        Minimum Spanning Tree Algorithms
      </h2>

      <ProblemBlock
        title="Prim's Algorithm"
        difficulty="Hard"
        description="Find minimum spanning tree using greedy approach with priority queue."
        solution={`// Prim's Algorithm for Minimum Spanning Tree

function primMST(graph) {
  const mst = [];
  const key = new Array(graph.vertices).fill(Infinity);
  const parent = new Array(graph.vertices).fill(-1);
  const inMST = new Array(graph.vertices).fill(false);
  const pq = [{ vertex: 0, weight: 0 }];
  
  key[0] = 0;
  
  console.log("Prim's Algorithm for MST");
  console.log("Initial key values:", key);
  
  while (pq.length > 0) {
    // Extract minimum weight vertex
    pq.sort((a, b) => a.weight - b.weight);
    const { vertex: u, weight } = pq.shift();
    
    if (inMST[u]) continue;
    
    inMST[u] = true;
    console.log(\`\\nAdding vertex \${u} to MST with weight \${weight}\`);
    
    if (parent[u] !== -1) {
      mst.push({ from: parent[u], to: u, weight });
      console.log(\`  Added edge (\${parent[u]}, \${u}) with weight \${weight}\`);
    }
    
    const neighbors = graph.getNeighbors(u);
    console.log(\`  Checking neighbors of \${u}: [\${neighbors.map(n => \`\${n.vertex}(\${n.weight})\`).join(', ')}]\`);
    
    for (const neighbor of neighbors) {
      const v = neighbor.vertex;
      const weight = neighbor.weight;
      
      if (!inMST[v] && weight < key[v]) {
        key[v] = weight;
        parent[v] = u;
        pq.push({ vertex: v, weight });
        console.log(\`    Updated key[\${v}] = \${weight}, parent[\${v}] = \${u}\`);
      } else if (inMST[v]) {
        console.log(\`    \${v} already in MST\`);
      } else {
        console.log(\`    Weight \${weight} >= key[\${v}] = \${key[v]}\`);
      }
    }
    
    console.log(\`  Updated key values: [\${key.join(', ')}]\`);
  }
  
  const totalWeight = mst.reduce((sum, edge) => sum + edge.weight, 0);
  console.log(\`\\nMST edges: [\${mst.map(e => \`(\${e.from}, \${e.to}): \${e.weight}\`).join(', ')}]\`);
  console.log(\`Total MST weight: \${totalWeight}\`);
  
  return { mst, totalWeight };
}

// Test Prim's Algorithm
const graph = new GraphList(6);
graph.addEdge(0, 1, 4);
graph.addEdge(0, 2, 2);
graph.addEdge(1, 2, 1);
graph.addEdge(1, 3, 5);
graph.addEdge(2, 3, 8);
graph.addEdge(2, 4, 10);
graph.addEdge(3, 4, 2);
graph.addEdge(3, 5, 6);
graph.addEdge(4, 5, 3);

console.log("=== Testing Prim's Algorithm ===");
graph.print();
primMST(graph);`}
        explanation="Prim's algorithm builds MST by always adding minimum weight edge connecting MST to remaining vertices. Time: O(E log V), Space: O(V)."
      />

      <ProblemBlock
        title="Kruskal's Algorithm"
        difficulty="Hard"
        description="Find minimum spanning tree using union-find data structure."
        solution={`// Kruskal's Algorithm for Minimum Spanning Tree

class UnionFind {
  constructor(n) {
    this.parent = Array.from({length: n}, (_, i) => i);
    this.rank = new Array(n).fill(0);
  }

  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]); // Path compression
    }
    return this.parent[x];
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    
    if (rootX === rootY) return false;
    
    // Union by rank
    if (this.rank[rootX] < this.rank[rootY]) {
      this.parent[rootX] = rootY;
    } else if (this.rank[rootX] > this.rank[rootY]) {
      this.parent[rootY] = rootX;
    } else {
      this.parent[rootY] = rootX;
      this.rank[rootX]++;
    }
    
    return true;
  }
}

function kruskalMST(graph) {
  // Get all edges
  const edges = [];
  for (let u = 0; u < graph.vertices; u++) {
    const neighbors = graph.getNeighbors(u);
    for (const neighbor of neighbors) {
      if (u < neighbor.vertex) { // Avoid duplicate edges
        edges.push({ from: u, to: neighbor.vertex, weight: neighbor.weight });
      }
    }
  }
  
  // Sort edges by weight
  edges.sort((a, b) => a.weight - b.weight);
  
  console.log("Kruskal's Algorithm for MST");
  console.log("Sorted edges:", edges.map(e => \`(\${e.from}, \${e.to}): \${e.weight}\`).join(', '));
  
  const mst = [];
  const uf = new UnionFind(graph.vertices);
  
  for (const edge of edges) {
    console.log(\`\\nChecking edge (\${edge.from}, \${edge.to}) with weight \${edge.weight}\`);
    
    if (uf.union(edge.from, edge.to)) {
      mst.push(edge);
      console.log(\`  Added edge (\${edge.from}, \${edge.to}) to MST\`);
      console.log(\`  MST edges so far: [\${mst.map(e => \`(\${e.from}, \${e.to}): \${e.weight}\`).join(', ')}]\`);
    } else {
      console.log(\`  Edge (\${edge.from}, \${edge.to}) creates cycle, skipping\`);
    }
    
    if (mst.length === graph.vertices - 1) {
      console.log(\`  MST complete with \${graph.vertices - 1} edges\`);
      break;
    }
  }
  
  const totalWeight = mst.reduce((sum, edge) => sum + edge.weight, 0);
  console.log(\`\\nFinal MST edges: [\${mst.map(e => \`(\${e.from}, \${e.to}): \${e.weight}\`).join(', ')}]\`);
  console.log(\`Total MST weight: \${totalWeight}\`);
  
  return { mst, totalWeight };
}

// Test Kruskal's Algorithm
const graph = new GraphList(6);
graph.addEdge(0, 1, 4);
graph.addEdge(0, 2, 2);
graph.addEdge(1, 2, 1);
graph.addEdge(1, 3, 5);
graph.addEdge(2, 3, 8);
graph.addEdge(2, 4, 10);
graph.addEdge(3, 4, 2);
graph.addEdge(3, 5, 6);
graph.addEdge(4, 5, 3);

console.log("=== Testing Kruskal's Algorithm ===");
graph.print();
kruskalMST(graph);`}
        explanation="Kruskal's algorithm sorts all edges by weight and adds them if they don't create cycle. Uses union-find for cycle detection. Time: O(E log E), Space: O(V)."
      />
    </div>
  );
}

function AdvancedSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-white mb-6">
        Advanced Graph Algorithms
      </h2>

      <ProblemBlock
        title="Detect Cycle in Directed Graph"
        difficulty="Hard"
        description="Detect cycle in directed graph using DFS with three colors (white, gray, black)."
        solution={`// Detect Cycle in Directed Graph

function hasCycleDirected(graph) {
  const WHITE = 0, GRAY = 1, BLACK = 2;
  const color = new Array(graph.vertices).fill(WHITE);
  
  console.log("Detecting cycle in directed graph");
  console.log("Colors: 0=White (unvisited), 1=Gray (visiting), 2=Black (visited)");
  
  for (let i = 0; i < graph.vertices; i++) {
    if (color[i] === WHITE) {
      console.log(\`\\nStarting DFS from white vertex \${i}\`);
      if (hasCycleDFS(graph, i, color)) {
        console.log("Cycle detected!");
        return true;
      }
    }
  }
  
  console.log("No cycle found");
  return false;
}

function hasCycleDFS(graph, vertex, color) {
  color[vertex] = GRAY;
  console.log(\`  Coloring vertex \${vertex} gray (visiting)\`);
  
  const neighbors = graph.getNeighbors(vertex);
  console.log(\`  Neighbors of \${vertex}: [\${neighbors.map(n => n.vertex).join(', ')}]\`);
  
  for (const neighbor of neighbors) {
    const v = neighbor.vertex;
    console.log(\`    Checking neighbor \${v} (color: \${color[v]})\`);
    
    if (color[v] === GRAY) {
      console.log(\`    Found back edge: \${vertex} -> \${v} (both gray)\`);
      return true;
    }
    
    if (color[v] === WHITE && hasCycleDFS(graph, v, color)) {
      return true;
    }
  }
  
  color[vertex] = BLACK;
  console.log(\`  Coloring vertex \${vertex} black (visited)\`);
  return false;
}

// Test cycle detection
const graph = new GraphList(4);
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 2);
graph.addEdge(2, 0); // This creates a cycle
graph.addEdge(2, 3);

console.log("=== Testing Cycle Detection in Directed Graph ===");
graph.print();
hasCycleDirected(graph);`}
        explanation="Use three colors: white (unvisited), gray (currently visiting), black (completely visited). Back edge to gray vertex indicates cycle. Time: O(V + E), Space: O(V)."
      />

      <ProblemBlock
        title="Topological Sorting"
        difficulty="Medium"
        description="Linear ordering of vertices in directed acyclic graph (DAG) using Kahn's algorithm or DFS."
        solution={`// Topological Sorting

// Kahn's Algorithm (BFS-based)
function topologicalSortKahn(graph) {
  const inDegree = new Array(graph.vertices).fill(0);
  const queue = [];
  const result = [];
  
  // Calculate in-degrees
  for (let u = 0; u < graph.vertices; u++) {
    const neighbors = graph.getNeighbors(u);
    for (const neighbor of neighbors) {
      inDegree[neighbor.vertex]++;
    }
  }
  
  console.log("Topological Sort using Kahn's Algorithm");
  console.log("In-degrees:", inDegree);
  
  // Add vertices with in-degree 0 to queue
  for (let i = 0; i < graph.vertices; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
      console.log(\`Added vertex \${i} to queue (in-degree = 0)\`);
    }
  }
  
  console.log(\`Initial queue: [\${queue.join(', ')}]\`);
  
  while (queue.length > 0) {
    const u = queue.shift();
    result.push(u);
    
    console.log(\`\\nProcessing vertex \${u}\`);
    console.log(\`Result so far: [\${result.join(', ')}]\`);
    
    const neighbors = graph.getNeighbors(u);
    console.log(\`Neighbors of \${u}: [\${neighbors.map(n => n.vertex).join(', ')}]\`);
    
    for (const neighbor of neighbors) {
      const v = neighbor.vertex;
      inDegree[v]--;
      console.log(\`  Decreased in-degree of \${v} to \${inDegree[v]}\`);
      
      if (inDegree[v] === 0) {
        queue.push(v);
        console.log(\`  Added \${v} to queue (in-degree = 0)\`);
      }
    }
    
    console.log(\`Updated queue: [\${queue.join(', ')}]\`);
  }
  
  if (result.length !== graph.vertices) {
    console.log("Graph contains cycle, topological sort not possible");
    return null;
  }
  
  console.log(\`\\nTopological order: [\${result.join(', ')}]\`);
  return result;
}

// DFS-based Topological Sort
function topologicalSortDFS(graph) {
  const visited = new Set();
  const stack = [];
  
  console.log("Topological Sort using DFS");
  
  for (let i = 0; i < graph.vertices; i++) {
    if (!visited.has(i)) {
      console.log(\`\\nStarting DFS from unvisited vertex \${i}\`);
      topologicalDFS(graph, i, visited, stack);
    }
  }
  
  const result = [];
  while (stack.length > 0) {
    result.push(stack.pop());
  }
  
  console.log(\`\\nTopological order: [\${result.join(', ')}]\`);
  return result;
}

function topologicalDFS(graph, vertex, visited, stack) {
  visited.add(vertex);
  console.log(\`  Visiting vertex \${vertex}\`);
  
  const neighbors = graph.getNeighbors(vertex);
  for (const neighbor of neighbors) {
    if (!visited.has(neighbor.vertex)) {
      console.log(\`    Going to unvisited neighbor \${neighbor.vertex}\`);
      topologicalDFS(graph, neighbor.vertex, visited, stack);
    } else {
      console.log(\`    Neighbor \${neighbor.vertex} already visited\`);
    }
  }
  
  console.log(\`  Adding \${vertex} to stack\`);
  stack.push(vertex);
}

// Test topological sort
const graph = new GraphList(6);
graph.addEdge(5, 2);
graph.addEdge(5, 0);
graph.addEdge(4, 0);
graph.addEdge(4, 1);
graph.addEdge(2, 3);
graph.addEdge(3, 1);

console.log("=== Testing Topological Sorting ===");
graph.print();

console.log("\\n=== Kahn's Algorithm ===");
topologicalSortKahn(graph);

console.log("\\n=== DFS-based ===");
topologicalSortDFS(graph);`}
        explanation="Kahn's algorithm: remove vertices with in-degree 0. DFS: add vertices to stack after processing all neighbors. Both work only on DAGs. Time: O(V + E), Space: O(V)."
      />

      <ProblemBlock
        title="Kosaraju's Algorithm"
        difficulty="Hard"
        description="Find strongly connected components in directed graph using two DFS passes."
        solution={`// Kosaraju's Algorithm for Strongly Connected Components

function kosarajuSCC(graph) {
  const visited = new Set();
  const stack = [];
  const sccs = [];
  
  console.log("Kosaraju's Algorithm for Strongly Connected Components");
  
  // Step 1: Fill stack with vertices in order of finishing times
  console.log("\\nStep 1: First DFS to fill stack");
  for (let i = 0; i < graph.vertices; i++) {
    if (!visited.has(i)) {
      console.log(\`Starting DFS from vertex \${i}\`);
      fillOrder(graph, i, visited, stack);
    }
  }
  
  console.log(\`Stack after first DFS: [\${stack.join(', ')}]\`);
  
  // Step 2: Create transpose graph
  console.log("\\nStep 2: Creating transpose graph");
  const transpose = getTranspose(graph);
  transpose.print();
  
  // Step 3: Second DFS on transpose graph
  console.log("\\nStep 3: Second DFS on transpose graph");
  visited.clear();
  
  while (stack.length > 0) {
    const vertex = stack.pop();
    
    if (!visited.has(vertex)) {
      const scc = [];
      console.log(\`\\nStarting DFS from vertex \${vertex} in transpose\`);
      dfsTranspose(transpose, vertex, visited, scc);
      sccs.push(scc);
      console.log(\`Found SCC: [\${scc.join(', ')}]\`);
    }
  }
  
  console.log(\`\\nAll Strongly Connected Components:\`);
  sccs.forEach((scc, index) => {
    console.log(\`SCC \${index + 1}: [\${scc.join(', ')}]\`);
  });
  
  return sccs;
}

function fillOrder(graph, vertex, visited, stack) {
  visited.add(vertex);
  console.log(\`  Visiting vertex \${vertex}\`);
  
  const neighbors = graph.getNeighbors(vertex);
  for (const neighbor of neighbors) {
    if (!visited.has(neighbor.vertex)) {
      console.log(\`    Going to unvisited neighbor \${neighbor.vertex}\`);
      fillOrder(graph, neighbor.vertex, visited, stack);
    }
  }
  
  console.log(\`  Adding \${vertex} to stack\`);
  stack.push(vertex);
}

function getTranspose(graph) {
  const transpose = new GraphList(graph.vertices);
  
  for (let u = 0; u < graph.vertices; u++) {
    const neighbors = graph.getNeighbors(u);
    for (const neighbor of neighbors) {
      // Reverse the edge direction
      transpose.addEdge(neighbor.vertex, u, neighbor.weight);
    }
  }
  
  return transpose;
}

function dfsTranspose(transpose, vertex, visited, scc) {
  visited.add(vertex);
  scc.push(vertex);
  console.log(\`    Visiting vertex \${vertex} in transpose\`);
  
  const neighbors = transpose.getNeighbors(vertex);
  for (const neighbor of neighbors) {
    if (!visited.has(neighbor.vertex)) {
      dfsTranspose(transpose, neighbor.vertex, visited, scc);
    }
  }
}

// Test Kosaraju's Algorithm
const graph = new GraphList(8);
graph.addEdge(0, 1);
graph.addEdge(1, 2);
graph.addEdge(2, 0);
graph.addEdge(2, 3);
graph.addEdge(3, 4);
graph.addEdge(4, 5);
graph.addEdge(5, 6);
graph.addEdge(6, 4);
graph.addEdge(6, 7);

console.log("=== Testing Kosaraju's Algorithm ===");
graph.print();
kosarajuSCC(graph);`}
        explanation="Kosaraju's algorithm finds SCCs using two DFS passes: 1) Fill stack with finish times, 2) DFS on transpose graph. Time: O(V + E), Space: O(V)."
      />

      <ProblemBlock
        title="Articulation Points"
        difficulty="Hard"
        description="Find articulation points (cut vertices) in undirected graph using DFS."
        solution={`// Articulation Points (Cut Vertices)

function findArticulationPoints(graph) {
  const visited = new Set();
  const disc = new Array(graph.vertices).fill(-1);
  const low = new Array(graph.vertices).fill(-1);
  const parent = new Array(graph.vertices).fill(-1);
  const ap = new Array(graph.vertices).fill(false);
  let time = 0;
  
  console.log("Finding Articulation Points");
  
  for (let i = 0; i < graph.vertices; i++) {
    if (!visited.has(i)) {
      console.log(\`\\nStarting DFS from vertex \${i}\`);
      findAPDFS(graph, i, visited, disc, low, parent, ap, time);
    }
  }
  
  const articulationPoints = [];
  for (let i = 0; i < graph.vertices; i++) {
    if (ap[i]) {
      articulationPoints.push(i);
    }
  }
  
  console.log(\`\\nArticulation Points: [\${articulationPoints.join(', ')}]\`);
  return articulationPoints;
}

function findAPDFS(graph, u, visited, disc, low, parent, ap, time) {
  visited.add(u);
  disc[u] = low[u] = ++time;
  let children = 0;
  
  console.log(\`  Visiting vertex \${u}, disc[\${u}] = low[\${u}] = \${time}\`);
  
  const neighbors = graph.getNeighbors(u);
  for (const neighbor of neighbors) {
    const v = neighbor.vertex;
    
    if (!visited.has(v)) {
      children++;
      parent[v] = u;
      console.log(\`    Going to unvisited child \${v}\`);
      findAPDFS(graph, v, visited, disc, low, parent, ap, time);
      
      // Check if subtree rooted at v has connection to ancestor of u
      low[u] = Math.min(low[u], low[v]);
      console.log(\`    Updated low[\${u}] = \${low[u]}\`);
      
      // u is articulation point if:
      // 1. u is root and has 2+ children
      // 2. u is not root and low[v] >= disc[u]
      if (parent[u] === -1 && children > 1) {
        ap[u] = true;
        console.log(\`    \${u} is AP (root with \${children} children)\`);
      } else if (parent[u] !== -1 && low[v] >= disc[u]) {
        ap[u] = true;
        console.log(\`    \${u} is AP (low[\${v}] >= disc[\${u}])\`);
      }
    } else if (v !== parent[u]) {
      // Back edge to ancestor
      low[u] = Math.min(low[u], disc[v]);
      console.log(\`    Back edge to \${v}, updated low[\${u}] = \${low[u]}\`);
    }
  }
}

// Test Articulation Points
const graph = new GraphList(7);
graph.addEdge(0, 1);
graph.addEdge(1, 2);
graph.addEdge(2, 0);
graph.addEdge(1, 3);
graph.addEdge(1, 4);
graph.addEdge(1, 6);
graph.addEdge(3, 5);
graph.addEdge(4, 5);

console.log("=== Testing Articulation Points ===");
graph.print();
findArticulationPoints(graph);`}
        explanation="Articulation points are vertices whose removal increases number of connected components. Use DFS with discovery time and low values. Time: O(V + E), Space: O(V)."
      />

      <ProblemBlock
        title="Bridges in Graph"
        difficulty="Hard"
        description="Find bridges (cut edges) in undirected graph using DFS."
        solution={`// Bridges in Graph (Cut Edges)

function findBridges(graph) {
  const visited = new Set();
  const disc = new Array(graph.vertices).fill(-1);
  const low = new Array(graph.vertices).fill(-1);
  const parent = new Array(graph.vertices).fill(-1);
  const bridges = [];
  let time = 0;
  
  console.log("Finding Bridges");
  
  for (let i = 0; i < graph.vertices; i++) {
    if (!visited.has(i)) {
      console.log(\`\\nStarting DFS from vertex \${i}\`);
      findBridgesDFS(graph, i, visited, disc, low, parent, bridges, time);
    }
  }
  
  console.log(\`\\nBridges: [\${bridges.map(b => \`(\${b[0]}, \${b[1]})\`).join(', ')}]\`);
  return bridges;
}

function findBridgesDFS(graph, u, visited, disc, low, parent, bridges, time) {
  visited.add(u);
  disc[u] = low[u] = ++time;
  
  console.log(\`  Visiting vertex \${u}, disc[\${u}] = low[\${u}] = \${time}\`);
  
  const neighbors = graph.getNeighbors(u);
  for (const neighbor of neighbors) {
    const v = neighbor.vertex;
    
    if (!visited.has(v)) {
      parent[v] = u;
      console.log(\`    Going to unvisited child \${v}\`);
      findBridgesDFS(graph, v, visited, disc, low, parent, bridges, time);
      
      // Check if subtree rooted at v has connection to ancestor of u
      low[u] = Math.min(low[u], low[v]);
      console.log(\`    Updated low[\${u}] = \${low[u]}\`);
      
      // Edge (u,v) is bridge if low[v] > disc[u]
      if (low[v] > disc[u]) {
        bridges.push([u, v]);
        console.log(\`    Bridge found: (\${u}, \${v})\`);
      }
    } else if (v !== parent[u]) {
      // Back edge to ancestor
      low[u] = Math.min(low[u], disc[v]);
      console.log(\`    Back edge to \${v}, updated low[\${u}] = \${low[u]}\`);
    }
  }
}

// Test Bridges
const graph = new GraphList(7);
graph.addEdge(0, 1);
graph.addEdge(1, 2);
graph.addEdge(2, 0);
graph.addEdge(1, 3);
graph.addEdge(1, 4);
graph.addEdge(1, 6);
graph.addEdge(3, 5);
graph.addEdge(4, 5);

console.log("=== Testing Bridges ===");
graph.print();
findBridges(graph);`}
        explanation="Bridges are edges whose removal increases number of connected components. Use DFS with discovery time and low values. Edge (u,v) is bridge if low[v] > disc[u]. Time: O(V + E), Space: O(V)."
      />
    </div>
  );
}
