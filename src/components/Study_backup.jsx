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
# Data Structures & Algorithms

## Overview

Welcome to the fascinating world of data structures and algorithms! If you're completely new to programming or computer science, don't worry – we'll start from the very beginning and build your understanding step by step.

Think of data structures as different ways to organize and store information in a computer's memory, just like how you might organize books on a shelf, clothes in a closet, or files in a filing cabinet. Each method of organization has its own advantages and is better suited for different tasks.

Algorithms, on the other hand, are step-by-step instructions for solving problems or performing tasks. They're like recipes in cooking – they tell you exactly what steps to follow to achieve a desired result.

Understanding data structures and algorithms is crucial for several reasons:

**Why Learn Data Structures and Algorithms?**

1. **Problem-Solving Skills**: They teach you how to break down complex problems into smaller, manageable pieces
2. **Efficiency**: They help you write programs that run faster and use less memory
3. **Technical Interviews**: Most software engineering interviews heavily focus on these concepts
4. **Foundation Knowledge**: They form the backbone of all computer programs and systems
5. **Better Programming**: Understanding these concepts makes you a more thoughtful and effective programmer

## Arrays and Strings

### What is an Array?

Imagine you have a row of mailboxes in an apartment building, each numbered from 0, 1, 2, 3, and so on. Each mailbox can hold one piece of mail. An array is exactly like this – it's a collection of storage locations (called elements) arranged in a sequence, where each location has a number (called an index).

**Real-World Analogy**: Think of an array like a parking lot with numbered parking spaces. Each space can hold exactly one car, and you can find any car quickly if you know its parking space number.

**Key Characteristics of Arrays:**

- **Fixed Size**: Traditional arrays have a predetermined number of elements that cannot be changed after creation (like a parking lot with a fixed number of spaces)
- **Homogeneous Elements**: All elements must be of the same data type (like a parking lot that only allows cars, not motorcycles or trucks)
- **Zero-based Indexing**: Most programming languages start counting from 0, not 1 (so the first parking space is numbered 0, not 1)
- **Contiguous Memory**: Elements are stored next to each other in the computer's memory (like parking spaces that are right next to each other)

**Time Complexities Explained:**

Let's understand what these "Big O" notations mean:

- **Access: O(1)** - This means "constant time." No matter how big your array is, finding an element by its index takes the same amount of time. It's like knowing exactly which mailbox to check – you go straight there without looking at any others.

- **Search: O(n)** - This means "linear time." In the worst case, you might have to look through every single element to find what you're looking for. It's like looking for a specific letter when you don't know which mailbox it's in – you might have to check every mailbox.

- **Insertion: O(n)** - Adding an element in the middle of an array requires shifting all the elements after it to make room. It's like inserting a new car in the middle of a row of parked cars – you'd have to move all the cars behind it.

- **Deletion: O(n)** - Similar to insertion, removing an element from the middle requires shifting all subsequent elements to fill the gap.

**Example Implementation (JavaScript):**

Let's look at some practical examples:

