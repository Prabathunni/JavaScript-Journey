var employee ={
  id:1,
  name: 'john',
  designation: 'Developer',
  salary : 35000,
  experience : 4
}

// display everything of employee object
console.log(employee);
console.log('----------------------------------');


// fetch single item from the object
console.log(employee['name']);          //method 1 to fetch item
console.log('----------------------------------'); 

console.log(employee.name);              //method 2 to fetch item
console.log('----------------------------------'); 


// to check whether a particular key is present in the object
console.log("experience" in employee);                        //use for in loop to iterate through the keys in the object
console.log('----------------------------------'); 
console.log("gender" in employee);



// To add a value to the object we can use two methods

employee['gender'] = 'male';      // method 1
console.log(employee);
console.log('----------------------------------'); 

employee.isVaccinated =true;      // method 2
console.log(employee);
console.log('----------------------------------'); 

employee.vaccine = 'covisheild';      
console.log(employee);
console.log('----------------------------------'); 


// to update a value in the object
employee.vaccine='covaxin';
console.log(employee);
console.log('----------------------------------'); 


// increment salary by 5k
employee.salary +=5000;
console.log(employee);
console.log('----------------------------------'); 


// print values from the object one by one
for(let key in employee){
  console.log(`${key} : ${employee[key]}`);
  
}
console.log('----------------------------------'); 

// to delete a key-value from the object 
delete employee.experience;
console.log(employee);
console.log('----------------------------------'); 







