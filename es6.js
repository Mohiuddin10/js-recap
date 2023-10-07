// 1. let/const 
// 2. defautl perameter of function 
const sum = (a = 10, b = 5) => {
    const sum = a + b;
    return sum;
};
console.log(sum(20,30));
console.log(sum());
console.log(sum(12));

// 3. Template string, multiple line string, dynamic string 
const firstName = 'Mohammad';
const lastName = 'Mohiuddin';
const fullName = `Hello there,
My name is ${firstName} ${lastName}`;
console.log(fullName);