const lines = 'sada sada kala kala, hani tumi kala kala';
const splitLine = lines.split('k')
const sliceLine = lines.slice(5,10)
console.log(sliceLine); 
const index = 5;
const index3 = lines.charAt(index);
console.log(index3);

let trimTest = '     Hello World    ';
console.log(trimTest.trimEnd());
const numberItem = [12,23,34,45,56];
console.log(numberItem.join('-'));