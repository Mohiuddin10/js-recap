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

// 4. Arrow function 

// 5. Spread operator 
const max = Math.max(1, 4, 8);
console.log(max);
const num = [ 1, 3, 5, 8, 9 ];
console.log(Math.max(...num));

const num2 = num;
num2.push(20);
console.log(num);

const num3 = [...num];
num3.push(22);
console.log(num);
console.log(num3);

// 6. Destructure 
const student = {
    name: 'Mohammad Mohiuddin',
    age: 31,
    subject: 'Cumputer Science'
}

const {name, age, subject} = student;

const [ first, secound ] = [ 12, 20 ];

// 7. Keys, values, entries, delete, seal, freeze 



// test 
// delete a key of obj 
const mobile = {
    name: 'samsung',
    model: 's10'
}

delete mobile.model;
console.log(mobile);

const obj = { foo: 1 };
obj.bar = 2;
obj.sar =3;
console.log(obj);