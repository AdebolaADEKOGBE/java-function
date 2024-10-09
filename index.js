

function reverseString(str) {
    return str.split('').reverse().join(''); // Split the string into an array, reverse it, and join it back
}

// Example usage:
console.log(reverseString("hello")); // Output: "olleh"

function countCharacters(str) {
    return str.length; // Return the length of the string
}

// Example usage:
console.log(countCharacters("hello world")); // Output: 11

function capitalizeWords(sentence) {
    return sentence
        .split(' ') // Split the sentence into words
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
        .join(' '); // Join the words back into a sentence
}

// Example usage:
console.log(capitalizeWords("hello world")); // Output: "Hello World"


function findMax(arr) {
    if (arr.length === 0) return undefined; // Handle empty array
    return Math.max(...arr); // Use the spread operator to find the max
}

function findMin(arr) {
    if (arr.length === 0) return undefined; // Handle empty array
    return Math.min(...arr); // Use the spread operator to find the min
}

// Example usage:
console.log(findMax([3, 1, 4, 1, 5, 9])); // Output: 9
console.log(findMin([3, 1, 4, 1, 5, 9])); // Output: 1


function sumArray(arr) {
    return arr.reduce((sum, current) => sum + current, 0); // Use reduce to calculate the sum
}

// Example usage:
console.log(sumArray([1, 2, 3, 4])); // Output: 10

function filterArray(arr, condition) {
    return arr.filter(condition); // Use filter method to filter based on the given condition
}

// Example usage:
const isEven = (num) => num % 2 === 0;
console.log(filterArray([1, 2, 3, 4, 5], isEven)); // Output: [2, 4]


function factorial(n) {
    if (n < 0) return undefined; // Factorial is not defined for negative numbers
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Example usage:
console.log(factorial(5)); // Output: 120


function isPrime(num) {
    if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // If divisible by any number other than 1 and itself
    }
    return true;
}

// Example usage:
console.log(isPrime(7)); // Output: true
console.log(isPrime(10)); // Output: false


function fibonacci(n) {
    if (n <= 0) return []; // Return an empty array for non-positive input
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    return sequence.slice(0, n); // Return the sequence up to n terms
}

// Example usage:
console.log(fibonacci(5)); // Output: [0, 1, 1, 2, 3]
