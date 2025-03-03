


// function binarySearch(array,toFind){

//   let left =0;
//   let right =array.length-1;

//   while(left<=right){
//     const mid = Math.floor((right+left)/2);
//     if(array[mid]==toFind){
//       return mid;
//     }
//     if(array[mid]<toFind){
//       left=mid+1;
//     }
//     else{
//       right=mid-1;
//     }
//   }
//   return -1;


// }

// console.log(binarySearch([2,3,4,5],8));




// first we should sort the array to perform binary search

var arr =[2,4,33,44,5,1];

console.log(arr);

arr.sort((n1,n2)=>n1-n2);
console.log('--------------------------');

console.log(arr);


