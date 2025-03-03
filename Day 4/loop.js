// var n=20;

// for(i=1;i<=n;i++){
//   console.log(i,".Hello Guysss");
  
// }



// ################## display sum of n natural number 1 to 100

// var limit =100;
// var sum = 0;

// for(i=1;i<=limit;i++){

//     sum += i;

// }
// console.log(sum);


// #################################################### for in loop

// const student = {
//   sname:"Arun",
//   class: 8,
//   age:12
// }

// for(let i in student){

//   console.log(`${i} ===> ${student[i]}`);
  
// }


// ###########example q

// const salaries={
//   jack:24000,
//   paul:34000,
//   monica:55000
// }

// for(let i in salaries){
//   console.log(i,": $",salaries[i]);
  
// }


// ################################## for of loop uses in array

// const students = ['John','Sara','JOe'];

// // Of for values in array
// for(let i of students){
//   console.log(i);
  
// }


// // In for index of array
// for(let i in students){
//   console.log(i);
  
// }


// ############### for of loop for string

// const string = 'code';

// for(let i of string){
//   console.log(i);
  
// }



// ################## while loop

// var i=1;

// while(i<=5){
//   console.log(i);
//   i++;
  
// }



//  1 t0 10 --- print odd number


// var i=1;

// while(i<=10){
//   console.log(i);
//   i +=2;
  
// }


// ######################################### factorial of number of 4

// var i=4;
// var mul = 1;

// while(i>0){
//   mul=mul*i;
//   i--;

// }
// console.log(mul);


// ##################################### do while loop


// var i=1;
// var n=5;

// do{
//   console.log(i);
//   i++;
  
// }while(i<=n);


// ##################using do while multiplicaition table of 5

// table =5;
// var i = 1;
// result = 0;
// do{

//   result = table*i
//   console.log(`${i}x ${table}= ${result}`);
//   i++;
  

// }while(i<=10)


for(let i=1;i<=5;i++){
  if(i==3){
    break;
  }
  console.log(i);
  
}

for(let i=1;i<=5;i++){
  if(i==3){
    continue;
  }
  console.log(i);
  
}

