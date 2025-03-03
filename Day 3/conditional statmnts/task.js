//##################### Use logical operators to find whether the age of a person lies between 10 and 20?

var age1 = 123;

if ((age1>=10)&&(age1<=20)) {
  console.log("The age of person lies between 10 and 20");
  
}
else{
  console.log("The age of person not lies between 10 and 20");
  
}


// ##########################.Find whether a number is divisible by 2 and 3

var n1=3;

if ((n1 % 2 ==0)&& (n1 % 3 ==0)) {
  console.log("The number is divisible by 2 and 3");
  
}

else{
  console.log("The number is NOT divisible by 2 and 3");

}


// ############################.Find whether a number is divisible by either 2 or 3

var n1=6;

if ((n1 % 2 ==0) || (n1 % 3 ==0)) {

  if ((n1 % 2 ==0)&& (n1 % 3 ==0)) {
     console.log("The number is divisible by 2 and 3");
  }

  else if (n1 % 2 ==0) {
    console.log("The number is divisible by 2");
    
  }
  
  else{
    console.log("The number is divisible by 3");
  
  }

}

else{
  console.log("the number is not divisible by both 2 and 3");
  
}



// ###########################.Print "You can Drive" or "You can't Drive" based on age being greater than 18 using ternary operator

var myAge=18;

var checkAge = myAge>=18?"You Can Drive":"YOu can't Drive";

console.log(checkAge);


