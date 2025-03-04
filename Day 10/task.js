//[rollno, name, class, markofmaths, markofphy,markofchem]
arr=[
    [1,'manu',12,45,65,70],
    [2,'amal',10,67,86,75],
    [3,'sara',12,86,87,90],
    [4,'vimal',10,86,56,93],
    [5,'shaju',12,56,61,70],
    [6,'kavita',10,55,56,60],
]

//1 sort the student in descending order of markofmaths
console.log("the student in descending order of markofmaths: ",arr.sort((mark1,mark2) => mark1[3]-mark2[3]));
console.log('-----------------------------------------------------');


//2 find all students who are in class 10th
const newArr = arr.filter(tem => tem[2]==10);
newArr.forEach(num => console.log(num[1]));
console.log('-----------------------------------------------------');

//3 print the names of all students
arr.forEach(num => console.log(num[1]));
console.log('-----------------------------------------------------');

//4 print the details of kavita
console.log("the details of kavita : ",arr.filter(nam => nam[1]=='kavita'));
console.log('-----------------------------------------------------');


//5 print 1st student who has least mark in physics 
const newArr1 = arr.sort((n1,n2) => n1[4] - n2[4]);
console.log("1st student who has least mark in physics :",newArr1[0]);
console.log('-----------------------------------------------------');

//6 Find which student have highest mark in Chemistry
const newArr2 = arr.sort((n1,n2) => n2[5] - n1[5]);
console.log(" student have highest mark in Chemistry :",newArr2.find(num => num[0]));
console.log('-----------------------------------------------------');

//7 Is amal is present or not?
console.log("Is amal is present or not : ",arr.some(num => num[1]=='amal'));
console.log('-----------------------------------------------------');

//8 print all marks in physics
arr.forEach(num => console.log(num[4]));
console.log('-----------------------------------------------------');

//9 Display only 10th std students names one by one 
const newArr3 = arr.filter(tem => tem[2]==10);
newArr3.forEach(num => console.log(num[1]));
console.log('-----------------------------------------------------');

//10 Is there any student who are studing in 11th std?
console.log(" Is there any student who are studing in 11th std? : ",newArr2.some(num => num[2]==11));
console.log('-----------------------------------------------------');
