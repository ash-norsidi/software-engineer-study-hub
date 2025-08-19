import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ChevronRight, BookOpen, Code, Database, Cloud, Shield, Cpu, Network, GitBranch } from 'lucide-react'

const Study = () => {
  const [selectedTopic, setSelectedTopic] = useState(null)

  const studyTopics = [
    {
      id: 'data-structures',
      title: 'Data Structures & Algorithms',
      icon: <Code className="h-6 w-6" />,
      description: 'Master fundamental and advanced data structures and algorithms',
      difficulty: 'Intermediate',
      topics: [
        'Arrays and Strings',
        'Linked Lists',
        'Stacks and Queues',
        'Trees and Binary Search Trees',
        'Graphs and Graph Algorithms',
        'Hash Tables',
        'Heaps and Priority Queues',
        'Dynamic Programming',
        'Sorting and Searching Algorithms',
        'Big O Analysis'
      ],
      content: `
<h1>Data Structures & Algorithms</h1>

<h2>Overview</h2>

<p>Welcome to the fascinating world of data structures and algorithms! If you're completely new to programming or computer science, don't worry – we'll start from the very beginning and build your understanding step by step.</p>

<p>Think of data structures as different ways to organize and store information in a computer's memory, just like how you might organize books on a shelf, clothes in a closet, or files in a filing cabinet. Each method of organization has its own advantages and is better suited for different tasks.</p>

<p>Algorithms, on the other hand, are step-by-step instructions for solving problems or performing tasks. They're like recipes in cooking – they tell you exactly what steps to follow to achieve a desired result.</p>

<h3>Why Learn Data Structures and Algorithms?</h3>

<ol>
<li><strong>Problem-Solving Skills</strong>: They teach you how to break down complex problems into smaller, manageable pieces</li>
<li><strong>Efficiency</strong>: They help you write programs that run faster and use less memory</li>
<li><strong>Technical Interviews</strong>: Most software engineering interviews heavily focus on these concepts</li>
<li><strong>Foundation Knowledge</strong>: They form the backbone of all computer programs and systems</li>
<li><strong>Better Programming</strong>: Understanding these concepts makes you a more thoughtful and effective programmer</li>
</ol>

<h2>Arrays and Strings</h2>

<h3>What is an Array?</h3>

<p>Imagine you have a row of mailboxes in an apartment building, each numbered from 0, 1, 2, 3, and so on. Each mailbox can hold one piece of mail. An array is exactly like this – it's a collection of storage locations (called elements) arranged in a sequence, where each location has a number (called an index).</p>

<p><strong>Real-World Analogy</strong>: Think of an array like a parking lot with numbered parking spaces. Each space can hold exactly one car, and you can find any car quickly if you know its parking space number.</p>

<h3>Key Characteristics of Arrays:</h3>

<ul>
<li><strong>Fixed Size</strong>: Traditional arrays have a predetermined number of elements that cannot be changed after creation</li>
<li><strong>Homogeneous Elements</strong>: All elements must be of the same data type</li>
<li><strong>Zero-based Indexing</strong>: Most programming languages start counting from 0, not 1</li>
<li><strong>Contiguous Memory</strong>: Elements are stored next to each other in the computer's memory</li>
</ul>

<h3>Time Complexities Explained:</h3>

<ul>
<li><strong>Access: O(1)</strong> - This means "constant time." No matter how big your array is, finding an element by its index takes the same amount of time.</li>
<li><strong>Search: O(n)</strong> - This means "linear time." In the worst case, you might have to look through every single element.</li>
<li><strong>Insertion: O(n)</strong> - Adding an element in the middle requires shifting all elements after it.</li>
<li><strong>Deletion: O(n)</strong> - Similar to insertion, removing an element requires shifting subsequent elements.</li>
</ul>

<h3>Example Implementation (JavaScript):</h3>

<pre><code>// Creating an array - like setting up a row of mailboxes
let studentGrades = [85, 92, 78, 96, 88];

// Accessing an element - O(1) time complexity
console.log(studentGrades[2]); // Output: 78 (the third grade)

// Adding an element at the end - O(1) amortized time
studentGrades.push(91); // Now: [85, 92, 78, 96, 88, 91]

// Searching for an element - O(n) time
let indexOfGrade96 = studentGrades.indexOf(96); // Returns 3

// Real-world example: Managing a shopping list
let shoppingList = ['apples', 'bread', 'milk', 'eggs'];
shoppingList.push('cheese'); // Add to end
console.log(shoppingList); // ['apples', 'bread', 'milk', 'eggs', 'cheese']
</code></pre>

<h2>Linked Lists</h2>

<h3>Understanding Linked Lists</h3>

<p>Imagine a treasure hunt where each clue leads you to the next location. You start at the first clue, which tells you where to find the second clue, which tells you where to find the third clue, and so on. This is exactly how a linked list works!</p>

<p>Unlike arrays where elements are stored in consecutive memory locations, linked lists store elements anywhere in memory, but each element contains a "pointer" or "reference" to the next element.</p>

<h3>Example Implementation:</h3>

<pre><code>class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;    // The data stored in this node
        this.next = next;  // Pointer to the next node
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;  // Points to the first node
        this.size = 0;     // Keeps track of how many nodes we have
    }
    
    // Insert at the beginning - O(1) time complexity
    prepend(val) {
        const newNode = new ListNode(val, this.head);
        this.head = newNode;
        this.size++;
    }
    
    // Search for a value - O(n) time complexity
    search(val) {
        let current = this.head;
        let position = 0;
        
        while (current) {
            if (current.val === val) {
                return position;
            }
            current = current.next;
            position++;
        }
        
        return -1; // Not found
    }
}
</code></pre>

<h2>Stacks and Queues</h2>

<h3>Stacks - Last In, First Out (LIFO)</h3>

<p>Think of a stack like a stack of plates in a cafeteria. You can only add a new plate to the top of the stack, and you can only take a plate from the top. The last plate you put on is the first one you'll take off.</p>

<h3>Example Implementation:</h3>

<pre><code>class Stack {
    constructor() {
        this.items = [];
    }
    
    push(element) {
        this.items.push(element);
    }
    
    pop() {
        if (this.isEmpty()) return null;
        return this.items.pop();
    }
    
    peek() {
        if (this.isEmpty()) return null;
        return this.items[this.items.length - 1];
    }
    
    isEmpty() {
        return this.items.length === 0;
    }
}

// Example: Balanced Parentheses Checker
function isBalanced(expression) {
    const stack = new Stack();
    const pairs = { '(': ')', '[': ']', '{': '}' };
    
    for (let char of expression) {
        if (char in pairs) {
            stack.push(char);
        } else if (Object.values(pairs).includes(char)) {
            if (stack.isEmpty() || pairs[stack.pop()] !== char) {
                return false;
            }
        }
    }
    
    return stack.isEmpty();
}
</code></pre>

<h3>Queues - First In, First Out (FIFO)</h3>

<p>A queue is like a line of people waiting at a bank or grocery store. The first person to join the line is the first person to be served.</p>

<h3>Example Implementation:</h3>

<pre><code>class Queue {
    constructor() {
        this.items = [];
        this.front = 0;
        this.rear = 0;
    }
    
    enqueue(element) {
        this.items[this.rear] = element;
        this.rear++;
    }
    
    dequeue() {
        if (this.isEmpty()) return null;
        const item = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return item;
    }
    
    isEmpty() {
        return this.rear === this.front;
    }
}
</code></pre>

<h2>Trees and Binary Search Trees</h2>

<h3>Binary Trees</h3>

<p>A binary tree is a hierarchical data structure where each node has at most two children, referred to as the left child and right child.</p>

<h3>Binary Search Trees (BST)</h3>

<p>A Binary Search Tree is a binary tree with the ordering property: for every node, all values in the left subtree are less than the node's value, and all values in the right subtree are greater.</p>

<pre><code>class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    
    insert(val) {
        this.root = this.insertNode(this.root, val);
    }
    
    insertNode(node, val) {
        if (!node) return new TreeNode(val);
        
        if (val < node.val) {
            node.left = this.insertNode(node.left, val);
        } else if (val > node.val) {
            node.right = this.insertNode(node.right, val);
        }
        
        return node;
    }
    
    search(val) {
        return this.searchNode(this.root, val);
    }
    
    searchNode(node, val) {
        if (!node || node.val === val) return node;
        
        if (val < node.val) {
            return this.searchNode(node.left, val);
        } else {
            return this.searchNode(node.right, val);
        }
    }
}
</code></pre>

<h2>Hash Tables</h2>

<p>Hash tables provide average O(1) time complexity for insertion, deletion, and lookup operations. They use a hash function to map keys to array indices.</p>

<pre><code>class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }
    
    hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }
    
    set(key, value) {
        let index = this.hash(key);
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }
    
    get(key) {
        let index = this.hash(key);
        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1];
                }
            }
        }
        return undefined;
    }
}
</code></pre>

<h2>Big O Analysis</h2>

<p>Big O notation describes the performance or complexity of an algorithm. It specifically describes the worst-case scenario.</p>

<h3>Common Time Complexities:</h3>

<ul>
<li><strong>O(1)</strong>: Constant time - hash table access, array indexing</li>
<li><strong>O(log n)</strong>: Logarithmic time - binary search, balanced tree operations</li>
<li><strong>O(n)</strong>: Linear time - linear search, single loop through array</li>
<li><strong>O(n log n)</strong>: Linearithmic time - efficient sorting algorithms</li>
<li><strong>O(n²)</strong>: Quadratic time - nested loops, bubble sort</li>
<li><strong>O(2^n)</strong>: Exponential time - recursive fibonacci, subset generation</li>
</ul>

<h2>External Resources</h2>

<p>For deeper understanding and practice, explore these comprehensive resources:</p>

<ul>
<li><a href="https://leetcode.com/" target="_blank">LeetCode</a> - Extensive collection of coding problems with solutions</li>
<li><a href="https://www.geeksforgeeks.org/data-structures/" target="_blank">GeeksforGeeks Data Structures</a> - Detailed tutorials and implementations</li>
<li><a href="https://visualgo.net/" target="_blank">Visualgo</a> - Interactive algorithm visualizations</li>
<li><a href="https://www.algorist.com/" target="_blank">Algorithm Design Manual</a> - Comprehensive textbook by Steven Skiena</li>
<li><a href="https://mitpress.mit.edu/books/introduction-algorithms-third-edition" target="_blank">Introduction to Algorithms (CLRS)</a> - Classic algorithms textbook</li>
<li><a href="https://www.hackerrank.com/" target="_blank">HackerRank</a> - Coding challenges and competitions</li>
<li><a href="https://www.coursera.org/specializations/algorithms" target="_blank">Coursera Algorithms Specialization</a> - Stanford University course series</li>
</ul>
      `
    },
    {
      id: 'system-design',
      title: 'System Design',
      icon: <Network className="h-6 w-6" />,
      description: 'Learn to design scalable and reliable distributed systems',
      difficulty: 'Advanced',
      topics: [
        'Scalability Principles',
        'Load Balancing',
        'Caching Strategies',
        'Database Design',
        'Microservices Architecture',
        'Message Queues',
        'CAP Theorem',
        'Consistency Models',
        'Distributed Systems',
        'API Design'
      ],
      content: `
<h1>System Design</h1>

<h2>Overview</h2>

<p>System design is the process of defining the architecture, components, modules, interfaces, and data for a system to satisfy specified requirements. It's a critical skill for software engineers, especially at mid to senior levels.</p>

<h2>Scalability Principles</h2>

<h3>Horizontal vs Vertical Scaling</h3>

<p><strong>Horizontal Scaling (Scale Out)</strong>: Adding more servers to handle increased load.</p>
<p><strong>Vertical Scaling (Scale Up)</strong>: Adding more power (CPU, RAM) to existing servers.</p>

<h3>Load Balancing</h3>

<p>Load balancers distribute incoming requests across multiple servers to ensure no single server becomes overwhelmed.</p>

<pre><code>class LoadBalancer {
    constructor() {
        this.servers = [];
        this.currentIndex = 0;
    }
    
    addServer(server) {
        this.servers.push(server);
    }
    
    // Round-robin algorithm
    getNextServer() {
        if (this.servers.length === 0) return null;
        
        const server = this.servers[this.currentIndex];
        this.currentIndex = (this.currentIndex + 1) % this.servers.length;
        
        return server;
    }
}
</code></pre>

<h2>Caching Strategies</h2>

<p>Caching stores frequently accessed data in fast storage to reduce latency and improve performance.</p>

<h3>Cache Levels:</h3>

<ol>
<li><strong>Browser Cache</strong>: Stores static resources (CSS, JS, images)</li>
<li><strong>CDN</strong>: Geographically distributed cache servers</li>
<li><strong>Application Cache</strong>: In-memory caching (Redis, Memcached)</li>
<li><strong>Database Cache</strong>: Query result caching</li>
</ol>

<h2>Database Design</h2>

<h3>SQL vs NoSQL</h3>

<p><strong>SQL Databases</strong>: ACID properties, structured data, complex queries</p>
<p><strong>NoSQL Databases</strong>: Flexible schema, horizontal scaling, eventual consistency</p>

<h3>CAP Theorem</h3>

<p>You can only guarantee two of the following three properties:</p>
<ul>
<li><strong>Consistency</strong>: All nodes see the same data simultaneously</li>
<li><strong>Availability</strong>: System remains operational</li>
<li><strong>Partition Tolerance</strong>: System continues despite network failures</li>
</ul>

<h2>Microservices Architecture</h2>

<p>Breaking down applications into small, independent services that communicate over well-defined APIs.</p>

<h3>Benefits:</h3>
<ul>
<li>Independent deployment</li>
<li>Technology diversity</li>
<li>Fault isolation</li>
<li>Scalability</li>
</ul>

<h3>Challenges:</h3>
<ul>
<li>Distributed system complexity</li>
<li>Network latency</li>
<li>Data consistency</li>
<li>Service discovery</li>
</ul>

<h2>External Resources</h2>

<ul>
<li><a href="https://github.com/donnemartin/system-design-primer" target="_blank">System Design Primer</a> - Comprehensive system design guide</li>
<li><a href="https://www.educative.io/courses/grokking-the-system-design-interview" target="_blank">Grokking the System Design Interview</a> - Interview preparation</li>
<li><a href="https://aws.amazon.com/architecture/" target="_blank">AWS Architecture Center</a> - Real-world architecture examples</li>
</ul>
      `
    },
    {
      id: 'database-systems',
      title: 'Database Systems',
      icon: <Database className="h-6 w-6" />,
      description: 'Understand relational and NoSQL databases, optimization, and design',
      difficulty: 'Intermediate',
      topics: [
        'Relational Database Design',
        'SQL Optimization',
        'NoSQL Databases',
        'Database Indexing',
        'Transactions and ACID',
        'Database Sharding',
        'Replication Strategies',
        'Data Modeling',
        'Query Performance',
        'Database Security'
      ],
      content: `
<h1>Database Systems</h1>

<h2>Overview</h2>
<p>Database systems are crucial for storing, retrieving, and managing data efficiently in software applications.</p>

<h2>Relational Databases</h2>

<h3>ACID Properties</h3>
<ul>
<li><strong>Atomicity</strong>: Transactions are all-or-nothing</li>
<li><strong>Consistency</strong>: Database remains in valid state</li>
<li><strong>Isolation</strong>: Concurrent transactions don't interfere</li>
<li><strong>Durability</strong>: Committed changes persist</li>
</ul>

<h3>Normalization</h3>
<ul>
<li><strong>1NF</strong>: Eliminate repeating groups</li>
<li><strong>2NF</strong>: Remove partial dependencies</li>
<li><strong>3NF</strong>: Remove transitive dependencies</li>
<li><strong>BCNF</strong>: Stricter form of 3NF</li>
</ul>

<h2>NoSQL Databases</h2>

<h3>Types</h3>
<ul>
<li><strong>Document</strong>: MongoDB, CouchDB</li>
<li><strong>Key-Value</strong>: Redis, DynamoDB</li>
<li><strong>Column-Family</strong>: Cassandra, HBase</li>
<li><strong>Graph</strong>: Neo4j, Amazon Neptune</li>
</ul>

<h2>External Resources</h2>
<ul>
<li><a href="https://www.postgresql.org/docs/" target="_blank">PostgreSQL Documentation</a> - Comprehensive SQL reference</li>
<li><a href="https://university.mongodb.com/" target="_blank">MongoDB University</a> - NoSQL database courses</li>
</ul>
      `
    },
    {
      id: 'cloud-computing',
      title: 'Cloud Computing',
      icon: <Cloud className="h-6 w-6" />,
      description: 'Learn cloud platforms, services, and deployment strategies',
      difficulty: 'Intermediate',
      topics: [
        'Cloud Service Models',
        'AWS/Azure/GCP Basics',
        'Containerization',
        'Kubernetes',
        'Serverless Computing',
        'Cloud Security',
        'DevOps Practices',
        'Infrastructure as Code',
        'Monitoring and Logging',
        'Cost Optimization'
      ],
      content: `
<h1>Cloud Computing</h1>

<h2>Overview</h2>
<p>Cloud computing provides on-demand access to computing resources over the internet, enabling scalable and cost-effective solutions.</p>

<h2>Service Models</h2>

<h3>IaaS (Infrastructure as a Service)</h3>
<ul>
<li><strong>Examples</strong>: AWS EC2, Azure VMs, Google Compute Engine</li>
<li><strong>Use Cases</strong>: When you need full control over the operating system</li>
</ul>

<h3>PaaS (Platform as a Service)</h3>
<ul>
<li><strong>Examples</strong>: AWS Elastic Beanstalk, Azure App Service</li>
<li><strong>Use Cases</strong>: Focus on application development</li>
</ul>

<h3>SaaS (Software as a Service)</h3>
<ul>
<li><strong>Examples</strong>: Gmail, Salesforce, Office 365</li>
<li><strong>Use Cases</strong>: Ready-to-use applications</li>
</ul>

<h2>External Resources</h2>
<ul>
<li><a href="https://aws.amazon.com/training/" target="_blank">AWS Training</a> - Official AWS courses</li>
<li><a href="https://docs.microsoft.com/en-us/learn/azure/" target="_blank">Microsoft Azure Learning</a> - Azure documentation</li>
</ul>
      `
    },
    {
      id: 'software-security',
      title: 'Software Security',
      icon: <Shield className="h-6 w-6" />,
      description: 'Understand security principles, vulnerabilities, and best practices',
      difficulty: 'Advanced',
      topics: [
        'Authentication and Authorization',
        'Common Vulnerabilities (OWASP)',
        'Cryptography Basics',
        'Secure Coding Practices',
        'Input Validation',
        'SQL Injection Prevention',
        'Cross-Site Scripting (XSS)',
        'CSRF Protection',
        'Security Testing',
        'Compliance and Standards'
      ],
      content: `
<h1>Software Security</h1>

<h2>Overview</h2>
<p>Software security involves protecting applications and data from threats and vulnerabilities throughout the development lifecycle.</p>

<h2>Common Vulnerabilities (OWASP Top 10)</h2>

<ol>
<li><strong>Injection</strong>: SQL, NoSQL, OS, and LDAP injection</li>
<li><strong>Broken Authentication</strong>: Session management flaws</li>
<li><strong>Sensitive Data Exposure</strong>: Inadequate protection of sensitive data</li>
<li><strong>XML External Entities (XXE)</strong>: Poorly configured XML processors</li>
<li><strong>Broken Access Control</strong>: Restrictions not properly enforced</li>
</ol>

<h2>Security Best Practices</h2>

<h3>Input Validation</h3>
<pre><code>function sanitizeInput(input) {
    // Remove HTML tags and escape special characters
    return input.replace(/<[^>]*>?/gm, '').replace(/[&<>"']/g, function(match) {
        const escape = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;'
        };
        return escape[match];
    });
}
</code></pre>

<h2>External Resources</h2>
<ul>
<li><a href="https://owasp.org/" target="_blank">OWASP</a> - Open Web Application Security Project</li>
<li><a href="https://portswigger.net/web-security" target="_blank">PortSwigger Web Security Academy</a> - Free security training</li>
</ul>
      `
    },
    {
      id: 'software-architecture',
      title: 'Software Architecture',
      icon: <Cpu className="h-6 w-6" />,
      description: 'Learn architectural patterns, design principles, and system organization',
      difficulty: 'Advanced',
      topics: [
        'Architectural Patterns',
        'Design Principles (SOLID)',
        'Microservices vs Monoliths',
        'Event-Driven Architecture',
        'Domain-Driven Design',
        'Clean Architecture',
        'API Design',
        'Performance Considerations',
        'Scalability Patterns',
        'Documentation and Communication'
      ],
      content: `
<h1>Software Architecture</h1>

<h2>Overview</h2>
<p>Software architecture defines the high-level structure of software systems and the discipline of creating such structures.</p>

<h2>SOLID Principles</h2>

<ul>
<li><strong>S</strong> - Single Responsibility Principle</li>
<li><strong>O</strong> - Open/Closed Principle</li>
<li><strong>L</strong> - Liskov Substitution Principle</li>
<li><strong>I</strong> - Interface Segregation Principle</li>
<li><strong>D</strong> - Dependency Inversion Principle</li>
</ul>

<h2>Architectural Patterns</h2>

<h3>Model-View-Controller (MVC)</h3>
<p>Separates application logic into three interconnected components.</p>

<h3>Microservices Architecture</h3>
<p>Structures an application as a collection of loosely coupled services.</p>

<h3>Event-Driven Architecture</h3>
<p>Uses events to trigger and communicate between decoupled services.</p>

<h2>External Resources</h2>
<ul>
<li><a href="https://martinfowler.com/architecture/" target="_blank">Martin Fowler's Architecture Articles</a> - Architectural insights</li>
<li><a href="https://www.oreilly.com/library/view/software-architecture-patterns/9781491971437/" target="_blank">Software Architecture Patterns</a> - O'Reilly book</li>
</ul>
      `
    },
    {
      id: 'version-control',
      title: 'Version Control & Git',
      icon: <GitBranch className="h-6 w-6" />,
      description: 'Master Git workflows, branching strategies, and collaboration',
      difficulty: 'Beginner',
      topics: [
        'Git Fundamentals',
        'Branching and Merging',
        'Remote Repositories',
        'Conflict Resolution',
        'Git Workflows',
        'Advanced Git Commands',
        'GitHub/GitLab Features',
        'Code Review Process',
        'Continuous Integration',
        'Best Practices'
      ],
      content: `
<h1>Version Control & Git</h1>

<h2>Overview</h2>
<p>Version control systems track changes to files over time, enabling collaboration and maintaining project history.</p>

<h2>Git Fundamentals</h2>

<h3>Basic Commands</h3>
<pre><code># Initialize a repository
git init

# Add files to staging area
git add filename.txt
git add .  # Add all files

# Commit changes
git commit -m "Commit message"

# Check status
git status

# View commit history
git log
</code></pre>

<h2>Branching and Merging</h2>

<pre><code># Create and switch to new branch
git checkout -b feature-branch

# Switch between branches
git checkout main
git checkout feature-branch

# Merge branch
git checkout main
git merge feature-branch

# Delete branch
git branch -d feature-branch
</code></pre>

<h2>Git Workflows</h2>

<h3>Feature Branch Workflow</h3>
<ol>
<li>Create feature branch from main</li>
<li>Develop feature in isolation</li>
<li>Create pull request</li>
<li>Code review and merge</li>
</ol>

<h2>External Resources</h2>
<ul>
<li><a href="https://git-scm.com/doc" target="_blank">Official Git Documentation</a> - Comprehensive Git guide</li>
<li><a href="https://learngitbranching.js.org/" target="_blank">Learn Git Branching</a> - Interactive Git tutorial</li>
</ul>
      `
    }
  ]

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
      case 'Advanced': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
    }
  }

  if (selectedTopic) {
    const topic = studyTopics.find(t => t.id === selectedTopic)
    return (
      <div className="min-h-screen bg-background p-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-6">
            <Button 
              variant="ghost" 
              onClick={() => setSelectedTopic(null)}
              className="mb-4"
            >
              ← Back to Topics
            </Button>
            <div className="flex items-center gap-4 mb-4">
              {topic.icon}
              <h1 className="text-3xl font-bold text-foreground">{topic.title}</h1>
              <Badge className={getDifficultyColor(topic.difficulty)}>
                {topic.difficulty}
              </Badge>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {/* Sidebar with topics */}
            <div className="md:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Topics Covered</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {topic.topics.map((subtopic, index) => (
                      <li key={index} className="text-sm text-muted-foreground">
                        • {subtopic}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Main content */}
            <div className="md:col-span-3">
              <Card>
                <CardContent className="p-6">
                  <div className="prose prose-gray dark:prose-invert max-w-none">
                    <div dangerouslySetInnerHTML={{ __html: topic.content }} />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Study Materials</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive study materials covering all aspects of software engineering. 
            Choose a topic to begin your learning journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {studyTopics.map((topic) => (
            <Card 
              key={topic.id} 
              className="hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setSelectedTopic(topic.id)}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    {topic.icon}
                    <Badge className={getDifficultyColor(topic.difficulty)}>
                      {topic.difficulty}
                    </Badge>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </div>
                <CardTitle className="text-xl">{topic.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  {topic.description}
                </CardDescription>
                <div className="text-sm text-muted-foreground">
                  {topic.topics.length} topics covered
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Study