\`\`\`javascript
// Creating an array - like setting up a row of mailboxes
let studentGrades = [85, 92, 78, 96, 88];

// Accessing an element - O(1) time complexity
// This is like going directly to mailbox number 2
console.log(studentGrades[2]); // Output: 78 (the third grade)

// Why is it the third grade when we used index 2?
// Because arrays start counting from 0:
// Index 0: 85 (first grade)
// Index 1: 92 (second grade)  
// Index 2: 78 (third grade)
// Index 3: 96 (fourth grade)
// Index 4: 88 (fifth grade)

// Adding an element at the end - O(1) amortized time
studentGrades.push(91); // Now: [85, 92, 78, 96, 88, 91]

// Adding an element at the beginning - O(n) time
// This is expensive because we need to shift all existing elements
studentGrades.unshift(89); // Now: [89, 85, 92, 78, 96, 88, 91]

// Searching for an element - O(n) time
let indexOfGrade96 = studentGrades.indexOf(96); // Returns 4

// Real-world example: Managing a shopping list
let shoppingList = ['apples', 'bread', 'milk', 'eggs'];

// Adding items
shoppingList.push('cheese'); // Add to end
console.log(shoppingList); // ['apples', 'bread', 'milk', 'eggs', 'cheese']

// Checking if we need to buy milk
if (shoppingList.includes('milk')) {
    console.log('Milk is on the list!');
}

// Removing an item (we bought it)
let boughtItem = shoppingList.splice(2, 1); // Remove 'milk' at index 2
console.log(shoppingList); // ['apples', 'bread', 'eggs', 'cheese']
\`\`\`

**Dynamic Arrays - The Flexible Solution:**

Modern programming languages provide dynamic arrays (like JavaScript Arrays, Python Lists, Java ArrayLists) that can grow and shrink automatically. Think of these like expandable parking lots that can add more spaces when needed.

**How Dynamic Arrays Work:**
1. They start with a certain capacity (number of spaces)
2. When they get full, they automatically create a bigger array (usually double the size)
3. They copy all existing elements to the new array
4. This gives us "amortized O(1)" insertion at the end – most of the time it's fast, but occasionally it takes longer when resizing happens

### Strings - Arrays of Characters

A string is essentially an array of characters. Think of it like a necklace made of letter beads – each bead is a character, and they're strung together in a specific order.

**Understanding Strings:**

\`\`\`javascript
let greeting = "Hello";
// This is like having 5 boxes in a row:
// Index 0: 'H'
// Index 1: 'e'  
// Index 2: 'l'
// Index 3: 'l'
// Index 4: 'o'

// Accessing individual characters
console.log(greeting[0]); // 'H'
console.log(greeting[4]); // 'o'

// Getting the length
console.log(greeting.length); // 5
\`\`\`

**Common String Operations Explained:**

**1. Concatenation (Joining Strings):**
\`\`\`javascript
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName; // "John Doe"

// Modern way using template literals
let greeting = \`Hello, \${firstName} \${lastName}!\`; // "Hello, John Doe!"
\`\`\`

**2. Substring (Getting Part of a String):**
\`\`\`javascript
let sentence = "The quick brown fox";
let word = sentence.substring(4, 9); // "quick"
// This extracts characters from index 4 to 8 (9 is exclusive)
\`\`\`

**3. Pattern Matching (Finding Text):**
\`\`\`javascript
let email = "user@example.com";
if (email.includes("@")) {
    console.log("This looks like an email address");
}

// Finding the position of a character
let atPosition = email.indexOf("@"); // Returns 4
\`\`\`

**Example String Algorithms with Detailed Explanations:**

**1. String Reversal:**
\`\`\`javascript
function reverseString(str) {
    // Method 1: Using built-in methods (easiest to understand)
    return str.split('').reverse().join('');
    
    // What this does step by step:
    // 1. split('') converts "hello" to ['h','e','l','l','o']
    // 2. reverse() changes it to ['o','l','l','e','h']  
    // 3. join('') combines it back to "olleh"
}

// Method 2: Manual approach (more educational)
function reverseStringManual(str) {
    let reversed = '';
    // Start from the last character and work backwards
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log(reverseString("hello")); // "olleh"
\`\`\`

**2. Palindrome Checker (Reads the Same Forwards and Backwards):**
\`\`\`javascript
function isPalindrome(str) {
    // Convert to lowercase to ignore case differences
    str = str.toLowerCase();
    
    let left = 0;                    // Start from beginning
    let right = str.length - 1;     // Start from end
    
    while (left < right) {
        if (str[left] !== str[right]) {
            return false; // Characters don't match
        }
        left++;   // Move towards center from left
        right--;  // Move towards center from right
    }
    
    return true; // All characters matched
}

// Test with examples
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false
console.log(isPalindrome("A man a plan a canal Panama")); // Would need to ignore spaces
\`\`\`

**3. Finding Longest Substring Without Repeating Characters:**
\`\`\`javascript
function lengthOfLongestSubstring(s) {
    let maxLength = 0;
    let start = 0;
    let charMap = new Map(); // Keeps track of characters we've seen
    
    for (let end = 0; end < s.length; end++) {
        let currentChar = s[end];
        
        // If we've seen this character before and it's in our current window
        if (charMap.has(currentChar) && charMap.get(currentChar) >= start) {
            // Move our start position to after the repeated character
            start = charMap.get(currentChar) + 1;
        }
        
        // Update the position of the current character
        charMap.set(currentChar, end);
        
        // Update our maximum length if current window is longer
        maxLength = Math.max(maxLength, end - start + 1);
    }
    
    return maxLength;
}

// Example: "abcabcbb"
// The longest substring without repeating characters is "abc" (length 3)
console.log(lengthOfLongestSubstring("abcabcbb")); // 3
\`\`\`

## Linked Lists - A Different Way to Store Data

### Understanding Linked Lists

Imagine a treasure hunt where each clue leads you to the next location. You start at the first clue, which tells you where to find the second clue, which tells you where to find the third clue, and so on. This is exactly how a linked list works!

Unlike arrays where elements are stored in consecutive memory locations (like houses on a street with consecutive addresses), linked lists store elements anywhere in memory, but each element contains a "pointer" or "reference" to the next element.

**Real-World Analogy**: Think of a linked list like a chain of paper clips. Each paper clip (node) holds some data and is connected to the next paper clip. You can only access the chain by starting from the first paper clip and following the connections.

**Why Use Linked Lists Instead of Arrays?**

1. **Dynamic Size**: Unlike arrays, linked lists can grow or shrink during program execution
2. **Efficient Insertion/Deletion**: Adding or removing elements at the beginning is very fast
3. **Memory Efficiency**: Only allocates memory as needed

**Disadvantages:**
1. **No Random Access**: You can't jump directly to the 5th element; you must traverse from the beginning
2. **Extra Memory**: Each node needs extra space to store the pointer to the next node
3. **Not Cache-Friendly**: Elements aren't stored next to each other in memory

### Types of Linked Lists

**1. Singly Linked List:**
Each node points to the next node, like a one-way street.

\`\`\`javascript
// First, let's create a simple node structure
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;    // The data stored in this node
        this.next = next;  // Pointer to the next node
    }
}

// Now let's create a complete singly linked list
class SinglyLinkedList {
    constructor() {
        this.head = null;  // Points to the first node
        this.size = 0;     // Keeps track of how many nodes we have
    }
    
    // Insert at the beginning - O(1) time complexity
    prepend(val) {
        // Create a new node that points to the current head
        const newNode = new ListNode(val, this.head);
        // Update head to point to our new node
        this.head = newNode;
        this.size++;
        
        console.log(\`Added \${val} to the beginning. List size: \${this.size}\`);
    }
    
    // Insert at the end - O(n) time complexity
    append(val) {
        const newNode = new ListNode(val);
        
        // If list is empty, make new node the head
        if (!this.head) {
            this.head = newNode;
        } else {
            // Traverse to the end of the list
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            // Connect the last node to our new node
            current.next = newNode;
        }
        this.size++;
        
        console.log(\`Added \${val} to the end. List size: \${this.size}\`);
    }
    
    // Delete a node with given value - O(n) time complexity
    delete(val) {
        if (!this.head) return false; // List is empty
        
        // If the head node contains the value to delete
        if (this.head.val === val) {
            this.head = this.head.next; // Move head to next node
            this.size--;
            console.log(\`Deleted \${val} from the list\`);
            return true;
        }
        
        // Search for the node to delete
        let current = this.head;
        while (current.next && current.next.val !== val) {
            current = current.next;
        }
        
        // If we found the node to delete
        if (current.next) {
            current.next = current.next.next; // Skip over the node to delete
            this.size--;
            console.log(\`Deleted \${val} from the list\`);
            return true;
        }
        
        console.log(\`Value \${val} not found in the list\`);
        return false;
    }
    
    // Display the entire list
    display() {
        if (!this.head) {
            console.log("List is empty");
            return;
        }
        
        let result = [];
        let current = this.head;
        while (current) {
            result.push(current.val);
            current = current.next;
        }
        console.log("List contents:", result.join(" -> "));
    }
    
    // Search for a value - O(n) time complexity
    search(val) {
        let current = this.head;
        let position = 0;
        
        while (current) {
            if (current.val === val) {
                console.log(\`Found \${val} at position \${position}\`);
                return position;
            }
            current = current.next;
            position++;
        }
        
        console.log(\`Value \${val} not found in the list\`);
        return -1;
    }
}

// Let's test our linked list
const myList = new SinglyLinkedList();

// Add some elements
myList.prepend(10);  // List: 10
myList.prepend(20);  // List: 20 -> 10
myList.append(30);   // List: 20 -> 10 -> 30
myList.append(40);   // List: 20 -> 10 -> 30 -> 40

myList.display();    // Shows: 20 -> 10 -> 30 -> 40

// Search for elements
myList.search(30);   // Found 30 at position 2
myList.search(50);   // Value 50 not found

// Delete elements
myList.delete(20);   // Deletes head node
myList.display();    // Shows: 10 -> 30 -> 40
\`\`\`

**2. Doubly Linked List:**
Each node has pointers to both the next and previous nodes, like a two-way street.

\`\`\`javascript
class DoublyListNode {
    constructor(val = 0, next = null, prev = null) {
        this.val = val;
        this.next = next;  // Pointer to next node
        this.prev = prev;  // Pointer to previous node
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;  // First node
        this.tail = null;  // Last node (for efficient append operations)
        this.size = 0;
    }
    
    // Insert at the beginning
    prepend(val) {
        const newNode = new DoublyListNode(val);
        
        if (!this.head) {
            // List is empty
            this.head = newNode;
            this.tail = newNode;
        } else {
            // Connect new node to current head
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size++;
    }
    
    // Insert at the end - O(1) because we have a tail pointer
    append(val) {
        const newNode = new DoublyListNode(val);
        
        if (!this.tail) {
            // List is empty
            this.head = newNode;
            this.tail = newNode;
        } else {
            // Connect new node to current tail
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.size++;
    }
    
    // Display list forward
    displayForward() {
        let result = [];
        let current = this.head;
        while (current) {
            result.push(current.val);
            current = current.next;
        }
        console.log("Forward:", result.join(" <-> "));
    }
    
    // Display list backward (advantage of doubly linked list)
    displayBackward() {
        let result = [];
        let current = this.tail;
        while (current) {
            result.push(current.val);
            current = current.prev;
        }
        console.log("Backward:", result.join(" <-> "));
    }
}
\`\`\`

**3. Circular Linked List:**
The last node points back to the first node, forming a circle.

### Advantages and Disadvantages Summary

**Advantages of Linked Lists:**
- **Dynamic size**: Can grow or shrink during runtime
- **Efficient insertion/deletion at beginning**: O(1) time complexity
- **Memory efficient**: Only allocates memory as needed
- **No memory waste**: Unlike arrays, no unused allocated space

**Disadvantages of Linked Lists:**
- **No random access**: Must traverse from head to reach a specific element (O(n))
- **Extra memory overhead**: Each node needs space for storing pointers
- **Not cache-friendly**: Nodes may be scattered throughout memory
- **More complex**: Requires careful pointer management

**When to Use Linked Lists:**
- When you frequently insert/delete at the beginning
- When the size of your data varies significantly
- When you don't need random access to elements
- When implementing other data structures (stacks, queues)

## Stacks and Queues - Specialized Data Structures

### Stacks - Last In, First Out (LIFO)

Think of a stack like a stack of plates in a cafeteria. You can only add a new plate to the top of the stack, and you can only take a plate from the top. The last plate you put on is the first one you'll take off. This is called "Last In, First Out" or LIFO.

**Real-World Examples of Stacks:**
- Stack of books on your desk
- Stack of trays in a cafeteria
- Browser history (back button)
- Undo operations in text editors
- Function calls in programming (call stack)

**Core Operations:**
- **Push**: Add an element to the top of the stack - O(1)
- **Pop**: Remove and return the top element - O(1)
- **Peek/Top**: View the top element without removing it - O(1)
- **isEmpty**: Check if the stack is empty - O(1)

\`\`\`javascript
class Stack {
    constructor() {
        this.items = [];  // We'll use an array to implement our stack
    }
    
    // Add element to top of stack
    push(element) {
        this.items.push(element);
        console.log(\`Pushed \${element} onto stack. Stack size: \${this.items.length}\`);
    }
    
    // Remove and return top element
    pop() {
        if (this.isEmpty()) {
            console.log("Cannot pop from empty stack");
            return null;
        }
        const poppedElement = this.items.pop();
        console.log(\`Popped \${poppedElement} from stack. Stack size: \${this.items.length}\`);
        return poppedElement;
    }
    
    // View top element without removing it
    peek() {
        if (this.isEmpty()) {
            console.log("Stack is empty");
            return null;
        }
        const topElement = this.items[this.items.length - 1];
        console.log(\`Top element is: \${topElement}\`);
        return topElement;
    }
    
    // Check if stack is empty
    isEmpty() {
        return this.items.length === 0;
    }
    
    // Get stack size
    size() {
        return this.items.length;
    }
    
    // Display entire stack
    display() {
        if (this.isEmpty()) {
            console.log("Stack is empty");
        } else {
            console.log("Stack contents (top to bottom):", [...this.items].reverse());
        }
    }
}

// Let's test our stack with a real example: browser history
const browserHistory = new Stack();

console.log("=== Simulating Browser History ===");
browserHistory.push("google.com");
browserHistory.push("stackoverflow.com");  
browserHistory.push("github.com");
browserHistory.push("youtube.com");

browserHistory.display(); // Shows: youtube.com, github.com, stackoverflow.com, google.com

console.log("\\nUser clicks back button:");
browserHistory.pop(); // Removes youtube.com

console.log("\\nUser clicks back button again:");
browserHistory.pop(); // Removes github.com

browserHistory.peek(); // Shows stackoverflow.com (current page)
\`\`\`

**Practical Example: Balanced Parentheses Checker**

One of the most common uses of stacks is checking if parentheses, brackets, and braces are properly balanced in code or mathematical expressions.

\`\`\`javascript
function isBalanced(expression) {
    const stack = new Stack();
    const pairs = { 
        '(': ')', 
        '[': ']', 
        '{': '}' 
    };
    
    console.log(\`Checking if "\${expression}" has balanced parentheses...\`);
    
    for (let i = 0; i < expression.length; i++) {
        let char = expression[i];
        
        // If it's an opening bracket, push it onto stack
        if (char in pairs) {
            stack.push(char);
            console.log(\`Found opening \${char}, pushed to stack\`);
        } 
        // If it's a closing bracket
        else if (Object.values(pairs).includes(char)) {
            // Check if stack is empty (no matching opening bracket)
            if (stack.isEmpty()) {
                console.log(\`Found closing \${char} but no matching opening bracket\`);
                return false;
            }
            
            // Check if the closing bracket matches the most recent opening bracket
            let lastOpening = stack.pop();
            if (pairs[lastOpening] !== char) {
                console.log(\`Mismatched brackets: \${lastOpening} and \${char}\`);
                return false;
            }
            console.log(\`Found matching pair: \${lastOpening} and \${char}\`);
        }
    }
    
    // If stack is empty, all brackets were matched
    const isBalanced = stack.isEmpty();
    console.log(\`Result: \${isBalanced ? 'Balanced' : 'Not balanced'}\`);
    return isBalanced;
}

// Test cases
console.log("\\n=== Testing Balanced Parentheses ===");
isBalanced("()");           // true
isBalanced("([{}])");       // true  
isBalanced("([)]");         // false - mismatched
isBalanced("((())");        // false - missing closing
isBalanced("())");          // false - extra closing
\`\`\`

**Real-world Applications of Stacks:**
1. **Function call management**: When a function calls another function, the computer uses a stack to remember where to return
2. **Undo operations**: Text editors use stacks to implement undo functionality
3. **Expression evaluation**: Calculators use stacks to evaluate mathematical expressions
4. **Browser history**: Web browsers use stacks to implement the back button
5. **Syntax parsing**: Compilers use stacks to check if code syntax is correct

### Queues - First In, First Out (FIFO)

A queue is like a line of people waiting at a bank or grocery store. The first person to join the line is the first person to be served. This is called "First In, First Out" or FIFO.

**Real-World Examples of Queues:**
- Line at a coffee shop
- Print queue for a printer
- Playlist in a music app
- Task scheduling in operating systems
- Breadth-first search in graphs

**Core Operations:**
- **Enqueue**: Add an element to the rear (back) of the queue - O(1)
- **Dequeue**: Remove and return the front element - O(1)
- **Front**: View the front element without removing it - O(1)
- **isEmpty**: Check if the queue is empty - O(1)

\`\`\`javascript
class Queue {
    constructor() {
        this.items = [];
        this.front = 0;  // Index of the front element
        this.rear = 0;   // Index where next element will be added
    }
    
    // Add element to the back of the queue
    enqueue(element) {
        this.items[this.rear] = element;
        this.rear++;
        console.log(\`\${element} joined the queue. Queue size: \${this.size()}\`);
    }
    
    // Remove and return front element
    dequeue() {
        if (this.isEmpty()) {
            console.log("Cannot dequeue from empty queue");
            return null;
        }
        
        const item = this.items[this.front];
        delete this.items[this.front];  // Free up memory
        this.front++;
        
        console.log(\`\${item} left the queue. Queue size: \${this.size()}\`);
        return item;
    }
    
    // View front element without removing it
    peek() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return null;
        }
        const frontElement = this.items[this.front];
        console.log(\`Next in line: \${frontElement}\`);
        return frontElement;
    }
    
    // Check if queue is empty
    isEmpty() {
        return this.rear === this.front;
    }
    
    // Get queue size
    size() {
        return this.rear - this.front;
    }
    
    // Display queue contents
    display() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return;
        }
        
        let result = [];
        for (let i = this.front; i < this.rear; i++) {
            result.push(this.items[i]);
        }
        console.log("Queue contents (front to back):", result.join(" <- "));
    }
}

// Let's simulate a coffee shop queue
const coffeeShopQueue = new Queue();

console.log("=== Coffee Shop Queue Simulation ===");
coffeeShopQueue.enqueue("Alice");
coffeeShopQueue.enqueue("Bob");
coffeeShopQueue.enqueue("Charlie");
coffeeShopQueue.enqueue("Diana");

coffeeShopQueue.display(); // Shows: Alice <- Bob <- Charlie <- Diana

console.log("\\nServing customers:");
coffeeShopQueue.peek();    // Next in line: Alice
coffeeShopQueue.dequeue(); // Alice gets served

coffeeShopQueue.peek();    // Next in line: Bob
coffeeShopQueue.dequeue(); // Bob gets served

console.log("\\nNew customer arrives:");
coffeeShopQueue.enqueue("Eve");

coffeeShopQueue.display(); // Shows: Charlie <- Diana <- Eve
\`\`\`

**Practical Example: Breadth-First Search (BFS)**

Queues are essential for implementing breadth-first search, which explores a graph level by level.

\`\`\`javascript
// Let's implement BFS to traverse a simple graph
function bfsTraversal(graph, startNode) {
    const visited = new Set();      // Keep track of visited nodes
    const queue = new Queue();      // Queue for BFS
    const result = [];              // Store traversal order
    
    console.log(\`Starting BFS from node: \${startNode}\`);
    
    // Start with the initial node
    queue.enqueue(startNode);
    visited.add(startNode);
    
    while (!queue.isEmpty()) {
        const currentNode = queue.dequeue();
        result.push(currentNode);
        
        console.log(\`Visiting node: \${currentNode}\`);
        
        // Add all unvisited neighbors to the queue
        const neighbors = graph[currentNode] || [];
        for (let neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.enqueue(neighbor);
                console.log(\`  Added \${neighbor} to queue\`);
            }
        }
    }
    
    return result;
}

// Example graph represented as adjacency list
const socialNetwork = {
    'Alice': ['Bob', 'Charlie'],
    'Bob': ['Alice', 'Diana', 'Eve'],
    'Charlie': ['Alice', 'Frank'],
    'Diana': ['Bob'],
    'Eve': ['Bob', 'Frank'],
    'Frank': ['Charlie', 'Eve']
};

console.log("\\n=== Social Network BFS Traversal ===");
const traversalOrder = bfsTraversal(socialNetwork, 'Alice');
console.log("Final traversal order:", traversalOrder);
\`\`\`

**Comparison: Stack vs Queue**

| Aspect | Stack (LIFO) | Queue (FIFO) |
|--------|--------------|--------------|
| **Insertion** | Top (push) | Rear (enqueue) |
| **Removal** | Top (pop) | Front (dequeue) |
| **Access** | Top only | Front only |
| **Use Cases** | Undo operations, function calls, expression evaluation | Task scheduling, BFS, handling requests |
| **Real-world Analogy** | Stack of plates | Line at a store |

Both stacks and queues are fundamental data structures that form the building blocks for more complex algorithms and systems. Understanding when and how to use each one is crucial for effective problem-solving in programming.

## External Resources

For deeper understanding and practice, explore these comprehensive resources:

- [LeetCode](https://leetcode.com/) - Extensive collection of coding problems with solutions
- [GeeksforGeeks Data Structures](https://www.geeksforgeeks.org/data-structures/) - Detailed tutorials and implementations
- [Visualgo](https://visualgo.net/) - Interactive algorithm visualizations
- [Algorithm Design Manual](https://www.algorist.com/) - Comprehensive textbook by Steven Skiena
- [Introduction to Algorithms (CLRS)](https://mitpress.mit.edu/books/introduction-algorithms-third-edition) - Classic algorithms textbook
- [HackerRank](https://www.hackerrank.com/) - Coding challenges and competitions
- [Coursera Algorithms Specialization](https://www.coursera.org/specializations/algorithms) - Stanford University course series
      `
                rightChild = this.values[rightChildIdx];
                if (
                    (swap === null && rightChild > element) ||
                    (swap !== null && rightChild > leftChild)
                ) {
                    swap = rightChildIdx;
                }
            }
            
            if (swap === null) break;
            
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}
\`\`\`

### Priority Queue Implementation

\`\`\`javascript
class PriorityQueue {
    constructor() {
        this.values = [];
    }
    
    enqueue(val, priority) {
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    
    dequeue() {
        const min = this.values[0];
        const end = this.values.pop();
        
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        
        return min;
    }
    
    // ... bubbleUp and sinkDown methods similar to heap
}

class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}
\`\`\`

## Graphs and Graph Algorithms

### Graph Representation

Graphs can be represented using adjacency lists or adjacency matrices.

\`\`\`javascript
// Adjacency List Representation
class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }
    
    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1); // For undirected graph
    }
    
    // Depth-First Search
    dfsRecursive(start) {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;
        
        function dfs(vertex) {
            if (!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            
            adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    return dfs(neighbor);
                }
            });
        }
        
        dfs(start);
        return result;
    }
    
    // Breadth-First Search
    bfs(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        visited[start] = true;
        
        while (queue.length) {
            let currentVertex = queue.shift();
            result.push(currentVertex);
            
            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
        
        return result;
    }
}
\`\`\`

### Dijkstra's Algorithm

Finds the shortest path between nodes in a weighted graph.

\`\`\`javascript
class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }
    
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    
    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({node: vertex2, weight});
        this.adjacencyList[vertex2].push({node: vertex1, weight});
    }
    
    dijkstra(start, finish) {
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let path = [];
        let smallest;
        
        // Build initial state
        for (let vertex in this.adjacencyList) {
            if (vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }
        
        // As long as there is something to visit
        while (nodes.values.length) {
            smallest = nodes.dequeue().val;
            
            if (smallest === finish) {
                // Build path to return
                while (previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }
            
            if (smallest || distances[smallest] !== Infinity) {
                for (let neighbor in this.adjacencyList[smallest]) {
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;
                    
                    if (candidate < distances[nextNeighbor]) {
                        distances[nextNeighbor] = candidate;
                        previous[nextNeighbor] = smallest;
                        nodes.enqueue(nextNeighbor, candidate);
                    }
                }
            }
        }
        
        return path.concat(smallest).reverse();
    }
}
\`\`\`

## Dynamic Programming

Dynamic Programming is an algorithmic technique for solving optimization problems by breaking them down into simpler subproblems and storing the results to avoid redundant calculations.

### Key Principles

1. **Optimal Substructure**: The optimal solution contains optimal solutions to subproblems
2. **Overlapping Subproblems**: The same subproblems are solved multiple times

### Classic Examples

**Fibonacci Sequence:**

\`\`\`javascript
// Naive recursive approach - O(2^n)
function fibRecursive(n) {
    if (n <= 1) return n;
    return fibRecursive(n - 1) + fibRecursive(n - 2);
}

// Memoized approach - O(n)
function fibMemo(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n <= 1) return n;
    
    memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
    return memo[n];
}

// Tabulated approach - O(n)
function fibTab(n) {
    if (n <= 1) return n;
    
    const dp = [0, 1];
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    
    return dp[n];
}
\`\`\`

**0/1 Knapsack Problem:**

\`\`\`javascript
function knapsack(weights, values, capacity) {
    const n = weights.length;
    const dp = Array(n + 1).fill().map(() => Array(capacity + 1).fill(0));
    
    for (let i = 1; i <= n; i++) {
        for (let w = 1; w <= capacity; w++) {
            if (weights[i - 1] <= w) {
                dp[i][w] = Math.max(
                    values[i - 1] + dp[i - 1][w - weights[i - 1]],
                    dp[i - 1][w]
                );
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }
    
    return dp[n][capacity];
}
\`\`\`

## Sorting Algorithms

### Comparison-Based Sorting

**Merge Sort - O(n log n):**

\`\`\`javascript
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    
    return merge(left, right);
}

function merge(left, right) {
    const result = [];
    let i = 0, j = 0;
    
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    
    return result.concat(left.slice(i)).concat(right.slice(j));
}
\`\`\`

**Quick Sort - O(n log n) average, O(n²) worst:**

\`\`\`javascript
function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        const pivotIndex = partition(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

function partition(arr, left, right) {
    const pivot = arr[right];
    let i = left - 1;
    
    for (let j = left; j < right; j++) {
        if (arr[j] <= pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    
    [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
    return i + 1;
}
\`\`\`

## Big O Analysis

Understanding time and space complexity is crucial for writing efficient algorithms.

### Time Complexity Classes

- **O(1)**: Constant time - hash table access, array indexing
- **O(log n)**: Logarithmic time - binary search, balanced tree operations
- **O(n)**: Linear time - linear search, single loop through array
- **O(n log n)**: Linearithmic time - efficient sorting algorithms
- **O(n²)**: Quadratic time - nested loops, bubble sort
- **O(2^n)**: Exponential time - recursive fibonacci, subset generation
- **O(n!)**: Factorial time - permutation generation

### Space Complexity

Consider both auxiliary space (extra space used by algorithm) and input space.

\`\`\`javascript
// O(1) space - iterative approach
function sumIterative(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// O(n) space - recursive approach (call stack)
function sumRecursive(n) {
    if (n <= 0) return 0;
    return n + sumRecursive(n - 1);
}
\`\`\`

## Practice Problems and Applications

### Common Interview Problems

1. **Two Sum**: Find two numbers in array that add up to target
2. **Valid Parentheses**: Check if string has valid parentheses
3. **Merge Two Sorted Lists**: Combine two sorted linked lists
4. **Maximum Subarray**: Find contiguous subarray with largest sum
5. **Climbing Stairs**: Count ways to reach top using 1 or 2 steps
6. **Binary Tree Level Order Traversal**: BFS traversal of tree
7. **Longest Palindromic Substring**: Find longest palindrome in string

### Real-World Applications

- **Search Engines**: Tries for autocomplete, graphs for page ranking
- **Social Networks**: Graphs for connections, BFS for friend suggestions
- **Database Systems**: B-trees for indexing, hash tables for quick lookups
- **Operating Systems**: Queues for process scheduling, stacks for function calls
- **Compilers**: Trees for syntax analysis, stacks for expression evaluation

## External Resources

For deeper understanding and practice, explore these comprehensive resources:

- [LeetCode](https://leetcode.com/) - Extensive collection of coding problems with solutions
- [GeeksforGeeks Data Structures](https://www.geeksforgeeks.org/data-structures/) - Detailed tutorials and implementations
- [Visualgo](https://visualgo.net/) - Interactive algorithm visualizations
- [Algorithm Design Manual](https://www.algorist.com/) - Comprehensive textbook by Steven Skiena
- [Introduction to Algorithms (CLRS)](https://mitpress.mit.edu/books/introduction-algorithms-third-edition) - Classic algorithms textbook
- [HackerRank](https://www.hackerrank.com/) - Coding challenges and competitions
- [Coursera Algorithms Specialization](https://www.coursera.org/specializations/algorithms) - Stanford University course series
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
# System Design

## Overview

System design is the process of defining the architecture, components, modules, interfaces, and data for a system to satisfy specified requirements. It's a critical skill for software engineers, especially at mid to senior levels, as it involves making high-level decisions about how to build scalable, reliable, and maintainable systems.

## Fundamental Principles

### Scalability

Scalability refers to a system's ability to handle increased load by adding resources to the system. There are two primary types of scaling:

**Horizontal Scaling (Scale Out):**
Adding more servers to handle increased load. This approach distributes the workload across multiple machines.

**Advantages:**
- No single point of failure
- Can handle very large loads
- Cost-effective for certain workloads
- Fault tolerance through redundancy

**Disadvantages:**
- Increased complexity in data consistency
- Network latency between nodes
- More complex deployment and monitoring

**Example Implementation:**
\`\`\`javascript
// Load balancer distributing requests across multiple servers
class LoadBalancer {
    constructor() {
        this.servers = [
            { id: 1, url: 'server1.example.com', load: 0 },
            { id: 2, url: 'server2.example.com', load: 0 },
            { id: 3, url: 'server3.example.com', load: 0 }
        ];
        this.currentIndex = 0;
    }
    
    // Round-robin load balancing
    getNextServer() {
        const server = this.servers[this.currentIndex];
        this.currentIndex = (this.currentIndex + 1) % this.servers.length;
        return server;
    }
    
    // Least connections load balancing
    getLeastLoadedServer() {
        return this.servers.reduce((min, server) => 
            server.load < min.load ? server : min
        );
    }
}
\`\`\`

**Vertical Scaling (Scale Up):**
Upgrading the hardware resources (CPU, RAM, storage) of existing servers.

**Advantages:**
- Simpler to implement
- No data consistency issues
- Lower network complexity

**Disadvantages:**
- Hardware limits
- Single point of failure
- Can be expensive
- Downtime during upgrades

### Load Balancing

Load balancers distribute incoming requests across multiple servers to ensure no single server becomes overwhelmed.

**Types of Load Balancers:**

**1. Layer 4 (Transport Layer) Load Balancers:**
- Operate at the transport layer (TCP/UDP)
- Route traffic based on IP and port
- Faster but less intelligent routing

**2. Layer 7 (Application Layer) Load Balancers:**
- Operate at the application layer (HTTP/HTTPS)
- Can route based on content, headers, cookies
- More intelligent but slightly slower

**Load Balancing Algorithms:**

\`\`\`javascript
class AdvancedLoadBalancer {
    constructor() {
        this.servers = [
            { id: 1, url: 'server1.example.com', weight: 3, connections: 0 },
            { id: 2, url: 'server2.example.com', weight: 2, connections: 0 },
            { id: 3, url: 'server3.example.com', weight: 1, connections: 0 }
        ];
    }
    
    // Weighted round-robin
    weightedRoundRobin() {
        let totalWeight = this.servers.reduce((sum, server) => sum + server.weight, 0);
        let random = Math.random() * totalWeight;
        
        for (let server of this.servers) {
            random -= server.weight;
            if (random <= 0) {
                return server;
            }
        }
    }
    
    // Least connections
    leastConnections() {
        return this.servers.reduce((min, server) => 
            server.connections < min.connections ? server : min
        );
    }
    
    // Health check implementation
    async healthCheck() {
        for (let server of this.servers) {
            try {
                const response = await fetch(\`\${server.url}/health\`);
                server.healthy = response.ok;
            } catch (error) {
                server.healthy = false;
            }
        }
    }
}
\`\`\`

### Caching Strategies

Caching is a technique to store frequently accessed data in fast storage to reduce latency and improve performance.

**Cache Levels:**

**1. Browser Cache:**
- Stores static resources (CSS, JS, images)
- Controlled by HTTP headers (Cache-Control, ETag)

**2. CDN (Content Delivery Network):**
- Geographically distributed cache servers
- Reduces latency by serving content from nearest location

**3. Application Cache:**
- In-memory caching within the application
- Examples: Redis, Memcached

**4. Database Cache:**
- Query result caching
- Buffer pools for frequently accessed data

**Caching Patterns:**

\`\`\`javascript
class CacheManager {
    constructor() {
        this.cache = new Map();
        this.ttl = new Map(); // Time to live
    }
    
    // Cache-aside pattern
    async get(key) {
        // Check if data exists in cache and is not expired
        if (this.cache.has(key) && !this.isExpired(key)) {
            return this.cache.get(key);
        }
        
        // Fetch from database
        const data = await this.fetchFromDatabase(key);
        
        // Store in cache
        this.set(key, data, 300); // 5 minutes TTL
        
        return data;
    }
    
    set(key, value, ttlSeconds = 300) {
        this.cache.set(key, value);
        this.ttl.set(key, Date.now() + (ttlSeconds * 1000));
    }
    
    isExpired(key) {
        const expireTime = this.ttl.get(key);
        return expireTime && Date.now() > expireTime;
    }
    
    // Write-through pattern
    async writeThrough(key, value) {
        // Write to database first
        await this.writeToDatabase(key, value);
        
        // Then update cache
        this.set(key, value);
    }
    
    // Write-behind (write-back) pattern
    async writeBehind(key, value) {
        // Update cache immediately
        this.set(key, value);
        
        // Schedule database write (asynchronous)
        setTimeout(() => {
            this.writeToDatabase(key, value);
        }, 0);
    }
}
\`\`\`

**Cache Eviction Policies:**
- **LRU (Least Recently Used)**: Remove least recently accessed items
- **LFU (Least Frequently Used)**: Remove least frequently accessed items
- **FIFO (First In, First Out)**: Remove oldest items first
- **TTL (Time To Live)**: Remove items after expiration time

### Database Design and Scaling

**SQL vs NoSQL Decision Matrix:**

| Factor | SQL | NoSQL |
|--------|-----|-------|
| ACID Compliance | Strong | Eventual consistency |
| Schema | Fixed schema | Flexible schema |
| Scalability | Vertical scaling | Horizontal scaling |
| Complex Queries | Excellent (SQL) | Limited |
| Transactions | Full ACID | Limited |
| Use Cases | Financial, CRM | Big data, real-time |

**Database Sharding:**

Sharding involves partitioning data across multiple database instances to distribute load.

\`\`\`javascript
class DatabaseShardManager {
    constructor() {
        this.shards = [
            { id: 0, connection: 'db-shard-0.example.com' },
            { id: 1, connection: 'db-shard-1.example.com' },
            { id: 2, connection: 'db-shard-2.example.com' },
            { id: 3, connection: 'db-shard-3.example.com' }
        ];
    }
    
    // Hash-based sharding
    getShardByUserId(userId) {
        const shardId = this.hashFunction(userId) % this.shards.length;
        return this.shards[shardId];
    }
    
    // Range-based sharding
    getShardByRange(userId) {
        if (userId < 1000000) return this.shards[0];
        if (userId < 2000000) return this.shards[1];
        if (userId < 3000000) return this.shards[2];
        return this.shards[3];
    }
    
    hashFunction(key) {
        let hash = 0;
        for (let i = 0; i < key.toString().length; i++) {
            const char = key.toString().charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32-bit integer
        }
        return Math.abs(hash);
    }
    
    // Cross-shard query handling
    async queryAcrossShards(query) {
        const promises = this.shards.map(shard => 
            this.executeQuery(shard, query)
        );
        
        const results = await Promise.all(promises);
        return this.mergeResults(results);
    }
}
\`\`\`

**Database Replication:**

\`\`\`javascript
class DatabaseReplicationManager {
    constructor() {
        this.master = { connection: 'master-db.example.com' };
        this.slaves = [
            { connection: 'slave-1-db.example.com' },
            { connection: 'slave-2-db.example.com' },
            { connection: 'slave-3-db.example.com' }
        ];
        this.currentSlaveIndex = 0;
    }
    
    // Write operations go to master
    async write(query, data) {
        const result = await this.executeQuery(this.master, query, data);
        
        // Asynchronously replicate to slaves
        this.replicateToSlaves(query, data);
        
        return result;
    }
    
    // Read operations can use slaves
    async read(query) {
        const slave = this.getNextSlave();
        return await this.executeQuery(slave, query);
    }
    
    getNextSlave() {
        const slave = this.slaves[this.currentSlaveIndex];
        this.currentSlaveIndex = (this.currentSlaveIndex + 1) % this.slaves.length;
        return slave;
    }
    
    async replicateToSlaves(query, data) {
        const promises = this.slaves.map(slave => 
            this.executeQuery(slave, query, data)
        );
        
        try {
            await Promise.all(promises);
        } catch (error) {
            console.error('Replication failed:', error);
            // Handle replication lag or failures
        }
    }
}
\`\`\`

## Microservices Architecture

Microservices architecture breaks down applications into small, independent services that communicate over well-defined APIs.

### Key Principles

**1. Single Responsibility:**
Each service should have one business capability.

**2. Decentralized:**
Services manage their own data and business logic.

**3. Fault Isolation:**
Failure in one service doesn't bring down the entire system.

**4. Technology Diversity:**
Different services can use different technologies.

### Service Communication Patterns

\`\`\`javascript
// Synchronous communication using HTTP/REST
class UserService {
    async getUserProfile(userId) {
        try {
            const response = await fetch(\`/api/users/\${userId}\`);
            return await response.json();
        } catch (error) {
            throw new Error('User service unavailable');
        }
    }
}

// Asynchronous communication using message queues
class OrderService {
    constructor(messageQueue) {
        this.messageQueue = messageQueue;
    }
    
    async createOrder(orderData) {
        // Process order
        const order = await this.processOrder(orderData);
        
        // Publish event for other services
        await this.messageQueue.publish('order.created', {
            orderId: order.id,
            userId: order.userId,
            amount: order.total
        });
        
        return order;
    }
}

// Event-driven architecture
class PaymentService {
    constructor(messageQueue) {
        this.messageQueue = messageQueue;
        this.setupEventHandlers();
    }
    
    setupEventHandlers() {
        this.messageQueue.subscribe('order.created', this.handleOrderCreated.bind(this));
    }
    
    async handleOrderCreated(event) {
        const { orderId, userId, amount } = event.data;
        
        // Process payment
        const payment = await this.processPayment(userId, amount);
        
        // Publish payment result
        await this.messageQueue.publish('payment.processed', {
            orderId,
            paymentId: payment.id,
            status: payment.status
        });
    }
}
\`\`\`

### Service Discovery

\`\`\`javascript
class ServiceRegistry {
    constructor() {
        this.services = new Map();
    }
    
    register(serviceName, instance) {
        if (!this.services.has(serviceName)) {
            this.services.set(serviceName, []);
        }
        
        this.services.get(serviceName).push({
            ...instance,
            registeredAt: Date.now(),
            lastHeartbeat: Date.now()
        });
    }
    
    discover(serviceName) {
        const instances = this.services.get(serviceName) || [];
        
        // Filter healthy instances
        const healthyInstances = instances.filter(instance => 
            Date.now() - instance.lastHeartbeat < 30000 // 30 seconds
        );
        
        // Return random healthy instance
        if (healthyInstances.length > 0) {
            const randomIndex = Math.floor(Math.random() * healthyInstances.length);
            return healthyInstances[randomIndex];
        }
        
        throw new Error(\`No healthy instances found for service: \${serviceName}\`);
    }
    
    heartbeat(serviceName, instanceId) {
        const instances = this.services.get(serviceName) || [];
        const instance = instances.find(i => i.id === instanceId);
        
        if (instance) {
            instance.lastHeartbeat = Date.now();
        }
    }
}
\`\`\`

## Message Queues and Event-Driven Architecture

Message queues enable asynchronous communication between services, improving system resilience and scalability.

### Message Queue Patterns

\`\`\`javascript
class MessageQueue {
    constructor() {
        this.queues = new Map();
        this.subscribers = new Map();
    }
    
    // Publish-Subscribe pattern
    async publish(topic, message) {
        const subscribers = this.subscribers.get(topic) || [];
        
        const promises = subscribers.map(async (subscriber) => {
            try {
                await subscriber.handler(message);
            } catch (error) {
                console.error(\`Error processing message in \${subscriber.name}:\`, error);
                // Implement retry logic or dead letter queue
                await this.handleFailedMessage(topic, message, error);
            }
        });
        
        await Promise.all(promises);
    }
    
    subscribe(topic, handler, options = {}) {
        if (!this.subscribers.has(topic)) {
            this.subscribers.set(topic, []);
        }
        
        this.subscribers.get(topic).push({
            name: options.name || 'anonymous',
            handler,
            retryCount: options.retryCount || 3
        });
    }
    
    // Work queue pattern
    async enqueue(queueName, job) {
        if (!this.queues.has(queueName)) {
            this.queues.set(queueName, []);
        }
        
        this.queues.get(queueName).push({
            id: this.generateId(),
            data: job,
            timestamp: Date.now(),
            attempts: 0
        });
    }
    
    async dequeue(queueName) {
        const queue = this.queues.get(queueName);
        if (queue && queue.length > 0) {
            return queue.shift();
        }
        return null;
    }
    
    async handleFailedMessage(topic, message, error) {
        // Implement exponential backoff retry
        const retryDelay = Math.pow(2, message.attempts || 0) * 1000;
        
        setTimeout(() => {
            if ((message.attempts || 0) < 3) {
                message.attempts = (message.attempts || 0) + 1;
                this.publish(topic, message);
            } else {
                // Send to dead letter queue
                this.enqueue('dead-letter-queue', { topic, message, error: error.message });
            }
        }, retryDelay);
    }
}
\`\`\`

## CAP Theorem and Consistency Models

The CAP theorem states that in a distributed system, you can only guarantee two of the following three properties:

**Consistency (C):** All nodes see the same data simultaneously
**Availability (A):** System remains operational
**Partition Tolerance (P):** System continues despite network failures

### Consistency Models

\`\`\`javascript
// Eventual Consistency implementation
class EventuallyConsistentStore {
    constructor() {
        this.nodes = [
            { id: 1, data: new Map() },
            { id: 2, data: new Map() },
            { id: 3, data: new Map() }
        ];
        this.vectorClocks = new Map();
    }
    
    async write(key, value, nodeId = 1) {
        const node = this.nodes.find(n => n.id === nodeId);
        
        // Update vector clock
        const clock = this.vectorClocks.get(key) || {};
        clock[nodeId] = (clock[nodeId] || 0) + 1;
        this.vectorClocks.set(key, clock);
        
        // Write to local node
        node.data.set(key, { value, clock: { ...clock } });
        
        // Asynchronously replicate to other nodes
        this.replicateAsync(key, value, clock, nodeId);
        
        return true;
    }
    
    async replicateAsync(key, value, clock, excludeNodeId) {
        const otherNodes = this.nodes.filter(n => n.id !== excludeNodeId);
        
        for (const node of otherNodes) {
            setTimeout(() => {
                const existingData = node.data.get(key);
                
                if (!existingData || this.isNewerVersion(clock, existingData.clock)) {
                    node.data.set(key, { value, clock });
                }
            }, Math.random() * 1000); // Simulate network delay
        }
    }
    
    isNewerVersion(clock1, clock2) {
        for (const nodeId in clock1) {
            if ((clock1[nodeId] || 0) > (clock2[nodeId] || 0)) {
                return true;
            }
        }
        return false;
    }
    
    read(key, nodeId = 1) {
        const node = this.nodes.find(n => n.id === nodeId);
        const data = node.data.get(key);
        return data ? data.value : null;
    }
}
\`\`\`

## API Design and RESTful Services

### RESTful API Design Principles

\`\`\`javascript
// Example RESTful API implementation
class RESTfulUserAPI {
    constructor(database) {
        this.db = database;
    }
    
    // GET /api/users - List users with pagination
    async getUsers(req, res) {
        try {
            const { page = 1, limit = 10, sort = 'id' } = req.query;
            const offset = (page - 1) * limit;
            
            const users = await this.db.query(
                'SELECT * FROM users ORDER BY ? LIMIT ? OFFSET ?',
                [sort, parseInt(limit), offset]
            );
            
            const total = await this.db.query('SELECT COUNT(*) as count FROM users');
            
            res.json({
                data: users,
                pagination: {
                    page: parseInt(page),
                    limit: parseInt(limit),
                    total: total[0].count,
                    pages: Math.ceil(total[0].count / limit)
                }
            });
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
    
    // GET /api/users/:id - Get specific user
    async getUser(req, res) {
        try {
            const { id } = req.params;
            const user = await this.db.query('SELECT * FROM users WHERE id = ?', [id]);
            
            if (user.length === 0) {
                return res.status(404).json({ error: 'User not found' });
            }
            
            res.json({ data: user[0] });
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
    
    // POST /api/users - Create new user
    async createUser(req, res) {
        try {
            const { name, email, password } = req.body;
            
            // Validation
            if (!name || !email || !password) {
                return res.status(400).json({ 
                    error: 'Missing required fields: name, email, password' 
                });
            }
            
            // Check if user already exists
            const existing = await this.db.query('SELECT id FROM users WHERE email = ?', [email]);
            if (existing.length > 0) {
                return res.status(409).json({ error: 'User already exists' });
            }
            
            // Create user
            const hashedPassword = await this.hashPassword(password);
            const result = await this.db.query(
                'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
                [name, email, hashedPassword]
            );
            
            res.status(201).json({ 
                data: { id: result.insertId, name, email },
                message: 'User created successfully'
            });
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
    
    // PUT /api/users/:id - Update user
    async updateUser(req, res) {
        try {
            const { id } = req.params;
            const updates = req.body;
            
            // Check if user exists
            const user = await this.db.query('SELECT * FROM users WHERE id = ?', [id]);
            if (user.length === 0) {
                return res.status(404).json({ error: 'User not found' });
            }
            
            // Build dynamic update query
            const fields = Object.keys(updates).filter(key => key !== 'id');
            const setClause = fields.map(field => \`\${field} = ?\`).join(', ');
            const values = fields.map(field => updates[field]);
            values.push(id);
            
            await this.db.query(
                \`UPDATE users SET \${setClause} WHERE id = ?\`,
                values
            );
            
            res.json({ message: 'User updated successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
    
    // DELETE /api/users/:id - Delete user
    async deleteUser(req, res) {
        try {
            const { id } = req.params;
            
            const result = await this.db.query('DELETE FROM users WHERE id = ?', [id]);
            
            if (result.affectedRows === 0) {
                return res.status(404).json({ error: 'User not found' });
            }
            
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}
\`\`\`

### API Versioning and Documentation

\`\`\`javascript
// API versioning strategies
class VersionedAPI {
    constructor() {
        this.routes = new Map();
    }
    
    // URL versioning: /api/v1/users
    addRoute(version, path, handler) {
        const versionedPath = \`/api/v\${version}\${path}\`;
        this.routes.set(versionedPath, handler);
    }
    
    // Header versioning: Accept: application/vnd.api+json;version=1
    handleVersionedRequest(req, res) {
        const acceptHeader = req.headers.accept || '';
        const versionMatch = acceptHeader.match(/version=(\d+)/);
        const version = versionMatch ? versionMatch[1] : '1';
        
        const handler = this.routes.get(\`/api/v\${version}\${req.path}\`);
        
        if (handler) {
            return handler(req, res);
        } else {
            res.status(404).json({ error: 'API version not supported' });
        }
    }
}
\`\`\`

## Performance Optimization

### Caching Strategies Implementation

\`\`\`javascript
class PerformanceOptimizer {
    constructor() {
        this.cache = new Map();
        this.metrics = {
            cacheHits: 0,
            cacheMisses: 0,
            avgResponseTime: 0
        };
    }
    
    // Memoization for expensive computations
    memoize(fn) {
        const cache = new Map();
        
        return function(...args) {
            const key = JSON.stringify(args);
            
            if (cache.has(key)) {
                return cache.get(key);
            }
            
            const result = fn.apply(this, args);
            cache.set(key, result);
            
            return result;
        };
    }
    
    // Database query optimization with caching
    async optimizedQuery(query, params = []) {
        const cacheKey = \`\${query}:\${JSON.stringify(params)}\`;
        const startTime = Date.now();
        
        // Check cache first
        if (this.cache.has(cacheKey)) {
            this.metrics.cacheHits++;
            return this.cache.get(cacheKey);
        }
        
        // Execute query
        const result = await this.executeQuery(query, params);
        
        // Cache result with TTL
        this.cache.set(cacheKey, result);
        setTimeout(() => this.cache.delete(cacheKey), 300000); // 5 minutes
        
        this.metrics.cacheMisses++;
        this.updateResponseTime(Date.now() - startTime);
        
        return result;
    }
    
    // Connection pooling
    createConnectionPool(config) {
        return {
            connections: [],
            maxConnections: config.max || 10,
            currentConnections: 0,
            
            async getConnection() {
                if (this.connections.length > 0) {
                    return this.connections.pop();
                }
                
                if (this.currentConnections < this.maxConnections) {
                    this.currentConnections++;
                    return await this.createNewConnection();
                }
                
                // Wait for available connection
                return new Promise((resolve) => {
                    const checkForConnection = () => {
                        if (this.connections.length > 0) {
                            resolve(this.connections.pop());
                        } else {
                            setTimeout(checkForConnection, 10);
                        }
                    };
                    checkForConnection();
                });
            },
            
            releaseConnection(connection) {
                this.connections.push(connection);
            }
        };
    }
}
\`\`\`

## Common System Design Patterns

### Circuit Breaker Pattern

\`\`\`javascript
class CircuitBreaker {
    constructor(options = {}) {
        this.failureThreshold = options.failureThreshold || 5;
        this.timeout = options.timeout || 60000; // 1 minute
        this.monitoringPeriod = options.monitoringPeriod || 10000; // 10 seconds
        
        this.state = 'CLOSED'; // CLOSED, OPEN, HALF_OPEN
        this.failureCount = 0;
        this.lastFailureTime = null;
        this.successCount = 0;
    }
    
    async call(fn) {
        if (this.state === 'OPEN') {
            if (Date.now() - this.lastFailureTime >= this.timeout) {
                this.state = 'HALF_OPEN';
                this.successCount = 0;
            } else {
                throw new Error('Circuit breaker is OPEN');
            }
        }
        
        try {
            const result = await fn();
            this.onSuccess();
            return result;
        } catch (error) {
            this.onFailure();
            throw error;
        }
    }
    
    onSuccess() {
        this.failureCount = 0;
        
        if (this.state === 'HALF_OPEN') {
            this.successCount++;
            if (this.successCount >= 3) {
                this.state = 'CLOSED';
            }
        }
    }
    
    onFailure() {
        this.failureCount++;
        this.lastFailureTime = Date.now();
        
        if (this.failureCount >= this.failureThreshold) {
            this.state = 'OPEN';
        }
    }
}
\`\`\`

### Rate Limiting

\`\`\`javascript
class RateLimiter {
    constructor() {
        this.requests = new Map();
    }
    
    // Token bucket algorithm
    tokenBucket(identifier, capacity = 10, refillRate = 1) {
        const now = Date.now();
        
        if (!this.requests.has(identifier)) {
            this.requests.set(identifier, {
                tokens: capacity,
                lastRefill: now
            });
        }
        
        const bucket = this.requests.get(identifier);
        
        // Refill tokens
        const timePassed = now - bucket.lastRefill;
        const tokensToAdd = Math.floor(timePassed / 1000) * refillRate;
        bucket.tokens = Math.min(capacity, bucket.tokens + tokensToAdd);
        bucket.lastRefill = now;
        
        // Check if request is allowed
        if (bucket.tokens > 0) {
            bucket.tokens--;
            return true;
        }
        
        return false;
    }
    
    // Sliding window algorithm
    slidingWindow(identifier, windowSize = 60000, maxRequests = 100) {
        const now = Date.now();
        
        if (!this.requests.has(identifier)) {
            this.requests.set(identifier, []);
        }
        
        const requests = this.requests.get(identifier);
        
        // Remove old requests outside the window
        const windowStart = now - windowSize;
        while (requests.length > 0 && requests[0] < windowStart) {
            requests.shift();
        }
        
        // Check if under limit
        if (requests.length < maxRequests) {
            requests.push(now);
            return true;
        }
        
        return false;
    }
}
\`\`\`

## Real-World System Design Examples

### Design a URL Shortener (like bit.ly)

**Requirements:**
- Shorten long URLs
- Redirect to original URL
- Handle 100M URLs per day
- Analytics and click tracking

**High-Level Design:**

\`\`\`javascript
class URLShortener {
    constructor() {
        this.database = new DatabaseManager();
        this.cache = new CacheManager();
        this.analytics = new AnalyticsService();
    }
    
    async shortenURL(longURL, customAlias = null) {
        // Validate URL
        if (!this.isValidURL(longURL)) {
            throw new Error('Invalid URL');
        }
        
        // Check if URL already exists
        const existing = await this.database.findByLongURL(longURL);
        if (existing) {
            return existing.shortCode;
        }
        
        // Generate short code
        const shortCode = customAlias || this.generateShortCode();
        
        // Check if short code is available
        if (await this.database.findByShortCode(shortCode)) {
            throw new Error('Short code already exists');
        }
        
        // Store in database
        await this.database.store({
            shortCode,
            longURL,
            createdAt: new Date(),
            clickCount: 0
        });
        
        // Cache the mapping
        await this.cache.set(shortCode, longURL, 3600); // 1 hour
        
        return shortCode;
    }
    
    async expandURL(shortCode) {
        // Check cache first
        let longURL = await this.cache.get(shortCode);
        
        if (!longURL) {
            // Fetch from database
            const record = await this.database.findByShortCode(shortCode);
            if (!record) {
                throw new Error('URL not found');
            }
            
            longURL = record.longURL;
            
            // Update cache
            await this.cache.set(shortCode, longURL, 3600);
        }
        
        // Track analytics asynchronously
        this.analytics.trackClick(shortCode);
        
        return longURL;
    }
    
    generateShortCode() {
        const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let result = '';
        
        for (let i = 0; i < 6; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        
        return result;
    }
}
\`\`\`

### Design a Chat Application

**Requirements:**
- Real-time messaging
- Group chats
- Message history
- Online presence
- File sharing

\`\`\`javascript
class ChatApplication {
    constructor() {
        this.websocketServer = new WebSocketServer();
        this.messageQueue = new MessageQueue();
        this.database = new DatabaseManager();
        this.userSessions = new Map();
    }
    
    async handleConnection(socket, userId) {
        // Store user session
        this.userSessions.set(userId, {
            socket,
            lastSeen: Date.now(),
            status: 'online'
        });
        
        // Notify contacts about online status
        await this.broadcastPresence(userId, 'online');
        
        // Send pending messages
        await this.sendPendingMessages(userId);
        
        socket.on('message', (data) => this.handleMessage(userId, data));
        socket.on('disconnect', () => this.handleDisconnection(userId));
    }
    
    async handleMessage(senderId, messageData) {
        const { recipientId, content, type = 'text', chatId } = messageData;
        
        // Store message in database
        const message = await this.database.storeMessage({
            id: this.generateMessageId(),
            senderId,
            recipientId,
            chatId,
            content,
            type,
            timestamp: Date.now(),
            status: 'sent'
        });
        
        // Try to deliver immediately
        const delivered = await this.deliverMessage(recipientId, message);
        
        if (!delivered) {
            // Queue for later delivery
            await this.messageQueue.enqueue('pending-messages', {
                recipientId,
                message
            });
        }
        
        // Send delivery confirmation to sender
        this.sendToUser(senderId, {
            type: 'message-status',
            messageId: message.id,
            status: delivered ? 'delivered' : 'queued'
        });
    }
    
    async deliverMessage(userId, message) {
        const session = this.userSessions.get(userId);
        
        if (session && session.socket.readyState === WebSocket.OPEN) {
            session.socket.send(JSON.stringify({
                type: 'new-message',
                message
            }));
            
            // Update message status
            await this.database.updateMessageStatus(message.id, 'delivered');
            
            return true;
        }
        
        return false;
    }
    
    async createGroupChat(creatorId, memberIds, chatName) {
        const chatId = this.generateChatId();
        
        // Create chat in database
        await this.database.createChat({
            id: chatId,
            name: chatName,
            type: 'group',
            createdBy: creatorId,
            members: [creatorId, ...memberIds],
            createdAt: Date.now()
        });
        
        // Notify all members
        const members = [creatorId, ...memberIds];
        for (const memberId of members) {
            this.sendToUser(memberId, {
                type: 'chat-created',
                chat: { id: chatId, name: chatName, members }
            });
        }
        
        return chatId;
    }
}
\`\`\`

## External Resources

For comprehensive understanding and practical application of system design concepts:

- [High Scalability](http://highscalability.com/) - Real-world architecture case studies and scalability patterns
- [System Design Primer](https://github.com/donnemartin/system-design-primer) - Comprehensive guide with examples and exercises
- [AWS Architecture Center](https://aws.amazon.com/architecture/) - Cloud architecture patterns and best practices
- [Google Cloud Architecture Framework](https://cloud.google.com/architecture/framework) - Design principles for cloud systems
- [Martin Fowler's Architecture Articles](https://martinfowler.com/architecture/) - In-depth articles on software architecture
- [Designing Data-Intensive Applications](https://dataintensive.net/) - Essential book by Martin Kleppmann
- [Building Microservices](https://samnewman.io/books/building_microservices/) - Comprehensive guide by Sam Newman
- [Site Reliability Engineering](https://sre.google/books/) - Google's approach to building reliable systems
      `
    },
    {
      id: 'databases',
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
# Database Systems

## Overview
Database systems are crucial for storing, retrieving, and managing data efficiently in software applications.

## Relational Databases

### ACID Properties
- **Atomicity**: Transactions are all-or-nothing
- **Consistency**: Database remains in valid state
- **Isolation**: Concurrent transactions don't interfere
- **Durability**: Committed changes persist

### Normalization
- **1NF**: Eliminate repeating groups
- **2NF**: Remove partial dependencies
- **3NF**: Remove transitive dependencies
- **BCNF**: Stricter form of 3NF

### Indexing
- **B-Tree Indexes**: Most common, good for range queries
- **Hash Indexes**: Fast equality lookups
- **Bitmap Indexes**: Efficient for low-cardinality data

## NoSQL Databases

### Types
- **Document**: MongoDB, CouchDB
- **Key-Value**: Redis, DynamoDB
- **Column-Family**: Cassandra, HBase
- **Graph**: Neo4j, Amazon Neptune

### CAP Theorem
- **Consistency**: All nodes see the same data simultaneously
- **Availability**: System remains operational
- **Partition Tolerance**: System continues despite network failures

## Best Practices
1. Design schema based on query patterns
2. Use appropriate indexes for query optimization
3. Implement proper backup and recovery strategies
4. Monitor database performance metrics

## External Resources
- [PostgreSQL Documentation](https://www.postgresql.org/docs/) - Comprehensive SQL reference
- [MongoDB University](https://university.mongodb.com/) - NoSQL database courses
- [Database Design Course](https://www.coursera.org/learn/database-design) - Fundamentals of database design
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
# Cloud Computing

## Overview
Cloud computing provides on-demand access to computing resources over the internet, enabling scalable and cost-effective solutions.

## Service Models

### IaaS (Infrastructure as a Service)
- **Examples**: AWS EC2, Azure VMs, Google Compute Engine
- **Use Cases**: When you need full control over the operating system and applications

### PaaS (Platform as a Service)
- **Examples**: AWS Elastic Beanstalk, Azure App Service, Google App Engine
- **Use Cases**: Focus on application development without managing infrastructure

### SaaS (Software as a Service)
- **Examples**: Gmail, Salesforce, Office 365
- **Use Cases**: Ready-to-use applications accessible via web browsers

## Containerization

### Docker
- **Containers**: Lightweight, portable application packages
- **Images**: Templates for creating containers
- **Benefits**: Consistency across environments, resource efficiency

### Kubernetes
- **Orchestration**: Automated deployment, scaling, and management of containers
- **Components**: Pods, Services, Deployments, ConfigMaps
- **Benefits**: High availability, auto-scaling, rolling updates

## Serverless Computing
- **Function as a Service (FaaS)**: AWS Lambda, Azure Functions
- **Benefits**: No server management, automatic scaling, pay-per-use
- **Use Cases**: Event-driven applications, microservices, data processing

## Best Practices
1. Design for failure and implement redundancy
2. Use managed services when possible
3. Implement proper security and access controls
4. Monitor costs and optimize resource usage
5. Automate deployment and infrastructure management

## External Resources
- [AWS Training](https://aws.amazon.com/training/) - Official AWS learning resources
- [Azure Learning Paths](https://docs.microsoft.com/en-us/learn/azure/) - Microsoft Azure tutorials
- [Google Cloud Skills Boost](https://www.cloudskillsboost.google/) - Google Cloud training
      `
    },
    {
      id: 'security',
      title: 'Software Security',
      icon: <Shield className="h-6 w-6" />,
      description: 'Understand security principles, vulnerabilities, and best practices',
      difficulty: 'Advanced',
      topics: [
        'Authentication & Authorization',
        'Encryption and Hashing',
        'OWASP Top 10',
        'Secure Coding Practices',
        'API Security',
        'Network Security',
        'Security Testing',
        'Compliance Standards',
        'Incident Response',
        'Privacy Protection'
      ],
      content: `
# Software Security

## Overview
Software security involves protecting applications and data from threats, vulnerabilities, and unauthorized access.

## Authentication & Authorization

### Authentication
- **Methods**: Passwords, Multi-factor authentication, Biometrics
- **Protocols**: OAuth 2.0, OpenID Connect, SAML
- **Best Practices**: Strong password policies, account lockout mechanisms

### Authorization
- **Models**: Role-Based Access Control (RBAC), Attribute-Based Access Control (ABAC)
- **Principles**: Least privilege, separation of duties
- **Implementation**: JWT tokens, session management

## Encryption

### Symmetric Encryption
- **Algorithms**: AES, DES, 3DES
- **Use Cases**: Bulk data encryption, secure communication

### Asymmetric Encryption
- **Algorithms**: RSA, ECC, Diffie-Hellman
- **Use Cases**: Key exchange, digital signatures, PKI

### Hashing
- **Algorithms**: SHA-256, bcrypt, scrypt
- **Use Cases**: Password storage, data integrity verification

## Common Vulnerabilities (OWASP Top 10)

1. **Injection**: SQL, NoSQL, OS command injection
2. **Broken Authentication**: Session management flaws
3. **Sensitive Data Exposure**: Inadequate protection of sensitive information
4. **XML External Entities (XXE)**: Processing untrusted XML input
5. **Broken Access Control**: Improper access restrictions
6. **Security Misconfiguration**: Default configurations, unnecessary features
7. **Cross-Site Scripting (XSS)**: Injecting malicious scripts
8. **Insecure Deserialization**: Exploiting deserialization flaws
9. **Using Components with Known Vulnerabilities**: Outdated libraries
10. **Insufficient Logging & Monitoring**: Inadequate security monitoring

## Best Practices
1. Implement defense in depth
2. Validate and sanitize all inputs
3. Use secure coding standards
4. Regular security testing and code reviews
5. Keep dependencies up to date
6. Implement proper error handling
7. Use HTTPS for all communications

## External Resources
- [OWASP](https://owasp.org/) - Web application security guidance
- [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework) - Security standards
- [Security Code Review Guide](https://owasp.org/www-project-code-review-guide/) - Secure coding practices
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
        'Design Principles',
        'Microservices vs Monoliths',
        'Event-Driven Architecture',
        'Domain-Driven Design',
        'API Design',
        'Performance Optimization',
        'Scalability Patterns',
        'Quality Attributes',
        'Architecture Documentation'
      ],
      content: `
# Software Architecture

## Overview
Software architecture defines the high-level structure of software systems and the discipline of creating such structures.

## Architectural Patterns

### Layered Architecture
- **Structure**: Presentation, Business, Persistence, Database layers
- **Benefits**: Separation of concerns, maintainability
- **Drawbacks**: Performance overhead, monolithic deployment

### Microservices Architecture
- **Principles**: Single responsibility, decentralized, fault isolation
- **Benefits**: Scalability, technology diversity, team autonomy
- **Challenges**: Distributed system complexity, data consistency

### Event-Driven Architecture
- **Components**: Event producers, event routers, event consumers
- **Patterns**: Publish-subscribe, event sourcing, CQRS
- **Benefits**: Loose coupling, scalability, real-time processing

## Design Principles

### SOLID Principles
- **Single Responsibility**: One reason to change
- **Open/Closed**: Open for extension, closed for modification
- **Liskov Substitution**: Subtypes must be substitutable
- **Interface Segregation**: Many specific interfaces
- **Dependency Inversion**: Depend on abstractions

### Domain-Driven Design
- **Concepts**: Bounded contexts, aggregates, entities, value objects
- **Benefits**: Better business alignment, modular design
- **Practices**: Ubiquitous language, strategic design

## Quality Attributes

### Performance
- **Metrics**: Response time, throughput, resource utilization
- **Tactics**: Caching, load balancing, asynchronous processing

### Scalability
- **Horizontal**: Add more instances
- **Vertical**: Increase instance capacity
- **Patterns**: Sharding, partitioning, federation

### Reliability
- **Availability**: System uptime and accessibility
- **Fault Tolerance**: Graceful degradation, circuit breakers
- **Recovery**: Backup strategies, disaster recovery

## Best Practices
1. Start with business requirements
2. Consider quality attributes early
3. Design for change and evolution
4. Document architectural decisions
5. Validate architecture with prototypes
6. Regular architecture reviews

## External Resources
- [Software Architecture Guide](https://martinfowler.com/architecture/) - Martin Fowler's architecture insights
- [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) - Robert Martin's clean architecture
- [Microservices.io](https://microservices.io/) - Microservices patterns and practices
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
        'Branching Strategies',
        'Merge vs Rebase',
        'Git Workflows',
        'Conflict Resolution',
        'Git Hooks',
        'Code Reviews',
        'Release Management',
        'Git Best Practices',
        'Advanced Git Commands'
      ],
      content: `
# Version Control & Git

## Overview
Version control systems track changes to files over time, enabling collaboration and maintaining project history.

## Git Fundamentals

### Basic Commands
- **git init**: Initialize a new repository
- **git clone**: Copy a repository from remote
- **git add**: Stage changes for commit
- **git commit**: Save changes to repository
- **git push**: Upload changes to remote
- **git pull**: Download changes from remote

### Git Workflow
1. **Working Directory**: Your local files
2. **Staging Area**: Prepared changes for commit
3. **Repository**: Committed changes with history

## Branching Strategies

### Git Flow
- **Master**: Production-ready code
- **Develop**: Integration branch for features
- **Feature**: Individual feature development
- **Release**: Prepare for production release
- **Hotfix**: Critical production fixes

### GitHub Flow
- **Main**: Always deployable
- **Feature Branches**: Short-lived branches for features
- **Pull Requests**: Code review and integration

### GitLab Flow
- **Production Branch**: Current production state
- **Pre-production**: Staging environment
- **Feature Branches**: Development work

## Advanced Concepts

### Merge vs Rebase
- **Merge**: Combines branches, preserves history
- **Rebase**: Replays commits, creates linear history
- **When to use**: Merge for feature integration, rebase for clean history

### Conflict Resolution
- **Causes**: Simultaneous changes to same lines
- **Resolution**: Manual editing, merge tools
- **Prevention**: Frequent pulls, small commits

### Git Hooks
- **Pre-commit**: Run tests before commit
- **Pre-push**: Validate before pushing
- **Post-receive**: Deploy after receiving push

## Best Practices
1. Write clear, descriptive commit messages
2. Make small, focused commits
3. Use branching for feature development
4. Regularly sync with remote repository
5. Review code before merging
6. Tag releases for easy reference
7. Keep repository clean and organized

## Collaboration Workflows
- **Centralized**: Single shared repository
- **Feature Branch**: Isolated feature development
- **Forking**: Independent repository copies
- **Pull Request**: Code review and discussion

## External Resources
- [Pro Git Book](https://git-scm.com/book) - Comprehensive Git guide
- [Atlassian Git Tutorials](https://www.atlassian.com/git/tutorials) - Interactive Git learning
- [GitHub Guides](https://guides.github.com/) - GitHub-specific workflows
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
                    <div dangerouslySetInnerHTML={{ 
                      __html: topic.content
                        // First handle code blocks to prevent them from being processed by other replacements
                        .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre class="bg-gray-900 dark:bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto my-4"><code class="language-$1">$2</code></pre>')
                        // Handle inline code
                        .replace(/`([^`]+)`/g, '<code class="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm font-mono">$1</code>')
                        // Handle headings
                        .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold mt-8 mb-4">$1</h1>')
                        .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold mt-6 mb-3">$1</h2>')
                        .replace(/^### (.*$)/gm, '<h3 class="text-xl font-bold mt-4 mb-2">$1</h3>')
                        // Handle bold text
                        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                        // Handle links (only process markdown-style links, not URLs in code)
                        .replace(/(?<!<code[^>]*>.*?)\[(.*?)\]\((.*?)\)(?![^<]*<\/code>)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline">$1</a>')
                        // Handle line breaks (but preserve code block formatting)
                        .replace(/\n(?![^<]*<\/pre>)/g, '<br>')
                    }} />
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

