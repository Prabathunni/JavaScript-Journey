// try catch
// expr = '23*76+87'

// try{
//   console.log("try block");
//   console.log(eval(expr));

  
  
// }
// catch{
//   console.log("catch block");
//   console.log("error");
  
  
// }

// console.log('Data transmitted: ' +eval(expr));




// try catch and finally 

expr = '/23*76+87'

try{
  console.log("try block");
  console.log(eval(expr));

  
  
}
catch{
  console.log("catch block");
  console.log("error");
  expr='23*76+87';
  console.log(eval(expr)); //runtime error solve
    
}
finally{
  console.log("finally block");
  console.log("Always executed block");
  
  
}

console.log('Data transmitted: ' +eval(expr));


