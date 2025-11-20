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
          {approach && (
            <div className="flex gap-2 mb-4 border-b border-gray-700">
              <button
                onClick={() => setActiveTab("solution")}
                className={`px-4 py-2 font-semibold transition-colors ${
                  activeTab === "solution"
                    ? "text-green-300 border-b-2 border-green-300"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                Solution
              </button>
              <button
                onClick={() => setActiveTab("approach")}
                className={`px-4 py-2 font-semibold transition-colors ${
                  activeTab === "approach"
                    ? "text-green-300 border-b-2 border-green-300"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                Approach
              </button>
            </div>
          )}

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

function ApproachTab({ approach }) {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-xl p-6 border border-green-500/30">
        <h3 className="text-2xl font-bold text-white mb-2">
          🎯 Problem Solving Approach
        </h3>
        <p className="text-gray-300 text-sm">
          Applying the systematic 5-step framework for this graph problem
        </p>
      </div>

      {approach.steps?.map((step, index) => (
        <div
          key={index}
          className="bg-gray-800 rounded-lg p-5 border border-gray-700"
        >
          <div className="flex items-start gap-4">
            <div className="bg-green-500 text-gray-900 rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
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
        <div className="bg-teal-900/20 border border-teal-500/30 rounded-lg p-4">
          <h4 className="text-lg font-semibold text-teal-200 mb-2">
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
        <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
          <h4 className="text-lg font-semibold text-blue-200 mb-2">
            🎨 Pattern Identified
          </h4>
          <p className="text-gray-300">{approach.pattern}</p>
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
        solutions={{
          JavaScript: `// Graph Representation using Adjacency Matrix

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
console.log("Weight of edge (0,1):", graph.getWeight(0, 1));`,
          Java: `import java.util.*;

class Edge {
    int vertex;
    int weight;
    
    Edge(int vertex, int weight) {
        this.vertex = vertex;
        this.weight = weight;
    }
}

// Graph Representation using Adjacency Matrix
class GraphMatrix {
    private int vertices;
    private int[][] matrix;
    
    public GraphMatrix(int vertices) {
        this.vertices = vertices;
        this.matrix = new int[vertices][vertices];
    }
    
    // Add edge between vertices u and v
    public void addEdge(int u, int v, int weight) {
        matrix[u][v] = weight;
        // For undirected graph, also add edge from v to u
        matrix[v][u] = weight;
    }
    
    // Remove edge between vertices u and v
    public void removeEdge(int u, int v) {
        matrix[u][v] = 0;
        matrix[v][u] = 0;
    }
    
    // Check if edge exists between u and v
    public boolean hasEdge(int u, int v) {
        return matrix[u][v] != 0;
    }
    
    // Get weight of edge between u and v
    public int getWeight(int u, int v) {
        return matrix[u][v];
    }
    
    // Get all neighbors of vertex u
    public List<Edge> getNeighbors(int u) {
        List<Edge> neighbors = new ArrayList<>();
        for (int v = 0; v < vertices; v++) {
            if (matrix[u][v] != 0) {
                neighbors.add(new Edge(v, matrix[u][v]));
            }
        }
        return neighbors;
    }
    
    // Print the adjacency matrix
    public void print() {
        System.out.println("Adjacency Matrix:");
        System.out.print("  ");
        for (int i = 0; i < vertices; i++) {
            System.out.print(i + "  ");
        }
        System.out.println();
        
        for (int i = 0; i < vertices; i++) {
            System.out.print(i + " ");
            for (int j = 0; j < vertices; j++) {
                System.out.print(matrix[i][j] + "  ");
            }
            System.out.println();
        }
    }
    
    public static void main(String[] args) {
        GraphMatrix graph = new GraphMatrix(4);
        graph.addEdge(0, 1, 5);
        graph.addEdge(0, 2, 3);
        graph.addEdge(1, 2, 2);
        graph.addEdge(2, 3, 1);
        
        System.out.println("=== Adjacency Matrix Representation ===");
        graph.print();
        System.out.println("Neighbors of vertex 0: " + graph.getNeighbors(0));
        System.out.println("Edge from 0 to 1 exists: " + graph.hasEdge(0, 1));
        System.out.println("Weight of edge (0,1): " + graph.getWeight(0, 1));
    }
}`,
        }}
        explanation="Adjacency matrix uses O(V²) space. Checking edge existence is O(1), but finding all neighbors is O(V). Good for dense graphs."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Need representation supporting fast edge lookups and weighted/unweighted edges.",
              details: [
                "Best suited for dense graphs or when edge queries dominate",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Use V×V matrix where cell [i][j] stores weight (or 1) if edge i→j exists, else 0.",
              keywords: ["adjacency matrix", "dense graph", "O(V²) memory"],
              details: [
                "Directed graphs use asymmetric entries; undirected graphs mirror cells",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description: "2D array initialized to 0 (or Infinity).",
              details: [
                "Edge insertion simply sets matrix[u][v] = weight (and matrix[v][u] if undirected)",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Add operations for add/remove edge, hasEdge, getNeighbors, print.",
              details: [
                "hasEdge(u,v) is O(1); getNeighbors(u) scans row u (O(V))",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Great for Floyd-Warshall or dense Dijkstra; switch to adjacency list for sparse graphs.",
              details: ["Space O(V²); enumerating neighbors costs O(V)"],
            },
          ],
          pattern: "Adjacency Matrix Representation",
          complexity: {
            time: "Edge insert/remove/lookup O(1); neighbor iteration O(V)",
            space: "O(V²)",
          },
        }}
      />

      <ProblemBlock
        title="Graph Representation (Adjacency List)"
        difficulty="Easy"
        description="Represent a graph using an array of lists where each list contains neighbors of a vertex."
        solutions={{
          JavaScript: `// Graph Representation using Adjacency List

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
console.log("Weight of edge (0,1):", graph.getWeight(0, 1));`,
          Java: `import java.util.*;

class Edge {
    int vertex;
    int weight;
    
    Edge(int vertex, int weight) {
        this.vertex = vertex;
        this.weight = weight;
    }
    
    @Override
    public String toString() {
        return vertex + "(" + weight + ")";
    }
}

// Graph Representation using Adjacency List
class GraphList {
    private int vertices;
    private List<List<Edge>> adjList;
    
    public GraphList(int vertices) {
        this.vertices = vertices;
        this.adjList = new ArrayList<>();
        for (int i = 0; i < vertices; i++) {
            adjList.add(new ArrayList<>());
        }
    }
    
    // Add edge between vertices u and v
    public void addEdge(int u, int v, int weight) {
        adjList.get(u).add(new Edge(v, weight));
        // For undirected graph, also add edge from v to u
        adjList.get(v).add(new Edge(u, weight));
    }
    
    // Remove edge between vertices u and v
    public void removeEdge(int u, int v) {
        adjList.get(u).removeIf(edge -> edge.vertex == v);
        adjList.get(v).removeIf(edge -> edge.vertex == u);
    }
    
    // Check if edge exists between u and v
    public boolean hasEdge(int u, int v) {
        return adjList.get(u).stream().anyMatch(edge -> edge.vertex == v);
    }
    
    // Get weight of edge between u and v
    public int getWeight(int u, int v) {
        return adjList.get(u).stream()
                .filter(edge -> edge.vertex == v)
                .findFirst()
                .map(edge -> edge.weight)
                .orElse(0);
    }
    
    // Get all neighbors of vertex u
    public List<Edge> getNeighbors(int u) {
        return adjList.get(u);
    }
    
    // Print the adjacency list
    public void print() {
        System.out.println("Adjacency List:");
        for (int i = 0; i < vertices; i++) {
            System.out.println(i + ": " + adjList.get(i));
        }
    }
    
    public static void main(String[] args) {
        GraphList graph = new GraphList(4);
        graph.addEdge(0, 1, 5);
        graph.addEdge(0, 2, 3);
        graph.addEdge(1, 2, 2);
        graph.addEdge(2, 3, 1);
        
        System.out.println("=== Adjacency List Representation ===");
        graph.print();
        System.out.println("Neighbors of vertex 0: " + graph.getNeighbors(0));
        System.out.println("Edge from 0 to 1 exists: " + graph.hasEdge(0, 1));
        System.out.println("Weight of edge (0,1): " + graph.getWeight(0, 1));
    }
}`,
        }}
        explanation="Adjacency list uses O(V + E) space. Finding all neighbors is O(degree), checking edge existence is O(degree). Good for sparse graphs."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Need memory-efficient representation for sparse graphs while keeping neighbor iteration fast.",
              details: ["Store only existing edges; no V×V matrix"],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Array (or map) of adjacency lists: each vertex has list of outgoing edges (neighbor, weight).",
              keywords: ["adjacency list", "sparse graphs", "edge lists"],
              details: [
                "Undirected graphs keep mirrored entries",
                "Weighted graphs store weight per edge",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Vector< vector<Edge> > or Map<int, vector<Edge>>; optionally use Set for constant-time edge lookup.",
              details: ["Edge struct holds neighbor id + weight/cost"],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Implement addEdge/removeEdge/print/neighbor iteration using the lists.",
              details: [
                "addEdge pushes neighbor entry to adjacency list(s)",
                "neighbors retrieved in O(degree)",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Adjacency list best for algorithms like BFS/DFS (O(V+E)). For quick edge existence use hash set per adjacency list.",
              details: [
                "Space O(V+E)",
                "Edge lookup O(degree) or O(1)/O(log degree) with set/map",
              ],
            },
          ],
          pattern: "Adjacency List Representation",
          complexity: {
            time: "Add edge O(1), neighbor iteration O(degree), edge lookup O(degree)",
            space: "O(V+E)",
          },
        }}
      />

      <ProblemBlock
        title="Adjacency Matrix and List Comparison"
        difficulty="Easy"
        description="Compare the time and space complexity of adjacency matrix vs adjacency list representations."
        solutions={{
          JavaScript: `// Comparison of Graph Representations

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

compareRepresentations();`,
          Java: `import java.util.*;

public class GraphRepresentationComparison {
    public static void compareRepresentations() {
        System.out.println("=== Graph Representation Comparison ===");
        
        Map<String, Map<String, String>> comparison = new LinkedHashMap<>();
        comparison.put("Space Complexity", Map.of(
            "Adjacency Matrix", "O(V²)",
            "Adjacency List", "O(V + E)"
        ));
        comparison.put("Add Edge", Map.of(
            "Adjacency Matrix", "O(1)",
            "Adjacency List", "O(1)"
        ));
        comparison.put("Remove Edge", Map.of(
            "Adjacency Matrix", "O(1)",
            "Adjacency List", "O(degree)"
        ));
        comparison.put("Check Edge", Map.of(
            "Adjacency Matrix", "O(1)",
            "Adjacency List", "O(degree)"
        ));
        comparison.put("Get Neighbors", Map.of(
            "Adjacency Matrix", "O(V)",
            "Adjacency List", "O(degree)"
        ));
        comparison.put("Best For", Map.of(
            "Adjacency Matrix", "Dense graphs, frequent edge queries",
            "Adjacency List", "Sparse graphs, graph traversal"
        ));
        
        System.out.println("\\nComparison Table:");
        System.out.printf("%-20s %-25s %s%n", "Property", "Adjacency Matrix", "Adjacency List");
        System.out.println("-".repeat(70));
        
        comparison.forEach((property, values) -> {
            System.out.printf("%-20s %-25s %s%n", 
                property, 
                values.get("Adjacency Matrix"), 
                values.get("Adjacency List"));
        });
        
        System.out.println("\\n=== When to Use Which? ===");
        System.out.println("\\nUse Adjacency Matrix when:");
        System.out.println("• Graph is dense (E ≈ V²)");
        System.out.println("• Need frequent edge existence checks");
        System.out.println("• Vertices are numbered 0 to V-1");
        System.out.println("• Memory is not a constraint");
        
        System.out.println("\\nUse Adjacency List when:");
        System.out.println("• Graph is sparse (E << V²)");
        System.out.println("• Need to traverse all neighbors frequently");
        System.out.println("• Memory is a constraint");
        System.out.println("• Vertices are not necessarily numbered");
        
        System.out.println("\\n=== Example Analysis ===");
        int V = 1000;
        int E1 = 100; // Sparse
        int E2 = 500000; // Dense
        
        System.out.println("\\nFor V = " + V + " vertices:");
        System.out.println("Sparse graph (E = " + E1 + "):");
        System.out.println("  Matrix space: " + (V * V) + " = " + (V * V));
        System.out.println("  List space: " + (V + E1) + " = " + (V + E1));
        System.out.println("  List is " + Math.round((double)(V * V) / (V + E1)) + "x more memory efficient");
        
        System.out.println("\\nDense graph (E = " + E2 + "):");
        System.out.println("  Matrix space: " + (V * V) + " = " + (V * V));
        System.out.println("  List space: " + (V + E2) + " = " + (V + E2));
        System.out.println("  Matrix is " + Math.round((double)(V + E2) / (V * V)) + "x more memory efficient");
    }
    
    public static void main(String[] args) {
        compareRepresentations();
    }
}`,
        }}
        explanation="Matrix: O(V²) space, O(1) edge operations. List: O(V+E) space, O(degree) edge operations. Choose based on graph density and operation frequency."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Compare adjacency matrix vs list to decide optimal structure for given graph characteristics.",
              details: [
                "Key factors: graph density, memory limits, required operations",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Matrix excels at dense graphs and constant-time edge checks; list excels at sparse graphs and neighbor iteration.",
              keywords: ["density", "O(V²)", "O(V+E)", "edge lookup"],
              details: [
                "Matrix wastes memory when E ≪ V²",
                "List lacks O(1) edge lookup but saves space",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Decide based on metrics: use matrix for dense graphs (>~V log V edges) or algorithms requiring fast adjacency access; list for traversal-heavy algorithms.",
              details: [
                "Also consider whether vertex labels are contiguous integers",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Compute memory/time trade-offs (as shown in table) and choose representation accordingly.",
              details: [
                "Matrix: constant-time `hasEdge(u,v)`, but neighbors list O(V)",
                "List: `addEdge` O(1), neighbors O(degree)",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "For hybrid needs, maintain both structures if memory allows (e.g., adjacency list plus bitset).",
              details: [
                "Use adjacency list for BFS/DFS, matrix for algorithms like Floyd-Warshall",
              ],
            },
          ],
          pattern: "Graph Representation Trade-off Analysis",
          complexity: {
            time: "Depends on chosen representation",
            space: "Matrix O(V²) vs List O(V+E)",
          },
        }}
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
        solutions={{
          JavaScript: `// Breadth First Search (BFS)

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
bfs(graph, 0);`,
          Java: `import java.util.*;

public class BFS {
    // BFS traversal
    public static List<Integer> bfs(GraphList graph, int start) {
        Set<Integer> visited = new HashSet<>();
        Queue<Integer> queue = new LinkedList<>();
        List<Integer> result = new ArrayList<>();
        
        visited.add(start);
        queue.offer(start);
        
        System.out.println("BFS starting from vertex " + start);
        System.out.println("Initial queue: " + queue);
        
        while (!queue.isEmpty()) {
            int current = queue.poll();
            result.add(current);
            
            System.out.println("\\nProcessing vertex " + current);
            System.out.println("Result so far: " + result);
            
            // Visit all unvisited neighbors
            List<Edge> neighbors = graph.getNeighbors(current);
            System.out.println("Neighbors of " + current + ": " + neighbors);
            
            for (Edge neighbor : neighbors) {
                if (!visited.contains(neighbor.vertex)) {
                    visited.add(neighbor.vertex);
                    queue.offer(neighbor.vertex);
                    System.out.println("  Added " + neighbor.vertex + " to queue");
                } else {
                    System.out.println("  " + neighbor.vertex + " already visited");
                }
            }
            
            System.out.println("Updated queue: " + queue);
        }
        
        System.out.println("\\nBFS traversal complete: " + result);
        return result;
    }
    
    // BFS for disconnected graphs
    public static List<Integer> bfsDisconnected(GraphList graph) {
        Set<Integer> visited = new HashSet<>();
        List<Integer> result = new ArrayList<>();
        
        System.out.println("BFS for disconnected graph");
        
        for (int i = 0; i < graph.vertices; i++) {
            if (!visited.contains(i)) {
                System.out.println("\\nStarting BFS from unvisited vertex " + i);
                List<Integer> component = bfsFromVertex(graph, i, visited);
                result.addAll(component);
            }
        }
        
        System.out.println("\\nComplete BFS traversal: " + result);
        return result;
    }
    
    private static List<Integer> bfsFromVertex(GraphList graph, int start, Set<Integer> visited) {
        Queue<Integer> queue = new LinkedList<>();
        List<Integer> component = new ArrayList<>();
        
        visited.add(start);
        queue.offer(start);
        
        while (!queue.isEmpty()) {
            int current = queue.poll();
            component.add(current);
            
            List<Edge> neighbors = graph.getNeighbors(current);
            for (Edge neighbor : neighbors) {
                if (!visited.contains(neighbor.vertex)) {
                    visited.add(neighbor.vertex);
                    queue.offer(neighbor.vertex);
                }
            }
        }
        
        return component;
    }
    
    public static void main(String[] args) {
        GraphList graph = new GraphList(6);
        graph.addEdge(0, 1, 1);
        graph.addEdge(0, 2, 1);
        graph.addEdge(1, 3, 1);
        graph.addEdge(2, 4, 1);
        graph.addEdge(3, 5, 1);
        
        System.out.println("=== Testing BFS ===");
        graph.print();
        bfs(graph, 0);
    }
}`,
        }}
        explanation="BFS uses queue to visit vertices level by level. Time: O(V + E), Space: O(V). Guarantees shortest path in unweighted graphs."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Start from source vertex and visit graph layer by layer (distance increasing by 1).",
              details: [
                "Need visited array to avoid revisiting nodes",
                "Works for both directed and undirected graphs",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Queue-based traversal (FIFO). When node is dequeued, its neighbors become next level.",
              keywords: [
                "queue",
                "level traversal",
                "unweighted shortest path",
              ],
              details: ["Each vertex enqueued at most once"],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Adjacency list for graph representation, boolean visited array/set, queue for BFS order.",
              details: [
                "Optional arrays for parent/distance if paths/distances required",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Mark source visited, enqueue. While queue non-empty: dequeue vertex u, process, enqueue each unvisited neighbor and mark visited.",
              details: [
                "For disconnected graphs, loop over all vertices and start BFS from unvisited nodes",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Time complexity O(V+E); memory O(V). Use adjacency matrix only for dense graphs (O(V²)).",
              details: ["Queue operations O(1); visited ensures linear work"],
            },
          ],
          pattern: "Breadth-First Search",
          complexity: {
            time: "O(V + E)",
            space: "O(V)",
          },
        }}
      />

      <ProblemBlock
        title="Applications of BFS"
        difficulty="Medium"
        description="Common applications of BFS including shortest path, level order traversal, and connectivity."
        solutions={{
          JavaScript: `// Applications of BFS

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
isConnected(graph);`,
          Java: `import java.util.*;

public class BFSApplications {
    // 1. Shortest Path in Unweighted Graph
    public static List<Integer> shortestPathBFS(GraphList graph, int start, int end) {
        Set<Integer> visited = new HashSet<>();
        Queue<PathNode> queue = new LinkedList<>();
        
        visited.add(start);
        queue.offer(new PathNode(start, Arrays.asList(start)));
        
        System.out.println("Finding shortest path from " + start + " to " + end);
        
        while (!queue.isEmpty()) {
            PathNode current = queue.poll();
            
            System.out.println("\\nProcessing vertex " + current.vertex + ", current path: " + current.path);
            
            if (current.vertex == end) {
                System.out.println("Found shortest path: " + current.path);
                System.out.println("Shortest distance: " + (current.path.size() - 1));
                return current.path;
            }
            
            List<Edge> neighbors = graph.getNeighbors(current.vertex);
            for (Edge neighbor : neighbors) {
                if (!visited.contains(neighbor.vertex)) {
                    visited.add(neighbor.vertex);
                    List<Integer> newPath = new ArrayList<>(current.path);
                    newPath.add(neighbor.vertex);
                    queue.offer(new PathNode(neighbor.vertex, newPath));
                    System.out.println("  Added " + neighbor.vertex + " to queue with path: " + newPath);
                }
            }
        }
        
        System.out.println("No path found from " + start + " to " + end);
        return null;
    }
    
    static class PathNode {
        int vertex;
        List<Integer> path;
        
        PathNode(int vertex, List<Integer> path) {
            this.vertex = vertex;
            this.path = path;
        }
    }
    
    // 2. Level Order Traversal
    public static List<List<Integer>> levelOrderTraversal(GraphList graph, int start) {
        Set<Integer> visited = new HashSet<>();
        Queue<LevelNode> queue = new LinkedList<>();
        List<List<Integer>> levels = new ArrayList<>();
        
        visited.add(start);
        queue.offer(new LevelNode(start, 0));
        
        System.out.println("Level order traversal starting from " + start);
        
        while (!queue.isEmpty()) {
            LevelNode current = queue.poll();
            
            if (levels.size() <= current.level) {
                levels.add(new ArrayList<>());
            }
            levels.get(current.level).add(current.vertex);
            
            System.out.println("Level " + current.level + ": " + current.vertex);
            
            List<Edge> neighbors = graph.getNeighbors(current.vertex);
            for (Edge neighbor : neighbors) {
                if (!visited.contains(neighbor.vertex)) {
                    visited.add(neighbor.vertex);
                    queue.offer(new LevelNode(neighbor.vertex, current.level + 1));
                }
            }
        }
        
        System.out.println("\\nLevel order result:");
        for (int i = 0; i < levels.size(); i++) {
            System.out.println("Level " + i + ": " + levels.get(i));
        }
        
        return levels;
    }
    
    static class LevelNode {
        int vertex;
        int level;
        
        LevelNode(int vertex, int level) {
            this.vertex = vertex;
            this.level = level;
        }
    }
    
    // 3. Check if Graph is Connected
    public static boolean isConnected(GraphList graph) {
        Set<Integer> visited = new HashSet<>();
        Queue<Integer> queue = new LinkedList<>();
        
        visited.add(0);
        queue.offer(0);
        
        while (!queue.isEmpty()) {
            int current = queue.poll();
            List<Edge> neighbors = graph.getNeighbors(current);
            
            for (Edge neighbor : neighbors) {
                if (!visited.contains(neighbor.vertex)) {
                    visited.add(neighbor.vertex);
                    queue.offer(neighbor.vertex);
                }
            }
        }
        
        boolean isConnected = visited.size() == graph.vertices;
        System.out.println("Graph is " + (isConnected ? "connected" : "disconnected"));
        System.out.println("Visited " + visited.size() + " out of " + graph.vertices + " vertices");
        
        return isConnected;
    }
    
    public static void main(String[] args) {
        GraphList graph = new GraphList(6);
        graph.addEdge(0, 1, 1);
        graph.addEdge(0, 2, 1);
        graph.addEdge(1, 3, 1);
        graph.addEdge(2, 4, 1);
        graph.addEdge(3, 5, 1);
        
        System.out.println("=== Testing BFS Applications ===");
        graph.print();
        
        System.out.println("\\n=== Shortest Path ===");
        shortestPathBFS(graph, 0, 5);
        
        System.out.println("\\n=== Level Order Traversal ===");
        levelOrderTraversal(graph, 0);
        
        System.out.println("\\n=== Connectivity Check ===");
        isConnected(graph);
    }
}`,
        }}
        explanation="BFS applications: shortest path in unweighted graphs, level order traversal, connectivity checking, and more. All maintain O(V + E) time complexity."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Use BFS to solve classic tasks: shortest path in unweighted graph, connected components, bipartite check, etc.",
              details: [
                "Each application sets up BFS with specific metadata (distance, parent, color)",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Queue-based level traversal assures minimal edge count (distance) and natural layering.",
              keywords: [
                "shortest path",
                "connected components",
                "bipartite",
                "level order",
              ],
              details: [
                "Connectivity: run BFS from each unvisited node",
                "Bipartite: color nodes alternately per BFS level",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Visited set, queue, optional arrays for color/distance/parent depending on application.",
              details: [
                "Bipartite uses color array (0/1)",
                "Shortest path stores parent to reconstruct path",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Apply BFS template with additional state updates per application.",
              details: [
                "Shortest path: record distance when enqueuing neighbors (dist[v]=dist[u]+1)",
                "Connectivity: after BFS completes, nodes reached form one component",
                "Bipartite: assign color and verify neighbors have opposite color",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "All BFS-based applications run in O(V+E). Ensure adjacency list for efficiency.",
              details: [
                "For grid problems, treat each cell as vertex and edges to adjacent cells",
              ],
            },
          ],
          pattern: "BFS Applications Template",
          complexity: {
            time: "O(V + E)",
            space: "O(V)",
          },
        }}
      />

      <ProblemBlock
        title="Depth First Search (DFS)"
        difficulty="Medium"
        description="Traverse a graph by going as deep as possible before backtracking using recursion or stack."
        solutions={{
          JavaScript: `// Depth First Search (DFS)

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
dfsIterative(graph, 0);`,
          Java: `import java.util.*;

public class DFS {
    // Recursive DFS
    public static List<Integer> dfsRecursive(GraphList graph, int start, Set<Integer> visited, List<Integer> result) {
        visited.add(start);
        result.add(start);
        
        System.out.println("Visiting vertex " + start);
        System.out.println("Current path: " + result);
        
        List<Edge> neighbors = graph.getNeighbors(start);
        System.out.println("Neighbors of " + start + ": " + neighbors);
        
        for (Edge neighbor : neighbors) {
            if (!visited.contains(neighbor.vertex)) {
                System.out.println("  Going to unvisited neighbor " + neighbor.vertex);
                dfsRecursive(graph, neighbor.vertex, visited, result);
            } else {
                System.out.println("  Neighbor " + neighbor.vertex + " already visited");
            }
        }
        
        System.out.println("Backtracking from " + start);
        return result;
    }
    
    // Iterative DFS using stack
    public static List<Integer> dfsIterative(GraphList graph, int start) {
        Set<Integer> visited = new HashSet<>();
        Stack<Integer> stack = new Stack<>();
        List<Integer> result = new ArrayList<>();
        
        stack.push(start);
        System.out.println("DFS iterative starting from vertex " + start);
        System.out.println("Initial stack: " + stack);
        
        while (!stack.isEmpty()) {
            int current = stack.pop();
            
            if (!visited.contains(current)) {
                visited.add(current);
                result.add(current);
                
                System.out.println("\\nProcessing vertex " + current);
                System.out.println("Result so far: " + result);
                
                List<Edge> neighbors = graph.getNeighbors(current);
                System.out.println("Neighbors of " + current + ": " + neighbors);
                
                // Add neighbors to stack in reverse order for consistent traversal
                for (int i = neighbors.size() - 1; i >= 0; i--) {
                    Edge neighbor = neighbors.get(i);
                    if (!visited.contains(neighbor.vertex)) {
                        stack.push(neighbor.vertex);
                        System.out.println("  Added " + neighbor.vertex + " to stack");
                    } else {
                        System.out.println("  " + neighbor.vertex + " already visited");
                    }
                }
                
                System.out.println("Updated stack: " + stack);
            }
        }
        
        System.out.println("\\nDFS traversal complete: " + result);
        return result;
    }
    
    // DFS for disconnected graphs
    public static List<Integer> dfsDisconnected(GraphList graph) {
        Set<Integer> visited = new HashSet<>();
        List<Integer> result = new ArrayList<>();
        
        System.out.println("DFS for disconnected graph");
        
        for (int i = 0; i < graph.vertices; i++) {
            if (!visited.contains(i)) {
                System.out.println("\\nStarting DFS from unvisited vertex " + i);
                List<Integer> component = new ArrayList<>();
                dfsRecursive(graph, i, visited, component);
                result.addAll(component);
            }
        }
        
        System.out.println("\\nComplete DFS traversal: " + result);
        return result;
    }
    
    public static void main(String[] args) {
        GraphList graph = new GraphList(6);
        graph.addEdge(0, 1, 1);
        graph.addEdge(0, 2, 1);
        graph.addEdge(1, 3, 1);
        graph.addEdge(2, 4, 1);
        graph.addEdge(3, 5, 1);
        
        System.out.println("=== Testing DFS ===");
        graph.print();
        
        System.out.println("\\n=== Recursive DFS ===");
        Set<Integer> visited = new HashSet<>();
        List<Integer> result = new ArrayList<>();
        dfsRecursive(graph, 0, visited, result);
        
        System.out.println("\\n=== Iterative DFS ===");
        dfsIterative(graph, 0);
    }
}`,
        }}
        explanation="DFS uses recursion or stack to go deep before backtracking. Time: O(V + E), Space: O(V) for recursion stack. Good for finding paths and cycles."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Depth-first search explores one branch fully before backtracking; used for path finding, cycle detection, and component discovery.",
              details: [
                "Need visited array to avoid infinite recursion on cycles",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Recursive (or stack-based) traversal: process node, then recursively visit neighbors.",
              keywords: ["DFS", "recursion", "stack", "backtracking"],
              details: ["Order depends on neighbor order; not unique"],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Adjacency list for graph, visited boolean array, recursion stack (implicit) or explicit stack for iterative DFS.",
              details: [
                "For cycle detection in directed graphs, maintain recursion stack/ colors",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Mark node visited, process it, recursively call DFS for each unvisited neighbor.",
              details: [
                "For disconnected graphs, loop on vertices and call DFS if unvisited",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Time O(V+E); recursion depth up to V so iterative stack version avoids stack overflow.",
              details: [
                "Use arrays/vectors to store entry/exit times for advanced tasks (topo sort, articulation points)",
              ],
            },
          ],
          pattern: "Depth-First Search",
          complexity: {
            time: "O(V + E)",
            space: "O(V)",
          },
        }}
      />

      <ProblemBlock
        title="Applications of DFS"
        difficulty="Medium"
        description="Common applications of DFS including path finding, cycle detection, and topological sorting."
        solutions={{
          JavaScript: `// Applications of DFS

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
countConnectedComponents(graph);`,
          Java: `import java.util.*;

public class DFSApplications {
    // 1. Find Path between two vertices
    public static List<Integer> findPathDFS(GraphList graph, int start, int end, Set<Integer> visited, List<Integer> path) {
        visited.add(start);
        path.add(start);
        
        System.out.println("Exploring vertex " + start + ", current path: " + path);
        
        if (start == end) {
            System.out.println("Found path: " + path);
            return new ArrayList<>(path);
        }
        
        List<Edge> neighbors = graph.getNeighbors(start);
        for (Edge neighbor : neighbors) {
            if (!visited.contains(neighbor.vertex)) {
                List<Integer> result = findPathDFS(graph, neighbor.vertex, end, visited, path);
                if (result != null) {
                    return result;
                }
            }
        }
        
        // Backtrack
        path.remove(path.size() - 1);
        visited.remove(start);
        System.out.println("Backtracking from " + start);
        return null;
    }
    
    // 2. Detect Cycle in Undirected Graph
    public static boolean hasCycleUndirected(GraphList graph) {
        Set<Integer> visited = new HashSet<>();
        
        System.out.println("Detecting cycle in undirected graph");
        
        for (int i = 0; i < graph.vertices; i++) {
            if (!visited.contains(i)) {
                if (hasCycleDFS(graph, i, -1, visited)) {
                    System.out.println("Cycle detected!");
                    return true;
                }
            }
        }
        
        System.out.println("No cycle found");
        return false;
    }
    
    private static boolean hasCycleDFS(GraphList graph, int vertex, int parent, Set<Integer> visited) {
        visited.add(vertex);
        System.out.println("Visiting " + vertex + ", parent: " + parent);
        
        List<Edge> neighbors = graph.getNeighbors(vertex);
        for (Edge neighbor : neighbors) {
            if (!visited.contains(neighbor.vertex)) {
                if (hasCycleDFS(graph, neighbor.vertex, vertex, visited)) {
                    return true;
                }
            } else if (neighbor.vertex != parent) {
                System.out.println("Found back edge: " + vertex + " -> " + neighbor.vertex);
                return true;
            }
        }
        
        return false;
    }
    
    // 3. Count Connected Components
    public static int countConnectedComponents(GraphList graph) {
        Set<Integer> visited = new HashSet<>();
        int components = 0;
        
        System.out.println("Counting connected components");
        
        for (int i = 0; i < graph.vertices; i++) {
            if (!visited.contains(i)) {
                components++;
                System.out.println("\\nComponent " + components + ": starting from vertex " + i);
                dfsComponent(graph, i, visited);
            }
        }
        
        System.out.println("\\nTotal connected components: " + components);
        return components;
    }
    
    private static void dfsComponent(GraphList graph, int start, Set<Integer> visited) {
        visited.add(start);
        System.out.println("  Visiting " + start);
        
        List<Edge> neighbors = graph.getNeighbors(start);
        for (Edge neighbor : neighbors) {
            if (!visited.contains(neighbor.vertex)) {
                dfsComponent(graph, neighbor.vertex, visited);
            }
        }
    }
    
    public static void main(String[] args) {
        GraphList graph = new GraphList(6);
        graph.addEdge(0, 1, 1);
        graph.addEdge(0, 2, 1);
        graph.addEdge(1, 3, 1);
        graph.addEdge(2, 4, 1);
        graph.addEdge(3, 5, 1);
        
        System.out.println("=== Testing DFS Applications ===");
        graph.print();
        
        System.out.println("\\n=== Find Path ===");
        Set<Integer> visited = new HashSet<>();
        List<Integer> path = new ArrayList<>();
        findPathDFS(graph, 0, 5, visited, path);
        
        System.out.println("\\n=== Cycle Detection ===");
        hasCycleUndirected(graph);
        
        System.out.println("\\n=== Count Components ===");
        countConnectedComponents(graph);
    }
}`,
        }}
        explanation="DFS applications: path finding, cycle detection, connected components, topological sorting. Uses recursion stack, good for exploring all possibilities."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Use DFS variants for different tasks: path existence, cycle detection, strongly connected components, topological ordering, etc.",
              details: [
                "Each application adds metadata (parents, colors, timestamps)",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "DFS explores depth-first, giving pre/post order times crucial for many graph algorithms.",
              keywords: [
                "recursion",
                "timestamp",
                "recursion stack",
                "post-order",
              ],
              details: [
                "Cycle detection: track recursion stack (directed) or parent (undirected)",
                "Topological sort: push nodes to stack on exit time",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Adjacency list + visited + additional arrays (parent, color, discovery time, finish time).",
              details: [
                "Use `color` array (white/gray/black) for directed cycle detection",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Template DFS(u): mark visited/gray, process neighbors, record finish time.",
              details: [
                "For topological sort: after exploring neighbors push u to stack",
                "For articulation points/bridges: maintain disc/low arrays and track parent",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Time O(V+E). For large graphs prefer iterative stack to avoid recursion depth issues.",
              details: ["Use adjacency list for efficiency"],
            },
          ],
          pattern: "DFS Application Template",
          complexity: {
            time: "O(V + E)",
            space: "O(V)",
          },
        }}
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
        solutions={{
          JavaScript: `// Shortest Path in Unweighted Graph using BFS

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
shortestDistancesUnweighted(graph, 0);`,
          Java: `import java.util.*;

// GraphList class (from earlier problem)
class GraphList {
    int vertices;
    List<List<Edge>> adjList;
    
    public GraphList(int vertices) {
        this.vertices = vertices;
        this.adjList = new ArrayList<>();
        for (int i = 0; i < vertices; i++) {
            adjList.add(new ArrayList<>());
        }
    }
    
    public void addEdge(int u, int v, int weight) {
        adjList.get(u).add(new Edge(v, weight));
        adjList.get(v).add(new Edge(u, weight));
    }
    
    public List<Edge> getNeighbors(int u) {
        return adjList.get(u);
    }
    
    public void print() {
        System.out.println("Adjacency List:");
        for (int i = 0; i < vertices; i++) {
            System.out.println(i + ": " + adjList.get(i));
        }
    }
}

class Edge {
    int vertex;
    int weight;
    
    Edge(int vertex, int weight) {
        this.vertex = vertex;
        this.weight = weight;
    }
    
    @Override
    public String toString() {
        return vertex + "(" + weight + ")";
    }
}

class PathNode {
    int vertex;
    int distance;
    List<Integer> path;
    
    PathNode(int vertex, int distance, List<Integer> path) {
        this.vertex = vertex;
        this.distance = distance;
        this.path = path;
    }
}

public class ShortestPathUnweighted {
    // Shortest path from start to end
    public static PathResult shortestPathUnweighted(GraphList graph, int start, int end) {
        Set<Integer> visited = new HashSet<>();
        Queue<PathNode> queue = new LinkedList<>();
        int[] distances = new int[graph.vertices];
        Arrays.fill(distances, Integer.MAX_VALUE);
        
        visited.add(start);
        distances[start] = 0;
        queue.offer(new PathNode(start, 0, new ArrayList<>(Arrays.asList(start))));
        
        System.out.println("Finding shortest path from " + start + " to " + end);
        System.out.println("Initial distances: " + Arrays.toString(distances));
        
        while (!queue.isEmpty()) {
            PathNode current = queue.poll();
            
            System.out.println("\\nProcessing vertex " + current.vertex + ", distance: " + current.distance);
            System.out.println("Current path: " + current.path);
            
            if (current.vertex == end) {
                System.out.println("\\nFound shortest path: " + current.path);
                System.out.println("Shortest distance: " + current.distance);
                return new PathResult(current.path, current.distance);
            }
            
            List<Edge> neighbors = graph.getNeighbors(current.vertex);
            System.out.println("Neighbors of " + current.vertex + ": " + neighbors);
            
            for (Edge neighbor : neighbors) {
                if (!visited.contains(neighbor.vertex)) {
                    visited.add(neighbor.vertex);
                    int newDistance = current.distance + 1;
                    distances[neighbor.vertex] = newDistance;
                    
                    List<Integer> newPath = new ArrayList<>(current.path);
                    newPath.add(neighbor.vertex);
                    queue.offer(new PathNode(neighbor.vertex, newDistance, newPath));
                    
                    System.out.println("  Added " + neighbor.vertex + " with distance " + newDistance);
                } else {
                    System.out.println("  " + neighbor.vertex + " already visited");
                }
            }
            
            System.out.println("Updated distances: " + Arrays.toString(distances));
        }
        
        System.out.println("No path found from " + start + " to " + end);
        return null;
    }
    
    // Find shortest distances to all vertices
    public static int[] shortestDistancesUnweighted(GraphList graph, int start) {
        Set<Integer> visited = new HashSet<>();
        Queue<DistanceNode> queue = new LinkedList<>();
        int[] distances = new int[graph.vertices];
        Arrays.fill(distances, Integer.MAX_VALUE);
        
        visited.add(start);
        distances[start] = 0;
        queue.offer(new DistanceNode(start, 0));
        
        System.out.println("Finding shortest distances from " + start + " to all vertices");
        
        while (!queue.isEmpty()) {
            DistanceNode current = queue.poll();
            
            System.out.println("\\nProcessing vertex " + current.vertex + ", distance: " + current.distance);
            
            List<Edge> neighbors = graph.getNeighbors(current.vertex);
            for (Edge neighbor : neighbors) {
                if (!visited.contains(neighbor.vertex)) {
                    visited.add(neighbor.vertex);
                    int newDistance = current.distance + 1;
                    distances[neighbor.vertex] = newDistance;
                    
                    queue.offer(new DistanceNode(neighbor.vertex, newDistance));
                    System.out.println("  Distance to " + neighbor.vertex + ": " + newDistance);
                }
            }
        }
        
        System.out.println("\\nShortest distances from " + start + ":");
        for (int i = 0; i < graph.vertices; i++) {
            System.out.println("  " + start + " -> " + i + ": " + 
                (distances[i] == Integer.MAX_VALUE ? "∞" : distances[i]));
        }
        
        return distances;
    }
    
    static class DistanceNode {
        int vertex;
        int distance;
        
        DistanceNode(int vertex, int distance) {
            this.vertex = vertex;
            this.distance = distance;
        }
    }
    
    static class PathResult {
        List<Integer> path;
        int distance;
        
        PathResult(List<Integer> path, int distance) {
            this.path = path;
            this.distance = distance;
        }
    }
    
    public static void main(String[] args) {
        GraphList graph = new GraphList(6);
        graph.addEdge(0, 1, 1);
        graph.addEdge(0, 2, 1);
        graph.addEdge(1, 3, 1);
        graph.addEdge(2, 4, 1);
        graph.addEdge(3, 5, 1);
        graph.addEdge(4, 5, 1);
        
        System.out.println("=== Testing Shortest Path in Unweighted Graph ===");
        graph.print();
        
        System.out.println("\\n=== Shortest Path ===");
        shortestPathUnweighted(graph, 0, 5);
        
        System.out.println("\\n=== All Shortest Distances ===");
        shortestDistancesUnweighted(graph, 0);
    }
}`,
        }}
        explanation="BFS guarantees shortest path in unweighted graphs. Each level represents distance from source. Time: O(V + E), Space: O(V)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Edges unweighted ⇒ shortest path measured in number of edges; BFS from source yields minimal distance.",
              details: [
                "Need to output distances and optionally reconstruct path",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Use BFS with distance array; when neighbor discovered first time, its distance = dist[current]+1.",
              keywords: ["BFS shortest path", "unweighted graph"],
              details: [
                "Parent array helps reconstruct actual path by backtracking",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description: "Queue, visited/dist arrays, parent array.",
              details: ["Initialize dist with Infinity, set dist[src]=0"],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Run BFS as usual; when dequeuing node u, for each neighbor v unvisited set dist[v]=dist[u]+1, parent[v]=u, enqueue v.",
              details: [
                "Stop early if target reached to reduce work (optional)",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Time O(V+E). After BFS, reconstruct path by following parents from target back to source.",
              details: [
                "If graph disconnected and target unreachable dist[target]=Infinity",
              ],
            },
          ],
          pattern: "BFS Shortest Path (Unweighted)",
          complexity: {
            time: "O(V + E)",
            space: "O(V)",
          },
        }}
      />

      <ProblemBlock
        title="Dijkstra's Shortest Path Algorithm"
        difficulty="Hard"
        description="Find shortest paths from source to all vertices in weighted graph using priority queue."
        solutions={{
          JavaScript: `// Dijkstra's Shortest Path Algorithm

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
dijkstraWithPath(graph, 0, 5);`,
          Java: `import java.util.*;

// GraphList and Edge classes (from earlier problems)
class GraphList {
    int vertices;
    List<List<Edge>> adjList;
    
    public GraphList(int vertices) {
        this.vertices = vertices;
        this.adjList = new ArrayList<>();
        for (int i = 0; i < vertices; i++) {
            adjList.add(new ArrayList<>());
        }
    }
    
    public void addEdge(int u, int v, int weight) {
        adjList.get(u).add(new Edge(v, weight));
        adjList.get(v).add(new Edge(u, weight));
    }
    
    public List<Edge> getNeighbors(int u) {
        return adjList.get(u);
    }
    
    public void print() {
        System.out.println("Adjacency List:");
        for (int i = 0; i < vertices; i++) {
            System.out.println(i + ": " + adjList.get(i));
        }
    }
}

class Edge {
    int vertex;
    int weight;
    
    Edge(int vertex, int weight) {
        this.vertex = vertex;
        this.weight = weight;
    }
    
    @Override
    public String toString() {
        return vertex + "(" + weight + ")";
    }
}

class PQNode implements Comparable<PQNode> {
    int vertex;
    int distance;
    
    PQNode(int vertex, int distance) {
        this.vertex = vertex;
        this.distance = distance;
    }
    
    @Override
    public int compareTo(PQNode other) {
        return Integer.compare(this.distance, other.distance);
    }
}

public class Dijkstra {
    // Dijkstra's algorithm
    public static int[] dijkstra(GraphList graph, int start) {
        int[] distances = new int[graph.vertices];
        Arrays.fill(distances, Integer.MAX_VALUE);
        Set<Integer> visited = new HashSet<>();
        PriorityQueue<PQNode> pq = new PriorityQueue<>();
        
        distances[start] = 0;
        pq.offer(new PQNode(start, 0));
        
        System.out.println("Dijkstra's algorithm starting from vertex " + start);
        System.out.println("Initial distances: " + Arrays.toString(distances));
        
        while (!pq.isEmpty()) {
            PQNode current = pq.poll();
            
            if (visited.contains(current.vertex)) continue;
            
            visited.add(current.vertex);
            System.out.println("\\nProcessing vertex " + current.vertex + ", distance: " + current.distance);
            
            List<Edge> neighbors = graph.getNeighbors(current.vertex);
            System.out.println("Neighbors of " + current.vertex + ": " + neighbors);
            
            for (Edge neighbor : neighbors) {
                if (!visited.contains(neighbor.vertex)) {
                    int newDistance = current.distance + neighbor.weight;
                    
                    if (newDistance < distances[neighbor.vertex]) {
                        distances[neighbor.vertex] = newDistance;
                        pq.offer(new PQNode(neighbor.vertex, newDistance));
                        System.out.println("  Updated distance to " + neighbor.vertex + ": " + newDistance);
                    } else {
                        System.out.println("  Distance to " + neighbor.vertex + " not improved: " + 
                                         newDistance + " >= " + distances[neighbor.vertex]);
                    }
                }
            }
            
            System.out.println("Updated distances: " + Arrays.toString(distances));
        }
        
        System.out.println("\\nFinal shortest distances from " + start + ":");
        for (int i = 0; i < graph.vertices; i++) {
            System.out.println("  " + start + " -> " + i + ": " + 
                (distances[i] == Integer.MAX_VALUE ? "∞" : distances[i]));
        }
        
        return distances;
    }
    
    // Dijkstra with path reconstruction
    public static PathResult dijkstraWithPath(GraphList graph, int start, int end) {
        int[] distances = new int[graph.vertices];
        Arrays.fill(distances, Integer.MAX_VALUE);
        int[] parent = new int[graph.vertices];
        Arrays.fill(parent, -1);
        Set<Integer> visited = new HashSet<>();
        PriorityQueue<PQNode> pq = new PriorityQueue<>();
        
        distances[start] = 0;
        pq.offer(new PQNode(start, 0));
        
        System.out.println("Dijkstra with path from " + start + " to " + end);
        
        while (!pq.isEmpty()) {
            PQNode current = pq.poll();
            
            if (visited.contains(current.vertex)) continue;
            visited.add(current.vertex);
            
            if (current.vertex == end) break;
            
            List<Edge> neighbors = graph.getNeighbors(current.vertex);
            for (Edge neighbor : neighbors) {
                if (!visited.contains(neighbor.vertex)) {
                    int newDistance = current.distance + neighbor.weight;
                    
                    if (newDistance < distances[neighbor.vertex]) {
                        distances[neighbor.vertex] = newDistance;
                        parent[neighbor.vertex] = current.vertex;
                        pq.offer(new PQNode(neighbor.vertex, newDistance));
                    }
                }
            }
        }
        
        // Reconstruct path
        List<Integer> path = new ArrayList<>();
        int current = end;
        while (current != -1) {
            path.add(0, current);
            current = parent[current];
        }
        
        System.out.println("Shortest path from " + start + " to " + end + ": " + path);
        System.out.println("Shortest distance: " + distances[end]);
        
        return new PathResult(path, distances[end]);
    }
    
    static class PathResult {
        List<Integer> path;
        int distance;
        
        PathResult(List<Integer> path, int distance) {
            this.path = path;
            this.distance = distance;
        }
    }
    
    public static void main(String[] args) {
        GraphList graph = new GraphList(6);
        graph.addEdge(0, 1, 4);
        graph.addEdge(0, 2, 2);
        graph.addEdge(1, 2, 1);
        graph.addEdge(1, 3, 5);
        graph.addEdge(2, 3, 8);
        graph.addEdge(2, 4, 10);
        graph.addEdge(3, 4, 2);
        graph.addEdge(3, 5, 6);
        graph.addEdge(4, 5, 3);
        
        System.out.println("=== Testing Dijkstra's Algorithm ===");
        graph.print();
        
        System.out.println("\\n=== Dijkstra All Distances ===");
        dijkstra(graph, 0);
        
        System.out.println("\\n=== Dijkstra with Path ===");
        dijkstraWithPath(graph, 0, 5);
    }
}`,
        }}
        explanation="Dijkstra's algorithm finds shortest paths in weighted graphs with non-negative weights. Uses priority queue to always process closest unvisited vertex. Time: O((V + E) log V), Space: O(V)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Compute shortest distance from source to all vertices in weighted graph with non-negative edge weights.",
              details: ["Non-negative weights required for correctness"],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Greedy expansion: always settle vertex with minimal tentative distance using min-priority queue (min-heap).",
              keywords: ["priority queue", "relaxation", "shortest path tree"],
              details: [
                "Each edge relaxation potentially improves neighbor distance",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Adjacency list storing (neighbor, weight); min-heap keyed by distance; arrays for `dist` and `parent`.",
              details: ["Use visited/settled set to avoid reprocessing nodes"],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Initialize dist[src]=0, others = Infinity. Push (0,src). While heap not empty pop node u; if distance outdated continue; for each neighbor v relax edge and push new distance.",
              details: [
                "Parent array captures predecessor for path reconstruction",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Complexity O((V+E) log V) with binary heap; use adjacency list to keep E manageable.",
              details: [
                "For dense graphs use adjacency matrix + O(V²) implementation (no heap)",
              ],
            },
          ],
          pattern: "Dijkstra's Greedy Shortest Path",
          complexity: {
            time: "O((V + E) log V)",
            space: "O(V)",
          },
        }}
      />

      <ProblemBlock
        title="Bellman-Ford Shortest Path Algorithm"
        difficulty="Hard"
        description="Find shortest paths in weighted graph that may have negative weights, detects negative cycles."
        solutions={{
          JavaScript: `// Bellman-Ford Shortest Path Algorithm

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
}`,
          Java: `import java.util.*;

// GraphList and Edge classes (from earlier problems)
class GraphList {
    int vertices;
    List<List<Edge>> adjList;
    
    public GraphList(int vertices) {
        this.vertices = vertices;
        this.adjList = new ArrayList<>();
        for (int i = 0; i < vertices; i++) {
            adjList.add(new ArrayList<>());
        }
    }
    
    public void addEdge(int u, int v, int weight) {
        adjList.get(u).add(new Edge(v, weight));
        adjList.get(v).add(new Edge(u, weight));
    }
    
    public List<Edge> getNeighbors(int u) {
        return adjList.get(u);
    }
    
    public void print() {
        System.out.println("Adjacency List:");
        for (int i = 0; i < vertices; i++) {
            System.out.println(i + ": " + adjList.get(i));
        }
    }
}

class Edge {
    int vertex;
    int weight;
    
    Edge(int vertex, int weight) {
        this.vertex = vertex;
        this.weight = weight;
    }
    
    @Override
    public String toString() {
        return vertex + "(" + weight + ")";
    }
}

class BFResult {
    int[] distances;
    boolean hasNegativeCycle;
    int[] parent;
    
    BFResult(int[] distances, boolean hasNegativeCycle, int[] parent) {
        this.distances = distances;
        this.hasNegativeCycle = hasNegativeCycle;
        this.parent = parent;
    }
}

public class BellmanFord {
    public static BFResult bellmanFord(GraphList graph, int start) {
        int[] distances = new int[graph.vertices];
        Arrays.fill(distances, Integer.MAX_VALUE);
        int[] parent = new int[graph.vertices];
        Arrays.fill(parent, -1);
        
        distances[start] = 0;
        
        System.out.println("Bellman-Ford algorithm starting from vertex " + start);
        System.out.println("Initial distances: " + Arrays.toString(distances));
        
        // Relax all edges V-1 times
        for (int i = 0; i < graph.vertices - 1; i++) {
            System.out.println("\\nIteration " + (i + 1) + ":");
            boolean relaxed = false;
            
            for (int u = 0; u < graph.vertices; u++) {
                List<Edge> neighbors = graph.getNeighbors(u);
                for (Edge neighbor : neighbors) {
                    int v = neighbor.vertex;
                    int weight = neighbor.weight;
                    
                    if (distances[u] != Integer.MAX_VALUE && 
                        distances[u] + weight < distances[v]) {
                        distances[v] = distances[u] + weight;
                        parent[v] = u;
                        relaxed = true;
                        System.out.println("  Relaxed edge (" + u + ", " + v + 
                                         "): distance[" + v + "] = " + distances[v]);
                    }
                }
            }
            
            if (!relaxed) {
                System.out.println("  No relaxations in iteration " + (i + 1) + 
                                 ", algorithm converged");
                break;
            }
            
            System.out.println("  Distances after iteration " + (i + 1) + ": " + 
                             Arrays.toString(distances));
        }
        
        // Check for negative cycles
        System.out.println("\\nChecking for negative cycles:");
        boolean hasNegativeCycle = false;
        
        for (int u = 0; u < graph.vertices; u++) {
            List<Edge> neighbors = graph.getNeighbors(u);
            for (Edge neighbor : neighbors) {
                int v = neighbor.vertex;
                int weight = neighbor.weight;
                
                if (distances[u] != Integer.MAX_VALUE && 
                    distances[u] + weight < distances[v]) {
                    System.out.println("  Negative cycle detected: edge (" + u + 
                                     ", " + v + ") can still be relaxed");
                    hasNegativeCycle = true;
                    break;
                }
            }
            if (hasNegativeCycle) break;
        }
        
        if (hasNegativeCycle) {
            System.out.println("  Graph contains negative cycle");
        } else {
            System.out.println("  No negative cycle detected");
        }
        
        System.out.println("\\nFinal shortest distances from " + start + ":");
        for (int i = 0; i < graph.vertices; i++) {
            System.out.println("  " + start + " -> " + i + ": " + 
                (distances[i] == Integer.MAX_VALUE ? "∞" : distances[i]));
        }
        
        return new BFResult(distances, hasNegativeCycle, parent);
    }
    
    // Reconstruct path from Bellman-Ford
    public static List<Integer> reconstructPath(int[] parent, int start, int end) {
        List<Integer> path = new ArrayList<>();
        int current = end;
        
        while (current != -1) {
            path.add(0, current);
            current = parent[current];
        }
        
        if (path.get(0) != start) {
            System.out.println("No path from " + start + " to " + end);
            return null;
        }
        
        System.out.println("Path from " + start + " to " + end + ": " + path);
        return path;
    }
    
    public static void main(String[] args) {
        GraphList graph = new GraphList(5);
        graph.addEdge(0, 1, -1);
        graph.addEdge(0, 2, 4);
        graph.addEdge(1, 2, 3);
        graph.addEdge(1, 3, 2);
        graph.addEdge(1, 4, 2);
        graph.addEdge(3, 2, 5);
        graph.addEdge(3, 1, 1);
        graph.addEdge(4, 3, -3);
        
        System.out.println("=== Testing Bellman-Ford Algorithm ===");
        graph.print();
        
        BFResult result = bellmanFord(graph, 0);
        if (!result.hasNegativeCycle) {
            System.out.println("\\n=== Path Reconstruction ===");
            reconstructPath(result.parent, 0, 4);
        }
    }
}`,
        }}
        explanation="Bellman-Ford handles negative weights and detects negative cycles. Relaxes all edges V-1 times. Time: O(VE), Space: O(V). Can detect negative cycles."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Compute single-source shortest paths even with negative edge weights; also detect negative cycles reachable from source.",
              details: [
                "If negative cycle reachable, distances undefined (−∞)",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Dynamic relaxation repeated V−1 times (longest simple path has ≤ V−1 edges).",
              keywords: ["relaxation", "negative weights", "cycle detection"],
              details: [
                "After V−1 iterations, run one more pass to detect further relaxations => negative cycle",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Edge list (array of edges) easiest; dist array size V.",
              details: ["Initialize dist[src]=0, others = Infinity"],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Repeat for i=1..V-1: for each edge (u,v,w) if dist[u]+w < dist[v] update dist[v]. After loop, run another pass; if update occurs report negative cycle.",
              details: [
                "Optionally track predecessors for path reconstruction",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Time O(VE). Works for directed/undirected (treat undirected as pair of directed edges).",
              details: ["Break early if no updates during an iteration"],
            },
          ],
          pattern: "Bellman-Ford Relaxation",
          complexity: {
            time: "O(VE)",
            space: "O(V)",
          },
        }}
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
        solutions={{
          JavaScript: `// Prim's Algorithm for Minimum Spanning Tree

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
primMST(graph);`,
          Java: `import java.util.*;

// GraphList and Edge classes (from earlier problems)
class GraphList {
    int vertices;
    List<List<Edge>> adjList;
    
    public GraphList(int vertices) {
        this.vertices = vertices;
        this.adjList = new ArrayList<>();
        for (int i = 0; i < vertices; i++) {
            adjList.add(new ArrayList<>());
        }
    }
    
    public void addEdge(int u, int v, int weight) {
        adjList.get(u).add(new Edge(v, weight));
        adjList.get(v).add(new Edge(u, weight));
    }
    
    public List<Edge> getNeighbors(int u) {
        return adjList.get(u);
    }
    
    public void print() {
        System.out.println("Adjacency List:");
        for (int i = 0; i < vertices; i++) {
            System.out.println(i + ": " + adjList.get(i));
        }
    }
}

class Edge {
    int vertex;
    int weight;
    
    Edge(int vertex, int weight) {
        this.vertex = vertex;
        this.weight = weight;
    }
    
    @Override
    public String toString() {
        return vertex + "(" + weight + ")";
    }
}

class MSTEdge {
    int from;
    int to;
    int weight;
    
    MSTEdge(int from, int to, int weight) {
        this.from = from;
        this.to = to;
        this.weight = weight;
    }
}

class PQNode implements Comparable<PQNode> {
    int vertex;
    int weight;
    
    PQNode(int vertex, int weight) {
        this.vertex = vertex;
        this.weight = weight;
    }
    
    @Override
    public int compareTo(PQNode other) {
        return Integer.compare(this.weight, other.weight);
    }
}

public class PrimMST {
    public static MSTResult primMST(GraphList graph) {
        List<MSTEdge> mst = new ArrayList<>();
        int[] key = new int[graph.vertices];
        Arrays.fill(key, Integer.MAX_VALUE);
        int[] parent = new int[graph.vertices];
        Arrays.fill(parent, -1);
        boolean[] inMST = new boolean[graph.vertices];
        PriorityQueue<PQNode> pq = new PriorityQueue<>();
        
        key[0] = 0;
        pq.offer(new PQNode(0, 0));
        
        System.out.println("Prim's Algorithm for MST");
        System.out.println("Initial key values: " + Arrays.toString(key));
        
        while (!pq.isEmpty()) {
            PQNode current = pq.poll();
            int u = current.vertex;
            int weight = current.weight;
            
            if (inMST[u]) continue;
            
            inMST[u] = true;
            System.out.println("\\nAdding vertex " + u + " to MST with weight " + weight);
            
            if (parent[u] != -1) {
                mst.add(new MSTEdge(parent[u], u, weight));
                System.out.println("  Added edge (" + parent[u] + ", " + u + 
                                 ") with weight " + weight);
            }
            
            List<Edge> neighbors = graph.getNeighbors(u);
            System.out.println("  Checking neighbors of " + u + ": " + neighbors);
            
            for (Edge neighbor : neighbors) {
                int v = neighbor.vertex;
                int w = neighbor.weight;
                
                if (!inMST[v] && w < key[v]) {
                    key[v] = w;
                    parent[v] = u;
                    pq.offer(new PQNode(v, w));
                    System.out.println("    Updated key[" + v + "] = " + w + 
                                     ", parent[" + v + "] = " + u);
                } else if (inMST[v]) {
                    System.out.println("    " + v + " already in MST");
                } else {
                    System.out.println("    Weight " + w + " >= key[" + v + 
                                     "] = " + key[v]);
                }
            }
            
            System.out.println("  Updated key values: " + Arrays.toString(key));
        }
        
        int totalWeight = mst.stream().mapToInt(e -> e.weight).sum();
        System.out.println("\\nMST edges: " + mst);
        System.out.println("Total MST weight: " + totalWeight);
        
        return new MSTResult(mst, totalWeight);
    }
    
    static class MSTResult {
        List<MSTEdge> mst;
        int totalWeight;
        
        MSTResult(List<MSTEdge> mst, int totalWeight) {
            this.mst = mst;
            this.totalWeight = totalWeight;
        }
    }
    
    public static void main(String[] args) {
        GraphList graph = new GraphList(6);
        graph.addEdge(0, 1, 4);
        graph.addEdge(0, 2, 2);
        graph.addEdge(1, 2, 1);
        graph.addEdge(1, 3, 5);
        graph.addEdge(2, 3, 8);
        graph.addEdge(2, 4, 10);
        graph.addEdge(3, 4, 2);
        graph.addEdge(3, 5, 6);
        graph.addEdge(4, 5, 3);
        
        System.out.println("=== Testing Prim's Algorithm ===");
        graph.print();
        primMST(graph);
    }
}`,
        }}
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Prim's constructs MST by growing a single tree, adding lightest edge connecting tree to outside vertex.",
              details: ["Graph must be connected (or run Prim per component)"],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Greedy approach similar to Dijkstra but tracking edge weights not path distances.",
              keywords: ["MST", "priority queue", "cut property"],
              details: [
                "Pick lightest edge crossing cut between MST and remaining vertices",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Adjacency list for graph, min-heap storing (weight, vertex). Arrays for `key` (best weight to connect) and `parent`.",
              details: ["Use visited array to mark vertices already in MST"],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Initialize key[src]=0; push (0,src). Pop vertex u, mark visited, relax edges: if v not visited and weight < key[v], update key & parent and push to heap.",
              details: ["After heap empty, parent array defines MST edges"],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Time O(E log V) with heap. For dense graphs adjacency matrix + O(V²) version may suffice.",
              details: ["Sum of key values gives total MST weight"],
            },
          ],
          pattern: "Prim's MST via Heap",
          complexity: {
            time: "O(E log V)",
            space: "O(V)",
          },
        }}
      />

      <ProblemBlock
        title="Kruskal's Algorithm"
        difficulty="Hard"
        description="Find minimum spanning tree using union-find data structure."
        solutions={{
          JavaScript: `// Kruskal's Algorithm for Minimum Spanning Tree

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
kruskalMST(graph);`,
          Java: `import java.util.*;

// GraphList and Edge classes (from earlier problems)
class GraphList {
    int vertices;
    List<List<Edge>> adjList;
    
    public GraphList(int vertices) {
        this.vertices = vertices;
        this.adjList = new ArrayList<>();
        for (int i = 0; i < vertices; i++) {
            adjList.add(new ArrayList<>());
        }
    }
    
    public void addEdge(int u, int v, int weight) {
        adjList.get(u).add(new Edge(v, weight));
        adjList.get(v).add(new Edge(u, weight));
    }
    
    public List<Edge> getNeighbors(int u) {
        return adjList.get(u);
    }
    
    public void print() {
        System.out.println("Adjacency List:");
        for (int i = 0; i < vertices; i++) {
            System.out.println(i + ": " + adjList.get(i));
        }
    }
}

class Edge {
    int vertex;
    int weight;
    
    Edge(int vertex, int weight) {
        this.vertex = vertex;
        this.weight = weight;
    }
    
    @Override
    public String toString() {
        return vertex + "(" + weight + ")";
    }
}

class MSTEdge {
    int from;
    int to;
    int weight;
    
    MSTEdge(int from, int to, int weight) {
        this.from = from;
        this.to = to;
        this.weight = weight;
    }
    
    @Override
    public String toString() {
        return "(" + from + ", " + to + "): " + weight;
    }
}

class UnionFind {
    private int[] parent;
    private int[] rank;
    
    public UnionFind(int n) {
        parent = new int[n];
        rank = new int[n];
        for (int i = 0; i < n; i++) {
            parent[i] = i;
        }
    }
    
    public int find(int x) {
        if (parent[x] != x) {
            parent[x] = find(parent[x]); // Path compression
        }
        return parent[x];
    }
    
    public boolean union(int x, int y) {
        int rootX = find(x);
        int rootY = find(y);
        
        if (rootX == rootY) return false;
        
        // Union by rank
        if (rank[rootX] < rank[rootY]) {
            parent[rootX] = rootY;
        } else if (rank[rootX] > rank[rootY]) {
            parent[rootY] = rootX;
        } else {
            parent[rootY] = rootX;
            rank[rootX]++;
        }
        
        return true;
    }
}

public class KruskalMST {
    public static MSTResult kruskalMST(GraphList graph) {
        // Get all edges
        List<MSTEdge> edges = new ArrayList<>();
        for (int u = 0; u < graph.vertices; u++) {
            List<Edge> neighbors = graph.getNeighbors(u);
            for (Edge neighbor : neighbors) {
                if (u < neighbor.vertex) { // Avoid duplicate edges
                    edges.add(new MSTEdge(u, neighbor.vertex, neighbor.weight));
                }
            }
        }
        
        // Sort edges by weight
        edges.sort(Comparator.comparingInt(e -> e.weight));
        
        System.out.println("Kruskal's Algorithm for MST");
        System.out.println("Sorted edges: " + edges);
        
        List<MSTEdge> mst = new ArrayList<>();
        UnionFind uf = new UnionFind(graph.vertices);
        
        for (MSTEdge edge : edges) {
            System.out.println("\\nChecking edge (" + edge.from + ", " + edge.to + 
                             ") with weight " + edge.weight);
            
            if (uf.union(edge.from, edge.to)) {
                mst.add(edge);
                System.out.println("  Added edge (" + edge.from + ", " + edge.to + 
                                 ") to MST");
                System.out.println("  MST edges so far: " + mst);
            } else {
                System.out.println("  Edge (" + edge.from + ", " + edge.to + 
                                 ") creates cycle, skipping");
            }
            
            if (mst.size() == graph.vertices - 1) {
                System.out.println("  MST complete with " + (graph.vertices - 1) + 
                                 " edges");
                break;
            }
        }
        
        int totalWeight = mst.stream().mapToInt(e -> e.weight).sum();
        System.out.println("\\nFinal MST edges: " + mst);
        System.out.println("Total MST weight: " + totalWeight);
        
        return new MSTResult(mst, totalWeight);
    }
    
    static class MSTResult {
        List<MSTEdge> mst;
        int totalWeight;
        
        MSTResult(List<MSTEdge> mst, int totalWeight) {
            this.mst = mst;
            this.totalWeight = totalWeight;
        }
    }
    
    public static void main(String[] args) {
        GraphList graph = new GraphList(6);
        graph.addEdge(0, 1, 4);
        graph.addEdge(0, 2, 2);
        graph.addEdge(1, 2, 1);
        graph.addEdge(1, 3, 5);
        graph.addEdge(2, 3, 8);
        graph.addEdge(2, 4, 10);
        graph.addEdge(3, 4, 2);
        graph.addEdge(3, 5, 6);
        graph.addEdge(4, 5, 3);
        
        System.out.println("=== Testing Kruskal's Algorithm ===");
        graph.print();
        kruskalMST(graph);
    }
}`,
        }}
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
        solutions={{
          JavaScript: `// Detect Cycle in Directed Graph

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
hasCycleDirected(graph);`,
          Java: `import java.util.*;

// GraphList and Edge classes (from earlier problems)
class GraphList {
    int vertices;
    List<List<Edge>> adjList;
    
    public GraphList(int vertices) {
        this.vertices = vertices;
        this.adjList = new ArrayList<>();
        for (int i = 0; i < vertices; i++) {
            adjList.add(new ArrayList<>());
        }
    }
    
    public void addEdge(int u, int v, int weight) {
        adjList.get(u).add(new Edge(v, weight));
    }
    
    public List<Edge> getNeighbors(int u) {
        return adjList.get(u);
    }
    
    public void print() {
        System.out.println("Adjacency List:");
        for (int i = 0; i < vertices; i++) {
            System.out.println(i + ": " + adjList.get(i));
        }
    }
}

class Edge {
    int vertex;
    int weight;
    
    Edge(int vertex, int weight) {
        this.vertex = vertex;
        this.weight = weight;
    }
    
    @Override
    public String toString() {
        return vertex + "(" + weight + ")";
    }
}

public class CycleDetectionDirected {
    private static final int WHITE = 0, GRAY = 1, BLACK = 2;
    
    public static boolean hasCycleDirected(GraphList graph) {
        int[] color = new int[graph.vertices];
        Arrays.fill(color, WHITE);
        
        System.out.println("Detecting cycle in directed graph");
        System.out.println("Colors: 0=White (unvisited), 1=Gray (visiting), 2=Black (visited)");
        
        for (int i = 0; i < graph.vertices; i++) {
            if (color[i] == WHITE) {
                System.out.println("\\nStarting DFS from white vertex " + i);
                if (hasCycleDFS(graph, i, color)) {
                    System.out.println("Cycle detected!");
                    return true;
                }
            }
        }
        
        System.out.println("No cycle found");
        return false;
    }
    
    private static boolean hasCycleDFS(GraphList graph, int vertex, int[] color) {
        color[vertex] = GRAY;
        System.out.println("  Coloring vertex " + vertex + " gray (visiting)");
        
        List<Edge> neighbors = graph.getNeighbors(vertex);
        System.out.println("  Neighbors of " + vertex + ": " + neighbors);
        
        for (Edge neighbor : neighbors) {
            int v = neighbor.vertex;
            System.out.println("    Checking neighbor " + v + " (color: " + color[v] + ")");
            
            if (color[v] == GRAY) {
                System.out.println("    Found back edge: " + vertex + " -> " + v + 
                                 " (both gray)");
                return true;
            }
            
            if (color[v] == WHITE && hasCycleDFS(graph, v, color)) {
                return true;
            }
        }
        
        color[vertex] = BLACK;
        System.out.println("  Coloring vertex " + vertex + " black (visited)");
        return false;
    }
    
    public static void main(String[] args) {
        GraphList graph = new GraphList(4);
        graph.addEdge(0, 1, 1);
        graph.addEdge(0, 2, 1);
        graph.addEdge(1, 2, 1);
        graph.addEdge(2, 0, 1); // This creates a cycle
        graph.addEdge(2, 3, 1);
        
        System.out.println("=== Testing Cycle Detection in Directed Graph ===");
        graph.print();
        hasCycleDirected(graph);
    }
}`,
        }}
        explanation="Use three colors: white (unvisited), gray (currently visiting), black (completely visited). Back edge to gray vertex indicates cycle. Time: O(V + E), Space: O(V)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "We must detect cycles in directed graph; back edges (edge to ancestor in DFS tree) imply cycle.",
              details: [
                "Need to handle multiple components—start DFS from every unvisited vertex",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "DFS color-marking: WHITE=unvisited, GRAY=currently in recursion stack, BLACK=finished. Encountering edge to GRAY node ⇒ cycle.",
              keywords: ["DFS", "coloring", "recursion stack", "back edge"],
              details: ["Alternative: maintain recursion stack boolean array"],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Adjacency list + color array (or visited + recursionStack).",
              details: ["Colors avoid separate recursion stack structure"],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "For each vertex u if WHITE run DFS(u): mark GRAY, explore neighbors; if neighbor GRAY → cycle; if neighbor WHITE continue DFS; after exploring mark node BLACK.",
              details: ["Return true immediately on cycle detection"],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Time O(V+E). Works for directed graphs. For undirected cycle detection we check parent pointer instead.",
              details: [
                "If recursion depth concern, convert to iterative DFS tracking stack states",
              ],
            },
          ],
          pattern: "DFS Color-Marking Cycle Detection",
          complexity: {
            time: "O(V + E)",
            space: "O(V)",
          },
        }}
      />

      <ProblemBlock
        title="Topological Sorting"
        difficulty="Medium"
        description="Linear ordering of vertices in directed acyclic graph (DAG) using Kahn's algorithm or DFS."
        solutions={{
          JavaScript: `// Topological Sorting

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
topologicalSortDFS(graph);`,
          Java: `import java.util.*;

// GraphList and Edge classes (from earlier problems)
class GraphList {
    int vertices;
    List<List<Edge>> adjList;
    
    public GraphList(int vertices) {
        this.vertices = vertices;
        this.adjList = new ArrayList<>();
        for (int i = 0; i < vertices; i++) {
            adjList.add(new ArrayList<>());
        }
    }
    
    public void addEdge(int u, int v, int weight) {
        adjList.get(u).add(new Edge(v, weight));
    }
    
    public List<Edge> getNeighbors(int u) {
        return adjList.get(u);
    }
    
    public void print() {
        System.out.println("Adjacency List:");
        for (int i = 0; i < vertices; i++) {
            System.out.println(i + ": " + adjList.get(i));
        }
    }
}

class Edge {
    int vertex;
    int weight;
    
    Edge(int vertex, int weight) {
        this.vertex = vertex;
        this.weight = weight;
    }
    
    @Override
    public String toString() {
        return vertex + "(" + weight + ")";
    }
}

public class TopologicalSort {
    // Kahn's Algorithm (BFS-based)
    public static List<Integer> topologicalSortKahn(GraphList graph) {
        int[] inDegree = new int[graph.vertices];
        Queue<Integer> queue = new LinkedList<>();
        List<Integer> result = new ArrayList<>();
        
        // Calculate in-degrees
        for (int u = 0; u < graph.vertices; u++) {
            List<Edge> neighbors = graph.getNeighbors(u);
            for (Edge neighbor : neighbors) {
                inDegree[neighbor.vertex]++;
            }
        }
        
        System.out.println("Topological Sort using Kahn's Algorithm");
        System.out.println("In-degrees: " + Arrays.toString(inDegree));
        
        // Add vertices with in-degree 0 to queue
        for (int i = 0; i < graph.vertices; i++) {
            if (inDegree[i] == 0) {
                queue.offer(i);
                System.out.println("Added vertex " + i + " to queue (in-degree = 0)");
            }
        }
        
        System.out.println("Initial queue: " + queue);
        
        while (!queue.isEmpty()) {
            int u = queue.poll();
            result.add(u);
            
            System.out.println("\\nProcessing vertex " + u);
            System.out.println("Result so far: " + result);
            
            List<Edge> neighbors = graph.getNeighbors(u);
            System.out.println("Neighbors of " + u + ": " + neighbors);
            
            for (Edge neighbor : neighbors) {
                int v = neighbor.vertex;
                inDegree[v]--;
                System.out.println("  Decreased in-degree of " + v + " to " + inDegree[v]);
                
                if (inDegree[v] == 0) {
                    queue.offer(v);
                    System.out.println("  Added " + v + " to queue (in-degree = 0)");
                }
            }
            
            System.out.println("Updated queue: " + queue);
        }
        
        if (result.size() != graph.vertices) {
            System.out.println("Graph contains cycle, topological sort not possible");
            return null;
        }
        
        System.out.println("\\nTopological order: " + result);
        return result;
    }
    
    // DFS-based Topological Sort
    public static List<Integer> topologicalSortDFS(GraphList graph) {
        Set<Integer> visited = new HashSet<>();
        Stack<Integer> stack = new Stack<>();
        
        System.out.println("Topological Sort using DFS");
        
        for (int i = 0; i < graph.vertices; i++) {
            if (!visited.contains(i)) {
                System.out.println("\\nStarting DFS from unvisited vertex " + i);
                topologicalDFS(graph, i, visited, stack);
            }
        }
        
        List<Integer> result = new ArrayList<>();
        while (!stack.isEmpty()) {
            result.add(stack.pop());
        }
        
        System.out.println("\\nTopological order: " + result);
        return result;
    }
    
    private static void topologicalDFS(GraphList graph, int vertex, Set<Integer> visited, Stack<Integer> stack) {
        visited.add(vertex);
        System.out.println("  Visiting vertex " + vertex);
        
        List<Edge> neighbors = graph.getNeighbors(vertex);
        for (Edge neighbor : neighbors) {
            if (!visited.contains(neighbor.vertex)) {
                System.out.println("    Going to unvisited neighbor " + neighbor.vertex);
                topologicalDFS(graph, neighbor.vertex, visited, stack);
            } else {
                System.out.println("    Neighbor " + neighbor.vertex + " already visited");
            }
        }
        
        System.out.println("  Adding " + vertex + " to stack");
        stack.push(vertex);
    }
    
    public static void main(String[] args) {
        GraphList graph = new GraphList(6);
        graph.addEdge(5, 2, 1);
        graph.addEdge(5, 0, 1);
        graph.addEdge(4, 0, 1);
        graph.addEdge(4, 1, 1);
        graph.addEdge(2, 3, 1);
        graph.addEdge(3, 1, 1);
        
        System.out.println("=== Testing Topological Sorting ===");
        graph.print();
        
        System.out.println("\\n=== Kahn's Algorithm ===");
        topologicalSortKahn(graph);
        
        System.out.println("\\n=== DFS-based ===");
        topologicalSortDFS(graph);
    }
}`,
        }}
        explanation="Kahn removes in-degree-0 vertices while DFS pushes vertices after exploring descendants; both require DAG input. Time: O(V + E), Space: O(V)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Topological ordering exists only when graph has no cycles (DAG). Need to detect failure when ordering uses < V vertices.",
              details: ["Implement both Kahn (BFS) and DFS-based versions"],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Process vertices only after all prerequisites (incoming edges) resolved.",
              keywords: ["Kahn", "in-degree", "DFS postorder", "DAG"],
              details: [
                "Kahn uses queue of zero in-degree vertices",
                "DFS uses reverse postorder (stack) of finishing times",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Adjacency list, in-degree array, queue for Kahn; visited set + stack for DFS.",
              details: ["Optional result vector to store ordering"],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Kahn: compute in-degrees, enqueue zeros, pop queue, append to result, decrement neighbors, enqueue new zeros. DFS: call dfs(u) for unvisited vertices, pushing onto stack after exploring neighbors, then reverse stack.",
              details: [
                "If Kahn finishes with fewer than V vertices, cycle exists",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Both run O(V+E). Prefer Kahn for easy cycle detection and BFS-style processing; DFS for recursion-friendly contexts.",
              details: [
                "For large recursion depth convert DFS to iterative with explicit stack",
              ],
            },
          ],
          pattern: "Topological Sort via Kahn or DFS",
          complexity: {
            time: "O(V + E)",
            space: "O(V)",
          },
        }}
      />

      <ProblemBlock
        title="Kosaraju's Algorithm"
        difficulty="Hard"
        description="Find strongly connected components in directed graph using two DFS passes."
        solutions={{
          JavaScript: `// Kosaraju's Algorithm for Strongly Connected Components

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
kosarajuSCC(graph);`,
          Java: `import java.util.*;

// GraphList and Edge classes (from earlier problems)
class GraphList {
    int vertices;
    List<List<Edge>> adjList;
    
    public GraphList(int vertices) {
        this.vertices = vertices;
        this.adjList = new ArrayList<>();
        for (int i = 0; i < vertices; i++) {
            adjList.add(new ArrayList<>());
        }
    }
    
    public void addEdge(int u, int v, int weight) {
        adjList.get(u).add(new Edge(v, weight));
    }
    
    public List<Edge> getNeighbors(int u) {
        return adjList.get(u);
    }
    
    public void print() {
        System.out.println("Adjacency List:");
        for (int i = 0; i < vertices; i++) {
            System.out.println(i + ": " + adjList.get(i));
        }
    }
}

class Edge {
    int vertex;
    int weight;
    
    Edge(int vertex, int weight) {
        this.vertex = vertex;
        this.weight = weight;
    }
    
    @Override
    public String toString() {
        return vertex + "(" + weight + ")";
    }
}

public class KosarajuSCC {
    public static List<List<Integer>> kosarajuSCC(GraphList graph) {
        Set<Integer> visited = new HashSet<>();
        Stack<Integer> stack = new Stack<>();
        List<List<Integer>> sccs = new ArrayList<>();
        
        System.out.println("Kosaraju's Algorithm for Strongly Connected Components");
        
        // Step 1: Fill stack with vertices in order of finishing times
        System.out.println("\\nStep 1: First DFS to fill stack");
        for (int i = 0; i < graph.vertices; i++) {
            if (!visited.contains(i)) {
                System.out.println("Starting DFS from vertex " + i);
                fillOrder(graph, i, visited, stack);
            }
        }
        
        System.out.println("Stack after first DFS: " + stack);
        
        // Step 2: Create transpose graph
        System.out.println("\\nStep 2: Creating transpose graph");
        GraphList transpose = getTranspose(graph);
        transpose.print();
        
        // Step 3: Second DFS on transpose graph
        System.out.println("\\nStep 3: Second DFS on transpose graph");
        visited.clear();
        
        while (!stack.isEmpty()) {
            int vertex = stack.pop();
            
            if (!visited.contains(vertex)) {
                List<Integer> scc = new ArrayList<>();
                System.out.println("\\nStarting DFS from vertex " + vertex + " in transpose");
                dfsTranspose(transpose, vertex, visited, scc);
                sccs.add(scc);
                System.out.println("Found SCC: " + scc);
            }
        }
        
        System.out.println("\\nAll Strongly Connected Components:");
        for (int i = 0; i < sccs.size(); i++) {
            System.out.println("SCC " + (i + 1) + ": " + sccs.get(i));
        }
        
        return sccs;
    }
    
    private static void fillOrder(GraphList graph, int vertex, Set<Integer> visited, Stack<Integer> stack) {
        visited.add(vertex);
        System.out.println("  Visiting vertex " + vertex);
        
        List<Edge> neighbors = graph.getNeighbors(vertex);
        for (Edge neighbor : neighbors) {
            if (!visited.contains(neighbor.vertex)) {
                System.out.println("    Going to unvisited neighbor " + neighbor.vertex);
                fillOrder(graph, neighbor.vertex, visited, stack);
            }
        }
        
        System.out.println("  Adding " + vertex + " to stack");
        stack.push(vertex);
    }
    
    private static GraphList getTranspose(GraphList graph) {
        GraphList transpose = new GraphList(graph.vertices);
        
        for (int u = 0; u < graph.vertices; u++) {
            List<Edge> neighbors = graph.getNeighbors(u);
            for (Edge neighbor : neighbors) {
                // Reverse the edge direction
                transpose.addEdge(neighbor.vertex, u, neighbor.weight);
            }
        }
        
        return transpose;
    }
    
    private static void dfsTranspose(GraphList transpose, int vertex, Set<Integer> visited, List<Integer> scc) {
        visited.add(vertex);
        scc.add(vertex);
        System.out.println("    Visiting vertex " + vertex + " in transpose");
        
        List<Edge> neighbors = transpose.getNeighbors(vertex);
        for (Edge neighbor : neighbors) {
            if (!visited.contains(neighbor.vertex)) {
                dfsTranspose(transpose, neighbor.vertex, visited, scc);
            }
        }
    }
    
    public static void main(String[] args) {
        GraphList graph = new GraphList(8);
        graph.addEdge(0, 1, 1);
        graph.addEdge(1, 2, 1);
        graph.addEdge(2, 0, 1);
        graph.addEdge(2, 3, 1);
        graph.addEdge(3, 4, 1);
        graph.addEdge(4, 5, 1);
        graph.addEdge(5, 6, 1);
        graph.addEdge(6, 4, 1);
        graph.addEdge(6, 7, 1);
        
        System.out.println("=== Testing Kosaraju's Algorithm ===");
        graph.print();
        kosarajuSCC(graph);
    }
}`,
        }}
        explanation="Kosaraju's algorithm finds SCCs using two DFS passes: 1) Fill stack with finish times, 2) DFS on transpose graph. Time: O(V + E), Space: O(V)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Need to find strongly connected components (SCCs) in directed graph: maximal sets where every vertex reachable from every other.",
              details: ["Kosaraju uses two DFS passes and graph transpose"],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "First DFS records finish order; second DFS on transposed graph visits vertices in reverse finish order to collect SCCs.",
              keywords: [
                "Kosaraju",
                "transpose graph",
                "finish times",
                "stack",
              ],
              details: [
                "Reverse order ensures we start DFS from 'source' components in condensation DAG",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Adjacency list; stack/vector to store finish order; transposed adjacency list (edges reversed).",
              details: ["Visited arrays for both passes"],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "(1) DFS on original graph, pushing vertices onto stack after exploring neighbors. (2) Transpose graph. (3) Pop vertices from stack; for each unvisited vertex run DFS on transpose to collect SCC.",
              details: ["Add each DFS tree from second pass as an SCC"],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Time O(V+E). Alternative algorithms: Tarjan's single-pass using low-link values.",
              details: [
                "Ensure recursion stack depth manageable or convert to iterative",
              ],
            },
          ],
          pattern: "Kosaraju Two-Pass SCC",
          complexity: {
            time: "O(V + E)",
            space: "O(V + E)",
          },
        }}
      />

      <ProblemBlock
        title="Articulation Points"
        difficulty="Hard"
        description="Find articulation points (cut vertices) in undirected graph using DFS."
        solutions={{
          JavaScript: `// Articulation Points (Cut Vertices)

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
findArticulationPoints(graph);`,
          Java: `import java.util.*;

// GraphList and Edge classes (from earlier problems)
class GraphList {
    int vertices;
    List<List<Edge>> adjList;
    
    public GraphList(int vertices) {
        this.vertices = vertices;
        this.adjList = new ArrayList<>();
        for (int i = 0; i < vertices; i++) {
            adjList.add(new ArrayList<>());
        }
    }
    
    public void addEdge(int u, int v, int weight) {
        adjList.get(u).add(new Edge(v, weight));
        adjList.get(v).add(new Edge(u, weight));
    }
    
    public List<Edge> getNeighbors(int u) {
        return adjList.get(u);
    }
    
    public void print() {
        System.out.println("Adjacency List:");
        for (int i = 0; i < vertices; i++) {
            System.out.println(i + ": " + adjList.get(i));
        }
    }
}

class Edge {
    int vertex;
    int weight;
    
    Edge(int vertex, int weight) {
        this.vertex = vertex;
        this.weight = weight;
    }
    
    @Override
    public String toString() {
        return vertex + "(" + weight + ")";
    }
}

public class ArticulationPoints {
    private static int time = 0;
    
    public static List<Integer> findArticulationPoints(GraphList graph) {
        Set<Integer> visited = new HashSet<>();
        int[] disc = new int[graph.vertices];
        Arrays.fill(disc, -1);
        int[] low = new int[graph.vertices];
        Arrays.fill(low, -1);
        int[] parent = new int[graph.vertices];
        Arrays.fill(parent, -1);
        boolean[] ap = new boolean[graph.vertices];
        time = 0;
        
        System.out.println("Finding Articulation Points");
        
        for (int i = 0; i < graph.vertices; i++) {
            if (!visited.contains(i)) {
                System.out.println("\\nStarting DFS from vertex " + i);
                findAPDFS(graph, i, visited, disc, low, parent, ap);
            }
        }
        
        List<Integer> articulationPoints = new ArrayList<>();
        for (int i = 0; i < graph.vertices; i++) {
            if (ap[i]) {
                articulationPoints.add(i);
            }
        }
        
        System.out.println("\\nArticulation Points: " + articulationPoints);
        return articulationPoints;
    }
    
    private static void findAPDFS(GraphList graph, int u, Set<Integer> visited, 
                                   int[] disc, int[] low, int[] parent, boolean[] ap) {
        visited.add(u);
        disc[u] = low[u] = ++time;
        int children = 0;
        
        System.out.println("  Visiting vertex " + u + ", disc[" + u + "] = low[" + u + "] = " + time);
        
        List<Edge> neighbors = graph.getNeighbors(u);
        for (Edge neighbor : neighbors) {
            int v = neighbor.vertex;
            
            if (!visited.contains(v)) {
                children++;
                parent[v] = u;
                System.out.println("    Going to unvisited child " + v);
                findAPDFS(graph, v, visited, disc, low, parent, ap);
                
                // Check if subtree rooted at v has connection to ancestor of u
                low[u] = Math.min(low[u], low[v]);
                System.out.println("    Updated low[" + u + "] = " + low[u]);
                
                // u is articulation point if:
                // 1. u is root and has 2+ children
                // 2. u is not root and low[v] >= disc[u]
                if (parent[u] == -1 && children > 1) {
                    ap[u] = true;
                    System.out.println("    " + u + " is AP (root with " + children + " children)");
                } else if (parent[u] != -1 && low[v] >= disc[u]) {
                    ap[u] = true;
                    System.out.println("    " + u + " is AP (low[" + v + "] >= disc[" + u + "])");
                }
            } else if (v != parent[u]) {
                // Back edge to ancestor
                low[u] = Math.min(low[u], disc[v]);
                System.out.println("    Back edge to " + v + ", updated low[" + u + "] = " + low[u]);
            }
        }
    }
    
    public static void main(String[] args) {
        GraphList graph = new GraphList(7);
        graph.addEdge(0, 1, 1);
        graph.addEdge(1, 2, 1);
        graph.addEdge(2, 0, 1);
        graph.addEdge(1, 3, 1);
        graph.addEdge(1, 4, 1);
        graph.addEdge(1, 6, 1);
        graph.addEdge(3, 5, 1);
        graph.addEdge(4, 5, 1);
        
        System.out.println("=== Testing Articulation Points ===");
        graph.print();
        findArticulationPoints(graph);
    }
}`,
        }}
        explanation="Articulation points are vertices whose removal increases number of connected components. Use DFS with discovery time and low values. Time: O(V + E), Space: O(V)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Articulation points (cut vertices) disconnect graph if removed. Need to find all such vertices in undirected graph.",
              details: [
                "Use DFS tree with discovery times and low-link values",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Tarjan-style algorithm: maintain disc[u] (time first visited) and low[u] (lowest disc reachable from u).",
              keywords: ["Tarjan", "disc/low", "cut vertex", "DFS tree"],
              details: [
                "Root vertex is articulation point if it has ≥2 children",
                "Non-root u is articulation if exists child v with low[v] ≥ disc[u]",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Adjacency list, arrays for disc, low, parent, visited boolean, articulation boolean.",
              details: ["Timer increments per DFS visit"],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "DFS(u): set disc/low, for each neighbor v: if unvisited set parent, recurse, update low[u]=min(low[u],low[v]); check articulation conditions. If neighbor already visited and not parent, update low[u]=min(low[u],disc[v]).",
              details: [
                "After DFS, collect vertices flagged as articulation points",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Time O(V+E). Works only for undirected graphs (or treat as undirected).",
              details: ["Use vector/list to store results sorted if required"],
            },
          ],
          pattern: "Tarjan Disc/Low for Articulation Points",
          complexity: {
            time: "O(V + E)",
            space: "O(V)",
          },
        }}
      />

      <ProblemBlock
        title="Bridges in Graph"
        difficulty="Hard"
        description="Find bridges (cut edges) in undirected graph using DFS."
        solutions={{
          JavaScript: `// Bridges in Graph (Cut Edges)

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
findBridges(graph);`,
          Java: `import java.util.*;

// GraphList and Edge classes (from earlier problems)
class GraphList {
    int vertices;
    List<List<Edge>> adjList;
    
    public GraphList(int vertices) {
        this.vertices = vertices;
        this.adjList = new ArrayList<>();
        for (int i = 0; i < vertices; i++) {
            adjList.add(new ArrayList<>());
        }
    }
    
    public void addEdge(int u, int v, int weight) {
        adjList.get(u).add(new Edge(v, weight));
        adjList.get(v).add(new Edge(u, weight));
    }
    
    public List<Edge> getNeighbors(int u) {
        return adjList.get(u);
    }
    
    public void print() {
        System.out.println("Adjacency List:");
        for (int i = 0; i < vertices; i++) {
            System.out.println(i + ": " + adjList.get(i));
        }
    }
}

class Edge {
    int vertex;
    int weight;
    
    Edge(int vertex, int weight) {
        this.vertex = vertex;
        this.weight = weight;
    }
    
    @Override
    public String toString() {
        return vertex + "(" + weight + ")";
    }
}

class Bridge {
    int from;
    int to;
    
    Bridge(int from, int to) {
        this.from = from;
        this.to = to;
    }
    
    @Override
    public String toString() {
        return "(" + from + ", " + to + ")";
    }
}

public class BridgesInGraph {
    private static int time = 0;
    
    public static List<Bridge> findBridges(GraphList graph) {
        Set<Integer> visited = new HashSet<>();
        int[] disc = new int[graph.vertices];
        Arrays.fill(disc, -1);
        int[] low = new int[graph.vertices];
        Arrays.fill(low, -1);
        int[] parent = new int[graph.vertices];
        Arrays.fill(parent, -1);
        List<Bridge> bridges = new ArrayList<>();
        time = 0;
        
        System.out.println("Finding Bridges");
        
        for (int i = 0; i < graph.vertices; i++) {
            if (!visited.contains(i)) {
                System.out.println("\\nStarting DFS from vertex " + i);
                findBridgesDFS(graph, i, visited, disc, low, parent, bridges);
            }
        }
        
        System.out.println("\\nBridges: " + bridges);
        return bridges;
    }
    
    private static void findBridgesDFS(GraphList graph, int u, Set<Integer> visited, 
                                       int[] disc, int[] low, int[] parent, List<Bridge> bridges) {
        visited.add(u);
        disc[u] = low[u] = ++time;
        
        System.out.println("  Visiting vertex " + u + ", disc[" + u + "] = low[" + u + "] = " + time);
        
        List<Edge> neighbors = graph.getNeighbors(u);
        for (Edge neighbor : neighbors) {
            int v = neighbor.vertex;
            
            if (!visited.contains(v)) {
                parent[v] = u;
                System.out.println("    Going to unvisited child " + v);
                findBridgesDFS(graph, v, visited, disc, low, parent, bridges);
                
                // Check if subtree rooted at v has connection to ancestor of u
                low[u] = Math.min(low[u], low[v]);
                System.out.println("    Updated low[" + u + "] = " + low[u]);
                
                // Edge (u,v) is bridge if low[v] > disc[u]
                if (low[v] > disc[u]) {
                    bridges.add(new Bridge(u, v));
                    System.out.println("    Bridge found: (" + u + ", " + v + ")");
                }
            } else if (v != parent[u]) {
                // Back edge to ancestor
                low[u] = Math.min(low[u], disc[v]);
                System.out.println("    Back edge to " + v + ", updated low[" + u + "] = " + low[u]);
            }
        }
    }
    
    public static void main(String[] args) {
        GraphList graph = new GraphList(7);
        graph.addEdge(0, 1, 1);
        graph.addEdge(1, 2, 1);
        graph.addEdge(2, 0, 1);
        graph.addEdge(1, 3, 1);
        graph.addEdge(1, 4, 1);
        graph.addEdge(1, 6, 1);
        graph.addEdge(3, 5, 1);
        graph.addEdge(4, 5, 1);
        
        System.out.println("=== Testing Bridges ===");
        graph.print();
        findBridges(graph);
    }
}`,
        }}
        explanation="Bridges are edges whose removal increases number of connected components. Use DFS with discovery time and low values. Edge (u,v) is bridge if low[v] > disc[u]. Time: O(V + E), Space: O(V)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Bridges (cut edges) disconnect graph when removed. Need to list all such edges in undirected graph.",
              details: [
                "Similar technique to articulation points using disc/low arrays",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "During DFS, an edge (u,v) is bridge if no back edge from subtree v reaches u or ancestors ⇒ low[v] > disc[u].",
              keywords: ["Tarjan", "low-link", "bridge", "DFS"],
              details: [
                "low[v] = min(disc[v], low of children, disc of back edges)",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Adjacency list, arrays disc, low, parent, visited; vector to store bridge edges.",
              details: ["Timer increments per DFS visit"],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "DFS(u): set disc/low; for neighbor v: if unvisited set parent, recurse, update low[u]; after return if low[v] > disc[u], record edge (u,v); else if v != parent update low[u] = min(low[u], disc[v]).",
              details: [
                "Works only for undirected graphs; for directed use different algorithms",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Time O(V+E). Output bridges sorted or as pairs as needed.",
              details: [
                "Use long recursion limit or iterative DFS for very deep graphs",
              ],
            },
          ],
          pattern: "Bridge Detection via Disc/Low",
          complexity: {
            time: "O(V + E)",
            space: "O(V)",
          },
        }}
      />
    </div>
  );
}
