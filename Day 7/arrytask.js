// Create an array of numbers and add numbers to this array and Keep adding numbers to the array in the even number format
let numbers = []; // Initialize an empty array
let num = 2; // Start with the first even number

for (let i = 0; i < 10; i++) { // Add 10 even numbers
    numbers.push(num);
    num += 2; // Increment by 2 to keep it even
}

console.log(numbers);

// #################################################################33

// filter the numbers divisible by 10 from a given array Eg: [10,25,67,45,70,36,50]
let numbers1 = [10, 25, 67, 45, 70, 36, 50];

let divisibleByTen = numbers1.filter(num => num % 10 === 0);

console.log(divisibleByTen);

// #################################################################33
// Create an array of square of given number eg: [3,4,5,6,7] 
let numbers2 = [3, 4, 5, 6, 7];

let squares = numbers2.map(num => num * num);

console.log(squares);


// #################################################################33
// Write a function to remove all duplicate elements from an array
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

// Example usage:
let numbers3 = [1, 2, 3, 4, 2, 3, 5, 6, 7, 5];
let uniqueNumbers = removeDuplicates(numbers3);

console.log(uniqueNumbers);

// #################################################################33
// Write a function to reverse an array in-place (without creating a new array).
function reverseArray(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
      // Swap elements
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
  }
}

let numbers4 = [1, 2, 3, 4, 5];
reverseArray(numbers4);

console.log(numbers4); // Output: [5, 4, 3, 2, 1]


// #################################################################33
// Write a function to find the intersection of two arrays
function findIntersection(arr1, arr2) {
  let set1 = new Set(arr1);
  return arr2.filter(num => set1.has(num));
}

// Example usage:
let array1 = [1, 2, 3, 4, 5];
let array2 = [3, 4, 5, 6, 7];

let intersection = findIntersection(array1, array2);
console.log(intersection); // Output: [3, 4, 5]

// #################################################################33
// Write a function to remove all falsy values (e.g., null, undefined, 0, false) from an array.
function removeFalsyValues(arr) {
  return arr.filter(Boolean);
}

// Example usage:
let mixedArray = [0, 1, false, 2, "", 3, null, undefined, NaN, 4, "hello"];
let cleanedArray = removeFalsyValues(mixedArray);

console.log(cleanedArray); // Output: [1, 2, 3, 4, "hello"]


// #################################################################33
// Write a function to shuffle the elements of an array randomly.
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
      let randomIndex = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]]; // Swap elements
  }
}


let numbers5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
shuffleArray(numbers5);

console.log(numbers5); // Output: Random shuffled array


// #################################################################33
// Write a function to find the difference between two arrays (elements in one array but not in the other).
function arrayDifference(arr1, arr2) {
  let set2 = new Set(arr2);
  let set1 = new Set(arr1);

  let diff1 = arr1.filter(num => !set2.has(num)); // Elements in arr1 but not in arr2
  let diff2 = arr2.filter(num => !set1.has(num)); // Elements in arr2 but not in arr1

  return [...diff1, ...diff2]; // Combine both differences
}

let array11 = [1, 2, 3, 4, 5];
let array21 = [3, 4, 5, 6, 7];

let difference = arrayDifference(array11, array21);
console.log(difference); // Output: [1, 2, 6, 7]

