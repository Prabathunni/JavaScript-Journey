//[no,district,+ve cases,death rates,curred rates, 1st dose vaccine, 2nd dose vaccine]
covid_data=[
  [1,'Eranakulam',34000,2000,23000,20000,2000],
  [2,'Idukki',14000,3000,25000,30000,1000],
  [3,'Thrissur',24000,4000,33000,24000,2500],
  [4,'Pathanamthitta',20000,2000,45000,22000,1500],
  [5,'Kozhikode',44000,5000,12000,21000,500],
  [6,'Kottayam',27000,1500,27000,14000,1000],
  [7,'Kollam',14000,2500,25000,18000,2700]
]


//1. Find which district having highest +ve case?
const ascendArr = covid_data.sort((dist1,dist2) => dist2[2] - dist1[2]);
console.log("district having highest +ve case: ",ascendArr[0]);
console.log('----------------------------------------------');


//2. Find which district having highest 1st dose vaccine?
const ascendArr1 = covid_data.sort((dist1,dist2) => dist2[5] - dist1[5]);
console.log("district having highest 1st dose vaccine: ",ascendArr1[0]);
console.log('----------------------------------------------');

//3. Find which district having lowest death rate?
const descArr1 = covid_data.sort((dist1,dist2) => dist1[3] - dist2[3]);
console.log("district having lowest death rate: ",descArr1[0]);
console.log('----------------------------------------------');

//4. Sort the data with +ve case in desending order
const descArr2 = covid_data.sort((dist1,dist2) => dist1[2] - dist2[2]);
console.log("the data with +ve case in desending order: ",descArr2);
console.log('----------------------------------------------');

//5. sort district with 1st dose vaccine
const descArr3 = covid_data.sort((dist1,dist2) => dist1[5] - dist2[5]);
console.log("district with 1st dose vaccine: ",descArr3);
console.log('----------------------------------------------');

//6. print total number of curred cases
console.log("total number of curred cases: ",covid_data.reduce((sum , dist) => sum + dist[4],0));
console.log('----------------------------------------------');

//7. print total curred cases in Idukki
const currIdukki = covid_data.find(dist => dist[1]=='Idukki');
console.log("total curred cases in Idukki: ",currIdukki[4]);
console.log('----------------------------------------------');

//8. Is any district having more than 27000 +ve cases -
console.log(covid_data.some(dist => dist[2]>=27000));
