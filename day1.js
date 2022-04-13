/**
 * TODO: Tasks
 * * Task 1: randomNumberGeneratorInRange(10, 50) should return a number between 10-50 (inclusive)
 * * Task 2: randomNumberGeneratorInRange(100, 200) should return a number between 100-200 (inclusive)
 */

// Random Number Generator b/w Num1 and Num2
// Num1: rangeStart
// Num2: rangeEnd
function randomNumberGeneratorInRange(rangeStart, rangeEnd) {
    return Math.floor(Math.random() * (rangeEnd - rangeStart + 1) + rangeStart);
}

// Task 1
console.log(`Task 1 random number: ${randomNumberGeneratorInRange(10, 50)}`);

// Task 2
console.log(`Task 2 random number: ${randomNumberGeneratorInRange(100, 200)}`);
