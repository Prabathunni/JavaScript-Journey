

// function linearSearch(array,toFind){

//   for(let i=0;i<array.length;i++){
//     if(array[i]==toFind){
//       return i;
//     }
//   }
//   return -1;
// }

// console.log(linearSearch([1,2,3,4,5],7));


// TO find a word from an array use NULL in return

function linearSearch(array,toFind){

  for(let i in array){
    if(array[i]==toFind){
      return i;
    }
  }
  return null;
}

console.log(linearSearch(["janu","Rejoice","sooraj"],"janu"));



