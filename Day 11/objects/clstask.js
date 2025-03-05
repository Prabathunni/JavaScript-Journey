// create a student object having properties id,name,course,totalmark,year

var student ={
  id:1,
  name: 'Arun',
  course: 'Computer-Science',
  totalMark: 820,
  year: 2,
}

// print name of the student
console.log(student.name);
console.log('------------------------');

// check rank key is present in student object 
console.log("rank" in student);
console.log('------------------------');

// add qualified for higher education or not and update
student.qualifiedForHE=true;
console.log(student);
console.log('------------------------');

// Mark increment by 10
student.totalMark +=10;
console.log(student);
console.log('------------------------');

// Print the details of student object one by one
for(let key in student){
  console.log(`${key} : ${student[key]}`);
  
}

console.log('------------------------next question---------------');




var car ={
  name:'Honda City',
  model:'sedan',
  manufacturer:'Honda',
  price: '1400000'
}

// display the manufacturer info for the car
console.log(car.manufacturer);
console.log('--------------------------');

// check whether the model is present or not
console.log("model" in car);
console.log('--------------------------');

// add property varient
car['varient']=['manual'];
car['varient'].push('automatic')   //to add two values alternatively use #push array method for it


console.log(car);
console.log('--------------------------');


// add property color
car['color']=['black','white','red','blue']; //adding multiple elements for a key
console.log(car);
console.log('--------------------------');



console.log('------------------------next question---------------');

// print count of each item in the given array
// output should be 
// { '10': 2, '20': 2, '30': 2, '40': 2, '50': 3, '60': 1 }

a=[10,10,20,20,30,30,40,40,50,50,50,60]

var countItem ={}

a.map(item => item in countItem ? countItem[item] +=1 : countItem[item] =1 );
console.log(countItem);






