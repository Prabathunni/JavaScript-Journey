
// 1 Print all the duplicate elements in an array
var	arr=[10,6,7,8,10,5,7,3,5];

var duplicate=[];
var seen =[];

for(let i of arr){
  if(seen.includes(i)){
    duplicate.push(i)
  }
  else{
    seen.push(i)
  }
}

console.log("duplicate element in the array:",duplicate);

console.log('-----------------------------------------------');

// Find common elements in both arrays
let arr1=[5,7,8,3,];
let arr2=[7,8,2,1];

let common=[];

for(let i in arr1){
  for(let j in arr2){
    if(arr1[i]==arr2[j]){
        common.push(arr1[i])
    }
  }
}
console.log("Common elements in the array:",common);



