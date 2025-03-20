const count = true;

let countValue = new Promise(function(resolve,reject){
  if(count){
    resolve("There is no count value");
  }
  else{
    reject("hehe no count value");
  }
});

console.log(countValue);  //Promise
