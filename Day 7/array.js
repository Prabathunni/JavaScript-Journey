const myArray=["car","bike",1000,2000,'hello'];

// to fetch legth of the array

console.log(myArray.length);
console.log('-------------------------------------');

// to fetch every element in an array
console.log(myArray);
console.log('-------------------------------------');

// find elements one by one in an array use for of loop

for(let i of myArray){
  console.log(i);  
}

console.log('-------------------------------------');

for(i=0;i<myArray.length;i++){
  console.log(myArray[i]);  
}

console.log('-------------------------------------');


// to insert element in an array or push element in an array

myArray.push('hai');
console.log("the array after pushed : ",myArray);

console.log('-------------------------------------');

myArray[myArray.length]='arun1010';
console.log(myArray);

console.log('-------------------------------------');

// to find the index of elements of an array

for(i in myArray){
  console.log(i);
  
}
