a=[1,2,3,4,5,6,7,8,9,10];

// find the sum of all elements
console.log(a.reduce((n1,n2)=>n1+n2));

console.log('----------------------------');

// find the highest element
console.log(a.reduce((n1,n2)=> 
  n1>n2? n1:n2
));

console.log('----------------------------');

// find the lowest element
console.log(a.reduce((n1,n2) => n1<n2? n1:n2 ));

console.log('----------------------------');

let arr =[
  [1,'chinnu',100],
  [2,'Arun',200],
  [3,'ponnu',100],
  [4,'manu',100],
  [5,'anu',300]
]

// who got the minimum mark
console.log(arr.reduce((n1,n2) =>    //gives manu (the last value)
     n1[2]<n2[2] ? n1: n2
));                                  

console.log('---------------------------------');

console.log(arr.reduceRight((n1,n2) =>  //gives chinnu (the fist value)
     n1[2]<n2[2] ? n1: n2
));                                  


