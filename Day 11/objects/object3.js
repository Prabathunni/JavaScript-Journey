products=[
  //array of objects
  {pid:100,pname:'apple',band:'5G',price:120000,display:'led'},
  {pid:101,pname:'samsung',band:'5G',price:45000,display:'led'},
  {pid:102,pname:'blackberry',band:'4G',price:50000,display:'led'},
  {pid:103,pname:'nokia',band:'3G',price:1200,display:'lcd'},
  {pid:104,pname:'motorola',band:'4G',price:10000,display:'lcd'},
]


//1. print product name only
products.forEach(data => console.log( data.pname));
console.log('--------------------------------');



//2. print all mobile details whose display is lcd
products.filter(data => data.display=='led').forEach(p => console.log(p));
console.log('--------------------------------');

//3. print 5G mobile phone name
products.filter(data => data.band=='5G').forEach(p => console.log(p.pname));
console.log('--------------------------------');

//4. sort mobile based on price
products.sort((data1,data2) => data1.price - data2.price).forEach(p => console.log(p));
console.log('--------------------------------');


//5. print costly mobile
console.log(products.reduce((d1,d2) => d1.price > d2.price ? d1:d2).pname);
console.log('--------------------------------');


//6. print low cost mobile
console.log(products.reduce((d1,d2) => d1.price < d2.price ? d1:d2).pname);
console.log('--------------------------------');
