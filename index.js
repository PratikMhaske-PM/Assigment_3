"use strict";
// 1)Create 2 separate arrays for even and odd numbers within the range of 0 to 100. 
let even = [];
let odd = [];
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        even.push(i);
    }
    else {
        odd.push(i);
    }
}
console.log("Even:", even);
console.log("odd", odd);
//  2)Print below star pattern: 
//     * 
//    *** 
//   ***** 
//  ******* 
// ********* 
let n = 5;
for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        row += "*";
    }
    console.log(row);
}
//2)Pattern: 
// * 
// * * 
// * * * 
// * * * * 
// * * * * *
let n = 5;
for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}
//3)Pattern:
// * * * * *
// * * * *
// * * *
// * *
// *
for (let i = 5; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}
//3)Find prime numbers in the given range and store them in separate arrays
let prime = [];
for (let i = 2; i <= 100; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrime = false;
        }
    }
    if (isPrime) {
        prime.push(i);
    }
}
console.log("Prime numbers between 0 and 100:", prime);
// 4)Check if a number is a palindrome or not.
let num = 121;
let reversed = Number(num.toString().split('').reverse().join(''));
console.log(num === reversed ? "True" : "False");
// 5) Find the factorial of the given number.
let num = 5;
let fact = 1;
for (let i = 1; i <= num; i++) {
    fact *= i;
}
console.log(fact);
// 6)Program to print ASCII Value of a character. 
let ch = 'A';
console.log(ch.charCodeAt(0));
//7)Adding and subtracting matrices in javascript. 
let A = [
    [1, 2],
    [3, 4]
];
let B = [
    [5, 6],
    [7, 8]
];
let rows = A.length;
let cols = A[0].length;
// Result matrices
let sum = [];
let diff = [];
for (let i = 0; i < rows; i++) {
    sum[i] = [];
    diff[i] = [];
    for (let j = 0; j < cols; j++) {
        sum[i][j] = A[i][j] + B[i][j];
        diff[i][j] = A[i][j] - B[i][j];
    }
}
console.log("Addition:", sum);
console.log("Subtraction:", diff);
// 8). Find the maximum frequency character in string.
let str = "banana";
let freq = {};
let maxChar = "";
let maxCount = 0;
// Step 1: Count frequency
for (let char of str) {
    if (freq[char]) {
        freq[char]++;
    }
    else {
        freq[char] = 1;
    }
    // Step 2: Track max
    if (freq[char] > maxCount) {
        maxCount = freq[char];
        maxChar = char;
    }
}
console.log("Max Frequency Character:", maxChar);
console.log("Count:", maxCount);
// 9)Sort below object by keys. 
myDict = { 'Ashwin': 100, 'rakesh': 9,
    'Ravindra': 25, 'yash': 200, 'sai': 32 };
let myDict = {
    'Ashwin': 100,
    'rakesh': 9,
    'Ravindra': 25,
    'yash': 200,
    'sai': 32
};
let sorted = Object.fromEntries(Object.entries(myDict).sort((a, b) => a[0].localeCompare(b[0])));
console.log(sorted);
//10)Linear Search
let arr = [1, 2, 3, 4, 5];
let target = 3;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
        console.log("Element found at index:", i);
        break;
    }
}
// 11) Program for insertion sort.
let arr = [5, 3, 4, 1];
for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
    }
    arr[j + 1] = key;
}
console.log(arr);
