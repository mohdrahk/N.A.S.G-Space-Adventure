# JavaScript Cheat Sheet

## Variables and Data Types
**Explanation**: Variables store data. Use `const` for values that don't change, `let` for those that do, and avoid `var` to prevent scope issues. JavaScript has several data types like strings, numbers, and objects.
```javascript
const name = "John"; // Immutable variable
let age = 25; // Mutable variable
typeof 42; // Returns "number"
typeof "hello"; // Returns "string"
```

## Arrays
**Explanation**: Arrays hold ordered lists. Use these methods to manipulate and query arrays efficiently.
```javascript
const arr = [1, 2, 3]; // Create array
arr.length; // Get length: 3
arr.push(4); // Add to end: [1, 2, 3, 4]
arr.pop(); // Remove last: [1, 2, 3]
arr.unshift(0); // Add to start: [0, 1, 2, 3]
arr.shift(); // Remove first: [1, 2, 3]
arr.splice(1, 1, 5); // Modify at index 1, remove 1, add 5: [1, 5, 3]
arr.slice(1, 3); // Extract subset: [5, 3]
arr.concat([6, 7]); // Merge arrays: [1, 5, 3, 6, 7]
arr.includes(5); // Check if value exists: true
arr.indexOf(5); // First index of value: 1
arr.lastIndexOf(5); // Last index of value: 1
arr.find(x => x > 2); // First element matching condition: 5
arr.findIndex(x => x > 2); // Index of first match: 1
const doubled = arr.map(n => n * 2); // Transform: [2, 10, 6]
const filtered = arr.filter(n => n > 2); // Keep matches: [5, 3]
const sum = arr.reduce((acc, curr) => acc + curr, 0); // Sum: 9
arr.forEach(n => console.log(n)); // Iterate, no return
arr.sort((a, b) => a - b); // Sort ascending: [1, 3, 5]
arr.reverse(); // Reverse order: [5, 3, 1]
arr.join("-"); // Join to string: "5-3-1"
arr.every(x => x > 0); // All match condition: true
arr.some(x => x > 4); // Any match condition: true
arr.flat(); // Flatten nested arrays: [1, 2, 3] from [1, [2, 3]]
```

## Strings
**Explanation**: Strings represent text. These methods help manipulate and query strings.
```javascript
const str = "Hello World";
str.length; // Get length: 11
str.charAt(1); // Get character at index: "e"
str.charCodeAt(1); // ASCII code at index: 101
str.match(/l+/g); // Find matches with regex: ["ll", "l"]
str.replace("World", "Universe"); // Replace text: "Hello Universe"
str.split(" "); // Split into array: ["Hello", "World"]
str.substring(0, 5); // Extract substring: "Hello"
str.toLowerCase(); // Convert to lowercase: "hello world"
str.toUpperCase(); // Convert to uppercase: "HELLO WORLD"
str.trim(); // Remove whitespace: "Hello World"
str.startsWith("He"); // Check start: true
str.endsWith("ld"); // Check end: true
str.includes("Wor"); // Check substring: true
str.indexOf("l"); // First index of substring: 2
str.lastIndexOf("l"); // Last index of substring: 9
str.repeat(2); // Repeat string: "Hello WorldHello World"
str.padStart(15, "*"); // Pad start: "****Hello World"
str.padEnd(15, "*"); // Pad end: "Hello World****"
```

## Objects
**Explanation**: Objects store key-value pairs. Access properties with dot or bracket notation, and use destructuring or spread for cleaner code.
```javascript
const obj = { key: "value" }; // Create object
obj.newKey = "newValue"; // Add property
const { key } = obj; // Destructure: key = "value"
const newObj = { ...obj, otherKey: "other" }; // Spread: copy with new property
```

