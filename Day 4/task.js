// write a program to print largest of three numbers


// var array=[90,9922,133];

// var i =0;

// num=0;

// while(i<array.length){ 
//   if(num <= array[i]){
//     num = array[i];
//   }
//   i++;
// }
// console.log(num);




// Write a program  to print the marks of a student in an object using for loop Stud={ Amal=78,Kiran=98,Rahul=87}
// const stud ={
//   Amal:78,
//   Kiran:98,
//   Rahul:87
// }

// for (let i in stud){
//   console.log(`${i} => ${stud[i]}`);
  
// }

// find the largest number in order 

var n1=45;
var n2=70;
var n3=30;

if((n1>n2) && (n1>n3)){
  console.log(`${n1} is largest`);
  if(n2>n3){
    console.log(`${n2} is second largest`);
    console.log(`${n3} is third largest`);
    
  }
  else{
    console.log(`${n3} is second largest`);
    console.log(`${n2} is Third largest`);

  }
  
}

else if((n2>n1) && (n2>n3)){
  console.log(`${n2} is largest`);
  if(n1>n3){
    console.log(`${n1} is second largest`);
    console.log(`${n3} is third largest`);
    
  }
  else{
    console.log(`${n3} is second largest`);
    console.log(`${n1} is Third largest`);

  }
  
}


else if((n3>n1) && (n3>n2)){
  console.log(`${n3} is largest`);
  if(n2>n1){
    console.log(`${n2} is second largest`);
    console.log(`${n1} is third largest`);
    
  }
  else{
    console.log(`${n1} is second largest`);
    console.log(`${n2} is Third largest`);

  }
  
}




