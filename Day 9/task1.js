var nestedArray =[
  [5,6,7,-2],
  [-5,-6,-7],
  [8,9,10],
  [3,5,2,1,4],
  [-3,5,2,1,],
  [4,2,6,8],
]

//1. Find Maximum: Write a function to find the maximum number in a nested array of integers.
function maxArr(arr){
  return Math.max(...arr.flat());
}
console.log("the max number in the array : ",maxArr(nestedArray)); 
console.log('-----------------------------------------------');

//2. Calculate Average: Create a function to calculate the average of all numbers in a nested array.
function averageArr(arr){
  var sum = arr.flat().reduce((n1,n2) => n1+n2,0);
  return sum / arr.length;

}
console.log("The calculated average: ",averageArr(nestedArray));
console.log('-----------------------------------------------');


//3. Count Negative Numbers: Implement a function that counts the number of negative numbers in a nested array.
function countNegativeArr(arr){
  let countArr = arr.flat().reduce((count,num) => 
    num<0 ? count + 1 : count,0
  );
  return countArr; 
}
console.log("The count of negative number in the array: ",countNegativeArr(nestedArray));
console.log('-----------------------------------------------');


//4. Subarray Sums: Write a function that returns an array of sums of each subarray within the nested array.
function subarraySum(arr){
  let subArr = arr.map(subarr => subarr.reduce((num1,num2) => num1 + num2 ,0));
  return subArr;
}

console.log("the sum of subarrays : ",subarraySum(nestedArray));
console.log('-----------------------------------------------');


//5. Sort Subarrays: Implement a function that sorts each subarray in a nested array of numbers.
function subarraySort(arr){
  let sortArr = arr.map(subarr => subarr.sort((num1,num2) => num1 - num2));
  return sortArr;
}

console.log("the sorted subarrays : ",subarraySort(nestedArray));
console.log('-----------------------------------------------');


//6. Flatten Nested Array: Write a function to flatten a nested array to a single-level array.
function flatNestArr(arr){
  return arr.flat();
}
console.log("the Flatted nested array : ",flatNestArr(nestedArray)); 
console.log('-----------------------------------------------');


//7. Remove Duplicates: Create a function that removes duplicate elements from the nested array.
function removeDuplicates(arr) {
  return arr.flat().reduce((unique, num) => {
    if (!unique.includes(num)) {
      unique.push(num);
    }
    return unique;
  }, []);
}

console.log("new array  duplicates removed: ",removeDuplicates(nestedArray));
console.log('-----------------------------------------------------');

//8. Reverse Subarrays: Implement a function to reverse each subarray within the nested array.

function reverseArr(arr){
    return arr.map(subArr => subArr.slice().reverse());
}
console.log("reversed array : ",reverseArr(nestedArray));
console.log('-----------------------------------------------------');



//9. Filter Even Numbers: Write a function to filter out all even numbers from the nested array.
function evenArr(arr){
  return arr.flat().filter((num) => num%2==0);
}

console.log("the even number : ",evenArr(nestedArray));
console.log('-----------------------------------------------------');



//10. Find Longest Subarray: Create a function that returns the longest subarray within the nested array.
function findLongestSubarray(nestedArray) {
  return nestedArray.reduce((longest, subArr) => 
    subArr.length > longest.length ? subArr : longest, []
  );
}

console.log("the longest subarray : ",findLongestSubarray(nestedArray));
