// [id,name,price,stock]
products=[
    [1,'Hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,10],
    [5,'tiger',20,0],
    [6,'unibic',60,20],
    [7,'good day',70,20]
]

//1. Display all products name
products.forEach(nam => console.log(nam[1]));
console.log('---------------------------------');

//2. Display list of products under 50rs 
const new1 = products.filter(num => num[2]<50);
new1.forEach(num => console.log(num[1]))
console.log('---------------------------------');

//3. Print details of 'oreo' product
console.log(products.find(nam => nam[1]=='oreo'));
console.log('---------------------------------');

//4. Display most coslty product details
const new2 = products.sort((n1,n2) => n2[2] - n1[2]);
console.log("most coslty product details : ",new2[0]);
console.log('---------------------------------');

//5. Display out of stock product details
console.log("out of stock product details :",products.filter(nam => nam[3]==0));
console.log('---------------------------------');

//6. Display print details of 4th product 
console.log("print details of 4th product  : ",products[4]);
console.log('---------------------------------');

//7. sort products details based on product availability stock by desending
console.log("products details based on product availability stock by desending : ",products.sort((n1,n2) => n2[3] - n1[3]));
console.log('---------------------------------');

//8. Display products having maximum availabile stock
const new3 = products.sort((n1,n2) => n2[3] - n1[3]);
console.log("products having maximum availabile stock: ",new3[0]);
console.log('---------------------------------');


//9. Display products having minimum availabile stock
const new4 = products.sort((n1,n2) => n1[3] - n2[3]);
console.log("products having minimum availabile stock: ",new4[0]);
console.log('---------------------------------');

//10. Sort the products based on rate by ascending order
console.log("the products based on rate by ascending order : ",products.sort((n1,n2) => n1[2] - n2[2]));
console.log('---------------------------------');
