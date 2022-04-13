/**
 * TODO: Tasks
 * * Task 1: convertTo24HrsFormat("12:10AM") returns "00:10"
 * * Task 2: convertTo24HrsFormat("5:00AM") returns "05:00"
 * * Task 3: convertTo24HrsFormat("12:33PM") returns "12:33"
 * * Task 4: convertTo24HrsFormat("01:59PM") returns "13:59"
 * * Task 5: convertTo24HrsFormat("11:8PM") returns "23:08"
 * * Task 6: convertTo24HrsFormat("10:02PM") returns "22:02"
 */

function convertTo24HrsFormat(time) {
    // write your solution here
    let [hours, minutes] = time.split(":");

    if (hours === "12") {
        hours = "00";
    }

    if (minutes.includes("PM")) {
        hours = parseInt(hours, 10) + 12;
    }
    return `${hours.toString().padStart(2, "0")}:${minutes
        .slice(0, -2)
        .padStart(2, "0")}`;
    // return;
}

// Task 1
console.log(`Converted time: ${convertTo24HrsFormat("12:10AM")}`);

// Task 2
console.log(`Converted time: ${convertTo24HrsFormat("5:00AM")}`);

// Task 3
console.log(`Converted time: ${convertTo24HrsFormat("12:33PM")}`);

// Task 4
console.log(`Converted time: ${convertTo24HrsFormat("01:59PM")}`);

// Task 5
console.log(`Converted time: ${convertTo24HrsFormat("11:8PM")}`);

// Task 6
console.log(`Converted time: ${convertTo24HrsFormat("10:02PM")}`);
