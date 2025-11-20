"use client";

import { useState } from "react";

export default function GreedyPage() {
  const [activeSection, setActiveSection] = useState("fundamentals");

  const sections = [
    { id: "fundamentals", title: "Fundamentals", icon: "📚" },
    { id: "problems", title: "Classic Problems", icon: "🎯" },
    { id: "huffman", title: "Huffman Coding", icon: "📝" },
    { id: "advanced", title: "Advanced", icon: "⚡" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
            Greedy Algorithms Mastery
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Master greedy algorithms: Activity Selection, Knapsack Problems, Job
            Sequencing, Huffman Coding, and advanced greedy techniques
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
                  ? "bg-orange-600 text-white shadow-lg"
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
          {activeSection === "problems" && <ProblemsSection />}
          {activeSection === "huffman" && <HuffmanSection />}
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
                  ? "bg-orange-500 text-white"
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
            className="px-4 py-2 bg-orange-600 hover:bg-orange-700 rounded-lg text-sm font-semibold transition-colors"
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
                    ? "text-orange-300 border-b-2 border-orange-300"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                Solution
              </button>
              <button
                onClick={() => setActiveTab("approach")}
                className={`px-4 py-2 font-semibold transition-colors ${
                  activeTab === "approach"
                    ? "text-orange-300 border-b-2 border-orange-300"
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
      <div className="bg-gradient-to-r from-orange-900/40 to-red-900/30 rounded-xl p-6 border border-orange-500/30">
        <h3 className="text-2xl font-bold text-white mb-2">
          🎯 Problem Solving Approach
        </h3>
        <p className="text-gray-300 text-sm">
          Following the systematic 5-step framework for this greedy problem
        </p>
      </div>

      {approach.steps?.map((step, index) => (
        <div
          key={index}
          className="bg-gray-800 rounded-lg p-5 border border-gray-700"
        >
          <div className="flex items-start gap-4">
            <div className="bg-orange-500 text-gray-900 rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
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
                      className="px-2 py-1 bg-orange-500/20 text-orange-200 rounded text-xs"
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
        <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-lg p-4">
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
        <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
          <h4 className="text-lg font-semibold text-purple-200 mb-2">
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
          Introduction to Greedy Algorithms
        </h2>
        <p className="text-gray-300 mb-6">
          A greedy algorithm is a simple, intuitive algorithm that makes the
          locally optimal choice at each step with the hope of finding a global
          optimum. Greedy algorithms are used for optimization problems.
        </p>

        <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-orange-200 mb-3">
            Greedy Algorithm Characteristics:
          </h3>
          <ul className="space-y-2 text-orange-100">
            <li>
              • <strong>Greedy Choice Property:</strong> A global optimum can be
              arrived at by selecting a local optimum
            </li>
            <li>
              • <strong>Optimal Substructure:</strong> An optimal solution
              contains optimal solutions to subproblems
            </li>
            <li>
              • <strong>No Backtracking:</strong> Once a choice is made,
              it&apos;s never reconsidered
            </li>
            <li>
              • <strong>Top-Down Approach:</strong> Problems are solved by
              making the best choice at each step
            </li>
            <li>
              • <strong>Efficiency:</strong> Often more efficient than other
              approaches
            </li>
          </ul>
        </div>

        <div className="mt-6 bg-gray-700 rounded-lg p-4">
          <h4 className="text-lg font-semibold text-white mb-3">
            When to Use Greedy Algorithms:
          </h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h5 className="font-semibold text-green-400 mb-2">
                ✅ Good for:
              </h5>
              <ul className="space-y-1 text-gray-300">
                <li>• Activity Selection Problem</li>
                <li>• Fractional Knapsack</li>
                <li>• Huffman Coding</li>
                <li>• Minimum Spanning Tree</li>
                <li>• Shortest Path (Dijkstra)</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-red-400 mb-2">
                ❌ Not good for:
              </h5>
              <ul className="space-y-1 text-gray-300">
                <li>• 0/1 Knapsack Problem</li>
                <li>• Traveling Salesman Problem</li>
                <li>• Longest Path Problem</li>
                <li>• Problems requiring backtracking</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Greedy Algorithm Template
        </h2>
        <p className="text-gray-300 mb-6">
          Here&apos;s a general template for implementing greedy algorithms:
        </p>

        <CodeBlock
          code={{
            JavaScript: `// General Greedy Algorithm Template

function greedyAlgorithm(input) {
  // Step 1: Sort the input based on some criteria
  input.sort((a, b) => {
    // Define sorting criteria based on problem
    return a.criteria - b.criteria; // or b.criteria - a.criteria
  });
  
  // Step 2: Initialize result and current state
  let result = [];
  let currentState = initialValue;
  
  // Step 3: Make greedy choices
  for (let item of input) {
    if (isValidChoice(item, currentState)) {
      result.push(item);
      currentState = updateState(currentState, item);
    }
  }
  
  return result;
}

// Helper functions
function isValidChoice(item, currentState) {
  // Check if this choice doesn't violate constraints
  return true; // Implement based on problem
}

function updateState(currentState, item) {
  // Update the current state after making a choice
  return currentState; // Implement based on problem
}

// Example usage
const activities = [
  { start: 1, end: 3, name: 'A' },
  { start: 2, end: 5, name: 'B' },
  { start: 0, end: 6, name: 'C' },
  { start: 5, end: 7, name: 'D' },
  { start: 8, end: 9, name: 'E' },
  { start: 5, end: 9, name: 'F' }
];

console.log("Greedy Algorithm Template Example");
console.log("Input:", activities);
console.log("Result:", greedyAlgorithm(activities));`,
            Java: `import java.util.*;

// General Greedy Algorithm Template
public class GreedyAlgorithmTemplate {
    // General greedy algorithm method
    public static List<Activity> greedyAlgorithm(List<Activity> input) {
        // Step 1: Sort the input based on some criteria
        input.sort((a, b) -> {
            // Define sorting criteria based on problem
            return a.criteria - b.criteria; // or b.criteria - a.criteria
        });
        
        // Step 2: Initialize result and current state
        List<Activity> result = new ArrayList<>();
        int currentState = 0; // initialValue
        
        // Step 3: Make greedy choices
        for (Activity item : input) {
            if (isValidChoice(item, currentState)) {
                result.add(item);
                currentState = updateState(currentState, item);
            }
        }
        
        return result;
    }
    
    // Helper functions
    private static boolean isValidChoice(Activity item, int currentState) {
        // Check if this choice doesn't violate constraints
        return true; // Implement based on problem
    }
    
    private static int updateState(int currentState, Activity item) {
        // Update the current state after making a choice
        return currentState; // Implement based on problem
    }
    
    // Activity class for example
    static class Activity {
        int start;
        int end;
        String name;
        int criteria;
        
        Activity(int start, int end, String name) {
            this.start = start;
            this.end = end;
            this.name = name;
            this.criteria = end; // Example: use end time as criteria
        }
        
        @Override
        public String toString() {
            return name + "(" + start + "-" + end + ")";
        }
    }
    
    // Example usage
    public static void main(String[] args) {
        List<Activity> activities = new ArrayList<>();
        activities.add(new Activity(1, 3, "A"));
        activities.add(new Activity(2, 5, "B"));
        activities.add(new Activity(0, 6, "C"));
        activities.add(new Activity(5, 7, "D"));
        activities.add(new Activity(8, 9, "E"));
        activities.add(new Activity(5, 9, "F"));
        
        System.out.println("Greedy Algorithm Template Example");
        System.out.println("Input: " + activities);
        System.out.println("Result: " + greedyAlgorithm(activities));
    }
}`,
          }}
        />
      </div>
    </div>
  );
}

function ProblemsSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-white mb-6">
        Classic Greedy Problems
      </h2>

      <ProblemBlock
        title="Activity Selection Problem"
        difficulty="Medium"
        description="Select maximum number of non-overlapping activities from a set of activities with start and end times."
        solutions={{
          JavaScript: `// Activity Selection Problem

// Approach 1: Sort by end time (Greedy)
function activitySelection(activities) {
  console.log("Activity Selection Problem - Greedy Approach");
  console.log("Original activities:", activities);
  
  // Sort activities by end time
  activities.sort((a, b) => a.end - b.end);
  console.log("Sorted by end time:", activities);
  
  const selected = [];
  let lastEndTime = 0;
  
  for (let i = 0; i < activities.length; i++) {
    const activity = activities[i];
    console.log("\\nChecking activity " + activity.name + ": start=" + activity.start + ", end=" + activity.end);
    console.log("Last end time: " + lastEndTime);
    
    if (activity.start >= lastEndTime) {
      selected.push(activity);
      lastEndTime = activity.end;
      console.log("✓ Selected activity " + activity.name);
      console.log("Updated last end time to: " + lastEndTime);
    } else {
      console.log("✗ Skipped activity " + activity.name + " (overlaps with previous)");
    }
  }
  
  console.log("\\nSelected activities: [" + selected.map(a => a.name).join(', ') + "]");
  console.log("Total activities selected: " + selected.length);
  
  return selected;
}

// Test cases
const activities = [
  { start: 1, end: 3, name: 'A' },
  { start: 2, end: 5, name: 'B' },
  { start: 0, end: 6, name: 'C' },
  { start: 5, end: 7, name: 'D' },
  { start: 8, end: 9, name: 'E' },
  { start: 5, end: 9, name: 'F' }
];

console.log("=== Testing Activity Selection Problem ===");
activitySelection([...activities]);`,
          Java: `import java.util.*;

public class ActivitySelection {
    // Activity class
    static class Activity {
        int start;
        int end;
        String name;
        
        Activity(int start, int end, String name) {
            this.start = start;
            this.end = end;
            this.name = name;
        }
        
        @Override
        public String toString() {
            return name + "(" + start + "-" + end + ")";
        }
    }
    
    // Approach 1: Sort by end time (Greedy)
    public static List<Activity> activitySelection(List<Activity> activities) {
        System.out.println("Activity Selection Problem - Greedy Approach");
        System.out.println("Original activities: " + activities);
        
        // Sort activities by end time
        activities.sort((a, b) -> Integer.compare(a.end, b.end));
        System.out.println("Sorted by end time: " + activities);
        
        List<Activity> selected = new ArrayList<>();
        int lastEndTime = 0;
        
        for (Activity activity : activities) {
            System.out.println("\\nChecking activity " + activity.name + 
                             ": start=" + activity.start + ", end=" + activity.end);
            System.out.println("Last end time: " + lastEndTime);
            
            if (activity.start >= lastEndTime) {
                selected.add(activity);
                lastEndTime = activity.end;
                System.out.println("✓ Selected activity " + activity.name);
                System.out.println("Updated last end time to: " + lastEndTime);
            } else {
                System.out.println("✗ Skipped activity " + activity.name + 
                                 " (overlaps with previous)");
            }
        }
        
        System.out.println("\\nSelected activities: " + selected);
        System.out.println("Total activities selected: " + selected.size());
        
        return selected;
    }
    
    public static void main(String[] args) {
        List<Activity> activities = new ArrayList<>();
        activities.add(new Activity(1, 3, "A"));
        activities.add(new Activity(2, 5, "B"));
        activities.add(new Activity(0, 6, "C"));
        activities.add(new Activity(5, 7, "D"));
        activities.add(new Activity(8, 9, "E"));
        activities.add(new Activity(5, 9, "F"));
        
        System.out.println("=== Testing Activity Selection Problem ===");
        activitySelection(new ArrayList<>(activities));
    }
}`,
        }}
        explanation="Greedy approach: sort by end time, always select the activity with earliest end time that doesn't conflict. This guarantees optimal solution. Time: O(n log n), Space: O(1)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Single resource can perform one activity at a time; choose max compatible activities based on start/end times.",
              details: [
                "Assume activities sorted first by finish time after preprocessing",
                "Clarify inclusive/exclusive end times to avoid boundary bugs",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Earliest-finish-time greedy. Selecting activity finishing soonest leaves largest room for future activities.",
              keywords: [
                "interval scheduling",
                "earliest finish",
                "non-overlap",
              ],
              details: ["This is classic matroid/interval scheduling problem"],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Array of activity objects with start/end; need sort helper and container for selected activities.",
              details: [
                "Maintain variable `lastEnd` to track end time of last chosen activity",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Sort activities by end time, iterate; if `activity.start >= lastEnd`, select and update `lastEnd`.",
              details: ["Skip otherwise; continue scanning entire list once"],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Time dominated by sort O(n log n); iteration O(n) with constant space.",
              details: [
                "No need for extra data structures beyond output array",
              ],
            },
          ],
          pattern: "Earliest Finish Time Scheduling",
          complexity: {
            time: "O(n log n)",
            space: "O(1) extra (O(n) if storing result)",
          },
        }}
      />

      <ProblemBlock
        title="Fractional Knapsack Problem"
        difficulty="Medium"
        description="Maximize value in knapsack by taking fractions of items. Items can be divided."
        solutions={{
          JavaScript: `// Fractional Knapsack Problem

function fractionalKnapsack(items, capacity) {
  console.log("Fractional Knapsack Problem");
  console.log("Items:", items);
  console.log("Knapsack capacity:", capacity);
  
  // Calculate value per unit weight
  const itemsWithRatio = items.map(item => ({
    ...item,
    ratio: item.value / item.weight
  }));
  
  console.log("\\nStep 1: Calculate value per unit weight");
  itemsWithRatio.forEach(item => {
    console.log(item.name + ": value=" + item.value + ", weight=" + item.weight + ", ratio=" + item.ratio.toFixed(2));
  });
  
  // Sort by value per unit weight (descending)
  itemsWithRatio.sort((a, b) => b.ratio - a.ratio);
  console.log("\\nStep 2: Sort by value per unit weight (descending)");
  console.log("Sorted items:", itemsWithRatio.map(item => item.name + "(" + item.ratio.toFixed(2) + ")"));
  
  let totalValue = 0;
  let remainingCapacity = capacity;
  const selectedItems = [];
  
  console.log("\\nStep 3: Greedy selection process");
  
  for (let i = 0; i < itemsWithRatio.length && remainingCapacity > 0; i++) {
    const item = itemsWithRatio[i];
    console.log("\\n--- Item " + (i + 1) + ": " + item.name + " ---");
    console.log("Value: " + item.value + ", Weight: " + item.weight + ", Ratio: " + item.ratio.toFixed(2));
    console.log("Remaining capacity: " + remainingCapacity);
    
    if (item.weight <= remainingCapacity) {
      // Take the entire item
      const fraction = 1;
      const value = item.value;
      const weight = item.weight;
      
      selectedItems.push({
        name: item.name,
        fraction: fraction,
        value: value,
        weight: weight
      });
      
      totalValue += value;
      remainingCapacity -= weight;
      
      console.log("✓ Took entire item: " + (fraction * 100) + "% of " + item.name);
      console.log("Added value: " + value + ", Added weight: " + weight);
    } else {
      // Take fraction of the item
      const fraction = remainingCapacity / item.weight;
      const value = fraction * item.value;
      const weight = remainingCapacity;
      
      selectedItems.push({
        name: item.name,
        fraction: fraction,
        value: value,
        weight: weight
      });
      
      totalValue += value;
      remainingCapacity = 0;
      
      console.log("✓ Took fraction: " + (fraction * 100).toFixed(1) + "% of " + item.name);
      console.log("Added value: " + value.toFixed(2) + ", Added weight: " + weight);
    }
    
    console.log("Total value so far: " + totalValue.toFixed(2));
    console.log("Remaining capacity: " + remainingCapacity);
  }
  
  console.log("\\n=== Final Result ===");
  console.log("Selected items:");
  selectedItems.forEach(item => {
    console.log("  " + item.name + ": " + (item.fraction * 100).toFixed(1) + "% (value: " + item.value.toFixed(2) + ", weight: " + item.weight.toFixed(2) + ")");
  });
  console.log("Total value: " + totalValue.toFixed(2));
  console.log("Total weight: " + (capacity - remainingCapacity).toFixed(2) + "/" + capacity);
  
  return { selectedItems, totalValue, totalWeight: capacity - remainingCapacity };
}

// Test cases
const items = [
  { name: 'A', value: 60, weight: 10 },
  { name: 'B', value: 100, weight: 20 },
  { name: 'C', value: 120, weight: 30 }
];

const capacity = 50;

console.log("=== Testing Fractional Knapsack ===");
fractionalKnapsack([...items], capacity);`,
          Java: `import java.util.*;

public class FractionalKnapsack {
    // Item class
    static class Item {
        String name;
        double value;
        double weight;
        double ratio;
        
        Item(String name, double value, double weight) {
            this.name = name;
            this.value = value;
            this.weight = weight;
            this.ratio = value / weight;
        }
    }
    
    // Selected item class
    static class SelectedItem {
        String name;
        double fraction;
        double value;
        double weight;
        
        SelectedItem(String name, double fraction, double value, double weight) {
            this.name = name;
            this.fraction = fraction;
            this.value = value;
            this.weight = weight;
        }
    }
    
    // Result class
    static class KnapsackResult {
        List<SelectedItem> selectedItems;
        double totalValue;
        double totalWeight;
        
        KnapsackResult(List<SelectedItem> selectedItems, double totalValue, double totalWeight) {
            this.selectedItems = selectedItems;
            this.totalValue = totalValue;
            this.totalWeight = totalWeight;
        }
    }
    
    public static KnapsackResult fractionalKnapsack(List<Item> items, double capacity) {
        System.out.println("Fractional Knapsack Problem");
        System.out.println("Items: " + items);
        System.out.println("Knapsack capacity: " + capacity);
        
        // Calculate value per unit weight
        System.out.println("\\nStep 1: Calculate value per unit weight");
        for (Item item : items) {
            System.out.println(item.name + ": value=" + item.value + 
                             ", weight=" + item.weight + 
                             ", ratio=" + String.format("%.2f", item.ratio));
        }
        
        // Sort by value per unit weight (descending)
        items.sort((a, b) -> Double.compare(b.ratio, a.ratio));
        System.out.println("\\nStep 2: Sort by value per unit weight (descending)");
        System.out.print("Sorted items: ");
        for (Item item : items) {
            System.out.print(item.name + "(" + String.format("%.2f", item.ratio) + ") ");
        }
        System.out.println();
        
        double totalValue = 0;
        double remainingCapacity = capacity;
        List<SelectedItem> selectedItems = new ArrayList<>();
        
        System.out.println("\\nStep 3: Greedy selection process");
        
        for (int i = 0; i < items.size() && remainingCapacity > 0; i++) {
            Item item = items.get(i);
            System.out.println("\\n--- Item " + (i + 1) + ": " + item.name + " ---");
            System.out.println("Value: " + item.value + ", Weight: " + item.weight + 
                             ", Ratio: " + String.format("%.2f", item.ratio));
            System.out.println("Remaining capacity: " + remainingCapacity);
            
            if (item.weight <= remainingCapacity) {
                // Take the entire item
                double fraction = 1;
                double value = item.value;
                double weight = item.weight;
                
                selectedItems.add(new SelectedItem(item.name, fraction, value, weight));
                
                totalValue += value;
                remainingCapacity -= weight;
                
                System.out.println("✓ Took entire item: " + (fraction * 100) + "% of " + item.name);
                System.out.println("Added value: " + value + ", Added weight: " + weight);
            } else {
                // Take fraction of the item
                double fraction = remainingCapacity / item.weight;
                double value = fraction * item.value;
                double weight = remainingCapacity;
                
                selectedItems.add(new SelectedItem(item.name, fraction, value, weight));
                
                totalValue += value;
                remainingCapacity = 0;
                
                System.out.println("✓ Took fraction: " + String.format("%.1f", fraction * 100) + 
                                 "% of " + item.name);
                System.out.println("Added value: " + String.format("%.2f", value) + 
                                 ", Added weight: " + weight);
            }
            
            System.out.println("Total value so far: " + String.format("%.2f", totalValue));
            System.out.println("Remaining capacity: " + remainingCapacity);
        }
        
        System.out.println("\\n=== Final Result ===");
        System.out.println("Selected items:");
        for (SelectedItem item : selectedItems) {
            System.out.println("  " + item.name + ": " + 
                             String.format("%.1f", item.fraction * 100) + "% " +
                             "(value: " + String.format("%.2f", item.value) + 
                             ", weight: " + String.format("%.2f", item.weight) + ")");
        }
        System.out.println("Total value: " + String.format("%.2f", totalValue));
        System.out.println("Total weight: " + String.format("%.2f", capacity - remainingCapacity) + 
                         "/" + capacity);
        
        return new KnapsackResult(selectedItems, totalValue, capacity - remainingCapacity);
    }
    
    public static void main(String[] args) {
        List<Item> items = new ArrayList<>();
        items.add(new Item("A", 60, 10));
        items.add(new Item("B", 100, 20));
        items.add(new Item("C", 120, 30));
        
        double capacity = 50;
        
        System.out.println("=== Testing Fractional Knapsack ===");
        fractionalKnapsack(new ArrayList<>(items), capacity);
    }
}`,
        }}
        explanation="Greedy approach: sort by value per unit weight, always take the item with highest value/weight ratio. For fractional knapsack, this guarantees optimal solution. Time: O(n log n), Space: O(1)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Items divisible; objective maximize total value given capacity constraint.",
              details: [
                "Clarify units (int/double) and whether capacity can be fractional",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "When fractions allowed, always pick highest value-to-weight ratio first.",
              keywords: [
                "value/weight ratio",
                "greedy choice",
                "continuous knapsack",
              ],
              details: [
                "This is optimal because marginal gain constant per unit weight",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Array of items plus derived ratio field; optionally min-heap/ sort list.",
              details: [
                "Need accumulator for total value, remaining capacity, and selected fractions",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Sort by ratio descending; iterate items, take full item if weight fits else take fraction `remaining/weight`.",
              details: ["Break loop once capacity zero"],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Sorting dominates runtime; scanning is linear. Space constant besides output list.",
              details: [
                "Use doubles for ratio/fractions to avoid integer truncation",
              ],
            },
          ],
          pattern: "Greedy by Value-to-Weight Ratio",
          complexity: {
            time: "O(n log n)",
            space: "O(1) extra",
          },
        }}
      />

      <ProblemBlock
        title="Job Sequencing Problem"
        difficulty="Medium"
        description="Schedule jobs to maximize profit with deadline constraints. Each job has a deadline and profit."
        solutions={{
          JavaScript: `// Job Sequencing Problem

function jobSequencing(jobs) {
  console.log("Job Sequencing Problem");
  console.log("Input jobs:", jobs);
  
  // Sort jobs by profit in descending order
  const sortedJobs = [...jobs].sort((a, b) => b.profit - a.profit);
  console.log("\\nStep 1: Sort jobs by profit (descending)");
  console.log("Sorted jobs:", sortedJobs.map(job => job.id + "(" + job.profit + ")"));
  
  // Find maximum deadline
  const maxDeadline = Math.max(...jobs.map(job => job.deadline));
  console.log("\\nStep 2: Maximum deadline = " + maxDeadline);
  
  // Initialize result array
  const result = new Array(maxDeadline).fill(null);
  let totalProfit = 0;
  let jobsScheduled = 0;
  
  console.log("\\nStep 3: Greedy scheduling process");
  
  for (let i = 0; i < sortedJobs.length; i++) {
    const job = sortedJobs[i];
    console.log("\\n--- Processing Job " + job.id + " ---");
    console.log("Profit: " + job.profit + ", Deadline: " + job.deadline);
    
    // Find latest available slot before deadline
    let slot = job.deadline - 1;
    while (slot >= 0 && result[slot] !== null) {
      slot--;
    }
    
    if (slot >= 0) {
      result[slot] = job;
      totalProfit += job.profit;
      jobsScheduled++;
      console.log("✓ Scheduled Job " + job.id + " at slot " + slot);
      console.log("Running total: " + jobsScheduled + " jobs, " + totalProfit + " profit");
    } else {
      console.log("✗ Cannot schedule Job " + job.id + " (no available slot before deadline " + job.deadline + ")");
    }
    
    console.log("Current schedule:", result.map((job, index) => 
      job ? "Slot " + index + ": Job " + job.id : "Slot " + index + ": Empty"
    ));
  }
  
  console.log("\\n=== Final Result ===");
  console.log("Optimal schedule:");
  result.forEach((job, index) => {
    if (job) {
      console.log("  Slot " + index + ": Job " + job.id + " (profit: " + job.profit + ")");
    }
  });
  console.log("Total jobs scheduled: " + jobsScheduled);
  console.log("Total profit: " + totalProfit);
  
  return {
    schedule: result.filter(job => job !== null),
    totalProfit,
    jobsScheduled
  };
}

// Test cases
const jobs = [
  { id: 'A', deadline: 2, profit: 100 },
  { id: 'B', deadline: 1, profit: 19 },
  { id: 'C', deadline: 2, profit: 27 },
  { id: 'D', deadline: 1, profit: 25 },
  { id: 'E', deadline: 3, profit: 15 }
];

console.log("=== Testing Job Sequencing ===");
jobSequencing([...jobs]);`,
          Java: `import java.util.*;

public class JobSequencing {
    // Job class
    static class Job {
        String id;
        int deadline;
        int profit;
        
        Job(String id, int deadline, int profit) {
            this.id = id;
            this.deadline = deadline;
            this.profit = profit;
        }
        
        @Override
        public String toString() {
            return id + "(deadline=" + deadline + ", profit=" + profit + ")";
        }
    }
    
    // Result class
    static class JobSequencingResult {
        List<Job> schedule;
        int totalProfit;
        int jobsScheduled;
        
        JobSequencingResult(List<Job> schedule, int totalProfit, int jobsScheduled) {
            this.schedule = schedule;
            this.totalProfit = totalProfit;
            this.jobsScheduled = jobsScheduled;
        }
    }
    
    public static JobSequencingResult jobSequencing(List<Job> jobs) {
        System.out.println("Job Sequencing Problem");
        System.out.println("Input jobs: " + jobs);
        
        // Sort jobs by profit in descending order
        List<Job> sortedJobs = new ArrayList<>(jobs);
        sortedJobs.sort((a, b) -> Integer.compare(b.profit, a.profit));
        System.out.println("\\nStep 1: Sort jobs by profit (descending)");
        System.out.print("Sorted jobs: ");
        for (Job job : sortedJobs) {
            System.out.print(job.id + "(" + job.profit + ") ");
        }
        System.out.println();
        
        // Find maximum deadline
        int maxDeadline = jobs.stream().mapToInt(j -> j.deadline).max().orElse(0);
        System.out.println("\\nStep 2: Maximum deadline = " + maxDeadline);
        
        // Initialize result array
        Job[] result = new Job[maxDeadline];
        int totalProfit = 0;
        int jobsScheduled = 0;
        
        System.out.println("\\nStep 3: Greedy scheduling process");
        
        for (Job job : sortedJobs) {
            System.out.println("\\n--- Processing Job " + job.id + " ---");
            System.out.println("Profit: " + job.profit + ", Deadline: " + job.deadline);
            
            // Find latest available slot before deadline
            int slot = job.deadline - 1;
            while (slot >= 0 && result[slot] != null) {
                slot--;
            }
            
            if (slot >= 0) {
                result[slot] = job;
                totalProfit += job.profit;
                jobsScheduled++;
                System.out.println("✓ Scheduled Job " + job.id + " at slot " + slot);
                System.out.println("Running total: " + jobsScheduled + " jobs, " + 
                                 totalProfit + " profit");
            } else {
                System.out.println("✗ Cannot schedule Job " + job.id + 
                                 " (no available slot before deadline " + job.deadline + ")");
            }
            
            System.out.print("Current schedule: ");
            for (int i = 0; i < result.length; i++) {
                if (result[i] != null) {
                    System.out.print("Slot " + i + ": Job " + result[i].id + " ");
                } else {
                    System.out.print("Slot " + i + ": Empty ");
                }
            }
            System.out.println();
        }
        
        System.out.println("\\n=== Final Result ===");
        System.out.println("Optimal schedule:");
        List<Job> schedule = new ArrayList<>();
        for (int i = 0; i < result.length; i++) {
            if (result[i] != null) {
                System.out.println("  Slot " + i + ": Job " + result[i].id + 
                                 " (profit: " + result[i].profit + ")");
                schedule.add(result[i]);
            }
        }
        System.out.println("Total jobs scheduled: " + jobsScheduled);
        System.out.println("Total profit: " + totalProfit);
        
        return new JobSequencingResult(schedule, totalProfit, jobsScheduled);
    }
    
    public static void main(String[] args) {
        List<Job> jobs = new ArrayList<>();
        jobs.add(new Job("A", 2, 100));
        jobs.add(new Job("B", 1, 19));
        jobs.add(new Job("C", 2, 27));
        jobs.add(new Job("D", 1, 25));
        jobs.add(new Job("E", 3, 15));
        
        System.out.println("=== Testing Job Sequencing ===");
        jobSequencing(new ArrayList<>(jobs));
    }
}`,
        }}
        explanation="Greedy approach: sort by profit (descending), schedule each job at the latest possible slot before its deadline. This maximizes total profit. Time: O(n²), Space: O(n)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Each job takes unit time; need maximize profit respecting deadlines; at most one job per slot.",
              details: [
                "Deadlines typically 1-indexed; ensure interpretation when building slots array",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Greedy by profit. Always try to schedule most profitable remaining job as late as possible.",
              keywords: [
                "greedy scheduling",
                "deadline slotting",
                "profit sorting",
              ],
              details: [
                "Late placement preserves earlier slots for other jobs",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Array of jobs; after computing max deadline allocate slots array of length maxDeadline initialized null.",
              details: [
                "Optional DSU / disjoint set for optimization, but array scan sufficient for small constraints",
              ],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Sort jobs by profit desc. For each job, find latest empty slot ≤ deadline-1 and place job there.",
              details: ["If no slot available skip job"],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Naive search per job yields O(n²); DSU can reduce to near O(n log n) if needed.",
              details: ["Track total profit and scheduled jobs for reporting"],
            },
          ],
          pattern: "Schedule by Profit with Latest Slot",
          complexity: {
            time: "O(n²) (or O(n log n) with DSU)",
            space: "O(n)",
          },
        }}
      />
    </div>
  );
}

function HuffmanSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-white mb-6">Huffman Coding</h2>

      <ProblemBlock
        title="Huffman Coding Introduction"
        difficulty="Medium"
        description="Introduction to Huffman coding - a lossless data compression algorithm that assigns variable-length codes to characters based on their frequency."
        solutions={{
          JavaScript: `// Huffman Coding Introduction

class HuffmanNode {
  constructor(char = null, freq = 0, left = null, right = null) {
    this.char = char;      // Character (null for internal nodes)
    this.freq = freq;      // Frequency
    this.left = left;      // Left child
    this.right = right;    // Right child
  }
}

class HuffmanCoding {
  constructor(text) {
    this.text = text;
    this.frequencies = this.calculateFrequencies(text);
    this.root = null;
    this.codes = {};
  }

  // Calculate character frequencies
  calculateFrequencies(text) {
    const freq = {};
    for (let char of text) {
      freq[char] = (freq[char] || 0) + 1;
    }
    return freq;
  }

  // Build Huffman tree
  buildTree() {
    console.log("=== Building Huffman Tree ===");
    console.log("Character frequencies:", this.frequencies);
    
    // Create priority queue (min heap) with all leaf nodes
    const heap = [];
    for (let char in this.frequencies) {
      heap.push(new HuffmanNode(char, this.frequencies[char]));
    }
    
    // Sort by frequency (min heap)
    heap.sort((a, b) => a.freq - b.freq);
    console.log("Initial heap:", heap.map(node => node.char + ":" + node.freq));
    
    // Build tree by combining two nodes with minimum frequency
    while (heap.length > 1) {
      console.log("\\n--- Iteration " + (heap.length - 1) + " ---");
      console.log("Current heap:", heap.map(node => (node.char || 'Internal') + ":" + node.freq));
      
      // Extract two nodes with minimum frequency
      const left = heap.shift();
      const right = heap.shift();
      
      console.log("Combining: " + (left.char || 'Internal') + ":" + left.freq + " + " + (right.char || 'Internal') + ":" + right.freq);
      
      // Create new internal node
      const internal = new HuffmanNode(
        null, 
        left.freq + right.freq, 
        left, 
        right
      );
      
      // Insert back into heap
      heap.push(internal);
      heap.sort((a, b) => a.freq - b.freq);
      
      console.log("Created internal node: " + internal.freq);
      console.log("Updated heap:", heap.map(node => (node.char || 'Internal') + ":" + node.freq));
    }
    
    this.root = heap[0];
    console.log("\\nHuffman tree built. Root frequency: " + this.root.freq);
    return this.root;
  }

  // Generate Huffman codes
  generateCodes() {
    if (!this.root) {
      this.buildTree();
    }
    
    console.log("\\n=== Generating Huffman Codes ===");
    this.codes = {};
    this.generateCodesHelper(this.root, "");
    
    console.log("Huffman codes:");
    for (let char in this.codes) {
      console.log("  " + char + ": " + this.codes[char]);
    }
    
    return this.codes;
  }

  generateCodesHelper(node, code) {
    if (node.char !== null) {
      // Leaf node
      this.codes[node.char] = code;
      console.log("  " + node.char + ": " + code);
      return;
    }
    
    // Internal node - traverse left and right
    if (node.left) {
      this.generateCodesHelper(node.left, code + "0");
    }
    if (node.right) {
      this.generateCodesHelper(node.right, code + "1");
    }
  }

  // Encode text using Huffman codes
  encode() {
    if (Object.keys(this.codes).length === 0) {
      this.generateCodes();
    }
    
    console.log("\\n=== Encoding Text ===");
    console.log("Original text:", this.text);
    
    let encoded = "";
    for (let char of this.text) {
      encoded += this.codes[char];
      console.log(char + " -> " + this.codes[char]);
    }
    
    console.log("Encoded text: " + encoded);
    console.log("Original size: " + (this.text.length * 8) + " bits");
    console.log("Encoded size: " + encoded.length + " bits");
    console.log("Compression ratio: " + (encoded.length / (this.text.length * 8) * 100).toFixed(1) + "%");
    
    return encoded;
  }

  // Decode text using Huffman tree
  decode(encoded) {
    if (!this.root) {
      throw new Error("Huffman tree not built");
    }
    
    console.log("\\n=== Decoding Text ===");
    console.log("Encoded text:", encoded);
    
    let decoded = "";
    let current = this.root;
    
    for (let bit of encoded) {
      if (bit === "0") {
        current = current.left;
      } else {
        current = current.right;
      }
      
      if (current.char !== null) {
        decoded += current.char;
        console.log(bit + " -> " + current.char);
        current = this.root; // Reset to root
      }
    }
    
    console.log("Decoded text: " + decoded);
    return decoded;
  }

  // Calculate compression statistics
  getStats() {
    const originalSize = this.text.length * 8;
    const encoded = this.encode();
    const compressedSize = encoded.length;
    
    return {
      originalSize,
      compressedSize,
      compressionRatio: (compressedSize / originalSize * 100).toFixed(1) + "%",
      spaceSaved: originalSize - compressedSize
    };
  }
}

// Test Huffman Coding
const text = "hello world";
console.log("=== Huffman Coding Example ===");
console.log("Text to compress:", text);

const huffman = new HuffmanCoding(text);
huffman.buildTree();
huffman.generateCodes();
const encoded = huffman.encode();
const decoded = huffman.decode(encoded);

console.log("\\n=== Verification ===");
console.log("Original:", text);
console.log("Decoded:", decoded);
console.log("Match:", text === decoded);

const stats = huffman.getStats();
console.log("\\n=== Compression Statistics ===");
console.log("Original size:", stats.originalSize, "bits");
console.log("Compressed size:", stats.compressedSize, "bits");
console.log("Compression ratio:", stats.compressionRatio);
console.log("Space saved:", stats.spaceSaved, "bits");`,
          Java: `import java.util.*;

// Huffman Coding Introduction
class HuffmanNode {
    Character character;
    int frequency;
    HuffmanNode left;
    HuffmanNode right;
    
    HuffmanNode(Character character, int frequency) {
        this.character = character;
        this.frequency = frequency;
        this.left = null;
        this.right = null;
    }
    
    HuffmanNode(Character character, int frequency, HuffmanNode left, HuffmanNode right) {
        this.character = character;
        this.frequency = frequency;
        this.left = left;
        this.right = right;
    }
}

class HuffmanCoding {
    private String text;
    private Map<Character, Integer> frequencies;
    private HuffmanNode root;
    private Map<Character, String> codes;
    
    public HuffmanCoding(String text) {
        this.text = text;
        this.frequencies = calculateFrequencies(text);
        this.root = null;
        this.codes = new HashMap<>();
    }
    
    // Calculate character frequencies
    private Map<Character, Integer> calculateFrequencies(String text) {
        Map<Character, Integer> freq = new HashMap<>();
        for (char c : text.toCharArray()) {
            freq.put(c, freq.getOrDefault(c, 0) + 1);
        }
        return freq;
    }
    
    // Build Huffman tree
    public HuffmanNode buildTree() {
        System.out.println("=== Building Huffman Tree ===");
        System.out.println("Character frequencies: " + frequencies);
        
        // Create priority queue (min heap) with all leaf nodes
        PriorityQueue<HuffmanNode> heap = new PriorityQueue<>(
            (a, b) -> Integer.compare(a.frequency, b.frequency)
        );
        
        for (Map.Entry<Character, Integer> entry : frequencies.entrySet()) {
            heap.offer(new HuffmanNode(entry.getKey(), entry.getValue()));
        }
        
        System.out.print("Initial heap: ");
        for (HuffmanNode node : heap) {
            System.out.print(node.character + ":" + node.frequency + " ");
        }
        System.out.println();
        
        // Build tree by combining two nodes with minimum frequency
        int iteration = 1;
        while (heap.size() > 1) {
            System.out.println("\\n--- Iteration " + iteration + " ---");
            System.out.print("Current heap: ");
            for (HuffmanNode node : heap) {
                System.out.print((node.character != null ? node.character : "Internal") + 
                               ":" + node.frequency + " ");
            }
            System.out.println();
            
            // Extract two nodes with minimum frequency
            HuffmanNode left = heap.poll();
            HuffmanNode right = heap.poll();
            
            System.out.println("Combining: " + 
                             (left.character != null ? left.character : "Internal") + 
                             ":" + left.frequency + " + " + 
                             (right.character != null ? right.character : "Internal") + 
                             ":" + right.frequency);
            
            // Create new internal node
            HuffmanNode internal = new HuffmanNode(
                null,
                left.frequency + right.frequency,
                left,
                right
            );
            
            // Insert back into heap
            heap.offer(internal);
            
            System.out.println("Created internal node: " + internal.frequency);
            iteration++;
        }
        
        this.root = heap.poll();
        System.out.println("\\nHuffman tree built. Root frequency: " + this.root.frequency);
        return this.root;
    }
    
    // Generate Huffman codes
    public Map<Character, String> generateCodes() {
        if (this.root == null) {
            this.buildTree();
        }
        
        System.out.println("\\n=== Generating Huffman Codes ===");
        this.codes = new HashMap<>();
        generateCodesHelper(this.root, "");
        
        System.out.println("Huffman codes:");
        for (Map.Entry<Character, String> entry : codes.entrySet()) {
            System.out.println("  " + entry.getKey() + ": " + entry.getValue());
        }
        
        return this.codes;
    }
    
    private void generateCodesHelper(HuffmanNode node, String code) {
        if (node.character != null) {
            // Leaf node
            this.codes.put(node.character, code);
            System.out.println("  " + node.character + ": " + code);
            return;
        }
        
        // Internal node - traverse left and right
        if (node.left != null) {
            generateCodesHelper(node.left, code + "0");
        }
        if (node.right != null) {
            generateCodesHelper(node.right, code + "1");
        }
    }
    
    // Encode text using Huffman codes
    public String encode() {
        if (codes.isEmpty()) {
            this.generateCodes();
        }
        
        System.out.println("\\n=== Encoding Text ===");
        System.out.println("Original text: " + text);
        
        StringBuilder encoded = new StringBuilder();
        for (char c : text.toCharArray()) {
            encoded.append(codes.get(c));
            System.out.println(c + " -> " + codes.get(c));
        }
        
        System.out.println("Encoded text: " + encoded.toString());
        System.out.println("Original size: " + (text.length() * 8) + " bits");
        System.out.println("Encoded size: " + encoded.length() + " bits");
        System.out.println("Compression ratio: " + 
                         String.format("%.1f", (double) encoded.length() / (text.length() * 8) * 100) + "%");
        
        return encoded.toString();
    }
    
    // Decode text using Huffman tree
    public String decode(String encoded) {
        if (this.root == null) {
            throw new RuntimeException("Huffman tree not built");
        }
        
        System.out.println("\\n=== Decoding Text ===");
        System.out.println("Encoded text: " + encoded);
        
        StringBuilder decoded = new StringBuilder();
        HuffmanNode current = this.root;
        
        for (char bit : encoded.toCharArray()) {
            if (bit == '0') {
                current = current.left;
            } else {
                current = current.right;
            }
            
            if (current.character != null) {
                decoded.append(current.character);
                System.out.println(bit + " -> " + current.character);
                current = this.root; // Reset to root
            }
        }
        
        System.out.println("Decoded text: " + decoded.toString());
        return decoded.toString();
    }
    
    // Calculate compression statistics
    public Map<String, Object> getStats() {
        int originalSize = text.length() * 8;
        String encoded = this.encode();
        int compressedSize = encoded.length();
        
        Map<String, Object> stats = new HashMap<>();
        stats.put("originalSize", originalSize);
        stats.put("compressedSize", compressedSize);
        stats.put("compressionRatio", String.format("%.1f", (double) compressedSize / originalSize * 100) + "%");
        stats.put("spaceSaved", originalSize - compressedSize);
        
        return stats;
    }
    
    public static void main(String[] args) {
        String text = "hello world";
        System.out.println("=== Huffman Coding Example ===");
        System.out.println("Text to compress: " + text);
        
        HuffmanCoding huffman = new HuffmanCoding(text);
        huffman.buildTree();
        huffman.generateCodes();
        String encoded = huffman.encode();
        String decoded = huffman.decode(encoded);
        
        System.out.println("\\n=== Verification ===");
        System.out.println("Original: " + text);
        System.out.println("Decoded: " + decoded);
        System.out.println("Match: " + text.equals(decoded));
        
        Map<String, Object> stats = huffman.getStats();
        System.out.println("\\n=== Compression Statistics ===");
        System.out.println("Original size: " + stats.get("originalSize") + " bits");
        System.out.println("Compressed size: " + stats.get("compressedSize") + " bits");
        System.out.println("Compression ratio: " + stats.get("compressionRatio"));
        System.out.println("Space saved: " + stats.get("spaceSaved") + " bits");
    }
}`,
        }}
        explanation="Huffman coding creates variable-length codes based on character frequency. More frequent characters get shorter codes. Uses min heap to build optimal binary tree. Time: O(n log n), Space: O(n)."
        approach={{
          steps: [
            {
              title: "Step 1: Understand & Clarify",
              description:
                "Need optimal prefix-free binary codes minimizing total bits given character frequencies.",
              details: [
                "Lossless compression; codes must satisfy prefix property for unique decoding",
              ],
            },
            {
              title: "Step 2: Identify Pattern",
              description:
                "Greedy strategy combining two least frequent symbols repeatedly (Huffman tree).",
              keywords: ["min-heap", "prefix code", "optimal merging"],
              details: [
                "Each merge decides relative depths and contributes minimal extra cost",
              ],
            },
            {
              title: "Step 3: Choose Data Structure",
              description:
                "Priority queue (min-heap) storing nodes {char, freq, left, right}.",
              details: ["Need map for final codes and tree for decoding"],
            },
            {
              title: "Step 4: Select Algorithm",
              description:
                "Push all chars with frequencies; while heap size > 1 pop two smallest, merge into new internal node and push back. After tree built, DFS to assign 0/1 codes.",
              details: [
                "Encoding uses dictionary char→code; decoding walks tree per bit",
              ],
            },
            {
              title: "Step 5: Implement & Optimize",
              description:
                "Heap operations give O(n log n) runtime; ensure stable tree building and handle single-character edge case.",
              details: [
                "Store tree/root for decode; release resources when done",
              ],
            },
          ],
          pattern: "Greedy Prefix Coding via Huffman Tree",
          complexity: {
            time: "O(n log n)",
            space: "O(n)",
          },
        }}
      />
    </div>
  );
}

function AdvancedSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-white mb-6">
        Advanced Greedy Problems
      </h2>

      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h3 className="text-2xl font-bold text-white mb-4">
          Greedy Algorithm Applications
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-lg font-semibold text-white mb-2">
              Scheduling Problems
            </h4>
            <p className="text-gray-300 text-sm">
              Activity selection, job scheduling, task assignment with deadlines
              and constraints.
            </p>
          </div>
          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-lg font-semibold text-white mb-2">
              Optimization Problems
            </h4>
            <p className="text-gray-300 text-sm">
              Fractional knapsack, minimum spanning tree, shortest path
              algorithms.
            </p>
          </div>
          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-lg font-semibold text-white mb-2">
              Compression Algorithms
            </h4>
            <p className="text-gray-300 text-sm">
              Huffman coding, data compression, file encoding and decoding.
            </p>
          </div>
          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-lg font-semibold text-white mb-2">
              Graph Algorithms
            </h4>
            <p className="text-gray-300 text-sm">
              Prim&apos;s MST, Kruskal&apos;s MST, Dijkstra&apos;s shortest
              path, topological sorting.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h3 className="text-2xl font-bold text-white mb-4">
          When to Use Greedy Algorithms
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold text-green-400 mb-3">
              ✅ Good Candidates
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li>• Problems with greedy choice property</li>
              <li>• Problems with optimal substructure</li>
              <li>• Optimization problems with local choices</li>
              <li>• Problems where greedy choice leads to global optimum</li>
              <li>• Scheduling and assignment problems</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-red-400 mb-3">
              ❌ Not Suitable
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li>• Problems requiring backtracking</li>
              <li>• Problems with overlapping subproblems</li>
              <li>• Problems where local optimum ≠ global optimum</li>
              <li>• Complex constraint satisfaction problems</li>
              <li>• Problems requiring exhaustive search</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h3 className="text-2xl font-bold text-white mb-4">
          Greedy vs Other Approaches
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-600">
                <th className="text-left py-2 text-white">Aspect</th>
                <th className="text-left py-2 text-white">Greedy</th>
                <th className="text-left py-2 text-white">
                  Dynamic Programming
                </th>
                <th className="text-left py-2 text-white">Divide & Conquer</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-gray-300">Time Complexity</td>
                <td className="py-2 text-green-400">Usually O(n log n)</td>
                <td className="py-2 text-yellow-400">Usually O(n²) or O(n³)</td>
                <td className="py-2 text-blue-400">Usually O(n log n)</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-gray-300">Space Complexity</td>
                <td className="py-2 text-green-400">Usually O(1) or O(n)</td>
                <td className="py-2 text-red-400">Usually O(n) or O(n²)</td>
                <td className="py-2 text-yellow-400">Usually O(log n)</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-gray-300">Optimality</td>
                <td className="py-2 text-yellow-400">Not always optimal</td>
                <td className="py-2 text-green-400">Always optimal</td>
                <td className="py-2 text-yellow-400">Depends on problem</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 text-gray-300">Backtracking</td>
                <td className="py-2 text-red-400">No backtracking</td>
                <td className="py-2 text-green-400">No backtracking</td>
                <td className="py-2 text-green-400">No backtracking</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
