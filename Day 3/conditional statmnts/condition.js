// let a = 5;

// if(a>0){
//   console.log("The number is postitive");
  
// }



// ####################### find radius of a circle 

// var r=3;

// const pi=3.14;

// var area;

// if (r>0){
//   area = pi*r*r;
//   console.log("ARea of circle: "+area);
  
// }


// #################### check the are using Math library

// var radius = 10;
// var area = Math.PI*radius*radius;

// if(area>0){
//   console.log("The area of circle = "+Math.ceil(area));
  
// }


// ###################3 if else statements anf if else if else

// var n = 5;

// if(n > 0){
//   console.log("The number is positive");
  
// }
// else if(n==0){
//   console.log("THe number is Zero");
  
// }
// else{
//   console.log("The value is negative");
  
// }



// ###########check whether the two numbers are equal,less than or greater than zero

// var n1=-7;
// var n2=6;

// if(n1==n2){
//   console.log("the numbers are equal");
  
// }

// else if((n1>0) && (n2>0)){
//   console.log("The numbers are greater than zero");
  
  
// }
// else{
//   console.log("the numbers are lesser than zero ");
  
// }



// ############################## nested if statements

var n1= -6;
var n2= 6;

if(n1==n2){
  
    if ((n1<0)&&(n2<0)) {
      console.log("The numbers are lesser than zero");
      
    }
    else{
      console.log("The numbers are greater than zero");
      
    }
  console.log("The Number are equal");
  
}

else{

   if ((n1<0)&&(n2<0)) {
      console.log("The numbers are lesser than zero");
    }

  else{
    console.log("The numbers are greater than zero");
    
  }

  console.log(`The numbers are not equal and the numbers are ${n1} and ${n2}`);
  
}