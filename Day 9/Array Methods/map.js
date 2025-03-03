a=[10,11,12,13,14];

// old way to find square of all elements in a array using function
// function square(num){
//   return num**2;
// }

console.log('-------------------------');

// new way using map (array method)
console.log(a.map(num=>num**2));


// multiply all the values in an array with 10
var number = [4,36,81,9];

console.log(number.map(n=>n*10));

console.log('-------------------------');

// find the squares of the elements in the array
console.log(number.map(square=>Math.sqrt(square)));
