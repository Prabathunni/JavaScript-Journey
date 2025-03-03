// check whether the element is in the array or not


// var arr=[12,22,3,5,34,55,67];
// var element=5;
// flag=0;
// var pos = 0;


// for(let i of arr){
//   if(i==element){
//     flag=1;
//     break;
//   }
// }
// console.log(flag==1?'FOund':'NOt found');
// console.log(pos);



// var expenses =[12000,20000,30000,10000,15000];
// console.log(expenses);

// console.log('----------------------------------total');


// find the total expenses

// sum = 0;

// for(let i of expenses){
//   sum +=i;
// } 
// console.log('total: ',sum);


// find max expense
// console.log('----------------------------------max');

// var max=0;

// for(let i of expenses){
//   if(i>max){
//     max=i;
//   }
// }
// console.log('Max: ',max);


// // find min expense
// console.log('----------------------------------min');

// var min=expenses[0];

// for(let i of expenses){
//   if(i<min){
//     min=i;
//   }
// }
// console.log('Min: ',min);


var arr=[4,5,6]
var total=15;

var newArr=[];

for(let i in arr){
  newArr[i]=total-arr[i];

}

console.log(newArr);
