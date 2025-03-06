const countries = [
  { name: 'United States', population: 331002651, continent: 'North America', capital: 'Washington, D.C.' },
  { name: 'China', population: 1439323776, continent: 'Asia', capital: 'Beijing' },
  { name: 'Brazil', population: 212559417, continent: 'South America', capital: 'Brasília' },
  { name: 'United Kingdom', population: 67886011, continent: 'Europe', capital: 'London' },
  { name: 'South Africa', population: 59308690, continent: 'Africa', capital: 'Pretoria, Cape Town, Bloemfontein' },
];

// 1. Print the names of all countries.
countries.forEach(nam => console.log(nam.name));
console.log('------------------------------------------');

// 2. Find the country with the largest population.
console.log( countries.reduce((dist1,dist2) => dist1.population > dist2.population ? dist1:dist2).name);
console.log('------------------------------------------');

// 3. Find the total population of all countries.
console.log(countries.reduce((acc,totalsum) => acc + totalsum.population,0));
console.log('------------------------------------------');

// 4. Find all countries in a specific continent (e.g., Asia).
countries.filter(nam => nam.continent=='Asia').forEach(p => console.log(p.name));
console.log('------------------------------------------');

// 5. Print the names of capitals with more than one city.
console.log(countries.filter(country => country.capital.includes(',')).map(country => country.capital) );
console.log('------------------------------------------');

// 6. Sort countries based on population (descending order).
countries.sort((country1,country2) => country2.population - country1.population).forEach(country => console.log(country.name));
console.log('------------------------------------------');

// 7. Find the country with the smallest population.
console.log(countries.reduce((c1,c2) => c1.population<c2.population? c1:c2).name);
console.log('------------------------------------------');

// 8. Find the country with the longest name.
console.log(countries.reduce((long,country) => country.name.length > long.name.length ? country : long ).name);
console.log('------------------------------------------');

// 9. Find the country with the shortest name.
console.log(countries.reduce((long,country) => country.name.length < long.name.length ? country : long ).name);
console.log('------------------------------------------');

// 10. Find the average population of all countries.
const totalPopulation = countries.reduce((acc, country) => acc + country.population, 0);
const averagePopulation = totalPopulation / countries.length;

console.log(averagePopulation);
