products=[
    [1,'Hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,10],
    [5,'tiger',20,0],
    [6,'unibic',60,20],
    [7,'good day',70,20]
]

// display product name one by one
products.forEach(element => {
  console.log(element[1]);
  
});

console.log('--------------------------');

// print the price of each item
products.forEach(element => {
  console.log(element[2]);
  
});