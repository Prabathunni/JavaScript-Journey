weatherdata=[
  {district:'Thrissur',weather:28},
  {district:'Palakkad',weather:36},
  {district:'Kozhikod',weather:28},
  {district:'Thrissur',weather:29},
  {district:'Palakkad',weather:31},
  {district:'Kozhikod',weather:34},

] //array of objects.


// print district with its highest temp
var newobj ={};


for(let data of weatherdata){
  let distName = data["district"];
  
  let curentTemp = data["weather"];

  if(distName in newobj){
    let oldTemp = newobj[distName];

     if(curentTemp>oldTemp){
         newobj[distName]=curentTemp;
      }
  }
     else{
         newobj[distName]=curentTemp;
      }

}
console.log(newobj);
// {t:29,p:36,k:34} 
// print district with its highest temp

console.log('----------------------------------------------------------------nextpart');


// --------------------- object to Array coversion using object.entries(object-name) -- output will be a nested array

console.log(Object.entries(newobj));
console.log('---------------------------------------------------------------------------------------');

console.log(Object.entries(newobj).sort((n1,n2) => n2[1] - n1[1]));  //sorted values based on temp

console.log('---------------------------------------------------------------------------------------');



// next question

var pattern ='ABCABBC';
// find first recursive character from the given pattern
// output =A

let obj ={};
for(let char of pattern){
  if(char in obj){
    console.log("The first recurisive charac : ",char);
    break;
    
  }
  else{
    obj[char]=1;
  }
}
console.log(obj);

console.log('---------------------------------------------------------------------------------------');

