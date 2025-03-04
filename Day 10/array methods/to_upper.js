// convert and display text in capital letter

str='luminar';
console.log(str.toUpperCase());
console.log('------------------------------------');


// convert to array  -Array.from()

console.log(Array.from(str));
console.log('------------------------------------');


console.log(Array.from(str).map(char => char.toUpperCase()));
console.log('------------------------------------');



Array.from(str).map(char => char.toUpperCase()).forEach(char => console.log(char));