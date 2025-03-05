text ='one two one two one';

// for the about string creat an object like this
//  { one: 3, two: 2 }


words = text.split(" ");
console.log(words);
console.log('---------------------------------------');


var wObject ={} //created a empty object

words.map(word => word in wObject ? wObject[word] +=1 : wObject[word] =1); //we can use array method map 

console.log(wObject);

