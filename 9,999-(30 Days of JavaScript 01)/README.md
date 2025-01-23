# Hello World Function

## Problem Description

Write a function `createHelloWorld`. It should return a new function that always returns `"Hello World"`.

### Function Signature
```javascript
function createHelloWorld(): Function
```

### Example 1:
**Input:**
```javascript
const args = [];
```
**Output:**
```javascript
"Hello World"
```
**Explanation:**
```javascript
const f = createHelloWorld();
f(); // "Hello World"
```

The function returned by `createHelloWorld` should always return `"Hello World"`.

### Example 2:
**Input:**
```javascript
const args = [{}, null, 42];
```
**Output:**
```javascript
"Hello World"
```
**Explanation:**
```javascript
const f = createHelloWorld();
f({}, null, 42); // "Hello World"
```

Any arguments passed to the returned function should be ignored, and it should still always return `"Hello World"`.

### Constraints:
- `0 <= args.length <= 10`

## Notes:
- This problem is often used in coding interviews to test understanding of closures and higher-order functions.

---

Copyright ©️ 2025 LeetCode All rights reserved.