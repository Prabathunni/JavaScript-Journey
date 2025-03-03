// 1))write a function to find area of a triangle

const areaOfTriangle = (b,h) => 1/2*b*h;
console.log(areaOfTriangle(2,4));


//2)) Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.

function checkPrime(n){
  if (n <= 1) return false; 
  if (n <= 3) return true;  

  if (n % 2 === 0 || n % 3 === 0) return false; 

  for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}

let num = 19;
console.log(checkPrime(num) ? `${num} is a prime number` : `${num} is not a prime number`);



//3)) Write a JavaScript function that checks whether a passed string is palindrome or not?

function checkPali(word){
  word = word.toLowerCase();
  var revWord= word.split("").reverse().join("");
  return revWord == word ? 'palindrome': 'Not palindrome'
}

console.log(checkPali("MadAm"));



//4)) Create an arrow function that squares a given number.

const square =(n) => n**2;
console.log(square(2));

// . Create a Function to print Greeting Message using arrow function.

const greetings = (name) => console.log(`Hello ${name}`);
greetings("rahul");


//5)) Create a Function to Convert Celsius to Fahrenheit using arrow function.
const conversion = (cel) => cel*1.8+32;
console.log(conversion(23));

//6)) Write an anonymous function that takes two numbers as arguments and returns their product.
const product = function(n1,n2){
  return n1*n2;
}
console.log(product(2,3));



//7)) Write a recursive function in JavaScript to calculate the nth Fibonacci number. The Fibonacci sequence is defined as follows: the first two numbers are 0 and 1, and each subsequent number is the sum of the two preceding ones

function fibonacci(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1; 

  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6));
