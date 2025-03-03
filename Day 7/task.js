// console.log("hari\"".length);


//Explore the includes, startswith and endswith function of a string
let sentence = "The sun rises in the east.";

console.log(sentence.includes("sun"));       
console.log(sentence.startsWith("The"));     
console.log(sentence.endsWith("east."));  

console.log('----------------------------------------');

//Extract the amount out of  the string
//"Please give Rs 10000"

let text1 = "Please give Rs 10000";
let amount = text1.match(/\d+/)[0];  // Extracts the first number
console.log(amount);  // Output: 10000

console.log('----------------------------------------');

//Try to Change  4th character of a given string 
//"Where you able to do it?"

let text02 = "Where you able to do it?";
let newText = text02.substring(0, 3) + "X" + text02.substring(4);
console.log(newText);   // Output: WheXe you able to do it?


console.log('----------------------------------------');

// ########################################################3333

//Note on All string methods with programs 
// Define a sample string
let text = "  JavaScript is awesome!  ";

// 1. Basic Methods
console.log("Length:", text.length); // String length
console.log("Character at index 5:", text.charAt(5)); // Get character at index
console.log("ASCII code at index 5:", text.charCodeAt(5)); // Get ASCII code

// 2. Case Conversion
console.log("Uppercase:", text.toUpperCase()); // Convert to uppercase
console.log("Lowercase:", text.toLowerCase()); // Convert to lowercase

// 3. Trimming and Padding
console.log("Trimmed:", text.trim()); // Remove spaces from both ends
console.log("Trim Start:", text.trimStart()); // Remove leading spaces
console.log("Trim End:", text.trimEnd()); // Remove trailing spaces
console.log("Pad Start:", "5".padStart(3, "0")); // Pad with zeros (e.g., 005)
console.log("Pad End:", "5".padEnd(3, "0")); // Pad at the end (e.g., 500)

// 4. Extracting Substrings
console.log("Slice (0,10):", text.slice(0, 10)); // Extract part of string
console.log("Substring (0,10):", text.substring(0, 10)); // Extract substring
console.log("Substr (4,6):", text.substr(4, 6)); // Extract substring by length

// 5. Search Methods
console.log("Index of 'is':", text.indexOf("is")); // First occurrence
console.log("Last Index of 'is':", text.lastIndexOf("is")); // Last occurrence
console.log("Includes 'awesome':", text.includes("awesome")); // Check if substring exists
console.log("Starts with 'Java':", text.startsWith("Java")); // Check start
console.log("Ends with 'awesome!':", text.endsWith("awesome!")); // Check end

// 6. String Modification
console.log("Replace 'awesome' with 'great':", text.replace("awesome", "great")); // Replace word
console.log("Replace All ' ':", text.replaceAll(" ", "-")); // Replace all spaces with dashes
console.log("Concatenation:", text.concat(" It's powerful!")); // Concatenate strings
console.log("Repeat:", "Hi! ".repeat(3)); // Repeat string 3 times

// 7. Splitting and Converting
console.log("Split by space:", text.split(" ")); // Split into array
console.log("To String:", (123).toString()); // Convert number to string

//##############################################################################3333

//Write a function to check if two strings are anagrams of each other. Anagrams have the same characters but in a different order. For example, "listen" and "silent" are anagrams.
function areAnagrams(str1, str2) {
  // Convert strings to lowercase and remove spaces
  str1 = str1.replace(/\s+/g, '').toLowerCase();
  str2 = str2.replace(/\s+/g, '').toLowerCase();
  
  // Check if sorted characters of both strings are equal
  return str1.split('').sort().join('') === str2.split('').sort().join('');
}

// Example usage
console.log(areAnagrams("listen", "silent")); // Output: true
console.log(areAnagrams("hello", "world"));  // Output: false



//Write a function to count the number of vowels and consonants in a given string.
function countVowelsAndConsonants(str) {
  // Convert string to lowercase and remove non-alphabetic characters
  str = str.toLowerCase().replace(/[^a-z]/g, '');
  
  let vowels = 'aeiou';
  let vowelCount = 0;
  let consonantCount = 0;
  
  for (let char of str) {
      if (vowels.includes(char)) {
          vowelCount++;
      } else {
          consonantCount++;
      }
  }
  
  return { vowels: vowelCount, consonants: consonantCount };
}

console.log(countVowelsAndConsonants("hello world")); // Output: { vowels: 3, consonants: 7 }


// Write a function that capitalizes the first letter of each word in a sentence. For example, "hello world" should become "Hello World.“
function capitalizeWords(sentence) {
  return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

console.log(capitalizeWords("hello world")); // Output: "Hello World"


// Implement a function to perform basic string compression using the counts of repeated characters. For example, the string "aabcccccaaa" would become "a2b1c5a3.“
function compressString(str) {
  let compressed = "";
  let count = 1;
  
  for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i + 1]) {
          count++;
      } else {
          compressed += str[i] + count;
          count = 1;
      }
  }
  
  return compressed.length < str.length ? compressed : str;
}

console.log(compressString("aabcccccaaa")); // Output: "a2b1c5a3"



// Implement a basic string compression without creating a separate function. Use loops and conditional statements to create the compressed string.
let str = "aabcccccaaa";
let compressed = "";
let count = 1;

for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
        count++;
    } else {
        compressed += str[i] + count;
        count = 1;
    }
}

console.log(compressed.length < str.length ? compressed : str); // Output: "a2b1c5a3"



