/**
 * @param {number} n
 * @return {Function} counter
 */
// var createCounter = function(n) {
    
//     return function() {
        
//     };
// };

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

function createCounter(n) {
    return function() {
        return n++;
    };
}

// Example 1
let counter1 = createCounter(10);
console.log([counter1(), counter1(), counter1()]); // Output: [10, 11, 12]

// Example 2
let counter2 = createCounter(-2);
console.log([counter2(), counter2(), counter2(), counter2(), counter2()]); // Output: [-2, -1, 0, 1, 2]
