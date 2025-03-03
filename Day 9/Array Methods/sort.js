var vehicle=['Bus','car','bike','Car'];

console.log(vehicle.sort());
console.log(vehicle.reverse());
console.log('--------------------------');

// given an array of numbers and perform sorting
var points = [40,100,1,2,5,25,10];
console.log(points.sort((n1,n2) => n1-n2));

console.log(points);

// find the lowest number
console.log(points[0]);
console.log('--------------------------');

// find the highest number
console.log(points.sort((n1,n2) => n2-n1));
console.log('--------------------------');

console.log(points[0]);

