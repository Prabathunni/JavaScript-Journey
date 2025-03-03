//[no,district,+ve cases,death rates,curred rates, 1st dose vaccine, 2nd dose vaccine]

covid_data=[
    [1,'Eranakulam',34000,2000.23000,20000,2000],
    [2,'Edukki',14000,3000,25000,30000,1000],
    [3,'Thrissur',24000,4000,33000,24000,2500],
    [4,'Pathanamthitta',20000,2000,45000,22000,1500],
    [5,'Kozhikode',44000,5000,12000,21000,500],
    [6,'Kottayam',27000,1500,27000,14000,1000],
    [7,'Kollam',14000,2500,25000,18000,2700]
]

// Print thrissur details using find method

console.log(covid_data.find(data=>data[1]=='Thrissur'));
