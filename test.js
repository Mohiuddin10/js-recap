// const num = [12,13,23];
// console.log(Array.isArray(num));
// console.log(num.includes(232));
// const num2 = [24, 23, 21];
// const newNum = num.concat(num2);
// console.log(newNum);

// const num = [0, 1, 2, 3, 4, 5, 6, 7];
// console.log(num.slice(1,5));
// const partial = num.splice(2,4);
// console.log(partial);
// console.log(num);
// const i = 4;
// if (i != 5 ){
//     console.log('ok done');
// }


// let sum=0; 

// for( let i = 0; i<=3;i++){ 

//     sum = sum + i; 
    

// }
// console.log(sum);

// var student = { name : "Yo Mama", age : 17 };

// student = delete student.age;
// console.log(remove age);
// console.log(student);

// function min(nums) { return Math.min(nums) }
// console.log(min( [1,3,2 ]));

const cube=x=> x*x*x; 
console.log(cube(2))

const [a, b] = [1,2,3,4,45,5]; 
console.log(a+b);

const {x, y, z} = {x: 1, y1: 2, z: 3};
console.log(y);

const nums = [1,2,3,4,5];
let output = nums.filter(n => n%2);
console.log(output);