## Functions
**Explanation**: Functions encapsulate reusable logic. Arrow functions are concise, default parameters simplify code, and rest parameters handle variable arguments.
```javascript
function add(a, b) { return a + b; } // Standard function
const multiply = (a, b) => a * b; // Arrow function
function greet(name = "Guest") { return `Hello, ${name}`; } // Default param
function sum(...numbers) { return numbers.reduce((a, b) => a + b, 0); } // Rest param
```

## Loops
**Explanation**: Loops iterate over data. Use `for` for indexed loops, `for...of` for arrays, and `for...in` for object keys.
```javascript
for (let i = 0; i < 5; i++) { console.log(i); } // 0 to 4
for (const item of [1, 2, 3]) { console.log(item); } // Iterate array
for (const key in { a: 1, b: 2 }) { console.log(key); } // Iterate object keys
```

## Conditionals
**Explanation**: Conditionals control flow. Use `if/else` for complex logic, ternaries for simple conditions, and `switch` for multiple cases.
```javascript
if (age > 18) { console.log("Adult"); } else { console.log("Minor"); }
const access = age > 18 ? "Allowed" : "Denied"; // Ternary
switch (day) {
  case "Monday": console.log("Work day"); break;
  default: console.log("Unknown");
}
```

## Error Handling
**Explanation**: Try-catch handles errors gracefully, with `finally` running regardless of outcome.
```javascript
try {
  throw new Error("Oops");
} catch (error) {
  console.error(error.message); // Log error
} finally {
  console.log("Cleanup");
}
```

## Promises and Async/Await
**Explanation**: Promises handle asynchronous operations. Async/await makes promise-based code cleaner and easier to read.
```javascript
const promise = new Promise((resolve) => setTimeout(() => resolve("Done"), 1000));
promise.then(result => console.log(result)); // After 1s: "Done"
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}
```

## DOM Manipulation
**Explanation**: Interact with web pages using the DOM. Select elements, modify them, and attach event listeners for interactivity.
```javascript
const el = document.querySelector(".class"); // Select element
el.textContent = "New text"; // Change text
el.style.backgroundColor = "blue"; // Change style
el.addEventListener("click", () => console.log("Clicked!")); // Add event
```

## Events
**Explanation**: Events handle user interactions like mouse clicks or keyboard inputs. Use `addEventListener` to attach handlers. The `event.target` property identifies the element that triggered the event.
```javascript
// Mouse Click Event
const button = document.querySelector("#myButton");
button.addEventListener("click", (event) => {
  console.log("Clicked element:", event.target); // Log the clicked element
  event.target.style.backgroundColor = "green"; // Change clicked element's color
});

// Keyboard Arrow Key Event
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    console.log("Up arrow pressed on:", event.target); // Log element in focus
    // Example: Move element up
  } else if (event.key === "ArrowDown") {
    console.log("Down arrow pressed on:", event.target);
    // Example: Move element down
  } else if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
    console.log(`${event.key} arrow pressed on:`, event.target);
    // Example: Handle left/right movement
  }
});
```

## Tips
**Explanation**: Best practices improve code quality and performance.
- **Strict Mode**: `"use strict";` catches errors early.
- **Avoid Globals**: Use `const`/`let` in functions or modules.
- **Debugging**: Use `console.log()` or browser dev tools.
- **ES Modules**: `export const x = 1;` and `import { x } from "./file.js";`.
- **Nullish Coalescing**: `value ?? "default"` for `null`/`undefined`.
- **Optional Chaining**: `obj?.prop` avoids errors if `obj` is undefined.
- **Performance**: Use `requestAnimationFrame` for animations.

## Useful Patterns
- **Debounce** (Explanation: Limits function calls for performance, e.g., during rapid events like scrolling):
```javascript
function debounce(fn, delay) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
}
```
- **Memoization** (Explanation: Caches results to avoid redundant computations):
```javascript
function memoize(fn) {
  const cache = {};
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache[key]) return cache[key];
    return (cache[key] = fn(...args));
  };
}
```