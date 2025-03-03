//[id,name,designation,location,salary,experience]
employee=[
  [1000,'Neel','Developer','Kochi',25000,3],
  [1001,'Max','Tester','TVM',20000,2],
  [1002,'Vinod','QA','KNR',35000,4],
  [1003,'Vyom','QA','Kochi',45000,5],
  [1004,'Laisha','Tester','TVM',55000,7],
  [1005,'Aahan','Developer','TVM',15000,1],
  [1006,'Aahil','QA','Kochi',25000,3],
  [1007,'Shayan','Developer','KNR',30000,3],
  [1000,'Nihaan','Developer','Kochi',25000,3],
]

//1 Print all employee name 
employee.forEach(element => {
  console.log(element[1]);
});
console.log('----------------------------');

//2 Print total number of employee
console.log("The total number of employee: ",employee.length);
console.log('----------------------------');

//3 Print developer employee details
console.log("developer employee details: ",employee.filter(emp => emp[2]=='Developer'));
console.log('-------------------------------------');

//4 Print all employee details whose salary > 30000
console.log("employee details whose salary > 30000: ",employee.filter(emp => emp[4]>30000));
console.log('-------------------------------------');

//5 Print details of employee Laisha
console.log("details of employee Laisha: ",employee.filter(emp => emp[1]=='Laisha'));
console.log('-------------------------------------');

//6 Sort employee based on descending order of salary
console.log("employee based on descending order of salary: ",employee.sort((emp1,emp2) => emp1[4]-emp2[4]));
console.log('-------------------------------------');

//7 sort employee based on ascending order of experience
console.log("employee based on ascending order of experience: ",employee.sort((emp1,emp2) => emp2[5]-emp1[5]));
console.log('-------------------------------------');

//3 Can you demonstrate how to use the filter() method to create a new array of even numbers from an existing array of integers?
let integerArr =[2,3,4,5,6,7,8,9];
console.log("new array of even numbers: ",integerArr.filter(num => num % 2 ==0));
console.log('-------------------------------------');
//6 Can you provide an example of using the map() method to double each element in an array of numbers?
console.log("double each element in an array of numbers: ",integerArr.map(num => num*2));
console.log('-------------------------------------');

//8 Can you demonstrate how to use the map() method to extract specific properties from an array of objects?
const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Eve', age: 28 }
];
// to extract the name from the array of objects using map method
console.log("the name from the array of objects: ",people.map(person => person.name));

