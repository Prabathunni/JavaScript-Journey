a=[
  [10,20],
  [20,30],
  [30,40]
]

console.log(a.flat());
console.log('-----------------------------');

console.log(a);
console.log('-----------------------------');

console.log(a.flat().filter(item => item>10));
console.log('-----------------------------');



const ab= [1,[2,[3,[4,[5]]]]] ;

// for deep arrays use flat infinity method

console.log(ab.flat(Infinity));


