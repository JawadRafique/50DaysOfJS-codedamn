/**
 * TODO: Tasks
 * * Task 1: reverseGivenInteger(3849) returns 9483
 * * Task 2: reverseGivenInteger(2222) returns 2222
 * * Task 3: reverseGivenInteger(1002) returns 2001
 */

// Reversing Number
function reverseGivenInteger(num) {
    // write your solution here
    return Number(num.toString().split("").reverse().join(""));
}

// Task 1
console.log(`Task 1 reversed integer is: ${reverseGivenInteger(3849)}`);

// Task 2
console.log(`Task 2 reversed integer is: ${reverseGivenInteger(2222)}`);

// Task 3
console.log(`Task 3 reversed integer is: ${reverseGivenInteger(1002)}`);
