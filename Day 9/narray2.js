//Nested Array
//print all elements, whose values are less than 10 in given array
a=[
  [1,2],
  [10,22],
  [14,21],
  [3,6],
  [5,9],
  [19,28],
]

var lessArr=[];

for(let num of a){
  for(let i of num){
    if(i<10){
      lessArr.push(i);
    }
  }
}
console.log("The values less than 10 : ",lessArr);


console.log('------------------------------------');


var arr=[2,3,4,5];

// for(let i=0;i<arr.length;i++){
//   for(let j=1;j<arr.length;j++){
//     if(arr[i]+arr[j]==9){
//       console.log(arr[i],arr[j]);
      
//     }
//   }
// }

console.log('--------------------------');

// another way using for of 
for(let i of arr){
  for(let j of arr){
    if(i+j==9){
      console.log(i,j);
      
    }
  }
}