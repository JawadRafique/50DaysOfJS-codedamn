/**
 * TODO: Tasks
 * * Task 1: reverseAString("JavaScript is awesome") should return "emosewa si tpircSavaJ"
 * * Task 2: reverseAString("Peter Parker is Spiderman") should return "namredipS si rekraP reteP"
 * * Task 3: reverseAString("codedamn") should return "nmadedoc"
 */

// Reversing String
function reverseAString(str) {
    // write your solution here

    // Logic
    // const strArray = str.split("");
    // const reverseStrArray = strArray.reverse();
    // const reverseStr = reverseStrArray.join("");
    // return reverseStr;

    // Shorthand
    return str.split("").reverse().join("");
}

// Task 1
console.log(
    `Task 1 reversed string is: ${reverseAString("JavaScript is awesome")}`
);

// Task 2
console.log(
    `Task 1 reversed string is: ${reverseAString("Peter Parker is Spiderman")}`
);

// Task 4
console.log(`Task 1 reversed string is: ${reverseAString("codedamn")}`);
